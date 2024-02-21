<template>
    
    <v-container fluid 
    class="fill-height"
    :class="appStore.isDarkMode ? 'login-gradiente-dark' : 'login-gradiente-light' "
    >   
        <v-container fluid
        class="pa-0 bg-img-graf" 
        :class="appStore.isDarkMode ? 'bg-img-graf-opacity-dark' : '' " 
        />

        <v-responsive 
        class="align-center fill-height"
        >
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



<style lang="scss" scoped>
    @import '../styles/main.scss';
    .bg-img-graf-opacity-dark{
        opacity: .3 !important;
    }
</style>