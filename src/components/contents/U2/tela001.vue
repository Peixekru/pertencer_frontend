<template>
	<!-- header ensino corporativo-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	style="z-index:27;"
	>
		<v-img class="show_desktop" src="./img/tela_corporativo/header.png" />
		<v-img class="show_1277" src="./img/tela_corporativo/header.png" />
		<v-img class="show_mobile" src="./img/tela_corporativo/header_mobile.png" />
		<v-img src="./img/tela_corporativo/header_text.svg" class="header_text"
			title="ENSINO CORPORATIVO" />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:18;background-color:#fff!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont1"
	>
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_corporativo/grade_header_branco.png" />
		
		<v-row class="mt-2">
			<v-col cols="12" md="5" align-self="center">
				<p style="font-size:1.5em" class="mt-4 reveal fade-left texto_branco">
					Desde a nossa fundação, o Einstein tem como missão gerar e disseminar conhecimento.
				</p>
				<p style="font-size:1.5em" class="mt-0 reveal fade-left texto_branco">
					A cultura de aprendizagem e desenvolvimento na Instituição é priorizada e incentivada. Todas as nossas ações são realizadas colocando as pessoas no centro.
				</p>
				<p style="font-size:1.3em" class="mt-4 reveal fade-left texto_branco">
					Vamos conhecer essa importante missão.
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
	style="z-index:17;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_corporativo/grade_cont4.png" />
	<h1 style="font-size:2em" class="texto_azul">
				Ensino Corporativo
			</h1>
	<v-row class="mt-2">
		<v-col cols="12" md="6">
			<p class="mt-4">
				A área de Ensino Corporativo do Einstein tem por objetivo oferecer apoio ao desenvolvimento dos colaboradores em suas competências e no seu crescimento profissional. Para isso, utiliza as mais eficientes estratégias educacionais para promoção e retenção de conhecimento, favorecendo o desempenho de suas atividades com excelência, qualidade e segurança.
			</p>
		</v-col>
		<v-col cols="12" md="6">
			<p class="mt-4">
				As jornadas de aprendizagem conduzidas pela área seguem metodologias que avaliam indicadores e resultados do negócio para planejar e direcionar as ações de educação. O objetivo é atingir os melhores resultados com qualidade e segurança para o profissional, para o paciente e para o ambiente, seguindo diretrizes institucionais alinhadas às estratégias organizacionais da SBIBAE.
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
	v-show="isContent03Visible" 
	id="content03" 
	width="100%"
	elevation="6"
	style="z-index:16;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3"
	>
		<v-img class="mx-auto mt-0 grade_header" src="./img/tela_corporativo/grade_header.png" />
			<h1 class="mt-n4 font-weight-bold texto_branco reveal fade-left">
				Pessoas e Aprendizagem
			</h1>
			<p style="" class="texto_branco mt-4 reveal fade-left">
				O Ensino Corporativo se empenha em entender as necessidades de aprendizagem da Instituição.
			</p>
			<p style="" class="texto_branco mt-4 reveal fade-left">
				Seu ponto de partida é saber que <strong>o processo de aprendizagem diz respeito a pessoas</strong>, e que cada uma tem seu jeito próprio de aprender. Por isso, é fundamental <strong>conhecer o público</strong> e <strong>utilizar diferentes métodos e estratégias</strong> para que todos possam se beneficiar.
			</p>

	<v-row class="mt-2" align="right">
		<v-col cols="12" md="8">
			
		</v-col>
		<v-col cols="12" md="4">
			<v-card class="box_dicas pl-0 pr-0 mt-9 reveal fade-right" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique no item abaixo.  
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
	
	<v-container class="pl-0 pr-0 reveal fade-in">
		
			<v-expansion-panels >
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">Quer saber uma curiosidade sobre o processo de aprendizagem? Clique aqui.
</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<v-row class="mt-2 pa-8" align="center">
						<v-col cols="12" md="6">
							<p style="font-size:2em;" class="mt-n4 font-weight-bold texto_azul reveal fade-left">
								Como as pessoas aprendem com mais facilidade?
							</p>
						</v-col>
						<v-col cols="12" md="6">
							
							<v-img width="100%" class="mx-auto" src="./img/tela_corporativo/cont3_tab.svg" title="10% Lendo, 20% Ouvindo, 30% Observando, 50% Vendo e ouvindo, 70% Discutindo com outros, 80% Fazendo e 95% Ensinando." />
							
							
						</v-col>
					</v-row>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			</v-expansion-panels>

		</v-container>

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
				@click="isContent05Visible = true; prosseguir('content05')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	<!-- conteúdo 03 -->
	
	

	<!-- conteúdo 05 -->
	<v-card 
	v-show="isContent05Visible"
	id="content05" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:15;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0">

			<h1 class="mt-n10 font-weight-bold text-primary reveal fade-left">
				Nossa Estratégia de Gestão de Pessoas
			</h1>
			
			<p class="mt-8">
				As ações de treinamento são diversificadas, por isso, a <strong>gestão de pessoas</strong> é ampla e complexa. Sabemos que essa atividade é essencial para o alcance de bons resultados e, por isso, suas ações buscam apoiar nossa organização para atingir sua missão, além de propiciar meios para a realização dos nossos objetivos.
			</p>
			<p class="mt-4">
				Conheça alguns dos direcionamentos de nossas estratégias de Gestão de Pessoas para a área de Educação Corporativa.
			</p>
			
		</v-card-text>
		
		<v-row class="mt-n4">
			<v-col cols="12" md="4">

				<div class="ico_1">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_verde.png" />
				</div>
				
				<v-card min-height="180" style="background-color:#68c7cd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Garantir a disponibilidade de profissionais qualificados para as necessidades atuais e futuras do Einstein.</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
			<div class="ico_2">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_azul.png" />
				</div>
				<v-card min-height="180" style="background-color:#2aa0dd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Assegurar que os profissionais são efetiva e eficazmente treinados técnica e comportamentalmente para o exercício de suas atividades.</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
			<div class="ico_3">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_verde.png" />
				</div>
				<v-card min-height="180" style="background-color:#68c7cd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Estimular o desenvolvimento das competências para a carreira técnica  e  reforçar a integração entre aquisição de conhecimento e prática profissional.</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
			<div class="ico_4">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_azul.png" />
				</div>
				<v-card min-height="180" style="background-color:#2aa0dd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Realizar ações de formação com foco em Inclusão, Posicionamento Social e Empregabilidade.</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="2">
			<div class="ico_5">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_verde.png" />
				</div>
				<v-card min-height="180" style="background-color:#68c7cd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Atuar no desenvolvimento de líderes.</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
			<div class="ico_6">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_azul.png" />
				</div>
				<v-card min-height="180" style="background-color:#2aa0dd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Estimular e implementar programas que suportem o desenvolvimento de carreira dos profissionais (aproveitamento interno e atuação multi carreira).</strong> 
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="2">
			<div class="ico_7">
					<v-img width="50" class="" src="./img/tela_corporativo/ico_verde.png" />
				</div>
				<v-card min-height="180" style="background-color:#68c7cd;" class="pa-6 d-flex flex-column justify-center align-center">
					<p style="font-size:0.9em;text-align:center" class="texto_branco">
						<strong>Promover ações de preservação da cultura, valores e princípios.</strong>
					</p>
				</v-card>
			</v-col>
		</v-row>

		
		

	<!--Btn final-->
		<v-container class="d-flex justify-center mt-8 mb-4">
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent06Visible = true; prosseguir('content06')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 05 -->

	<v-card 
	v-show="isContent06Visible"
	id="content06" 
	width="100%" 
	elevation="0"
	class="bg-transparent mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16" 
	style="z-index:14;"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_corporativo/grade_cont6.png" />
		
	</v-card>
	
	<!-- conteúdo 06 -->
	<v-card 
	v-show="isContent06Visible"
	width="100%" 
	elevation="6"
	class="mt-0 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont6" 
	style="z-index:21;"
	>
		
		<v-card-text class="pt-10 pl-0 pr-0">

			<p style="text-transform:uppercase;font-size:1.5em" class="mt-4 texto_branco reveal fade-left">
				Nossa Metodologia de Ensino
			</p>
			<p class="mt-4 mb-4 texto_branco reveal fade-left">
				Essa é a metodologia em que nos baseamos.
			</p>
			
			<v-img height="600" class="mx-auto show_desktop" src="./img/tela_corporativo/cont6_info.png" />
			<v-img height="600" class="mx-auto show_1277" src="./img/tela_corporativo/cont6_info.png" />
			<v-img height="400" class="mx-auto show_mobile" src="./img/tela_corporativo/cont6_info.png" />
			
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
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent07Visible = true; prosseguir('content07')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 06 -->

	<!-- conteúdo 07 -->
	<v-card 
	v-show="isContent07Visible"
	id="content07" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont7" 
	style="z-index:13;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header_branco.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0">

			<v-row class="mt-4">
				<v-col cols="12" md="7">
				</v-col>
				<v-col cols="12" md="5">
					<p style="font-size:1.5em" class="texto_branco reveal fade-left">
						E VOCÊ, como gosta de aprender?
					</p>
					<p class="mt-4 texto_branco reveal fade-left">
						Aproveite este momento para fazer uma pausa e refletir sobre algumas situações de aprendizagem que marcaram sua trajetória de vida. 
					</p>
					<p class="mt-4 texto_branco reveal fade-left">
						Procure se dar conta da forma de ensino que mais contribuiu para facilitar o seu aprendizado.
					</p>
					<p class="mt-4 texto_branco reveal fade-left">
						Saiba que o autoconhecimento é fundamental para o seu crescimento tanto pessoal quanto profissional!
					</p>
				</v-col>
			</v-row>

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
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent08Visible = true; prosseguir('content08')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 07 -->

	<!-- conteúdo 08 -->
	<v-card 
	v-show="isContent08Visible"
	id="content08" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:12;"
	align="center"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0">

			<h2 class="mt-n10 font-weight-bold texto_azul reveal fade-left">
				Nossa busca constante é... 
			</h2>
			
			<h2 style="color:#81C300" class="mt-4 font-weight-bold reveal fade-left">
				Transformar a forma de aprender e ensinar.
			</h2>
			
			<h2 style="color:#81C300" class="mt-4 font-weight-bold reveal fade-left">
				Entender nosso público para criar as melhores experiências.
			</h2>
		
			<v-row class="my-10">
				<v-col cols="12" md="3">
					<v-card min-height="340px" class="pa-6" align="center" style="border:solid 3px #68c7cd;border-radius:30px">
						<p style="font-size:1.5em; color:#68c7cd;" class="mt-4">
							<strong>Baby Boomers</strong>
						</p>
						<p style="font-size:1.3em; color:#68c7cd" class="mt-4">
							<strong>1945 - 1964</strong>
						</p>
						<v-img width="80%" class="mx-auto mt-4" src="./img/tela_corporativo/geracoes_1.png" />
					</v-card>
				</v-col>
				
				<v-col cols="12" md="3">
				<v-card min-height="340px" class="pa-6" align="center" style="border:solid 3px #2aa0dd;border-radius:30px">
						<p style="font-size:1.5em; color:#2aa0dd;" class="mt-4">
							<strong>Geração X</strong>
						</p>
						<p style="font-size:1.3em; color:#2aa0dd" class="mt-4">
							<strong>1965 - 1984</strong>
						</p>
						<v-img width="80%" class="mx-auto mt-4" src="./img/tela_corporativo/geracoes_2.png" />
					</v-card>
				</v-col>
				
				<v-col cols="12" md="3">
					<v-card min-height="340px" class="pa-6" align="center" style="border:solid 3px #68c7cd;border-radius:30px">
						<p style="font-size:1.5em; color:#68c7cd;" class="mt-4">
							<strong>Geração Y</strong>
						</p>
						<p style="font-size:1.3em; color:#68c7cd" class="mt-4">
							<strong>1985 - 1999</strong>
						</p>
						<v-img width="80%" class="mx-auto mt-4" src="./img/tela_corporativo/geracoes_3.png" />
					</v-card>
				</v-col>
				
				<v-col cols="12" md="3">
				<v-card min-height="340px" class="pa-6" align="center" style="border:solid 3px #2aa0dd;border-radius:30px">
						<p style="font-size:1.5em; color:#2aa0dd;" class="mt-4">
							<strong>Geração Z</strong>
						</p>
						<p style="font-size:1.3em; color:#2aa0dd" class="mt-4">
							<strong>2000 - 2010</strong>
						</p>
						<v-img width="80%" class="mx-auto mt-4" src="./img/tela_corporativo/geracoes_4.png" />
					</v-card>
				</v-col>
				
			</v-row>
			
			<p>
				Na nossa instituição, coexistem diversas gerações, interagindo de maneira sinérgica. As pessoas representam a motivação fundamental por trás do nosso propósito, sendo referidas como "personas", nosso público-alvo. Realizamos estudos aprofundados sobre essas personas para desenvolver experiências que se alinhem às suas necessidades. Todas as atividades executadas são concebidas por profissionais, visando atender às expectativas e demandas das pessoas.
			</p>
			
			
			
				
				<v-row class="mt-4">
				<v-col cols="12" md="6">
					<v-card min-height="270px" class="px-16 py-8" align="center">
						<p style="font-size:1.1em; color:#20819E" class="mt-4">
							Temos colaboradores de várias gerações, que nasceram em diferentes épocas.
						</p>
						<v-img width="80%" class="mx-auto mt-4" src="./img/tela_corporativo/cont8_img2.png" />
					</v-card>
				</v-col>
				<v-col cols="12" md="6">
					<v-card min-height="270px" class="px-16 py-8" align="center">
						<p style="font-size:1.1em; color:#20819E" class="mt-4">
							Essas gerações, as quais chamamos de "personas" que são nosso publico-alvo, são estudadas para desenvolvermos experiências que irão ao encontro das necessidades.
						</p>
						<p style="font-size:1.1em; color:#20819E" class="mt-4">
							Tudo que é realizado, é feito por pessoas para pessoas!
						</p>
					</v-card>
				</v-col>
			</v-row>

			
			

			
			
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
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent09Visible = true; prosseguir('content09')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 08 -->

	<!-- conteúdo 09 -->
	<v-card 
	v-show="isContent09Visible"
	id="content09" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont9" 
	style="z-index:11;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-row class="mt-8">
			<v-col cols="12" md="5">
				<h2 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_branco">
					“Diga-me e esquecerei. Ensina-me e lembrarei. Envolva-me e aprenderei.”
				</h2>
				<p style="font-size:1.3em;line-height:1.3em;text-align:right" class="mt-4 texto_branco  reveal fade-left">
					Benjamin Franklin 
				</p>
				<p style="font-size:1.3em;line-height:1.3em;text-align:left" class="mt-10 texto_branco  reveal fade-left">
					E aí, essa citação fez sentido para você?
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent13Visible = true; prosseguir('content13')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 09 -->

