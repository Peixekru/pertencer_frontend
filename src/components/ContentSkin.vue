<template>
    <div class="limiter">
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
    </div>
</template>

<script setup>
    import { useAppStore } from "../store/app"

    import { useStartProgress } from './composables/useProgress'
    import { useLoadNextObject } from "./composables/useLoadObject"
    import ContentTopInfo from "./ContentTopInfo.vue"

    import Config from "./contents/Config.vue"
    const appStore = useAppStore()


    //console.log(appStore.currentObjectIndex[0] == 3 && appStore.currentObjectIndex[2] == 2)

    //Seleciona tela expecífica
    if ( appStore.currentObjectIndex[0] == 3 && appStore.currentObjectIndex[2] == 2 ) {
        console.log('foi!')
        //appStore.finishedContent(true)
	    useStartProgress();
        useLoadNextObject(appStore.nextContent)
    }

</script>

<style scoped>
    .top-margin{
        height: 60px;
    }
    .bottom-margin{
        height: 120px;
    }
    .limiter{
        width: 1280px !important;
        margin: 0 auto;
    }

</style>
