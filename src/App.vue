<template>
	<template v-if="appStore.appData != 'undefined'">
		<v-app class="cursor-preview">
			
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

			<!--Envio de mensagens do sistema (feedback user)-->
			<GlobalMsg />

			<template v-if="appStore.currentRoute != '/'">

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
				@my-click-event="appStore.welcomeStepCounter = 2"
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
				@my-click-event="appStore.welcomeStepCounter = 9"
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
	import { useTheme } from "vuetify"
    import { useContrastSelect, useColorSelect } from "@/components/composables/useSystemStyle"
	import { useScreenMonitor } from '@/components/composables/useScreenMonitor'	
	import TopBar from '@/components/TopBar'
	import FloatMenu from '@/components/FloatMenu'
	import FooterBar from '@/components/FooterBar'
	import CapsulaModal from '@/components/CapsulaModal'
	import GalleryModal from '@/components/GalleryModal'
	import StartModal from '@/components/StartModal'
	import WorkplaceModal from '@/components/WorkplaceModal'
	import WelcomeVideoModal from '@/components/WelcomeVideoModal'
	import GlobalMsg from '@/components/GlobalMsg'
	import WelcomeTooltip from '@/components/WelcomeTooltip'
	import WelcomeModalFx from '@/components/WelcomeModalFx.vue'
	import CustomCursor from '@/components/CustomCursor'



	const appStore = useAppStore()
	const router = useRouter()
    const theme = useTheme()


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

</script>






<style lang="scss">
	@import './styles/main.scss';

	//html *
	//{
	//font-size: 1em !important;
	//}
	



</style>
