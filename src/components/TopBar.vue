<template>  
    <!--Modal de acessibilidade-->
    <AccessModal />

    <v-app-bar 
    :class=" appStore.isMobile && 
    appStore.currentRoute != '/conteudo'|| 
    appStore.appScrol > 40 && 
    appStore.currentRoute != '/conteudo'|| 
    appStore.currentRoute == '/unidade' && appStore.navigationStart ?  
    appStore.isDarkMode ? 'top-opacity-dark blur-fx' : 'top-opacity-light blur-fx' :
    appStore.appScrol > 40 || 
    appStore.currentRoute == '/conteudo' && appStore.navigationStart ?  
    appStore.isDarkMode ? 'container-dark' : 'container-light'
    : 'transparent-color' "

    :elevation=" appStore.isMobile || 
    appStore.appScrol > 40 || 
    appStore.currentRoute != '/home' && appStore.navigationStart ? 
    4 : 0 "
    >
        <v-row>

            <!--Left-->
            <v-col 
            class="d-flex align-center"
            cols="2" v-if=" !appStore.isMobile ">
                <v-img
                v-if="appStore.screenWidth > 740 && appStore.currentRoute != '/home' && appStore.navigationStart"
                class="ms-4 animate__animated animate__fadeIn"
                :class="appStore.isDarkMode ? 'white-svg' : '' "
                src="../assets/img/top-logo-unidade.svg"
                min-width="300"
                />
            </v-col>
            
            <!--Center-->  
            <v-col 
            class="d-flex justify-space-around"
            >
                <v-toolbar-title>

                    <div 
                    class="d-flex btn-top-grup " 
                    :class=" !appStore.isMobile ? 'justify-center' : 'justify-start', 'ms-3' "
                    bg-opacity="0" >

                            <MobileBackBtns 
                            v-if="appStore.currentRoute != '/home' && appStore.isMobile"
                            />
                    
                            <v-img
                            class="mx-1 mouse-click"
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            src="../assets/img/acess-top-icon.svg"
                            max-width="40"
                            @click="appStore.accessModal = true"
                            />

                        

                            <!--Menu quest compoent-->
                            <v-menu 
                            class="d-flex justify-center" 
                            width="200px"
                            v-model="showMenu"
                            >
                                <!--btn quest-->
                                <template 
                                v-slot:activator="{ props }"
                                >
                                    <v-img
                                    v-bind="props"
                                    class="mx-1"
                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                    src="../assets/img/quest-top-icon.svg"
                                    max-width="40"
                                    />           
                                </template>

                                <!--Tooltip-->
                                <v-icon
                                size="x-large"
                                color="surface"
                                icon="mdi-triangle"
                                class="h-auto mt-2 tool-tip animate__animated animate__fadeInUp"
                                />

                                <!--Menu quest-->
                                <v-card
                                class="mx-auto rounded-lg "
                                :class="!appStore.isMobile ? 'custom-card' : 'custom-card-mobile' "
                                >
                                    <v-container class="d-flex justify-space-between align-start">

                                        <v-img 
                                        v-if="!appStore.isMobile"
                                        class="mx-1 animate__animated animate__shakeY"
                                        :class="appStore.isDarkMode ? 'white-svg' : '' "
                                        src="../assets/img/quest-menu-img.svg"
                                        width="60"
                                        /> 

                                        <v-sheet 
                                        class="d-flex flex-column"
                                        :class="!appStore.isMobile ? 'ms-6' : ''"
                                        >

                                            <p class="text-body-2 font-weight-medium">
                                            Como posso te ajudar agora?
                                            </p>

                                            <v-sheet 
                                            class="d-flex justify-space-between px-1 py-2 my-3 rounded-lg custom-menu-shadow"
                                            >
                                                <v-card 
                                                min-width="84"
                                                elevation="2" 
                                                class="pa-2 mx-1 d-flex flex-column align-center"
                                                @click="todo('Criar fluxo de Dúvida')"
                                                >
                                                    <v-img
                                                    class="mb-2"
                                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                                    src="../assets/img/quest-top-btn-icon01.svg"
                                                    width="18"
                                                    /> 
                                                    <p class="text-center text-caption text-medium-emphasis btn-txt-line">
                                                        O que fazer <br/> nessa tela?
                                                    </p>
                                                </v-card>

                                                <v-card 
                                                min-width="84"
                                                elevation="2" 
                                                class="pa-2 mx-1 d-flex flex-column align-center"
                                                @click="todo('Criar fluxo do FAQ')"
                                                >
                                                    <v-img   
                                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                                    src="../assets/img/quest-top-btn-icon02.svg"
                                                    width="38"
                                                    /> 
                                                    <p class="text-center text-caption text-medium-emphasis mb-1 btn-txt-line">
                                                        FAQ
                                                    </p>
                                                </v-card>

                                                <v-card 
                                                min-width="84"
                                                elevation="2" 
                                                class="pa-2 mx-1 d-flex flex-column align-center"
                                                @click="todo('Criar fluxo de Contato')"
                                                >
                                                    <v-img
                                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                                    src="../assets/img/quest-top-btn-icon03.svg"
                                                    width="28"
                                                    /> 
                                                    <p class="text-center text-caption text-medium-emphasis mb-1 btn-txt-line">
                                                        Contato
                                                    </p>
                                                </v-card>

                                                
                                            </v-sheet>

                                            <v-btn 
                                                class="bg-primary letter-normal"
                                                density="comfortable"
                                                color="deep-purple-accent-4"
                                                elevation="0"
                                                rounded
                                                >
                                                FECHAR AJUDA
                                            </v-btn>

                                        </v-sheet>


                                    </v-container>

                                </v-card>

                            </v-menu>
                    

                    </div>
                </v-toolbar-title>
            </v-col>

            <!--Righ--> 
            <v-col 
            v-if="!appStore.isMobile"
            cols="2" 
            class="d-flex justify-end align-center me-3">

                <v-btn v-if="appStore.currentRoute == '/home'"
                density="comfortable"
                class="bg-primary mx-2 animate__animated animate__fadeInRight"
                rounded
                min-width="180px"
                @click="todo('Criar fluxo de introdução.')"
                >
                    REVER INTRODUÇÃO
                </v-btn>

                <v-btn v-if="appStore.currentRoute == '/conteudo' && appStore.navigationStart"
                density="comfortable"
                class="bg-primary me-3 animate__animated animate__fadeIn"
                rounded
                min-width="180px"
                @click="$router.push('/unidade'); 
                appStore.isFinished = false"
                >
                    VOLTAR À UNIDADE
                </v-btn>

                <a>
                    <v-img
                    v-if="appStore.currentRoute != '/home' && appStore.navigationStart"
                    class="cursor-hand-click animate__animated animate__fadeInRight"
                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                    src="../assets/img/btn-back-unidade.svg"
                    max-width="38"
                    min-width="38"
                    @click="$router.push('/home'); appStore.isFinished = false;"
                    />
                </a>

            </v-col>
        </v-row>   
    </v-app-bar>

    <!--AppBar secundária-->
    <SecondaryTopBar 
    v-if="appStore.currentRoute == '/unidade' && appStore.navigationStart"
    />

