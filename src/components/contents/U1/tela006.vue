<template>
	<!-- header ESTRUTURA -->
	<v-card class="card_header mx-auto rounded-lg pa-6" width="100%" elevation="6">
		<v-img class="show_desktop" src="./img/tela_estrutura/header.png" />
		<v-img class="show_1277" src="./img/tela_estrutura/header.png" />
		<v-img class="show_mobile" src="./img/tela_estrutura/header_mobile.png" />
		<v-img src="./img/tela_estrutura/header_text.svg" class="header_text"
			title="O EINSTEIN. NOSSA ESTRUTURA E CONQUISTAS." />

	</v-card>

	<!-- header -->
	<!-- conteúdo 01 -->
	<v-card v-show="isContent01Visible" id="content01" width="100%" elevation="6"
		style="z-index:5; background-color:#C4E8E1" class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos">
		<v-img class="mx-auto grade_header" src="./img/tela_estrutura/grade_01.png" />

		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">

			<h1 class="mt-n10 text-h1 font-weight-bold text-primary my-6 reveal fade-in texto_azul">
				Nossa Infraestrutura
			</h1>

			<v-container fill-height class="mt-n8">
				<v-row>
					<v-col class="cont1_col1" cols="12" md="6" align="left">
						<div class="reveal fade-left texto_preto">
							<p>Somos um hospital de grande porte, reconhecido como uma instituição de referência tanto na
								área de saúde, como no ensino, pesquisa, inovação e responsabilidade social.
							</p>
						</div>
					</v-col>
					<v-col class="cont1_col2" cols="12" md="6" align="left">
						<div class="reveal fade-right texto_preto">
							<p>Somos pessoas atuando em prol de pessoas. Gente que cuida de gente, trabalhando
								colaborativamente, com transparência, dedicação, fazendo a diferença e garantindo sempre a
								excelência.
							</p>
						</div>
					</v-col>
				</v-row>



			</v-container>
		</v-card-text>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
					@click="isContent02Visible = true; prosseguir('content02')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>
	<!-- conteúdo 01 -->

	<!-- conteúdo 02 -->
	<v-card v-show="isContent02Visible" id="content02" width="100%" elevation="6" style="z-index:4"
		class="mt-n8 mx-auto rounded-lg pt-4  v-card-conteudos_cont2">
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_estrutura/grade_04.png" />

		<v-card-text class="pt-10 pl-0 pr-0 mt-5">
			<v-row no-gutters justify="center" class="">
				<v-col cols="12" md="5" align="left">
					<div class="reveal fade-left texto_preto">
						<p>
							<strong>Para orquestrar a complexidade do Einstein, é preciso ter uma estrutura de governança
								que mantenha o foco e busque garantir a excelência da assistência em todos os
								níveis.</strong>
						</p>
						<p class="mt-4">
							<strong>Todas as estruturas seguem as mesmas diretrizes estratégicas que fazem do Einstein uma das
								organizações líderes em termos de excelência de qualidade, segurança, inovação e
								sustentabilidade no âmbito da saúde, reconhecidas globalmente.</strong>
						</p>
					</div>
				</v-col>
				<v-col cols="12" md="7" align="left">
					<div class="reveal fade-right">

					</div>
				</v-col>
			</v-row>
		</v-card-text>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
					@click="isContent03Visible = true; prosseguir('content03')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	<!-- conteúdo 02 -->
	<!-- conteúdo 03 -->
	<v-card v-show="isContent03Visible" id="content03" width="100%" elevation="6" style="z-index:3;"
		class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos">

		<v-img class="mx-auto grade_header" src="./img/tela_estrutura/grade_02.png" />

		<v-card-text class="pl-0 pr-0 mt-n5">

			<v-container fill-height class="mt-n16">

				<h1 class="text-h1 font-weight-bold text-primary my-6 reveal fade-in">
					Estrutura de governança
				</h1>
				<p class="texto_azul_claro2 mt-n8">
					<strong>Mandato: dezembro de 2022 a dezembro de 2028</strong>
				</p>

				<v-img class="mx-auto mt-10 reveal fade-in" src="./img/tela_estrutura/cont3_info1.svg" />
				<v-img class="mx-auto reveal fade-in" src="./img/tela_estrutura/cont3_info2.svg" />
				<v-img class="mx-auto reveal fade-in" src="./img/tela_estrutura/cont3_info3.svg" />
			</v-container>
		</v-card-text>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'texto_escuro bg_escuro' : 'text-secondary bg_claro'"
					@click="isContent04Visible = true; prosseguir('content04')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 03 -->




