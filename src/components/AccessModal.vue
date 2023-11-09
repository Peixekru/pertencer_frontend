<template>
    <v-dialog
    v-model="appStore.accessModal"
    max-width="1200px"
    >
        <v-card
            class="rounded-xl"
        >
            <!--Modal Header-->
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
                        src="../assets/img/acess-top-icon.svg"
                        max-width="40"
                        />

                        <h5
                        v-if="!appStore.isMobile"
                        class="text-h5"
                        :class=" appStore.isDarkMode ? 'text-white' :  'primary' "
                        > 
                            Recursos de Acessibilidade
                        </h5>

                        <v-toolbar-title 
                        v-else
                        class="text-h5"
                        :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
                        > 
                            Acessibilidade
                        </v-toolbar-title>

                    </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'text-primary'"
                        @click="appStore.accessModal = false"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>

            <!--Content Modal-->  
            <v-container fluid
            class="mt-16"
            >

                <v-row class="px-4">

                
                    <!--Col 01-->
                    <v-col cols="12" md="6">
                        <v-container>
                            <h6 
                            class="text-h6 font-weight-bold ps-3"
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-secondary'"
                            >
                                Perﬁs
                            </h6>
                            <v-sheet class="pa-4 rounded-lg inner-shadow">

                                <v-row>

                                    <v-col
                                    class="px-2 py-0">

                                        <!--Switchs Session-->
                                        <v-container 
                                        class="d-flex justify-start align-start border-list">

                                            <v-switch
                                                v-model="switchBtn0"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[0] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[0] }} </p>
                                            </v-sheet>
                                        </v-container>

                                        <v-container 
                                        class="d-flex justify-start align-start border-list">

                                            <v-switch
                                                v-model="switchBtn1"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[1] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[1] }} </p>
                                            </v-sheet>
                                        </v-container>

                                        <v-container 
                                        class="d-flex justify-start align-start border-list">

                                            <v-switch
                                                v-model="switchBtn2"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[2] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[2] }} </p>
                                            </v-sheet>
                                        </v-container>

                                        <v-container 
                                        class="d-flex justify-start align-start border-list">

                                            <v-switch
                                                v-model="switchBtn3"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[3] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[3] }} </p>
                                            </v-sheet>
                                        </v-container>

                                        <v-container 
                                        class="d-flex justify-start align-start border-list">

                                            <v-switch
                                                v-model="switchBtn4"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[4] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[4] }} </p>
                                            </v-sheet>
                                        </v-container>

                                        <v-container 
                                        class="d-flex justify-start align-start">

                                            <v-switch
                                                v-model="switchBtn5"
                                                hide-details
                                                inset
                                                color="primary"
                                                true-value = true
                                                false-value = false
                                                class="switch-position"
                                                />

                                            <v-sheet 
                                            width="100%" color="transparent" class="d-flex flex-column ms-4">
                                                <h6 class="text-h6"> {{ perfisTitles[5] }} </h6>
                                                <p class="text-caption"> {{ perfisSubTitles[5] }} </p>
                                            </v-sheet>
                                        </v-container>
                                        
                                    </v-col>
                                </v-row>
                
                            </v-sheet>  
                        </v-container>

                    </v-col>

                    <!--Col 02-->
                    <v-col cols="12" md="6">

                        <v-container>
                            <h6 
                            class="text-h6 font-weight-bold ps-3"
                            :class="appStore.isDarkMode ? 'text-primary' : 'text-secondary'"
                            >
                                Ajustes
                            </h6>

                            <v-sheet class="pa-4 rounded-lg inner-shadow" height="100%">

                                <v-container class="px-1">
                                    <!--Block 1 -->
                                    <v-row class="px-4 pt-0 pb-4">
                                        <!--Line Left 1 -->
                                        <v-col cols="12" lg="5" md="12" sm="5" xs="12" >
                                            <v-row>
                                                <h6 class="text-subtitle-1 font-weight-bold"> Tamanho de fonte </h6>
                                            </v-row>
        
                                            <v-row>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.fontSize == 0 ? 'bg-primary' : '' "
                                                @click="appStore.fontSize = 0"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-font" 
                                                    size="x-small" 
                                                    class="text-medium-emphasis"
                                                    :class="appStore.fontSize == 0 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.fontSize == 1 ? 'bg-primary' : '' "
                                                @click="appStore.fontSize = 1"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-font"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.fontSize == 1 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg"
                                                :class="appStore.fontSize == 2 ? 'bg-primary' : '' "
                                                @click="appStore.fontSize = 2"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-font" 
                                                    size="x-large"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.fontSize == 2 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                            </v-row>
        
                                        </v-col>
        
                                        <!--Line Right 1 -->
                                        <v-col cols="12" lg="7" md="12" sm="7" xs="12" class="pa-0">
        
                                            <v-sheet 
                                                width="100%" 
                                                height="90" 
                                                elevation="4" 
                                                class="d-flex align-center rounded-lg mt-4"
                                                >
                                                    <v-row align="center">
        
                                                        <v-col align="center" class="pe-0 border-separator">
        
                                                            <v-icon 
                                                            icon="mdi-circle-half-full" 
                                                            size="x-large"
                                                            class="text-medium-emphasis"
                                                            />
                                                            <p class="text-caption">Alto contraste</p>
                                                        
                                                        </v-col>
                                                        
                                                        <v-col class="ps-0">
        
                                                            <v-radio-group 
                                                            v-model="constrastSelect"
                                                            class="d-flex justify-start"
                                                            >
                                                                <v-radio selected color="primary" value="0">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Claro</p>
                                                                    </template>
                                                                </v-radio>
        
                                                                <v-radio color="primary" value="1">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Escuro</p>
                                                                    </template>
                                                                </v-radio>
                                                                
                                                            </v-radio-group>
        
                                                        </v-col>
                                                    
                                                    </v-row>
        
        
                                                </v-sheet>
                                        </v-col>
                                    
                                    </v-row>
        
                                    <!--Block 2 -->
                                    <v-row class="px-4 pt-0 pb-4">
                                        <!--Line Left 2 -->
                                        <v-col cols="12" lg="5" md="12" sm="5" xs="12">
                                            <v-row>
                                                <h6 class="text-subtitle-1 font-weight-bold"> Espaçamento de linha </h6>
                                            </v-row>
        
                                            <v-row>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.lineSize == 0 ? 'bg-primary' : '' "
                                                @click="appStore.lineSize = 0"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-line-spacing" 
                                                    size="x-small" 
                                                    class="text-medium-emphasis"
                                                    :class="appStore.lineSize == 0 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.lineSize == 1 ? 'bg-primary' : '' "
                                                @click="appStore.lineSize = 1"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-line-spacing"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.lineSize == 1 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg"
                                                :class="appStore.lineSize == 2 ? 'bg-primary' : '' "
                                                @click="appStore.lineSize = 2"
                                                >
                                                    <v-icon 
                                                    icon="mdi-format-line-spacing" 
                                                    size="x-large"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.lineSize == 2 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                            </v-row>
        
                                        </v-col>
        
                                        <!--Line Right 2 -->
                                        <v-col cols="12" lg="7" md="12" sm="7" xs="12" class="pa-0">
        
                                            <v-sheet 
                                                width="100%" 
                                                height="90" 
                                                elevation="4" 
                                                class="d-flex align-center rounded-lg mt-4"
                                                >
                                                    <v-row align="center">
        
                                                        <v-col align="center" class="pe-0 border-separator">
        
                                                            <v-icon 
                                                            icon="mdi-palette" 
                                                            size="x-large"
                                                            class="text-medium-emphasis"
                                                            />
                                                            <p class="text-caption">Cores</p>
                                                        
                                                        </v-col>
                                                        
                                                        <v-col class="ps-0">
        
                                                            <v-radio-group 
                                                            v-model="colorSelect"
                                                            class="d-flex justify-start"
                                                            >
                                                                <v-radio selected color="primary" value="0">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Colorido</p>
                                                                    </template>
                                                                </v-radio>
        
                                                                <v-radio color="primary" value="1">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Monocromático</p>
                                                                    </template>
                                                                </v-radio>
                                                                
                                                            </v-radio-group>
        
                                                        </v-col>
                                                    
                                                    </v-row>
        
        
                                                </v-sheet>
                                        </v-col>
                                    
                                    </v-row>
        
                                    <!--Block 3 -->
                                    <v-row class="px-4 pt-0 pb-4">
                                        <!--Line Left 3 -->
                                        <v-col cols="12" lg="5" md="12" sm="5" xs="12">
                                            <v-row>
                                                <h6 class="text-subtitle-1 font-weight-bold"> Zoom </h6>
                                            </v-row>
        
                                            <v-row>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.zoomSize == 0 ? 'bg-primary' : '' "
                                                @click="appStore.zoomSize = 0"
                                                >
                                                    <v-icon 
                                                    icon="mdi-file-document-outline" 
                                                    size="x-small" 
                                                    class="text-medium-emphasis"
                                                    :class="appStore.zoomSize== 0 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg me-3"
                                                :class="appStore.zoomSize == 1 ? 'bg-primary' : '' "
                                                @click="appStore.zoomSize = 1"
                                                >
                                                    <v-icon 
                                                    icon="mdi-file-document-outline"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.zoomSize == 1 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                                <v-sheet 
                                                width="50" 
                                                height="50" 
                                                elevation="4" 
                                                class="d-flex justify-center align-center rounded-lg"
                                                :class="appStore.zoomSize == 2 ? 'bg-primary' : '' "
                                                @click="appStore.zoomSize = 2"
                                                >
                                                    <v-icon 
                                                    icon="mdi-file-document-outline" 
                                                    size="x-large"
                                                    class="text-medium-emphasis"
                                                    :class="appStore.zoomSize == 2 ? 'text-secondary' : '' "
                                                    />
                                                </v-sheet>
        
                                            </v-row>
        
                                        </v-col>
        
                                        <!--Line Right 3 -->
                                        <v-col cols="12" lg="7" md="12" sm="7" xs="12" class="pa-0">
        
                                            <v-sheet 
                                                width="100%" 
                                                height="90" 
                                                elevation="4" 
                                                class="d-flex align-center rounded-lg mt-4"
                                                >
                                                    <v-row align="center">
        
                                                        <v-col align="center" class="pe-0 border-separator">
        
                                                            <v-icon 
                                                            icon="mdi-cursor-default-click-outline" 
                                                            size="x-large"
                                                            class="text-medium-emphasis"
                                                            />
                                                            <p class="text-caption">Cursor</p>
                                                        
                                                        </v-col>
                                                        
                                                        <v-col class="ps-0">
        
                                                            <v-radio-group 
                                                            v-model="cursorSelect"
                                                            class="d-flex justify-start"
                                                            >
                                                                <v-radio selected color="primary" value="0">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Preto</p>
                                                                    </template>
                                                                </v-radio>
        
                                                                <v-radio color="primary" value="1">
                                                                    <template v-slot:label>
                                                                        <p class="text-caption font-weight-medium">Branco</p>
                                                                    </template>
                                                                </v-radio>
                                                                
                                                            </v-radio-group>
        
                                                        </v-col>
                                                    
                                                    </v-row>
        
        
                                                </v-sheet>
                                        </v-col>
                                    
                                    </v-row>

                                </v-container>
                                        
                            </v-sheet>  
                        </v-container>

                    </v-col>
                
                </v-row>


            <!--Col 03-->
            <v-row class="px-4 py-0">

                <v-col cols="12" class="pt-0">
                    <v-container fluid class="pt-0">
                        <h6 
                        class="text-h6 font-weight-bold ps-3"
                        :class="appStore.isDarkMode ? 'text-primary' : 'text-secondary'"
                            >Recursos
                        </h6>
                        <v-sheet class="pa-4 rounded-lg inner-shadow">


                        <v-row>

                            <!--Btn 01-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >

                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-ear-hearing" 
                                stacked 
                                :color="appStore.leitorTexto ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="leitorTexto()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.leitorTexto ? 'text-secondary' : '' "
                                    >
                                        leitor de texto
                                    </p>
                                </v-btn>

                            </v-col>

                            <!--Btn 02-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >
                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-keyboard-outline" 
                                stacked 
                                :color="appStore.navTeclado ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="navTeclado()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.navTeclado ? 'text-secondary' : '' "
                                    >
                                        navegação pelo teclado
                                    </p>
                                </v-btn>

                            </v-col>

                            <!--Btn 03-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >
                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-link-variant" 
                                stacked 
                                :color="appStore.linkMarker ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="linkMarker()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.linkMarker ? 'text-secondary' : '' "
                                    >
                                        sublinhar links
                                    </p>
                                </v-btn>    
                            </v-col>

                            <!--Btn 04-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >
                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-animation" 
                                stacked 
                                :color="appStore.blockAnimation ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="blockAnimation()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.blockAnimation ? 'text-secondary' : '' "
                                    >
                                        bloquear animações
                                    </p>
                                </v-btn>
                            </v-col>

                            <!--Btn 05-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >
                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-card-text-outline" 
                                stacked 
                                :color="appStore.contentFocus ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="contentFocus()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.contentFocus ? 'text-secondary' : '' "
                                    >
                                        foco na leitura
                                    </p>
                                </v-btn>
                            </v-col>
                            

                            <!--Btn 06-->
                            <v-col
                                cols="6" lg="2"  md="2" sm="4"
                            >
                                <v-btn 
                                width="100%"
                                height="100"
                                size="x-large" 
                                prepend-icon="mdi-page-next-outline" 
                                stacked 
                                :color="appStore.contentGuid ? 'primary text-secondary' : ''"
                                class="text-none text-medium-emphasis rounded-lg py-0 px-1 me-3"
                                @click="contentGuid()"
                                >
                                    <p 
                                    class="text-caption text-high-emphasis btn-line-height"
                                    :class="appStore.contentGuid ? 'text-secondary' : '' "
                                    >
                                        guia de leitura
                                    </p>
                                </v-btn>
                            </v-col>
                            


                        </v-row>

                        </v-sheet>  
                    </v-container>
                </v-col>

            </v-row>






            <!--
            <v-radio-group 
            class="ms-6 my-4"
            v-model="constrastSelect"
            >

                <v-radio selected color="primary" value="0">
                    <template v-slot:label>
                        <p>Claro » Estilo 1</p>
                    </template>
                </v-radio>

                <v-radio color="primary" value="1">
                    <template v-slot:label>
                        <p>Claro » Estilo 2</p>
                    </template>
                </v-radio>

                <v-radio color="primary" value="2">
                    <template v-slot:label>
                        <p>Escuro » Estilo 1</p>
                    </template>
                </v-radio>

                <v-radio color="primary" value="3">
                    <template v-slot:label>
                        <p>Escuro » Estilo 2</p>
                    </template>
                </v-radio>

            </v-radio-group>
            -->


        </v-container>

        </v-card>

    </v-dialog>

