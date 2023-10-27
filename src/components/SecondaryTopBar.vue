<template>
    <v-app-bar 
    class="animate__animated animate__fadeInDown"
    color="primary"
    height="100"
    >
        <v-container fluid class="d-flex justify-start align-center ps-16 pe-0">
            <h1 class="text-h2 font-weight-bold text-info" >
                0{{ appStore.currentUnidadeNumber + 1}}
            </h1>
            <h5 class="text-h5 font-weight-bold ps-4">
                {{ appStore.currentUnidadeTitle }}
            </h5>

            <v-img
            v-if="appStore.screenWidth > 740"
            class="ms-auto"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            :src="getImg(appStore.currentUnidadeNumber + 1)"
            max-width="246"
            />

        </v-container>
    </v-app-bar>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()

    const getImg = (index) => {
    return  new URL(`../assets/img/conteudo-topbar-${index}.png`, import.meta.url).href
    //return  new URL(`https://placehold.co/80x80/eaeaea/ffffff?text=img${index}&font=montserrat`).href
    } 

</script>