<v-card v-show="isContent04Visible" id="content04" width="100%" elevation="0"
		class="mx-auto bg-transparent" style="z-index:2;">

		<v-img class="mx-auto grade_header" src="./img/tela_estrutura/grade_cont6.png" />

	</v-card>





	<!-- conteúdo 04 -->
	<v-card v-show="isContent04Visible" width="100%" elevation="6"
		class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont3" style="z-index:2;">


		<v-img src="./img/tela_estrutura/cont3_text.svg" class="header_text"
			title="O EINSTEIN. NOSSA ESTRUTURA E CONQUISTAS." />
	</v-card>

	<v-card style="z-index:1;" v-show="isContent04Visible" class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
		width="100%" elevation="6">
		<v-img class="mx-auto grade_header" src="./img/tela_estrutura/grade_03.png" />
		<v-container fill-height class="mt-n16">
			<v-row justify="center" class="">
				<v-col cols="12" md="9" align="left">
					<div class="reveal fade-left">
						<h1 class="text-h1 font-weight-bold text-primary my-6 reveal fade-in">
							Números Einstein
						</h1>
						<p class="mt-n8">
							Veja alguns indicadores operacionais que mostram a atuação do Einstein tanto no Sistema Privado
							como no SUS.
						</p>
					</div>
				</v-col>
				<v-col cols="12" md="3" align="right">
					<v-img class="mx-auto mt-16 reveal fade-right" src="./img/tela_estrutura/cont4_info1.svg" />
				</v-col>
			</v-row>
		</v-container>

		<v-container class="pt-10">
			<v-card class="float-left rounded-lg cont4_info_row1_1 reveal fade-left">
				<v-img src="./img/tela_estrutura/cont4_info2.svg" />
			</v-card>

			<v-card class="float-left rounded-lg cont4_info_row1_2 reveal fade-bottom">
				<v-img src="./img/tela_estrutura/cont4_info3.svg" />
			</v-card>

			<v-card class="float-left rounded-lg cont4_info_row1_3 reveal fade-right">
				<v-img src="./img/tela_estrutura/cont4_info4.svg" />
			</v-card>

		</v-container>


		<v-container fill-height class="float-right mb-8">

			<v-row justify="center" class="">

				<v-col cols="12" md="6" align="right">
					<v-card class="rounded-lg cont4_info_row2_1 reveal fade-left">
						<v-img src="./img/tela_estrutura/cont4_info5.svg" />
					</v-card>
				</v-col>
				<v-col cols="12" md="6" align="right">
					<v-card class="rounded-lg cont4_info_row2_2 reveal fade-right">
						<v-img src="./img/tela_estrutura/cont4_info6.svg" />
					</v-card>
				</v-col>
			</v-row>

