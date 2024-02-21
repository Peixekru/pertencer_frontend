<template>

    <!--Col 1-->
    <v-col 
    cols="12"
    md="4"
    class="py-0"
    >
        <!--Group Container-->
        <v-sheet
        color = "transparent"
        class="d-flex justify-space-between flex-column"
        >
            <!--Title-->
            <v-sheet 
            color="transparent"
            class="d-flex align-center mb-4"
            >       
                <v-img
                v-if="!appStore.isMobile"
                class="me-2"
                :class="appStore.isDarkMode ? 'white-svg' : '' "
                src="../assets/img/gallery-modal-icon1.svg"
                max-width="20"
                /> 
                <h5 class="text-subtitle-1 font-weight-medium"> 
                    1) Envie sua foto 
                </h5>
            </v-sheet>

            <v-row>
                <!--Send Imgs-->
                <v-col
                cols="12"
                md="6"
                class="py-3"
                >
                    <v-sheet
                    elevation="2"
                    class="pa-3"
                    color="rgba(100, 100, 100, .1)"
                    @click="selectSendImage"
                    >
                        <v-sheet
                        class="d-flex justify-center align-center"
                        :class="selectedFile == null ? 'pa-8' : '' "
                        >
                            <v-img
                            v-if="selectedFile != null"
                            :lazy-src="selectedFile"
                            :src="selectedFile"
                            aspect-ratio="1"
                            :class="isCaptureFrame && !changeSelectedFile ? 'img-opacity-desabled' : ''"
                            cover
                            /> 

                            <v-img
                            v-if="selectedFile == null"
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            src="../assets/img/gallery-modal-atach.svg"
                            aspect-ratio="1"
                            />                

                        </v-sheet>
                    </v-sheet>




                    <!--<input type="button" value="Select File" @click="selectFile()">-->

                    <input type="file" id="fileInput" @change="handleFile()" style="display: none;">

                
                    <template v-if="appStore.changeImage || appStore.appData.galeria.content.userImgs.length == 0">
                        <v-btn 
                        value="Select File"
                        block
                        rounded
                        type="button"
                        density="comfortable"
                        class="bg-primary text-secondary letter-normal mt-4"
                        @click="selectFile()"
                        >
                            <span v-if="selectedFile == null">Enviar</span>
                            <span v-else>Trocar</span>
                        </v-btn>
                    </template>

                    <template v-else>
                        <v-btn 
                        block 
                        rounded
                        type="button"
                        density="comfortable"
                        class="bg-primary text-secondary letter-normal mt-4"
                        @click="appStore.isImageGalleryConfirm = true"
                        >
                            <span>Trocar</span>
                        </v-btn>

                    </template>

                </v-col>

                <template v-if="!appStore.isMobile">

                <!--Start Cam-->
                <v-col
                cols="12"
                md="6"
                class="py-3 mb-6"
                >
                    <v-sheet
                    elevation="2"
                    class="pa-3"
                    color="rgba(100, 100, 100, .1)"
                    @click="selectCamImage"
                    >
                        <v-sheet
                        class="d-flex justify-center align-center"
                        >
                            <v-card
                            v-if="isCamOpen"
                            elevation="0"
                            color="transparent"
                            width="100%"
                            class="d-flex justify-center align-center rounded-0 "
                            >
                                <!--Loader-->
                                <v-row
                                v-show="isCamLoading"
                                class="fill-height ma-0 custom-loader"
                                align="center"
                                justify="center"
                                >
                                    <v-progress-circular
                                    indeterminate
                                    color="primary"
                                    />
                                </v-row>

                            
                                <!--Video-->
                                <video 
                                id="camera"
                                class="video-size"
                                v-show="!isCaptureFrame"
                                :srcObject="stream" 
                                autoplay
                                />

                                <v-img
                                v-show="isCaptureFrame" 
                                :src="captureImageUrl"
                                aspect-ratio="1"
                                cover
                                :class="changeSelectedFile ? 'img-opacity-desabled' : ''"
                                />
                                
                            </v-card>

                            <!--camera desligada-->
                            <v-img
                            v-if="!isCamOpen"
                            class="ma-8"
                            :class="appStore.isDarkMode ? 'white-svg' : '' "
                            src="../assets/img/gallery-modal-cam.svg"
                            aspect-ratio="1"
                            />
                        
                        </v-sheet>
                    </v-sheet>

                    <!--btns-->
                    <v-container
                    class="d-flex justify-center py-4 px-0"
                    >
                        <!--Liga e desliga a camera-->
                        <v-btn 
                        block 
                        rounded
                        type="button"
                        density="comfortable"
                        class="bg-primary text-secondary letter-normal"
                        @click="toggleCam"
                        >
                            <span v-if="!isCamOpen">Câmera</span>
                            <span v-else>Desligar</span>
                        </v-btn>
                    </v-container>

                    <!--Tira foto-->
                    <v-sheet 
                    v-if="isCamOpen && !isCamLoading"
                    class="d-flex justify-center"
                    >
                        <v-btn 
                        type="button"
                        :icon="isCaptureFrame ? 'mdi mdi-trash-can-outline' : 'mdi mdi-camera-outline' " 
                        variant="outlined"
                        color="primary"
                        @click="shootingCam"
                        />
                    </v-sheet>


                </v-col>
                </template>

            </v-row>
                
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
        color = "transparent"
        class="d-flex justify-space-between flex-column"
        >
            <v-container fluid 
            class="pa-0"
            >
                <!--Title-->
                <v-sheet 
                color="transparent"
                class="d-flex align-center mb-4"
                >       
                    <v-img
                    v-if="!appStore.isMobile"
                    class="me-2"
                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                    src="../assets/img/capsula-modal-icon2.svg"
                    max-width="20"
                    /> 
                    
                    <h5 class="text-subtitle-1 font-weight-medium" :class="appStore.isMobile ? 'mt-6' : ''"> 
                        2) Escolha o estilo 
                    </h5>
                </v-sheet>

                <!--Frames Gallery-->
                <v-container class="py-2 px-2">

                    <v-row>
                        <v-col
                        class="pa-0 animate__animated animate__bounce"
                        cols="4"
                        v-model="galleryStyle"
                        v-for="i in 6"
                        >                 
                            <v-img
                            :id="'style' + i"
                            class="rounded-lg mx-1 my-1"

                            :class="galleryStyle == i ?
                            appStore.appData.access.color == 1 ? 'selected-style elevation-6 anim grayscale-filter' : 'selected-style elevation-6 anim' : 
                            appStore.appData.access.color == 1 ? 'elevation-1 grayscale-filter' : 'elevation-1' "

                            :src="getImg(i)"
                            @click="setGalleryStyle(i)"
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

        </v-sheet>
    
    </v-col>

    <!--Col 3-->
    <v-col 
    cols="12"
    md="4"
    class="py-0"
    >
        <v-sheet
        color = "transparent"
        class="d-flex justify-space-between flex-column"
        >
            <v-container fluid 
            class="pa-0"
            >
                <!--Title-->
                <v-sheet 
                color="transparent"
                class="d-flex align-center mb-4"
                >       
                    <v-img
                    v-if="!appStore.isMobile"
                    class="me-2"
                    :class="appStore.isDarkMode ? 'white-svg' : '' "
                    src="../assets/img/capsula-modal-icon3.svg"
                    max-width="20"
                    /> 
                    
                    <h5 class="text-subtitle-1 font-weight-medium" :class="appStore.isMobile ? 'mt-6' : ''"> 
                        3) Confirmar e enviar
                    </h5>
                </v-sheet>

                <!--Send Imgs-->
                <v-row
                class="d-flex justify-center"
                >
                    <v-col
                    cols="12"
                    md="8"
                    class="py-3"
                    >
                        <v-sheet
                        id="finalImage"
                        color="trasparent"
                        elevation="4"
                        class="d-flex justify-center"
                        >
                            <v-container class="pa-0 frame-container">
                                <!--Moldura da imagem-->
                                <v-img
                                id="selectedFrame"
                                cover
                                width="100%"
                                :src="aplyFrames(galleryStyle)" 
                                :aspect-ratio="1"
                                class="border-image-pos"
                                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                                />

                                <!--Imagem envida (camera ou upload)-->
                                <v-sheet
                                id="my-image"
                                v-if="finalImage != null"
                                class="bg-final-image"
                                :style="{ backgroundImage: `url(${finalImage})`}"
                                >
                                    <!--Exibição da imagem-->
                                    <v-img 
                                    :lazy-src="finalImage"
                                    :src="finalImage"
                                    aspect-ratio="1"
                                    cover
                                    />
                                </v-sheet>

                                <!--Imagem default vazio-->
                                <v-img
                                v-if="finalImage == null" 
                                lazy-src="../assets/img/profile_pic.png"
                                src="../assets/img/profile_pic.png"
                                aspect-ratio="1"
                                />
    
                            </v-container>

                        </v-sheet>

                        <!--btn-->
                        <v-container
                        class="d-flex justify-center py-6 px-0"
                        >
                            <v-btn 
                            :disabled="finalImage == null"
                            block 
                            rounded
                            density="comfortable"
                            class="bg-primary letter-normal"
                            @click="confirmImageFinal()"
                            >
                                Confirmar
                            </v-btn>
                        </v-container>

                    </v-col>
                </v-row>

            </v-container>
        </v-sheet>
    </v-col>

    <!--Zoom image component-->
    <GalleryZoomImage :aplyFrames="aplyFrames" />

    <GalleryModalConfirm :openImg="selectFile" />


    <v-snackbar
    v-model="isMsg"
    timeout=-1
    location='bottom'
    color="success"
    >
        <v-progress-circular
        indeterminate
        size="16"
        width="2"
        color="white"
        class="me-4"
        />

        Sua foto está quase pronta!
        <template #actions>
            <v-btn
            icon="mdi-close"
            variant="plain"
            @click="isMsg  = false"
            />
        </template>
    </v-snackbar>



    <!-- CRIADOR DE IMAGENS (não visível em tela) -->

    <div class="create-img">

        <!--Renderiza a imagem da câmera-->
        <canvas id="videoCanvas"
        width =1280 height=720
        style="display: block"
        /> 
        <!--Centraliza a imagem que vem da câmera ou do upload e corta em 720 x 720px-->
        <v-sheet id="squareImage"
        width="720"
        height="720"
        class="bg-final-image"
        style="display: block"
        :style="{ backgroundImage: `url(${finalImage})`}"
        />
    
        <!--Sobrepõe moldura na imagem-->
        <div id="squareImageWithFrame"
        class="pa-0 ma-0"
        style="display: block"
        >
            <v-sheet
            width="720"
            height="720"
            class="bg-final-image"
            :style="{ backgroundImage: `url(${finalImage})`}"
            >
                <!--<v-img
                width="720"
                height="720"
                :src="aplyFrames(galleryStyle)" 
    
                class="source-border-image-pos"
                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                />-->
    
                <v-sheet
                width="720"
                height="720"
                color="transparent"
                class="bg-final-image"
                :style="{ backgroundImage: `url(${galleryImage})`}"
                />
    
            </v-sheet>
        </div>

    </div>


