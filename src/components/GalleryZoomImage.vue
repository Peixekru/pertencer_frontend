<template>
    <v-dialog
    v-model="appStore.isZoomImg"
    max-width="1100px"
    @click="appStore.isZoomImg = false"
    >
        <v-container
        v-if="appStore.appData.galeria.content.userImgs != null"
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
                    @click="appStore.isZoomImg = false; appStore.changeImage = false"
                    />   

                <!--Img-->
                    <v-img
                    width="100%"
                    :lazy-src="appStore.appData.galeria.content.userImgs[0].img"
                    :src="appStore.appData.galeria.content.userImgs[0].img"
                    :aspect-ratio="1"
                    class="show-image"
                    :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
                    cover
                    >

                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                            indeterminate
                            size="100"
                            width="10"
                            color="primary"
                            />
                        </v-row>
                    </template>

                    </v-img>


            </v-card>

            <v-sheet 
            class="pa-0 img-info-pos"
            :class="appStore.isMobile ? 'img-info-pos-mobile' : 'img-info-pos'"
            color="transparent"
            align="center"
            width="90%"
            >

                <!--<v-card
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
                    
                </v-card>-->

                <!--Teste compartilhamento -->
                <ShareNetwork
                    network="linkedin"
                    :url="appStore.appData.galeria.content.userImgs[0].img"
                    title="Einstein Pertencer"
                    description="Feliz em compartilhar que estou começando um novo cargo no Hospital Albert Einstein."
                    hashtags="#AgoraEuFaçoParte #OrgulhoEmPertencer #EinsteinPertencer"
                    >
                        <v-btn 
                        icon="mdi-linkedin"
                        color="primary"
                        class="my-2 mx-1"
                        />
            
                </ShareNetwork>

                <!--Teste compartilhamento -->
                <ShareNetwork
                    network="facebook"
                    :url="appStore.appData.galeria.content.userImgs[0].img"
                    title="Einstein Pertencer"
                    description="Feliz em compartilhar que estou começando um novo cargo no Hospital Albert Einstein."
                    hashtags="#AgoraEuFaçoParte #OrgulhoEmPertencer #EinsteinPertencer"
                    >
                        <v-btn 
                            rounded
                            icon="mdi-facebook"
                            color="primary"
                            class="my-2 mx-1"
                            />
            
                </ShareNetwork>

                <!--Teste compartilhamento -->
                <ShareNetwork
                    network="twitter"
                    :url="appStore.appData.galeria.content.userImgs[0].img"
                    title="Einstein Pertencer"
                    description="Feliz em compartilhar que estou começando um novo cargo no Hospital Albert Einstein."
                    hashtags="#AgoraEuFaçoParte #OrgulhoEmPertencer #EinsteinPertencer"
                    >
                        <v-btn 
                            rounded
                            icon="mdi-twitter"
                            color="primary"
                            class="my-2 mx-1"
                            />
            
                </ShareNetwork>
                

                <v-btn 
                rounded
                icon="mdi-download-multiple"
                color="primary"
                class="my-2 mx-1"
                @click="downloadImage(appStore.appData.galeria.content.userImgs[0].img)"
                />

                <!--<v-btn 
                rounded
                icon="mdi-eye-check"
                color="primary"
                class="my-2 mx-1"
                @click="hideImage(showIndex)"
                />-->

                <v-btn 
                rounded
                icon="mdi-trash-can"
                color="primary"
                class="my-2 mx-1"
                @click="deleteImg(showIndex)"
                />
            
            </v-sheet>

        
        </v-container>

        <!--Isntrução download
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
        </v-container>-->
    
    </v-dialog>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    import axios from 'axios';
    //import WelcomeTooltip from './WelcomeTooltip'


    const appStore = useAppStore()
    
    const downloadImage = (img) => {
        // URL da imagem a ser baixada
        const imageUrl = img;
        // solicitação GET usando Axios
        axios( { url: imageUrl, method: 'GET', responseType: 'blob' } ) // tipo de resposta como Blob
        .then(response => {
            // Criarar um objeto Blob com os dados retornados
            const blob = new Blob([response.data]);
            // URL para o Blob
            const blobUrl = window.URL.createObjectURL(blob);
            // link de download
            const link = document.createElement('a');
            link.href = blobUrl;
            // Atributo de download para forçar o download
            link.setAttribute('download', 'image.png');
            // Link ao documento
            document.body.appendChild(link);
            // Link para iniciar o download
            link.click();
            // Remove o link do documento após o download
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error('Erro ao baixar a imagem:', error);
        });
    }



    defineProps({
        aplyFrames: Function,
        hideImage: Function,
        deleteImg: Function,
        showIndex: Number,
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

    .img-info-pos-mobile{
        position: absolute;
        z-index: 3000;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 55%);
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