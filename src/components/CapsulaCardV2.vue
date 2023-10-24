<template>
    <v-col 
    class=""
    cols="12" sm="6" md="4" lg="3" xxl="2"
    >
        <v-img
        cover
        :src="appStore.isDarkMode ? 
        'https://placehold.co/600x600/1C252E/22303E?text=++image++Cápsula&font=montserra' : 
        'https://placehold.co/600x600/fff/eaeaea?text=++image++Cápsula&font=montserra' "
        :aspect-ratio="1"
        max-width="460"
        class="rounded-circle elevation-6 mouse-click d-flex align-center"
        @click="appStore.capsulaModal = true"
        >

            <div class="text-center">

                <v-progress-circular
                :rotate="360"
                :size="270"
                :width="12"
                :model-value="value"
                color="secondary"
                >
                    <v-container class="d-flex flex-column align-center mt-2">
                        <v-img 
                        :class="appStore.isDarkMode ? 'white-svg' : ''" 
                        src="../assets/img/side-icon-1.svg"
                        width="70" 
                        />
                        
                        <h5 class="text-h5 text-primary font-weight-bold py-2">
                            Cápsula do tempo
                        </h5>
                            <p 
                            class="font-weight-bold"
                            :class="appStore.isDarkMode ? 'text-white' : 'text-primary'"
                            >
                                {{ appStore.countdown }} dias para a abertura 
                            </p>

                            <p 
                            :class="appStore.isDarkMode ? 'text-white' : 'text-primary' "
                            >
                                {{ appStore.sendDate }}
                            </p>

                            <h3 
                            class="text-h3 font-weight-bold text-primary ps-1"
                            >
                                {{ value }}<span class="text-subtitle-1">%</span>
                            </h3>
                    
                    </v-container>

                </v-progress-circular>

            </div>
        </v-img>
    </v-col>
</template>

<script setup>
    import{ ref, onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const value = ref(appStore.progress)

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

    .mouse-click{
        cursor: pointer;
    }

</style>