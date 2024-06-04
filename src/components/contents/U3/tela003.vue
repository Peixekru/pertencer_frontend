<template>

	<StoryLineLoading v-if="appStore.isStoryLineLoading" />

	<!--Exemplo iFrame aplicado-->
	<div class="container-iframe-w-footer">
		<iframe id="iframeId1" src="/U3_iTela003/story.html" title="story" style="border: none"
			class="rounded-lg responsive-iframe">
		</iframe>
	</div>

</template>

<script setup>

//Imports
import { onMounted, defineProps } from "vue"
import { useAppStore } from '../../../store/app'
import { useStartProgress } from '../../../components/composables/useProgress'

import StoryLineLoading from '../../../components/StoryLineLoading'

//Inicia o Pinia com a store global do App (appStore)
const appStore = useAppStore();

//Finaliza o conteúdo e atualiza progresso
const finishedContent = () => {
	// Ajusta isUnidadeFinished com base na prop isLastObject
	props.isLastObject ?
		appStore.isUnidadeFinished = true :
		appStore.isUnidadeFinished = false;

	appStore.finishedContent(true)
	useStartProgress()
}

// Recebe a prop isLastObject do componente pai
const props = defineProps({
	isLastObject: Boolean
});

//Esconde Loader para StoryLine
const hideLoader = () => {
	appStore.isStoryLineLoading = false
}

onMounted(() => {
	//Finaliza o conteúdo pelo Storylyne
	document.getElementById("iframeId1").addEventListener("click", finishedContent, false)

	//Monitora carregamento do StoryLine
	document.getElementById("iframeId1").addEventListener("load", hideLoader, false)

	//Exibe loader do StoryLine
	appStore.isStoryLineLoading = true
})

</script>



<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';
</style>