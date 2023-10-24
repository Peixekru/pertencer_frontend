<template>
    <v-col 
    cols="12" sm="6" md="4" lg="3" xxl="2"
    >
        <v-img
        cover
        :src="appStore.isDarkMode ? 
        'https://placehold.co/600x600/1C252E/22303E?text=++image++Galeria&font=montserra' : 
        'https://placehold.co/600x600/fff/eaeaea?text=++image++Galeria&font=montserra' "
        aspect-ratio="1"
        max-width="460"
        class="rounded-circle elevation-6 mouse-click"
        @click="appStore.galleryModal = true"
        >

            <div class="text-center">

                <v-container class="d-flex flex-column align-center mt-4">
                    <v-img 
                    :class="appStore.isDarkMode ? 'white-svg' : ''" 
                    src="../assets/img/side-icon-2.svg"
                    width="60" 
                    />
                    
                    <h5 class="text-h5 text-primary font-weight-bold py-2">
                        Galeria de Fotos
                    </h5>
                        <p 
                        class="font-weight-bold"
                        :class="appStore.isDarkMode ? 'text-white' : 'text-primary'"
                        >
                            {{ appStore.totalUsers }} pessoas enviaram
                        </p>

                        <h3 
                        class="text-h3 font-weight-bold text-primary"
                        >
                            {{ appStore.totalGlobalImgs }}
                        </h3>
                        <h6 class="text-h6 text-primary">imagens</h6>
                
                </v-container>


            </div>
        </v-img>
    </v-col>
</template>

<script setup>
    import{ ref } from 'vue'
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const value = ref(appStore.progress)



</script>

<style scoped>

    .mouse-click{
        cursor: pointer;
    }

</style>