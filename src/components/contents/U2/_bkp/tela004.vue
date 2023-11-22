<template>

	<!-- header oportunidades-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_oportunidades/header.png" />
		<v-img class="show_mobile" src="./img/tela_oportunidades/header_mob.png" />
		<v-img src="./img/tela_oportunidades/header_text.svg" class="header_text"
			title="Oportunidade de Carreira" />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:9;background-color:#fff!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header.png" />
		<v-card-text class="pt-10 pl-0 pr-0">

			<h1 class="mt-n10 font-weight-bold texto_azul my-6  reveal fade-left">
				Você sabe o que é carreira profissional?
			</h1>
		</v-card-text>
		
		<v-row no-gutters class="mx-auto mt-n10">
			<v-col cols="12" md="6">
				<v-card-text class="pl-0 pr-0">
				
				<h2 class="font-weight-bold my-6 reveal fade-left">
				Carreira é a <span style="color:#C70777;">trajetória</span> que você percorre durante sua vida profissional.
			</h2>
			<p class="reveal fade-left">
				Engloba cargos e empresas em que você trabalhou, os conhecimentos que acumulou e as competências e habilidades que foi desenvolvendo para crescer profissionalmente.
			</p>

					
				</v-card-text>
			</v-col>
			<v-col cols="12" md="6">
				<v-img class=" reveal fade-right" src="./img/tela_oportunidades/cont1_img.svg" />
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
	style="z-index:8;background-color:#C4E8E1!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header_branco.png" />
		
		<v-card-text class="mt-n10 reveal fade-bottom" style="text-align:center">
			<h1 class="font-weight-bold texto_azul my-6">
				Recrutamento, Seleção e Diversidade
			</h1>
		</v-card-text>
		
		<v-container class="mt-n10">
			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="1">
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-left texto_preto">
						<p style="text-align:right">
							No Einstein, tudo começa quando a <strong>Área de Atração, Seleção & Diversidade</strong> divulga as oportunidades internas ou a busca de recursos externos para atender às necessidades de contratação da Sociedade.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_oportunidades/rol1_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol1_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol1_folha.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol2_folha.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol2_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							Para isso, são utilizadas metodologias e ferramentas de captação de candidatos com o objetivo de identificar profissionais com qualificações compatíveis com os requisitos <strong>técnicos</strong> e <strong>comportamentais</strong> que contribuam com a constante busca da Sociedade em <strong>ser líder no segmento da Saúde</strong>.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_oportunidades/rol2_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="1">

				</v-col>
			</v-row>
			
			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="1">
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-left texto_preto">
						<p style="text-align:right">
							O Einstein valoriza a <strong>diversidade</strong>, <strong>equidade</strong> e <strong>inclusão</strong>, e procura preencher suas vagas com candidatos que atendam aos <strong>Critérios de Elegibilidade</strong> definidos, assim como aos <strong>requisitos</strong> e <strong>responsabilidades</strong> atribuídos à vaga.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_oportunidades/rol3_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol3_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol3_folha.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol4_folha.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_oportunidades/rol4_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							Sempre, porém, buscando manter em seu quadro de profissionais a pluralidade de gênero, deficiência, origem, religião, cor da pele, etnia, orientação sexual, identidade de gênero, estado civil, idade, condição de saúde ou reprodutiva.

						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_oportunidades/rol4_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="1">

				</v-col>
			</v-row>
		</v-container>
		
		<v-card-text class="mt-n10 reveal fade-bottom" style="text-align:center">
			<h3 class="font-weight-bold my-6 texto_preto">
				O cuidado e o respeito às pessoas e à diversidade estão no DNA do Einstein.
			</h3>
			<v-img height="50%" class="mx-auto" src="./img/tela_oportunidades/cont2_img.png" />
		</v-card-text>
		<v-card class="box_dicas pl-0 pr-0 mt-n16 reveal fade-bottom" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-link-variant box_dicas_icon"></span> Acesse a plataforma <a href="https://sou.einstein.br/documentos/rh-administrativo/" target="_blank"><strong>Sou Einstein</strong></a> para conhecer a nossa política completa.  
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
	<!-- conteúdo 03 -->
	<v-card 
	v-show="isContent03Visible"
	id="content03" 
	width="100%" 
	elevation="6"
	style="z-index:7;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header_branco.png" />
	<v-row class="mt-10">

			<v-col cols="12" md="5">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<h2 class="texto_branco">
						Os Colaboradores do Einstein têm inúmeras oportunidades de crescimento. Sabe por quê?
					</h2>
					<p class="mt-4 texto_branco">
						<strong>Nós valorizamos o desenvolvimento interno para estimular e aprimorar a formação e qualificação de nossos Colaboradores.</strong>
					</p>
					<p class="mt-4 texto_branco">
						<strong>
							Para isso, oferecemos diversas iniciativas com o objetivo de capacitar, desenvolver e formar os nossos profissionais, além de proporcionarmos oportunidades de crescimento na Instituição.
						</strong>
					</p>
					<p class="mt-4 texto_branco">
						<strong>
							Além do Recrutamento Interno de rotina, criamos Projetos específicos para dar oportunidades aos nossos Colaboradores.
						</strong>
					</p>
				</v-card-text>
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:6; "
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_header.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Vamos conhecer algumas dessas iniciativas?
			</h1>
		</v-card-text>
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>1. Recrutamento interno</strong>
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  O QUE É?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O processo seletivo interno é um processo Institucional que visa estimular o desenvolvimento dos colaboradores oferecendo perspectivas de crescimento, bem como zelar pelo clima organizacional, satisfação e motivação dos colaboradores da Sociedade. Caso esteja dentro dos critérios de elegibilidade e respeitando os níveis de progressão de carreira, você pode se inscrever para participar do processo seletivo Interno.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUAIS OS CRITÉRIOS PARA PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O processo seletivo interno é um processo Institucional que visa estimular o desenvolvimento dos colaboradores oferecendo perspectivas de crescimento, bem como zelar pelo clima organizacional, satisfação e motivação dos colaboradores da Sociedade. Caso esteja dentro dos critérios de elegibilidade e respeitando os níveis de progressão de carreira, você pode se inscrever para participar do processo seletivo Interno.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUE CARGOS PODEM PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O processo seletivo interno é um processo Institucional que visa estimular o desenvolvimento dos colaboradores oferecendo perspectivas de crescimento, bem como zelar pelo clima organizacional, satisfação e motivação dos colaboradores da Sociedade. Caso esteja dentro dos critérios de elegibilidade e respeitando os níveis de progressão de carreira, você pode se inscrever para participar do processo seletivo Interno.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO POSSO PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O processo seletivo interno é um processo Institucional que visa estimular o desenvolvimento dos colaboradores oferecendo perspectivas de crescimento, bem como zelar pelo clima organizacional, satisfação e motivação dos colaboradores da Sociedade. Caso esteja dentro dos critérios de elegibilidade e respeitando os níveis de progressão de carreira, você pode se inscrever para participar do processo seletivo Interno.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>2. Projeto “Quem indica, Amigo é!”</strong>
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  O QUE É?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  Lançado em junho de 2013, o Programa “Quem Indica, Amigo É!”, surgiu com a ideia de reunir e concentrar o fluxo de indicações recebidas através dos Colaboradores, permitindo a atração e seleção de novos talentos para trabalhar na Instituição.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO FUNCIONA?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  Lançado em junho de 2013, o Programa “Quem Indica, Amigo É!”, surgiu com a ideia de reunir e concentrar o fluxo de indicações recebidas através dos Colaboradores, permitindo a atração e seleção de novos talentos para trabalhar na Instituição.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO O PROJETO ACONTECE?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  Lançado em junho de 2013, o Programa “Quem Indica, Amigo É!”, surgiu com a ideia de reunir e concentrar o fluxo de indicações recebidas através dos Colaboradores, permitindo a atração e seleção de novos talentos para trabalhar na Instituição.
				</v-expansion-panel-text>
			  </v-expansion-panel>

			</v-expansion-panels>

		</v-container>
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>3. Programa de Enfermeiro Júnior</strong>
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  O QUE É?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O objetivo do Programa Enfermeiro Júnior é desenvolver profissionais na área da Enfermagem em inicio de carreira, fomentar oportunidades de carreira na Instituição, com olhar para inclusão e equidade de oportunidade tornando, assim, o ambiente interno mais plural e diverso.

				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUEM PODE PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O objetivo do Programa Enfermeiro Júnior é desenvolver profissionais na área da Enfermagem em inicio de carreira, fomentar oportunidades de carreira na Instituição, com olhar para inclusão e equidade de oportunidade tornando, assim, o ambiente interno mais plural e diverso.

				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO É O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O objetivo do Programa Enfermeiro Júnior é desenvolver profissionais na área da Enfermagem em inicio de carreira, fomentar oportunidades de carreira na Instituição, com olhar para inclusão e equidade de oportunidade tornando, assim, o ambiente interno mais plural e diverso.

				</v-expansion-panel-text>
			  </v-expansion-panel>
			</v-expansion-panels>
			
			<v-card class="box_dicas_verde mt-4 pl-0 pr-0 reveal fade-bottom mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-alert box_verde_icon"></span> 
					<span style="font-size:1.2em; color:white">Fique atento aos meios de comunicação interna e não perca a data do próximo programa!</span>  
				</v-card-text>
			</v-card>
			
		</v-container>
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>4. Programa Jovem Aprendiz</strong>
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  O QUE É?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O Jovem Aprendiz é um programa voltado para a inclusão e o desenvolvimento de jovens entre 18 e 23 anos, no mercado de trabalho, através de capacitação profissional teórica e prática em diversas áreas do Instituto. <br><br>Em parceria com o Instituto Ser+, durante o contrato de 11 meses, o Aprendiz ficará em curso no Instituto, uma vez por semana. A presença é obrigatória e, findo o contrato, há possibilidade de efetivação.

				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO É O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O Jovem Aprendiz é um programa voltado para a inclusão e o desenvolvimento de jovens entre 18 e 23 anos, no mercado de trabalho, através de capacitação profissional teórica e prática em diversas áreas do Instituto. <br><br>Em parceria com o Instituto Ser+, durante o contrato de 11 meses, o Aprendiz ficará em curso no Instituto, uma vez por semana. A presença é obrigatória e, findo o contrato, há possibilidade de efetivação.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUAIS SÃO OS REQUISITOS?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O Jovem Aprendiz é um programa voltado para a inclusão e o desenvolvimento de jovens entre 18 e 23 anos, no mercado de trabalho, através de capacitação profissional teórica e prática em diversas áreas do Instituto. <br><br>Em parceria com o Instituto Ser+, durante o contrato de 11 meses, o Aprendiz ficará em curso no Instituto, uma vez por semana. A presença é obrigatória e, findo o contrato, há possibilidade de efetivação.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  ONDE BUSCAR MAIS INFORMAÇÕES?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  O Jovem Aprendiz é um programa voltado para a inclusão e o desenvolvimento de jovens entre 18 e 23 anos, no mercado de trabalho, através de capacitação profissional teórica e prática em diversas áreas do Instituto. <br><br>Em parceria com o Instituto Ser+, durante o contrato de 11 meses, o Aprendiz ficará em curso no Instituto, uma vez por semana. A presença é obrigatória e, findo o contrato, há possibilidade de efetivação.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>5. Programa de Enfermeiro Júnior</strong>
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  O QUE É?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO SERÁ O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent05Visible = true; prosseguir('content05')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

