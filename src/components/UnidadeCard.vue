<template>


    <v-card
    class="rounded-lg px-4"
    :class=" cardStatus ?  appStore.welcomeStepCounter == 2 || appStore.welcomeStepCounter == 7 ?  numCard == 0 ? 'heighlight-Card' : '' : '' : 'desabled-card' "
    :min-width="appStore.isMobile ? '100%' : '100%'"
    elevation="10"
    >
        <v-card-text class="px-0">
            <div class="d-flex justify-start align-center">
                <p class="text-h2 font-weight-bold text-info text-medium-emphasis inner_text_shadow mr-4">
                    0{{ numCard + 1 }}
                </p>
                <p class="text-subtitle-1 text-medium-emphasis letter-normal">
                    {{ title }}
                </p>
                    
            </div>
        </v-card-text>

            <v-img
                class="rounded elevation-2"
                :class="appStore.appData.access.color == 1 || cardStatus == 0 ? 'grayscale-filter' : '' "
                aspect-ratio="16/9"
                cover
                :lazy-src="`${cardImg}`"
                :src="(`${cardImg}`)"
            >
                <!--Load Image-->
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                        color="primary"
                        indeterminate
                        />
                    </div>
                </template>
            </v-img>

        <div class="py-4">
            <v-sheet
            width="100%"
            color="rgba(0, 0, 0, .15)"
            class="rounded-pill progress-custom-padding"
            >
                <v-progress-linear
                :model-value="progress"
                color="info"
                height="10"
                rounded
                rounded-bar
                >
                    <v-sheet
                    width="100%"
                    color="transparent"
                    class="px-1"
                    >
                        <v-progress-linear
                        :model-value="progress < 50 ? progress - 4 : progress"
                        color="rgba(255, 255, 255, .2)"
                        height="3"
                        rounded
                        rounded-bar
                        />  
                    </v-sheet>            
                </v-progress-linear>
            </v-sheet>
        </div>

        <div class="d-flex justify-space-between align-center mb-6">
            <v-btn 
            type="button"
            :disabled = "appStore.welcomeStepCounter == 2 "
            class="bg-primary text-secondary letter-normal"
            density="comfortable"
            rounded
            @click="selectCard(numCard, title)"
            >
                Acessar Unidade
            </v-btn>

            <p class="text-caption" >
                {{ cPage }} de {{ lPage }}
            </p>

        </div>       

    </v-card>

    <!--Primeiro acesso -> 2 -->
    <v-container 
    class="pa-0" 
    v-if="appStore.welcomeStepCounter == 2 && numCard == 0"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [65, 0, 0, 0] : [55, 0, 0, -75]" 
        :toolTipW = "appStore.isMobile ? 360 : 400 "
        @my-click-event="appStore.welcomeStepCounter = 3"
        > 
            <template v-slot:btnText>
				PROSSEGUIR
			</template>
            <template v-slot:text>
                <p>Estas são as <span class="font-weight-bold">unidades do nosso programa.</span></p>
                <p class="mt-4">Elas devem ser acessadas seguindo uma ordem. Por isso, <span class="font-weight-bold">serão liberadas conforme o seu progresso.</span></p>
                <p class="mt-4">A unidade que você está cursando estará em destaque.</p>
            </template>
        </WelcomeTooltip>
    </v-container>


    <!--Primeiro acesso 7 -->
    <v-container 
    class="pa-0" 
    v-if="appStore.welcomeStepCounter == 7 && numCard == 0"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-02-pos-mobile' : 'custom-tooltip-02-pos'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [-42, 0, 0, 0] : [-46, 0, 0, 0]" 
        :hideToolTipButton = true
        :toolTipW = "280"
        >
            <template v-slot:text>
                <p>Clique aqui e acesse a</p> 
                <p class="font-weight-bold">Unidade 01</p>
            </template>
        </WelcomeTooltip>
    </v-container>


    <!--Marcador Unidade-->
    <v-container 
    class="pa-0 pos-test noClick" 
    v-if="appStore.appData.firstAccess == 'finished' && isVisibleCard && numCard == numUnidade"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'pos-test-inner-mobile' : 'pos-test-inner'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [-42, 0, 0, 0] : [-46, 0, 0, 0]" 
        :hideToolTipButton = true
        :toolTipW = "220"
        > 
            <template v-slot:text>
                Você está na <br />
                <span class="font-weight-bold">Unidade {{ numCard + 1 }}</span>
            </template>
        </WelcomeTooltip>
    </v-container>

