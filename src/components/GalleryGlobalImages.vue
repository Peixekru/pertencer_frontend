<template>
    <v-container fluid
    class="d-flex flex-wrap  pa-2 rounded-lg custom-container">
        <!--Images from system-->
        <v-card
        v-for="(i, index) in appStore.appData.galeria.content.globalImgs.length" :key="index"
        :width="appStore.isMobile ? 82 : 124"
        class="ma-2 rounded-0"
        elevation="2"
        color="transparent"
        >
            <v-img
            width="300"
            :lazy-src="appStore.appData.galeria.content.globalImgs[index].path"
            :src="appStore.appData.galeria.content.globalImgs[index].path"
            :aspect-ratio="1"
            class=" show-image "
            cover
            @click="zoomImage(index)"
            >
                <!--Moldura da imagem-->
                <v-img
                cover
                :src="aplyFrames(appStore.appData.galeria.content.globalImgs[index].style)"
                :aspect-ratio="1"
                class="border-image-pos"
                />

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
    import GalleryZoomImage from './GalleryZoomImage'
    const appStore = useAppStore()

    //Adiciona as molduras na imagem final
    const aplyFrames = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
    }

    const zoomImage = (selectedImg) => {
        appStore.isZoomImg = true
        appStore.selectedImg = selectedImg
        appStore.selectedGallery = 'globalImages'
    }


</script>

<style>
    .custom-container{
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