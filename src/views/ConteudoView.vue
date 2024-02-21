<template>
    <v-container 
    v-if="appStore.navigationStart"
    fluid
    class="fill-height py-0 px-4"
    :class="appStore.isDarkMode ?  
    appStore.appData.access.color == 0 ? 'content-bg-gcolor-dark' : 'content-bg-gcolor-dark-mono' :
    appStore.appData.access.color == 0 ? 'content-bg-gcolor-light' : 'content-bg-gcolor-light-mono'"
    >
        <ContentSkin />
    
    </v-container>
</template>

<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from "../store/app"
    import { useRouter } from "vue-router"
    import ContentSkin from "@/components/ContentSkin.vue"

    //Sons dos botões
    import { useBeepSound }  from '@/components/composables/useSounds'
    onMounted(() => {
        useBeepSound()
    })


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
    .content-bg-gcolor-light{
        background: rgb(27,31,69);
        background: linear-gradient(0deg, rgba(27,31,69,1) 0%, rgba(27,31,69,1) 70%, rgba(0,164,225,1) 100%);
    }
    .content-bg-gcolor-light-mono{
        background: rgb(56, 56, 56);
        background: linear-gradient(0deg, rgba(30,30,30,1) 0%, rgba(60,60,60,1) 70%, rgba(100,100,100,1) 100%);
    }
    .content-bg-gcolor-dark{
        background: rgb(27,31,69);
        background: linear-gradient(0deg, rgb(18, 20, 35) 0%, rgba(27,31,69,1) 70%, rgb(5, 59, 79) 100%);
    }
    .content-bg-gcolor-dark-mono{
        background: rgb(27,31,69);
        background: linear-gradient(0deg, rgb(31, 31, 31) 0%, rgb(47, 47, 47) 70%, rgb(91, 91, 91) 100%);
    }
</style>