<!-- conteúdo 04 -->
<!-- conteúdo 05 -->
	<v-card
	id="content05" 
	v-show="isContent05Visible"
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto mt-2  bg-transparent" 
	style="z-index:5; "
	>
		
	
	<v-img class="mx-auto mb-4 mt-16" src="./img/tela_oportunidades/cont5_grade.png" />
	<v-img class="notebook mx-auto mb-4 mt-16" src="./img/tela_oportunidades/laptop.png" />
	
	<v-card class="box_dicas_cont5 pl-0 pr-0 mt-n8 reveal fade-bottom mx-auto" style="z-index:20;">
		<v-card-text align="left">
			<span class="texto_azul"><strong>Como acessar?</strong></span>
			<v-img class="mx-auto my-2 qr-code" src="./img/tela_oportunidades/qr-code.png" />
			<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> <a href="#">Clique aqui</a> e entre em nossa página.
		</v-card-text>
	</v-card>
	
	
	<v-card 
	width="100%" 
	height="720"
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0  v-card-conteudos_cont5" 
	style="z-index:4; "
	>


		<v-row class="mt-12 texto_cont5">

			<v-col cols="12" md="5">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 texto_branco cont5_title">
						Além das iniciativas que você já conheceu, o Einstein disponibiliza também o Workplace. 
					</p>
					<p style="font-weight:700" class="mt-4 texto_branco cont5_title">
						Você sabe o que é?
					</p>
					<p class="mt-4 texto_branco">
						O Workplace é uma ferramenta que possibilita fácil acesso à comunicação com os colaboradores da instituição, alcança todas as gerações X, Y e Z, e pode ser visto e compartilhado de qualquer lugar.
					</p>
					<p class="mt-4 texto_branco">
						O grupo Carreiras Einstein é administrado pela área de Recrutamento e Seleção com o objetivo de trocar informações em relação às oportunidades da instituição, dicas sobre processo seletivo e carreira, vídeos e enquetes. As publicações acontecem semanalmente as quintas-feiras. 
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="6">
				
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent06Visible = true; prosseguir('content06')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>


	</v-card>
	</v-card>

	<!-- conteúdo 05 -->
	
	<!-- conteúdo 06 -->
	<v-card 
	v-show="isContent06Visible"
	id="content06" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:4; "
	>
	
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_cont6.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Remuneração e Benefícios Total Anual – DRA
			</h1>
		</v-card-text>
		
		
		<v-row justify="center" class="mt-n0">
					<v-col class="mt-4" cols="12" md="6">
						<p>
							A recompensa pelo trabalho que o Colaborador do Einstein realiza é demonstrada pelo DRA – Demonstrativo de Remuneração Anual. 
						</p>
						<p class="mt-4">
							Essa ferramenta de comunicação possibilita que o colaborador tenha maior clareza e melhor percepção do seu pacote de remuneração com os itens que compõem a sua recompensa total.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<v-img class="" src="./img/tela_oportunidades/cont6_esteto.png" />
					</v-col>
				</v-row>
				
				<v-card elevation="0" class="d-flex justify-center mb-4 mt-10 bg-transparent">
					<v-img class="cont6_tabela" src="./img/tela_oportunidades/cont6_tabela.svg" />
					
					<a class="btn_tool-tip1" @click="tooltip1=!tooltip1"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
					<a class="btn_tool-tip2" @click="tooltip2=!tooltip2"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
					
					
					<v-expand-transition>
						  <div v-show="tooltip1" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-1" style="width: 250px;">

							  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip1" aria-hidden="false" ></i>

							  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

								<div class="pt-2 pb-2 pl-2 pr-2">
									<span class="tooltip_text">
										<p>São itens intangíveis, ou seja, oferecidos pelo Einstein visando o bem-estar dos colaboradores e seus dependentes, não sendo possível revertê-los em valor monetário.</p>
									</span>
								</div>
							  </div>
						  </div>
					  </v-expand-transition>

					  <v-expand-transition>
						  <div v-show="tooltip2" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-2" style="width: 260px;">

							  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip2" aria-hidden="false" ></i>

							  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

								<div class="pt-2 pb-2 pl-2 pr-2">
									<span class="tooltip_text">
										<p>São itens tangíveis, ou seja, que podem ser medidos em dinheiro.</p>
									</span>
								</div>
							  </div>
						  </div>
					  </v-expand-transition>	
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
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent06bVisible = true; prosseguir('content06b')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
		
		<v-container 
		v-if="isContent06bVisible"
		id="content06b"
		>
		<h2 class="cont5_title mt-10">
			O DRA contempla os seguintes dados:
		</h2>
		<v-card class="box_dicas_cont6 pl-0 pr-0 mt-4 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos sinais de "+".  
				</v-card-text>
			</v-card>
		
		<v-img width="60%" class="mx-auto mt-14" src="./img/tela_oportunidades/cont6_info2.png" />
				<a class="btn_tool-tip3" @click="tooltip4=!tooltip4"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
				<a class="btn_tool-tip4" @click="tooltip3=!tooltip3"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
				<a class="btn_tool-tip5" @click="tooltip5=!tooltip5"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
				<a class="btn_tool-tip6" @click="tooltip6=!tooltip6"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
				<a class="btn_tool-tip7" @click="tooltip7=!tooltip7"> <img class="btn_img" src='./img/tela_oportunidades/cont6_btn.png'/></a>
				
				<v-expand-transition>
					  <div v-show="tooltip3" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-3" style="width: 260px;">

						  <i style="text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);" class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip3" aria-hidden="false"></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									<p>Incentivo Educacional concedido para pós-doutorado, doutorado, MBA, mestrado, pós-graduação, graduação, curso técnico e formação interna.</p>
								</span>
							</div>
						  </div>
					  </div>
				  </v-expand-transition>	
		
		
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
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent07Visible = true; prosseguir('content07')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
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
	style="z-index:3; "
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_branco">
				Vamos conhecer algumas dessas iniciativas?
			</h1>
		</v-card-text>
		
		<v-row class="mt-4">

			<v-col cols="12" md="6">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 texto_branco">
						A remuneração variável  é considerada um Incentivo de Curto Prazo - ICP. É uma bonificação que recompensa o colaborador conforme o atingimento das metas institucionais, individuais e coletivas estabelecidas. 
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="6">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 texto_branco">
						A remuneração variável  é considerada um Incentivo de Curto Prazo - ICP. É uma bonificação que recompensa o colaborador conforme o atingimento das metas institucionais, individuais e coletivas estabelecidas. 
					</p>
				</v-card-text>
			</v-col>
		</v-row>
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					
				</v-card-text>
			</v-col>
			<v-col cols="12" md="4">
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
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" >
				  <strong>O que:</strong>&nbsp;metas institucionais
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  É uma composição das seguintes metas:
					<ul style="margin-left:30px">
						<li>Institucionais - BSC (Balanced Scored Card).</li>
						<li>Financeiros - EBITDA.</li>
						<li>Satisfação dos clientes - NPS (Net Promoter Score).</li>
					</ul>
					<br>O pagamento só ocorre se a organização atingir no mínimo 80% das metas dos resultados.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <strong>Quando:</strong>&nbsp; data do pagamento
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <strong>Quem:</strong>&nbsp; profissionais, técnicos e auxiliares
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <strong>Quem: </strong>&nbsp;cargos médicos
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <strong>Quem: </strong>&nbsp;cargos de liderança
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  A posição de Auxiliar Administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa Sociedade.<br><br>O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>
			
			<v-card class="box_dicas_verde mt-4 pl-0 pr-0 reveal fade-bottom mx-auto" style="width: 100%">
				
				<v-row align="start" no-gutters justify="center" class="mt-2">
					<v-col cols="12" md="1" align="left">
						<span class="mt-6 pl-6 mdi mdi-alert box_verde_icon"></span>
					</v-col>
					<v-col cols="12" md="11" align="left" class="reveal fade-bottom mt-3">
						<span style="font-size:1.2em; color:white">Se quiser conhecer mais sobre a composição das metas, o peso atribuído a cada uma delas e como é calculada a Remuneração Variável Anual para cada categoria, clique no botão abaixo.</span> 
					</v-col>
				</v-row>
				<v-row align="start" no-gutters justify="center" class="mt-2">
					<v-col cols="12" md="1" align="left">
						
					</v-col>
					<v-col cols="12" md="11" align="left" class="reveal fade-bottom">
						
						<v-btn 
						type="button"
						density="comfortable"
						size="large"
						rounded="pill"
						class="text-secondary"
						:class="appStore.isDarkMode ? 'bg_escuro' : 'bg_escuro'"
						> SAIBA +	
						</v-btn>
					</v-col>
				</v-row>
				
				
				<v-card-text>
					 
					 
				</v-card-text>
			</v-card>

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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; "
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Programa de Reconhecimento
			</h1>
		</v-card-text>
		<v-card class="box_dicas pl-0 pr-0 mb-8 reveal fade-bottom" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas abas abaixo para saber mais.  
				</v-card-text>
			</v-card>
		<v-card>
			<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		  
		>
			  <v-tab value="one"><span style="color:#202428;">O programa</span></v-tab>
			  <v-tab value="two"><span style="color:#202428;">Premissas e Regras</span></v-tab>
			  <v-tab style="margin:0" value="three"><span style="color:#202428;">Descrição de Cargo</span></v-tab>
			</v-tabs>

			<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
				<v-window-item value="one">
				<ul style="margin:40px">
					<li style="margin-bottom:10px"><strong>Todos os colaboradores SBIBAE são elegíveis para esta política</strong>, exceto diretores, estagiários, aprendizes e profissionais da Carreira Analytics (Analista de Dados, Consultor Analytics, Engenheiro Dados, Cientista Dados e Arquiteto Dados);</li>
					<li style="margin-bottom:10px">Colaboradores com conceito <strong>mínimo AT</strong> na última Avaliação de Desempenho;</li>
					<li style="margin-bottom:10px">O colaborador poderá ser contemplado após seis meses (com elegibilidade a avaliação de desempenho) <strong>do último programa, promoção com aumento e admissão</strong>;</li>
					<li style="margin-bottom:10px"><strong>Limitado a 30% do total de colaboradores elegíveis</strong> por gestor;</li>
					<li style="margin-bottom:10px">Limite de aumento concedido de até <strong>15% sobre o salário</strong>;</li>
					<li style="margin-bottom:10px">Colaboradores com salário base posicionado acima do <strong>ponto máximo da faixa salarial (120%)</strong> não serão elegíveis ao programa.</li>
					<li style="margin-bottom:10px"><strong>Verba orçada:</strong> 1% da massa salarial da área e, se aprovada, o programa será aplicado anualmente.</li>
				</ul>
				</v-window-item>

				<v-window-item value="two">
				  <ul style="margin:40px">
					<li style="margin-bottom:10px"><strong>Todos os colaboradores SBIBAE são elegíveis para esta política</strong>, exceto diretores, estagiários, aprendizes e profissionais da Carreira Analytics (Analista de Dados, Consultor Analytics, Engenheiro Dados, Cientista Dados e Arquiteto Dados);</li>
					<li style="margin-bottom:10px">Colaboradores com conceito <strong>mínimo AT</strong> na última Avaliação de Desempenho;</li>
					<li style="margin-bottom:10px">O colaborador poderá ser contemplado após seis meses (com elegibilidade a avaliação de desempenho) <strong>do último programa, promoção com aumento e admissão</strong>;</li>
					<li style="margin-bottom:10px"><strong>Limitado a 30% do total de colaboradores elegíveis</strong> por gestor;</li>
					<li style="margin-bottom:10px">Limite de aumento concedido de até <strong>15% sobre o salário</strong>;</li>
					<li style="margin-bottom:10px">Colaboradores com salário base posicionado acima do <strong>ponto máximo da faixa salarial (120%)</strong> não serão elegíveis ao programa.</li>
					<li style="margin-bottom:10px"><strong>Verba orçada:</strong> 1% da massa salarial da área e, se aprovada, o programa será aplicado anualmente.</li>
				</ul>
				</v-window-item>

				<v-window-item value="three">
				  <ul style="margin:40px">
					<li style="margin-bottom:10px"><strong>Todos os colaboradores SBIBAE são elegíveis para esta política</strong>, exceto diretores, estagiários, aprendizes e profissionais da Carreira Analytics (Analista de Dados, Consultor Analytics, Engenheiro Dados, Cientista Dados e Arquiteto Dados);</li>
					<li style="margin-bottom:10px">Colaboradores com conceito <strong>mínimo AT</strong> na última Avaliação de Desempenho;</li>
					<li style="margin-bottom:10px">O colaborador poderá ser contemplado após seis meses (com elegibilidade a avaliação de desempenho) <strong>do último programa, promoção com aumento e admissão</strong>;</li>
					<li style="margin-bottom:10px"><strong>Limitado a 30% do total de colaboradores elegíveis</strong> por gestor;</li>
					<li style="margin-bottom:10px">Limite de aumento concedido de até <strong>15% sobre o salário</strong>;</li>
					<li style="margin-bottom:10px">Colaboradores com salário base posicionado acima do <strong>ponto máximo da faixa salarial (120%)</strong> não serão elegíveis ao programa.</li>
					<li style="margin-bottom:10px"><strong>Verba orçada:</strong> 1% da massa salarial da área e, se aprovada, o programa será aplicado anualmente.</li>
				</ul>
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
				class=" mt-8 mb-4 mx-auto"
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_video" 
	style="z-index:1; "
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_header_azul.png" />
		
		<v-card-text class="reveal fade-left mb-10">
					<p class="mt-6 texto_branco">
						Assista ao vídeo para conhecer o processo de aprovação e validação da descrição do cargo.
					</p>
				</v-card-text>
		

		<!--Vimeo-->
            <v-container 
            class="mt-n5 mb-10 pa-0 reveal fade-bottom"
            >
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/885695528?h=509bbc8764&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 10px" title="3.5.1 - Oportunidades e carreira"></iframe></div>
				
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
				:class="appStore.isDarkMode ? 'white-svg' : 'white-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-primary bg_escuro'"
				@click="isContent10Visible = true; prosseguir('content10')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 09 -->
	
	<!-- conteúdo 10 footer -->
	<v-card 
	v-show="isContent10Visible"
	id="content10" 
	width="100%"
	class="mt-n4 mx-auto rounded-lg pt-0 footer pb-16"
	style="z-index:0; background-color: #dc7689;"  
	>

		<v-container fill-height class="my-16">
			<v-row>
				<v-col cols="12" md="6">

				</v-col>
				<v-col cols="12" md="6">
					<p class="mb-4" style="font-weight:700; font-size:1.2em;">
						Nosso compromisso é oferecer à população brasileira uma medicina de excelência.
					</p>
					<p style="font-weight:700; font-size:1.2em">
						Fazendo parte do nosso time, você nos ajuda a construir essa história e entregar vidas mais saudáveis!
					</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="6">

				</v-col>
				<v-col align="left" cols="12" md="6">
					<v-img width="50%" class="mt-4" src="./img/tela_oportunidades/Lg_Diversidade_Einstein.svg" />
				</v-col>
			</v-row>
		</v-container>

	</v-card>

	<!-- conteúdo 10 -->

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
	import { useAnim } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content10')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)
	const isContent05Visible = ref(false)
	const isContent06Visible = ref(false)
	const isContent06bVisible = ref(false)
	const isContent07Visible = ref(false)
	const isContent08Visible = ref(false)
	const isContent09Visible = ref(false)
	const isContent10Visible = ref(false)


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

