<template>
	<!-- header AMIGOH -->
	<v-card class="card_header mx-auto rounded-lg pa-6" width="100%" elevation="6">
		<v-img class="show_desktop" src="./img/tela_amigoh/header.png" />
		<v-img class="show_1277" src="./img/tela_amigoh/header.png"/>
		<v-img class="show_mobile" src="./img/tela_amigoh/header_mob.png" />

		<v-img src="./img/tela_amigoh/header_text.svg" class="header_text"
			title="A AMIGOH é uma iniciativa da Sociedade Beneficente Israelita Albert Einstein direcionada para prevenção de câncer e pesquisas científicas de doenças do sangue que beneficiem toda sociedade brasileira." />
		<v-img src="./img/tela_amigoh/logo_header.png" class="logo_header"
			title="A AMIGOH é uma iniciativa da Sociedade Beneficente Israelita Albert Einstein direcionada para prevenção de câncer e pesquisas científicas de doenças do sangue que beneficiem toda sociedade brasileira." />
	</v-card>

	<!-- header -->

	<!-- conteúdo 01 -->
	<v-card v-show="isContent01Visible" id="content01" width="100%" elevation="6" style="z-index:5;"
		class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos">
		<v-img class="mx-auto grade_header" src="./img/tela_amigoh/grade_header.png" />
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">

			<h1 class="mt-n10 font-weight-bold text-primary my-6 reveal fade-left">
				Um pouco sobre nós
			</h1>

			<v-card class="box_dicas pl-0 pr-0 reveal fade-left">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.
				</v-card-text>
			</v-card>

		</v-card-text>



		<v-card elevation="3" width="100%" class="mx-auto rounded-lg mt-6 reveal fade-bottom">
			<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false">
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_amigoh/slider01.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<h2>
									Quem somos
								</h2>
								<p class="mt-4">
									Um grupo de pessoas empenhadas no combate ao câncer de diferentes formas.
								</p>
								<p class="mt-4">
									Procuramos fazer o que há de melhor para a população e contribuir com aqueles que
									precisam, seja levando informações, tratando pacientes ou fazendo pesquisas.
								</p>
								<v-card class="box_carroussel bounceIn">
									<p>Nosso pilar mais importante é a prevenção.</p>
								</v-card>

							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>

				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_amigoh/slider02.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<h2>
									O que fazemos
								</h2>
								<p class="mt-4">
									Apoiamos ações nas áreas de Oncologia e Hematologia. Nosso objetivo é contribuir para
									aumentar os índices de cura e melhorar a qualidade de vida dos pacientes acometidos pelo
									câncer e pelas doenças do sangue.
								</p>
								<p class="mt-4">
									Nosso trabalho consiste em captar recursos e selecionar, apoiar e viabilizar projetos
									assistenciais, de ensino e pesquisa nas áreas de Oncologia e Hematologia.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>

				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_amigoh/slider03.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<h2>
									Como fazemos
								</h2>
								<p class="mt-4">
									Colaboramos com a pesquisa científica visando garantir o bem-estar dos pacientes e
									salvar vidas, caracterizando as doenças e contribuindo para o desenvolvimento de
									medicamentos.
								</p>
								<p class="mt-4">
									Participamos de projetos sociais cuidando, com recursos de última geração, de pessoas
									sem condições socioeconômicas de se tratarem.
								</p>
								<p class="mt-4">
									Organizamos eventos em diversas áreas para captar recursos financeiros e viabilizar
									projetos assistenciais.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>

			</v-carousel>
		</v-card>



		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class="text-secondary"
					:class="appStore.isDarkMode ? 'bg_claro' : 'bg_escuro'"
					@click="isContent02Visible = true; prosseguir('content02')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>
	<!-- conteúdo 01 -->
	<!-- conteúdo 02 -->
	<v-card v-show="isContent02Visible" id="content02" width="100%" elevation="6" style="z-index:4"
		class="mt-n8 mx-auto rounded-lg pt-4 v-card-conteudos fundo_cont2">




		<v-row class="mx-auto mt-4">

			<v-col cols="12" md="12">
				<v-card-text class="text_cont2 mr-16 reveal fade-left">

					<h1 class="font-weight-bold text-primary mt-6 texto_azul">
						Nossos colaboradores
					</h1>
					<h2 class="texto_preto mt-4">
						No AmigoH, os colaboradores fazem a diferença
					</h2>

					<p class="texto_preto mt-6">São 30 pessoas divididas em grupo de captação, grupo de divulgação e grupo
						estratégico, que, como uma orquestra, trabalham juntas e afinadas.
					</p>

				</v-card-text>

			</v-col>

			<v-col cols="12" md="12">
				<v-card class="reveal fade-bottom box_cont2 pa-4 mt-n2 mb-4">
					<p>Equação fundamental do AmigoH: Criatividade + tempo de dedicação = participação com prazer</p>
				</v-card>

			</v-col>

		</v-row>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-16 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'text-primary bg_escuro' : 'text-secondary bg_escuro'"
					@click="isContent03Visible = true; prosseguir('content03')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	<!-- conteúdo 02 -->


	<!-- conteúdo 03 -->
	<v-card v-show="isContent03Visible" id="content03" width="100%" elevation="6" style="z-index:3;"
		class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_video">

		<v-img class="mx-auto grade_header" src="./img/tela_amigoh/grade_header_azul.png" />



		<v-card-text class="reveal fade-left mb-10">

			<h1 class="font-weight-bold text-primary mt-n6 texto_branco">
				Visão geral do AmigoH e suas ações
			</h1>
			<p class="mt-6 texto_branco">
				Assista ao vídeo e conheça algumas das ações realizadas pelo AMIGOH.
			</p>

		</v-card-text>


		<!--Vimeo-->
		<v-container class="mt-n5 mb-10 pa-0 reveal fade-bottom">

			<div style="padding:56.25% 0 0 0;position:relative;"><iframe
					src="https://player.vimeo.com/video/885695271?h=72dd6de1c5&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
					frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
					style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 10px;"
					title="2.3.1 - AmigoH"></iframe></div>
		</v-container>




		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'white-svg' : 'white-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'text-secondary bg_claro' : 'text-primary bg_claro'"
					@click="isContent04Visible = true; prosseguir('content04')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 03 -->
	<!-- conteúdo 04 -->
	<v-card v-show="isContent04Visible" id="content04" width="100%" elevation="6"
		class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" style="z-index:2;">

		<v-img class="mx-auto grade_header" src="./img/tela_amigoh/grade_header_laranja.png" />




		<v-card-text class="pl-0 pr-0 mt-n12 reveal fade-left">

			<h5 class=" text-h5 font-weight-bold text-primary my-6">
				Nossos projetos
			</h5>
			<p class="mt-4">
				O AMIGOH apoia inúmeros projetos. Vamos conhecer alguns deles?</p>
		</v-card-text>

		<v-card class="box_dicas pl-0 pr-0 mt-2 reveal fade-bottom">
			<v-card-text>
				<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber mais.
			</v-card-text>
		</v-card>




		<!-- cards frente e verso  -->
		<v-row class="mt-2">

			<!--Card 01-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard01Visible ? 'card-bg-img' : ''" @click="isCard01Visible = !isCard01Visible">
						<template v-if="!isCard01Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Quem somos
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Receitas dos Chefs.<br> A chef Paola Carosella faz uma proposta de café da manhã para os
								pacientes oncológicos com alimentos que contribuem para seus tratamentos.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 02-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard02Visible ? 'card-bg-img' : ''" @click="isCard02Visible = !isCard02Visible">
						<template v-if="!isCard02Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Superação Einstein Perdizes
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Superação Einstein Perdizes.<br> Uma manhã repleta de atividades físicas, trabalhando o
								gerenciamento do estresse e a importância do controle sobre os próprios pensamentos e
								reações.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 03-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard03Visible ? 'card-bg-img' : ''" @click="isCard03Visible = !isCard03Visible">
						<template v-if="!isCard03Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Parque Ibirapuera: Dia de Combate ao Fumo
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Parque Ibirapuera: Dia de Combate ao Fumo.<br> Dia com atividades que estimulam a prática de
								atividades físicas, trazendo informações e orientações médicas que contribuem para que as
								pessoas parem de fumar.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 04-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard04Visible ? 'card-bg-img' : ''" @click="isCard04Visible = !isCard04Visible">
						<template v-if="!isCard04Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Campanha de Combate ao Câncer de Pele
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Campanha de Combate ao Câncer de Pele.<br> Atendimento de comunidade carente para a
								conscientização da prevenção, do diagnóstico e do tratamento do câncer de pele.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 05-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard05Visible ? 'card-bg-img' : ''" @click="isCard05Visible = !isCard05Visible">
						<template v-if="!isCard05Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Projeto Morro do Chapéu
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Projeto Morro do Chapéu.<br> Capacitação em oncologia para equipes do SUS, realizado na
								Bahia.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 06-->
			<v-col cols="12" sm="6" md="4">
				<v-card height="380" elevation="4" class="mx-auto rounded-lg reveal fade-in">
					<v-sheet height="100%" align="center" color="transparent"
						class="d-flex flex-column justify-center align-center cursor-pointer"
						:class="!isCard06Visible ? 'card-bg-img' : ''" @click="isCard06Visible = !isCard06Visible">
						<template v-if="!isCard06Visible">

							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
								:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'">
								Einstein na<br>Ação Global 2014
							</h5>
							<v-icon color="white" icon="mdi-gesture-double-tap" size="50"
								class="animate__animated animate__fadeInDown animate__delay-0.7s" />
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Einstein na Ação Global 2014.<br> Projeto com foco na saúde da mulher, sendo oferecidos
								exames e orientações para prevenção do câncer de mama e de colo do útero.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>
		<v-col>	

		</v-col>

		</v-row>

		<!-- cards frente e verso  -->

		<v-card class="reveal fade-bottom box_cont2_cards mt-8">
			<p>
			<a style="color:white;text-decoration:none" href="https://amigoh.com.br/portfolio-de-projetos/"><strong>Clique aqui</strong></a> e veja mais detalhes sobre esses e outros projetos.
			</p>
		</v-card>



		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'bg_claro text-secondary' : 'bg_escuro text-secondary'"
					@click="isContent05Visible = true; prosseguir('content05')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 04 -->
	<!-- conteúdo 05 footer -->
	<v-card v-show="isContent05Visible" id="content05" width="100%" elevation="6" class="mt-n4 mx-auto rounded-lg pt-0 footer"
		style="z-index:1;">

		<v-container fill-height class="">

			<v-row justify="center" align="center" class="mt-10 reveal fade-right">
				<v-col cols="12" md="6">

				</v-col>
				<v-col cols="12" md="6">
					<p class="texto_footer texto_preto">
						O <strong>AmigoH</strong> tem apoiado a pesquisa brasileira e permitido avanços extraordinários na
						área da oncologia.
					</p>
					<p class="texto_footer texto_preto">
						Os projetos de pesquisa visam garantir o bem-estar dos pacientes, pois caracterizam as doenças e
						contribuem com o desenvolvimento de medicamentos.
					</p>
					<p class="texto_footer texto_preto">
						Isso requer infraestrutura, pesquisadores de qualidade e recursos financeiros.
					</p>
				</v-col>
			</v-row>
		</v-container>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4 mt-n8">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'text-primary bg_escuro' : 'text-secondary bg_escuro'"
					@click="isContent06Visible = true; prosseguir('content06')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

	<!-- conteúdo 05 -->

	<!-- conteúdo 06 -->
	<v-card v-show="isContent06Visible" id="content06" width="100%" elevation="6"
		class="mt-n4 mx-auto rounded-lg pt-0 footer2" style="z-index:0;margin-bottom:30px;">
		<v-img class="mx-auto grade_header mt-4" src="./img/tela_amigoh/grade_branco.png" />

		<v-container fill-height class="">

			<v-row justify="center" align="center" class="mt-n16">
				<v-col cols="12" md="5">
					<p style="font-size:1.5em" class="texto_branco reveal fade-left">
						Visite nosso site para conhecer mais sobre o <strong>AmigoH</strong>:
					</p>
					<p style="font-size:1.5em" class="texto_branco mt-2 reveal fade-left">
						<a class="texto_branco" href="https://amigoh.com.br/"
							target="_blank"><strong>https://amigoh.com.br/</strong></a>
					</p>
					<p style="font-size:1.5em" class="texto_branco mt-6 reveal fade-left">
						Dúvidas? Acesse nossa FAQ:
					</p>
					<p style="font-size:1.5em" class="texto_branco mt-2 reveal fade-left">
						<a class="texto_branco" href="https://amigoh.com.br/faq/"
							target="_blank"><strong>https://amigoh.com.br/faq/</strong></a>
					</p>
				</v-col>
				<v-col cols="12" md="7">
					<v-img class="mx-auto notebook reveal fade-right" src="./img/tela_amigoh/laptop.png" />
				</v-col>
			</v-row>

		</v-container>

	</v-card>

	<!-- conteúdo 06 -->

	<v-sheet
	v-if="appStore.isFinished"
	height="100"
	color="transparent"
	/>
	
	
