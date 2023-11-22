<template>

<!--Retirar essa tela em banco-->

</template>

<script setup>

	//Imports
	import { onMounted } from "vue";
	import { useAppStore } from '../../../store/app'
	import { useRouter } from 'vue-router'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//Inicia o controle de rotas
	const router = useRouter()
	router.push('/home')
	
	appStore.galleryModal = true

	appStore.finishedContent(true)
	useStartProgress()

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress()

		//levar essa rota para footer
		//router.push('/home')
	}


	onMounted(() => {
		//libera o "Start / Relógio" 
        appStore.appData.start.status = 1
		//atualiza o componente "Workplace na home"
        appStore.startCardKey += 1
		//Atualiza o localStorage
	

		//libera o "galeria de imagen" 
		appStore.appData.galeria.status = 1
		//atualiza o componente "galeria de image na home"
		appStore.galleryCardKey += 1
		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))
	})

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>