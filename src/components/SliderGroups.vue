<template>

	<v-container v-if="!appStore.isMobile">
		<v-container class="container-pos d-flex justify-space-between align-center">
			<template v-if="content.lessons.length > 2">

				<div 
				class="side-fx-color-start" 
				/>

				<div v-if="appStore.isTablet"
				class="side-fx-color-end" 
				/>
				
				<div v-else
				class="side-fx-color-end-md" 
				/>

			</template>
		</v-container>

		<v-sheet color="rgba(0,0,0, .1)" rounded="lg" class="mx-auto" elevation="0">
			<h1 class="text-h5 ms-12 pt-2 pb-1 text-primary">
				{{ content.lessonsTitle }}
			</h1>

			<v-slide-group 
			v-model="objectCardSelect" 
			center-active
			show-arrows
			>
				<div :class="content.lessons.length < 3 &&
				appStore.screenWidth > 750 ? 
				'spacer' : '' " 
				/>

				<v-slide-group-item
				v-for="(i, index) in content.lessons"
				:key="i"
				v-slot="{ isSelected }"
				>
				
					<v-tooltip 
					location="top"
					max-width="280"
					>
						<v-sheet 
						class="d-flex justify-start align-center pa-4 rounded-lg elevation-4">
							<v-img 
							class="me-4 animate__animated animate__shakeY"
							:class="appStore.isDarkMode ? 'white-svg' : '' "
							src="@/assets/img/quest-menu-img.svg"
							width="30"
							/> 
							<p class="text-caption">
							Acesse os conteúdos anteriores para desbloquear esse módulo.
							</p>
						</v-sheet>

						<template v-slot:activator="{ props }">

							<v-sheet
							class="mb-4 ms-4 d-flex align-center"
							color="transparent"
							elevation="0"
							v-bind="i.block ? false : props"
							>
								<!--Card Conteúdo-->
								<ConteudoCard
								:elevationNumber="isSelected ? 0 : 2"
								:title="i.title"
								:icon="i.icon"
								:cardImg="i.img"
								:time="i.time"
								:staus="i.status"
								:block="i.block"
								:selected="i.selected"
								@click="loadObject(appStore.currentUnidadeNumber, contentIndex, index, content)"  
								/>
							</v-sheet>

						</template>
					</v-tooltip>

				</v-slide-group-item>
			</v-slide-group>
		</v-sheet>
		<!--Primeiro acesso 9 -->
		<v-container class="pa-0 noClick" 
		:class="appStore.isMobile ? 'custom-container-mobile' : 'custom-container'"
		v-if="appStore.welcomeStepCounter == 9"
		>
			<WelcomeTooltip 
			:class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
			:toolTipShow="true" 
			:toolTipPos="0" 
			:toolTipAdjust="appStore.isMobile ? [0, 0, -84, -10] : [24, 0, 0, 0]" 
			:hideToolTipButton = true
			:toolTipW = "280"
			> 
				<template v-slot:text>
					<span class="font-weight-bold">{{ ToolTipText }}</span>
				</template>
			</WelcomeTooltip>
		</v-container>
	</v-container>
	


	<!--Mobile vresion (Carousel)-->
	<v-container v-if="appStore.isMobile">

		<h1 class="text-h5 pb-1 text-primary">
		{{ content.lessonsTitle }}
		</h1>
	
		<v-carousel
		progress="primary"
		hide-delimiters
		height="254"
		class="pt-3"
		>
			<v-carousel-item
			v-for="(i, index) in content.lessons"
			:key="i"
			>
				<v-tooltip 
				location="top"
				max-width="280"
				>
					<v-sheet 
					class="d-flex justify-start align-center pa-4 rounded-lg elevation-4">
						<v-img 
						class="me-4 animate__animated animate__shakeY"
						:class="appStore.isDarkMode ? 'white-svg' : '' "
						src="@/assets/img/quest-menu-img.svg"
						width="30"
						/> 
						<p class="text-caption">
						Acesse os conteúdos anteriores para desbloquear esse módulo.
						</p>
					</v-sheet>

					<template v-slot:activator="{ props }">

						<v-sheet
						class="mx-0"
						color="transparent"
						v-bind="i.block ? false : props"
						>
							<!--Card Conteúdo-->
							<ConteudoCard
							:title="i.title"
							:icon="i.icon"
							:cardImg="i.img"
							:time="i.time"
							:staus="i.status"
							:block="i.block"
							:selected="i.selected"
							@click="loadObject(appStore.currentUnidadeNumber, contentIndex, index, content)"
							/>
						</v-sheet>  

					</template>
				</v-tooltip>
			</v-carousel-item>
		</v-carousel>

		<!--Primeiro acesso 9 -->
		<v-container class="pa-0 noClick" 
		:class="appStore.isMobile ? 'custom-container-mobile' : 'custom-container'"
		v-if="appStore.welcomeStepCounter == 9"
		>
			<WelcomeTooltip 
			:class="appStore.isMobile ? 'custom-tooltip-pos-mobile' : 'custom-tooltip-pos'"
			:toolTipShow="true" 
			:toolTipPos="0" 
			:toolTipAdjust="appStore.isMobile ? [24, 0, 0, 0] : [24, 0, 0, 0]" 
			:hideToolTipButton = true
			:toolTipW = "280"
			> 
				<template v-slot:text>
					<span class="font-weight-bold">{{ ToolTipText }}</span>
				</template>
			</WelcomeTooltip>
		</v-container>

	</v-container>

