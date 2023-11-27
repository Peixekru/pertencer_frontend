<template>
    <v-dialog
    v-model="appStore.startModal"
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

                            :class="appStore.isDarkMode ? 'white-svg' : 
                            appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "

                            src="../assets/img/start-top-icon.svg"
                            max-width="40"
                            />

                            <h5 
                            class="text-h5 w-auto "
                            :class=" appStore.isDarkMode ? 'text-white' : 'primary' "
                            > 
                                Começando bem
                            </h5>
                        </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'text-primary'"
                        @click="appStore.startModal = false"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>


            <!--Content Modal-->  
            <v-container fluid
            class="mt-12"
            :class="appStore.isMobile ? 'py-6 px-10' : 'py-10 px-16'"
            >

                <v-row
                class="d-flex justify-space-between"
                >

                <v-col
                    cols="12"
                    class="mb-6"
                >
                    <h6 class="text-h5 mt-6">
                        Conheça alguns recursos fundamentais para o início de sua jornada.
                    </h6>
                </v-col>

                    <!--Col 1-->
                    <v-col 
                    cols="12"
                    md="6"
                    class="py-0"
                    >
                        <!--Group Container-->
                        <v-sheet
                        class="d-flex justify-space-between flex-column"
                        >
                            <v-container fluid 
                            class="pa-0"
                            >
                                <p class="mb-4 mt-2">
                                    <strong>Canais de Comunicação</strong>
                                </p>
                                <p class="mb-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, obcaecati.
                                </p>
                                <p class="mb-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, obcaecati, 
                                    totam dolorum suscipit molestiae labore quam nesciunt odio, dolores impedit inventore.                                
                                </p>
                                <p class="mb-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, obcaecati, 
                                    totam dolorum suscipit molestiae labore quam nesciunt odio, dolores impedit inventore.                           
                                </p>

                            </v-container>

                        </v-sheet>

                    </v-col>

                    <!--Col 2-->
                    <v-col 
                    cols="12"
                    md="6"
                    class="py-0 px6"
                    >
                        <v-sheet 
                        :height="
                        appStore.screenWidth >= 960 ? 270 : 
                        appStore.screenWidth < 600 ? 270 :
                        460"
                        class=" animate__animated animate__fadeInUp">

                            <iframe
                            src="https://player.vimeo.com/video/885695798?h=92a9070d27&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1"
                            frameborder="0" 
                            allow="autoplay; fullscreen; picture-in-picture" 
                            class="vimeo-player rounded-0" 
                            />
                        
                        </v-sheet>

                    </v-col>

                </v-row>
            
            </v-container>

        </v-card>

    </v-dialog>

</template>

<script setup>
    import { ref, watch } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'

    const appStore = useAppStore()
    const apiStore = useApiStore();



    const goLink = (goLink) => {
        window.open(goLink);
    }


</script>

<style lang="scss" scoped>
    @import '../styles/main.scss';
    .custom-v-text-area{
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.1) !important;
        border: none !important;
    }
    .selected-style{
        border: 3px solid $infoLight;
    }
    .anim{
        animation: fadeIn;
        animation-duration: 2s; 
    }
    .fixed-bar {
        position: fixed;
        z-index: 3000;
    }
    .side-border{
        border-left: 1px dashed rgba(100, 100, 100, 0.5);
        border-right: 1px dashed rgba(100, 100, 100, 0.5);;
    }
    textarea{
        width: 100%;
        height:307px;
        border: none;
        outline: none;
        resize: none; /*remove the resize handle on the bottom right*/
        background-color: rgba(120, 120, 120, 0.05);
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.1) !important;
        overflow-y: scroll;
    }
</style>
