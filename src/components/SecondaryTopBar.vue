<template>
    <v-app-bar 
    class="animate__animated animate__fadeInDown"
    color="primary"
    height="100"
    >
        <v-container class="d-flex justify-start align-center px-6">
            <h1 class="text-h2 font-weight-bold" >
                0{{ appStore.currentUnidadeNumber + 1}}
            </h1>
            <h5 class="text-h5 ps-4">
                {{ appStore.currentUnidadeTitle }}
            </h5>

            <v-img
            v-if="appStore.screenWidth > 740"
            class="ms-auto"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            src="../assets/img/top-img-unidade.svg"
            max-width="140"
            />

        </v-container>
    </v-app-bar>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()
</script>