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
                class="nav-link"
                exact-active-class="active"
              >
                首页
              </router-link>
              <router-link
                to="/anime"
                class="nav-link"
                active-class="active"
              >
                动漫
              </router-link>
              <router-link
                to="/novel"
                class="nav-link"
                active-class="active"
              >
                轻小说
              </router-link>
              <router-link
                to="/elaina"
                class="nav-link"
                active-class="active"
              >
                伊蕾娜
              </router-link>
              <router-link
                to="/about"
                class="nav-link"
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
                class="mobile-nav-link"
                exact-active-class="active"
                @click="closeMobileMenu"
              >
                首页
              </router-link>
              <router-link
                to="/anime"
                class="mobile-nav-link"
                active-class="active"
                @click="closeMobileMenu"
              >
                动漫
              </router-link>
              <router-link
                to="/novel"
                class="mobile-nav-link"
                active-class="active"
                @click="closeMobileMenu"
              >
                轻小说
              </router-link>
              <router-link
                to="/elaina"
                class="mobile-nav-link"
                active-class="active"
                @click="closeMobileMenu"
              >
                伊蕾娜
              </router-link>
              <router-link
                to="/about"
                class="mobile-nav-link"
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
              <span class="font-semibold text-purple-600 dark:text-purple-400">E.M</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              Built with ❤️ and 魔女的魔法
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

<style scoped>
/* 导航链接样式 */
.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: rgb(55 65 81);
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.nav-link:hover {
  color: rgb(147 51 234);
  background-color: rgb(250 245 255);
  border-color: rgb(233 213 255);
  transform: translateX(2px);
}

.nav-link.active {
  color: rgb(147 51 234);
  background-color: rgb(233 213 255);
  border-color: rgb(196 181 253);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

/* 移动端导航链接样式 */
.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: rgb(55 65 81);
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.mobile-nav-link:hover {
  color: rgb(147 51 234);
  background-color: rgb(250 245 255);
  border-color: rgb(233 213 255);
  transform: translateX(2px);
}

.mobile-nav-link.active {
  color: rgb(147 51 234);
  background-color: rgb(233 213 255);
  border-color: rgb(196 181 253);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

/* 深色模式样式 */
@media (prefers-color-scheme: dark) {
  .nav-link {
    color: rgb(209 213 219);
  }

  .nav-link:hover,
  .mobile-nav-link:hover {
    color: rgb(196 181 253);
    background-color: rgb(88 28 135 / 0.5);
    border-color: rgb(109 40 217);
  }

  .nav-link.active,
  .mobile-nav-link.active {
    color: rgb(196 181 253);
    background-color: rgb(88 28 135 / 0.5);
    border-color: rgb(139 92 246);
  }

  .mobile-nav-link {
    color: rgb(209 213 219);
  }
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 移动端菜单动画 */
.md\:hidden > div {
  transition: all 0.3s ease-in-out;
}

/* Logo 悬停效果 */
nav .flex.items-center.space-x-4 > div:first-child:hover {
  transform: scale(1.05) rotate(3deg);
  transition: transform 0.2s ease-in-out;
}

/* 标题渐变文字动画 */
h1[class*="bg-gradient-to-r"] {
  background-size: 200% 100%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 页脚链接悬停效果 */
footer span {
  transition: color 0.2s ease-in-out;
}

footer span:hover {
  color: rgb(147 51 234);
}
</style>
