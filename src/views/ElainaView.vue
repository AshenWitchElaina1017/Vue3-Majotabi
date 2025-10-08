<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
    <!-- 顶部工具栏 -->
    <div class="bg-white/95 backdrop-blur-sm border-b border-gray-200/80 px-4 md:px-6 py-3 shadow-sm">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
            伊
          </div>
          <div>
            <h2 class="font-semibold text-gray-800">灰之魔女 · 伊蕾娜</h2>
            <p class="text-xs text-gray-500">一个路过的旅人</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="handleClearMessages"
            class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            title="清空对话"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 聊天消息区域 -->
    <div class="flex-1 overflow-y-auto p-4 md:p-6 space-y-4" ref="chatContainer">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="[
          'flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500',
          msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
        ]"
      >
        <!-- 头像 -->
        <div class="flex-shrink-0">
          <div
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-lg',
              msg.role === 'user'
                ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                : 'bg-gradient-to-br from-purple-400 to-blue-400'
            ]"
          >
            {{ msg.role === 'user' ? '你' : '伊' }}
          </div>
        </div>

        <!-- 消息内容 -->
        <div class="flex-1 max-w-[75%] md:max-w-[65%] group">
          <div
            :class="[
              'rounded-2xl px-5 py-3.5 transition-all duration-300 relative',
              msg.role === 'user'
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white text-gray-800 shadow-lg shadow-gray-200/50 border border-gray-100'
            ]"
          >
            <div class="whitespace-pre-wrap break-words leading-relaxed">{{ msg.content }}</div>

            <!-- 消息操作按钮 -->
            <div
              :class="[
                'absolute -top-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                msg.role === 'user' ? 'right-0' : 'left-0'
              ]"
            >
              <button
                @click="copyMessage(msg.content)"
                class="p-1.5 bg-white hover:bg-gray-100 rounded-lg shadow-md text-gray-600 hover:text-gray-800 transition-colors"
                title="复制"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                v-if="msg.id !== 'initial'"
                @click="handleDeleteMessage(msg.id)"
                class="p-1.5 bg-white hover:bg-red-50 rounded-lg shadow-md text-gray-600 hover:text-red-600 transition-colors"
                title="删除"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <!-- 时间戳 -->
          <div :class="['text-xs text-gray-400 mt-1.5 px-1', msg.role === 'user' ? 'text-right' : 'text-left']">
            {{ formatTime(msg.timestamp) }}
          </div>
        </div>
      </div>

      <!-- 加载动画 -->
      <div v-if="isLoading" class="flex gap-3 animate-in fade-in duration-300">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold shadow-lg">
            伊
          </div>
        </div>
        <div class="bg-white rounded-2xl px-5 py-3.5 shadow-lg shadow-gray-200/50 border border-gray-100">
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
            <div class="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-bounce [animation-delay:150ms]"></div>
            <div class="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-bounce [animation-delay:300ms]"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="border-t border-gray-200/80 bg-white/95 backdrop-blur-sm p-4 md:p-6 shadow-lg">
      <div class="flex gap-3 max-w-4xl mx-auto">
        <input
          v-model="inputMessage"
          @keydown="handleKeyDown"
          type="text"
          placeholder="和伊蕾娜聊天... (Enter发送,Ctrl+Enter换行)"
          class="flex-1 px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-200 placeholder:text-gray-400"
          :disabled="isLoading"
        />
        <button
          @click="handleSendMessage"
          :disabled="isLoading || !inputMessage.trim()"
          class="px-6 md:px-8 py-3.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium rounded-full
                 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/30
                 active:scale-95
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
                 transition-all duration-200"
        >
          发送
        </button>
      </div>

      <!-- 错误提示 -->
      <div v-if="lastError" class="max-w-4xl mx-auto mt-3">
        <div class="bg-red-50 border border-red-200 rounded-lg px-4 py-2 flex items-center justify-between">
          <span class="text-sm text-red-700">{{ lastError }}</span>
          <button
            @click="lastError = null"
            class="text-red-400 hover:text-red-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChat } from '@/composables/useChat'

const chatContainer = ref<HTMLElement | null>(null)
const inputMessage = ref('')

const {
  messages,
  isLoading,
  lastError,
  sendMessage,
  clearMessages,
  deleteMessage
} = useChat()

// 滚动到底部
async function scrollToBottom() {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTo({
      top: chatContainer.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

// 监听消息变化,自动滚动
watch(messages, () => {
  scrollToBottom()
}, { deep: true })

// 发送消息处理
async function handleSendMessage() {
  if (!inputMessage.value.trim() || isLoading.value) return

  const message = inputMessage.value
  inputMessage.value = ''
  await sendMessage(message)
}

// 键盘事件处理
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.ctrlKey && !event.shiftKey) {
    event.preventDefault()
    handleSendMessage()
  } else if (event.key === 'Enter' && event.ctrlKey) {
    // Ctrl+Enter 插入换行
    const textarea = event.target as HTMLInputElement
    const start = textarea.selectionStart || 0
    const end = textarea.selectionEnd || 0
    inputMessage.value = inputMessage.value.substring(0, start) + '\n' + inputMessage.value.substring(end)
  }
}

// 清空对话
function handleClearMessages() {
  if (confirm('确定要清空所有对话记录吗?')) {
    clearMessages()
  }
}

// 删除消息
function handleDeleteMessage(id: string) {
  deleteMessage(id)
}

// 复制消息
async function copyMessage(content: string) {
  try {
    await navigator.clipboard.writeText(content)
    // 可以添加一个提示
  } catch (error) {
    console.error('复制失败:', error)
  }
}

// 格式化时间
function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  // 一分钟内
  if (diff < 60000) {
    return '刚刚'
  }

  // 一小时内
  if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}分钟前`
  }

  // 今天
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  }

  // 昨天
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  if (date.toDateString() === yesterday.toDateString()) {
    return `昨天 ${date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`
  }

  // 更早
  return date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
}
</script>
