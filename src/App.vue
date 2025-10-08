<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 flex flex-col">
      <!-- 导航栏 -->
      <nav class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100 dark:border-purple-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo区域 -->
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <span class="text-white font-bold text-lg">M</span>
              </div>
              <h1 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                魔女の旅々
              </h1>
            </div>

            <!-- 导航链接 -->
            <div class="hidden md:flex items-center space-x-1">
              <router-link
                to="/"
                class="px-4 py-2 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                exact-active-class="active"
              >
                首页
              </router-link>
              <router-link
                to="/anime"
                class="px-4 py-2 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
              >
                动漫
              </router-link>
              <router-link
                to="/novel"
                class="px-4 py-2 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
              >
                轻小说
              </router-link>
              <router-link
                to="/elaina"
                class="px-4 py-2 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
              >
                伊蕾娜
              </router-link>
              <router-link
                to="/about"
                class="px-4 py-2 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
              >
                关于
              </router-link>
            </div>

            <!-- 移动端菜单按钮 -->
            <div class="md:hidden">
              <button
                @click="toggleMobileMenu"
                class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- 移动端菜单 -->
          <div v-show="showMobileMenu" class="md:hidden py-4 border-t border-purple-100 dark:border-purple-800">
            <div class="flex flex-col space-y-2">
              <router-link
                to="/"
                class="block px-4 py-3 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                exact-active-class="active"
                @click="closeMobileMenu"
              >
                首页
              </router-link>
              <router-link
                to="/anime"
                class="block px-4 py-3 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
                @click="closeMobileMenu"
              >
                动漫
              </router-link>
              <router-link
                to="/novel"
                class="block px-4 py-3 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
                @click="closeMobileMenu"
              >
                轻小说
              </router-link>
              <router-link
                to="/elaina"
                class="block px-4 py-3 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
                @click="closeMobileMenu"
              >
                伊蕾娜
              </router-link>
              <router-link
                to="/about"
                class="block px-4 py-3 rounded-lg text-gray-700 font-medium border border-transparent transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200 hover:translate-x-0.5 [&.active]:text-purple-600 [&.active]:bg-purple-200 [&.active]:border-purple-300 [&.active]:shadow-sm"
                active-class="active"
                @click="closeMobileMenu"
              >
                关于
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- 主要内容区域 -->
      <main class="flex-1 flex flex-col">
        <div class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-800 p-6 sm:p-8 h-full flex flex-col">
            <router-view v-slot="{ Component }">
              <transition name="page" mode="out-in">
                <component :is="Component" class="flex-1" />
              </transition>
            </router-view>
          </div>
        </div>
      </main>

      <!-- 页脚 -->
      <footer class="bg-gray-50 dark:bg-gray-900 border-t border-purple-100 dark:border-purple-800 flex-shrink-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="text-center">
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Vue3 + Go by
              <span class="font-semibold text-purple-600 dark:text-purple-400">AshenWitchElaina1017</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Built with ❤️ and 魔女の旅々
            </p>
          </div>
        </div>
      </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>
