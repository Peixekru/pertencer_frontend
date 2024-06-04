<template>
	<!-- header oportunidades-->
	<v-card 
	width="100%" 
	elevation="6"
	style="z-index:15;"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_oportunidades/header.png" />
		<v-img class="show_1277" src="./img/tela_oportunidades/header.png" />
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
	style="z-index:14;background-color:#fff!important;"
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
	style="z-index:13;background-color:#C4E8E1!important;"
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
							No Einstein, tudo começa quando a <strong>Área de Atração, Seleção & Diversidade</strong> divulga as oportunidades internas ou a busca de talentos externos para atender às necessidades de contratação da Sociedade.
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
							Para isso, são utilizados filtros e ferramentas que apoiam na triagem e identificam profissionais com qualificações compatíveis com os requisitos <strong>técnicos</strong> e <strong>comportamentais</strong> que contribuam com a constante busca da Sociedade em <strong>ser líder no segmento da Saúde</strong>.
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
							Sempre, porém, buscando manter em seu quadro de profissionais a pluralidade.

						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_oportunidades/rol4_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="1">

				</v-col>
			</v-row>
		</v-container>
		
		<v-card-text class="mt-n8reveal fade-bottom" style="text-align:center">
			<h3 class="font-weight-bold my-6 texto_preto">
				O cuidado e o respeito às pessoas e à diversidade estão no DNA do Einstein.
			</h3>
			<v-img height="50%" class="mx-auto" src="./img/tela_oportunidades/cont2_img.png" />
		</v-card-text>
		<v-card class="box_dicas pl-0 pr-0 mt-n16 reveal fade-bottom" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-link-variant box_dicas_icon"></span> Acesse a plataforma <a class="texto_azul" style="text-decoration:none;" href="https://sou.einstein.br/documentos/rh-administrativo/" target="_blank"><strong>Sou Einstein</strong></a> para conhecer a nossa política completa.  
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
	style="z-index:12;"
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:11; "
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
				<p>O recrutamento interno é um processo da Instituição para estimular o desenvolvimento dos colaboradores. O objetivo é oferecer perspectivas de crescimento, assim como zelar pelo clima organizacional, a satisfação e a motivação dos colaboradores.
				</p>
				<p>Caso esteja dentro dos critérios de elegibilidade definidos nas políticas, e respeitando os níveis de progressão de carreira, você pode se inscrever para participar do processo seletivo interno.
				</p>
				 </v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUAIS OS CRITÉRIOS PARA PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Ser colaborador do Einstein com no mínimo seis meses no cargo atual.</li>
					<li>Ter obtido no mínimo a nota AT na última Avaliação de Competências.</li>
					<li>Não ter familiares sob a mesma Gerência.</li>
					<li>Não possuir restrições no prontuário no último ano.</li>
					<li>Não estar afastado por licença médica.</li>
				</ul>
				<p>Todas as vagas abertas para o processo seletivo interno são também destinadas a pessoas com deficiência.
				</p>
				
				
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUE CARGOS PODEM PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<v-img  src="./img/tela_oportunidades/carreira_y.png" class="" />
				 
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO POSSO PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
				Acompanhe a nossa página de carreiras e a divulgação das vagas. Lá você encontra todas as informações.
				</p>
				<p class="mt-4">
				<a style="text-decoration:none" class="texto_azul" href="https://career8.successfactors.com/career?company=C0001240283P" target="_blank"><strong>Success Factors</strong></a>
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>2. Programa “Quem indica, Amigo é!”</strong>
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
				<p>
				As vagas são disponibilizadas através de uma plataforma digital chamada TAQE, e os colaboradores do Einstein têm a possibilidade de indicar amigos a se inscreverem através do link da própria plataforma.
				</p>
				<p class="mt-4">
				Todas as indicações são avaliadas e, caso o perfil do amigo indicado não esteja dentro dos critérios da vaga, ele pode ser direcionado para outra posição.
				</p>
				
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO O PROJETO ACONTECE?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
				Para indicar talentos, fique atento aos meios de comunicação interna!
				</p>
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
				 <p>
				O objetivo do Programa Enfermeiro Júnior é desenvolver profissionais na área da Enfermagem em inicio de carreira, fomentar oportunidades de carreira na Instituição, com olhar para inclusão e equidade de oportunidade tornando, assim, o ambiente interno mais plural e diverso.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUEM PODE PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				Público interno, pessoas com deficiência com formação completa em enfermagem, e alunos FICSAE – Faculdade Israelita de Ciências da Saúde Albert Einstein, e/ou escolas parceiras. 
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO É O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				O programa acontece uma vez ao ano e é composto pelas seguintes etapas: inscrição, prova teórica, estações práticas e videoentrevista.
				</p>
				<p class="mt-4">
				Ao final do processo seletivo, os profissionais aprovados ficam com seu perfil disponível pelo período de um ano. Surgindo vaga adequada ao perfil em alguma área, é feita uma avaliação e todos os reprovados recebem um Feedback Estruturado.
				</p>

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
				  <p>
				 O Jovem Aprendiz é um programa voltado para a inclusão e o desenvolvimento de jovens entre 18 e 23 anos, no mercado de trabalho, através de capacitação profissional teórica e prática em diversas áreas do Instituto.
				</p>
				<p class="mt-4">
				Em parceria com o <strong>Instituto Ser+</strong>, durante o contrato de 11 meses, o Aprendiz ficará em curso no Instituto, uma vez por semana. A presença é obrigatória e, findo o contrato, há possibilidade de efetivação.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO É O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				O processo seletivo do programa é composto por:
				</p>
				<ul class="mt-4 ml-8">
					<li>1ª etapa: Cadastro na plataforma TAQE e inscrição no site;</li>
					<li>2ª etapa: Gravação de vídeo entrevista.</li>
				</ul>
				<p class="mt-4">
				Todos os aprendizes aprovados devem ser convocados periodicamente, por meio de ação específica da área de Atração e Seleção, para que sejam direcionados às vagas que atendam ao perfil. 
				</p>

				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUAIS SÃO OS REQUISITOS?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <ul class="ml-8">
					<li>Ensino médio completo.</li>
					<li>Idade entre 18 a 23 anos.</li>
					<li>Título de eleitor.</li>
					<li>Certificado de Reservista para o sexo masculino.</li>
					<li>Estudantes de nível superior que concluíram o ensino médio em escola pública.</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  ONDE BUSCAR MAIS INFORMAÇÕES?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				 <p>
				Para saber mais sobre o Programa Jovem Aprendiz, acesse:
				</p>
				<p class="mt-4">
				<a style="text-decoration:none" class="texto_azul" href="https://career8.successfactors.com/career?company=C0001240283P" target="_blank"><strong>Success Factors</strong></a>
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			</v-expansion-panels>

		</v-container>
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 titulo_acima_accordion">
						<strong>5. Auxiliar Administrativo para pessoa com deficiência</strong>
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
				  <p>
				A posição de auxiliar administrativo CAEP faz parte do Programa de Diversidade e Inclusão Einstein com intuito de promover o desenvolvimento dos profissionais com deficiência e a ampliação do ambiente inclusivo em nossa sociedade.
				</p>
				<p class="mt-4">
				O objetivo é que a área desenvolva o colaborador para uma possível vaga dentro do setor ou que essa pessoa tenha crescimento dentro da Instituição, após 12 meses de acompanhamento inicial.
				</p>
				  
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  COMO PARTICIPAR?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				As pessoas que ocupam essas posições têm carga horária de 150h/mês e atuam na Instituição de segunda a sexta-feira.
				</p>
				<p class="mt-4">
				O processo seletivo é conduzido pela equipe de Atração e Seleção, que escolhe o melhor candidato para ocupar a posição, realizando o alinhamento das atividades/expectativas do perfil.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  QUANDO SERÁ O PROCESSO SELETIVO?
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				Você pode ter acesso às vagas de auxiliar administrativo CAEP através do nosso portal de vagas.
				</p>
				<p class="mt-4">
				<a style="text-decoration:none" class="texto_azul" href="https://career8.successfactors.com/career?company=C0001240283P" target="_blank"><strong>Success Factors</strong></a>
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
	style="z-index:10; "
	>
		
	
	<v-img class="mx-auto mb-4 mt-16" src="./img/tela_oportunidades/cont5_grade.png" />
	<v-img class="notebook mx-auto mb-4 mt-16" src="./img/tela_oportunidades/laptop.png" />
	
	<v-card class="box_dicas_cont5 pl-0 pr-0 mt-n8 reveal fade-bottom mx-auto" style="z-index:20;">
		<v-card-text align="left">
			<span class="texto_azul"><strong>Como acessar?</strong></span>
			<v-img class="mx-auto my-2 qr-code" src="./img/tela_oportunidades/qr-code.png" />
			<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> <a style="text-decoration:none" href="https://sbibae.workplace.com/work/landing/input/?next=https%3A%2F%2Fsbibae.workplace.com%2Fgroups%2F206612450124381%2F%3Fref%3Dshare" target="_blank"><strong>Clique aqui</strong></a> e entre em nossa página.
		</v-card-text>
	</v-card>
	
	
	<v-card 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0  v-card-conteudos_cont5" 
	style="z-index:9; "
	>


		<v-row class="mt-12 texto_cont5">

			<v-col cols="12" md="5">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p class="mt-4 texto_branco cont5_title">
						ALÉM DAS INICIATIVAS QUE VOCÊ JÁ CONHECEU, O EINSTEIN DISPONIBILIZA TAMBÉM O WORKPLACE.
					</p>
					<p style="font-weight:700" class="mt-4 texto_branco cont5_title">
						VOCÊ SABE O QUE É?
					</p>
					<p class="mt-4 texto_branco">
						O Workplace é a rede social interna do Einstein, uma importante ferramenta que possibilita comunicação e interação com as pessoas colaboradoras da Instituição, além de ser acessível tanto pelo computador quanto pelo celular.
					</p>
					<p class="mt-4 texto_branco">
						Se você tem interesse em saber mais sobre as oportunidades internas, o grupo Carreiras Einstein é o seu lugar! Ele é administrado pela área de Recrutamento e Seleção, com o objetivo de trocar informações em relação às oportunidades da Instituição, dicas sobre processo seletivo e carreira, além de vídeos e enquetes. As publicações acontecem semanalmente as quintas-feiras.
					</p>
					<p class="mt-4 texto_branco">
						<strong>Escaneie o QR Code e participe agora mesmo!</strong>
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
	
	
	<v-card 
	v-show="isContent06Visible"
	id="content06"
	width="100%" 
	elevation="0"
	style="z-index:15;"
	class="bg-transparent mt-10"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_rec_rec.png" />
		
	</v-card>
	
	
	<!-- header rec rec-->
	<v-card 
	v-show="isContent06Visible"
	width="100%" 
	elevation="6"
	style="z-index:15;"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_oportunidades/header_rec_rec.png" />
		<v-img class="show_1277" src="./img/tela_oportunidades/header_rec_rec.png" />
		<v-img class="show_mobile" src="./img/tela_oportunidades/header_rec_rec_mob.png" />
		<v-img src="./img/tela_oportunidades/texto_header_rec_rec.svg" class="header_text"
			title="Reconhecimento e Recompensa" />
	</v-card>
	<!-- header -->
	
		
	<!-- conteúdo 06 -->
	<v-card 
	v-show="isContent06Visible"
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:9; "
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
						<v-col cols="12" md="6">
							<v-card class="box_dicas pl-0 pr-0 mt-8 reveal fade-right mx-auto" style="width: 100%">
								<v-card-text>
									<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos sinais de "+".  
								</v-card-text>
							</v-card>
					</v-col>
				</v-row>
				
				<v-card elevation="0" class="mb-4 mt-10 bg-transparent" align="center">
					
					<img width="800" class="show_desktop" src="./img/tela_oportunidades/cont6_tabela.png" usemap="#image-map_cont6">
					
					<img width="600" class="show_1277" src="./img/tela_oportunidades/cont6_tabela_1277.png" usemap="#image-map_cont6_1277">
					
					<img width="350" class="show_mobile" src="./img/tela_oportunidades/cont6_tabela_mobile.png" usemap="#image-map_cont6_mobile">
					
					
					
					<map name="image-map_cont6">
						<area style="cursor:pointer" target="" alt="" title="" coords="61,137,43" shape="circle"
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="61,300,46" shape="circle"
						@click="
						isTooltip2Visible = true;
						isTooltip1Visible = false;
						">
					</map>
					
					<map name="image-map_cont6_1277">
						<area style="cursor:pointer" target="" alt="" title="" coords="47,103,36" shape="circle"
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="46,225,34" shape="circle"
						@click="
						isTooltip2Visible = true;
						isTooltip1Visible = false;
						">
					</map>
					
					<map name="image-map_cont6_mobile">
						<area style="cursor:pointer" target="" alt="" title="" coords="31,74,24" shape="circle"
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="33,172,22" shape="circle"
						@click="
						isTooltip2Visible = true;
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
										São itens intangíveis, ou seja, oferecidos pelo Einstein visando o bem-estar dos colaboradores e seus dependentes, não sendo possível revertê-los em valor monetário.
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
										São itens tangíveis, ou seja, que podem ser medidos em dinheiro.
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
		<v-card class="mx-auto box_dicas_cont6 pl-0 pr-0 mt-8 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos sinais de "+".  
				</v-card-text>
			</v-card>
		
		
		
		<v-card elevation="0" class="d-flex justify-center py-10 mb-4 mt-10 bg-transparent">
		
		<img class="show_desktop"  height="500" src="./img/tela_oportunidades/cont6_info2.png" usemap="#image-map">
		<img class="show_1277"  height="400" src="./img/tela_oportunidades/cont6_info2_1277.png" usemap="#image-map_1277">
		<img class="show_mobile"  height="300" src="./img/tela_oportunidades/cont6_info2_mobile.png" usemap="#image-map_mobile">

		<map name="image-map">
			<area style="cursor:pointer" target="" alt="" title="" coords="126,39,42" shape="circle"
			@click="
			isTooltip3Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="424,39,39" shape="circle" 
			@click="
			isTooltip4Visible = true;
			isTooltip3Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="502,300,44" shape="circle" 
			@click="
			isTooltip5Visible = true;
			isTooltip4Visible = false;
			isTooltip3Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="273,460,40" shape="circle" 
			@click="
			isTooltip6Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip3Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="40,302,40" shape="circle" 
			@click="
			isTooltip7Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip3Visible = false;
			">
		</map>
		
		<map name="image-map_1277">
			<area style="cursor:pointer" target="" alt="" title=""  coords="101,32,32" shape="circle"
			@click="
			isTooltip3Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="337,32,32" shape="circle"
			@click="
			isTooltip4Visible = true;
			isTooltip3Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="401,239,35" shape="circle"
			@click="
			isTooltip5Visible = true;
			isTooltip4Visible = false;
			isTooltip3Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="218,371,35" shape="circle"
			@click="
			isTooltip6Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip3Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="31,238,36" shape="circle"
			@click="
			isTooltip7Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip3Visible = false;
			">
		</map>
		
		<map name="image-map_mobile">
			<area style="cursor:pointer" target="" alt="" title="" coords="75,22,22" shape="circle"
			@click="
			isTooltip3Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="254,22,28" shape="circle"
			@click="
			isTooltip4Visible = true;
			isTooltip3Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="303,181,23" shape="circle"
			@click="
			isTooltip5Visible = true;
			isTooltip4Visible = false;
			isTooltip3Visible = false;
			isTooltip6Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="163,275,29" shape="circle"
			@click="
			isTooltip6Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip3Visible = false;
			isTooltip7Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="23,181,25" shape="circle"
			@click="
			isTooltip7Visible = true;
			isTooltip4Visible = false;
			isTooltip5Visible = false;
			isTooltip6Visible = false;
			isTooltip3Visible = false;
			">
		</map>
		
			  <div v-show="isTooltip3Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-3">
				  
				   <i @click="isTooltip3Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
						  <v-img src="./img/tela_oportunidades/btn_close.png"/>
						  </i>
				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip3" aria-hidden="false" ></i>
				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							Todos os valores financeiros apresentados são relacionados aos valores brutos pagos e, portanto, sem a demonstração dos devidos impostos e acréscimo de 8% de FGTS.
						</span>
					</div>
				  </div>
			  </div>

			  <div v-show="isTooltip4Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-4">
				  
				   <i @click="isTooltip4Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
						  <v-img src="./img/tela_oportunidades/btn_close.png"/>
						  </i>
				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip4" aria-hidden="false" ></i>
				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							Incentivo educacional concedido para pós-doutorado, doutorado, MBA, mestrado, pós-graduação, graduação, curso técnico e formação interna.
						</span>
					</div>
				  </div>
			  </div>

			  <div v-show="isTooltip5Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-5">
				   <i @click="isTooltip5Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
						  <v-img src="./img/tela_oportunidades/btn_close.png"/>
						  </i>
				  
				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip5" aria-hidden="false" ></i>
				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							Subsídio concedido para eventos científicos e cursos de qualificação nacionais e internacionais. Estas ações são iniciativas de valorização e reconhecimento dos melhores desempenhos, que têm o propósito de estimular os colaboradores a aprimorarem sua formação e qualificação.
						</span>
					</div>
				  </div>
			  </div>

			  <div v-show="isTooltip6Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-6">
				   <i @click="isTooltip6Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
						  <v-img src="./img/tela_oportunidades/btn_close.png"/>
						  </i>
				  
				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip6" aria-hidden="false" ></i>
				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							Todos os benefícios são calculados de forma proporcional aos meses trabalhados. O valor dimensionado para o seguro saúde e odontológico considera sua exata quantidade de dependentes elegíveis a cada um dos benefícios.
						</span>
					</div>
				  </div>
			  </div>

			  <div v-show="isTooltip7Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-7">
				  
				   <i @click="isTooltip7Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
						  <v-img src="./img/tela_oportunidades/btn_close.png"/>
						  </i>
						  
				  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip7" aria-hidden="false" ></i>
				  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
					<div class="pt-2 pb-2 pl-2 pr-2">
						<span class="tooltip_text">
							Bonificação anual de recompensa/incentivo que complementa o salário fixo do colaborador, diretamente relacionada ao desempenho profissional individual e da equipe.
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
		</v-container>

	</v-card>

	<!-- conteúdo 06 -->
	
	
	
	
	
	<!-- conteúdo 07 ocultado -->
	<v-card 
	v-show="isContent07Visible"
	id="content07" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont7" 
	style="z-index:8; "
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_branco">
				Quanto os colaboradores do Einstein recebem de Remuneração Variável Anual?
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
				  <p><strong>O que:</strong>&nbsp;metas institucionais</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				  <p>
				  É uma composição das seguintes metas:
				  </p>
				  
					<ul style="margin-left:30px">
						<li>Institucionais - BSC (Balanced Scored Card).</li>
						<li>Financeiros - EBITDA.</li>
						<li>Satisfação dos clientes - NPS (Net Promoter Score).</li>
					</ul>
					<p class="mt-4">
				  O pagamento só ocorre se a organização atingir no mínimo 80% das metas dos resultados.
				  </p>
					
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><strong>Quando:</strong>&nbsp; data do pagamento</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>A Remuneração Variável Anual é paga aos colaboradores elegíveis no último dia útil do mês de março, em folha de pagamento, com todos os descontos legais (INSS e Imposto de Renda), conforme lei vigente.
				  </p>
				  
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><strong>Quem:</strong>&nbsp;profissionais, técnicos e auxiliares</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
				Serão elegíveis ao cálculo do bônus de forma integral os colaboradores admitidos em regime CLT até 31/03 do ano anterior. Eles devem estar ativos na data do pagamento da Remuneração Variável Anual e ter atingido no mínimo o nível AT na Avaliação de Desempenho do ano. ​
				  </p>
				  
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><strong>Quem: </strong>&nbsp;cargos médicos</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
				Serão elegíveis os médicos contratados em regime CLT até o dia 30/09 do ano anterior. Eles devem estar ativos na data do pagamento da Remuneração Variável Anual e com Avaliação de Desempenho acima de AT. Para admitidos entre 01/01 e 30/09, o valor da Remuneração Variável Anual será proporcional ao número de meses trabalhados.
				  </p>
				 
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><strong>Quem: </strong>&nbsp;cargos de liderança</p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
				Serão elegíveis as lideranças contratadas em regime CLT até o dia 30/09 do ano anterior. Elas devem estar ativas na data do pagamento da Remuneração Variável Anual e com Avaliação de Desempenho acima de AT. Para admitidos entre 01/01 e 30/09, o valor da Remuneração Variável Anual será proporcional ao número de meses trabalhados. O resultado de metas segue o da área atual e, caso o colaborador não tenha metas individuais cadastradas em sistema, serão utilizados os resultados do gestor.
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
				@click="isContent09Visible = true; prosseguir('content09')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 07 -->
	
	
	
	
	
	<!-- conteúdo 09 -->
	<v-card 
	v-show="isContent09Visible"
	id="content09" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_video" 
	style="z-index:7; "
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_oportunidades/grade_header_azul.png" />
		
		<v-card-text class="reveal fade-left mb-10">
					<p class="mt-6 texto_branco">
						Assista ao vídeo para conhecer a composição das metas, o peso atribuído a cada uma delas, e como é calculada a Remuneração Variável Anual para cada categoria profissional.
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
				@click="isContent08Visible = true; prosseguir('content08')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 09 -->
	
	<!-- conteúdo 08 -->
	<v-card 
	v-show="isContent08Visible"
	id="content08" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:6; "
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Programa de Reconhecimento
			</h1>
			<p class="my-4">
				Outra forma que utilizamos para agradecer e recompensar nossos colaboradores, é por meio de programas específicos de reconhecimento. Afinal, quem não gosta de ser reconhecido, não é mesmo?
			</p>
			<p class="my-4">
				<strong>Vamos conhecer esses programas. Acompanhe!</strong>
			</p>
		</v-card-text>
		<v-card class="box_dicas pl-0 pr-0 mb-8 reveal fade-bottom" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas abas abaixo para saber mais.  
				</v-card-text>
			</v-card>
		
		<v-card class="show_desktop">
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
				<p>
					O Programa de Reconhecimento integra a política do Einstein de incentivo aos seus colaboradores com base no desempenho e desenvolvimento individual. Esse reconhecimento se dá pelo crescimento horizontal na faixa salarial, ou seja, aumento na remuneração sem mudança de cargo.
				</p>
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
				 <p>
				 	Descrição de cargo é um instrumento que permite obter as características mais importantes de um cargo, incluindo: a natureza geral do trabalho executado, responsabilidades específicas, o nível de autoridade delegado, resultados gerais esperados e os requisitos mínimos esperados de conhecimento e escolaridade do ocupante do cargo. 
				 </p>
				</v-window-item>
			  </v-window>
			</v-card-text>
		  </v-card>
		
		
		<v-card class="show_mobile">
			<v-tabs
			v-model="tab"
			direction="vertical"
			color="white"
			bg-color="none"
		>
			  <v-tab value="one"><span style="color:#202428;">O programa</span></v-tab>
			  <v-tab value="two"><span style="color:#202428;">Premissas e Regras</span></v-tab>
			  <v-tab value="three"><span style="color:#202428;">Descrição de Cargo</span></v-tab>
			</v-tabs>

			<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
				<v-window-item value="one">
				<p>
					O Programa de Reconhecimento integra a política do Einstein de incentivo aos seus colaboradores com base no desempenho e desenvolvimento individual. Esse reconhecimento se dá pelo crescimento horizontal na faixa salarial, ou seja, aumento na remuneração sem mudança de cargo.
				</p>
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
				 <p>
				 	Descrição de cargo é um instrumento que permite obter as características mais importantes de um cargo, incluindo: a natureza geral do trabalho executado, responsabilidades específicas, o nível de autoridade delegado, resultados gerais esperados e os requisitos mínimos esperados de conhecimento e escolaridade do ocupante do cargo. 
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
				@click="isContent10Visible = true; prosseguir('content10')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>
	<!-- conteúdo 08 -->
	
	
	
	<!-- conteúdo 10 -->
	<v-card 
	v-show="isContent10Visible"
	id="content10" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:4; "
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Programa Reconhecimento por Tempo de Casa
			</h1>
		</v-card-text>
		
		<v-row justify="center" class="mt-n0">
					<v-col class="mt-4" cols="12" md="6">
						<p>
							Valorizamos as competências, habilidades e talentos de nossos colaboradores e, por isso, incentivamos uma Cultura de Reconhecimento. Queremos deixar claro para o colaborador o quanto ele é importante para nossa Instituição. 
						</p>
						<p class="mt-4">
							Como forma de agradecimento, homenageamos, de forma especial,  as pessoas que completam 10, 20, 30, 40 e 50 anos de Einstein, dando sua contribuição e deixando a sua marca na nossa história de excelência em saúde e atendimento ao paciente.
						</p>
						<p class="mt-4">
							Os colaboradores recebem medalhas de bronze, prata ou ouro, acompanhadas de carta de agradecimento do presidente pelo tempo de contribuição, além de livro ou vídeo com histórias dos homenageados.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<v-img class="" src="./img/tela_oportunidades/cont10_img.png" />
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
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
				@click="isContent11Visible = true; prosseguir('content11')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>
	<!-- conteúdo 10 -->
	
	<!-- conteúdo 11 -->
	<v-card 
	v-show="isContent11Visible"
	id="content11" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont11" 
	style="z-index:3; "
	>
		<v-img class="mx-auto grade_header" src="./img/tela_oportunidades/grade_header.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="mt-4 texto_azul">
				Programa Elogie seu Colega
			</h1>
		</v-card-text>


