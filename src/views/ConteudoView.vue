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
		console.log('welcomeSteps = ' + appStore.welcomeStepCounter)
    } else if (appStore.appData.firstAccess == 6) {
        appStore.welcomeStepCounter = 14
		console.log('welcomeSteps = ' + appStore.welcomeStepCounter)
    }
    
</script>

<style scoped>
    .content-bg-gcolor-light{
        background-color: #133B44;
    }
    .content-bg-gcolor-dark{
        background-color: #01121D;
    }
</style>