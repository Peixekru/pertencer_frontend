<template>
    <v-col 
    cols="12" sm="6" md="3" lg="3" xxl="2"
    >
        <div class="text-center">
            <v-container class="d-flex flex-column align-center mt-2">
                <h5 class="text-h5 text-info font-weight-bold pt-2 pb-0">
                    Workplace
                </h5>

                <v-container 
                class="py-6 d-flex justify-center"
                :class="appStore.screenWidth > 1280 || appStore.screenWidth < 960 ? 'py-6' : 'py-10'"
                >
                    <v-sheet color="transparent" class="d-flex justify-start align-center">

                        <v-img 
                        :class="appStore.appData.workplace.status == 0 ? 'opacity-control me-4' : '' "
                        src="../assets/img/workplace-icon.svg"
                        width="80" 
                        />
                        
                        <v-icon
                        v-if="appStore.appData.workplace.status == 0"
                        color="info"
                        icon="mdi-lock-outline"
                        size="x-large"
                        />

                        <v-icon
                        v-if="appStore.appData.workplace.status > 0"
                        color="info"
                        icon="mdi-check-circle"
                        size="x-large"
                        class="ms-2"
                        />

                    </v-sheet>
                </v-container>

                <v-btn
                block 
                :class="appStore.appData.workplace.status == 0 ? appStore.isDarkMode ? 'opacity-control text-white' : 'opacity-control text-primary' : appStore.isDarkMode ? 'text-white' : 'text-primary' "
                :disabled="appStore.appData.workplace.status == 0"
                type="button"
                density="comfortable"
                rounded
                class="bg-info letter-normal animate__animated animate__fadeInDown"
                @click="closeToolTip(); appStore.workplaceModal = true"
                >
                    Saiba mais
                </v-btn>
            
            </v-container>

        </div>

        <!--Box info-->
        <template v-if="appStore.appData.workplace.status == 1 && appStore.appData.start.status != 1">
            <WelcomeTooltip 
            :toolTipShow="true" 
            class="toolTip"
            :toolTipPos="2" 
            :toolTipAdjust="[22, 0, 0, 0]" 
            :toolTipW = "340"
            :toolTipH = "1"
            @my-click-event="closeToolTip"
            >
                <template v-slot:btnText>
                    OK
                </template>
                <template v-slot:text>
                    <p>Agora você será conectado a nossa Comunidade de Gotas de Einstein! Prepare-se para conhecer novos integrantes e fazer muitas amizades.</p>
                </template>
            </WelcomeTooltip>
        </template>
    </v-col>
</template>

<script setup>
    import { useAppStore } from '../store/app'
    import WelcomeTooltip from './WelcomeTooltip'
    import { useApiStore } from '../store/api'

    const apiStore = useApiStore();
    const appStore = useAppStore()

    const closeToolTip = () => {

        if(appStore.appData.start.status == 2){

            appStore.appData.workplace.status = 2
        }


        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

    }
</script>

<style scoped>
    .mouse-click{
        cursor: pointer;
    }
    .line-small {
        line-height: .8;
    }
    .opacity-control{
        opacity: .3 !important;
    }

    /*--Box info */
    .toolTip{
        position: relative;
        top: -350px;
    }
</style>