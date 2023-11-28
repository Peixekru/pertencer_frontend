<template>
    <v-sheet
    :elevation="!appStore.isMobile > 600 ? 4 : 0"
    :color="!appStore.isMobile ? '' : 'transparent'"
    class="d-flex px-1 me-2 rounded-pill "
    :class="!appStore.isMobile ? 
    appStore.appData.access.color == 0 ? 'flex-column side-position' : 'flex-column side-position-mono' : 'top-position' "
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
                :src="
                appStore.isMobile && appStore.welcomeStepCounter != 3  ? getImgDark(index + 1) : 
                getImg(index + 1)"

                :max-width="index == 0 || index == 3 ? 
                32 : index == 2 ? 30 : 22"
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
            @my-click-event="appStore.welcomeStepCounter = 4"
            >
                <template v-slot:btnText>
					PROSSEGUIR
				</template>
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
                <template v-slot:btnText>
                    PROSSEGUIR
                </template>
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

        <!--badge-02-->
        <v-container 
        class="pa-0 desabled-card custom-tooltip-pos-badge-02" 
        v-if="!appStore.isMobile && appStore.appData.badges.clock == 1"
        >
            <WelcomeTooltip 
            class="custom-tooltip-inner-pos-badge-02"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, -50]"  
            :toolTipR="0"
            :hideToolTipButton = false
            :toolTipW = "280"
            @my-click-event="hideBubbleBadge02"
            >
                <template v-slot:btnText>
                    OK
                </template>
                <template v-slot:text>
                    {{ toolTipTextDefault }}
                </template>

            </WelcomeTooltip>
        </v-container>


        <!--badge-03-->
        <v-container 
        class="pa-0 desabled-card custom-tooltip-pos-badge-03" 
        v-if="!appStore.isMobile && appStore.appData.badges.heart == 1"
        >
            <WelcomeTooltip 
            class="custom-tooltip-inner-pos-badge-03"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, -50]"  
            :toolTipR="0"
            :hideToolTipButton = false
            :toolTipW = "280"
            @my-click-event="hideBubbleBadge03"
            >
                <template v-slot:btnText>
                    OK
                </template>
                <template v-slot:text>
                    {{ toolTipTextDefault }}
                </template>

            </WelcomeTooltip>
        </v-container>

        <!--badge-04-->
        <v-container 
        class="pa-0 desabled-card custom-tooltip-pos-badge-04" 
        v-if="!appStore.isMobile && appStore.appData.badges.picture == 1"
        >
            <WelcomeTooltip 
            class="custom-tooltip-inner-pos-badge-04"
            :toolTipShow="true" 
            :toolTipPos="1" 
            :toolTipAdjust="[0, 0, 0, -50]"  
            :toolTipR="0"
            :hideToolTipButton = false
            :toolTipW = "280"
            @my-click-event="hideBubbleBadge04"
            >
                <template v-slot:btnText>
                    OK
                </template>
                <template v-slot:text>
                    {{ toolTipTextDefault }}
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
            <template v-slot:btnText>
                PROSSEGUIR
            </template>
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
            <template v-slot:btnText>
                PROSSEGUIR
            </template>
            <template v-slot:text>
                {{ toolTipText02 }}
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--Primeiro acesso -> 14 (mobile) -->
    <v-container 
    class="pa-0 desabled-card custom-tooltip-pos-03-mobile" 
    v-if="appStore.welcomeStepCounter == 14 && 
    appStore.isMobile && appStore.appData.capsula.status == 1"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos-mobile-03"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[-105, 0, 0, 13]"  
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


    <!--badge-02 (mobile)-->
    <v-container 
    class="pa-0 desabled-card custom-tooltip-pos-badge-02-mobile" 
    v-if="appStore.isMobile && appStore.appData.badges.clock == 1"
    >
        <WelcomeTooltip 
        class="custom-tooltip-inner-pos-badge-02-mobile"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[8, -50, 0, 55]"  
        :toolTipR="0"
        :hideToolTipButton = false
        :toolTipW = "280"
        @my-click-event="hideBubbleBadge02"
            >
            <template v-slot:btnText>
                OK
            </template>
            <template v-slot:text>
                {{ toolTipTextDefault }}
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--badge-03 (mobile)-->
    <v-container 
    class="pa-0 desabled-card custom-tooltip-pos-badge-03-mobile" 
    v-if="appStore.isMobile && appStore.appData.badges.heart == 1"
    >
        <WelcomeTooltip 
        class="custom-tooltip-inner-pos-badge-03-mobile"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[8, -50, 0, 84]"  
        :toolTipR="0"
        :hideToolTipButton = false
        :toolTipW = "280"
        @my-click-event="hideBubbleBadge03"
            >
            <template v-slot:btnText>
                OK
            </template>
            <template v-slot:text>
                {{ toolTipTextDefault }}
            </template>
        </WelcomeTooltip>
    </v-container>

    <!--badge-04 (mobile)-->
    <v-container 
    class="pa-0 desabled-card custom-tooltip-pos-badge-04-mobile" 
    v-if="appStore.isMobile && appStore.appData.badges.picture == 1"
    >
        <WelcomeTooltip 
        class="custom-tooltip-inner-pos-badge-04-mobile"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[8, -50, 0, 110]"  
        :toolTipR="0"
        :hideToolTipButton = false
        :toolTipW = "280"
        @my-click-event="hideBubbleBadge04"
            >
            <template v-slot:btnText>
                OK
            </template>
            <template v-slot:text>
                {{ toolTipTextDefault }}
            </template>
        </WelcomeTooltip>
    </v-container>



