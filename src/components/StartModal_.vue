<template>
    <v-dialog
    v-model="appStore.startModal"
    max-width="1200px"
    >

    <v-sheet 
    color="transparent"
    elevation="0"
    class="p-0 me-12 animate__animated animate__fadeInUp"
    :class="appStore.isMobile ? 'text-out-mobile' : 'text-out'"
    >    
        <v-sheet
        elevation="0"
        color="rgba(0,0,0, .7)"
        class="text-white pa-3 transition-control"
        :class="isBoxOpen == true? 'showBox' : 'hideBox' "
        >
            <h5 class="text-h6">Conheça alguns recursos fundamentais para o início de sua jornada.</h5>
            <p>Canais de Comunicação</p>

        </v-sheet>
        <v-btn 
        v-if="appStore.isMobile == false"
        :icon="isBoxOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        variant="tonal" class="mt-1"
        :class="isBoxOpen ? '' : 'btn-pos'" 
        @click="isBoxOpen = !isBoxOpen"
        />
    </v-sheet>


    <v-sheet
        class="close-btn rounded-pill"
        >
            <v-icon 
            icon="mdi-close-circle-outline" 
            size="48px" 
            :color="appStore.isDarkMode ? 'white' : 'primary'"
            @click="isBoxOpen = true; appStore.startModal = false" 
            />
        </v-sheet>

        <v-card max-width="1200" class="rounded-xl me-6">
            <!--Vimeo-->
            <v-container fluid class="animate__animated animate__fadeInUp">
                <div 
                class="vimeo-container"
                >
                    <iframe
                    src="https://player.vimeo.com/video/885695798?h=92a9070d27&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1"
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    class="vimeo-player" 
                    />
                </div>
            </v-container>
        </v-card>

    </v-dialog>

</template>

<script setup>

    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const isBoxOpen = ref(true)
</script>

<style scoped>
    .vimeo-container{
        padding:56.25% 0 0 0;
        position:relative; 
    }
    .vimeo-player{
        position:absolute; 
        top:0; 
        left:0; 
        width:100%; 
        height:100%; 
        border-radius: 10px
    }
    .video-btn-custom{
        scale: 2;
    }

    .close-btn{
        position: absolute;
        z-index: 1000;
        right: 0;
        top: -30px;
    }

    .transition-control{
        transition: opacity .5s ease-in-out;
    }
    .text-out{
        position: absolute;
        top:25px;
        left: 25px;;
        z-index: 3000;
    }

    .text-out-mobile{
        position: absolute;
        top: -165px;
        left: 25px;;
        z-index: 3000;
    }

    .showBox{
        opacity: 1 !important;
    }
    .hideBox{
        opacity: 0 !important;
    }

    .btn-pos{
        transform: translateY(-85px)
    }
</style>


