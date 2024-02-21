<template>
    <v-sheet
    color="transparent"
    :class="appStore.isMobile ? 'custom-container-pos-mobile' : 'custom-container-pos'"
    > 
        <v-sheet
        color="transparent"
        class="anim-container"
        :class=" animIcon ? 'animate__animated animate__tada ' : ''"
        >
            <v-sheet
            color="transparent"
            class="welcome-icon"
            >
                <v-img 
                width="100"
                
                :class="appStore.isDarkMode ? 'white-svg' : '' "
                src="../assets/img/welcome-icon.svg"
                > 
                    <div 
                    class="eye"
                    :class="blinkEye ? 'animate__animated animate__flash' : ''"
                    >
                        <span :class="appStore.isDarkMode ? 'text-white' : 'text-primary'" >&#9679</span>
                        <span class="px-1"></span>
                        <span :class="appStore.isDarkMode ? 'text-white' : 'text-primary'">&#9679</span>
                    </div> 
            
                </v-img> 
            </v-sheet>
        </v-sheet>
    </v-sheet>

    <v-sheet 
    color="transparent"
    :class="appStore.isMobile ? 'custom-text-pos-mobile' : 'custom-text-pos'"
    >
        <p class="text-primary text-center text-caption"> 
            <span class="font-weight-bold">Aguarde,</span> <br />
            o conteúdo está <br /> 
            sendo carregado.
        </p>


        <v-progress-linear
        color="secondary"
        indeterminate
        rounded
        height="4"
        width="10"
        class="mt-2"
        />
    </v-sheet>




</template>



<script setup>
    import{ ref } from 'vue'
    import { useAppStore } from '../store/app'

    const appStore = useAppStore() 

    //Animação do personagem
    const blinkEye = ref(false);
    const animIcon = ref(false); 
    //Eye
    const eyeInterval = setInterval(() => {
        blinkEye.value = !blinkEye.value
    }, 2000);
    //Body
    const iconInterval = setInterval(() => {
        animIcon.value = !animIcon.value
    }, 4000);

</script>



<style scoped>
.custom-container-pos{
    position: absolute;
    z-index: 5000;
    top: 48vh;
    left: 48vw;
    scale: .4;
    transform: translate(-50%, -50%)
}
.custom-container-pos-mobile{
    position: absolute;
    z-index: 5000;
    top: 50vh;
    left: 50vw;
    scale: .4;
    transform: translate(-50%, -50%)
}
.anim-container{
    position: relative;
    z-index: 4000;
}
.welcome-icon{
    position: absolute;
    z-index: 2000;
    top: 50px;
    left: 50%;
    filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 0.5));
    transform: translate(-50%, -50%) !important;
}
.eye{
    position: absolute;
    z-index: 3000;
    top:  50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    font-size: 1.5em;
}
.custom-text-pos{
    position: absolute;
    z-index: 5000;
    top: 52vh;
    left: 48vw;
    transform: translate(-50%, 60px);
    line-height: 1;
}
.custom-text-pos-mobile{
    position: absolute;
    z-index: 5000;
    top: 53vh;
    left: 50vw;
    transform: translate(-50%, 60px);
    line-height: 1;
}


</style>