</v-container>

	</v-card>
	
	<v-card v-show="isContent04Visible" id="content04" width="100%" elevation="0"
		class="mx-auto bg-transparent" style="z-index:1000!important;">

		<!--Grafisrmos "Triangulo" do conteúdo 10-->
	<v-container 
	
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#f5f5f5; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	</v-card>

	<v-card style="z-index:1;" v-show="isContent04Visible" class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
		width="100%" elevation="6">

		<v-container fill-height class="float-right">

			<v-row justify="center" class="">

				<v-col cols="12" md="6" align="left">
					<p class="cont4_info_tit font-weight-bold my-2 reveal fade-in">
						PRODUÇÃO CIENTÍFICA
					</p>
					<v-card class="rounded-lg cont4_info_row3_1 reveal fade-left">
						<v-img src="./img/tela_estrutura/cont4_info7.svg" />
					</v-card>
				</v-col>
				<v-col cols="12" md="6" align="left">
					<p class="cont4_info_tit font-weight-bold my-2 reveal fade-in">
						DISSEMINAÇÃO DE CONHECIMENTO
					</p>
					<v-card class="rounded-lg cont4_info_row3_2 reveal fade-right">
						<v-img src="./img/tela_estrutura/cont4_info8.svg" />
					</v-card>
				</v-col>
			</v-row>

		</v-container>
		
		




		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet color="transparent" class="mb-4" width="auto">
				<v-img width="40" height="60" src="../GlobalStyles/img/gota-icon.svg" class=" mt-8 mb-4 mx-auto"
					:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" />

				<v-btn type="button" density="comfortable" size="large" rounded="pill" class=""
					:class="appStore.isDarkMode ? 'texto_escuro bg_escuro' : 'text-secondary bg_claro'"
					@click="isContent05Visible = true; prosseguir('content05')">
					Prosseguir
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 04 -->


	<!-- conteúdo 05 footer -->
	<v-card v-show="isContent05Visible" id="content05" width="100%" class="mt-n4 mx-auto rounded-lg pt-0 footer"
		style="z-index:1; background-color:#004F81;">

		<v-img class="mx-auto grade_header" src="./img/tela_estrutura/grade_04.png" />

		<v-container fill-height class="mt-0">

			<v-row justify="center" class="mt-n10">

				<v-col cols="12" md="8" align="left">
					<h2 class="texto_branco font-weight-bold text-primary mt-0 reveal fade-left">
						Certificações, acreditações e reconhecimentos
					</h2>
					<p class="mt-4 texto_branco reveal fade-left">
						Os serviços e processos de controle do Einstein são certificados, acreditados ou designados com
						relação a padrões e normas externas de referência.
					</p>
					<p class="mt-4 texto_branco reveal fade-left">
						Destacamos os principais para você conhecer.
					</p>
				</v-col>
				<v-col cols="12" md="4" align="left" class="mt-0" align-self="end">
					<v-card class="box_dicas_tela_estrutura pl-0 pr-0 reveal fade-right">
						<v-card-text>
							<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			

			<!-- Btn prev -->
			<v-btn
			icon="mdi-chevron-left"
			class="btn-left"
			:color="carousel01 == 0 ? 'white' : 'primary'"
			:variant="carousel01 == 0 ? 'text' : 'flat'"
			:disabled="carousel01 == 0"
			@click="carousel01 --"
			/>

			<!-- Btn next (16 slides) -->
			<v-btn
			icon="mdi-chevron-right"
			class="btn-right"
			:color="carousel01 == 16 ? 'white' : 'primary'"
			:variant=" carousel01 == 16 ? 'text' : 'flat'" 
			:disabled="carousel01 == 16"
			@click="carousel01 ++"
			/>

			<!-- Carousel container -->
			<v-card 
			elevation="3" 
			width="100%" 
			class="mx-auto my-8 reveal fade-bottom"
			:class=" appStore.isMobile ? 'rounded-b-lg rounded-t-0' : 'rounded-lg' "
			>

				<!-- Carousel -->
				<v-carousel 
				v-model="carousel01"
				:show-arrows="false"
				hide-delimiter-background 
				:hide-delimiters="appStore.isMobile"
				color="primary" 
				:continuous="false"
				:progress=" appStore.isMobile ? 'primary' : false"
				>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider01.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Acreditação hospitalar Joint Commission International (JCI)
									</h2>
									<p class="mt-4">
										Atestar padrões internacionais hospitalares de excelência, qualidade e de segurança.
										Área e escopo: Unidades Morumbi, Alphaville, Jardins, Ibirapuera, Perdizes e Chácara
										Klabin.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider02.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3
									</h2>
									<p class="mt-4">
										Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança.
										Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e Hospital
										Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider03.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										American Association of Blood Banks (AABB)
									</h2>
									<p class="mt-4">
										Atestar a qualidade e a segurança das atividades transfusionais e de terapia
										celular. Área e escopo: Departamento de hemoterapia e terapia celular.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider04.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										American College of Radiology (ACR)
									</h2>
									<p class="mt-4">
										Garantir a qualidade do serviço de imagem. O Einstein é a única organização de saúde
										do Brasil com acreditação em todas as modalidades diagnósticas. Área e escopo:
										Imagem — mamografia, ultrassonografia, tomografia, ressonância e medicina nuclear.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider05.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										American Society for Histocompatibility and Immunogenetics (ASHI)
									</h2>
									<p class="mt-4">
										Garantir o processo histocompatibilidade e imunogenética do Laboratório de Patologia
										Clínica. Área e escopo: Laboratório — setor de histocompatibilidade.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider06.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Association for the Accreditation of Human Research Protection Program (AAHRPP)
									</h2>
									<p class="mt-4">
										Garantir a aplicação das melhores práticas de pesquisas em humanos. Área e escopo:
										Unidade Morumbi.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider07.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Association for Assessment and Accreditation of Laboratory Animal Care International
										(AAALAC)
									</h2>
									<p class="mt-4">
										Garantir as boas práticas no tratamento e uso responsável de animais em testes
										laboratoriais. Área e escopo: Centro de Experimentação e Treinamento em Cirurgia
										(CETEC).
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider08.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										College of American Pathologists (CAP)
									</h2>
									<p class="mt-4">
										Garantir a qualidade no processo de diagnóstico clínico no laboratório. Área e
										escopo: Laboratório clínico e Anatomia Patológica – Unidade Morumbi e Núcleo Técnico
										Operacional (NTO).
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider09.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Foundation for the Accreditation of Cellular Therapy (FACT)
									</h2>
									<p class="mt-4">
										Garantir a qualidade e segurança no transplante de medula óssea, coleta,
										processamento e armazenamento de cordão umbilical. O Einstein é a única organização
										acreditada da América Latina. Área e escopo: Departamento de Hemoterapia, Terapia
										Celular e Programa Clínico de Transplante de Medula Óssea.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider10.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										ISO 9001
									</h2>
									<p class="mt-4">
										Certificar os padrões de qualidade e segurança do Departamento de Voluntários. Área
										e escopo: Unidades Morumbi, Perdizes, Alphaville, Ibirapuera, Vila Mariana,
										Paraisópolis, Hospital Municipal Vila Santa Catarina — Dr. Gilson de Cássia Marques
										de Carvalho e Hospital Municipal M’Boi Mirim.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider11.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										ISO 14001/2015
									</h2>
									<p class="mt-4">
										Garantir padrões nacionais para gestão ambiental de sustentabilidade. Área e escopo:
										Unidades Morumbi, Perdizes, Jardins, Ibirapuera, Chácara Klabin e Alphaville, bem
										como as Clínicas Einstein Parque da Cidade, Alto de Pinheiros, Anália Franco e
										Ibirapuera, o Residencial Israelita Albert Einstein (RIAE), o Núcleo Técnico
										Operacional (NTO) Santana e o Programa Einstein na Comunidade Paraisópolis (PECP). ​
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider12.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										ISO 50001/2018
									</h2>
									<p class="mt-4">
										Garantir padrões definidos pela norma dos Sistemas de Gestão Energética. Área e
										escopo: Unidade Morumbi.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider13.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Magnet
									</h2>
									<p class="mt-4">
										Garantir padrões de qualidade e práticas assistenciais que evidenciam a excelência
										da enfermagem. Área e escopo: Unidade Morumbi.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider14.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Planetree
									</h2>
									<p class="mt-4">
										Garantir a experiência e o cuidado centrado na pessoa (paciente, familiar,
										colaborador). Área e escopo: A unidade Morumbi é certificada com a Credencial Ouro.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider15.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Programa de Acreditação de Laboratórios Clínicos (PALC)
									</h2>
									<p class="mt-4">
										Promover a qualidade dos serviços laboratoriais prestados a pacientes e usuários.
										Área e escopo: Unidade Morumbi, Núcleo Técnico Operacional e os postos de coleta das
										Unidades Avançadas e das Clínicas Einstein.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider16.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Selo Amigo do Idoso
									</h2>
									<p class="mt-4">
										Garantir as iniciativas de adequação da infraestrutura, capacitação de profissionais
										e familiares, engajamento comunitário e estímulo à prevenção em saúde do idoso. Área
										e escopo: Unidade Morumbi e Hospital Municipal Vila Santa Catarina — Dr. Gilson de
										Cássia Marques de Carvalho.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

					<v-carousel-item>
						<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 pt-8 pb-12">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_estrutura/slider17.png" />
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										Society for Simulation in Healthcare (SSH)
									</h2>
									<p id="content06" class="mt-4">
										Garantir as boas práticas do Centro de Simulação Realística no treinamento e
										capacitação de equipes. Área e escopo: Unidade Morumbi.
									</p>
								</v-col>
							</v-row>
						</v-sheet>
					</v-carousel-item>

				</v-carousel>
			</v-card>

			<v-row justify="center" class="mt-4">
				<v-col cols="12" md="12" align="left">
					<h2 class="texto_branco text-primary mt-6 reveal fade-left">
						As certificações e acreditações são evidências de como o Einstein é reconhecido como uma instituição de referência. É importante destacar, porém, que tudo isso não seria possível sem as pessoas.
					</h2>
				</v-col>
			</v-row>
			<v-row justify="center" class="mt-n4 mb-10">
				<v-col cols="12" md="8" align="center">
					<h2 class="texto_branco font-weight-bold text-primary mt-6 reveal fade-left">
						E, a partir de agora, VOCÊ faz parte disso!
					</h2>
				</v-col>
			</v-row>
		</v-container>

		<!-- conteúdo ultimo conteudo gambi 
		<v-card id="content06" width="100%" class="mt-n4 mx-auto rounded-lg pt-0" style="z-index:1;">
		</v-card>
		conteúdo ultimo conteudo gambi -->

	</v-card>
	<!-- conteúdo 05 -->

	<v-sheet v-if="appStore.isFinished" height="100" color="transparent" />
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

