<template>
    <v-app-bar 
    class="animate__animated animate__fadeInDown"
    color="primary"
    height="100"
    >
        <v-container fluid 
        class="d-flex justify-start align-center pe-0"
        :class="appStore.isMobile ? 'ps-6' :  'ps-16' "
        >
            <h1 
            class="text-h2 font-weight-bold"
            :class="appStore.isDarkMode ? 'text-white' : 'text-info'" 
            >
                0{{ appStore.currentUnidadeNumber + 1}}
            </h1>
            <h5 class="text-h5 font-weight-bold ps-4">
                {{ appStore.currentUnidadeTitle }}
            </h5>

            <v-img
            v-if="appStore.screenWidth > 740"
            class="ms-auto"
            :class="appStore.appData.access.color == 1 ? 'grayscale-filter' : '' "
            :src="getImg(appStore.currentUnidadeNumber + 1)"
            max-width="248"
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