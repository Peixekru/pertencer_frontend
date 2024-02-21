<template>
    <v-dialog v-model="appStore.videoModal" max-width="1200px">

        <v-sheet
        class="close-btn rounded-pill"
        >
            <v-icon 
            icon="mdi-close-circle-outline" 
            size="48px" 
            :color="appStore.isDarkMode ? 'white' : 'primary'"
            @click="appStore.videoModal = false" 
            />
        </v-sheet>

        <v-card max-width="1200" class="rounded-xl me-6">
            <!--Vimeo-->
            <v-container fluid class="animate__animated animate__fadeInUp">
                <div 
                class="vimeo-container"
                >
                    <iframe
                    src="https://player.vimeo.com/video/885690955?h=ac5bc51c9c&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1"
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
import { useAppStore } from '../store/app'

const appStore = useAppStore()

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

</style>


