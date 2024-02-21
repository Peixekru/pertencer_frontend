<template>

    <!-- CRIADOR DE IMAGENS (não visível em tela) -->
    <template>
        <!--Renderiza a imagem da câmera-->
        <canvas id="videoCanvas"
        width =1280 height=720
        style="display: none"
        /> 
        <!--Centraliza a imagem que vem da câmera ou do upload e corta em 720 x 720px-->
        <v-sheet id="squareImage"
        width="720"
        height="720"
        class="bg-final-image"
        style="display: none"
        :style="{ backgroundImage: `url(${finalImage})`}"
        />
        <!--Sobrepõe moldura na imagem-->
        <div id="squareImageWithFrame"
        class="pa-0 ma-0"
        style="display: none"
        >
            <v-sheet
            width="720"
            height="720"
            class="bg-final-image"
            :style="{ backgroundImage: `url(${finalImage})`}"
            >
                <v-img
                id="selectedFrame"
                width="720"
                height="720"
                :src="aplyFrames(galleryStyle)" 
                class="source-border-image-pos"
                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                />
            </v-sheet>
        </div>

        <!--Imagem Renderizada (usada para log e validação visual)-->
        <v-img :src="imageToServer" 
        width="720"
        height="720"
        style="display: none"
        />
    </template>


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
                
                    <!--btn-->
                    <label>
                        <input type="file" @change="onFileSelected"/>
                        <v-container
                        class="d-flex justify-center py-4 px-0"
                        >
                            <v-sheet
                            width="100%" 
                            rounded
                            density="comfortable"
                            class="bg-primary text-secondary letter-normal rounded-pill text-center text-button my-0 v-sheet-Btn"
                            >
                                <span v-if="selectedFile == null">Enviar</span>
                                <span v-else>Trocar</span>
                            </v-sheet>
                        </v-container>
                    </label>

                </v-col>

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
                    
                    <h5 class="text-subtitle-1 font-weight-medium"> 
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
                    
                    <h5 class="text-subtitle-1 font-weight-medium"> 
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
                                    <v-img :src="finalImage"
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
                            @click="confirmImage()"
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

</template>


<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import GalleryZoomImage from './GalleryZoomImage'

    //Conversor de html
    import html2canvas from 'html2canvas'

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
    let isStyleSelected = ref(1)

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

            //Converte composição em imagem 
            setTimeout(() => { renderImg() }, "1000");

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

            //Converte composição em imagem 
            setTimeout(() => { renderImg() }, "1000");
        }
    }

    //Converte composição em imagem
    const renderImg = () => {
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
            let image = canvas.toDataURL("image/jpg");
            imageToServer.value = image
        });
    
    }


    //Download image (não está em uso)
    /*const downloadImage = () => {
        const toRenderImg = document.getElementById("squareImageWithFrame") 

        // Opções da Captura
        const options = {
            allowTaint: true,
            useCORS: true,
            width: 720,
            height: 720,
            scale: 1.1,
            imageTimeout:0,
        } 

        html2canvas(toRenderImg, options).then(function(canvas) {
            let image = canvas.toDataURL("image/jpg");
            let link = document.createElement('a');
            link.download = "my-image.png";
            link.href = image;
            link.click();
        });
    }*/


    //Finaliza ou recomeça a seleção das molduras (não está sendo usado)
    /*const updateStyle = () => {
        isStyleSelected.value = !isStyleSelected.value

        if (!isStyleSelected.value){
            //Finaliza escolha
            for (var i = 1; i <= 6; i++){
                document.getElementById("style" + i)
                .style.cssText = "opacity: 1; transition: opacity 1s"
            }
            document.getElementById("finalImage").classList.remove("anim-final-img");
        } else {
            //Recomeça escolha
            for (var i = 1; i <= 6; i++){
                if (i != galleryStyle.value){
                    document.getElementById("style" + i)
                    .style.cssText = "opacity: .3; transition: opacity 1s"
                }
            }
            //Adiciona animação
            document.getElementById("finalImage").classList.add("anim-final-img");
        }
    }*/



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
    const aplyFrames = (index) => {//Converte composição em imagem 
        return  new URL(`../assets/img/galleryFrame-${index}.png`, import.meta.url).href
    }

    //Seleciona a moldura 
    const setGalleryStyle = (i) => {
        galleryStyle.value = i
        document.getElementById("finalImage").classList.add("anim-final-img");
        setTimeout(() => { 
            document.getElementById("finalImage").classList.remove("anim-final-img") 
        }, "500");
    }

    const zoomImage = () => {
            appStore.isZoomImg = true
            appStore.selectedImg = finalImage.value
        }

    //ENVIAR !
    const confirmImageFinal = async () => {
        var reader = new FileReader();
            reader.onload = function(e) {
            finalImage.value = e.target.result  
        };

        // Imagem que será enviada
        const userGalleyImg = finalImage.value
        console.log(userGalleyImg)


        //Comunicação com a API \ {"userCPF":<cpf-do-usuário>,"image":<image-em-base-64>}
        const userId = JSON.parse(localStorage.getItem('userId'));

        let newImg = { "userId": userId, "image": userGalleyImg } 

        apiStore.useSaveImg('/uploadimage' , newImg )




        //apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
    }

    //Salva a imagem final
    const confirmImage = async () => {

        //Se for o momento, libera badge da galeria 
        if (appStore.appData.badges.picture == 0){
            appStore.appData.badges.picture = 1
        }

        //Caso a camera esteja aberta, desliga
        if (isCamOpen.value){
            stopVideo()
        }
        
        //Cria objeto com informações da imagem
        const newImage = {
            "path": finalImage.value,
            "style": galleryStyle.value,
            "visible": false
        }

        //console.log(finalImage.value)

        //Envia objeto para galeria do usuário
        //appStore.appData.galeria.content.userImgs.push(newImage);

        //Envia objeto para galeria do usuário
        //appStore.appData.galeria.content.userImgs.unshift(newImage);

        appStore.imgObject = newImage

        //Atualiza os componentes da galeria
        appStore.galleryCardKey += 1
        appStore.gallerySendImageKey += 1

        
        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

        console.log('Atualizaou galeria')
        
        
        zoomImage()
    }

    //Expõe método e constante que controlam a câmera para o parent component (GalleryModal)
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
</style>