<script>
  export default {
    data: () => ({
      tab: null,
	  tooltip1: false,
	  tooltip2: false,
	  tooltip3: false,
	  tooltip4: false,
	  tooltip5: false,
	  tooltip6: false,
	  tooltip7: false,
    }),
  }
</script>


<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';cvnb n


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
.bg_escuro {
	background-color: $primaryDark !important;	
}
.bg_escuro2 {
	background-color: $primaryDark !important;	
}
.azul-svg {
	background-image: url("./img/tela_oportunidades/gota_azul.png");
	background-size: contain;
}
.verde-svg {
	background-image: url("./img/tela_oportunidades/gota_verde.png");
	background-size: contain;
}
.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_oportunidades/cont3_fundo.png");
	background-size: cover;
	background-position: center;
}
.v-card-conteudos_cont5 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_oportunidades/cont5_fundo.svg");
	background-size: cover;
}
.notebook{
    position: absolute;
    top: 0px;
    left: 35%;
    z-index: 20;
	width:70%;
}
.box_dicas_cont5 {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 20%;
	position:absolute;
	top:50%;
	left:70%;
}
.cont5_title{
color:#00A4E1;
font-size:1.4em;
font-weight:400;
line-height:1.2em;
text-transform: uppercase;
}
.v-card-conteudos_cont7 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_oportunidades/cont7_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_video{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela_oportunidades/bg_video.svg");
	background-size: cover;
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
.box_dicas {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 45%;
}
.box_dicas_cont6 {
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width: 45%;
}
.box_dicas_verde{
text-align:center;
background-color:#81C300;
}
.box_verde_icon {
	font-size: 3rem;
	color:white;
	position: relative;
	top:5px;
	left:-10px
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
.footer {
	background-image: url("./img/tela_oportunidades/fundo_footer.png");
	background-size: cover;
	background-position: right;
	background-repeat: no-repeat;
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
.titulo_acima_accordion{
color:#00A4E1;
font-size:1.5em;
font-weight:300;
}
.v-expansion-panel-title {
    font-size: 1.3rem;
    line-height: 1;
    min-height: 48px;
	color:$primaryDark;
	font-weight:500;
	font-family: 'montserrat' !important;
}
.btn_tool-tip1{
position:absolute;
top: 28%;
left:4%;
}
.btn_tool-tip2{
position:absolute;
top: 65%;
left:4%;
}
.btn_img{
height:70px;
}
.cont6_tabela{
width:60%
}
.tool-tip-1 {
position: absolute !important;
    z-index: 6002 !important;
    top: 34%;
    left: 25%;
    transform: translate(-50%, -50%);
}
.triangulo-tool-tip1 {
    position: absolute !important;
    top: 43%;
    left:-8%;
    z-index: 6005 !important;
    transform: rotate(30deg) !important;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-2 {
position: absolute !important;
    z-index: 6002 !important;
    top: 72%;
    left: 25%;
    transform: translate(-50%, -50%);
}
.triangulo-tool-tip2 {
    position: absolute !important;
    top: 34%;
    left: -21px;
    z-index: 6001 !important;
    transform: rotate(30deg) !important;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.btn_tool-tip3{
position:absolute;
top: 62%;
left: 32%;
}
.tool-tip-3 {
position: absolute !important;
    z-index: 6002 !important;
    top: 57%;
    left: 66%;
    transform: translate(-50%, -50%);
}
.triangulo-tool-tip3 {
    position: absolute !important;
    top: 92%;
    left: 41%;
    z-index: 6005 !important;
    transform: rotate(60deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.btn_tool-tip4{
position:absolute;
top: 62%;
left:62%;
}
.btn_tool-tip5{
position:absolute;
top: 77%;
left:72%;
}
.btn_tool-tip6{
position:absolute;
top: 87%;
left:47%;
}
.btn_tool-tip7{
position:absolute;
top: 77%;
left:22%;
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

@media screen and (max-width: 1277px){
.btn_tool-tip1{
top: 26%;
left:4%;
}
.btn_tool-tip2{
top: 65%;
left:4%;
}
.btn_img{
height:50px;
}
.tool-tip-1 {
top: 32%;
left: 30%;
}
.tool-tip-2 {
top: 72%;
left: 30%;
}
.btn_tool-tip3{
position:absolute;
top: 66%;
left: 32%;
}
.tool-tip-3 {
top: 57%;
left: 66%;
}
.btn_tool-tip4{
position:absolute;
top: 66%;
left:62%;
}
.btn_tool-tip5{
position:absolute;
top: 79%;
left:72%;
}
.btn_tool-tip6{
position:absolute;
top: 86%;
left:47%;
}
.btn_tool-tip7{
position:absolute;
top: 77%;
left:22%;
}

}
@media screen and (max-width: 768px){
.icone_cont2{
width:40%;
}
.notebook{
    position: absolute;
    top: 56px;
    left: 18%;
    z-index: 20;
}
.texto_cont5{
margin-top: 290px!important;
}
.box_dicas_cont5 {
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
    width: 30%;
    position: absolute;
    top: 20%;
    left: 65%;
}
.qr-code{
width:100%;
}
.cont5_title{
font-size:1.4em;
line-height:1.2em;
margin-top:200px;
}
.titulo_acima_accordion{
color:#00A4E1;
font-size:1.5em;
font-weight:300;
}
.btn_tool-tip1{
top: 24%;
left:3%;
}
.btn_tool-tip2{
top: 68%;
left:3%;
}
.btn_img{
height:40px;
}
.tool-tip-1 {
    top: 33%;
    left: 44%;
}
.triangulo-tool-tip1 {
    top: 36%;
    left:-8%;
}
.tool-tip-2 {
    top: 80%;
    left: 44%;
}
.tool-tip-3 {
top: 65%;
left: 68%;
}
.triangulo-tool-tip2 {
    top: 25%;
    left: -21px;
}
.box_dicas_cont6 {
	width: 100%;
}
.btn_tool-tip3{
position:absolute;
top: 70%;
left: 32%;
}
.btn_tool-tip4{
position:absolute;
top: 70%;
left:62%;
}
.btn_tool-tip5{
position:absolute;
top: 80%;
left:72%;
}
.btn_tool-tip6{
position:absolute;
top: 86%;
left:47%;
}
.btn_tool-tip7{
position:absolute;
top: 80%;
left:22%;
}

}
</style>