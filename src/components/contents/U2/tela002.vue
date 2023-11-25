<template>
	<!-- header ensino-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	style="z-index:21;"
	>
		<v-img class="show_desktop" src="./img/tela_desempenho/header.png" />
		<v-img class="show_1277" src="./img/tela_desempenho/header.png" />
		<v-img class="show_mobile" src="./img/tela_desempenho/header_mobile.png" />
		<v-img src="./img/tela_desempenho/header_text.svg" class="header_text"
			title="ENSINO CORPORATIVO E DESENVOLVIMENTO" />
	</v-card>
	<!-- header -->
	
<!-- conteúdo 09 -->
	<v-card 
	v-show="isContent09Visible"
	id="content09" 
	width="100%" 
	elevation="6"
	style="z-index:12;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont9" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_desempenho/grade_header_branco.png" />
	
	<v-row class="mt-2">
		<v-col cols="12" md="6">
			<p style="font-size:2em" class="texto_branco">
				Einstein sempre perto de você 
			</p>
			<p class="texto_branco mt-4">
				O Programa de Idiomas estimula a prática de idiomas na Instituição afim de atender as demandas dos novos projetos internacionais e o incentivo ao autodesenvolvimento do colaborador. 
			</p>
			<p class="texto_branco mt-4">
				É uma ação que proporciona aos colaboradores possibilidades de desenvolvimento pessoal e profissional, alinhadas à estratégia da Sociedade e resultando no impacto da experiência do paciente.
			</p>
			<p class="texto_branco mt-4">
				Através das plataformas do Clube de Benefícios New Value e do Instituto IFEPAF, você tem acesso a descontos em diversas escolas.
			</p>
			<p class="texto_branco mt-4">
				Se desejar, entre em contato pelo e-mail <a style="color:#62C9CE" href="mailto:programadeidiomas@einstein.br">programadeidiomas@einstein.br</a>.
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
				@click="isContent10Visible = true; prosseguir('content10')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 09 -->
	
	<!-- grafismos -->
	
	<v-card 
	v-show="isContent10Visible"
	id="content10"
	width="100%" 
	style=""
	elevation="0"
	class="bg-transparent mt-n4" 
	>
		<v-img width="100%" class="mx-auto" src="./img/tela_desempenho/grade_gestaododesempenho.png" />
	</v-card>
	
	<!-- grafismos -->
	
	<!-- conteúdo 10 -->
	
	<v-card 
	v-show="isContent10Visible"
	width="100%" 
	elevation="6"
	style="z-index:11;margin-top:-40px;"
	class="mx-auto rounded-lg pt-8 v-card-conteudos_cont10" 
	>
	<v-row class="mt-0">
		<v-col cols="12" md="5">
			<v-img class="mx-auto" src="./img/tela_desempenho/cont10_info.png" />
		</v-col>
		<v-col cols="12" md="7" class="pl-8 d-flex flex-column justify-center align-center">
			<p class="texto_branco">
				O Ciclo de Desempenho define, acompanha, desenvolve e reconhece os profissionais e sua trajetória dentro da instituição, possibilitando transparência no relacionamento líder e liderado, em um ambiente saudável de confiança e troca.  
			<p class="texto_branco mt-4">
				As ações acontecem ao longo do ano e buscam alinhar o que é esperado do colaborador com a avaliação de competências, análise de pontos fortes e oportunidades de melhoria, além de estabelecer planos de ação para o próximo ciclo. 
			</p>
			<p class="texto_branco mt-4">
				Os resultados servem para recrutamento interno, ações de reconhecimento e recompensa, política de formação e desenvolvimento e capacitação externa.
			</p>
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:10;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header.png" />
		<h2 class="mt-n4 font-weight-bold text-secondary reveal fade-left">
			Diálogos contínuos
		</h2>
		<v-row class="mt-2">
		<v-col cols="12" md="5">
			
			<p class="mt-4 reveal fade-left">
				Os colaboradores e as lideranças são incentivados a realizar diálogos contínuos, ao longo do ano. 
			</p>
			<p class="mt-4 reveal fade-left">
				Essas conversas periódicas contribuem para sustentar o direcionamento e orientações sobre os acordos e metas estabelecidos, além de acompanhar o desempenho e orientar perspectivas de carreira do colaborador.  
			</p>
		</v-col>
		<v-col cols="12" md="7">
		<v-img class="mx-auto mt-4" src="./img/tela_desempenho/cont11_img.png" />
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
	v-show="isContent12Visible"
	id="content12" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont12" 
	style="z-index:9;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />
		<h2 style="color:#5BC6E8" class="mt-n4 font-weight-bold reveal fade-left">
				Programa de Competências
			</h2>
		<v-row class="mt-2">
		<v-col cols="12" md="5">
			
			<p class="mt-4 reveal fade-left texto_branco">
				Além de delinear as diferentes iniciativas na jornada do profissional, o Programa de Competências possibilita ao colaborador identificar e direcionar de forma integrada o seu desenvolvimento alinhado com as estratégias da Instituição. 
			</p>
			<p class="mt-4 reveal fade-left texto_branco">
				As competências são agrupadas conforme as categorias profissionais e níveis de complexidade de cada uma delas. 
			</p>
			<p class="mt-4 reveal fade-left texto_branco">
				Assista ao vídeo para saber mais sobre o Programa de Competências. 
			</p>
		</v-col>
		<v-col cols="12" md="7">
			<!--Vimeo-->
            <v-container 
            class="mt-5 pa-0 reveal fade-bottom"
            >
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/885695472?h=8b68fe7a17&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 10px" title="3.2.1 - Ensino Corporativo e Desenvolvimento"></iframe></div>

            </v-container>
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
				:class="appStore.isDarkMode ? 'white-svg' : 'white-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-primary bg_escuro'"
				@click="isContent13Visible = true; prosseguir('content13')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 12 -->