</template>

<script setup>

//Imports
import { ref, onMounted } from "vue";
import { useAppStore } from '../../../store/app'
import { useStartProgress } from '../../../components/composables/useProgress'
import { useAnim} from '../GlobalJs/useContentGlobalJs'

//Inicia o Pinia com a store global do App (appStore)
const appStore = useAppStore();

//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
const lastElementIdOnScreen = ref('#content06')

//Controle da visibilidade dos conteúdos
const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
const isContent02Visible = ref(false)
const isContent03Visible = ref(false)
const isContent04Visible = ref(false)
const isContent05Visible = ref(false)
const isContent06Visible = ref(false)

//Controle dos cards do conteúdo 01
const isCard01Visible = ref(false)
const isCard02Visible = ref(false)
const isCard03Visible = ref(false)
const isCard04Visible = ref(false)
const isCard05Visible = ref(false)
const isCard06Visible = ref(false)



//Informa se a tela já foi concluida
const isAllContentFinished = ref(false)


//Finaliza o conteúdo
const finishedContent = () => {
	appStore.finishedContent(true)
	useStartProgress();
}

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



<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';

.header_text {
	position: absolute;
	top: 20%;
	left: 6%;
	width: 42%;
}

.fundo_cont2 {
	max-width: 100%;
	background-image: url("./img/tela_amigoh/fundo_cont2.png");
	background-size: cover;
}

