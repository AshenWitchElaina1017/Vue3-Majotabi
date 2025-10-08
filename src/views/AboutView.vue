<template>
  <div class="min-h-full flex flex-col space-y-8 md:space-y-12">
    <!-- Hero 标题区 -->
    <section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-8 md:p-12 text-white shadow-2xl">
      <!-- 装饰性背景 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      </div>

      <div class="relative z-10 text-center space-y-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          魔女の旅々
        </h1>
        <p class="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          Vue3 + Tailwind CSS 4 展示项目
        </p>
        <p class="text-sm md:text-base text-purple-200 max-w-3xl mx-auto leading-relaxed">
          一个致敬《魔女之旅》的前端学习项目,探索现代 Web 开发技术的魅力
        </p>
      </div>
    </section>

    <!-- 项目介绍区 -->
    <section class="grid md:grid-cols-2 gap-6">
      <!-- 关于项目 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800">关于项目</h2>
        </div>
        <p class="text-gray-700 leading-relaxed">
          本项目是一个基于 Vue 3 生态的现代化 Web 应用,以《魔女之旅》为主题,整合了动漫信息展示、轻小说阅读、AI 对话等功能模块,旨在实践前端工程化开发流程。
        </p>
      </div>

      <!-- 特色功能 -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800">核心特色</h2>
        </div>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">✓</span>
            <span>响应式设计,完美适配各种设备</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">✓</span>
            <span>组合式 API 驱动,代码简洁高效</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">✓</span>
            <span>Tailwind CSS 4 原子化样式</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">✓</span>
            <span>集成 AI 对话功能</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        技术栈
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <!-- Vue 3 -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-green-400 to-emerald-500">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800">Vue 3</h3>
          <p class="text-xs text-gray-600">渐进式框架</p>
        </div>

        <!-- TypeScript -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-blue-600">
            <span class="text-white font-bold text-xl">TS</span>
          </div>
          <h3 class="font-semibold text-gray-800">TypeScript</h3>
          <p class="text-xs text-gray-600">类型安全</p>
        </div>

        <!-- Tailwind CSS -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-cyan-400 to-blue-500">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,3C7.58,3 4.5,5.09 4.5,9C4.5,11.5 6.5,13.5 9,13.5C10.38,13.5 11.63,12.88 12.5,11.88C13.38,12.88 14.63,13.5 16,13.5C18.5,13.5 20.5,11.5 20.5,9C20.5,5.09 17.42,3 13,3H12M12,5H13C16.31,5 18.5,6.18 18.5,9C18.5,10.38 17.38,11.5 16,11.5C14.63,11.5 13.5,10.38 13.5,9V5H12.5V9C12.5,10.38 11.38,11.5 10,11.5C8.63,11.5 7.5,10.38 7.5,9C7.5,6.18 9.69,5 13,5H12Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800">Tailwind CSS</h3>
          <p class="text-xs text-gray-600">v4.1 原子化</p>
        </div>

        <!-- Vite -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-pink-500">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,3L10.07,21L11.93,15.5L17.5,14.86L3,3M13.5,9.15L20.5,3L11.5,12.5L13.5,9.15Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800">Vite</h3>
          <p class="text-xs text-gray-600">极速构建</p>
        </div>

        <!-- Vue Router -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-emerald-500 to-green-600">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800">Vue Router</h3>
          <p class="text-xs text-gray-600">路由管理</p>
        </div>

        <!-- OpenAI -->
        <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-300 flex flex-col items-center gap-2 text-center group">
          <div class="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-gradient-to-br from-gray-700 to-gray-900">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800">OpenAI</h3>
          <p class="text-xs text-gray-600">AI 集成</p>
        </div>
      </div>
    </section>

    <!-- 10.17 生日致敬特别区 -->
    <section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 p-8 md:p-12 text-white shadow-2xl">
      <!-- 装饰性元素 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse [animation-delay:1.5s]"></div>
      </div>

      <div class="relative z-10 space-y-6 text-center">
        <!-- 生日标题 -->
        <div class="space-y-2">
          <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
            Special Day
          </div>
          <h2 class="text-3xl md:text-4xl font-bold">10.17 · 伊蕾娜生日快乐</h2>
          <p class="text-purple-100 text-lg">灰之魔女的旅途永不停歇</p>
        </div>

        <!-- 倒计时/纪念 -->
        <div class="flex justify-center items-center gap-8 flex-wrap">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div class="text-4xl md:text-5xl font-bold">{{ daysUntilBirthday }}</div>
            <div class="text-sm text-purple-200 mt-1">{{ birthdayText }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div class="text-4xl md:text-5xl font-bold">∞</div>
            <div class="text-sm text-purple-200 mt-1">旅途继续</div>
          </div>
        </div>

        <!-- 经典台词 -->
        <blockquote class="max-w-2xl mx-auto space-y-3 pt-6 border-t border-white/20">
          <p class="text-lg md:text-xl font-serif italic leading-relaxed">
            "我是伊蕾娜,一个路过的旅人而已"
          </p>
          <p class="text-sm text-purple-200">
            —— 《魔女之旅》
          </p>
        </blockquote>
      </div>
    </section>

    <!-- 项目链接和开发者信息 -->
    <section class="grid md:grid-cols-2 gap-6">
      <!-- GitHub 仓库 -->
      <a
        href="https://github.com/AshenWitchElaina1017/Vue3-Majotabi"
        target="_blank"
        rel="noopener noreferrer"
        class="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div class="text-white">
            <h3 class="text-xl font-bold">GitHub 仓库</h3>
            <p class="text-gray-300 text-sm">查看源代码</p>
          </div>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          探索项目代码,欢迎 Star ⭐ 和 Fork
        </p>
      </a>

      <!-- 开发者信息 -->
      <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border border-indigo-100">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            E.M
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800">开发者</h3>
            <p class="text-gray-600 text-sm">AshenWitchElaina1017</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed mb-4">
          一位热爱《魔女之旅》的前端开发者,致力于用代码致敬美好的作品。
        </p>
        <div class="flex gap-2 text-sm text-gray-600">
          <span class="bg-purple-100 px-3 py-1 rounded-full">Vue 爱好者</span>
          <span class="bg-pink-100 px-3 py-1 rounded-full">魔女之旅粉丝</span>
        </div>
      </div>
    </section>

    <!-- 免责声明 -->
    <section class="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div class="space-y-1">
          <p class="font-semibold">免责声明</p>
          <p class="text-amber-800 leading-relaxed">
            本项目为个人学习和技术探索项目,属于同人性质,非官方作品。所有《魔女之旅》相关内容版权归原作者白石定规及相关版权方所有。本项目不用于任何商业用途,仅供学习交流。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 生日倒计时逻辑
const now = ref(new Date())
let timer: number | null = null

onMounted(() => {
  // 每天更新一次
  timer = window.setInterval(() => {
    now.value = new Date()
  }, 86400000) // 24 小时
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})

const daysUntilBirthday = computed(() => {
  const currentYear = now.value.getFullYear()
  const birthday = new Date(currentYear, 9, 17) // 10月17日 (月份从0开始)

  // 如果今年的生日已过,计算到明年的生日
  if (now.value > birthday) {
    birthday.setFullYear(currentYear + 1)
  }

  const diffTime = birthday.getTime() - now.value.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
})

const birthdayText = computed(() => {
  if (daysUntilBirthday.value === 0) {
    return '今天就是生日!'
  } else if (daysUntilBirthday.value === 1) {
    return '明天就是生日!'
  } else {
    return `距离生日还有天数`
  }
})
</script>

