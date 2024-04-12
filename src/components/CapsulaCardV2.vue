<template>
    <v-col 
    cols="12" sm="6" md="3" lg="3" xxl="2"
    >
            <div class="text-center">

                <v-container class="d-flex flex-column align-center mt-2">

                    <h5 class="text-h5 text-info font-weight-bold py-2">
                        Cápsula do tempo
                    </h5>

                    <v-container class="d-flex justify-center">
                        <v-sheet color="transparent" class="d-flex justify-start align-center">

                            <v-img 
                            v-if="appStore.countdown != 0"
                            class="me-4"
                            :class="appStore.capsulaInfo.status == 0 ? 'opacity-control' : '' "
                            src="../assets/img/capsula-icon.svg"
                            width="70" 
                            />

                            <v-img 
                            v-if="appStore.countdown == 0"
                            class="animate__animated animate__fadeInLeft"
                            :class="appStore.capsulaInfo.status <= 0 ? 'opacity-control' : '' "
                            src="../assets/img/capsula-icon-open.svg"
                            width="88" 
                            />
                            

                            <div 
                            v-if="appStore.capsulaInfo.status == 1 && appStore.countdown > 0"
                            class="text-h5 font-weight-bold text-info text-start animate__animated animate__fadeInRight line-small"
                            >
                                <p class="text-caption text-white">Faltam</p> 
                                <p> {{ appStore.countdown }} </p> 
                                <p class="text-caption text-white">dias.</p>
                            </div>

                            <v-icon
                            v-if="appStore.capsulaInfo.status == 0"
                            color="info"
                            icon="mdi-lock-outline"
                            size="x-large"
                            />

                            <v-icon
                            v-if="appStore.capsulaInfo.status > 0"
                            color="info"
                            icon="mdi-check-circle"
                            size="x-large"
                            class="ms-2"
                            />

                        </v-sheet>
                    </v-container>

                    <v-btn
                    block 
                    :class="appStore.capsulaInfo.status == 0 ? appStore.isDarkMode ? 'opacity-control text-white' : 'opacity-control text-primary' : appStore.isDarkMode ? 'text-white' : 'text-primary' "
                    :disabled="appStore.capsulaInfo.status == 0"
                    type="button"
                    density="comfortable"
                    rounded
                    class="bg-info letter-normal animate__animated animate__fadeInDown"
                    @click="appStore.capsulaModal = true"
                    >
                        CONSULTAR
                    </v-btn>
                
                </v-container>

            </div>
    </v-col>
</template>

<script setup>
    import{ ref, onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const value = ref(appStore.progress)

    onMounted(() => {
        //Armazena a data de envio
        //appStore.sendDate = appStore.appData.capsula.content.sendDate

        let startDate = new Date(appStore.capsulaInfo.content.startDate)
        let sendDate = new Date(appStore.capsulaInfo.content.sendDate)
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

    console.log(appStore.countdown)

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
</style>