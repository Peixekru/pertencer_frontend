<template>
    <v-dialog
    v-model="appStore.isZoomImg"
    max-width="1100px"
    @click="appStore.isZoomImg = false"
    >

        <v-container
        class="d-flex justify-center"
        >
            <v-card
            class="rounded-0 pa-14"
            width="90%"
            >
            <!--btn close--->
            <v-icon 
            class="close-bt-pos pt-4 pe-4"
            icon="mdi-close-circle-outline" 
            size="48px"
            :color=" appStore.isDarkMode ? 'white' : 'primary'"
            @click="appStore.isZoomImg = false"
            />

                <v-img
                v-if="appStore.selectedGallery == 'globalImages'"
                width="100%"
                :lazy-src="appStore.appData.galeria.content.globalImgs[appStore.selectedImg].path"
                :src="appStore.appData.galeria.content.globalImgs[appStore.selectedImg].path"
                :aspect-ratio="1"
                class=" show-image "
                cover
                >
                    <!--Moldura da imagem-->
                    <v-img
                    cover
                    :src="aplyFrames(appStore.appData.galeria.content.globalImgs[appStore.selectedImg].style)"
                    :aspect-ratio="1"
                    />
                </v-img>

                <v-img
                v-else
                width="100%"
                :lazy-src="appStore.appData.galeria.content.userImgs[appStore.selectedImg].path"
                :src="appStore.appData.galeria.content.userImgs[appStore.selectedImg].path"
                :aspect-ratio="1"
                class=" show-image "
                cover
                >
                    <!--Moldura da imagem-->
                    <v-img
                    cover
                    :src="aplyFrames(appStore.appData.galeria.content.userImgs[appStore.selectedImg].style)"
                    :aspect-ratio="1"
                    />
                </v-img>

            </v-card>


            <v-card
            class="d-flex justify-start align-center user-info-pos rounded-pill custom-pa pe-4"
            :class="appStore.isDarkMode ? 'bg-white' : 'bg-black'"
            >

                <v-img
                cover
                src="../assets/img/user-avatar.svg"
                :aspect-ratio="1"
                class="boder-user-image me-2 rounded-pill"
                width="40"
                /> 

                <p 
                v-if="appStore.selectedGallery == 'globalImages'"
                >
                    {{ appStore.appData.galeria.content.globalImgs[appStore.selectedImg].userName }}
                </p>
                <p 
                v-else
                >
                    Você
                </p>
            </v-card>
        
        </v-container>
    </v-dialog>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    defineProps({
        aplyFrames: Function,
    })

</script>

<style lang="scss">
    @import '../assets/styles/mainStyles.scss';
    
    .close-bt-pos{
        position: absolute;
        z-index: 3000;
        right: 0;
        top: 0;
    }
    .user-info-pos{
        position: absolute;
        z-index: 3000;
        bottom: 0;
    }

    .boder-user-image{
        border: 3px solid $secondaryLight;
        background-color: #fff;
    }

    .custom-pa{
        padding: 2px;
    }
</style>