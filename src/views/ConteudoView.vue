<template>
    <v-container 
    v-if="appStore.navigationStart"
    fluid
    class="fill-height py-0 px-4"
    :class="appStore.isDarkMode ? 
    'content-bg-gcolor-dark' : 'content-bg-gcolor-light' "
    >
        <ContentSkin />
    
    </v-container>
</template>

<script setup>

    import { useAppStore } from "../store/app"
    import { useRouter } from "vue-router"

    import ContentSkin from "@/components/ContentSkin.vue"


    //Inicia a store
    const appStore = useAppStore()
    //Verifica as rotas
    const router = useRouter()
    //Armazena a URI atual
    appStore.currentRoute = router.currentRoute.value.fullPath

    if (!appStore.navigationStart){
        router.push('/home')
    }

    //Quinta parte dos welcomeSteps -> 10
	if (appStore.appData.firstAccess == 5){
        appStore.welcomeStepCounter = 10
    } else if (appStore.appData.firstAccess == 6) {
        appStore.welcomeStepCounter = 14
    }
    
</script>

<style scoped>
    .content-bg-gcolor-ligght{
        background-color: #1B1F45;
        background-image: url("../assets/img/bg-gradiente-blue.svg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        position:relative;
    }
    .content-bg-gcolor-dark{
        background-color: #01121D;
    }
</style>