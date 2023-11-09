<template>
	<!-- header -->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela000/header.png" />
		<v-img class="show_mobile" src="./img/tela000/header_mob.png" />
		<v-img src="./img/tela000/header_text.svg" class="header_text"
			title="VOLUNTARIADO EINSTEIN. Uma história de amor. A história do voluntariado Einstein se baseia na força e na persistência de um grupo de pessoas unidas pelo amor, dedicação e profissionalismo com o propósito de promover bem-estar e transformação social." />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-if="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:5;" 
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header"/>
		<v-card-text class="pt-10 pl-0 pr-0">

			<h1 class="mt-n10 font-weight-bold text-primary my-6  reveal fade-left">
				O Voluntariado em poucas palavras:
			</h1>

			<v-card class="box_dicas pl-0 pr-0 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber
					mais.
				</v-card-text>
			</v-card>
		</v-card-text>
		<v-row class="mt-2">

			<!--Card 01-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
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
							src="./img/tela000/card_1_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Quem somos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Nosso grupo é formado por mais de 600 pessoas com idades que vão de 15 a mais de 80 anos
								trabalhando incansavelmente para levar esperança para quem precisa de atenção e
								conforto.			
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 02-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard02Visible ? 'card-bg-img' : '' "
					@click="isCard02Visible = !isCard02Visible"
					>
						<template v-if="!isCard02Visible">
							<v-img 
							src="./img/tela000/card_2_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Nosso propósito
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Atuamos diretamente para a transformação social, a geração de conhecimento e a
								humanização das pessoas atendidas constituindo, assim, uma referência em cidadania,
								responsabilidade social e amor ao próximo.			
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 03-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard03Visible ? 'card-bg-img' : '' "
					@click="isCard03Visible = !isCard03Visible"
					>
						<template v-if="!isCard03Visible">
							<v-img 
							src="./img/tela000/card_3_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Alguns números
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Só para dar um exemplo, em 2022, o Voluntariado realizou 209.476 atendimentos.		
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 04-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard04Visible ? 'card-bg-img' : '' "
					@click="isCard04Visible = !isCard04Visible"
					>
						<template v-if="!isCard04Visible">
							<v-img 
							src="./img/tela000/card_4_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Onde atuamos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Estamos presente em 72 setores e atuamos efetivamente em cinco frentes: Unidade Morumbi,
								Unidades Externas, Programa Einstein na Comunidade de Paraisópolis (PECP), Residencial
								Israelita Albert Einstein (RIAE) e Hospitais Municipais M’Boi Mirim e Vila Santa
								Catarina. 		
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
				class=" mt-8 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="text-secondary"
				:class="appStore.isDarkMode ? 'bg_escuro' : 'bg_claro'"
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
	v-if="isContent02Visible" 
	id="content02" 
	width="100%"
	elevation="6"
	style="z-index:4"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela000/grade_header.png" />
		<v-row class="mx-auto mt-n10">
			<v-col cols="12" md="9">
				<v-card-text class="pl-0 pr-0">

					<h2 class=" font-weight-bold text-primary my-6 reveal fade-left">
						Era uma vez...
					</h2>
					<p class="mt-4 reveal fade-left">
						<strong>Toda história tem um começo.</strong>
					</p>
					<p class="mt-4 reveal fade-left">
						O Voluntariado Einstein iniciou suas atividades na mesma época em que foi fundado o Hospital
						Israelita Albert Einstein, lá em 1959. São, portanto, mais de 60 anos de atuação.
					</p>
					<p class="mt-4 reveal fade-left">
						Vamos conhecer um pouco dessa história?
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="3">
				<v-img class=" reveal fade-right" src="./img/tela000/ilustra_eraumavez.svg" />
			</v-col>
		</v-row>
		<v-card class="box_dicas pl-0 pr-0 my-10  reveal fade-bottom">
			<v-card-text>
				<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas datas, ou pelas setas
				abaixo.
			</v-card-text>
		</v-card>
		<v-card elevation="3" width="100%" class="mx-auto rounded-lg reveal fade-bottom">
			<v-timeline class="timeline_carroussel" direction="horizontal">

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1959</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1967</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1969</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1971</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1997</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1998</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1999</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2001</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2000</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2004</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2010</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2013</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2015</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2022</span>
					</template>
				</v-timeline-item>

			</v-timeline>
			<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false">
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela000/slider_img_01.png" />
							</v-col>
							<v-col cols="12" md="6">
								<p>
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP,
									marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="mt-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								<button type="button"
									class="v-btn v-btn--elevated v-theme--light bg-deep-purple-accent-4 v-btn--density-comfortable elevation-0 v-btn--rounded v-btn--size-default v-btn--variant-elevated bg-primary letter-normal mt-5">
									<span class="v-btn__overlay"></span><span
										class="v-btn__underlay"></span><!----><span class="v-btn__content">video
										ASSISTIR VÍDEO</span>
								</button>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela000/slider_img_01.png" />
							</v-col>
							<v-col cols="12" md="6">
								<p>
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP,
									marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="mt-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								<button type="button"
									class="v-btn v-btn--elevated v-theme--light bg-deep-purple-accent-4 v-btn--density-comfortable elevation-0 v-btn--rounded v-btn--size-default v-btn--variant-elevated bg-primary letter-normal mt-5">
									<span class="v-btn__overlay"></span><span
										class="v-btn__underlay"></span><!----><span class="v-btn__content">video
										ASSISTIR VÍDEO</span>
								</button>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela000/slider_img_01.png" />
							</v-col>
							<v-col cols="12" md="6">
								<p>
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP,
									marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="mt-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								<button type="button"
									class="v-btn v-btn--elevated v-theme--light bg-deep-purple-accent-4 v-btn--density-comfortable elevation-0 v-btn--rounded v-btn--size-default v-btn--variant-elevated bg-primary letter-normal mt-5">
									<span class="v-btn__overlay"></span><span
										class="v-btn__underlay"></span><!----><span class="v-btn__content">video
										ASSISTIR VÍDEO</span>
								</button>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela000/slider_img_01.png" />
							</v-col>
							<v-col cols="12" md="6">
								<p>
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP,
									marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="mt-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								<button type="button"
									class="v-btn v-btn--elevated v-theme--light bg-deep-purple-accent-4 v-btn--density-comfortable elevation-0 v-btn--rounded v-btn--size-default v-btn--variant-elevated bg-primary letter-normal mt-5">
									<span class="v-btn__overlay"></span><span
										class="v-btn__underlay"></span><!----><span class="v-btn__content">video
										ASSISTIR VÍDEO</span>
								</button>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela000/slider_img_01.png" />
							</v-col>
							<v-col cols="12" md="6">
								<p>
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP,
									marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="mt-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								<button type="button"
									class="v-btn v-btn--elevated v-theme--light bg-deep-purple-accent-4 v-btn--density-comfortable elevation-0 v-btn--rounded v-btn--size-default v-btn--variant-elevated bg-primary letter-normal mt-5">
									<span class="v-btn__overlay"></span><span
										class="v-btn__underlay"></span><!----><span class="v-btn__content">video
										ASSISTIR VÍDEO</span>
								</button>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
			</v-carousel>
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="text-secondary"
				:class="appStore.isDarkMode ? 'bg_escuro' : 'bg_claro'"
				@click="isContent03Visible = true; prosseguir('content03')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	<!-- conteúdo 02 -->
	<!-- conteúdo 03 -->
	<v-card 
	v-if="isContent03Visible"
	id="content03" 
	width="100%" 
	elevation="6"
	style="z-index:3; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela000/grade_header_branco.png" />
		<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">

			<h1 class="font-weight-bold my-6 texto_azul">
				Onde atuamos
			</h1>
			<p class="mt-4 texto_preto">
				<strong>Unidade Morumbi</strong>
			</p>
		</v-card-text>

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image40.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image38.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image39.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<h2 class=" font-weight-bold text-primary my-6 texto_preto fadeInLeft">
				Os aventais rosas: atendimento hospitalar do Voluntariado Einstein
			</h2>
			<p class="mt-4 texto_preto fadeInLeft">
				Qualquer pessoa que conhece o Einstein Morumbi, já viu circulando mulheres e homens com aventais
				cor-de-rosa ou camisetas brancas com a marca do Voluntariado. São pessoas unidas pelo propósito de fazer
				a diferença e transformar o ambiente hospitalar em um lugar mais acolhedor.
			</p>
		</v-card-text>

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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="text-secondary"
				:class="appStore.isDarkMode ? 'bg_escuro' : 'bg_claro'"
				@click="isContent04Visible = true; prosseguir('content04')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!--Grafisrmos "Triangulo" do conteúdo 3-->
	<v-container 
	v-if="isContent03Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	<!-- conteúdo 03 -->

	<!-- conteúdo 04 -->
	<v-card 
	v-if="isContent04Visible"
	id="content04" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela000/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Unidades Externas: Alphaville, Ibirapuera e Perdizes</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image41.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image42.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="img_shadow fadeInDown" src="./img/tela000/image43.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Os voluntários têm como objetivo amenizar os efeitos do tratamento com uma palavra de conforto e
				esperança, oferecendo suporte aos pacientes e acompanhantes, além de contribuir com o trabalho da equipe
				multiprofissional.
			</p>
		</v-card-text>
		
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class="text-secondary"
				:class="appStore.isDarkMode ? 'bg_escuro' : 'bg_claro'"
				@click="isContent05Visible = true; prosseguir('content05')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 04 -->
	<!-- conteúdo 05 footer -->
	<v-card 
	v-if="isContent05Visible"
	id="content05" 
	width="100%"
	class="mt-n4 mx-auto rounded-lg pt-0 footer"
	style="z-index:1; background-color: #dc7689;"  
	>

		<v-container fill-height class="my-10">
			<v-row>
				<v-col cols="12" md="5">

				</v-col>
				<v-col cols="12" md="7">
					<v-row style="text-align:center">
						<v-col cols="12" md="4">

						</v-col>
						<v-col cols="12" md="4">
							<img class="gota_footer reveal fade-in" src="./img/tela000/gota_footer.svg">
						</v-col>
						<v-col cols="12" md="4">

						</v-col>
					</v-row>

					<v-row >
						<v-col cols="12" md="12">
							<v-img class=" reveal fade-right" src="./img/tela000/texto_footer.svg"
								title="O Voluntariado continua seu trabalho, levando uma gota Einstein a cada pessoa e, com isso, é capaz de transformar sonhos em realidade e contribuir para a busca de uma sociedade mais justa e igualitária para todos os indivíduos." />
						</v-col>
					</v-row>
					<v-row style="text-align:center" class=" reveal fade-bottom">
						<v-col cols="12" md="4" class="mx-auto">
							<span class="footericons mdi mdi-instagram"></span>
							<span class="footericons mdi mdi-facebook"></span>
							<span class="footericons mdi mdi-youtube"></span>
							<p class="footericontext">/voluntarioseinstein</p>
						</v-col>
						<v-col cols="12" md="4" style="text-align:center">
							<span class="footericons mdi mdi-phone"></span>
							<p class="footericontext">(11) 2151 3580</p>
						</v-col>
						<v-col cols="12" md="4" style="text-align:center">
							<span class="footericons mdi mdi-web"></span>
							<p class="footericontext">voluntarios.einstein.br</p>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>

	</v-card>

	<!-- conteúdo 05 -->
