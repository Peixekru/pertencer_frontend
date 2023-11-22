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
        width="360"
        class="mx-auto rounded-lg px-4 py-8"
        elevation="8"
        >
            <v-card-text>
                Olá! Serei o seu guia nesta plataforma. Estou aqui para informar, facilitar e garantir uma experiência incrível para você.
                Pronto para começar? Clique em “Iniciar Jornada" e aproveite ao máximo tudo o que preparamos para seu primeiro momento 
                de aprendiado conosc o.
            </v-card-text>

            <v-container
            class="d-flex justify-center pa-0 pt-3"
            >
                <v-btn
                class="animate__animated animate__fadeInUp text-secondary"
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
    //Eye
    const eyeInterval = setInterval(() => {
        blinkEye.value = !blinkEye.value
    }, 2000);
    //Body
    const iconInterval = setInterval(() => {
        animIcon.value = !animIcon.value
    }, 4000);


    //Finaliza etapa
    const goNext = () => {
        //Para Animação do personagem
        clearInterval(eyeInterval)
        clearInterval(iconInterval)

        //Atualiza o localStorage
        appStore.appData.firstAccess = 2
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
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