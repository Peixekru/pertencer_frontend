<template>
    <v-sheet
    :elevation="!appStore.isMobile > 600 ? 4 : 0"
    :color="!appStore.isMobile ? '' : 'transparent'"
    class="d-flex px-1 me-2 rounded-pill"
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
<<<<<<< HEAD


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
            @my-click-event="appStore.welcomeStepCounter = 4"
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
            @my-click-event="appStore.welcomeStepCounter = 12"
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
        @my-click-event="appStore.welcomeStepCounter = 4"
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
        @my-click-event="appStore.welcomeStepCounter = 12"
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

=======
    </v-sheet>
>>>>>>> parent of 7bf2dd1 (Primeiro acesso)
</template>

<script setup>
    import { useAppStore } from '../store/app'
    import ProgressGlobal from './ProgressGlobal.vue';

    const appStore = useAppStore()

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
        background-color:rgba( 10, 30, 60, .5);
    }
    .top-position{
        position:fixed;
        top:8px;
        right: 0;
        z-index: 2000;
    }
    .btn-color {
        background-color:rgba( 0, 0, 0, .5);
        box-shadow: inset 1px 1px 3px rgba( 0, 0, 0, .3);
    }
    .no-active-icon{
        opacity: .1;
    }
    .opacity-control{
        opacity: 0.3 !important;
    }
</style>