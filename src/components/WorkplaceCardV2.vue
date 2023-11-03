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
                            ></v-icon>

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
                    @click="appStore.galleryModal = true"
                    >
                        ACESSAR
                    </v-btn>
                
                </v-container>

            </div>
    </v-col>
</template>

<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()
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