<template>
	<StoryLineLoading 
		v-if="appStore.isStoryLineLoading"
	/>

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
	import { useRouter } from 'vue-router'

	import StoryLineLoading from '../../../components/StoryLineLoading'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//Inicia api de comunicação com db
	const apiStore = useApiStore();

	//Inicia o controle de rotas
	const router = useRouter()

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {

		//Informa fim de unidade
    	appStore.isUnidadeFinished = true;

		appStore.finishedContent(true)
		useStartProgress()

		//libera o Relógio no menu lateral
		if(appStore.appData.badges.clock == 0){
			appStore.appData.badges.clock = 1
		}

		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

		//Atualiza backend
		const userId = JSON.parse(localStorage.getItem('userId'));
		apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
	}

	//Esconde Loader para StoryLine
	const hideLoader = () => {
		appStore.isStoryLineLoading = false
	}

    onMounted(() => {
		//Finaliza o conteúdo pelo Storylyne
		document.getElementById ("iframeId1").addEventListener ("click", finishedContent, false)

		//Monitora carregamento do StoryLine
		document.getElementById ("iframeId1").addEventListener ("load", hideLoader, false)

		//Exibe loader do StoryLine
		appStore.isStoryLineLoading = true
    })

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>