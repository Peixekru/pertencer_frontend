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
                src="https://player.vimeo.com/video/885690955?h=ac5bc51c9c&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                class="vimeo-player"
                />
            </div>

            <!--Btn Pular Vídeo-->
            <!--
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
            -->

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
    
    function initVimeoEventListeners() {
      const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');
      
      vimeoIframes.forEach(iframe => {
        const player = new Vimeo.Player(iframe);
        
        player.on('ended', function() {
          console.log('Video Ended!');
          goNext();
        });
      });
    }

    function loadScript(url, callback) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      if (callback) {
        script.onload = callback;
      }

      document.head.appendChild(script);
    }

    loadScript(
      'https://player.vimeo.com/api/player.js',
      function() {
        initVimeoEventListeners();
        console.log('Loaded Vimeo Player API');
      }
    );
    
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