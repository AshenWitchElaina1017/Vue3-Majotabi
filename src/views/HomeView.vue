<template>
    <div>
        <div class="relative h-screen">
            <div class="
                absolute 
                inset-0 
                bg-[url('https://picgo-elaina.oss-cn-chengdu.aliyuncs.com/majotabi/202510061605258.jpeg')]
                bg-cover
                bg-center
                bg-no-repeat
                opacity-40
                z-0
            "></div>
            <div class="relative z-10 h-full flex justify-center items-center">
                <div class="text-6xl text-red-500">魔女の旅々</div>
            </div>
        </div>
        <div class="mt-10">
            <HomeList :ListData="anime" titleName="动漫"/>
            <HomeList :ListData="novel" titleName="轻小说"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import HomeList from '../components/HomeList.vue';
import animeData  from '../data/animeData';
const anime = reactive(animeData)
import novelData from '../data/novelData';
const novel = reactive(novelData)

</script>