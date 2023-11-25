<template>
    <v-sheet
    color="transparent"
    class="custom-container-pos"
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

        <v-card
        width="380"
        class="mx-auto rounded-lg px-4 py-8"
        elevation="8"
        >


            <p class="my-4">Parabéns você concluiu o Programa de Integração Einstein Pertencer. 
            Estamos ansiosos para ver todos os feitos incríveis que o futuro reserva para você!
            </p>

            <v-container
            class="d-flex justify-center pa-0 pt-3"
            >
                <v-btn
                class="animate__animated animate__fadeInUp text-secondary"
                color="primary"
                size="large"
                rounded
                @click="finishedAll"
                >
                    Começar
                </v-btn>
            
            </v-container>
        </v-card>
    </v-sheet>

</template>



<script setup>
    import{ ref } from 'vue'
    import { useAppStore } from '../store/app'
    import WelcomeModalFx from './WelcomeModalFx.vue'

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

    const finishedAll = () => {
        appStore.galleryModal = true
        appStore.allFinished = 'finished'
    } 

</script>



<style scoped>
.custom-container-pos{
    position: absolute;
    z-index: 5000;
    top: 55vh;
    left: 50vw;
    transform: translate(-50%, -50%)
}
.anim-container{
    position: relative;
    z-index: 4000;
}
.welcome-icon{
    position: absolute;
    z-index: 2000;
    top: -50px;
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

</style>