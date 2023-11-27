<template>
	<v-card 
	width="100%" 
	elevation="6"
	class="mx-auto rounded-lg pa-6"
	>
		<h6 class="text-h6 px-8">Nova tela:</h6>
		<h3 class="text-h3 px-8">Ensino Corporativo</h3>
	</v-card>
</template>

<script setup>

	//Imports
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress()
	}
	

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>