<!-- conteúdo 13 -->
	<v-card 
	v-show="isContent13Visible"
	id="content13" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont13" 
	style="z-index:10;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-row class="mt-0">
			<v-col cols="12" md="5">
				<p style="font-size:1.4em" class="texto_branco">
					Até aqui, nós abordamos, em linhas gerais, um pouco sobre o nosso pilar Ensino e Educação e compartilhamos com você de que forma atuamos para cumprir nossa missão de gerar e disseminar conhecimento.
				</p>
				<p style="font-size:1.4em" class="texto_branco mt-4">
					Vamos apresentar, agora, nossas Trilhas de Aprendizagem, que são caminhos alternativos e flexíveis para promover o desenvolvimento das pessoas. 
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent15Visible = true; prosseguir('content15')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 13 -->




<!-- conteúdo 15 -->
	<v-card 
	v-show="isContent15Visible"
	id="content15" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont15" 
	style="z-index:9;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
			
			<v-row class="mt-8">
			<v-col cols="12" md="6">
				<h2 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_branco">
					Objetivo das Trilhas de Aprendizagem Einstein
				</h2>
				<p style="font-size:1.3em;line-height:1.3em" class="mt-4 texto_branco reveal fade-left">
					O objetivo das trilhas é apoiar o compromisso da Sociedade com a geração do conhecimento e o desenvolvimento de habilidades de seus colaboradores, alinhados ao propósito, visão, missão, valores e objetivos estratégicos. 
				</p>
				<p style="font-size:1.3em;line-height:1.3em" class="mt-4 texto_branco reveal fade-left">
					Vamos conhecê-las?
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent14Visible = true; prosseguir('content14')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 15 -->