//Controla os slides do carousel01
const carousel01 = ref(0)

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

	setTimeout(() => {
		document.querySelector(`#${contentId}`).scrollIntoView({
			behavior: 'smooth'
		});
	}, 500);

	if (`#${contentId}` == lastElementIdOnScreen.value) {
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

.texto_azul_claro {
	color: #0065BD !important;
}

.texto_azul_claro2 {
	color: #5BC6E8 !important;
}

.bg_claro {
	background-color: $primaryLight !important;
}

.bg_claro2 {
	background-color: $secondaryLight !important;
}

.bg_escuro {
	background-color: $primaryDark !important;
}

.gota_azul {
	background-image: url("./img/tela_estrutura/gota_azul.png");
	background-size: contain;
}

.gota_verde {
	background-image: url("./img/tela_estrutura/gota_verde.png");
	background-size: contain;
}

.gota_azul_claro {
	background-image: url("./img/tela_estrutura/gota-missao-png.png");
	background-size: contain;
}

.v-card-conteudos_cont2 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_estrutura/bg_cont2.png");
	background-size: cover !important;
	background-repeat: no-repeat;
	background-position: center;
}

.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_estrutura/bg_cont3.png");
	background-size: cover !important;
	background-repeat: no-repeat;
	background-position: center;
	height: 450px;
}

