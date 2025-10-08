<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-4 animate-fade-in">
    <div class="text-center space-y-8 max-w-2xl">
      <!-- 404 大号数字 -->
      <div class="relative">
        <h1 class="text-9xl md:text-[12rem] font-bold text-white/10 select-none">
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="space-y-2">
            <p class="text-6xl md:text-7xl font-bold text-white animate-bounce-slow">
              ✨
            </p>
          </div>
        </div>
      </div>

      <!-- 提示文案 -->
      <div class="space-y-4 animate-slide-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          页面走丢了
        </h2>
        <p class="text-lg md:text-xl text-purple-200">
          看起来这个页面像伊蕾娜一样去旅行了~
        </p>

        <!-- 路径显示 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 inline-block">
          <p class="text-sm text-purple-100 font-mono">
            <span class="text-purple-300">路径:</span> {{ currentPath }}
          </p>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay">
        <router-link
          to="/"
          class="group relative px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          <span class="relative z-10 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            返回首页
          </span>
          <div class="absolute inset-0 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </router-link>

        <button
          @click="goBack"
          class="px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
        >
          返回上一页
        </button>
      </div>

      <!-- 装饰元素 -->
      <div class="flex justify-center gap-3 text-4xl animate-float">
        <span class="animate-float-delay-1">🌟</span>
        <span class="animate-float-delay-2">🔮</span>
        <span class="animate-float-delay-3">✨</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentPath = computed(() => route.path)

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out 0.2s backwards;
}

.animate-slide-up-delay {
  animation: slide-up 0.8s ease-out 0.4s backwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float 3s ease-in-out infinite;
  animation-delay: 0s;
}

.animate-float-delay-2 {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-delay-3 {
  animation: float 3s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>
