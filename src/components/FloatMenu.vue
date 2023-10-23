<template>
    <v-sheet
    :elevation="!appStore.isMobile > 600 ? 4 : 0"
    :color="!appStore.isMobile ? '' : 'transparent'"
    class="d-flex px-1 me-2 rounded-pill "
    :class="!appStore.isMobile ? 
    'flex-column side-position' : 'top-position' "
    >
        <v-sheet 
        v-for=" (i, index) in 4" 
        :key="i"
        :width="!appStore.isMobile ? 52 : 42"
        :height="!appStore.isMobile ? 52 : 42"
        class="d-flex align-center justify-center my-1"
        :class="!appStore.isMobile ? 
        'rounded-circle btn-color' : 'bg-transparent' " 
        >
            <v-sheet
            width="100%"
            height="100%"
            class="d-flex justify-center"
            :class=" blockBtn(i) ? 'opacity-control' : '' "
            color="transparent"
            >
                <v-img
                :class="appStore.isDarkMode ||
                appStore.currentRoute == '/conteudo' &&
                !appStore.isMobile ?
                'white-svg' : '' "
                :src="getImg(index + 1)"
                :max-width="index == 0 || index == 3 ? 
                32 : index == 2 ? 20 : 26"
                />  
            </v-sheet>
        </v-sheet>

        <!--Progresso Global -> Gota -->
        <ProgressGlobal />


        <!--Primeiro acesso -> 3 -->
        <v-container 
        class="pa-0" 
        v-if="appStore.welcomeStepCounter == 3 && !appStore.isMobile"
        >
            <WelcomeTooltip 
            class="custom-tooltip-pos"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, 20]" 
            @my-click-event="appStore.welcomeStepCounter = 4;
            console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
            >
                <template v-slot:text>
                    {{ toolTipText }}
                </template>
            </WelcomeTooltip>
        </v-container>

        <!--Primeiro acesso -> 10 -->
        <v-container 
        class="pa-0" 
        v-if="appStore.welcomeStepCounter == 11 && !appStore.isMobile"
        >
            <WelcomeTooltip 
            class="custom-tooltip-pos-02"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, 20]" 
            @my-click-event="appStore.welcomeStepCounter = 12;
            console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
            >
                <template v-slot:text>
                    {{ toolTipText02 }}
                </template>
            </WelcomeTooltip>
        </v-container>

        <!--Primeiro acesso -> 14 -->
        <v-container 
        class="pa-0 desabled-card custom-tooltip-pos-03" 
        v-if="appStore.welcomeStepCounter == 14 && 
        !appStore.isMobile && appStore.appData.capsula.status == 1"
        >
            <WelcomeTooltip 
            class="custom-tooltip-pos-02"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, -50]"  
            :toolTipR="0"
            :hideToolTipButton = true
            :toolTipW = "280"
            :start-event = "nextStep()"
            >
                <template v-slot:text>
                    {{ toolTipText03 }}
                </template>
            </WelcomeTooltip>
        </v-container>


    </v-sheet>

    <!--Primeiro acesso -> 3 (Mobile) -->
    <v-container 
    class="pa-0 custom-container" 
    v-if="appStore.welcomeStepCounter == 3 && appStore.isMobile"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos-mobile"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[-32, 0, 0, 68]" 
        @my-click-event="appStore.welcomeStepCounter = 4;
        console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
        >
            <template v-slot:text>
                {{ toolTipText }}
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--Primeiro acesso -> 10 (Mobile) -->
    <v-container 
    class="pa-0 custom-container-02" 
    v-if="appStore.welcomeStepCounter == 11 && appStore.isMobile"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos-mobile-02"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[-12, 0, 0, 130]" 
        :toolTipR ="0"
        @my-click-event="appStore.welcomeStepCounter = 12;
        console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
        >
            <template v-slot:text>
                {{ toolTipText02 }}
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--Primeiro acesso -> 14 -->
    <v-container 
    class="pa-0 desabled-card custom-tooltip-pos-03-mobile" 
    v-if="appStore.welcomeStepCounter == 14 && 
    appStore.isMobile && appStore.appData.capsula.status == 1"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos-mobile-03"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[5, 0, 0, 13]"  
        :toolTipR="0"
        :hideToolTipButton = true
        :toolTipW = "280"
        :start-event = "nextStep()"
        >
            <template v-slot:text>
                {{ toolTipText03 }}
            </template>
        </WelcomeTooltip>
    </v-container>

</template>

<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    import ProgressGlobal from './ProgressGlobal.vue';
    import WelcomeTooltip from './WelcomeTooltip'

    const appStore = useAppStore()

    // Text Primeiro acesso -> 3
    const toolTipText = ref(
        "Aqui nesse painel são registradas suas conquistas ao longo da sua jornada de conhecim ento. Realize todas as atividades para preencher o painel!"
    )

    // Text Primeiro acesso -> 10
    const toolTipText02 = ref(
        "Legal! Você completou um pedacinho da nossa jornada! Acompanhe por aqui o seu progresso nos conteúdos."
    )

    //Primeiro acesso -> 14
    const toolTipText03 = ref(
        "Parabéns, você alcançou uma conquista ao gravar sua mensagem."
    )

    //Primeiro acesso -> 15
    const nextStep = () => {
        //Atualiza o localStorage
        appStore.appData.firstAccess = 7
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        console.log(appStore.appData.firstAccess)
    }

    // Carrega icones dos btns
    const getImg = (index) => {
    return  new URL(`../assets/img/side-icon-${index}.svg`, import.meta.url).href
    }     
    const blockBtn = (i) => {
        if (i == 1 && appStore.appData.capsula.status == 1) { return false }
        else if (i == 2 && appStore.appData.galeria.status == 1) { return false }
        else if (i == 3) { return true }
        else if (i == 4) { return true }
        else { return true }
    }
</script>

<style scoped>
    .side-position{
        position:fixed;
        top:50%;
        right: 0;
        z-index: 2000;
        transform: translate(0%, -50%);
        background-color:rgba( 0, 0, 0, .1);
    }
    .top-position{
        position:fixed;
        top:8px;
        right: 0;
        z-index: 2000;
    }
    .btn-color {
        background-color:rgba( 0, 0, 0, .1);
        box-shadow: inset 1px 1px 3px rgba( 0, 0, 0, .1);
    }
    .no-active-icon{
        opacity: .3;
    }
    .opacity-control{
        opacity: 0.5 !important;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        left: -240px !important;
    }
    .custom-tooltip-pos-mobile{
        position: fixed !important;
        top: 184px;
    }
    .custom-tooltip-pos-02{
        position: absolute !important;
        left: -240px !important;
        top: 280px
    }
    .custom-tooltip-pos-mobile-02{
        position: absolute !important;
        z-index: 5000;
        top: 220px;
        right: -200px;
    }
    .custom-container-02{
        position: fixed;
        z-index: 5000;
        right: 0;
        top: -18px;

    }

    .custom-tooltip-pos-03{
        position: absolute !important;
        right: -71px !important;
        top: -78%;
    }

    .custom-container-03{
        position: fixed;
        z-index: 5000;
    }

    .custom-tooltip-pos-03-mobile{
        position: fixed;
        z-index: 5000;
    }

    .custom-tooltip-pos-mobile-03{
        position: absolute !important;
        z-index: 5000;
        top: 152px;
        right: -200px;
    }

</style>