</template>

<script setup>

	//Imports
	import { ref, onMounted } from "vue";
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'
	import { useAnim, useScrollMonitor } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content05')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)
	const isContent05Visible = ref(false)

	//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)
	const isCard03Visible = ref(false)
	const isCard04Visible = ref(false)



	//Finaliza o conteúdo
	const finishedContent = () => {
		appStore.finishedContent(true)
	}

	//Movimenta o conteúdo liberado para o topo da tela utilizando o Id
	const prosseguir = (contentId) => {	
		/*Aguarda 0.2 segundos para iniciar a animação.
		Isso garante que o conteúdo teve tempo para estar disponível no DOM*/
		setTimeout(()=> {
			document.querySelector(`#${contentId}`).scrollIntoView({
        		behavior: 'smooth'
    		});
    	} 
		,200); // <-- Tempo do delay
	}

	//Ações que acontecem após o carregamento da página 
	onMounted(() => {
		//Atualiza o progresso da unidade
		useStartProgress();
		//Configuração das animações de rolagem
		useAnim(150, true);
		//Verifica se o último bloco de conteúdo ou elemento está completamente visível na tela
		document.addEventListener('scroll', () => {
			if (useScrollMonitor(lastElementIdOnScreen.value) == true ){
				finishedContent()
			}
		})
	})