</template>


<script setup>
    import { ref, watch } from 'vue';
    import { useAppStore } from '../store/app'
    import AccessModal from './AccessModal.vue'
    import MobileBackBtns from './MobileBackBtns.vue';
    import SecondaryTopBar from './SecondaryTopBar.vue'

    const appStore = useAppStore()

    const showMenu = ref(false)

    watch(showMenu, () => {
        appStore.globalOverlay = !appStore.globalOverlay
    })

    const todo = (msg) => {
        alert(msg)
    }
</script>




<style lang="scss" scoped>
    .btn-top-grup{
        width: 100%;
    }
    .top-opacity-light{
        background-color: rgba(255, 255, 255, 0.7) !important; 
    }
    .top-opacity-dark{
        background-color: rgba(20, 20, 20, 0.9) !important;     
    }
    .blur-fx{
        backdrop-filter: blur(8px);
    }
    .transparent-color{
        background-color: transparent !important;
    }
    .mouse-click{
        cursor: pointer;
    }
    .custom-card{
        transform: translateX(-50%);
    }
    .custom-card-mobile{
        left: -56px;
    }
    .custom-menu-shadow{
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.4);
    }
    .btn-txt-line{
        line-height: 1.1;
        font-size: 0.65em !important;
    }

    .tool-tip{
        line-height: .6 !important;
        margin-left: 4px !important;
    }
</style>