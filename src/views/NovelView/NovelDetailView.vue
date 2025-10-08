<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto animate-in fade-in duration-300">
    <div class="min-h-screen flex items-start justify-center p-4 py-8">
      <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden animate-in zoom-in-95 duration-300">
        <!-- 顶部封面区域 -->
        <div class="relative">
          <img
            v-if="currentNovel"
            :src="currentNovel.image"
            :alt="currentNovel.title"
            class="w-full h-48 md:h-64 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <button
            @click="goBack"
            class="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 内容区域 -->
        <div v-if="currentNovel" class="p-6 md:p-10">
          <!-- 标题信息 -->
          <div class="mb-8">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full mb-4">
              第 {{ currentNovel.id }} 卷
            </span>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ currentNovel.title }}
            </h1>
            <p class="text-gray-600 leading-relaxed">
              {{ currentNovel.des }}
            </p>
          </div>

          <!-- 加载中状态 -->
          <div v-if="loading" class="text-center py-16">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            <p class="mt-4 text-gray-600">正在加载小说内容...</p>
          </div>

          <!-- 第24卷暂无中文版提示 -->
          <div v-else-if="currentNovel.id === 24" class="text-center py-16">
            <div class="text-6xl mb-4">📚</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">暂无中文版</h2>
            <p class="text-gray-600">第24卷中文版尚未发布,敬请期待</p>
          </div>

          <!-- 错误状态 -->
          <div v-else-if="error" class="text-center py-16">
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">加载失败</h2>
            <p class="text-gray-600 mb-6">{{ error }}</p>
            <button
              @click="loadNovelContent"
              class="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              重试
            </button>
          </div>

          <!-- 小说正文 -->
          <div v-else-if="novelContent" class="prose prose-lg max-w-none">
            <div class="novel-content text-gray-800 leading-loose whitespace-pre-wrap">
              {{ novelContent }}
            </div>
          </div>

          <!-- 返回按钮 -->
          <div class="mt-10 flex gap-4 sticky bottom-0 bg-white pt-4 pb-2">
            <button
              @click="goBack"
              class="flex-1 md:flex-none px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 active:scale-95"
            >
              返回列表
            </button>
          </div>
        </div>

        <!-- 未找到小说 -->
        <div v-else class="p-12 text-center">
          <div class="text-6xl mb-4">🔍</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">找不到该卷小说</h2>
          <p class="text-gray-600 mb-6">抱歉,您访问的小说卷不存在</p>
          <button
            @click="goBack"
            class="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transition-all duration-200"
          >
            返回列表
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import novelData from '@/data/novelData'

const route = useRoute()
const router = useRouter()

const novelContent = ref<string>('')
const loading = ref(false)
const error = ref<string>('')

const currentNovel = computed(() => {
  const id = Number(route.params.id)
  return novelData.find((novel: any) => novel.id === id)
})

// 将卷ID映射到文件名和编码
const getNovelFileInfo = (id: number): { fileName: string; encoding: string } | null => {
  const volumeMap: { [key: number]: { fileName: string; encoding: string } } = {
    1: { fileName: '魔女之旅 第一卷 utf-16 le.txt', encoding: 'utf-16le' },
    2: { fileName: '魔女之旅 第二卷 utf-16 le.txt', encoding: 'utf-16le' },
    3: { fileName: '魔女之旅 第三卷 utf-16 le.txt', encoding: 'utf-16le' },
    4: { fileName: '魔女之旅 第四卷 utf-16 le.txt', encoding: 'utf-16le' },
    5: { fileName: '魔女之旅 第五卷 utf-16 le.txt', encoding: 'utf-16le' },
    6: { fileName: '魔女之旅 第六卷 utf-16 le.txt', encoding: 'utf-16le' },
    7: { fileName: '魔女之旅 第七卷 utf-16 le.txt', encoding: 'utf-16le' },
    8: { fileName: '魔女之旅 第八卷 utf-16 le.txt', encoding: 'utf-16le' },
    9: { fileName: '魔女之旅 第九卷 utf-16 le.txt', encoding: 'utf-16le' },
    10: { fileName: '魔女之旅 第十卷 utf-16 le.txt', encoding: 'utf-16le' },
    11: { fileName: '魔女之旅 第十一卷 utf-16 le.txt', encoding: 'utf-16le' },
    12: { fileName: '魔女之旅 第十二卷 utf-16 le.txt', encoding: 'utf-16le' },
    13: { fileName: '魔女之旅 第十三卷 utf-16 le.txt', encoding: 'utf-16le' },
    14: { fileName: '魔女之旅 第十四卷 utf-16 le.txt', encoding: 'utf-16le' },
    15: { fileName: '魔女之旅 第十五卷 短篇集 utf-16 le.txt', encoding: 'utf-16le' },
    16: { fileName: '魔女之旅 第十六卷 utf-16 le.txt', encoding: 'utf-16le' },
    17: { fileName: '魔女之旅 第十七卷 utf-16 le.txt', encoding: 'utf-16le' },
    18: { fileName: '魔女之旅 第十八卷 utf-16 le.txt', encoding: 'utf-16le' },
    19: { fileName: '魔女之旅 第十九卷 utf-16 le.txt', encoding: 'utf-16le' },
    20: { fileName: '魔女之旅 第二十卷 utf-16 le.txt', encoding: 'utf-16le' },
    21: { fileName: '魔女之旅 第二十一卷 utf-16 le.txt', encoding: 'utf-16le' },
    22: { fileName: '魔女之旅 第二十二卷 utf-16 le.txt', encoding: 'utf-16le' },
    23: { fileName: '魔女之旅 第二十三卷 utf-16 le.txt', encoding: 'utf-16le' },
  }
  return volumeMap[id] || null
}

// 加载小说内容
const loadNovelContent = async () => {
  if (!currentNovel.value || currentNovel.value.id === 24) {
    return
  }

  loading.value = true
  error.value = ''
  novelContent.value = ''

  try {
    const fileInfo = getNovelFileInfo(currentNovel.value.id)
    if (!fileInfo) {
      throw new Error('无法找到对应的小说文件')
    }

    const response = await fetch(`/light-novel/${fileInfo.fileName}`)
    if (!response.ok) {
      throw new Error('文件加载失败')
    }

    // 使用 UTF-16 LE 解码器处理所有文本文件
    const arrayBuffer = await response.arrayBuffer()
    const decoder = new TextDecoder('utf-16le')
    novelContent.value = decoder.decode(arrayBuffer)
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载小说内容时出错'
  } finally {
    loading.value = false
  }
}

// 监听路由变化,重新加载内容
watch(() => route.params.id, () => {
  loadNovelContent()
}, { immediate: true })

const goBack = () => {
  router.push('/novel')
}
</script>

<style scoped>
.novel-content {
  font-size: 1.125rem;
  line-height: 2;
  text-align: justify;
  text-indent: 2em;
  max-width: 800px;
  margin: 0 auto;
}

.prose {
  color: #1f2937;
}

/* 优化移动端阅读体验 */
@media (max-width: 768px) {
  .novel-content {
    font-size: 1rem;
    line-height: 1.8;
  }
}
</style>
