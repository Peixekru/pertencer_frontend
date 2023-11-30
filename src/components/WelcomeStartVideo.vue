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

        
            <v-sheet 
            color="transparent"
            :height="
            appStore.screenWidth > 1920 && appStore.screenHeight > 1200 ? 1280 :
            appStore.screenWidth <= 1920 &&  appStore.screenWidth >= 960 && appStore.screenHeight > 900  ? 900 : 
            appStore.screenWidth <= 960 && appStore.screenHeight > 720 && appStore.screenHeight > 720 ? 720 : 
            appStore.screenWidth < 600 || appStore.screenHeight < 480 ? 270 :
            460"
            class=" animate__animated animate__fadeInUp">
                <iframe id="vimeo_player"
                src="https://player.vimeo.com/video/885690955?h=ac5bc51c9c&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=0" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                class="vimeo-player"
                />
            </v-sheet>

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


    <!--Video Alert-->
    <v-container 
        v-if="isStartMsg"
        class="pa-0 desabled-card center-position animate__animated animate__fadeIn animate__delay-2s" 
        >
            <WelcomeTooltip 
            :toolTipShow="false" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, -50]"  
            :toolTipR="0"
            :hideToolTipButton = false
            :toolTipW = "280"
            @my-click-event="startVideo"
            >
                <template v-slot:btnText>
                    OK
                </template>
                <template v-slot:text>
                    Sua jornada começa agora! Para uma experiência aprimorada, todos os vídeos incluem linguagem de sinais (Libras) e legendas. 
                    Caso seja possível, recomendamos o uso de fones de ouvido ou a ativação do áudio do computador.
                </template>

            </WelcomeTooltip>
        </v-container>

        <!--Primeiro acesso -> Overlay perdura até welcomeStep 6 -->
        <WelcomeModalFx v-if="isStartMsg== true"/>

</template>



<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '@/store/app'
    import { useRouter } from "vue-router"
    import { onMounted } from 'vue'
    import WelcomeTooltip from './WelcomeTooltip'
    import WelcomeModalFx from './WelcomeModalFx.vue'
    
    const appStore = useAppStore() 
    const router = useRouter()

    const isStartMsg = ref(true)

    //const isVideoPlay = ref(true)

    const startVideo = () => {
        isStartMsg.value = false
        
        const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');        
        vimeoIframes.forEach(iframe => {
            const player = new Vimeo.Player(iframe);
            player.play()
        });

    }

    onMounted(() =>{
        //isVideoPlay.value = false;

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

    .center-position{
        position: absolute !important;
        z-index: 5000;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .custom-container-pos{
        position: relative;
    }
    .anim-container{
        position: relative;
        z-index: 4000;
    }
    .welcome-icon{
        position: absolute;
        z-index: 2000;
        top: -50px;
        left: 50%;
        filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 0.5));
        transform: translate(-50%, -50%) !important;
    }
    .eye{
        position: absolute;
        z-index: 3000;
        top:  50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        font-size: 1.5em;
    }

</style>