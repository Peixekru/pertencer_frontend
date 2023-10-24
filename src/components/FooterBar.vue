<template>
    <v-bottom-navigation
    v-if="appStore.isFinished == true"
    class="bg-secondary footer-shadow animate__animated animate__fadeInUp" 
    height="110" 
    fixed
    >
        <v-container
        fluid
        class="d-flex align-center pa-0"
        :class="appStore.isMobile ? 'flex-column' : 'justify-space-between'"
        >
            <div fluid class="d-flex justify-start align-center pa-0">
                <!--Componente Rating-->
                <RatingStars />

                <div v-if="!appStore.isMobile" class="ms-8">
                    <p :class="appStore.isDarkMode ? '' : 'text-primary'">Próximo conteúdo:</p>

                    <h5
                        class="text-h6 font-weight-light text-title-line"
                        :class="appStore.isDarkMode ? '' : 'text-primary'"
                    >
                        Unidade {{ appStore.nextUnidadeNumber }}: {{ appStore.nextUnidadeTitle }}
                    </h5>
                </div>
            </div>

            <v-btn
                density="comfortable"
                class="bg-primary mx-8"
                rounded
                min-width="180px"
                height="28px"
                @click = "nextObject"
            >
                Prosseguir
            </v-btn>
        </v-container>
    </v-bottom-navigation>        
</template>

<script setup>
    import { useAppStore } from "../store/app";
    import { useRouter } from "vue-router";
    import { useLoadNextObject } from "../components/composables/useLoadObject"

    import RatingStars from "./RatingStars.vue";

    //Inicia a store
    const appStore = useAppStore();

    //Verifica as rotas
    const router = useRouter();
    //Armazena a URI atual
    appStore.currentRoute = router.currentRoute.value.fullPath;

    const nextObject = () => {
        useLoadNextObject(appStore.nextContent)
        appStore.isFinished = false
<<<<<<< HEAD

        //Finaliza etapa -> 5
        if (appStore.welcomeStepCounter == 13){
            //Atualiza o localStorage
            appStore.appData.firstAccess = 6
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
            console.log(appStore.appData.firstAccess)

            appStore.welcomeStepCounter = 14
        }

        //Finaliza etapa -> 6
        if (appStore.appData.firstAccess == 7) {
            appStore.welcomeStepCounter = 15
        }
=======
>>>>>>> parent of 7bf2dd1 (Primeiro acesso)
    }
</script>

<style scoped>
    .footer-shadow {
        box-shadow: rgba(0, 0, 0, 0.4) 0 -4px 8px;
    }
    .text-title-line {
        line-height: 120%;
    }
</style>