<v-row justify="center" class="mt-n0">
					<v-col style="color:#1B1F45" class="mt-4" cols="12" md="6">
						<p>
							Uma Cultura de Reconhecimento fortalece o nosso jeito de cuidar e nos motiva a ser ainda melhores. Manter ela viva é responsabilidade de todos nós!
						</p>
						<p class="mt-4">
							Seu colega fez um bom trabalho? Divulgue, elogie! Quando a gente faz um elogio, todos ficam mais fortes: quem faz e quem recebe!
						</p>
						<p class="mt-4">
							Para elogiar um(a) colega pela atuação conforme os pilares Segurança, Paixão por Servir e Atenção aos Detalhes, acesse:
						</p>
						<p class="mt-4">
							<strong>Sou Einstein > Menu  Para Você > Faça um elogio aqui</strong>
						</p>
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
	<!-- conteúdo 11 -->
	
	<!-- conteúdo 12 -->
	<v-card
	id="content12" 
	v-show="isContent12Visible"
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto mt-2  bg-transparent" 
	style="z-index:2; "
	>
		
	
	<v-img class="mx-auto mb-4 mt-16" src="./img/tela_oportunidades/cont10_grade.png" />
	<v-img class="notebook mx-auto mb-4 mt-16" src="./img/tela_oportunidades/laptop-2.png" />
	