</template>

<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import ProgressGlobal from './ProgressGlobal.vue'
    import WelcomeTooltip from './WelcomeTooltip'

    const appStore = useAppStore()
	const apiStore = useApiStore()

    // Text Primeiro acesso -> 3
    const toolTipText = ref(
        "Aqui nesse painel são registradas suas conquistas ao longo da sua jornada de conhecimento. Realize todas as atividades para preencher o painel!"
    )

    // Text Primeiro acesso -> 10
    const toolTipText02 = ref(
        "Legal! Cada vez que você concluir um conteúdo, adquire uma parte da gotinha, simbolizando seu avanço na Jornada."
    )

    //Primeiro acesso -> 14
    const toolTipText03 = ref(
        "Parabéns! Ao enterrar sua capsula, você completou sua primeira missão! Ela está sendo preparada, fique de olho em seu e-mail corporativo e marque na agenda, em 90 dias pode ser que você tenha uma surpresa!​"
    )

    const toolTipTextDefault = ref(
        "Parabéns, você ganhou mais uma recompensa!"
    )

    //Primeiro acesso -> 15
    const nextStep = () => {
        //Atualiza o localStorage
        appStore.appData.firstAccess = 7
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData))
    }

    //Esconde o balão do badge 02
    const hideBubbleBadge02 = () => {
        appStore.appData.badges.clock = 2
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

        //Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
    }


    //Esconde o balão do badge 03
    const hideBubbleBadge03 = () => {
        appStore.appData.badges.heart = 2
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

        //Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
    }

    //Esconde o balão do badge 04
    const hideBubbleBadge04 = () => {
        appStore.appData.badges.picture = 2
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

        //Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
    }


    // Carrega icones dos btns
    const getImg = (index) => {
    return  new URL(`../assets/img/side-icon-${index}.svg`, import.meta.url).href
    }  
    const getImgDark = (index) => {
    return  new URL(`../assets/img/side-icon-${index}-dark.svg`, import.meta.url).href
    }        
    const blockBtn = (i) => {
        if (i == 1 && appStore.appData.capsula.status == 1) { return false }
        else if (i == 2 && appStore.appData.badges.clock > 0) { return false }
        else if (i == 3 && appStore.appData.badges.heart > 0) { return false }
        else if (i == 4 && appStore.appData.badges.picture > 0 ) { return false }
        else { return true }
    }
    
</script>

<style  lang="scss" scoped>
@import '../styles/main.scss';
    .side-position{
        position:fixed;
        top:50%;
        right: 0;
        z-index: 2000;
        transform: translate(0%, -50%);
        background-color:rgba( 10, 30, 60, .4);
    }
    .side-position-mono{
        position:fixed;
        top:50%;
        right: 0;
        z-index: 2000;
        transform: translate(0%, -50%);
        background-color:rgba( 0, 0, 0, .4);
    }
    .top-position{
        position:fixed;
        top:8px;
        right: 0;
        z-index: 2000;
    }
    .btn-color {
        background-color:rgba( 0, 0, 0, .2);
        box-shadow: inset 1px 1px 3px rgba( 0, 0, 0, .3);
    }
    .no-active-icon{
        opacity: .1;
    }
    .opacity-control{
        opacity: 0.3 !important;
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
        top: 216px;
        right: -200px;
    }

    .custom-tooltip-pos-badge-02{
        position: absolute !important;
        right: -71px !important;
        top: -78%;
    }
    .custom-tooltip-inner-pos-badge-02{
        position: absolute !important;
        left: -240px !important;
        top: 342px
    }
    .custom-tooltip-pos-badge-02-mobile{
        position: fixed;
        z-index: 5000;
    }
    .custom-tooltip-inner-pos-badge-02-mobile{
        position: absolute !important;
        z-index: 5000;
        top: 152px;
        right: -200px;
    }

    .custom-tooltip-pos-badge-03{
        position: absolute !important;
        right: -71px !important;
        top: -78%;
    }
    .custom-tooltip-inner-pos-badge-03{
        position: absolute !important;
        left: -240px !important;
        top: 400px
    }
    .custom-tooltip-pos-badge-03-mobile{
        position: fixed;
        z-index: 5000;
    }
    .custom-tooltip-inner-pos-badge-03-mobile{
        position: absolute !important;
        z-index: 5000;
        top: 152px;
        right: -200px;
    }


    .custom-tooltip-pos-badge-04{
        position: absolute !important;
        right: -71px !important;
        top: -78%;
    }
    .custom-tooltip-inner-pos-badge-04{
        position: absolute !important;
        left: -240px !important;
        top: 460px
    }
    .custom-tooltip-pos-badge-04-mobile{
        position: fixed;
        z-index: 5000;
    }
    .custom-tooltip-inner-pos-badge-04-mobile{
        position: absolute !important;
        z-index: 5000;
        top: 152px;
        right: -200px;
    }

</style>