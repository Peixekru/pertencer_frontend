<template>
    <v-card 
    class="rounded-te-xl mb-6"
    rounded="lg"
    elevation="6"
    :max-width=" appStore.isMobile ? '100%' : '49%' "
    >

        <v-sheet 
        :height="appStore.isMobile || appStore.isTablet ? 
        90 : 50" 
        class="d-flex align-center bg-primary"
        >
            <v-toolbar 
            color="transparent" 
            theme="light"
            >
                <v-row>
                    <v-col 
                    class="d-flex justify-start ps-8  py-0"
                    :class="appStore.isMobile || appStore.isTablet ?
                    'mb-1' : '' " 
                    cols="12"
                    lg="6"
                    >
                        <v-img 
                        class="me-2"
                        :class="appStore.isDarkMode ? '' : 'white-svg'" 
                        src="../assets/img/side-icon-1.svg"
                        max-width="28" 
                        />

                        <v-toolbar-title 
                        class="font-weight-bold"
                        :class="appStore.isDarkMode ? 'text-primary' : 'text-white'">
                            Cápsula do tempo
                        </v-toolbar-title>

                    </v-col>

                    <v-col 
                    class="d-flex flex-column align-center py-0" 
                    cols="12"
                    lg="6"
                    >
                        <div 
                        class="d-flex justify-space-between text-caption w-100 pe-4"
                        :class="appStore.isMobile || appStore.isTablet ?
                        'px-4' : 'pe-4' "
                        >
                            <p 
                            class="font-weight-bold"
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-white'">
                                {{ appStore.countdown }} dias para a abertura 
                            </p>
                            <p
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-white'"
                            >
                                {{ appStore.sendDate }}
                            </p>  
                        </div>

                        <div 
                        class="py-0 w-100"
                        :class="appStore.isMobile || appStore.isTablet ?
                        'px-4' : 'pe-4' "
                        >
                            <v-progress-linear
                            :model-value="appStore.progress"
                            :color="appStore.isDarkMode ? 'primary' : 'secondary'"
                            height="10"
                            rounded
                            rounded-bar
                            ></v-progress-linear>
                        </div>                     
                        
                        
                    </v-col>
                    
                </v-row>
            </v-toolbar>
        </v-sheet>


        <v-row
        class="py-4 px-2"
        >
            <v-col
            cols="12"
            sm="8"
            lg="7"
            >
                <v-card-text>
                    <p class="text">
                        {{ appStore.appData.capsula.content.sendMessage }}
                    </p>
                    <v-btn 
                    class="bg-primary letter-normal mt-6 px-4"
                    density="comfortable"
                    rounded
                    color="deep-purple-accent-4"
                    :min-width="appStore.isMobile ? '100%' : '240' "
                    @click="appStore.capsulaModal = true"
                    >
                    Mensagem para o futuro
                    </v-btn>
                </v-card-text> 
            </v-col>
            <v-col
            v-if="!appStore.isMobile"
            class="d-flex align-center pe-8"
            cols=""
            sm="4"
            lg="5"
            >
                <v-img 
                class="my-6 bg-card-icon-opacity"
                :class="appStore.isDarkMode ? 'white-svg' : ''" 
                src="../assets/img/side-icon-1.svg"
                max-width="200"
                />
            
            </v-col>
        </v-row>
    </v-card>   
</template>



<script setup>
    import { onMounted } from 'vue';
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const devAlert = (msg) => {
        alert(msg)
    }

    onMounted(() => {
        //Armazena a data de envio
        appStore.sendDate = appStore.appData.capsula.content.sendDate

        let startDate = new Date(appStore.appData.capsula.content.startDate)
        let sendDate = new Date(appStore.sendDate)
        let currentDate = new Date()

        //Calcula a quantidade de dias restantes para envio
        let difference = sendDate.getTime() - currentDate.getTime()
        let countdown = Math.ceil(difference / (1000 * 3600 * 24))
        if (countdown < 0) { appStore.countdown = 0 } 
        else { appStore.countdown = countdown }

        //Converte o tempo para envio em dias
        let totalDaysCalc = sendDate.getTime() - startDate.getTime()
        let totalDays = Math.abs(Math.ceil(totalDaysCalc / (1000 * 3600 * 24)))

        //Calcula o progresso da barra
        let progressCalc = (currentDate.getTime() - startDate.getTime() )
        let progressDays = Math.ceil(progressCalc / (1000 * 3600 * 24))
        let progressBar = (((progressDays -1) * 100) / totalDays).toFixed(1)

        if(progressBar >= 100){ appStore.progress = 100 } 
        else { appStore.progress = progressBar }
    })
</script>

<style scoped>
    .bg-card-icon-opacity{
        opacity: .1;
    }
    .text {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7; /* number of lines to show */
                line-clamp: 7;
        -webkit-box-orient: vertical;
        width: 480px;
}
</style>