<template>
    <v-sheet
    class="GlobalProgress"
    color="transparent"
    >

        <v-sheet 
        :width="!appStore.isMobile ? 52: 42"
        :height="!appStore.isMobile ? 72 : 62" 
        class="d-flex align-center justify-center my-1 progress-bg-color"
        :class="!appStore.isMobile ? '' : 'progress-bg-right-adjust' "
        >
            <v-img  
            max-width="54"
            src="../assets/img/side-progress-outline.svg"
            />
        </v-sheet>

        <v-sheet 
        width="52"
        :height="!appStore.isMobile ? 72 : 62"  
        class="d-flex align-end justify-center my-1 progress-bg-percent"
        :class="!appStore.isMobile ? '' : 'progress-bg-right-adjust-mobile' "
        v-for=" (i, index) in 11" 
        :key="i"
        >
            <v-img  
            v-if="
            appStore.appData.glogalProgress <= index * (10) &&
            appStore.appData.glogalProgress >= (index * (10)) - 10 &&
            appStore.appData.glogalProgress != 0 &&
            appStore.appData.glogalProgress != 100
            "
            :max-width=" 
            index > 4 && index < 11? 
            44 : 34"
            :src="getImg(index - 1)"
            class="animate__animated animate__fadeIn"
            />

            <v-img  
            v-if="
            appStore.appData.glogalProgress == 100
            "
            max-width="44"
            :src="getImg(10)"
            class="animate__animated animate__fadeIn"
            />
        </v-sheet>

        <div class="d-flex align-center justify-center drop-deform">
            <div 
            :class="!appStore.isMobile ? 
            'drop' : 'drop-top' " 
            />
        </div>

    </v-sheet>
</template>


<script setup>
    import { useAppStore } from '../store/app'

    //Inicia a store
    const appStore = useAppStore()

    const getImg = (index) => {

        // Carrega imagens do progresso global
        return  new URL(`../assets/img/global-prog${index}.svg`, import.meta.url).href
    } 
</script>

<style scoped>
    .progress-bg-color{
        background-color:rgba( 0, 0, 0, .0);
        position: absolute;
        bottom: 0;
        z-index: 20000;    
    }
    .progress-bg-percent{
        background-color:rgba( 0, 0, 0, .0);
        position: absolute;
        bottom: 0;
        z-index: 10000;    
    }
    .progress-bg-right-adjust{
        right:0;
    }
    .progress-bg-right-adjust-mobile{
        right:-5px;
        scale: 90%;
        top: 5px;
    }
    .drop-deform{
        transform: scale(1, 1.2);
    }
    .drop{
        background-color:rgba( 0, 0, 0, .1);
        box-shadow: inset 0 0 8px rgba( 0, 0, 0, .2);
        width: 44px;
        height: 44px;		
        border-radius:0% 100% 100% 100%;
        transform: rotate(45deg);
        margin: 26px 0 11px 0;
    }
    .drop-top{
        background-color:rgba( 0, 0, 0, .1);
        box-shadow: inset 0 0 8px rgba( 0, 0, 0, .2);
        width: 36px;
        height: 36px;		
        border-radius:0% 100% 100% 100%;
        transform: rotate(45deg);
        margin: 26px 0 11px 0;
    }

</style>