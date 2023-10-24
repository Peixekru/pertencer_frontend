<template>

	<!--Desktop version-->
	<v-container v-if="!appStore.isMobile">
		<!--Posiciona elementos-->
		<v-container class="container-pos d-flex justify-space-between align-center">

			<!--Aplica efeitos laterais caso a quantidade de itens for maior que dois-->
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


		<!--Background dos Carouseis-->
		<v-sheet color="rgba(0,0,0, .1)" rounded="lg" class="mx-auto" elevation="0">

			<!--Titulo dos Carouseis-->
			<h1 class="text-h5 ms-12 pt-2 pb-1 text-primary">
				{{ content.lessonsTitle }}
			</h1>

			<!--Carousel Group-->
			<v-slide-group 
			v-model="objectCardSelect" 
			center-active
			show-arrows
			>
				<!--Ajusta o espaço dos Carouseis caso sejam menos que 3 por unidade-->
				<div :class="content.lessons.length < 3 &&
				appStore.screenWidth > 750 ? 
				'spacer' : '' " 
				/>

				<!--Loop nos itens do Carousel-->
				<v-slide-group-item
				v-for="(i, index) in content.lessons"
				:key="i"
				v-slot="{ isSelected }"
				>
					<!--Tooltip nos itens inativos-->
					<v-tooltip 
					location="top"
					max-width="280"
					>
						<v-sheet 
						class="d-flex justify-start align-center pa-4 rounded-lg elevation-4">
							<!--Icone do tooltip-->
							<v-img 
							class="me-4 animate__animated animate__shakeY"
							:class="appStore.isDarkMode ? 'white-svg' : '' "
							src="@/assets/img/quest-menu-img.svg"
							width="30"
							/> 
							<!--Txt do tooltip-->
							<p class="text-caption">
								{{ toolTipText }}
							</p>
						</v-sheet>
						
						<!--Ativador do mouseOver-->
						<template #activator="{ props }">

							<!--Agrupador do card-->
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

		<!--Primeiro acesso -> Passo 9 -->
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
	
	<!--Mobile vresion-->
	<v-container v-else>

		<!--Titulo dos Carouseis-->
		<h1 class="text-h5 pb-1 text-primary">
		{{ content.lessonsTitle }}
		</h1>

		<!--Carousel Group-->
		<v-carousel
		v-model="objectCardSelect" 
		progress="primary"
		hide-delimiters
		height="254"
		class="pt-3"
		>
			<!--Loop nos itens do Carousel-->
			<v-carousel-item
			v-for="(i, index) in content.lessons"
			:key="i"
			>
				<!--Tooltip nos itens inativos-->
				<v-tooltip 
				location="top"
				max-width="280"
				>
					<v-sheet 
					class="d-flex justify-start align-center pa-4 rounded-lg elevation-4">
						<!--Icone do tooltip-->
						<v-img 
						class="me-4 animate__animated animate__shakeY"
						:class="appStore.isDarkMode ? 'white-svg' : '' "
						src="@/assets/img/quest-menu-img.svg"
						width="30"
						/> 
						<!--Txt do tooltip-->
						<p class="text-caption">
							{{ toolTipText }}
						</p>
					</v-sheet>

					<!--Ativador do mouseOver-->
					<template v-slot:activator="{ props }">

						<!--Agrupador do card-->
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

		<!--Primeiro acesso -> Passo 9 Mobile -->
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

	//Número do slide em destaque
	const objectCardSelect = ref(appStore.currentContentNumber)

	//Texto do tooltip
	const toolTipText = ref('Acesse os conteúdos anteriores para desbloquear esse módulo.')

	//Primeiro acesso -> Text Passo 9
	const ToolTipText = ref( "Agora é com você! Boa jornada!" );
	
	//Carrega página de conteúdo
	const loadObject = ( unidade, contentIndex, index, content ) => {

		useLoadCurrentObject(unidade, contentIndex, index, content)
		router.push('/conteudo')

		//Primeiro acesso -> Passo 9
		if(appStore.welcomeStepCounter == 9){
			//Atualiza o localStorage
			appStore.appData.firstAccess = 5
			localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
			appStore.welcomeStepCounter = 10
        }
	}

	defineProps({
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

	/*--Primeiro acesso styles */
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
