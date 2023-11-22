<template>
    <v-bottom-navigation
    v-if="appStore.isFinished == true"
    class="bg-info footer-shadow animate__animated animate__fadeInUp" 
    height="110" 
    fixed
    >
        <v-container
        fluid
        class="d-flex align-center pa-0"
        :class="appStore.isMobile ? 'flex-column' : 'justify-space-between'"
        >
            <div fluid class="d-flex justify-start align-center pa-0">
                <!--Componente Rating-->
                <RatingStars />

                <div v-if="!appStore.isMobile" class="ms-8">
                    <p :class="appStore.isDarkMode ? '' : 'text-accent'">Próximo conteúdo:</p>

                    <h5
                        class="text-h5 font-weight-light text-title-line"
                        :class="appStore.isDarkMode ? '' : 'text-accent'"
                    >
                        {{ appStore.nextContent.title }}
                    </h5>
                </div>
            </div>

            <v-btn
            :disabled="appStore.currentSelectedObject.userRating == 0 &&  appStore.appData.firstAccess < 6"
            density="comfortable"
            class="bg-primary mx-8 text-secondary"
            rounded
            min-width="180px"
            height="28px"
            @click = "nextObject"
            >

            <span v-if="appStore.allFinished == false"> Prosseguir </span>
            <span v-else> Concluir </span>

            </v-btn>
        </v-container>
    </v-bottom-navigation>        

    <!--Primeiro acesso -> 12 -->
    <v-container 
    class="pa-0 desabled-card" 
    :class="appStore.isMobile ? 'custom-container-mobile' : 'custom-container'"
    v-if="appStore.welcomeStepCounter == 12"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos"
        :class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [-10, 0, 0, 0] : [-10, 0, 0, -86]" 
        :toolTipR="0"
        :hideToolTipButton = true
        :toolTipW = "280"
        >
            <template v-slot:text>
                Antes de prosseguir, ajude-nos a evoluir dando sua opinião sobre este conteúdo.
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--Primeiro acesso -> 13 -->
    <v-container 
    class="pa-0 desabled-card" 
    :class="appStore.isMobile ? 'custom-container-mobile-02' : 'custom-container-02'"
    v-if="appStore.welcomeStepCounter == 13"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-pos-mobile-02' : 'custom-tooltip-pos-02'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [-60, 0, 0, 0] : [-44, 0, 0, 25]" 
        :toolTipR="0"
        :hideToolTipButton = true
        :toolTipW = "280"
        >
            <template v-slot:text>
                Agora vamos avançar na nossa jornada!
            </template>
        </WelcomeTooltip>
    </v-container>


</template>

<script setup>
    import { useAppStore } from "../store/app";
    import { useRouter } from "vue-router";
    import { useLoadNextObject } from "../components/composables/useLoadObject"
    import WelcomeTooltip from './WelcomeTooltip'
    import RatingStars from "./RatingStars.vue";


    //Inicia a store
    const appStore = useAppStore();

    //Verifica as rotas
    const router = useRouter();
    //Armazena a URI atual
    appStore.currentRoute = router.currentRoute.value.fullPath;

    const nextObject = () => {

        if (appStore.allFinished == false) {
            useLoadNextObject(appStore.nextContent)
        } else {
            router.push('/home')
        }

        appStore.isFinished = false

        //Finaliza etapa -> 5
        if (appStore.welcomeStepCounter == 13){
            //Atualiza o localStorage
            appStore.appData.firstAccess = 6
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

            appStore.welcomeStepCounter = 14
        }

        //Finaliza etapa -> 6
        if (appStore.appData.firstAccess == 7) {
            appStore.welcomeStepCounter = 15
        }
    }
</script>

<style scoped>
    .footer-shadow {
        box-shadow: rgba(0, 0, 0, 0.4) 0 -4px 8px;
    }
    .text-title-line {
        line-height: 120%;
    }

    /*First acess*/
    .custom-container{
        position: fixed;
        z-index: 5000;
        left: 0;
        bottom: 182px;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        left: 155px !important;
        bottom: 0;

    }
    .custom-container-mobile{
        position: fixed;
        z-index: 5000;
        left: 0;
        bottom: 200px;
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        left: 50% !important;
        bottom: 0;

    }
    .custom-container-02{
        position: fixed;
        z-index: 5000;
        left: 100%;
        bottom: 156px;
    }
    .custom-tooltip-pos-02{
        position: absolute !important;
        z-index: 5000;
        left: -150px !important;
        bottom: 0;

    }
    .custom-container-mobile-02{
        position: fixed;
        z-index: 5000;
        left: 0;
        bottom: 137px;
    }
    .custom-tooltip-pos-mobile-02{
        position: absolute !important;
        z-index: 5000;
        left: 50% !important;
        bottom: 0;

    }



    .desabled-card{
        pointer-events: none;
    }
</style>
