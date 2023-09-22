<template>
    <v-dialog
    v-model="appStore.capsulaModal"
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
                            src="../assets/img/side-icon-1.svg"
                            max-width="40"
                            />

                            <h5 
                            class="text-h5 w-auto"
                            :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
                            > 
                                Cápsula do tempo
                            </h5>
                        </v-container>

                    <template v-slot:append>
                        <v-icon 
                        icon="mdi-close-circle-outline" 
                        size="48px"
                        :color=" appStore.isDarkMode ? 'white' : 'primary'"
                        @click="appStore.capsulaModal = false"
                        />
                    </template>

                </v-toolbar>
            </v-sheet>


            <!--Content Modal-->  
            <v-container fluid
            class="mt-16"
            :class="appStore.isMobile ? 'py-6 px-10' : 'py-10 px-16'"
            >
                <v-container fluid
                class="d-flex justify-start px-0"
                >
                    <v-img 
                    v-if="!appStore.isMobile"
                    class="me-4 animate__animated animate__shakeY"
                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                    src="../assets/img/quest-menu-img.svg"
                    width="36"
                    />  
                    
                    <p>
                        Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                    </p>
                </v-container>

                <v-row
                class="d-flex mt-4 justify-space-between"
                >
                    <!--Col 1-->
                    <v-col 
                    cols="12"
                    md="4"
                    class="py-0"
                    >
                        <!--Group Container-->
                        <v-sheet
                        class="d-flex justify-space-between flex-column"
                        >
                            <v-container fluid 
                            class="pa-0"
                            >
                                <!--Title-->
                                <v-sheet 
                                class="d-flex align-center mb-4"
                                >       
                                    <v-img
                                    v-if="!appStore.isMobile"
                                    class="me-2"
                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                    src="../assets/img/capsula-modal-icon1.svg"
                                    max-width="20"
                                    /> 
                                    <h5 class="text-subtitle-1 font-weight-medium"> 
                                        1) Escreva sua mensagem 
                                    </h5>
                                </v-sheet>

                                <!--Box text-->
                                <v-card
                                height="196px"
                                elevation="0"
                                class="px-6 py-4 rounded-lg custom-card-desabled"
                                >
                                    <p class="text-caption text-disabled">
                                        {{ appStore.appData.capsula.content[0].sendMessage }}
                                    </p>
                                </v-card>

                            </v-container>

                            <!--Desabled btn-->
                            <v-container
                            class="d-flex justify-center py-4"
                            >
                                <v-btn 
                                block 
                                disabled
                                variant="outlined"
                                append-icon="mdi-check-circle-outline"
                                class="text-primary letter-normal"
                                density="comfortable"
                                rounded
                                >
                                    Gravar
                                </v-btn>
                            </v-container>
                        </v-sheet>



                    </v-col>

                    <!--Col 2-->
                    <v-col 
                    cols="12"
                    md="4"
                    class="py-0"
                    :class="appStore.screenWidth >= 960 ? 'side-border' : '' "
                    >
                        <!--Group Container-->
                        <v-sheet
                        class="d-flex justify-space-between flex-column"
                        >
                            <v-container fluid 
                            class="pa-0"
                            >
                                <!--Title-->
                                <v-sheet 
                                class="d-flex align-center mb-3"
                                >       
                                    <v-img
                                    v-if="!appStore.isMobile"
                                    class="me-2"
                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                    src="../assets/img/capsula-modal-icon2.svg"
                                    max-width="20"
                                    /> 
                                    
                                    <h5 class="text-subtitle-1 font-weight-medium"> 
                                        2) Escolha o estilo 
                                    </h5>
                                </v-sheet>

                                <!--Frames Gallery-->
                                <v-container class="py-2 px-2">

                                <v-row>
                                    <v-col
                                    class="pa-0"
                                    cols="4"
                                    v-model="imgSelect"
                                    v-for="i in 6"
                                    >                 
                                        <v-img

                                        class="rounded-lg mx-1 my-1"
                                        :class="imgSelect == i ? 'selected-style elevation-6 anim' : 'elevation-1' "
                                        lazy-src="https://placehold.co/200x200/eaeaea/ffffff?text=img&font=montserra"
                                        :src="getImg(i + 1)"
                                        @click="imgSelect = i"
                                        >
                                            <!--Load Image-->
                                            <template v-slot:placeholder>
                                                <div class="d-flex align-center justify-center fill-height">
                                                    <v-progress-circular
                                                    color="primary"
                                                    indeterminate
                                                    />
                                                </div>
                                            </template>
                                        </v-img>
                                    </v-col>
                                </v-row>

                                </v-container>
                            
                            </v-container>

                            <!--Desabled btn-->
                            <v-container
                            class="d-flex justify-center py-4"
                            >
                                <v-btn 
                                block
                                disabled
                                variant="outlined"
                                append-icon="mdi-check-circle-outline"
                                class="text-primary letter-normal"
                                density="comfortable"
                                rounded
                                >
                                    Escolher
                                </v-btn>
                            </v-container>
                        </v-sheet>
                    
                    </v-col>

                    <!--Col 3-->
                    <v-col 
                    cols="12"
                    md="4"
                    class="py-0"
                    >
                        <!--Group Container-->
                        <v-sheet
                            class="d-flex justify-space-between flex-column"
                        >
                            <v-container fluid 
                            class="pa-0"
                            >
                                <!--Title-->
                                <v-sheet 
                                class="d-flex align-center mb-4"
                                >       
                                    <v-img
                                    v-if="!appStore.isMobile"
                                    class="me-2"
                                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                                    src="../assets/img/capsula-modal-icon3.svg"
                                    max-width="20"
                                    /> 
                                    
                                    <h5 class="text-subtitle-1 font-weight-medium"> 
                                        3) E-mail de destino 
                                    </h5>
                                </v-sheet>

                                <!--Mail Form-->
                                <v-container class="pa-0" fluid>

                                    <v-form fast-fail @submit.prevent>
                                        <v-text-field
                                            v-model="mail"
                                            label="digite seu e-mail"
                                            color="primary"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="confirmMail"
                                            label="confirme seu e-mail"
                                            color="primary"

                                            :append-inner-icon="mail && confirmMail != '' ?
                                            mail == confirmMail ? 
                                            'mdi-check-circle-outline' : 'mdi-alert-circle-outline' : 
                                            '' "
                                            :class="mail && confirmMail != '' ?
                                            mail == confirmMail ? 
                                            'text-success' : 'text-error' : 
                                            '' "

                                        ></v-text-field>

                                    </v-form>

                                </v-container>
                            
                            </v-container>
                        
                            <!--Desabled btn-->
                            <v-container
                            class="d-flex justify-center py-0"
                            >
                                <v-btn
                                v-if="mail != '' || confirmMail != ''"
                                :disabled="mail != confirmMail"
                                block 
                                type="submit"
                                density="comfortable"
                                rounded
                                class="bg-primary letter-normal animate__animated animate__fadeInDown"
                                @click="snackbar = true"
                                >
                                    Confirmar
                                </v-btn>
                            </v-container>
                        </v-sheet>
                    </v-col>
                </v-row>
            
            </v-container>

        </v-card>

    </v-dialog>

    <v-snackbar
    v-model="snackbar"
    :location="location"
    :timeout="timeout"
    >
        {{ sbText }}

        <template #actions>
            <v-btn
            icon="mdi-close"
            color="secundary"
            variant="plain"
            @click="snackbar = false"
            />
        </template>
    </v-snackbar>

</template>

<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'

    //Inicia a store
    const appStore = useAppStore()

    const mail = ref('')
    const confirmMail = ref('')
    const imgSelect = ref(appStore.appData.capsula.content[0].style)

    //Mensagem snapbar
    var snackbar = ref(false)
    var sbText = ref('Seu e-mail foi atualizado com sucesso!')
    const location = ref('bottom')
    const timeout = ref(3000)

    const getImg = (index) => {
    // Carrega imagens dos btns
    //return  new URL(`https://placehold.co/80x80/eaeaea/ffffff?text=img${index}&font=montserrat`, import.meta.url).href
    return  new URL(`https://placehold.co/80x80/eaeaea/ffffff?text=img${index}&font=montserrat`).href
    } 

</script>

<style lang="scss" scoped>
    @import '../assets/styles/mainStyles.scss';
    
    .custom-card-desabled{
        background-color: rgba(120, 120, 120, 0.05);
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.1) !important;
        overflow-y: scroll;
    }
    .selected-style{
        border: 3px solid $secondaryLight;
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

</style>