<!-- conteúdo 14 -->
	<v-card 
	v-show="isContent14Visible"
	id="content14" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:8;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0" align="center">

			<h1 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_azul">
				Trilhas de Aprendizagem Einstein
			</h1>

		</v-card-text>
		
		<v-row class="mt-0">
			<v-col cols="12" md="12">
				<p style="" class="">
					Iniciamos o programa de trilhas em 2015, para inovar e flexibilizar o formato de nossas capacitações e treinamentos.
				</p>
				<p style="" class="mt-4">
					As Trilhas de Aprendizagem são desenvolvidas todos os anos, com base nas competências mapeadas pela área de RH para cada cargo e constituem o principal meio de desenvolvimento institucional, sendo complementares a outras formas de aprendizagem, como treinamentos presenciais, mentorias, experiências práticas e eventos. 
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="center">
				<v-img width="80%" class="mx-auto" src="./img/tela_corporativo/cont14_logo.png" />
			</v-col>
			<v-col cols="12" md="8" align-self="center">
				<v-img class="mx-auto" src="./img/tela_corporativo/cont14_img.png" />
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent21Visible = true; prosseguir('content21')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 14 -->

<!-- conteúdo 21 -->
	<v-card 
	v-show="isContent21Visible"
	id="content21" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:7;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0" align="center">

			<h1 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_branco">
				Competências desenvolvidas nas Trilhas de Aprendizagem 
			</h1>
			<p class="reveal fade-left texto_branco">
				Além das competências relativas a cada conteúdo, as Trilhas de Aprendizagem têm como objetivo desenvolver competências específicas para o aprimoramento pessoal e profissional dos colaboradores.
			</p>

		</v-card-text>
		
		<v-row class="mt-0">
			<v-col cols="12" md="4">
				<v-card min-height="180px" class="ma-2 pa-6" align="center">
					<v-img width="30%" class="mx-auto" src="./img/tela_corporativo/cont21_ico1.svg" />
					<p style="font-size:0.9em" class="mt-4">
						FOCO NO PACIENTE
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card min-height="180px" class="ma-2 pa-6" align="center">
					<v-img width="30%" class="mx-auto" src="./img/tela_corporativo/cont21_ico2.svg" />
					<p style="font-size:0.9em" class="mt-4">
						FOCO NA SEGURANÇA
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card min-height="180px" class="ma-2 pa-6" align="center">
					<v-img width="30%" class="mx-auto" src="./img/tela_corporativo/cont21_ico3.svg" />
					<p style="font-size:0.9em" class="mt-4">
						PLANEJAMENTO E EXCELÊNCIA PROFISSIONAL
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="2">
				
			</v-col>
			<v-col cols="12" md="4">
				<v-card min-height="180px" class="ma-2 pa-6" align="center">
					<v-img width="30%" class="mx-auto" src="./img/tela_corporativo/cont21_ico4.svg" />
					<p style="font-size:0.9em" class="mt-4">
						TRABALHO EM EQUIPE
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="4">
				<v-card min-height="180px" class="ma-2 py-6 px-4" align="center">
					<v-img width="30%" class="mx-auto" src="./img/tela_corporativo/cont21_ico5.svg" />
					<p style="font-size:0.9em" class="mt-4">
						RELACIONAMENTO INTERPESSOAL
					</p>
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent16Visible = true; prosseguir('content16')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 21 -->



