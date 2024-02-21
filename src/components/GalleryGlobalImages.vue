<template>
    <v-container fluid
    class="d-flex flex-wrap  pa-2 rounded-lg custom-container-gallery">
        <!--Images from system-->
        <v-card
        v-for="(i, index) in appStore.appData.galeria.content.globalImgs" :key="index"
        :width="appStore.isMobile ? 82 : 124"
        class="ma-2 rounded-0"
        elevation="2"
        color="transparent"
        >
            <v-img
            width="300"
            :lazy-src="i.thumb"
            :src="i.thumb"
            :aspect-ratio="1"
            class="show-image"
            :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
            cover
            @click="zoomImage(index)"
            >
                <!--Load Image-->
                <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                    color="primary"
                    indeterminate
                    ></v-progress-circular>
                </div>
                </template>    
            </v-img>

        </v-card>


        <!--Zoom image component-->
        <GalleryZoomImage :aplyFrames="aplyFrames" />

    </v-container>
</template>

<script setup>
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import GalleryZoomImage from './GalleryZoomImage'

    const appStore = useAppStore()
    const apiStore = useApiStore()

    //Adiciona as molduras na imagem final
    const aplyFrames = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
    }

    const zoomImage = (selectedImg) => {
        appStore.isZoomImg = true
        appStore.selectedImg = selectedImg
        appStore.selectedGallery = 'globalImages'
    }


    apiStore.getGlobalImgs('/getgallery/', '40')


    


</script>

<style>
    .custom-container-gallery{
        background-color: rgba(100, 100, 100, .1);
        box-shadow: inset 1px 1px 4px rgba( 0, 0, 0, .1);
    }
    .hide-image{
        opacity: .3;
        transition: opacity 1s;
    }
    .show-image{
        opacity: 1;
        transition: opacity 1s;
    }
    .anim-delet-image{
        animation: fadeOutDown; 
        animation-duration: 2s

    }
</style>