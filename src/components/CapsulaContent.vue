<template>

    <!--Title-->
    <v-toolbar
        color="rgba(0, 0, 0, 0)"
        theme="light"
    >
        <v-container
        color="transparent"
        width="100%"
        class=" d-flex align-center justify-start"
        >
            <v-img
            class="me-4"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            src="../assets/img/side-icon-1-dark.svg"
            max-width="40"
            />

            <h5 
            class="text-h5 w-auto font-weight-bold"
            :class=" appStore.isDarkMode ? 'text-white' : 'text-primary' "
            > 
                Cápsula do tempo
            </h5>
        </v-container>

    </v-toolbar>

        <!--Subtitle-->  
        <v-container fluid>
                
            <p>
                Assim como os fundadores do Einstein fizeram uma capsula do tempo com bons desejos para o Hospital e seus colaboradores, 
                você agora também terá a oportunidade de construir sua própria capsula para o seu eu do futuro.
                Compartilhe suas expectativas, metas e sonhos aqui dentro do Einstein. Insira seu e-mail para enterrar sua cápsula de bons desejos. 
                Daqui a um tempo você terá uma surpresa! O futuro começa agora!
            </p>


            <v-row
            class="d-flex mt-4 justify-space-between"
            >
                <!--Col 1-->
                <v-col 
                cols="12"
                md="5"
                class="py-0 mt-4"
                >
                    <!--Group Container-->
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
                        <textarea
                        v-model="msg"
                        class="px-6 py-4 rounded-lg text-medium-emphasis"
                        >{{msg}}</textarea>

                    </v-container>

                </v-col>

                <!--Col 2-->
                <v-col 
                cols="12"
                md="7"
                class="py-0 mt-4"
                :class="appStore.screenWidth >= 960 ? 'side-border' : '' "
                >
                    <!--Group Container-->
                    <v-container fluid 
                    class="pa-0 mb-6"
                    >
                        <!--Title-->
                        <v-sheet 
                        class="d-flex align-center mb-4"
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
                                cols="6"
                                sm="3"
                                v-model="msgStyle"
                                v-for="i in 4"
                                >                 
                                    <v-img
                                    class="rounded-lg mx-1 my-1"
                                    :class="msgStyle == i ? 
                                    appStore.appData.access.color == 1 ? 'selected-style elevation-6 anim grayscale-filter' : 'selected-style elevation-6 anim' :
                                    appStore.appData.access.color == 1 ? 'elevation-1 grayscale-filter' : 'elevation-1' " 
                                    :lazy-src="getImg(i)"
                                    :src="getImg(i)"
                                    @click="msgStyle = i"
                                    >
                                        <v-btn variant="plain" v-ripple="false"/>
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

                    <!--Form-->
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

                            <!--Form fields-->
                            <v-container class="pa-0" fluid>

                                <v-form >

                                        <v-row>
                                            <v-col
                                            cols="12"
                                            md="6"
                                            >

                                                <v-text-field
                                                v-model="mail"
                                                hide-details
                                                disabled                                              
                                                color="primary"
                                                />
                                            </v-col>

                                            <v-col
                                            cols="12"
                                            md="6"
                                            >

                                                <v-text-field
                                                v-model="confirmMail"
                                                hide-details
                                                label="confirme seu e-mail"
                                                color="primary"

                                                :append-inner-icon="mail && confirmMail != '' ?
                                                mail == confirmMail ? 
                                                'mdi-check-circle-outline' : 'mdi-alert-circle-outline' : 
                                                '' "
                                                :class="mail && confirmMail != '' ?
                                                mail == confirmMail ? 'text-success' : 'text-error' : 
                                                '' "
                                                class="animate__animated animate__fadeIn"
                                                />
                                            </v-col>
                                        </v-row>

                                        <!--btn-->
                                        <v-row>
                                            <v-col
                                            cols="12"
                                            md="6"
                                            >
                                                <v-btn
                                                :disabled="mail != confirmMail"
                                                width="100%"        
                                                type="button"
                                                density="comfortable"
                                                rounded
                                                class="bg-primary text-secondary letter-normal animate__animated animate__fadeInDown"
                                                @click="startCapsula"
                                                >
                                                    Enterrar capsúla
                                                </v-btn>
                                            </v-col>
                                        </v-row>

                                </v-form>

                            </v-container>
                        
                        </v-container>
                    
                    </v-sheet>

                
                </v-col>

            </v-row>
        
        </v-container>




</template>