<!-- conteúdo 16 -->
	<v-card 
	v-show="isContent16Visible"
	id="content16" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:6;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header_branco.png" />
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p style="font-size:1.3em;text-transform: uppercase;" class="mt-4 texto_branco">
						<strong>Trilha Institucional</strong>
					</p>
				

				</v-card-text>
			</v-col>
			<v-col cols="12" md="4" align-self="center">
				<v-card class="box_dicas pl-0 pr-0 mt-n8 reveal fade-right mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos itens abaixo.  
				</v-card-text>
			</v-card>
			</v-col>
		</v-row>
		<v-container class="pl-0 pr-0 reveal fade-in">
		
			<v-expansion-panels >
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">OBJETIVOS</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				
				<p>
					Propagar a cultura e os saberes fundamentais da Sociedade, de forma a proporcionar aos colaboradores conhecimentos sobre aspectos da organização alinhados aos objetivos estratégicos, além de fomentar a aprendizagem na instituição. A trilha é disponibilizada anualmente a todos os colaboradores.
				</p>
				<p class="mt-4">
					Eixos abordados:
				</p>
				<ul class="ml-8 mt-4">
					<li>Princípios e Valores.</li>
					<li>Cultura de Segurança.</li>
					<li>Experiência do Paciente e do Colaborador.</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">PARA QUAL PÚBLICO SE DESTINA</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p class="mt-4">
					<strong>INSTITUCIONAL – NOVO COLABORADOR</strong>
				</p>
				<p class="mt-4">
					<strong>Público:</strong> Novos colaboradores.
				</p>
				<p class="mt-0">
					<strong>Conteúdo:</strong> A trilha deve ser formatada com conteúdos que abordem aspectos culturais fundamentais para a Sociedade, nivelando conhecimentos e orientando a conduta.
				</p>
				<p class="mt-0">
					<strong>Periodicidade:</strong> É realizada uma única vez, no início da jornada do colaborador no Einstein.
				</p>
				<p class="mt-4">
					<strong>INSTITUCIONAL – NÍVEL TÉCNICO (n1) E SUPERIOR (n2)</strong>
				</p>
				<p class="mt-4">
					<strong>Público:</strong> Colaboradores que atuam na Sociedade há mais de 1 ano.
				</p>
				<p class="mt-0">
					<strong>Conteúdo:</strong> Os conteúdos e objetos apresentados serão de acordo com o perfil de aprendizagem do colaborador, dividindo-se em colaboradores de nível técnico e colaboradores de nível superior.
				</p>
				<p class="mt-0">
					<strong>Periodicidade:</strong> É realizada anualmente por todos os colaboradores efetivos da Instituição.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">ACESSIBILIDADE</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
					Todos os conteúdos da Trilha Institucional são 100% acessíveis para pessoas com deficiência visual e auditiva.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">REMUNERAÇÃO VARIÁVEL – META DE TREINAMENTO</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
					Como forma de reconhecimento aos colaboradores que buscam o seu desenvolvimento e capacitação, a conclusão e aprovação nas Trilhas de Aprendizagem Institucional compõem uma das metas referentes ao Programa de Remuneração Variável.
				</p>
				
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
			

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

<!-- conteúdo 16 -->




<!-- conteúdo 17 -->
	<v-card 
	v-show="isContent17Visible"
	id="content17" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont17" 
	style="z-index:5;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header_branco.png" />
		
			
			<v-row class="mt-8">
			<v-col cols="12" md="5">
				<h2 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_branco">
					“Conheça todas as teorias, domine todas as técnicas, mas, ao tocar uma alma humana, seja apenas outra alma humana.”
				</h2>
				<p style="font-size:1.3em;line-height:1.3em;text-align:right" class="mt-4 texto_branco">
					Carl G. Jung 
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent18Visible = true; prosseguir('content18')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 17 -->


<!-- conteúdo 18 -->
	<v-card 
	v-show="isContent18Visible"
	id="content18" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:4;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_cont4.png" />

		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p style="font-size:1.3em;text-transform: uppercase;" class="mt-4 texto_branco">
						<strong>Trilhas Profissionais</strong>
					</p>
				

				</v-card-text>
			</v-col>
			<v-col cols="12" md="4" align-self="center">
				<v-card class="box_dicas pl-0 pr-0 mt-n8 reveal fade-right mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos itens abaixo.  
				</v-card-text>
			</v-card>
			</v-col>
		</v-row>
		<v-container class="pl-0 pr-0 reveal fade-in">
		
			<v-expansion-panels >
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">OBJETIVOS</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				
				<p>
					O <strong>objetivo</strong> dessas trilhas é atualizar e fornecer conhecimento aos profissionais de <strong>ENFERMAGEM e EQUIPE MULTIPROFISSIONAL</strong> (nutricionistas, fisioterapeutas etc.) sobre protocolos, políticas e procedimentos, para garantir o desempenho das competências e atuação de excelência no atendimento do paciente.
				</p>
				
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <span style="text-transform:uppercase">conteúdos</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p class="mt-4">
					Os conteúdos são desenvolvidos conforme as competências do cargo: Aux., Téc., Jr., Pl., Sr.
				</p>
				<v-row class="mt-8">
			<v-col class="" cols="12" md="7">
				<v-img class="mx-auto" src="./img/tela_corporativo/cont18_info1.svg" />
			</v-col>
			<v-col cols="12" md="5" >
				<v-img class="mx-auto mt-0" src="./img/tela_corporativo/cont18_info2.svg" />
			</v-col>
		</v-row>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
		
		
		
		
		
		

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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent23Visible = true; prosseguir('content23')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 19 -->



