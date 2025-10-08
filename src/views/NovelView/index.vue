<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-8 px-4 md:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        魔女之旅 轻小说
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <router-link
          v-for="novel in novelData"
          :key="novel.id"
          :to="`/novel/${novel.id}`"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
        >
          <div class="relative aspect-[3/4] overflow-hidden">
            <img
              :src="novel.image"
              :alt="novel.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div class="p-5">
            <h2 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {{ novel.title }}
            </h2>
            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {{ novel.des }}
            </p>
          </div>

          <div class="px-5 pb-5">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">第 {{ novel.id }} 卷</span>
              <span class="text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                开始阅读 →
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import novelData from '@/data/novelData'
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