</script> 



<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';


.custom-v-card {
	position: absolute;
	bottom: 0;
	opacity: 1 !important;	
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 1em;
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
	padding-top: 25%;
	font-size: 1em;
}

.v-card--reveal3 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 50%;
	font-size: 1em;
}

.v-card--reveal4 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 10%;
	font-size: 1em;
}

.card-bg-img {
	background-image: url("./img/tela000/card_fundo.png");
	background-size: cover;
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

.btn_expande_conteudos {
	padding-left: 20px;
	padding-right: 20px;
	font-family: 'Roboto';
	font-size: 16px;
	letter-spacing: initial;
}

.texto_escuro {
	color: #1B1F45 !important;
}

.texto_claro {
	color: #62C9CE !important;
}

.texto_preto {
	color: #202428 !important;
}

.texto_azul {
	color: #004F81 !important;
}

.bg_claro {
	background-color: $primaryLight !important;
}

.bg_escuro {
	background-color: $primaryDark !important;	
}

.azul-svg {
	background-image: url("./img/tela000/gota_azul.png");
	background-size: contain;
}

.verde-svg {
	background-image: url("./img/tela000/gota_verde.png");
	background-size: contain;
}

.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
}

.card_header {
	padding: 0 !Important;
	border-radius: 18px 18px 0px 0px !important;
	z-index: 10;
	background-color: #DC7689;
}

.header_text {
	position: absolute;
	top: 9%;
	left: 6%;
	width: 42%;
}

.grade_header {
	max-width: 70%;
}

.box_dicas {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 45%;
}

.img_shadow {
	box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
	border-radius: 15px 40px 15px 15px !important;
}

.box_dicas_icon {
	font-size: 1.4rem;
}

.v-card-text {
	font-size: 1rem !important;
	font-family: 'montserrat' !important;
}

.triangulo_v-card {
	font-size: 6rem !important;
	color: #62C9CE !important;
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
	background-image: url("./img/tela000/fundo_footer.png");
	background-size: cover;
	padding-left: 6% !important;
	padding-right: 6% !important;
	margin-bottom: 130px;
}

.footericons {
	font-size: 3rem;
	color: white;
}

.footericontext {
	font-family: 'montserrat' !important;
	font-weight: 600;
	font-size: 0.8rem;
	color: white !important;
}

.timeline_carroussel {
	grid-column-gap: 0px !important;
	width: 100%;
}

.v-timeline .v-timeline-divider__inner-dot {
	/* background: rgb(var(--v-theme-on-surface)); */
	border: 2px solid #62C9CE !important;
}
</style>