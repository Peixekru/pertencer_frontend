<template>
	<v-container 
	v-if="appStore.navigationStart"
	fluid class="fill-height"
	:class="appStore.isDarkMode ? 'container-dark' : 'container-light'">

		<!--Vídeo de background-->
        <video id="bg-video" class="background-video" autoplay loop muted poster="../assets/img/intro-video-cover.png">
            <source src="../assets/img/intro-video.mp4" type="video/mp4">
        </video>


		

		<v-container
		:class="appStore.isTablet ? 
		appStore.welcomeStepCounter == 9 ? 'px-0 pe-16' : 'mt-16 pt-10 px-0 pe-16' : appStore.welcomeStepCounter == 9 ? 'px-0' : 'mt-16 pt-10 px-0' "
		>
			<v-row>

				<h6 class="text-h6 text-white mt-16 pt-10 ms-7 h6-position animate__animated animate__fadeIn animate__delay-1s">
				Conteúdos dessa unidade:
				</h6>

			</v-row>

			<v-row class="mt-8">
				<v-col 
				v-for=" (i, index) in appStore.appData.unidades[appStore.currentUnidadeNumber].content" 
				:key="index"
				class="d-flex align-start flex-column py-0 animate__animated animate__fadeInUp">

					<SliderGroups 
					:content = "i"
					:contentIndex = "index"
				
					/>

				</v-col> 
			</v-row>

			<div class="spacer" />

		</v-container>


		<v-container fluid 
		class="img-pos"
		>
			<v-img
			class="mx-auto animate__animated animate__fadeIn animate__delay-1s"
			max-width="200"
			src="../assets/img/home-footer-logo.svg"
			/>
		</v-container>
	</v-container>
	

</template>

<script setup>
	import { useAppStore } from "../store/app";
	import { useRouter } from "vue-router";

	import SliderGroups from "@/components/SliderGroups.vue";

	const appStore = useAppStore();
	const router = useRouter();
	
	//Armazena a URI atual
	appStore.currentRoute = router.currentRoute.value.fullPath;

	if (!appStore.navigationStart){
		router.push('/home')
	}


	//Segunda parte dos welcomeSteps -> 7
	if (appStore.appData.firstAccess == 4){
        appStore.welcomeStepCounter = 8
    } 
	//Setima parte dos welcomeSteps -> 15
	else if (appStore.appData.firstAccess == 7) {
        appStore.welcomeStepCounter = 15
    } 
	//Setima parte dos welcomeSteps -> 16
	else if (appStore.appData.firstAccess == 8) {
        appStore.welcomeStepCounter = 16
    } 

</script>

<style scoped>

	.spacer{
		height: 100px;
	}
	.img-pos{
		position: absolute;
		z-index: 2000;
		bottom: 20px;
		left: 0;
	}
	.h6-position{
		position: relative;
	}

</style>
