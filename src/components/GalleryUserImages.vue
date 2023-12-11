<template>
    <v-container fluid
    class="d-flex flex-wrap  pa-2 rounded-lg custom-container">

        <v-card
        v-for="(i, index) in appStore.appData.galeria.content.userImgs.length" :key="index"
        :width="appStore.isMobile ? 82 : 124"
        class="ma-2 rounded-0"
        elevation="0"
        color="transparent"
        >
            <v-img
            width="300"
            :lazy-src="appStore.appData.galeria.content.userImgs[index].path"
            :src="appStore.appData.galeria.content.userImgs[index].path"
            :aspect-ratio="1"
            class="elevation-2"
            :class=" !appStore.appData.galeria.content.userImgs[index].visible ? 
            appStore.appData.access.color == 1 ? 'hide-image grayscale-filter' : 'hide-image' :
            appStore.appData.access.color == 1 ? 'show-image grayscale-filter' : 'show-image' "
            cover
            :id="'userImage' + index"
            @click="zoomImage(index)"
            >
                <!--Moldura da imagem-->
                <v-img
                cover
                :src="aplyFrames(appStore.appData.galeria.content.userImgs[index].style)"
                :aspect-ratio="1"
                class="border-image-pos"
                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
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

            <div class="d-flex justify-space-around mt-2">
                <!--mdi mdi-eye-outline-->
                <v-icon 
                v-if="appStore.appData.galeria.content.userImgs[index].visible"
                class="ms-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi mdi-eye-outline"
                @click="hideImage(index)"
                />
                <v-icon 
                v-else
                class="ms-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-eye-off-outline"
                @click="hideImage(index)"
                />
                
                <v-icon 
                class="mx-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-loupe" 
                @click="zoomImage(index)"
                />

                <v-icon 
                class="me-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-trash-can-outline" 
                @click="deletImage(index)"
                />
            </div>

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
        return  new URL(`../assets/img/galleryFrame-${index}.png`, import.meta.url).href
    }

    const zoomImage = (selectedImg) => {
        appStore.isZoomImg = true
        appStore.selectedImg = selectedImg
        appStore.selectedGallery = 'userImages'
    }

    const hideImage = (index) => {
        appStore.appData.galeria.content.userImgs[index].visible =
        !appStore.appData.galeria.content.userImgs[index].visible

        /*
        if(appStore.appData.galeria.content.userImgs[index].visible){
            appStore.appData.galeria.content.globalImgs.unshift(appStore.imgObject);
        }else{
            appStore.appData.galeria.content.globalImgs.shift();
        }
        */
    }

    const  deletImage = (index) => {

        appStore.appData.galeria.content.userImgs.splice(index, 1); 

        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

    }


</script>

<style>
    .custom-container{
        background-color: rgba(100, 100, 100, .1);
        box-shadow: inset 1px 1px 4px rgba( 0, 0, 0, .1);
    }
    .hide-image{
        opacity: .3 !important;
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