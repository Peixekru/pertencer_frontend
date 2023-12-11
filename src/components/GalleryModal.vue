<template>

    <v-dialog
    v-model="appStore.galleryModal"
    max-width="1100px"
    >
        <v-card
        class="rounded-xl"
        >
            <!--Top Modal-->
            <v-sheet
            height="80"  
            class="d-flex align-center w-100 rounded-t-xl fixed-bar"
            :class=" appStore.isDarkMode ? 
            appStore.appData.access.color == 0 ? 'container-dark' : 'container-dark-mono' :
            appStore.appData.access.color == 0 ? 'container-light' : 'container-light-mono' "
            >
                <v-toolbar
                color="rgba(0, 0, 0, 0)"
                theme="light"
                >
                    <v-container
                    color="transparent"
                    width="100%"
                    class=" d-flex align-center"
                    :class="!appStore.isMobile ? 'justify-center' : 'justify-start'"
                    >
                        <v-img
                        v-if="!appStore.isMobile"
                        class="me-4"
                        :class="appStore.isDarkMode ? 'white-svg' : '' "
                        src="../assets/img/gallery-top-icon.svg"
                        max-width="40"
                        />

                        <h5 
                        class="text-h5 w-auto"
                        :class=" appStore.isDarkMode ? 'text-white' : 'primary' "
                        > 
                            Galeria
                        </h5>
                    </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'text-primary'"
                        @click="closeModal()"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>

            <!--Content Modal-->  
            <v-container fluid
            class="mt-16"
            :class="appStore.isMobile ? 'py-6 px-10' : 'py-10 px-16'"
            >  
                <!--Title--> 
                <p class="mb-12">
                    Agora, queremos celebrar esse momento especial com você. Siga os passos abaixo para ganhar sua última recompensa:
                    1) Envie uma foto ou use sua câmera para tirar uma foto de si mesmo. 
                    2) Escolha a moldura que melhor representa esse momento. 
                    3) Salve a foto na galeria e compartilhe sua conquista! 
                    Ao fazer isso, você não apenas ganhará sua última recompensa, mas também se tornará parte do álbum de conquistas compartilhadas por toda a comunidade. Mal podemos esperar para ver seu sorriso brilhando em nossa galeria!
                </p>

                <v-row
                class="d-flex mt-4 justify-space-between"
                >
                    <!--Component de captura de foto-->
                    <GallerySendImage 
                    ref="gallerySendImage"
                    :key="appStore.gallerySendImageKey"
                    />

                </v-row>

                <!--<v-row
                    v-if="appStore.appData.galeria.content.userImgs.length > 0"
                >

                    <v-col class="mt-6 mb-3">
                        <h6 class="text-subtitle-1 text-secondary font-weight-bold">
                            Minhas imagens
                        </h6>
                        <p class="font-weight-light">
                            Marque as imagens que serão exibidas para todos.
                        </p>
                    </v-col>

                    //Componente de exibição de imagens do usuário
                    <GalleryUserImages />

                </v-row>-->

                <!--<v-row
                    v-if="appStore.appData.galeria.content.globalImgs.length > 0"
                >

                    <v-col class="mt-8 mb-3">
                        <h6 class="text-subtitle-1 text-secondary font-weight-bold">
                            Galeria Pertencer
                        </h6>
                    </v-col>

                    //Componente de exibição de imagens do sistema
                    <GalleryGlobalImages/>

                    </v-row>-->

            </v-container>

        </v-card>
    </v-dialog>
</template>


<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    import GalleryUserImages from './GalleryUserImages'
    import GallerySendImage from './GallerySendImage'
    import GalleryGlobalImages from './GalleryGlobalImages'
    const appStore = useAppStore()

    //Captura a referência do gallerySendImage Component
    const gallerySendImage = ref(null)

    const closeModal = () => {
        appStore.galleryModal = false

        //Caso ligada, desliga a câmera usando método do child Componet (gallerySendImage)
        if (gallerySendImage.value.isCamOpen) {
            gallerySendImage.value.stopVideo()
        }
    }


</script>


<style lang="scss" scoped>
    @import '../styles/main.scss';
    .fixed-bar {
        position: fixed;
        z-index: 3000;
    }
</style>