</template>

<script setup>
	import { ref } from "vue"
	import { useAppStore } from "../store/app"
	import { useRouter } from "vue-router"
	import { useLoadCurrentObject } from "../components/composables/useLoadObject"
	
	import ConteudoCard from "@/components/ConteudoCard.vue"
	import WelcomeTooltip from '@/components/WelcomeTooltip'

	const appStore = useAppStore()
	const router = useRouter()
	const objectCardSelect = ref(appStore.currentContentNumber)


	
	const showTooltip = ref(false)


	const loadObject = ( unidade, contentIndex, index, content ) => {

		useLoadCurrentObject(unidade, contentIndex, index, content)
		router.push('/conteudo')

		//Finaliza etapa
		if(appStore.welcomeStepCounter == 9){
			//Atualiza o localStorage
			appStore.appData.firstAccess = 5
			localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
			//console.log(appStore.appData.firstAccess)
			
			//Primeiro acesso -> 10
			appStore.welcomeStepCounter = 10
			//console.log('welcomeSteps = ' + appStore.welcomeStepCounter);
        }
	}


	/*--Primeiro acesso */
	const ToolTipText = ref( "Agora é com você! Boa jornada!" );

	const teste = defineProps({
		content: Object,
		contentIndex: Number,
	})
</script>

<style land="scss" scoped>
	.stroke-adjust {
		border-radius: 12px 29px 12px 12px;
	}
	.container-pos {
		position: absolute;
		z-index: 5000;
		height: 272px;
		pointer-events: none;
		margin-top: 28px;
	}
	.side-fx-color-start {
		height: 100%;
		width: 10px;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0) 100%);
		pointer-events: none;
		margin-left: 36px;
		pointer-events: none;
	}
	.side-fx-color-end {
		height: 100%;
		width: 10px;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%);
		pointer-events: none;
		margin-right: 92px;
		pointer-events: none;
	}
	.side-fx-color-end-md {
		height: 100%;
		width: 10px;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%);
		pointer-events: none;
		margin-right: 68px;
		pointer-events: none;
	}
	.spacer{
		width: 52px;
	}


	/*--Primeiro acesso */
    .custom-container{
        position: fixed;
        z-index: 5000;
		top: 456px;
        left: 0px;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        top: -67px;
		left: 235px;
    }

	.custom-container-mobile{
        position: fixed;
        z-index: 5000;
		top: 456px;
        left: 0px;
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: -67px;
		left: 50%;
    }
	.noClick{
		pointer-events: none; 
	}

	.v-tooltip :deep(.v-overlay__content) {
		background-color: transparent !important;
	}
</style>
