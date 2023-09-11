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
                                365 dias para a abertura 
                            </p>
                            <p
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-white'"
                            >
                                07/07/2024
                            </p>  
                        </div>

                        <div 
                        class="py-0 w-100"
                        :class="appStore.isMobile || appStore.isTablet ?
                        'px-4' : 'pe-4' "
                        >
                            <v-progress-linear
                            :model-value="50"
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
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam
                        nonumy eirm od tem por invidunt ut
                        labore et dolore m agna aliquyam
                        erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores.
                    </p>
                    <v-btn 
                    class="bg-primary letter-normal mt-6 px-4"
                    density="comfortable"
                    rounded
                    color="deep-purple-accent-4"
                    :min-width="appStore.isMobile ? '100%' : '240' "
                    @click="devAlert('Desenvolver Cápsula do tempo')"
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
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const devAlert = (msg) => {
        alert(msg)
    }
</script>

<style scoped>
    .bg-card-icon-opacity{
        opacity: .1;
    }

</style>