.text_cont2 {
	width: 50%;
	margin-left: -30px;
}

.box_cont2 {
	width: 100% !important;
	border-radius: 15px !important;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	background-color: #E17000;
}

.box_cont2 p {
	color: #ffffff !important;
	font-size: 1rem !important;
	line-height: 2rem;
}

.box_cont2_cards {
	border-radius: 15px !important;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	background-color: #E17000;
	margin-top: 10px;
	padding: 15px;
}

.box_cont2_cards p {
	color: #ffffff !important;
	font-size: 1.2rem !important;
	line-height: 2rem;
}

.box_carroussel {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 100%;
	background-color: #E17000;
	margin-top: 10px;
	padding: 15px;
}

.box_carroussel p {
	color: #ffffff !important;
	font-size: 1rem;
	line-height: 1.5rem;
}

.card_text_amigoh {
	text-align: center;
	font-size: 1.5em !important;
	position: relative;
	top: 35%;
	margin-left: 10%;
	margin-right: 10%;
	color: #004F81 !important;
}

.v-card-text_amigoh {
	font-size: 1rem !important;
	font-family: 'montserrat' !important;
	margin-left: 5%;
	margin-right: 5%;
}

.btn_videos {
	background-color: #62C9CE !important;
	color: rgb(var(--v-theme-on-primary)) !important;
}

