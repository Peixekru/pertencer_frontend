<template>
	<template v-if="appStore.appData != 'undefined'">
		<v-app>
			
			<GlobalMsg />

			<template v-if="appStore.currentRoute != '/'">
				<!--Modal da cápsula do tempo-->
				<CapsulaModal :key="appStore.capsulaModalKey"/>

				<!--Modal da galeria de imagens-->
				<GalleryModal />

				<!--Modal vídeo de introdução-->
				<WelcomeVideoModal />

				<template 
				v-if="appStore.welcomeStepCounter >= 4 || 
				appStore.appData.firstAccess >= 5">
					<TopBar />
				</template>
				
				<template 
				v-if="appStore.welcomeStepCounter >= 3 ||
				appStore.appData.firstAccess >= 5">
					<FloatMenu />
				</template>

			</template>

			<FooterBar v-if="appStore.currentRoute == '/conteudo' && 
			appStore.welcomeStepCounter != 11" />
			<v-overlay v-model="appStore.globalOverlay"/>

			<!--Carregamento de Views-->
			<router-view />


			<!--Primeiro acesso -> 1 -->
			<v-container 
			v-if="appStore.welcomeStepCounter == 1"
			class="pa-0"
			>
				<WelcomeTooltip 
				:toolTipShow="false" 
				:toolTipPos="1" 
				:toolTipAdjust="[0, 0, 0, 0]" 
				@my-click-event="appStore.welcomeStepCounter = 2;
				console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
				> 
					<template v-slot:text>
						Esta é a tela principal da sua jornada. Aqui você vai
                    	acompanhar seu progresso e suas conquistas.
					</template>
				</WelcomeTooltip>
			</v-container>

			<!--Primeiro acesso -> 8 -->
			<v-container 
			class="pa-0" 
			v-if="appStore.welcomeStepCounter == 8"
			>
				<WelcomeTooltip 
				:toolTipShow="false" 
				:toolTipPos="2" 
				:toolTipAdjust="appStore.isMobile ? [0, 0, 0, 0] : [0, 0, 0, 0]" 
				@my-click-event="appStore.welcomeStepCounter = 9;
				console.log('welcomeSteps = ' + appStore.welcomeStepCounter);"
				> 
					<template v-slot:text>
						Esta é a tela de conteúdos da unidade. Eu vou tentar
						fazer com que você veja todos os conteúdos em
						sequência. Mas sempre que quiser rever algum
						material, poderá acessar por aqui.
						E, para acessar o menu de unidades, clique no botão
						<span><v-icon color="primary" icon="mdi mdi-grid-large"></v-icon></span> no canto superior da tela.
					</template>
				</WelcomeTooltip>

				<!--Primeiro acesso -> Modal Fx 01-->
                <WelcomeModalFx v-if="appStore.welcomeStepCounter == 8" />
			</v-container>


		</v-app>
	</template>
</template>


<script setup>
	import { onMounted } from 'vue'
	import { RouterView, useRouter } from 'vue-router'
	import { useAppStore } from '@/store/app'
	import { useTheme } from "vuetify";
	import TopBar from '@/components/TopBar'
	import FloatMenu from '@/components/FloatMenu'
	import FooterBar from '@/components/FooterBar'
	import CapsulaModal from '@/components/CapsulaModal'
	import GalleryModal from '@/components/GalleryModal'
	import WelcomeVideoModal from '@/components/WelcomeVideoModal'
	import GlobalMsg from '@/components/GlobalMsg'
	import WelcomeTooltip from '@/components/WelcomeTooltip'
	import WelcomeModalFx from '@/components/WelcomeModalFx.vue';
	import { useScreenMonitor } from '@/components/composables/useScreenMonitor'

	const appStore = useAppStore()
	const router = useRouter()
    const theme = useTheme();

	//Se não estiver logado Volta para LoginView
	if (!JSON.parse(sessionStorage.getItem('loginState'))){
            router.push('/')
        }

	onMounted(() => {
		//Armazena valors iniciais do tamanho da tela, #App e posição do scroll
		useScreenMonitor()

		//Monitora o tamanhos e scroll da tela
		window.addEventListener('resize', useScreenMonitor)
		window.addEventListener('scroll', useScreenMonitor)

		//Verifica o localStorage
		if (localStorage.getItem('localAppData')) {
			appStore.appData = JSON.parse(localStorage.getItem('localAppData'));

			//Aplica o thema 
			theme.global.name.value = appStore.appData.colorTheme
			appStore.isDarkMode = theme.global.current.value.dark
		} 

		//Se não hover infos do usuário no sessionStorage limpa o localStorage também
		const clearStorage = () => {
			const session = sessionStorage.getItem('userInfos');
			if (session == null) {
				localStorage.removeItem('userInfos');
			}
		}
		window.addEventListener('load', clearStorage);
	})

</script>

<style lang="scss">

	@import './styles/main.scss';


	$primary: #00FFCD;
	a {
		cursor: pointer;
	}
	.container-light {
		background: rgb(100, 207, 241);
		background: linear-gradient(45deg, rgba(100, 207, 241, 1) 0%, rgba(75, 255, 239, 1) 100%) !important;
	}
	.container-dark {
		background: rgb(0, 20, 40);
		background: linear-gradient(45deg, rgba(0, 20, 40, 1) 0%, rgba(0, 79, 135, 1) 100%) !important;
	}
	.white-svg {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(81deg) brightness(150%) contrast(102%) !important;
	}
	.img-icon-opacity-light {
		opacity: 0.2 !important;
	}
	.img-icon-opacity-dark {
		opacity: 0.04 !important;
	}
	.first-access{
		position: relative;
		z-index: 1000;
		opacity: 0.3 !important;
		pointer-events: none;
	}
</style>
