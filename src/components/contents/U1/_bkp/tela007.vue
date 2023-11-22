<template>
	<!--Exemplo iFrame aplicado-->
	<div class="container-iframe-w-footer">
		<iframe 
			id="iframeId1"
			src="/U1_iTela007/story.html"
			title="story"
			style="border: none"
			class="rounded-lg responsive-iframe"
			>
		</iframe>
	</div>
</template>

<script setup>

	//Imports
	import { onMounted } from "vue"
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress()
	}

    onMounted(() => {
		//Finaliza o conteúdo pelo Storylyne
		document.getElementById ("iframeId1").addEventListener ("click", finishedContent, false)


		//Remove os dados do StoryLine do LocalStorage
		localStorage.removeItem('5vL5Kys7oNn');

		//libera o "Workplace" 
        appStore.appData.workplace.status = 1
		//atualiza o componente "Workplace na home"
        appStore.workPlaceCardKey += 1
		//Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData))


    })

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>