.btn_expande_conteudos_videos {
	padding-left: 20px;
	padding-right: 20px;
	color: #1B1F45;
	font-family: 'Roboto';
	font-size: 16px;
	letter-spacing: initial;
	font-weight: 900;
}

.texto_footer {
	font-size: 1.4rem;
	font-weight: 600;
	letter-spacing: -1px;
	margin-bottom: 20px
}

.v-card--reveal {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 30%;
	font-size: 1em;
}

.v-card--reveal2 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 30%;
	font-size: 1em;
}

.v-card--reveal3 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 25%;
	font-size: 1em;
}

.v-card--reveal4 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 30%;
	font-size: 1em;
}

.v-card--reveal5 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 40%;
	font-size: 1em;
}

.v-card--reveal6 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 30%;
	font-size: 1em;
}

.card_trans {
	background-image: url("./img/tela_amigoh/card_fundo.png");
	background-size: cover;
	padding-bottom: 80;
	height: 350px;
	width: 100%;
}

.col_card_trans_pri {
	margin: 0px 4px 0px -12px;
}

.col_card_trans {
	margin: 0px 4px 0px 0px;
}

.col_card_trans_ult {
	margin: 0px 0px 0px 0px;
}

.card_icon {
	height: 25%;
	position: relative;
	top: 100px;
}

