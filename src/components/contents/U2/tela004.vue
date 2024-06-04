<template>
	<!-- header colaborador -->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	style="z-index:21;"
	>
		<v-img class="show_desktop" src="./img/tela_colaborador/header.png" />
		<v-img class="show_1277" src="./img/tela_colaborador/header.png" />
		<v-img class="show_mobile" src="./img/tela_colaborador/header_mobile.png" />
		<v-img src="./img/tela_colaborador/header_text.svg" class="header_text"
			title="A EXPERIÊNCIA DO COLABORADOR" />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:20;background-color:#fff!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_colaborador/grade_header.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0">
			<h2 class="font-weight-bold reveal mt-n8 fade-left">
				O Einstein cuida de quem cuida. Sabe o que isso significa?
			</h2>
			
			<p class="mt-8 reveal fade-left texto_preto">
				Para nós, cada vivência que você, nosso colaborador, tem aqui dentro é importante em todos os momentos, desde a sua contratação até hoje. Por isso, nós trabalhamos para que sua jornada aqui no Einstein seja especial!
			</p>
			<p class="mt-4 reveal fade-left texto_preto">
				Temos um conjunto de iniciativas para entregar a você a melhor experiência aqui na Instituição. Podemos resumir essa experiência em três eixos integrados: 
			</p>

			<v-card class="box_dicas pl-0 pr-0 my-8 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber
					mais.
				</v-card-text>
			</v-card>
		</v-card-text>
		
		<v-row class="mt-2">

			<!--Card 01-->
			<v-col cols="12" sm="6" md="4">
				<v-card 
				height="250"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard01Visible ? 'card-bg-img' : '' "
					@click="isCard01Visible = !isCard01Visible"
					>
						<template v-if="!isCard01Visible">
							<v-img 
							src="./img/tela_colaborador/card_1_nome.png" 
							width="130"
							max-height="150"
							class="animate__animated animate__fadeInDown"
							/>
							<v-img 
							src="./img/tela_colaborador/card_icon.png" 
							width="50"
							max-height="50"
							class="animate__animated animate__fadeInDown"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Refere-se à cultura, pessoas, lideranças, tecnologia, local de trabalho, programas e processos. São os pontos de contato moldados por interações dentro da organização.			
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 02-->
			<v-col cols="12" sm="6" md="4">
				<v-card 
				height="250"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard02Visible ? 'card-bg-img2' : '' "
					@click="isCard02Visible = !isCard02Visible"
					>
						<template v-if="!isCard02Visible">
							<v-img 
							src="./img/tela_colaborador/card_2_nome.png" 
							width="190"
							max-height="150"
							class="animate__animated animate__fadeInDown"
							/>
							<v-img 
							src="./img/tela_colaborador/card_icon.png" 
							width="50"
							max-height="50"
							class="animate__animated animate__fadeInDown"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Diz respeito a suas expectativas, percepções e necessidades, o que você valoriza no cenário atual e o caminho que escolhe trilhar.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 03-->
			<v-col cols="12" sm="6" md="4">
				<v-card 
				height="250"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard03Visible ? 'card-bg-img3' : '' "
					@click="isCard03Visible = !isCard03Visible"
					>
						<template v-if="!isCard03Visible">
							<v-img 
							src="./img/tela_colaborador/card_3_nome.png" 
							width="122"
							max-height="150"
							class="animate__animated animate__fadeInDown"
							/>
							<v-img 
							src="./img/tela_colaborador/card_icon.png" 
							width="50"
							max-height="50"
							class="animate__animated animate__fadeInDown"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Envolve um momento da jornada e pode incluir eventos de vida (maternidade, graduação), da carreira (promoção, novos projetos) e da organização (programas, ações práticas).	
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>
		</v-row>
	

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>
				<v-img
				width="40"
				height="60"
				src="../GlobalStyles/img/gota-icon.svg"
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent02Visible = true; prosseguir('content02')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>


	</v-card>
	<!-- conteúdo 01 -->
	
	<!-- conteúdo 02 -->
	<v-card 
	v-show="isContent02Visible" 
	id="content02" 
	width="100%"
	elevation="6"
	style="z-index:19;background-color:#C4E8E1!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont2"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_colaborador/grade_header_branco.png" />
		
		<v-row class="mt-n4 mb-8">
			<v-col cols="12" md="6">
				<p style="" class="">
					A construção dessa experiência é feita em conjunto com você. Para isso, fazemos a <strong>Gestão Contínua de Clima e Engajamento</strong> para ouvir a sua percepção e, a partir daí, alinhar nossas estratégias e iniciativas.
				</p>
			</v-col>
			<v-col cols="12" md="6">
				<p style="" class="">
					Para nós, sua opinião é muito importante, pois entendemos que o caminho para construirmos uma experiência e um ambiente de trabalho feliz e positivo é caminharmos juntos!
				</p>
			</v-col>
			<v-col cols="12" md="12">
				<hr style="border: 2px solid #1B1F45;">
			</v-col>
		</v-row>
		
		<v-card 
		elevation="0"
		class="mx-auto bg-transparent pt-4"
		align="center"
		>
		
		

			
			<img height="400" class="mx-auto show_desktop" src="./img/tela_colaborador/cont2_info.png" usemap="#image-map">
			
			<img height="400" class="mx-auto show_1277" src="./img/tela_colaborador/cont2_info.png" usemap="#image-map">
			
			<img height="235" class="mx-auto show_mobile my-16" src="./img/tela_colaborador/cont2_info_mobile.png" usemap="#image-map_mobile">

			<map name="image-map">
				<area style="cursor:pointer" target="" alt="" title="" coords="66,231,33" shape="circle" 
				@click="
				isTooltip1Visible = true;
				isTooltip2Visible = false;
				isTooltip3Visible = false;
				">
				<area style="cursor:pointer" target="" alt="" title="" coords="460,230,33" shape="circle"
				@click="
				isTooltip2Visible = true;
				isTooltip1Visible = false;
				isTooltip3Visible = false;
				">
				<area style="cursor:pointer" target="" alt="" title="" coords="264,369,32" shape="circle"
				@click="
				isTooltip3Visible = true;
				isTooltip2Visible = false;
				isTooltip1Visible = false;
				">
			</map>
			
			<map name="image-map_mobile">
				<area style="cursor:pointer" target="" alt="" title="" coords="39,138,21" shape="circle"
				@click="
				isTooltip1Visible = true;
				isTooltip2Visible = false;
				isTooltip3Visible = false;
				">
				<area style="cursor:pointer" target="" alt="" title="" coords="271,136,20" shape="circle"
				@click="
				isTooltip2Visible = true;
				isTooltip1Visible = false;
				isTooltip3Visible = false;
				">
				<area style="cursor:pointer" target="" alt="" title="" coords="156,218,20" shape="circle"
				@click="
				isTooltip3Visible = true;
				isTooltip2Visible = false;
				isTooltip1Visible = false;
				">
			</map>
					
			  <div v-show="isTooltip1Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-1">

				  <i @click="isTooltip1Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
				  	<v-img src="./img/tela_oportunidades/btn_close.png"/>
				  </i>

				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip1" aria-hidden="false" ></i>

				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							<ul class="ml-8" style="text-align:left">
								<li>Workplace (rede social interna)</li>
								<li>Lives com a Liderança e Lives institucionais</li>
								<li>Redes Sociais Externas</li>
								<li>Liderança</li>
							</ul>
						</span>
					</div>
				  </div>
			  </div>
			  
			  <div v-show="isTooltip2Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-2">

				  <i @click="isTooltip2Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
				  	<v-img src="./img/tela_oportunidades/btn_close.png"/>
				  </i>

				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip2" aria-hidden="false" ></i>

				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							<ul class="ml-8" style="text-align:left">
								<li>SAC RH/Assistente Virtual TINA</li>
								<li>Entrevista de desligamento</li>
								<li>Comitê Experiência do colaborador</li>
								<li>Café com o Diretor</li>
								<li>Comissão de Combate ao Assédio Moral e Sexual</li>
								<li>Canal de Denúncias </li>
								<li>Ouvidoria Ensino</li>
								<li>Grupo de afinidades do Programa de Diversidade e Inclusão Einstein </li>
							</ul>
						</span>
					</div>
				  </div>
			  </div>
			  
			  <div v-show="isTooltip3Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-3">

				  <i @click="isTooltip3Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
				  	<v-img src="./img/tela_oportunidades/btn_close.png"/>
				  </i>

				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip3" aria-hidden="false" ></i>

				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							<ul class="ml-8" style="text-align:left">
								<li>Pesquisa Anual de Clima e Engajamento (dados quantitativos/focus group)</li>
								<li>Pesquisas Pulses</li>
								<li>Questionário da Saúde</li>
								<li>Pesquisa de Cultura de Segurança</li>
								<li>Pesquisa GPTW</li>
							</ul>
						</span>
					</div>
				  </div>
			  </div>
	

			
		</v-card>
		

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>
				<v-img
				width="40"
				height="60"
				src="../GlobalStyles/img/gota-icon.svg"
				class=" mt-8 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent03Visible = true; prosseguir('content03')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	<!-- conteúdo 02 -->
	
	
	<v-card 
	v-show="isContent03Visible"
	id="content03" 
	width="100%" 
	elevation="0"
	style="z-index:18;"
	class="mt-n4 mx-auto rounded-lg pt-4 bg-transparent" 
	>
	<v-img class="mx-auto" src="./img/tela_colaborador/gestao_clima_img.png" />
	
	
			
	</v-card>
	
	
	
	<!-- conteúdo 03 -->
	<v-card 
	v-show="isContent03Visible"
	width="100%" 
	elevation="6"
	style="z-index:17;"
	class="mt-n16 mx-auto rounded-lg pt-4 v-card-conteudos_cont3" 
	>
	<v-img class="mx-auto mt-n4" src="./img/tela_colaborador/grade_header.png" />
	
	<v-card 
		elevation="0"
		class="mx-auto pa-10 box_gestao_clima"
		align="center"
		style="border-radius:25px;"
		>
			<h2 style="color:#62C9CE" class="font-weight-bold reveal mt-8 fade-left">
				Gestão de clima, Engajamento e Experiência do Colaborador
			</h2>
			<p style="" class="mt-4">
				Para que você possa conhecer as estratégias que utilizamos com o objetivo de garantir que nossos colaboradores estejam no centro da experiência, organizamos um texto que traz informações mais detalhadas sobre esse assunto.
			</p>
			<p style="" class="mt-4">	
				Nesse texto, damos exemplos de iniciativas que realizamos em 2022, a partir das oportunidades de melhorias apontadas por nossos colaboradores na Pesquisa de Clima e Engajamento do ano anterior. Apresentamos, também, alguns dos programas e ações que desenvolvemos para tornar mais positiva a sua experiência aqui no Einstein.
			</p>
			<p style="" class="mt-4">	
				Quer ler o EBook para conhecer mais? Então, clique no botão abaixo.
			</p>
			
			<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="mt-4 show_desktop"
				style="letter-spacing:normal;"
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				href="./tela_colaborador/gestao_de_clima_engajamento_experiencia_colaborador.pdf" target="_blank"
				> 
					CLIQUE AQUI PARA ACESSAR O TEXTO
				</v-btn>
				
				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="pa-2 mt-4 show_1277"
				style="letter-spacing:normal;"
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				href="./tela_colaborador/gestao_de_clima_engajamento_experiencia_colaborador.pdf" target="_blank"
				> 
					CLIQUE AQUI PARA ACESSAR O TEXTO
				</v-btn>
				
				<v-btn 
				type="button"
				density="comfortable"
				size="medium"
				rounded="pill"
				class="pa-2 mt-4 show_mobile"
				style="letter-spacing:-1px;"
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				href="./tela_colaborador/gestao_de_clima_engajamento_experiencia_colaborador.pdf" target="_blank"
				> 
					CLIQUE AQUI PARA ACESSAR O TEXTO
				</v-btn>
				
			
		</v-card>

		

		

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>
				<v-img
				width="40"
				height="60"
				src="../GlobalStyles/img/gota-icon.svg"
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent04Visible = true; prosseguir('content04')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 03 -->
	
	<!-- conteúdo 04 -->
	<v-card 
	v-show="isContent04Visible"
	id="content04" 
	width="100%" 
	elevation="6"
	style="z-index:5;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont4" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_colaborador/grade_header_branco.png" />
	
	<v-row class="mt-2">
		<v-col cols="12" md="5">
			<p style="font-size:2em" class="texto_branco">
				A Gestão Contínua da Experiência do Colaborador têm como missão cuidar de pessoas, pois <strong>quem cuida precisa se sentir protegido e cuidado</strong>!
			</p>
		</v-col>
	</v-row>

		

		

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>
				<v-img
				width="40"
				height="60"
				src="../GlobalStyles/img/gota-icon.svg"
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent17Visible = true; prosseguir('content17')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 03 -->

	
<!-- conteúdo 17 -->
	<v-card 
	v-show="isContent17Visible"
	id="content17" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:4; margin-bottom:30px;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_colaborador/grade_header_branco.png" />

			<v-row align="center" class="mx-auto mb-16">
				<v-col cols="12" md="7">
				</v-col>
				<v-col cols="12" md="5">
					<p class="mt-4 mb-4 reveal fade-left text_footer">
						Cuidar de quem cuida é nossa forma de contribuir para que nossos Colaboradores tenham mais qualidade de vida, trabalhem com satisfação e sejam mais engajados em suas atividades.
					</p>
				</v-col>
			</v-row>

	</v-card>

