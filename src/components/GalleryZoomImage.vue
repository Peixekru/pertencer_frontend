<template>
    <v-dialog
    v-model="appStore.isZoomImg"
    max-width="1100px"
    @click="appStore.isZoomImg = false"
    >

        <v-container
        class="d-flex justify-center"
        >
            <v-card
            class="rounded-0"
            :class="appStore.isMobile ? 'pa-2'  : 'pa-14'"
            :width="appStore.isMobile ? '100%' : '80%'"
            color="#fff"
            >
                <!--btn close--->
                    <v-icon 
                    class="close-bt-pos pa-7"
                    icon="mdi-close-circle-outline" 
                    size="48px"
                    :color=" appStore.isDarkMode ? 'white' : 'primary'"
                    style="background-color: white; border-radius: 0  0  0 30px;"
                    @click="appStore.isZoomImg = false"
                    />   

                <!--<v-img
                v-if="appStore.selectedGallery == 'globalImages'"
                width="100%"
                :lazy-src="appStore.appData.galeria.content.globalImgs[appStore.selectedImg].path"
                :src="appStore.appData.galeria.content.globalImgs[appStore.selectedImg].path"
                :aspect-ratio="1"
                class="show-image"
                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                cover
                >
                    //Moldura da imagem
                    <v-img
                    cover
                    :src="aplyFrames(appStore.appData.galeria.content.globalImgs[appStore.selectedImg].style)"
                    :aspect-ratio="1"
                    />
                </v-img>-->

                <!--<v-sheet
                v-else
                id="flatImg"
                width="100%"
                color="white"
                class="bg-final-image"
                :style="{ backgroundImage: `url(${appStore.appData.galeria.content.userImgs[appStore.selectedImg].path})`}"
                >
                    //Moldura da imagem
                    <v-img
                    :src="aplyFrames(appStore.appData.galeria.content.userImgs[appStore.selectedImg].style)"
                    />

                </v-sheet>-->

                <!--<v-img
                v-else
                id="flatImg"
                width="100%"
                :lazy-src="appStore.appData.galeria.content.userImgs[appStore.selectedImg].path"
                :src="appStore.appData.galeria.content.userImgs[appStore.selectedImg].path"
                :aspect-ratio="1"
                class=" show-image "
                :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                cover
                >
        
                    <v-img
                    cover
                    :src="aplyFrames(appStore.appData.galeria.content.userImgs[appStore.selectedImg].style)"
                    :aspect-ratio="1"
                    />
                </v-img>-->


                <v-sheet
                id="flatImg"
                width="100%"
                color="white"
                class="bg-final-image"
                :style="{ backgroundImage: `url(${appStore.imgObject.path})`}"
                >
                    <!--Moldura da imagem-->
                    <v-img
                    :src="aplyFrames(appStore.imgObject.style)"
                    />

                </v-sheet>

            </v-card>

            <v-sheet 
            class="pa-0 img-info-pos"
            color="transparent"
            align="center"
            width="200"
            >

                <v-card
                v-if="appStore.selectedGallery == 'globalImages'"
                width="100"
                class="d-flex justify-start align-center pe-6 rounded-pill custom-pa animate__animated animate__bounce"
                :class="appStore.isDarkMode ? 'bg-white' : 'bg-black'"
                >
                    <v-img
                    src="../assets/img/user-avatar.svg"
                    :aspect-ratio="1"
                    cover
                    class="boder-user-image me-2 rounded-pill"
                    :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                    width="40"
                    /> 

                    <p v-if="appStore.selectedGallery == 'globalImages'">
                        {{ appStore.appData.galeria.content.globalImgs[appStore.selectedImg].userName }}
                    </p>
                    <p v-else>
                        Você
                    </p>

                    <!--Teste compartilhamento -->
                    <!--<ShareNetwork
                    network="facebook"
                    :url="createImg()"
                    title="Einstein Pertencer"
                    description="Programa de Integração e Socialização da Pessoa Colaboradora"
                    quote="Agora eu também sou uma gota"
                    hashtags="#EinsteinPertencer"
                    >
                        <v-btn 
                        icon="mdi-share-variant" 
                        variant="tonal"
                        size="small"
                        color="white"
                        @click="shareImage"
                        />
                    </ShareNetwork>-->
                    
                </v-card>

                <v-btn 
                rounded
                prepend-icon="mdi-tray-arrow-down"
                color="primary"
                min-width="100px"
                class="my-2"
                @click="downloadImage"
                >
                    SALVAR
                </v-btn>

                <!--<v-btn 
                icon="mdi-share-variant" 
                variant="tonal"
                size="small"
                color="white"
                @click="shareImage"
                />-->
            
            </v-sheet>

        
        </v-container>

        <!--Isntrução download-->
        <v-container 
        class="pa-0 desabled-card"
        :class="appStore.isMobile ? 'custom-container-mobile' : 'custom-container'"
        >
            <WelcomeTooltip 
            class="custom-tooltip-pos"
            :class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
            :toolTipShow="false" 
            :toolTipPos="2" 
            :toolTipAdjust="appStore.isMobile ? [-5, 0, 0, -1] : [0, 0, 0, -86]" 
            :toolTipR="0"
            :hideToolTipButton = true
            :toolTipW = "280"
            >
                <template v-slot:text>
                    Salve e compartilhe este momento!
                </template>
            </WelcomeTooltip>
        </v-container>
    
    </v-dialog>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    import WelcomeTooltip from './WelcomeTooltip'
    import html2canvas from 'html2canvas'

    const appStore = useAppStore()

    // Opções da captura de imagem
    const options = {
        allowTaint: true,
        useCORS: true,
        scale: .9,
    }

    const createImg = () => {
        const toRenderImg = document.getElementById("flatImg")

        html2canvas(toRenderImg, options).then(function(canvas) {
            let image = canvas.toDataURL("image/png");
            return image
        });
    }
    
    const downloadImage = () => {

        const toRenderImg = document.getElementById("flatImg")

        html2canvas(toRenderImg, options).then(function(canvas) {
            let image = canvas.toDataURL("image/png");
            let link = document.createElement('a');
            link.download = "my-image.png";
            link.href = image;
            link.click();

            //Fecha modal da galeria
            appStore.galleryModal = false
        });
    }

    const shareImage = () => {

        const toRenderImg = document.getElementById("flatImg")

        html2canvas(toRenderImg, options).then(function(canvas) {
            let image = canvas.toDataURL("image/png");
            console.log(image)
        });


    }


    defineProps({
        aplyFrames: Function,
    })

</script>

<style lang="scss">
    @import '../styles/main.scss';
    
    .close-bt-pos{
        position: absolute;
        z-index: 3000;
        right: 0;
        top: 0;
    }
    .img-info-pos{
        position: absolute;
        z-index: 3000;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
    }

    .boder-user-image{
        border: 3px solid $secondaryLight;
        background-color: #fff;
    }

    .custom-pa{
        padding: 2px;
    }
    .bg-final-image{
        background-size: cover;
        background-position: center;
    }

    .custom-container{
        position: fixed;
        z-index: 5000;
        left: 50%;
        bottom: 115px;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        left: 0 !important;
        bottom: 0;

    }
    .custom-container-mobile{
        position: fixed;
        z-index: 5000;
        left: 0;
        bottom: -60px;
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        left: 50% !important;
        bottom: 0;

    }
    .desabled-card{
        pointer-events: none;
    }
</style>