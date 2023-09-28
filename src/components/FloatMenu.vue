<template>
    <v-sheet
    :elevation="!appStore.isMobile > 600 ? 4 : 0"
    :color="!appStore.isMobile ? '' : 'transparent'"
    class="d-flex px-1 me-2 rounded-pill"
    :class="!appStore.isMobile ? 
    'flex-column side-position' : 'top-position' "
    >
        <v-sheet 
        v-for=" (i, index) in 4" 
        :key="i"
        :width="!appStore.isMobile ? 52 : 42"
        :height="!appStore.isMobile ? 52 : 42"
        class="d-flex align-center justify-center my-1"
        :class="!appStore.isMobile ? 
        'rounded-circle btn-color' : 'bg-transparent' " 
        >
            <v-sheet
            width="100%"
            height="100%"
            class="d-flex justify-center"
            :class=" blockBtn(i) ? 'opacity-control' : '' "
            color="transparent"
            >
                <v-img
                :class="appStore.isDarkMode ||
                appStore.currentRoute == '/conteudo' &&
                !appStore.isMobile ?
                'white-svg' : '' "
                :src="getImg(index + 1)"
                :max-width="index == 0 || index == 3 ? 
                32 : index == 2 ? 20 : 26"
                />  
            </v-sheet>
        </v-sheet>
        <!--Progresso Global -> Gota -->
        <ProgressGlobal />
    </v-sheet>
</template>

<script setup>
    import { useAppStore } from '../store/app'
    import ProgressGlobal from './ProgressGlobal.vue';

    const appStore = useAppStore()

    // Carrega icones dos btns
    const getImg = (index) => {
    return  new URL(`../assets/img/side-icon-${index}.svg`, import.meta.url).href
    }     
    const blockBtn = (i) => {
        if (i == 1 && appStore.appData.capsula.status == 1) { return false }
        else if (i == 2 && appStore.appData.galeria.status == 1) { return false }
        else if (i == 3) { return true }
        else if (i == 4) { return true }
        else { return true }
    }
</script>

<style scoped>
    .side-position{
        position:fixed;
        top:50%;
        right: 0;
        z-index: 2000;
        transform: translate(0%, -50%);
        background-color:rgba( 0, 0, 0, .1);
    }
    .top-position{
        position:fixed;
        top:8px;
        right: 0;
        z-index: 2000;
    }
    .btn-color {
        background-color:rgba( 0, 0, 0, .1);
        box-shadow: inset 1px 1px 3px rgba( 0, 0, 0, .1);
    }
    .no-active-icon{
        opacity: .3;
    }
    .opacity-control{
        opacity: 0.5 !important;
    }
</style>