<!-- conteúdo 17 -->

	<v-sheet
	v-if="appStore.isFinished"
	height="100"
	color="transparent"
	/>

</template>

<script setup>

	//Imports
	import { ref, onMounted, defineProps } from "vue";
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'
	import { useAnim } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content17')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)
	const isContent17Visible = ref(false)
	const isTooltip1Visible = ref(false)
	const isTooltip2Visible = ref(false)
	const isTooltip3Visible = ref(false)
	const isTooltip4Visible = ref(false)
	
	//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)
	const isCard03Visible = ref(false)

//Informa se a tela já foi concluida
const isAllContentFinished = ref(false)


//Finaliza o conteúdo
const finishedContent = () => {
	// Ajusta isUnidadeFinished com base na prop isLastObject
	props.isLastObject ?
	appStore.isUnidadeFinished = true :
	appStore.isUnidadeFinished = false;
	
	appStore.finishedContent(true)
	useStartProgress();
}

// Recebe a prop isLastObject do componente pai
const props = defineProps({
	isLastObject: Boolean
});

//Acompanha o progresso da dos conteúdos 
const prosseguir = (contentId) => {	
	console.log(`#${contentId}` + ' -- ' + lastElementIdOnScreen.value)

	setTimeout(()=> {
		document.querySelector(`#${contentId}`).scrollIntoView({
			behavior: 'smooth'
	});
	} ,500); 

	if(`#${contentId}`  == lastElementIdOnScreen.value){	
		document.addEventListener('scroll', () => {
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight - 100
			if (window.scrollY >= scrollableHeight && isAllContentFinished.value == false) { 
				finishedContent() 
				isAllContentFinished.value = true 
			}
		})
	}

}


