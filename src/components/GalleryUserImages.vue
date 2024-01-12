<template>
    <v-container fluid
    class="d-flex flex-wrap  pa-2 rounded-lg custom-container-user-galery">

        <v-card
        v-for="(item, i) in appStore.imgRes" :key="i"
        :width="appStore.isMobile ? 82 : 124"
        class="ma-2 rounded-0"
        elevation="0"
        color="transparent"
        >
            <v-img
            width="300"
            :lazy-src="appStore.imgRes[i].thumb"
            :src="appStore.imgRes[i].thumb"
            :aspect-ratio="1"
            class="elevation-2"
            :class=" appStore.imgRes[i].visible ? 'show-image' : 'hide-image' "
            cover
            >
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular indeterminate color="primary" />
                    </div> 
                </template>

            </v-img>

            <div class="d-flex justify-space-around mt-2">

                <v-icon 
                v-if="appStore.imgRes[i].visible"
                class="ms-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-eye-outline"
                @click="hideImage(i)"
                />
                <v-icon 
                v-else
                class="ms-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-eye-off-outline"
                @click="hideImage(i)"
                />
                
                <v-icon 
                class="mx-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-loupe" 
                @click="zoomImage(i)"
                />

                <v-icon 
                class="me-1 text-medium-emphasis" 
                size="x-small" 
                icon="mdi-trash-can-outline" 
                @click="deletImage(i)"
                />

            </div>

        </v-card>

        <!--Zoom image component-->
        <GalleryZoomImage :img="zoomImg" />

    </v-container>
</template>

<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import GalleryZoomImage from './GalleryZoomImage'

    const appStore = useAppStore()
    const apiStore = useApiStore()

    //appStore.imgRes.reverse()

    const zoomImg = ref('')

    //Adiciona as molduras na imagem final
    const aplyFrames = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.png`, import.meta.url).href
    }

    const zoomImage = (index) => {
        appStore.isZoomImg = true
        //appStore.selectedImg = selectedImg
        //appStore.selectedGallery = 'userImages'

        console.log(appStore.imgRes[index])
        zoomImg.value = appStore.imgRes[index].img
    }

    const hideImage = (index) => {
        appStore.imgRes[index].visible =
        !appStore.imgRes[index].visible

        /*
        if(appStore.appData.galeria.content.userImgs[index].visible){
            appStore.appData.galeria.content.globalImgs.unshift(appStore.imgObject);
        }else{
            appStore.appData.galeria.content.globalImgs.shift();
        }
        */
    }

    const deletImage = (index) => {
        appStore.imgRes.splice(index, 1); 
        

        //Atualiza o localStorage
        //localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        //const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        //apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

    }


</script>

<style scoped>
    .custom-container-user-galery{
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