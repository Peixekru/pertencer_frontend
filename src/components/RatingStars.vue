<template>

    <v-sheet
    :color="!appStore.isMobile ? 'accent' : 'transparent'"
    height="50px"
    width="140px"
    class="d-flex align-center px-2 rounded-e-xl"
    @click="saveStatus()"
    >
        <v-rating
        v-model="contentRating" 
        size="24"
        hover
        />

    </v-sheet>
        
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'

    //Inicia a store
    const appStore = useAppStore()

    //Inicia a API
    const apiStore = useApiStore()

    //Armazena a nota do conteúdo
    const contentRating = ref(appStore.currentSelectedObject.userRating);

    const saveStatus = () => {
        
        appStore.currentSelectedObject.userRating = contentRating.value

        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

        console.log(`-> A avaliação foi enviada com número:`, contentRating.value )

    }

    watch(contentRating, () => {
        appStore.currentSelectedObject.userRating = contentRating.value
        if (appStore.welcomeStepCounter == 12){
            appStore.welcomeStepCounter = 13
        }
    })

</script>