<!-- conteúdo 13 -->
	<v-card 
	v-show="isContent13Visible"
	id="content13" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:8;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header.png" />
		<h2 class="mt-n4 font-weight-bold text-secondary reveal fade-left">
				Plano de Desenvolvimento Individual (PDI)
			</h2>
			<p class="mt-4 reveal fade-left">
				O PDI tem o objetivo de pensar em ações para desenvolvimento ou aprimoramento de competências para o próximo ciclo. 
			</p>
			<p class="mt-4 reveal fade-left">
				É direcionado pela Metodologia 70/20/10 e envolve três frentes:
			</p>
			<ul class="ml-8">
				<li>Experiências — como assumir as férias do gestor, ser líder de equipe, ou ainda multiplicar o conhecimento apadrinhando um profissional no Programa de Pares;</li>
				<li>Pessoas — relacionada à aprendizagem por pares, uma mentoria, ou uma prática de visita técnica;</li>
				<li>Saber — realização de cursos, especializações, leituras e outros itens sobre conhecimento teórico.</li>
			</ul>

	<v-row class="mt-6">
		<v-col cols="12" md="4">
			<v-card 
			width="100%"
			height="440"
			elevation="4"
			class="pa-4"
			style="z-index:8;border: 1mm solid #62C9CE;border-radius: 25px;"
			>
			<v-img height="200px" class="mx-auto mt-6 mb-4 grade_header" src="./img/tela_desempenho/cont12_card1.png" />
			<p align="center">
				Aprendemos ao experimentar e praticar no dia a dia de trabalho.
			</p>
			<p align="center" class="mt-4">
				<strong>Exemplo:</strong> Participação em projetos, representar gestor, entre outros.
			</p>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card 
			width="100%"
			height="440"
			elevation="4"
			class="pa-4"
			style="z-index:8;border: 1mm solid #00A4E1;border-radius: 25px;"
			>
			<v-img height="200px" class="mx-auto mt-6 mb-4 grade_header" src="./img/tela_desempenho/cont12_card2.png" />
			<p align="center">
				Aprendemos por meio da interação com os outros, em ambientes de conversas e compartilhamentos.
			</p>
			<p align="center" class="mt-4">
				<strong>Exemplo:</strong> Participar de grupos e comitês.
			</p>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card 
			width="100%"
			height="440"
			elevation="4"
			class="pa-4"
			style="z-index:8; border: 1mm solid #7D5CB5;border-radius: 25px;"
			>
			<v-img height="200px" class="mx-auto mt-6 mb-4 grade_header" src="./img/tela_desempenho/cont12_card3.png" />
			<p align="center">
				Aprendemos de maneira formal.
			</p>
			<p align="center" class="mt-4">
				<strong>Exemplo:</strong> cursos, treinamentos, leituras, palestras, trilhas de aprendizagem.
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
				@click="isContent14Visible = true; prosseguir('content14')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 13 -->

