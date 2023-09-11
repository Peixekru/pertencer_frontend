<template>
    <v-card
    class="rounded-lg px-4"
    :class=" cardStatus ? '' : 'desabled-card' "
    :width="appStore.isMobile ? '100%' : '300'"
    min-width="240"
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
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                        color="grey-lighten-4"
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