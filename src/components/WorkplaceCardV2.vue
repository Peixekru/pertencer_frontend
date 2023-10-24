<template>
    <v-col 
    cols="12" sm="6" md="4" lg="3" xxl="2"
    >
        <v-img
        cover
        :src="appStore.isDarkMode ? 
        'https://placehold.co/600x600/1C252E/22303E?text=++image++Starter&font=montserra' : 
        'https://placehold.co/600x600/fff/eaeaea?text=++image++Starter&font=montserra' "
        aspect-ratio="1"
        max-width="460"
        class="rounded-circle elevation-6 mouse-click"
        >

            <div class="text-center">

                <v-container class="d-flex flex-column align-center mt-4">
                    <v-img 
                    :class="appStore.isDarkMode ? 'white-svg' : ''" 
                    src="../assets/img/workplace-icon.svg"
                    width="80" 
                    />
                    
                    <h5 class="text-h5 text-primary font-weight-bold py-1">
                        Workplace
                    </h5>

                    <v-container class="d-flex justify-space-around">


                        <v-btn 
                        variant="tonal"
                        size="x-large"
                        color="primary" 
                        icon="mdi mdi-tooltip-image-outline"
                        />

                    
                    </v-container>

                </v-container>

            </div>
        </v-img>
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
</style>