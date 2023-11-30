<template>
    <v-dialog
    v-model="appStore.workplaceModal"
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

                            src="../assets/img/workplace-top-icon.svg"
                            max-width="40"
                            />

                            <h5 
                            class="text-h5 w-auto "
                            :class=" appStore.isDarkMode ? 'text-white' : 'primary' "
                            > 
                                Workplace
                            </h5>
                        </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'text-primary'"
                        @click="appStore.workplaceModal = false"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>


            <!--Content Modal-->  
            <v-container fluid
            class="mt-16"
            :class="appStore.isMobile ? 'py-6 px-10' : 'py-10 px-16'"
            >

                <v-row
                class="d-flex mt-4 justify-space-between"
                >
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
                                <h5 class="text-h5"><strong>Você finalizou sua jornada!</strong></h5>

                                <p class="mt-1">
                                    Agora oficialmente é uma gota de excelência Einstein.   
                                </p>
                                <p class="mt-6">
                                    Entre na nossa comunidade e realize uma postagem para que as pessoas te conheçam.
                                </p>
                                <p class="mt-6">
                                    Você pode postar uma frase se apresentando, uma foto sua, da sua família ou do seus pets. Fique a vontade! Queremos te conhecer.
                                </p>
                                <p class="mt-6">
                                    Aproveite e comente em no mínimo dois posts de colegas, dê as boas-vindas e crie conexão com pessoas que assim como você ficarão felizes com uma mensagem de apoio nesse inicio do Einstein.
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
                        <!--Group Container-->
                        <v-sheet
                        class="d-flex justify-space-between flex-column"
                        >
                            <v-container fluid 
                            align="center" class="px-0 py-6"
                            >
                                <v-img
                                v-if="!appStore.isMobile"

                                :class="appStore.isDarkMode ? 'white-svg' : 
                                appStore.appData.access.color == 0 ? 'icon-dark-blue-svg' : 'icon-dark-blue-mono-svg' "

                                src="../assets/img/workplace-top-icon.svg"
                                max-width="300"
                                />
                            
                            </v-container>

                            <!--btn-->
                            <v-container
                            class="d-flex justify-center py-6 px-0"
                            >
                                <v-btn 
                                min-width="200"
                                rounded
                                class="bg-primary letter-normal px-0 text-secondary"
                                @click="goLink('https://sbibae.workplace.com/groups/206612450124381/?ref=share​')"
                                >
                                    Acessar!
                                </v-btn>
                            </v-container>
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


