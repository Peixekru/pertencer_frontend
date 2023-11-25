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
	import { useApiStore } from '../../../store/api'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//Inicia api de comunicação com db
	const apiStore = useApiStore();

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress()

		//libera o Relógio no menu lateral
		appStore.appData.badges.clock = 1

		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

		//Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
	}

    onMounted(() => {
		//Finaliza o conteúdo pelo Storylyne
		document.getElementById ("iframeId1").addEventListener ("click", finishedContent, false)
    })

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>