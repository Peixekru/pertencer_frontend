<template>
    <v-dialog
    v-model="appStore.accessModal"
    width="auto"
    >
        <v-card
            class="rounded-xl"
        >

            <v-sheet
                height="80"  
                class="d-flex align-center"
                :class=" appStore.isDarkMode ? 'container-dark' : 'container-light' "
            >
                <v-toolbar
                    color="rgba(0, 0, 0, 0)"
                    theme="light"
                >

                    <v-container 
                    class="d-flex"
                    :class="appStore.screenWidth > 837 ? 'justify-center' : 'justify-start' "
                    >
                        <v-sheet 
                        color="transparent"
                        :width=" appStore.screenWidth > 837 ? '50%' : '100%'"
                        class="d-flex justify-start align-center">
                            <v-img
                            v-if="!appStore.isMobile"
                            class="me-4"
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            src="../assets/img/acess-top-icon.svg"
                            max-width="40"
                            />

                            <v-toolbar-title 
                            v-if="!appStore.isMobile"
                            class="text-h5"
                            :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
                            > 
                                Recursos de Acessibilidade
                            </v-toolbar-title>

                            <v-toolbar-title 
                            v-else
                            class="text-h5"
                            :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
                            > 
                                Acessibilidade
                            </v-toolbar-title>


                        </v-sheet>
                    </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'primary'"
                        @click="appStore.accessModal = false"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>



            <v-card-text>
                <p>
                    Desenvolver os recursos de acessibilidade:
                </p> 
                <p>
                    Baixa visão, Disturbio Hab. Motora, 
                    Daltonismo, Eplepicia, TDAH, Dislexia, Formatação de texto, Contraste, Cores,
                    Cursor.
                </p>
            </v-card-text>

            <h2 class="ms-8 mt-4">
                Cores
            </h2>

            <v-radio-group 
            class="ms-6 my-4"
            v-model="colorSelect"
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


        </v-card>

    </v-dialog>

</template>

<script setup>
    import { ref, watch } from 'vue'
    import { useAppStore } from '../store/app'
    import { useTheme } from "vuetify";

    import { useSystemColors } from "./composables/useSystemStyle"

    //Inicia a store
    const appStore = useAppStore()

    //Inicia os themas do Vuetify
    const theme = useTheme();


    const colorSelect = ref(appStore.appData.themeNumber)

    watch(colorSelect, () => {
        //Guarda a seleção do botão referente ao thema escolhido
        appStore.appData.themeNumber = colorSelect
        //Seleciona o thema 
        appStore.appData.colorTheme = useSystemColors(colorSelect.value);
        //Aplica o thema 
        theme.global.name.value = appStore.appData.colorTheme
        //Verifica se thema é escuro ou claro
        appStore.isDarkMode = theme.global.current.value.dark
        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
    })


</script>


