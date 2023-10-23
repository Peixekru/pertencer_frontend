<template>

    <v-container fluid 
    class="fill-height px-0 pt-0 pb-0"
    :class="appStore.isDarkMode ? 'container-dark' : 'container-light' "
    > 


        <v-container fluid
        class="pa-0 fill-height"
        :class="appStore.isDarkMode ? 
        'bg-home-img-dark' : 'bg-home-img-light' "
        
        > 

            <v-container
            :class="appStore.appData.firstAccess == 3  ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn'"
            >

                <!--Primeiro acesso -> Overlay perdura até welcomeStep 6 -->
                <WelcomeModalFx 
                v-if="appStore.welcomeStepCounter > 0  && 
                appStore.welcomeStepCounter <= 6 "
                />

                <v-container 
                class="mt-12 px-0 pa-0"
                >
                    <div class="d-flex justify-start mx-4 mt-16 mb-10 animate__animated animate__fadeIn animate__delay-1s">
                        <div>
                            <v-img
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            width="72"
                            src="../assets/img/home-title-icon.svg"
                            />
                        </div>

                        <div class="v-col-lg-6 pe-12">
                            <v-img
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            min-width="200"
                            max-width="460"
                            src="../assets/img/logo-home-type.svg"
                            /> 
                            
                            <p class="text-h6 font-weight-light text-medium-emphasis mt-4">
                                Estamos empolgados em contar com o seu talento e dedicação 
                                nessa jornada de sucesso!
                            </p>
                        </div>
                    </div>
                    
                    <v-row class="mx-4">
                        <v-col
                        v-for="(i, index) in appStore.appData.unidades" :key="index"
                        cols="12" sm="6" md="4" lg="3" xxl="2"
                        >      
                            <div 
                            class="d-flex justify-center"
                            :class = "i > 1 ? 'opacity-fill' : '' ">
                                <!--Card Component-->
                                <UnidadeCard 
                                :numCard = "index" 
                                :title = "i.title"
                                :cardStatus = "i.status"
                                :cardImg = "i.image"
                                :progress = "useProgressCalc('progressBar', index)"
                                :cPage = "useProgressCalc('progressNum', index)"
                                :lPage = "useProgressCalc('total', index)"
                                :class = "appStore.welcomeStepCounter == 2 || appStore.welcomeStepCounter == 7 ? index == 0 ? 'card-level' : '' : 
                                appStore.welcomeStepCounter == 15 ? 'card-level' : '' "
                                />
                            </div>   
                        </v-col>
                    </v-row>

                        <!--cards especiais-->
                        <HomeSpecialCards
                        class="mt-16"
                        />

                    <div class="spacer" />

                </v-container> 
            </v-container>

        </v-container>

        <v-container fluid 
        class="img-pos"
        >
            <v-img
            class="mx-auto animate__animated animate__fadeIn animate__delay-1s"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            max-width="200"
            src="../assets/img/login-footer-logo.svg"
            />
        </v-container>

    </v-container>

</template>


<script setup>
    import { onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'
    import { useTheme } from "vuetify"
    import { useProgressCalc } from '@/components/composables/useProgress'
    import { useApiStore } from '@/store/api'
    import UnidadeCard from '@/components/UnidadeCard.vue'
    import HomeSpecialCards from '@/components/HomeSpecialCards.vue'
	import WelcomeModalFx from '@/components/WelcomeModalFx.vue';

    const appStore = useAppStore() 
    const router = useRouter()
    const theme = useTheme()
    const apiStore = useApiStore()
    
    appStore.currentRoute = router.currentRoute.value.fullPath

    onMounted( () => {
        
        //Inicializa os primeiros itens
        appStore.appData.unidades[0].status = 1
        appStore.appData.unidades[0].content[0].lessons[0].block = 1

        //Aplica o thema 
        theme.global.name.value = appStore.appData.colorTheme
        //Verifica se thema é escuro ou claro
        appStore.isDarkMode = theme.global.current.value.dark     

        //Inicia os welcomeSteps -> 1
        if (appStore.appData.firstAccess == 3){ 
            appStore.welcomeStepCounter = 1 
            console.log('welcomeSteps = ' + appStore.welcomeStepCounter)
        } else if (appStore.appData.firstAccess == 7) {
            //Atualiza o localStorage
            appStore.welcomeStepCounter = 15
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
            console.log(appStore.appData.firstAccess)

            ///FINALIZA O PRIMEIRO ACESSO
            //Atualiza backend
            const userId = JSON.parse(localStorage.getItem('userId'));
            //port / path / data
            apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

            //User Feedback
            appStore.globalMsg('Você já sabe tudo sobre a plataforma. Aproveite os conteúdos! ', 'success')

        } else{
            appStore.welcomeStepCounter = 0
            console.log('welcomeSteps = ' + appStore.welcomeStepCounter)
        }

    })
    
</script>


<style scoped>
    .bg-home-img-light {
        background: url(../assets/img/home-bg-img-light.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top; 
        background-attachment: fixed;
        z-index: 0;
    }
    .bg-home-img-dark {
        background: url(../assets/img/home-bg-img-dark.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top; 
        background-attachment: fixed;
    }
    .opacity-fill {
        opacity: 0.5;
    }
    .img-pos{
        position: absolute;
        z-index: 2000;
        bottom: 20px;
        left: 0;
    }
    .spacer{
        height: 110px;
    }
    .title-align{
        margin-left: 15.5%;
    }
    .custom-container-w{
        padding: 0 200px !important;
    }
    .card-level{
        position: relative;
        z-index: 5000;
    }
    .anim-card{
        animation: pulse; 
        animation-duration: 1s;
    }
</style>