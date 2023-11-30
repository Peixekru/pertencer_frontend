<template>
    <v-container class="pa-0">

        <!--Marcador Unidade
        <v-container 
        class="pa-0 pos-test" 
        v-if="appStore.appData.firstAccess == 'finished' && selected == 1 && staus == 0"
        >
            <WelcomeTooltip 
            class="noClick"
            :class="appStore.isMobile ? '' : 'pos-test-inner'"
            :toolTipShow="true" 
            :toolTipPos="2" 
            :toolTipAdjust="appStore.isMobile ? [-42, 0, 0, 0] : [-46, 0, 0, 0]" 
            :hideToolTipButton = true
            :toolTipW = "220"
            > 
                <template v-slot:text>
                    Você está
                    <span class="font-weight-bold">aqui!</span>
                </template>
            </WelcomeTooltip>
        </v-container> -->

        <v-card 
        class="mx-auto rounded-te-xl" 
        :class="block == 0  ? 'desabled-card' : '' "
        rounded="lg"
        elevation="4"
        min-width="100%"
        >
            <button>
                <v-img 
                width="100%" aspect-ratio="16/9" cover
                :lazy-src="`${cardImg}`"
                :src="cardImg"
                >

                <!--Marker -->
                <v-sheet 
                width="100%"
                height="60"
                color="white"
                v-if="appStore.appData.firstAccess == 'finished' && selected == 1 && staus == 0"
                class="d-flex justify-start align-center pa-3 rounded-lg rounded-bs-0 rounded-be-0 elevation-2"
                style="position: absolute; 0; left:0"
                >
                    <v-img 
                    class="me-2"
                    :class="appStore.isDarkMode ? 'white-svg' : 'white-svg' "
                    src="@/assets/img/quest-menu-img.svg"
                    max-width="60"
                    /> 
                    <p class="font-weight-bold">
                        Você está aqui!
                    </p>
                </v-sheet>

                    <div v-if="staus == 1"
                    class="w-100 pe-1 pt-1 d-flex justify-end animate__animated animate__fadeIn animate__delay-0.8s" >
                        <v-icon 
                        size="x-large"
                        color="white"
                        icon="mdi mdi-check-circle"
                        />
                    </div>

                    <div v-if="block == 0"
                    class="w-100 h-100 pb-14 d-flex justify-center align-center icon-opacity"
                    :class="staus == 1 ? '' : 'mt-8' "
                    >
                        <v-icon 
                        size="x-large"
                        color="white"
                        icon="mdi-lock-outline" 
                        />
                    </div>

                    <!--Load Image-->
                    <template v-slot:placeholder>
                        <div class="d-flex align-start justify-end fill-height pe-2 pt-2">
                            <v-progress-circular
                            size="20"
                            width="3"
                            color="primary"
                            indeterminate
                            />
                        </div>
                    </template>
                </v-img>
                

                <v-card-actions class="py-0 bg-accent px-0 ">

                    <v-list-item class="w-100">
                        <div 
                        class="pa-0 font-weight-medium text-caption title-size"
                        :class="appStore.isDarkMode ? '' : 'text-medium-emphasis' "
                        >
                            <p class="text-white text-left">{{ title }}</p>
                        </div>
                        <template v-slot:append>
                            <div class="justify-self-end text-white">
                                <div class="d-flex justify-end align-center">

                                    <v-icon v-if="icon == 'video'"
                                    class="me-1" icon="mdi-clock-time-four-outline" 
                                    />

                                    <v-icon v-if="icon == 'slide'"
                                    class="me-1" icon="mdi-clock-time-four-outline" 
                                    />

                                    <v-icon v-if="icon == 'tree'"
                                    class="me-1" icon="mdi-clock-time-four-outline" 
                                    />

                                    <v-icon v-if="icon == 'capsula'"
                                    class="me-1" icon="mdi-clock-time-four-outline" 
                                    />

                                    <p class="pa-0 text-caption font-weight-medium">
                                        {{ time }} min
                                    </p>
                                </div>
                            </div>
                        </template>
                    </v-list-item>
                </v-card-actions>
            </button>

        </v-card>

    </v-container>
</template>

<script setup>

    import { onMounted } from 'vue';
    import { useAppStore } from '../store/app'

    import WelcomeTooltip from './WelcomeTooltip'

    //Sons dos botões
    import { useBeepSound }  from './composables/useSounds'
    
    const appStore = useAppStore()

    const cardProps = defineProps({
        title: String,
        icon: String,
        cardImg: String,
        time: Number,
        content: {},
        index: Number,
        staus: Number,
        block: Number,
        nextBlock:Number,
        selected: Number,
    })

    let counter = []

	onMounted(() => {
		useBeepSound()

        //console.log(cardProps.content)

	})


</script>


<style lang="scss" scoped>
    @import '../styles/main.scss';  

    .icon-opacity{
        opacity: .5;
    }
    .v-card-actions{
        min-height: 0 !important;
    }
    .title-size{
        max-width: 180px;
        line-height: 120%;
    }
    .desabled-card{
        opacity: .5;
        pointer-events: none;
    }
    .custom-tooltip {
        opacity: .2 !important;
    }

    button{
        width: 100%;
    }
    .pos-test{
        position: relative;
        left:0;
        top: 50%;
        z-index: 5000; 
    }
    .pos-test-inner{
        position: absolute;
        z-index: 5000;
        top: -85px;
        left: 50%;
    }
    .noClick{
		pointer-events: none; 
	}
</style>
