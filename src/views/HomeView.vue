<template>
    <div class="overflow-x-hidden">
        <!-- Hero 区域 -->
        <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            <!-- 背景图片层 -->
            <div class="
                absolute
                inset-0
                bg-[url('https://picgo-elaina.oss-cn-chengdu.aliyuncs.com/majotabi/202510061605258.jpeg')]
                bg-cover
                bg-center
                bg-no-repeat
                opacity-65
                z-0
            " aria-hidden="true"></div>

            <!-- 渐变遮罩层 -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/40 to-transparent z-0" aria-hidden="true"></div>

            <!-- 内容层 -->
            <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <!-- 主标题 -->
                    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] leading-tight">
                        魔女の旅々
                    </h1>

                    <!-- 日文副标题 -->
                    <p class="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 drop-shadow-lg tracking-wider">
                        灰の魔女の物語
                    </p>

                    <!-- 英文标语 -->
                    <p class="text-base sm:text-lg md:text-xl text-purple-200 font-light tracking-widest uppercase">
                        The Journey of Elaina
                    </p>

                    <!-- CTA 按钮组 -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-8">
                        <button
                            @click="navigateTo('/novel')"
                            class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50 w-full sm:w-auto"
                            aria-label="开始阅读轻小说"
                        >
                            <span class="flex items-center justify-center gap-2">
                                📚 开始阅读
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>

                        <button
                            @click="navigateTo('/anime')"
                            class="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30 w-full sm:w-auto"
                            aria-label="探索动漫剧集"
                        >
                            <span class="flex items-center justify-center gap-2">
                                🎬 探索动漫
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 向下滚动指示器 -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
                <svg class="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>

        <!-- 内容区域 -->
        <div class="relative bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-900/20">
            <!-- 装饰分隔线 -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="flex items-center gap-4">
                    <div class="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    <div class="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent"></div>
                </div>
            </div>

            <!-- 列表区域 -->
            <div class="py-8 md:py-12 space-y-16 md:space-y-24">
                <HomeList :ListData="anime" titleName="动漫" type="anime"/>
                <HomeList :ListData="novel" titleName="轻小说" type="novel"/>
            </div>

            <!-- 底部间距 -->
            <div class="h-16"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import HomeList from '../components/HomeList.vue';
import animeData  from '../data/animeData';
const anime = reactive(animeData)
import novelData from '../data/novelData';
const novel = reactive(novelData)

// 路由导航函数
const router = useRouter();
const navigateTo = (path: string) => {
    router.push(path);
};
</script>