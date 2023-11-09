<template>

    <v-sheet
    :color="!appStore.isMobile ? 'accent' : 'transparent'"
    height="50px"
    width="140px"
    class="d-flex align-center px-2 rounded-e-xl "
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

    //Inicia a store
    const appStore = useAppStore()

    //Armazena a nota do conteúdo
    const contentRating = ref(appStore.currentSelectedObject.userRating);

    watch(contentRating, () => {
        appStore.currentSelectedObject.userRating = contentRating.value
        if (appStore.welcomeStepCounter == 12){
            appStore.welcomeStepCounter = 13
        }
    })

</script>