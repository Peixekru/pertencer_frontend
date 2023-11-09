<template>
    <v-container 
    class="px-0" 
    :class="!appStore.isMobile ? 
    'pe-16' : '' ">
        <v-container class="pa-0" :class="appStore.appData.access.color == 1 ? 'grayscale-filter' : '' ">
            <div class="top-margin" />
            <ContentTopInfo />  
            <Config  class="mt-6"/>
        </v-container>
    </v-container>
</template>

<script setup>
    import { useAppStore } from "../store/app"
    import ContentTopInfo from "./ContentTopInfo.vue"
    import Config from "./contents/Config.vue"
    const appStore = useAppStore()
</script>

<style scoped>
    .top-margin{
        height: 60px;
    }
    .bottom-margin{
        height: 120px;
    }
</style>