<v-card class="box_dicas_cont5 pl-0 pr-0 mt-n8 reveal fade-bottom mx-auto" style="z-index:20;">
		<v-card-text align="left">
			<span class="texto_azul"><strong>Como acessar?</strong></span>
			<v-img class="mx-auto my-2 qr-code" src="./img/tela_oportunidades/qr-code2.png" />
			<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> <a style="text-decoration:none" href="https://sbibae.sharepoint.com.mcas.ms/sites/sou.einstein-institucional/SitePages/Reconhecimento-e-recompensa.aspx" target="_blank"><strong>Clique aqui</strong></a> e entre em nossa página.
		</v-card-text>
	</v-card>
	
	<v-card 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0  v-card-conteudos_cont5" 
	style="z-index:1; "
	>


		<v-row class="mt-12 texto_cont5">

			<v-col cols="12" sm="6" md="5" align-self="center">
				<v-card-text class="pl-0 pr-0 reveal fade-left">
					<p style="text-transform:uppercase;font-size:1.5em; line-height:1.5em" class="mt-8 texto_branco texto_notebook">
						ACESSE A PÁGINA DE RECONHECIMENTO E RECOMPENSA NO SOU EINSTEIN E ENCONTRE TODAS AS INFORMAÇÕES QUE VOCÊ PRECISA!
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
				class=" mt-16 mb-4 mx-auto "
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent13Visible = true; prosseguir('content13')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>


	</v-card>
	</v-card>

	<!-- conteúdo 12 -->
	
	
	<!-- conteúdo 13 footer -->
	<v-card 
	v-show="isContent13Visible"
	id="content13" 
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

	<!-- conteúdo 13 -->


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
	import { useAnim, useScrollMonitor } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content13')

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
	const isContent11Visible = ref(false)
	const isContent12Visible = ref(false)
	const isContent13Visible = ref(false)
	const isTooltip1Visible = ref(false)
	const isTooltip2Visible = ref(false)
	const isTooltip3Visible = ref(false)
	const isTooltip4Visible = ref(false)
	const isTooltip5Visible = ref(false)
	const isTooltip6Visible = ref(false)
	const isTooltip7Visible = ref(false)

	


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
.v-card-conteudos_cont11 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_oportunidades/cont11_fundo.jpg");
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
	margin-bottom: 30px;
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
line-height:1.5em;
}
.v-expansion-panel-title {
    font-size: 1.3rem;
    line-height: 1;
    min-height: 48px;
	color:$primaryDark;
	font-weight:500;
	font-family: 'montserrat' !important;
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
    top: 30%;
    left: 38%;
    transform: translate(-50%, -50%);
	width:300px;
}
.triangulo-tool-tip1 {
    position: absolute !important;
    top: 43%;
    left:-7%;
    z-index: 6005 !important;
    transform: rotate(30deg) !important;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-2 {
position: absolute !important;
    z-index: 6002 !important;
    top: 70%;
    left: 38%;
    transform: translate(-50%, -50%);
	width:300px;
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
    top: 59%;
    left: 39%;
    transform: translate(-50%, -50%);
    width: 300px;
	line-height: normal;
}
.triangulo-tool-tip3 {
    position: absolute !important;
    top: -11%;
    left: 43%;
    z-index: 6005 !important;
    transform: rotate(-120deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-4 {
    position: absolute !important;
    z-index: 6002 !important;
    top: 49%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 300px;
	line-height: normal;
}
.triangulo-tool-tip4 {
    position: absolute !important;
    top: -11%;
    left: 43%;
    z-index: 6005 !important;
    transform: rotate(-120deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-5 {
    position: absolute !important;
    z-index: 6002 !important;
    top: 20%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 400px;
	line-height: normal;
}
.triangulo-tool-tip5 {
    position: absolute !important;
    top: 94%;
    left: 60%;
    z-index: 6005 !important;
    transform: rotate(60deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-6 {
position: absolute !important;
    z-index: 6002 !important;
    top: 44%;
    left: 52%;
    transform: translate(-50%, -50%);
	width: 300px;
	line-height: normal;
}
.triangulo-tool-tip6 {
    position: absolute !important;
    top: 94%;
    left: 48%;
    z-index: 6005 !important;
    transform: rotate(60deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-7 {
position: absolute !important;
    z-index: 6002 !important;
    top: 31%;
    left: 38%;
    transform: translate(-50%, -50%);
	width: 300px;
	line-height: normal;
}
.triangulo-tool-tip7 {
    position: absolute !important;
    top: 94%;
    left: 42%;
    z-index: 6005 !important;
    transform: rotate(60deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
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
	.texto_notebook{
	margin-top:180px!important;
	}
	
	.v-expansion-panel-title{
	color:#1B1F45;
	}
@media screen and (max-width: 1277px){
.btn_img{
height:50px;
}
.tool-tip-1 {
top: 32%;
left: 44%;
}
.tool-tip-2 {
top: 72%;
left: 43%;
}


}
@media screen and (max-width: 768px){
	.texto_notebook{
	margin-top:50px!important;
	}
.icone_cont2{
width:40%;
}
.notebook{
    position: absolute;
    top: 56px;
    left: 8%;
    z-index: 20;
}
.texto_cont5{
margin-top: 290px!important;
}
.box_dicas_cont5 {
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
    width: 40%;
    position: absolute;
    top: 10%;
    left: 54%;
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
.btn_img{
height:40px;
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8em;
	}
.tool-tip-1 {
    top: 50%;
    left: 50%;
	width:90%;
}
.triangulo-tool-tip1 {
    top: 36%;
    left:30%;
}
.tool-tip-2 {
    top: 50%;
    left: 50%;
	width:90%;
}

.triangulo-tool-tip2 {
    top: 25%;
    left: 30px;
}
.box_dicas_cont6 {
	width: 100%;
}

.tool-tip-3 {
    top: 59%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip3 {
    top: -11%;
    left: 30%;
}
.tool-tip-4 {
    top: 53%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip4 {
    top: -11%;
    left: 55%;
}
.tool-tip-5 {
    top: 20%;
    left: 50%;;
    width: 98%;
}
.triangulo-tool-tip5 {
    top: 94%;
    left: 70%;
}
.tool-tip-6 {
    top: 40%;
    left: 50%;
	width: 90%;
}
.triangulo-tool-tip6 {
    top: 94%;
    left: 48%;
}
.tool-tip-7 {
    top: 25%;
    left: 50%;
	width: 90%;
}
.triangulo-tool-tip7 {
    top: 90%;
    left: 25%;
}

}

@media screen and (max-width: 500px){
		.texto_notebook{
	margin-top:0px!important;
	}
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8rem;
	}
.tool-tip-3 {
    top: 63%;
    left: 50%;
    width: 98%;
}
.triangulo-tool-tip3 {
    top: -11%;
    left: 22%;
}
.tool-tip-4 {
    top: 53%;
    left: 50%;
     width: 98%;
}
.triangulo-tool-tip4 {
    top: -11%;
    left: 55%;
}
.tool-tip-5 {
    top: 47%;
    left: 31%;
    width: 59%;
}
.triangulo-tool-tip5 {
    top: 51%;
    left: 92%;
    transform: rotate(-30deg) !important;
}
.tool-tip-6 {
    top: 40%;
    left: 50%;
	 width: 98%;
}
.triangulo-tool-tip6 {
    top: 94%;
    left: 48%;
}
.tool-tip-7 {
    top: 25%;
    left: 50%;
	 width: 98%;
}
.triangulo-tool-tip7 {
    top: 90%;
    left: 25%;
}

}


</style>