//Ações que acontecem após o carregamento da página 
onMounted(() => {	
	//Configuração das animações de rolagem
	useAnim(150, true);

})

</script> 

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>


<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';



.card-bg-img {
	background-image: url("./img/tela_colaborador/card_1_fundo.png");
	background-size: cover;
}
.card-bg-img2 {
	background-image: url("./img/tela_colaborador/card_2_fundo.png");
	background-size: cover;
}
.card-bg-img3 {
	background-image: url("./img/tela_colaborador/card_3_fundo.png");
	background-size: cover;
}


.texto_escuro {
	color: #1B1F45 !important;
}
.texto_claro {
	color: #62C9CE !important;
}
.texto_branco {
	color: #FFFFFF !important;
}
.texto_preto {
	color: #202428 !important;
}
.texto_azul {
	color: $secondarDark !important;
}
.bg_claro {
	background-color: $primaryLight !important;
	
}
.bg_claro2 {
	background-color: #62C9CE !important;
	
}
.bg_escuro {
	background-color: $primaryDark !important;	
}
.bg_escuro2 {
	background-color: $primaryDark !important;	
}
.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
}
.v-card-conteudos_cont2 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont2_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #C4E8E1;
	margin-top:-200px!important;
}
.box_gestao_clima{
	margin-top:50px;
}
.v-card-conteudos_cont4 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont3_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont5 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont5_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont6 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #ffffff;
}
.v-card-conteudos_cont9 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont9_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont10 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont10_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont12 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/bg_video.svg");
	background-size: cover;
}
.v-card-conteudos_cont15 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont15_fundo.png");
	background-size: contain;
	background-repeat: no-repeat;
	
}
.v-card-conteudos_cont16 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont16_fundo.svg");
	background-size: cover;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont17_fundo.png");
	background-size: cover;
}
.cont6_box {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_colaborador/cont6_box_fundo.png");
	background-size: cover;
	text-align:center;
	height:200px;
}
	.box_acima_trilhas{
	position:relative;
	top:-160px
	}
	.box_abaixo_trilhas{
	position:relative;
	top:170px
	}
	.avatar{
	position:absolute;
	top:330px;
	left:560px;
	height:150px;
	}
	.card_avatar{
	margin-top: 110px;
	}
