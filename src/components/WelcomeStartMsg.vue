<template>
    <v-sheet
    color="transparent"
    class="custom-container-pos"
    > 
        <!--<v-sheet
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
        </v-sheet>-->

        <v-card
        width="360"
        class="d-flex justify-center align-start mx-auto rounded-xl pa-5"
        elevation="8"
        >

            <v-img 
            class="mx-1 mt-4 animate__animated animate__fadeIn"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            src="@/assets/img/quest-menu-img.svg"
            width="50"
            /> 

            <v-sheet>
                <v-card-text>
                    <p class="text-h6 font-weight-bold">Olá, eu sou a gota de excelência Einstein. Serei sua guia nesta plataforma.</p>
                    <p class="mt-4">Estou aqui para informar, facilitar e garantir uma experiência incrível para você. <span class="font-weight-bold">Pronto para começar?</span></p>
                    <p class="mt-4">Clique em <span class="font-weight-bold">“INICIAR JORNADA"</span> e aproveite ao máximo tudo o que preparamos para seu primeiro momento de aprendizado conosco.</p>
                </v-card-text>

                <v-container
                class="d-flex justify-start pt-3"
                >
                    <v-btn
                    class="animate__animated animate__fadeInUp text-secondary"
                    color="primary"
                    density="comfortable"
                    rounded
                    @click="goNext"
                    >
                        Iniciar Jornada
                    </v-btn>
                </v-container>
            </v-sheet>
        </v-card>
    </v-sheet>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useAppStore } from '../store/app'
    import { useApiStore } from '@/store/api'

    //Sons dos botões
    import { useBeepSound }  from '@/components/composables/useSounds'
    
    //Inicia conexão com dados globais do app
    const appStore = useAppStore() 
    //Inicia conexão com Api
    const apiStore = useApiStore()

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
        

        /*
        //libera o badge Relógio
		appStore.appData.badges.clock = 2
        //libera o badge Coração
		appStore.appData.badges.heart = 2
        //libera o badge da galeria
        appStore.appData.badges.picture = 2
		


        //libera o "galeria de imagens" 
		appStore.appData.galeria.status = 1
        //libera o "Começando bem" 
        appStore.appData.start.status = 1
        //libera o "Workplace" 
        appStore.appData.workplace.status = 1

        console.log('Liberou na home: Galeria - Começando Bem - Workplace')
        console.log('liberou badges: Relógio - Coração - Galeria')
        */

        //Atualiza o localStorage
        appStore.appData.firstAccess = 2
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

        //Para Animação do personagem
        clearInterval(eyeInterval)
        clearInterval(iconInterval)
    }

    onMounted(() => {
        //inicia som nos botões
        useBeepSound()
    })

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
        font-size: .88em;
    }
</style>