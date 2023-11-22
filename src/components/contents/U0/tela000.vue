<template>
    <v-container class="pa-0">
        <!--Vimeo-->

        <div class="vimeo-container">
            <iframe
            src="https://player.vimeo.com/video/885694978?h=5edeeed7c0&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1" 
            frameborder="0" 
            SameSite="None"
            allow="autoplay; fullscreen; picture-in-picture"
            class="vimeo-player"
            :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
            />
        </div>
    </v-container>

    <v-container class="d-flex flex-column align-center">
        <!--// *! Executa método para finalizar conteúdo -->
        <!--
        <v-btn variant="outlined"
        color="white"
        @click="finishedContent"
        >
            finalizar conteúdo
        </v-btn>
        -->

        <!--Primeiro acesso -> 10 (Mobile) 
        <v-container 
        class="pa-0 custom-container desabled-card" 
        v-if="appStore.welcomeStepCounter == 10"
        >
            <WelcomeTooltip 
            :class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos' "
            :toolTipShow="true" 
            :toolTipPos="2" 
            :toolTipAdjust="appStore.isMobile ? [-43, 0, 0, 0] : [-58, 0, 0, 0]" 
            :toolTipR="0"
            :hideToolTipButton = true
            >
                <template v-slot:text>
                    Aqui você pode concluir o que aprendeu para seguir em frente. Experimente!
                </template>
            </WelcomeTooltip>
        </v-container>-->

    </v-container>



</template>


<script setup>
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
    import WelcomeTooltip from '../../../components/WelcomeTooltip'
    const appStore = useAppStore();

    // função que finaliza a unidade //
    const finishedContent = () => {
        appStore.finishedContent(true)
        useStartProgress();

        //Terceira parte dos welcomeSteps -> 10
        if (appStore.appData.firstAccess == 5){
            appStore.welcomeStepCounter = 11
        } else if (appStore.appData.firstAccess == 6) {
            appStore.welcomeStepCounter = 14
        }
    } 

    
  function initVimeoEventListeners() {
    const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');

    vimeoIframes.forEach(iframe => {
      const player = new Vimeo.Player(iframe);

      player.on('ended', function() {
        console.log('Video Ended!');
        finishedContent();
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
    @import '../GlobalStyles/contentGlobalStyles.css';

    .custom-container{
        position: relative;
        z-index: 5000;
        right: -50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        left: 50% !important;
        top: 70%;
        transform: translate(-50%, -72.6%);
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        left: 50% !important;
        top: 70%;
        transform: translate(-50%, -74.5%);
    }
    .desabled-card{
        pointer-events: none;
    }
</style>
