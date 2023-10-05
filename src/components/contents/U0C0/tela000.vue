<template>
    <v-container class="pa-0">
        <!--Vimeo-->
        <div class="vimeo-container">
            <iframe
            src="https://player.vimeo.com/video/372349574?h=1abc33ff76&color=ebf490&title=0&byline=0&portrait=0" 
            frameborder="0" 
            SameSite="None"
            allow="autoplay; fullscreen; picture-in-picture;" 
            class="vimeo-player"
            />
        </div>
    </v-container>
</template>


<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
    const appStore = useAppStore();


    // função que finaliza a unidade //
    const finishedContent = () => {
        appStore.finishedContent(true)
    } 
    onMounted(() => {
        useStartProgress();
    })
</script> 

<style scoped>
    @import '../GlobalStyles/contentGlobalStyles.css';
</style>