<script setup>
    import { ref, watch } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'

    import { useStartProgress } from './composables/useProgress'

    import CryptoJS from 'crypto-js'

    const appStore = useAppStore()
    const apiStore = useApiStore();


    //Recupera informações da cápsula do tempo
    const capsulaInfo = appStore.capsulaInfo


    //const savedMsg = appStore.appData.capsula.content.sendMessage
    const savedMsg = capsulaInfo.content.sendMessage
    var msg = ref(savedMsg) 

    //const msgStyle = ref(appStore.appData.capsula.content.style)
    const msgStyle = ref(capsulaInfo.content.style)

    const mail = ref(sessionStorage.getItem('userMail'))


    const confirmMail = ref('')

    const isUnlocked = ref(false)
    // Carrega imagens dos estilos
    const getImg = (index) => {
    return  new URL(`../assets/img/galeriaStyle-${index}.png`, import.meta.url).href
    //return  new URL(`https://placehold.co/80x80/eaeaea/ffffff?text=img${index}&font=montserrat`).href
    } 

    if ( /*appStore.appData.capsula.status*/ capsulaInfo.status  != 1) {

        let unlockBtn = ref([ false, false, false ])

        const check = () => {
            if (unlockBtn.value.every(v => v === true)) 
            { isUnlocked.value = true } else { isUnlocked.value = false }
        }

        //MSG
        watch(msg, () => { 
            if (msg.value != /*appStore.appData.capsula.content.sendMessage*/ capsulaInfo.content.sendMessage ){
                unlockBtn.value[0] = true
            }else{
                unlockBtn.value[0] = false
            }
            check()
        })
        //MAIL
        watch(mail, () => { 
            if (mail.value != /*appStore.appData.capsula.content.email*/ capsulaInfo.content.email){
                unlockBtn.value[1] = true
            }else{
                unlockBtn.value[1] = false
            }
            check()
        })
        //CONFIRM MAIL
        watch(confirmMail, () => { 
            if (confirmMail.value != '' && confirmMail.value == mail.value){
                unlockBtn.value[2] = true
            }else{
                unlockBtn.value[2] = false
            }
            check()
        })

    } else {
        watch(confirmMail, () => { 
            if (confirmMail.value != '' && confirmMail.value == mail.value){
                isUnlocked.value = true
            }else{
                isUnlocked.value = false
            }
        }) 
    }

    // Inicia a cápsula do tempo
    const startCapsula = () => {

        let currentDate = new Date()

        //Inicia a cápsula 
        //appStore.appData.capsula.status = 1

        capsulaInfo.status = 1


        //Modifica a mensagem
        //appStore.appData.capsula.content.sendMessage = msg.value
        capsulaInfo.content.sendMessage = msg.value
        
        
        //Modifica a data de gravação para a data atual
        //appStore.appData.capsula.content.startDate = currentDate.toLocaleDateString()
        //appStore.appData.capsula.content.startDate = currentDate
        capsulaInfo.content.startDate = currentDate


        //Acrescenta + 90 dias à data do envio da mensagem
        var sendDate = new Date().setDate(currentDate.getDate() + 90)
        //Converte data de envio para string local
        //var sendDateStr = new Date(sendDate).toLocaleDateString()
        //Modifica a data de envio da mensagem
        //appStore.appData.capsula.content.sendDate = sendDate
        capsulaInfo.content.sendDate = sendDate
    

        //Modifica o estilo
        //appStore.appData.capsula.content.style = msgStyle.value
        capsulaInfo.content.style = msgStyle.value

        //Modifica o e-mail para envio
        //appStore.appData.capsula.content.email = mail.value
        capsulaInfo.content.email = mail.value

        //Desabilita o botão confirmal

        //Armazena dados no localstorage e backend
        saveData()
    }


    //Grava alterações no localstorage e no backend
    const saveData = () => {
        
        //Libera badge da Cápsula do tempo
        if (appStore.appData.badges.capsula == 0){
            appStore.appData.badges.capsula = 1
        }
        

        //Finaliza conteúdo
        appStore.finishedContent(true)
        //Lebera conteúdo seguinte e modifica o status do corrente para concluido
        useStartProgress();

        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))



        //Atualiza o localStorage - Cápsula
        localStorage.setItem('capsulaInfo', JSON.stringify(capsulaInfo));
        //Atualiza backend - Cápsula
        const userName = JSON.parse(localStorage.getItem('userName'));
        //descriptografia
        const decrypt = CryptoJS.AES.decrypt(userName, '19041981').toString(CryptoJS.enc.Utf8)
        //port / path / data - Cáosula
        apiStore.useSaveCapsule('/savecapsule', {"username": decrypt, "info": JSON.stringify(capsulaInfo)})



        //Atualiza o card da cápsula na home
        appStore.capsulaCardKey += 1
        //Atualiza o modal da cápsula
        appStore.capsulaModalKey += 1

        //Feedback usuário
        //appStore.globalMsg('Oba! Sua mensagem foi salva!', 'success')
    }


    //Se não estiver logado Volta para LoginView
    if (sessionStorage.getItem('userMail')){
            console.log(sessionStorage.getItem('userMail'))
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
    }
    textarea{
        width: 100%;
        height:320px;
        border: none;
        outline: none;
        resize: none; /*remove the resize handle on the bottom right*/
        background-color: rgba(120, 120, 120, 0.05);
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.1) !important;
        overflow-y: scroll;
    }
</style>