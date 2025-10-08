import { ref, watch } from 'vue'
import OpenAI from 'openai'

export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
  id: string
}

const STORAGE_KEY = 'elaina_chat_history'

// 初始化问候语
const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: '在那边的你,是在说哪位美丽又善良、人见人爱的天才魔女呢?……没错,就是我。啊,开玩笑的。我的名字是伊蕾娜,一个路过的旅人。请多指教。',
  timestamp: Date.now(),
  id: 'initial'
}

// 从 localStorage 加载历史记录
function loadMessages(): Message[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const messages = JSON.parse(stored)
      return Array.isArray(messages) && messages.length > 0 ? messages : [INITIAL_MESSAGE]
    }
  } catch (error) {
    console.error('加载历史记录失败:', error)
  }
  return [INITIAL_MESSAGE]
}

// 保存到 localStorage
function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  } catch (error) {
    console.error('保存历史记录失败:', error)
  }
}

export function useChat() {
  const messages = ref<Message[]>(loadMessages())
  const isLoading = ref(false)
  const lastError = ref<string | null>(null)

  // 初始化 OpenAI 客户端
  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    baseURL: import.meta.env.VITE_OPENAI_API_BASE,
    dangerouslyAllowBrowser: true
  })

  // 监听消息变化,自动保存
  watch(messages, (newMessages) => {
    saveMessages(newMessages)
  }, { deep: true })

  // 发送消息
  async function sendMessage(content: string): Promise<void> {
    if (!content.trim() || isLoading.value) return

    lastError.value = null
    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
      id: `user-${Date.now()}`
    }

    messages.value.push(userMessage)
    isLoading.value = true

    try {
      const response = await client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_API_MODEL,
        messages: [
          {
            role: 'system',
            content: import.meta.env.VITE_SYSTEM_MESSAGE
          },
          ...messages.value.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ]
      })

      const assistantContent = response.choices[0]?.message?.content || '抱歉,我好像走神了...'

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantContent,
        timestamp: Date.now(),
        id: `assistant-${Date.now()}`
      }

      messages.value.push(assistantMessage)
    } catch (error) {
      console.error('API调用失败:', error)
      lastError.value = error instanceof Error ? error.message : '未知错误'

      const errorMessage: Message = {
        role: 'assistant',
        content: '唔...看来魔法出了点问题。能再试一次吗?',
        timestamp: Date.now(),
        id: `error-${Date.now()}`
      }

      messages.value.push(errorMessage)
    } finally {
      isLoading.value = false
    }
  }

  // 清空对话
  function clearMessages() {
    messages.value = [INITIAL_MESSAGE]
    lastError.value = null
  }

  // 删除指定消息
  function deleteMessage(id: string) {
    const index = messages.value.findIndex(msg => msg.id === id)
    if (index > 0) { // 不允许删除初始问候语
      messages.value.splice(index, 1)
    }
  }

  // 重新生成最后一条回复
  async function regenerateLastResponse() {
    // 找到最后一条用户消息
    const lastUserMessageIndex = messages.value.findLastIndex(msg => msg.role === 'user')
    if (lastUserMessageIndex === -1) return

    // 删除该用户消息之后的所有消息
    messages.value = messages.value.slice(0, lastUserMessageIndex + 1)

    // 重新发送最后一条用户消息
    const lastUserMessage = messages.value[lastUserMessageIndex]
    messages.value.pop() // 移除用户消息,待会重新添加

    await sendMessage(lastUserMessage.content)
  }

  return {
    messages,
    isLoading,
    lastError,
    sendMessage,
    clearMessages,
    deleteMessage,
    regenerateLastResponse
  }
}
