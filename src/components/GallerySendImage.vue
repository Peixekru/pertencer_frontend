<template>

    <!--Render Camera image-->
    <canvas
    id="myCanvas"
    style="display: none;"
    />    
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
                    cols="6"
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
                    cols="6"
                    class="py-3"
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
                            class="pa-0"
                            :class="isStyleSelected ? 'disable-click' : finalImage != null && galleryStyle == null ? 'animate__animated animate__bounce' : ''"
                            cols="4"
                            v-model="galleryStyle"
                            v-for="i in 6"
                            >                 
                                <v-img
                                :id="'style' + i"
                                disabled
                                class="rounded-lg mx-1 my-1"

                                :class="finalImage != null ?    
                                galleryStyle == i ?
                                appStore.appData.access.color == 1 ? 'selected-style elevation-6 anim grayscale-filter' : 'selected-style elevation-6 anim' : 
                                appStore.appData.access.color == 1 ? 'elevation-1 grayscale-filter' : 'elevation-1' :
                                appStore.appData.access.color == 1 ? 'disable-style-selector grayscale-filter' : 'isable-style-selector' "

                                :src="getImg(i)"
                                @click="galleryStyle = i"
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

                <!--btn-->
                <!--<v-sheet
                color = "transparent"
                class="d-flex justify-center py-6"
                v-if="galleryStyle != null && finalImage != null"
                :class="galleryStyle != null ? 'animate__animated animate__fadeInUp' : ''"
                >
                    <v-btn 
                    :disabled="galleryStyle == null"
                    block 
                    type="button"
                    rounded
                    density="comfortable"
                    class="bg-primary letter-normal"
                    @click="updateStyle()"
                    >
                        <span v-if="!isStyleSelected">Escolher</span>
                        <span v-else>Trocar</span>
                    </v-btn>
                </v-sheet>-->
                
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
                            <!--Confetti Effect-->
                            <!--<v-container  class="pa-0 d-flex justify-center">
                                <ConfettiExplosion
                                v-if="isStyleSelected && finalImage != null " 
                                :particleSize="3"
                                :particleCount="80" 
                                :force="0.1" 
                                :duration="3000"
                                :stageWidth="400"
                                :colors="['#00FFCD', '#004F81', '#5BC6E8', '#39DCDE']"
                                />
                            </v-container>-->

                            <v-sheet
                            id="finalImage"
                            color="trasparent"
                            elevation="4"
                            class="d-flex justify-center"
                            >
                                <v-container class="pa-0 frame-container">
                                    <!--Moldura da imagem-->
                                    <v-img
                                    cover
                                    :src="aplyFrames(galleryStyle)" 
                                    :aspect-ratio="1"
                                    class="border-image-pos"
                                    :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                                    />

                                    <v-img
                                    id="my-image"
                                    v-if="finalImage != null"
                                    :lazy-src="finalImage"
                                    :src="finalImage"
                                    aspect-ratio="1"
                                    cover
                                    />


                                    <v-img
                                    v-if="finalImage == null"
                                    cover
                                    lazy-src="../assets/img/profile_pic.png"
                                    src="../assets/img/profile_pic.png"
                                    :aspect-ratio="1"
                                    />
                                
                                </v-container>
                            
                            </v-sheet>

                            <!--btn-->
                            <v-container
                            class="d-flex justify-center py-6 px-0"
                            :class="finalImage != null ? 'animate__animated animate__fadeInUp' : ''"
                            >
                                <v-btn 
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
</template>


<script setup>
    import { ref } from 'vue'
    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import ConfettiExplosion from "vue-confetti-explosion"

    const appStore = useAppStore()
    const apiStore = useApiStore()

    //Imagem final
    let finalImage = ref(null)

    //*INPUT FILE
    let changeSelectedFile = ref(false)
    let selectedFile = ref(null)

    //Adiciona imagem local 
    const onFileSelected = (/*event*/) => {
        //selectedFile.value = URL.createObjectURL(event.target.files[0])
        //finalImage.value = URL.createObjectURL(event.target.files[0])
        //changeSelectedFile.value = true;

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


    //Define o arquivo enviado no resultado final
    const selectSendImage = () => {
        if (selectedFile.value != null){
            changeSelectedFile.value = true
            finalImage.value = selectedFile.value
        }
    }

    //Define a imagem da camera no resultado final
    const selectCamImage = () => {
        if (captureImageUrl.value != null){
            changeSelectedFile.value = false
            finalImage.value = captureImageUrl.value
        }
    }

    //*USE CAMERA
    const stream = ref(null)

    let isCamOpen = ref(false)
    let isCamLoading = ref(false)
    let isShootingCam = ref(false)
    let isCaptureFrame = ref(false)
    let captureImageUrl = ref(null)

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

            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            const img = document.getElementById("camera");
            ctx.drawImage(img, 0, 0, 300, 180);

            const dataURL = canvas.toDataURL();
            captureImageUrl.value = dataURL

            if (isCaptureFrame.value){
                finalImage.value = captureImageUrl.value
            } else {
                finalImage.value = selectedFile.value   
            }

        }
    }

    //BKP
    /*DOWNLOAD
    const downloadImage = () => {
        const download = document.getElementById("downloadPhoto");
        const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        download.setAttribute("href", canvas);
    }*/

    //*STYLE
    let galleryStyle = ref(null)
    let isStyleSelected = ref(false)

    //Finaliza ou recomeça a seleção das molduras
    const updateStyle = () => {
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
    }

    //Retorna as imagens das molduras
    const getImg = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
        /*let colors = ['F4F4F4', '004F81', '00FFCD', '5BC6E8', '3DDEDE', '003358']
        for(var i = 1; i <= 6; i++){
            if (index == i){ 
                return  new URL(`https://placehold.co/80x80/${colors[i-1]}/666666?text=img${index}&font=montserrat`).href 
            }
        }*/
    } 


    //Adiciona as molduras na imagem final
    const aplyFrames = (index) => {
        return  new URL(`../assets/img/galleryFrame-${index}.svg`, import.meta.url).href
    }

    //*SEND FINAL IMAGE
    const confirmImage = () => {
        
        const newImage = {
            "path": finalImage.value,
            "style": galleryStyle.value,
            "visible": false
        }

        appStore.appData.galeria.content.userImgs.unshift(newImage);

        appStore.imgObject = newImage

        appStore.galleryCardKey += 1
        appStore.gallerySendImageKey += 1

        //Libera badge da galeria 
        if (appStore.appData.badges.picture == 0){
            appStore.appData.badges.picture = 1
        }


        //console.log(appStore.appData.galeria.content.userImgs)

        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

    }

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
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2000;
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
</style>