.box_dicas {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 45%;
}
.card_header {
	padding: 0 !Important;
	border-radius: 18px 18px 0px 0px !important;
	z-index: 10;
	background-color: #2B7080;
}
.header_text {
	position: absolute;
	top: 40%;
	left: 6%;
	width: 42%;
}
.grade_header {
	max-width: 70%;
}

.v-slide-group-item--active{
background-color:#fff!important;
    border-radius: inherit;
    opacity: 1!important;
}
.v-tab.v-tab {
    background-color: #C4E8E1;
	text-transform: inherit;
	font-weight:900;
	margin-right: 5px;
}
.text_footer{
font-size:1.5em;

}

.tool-tip-1 {
       position: absolute !important;
    z-index: 6002 !important;
    top: 42%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 329px;
}
.triangulo-tool-tip1 {
    position: absolute !important;
    top: 40%;
    left:-5%;
    z-index: 6005 !important;
    transform: rotate(30deg) !important;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-2 {
position: absolute !important;
    z-index: 6002 !important;
    top: 46%;
    left: 42%;
    transform: translate(-50%, -50%);
	width:406px;
}
.triangulo-tool-tip2 {
    position: absolute !important;
    top: 40%;
    left:97%;
    z-index: 6005 !important;
    transform: rotate(-150deg) !important;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-3 {
position: absolute !important;
    z-index: 6002 !important;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
	width:406px;
}
.triangulo-tool-tip3 {
   position: absolute !important;
    top: 94%;
    left: 47%;
    z-index: 6005 !important;
    transform: rotate(60deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}

.fechar_tooltip {
	position: absolute!important;
    top: 0px;
    right: 0px;
	z-index: 6009 !important;
	cursor: pointer;
	width:50px;
	}
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.9em;
	}
	.tooltip_text p{
	font-family: 'montserrat'!important;
	font-size:0.9em;
	margin-top:5px;
	}
@media screen and (max-width: 1277px){
.box_acima_trilhas{
position:relative;
top:-160px
}
.box_abaixo_trilhas{
position:relative;
top:170px
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #C4E8E1;
	margin-top:-155px!important;
}
.box_gestao_clima{
margin-top:50px;
}
.tool-tip-1 {
    top: 42%;
    left: 57%;
    width: 329px;
}
.triangulo-tool-tip1 {
    top: 40%;
    left:-5%;
}
.tool-tip-2 {
    top: 46%;
    left: 38%;
	width:406px;
}
.triangulo-tool-tip2 {
    top: 40%;
    left:97%;
}
.tool-tip-3 {
    top: 42%;
    left: 50%;
	width:406px;
}
.triangulo-tool-tip3 {

    top: 94%;
    left: 47%;
}
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.9em;
	}
}
@media screen and (max-width: 950px){
.box_acima_trilhas{
position:relative;
top:-160px
}
.box_abaixo_trilhas{
    position: relative;
    top: 681px;
    text-align: center;
}
.row_abaixo_trilhas{
margin-top:50px
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #C4E8E1;
	margin-top:-150px!important;
}
.box_gestao_clima{
margin-top:50px;
}

.tool-tip-1 {
    top: 42%;
    left: 57%;
    width: 329px;
}
.triangulo-tool-tip1 {
    top: 40%;
    left:-5%;
}
.tool-tip-2 {
    top: 46%;
    left: 38%;
	width:406px;
}
.triangulo-tool-tip2 {
    top: 40%;
    left:97%;
}
.tool-tip-3 {
    top: 42%;
    left: 50%;
	width:406px;
}
.triangulo-tool-tip3 {

    top: 94%;
    left: 47%;
}
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8em;
	}
	.tooltip_text p{
	font-family: 'montserrat'!important;
	font-size:0.9em;
	margin-top:5px;
	}
}
@media screen and (max-width: 768px){
.box_acima_trilhas{
position:relative;
top:-160px
}
.box_abaixo_trilhas{
    position: relative;
    top: 681px;
    text-align: center;
}
.row_abaixo_trilhas{
margin-top:50px
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #C4E8E1;
	margin-top:-120px!important;
}
.box_gestao_clima{
margin-top:50px;
}

.tool-tip-1 {
    top: 55%;
    left: 50%;
	width:95%;
}
.triangulo-tool-tip1 {
    top: 22%;
    left:80%;
}
.tool-tip-2 {
    top: 52%;
    left: 50%;
	width:250px;
}
.triangulo-tool-tip2 {
    top: 40%;
    left:80%;
}
.tool-tip-3 {
    top: 55%;
    left: 50%;
	width:250px;
}
.triangulo-tool-tip3 {
    top: 40%;
    left:20%;
}
.tool-tip-4 {
    top: 50%;
    left: 50%;
	width:250px;
}
.triangulo-tool-tip4 {
    top: 50%;
    left:20%;
}
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.7em;
	line-height:1.2em;
	margin-left:0px!important;
	}
	
	.tooltip_text ul{
	margin-left:10px!important;
	}
	
	.tooltip_text p{
	font-family: 'montserrat'!important;
	font-size:1em!important;
	margin-top:5px;
	margin-bottom:5px;
	margin-left:20px;
	margin-right:20px;
	}

}

@media screen and (max-width: 500px){
.box_acima_trilhas{
position:relative;
top:-160px
}
.box_abaixo_trilhas{
    position: relative;
    top: 681px;
    text-align: center;
}
.row_abaixo_trilhas{
margin-top:50px
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #C4E8E1;
	margin-top:-105px!important;
	margin-top:-105px!important;
}
.box_gestao_clima{
margin-top:50px;
}

}
</style>