</template>

<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'
    import { useProgressCalc } from '../components/composables/useProgress'

    import WelcomeTooltip from './WelcomeTooltip'

    const appStore = useAppStore()
    const route = useRouter()

    //Retorna o número da unidade

    const numUnidade = ref(1)
    const isVisibleCard = ref(true)


    if (useProgressCalc('progressBar', 0) < 100){
        numUnidade.value = 0
    } 
    else if(useProgressCalc('progressBar', 1) < 100){
        numUnidade.value = 1
    }
    else if(useProgressCalc('progressBar', 2) < 100){
        numUnidade.value = 2
    }
    else if(useProgressCalc('progressBar', 3) < 100){
        numUnidade.value = 3
    }
    else { isVisibleCard.value = false }


    
    //Seleção do card
    const selectCard = (numCard, title) => {
        appStore.currentUnidadeNumber = numCard
        appStore.currentUnidadeTitle = title

        if (appStore.appData.unidades[ numCard + 1 ]) {
            appStore.nextUnidadeTitle =  appStore.appData.unidades[ numCard + 1 ].title
        }

        appStore.navigationStart = true

        //Finaliza etapa
        if(appStore.welcomeStepCounter == 7){
            //Atualiza o localStorage
            appStore.appData.firstAccess = 4
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        
        } else if (appStore.welcomeStepCounter == 15){
            //Atualiza o localStorage
            appStore.appData.firstAccess = 8
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        }
        
        route.push('/unidade')
    }

    defineProps({
        numCard: Number,
        title: String,
        cardStatus: Number,
        cardImg: String,
        progress: Number,
        cPage: Number,
        lPage: Number,
    })
</script>


<style lang="scss" scoped>

    @import '../styles/main.scss';
    .letter-normal{
        letter-spacing: normal;
    }
    .desabled-card{
        opacity: .5;
        pointer-events: none;
    }

    /*--Primeiro acesso */
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        top: -165px !important;
        left: 192px !important;
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: -175px !important;
    }
    .custom-tooltip-02-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: -85px !important;
    }
    .custom-tooltip-02-pos{
        position: absolute !important;
        z-index: 5000;
        top: -82px !important;
        left: 142px !important;
    }
    .custom-tooltip-03-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: 334px !important;
    }
    .custom-tooltip-03-pos{
        position: absolute !important;
        z-index: 5000;
        top: -85px !important;
        left: 435px !important;
    }
    .heighlight-Card{
        border: 5px solid $infoLight;
        scale: 1.05;
        animation: pulse;
        top: 10px;
        animation-duration: 1s; 
        position: relative;
        z-index: 5000;
        width: 300px;
    }
    .inner_text_shadow{
        text-shadow: 1px 1px rgba(255, 255, 255, 0), -1px -1px #a9a9a9;
    }
    .progress-custom-padding{
        padding: 2px 2px 2px 2px;
    }
    .pos-test{
        position: relative;
        left: -50%;
        z-index: 600;
        
    }
    .pos-test-inner{
        position: absolute;
        top: -85px;
        left: 0;
    }

    .pos-test-inner-mobile{
        position: absolute;
        z-index: 5000;
        top: -85px;
        left: 0;
    }

    .noClick{
		pointer-events: none; 
	}

</style>