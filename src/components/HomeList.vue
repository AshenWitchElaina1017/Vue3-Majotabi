<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">{{ titleName }}</h1>
    <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      <article
        v-for="value in displayData.splice(0,4)"
        :key="value.id"
        class="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-2 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-600"
        role="article"
        @click="goToDetailPage(value.id)" 
        :aria-label="value.title"
      >
        <!-- 图片容器 -->
        <div class="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 sm:aspect-[4/5]">
          <img
            v-if="value.image"
            :src="value.image"
            :alt="value.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
          <div
            v-else
            class="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 flex items-center justify-center"
          >
            <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <!-- 内容容器 -->
        <div class="p-5 sm:p-6 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
          <!-- 标题 -->
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {{ value.title }}
          </h3>
          <!-- 描述 -->
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-5 min-h-[4rem]">
            {{ value.des }}
          </p>
          <!-- 交互按钮 -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
            <button
              class="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/40 dark:to-indigo-900/60 rounded-xl hover:from-indigo-100 hover:to-indigo-200 dark:hover:to-indigo-900/80 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:scale-105 hover:shadow-lg active:scale-95"
              :aria-label="`查看详情: ${value.title}`"
            >
              查看详情
              <svg class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 加载状态遮罩 -->
        <div v-if="props.loading" class="absolute inset-0 bg-white/90 dark:bg-gray-800/90 flex items-center justify-center z-10 backdrop-blur-sm">
          <div class="flex flex-col items-center space-y-3">
            <div class="flex space-x-2">
              <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0ms]"></div>
              <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:150ms]"></div>
              <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:300ms]"></div>
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-300">加载中...</span>
          </div>
        </div>
      </article>
    </div>

    <!-- 全局加载状态 -->
    <div v-if="props.loading && ListData.length === 0" class="flex justify-center items-center py-16">
      <div class="flex flex-col items-center space-y-4">
        <div class="w-8 h-8 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <span class="text-sm text-gray-500 dark:text-gray-400">正在加载内容...</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


// 扩展的接口定义，支持更多属性
interface AnimeItem {
  id: number;
  image?: string;
  title: string;
  des: string;
}
// Props 定义 - 使用 withDefaults 提供更好的类型推断
interface Props {
  ListData: AnimeItem[];
  loading?: boolean;
  titleName?: string;
  limit?: number; // 限制显示数量,默认为 0 表示显示全部
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  titleName: '',
  limit: 0
});

// 计算显示的数据
const displayData = props.limit > 0 ? props.ListData.slice(0, props.limit) : props.ListData;

// [修改点 2] 获取 router 实例
const router = useRouter();

/**
 * @description: 跳转到详情页的函数
 * @param {number} id - 文章的 ID
 * @return {void}
 */
// [修改点 3] 定义一个方法来处理页面跳转逻辑
const goToDetailPage = (id: number) => {
  // 使用 router.push() 方法进行编程式导航
  router.push(`/anime/${id}`);
};

</script>