.header_text {
	position: absolute;
	top: 35%;
	left: 6%;
	width: 42%;
}

.cont4_info_row1_1 {
	margin-right: 1.5%;
	padding: 1.5%;
	width: 28.4%;
}

.cont4_info_row1_2 {
	margin-right: 1.5%;
	padding: 1.5%;
	width: 39%;
}

.cont4_info_row1_3 {
	padding: 1.5%;
	width: 29%;
}

.cont4_info_row2_1 {
	padding: 3%;
	width: 100%;
}

.cont4_info_row2_2 {
	padding: 3%;
	width: 100%;
}

.cont4_info_row3_1 {
	padding: 3%;
	width: 100%;
}

.cont4_info_row3_2 {
	padding: 3%;
	width: 100%;
}

.box_dicas_tela_estrutura {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 100%!important;
}

.cont1_col1 {
	margin-left: -15px;
	padding-right: 20px;
}

.cont1_col2 {
	padding-left: 40px;
}

.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	margin-bottom: 30px;
}

.btn-left {
	position: absolute;
	z-index: 2000;
	top: 50%;
	left: 1%;
	transform: translate(0, -50%);
}

.btn-right {
	position: absolute;
	z-index: 2000;
	top: 50%;
	right: 1%;
	transform: translate(0, -50%);
}


@media screen and (max-width: 1277px) {
	.cont1_col1 {
		margin-left: 0px;
		padding-right: 0px;
	}

	.cont1_col2 {
		padding-left: 0px;
	}
	

}

@media screen and (max-width: 768px) {
	.cont4_info_row1_1 {
		margin-right: 0%;
		margin-bottom: 5%;
		padding: 10%;
		width: 100%;
	}

	.cont4_info_row1_2 {
		margin-right: 0%;
		margin-bottom: 5%;
		padding: 10%;
		width: 100%;
	}

	.cont4_info_row1_3 {
		padding: 10%;
		margin-bottom: 5%;
		width: 100%;
	}

	.v-card-conteudos_cont3 {
		height: 300px;
	}

	.header_text {
		position: absolute;
		top: 40%;
		left: 6%;
		width: 60%;
	}

	.box_dicas_tela_estrutura {
		border-radius: 20px;
		position: static;
		text-align: center;
		box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
		width: 60%;
		margin-top: 20px
	}

	.cont1_col1 {
		margin-left: -15px;
		padding-right: 0px;
	}

	.cont1_col2 {
		margin-left: -3px;
	}
}
</style>