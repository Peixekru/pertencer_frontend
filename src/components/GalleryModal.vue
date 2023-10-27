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
            :class=" appStore.isDarkMode ? 'container-dark' : 'container-light' "
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
                        src="../assets/img/side-icon-2-dark.svg"
                        max-width="40"
                        />

                        <h5 
                        class="text-h5 w-auto"
                        :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
                        > 
                            Galeria
                        </h5>
                    </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'primary'"
                        @click="appStore.galleryModal = false"
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
                <p>
                    Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                </p>

                <v-row
                class="d-flex mt-4 justify-space-between"
                >
                    <!--Component de captura de foto-->
                    <GallerySendImage 
                    :key="appStore.gallerySendImageKey"
                    />

                </v-row>

                <v-row>

                    <v-col class="mt-6 mb-3">
                        <h6 class="text-subtitle-1 text-secondary font-weight-bold">
                            Minhas imagens
                        </h6>
                        <p class="font-weight-light">
                            Marque as imagens que serão exibidas para todos.
                        </p>
                    </v-col>

                    <!-- Componente de exibição de imagens do usuário-->
                    <GalleryUserImages 
                    v-if="appStore.appData.galeria.content.userImgs.length > 0" 
                    />

                </v-row>

                <v-row>

                    <v-col class="mt-8 mb-3">
                        <h6 class="text-subtitle-1 text-secondary font-weight-bold">
                            Galeria Pertencer
                        </h6>
                    </v-col>

                    <!-- Componente de exibição de imagens do sistema-->
                    <GalleryGlobalImages
                    v-if="appStore.appData.galeria.content.globalImgs.length > 0" 
                    />

                    </v-row>

            </v-container>

        </v-card>
    </v-dialog>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    import GalleryUserImages from './GalleryUserImages'
    import GallerySendImage from './GallerySendImage'
    import GalleryGlobalImages from './GalleryGlobalImages'
    const appStore = useAppStore()
</script>


<style lang="scss" scoped>
    @import '../styles/main.scss';
    .fixed-bar {
        position: fixed;
        z-index: 3000;
    }
</style>


