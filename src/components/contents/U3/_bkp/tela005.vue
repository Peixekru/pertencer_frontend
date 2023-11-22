<template>
	<v-card 
	width="100%" 
	elevation="6"
	class="d-flex justify-center mx-auto rounded-lg pa-6"
	>
		<h1 align="center">Galeria de imagens<br />
			<span class="bg-amber px-4">recurso da plataforma que libera badge</span>
		</h1>		

	</v-card>

	<!--// *! Executa método para finalizar conteúdo -->
	<v-container
	class="d-flex justify-center my-10"
	>
		<v-btn variant="outlined"
		color="white"
		@click="finishedContent"
		>
			finalizar conteúdo
		</v-btn>
	</v-container>

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

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress()

		//levar essa rota para footer
		router.push('/home')
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