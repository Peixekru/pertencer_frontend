<template>  
    <!--Modal de acessibilidade-->
    <AccessModal />
    
    <v-app-bar 
    :class=" 
    appStore.appScroll > 40 ||
    appStore.isMobile || 
    appStore.currentRoute == '/unidade' ||
    appStore.currentRoute == '/conteudo' ? 
    appStore.isDarkMode ? 'top-opacity-dark blur-fx' : 'top-opacity-light blur-fx' 
    : 'transparent-color' "

    :elevation=" appStore.isMobile || 
    appStore.appScroll > 40 || 
    appStore.currentRoute != '/home' && appStore.navigationStart ? 
    4 : 0 "
     >
     <!--dir="ltr" v-kbd-trap.roving.horizontal.escrefocus-->
        <v-row>

            <!--Left-->
            
            <v-col 
            class="d-flex align-center ms-4 pa-0"
            cols="3" v-if=" !appStore.isMobile ">
                <v-img
                v-if="appStore.screenWidth > 740 && appStore.currentRoute != '/home' && appStore.navigationStart ||
                appStore.appScroll > 40 && appStore.currentRoute  == '/home'"
                class="ms-4 pa-0 animate__animated animate__fadeIn"
                :class="appStore.isDarkMode ? 'white-svg' : appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "
                src="../assets/img/top-logo.svg"
                max-width="200"
                />
            </v-col>
            
            <!--Center-->  
            <v-col 
            class="d-flex justify-space-around"
            >
                <v-toolbar-title>

                    <div 
                    class="d-flex btn-top-grup mt-1" 
                    :class=" !appStore.isMobile ? 'justify-center' : appStore.welcomeStepCounter == 5 || appStore.welcomeStepCounter == 4 && appStore.isMobile
                    ? 'justify-start ms-12' : 'justify-start ms-3' "
                    bg-opacity="0" 
                    >

                            <MobileBackBtns 
                            v-if="appStore.currentRoute != '/home' && appStore.isMobile"
                            />
                            
                            <v-img
                            class="mx-1 mouse-click"
                            :class="appStore.isDarkMode ? 'white-svg' : appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "
                            src="../assets/img/acess-top-icon.svg"
                            max-width="40"
                            @click="appStore.accessModal = true"
                            >
                                <v-btn variant="plain" v-ripple="false"/>
                            </v-img>


    
                            
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
                                    :class="appStore.isDarkMode ? 'white-svg' : appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "
                                    src="../assets/img/quest-top-icon.svg"
                                    max-width="40"
                                    > 
                                        <v-btn variant="plain" v-ripple="false"/>
                                    </v-img>
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
                                                style="opacity: .5;"
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
                                                >
                                                    <v-img   
                                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                                    src="../assets/img/quest-top-btn-icon02.svg"
                                                    width="38"
                                                    style="opacity: .5;"
                                                    /> 
                                                    
                                                    <p class="text-center text-caption text-medium-emphasis mb-1 btn-txt-line">
                                                        FAQ
                                                    </p>
                                                </v-card>

                                                <v-card 
                                                min-width="84"
                                                elevation="2" 
                                                class="pa-2 mx-1 d-flex flex-column align-center"
                                                
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
                                                class="bg-primary text-secondary letter-normal"
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
            cols="3" 
            class="d-flex justify-end align-center me-3">

                <v-btn v-if="appStore.currentRoute == '/home'"
                density="comfortable"
                class="bg-primary mx-2 text-secondary animate__animated animate__fadeInRight"
                rounded
                min-width="180px"
                @click="appStore.videoModal = true"
                >
                    <a>REVER INTRODUÇÃO</a>
                </v-btn>

                <v-btn v-if="appStore.currentRoute == '/conteudo' && appStore.navigationStart"
                density="comfortable"
                class="bg-primary text-secondary me-3 animate__animated animate__fadeIn"
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
                    :class="appStore.isDarkMode ? 'white-svg' : appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "
                    src="../assets/img/btn-back-unidade.svg"
                    max-width="38"
                    min-width="38"
                    @click="$router.push('/home'); appStore.isFinished = false;"
                    >
                        <v-btn variant="plain" v-ripple="false"/>
                    </v-img>
                </a>

            </v-col>
        </v-row>   
    </v-app-bar>



    <!--Primeiro acesso -> 04 -->
    <v-sheet 
    class="pa-0 custom-container" 
    v-if="!appStore.isMobile && appStore.welcomeStepCounter == 4"
    >
        <WelcomeTooltip 
        class="custom-tooltip-pos"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="[12, 0, 0, 120]" 
        @my-click-event="appStore.welcomeStepCounter = 5"
        > 
            <template v-slot:btnText>
				PROSSEGUIR
			</template>
            <template v-slot:text>
                <p>Quer rever o vídeo</p>
                <p>introdutório? Acesse por aqui.</p>
            </template>
        </WelcomeTooltip>
    </v-sheet>

    <!--Primeiro acesso -> 05 -->
    <v-sheet 
    class="pa-0" 
    :class="appStore.isMobile ? 'custom-container-02-mobile' : 'custom-container-02'"
    v-if="appStore.welcomeStepCounter == 5 || appStore.welcomeStepCounter == 4 && appStore.isMobile"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-02-pos-mobile' : 'custom-tooltip-02-pos'"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="appStore.isMobile ?  [-28, 0, 0, -123] : [-8, 0, 0, -22]" 
        @my-click-event="appStore.welcomeStepCounter = 6"
        >
            <template v-slot:btnText>
				PROSSEGUIR
			</template>
            <template v-slot:text>
                Queremos proporcionar a melhor experiência
                possível para todos, por isso, oferecemos alguns
                recursos de acessibilidade para te auxiliar.
            </template>
        </WelcomeTooltip>
    </v-sheet>

    <!--Primeiro acesso -> 06 -->
    <v-sheet 
    class="pa-0" 
    :class="appStore.isMobile ? 'custom-container-02-mobile' : 'custom-container-02'"
    v-if="appStore.welcomeStepCounter == 6"
    >
        <WelcomeTooltip 
        :class="appStore.isMobile ? 'custom-tooltip-03-pos-mobile' : 'custom-tooltip-03-pos'"
        :toolTipShow="true" 
        :toolTipPos="0" 
        :toolTipAdjust="appStore.isMobile ?  [12, 0, 0, -110] : [12, 0, 0, 26]" 
        @my-click-event="appStore.welcomeStepCounter = 7"
        >
            <template v-slot:btnText>
                PROSSEGUIR
            </template>
            <template v-slot:text>
                Quando quiser rever essas dicas,<br/>
                clique aqui.
            </template>
        </WelcomeTooltip>
    </v-sheet>



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

    import WelcomeTooltip from './WelcomeTooltip'

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
    .button:focus {
        border: 2px solid #666;
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

    /*--Primeiro acesso */
    .custom-container{
        position: fixed;
        z-index: 5000;
        right: 228px;
        top: -18px;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        top: -67px;
    }
    .custom-container-02{
        position: fixed;
        z-index: 5000;
        left: 50%;
        top: -18px;
    }
    .custom-container-02-mobile{
        position: fixed;
        z-index: 5000;
        left: 195px;
        top: -18px;
    }
    .custom-tooltip-02-pos{
        position: absolute !important;
        z-index: 5000;
        top: -62px;
    }
    .custom-tooltip-02-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: -52px;
    }
    .custom-tooltip-03-pos{
        position: absolute !important;
        z-index: 5000;
        top: -81px;
    }
    .custom-tooltip-03-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: -81px;
    }
</style>