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
                v-if="!appStore.isMobile"
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
        width="400"
        class="mx-auto rounded-lg px-4 py-8"
        elevation="8"
        >
            <v-card-text>
                Olá, eu sou o XXX e estou por aqui para ser seu guia e te ajudar
                nessa jornada. Lorem ipsum dolor sit am et, consetetur sadipscing
                elitr, sed diam nonumy eirm od tem por invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
            </v-card-text>

            <v-container
            class="d-flex justify-center pa-0 pt-3"
            >
                <v-btn
                class="animate__animated animate__fadeInUp"
                color="primary"
                size="large"
                rounded
                @click="goNext"
                >
                    Iniciar Jornada
                </v-btn>
            
            </v-container>
        
        </v-card>
    </v-sheet>
</template>

<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    
    const appStore = useAppStore() 

    //Animação do personagem
    const blinkEye = ref(false);
    const animIcon = ref(false);
    
    const eyeInterval = setInterval(() => {
        blinkEye.value = !blinkEye.value
    }, 2000);

    const iconInterval = setInterval(() => {
        animIcon.value = !animIcon.value
    }, 4000);

    //Finaliza etapa
    const goNext = () => {
        clearInterval(eyeInterval)
        clearInterval(iconInterval)
        appStore.isReadyToGo = true
    }
</script>


<style scoped>
    .custom-container-pos{
        position: relative;
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