</template>

<script setup>
    import { ref, watch } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import { useTheme } from "vuetify";

    import { useContrastSelect, useColorSelect } from "./composables/useSystemStyle"
import { onMounted } from 'vue';

    //Inicia a store
    const appStore = useAppStore()
    const apiStore = useApiStore()

    //Inicia os themas do Vuetify
    const theme = useTheme();



    //Perfis

    const switchBtn0 = ref(appStore.switchBtn0)
    const switchBtn1 = ref(appStore.switchBtn1)
    const switchBtn2 = ref(appStore.switchBtn2)
    const switchBtn3 = ref(appStore.switchBtn3)
    const switchBtn4 = ref(appStore.switchBtn4)
    const switchBtn5 = ref(appStore.switchBtn5)



    watch(switchBtn0, () => {
        appStore.switchBtn0 = switchBtn0.value
        console.log(appStore.switchBtn0)
    })

    watch(switchBtn1, () => {
        appStore.switchBtn1 = switchBtn1.value
        console.log(appStore.switchBtn1)
    })

    //Daltonismo
    watch(switchBtn2, () => {
        appStore.switchBtn2 = switchBtn2.value
        console.log(appStore.switchBtn2)

            if (switchBtn2.value == "true") { constrastSelect.value = "1"} 
            else { constrastSelect.value = "0" }

        seveAccessProphile()

    })

    //Epilepsia
    watch(switchBtn3, () => {
        appStore.switchBtn3 = switchBtn3.value
        console.log(appStore.switchBtn3)

        const videoEl = document.getElementById("bg-video");

        if (switchBtn3.value == "true") { 
            colorSelect.value = "1"

            appStore.blockAnimation = true
            videoEl.pause();
        } 
        else {
            colorSelect.value = "0" 

            appStore.blockAnimation = false
            videoEl.play();
        }

        seveAccessProphile()
    })

    //TDAH
    watch(switchBtn4, () => {
        appStore.switchBtn4 = switchBtn4.value
        console.log(appStore.switchBtn4)

        const videoEl = document.getElementById("bg-video");

        if (switchBtn4.value == "true") { 

            appStore.tdah = true
            appStore.blockAnimation = true
            videoEl.pause();
        } 
        else {
            appStore.tdah = false
            appStore.blockAnimation = false
            videoEl.play();
        }

        seveAccessProphile()

    })

    watch(switchBtn5, () => {
        appStore.switchBtn5 = switchBtn5.value
        console.log(appStore.switchBtn5)
    })



    const perfisTitles = ref([
        "Baixa visão",
        "Distúrbio de Hab. Motoras",
        "Daltonismo",
        "Epilepsia",
        "TDAH", 
        "Dislexia"
    ])

    const perfisSubTitles = ref([
        "Sublinhar Links, Sublinhar Títulos, Zoom no Conteúdo, Títulos Imagens.",
        "Navegação pelo Teclado.",
        "Alto Contraste Escuro, Destacar Conteúdo.",
        "Baixa Saturação, Form atar Fonte, Bloquear Animações, Desativar Sons.",
        "Formatar Fonte, Bloquear Anim ações, Máscara de Leitura, Guia de Leitura.", 
        "Formatar Fonte, Máscara de Leitura, Guia de Leitura."
    ])


    //Ajustes
    const fontSize = ref(1)
    const lineSize = ref(1)
    const zoomSize = ref(0)


    const constrastSelect = ref(appStore.appData.access.contrast)

    watch(constrastSelect, () => {
        appStore.appData.access.contrast = constrastSelect
        theme.global.name.value = useContrastSelect(appStore.appData.access.contrast, appStore.appData.access.color == 0);
        appStore.isDarkMode = theme.global.current.value.dark
        seveAccessProphile()
    })


    const colorSelect = ref(appStore.appData.access.color)

    watch(colorSelect, () => {
        appStore.appData.access.color = colorSelect
        theme.global.name.value = useColorSelect(appStore.appData.access.color, theme.global.current.value.dark);
        seveAccessProphile()
    })


    const cursorSelect = ref(appStore.appData.access.cursor)

    watch(cursorSelect , () => {
        appStore.appData.access.cursor = cursorSelect 

        if (cursorSelect.value == 0) {
            document.querySelector("body").classList.add("cursor-black")
            document.querySelector("body").classList.remove("cursor-white")
        } else {
            document.querySelector("body").classList.add("cursor-white")
            document.querySelector("body").classList.remove("cursor-black")
        }

        console.log(cursorSelect.value)
        console.log(document.querySelector("body"))


        seveAccessProphile()
    })



    //Recursos
    const leitorTexto = () => {
        appStore.leitorTexto = !appStore.leitorTexto
        //const videoEl =  document.querySelectorAll('input[type=text]')
    }

    const navTeclado = () => {
        appStore.navTeclado = !appStore.navTeclado
    }

    const linkMarker = () => {
        appStore.linkMarker = !appStore.linkMarker
    }

    const blockAnimation = () => {
        appStore.blockAnimation = !appStore.blockAnimation
        const videoEl = document.getElementById("bg-video");

        if( appStore.blockAnimation ){
            videoEl.pause();
        } else {
            videoEl.play();
        }
    }

    const contentFocus = () => {
        appStore.contentFocus = !appStore.contentFocus
    }

    const contentGuid = () => {
        appStore.contentGuid = !appStore.contentGuid
    }







    //SAVE ALL
    const seveAccessProphile = () => {
        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        
        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
    }

    /*const getImg = () => {
        return  new URL('../assets/img/galleryFrame-1.svg', import.meta.url).href
    } */


    
    onMounted(()=>{
        console.log(document.querySelector("body"))
        document.querySelector("body").classList.add("cursor-test")
    })
    


</script>


<style lang="scss" scoped>

    .inner-shadow{
        background-color:rgba( 0, 0, 0, .05);
        box-shadow: inset 1px 1px 4px rgba( 0, 0, 0, .2);
    }

    .v-label {
    color: black
    }

    .switch-position{
        margin-top: -11px;
    }

    .border-list{
        border-bottom: 1px solid #ccc !important;
    }

    .border-separator{
        border-right: 1px solid #ccc !important;
    }

    .fixed-bar {
        position: fixed;
        z-index: 3000;
    }

    .btn-line-height{
        line-height: 1.1em;
    } 
</style>