<!-- conteúdo 14 -->
	<v-card 
	v-show="isContent14Visible"
	id="content14" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:7;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_roxa.png" />
		<h2 class="mt-n4 font-weight-bold text-secondary reveal fade-left">
				Plano de Desenvolvimento Organizacional (PDO)
			</h2>
			<p class="mt-4 reveal fade-left">
				Parte da análise de fatores internos e externos, identifica as competências chave, e avalia as existentes e as lacunas para alcance dos objetivos estratégicos. 


			</p>
			<p class="mt-4 reveal fade-left">
				Baseado nesses dados, propõe o desenvolvimento permanente dos profissionais e estabelece ações a serem realizadas no médio e longo prazos. 
			</p>
			
			<v-container class="mt-8">
			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="1">
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-left texto_preto">
						<p style="text-align:right">
							Definir Estratégias e Ações para aquisição e/ou desenvolvimento das competências críticas para a SBIBAE – atuais e futuras.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_desempenho/rol1_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol1_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol1_folha.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol2_folha.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol2_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							Aprimorar o mecanismo de gestão e acompanhamento das competências e recursos disponíveis interna e externamente.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_desempenho/rol2_barra.svg" />
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
							Reforçar a responsabilidade pelo desenvolvimento, compartilhada entre a liderança e os colaboradores.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_desempenho/rol3_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol3_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol3_folha.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol4_folha.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_desempenho/rol4_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							Atuar continuamente no exercício de planejamento sucessório, identificando competências, recursos e ações para aquisição, desenvolvimento e permanência das competências chave.
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_desempenho/rol4_barra.svg" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="1">

				</v-col>
			</v-row>
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
				@click="isContent15Visible = true; prosseguir('content15')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 14 -->

<!-- conteúdo 15 -->
	<v-card 
	v-show="isContent15Visible"
	id="content15" 
	width="100%" 
	elevation="6"
	class="mt-4 mx-auto rounded-lg pl-16 pr-16 v-card-conteudos_cont15" 
	style="z-index:6; padding-top:540px"
	>
		
		<h2 class="mt-n4 font-weight-bold text-secondary reveal fade-left">
				Planejamento Sucessório
			</h2>
			
			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="6">
					<p class="mt-4 reveal fade-left">
						<strong>Mapa sucessório</strong>
					</p>
					<p class="mt-4 reveal fade-left">
						Exercício estratégico que visa avaliar a capacidade da organização em repor pessoas em posição estratégica para o negócio.
					</p>
				</v-col>
				<v-col cols="12" md="6">
					<p class="mt-4 reveal fade-left">
						<strong>Ações de desenvolvimento</strong>
					</p>

					<p class="mt-4 reveal fade-left">
						Preparação de pessoas capazes para assumir posições de maior nível de complexidade. 
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
				@click="isContent16Visible = true; prosseguir('content16')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 15 -->

<!-- conteúdo 16 -->
	<v-card 
	v-show="isContent16Visible"
	id="content16" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:5;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p style="text-transform: uppercase;" class="mt-4 texto_branco">
						<strong>Programa de Desenvolvimento de Lideranças Einstein - PDLE</strong>
					</p>
					<p class="mt-4 texto_branco">
						Todos os nossos colaboradores são cuidados de forma especial e, para os nossos líderes, criamos o PDLE, um Programa sustentado por quatro pilares. Vamos conhecê-los?
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:4; margin-bottom:30px;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />

			<v-row align="center" class="mx-auto mb-16">
				<v-col cols="12" md="7">
				</v-col>
				<v-col cols="12" md="5">
					<p class="mt-4 mb-4 reveal fade-left text_footer">
						Cuidar de quem cuida  é nossa forma de contribuir para que nossos Colaboradores tenham mais qualidade de vida, trabalhem com satisfação e sejam mais engajados em suas atividades.
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
	import { ref, onMounted } from "vue";
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'
	import { useAnim, useScrollMonitor } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content17')

	//Controle da visibilidade dos conteúdos
	const isContent09Visible = ref(true)
	const isContent10Visible = ref(false)
	const isContent11Visible = ref(false)
	const isContent12Visible = ref(false)
	const isContent13Visible = ref(false)
	const isContent14Visible = ref(false)
	const isContent15Visible = ref(false)
	const isContent16Visible = ref(false)
	const isContent17Visible = ref(false)
	
		//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)
	const isCard03Visible = ref(false)


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
    }),
  }
</script>


<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';



.card-bg-img {
	background-image: url("./img/tela_desempenho/card_1_fundo.png");
	background-size: cover;
}
.card-bg-img2 {
	background-image: url("./img/tela_desempenho/card_2_fundo.png");
	background-size: cover;
}
.card-bg-img3 {
	background-image: url("./img/tela_desempenho/card_3_fundo.png");
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
	background-image: url("./img/tela_desempenho/cont2_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont3_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont5 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont5_fundo.svg");
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
	background-image: url("./img/tela_desempenho/cont9_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont10 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont10_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont12 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/bg_video.svg");
	background-size: cover;
}
.v-card-conteudos_cont15 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont15_fundo.png");
	background-size: contain;
	background-repeat: no-repeat;
	
}
.v-card-conteudos_cont16 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont16_fundo.svg");
	background-size: cover;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont17_fundo.png");
	background-size: cover;
}
.cont6_box {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/cont6_box_fundo.png");
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
@media screen and (max-width: 1277px){
.box_acima_trilhas{
position:relative;
top:-160px
}
.box_abaixo_trilhas{
position:relative;
top:170px
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
}
</style>