<!-- conteúdo 23 -->
	<v-card 
	v-show="isContent23Visible"
	id="content23" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:2;"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0" align="center">

			<h2 style= "font-size:1.5em!important" class="mt-n10 font-weight-bold text-primary reveal fade-left texto_azul">
				A área de Ensino Corporativo oferece aos colaboradores outros treinamentos e capacitações, além  das Trilhas de Aprendizagem. Acompanhe:
			</h2>

		</v-card-text>
		
		
		<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-right" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas abas abaixo para saber mais.  
				</v-card-text>
			</v-card>
	
	<v-card class="mb-10 mt-8 show_mobile">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  direction="vertical"
		  grow
		>
		  <v-tab value="one"><span style="color:#202428;">NR</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">ATENDIMENTO</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">BRIGADA DE INCÊNDIO</span></v-tab>
		  <v-tab value="four"><span style="color:#202428;">HEARTSAVER PRIMEIROS SOCORROS</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <p>
							A área de Ensino Corporativo oferece aos colaboradores outros treinamentos e capacitações, além  das Trilhas de Aprendizagem. Acompanhe.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Capacitar ou reciclar os colaboradores que atuam em determinados cargos ou atividades sobre os procedimentos de trabalho relacionados à saúde e segurança do colaborador.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento de caráter obrigatório, de acordo com o cargo de atuação.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O treinamento será disponibilizado de acordo com o cargo de atuação, no PGP.
						</p>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
					<p>
							Programa de Atendimento destinado ao público de atendimento e apoio assistencial, sendo dividido em dois momentos:
						</p>
						<p class="mt-4">
							<strong>1) Admissional de atendimento:</strong> Realizado no primeiro dia de admissão do colaborador, com carga horária de 3 horas.
						</p>
						<p class="mt-4">
							<strong>2) Trilha de Atendimento:</strong> Realizada após o colaborador participar do Admissional. Possui conteúdo interativo, realizado via PGP, com duração de 40 minutos. Ao finalizar, o colaborador poderá se inscrever nos encontros ao vivo <em>online</em>, com duração de 2 horas.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Apresentar e fortalecer o Modelo de Atendimento Einstein, desenvolvendo as competências comportamentais e promovendo a troca de experiências entre os colaboradores.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento realizado via Zoom. Atende a certificação Planetree, além de fortalecer o Modelo de Atendimento e reforçar os pilares da alta confiabilidade.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O colaborador público-alvo do Admissional de Atendimento receberá um <em>e-mail</em>  e WhatsApp de convocação, contendo data, horário e <em>link</em> do Zoom para participação. Para a Trilha de Atendimento, o treinamento será liberado via PGP.
						</p>	

			</v-window-item>

			<v-window-item value="three" class="pa-8">
						<p>
							A Formação e a Requalificação de brigadistas são indicadas aos colaboradores que atuam em unidades elegíveis, determinadas previamente pela equipe de PCI bombeiros.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> O treinamento ocorre em parceria com consultoria externa em formato presencial em duas modalidades:
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Promover a capacitação dos colaboradores para atuar em situações de emergência como, por exemplo, prevenção e combate de incêndios, prestação de primeiros socorros e evacuação de ambientes.
						</p>
						
						<ul class="ml-8 mt-4">
							<li><strong>Formação:</strong> realizada apenas uma vez na jornada do colaborador na Instituição, em campo externo, com duração de 8 horas;</li>
							<li><strong>Requalificação:</strong> realizada anualmente após a conclusão da formação, tem duração de 4 horas, ocorre nas unidades Einstein.</li>
						</ul>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
						</p>
			</v-window-item>
			<v-window-item value="four">
			
				<p>
					Treinamento para profissionais não assistenciais para agir de forma adequada em situações de emergência.		
				</p>
				<p class="mt-4">
					<strong>Objetivo:</strong> Fornecer conhecimentos básicos e habilidades práticas para que os participantes possam reconhecer e responder de forma eficaz a uma variedade de situações de emergência e realizar os primeiros socorros.
				</p>
				<p class="mt-4">
					<strong>Informações importantes:</strong> O treinamento é destinado aos colaboradores que atuam em determinados cargos/áreas de acordo com a política da Instituição. Possui 8 horas de duração e deve ser realizado a cada 2 anos.
				</p>
				<p class="mt-4">
					<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
				</p>
			</v-window-item>
		  </v-window>
		</v-card-text>
	  </v-card>
	  
	  <v-card class="mb-10 mt-8 show_desktop">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		>
		  <v-tab value="one"><span style="color:#202428;">NR</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">ATENDIMENTO</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">BRIGADA DE INCÊNDIO</span></v-tab>
		  <v-tab value="four"><span style="color:#202428;">HEARTSAVER PRIMEIROS SOCORROS</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <p>
							A área de Ensino Corporativo oferece aos colaboradores outros treinamentos e capacitações, além  das Trilhas de Aprendizagem. Acompanhe.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Capacitar ou reciclar os colaboradores que atuam em determinados cargos ou atividades sobre os procedimentos de trabalho relacionados à saúde e segurança do colaborador.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento de caráter obrigatório, de acordo com o cargo de atuação.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O treinamento será disponibilizado de acordo com o cargo de atuação, no PGP.
						</p>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
					<p>
							Programa de Atendimento destinado ao público de Atendimento e apoio assistencial, sendo dividido em dois momentos:
						</p>
						<p class="mt-4">
							<strong>1) Admissional de atendimento:</strong> Realizado no primeiro dia de admissão do colaborador, com carga horária de 3hs.
						</p>
						<p class="mt-4">
							<strong>2) Trilha de Atendimento:</strong> Realizado após o colaborador participar do Admissional. Possui conteúdo interativo, realizado via PGP, com duração de 40 minutos. Ao finalizar, o colaborador poderá se inscrever nos encontros ao vivo-online, com duração de 2 horas.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Apresentar e fortalecer o Modelo de Atendimento Einstein, desenvolvendo as competências comportamentais e promovendo a troca de experiências entre os colaboradores.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento realizado via Zoom. Atende a certificação Planetree, além de fortalecer o Modelo de Atendimento e reforçar os pilares da alta confiabilidade.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O colaborador público-alvo do Admissional de Atendimento receberá um e-mail  e WhatsApp de convocação, contendo data, horário e link do Zoom para participação. Para a trilha de Atendimento, o treinamento será liberado via PGP.
						</p>	

			</v-window-item>

			<v-window-item value="three" class="pa-8">
						<p>
							A Formação e Requalificação de brigadistas são indicadas aos colaboradores que atuam em unidades elegíveis, determinadas previamente pela equipe de PCI bombeiros.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> O treinamento ocorre em parceria com consultoria externa em formato presencial em duas modalidades:
						</p>
						<p class="mt-4">
							Objetivo: Promover a capacitação dos colaboradores para atuar em situações de emergência como, por exemplo, prevenção e combate de incêndios, prestação de primeiros socorros e evacuação de ambientes.
						</p>
						
						<ul class="ml-8 mt-4">
							<li><strong>Formação:</strong> realizada apenas uma vez na jornada do colaborador na Instituição, em campo externo, com duração de 8h;</li>
							<li><strong>Requalificação:</strong> realizada anualmente após a conclusão da formação, tem duração de 4h, ocorre nas unidades Einstein.</li>
						</ul>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
						</p>
			</v-window-item>
			<v-window-item value="four">
			
				<p>
					Treinamento para profissionais não assistenciais  para agir de forma adequada em situações de emergência.		
				</p>
				<p class="mt-4">
					<strong>Objetivo:</strong> Fornecer conhecimentos básicos e habilidades práticas para que os participantes possam reconhecer e responder de forma eficaz a uma variedade de situações de emergência e realizar os primeiros socorros.
				</p>
				<p class="mt-4">
					<strong>Informações importantes:</strong> O treinamento é destinado aos colaboradores que atuam em determinados cargos /áreas de acordo com a politica da Instituição. Possui 8 horas de duração e deve ser realizado a cada 2 anos.
				</p>
				<p class="mt-4">
					<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
				</p>
			</v-window-item>
		  </v-window>
		</v-card-text>
	  </v-card>
	  
	   <v-card class="mb-10 mt-8 show_1277">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		>
		  <v-tab value="one"><span style="color:#202428;">NR</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">ATENDIMENTO</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">BRIGADA DE INCÊNDIO</span></v-tab>
		  <v-tab value="four"><span style="color:#202428;">HEARTSAVER PRIMEIROS SOCORROS</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <p>
							A área de Ensino Corporativo oferece aos colaboradores outros treinamentos e capacitações, além  das Trilhas de Aprendizagem. Acompanhe.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Capacitar ou reciclar os colaboradores que atuam em determinados cargos ou atividades sobre os procedimentos de trabalho relacionados à saúde e segurança do colaborador.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento de caráter obrigatório, de acordo com o cargo de atuação.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O treinamento será disponibilizado de acordo com o cargo de atuação, no PGP.
						</p>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
					<p>
							Programa de Atendimento destinado ao público de Atendimento e apoio assistencial, sendo dividido em dois momentos:
						</p>
						<p class="mt-4">
							<strong>1) Admissional de atendimento:</strong> Realizado no primeiro dia de admissão do colaborador, com carga horária de 3hs.
						</p>
						<p class="mt-4">
							<strong>2) Trilha de Atendimento:</strong> Realizado após o colaborador participar do Admissional. Possui conteúdo interativo, realizado via PGP, com duração de 40 minutos. Ao finalizar, o colaborador poderá se inscrever nos encontros ao vivo-online, com duração de 2 horas.
						</p>
						<p class="mt-4">
							<strong>Objetivo:</strong> Apresentar e fortalecer o Modelo de Atendimento Einstein, desenvolvendo as competências comportamentais e promovendo a troca de experiências entre os colaboradores.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> Treinamento realizado via Zoom. Atende a certificação Planetree, além de fortalecer o Modelo de Atendimento e reforçar os pilares da alta confiabilidade.
						</p>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> O colaborador público-alvo do Admissional de Atendimento receberá um e-mail  e WhatsApp de convocação, contendo data, horário e link do Zoom para participação. Para a trilha de Atendimento, o treinamento será liberado via PGP.
						</p>	

			</v-window-item>

			<v-window-item value="three" class="pa-8">
						<p>
							A Formação e Requalificação de brigadistas são indicadas aos colaboradores que atuam em unidades elegíveis, determinadas previamente pela equipe de PCI bombeiros.
						</p>
						<p class="mt-4">
							<strong>Informações importantes:</strong> O treinamento ocorre em parceria com consultoria externa em formato presencial em duas modalidades:
						</p>
						<p class="mt-4">
							Objetivo: Promover a capacitação dos colaboradores para atuar em situações de emergência como, por exemplo, prevenção e combate de incêndios, prestação de primeiros socorros e evacuação de ambientes.
						</p>
						
						<ul class="ml-8 mt-4">
							<li><strong>Formação:</strong> realizada apenas uma vez na jornada do colaborador na Instituição, em campo externo, com duração de 8h;</li>
							<li><strong>Requalificação:</strong> realizada anualmente após a conclusão da formação, tem duração de 4h, ocorre nas unidades Einstein.</li>
						</ul>
						<p class="mt-4">
							<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
						</p>
			</v-window-item>
			<v-window-item value="four">
			
				<p>
					Treinamento para profissionais não assistenciais  para agir de forma adequada em situações de emergência.		
				</p>
				<p class="mt-4">
					<strong>Objetivo:</strong> Fornecer conhecimentos básicos e habilidades práticas para que os participantes possam reconhecer e responder de forma eficaz a uma variedade de situações de emergência e realizar os primeiros socorros.
				</p>
				<p class="mt-4">
					<strong>Informações importantes:</strong> O treinamento é destinado aos colaboradores que atuam em determinados cargos /áreas de acordo com a politica da Instituição. Possui 8 horas de duração e deve ser realizado a cada 2 anos.
				</p>
				<p class="mt-4">
					<strong>Onde encontrar:</strong> As turmas são disponibilizadas no PGP.
				</p>
			</v-window-item>
		  </v-window>
		</v-card-text>
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent12Visible = true; prosseguir('content12')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

