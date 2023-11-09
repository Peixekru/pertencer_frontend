<template>

    <v-container
    fluid
    class="pa-4"
    >
        <!--Button
        <v-container
        v-if="!isVideoPlay" 
        class="d-flex justify-center animate__animated animate__bounce"
        >
            <v-btn   
            color="white" 
            icon="mdi mdi-play" 
            variant="outlined"
            class="video-btn-custom"
            @click="startVideo"
            />
        </v-container>-->

        <!--Vimeo-->
        <v-container 
        fluid
        class="animate__animated animate__fadeInUp"
        >
            <div class="vimeo-container">
                <iframe
                src="https://player.vimeo.com/video/372349574?h=1abc33ff76&color=ebf490&title=0&byline=0&portrait=0&autoplay=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                class="vimeo-player"
                />
            </div>

            <!--Btn Pular Vídeo-->
            <v-container 
            class="d-flex justify-center">
                <v-btn 
                class="text-white"
                variant="tonal"
                @click="goNext"
                >
                    Pular o vídeo
                </v-btn>
            </v-container>

        </v-container>
    </v-container>
</template>



<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '@/store/app'
    import { useRouter } from "vue-router"
import { onMounted } from 'vue';
    
    const appStore = useAppStore() 
    const router = useRouter()

    const isVideoPlay = ref(true)

    onMounted(() =>{
        isVideoPlay.value = false;

        const videoEl = document.getElementById("bg-video");
        videoEl.pause();
    })

    /*const startVideo = () => {
        const videoEl = document.getElementById("bg-video");
        videoEl.pause();
        
        isVideoPlay.value = true;
    }*/

    //Finaliza etapa
    const goNext = () => {
        //Atualiza o localStorage
        appStore.appData.firstAccess = 3
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        
        router.push('/home')
    }
    
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
    .video-btn-custom{
        scale: 2;
    }

</style>