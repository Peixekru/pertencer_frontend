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
    import { useBlockStatus } from '../../../components/composables/useBlockStatus'
    const appStore = useAppStore();


    // *! função que finaliza a unidade //
    const finishedContent = () => {
        appStore.isFinished = true
    }
    onMounted(() => {
        //Atualiza o status do objeto
        appStore.currentSelectedObject.status = 1
        useStartProgress();
        useBlockStatus(appStore.currentObjectIndex)
    })
</script> 


<style scoped>
    .vimeo-container{
        padding:56.25% 0 0 0; 
        position:relative;
    }
    .vimeo-player{
        position:absolute; 
        top:0; 
        left:0; 
        width:100%; 
        height:100%; 
        border-radius: 10px
    }
</style>
