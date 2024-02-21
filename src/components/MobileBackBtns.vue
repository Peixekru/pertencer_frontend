<template>
    <v-sheet 
    v-if="appStore.currentRoute == '/conteudo'"
    class="d-flex justify-center"
    color="transparent"
    width="36px"
    >
        <v-img
        v-if="appStore.isMobile && appStore.currentRoute != '/home' "
        :class="appStore.isDarkMode ? 'white-svg' : 
        appStore.appData.access.color == 1 ? 'icon-dark-blue-mono-svg' : 'icon-dark-blue-svg'"
        src="../assets/img/top-back-arrow.svg"
        max-width="28"
        @click="$router.push('/unidade'); 
        appStore.isFinished = false"
        />  
    </v-sheet>

    <v-sheet
    v-else
    class="d-flex justify-center"
    color="transparent"
    width="36px"
    >
        <v-img
        v-if="appStore.isMobile && appStore.currentRoute != '/home' "
        :class="appStore.isDarkMode ? 'white-svg' : 
        appStore.appData.access.color == 1 ? 'icon-dark-blue-mono-svg' : 'icon-dark-blue-svg'"
        src="../assets/img/top-back-arrow.svg"
        max-width="28"
        @click="$router.push('/home'); 
        appStore.isFinished = false"
        />  
    </v-sheet >
</template>


<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()
</script>