</v-card>

<!-- conteúdo 23 -->

<!-- conteúdo 12 -->
	<v-card 
	v-show="isContent12Visible"
	id="content12" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:1;"
	>
			<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header.png" />
		<h2 class="mt-n4 font-weight-bold texto_azul reveal fade-left">
			Nossas Capacitações Institucionais
		</h2>
		<p class="mt-4 reveal fade-left">
				Essas são algumas fotos de nossas capacitações.
			</p>
		
		<v-row class="mt-4">
			<v-col cols="12" md="7">
			</v-col>
		<v-col cols="12" md="5">
		<v-card width="100%" class="box_dicas pl-0 pr-0 reveal fade-left">
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
			:color="carousel02 == 0 ? 'white' : 'primary'"
			:variant="carousel02 == 0 ? 'text' : 'flat'"
			:disabled="carousel02 == 0"
			@click="carousel02 --"
			/>

			<!-- Btn next (14 slides) -->
			<v-btn
			icon="mdi-chevron-right"
			class="btn-right"
			:color="carousel02 == 13 ? 'white' : 'primary'"
			:variant=" carousel02 == 13 ? 'text' : 'flat'" 
			:disabled="carousel02 == 13"
			@click="carousel02 ++"
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
				v-model="carousel02"
				:show-arrows="false"
				hide-delimiter-background 
				:hide-delimiters="appStore.isMobile"
				color="primary" 
				:continuous="false"
				:progress=" appStore.isMobile ? 'primary' : false"
				>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide1.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Treinamento Admissional de Atendimento
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide2.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Trilha de Ciência de Dados
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide3.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Trilha de Atendimento – Autoconhecimento e Empatia
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide4.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Trilha de Atendimento – Comunicação e Gestão de Conflitos 

								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">

							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide5.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Treinamento de Habilidades Práticas - HeartSaver
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide6.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Programa Multiplicador Einstein
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide7.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Programa Gestão de Continuidade de Atividades
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide8.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Segurança do Colaborador - Brigada de Incêndio – Formação de Brigadista
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide9.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Brigada de Incêndio – Requalificação de Brigadista
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide10.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									NR33 – Segurança e Saúde nos espaços confinados Vigias e Supervisores - Reciclagem

								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide11.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Trilha de Aprendizagem Institucional – Encontro com Especialistas Einstein
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide12.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Trilha Institucional – Novos Colaboradores
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide13.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Treinamento Assistencial - Prática Monitorada – Sondagem Nasoentérica
								</h2>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="white" width="100%" height="100%" class="d-flex justify-end px-8 py-16">
						<v-row justify="center" align="center">
							<v-col cols="12" md="5">
								<v-img src="./img/tela_corporativo/cont12_slide14.jpg" />
							</v-col>
							<v-col class="pa-8" cols="12" md="7">
								<h2 class="texto_azul">
									Workshop Capacitações Ágil – ATO Liga Ágil
								</h2>
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
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent26Visible = true; prosseguir('content26')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 12 -->

