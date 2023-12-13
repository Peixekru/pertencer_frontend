<template>
	<template v-if="appStore.appData != 'undefined'">
		<v-app class="cursor-preview">

			<!--<DebugModal />-->

			<!--Modal logout-->
			<LogoutModal />
			
			<!--Marcador de mouse-->
			<CustomCursor
			v-if="appStore.tdah == true"
			:targets="[ 'a', 'button', 'input', 'textarea', 'v-btn__content', 'v-responsive__content' ]"
			:circleColor="!appStore.isDarkMode ? 'rgba(0,0,0, .1)' : 'rgba(255,255,255, .1)' "
			:circleColorHover="!appStore.isDarkMode ? 'rgba(0,0,0, .3)' : 'rgba(255,255,255, .3)' "
			:dotColor="!appStore.isDarkMode ? 'rgba(0,0,0, .1)' : 'rgba(255,255,255, .1)'"
			:dotColorHover="!appStore.isDarkMode ? 'rgba(255,255,255, .1)' : 'rgba(0,0,0, .1)' "
			:hoverSize="4"
			/>

			<v-btn 
				v-if="appStore.currentRoute != '/unidade' && 
				appStore.currentRoute != '/conteudo' && 
				appStore.currentRoute != '/' && 
				appStore.isFloatLogoutBtn"

				icon="mdi-logout" 
				color="white"
				size="small"
				class="mx-1 bg-primary logoutStartBtnPos animate__animated animate__fadeIn"
				@click="logOut"
			/>

			<!--Envio de mensagens do sistema (feedback user)-->
			<GlobalMsg />

			<template v-if="appStore.currentRoute != '/' && appStore.currentRoute != '/welcome'">

				<!--Modal da cápsula do tempo-->
				<CapsulaModal :key="appStore.capsulaModalKey"/>

				<!--Modal da galeria de imagens-->
				<GalleryModal />

				<!--Modal Começando bem -->
				<StartModal  />
				
				<WorkplaceModal />

				<!--Modal vídeo de introdução-->
				<WelcomeVideoModal />

				<template 
				v-if="
				appStore.welcomeStepCounter == 'finished' || 
				appStore.welcomeStepCounter >= 4 || 
				appStore.appData.firstAccess >= 5 
				">
					<TopBar ref="trapRef"/>
				</template>
				
				<template 
				v-if="
				appStore.welcomeStepCounter == 'finished' || 
				appStore.welcomeStepCounter >= 3 ||
				appStore.appData.firstAccess >= 5 
				">
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
				:toolTipW = "appStore.isMobile ? 360 : 380 "
				@my-click-event="appStore.welcomeStepCounter = 2"
				> 
					<template v-slot:btnText>
						PROSSEGUIR
					</template>
					<template v-slot:text>
						<p>Esta é a <span class="font-weight-bold">tela principal da sua jornada.</span></p>
						<p class="mt-4">Aqui você vai acompanhar seu<br />progresso e suas conquistas.</p>
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
				@my-click-event="finishFirstAccess()"
				> 
					<template v-slot:btnText>
						PROSSEGUIR
					</template>
					<template v-slot:text>
						<p>Está é a tela de conteúdos da unidade.</p>
						<p class="mt-4">Sempre que entrar em uma unidade você poderá revê-los.</p> 
						<p class="mt-4">Caso queira acessar o menu principal clique no botão <br v-if="appStore.isMobile" />
						<span class="font-weight-bold">"<v-icon icon="mdi mdi-grid-large" size="x-small"></v-icon> PÁGINA INICIAL"</span>
						no canto superior direito da tela.</p>
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
	import { useApiStore } from '@/store/api'
	import { useTheme } from "vuetify"
    import { useContrastSelect, useColorSelect } from "@/components/composables/useSystemStyle"
	import { useScreenMonitor } from '@/components/composables/useScreenMonitor'	
	import TopBar from '@/components/TopBar'
	import FloatMenu from '@/components/FloatMenu'
	import FooterBar from '@/components/FooterBar'
	import CapsulaModal from '@/components/CapsulaModal'
	import GalleryModal from '@/components/GalleryModal'
	import LogoutModal from '@/components/LogoutModal'
	import StartModal from '@/components/StartModal'
	import WorkplaceModal from '@/components/WorkplaceModal'
	import WelcomeVideoModal from '@/components/WelcomeVideoModal'
	import GlobalMsg from '@/components/GlobalMsg'
	import WelcomeTooltip from '@/components/WelcomeTooltip'
	import WelcomeModalFx from '@/components/WelcomeModalFx.vue'
	import CustomCursor from '@/components/CustomCursor'

	//*!Retirar para produção!!
	//import DebugModal from '@/components/DebugModal'

	const appStore = useAppStore()
	const apiStore = useApiStore()
	const router = useRouter()
    const theme = useTheme()


	//Se não estiver logado Volta para LoginView
	if (!JSON.parse(sessionStorage.getItem('loginState'))){
            router.push('/')
        }


	const finishFirstAccess = () => {
		appStore.welcomeStepCounter = 'finished'
		appStore.appData.firstAccess = 'finished'

		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

		//Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

		console.log('Status do primeiro acesso -> ' + appStore.appData.firstAccess)
	}

	//Sair do sistema
    const logOut = () =>{

		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

		//Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		//port / path / data
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

		//Abre modal de confirmação
		appStore.logoutModal = true;
	}

		
	

	onMounted(() => {

		appStore.allFinished == false


		//Armazena valors iniciais do tamanho da tela, #App e posição do scroll
		useScreenMonitor()

		//Monitora o tamanhos e scroll da tela
		window.addEventListener('resize', useScreenMonitor)
		window.addEventListener('scroll', useScreenMonitor)

		//Verifica o localStorage
		if (localStorage.getItem('localAppData')) {
			appStore.appData = JSON.parse(localStorage.getItem('localAppData'))

			//Aplica o thema 
			theme.global.name.value = useContrastSelect(appStore.appData.access.contrast, appStore.appData.access.color == 0)
			theme.global.name.value = useColorSelect(appStore.appData.access.color, theme.global.current.value.dark)
			//theme.global.name.value = appStore.appData.colorTheme
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

	window.addEventListener('keydown', (e) => {
		if (e.key == 'Escape') {
        	appStore.debugModal = !appStore.debugModal
		}
    });

</script>






<style lang="scss">
	@import './styles/main.scss';

	//html *
	//{
	//font-size: 1em !important;
	//}
	
	.logoutStartBtnPos{
		position: fixed;
		z-index: 5000;
		top: 14px;
		left: 50%;
		transform: translateX(-50%) rotateY(180deg) !important;
		font-size: 16px; 
		color:#C5EAF3 !important;
	}


</style>
