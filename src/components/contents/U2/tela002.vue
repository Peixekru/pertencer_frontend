<template>

		<v-container align="center" >
			<v-img
			max-width="380"
			class="py-16 animate__animated animate__pulse"
			src="../../../assets/img/logo-home-type.svg"
			/> 	
		</v-container>	



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