<!-- conteúdo 26 -->
	<v-card 
	v-show="isContent26Visible"
	id="content26" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:0; margin-bottom:30px;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_corporativo/grade_header_branco.png" />

			<v-row align="center" class="mx-auto mb-16">
				<v-col cols="12" md="7">

				</v-col>
				<v-col cols="12" md="5">
					<p style="font-size:1.2em;font-weight:500" class="mt-4 mb-4 reveal fade-left texto_branco">
						Seja aprendendo individualmente, em duplas, em pequenos ou grandes grupos, presencialmente ou a distância, o que realmente importa para nós do Einstein é o seu crescimento pessoal e profissional.
					</p>
					<p style="font-size:1.2em;font-weight:500" class="mt-4 mb-4 reveal fade-left texto_branco">
						A área de Ensino Corporativo está pronta para lhe dar todo apoio que for necessário, porque VOCÊ, NOSSO COLABORADOR, FAZ DIFERENÇA PARA NÓS!
					</p>
				</v-col>
			</v-row>

	</v-card>

<!-- conteúdo 26 -->






<!-- conteúdo 20 OCULTA PELA ALTERA~ÇÃO -->

<v-card 
	v-show="isContent20Visible"
	id="content20" 
	width="100%" 
	elevation="0"
	class="bg-transparent mt-n4 mx-auto rounded-lg pt-0" 
	style="z-index:8;"
	>
		<v-img width="100%" class="mx-auto" src="./img/tela_corporativo/cont20_grade.png" />

	<div class="notebook">
		<img class="notebook_img" src="./img/tela_corporativo/notebook.png" />	
	</div>

<v-card 
	v-show="isContent20Visible"
	width="100%" 
	elevation="6"
	class="rounded-lg pl-16 pr-16 v-card-conteudos_cont20" 
	style="z-index:7;"
	>
		
		<v-row class="mt-0">
			<v-col cols="12" md="5">
				<p style="text-transform:uppercase;font-size:1.5em" class="texto_branco">
					Os temas das trilhas são essenciais para o atendimento com qualidade e segurança.
				</p>
				<p style="" class="mt-4 texto_branco">
					Você pode conhecer os temas de cada trilha e obter mais informações acessando, a qualquer momento, o Workplace.   
 				</p>
			</v-col>
			<v-col cols="12" md="8" align-self="center">
				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				href="https://sbibae.workplace.com/groups/206612450124381/?ref=share" target="_blank"
				> 
					<span style="font-size:1.2em" class="mr-1 mdi mdi-monitor-dashboard"></span> ACESSAR WOKPLACE
				</v-btn>
			</v-col>
		</v-row>

	<!--Btn final-->
		<v-container class="d-flex justify-center mb-4 mt-16">
			<v-sheet 
			color="transparent"
			class="mb-4 mt-16"
			width = "auto"
			>
				<v-img
				width="40"
				height="60"
				src="../GlobalStyles/img/gota-icon.svg"
				class=" mt-0 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent23Visible = true; prosseguir('content23')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

</v-card>
<!-- conteúdo 20 -->






<!-- conteúdo 23 

<v-card 
	v-show="isContent23Visible"
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 bg-transparent" 
	style="z-index:3;"
	align="center"
	>
			<h2 class="mt-16 mx-auto font-weight-bold texto_branco reveal fade-left">
				Você imagina quantas pessoas impactamos no último ano?<br>
			</h2>
			<h2 class="mt-2 mx-auto font-weight-bold texto_branco reveal fade-left">
				Então, dá uma olhada nos nossos resultados.
			</h2>
		<v-img class="mx-auto grade_header" src="./img/tela_corporativo/cont24_grade.png" />
