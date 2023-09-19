<template>
	<template v-if="appStore.appData != 'undefined'">
		<v-app>

			<template v-if="appStore.currentRoute != '/'">
				<TopBar />
				<FloatMenu />
			</template>

			<FooterBar v-if="appStore.currentRoute == '/conteudo'" />

			<!--//Carrega as Views-->
			<router-view />

		</v-app>
	</template>
</template>


<script setup>
	import { onMounted } from 'vue'
	import { RouterView } from 'vue-router'
	import { useAppStore } from '@/store/app'
	import { useTheme } from "vuetify";

	import TopBar from '@/components/TopBar.vue'
	import FloatMenu from '@/components/FloatMenu.vue'
	import FooterBar from '@/components/FooterBar.vue'

	//import { useApiGet } from '@/components/composables/useApi'
	import { useScreenMonitor } from '@/components/composables/useScreenMonitor'

	const appStore = useAppStore()

	//Inicia os themas do Vuetify
    const theme = useTheme();

	//Carrega dados do usuário
	//useApiGet(':3006', '/user', {"Key": "Logoin"});
	

onMounted(() => {
	//Armazena valors iniciais do tamanho da tela, #App e posição do scroll
	useScreenMonitor()

	//Monitora o tamanhos da tela e do #App
	window.addEventListener('resize', useScreenMonitor)
	//Monitora o scroll da tela
	window.addEventListener('scroll', useScreenMonitor)


	//Verifica o localStorage
	if (localStorage.getItem('localAppData')) {
		appStore.appData = JSON.parse(localStorage.getItem('localAppData'));

		//Aplica o thema 
		theme.global.name.value = appStore.appData.colorTheme
		//Verifica se thema é escuro ou claro
		appStore.isDarkMode = theme.global.current.value.dark
	} 

	const clearStorage = () => {

		const session = sessionStorage.getItem('userInfos');

		if (session == null) {
			localStorage.removeItem('userInfos');
		}

		//sessionStorage.setItem('register', 1);
	}

	window.addEventListener('load', clearStorage);

})
</script>

<style>
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
</style>
