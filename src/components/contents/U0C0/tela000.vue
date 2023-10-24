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

    <v-container class="d-flex flex-column align-center">
        <!--// *! Executa método para finalizar conteúdo -->
        <v-btn variant="outlined"
        color="white"
        @click="finishedContent"
        >
            finalizar conteúdo
        </v-btn>

        <!--Primeiro acesso -> 10 (Mobile) -->
        <v-container 
        class="pa-0 custom-container desabled-card" 
        v-if="appStore.welcomeStepCounter == 10"
        >
            <WelcomeTooltip 
            class="custom-tooltip-pos"
            :toolTipShow="true" 
            :toolTipPos="2" 
            :toolTipAdjust="[-55, 0, 0, 0]" 
            :toolTipR="0"
            :hideToolTipButton = true
            >
                <template v-slot:text>
                    Aqui você pode concluir o que aprendeu para seguir em frente. Experimente!
                </template>
            </WelcomeTooltip>
        </v-container>

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
        transform: translate(-50%, -73%);
    }
    .desabled-card{
        pointer-events: none;
    }
</style>