.card_text {
	text-align: center;
	font-size: 1.5em !important;
	position: relative;
	top: 120px;
	color: #004F81 !important;
}

.btn_icon_card {
	font-size: 3rem !important;
	position: relative;
	top: 100px;
}

.v-card-actions .v-btn {
	padding: 0 8px;
	position: absolute;
	top: 0px;
	left: 0;
}

.texto_escuro {
	color: #1B1F45 !important;
}

.texto_claro {
	color: #62C9CE !important;
}

.texto_branco {
	color: #ffffff !important;
}

.texto_preto {
	color: #202428 !important;
}

.texto_azul {
	color: #004F81 !important;
}

.bg_claro {
	background-color: #00FFCD;
}

.bg_escuro {
	background-color: #1B1F45 !important;
}

.azul-svg {
	background-image: url("./img/tela002/gota_azul.png");
	background-size: contain;
}

.verde-svg {
	background-image: url("./img/tela002/gota_verde.png");
	background-size: contain;
}

.v-card-conteudos_video {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_amigoh/bg_video.svg");
	background-size: cover;
}

.col_card_3_img_pri {
	margin: 0px 6px 0px -12px;
}

.col_card_3_img {
	margin: 0px 6px 0px 0px;
}

.col_card_3_img_ult {
	margin: 0px 0px 0px 0px;
}

.footer {
	background-image: url("./img/tela_amigoh/fundo_footer.png");
	background-position: center;
	background-size: cover;
	padding-left: 6% !important;
	padding-right: 6% !important;
}

.footer2 {
	background-image: url("./img/tela_amigoh/footer2_fundo.svg");
	background-position: center;
	background-size: cover;
	padding-left: 6% !important;
	padding-right: 6% !important;
}

.card-bg-img {
	background-image: url("./img/tela_amigoh/card_fundo.png");
	background-size: cover;
}
@media screen and (max-width: 1277px) {
.text_cont2 {
		width: 80%;
		margin-top: 10px
	}

.box_cont2 p {
	font-size: 0.8rem !important;
	line-height: 1em;
}
}
@media screen and (max-width: 768px) {
	.fundo_cont2 {
		max-width: 100%;
		background-image: url("./img/tela_amigoh/fundo_cont2_mobile.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	h1{
	font-size:1.6em!important;
	}
	h2{
	font-size:1.4em!important;
	}
	


	.text_cont2 {
		width: 80%;
		margin-top: 70px
	}

	.text_cont2 h5 {
		font-size: 1.4rem !important;
		line-height: 1.2rem;
	}

	.text_cont2 h4 {
		font-size: 1.2rem !important;
		line-height: 1.1rem;
	}

	.text_cont2 p {
		font-size: 1.0rem !important;
		line-height: 1.2rem;
	}

	.box_cont2 {
		width: 100% !important;
		border-radius: 15px !important;
		text-align: center;
		box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
		background-color: #E17000;
		margin-top: 30px!important;
		padding: 15px;
	}

	.box_cont2 p {
		color: #ffffff !important;
		font-size: 0.8rem !important;
		line-height: 1rem;
	}
}
</style>