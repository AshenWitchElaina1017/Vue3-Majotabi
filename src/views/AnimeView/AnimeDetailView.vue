<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto animate-in fade-in duration-300">
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-in zoom-in-95 duration-300">
        <div class="relative">
          <img
            v-if="currentAnime"
            :src="currentAnime.image"
            :alt="currentAnime.title"
            class="w-full h-64 md:h-96 object-cover"
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

        <div v-if="currentAnime" class="p-8 md:p-12">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full mb-4">
              第 {{ currentAnime.id }} 集
            </span>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ currentAnime.title }}
            </h1>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {{ currentAnime.des }}
            </p>
          </div>

          <div class="mt-10 flex gap-4">
            <button
              @click="goBack"
              class="flex-1 md:flex-none px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 active:scale-95"
            >
              返回列表
            </button>
          </div>
        </div>

        <div v-else class="p-12 text-center">
          <div class="text-6xl mb-4">🔍</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">找不到该剧集</h2>
          <p class="text-gray-600 mb-6">抱歉,您访问的剧集不存在</p>
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
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import animeData from '@/data/animeData'

const route = useRoute()
const router = useRouter()

const currentAnime = computed(() => {
  const id = Number(route.params.id)
  return animeData.find((anime: any) => anime.id === id)
})

const goBack = () => {
  router.push('/anime')
}
</script>