</template>


<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import GalleryZoomImage from './GalleryZoomImage'
    import GalleryModalConfirm from './GalleryModalConfirm'

    //Conversor de html
    import html2canvas from 'html2canvas'

    const isMsg = ref(false)

    const appStore = useAppStore()
    const apiStore = useApiStore()


    //Imagem final
    let finalImage = ref(null)

    //Imagem renderizada para servidor
    let imageToServer = ref(null)

    //Upload de imagem
    let selectedFile = ref(null)
    let changeSelectedFile = ref(false)

    //Moldura da imagem
    let galleryStyle = ref(1)
    let galleryImage = ref('')

    //Uso da caâmera
    const stream = ref(null)
    let isCamOpen = ref(false)
    let isCamLoading = ref(false)
    let isShootingCam = ref(false)
    let isCaptureFrame = ref(false)
    let captureImageUrl = ref(null)



    //Adiciona o arquivo do upload na imagem final
    const selectSendImage = () => {
        if (selectedFile.value != null){
            changeSelectedFile.value = true
            finalImage.value = selectedFile.value
        }

    }

    //Adiciona o arquivo da captura de vídeo na imagem final
    const selectCamImage = () => {
        if (captureImageUrl.value != null){
            changeSelectedFile.value = false
            finalImage.value = captureImageUrl.value
        }
    }



    //Adiciona imagem local (upload) 
    const onFileSelected = () => {
        let base64Img;
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            base64Img = reader.result;
            selectedFile.value = base64Img
            finalImage.value = base64Img
            changeSelectedFile.value = true;
        }
        reader.readAsDataURL(file);
    }





    const selectFile = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click(); // Trigger click event on file input
    }


    const handleFile = () => {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        const reader = new FileReader();

        let base64Img;
        
        reader.onloadend = () => {
            base64Img = reader.result;
            selectedFile.value = base64Img
            finalImage.value = base64Img
            changeSelectedFile.value = true;
        }
        reader.readAsDataURL(file);
    }


    //Configurações do video
    const constraints = {
        audio: false,
        video: {
            width: { min: 1024, ideal: 1280, max: 1920 },
            height: { min: 576, ideal: 720, max: 1080 },
            facingMode: 'environment',
        },
    }

    //Liga / Desliga a camera
    const toggleCam = () => {
        if (isCamOpen.value) {
            isCamOpen.value = false
            isShootingCam.value = false
            isCaptureFrame.value = false
            stopVideo()
        } else {
            isCamOpen.value = true
            startVideo()
        }
    }
    
    //Inicia video
    const startVideo = async () => {
        isCamLoading.value = true;
        await navigator.mediaDevices.getUserMedia(constraints).then(show => {
            stream.value = show
            isCamLoading.value = false
        }).catch(error => {
            isCamLoading.value = false;
            alert("Oops... Ocorreu algum erro com o vídeo.")
        });
    }

    //Para video
    const stopVideo = () => {
        isCamOpen.value = false
        stream.value.getTracks().forEach(track => track.stop())
        if(selectedFile.value != null){ 
            finalImage.value = selectedFile.value 
            changeSelectedFile.value = true;
        }
    }

    //Captura imagem da camera
    const shootingCam = () => { 

        changeSelectedFile.value = false;

        if(!isShootingCam.value) {
            isShootingCam.value = true;

            const FLASH_TIMEOUT = 50;
            setTimeout(() => { isShootingCam.value = false }, FLASH_TIMEOUT)

            isCaptureFrame.value = !isCaptureFrame.value; 

            const canvas = document.getElementById("videoCanvas");
            const ctx = canvas.getContext("2d");
            const img = document.getElementById("camera");
            ctx.drawImage(img, 0 , 0, 1280, 720);

            const dataURL = canvas.toDataURL();
            captureImageUrl.value = dataURL

            //Insere o arquivo do vídeo ou do upload na imagem final
            if (isCaptureFrame.value){
                finalImage.value = captureImageUrl.value
            } else {
                finalImage.value = selectedFile.value   
            }
        }
    }




    //Converte composição em imagem
    const renderImg = async () => {
        //appStore.globalMsg('Se você tem um usuário no EisnteinPertencer, receberá um email com o link para Resetar sua Senha.', 'success')

        
        const toRenderImg = document.getElementById("squareImageWithFrame") 

        // Opções da Captura
        const options = {
            allowTaint: true,
            useCORS: true,
            width: 720,
            height: 720,
            scale: 1.1,
            imageTimeout: 0,
        }
        
        html2canvas(toRenderImg, options).then(function(canvas) {
            imageToServer.value = canvas.toDataURL("image/jpg");

            // Imagem que será enviada
            const userGalleyImg = imageToServer.value;

            console.log(userGalleyImg)


            let n = appStore.appData.galeria.content.userImgs.length
            if ( n == 0 ) { n = 1 }

            // Create a timestamp
            let timestamp = new Date().getTime();

            //Comunicação com a API 
            const userId = JSON.parse(localStorage.getItem('userId'));
            const num = Math.floor(Math.random() * 7)
            let newImg = { "userId": userId + timestamp, "type":"gallery", "n": num, "image": userGalleyImg } 

            apiStore.useSaveImg('/uploadimage' , newImg )
            console.log(appStore.appData.galeria.content.userImgs)



            //appStore.gallerySendImageKey += 1
            appStore.galleryUserImgKey += 1


            //Reinicia o envio de imgs
            resetImgSender()

            // Abre imagem em zoom
            setTimeout(function() { 
                zoomImage() 
                isMsg.value = false 
            }, 3000);

        });
    }

    const resetImgSender = () => {
        finalImage.value = null
        imageToServer.value = null
        selectedFile.value = null
        changeSelectedFile.value = false
        galleryStyle.value = 1
    }


    //Retorna as imagens das molduras em svg
    const getImg = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
        /*let colors = ['F4F4F4', '004F81', '00FFCD', '5BC6E8', '3DDEDE', '003358']
        for(var i = 1; i <= 6; i++){
            if (index == i){ 
                return  new URL(`https://placehold.co/80x80/${colors[i-1]}/666666?text=img${index}&font=montserrat`).href 
            }
        }*/
    } 


    //Retorna as imagens das molduras molduras em png
    const aplyFrames = (index) => { 

        //Envia moldura selecionada para renderização da imagem final
        galleryImage.value = new URL(`../assets/img/galleryFrame-${index}.png`, import.meta.url).href

        //Retorna as imagens das molduras molduras em svg (preview)
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
    }

    //Seleciona a moldura 
    const setGalleryStyle = (i) => {

        galleryStyle.value = i

        /*document.getElementById("finalImage").classList.add("anim-final-img");

        setTimeout(() => { 
            document.getElementById("finalImage").classList.remove("anim-final-img") 
        }, "1000");*/

    }



    const zoomImage = () => {
            appStore.isZoomImg = true
        }





    //Enviar imagem
    const confirmImageFinal = async () => {

        isMsg.value = true

        //Se for o momento, libera badge da galeria 
        if (appStore.appData.badges.picture == 0){
            appStore.appData.badges.picture = 1
        }

        //Caso a camera esteja aberta, desliga
        if (isCamOpen.value){
            stopVideo()
        }

        //renderiza a imagem com a moldura
        await renderImg()

        

    }


    console.log(appStore.appData.galeria.content.userImgs.length)





    //Expõe método e constante, que controlam a câmera para o parent component (GalleryModal)
    defineExpose({
        isCamOpen,
        stopVideo,
    })

</script>


<style lang="scss" scoped>
    @import '../styles/main.scss';
    .custom-v-text-area{
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.1) !important;
        border: none !important;
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
    //Esconde o botão padrão de input img
    input[type="file"] {
    display: none;
    }
    .v-sheet-Btn{
        cursor: pointer;
        line-height: 2;
    }
    .video-size {
        width: 178%;
        object-fit: cover;
    }
    .custom-loader{
        position: absolute;
        z-index: 10000;
    }
    .img-opacity-desabled{
        opacity: .3;
    }
    .frame-container{
        position: relative !important;
    }
    .border-image-pos{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2000;
    }

    .source-border-image-pos{
        position: relative;
        top: 0;
        left: 0;
        z-index: 2500;
    }
    .disable-click{
        pointer-events: none;
    }
    .disable-style-selector{
        pointer-events: none;
        opacity: .5;
    }
    .anim-final-img{
        animation: bounceIn; 
        animation-duration: 2s
    }
    .bg-final-image{
        background-size: cover;
        background-position: center
    }

    .create-img{  
        
        position:absolute;
        left:-10000px;
        top:auto;
        
    }
</style>