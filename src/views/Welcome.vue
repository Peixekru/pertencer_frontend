<template>
    
    <v-sheet 
    v-if="!appStore.isChangedPassword"
    color="#133B44"
    class=" d-flex align-center fill-height"
    >   
        <!--Card Login-->
        <UserChangePassword /> 
    </v-sheet>

    <v-container 
    v-else
    fluid 
    class="fill-height pa-0 animate__animated animate__fadeIn"
    :class="appStore.isDarkMode ? 'container-dark' : 'container-light' "
    > 
        <v-container fluid
        class="fill-height pa-0"
        :class="appStore.isDarkMode ? 
        'bg-home-img-dark' : 'bg-home-img-light' "
        > 
            <v-responsive 
            class="align-center fill-height"
            >
                <!--Overlay Fx-->
                <v-sheet class="overlay-fx"/>

                <!--Welcome Msg-->
                <WelcomeStartMsg 
                v-if="!appStore.isReadyToGo"
                class="animate__animated animate__fadeInUp" /> 

                <!--Welcome Video-->
                <WelcomeStartVideo 
                v-else
                />
                
            </v-responsive>
        </v-container>
    </v-container>

</template>



<script setup>
    //import { ref } from 'vue';
    import { useAppStore } from '@/store/app'
    import UserChangePassword from '@/components/UserChangePassword'
    import WelcomeStartMsg from '@/components/WelcomeStartMsg.vue'
    import WelcomeStartVideo from '@/components/WelcomeStartVideo.vue'
    
    const appStore = useAppStore() 
    
    //Armazena a URI atual
    appStore.currentRoute = "/"
</script>


<style scoped>
    .bg-home-img-light {
        background: url(../assets/img/home-bg-img-light.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top; 
        background-attachment: fixed;
    }
    .bg-home-img-dark {
        background: url(../assets/img/home-bg-img-dark.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top; 
        background-attachment: fixed;
    }
    .opacity-fill {
        opacity: 0.5;
    }
    .bg-img-icon-1{
        background-image: url("../assets/img/login-big-icon.svg");
        position: absolute;
        height: 60%;
        width: 100%;
        top: -25%;
        right: -10%;
    }
    .bg-img-icon-2{
        background-image: url("../assets/img/login-big-icon.svg");
        position: absolute;
        height: 70%;
        width: 100%;
        top: 25%;
        right: -65%;
    }
    .img-icon-opacity-light{
        opacity: .2; 
    }

    .img-icon-opacity-dark{
        opacity: .04; 
    }
    .overlay-fx{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 79, 129, 0.6) !important; 
        backdrop-filter: blur(8px) !important;
    }
</style>