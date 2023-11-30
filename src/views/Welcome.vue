<template>
    <v-container fluid 
    v-if="appStore.appData.firstAccess == 0"
    class="fill-height"
    :class="appStore.isDarkMode ? 'login-gradiente-dark' : 'login-gradiente-light' "
    > 

        <v-container fluid
        class="pa-0 bg-img-graf" 
        :class="appStore.isDarkMode ? 'bg-img-graf-opacity-dark' : '' " 
        />

        <!--Card Login-->
        <UserChangePassword /> 

    </v-container>

    <v-container 
    v-else
    fluid class="fill-height pa-0"
    :class="appStore.isDarkMode ? 'login-gradiente-dark' : 'login-gradiente-light' "
    > 

        <v-responsive 
        class="align-center fill-height"
        >
            <!--//*! Manter? Overlay Fx-->
            <v-sheet class="overlay-fx"/>

            <!--Vídeo de background-->
            <div 
            :class="appStore.isDarkMode ? 
            appStore.appData.access.color == '0' ? 'video-overlay' : 'video-overlay grayscale-filter' : 
            appStore.appData.access.color == '0' ? 'video-overlay-clean' : 'video-overlay-clean grayscale-filter'"
            >
                <video 
                id="bg-video" 
                autoplay loop muted poster="../assets/img/intro-video-cover.png">
                    <source v-if="!appStore.blockAnimation" src="../assets/img/intro-video.mp4" type="video/mp4">
                </video>
            </div>

    
            

            <!--Welcome Msg-->
            <WelcomeStartMsg 
            v-if="appStore.appData.firstAccess == 1"
            class="animate__animated animate__fadeInUp" /> 

            <!--Welcome Video-->
            <WelcomeStartVideo 
            v-if="appStore.appData.firstAccess == 2"
            />
            
        </v-responsive>

        <!--Bg Grafismo-->
        <!--<v-container fluid
        class="pa-0 bg-img-graf" 
        :class="appStore.isDarkMode ? 'bg-img-graf-opacity-dark' : '' " 
        />-->
        
    </v-container>

</template>



<script setup>
    import { onMounted } from 'vue';
    import { useAppStore } from '@/store/app'
    import UserChangePassword from '@/components/UserChangePassword'
    import WelcomeStartMsg from '@/components/WelcomeStartMsg.vue'
    import WelcomeStartVideo from '@/components/WelcomeStartVideo.vue'
    //Sons dos botões
    import { useBeepSound }  from '@/components/composables/useSounds'
    
    const appStore = useAppStore() 
    
    //Armazena a URI atual
    appStore.currentRoute = "/"

    onMounted(() => {
        //inicia som nos botões
        useBeepSound()
    })

</script>


<style lang="scss" scoped>
    @import '../styles/main.scss';

    //!Manter ?
    .overlay-fx{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 79, 129, 0.6) !important; 
        backdrop-filter: blur(8px) !important;
    }
</style>