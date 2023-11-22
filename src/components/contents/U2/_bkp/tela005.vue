<template>
	<!--Exemplo iFrame aplicado-->
	<div class="container-iframe">
		<iframe 
			id="iframeId1"
			src="/U2_iTela005/story.html"
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
		//Remove os dados do StoryLine do LocalStorage
		localStorage.removeItem('5p8DIs8PoXk');

		//Finaliza o conteúdo pelo Storylyne
		document.getElementById ("iframeId1").addEventListener ("click", finishedContent, false)

    })

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>