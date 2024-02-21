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
                        src="../assets/img/rocket-icon.svg"
                        max-width="22" 
                        />

                        <v-toolbar-title 
                        class="font-weight-bold"
                        :class="appStore.isDarkMode ? 'text-primary' : 'text-white'">
                            Começando bem
                        </v-toolbar-title>

                    </v-col>
                </v-row>
            </v-toolbar>
        </v-sheet>


        <v-row
        class="py-8 px-2"
        >
            <v-col
            class="pb-1"
            cols="12"
            lg="6"
            >
                <v-card-text class="py-0">
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam
                        nonumy eirm od tem por invidunt ut
                        labore et dolore m agna aliquyam
                        erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores.
                    </p>


                </v-card-text> 
            </v-col>
            <v-col
            class="d-flex align-start flex-column "
            :class="appStore.isMobile || appStore.isTablet ? 
            'px-6' : 'pe-8' "
            cols="12"
            lg="6"
            >
                <v-btn 
                class="bg-primary letter-normal my-1 px-4"
                density="comfortable"
                rounded
                color="deep-purple-accent-4"
                :min-width="appStore.isMobile ? '100%' : '258' "
                @click="devAlert('Desenvolver Checklist de Ambientação')"
                >
                    Checklist de ambientação
                </v-btn>

                <v-btn 
                class="bg-primary letter-normal my-1 px-4"
                density="comfortable"
                rounded
                color="deep-purple-accent-4"
                :min-width="appStore.isMobile ? '100%' : '258' "
                @click="devAlert('Desenvolver Recomendações')"
                >
                    Recomendações
                </v-btn>

                <v-btn 
                class="bg-primary letter-normal my-1 px-4"
                density="comfortable"
                rounded
                color="deep-purple-accent-4"
                :min-width="appStore.isMobile ? '100%' : '258' "
                @click="devAlert('Desenvolver SPA')"
                >
                    SPA
                </v-btn>
            
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