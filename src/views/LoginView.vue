<template>
    
    <v-container fluid 
    class="fill-height"
    :class="appStore.isDarkMode ? 'container-dark' : 'container-light' "
    >   
        <div 
        class="bg-img-icon-1" 
        :class="appStore.isDarkMode ? 'img-icon-opacity-dark' : 'img-icon-opacity-light' "
        />

        <div 
        class="bg-img-icon-2"
        :class="appStore.isDarkMode ? 'img-icon-opacity-dark' : 'img-icon-opacity-light' "
        />

        <v-responsive 
        class="align-center fill-height
        ">
            <!--Card Login-->
            <UserLogin /> 

        </v-responsive>
    </v-container>

</template>



<script setup>
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'
    import UserLogin from '../components/UserLogin.vue'
    
    const appStore = useAppStore() 
    const router = useRouter()
    
    //Armazena a URI atual
    appStore.currentRoute = router.currentRoute.value.fullPath
</script>



<style scoped>
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

</style>