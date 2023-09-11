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
                    
                            <v-img
                            class="mx-1"
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            src="../assets/img/quest-top-icon.svg"
                            max-width="40"
                            />

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
                    @click="$router.push('/home'); appStore.isFinished = false"
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
    import { useAppStore } from '../store/app'
    import AccessModal from './AccessModal.vue'
    import MobileBackBtns from './MobileBackBtns.vue';
    import SecondaryTopBar from './SecondaryTopBar.vue'

    const appStore = useAppStore()

    const todo = (msg) => {
        alert(msg)
    }
</script>


<style scoped>
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
</style>