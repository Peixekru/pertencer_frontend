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
        v-for=" (i, index) in 22" 
        :key="i"
        >
            <v-img  
            v-if="
            appStore.appData.glogalProgress >= (index * 100) / 22
            "
            max-width="42"
            :src="getImg(index)"
            class="animate__animated animate__fadeIn mb-1"
            :class="appStore.appData.access.color == 0 ? 'secondary-svg' : 'secondary-svg-mono' " 
            />

            <p class="progress-global-text mt-1">{{ appStore.appData.glogalProgress }}%</p>

            <!--
            <v-img  
            v-else
            max-width="44"
            :src="getImg(20)"
            class="animate__animated animate__fadeIn"
            :class="appStore.appData.access.color == 0 ? 'secondary-svg' : 'secondary-svg-mono' " 
            />
            -->
            
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

        if (appStore.appData.glogalProgress > 0 ){
            // Carrega imagens do progresso global
            return  new URL(`../assets/img/global-prog${index + 1}.svg`, import.meta.url).href
        }

        
    } 
</script>

<style scoped>
    .progress-bg-color{
        background-color:rgba( 0, 0, 0, .0);
        position: absolute;
        bottom: 0;
        z-index: 2000;    
    }
    .progress-bg-percent{
        background-color:rgba( 0, 0, 0, .0);
        position: absolute;
        bottom: 0;
        z-index: 1000;    
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
    .progress-global-text{
        font-size: 11px;
        color: white !important;
        letter-spacing: 0.08px;



        position: absolute !important;
        top: 50%;
        left: 50%;
        z-index: 20000 !important;
        font-weight: 400;
        transform: translate(-50%, -50%);
        
    }

</style>