</v-card>

	<v-card 
	v-show="isContent23Visible"
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto rounded-lg pt-0 bg-transparent" 
	style="z-index:3;"
	>
	
		<v-img class="mx-auto " src="./img/tela_corporativo/cont24_img.png" />

	</v-card>

	<v-card 
	v-show="isContent23Visible"
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:2;"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_corporativo/grade_cont4.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0" align="center">

			<h1 class="mt-n10 font-weight-bold text-primary reveal fade-left texto_azul">
				Nossos Resultados
			</h1>

		</v-card-text>
		
		<v-row class="mt-0">
			<v-col cols="12" md="3" align-self="center">
				<v-card min-height="300" style="background-color:#ffffff;border:solid #62C9CE; border-radius:30px;" class="pa-4 d-flex flex-column justify-center align-center">
					<p style="font-size:3em;color:#62C9CE" class="">
						<strong>17.369</strong>
					</p>
					<p style="font-size:1.2em;color:#62C9CE" class="">
						<strong>Treinamentos</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="3" align-self="center">
				<v-card min-height="300" style="background-color:#ffffff;border:solid #81C300; border-radius:30px;" class="pa-4 d-flex flex-column justify-center align-center">
					<p style="font-size:3em;color:#81C300" class="">
						<strong>21.639</strong>
					</p>
					<p style="font-size:1.2em;color:#81C300" class="">
						<strong>Participações</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="3" align-self="center">
				<v-card min-height="300" style="background-color:#ffffff;border:solid #7D5CB5; border-radius:30px;" class="pa-4 d-flex flex-column justify-center align-center">
					<p style="font-size:3em;color:#7D5CB5;text-align:center;line-height:normal" class="">
						<strong>+ de 71.063</strong>
					</p>
					<p style="font-size:1.2em;color:#7D5CB5;text-align:center" class="">
						<strong>Horas de treinamentos</strong>
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="3" align-self="center">
				<v-card min-height="300" style="background-color:#ffffff;border:solid #00A4E1; border-radius:30px;" class="pa-4 d-flex flex-column justify-center align-center">
					<p style="font-size:3em;color:#00A4E1" class="">
						<strong>98%</strong>
					</p>
					<p style="font-size:1.2em;color:#00A4E1;text-align:center" class="">
						<strong>Índice de Satisfação dos nossos treinamentos</strong>
					</p>
				</v-card>
			</v-col>
		</v-row>
		
		

	
	</v-card>

 conteúdo 23 -->





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
	import { useAnim, useScrollMonitor } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content26')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)
	const isContent05Visible = ref(false)
	const isContent06Visible = ref(false)
	const isContent07Visible = ref(false)
	const isContent08Visible = ref(false)
	const isContent09Visible = ref(false)
	const isContent10Visible = ref(false)
	const isContent11Visible = ref(false)
	const isContent12Visible = ref(false)
	const isContent13Visible = ref(false)
	const isContent14Visible = ref(false)
	const isContent15Visible = ref(false)
	const isContent16Visible = ref(false)
	const isContent17Visible = ref(false)
	const isContent18Visible = ref(false)
	const isContent19Visible = ref(false)
	const isContent20Visible = ref(false)
	const isContent21Visible = ref(false)
	const isContent22Visible = ref(false)
	const isContent23Visible = ref(false)
	const isContent24Visible = ref(false)
	const isContent25Visible = ref(false)
	const isContent26Visible = ref(false)
	const modal_corporativo = ref(false)
	
		//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)
	const isCard03Visible = ref(false)


//Informa se a tela já foi concluida
const isAllContentFinished = ref(false)

//Controla os slides do carousel01
const carousel01 = ref(0)
const carousel02 = ref(0)

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
	background-image: url("./img/tela_corporativo/card_fundo.png");
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
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/fundo_cont3.jpg");
	background-size: cover;
}
.v-card-conteudos_cont1 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/fundo_cont1.jpg");
	background-size: cover;
}
.v-card-conteudos_cont5 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont5_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont6 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont6_fundo.jpg");
	background-size: cover;
}
.v-card-conteudos_cont7 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont7_fundo.jpg");
	background-size: cover;
	background-position: right;
}
.v-card-conteudos_cont9 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont9_fundo.jpg");
	background-size: cover;
}
.v-card-conteudos_cont10 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont10_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont13 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont13_fundo.jpg");
	background-size: cover;
}
.v-card-conteudos_cont15 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont15_fundo.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	
}
.v-card-conteudos_cont16 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont16_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont17{
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont17_fundo.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
.v-card-conteudos_cont19{
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont19_fundo.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	
}
.v-card-conteudos_cont20{
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont20_fundo.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 50px!important;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont26_fundo.jpg");
	background-size: cover;
}
.cont6_box {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_corporativo/cont6_box_fundo.png");
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
.notebook{
    position: absolute;
    top: 12px;
    right: 0;
    z-index: 29;
}
.notebook_img{
width:800px;
}
.ico_1{
z-index:100;
position:relative;
top:26px;
left:43%;
}
.ico_2{
z-index:100;
position:relative;
top:26px;
left:43%;
}
.ico_3{
z-index:100;
position:relative;
top:26px;
left:43%;
}
.ico_4{
z-index:100;
position:relative;
top:26px;
left:43%;
}
.ico_5{
z-index:100;
position:relative;
top:26px;
left:33%;
}
.ico_6{
z-index:100;
position:relative;
top:26px;
left:43%;
}
.ico_7{
z-index:100;
position:relative;
top:26px;
left:33%;
}

@media screen and (max-width: 1277px){
.notebook{
    position: absolute;
    top: 12px;
    right: 0;
    z-index: 29;
}
.notebook_img{
width:600px;
}
.ico_1{
top:26px;
left:40%;
}
.ico_2{
top:26px;
left:40%;
}
.ico_3{
top:26px;
left:40%;
}
.ico_4{
top:26px;
left:40%;
}
.ico_5{
top:26px;
left:28%;
}
.ico_6{
top:26px;
left:40%;
}
.ico_7{
top:26px;
left:28%;
}
}
@media screen and (max-width: 950px){
.ico_1{
top:26px;
left:48%;
}
.ico_2{
top:26px;
left:48%;
}
.ico_3{
top:26px;
left:48%;
}
.ico_4{
top:26px;
left:48%;
}
.ico_5{
top:26px;
left:48%;
}
.ico_6{
top:26px;
left:48%;
}
.ico_7{
top:26px;
left:48%;
}
.icone_cont2{
width:40%;
}
.notebook{
    position: absolute;
    top: 12px;
    right: 0;
    z-index: 29;
}
.notebook_img{
width:500px;
}
.v-card-conteudos_cont20{
	padding-top: 300px!important;
}
}
@media screen and (max-width: 768px){
.notebook{
    position: absolute;
    top: 12px;
    right: 0;
    z-index: 29;
}
.notebook_img{
width:300px;
}
.v-card-conteudos_cont20{
	padding-top: 200px!important;
}
.icone_cont2{
width:50%;
}
.ico_1{
top:26px;
left:45%;
}
.ico_2{
top:26px;
left:45%;
}
.ico_3{
top:26px;
left:45%;
}
.ico_4{
top:26px;
left:45%;
}
.ico_5{
top:26px;
left:45%;
}
.ico_6{
top:26px;
left:45%;
}
.ico_7{
top:26px;
left:45%;
}
}
</style>