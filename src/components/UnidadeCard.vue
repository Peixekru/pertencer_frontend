<template>
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> 092ac239c2bbc5f25ddc4aa6a18778e1cb86e965
    <v-card
    class="rounded-lg px-4"
    :class=" cardStatus ?  appStore.welcomeStepCounter == 2 || appStore.welcomeStepCounter == 7 ?  numCard == 0 ? 'heighlight-Card' : '' : '' : 'desabled-card' "
    :width="appStore.isMobile ? '100%' : '100%'"
<<<<<<< HEAD
=======
    <v-card
    class="rounded-lg px-4"
    :class=" cardStatus ? '' : 'desabled-card' "
    :width="appStore.isMobile ? '100%' : '300'"
    min-width="240"
>>>>>>> parent of 7bf2dd1 (Primeiro acesso)
=======
>>>>>>> 092ac239c2bbc5f25ddc4aa6a18778e1cb86e965
    elevation="10"
    >
        <v-card-text class="px-0">
            <div class="d-flex justify-start align-center">
                <p class="text-h2 font-weight-bold text--primary text-medium-emphasis mr-4">
                    0{{ numCard + 1 }}
                </p>
                <p class="text-subtitle-1 text-medium-emphasis letter-normal">
                    {{ title }}
                </p>
                    
            </div>
        </v-card-text>

            <v-img
                class="rounded elevation-2"
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
                        ></v-progress-circular>
                    </div>
                </template>
            </v-img>

        <div class="py-4">
            <v-progress-linear
            :model-value="progress"
            color="secondary"
            height="10"
            rounded
            rounded-bar
            ></v-progress-linear>
        </div>

        <div class="d-flex justify-space-between align-center mb-6">
            <v-btn 
            class="bg-primary letter-normal"
            density="comfortable"
            rounded
            color="deep-purple-accent-4"
            @click="selectCard(numCard, title)"
            >
            Acessar Unidade
            </v-btn>

            <p class="text-caption" >
                {{ cPage }} de {{ lPage }}
            </p>

        </div>
        

    </v-card>
<<<<<<< HEAD

    <!--Primeiro acesso -> 2 -->
    <v-container 
    class="pa-0" 
    v-if="appStore.welcomeStepCounter == 2 && numCard == 0"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [0, 0, -84, -10] : [0, 0, -44, -70]" 
        @my-click-event="appStore.welcomeStepCounter = 3"
        > 
            <template v-slot:text>
                Estas são as unidades do nosso programa. Elas devem
                ser acessadas seguindo uma ordem. Por isso, serão
                liberadas conform e o seu progresso. A unidade que você
                está cursando estará em	destaque.
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
                Clique aqui e acesse
                a Unidade 01
            </template>
        </WelcomeTooltip>
    </v-container>


    <!--Primeiro acesso 15 -->
    <v-container class="pa-0" 
    v-if="appStore.welcomeStepCounter == 15 && numCard == 0"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-03-pos-mobile' : 'custom-tooltip-03-pos'"
        :toolTipShow="true" 
        :toolTipPos="2" 
        :toolTipAdjust="appStore.isMobile ? [-42, 0, 0, 0] : [-46, 0, 0, 0]" 
        :hideToolTipButton = true
        :toolTipW = "280"
        > 
            <template v-slot:text>
                Agora acesse a
                <span class="font-weight-bold">Unidade 02</span>
            </template>
        </WelcomeTooltip>
    </v-container>

<<<<<<< HEAD
=======
    
>>>>>>> parent of 7bf2dd1 (Primeiro acesso)
=======
>>>>>>> 092ac239c2bbc5f25ddc4aa6a18778e1cb86e965
</template>

<script setup>
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'

    const appStore = useAppStore()
    const route = useRouter()
    
    //Seleção do card
    const selectCard = (numCard, title) => {
        appStore.currentUnidadeNumber = numCard
        appStore.currentUnidadeTitle = title

        if (appStore.appData.unidades[ numCard + 1 ]) {
            appStore.nextUnidadeTitle =  appStore.appData.unidades[ numCard + 1 ].title
        }

        appStore.navigationStart = true
        
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
        class: String
    })
</script>


<style scoped>
    .letter-normal{
        letter-spacing: normal;
    }
    .desabled-card{
        opacity: .5;
        pointer-events: none;
    }
</style>