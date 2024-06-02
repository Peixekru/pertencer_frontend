<template>
	<v-container 
	v-if="appStore.navigationStart"
	fluid class="fill-height"
	:class="appStore.isDarkMode ? 'container-dark' : 'container-light'">

		<!--Vídeo de background-->
        <div 
        :class="appStore.isDarkMode ? 
        appStore.appData.access.color == '0' ? 'video-overlay' : 'video-overlay grayscale-filter' : 
        appStore.appData.access.color == '0' ? 'video-overlay-clean' : 'video-overlay-clean grayscale-filter'"
        >
            <video 
            id="bg-video" 
            autoplay loop muted poster="../assets/img/intro-video-cover.png">
                <source v-if="!appStore.blockAnimation" src="../assets/img/intro-video.mp4" type="video/mp4">
            </video>
        </div>

		<v-container
		:class="appStore.isTablet ? 
		appStore.welcomeStepCounter == 9 ? 'px-0 pe-16' : 'mt-16 pt-10 px-0 pe-16' : appStore.welcomeStepCounter == 9 ? 'px-0' : 'mt-16 pt-10 px-0' "
		>
			<v-row class="ma-0 pa-0">

				<h6 class="text-h6 text-white mt-16 pt-10 h6-position animate__animated animate__fadeIn animate__delay-1s">
				Conteúdos dessa unidade:
				</h6>

			</v-row>


			<v-row 
			class="d-flex align-start mt-8 animate__animated animate__fadeInUp">

				<v-col
				noguter
				v-for=" (i, index) in contents" 
				:key="index"
				cols="12" sm="6" md="4" lg="3" xl="2"
				class="pa-2 ma-0"
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
							class="me-4 animate__animated animate__fadeIn"
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
							
								<ConteudoCardV2
								:title="i.title"
								:icon="i.icon"
								:cardImg="getImg(index)"
								:time="i.time"
								:content="i"
								:index="index"
								:staus="i.status"
								:block="i.block"
								:selected="i.selected"	
								:class="appStore.appData.access.color == 1 ? 'grayscale-filter' : '' "
								@click="loadObject(appStore.currentUnidadeNumber, 0, index, i)" 					
								/>

							</v-sheet>

						</template>

					</v-tooltip>

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
				<template v-slot:btnText>
					PROSSEGUIR
				</template>
				<template v-slot:text>
					<span class="font-weight-bold">{{ ToolTipText }}</span>
				</template>
			</WelcomeTooltip>
		</v-container>
	

</template>

<script setup>

	import { ref } from "vue";
	import { useAppStore } from "../store/app";
	import { useRouter } from "vue-router"

	import ConteudoCardV2 from "@/components/ConteudoCardV2.vue";
	import WelcomeTooltip from '@/components/WelcomeTooltip'

	import { useApiStore } from '@/store/api'

	import { useLoadCurrentObject } from "../components/composables/useLoadObject"

	const appStore = useAppStore();
	const router = useRouter();
	const apiStore = useApiStore();

	//Texto do tooltip
	const toolTipText = ref('Acesse os conteúdos anteriores para desbloquear esse módulo.')

	//Primeiro acesso -> Text Passo 9
	const ToolTipText = ref( "Agora é com você! Boa jornada!" );
	
	//Armazena a URI atual
	appStore.currentRoute = router.currentRoute.value.fullPath;

	if (!appStore.navigationStart){
		router.push('/home')
	}

	//Armazena número do carrosel
	const carrossel = ref([])

	//Armazena todos os objetos 
	const contents = ref([])

	console.log(appStore.currentUnidadeNumber)


	// Percorre os conteúdos e suas lições
	appStore.appData.unidades[appStore.currentUnidadeNumber].content.flatMap(content => {
		// Adiciona o índice do conteúdo ao array carrossel.value
		carrossel.value.push(content);
		// Adiciona as lições ao array contents.value
		contents.value.push(...content.lessons);
	});



	//Carrega página de conteúdo
	const loadObject = ( unidade, contentIndex, index, content ) => {

		content.selected = 1

		useLoadCurrentObject(unidade, contentIndex, index, content)
		router.push('/conteudo')

		//Primeiro acesso -> Passo 9
		if(appStore.welcomeStepCounter == 9){
			//Atualiza o localStorage
			appStore.appData.firstAccess = 5
			localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
			appStore.welcomeStepCounter = 10

        }else if (appStore.appData.firstAccess == 8 && appStore.welcomeStepCounter == 16){
			///FINALIZA O PRIMEIRO ACESSO
			appStore.appData.firstAccess = 'finished'
            //Atualiza backend
            const userId = JSON.parse(localStorage.getItem('userId'));
            //port / path / data
            apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
            //User Feedback
            //appStore.globalMsg('Você já sabe tudo sobre a plataforma. Aproveite os conteúdos! ', 'success')
		}

	}





	const getImg = (index) => {
		// Acessa o número da unidade atual
		const currentUnidade = appStore.appData.unidades[appStore.currentUnidadeNumber];

		// Acessa o conteúdo (lições) da unidade atual
		const lessons = currentUnidade.content[0].lessons;

		// Verifica se o índice é válido e se há uma lição correspondente
		if (lessons && lessons[index]) {
			// Obtém o nome da imagem da lição correspondente
			const lessonImgName = lessons[index].img;
			
			// Retorna a URL da imagem correspondente ao nome encontrado
			return new URL(`../assets/img/${lessonImgName}.jpg`, import.meta.url).href;
		} else {
			// Retorna uma imagem padrão caso o índice não seja válido ou não haja uma lição correspondente
			return 'https://placehold.co/600x400/fff/eaeaea?text=No+Image';
		}
	};



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

	.v-tooltip :deep(.v-overlay__content) {
		background-color: transparent !important;
	}

	/*--Primeiro acesso styles */
    .custom-container{
        position: absolute;
        z-index: 5000;
		top: 50%;
        left: 0px;
    }
    .custom-tooltip-pos{
        position: absolute !important;
        z-index: 5000;
        top: 250px;
		left: 190px;
    }

	.custom-container-mobile{
        position: fixed;
        z-index: 5000;
		top: 600px;
        left: 50%;
    }
    .custom-tooltip-pos-mobile{
        position: absolute !important;
        z-index: 5000;
        top: 0px;
		left: 0%;
    }
	.noClick{
		pointer-events: none; 
	}
</style>
