<template>

    <v-container fluid 
    class="fill-height px-0 pt-0 pb-0"
    :class="appStore.isDarkMode ? 'container-dark' : 'container-light' "
    >

        <!--Vídeo de background-->
        <div 
        :class="appStore.isDarkMode ? 
        appStore.appData.access.color == '0' ? 'video-overlay' : 'video-overlay grayscale-filter' : 
        appStore.appData.access.color == '0' ? 'video-overlay-clean' : 'video-overlay-clean grayscale-filter'"
        >
            <video 
            id="bg-video" 
            autoplay loop muted poster="../assets/img/intro-video-cover.png">
                <source v-if="!appStore.blockAnimation" src="../assets/img/intro-video.mp4" type="video/mp4">
            </video>
        </div>

        <!--</v-container>-->
        <!--<v-container fluid
        class="pa-0 fill-height"
        :class="appStore.isDarkMode ? 
        'bg-home-img-dark' : 'bg-home-img-light' "
        > -->

            <v-container
            class="fill-height"
            :class="appStore.appData.firstAccess == 3  ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn'"
            >
                <!--Primeiro acesso -> Overlay perdura até welcomeStep 6 -->
                <WelcomeModalFx 
                v-if="appStore.welcomeStepCounter > 0  && 
                appStore.welcomeStepCounter <= 6 || appStore.isUnidadeFinished == true || appStore.allFinished == true"
                />

                <v-container
                class="mt-16 px-0 pa-0"
                >
                    <div 
                    class="mx-4 mt-16 mb-10 animate__animated animate__fadeIn animate__delay-1s"
                    style="position: relative; z-index: 500;"
                    >

                            <v-img
                            max-width="380"
                            src="../assets/img/logo-home-type.svg"
                            /> 
                            
                            <p  
                            class="text-h6 font-weight-light text-medium-emphasis pt-6"
                            style="color:white !important;"
                            >
                                PROGRAMA DE INTEGRAÇÃO E SOCIALIZAÇÃO DA PESSOA COLABORADORA
                            </p>

                    </div>
                    
                    <v-row>
                        <v-col
                        class="pa-4"
                        v-for="(i, index) in appStore.appData.unidades" :key="index"
                        cols="12" sm="6" md="6" lg="3" xxl="2"
                        >    
                            <!--Container usado que traz o Card 1 para o topo da fila z-index => " card-level "-->
                            <v-sheet
                            color="transparent"
                            class="pa-0"
                            :class = "appStore.welcomeStepCounter == 2 || appStore.welcomeStepCounter == 7 ? 
                                index == 0 ? 'card-level' : '' : 
                                appStore.welcomeStepCounter == 15 ? 'card-level' : '' "
                                
                            >
                            
                                <div 
                                class="d-flex justify-center"
                                :class = "i > 1 ? 'opacity-fill' : '' ">
                                    <!--Card Component-->
                                    <UnidadeCard 
                                    :numCard = "index" 
                                    :title = "i.title"
                                    :cardStatus = "i.status"
                                    :cardImg = "getImg(index + 1)"
                                    :progress = "useProgressCalc('progressBar', index)"
                                    :cPage = "useProgressCalc('progressNum', index)"
                                    :lPage = "useProgressCalc('total', index)"
                                    />
                                </div>   

                            </v-sheet>

                        </v-col>
                    </v-row>

                        <!--cards especiais-->
                        <HomeSpecialCards
                        class="mt-16"
                        style="position: relative; z-index: 500;"
                        />


                    <div class="spacer" />

                </v-container> 
            </v-container>

        <v-container fluid 
        class="img-pos"
        >
            <v-img
            class="mx-auto animate__animated animate__fadeIn animate__delay-1s"
            max-width="200"
            src="../assets/img/home-footer-logo.svg"
            />
        </v-container>

    </v-container>


    <!--Final course msg-->
    <FinishAllMsg  v-if="appStore.allFinished == true"/>

    <!--Final das unidades msg-->
    <FinishUnidadeMsg  v-if="appStore.isUnidadeFinished == true"/>


</template>


<script setup>
    import { onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'
    import { useTheme } from "vuetify"
    import { useContrastSelect, useColorSelect} from "@/components/composables/useSystemStyle"
    import { useProgressCalc } from '@/components/composables/useProgress'
    import UnidadeCard from '@/components/UnidadeCard.vue'
    import HomeSpecialCards from '@/components/HomeSpecialCards.vue'
	import WelcomeModalFx from '@/components/WelcomeModalFx.vue'

    import FinishAllMsg from '@/components/FinishAllMsg'
    import FinishUnidadeMsg from '@/components/FinishUnidadeMsg'

    //Sons dos botões
    import { useBeepSound }  from '@/components/composables/useSounds'


    const appStore = useAppStore() 
    const router = useRouter()
    const theme = useTheme()
    
    appStore.currentRoute = router.currentRoute.value.fullPath

    const getImg = (index) => {
    return  new URL(`../assets/img/unidade-card-${index}.png`, import.meta.url).href
    //return  new URL(`https://placehold.co/80x80/eaeaea/ffffff?text=img${index}&font=montserrat`).href
    } 
    

    onMounted( () => {

        //Inicializa os primeiros itens
        appStore.appData.unidades[0].status = 1
        appStore.appData.unidades[0].content[0].lessons[0].block = 1
        appStore.appData.unidades[0].content[0].lessons[0].selected = 1


        //Aplica o thema 
        theme.global.name.value = useContrastSelect(appStore.appData.access.contrast, appStore.appData.access.color == 0)
        theme.global.name.value = useColorSelect(appStore.appData.access.color, theme.global.current.value.dark);
        //theme.global.name.value = appStore.appData.colorTheme
        //Verifica se thema é escuro ou claro
        appStore.isDarkMode = theme.global.current.value.dark     



        //Inicia os welcomeSteps -> 1
        if (appStore.appData.firstAccess == 3){ 
            appStore.welcomeStepCounter = 1 
        } else if (appStore.appData.firstAccess == 7) {
            //Atualiza o localStorage
            appStore.welcomeStepCounter = 15
            localStorage.setItem('localAppData', JSON.stringify(appStore.appData));            

        }else if (appStore.appData.firstAccess == 'finished') {
            appStore.welcomeStepCounter = 'finished'
        }
        
        console.log('welcomeSteps = ' + appStore.welcomeStepCounter)

        //inicia som nos botões
        useBeepSound()

    })

    
</script>



<style lang="scss" scoped>
    @import '../styles/main.scss';

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