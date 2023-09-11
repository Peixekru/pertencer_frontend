<template>
    <v-card 
    class="rounded-te-xl mb-6"
    rounded="lg"
    elevation="6"
    :max-width=" appStore.isMobile  ? '100%' : '49%' "
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
                        src="../assets/img/side-icon-2.svg"
                        max-width="22" 
                        />

                        <v-toolbar-title 
                        class="font-weight-bold"
                        :class="appStore.isDarkMode ? 'text-primary' : 'text-white'">
                            Galeria
                        </v-toolbar-title>

                    </v-col>

                    <v-col 
                    class="d-flex justify-end align-center text-caption py-0" 
                    cols="12"
                    lg="6"
                    >
                            <p
                            class="pe-4"
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-white'"
                            >
                            {{ appStore.totalUsers }} pessoas enviaram 
                            <span class="font-weight-bold">{{ appStore.totalGlobalImgs }} imagens!</span>
                            </p>  
                        
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
                    @click="devAlert('Desenvolver Galeria')"
                    >
                    Enviar imagem
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
                src="../assets/img/side-icon-2.svg"
                max-width="156" 
                />
            
            </v-col>
        </v-row>
    </v-card>
</template>



<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    //Armazena o total de usuários que enviaram imagens
    appStore.totalUsers = appStore.appData.galeria.totalUsers
    //Armazena o total de imagen envidas para para todas as galerias
    appStore.totalGlobalImgs = appStore.appData.galeria.content.globalImgs.length


    const devAlert = (msg) => {
        alert(msg)
    }
</script>

<style scoped>
    .bg-card-icon-opacity{
        opacity: .1;
    }

</style>