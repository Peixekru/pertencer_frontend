<template>
	<!-- header DESEMPENHO-->
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
			title="GESTÃO DE DESEMPENHO" />
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
				O Einstein está sempre perto de você!
			</p>
			<p class="texto_branco mt-4">
				Durante toda sua trajetória, você é acompanhado pelo seu gestor direto e/ou referência técnica e, também, pela equipe de RH do Einstein.
			</p>
			<p class="texto_branco mt-4">
				Eles fazem a gestão do seu desempenho por meio de avaliações sistemáticas, conversam com você para sugerir caminhos, escutar suas reivindicações e ajudar a estabelecer metas de carreira para o seu crescimento profissional.
			</p>
			<p class="texto_branco mt-4">
				Tudo isso é realizado por meio de metodologias de avaliação, estratégias de acompanhamento, análises de dados e de indicadores e planos de desenvolvimento individuais e organizacionais. E, principalmente, por meio de diálogos contínuos, que acontecem no dia a dia, até mesmo durante o cafezinho. Esse é o jeito de ser do Einstein!
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
				O <strong>Ciclo de Desempenho</strong> define, acompanha, desenvolve e reconhece os profissionais e sua trajetória dentro da instituição, possibilitando transparência no relacionamento líder e liderado, em um ambiente saudável de confiança e troca. 
			</p>  
			<p class="texto_branco mt-4">
				As ações acontecem ao longo do ano e buscam alinhar o que é esperado do colaborador com a avaliação de competências, a análise de pontos fortes e oportunidades de melhoria, além de estabelecer planos de ação para o próximo ciclo. 
			</p>
			<p class="texto_branco mt-4">
				Com isso, o colaborador tem clareza do que deve fazer, e quais competências são esperadas e serão analisadas ao final do ciclo. Os resultados são utilizados em diferentes programas e iniciativas internas que compõem a jornada de desenvolvimento dos colaboradores, como: recrutamento interno, ações de reconhecimento e recompensa, programas de formação e desenvolvimento e capacitações externas. 
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_competencias" 
	style="z-index:10;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />
		
		<v-row class="mt-2">
		<v-col cols="12" md="7">
			<h2 class="mt-n4 font-weight-bold texto_azul reveal fade-left">
				O que são competências e como elas são avaliadas
			</h2>
			<p class="mt-4 reveal fade-left">
				Suas competências são as características que você precisa ter para realizar determinada atividade. O Einstein tem um Programa de Competências para todos os cargos, com competências definidas de acordo com os grupos profissionais e níveis de complexidade. 
			</p>
			<p class="mt-4 reveal fade-left">
				Há duas formas de avaliar as competências: uma formal e outra informal. 
			</p>
			
			<p class="mt-4 reveal fade-left">
				A avaliação formal inclui: autoavaliação, avaliação parcial e avaliação final. É o momento de formalizar o desempenho.
			</p>
			
			<p class="mt-4 reveal fade-left">
				A avaliação informal é realizada continuamente, nos diálogos que você tem com seu gestor no dia a dia, ao longo do ano. 
			</p>
			
			<p class="mt-4 reveal fade-left">
				Vamos explicar, em linhas gerais, como são feitas essas avaliações.
			</p>
			
		</v-col>
		<v-col cols="12" md="5" class="img_competencias">
		<v-img height="650" class="mx-auto mt-10" src="./img/tela_desempenho/img_competencias.png" />
		</v-col>
	</v-row>


	<!--Btn final-->
		<v-container class="d-flex justify-center mb-4 btn_competencias">
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

<!-- conteúdo 11 -->

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
		
			


	<v-row class="mt-6">
		<v-col cols="12" md="12" align="center">
			<h2 style="color:#2B7080" class="mt-n4 font-weight-bold reveal fade-left">
				Avaliação Formal de Competências
			</h2>

		</v-col>
		<v-col cols="12" md="7">
			<v-card 
			width="100%" 
			elevation="3"
			class="pa-4 mt-4" 
			style="border-radius:15px;background-color:#00A4E1"
			align="center"
			>
					<p class="texto_branco" style="font-size:1.5em">
						<strong>Autoavaliação</strong>
					</p>
			</v-card>	
			<v-img width="150px" class="mx-auto mt-4" src="./img/tela_desempenho/seta_baixo.png" />

			<p class="mt-4">
				 Na autoavaliação, você preenche um formulário que lhe dá a oportunidade de refletir sobre suas entregas e seu desempenho, analisar suas competências e ampliar seu autoconhecimento e autodesenvolvimento. Nessa fase, você se atribuirá notas de acordo com a escala:
			</p>
			<p class="mt-4">
				 <strong>EX – Excepcional</strong> – entrega 150% do esperado.
			</p>
			<p class="mt-4">
				 <strong>AC – Acima do Esperado</strong> – entrega 125% do esperado.
			</p>
			<p class="mt-4">
				 <strong>AT – Atinge as Expectativas</strong> – entrega 100% do esperado.
			</p>
			<p class="mt-4">
				 <strong>RE – Requer Melhorias</strong> – entrega 75% do esperado.
			</p>
			<p class="mt-4">
				 <strong>IN – Insatisfatório</strong> – entrega 50% do esperado.
			</p>

		</v-col>
		
		<v-col cols="12" md="5">
			<v-card 
			width="100%" 
			elevation="3"
			class="pa-4 mt-4" 
			style="border-radius:15px;background-color:#00A4E1"
			align="center"
			>
					<p class="texto_branco" style="font-size:1.5em">
						<strong>Avaliação Final</strong>
					</p>
			</v-card>	
			<v-img width="150px" class="mx-auto mt-4" src="./img/tela_desempenho/seta_baixo.png" />
			<p class="mt-4">
				 Na avaliação final, feita pelo gestor ou a referência técnica da área, é realizada uma conversa sobre as avaliações feitas, visando chegar a um consenso sobre os resultados apresentados. Neste momento, são estabelecidas as metas de carreira, sugeridas ações para seu desenvolvimento e aprimoramento para o próximo ciclo, e feitos os planos de desenvolvimento individual e  organizacional (PDI e PDO).
			</p>

		</v-col>
		<v-col cols="12" md="12">
			<v-card 
			width="100%" 
			elevation="3"
			class="pa-4 mt-4" 
			style="border-radius:15px;background-color:#00A4E1"
			align="center"
			>
					<p class="texto_branco" style="font-size:1.5em">
						<strong>Avaliação Parcial</strong>
					</p>
			</v-card>	
			<v-img width="150px" class="mx-auto mt-4" src="./img/tela_desempenho/seta_baixo.png" />
			
			<v-row class="mt-0">
				<v-col cols="12" md="9" align="left">
					<p class="mt-0">
						 Na avaliação parcial, você avalia e é avaliado por outros colaboradores. A avaliação pode ser feita por  um profissional de cargo acima do seu, ou por um profissional de mesmo cargo ou nível hierárquico. Esta avaliação feita pelos pares é obrigatória para toda a equipe de enfermagem. A obrigatoriedade desta etapa deve-se, em partes, ao selo Magnet de certificação.
					</p>

					<p class="mt-4">
						 A avaliação parcial é uma opcional a todos os colaboradores da SBIBAE. 
						O avaliador principal pode indicar outro profissional para contribuir com comentários na avaliação do colaborador, considerando sobretudo aqueles que tiveram trocas ao longo do último ano – desde que seja de um cargo acima do avaliado. 
					</p>

					<p class="mt-4">
						Já a avaliação Par Magnet é obrigatória para o público da enfermagem. 
						O avaliador principal deve indicar um profissional par para realizar essa etapa – e o par precisa necessariamente ter o mesmo cargo que o avaliado. 
						Por exemplo: Se o avaliado for um técnico de enfermagem, o profissional indicado como par precisa ser também atuar como técnico de enfermagem. No caso dos coordenadores, poderá ser um consultor, um coordenador ou outro especialista.  
					</p>
				</v-col>
				<v-col cols="12" md="3" align-self="center">
					<v-img class="mx-auto" src="./img/tela_desempenho/logo_magnet.png" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
	
	<v-card class="box_dicas pl-0 pr-0 mt-8 reveal fade-right" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos itens abaixo.  
				</v-card-text>
			</v-card>
			
			<v-card class="mt-10 show_desktop">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		  
		>
		  <v-tab value="one"><span style="color:#202428;">Metas de Carreira</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">Plano de Desenvolvimento Individual – PDI</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			<v-window-item value="one" class="pa-8">
			  <p>
				Na avaliação final, ao serem estabelecidas as Metas de Carreira, você deverá indicar, no mínimo, uma frente ou tema que tenha interesse em atuar na Instituição.
			  </p>
				<p class="mt-4">
				É importante que você converse com a sua liderança a respeito dos seus objetivos e metas para, juntos, vocês alinharem um Plano de Desenvolvimento que atenda aos requisitos necessários para alcançar a posição em questão.
				</p>
				<p class="mt-4">
				Para isso, crie objetivos claros, coloque prazos e faça o acompanhamento de suas metas de carreira.
				</p>
			</v-window-item>
				
				

			<v-window-item value="two" class="pa-8">
			 	<p>
			 		O PDI tem o objetivo de pensar em ações para desenvolvimento ou aprimoramento de competências para o próximo ciclo.
				</p>
				<p class="mt-4">
			 		É direcionado pela Metodologia 70/20/10 e envolve três frentes:
				</p>
				<ul class="ml-8 mt-4">
					<li class="mt-2"><strong>70% com a PRÁTICA (Experiências)</strong> — Aprender ao experimentar e praticar no dia a dia de trabalho. Exemplos: assumir as férias do gestor, ser líder de equipe, ou multiplicar o conhecimento apadrinhando um profissional no Programa de Pares.</li>
					<li class="mt-2"><strong>20% com o OUTRO (Pessoas)</strong> — Aprender por meio de interação com os outros, em ambientes de conversas e compartilhamentos. Exemplos: participar de grupos, comitês, aprender com outro colaborador, realizar uma mentoria, ou a prática de visita técnica.</li>
					<li class="mt-2"><strong>10% com o SABER </strong>— Aprender de maneira formal. Exemplos: realização de cursos, especializações, treinamentos, leituras e outros itens sobre conhecimento teórico.</li>
				</ul>

			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  <v-row class="pa-10">
					<v-col cols="12" md="12">
						<p>
							O PDO parte da análise de fatores internos e externos, identifica as competências-chave, avalia as existentes e as lacunas para alcance dos objetivos estratégicos. Baseado nesses dados, propõe o desenvolvimento permanente dos profissionais e estabelece ações a serem realizadas no médio e longo prazos.
						</p>
					</v-col>
					<v-col cols="12" md="5">
						<v-img class="mx-auto mt-4" src="./img/tela_desempenho/img_tabs.png" />
					</v-col>
					<v-col cols="12" md="7" align-self="center">
						<p class="mt-4">
							Definir Estratégias e Ações para aquisição e/ou desenvolvimento das competências críticas para a SBIBAE – atuais e futuras.
						</p>
						<p class="mt-4">
							Aprimorar o mecanismo de gestão e acompanhamento das competências e recursos disponíveis interna e externamente.
						</p>
						<p>
							Reforçar a responsabilidade pelo desenvolvimento, compartilhada entre a liderança e os colaboradores.
						</p>
						<p class="mt-4">
							Atuar continuamente no exercício de planejamento sucessório, identificando competências, recursos e ações para aquisição, desenvolvimento e permanência das competências-chave.
						</p>
					</v-col>
				</v-row>
				
			</v-window-item>
		  </v-window>
		</v-card-text>
	  </v-card>
	  
	  <v-card class="mt-10 show_1277">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		  
		>
		  <v-tab value="one"><span style="color:#202428;">Metas de Carreira</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">Plano de Desenvolvimento Individual – PDI</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			<v-window-item value="one" class="pa-8">
			  <p>
				Na avaliação final, ao serem estabelecidas as Metas de Carreira, você deverá indicar, no mínimo, uma frente ou tema que tenha interesse em atuar na Instituição.
			  </p>
				<p class="mt-4">
				É importante que você converse com a sua liderança a respeito dos seus objetivos e metas para, juntos, vocês alinharem um Plano de Desenvolvimento que atenda aos requisitos necessários para alcançar a posição em questão.
				</p>
				<p class="mt-4">
				Para isso, crie objetivos claros, coloque prazos e faça o acompanhamento de suas metas de carreira.
				</p>
			</v-window-item>
				
				

			<v-window-item value="two" class="pa-8">
			 	<p>
			 		O PDI tem o objetivo de pensar em ações para desenvolvimento ou aprimoramento de competências para o próximo ciclo.
				</p>
				<p class="mt-4">
			 		É direcionado pela Metodologia 70/20/10 e envolve três frentes:
				</p>
				<ul class="ml-8 mt-4">
					<li class="mt-2"><strong>70% com a PRÁTICA (Experiências)</strong> — Aprender ao experimentar e praticar no dia a dia de trabalho. Exemplos: assumir as férias do gestor, ser líder de equipe, ou multiplicar o conhecimento apadrinhando um profissional no Programa de Pares.</li>
					<li class="mt-2"><strong>20% com o OUTRO (Pessoas)</strong> — Aprender por meio de interação com os outros, em ambientes de conversas e compartilhamentos. Exemplos: participar de grupos, comitês, aprender com outro colaborador, realizar uma mentoria, ou a prática de visita técnica.</li>
					<li class="mt-2"><strong>10% com o SABER </strong>— Aprender de maneira formal. Exemplos: realização de cursos, especializações, treinamentos, leituras e outros itens sobre conhecimento teórico.</li>
				</ul>

			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  <v-row class="pa-10">
					<v-col cols="12" md="12">
						<p>
							O PDO parte da análise de fatores internos e externos, identifica as competências-chave, avalia as existentes e as lacunas para alcance dos objetivos estratégicos. Baseado nesses dados, propõe o desenvolvimento permanente dos profissionais e estabelece ações a serem realizadas no médio e longo prazos.
						</p>
					</v-col>
					<v-col cols="12" md="5">
						<v-img class="mx-auto mt-4" src="./img/tela_desempenho/img_tabs.png" />
					</v-col>
					<v-col cols="12" md="7" align-self="center">
						<p class="mt-4">
							Definir Estratégias e Ações para aquisição e/ou desenvolvimento das competências críticas para a SBIBAE – atuais e futuras.
						</p>
						<p class="mt-4">
							Aprimorar o mecanismo de gestão e acompanhamento das competências e recursos disponíveis interna e externamente.
						</p>
						<p>
							Reforçar a responsabilidade pelo desenvolvimento, compartilhada entre a liderança e os colaboradores.
						</p>
						<p class="mt-4">
							Atuar continuamente no exercício de planejamento sucessório, identificando competências, recursos e ações para aquisição, desenvolvimento e permanência das competências-chave.
						</p>
					</v-col>
				</v-row>
				
			</v-window-item>
		  </v-window>
		</v-card-text>
	  </v-card>

			<v-card class="mt-10 show_mobile">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  direction="vertical"
		  grow
		  
		>
		  <v-tab value="one"><span style="color:#202428;">Metas de Carreira</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">Plano de Desenvolvimento Individual – PDI</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			<v-window-item value="one" class="pa-8">
			  <p>
				Na avaliação final, ao serem estabelecidas as Metas de Carreira, você deverá indicar, no mínimo, uma frente ou tema que tenha interesse em atuar na Instituição.
			  </p>
				<p class="mt-4">
				É importante que você converse com a sua liderança a respeito dos seus objetivos e metas para, juntos, vocês alinharem um Plano de Desenvolvimento que atenda aos requisitos necessários para alcançar a posição em questão.
				</p>
				<p class="mt-4">
				Para isso, crie objetivos claros, coloque prazos e faça o acompanhamento de suas metas de carreira.
				</p>
			</v-window-item>
				
				

			<v-window-item value="two" class="pa-8">
			 	<p>
			 		O PDI tem o objetivo de pensar em ações para desenvolvimento ou aprimoramento de competências para o próximo ciclo.
				</p>
				<p class="mt-4">
			 		É direcionado pela Metodologia 70/20/10 e envolve três frentes:
				</p>
				<ul class="ml-8 mt-4">
					<li class="mt-2"><strong>70% com a PRÁTICA (Experiências)</strong> — Aprender ao experimentar e praticar no dia a dia de trabalho. Exemplos: assumir as férias do gestor, ser líder de equipe, ou multiplicar o conhecimento apadrinhando um profissional no Programa de Pares.</li>
					<li class="mt-2"><strong>20% com o OUTRO (Pessoas)</strong> — Aprender por meio de interação com os outros, em ambientes de conversas e compartilhamentos. Exemplos: participar de grupos, comitês, aprender com outro colaborador, realizar uma mentoria, ou a prática de visita técnica.</li>
					<li class="mt-2"><strong>10% com o SABER </strong>— Aprender de maneira formal. Exemplos: realização de cursos, especializações, treinamentos, leituras e outros itens sobre conhecimento teórico.</li>
				</ul>

			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  <v-row class="pa-10">
					<v-col cols="12" md="12">
						<p>
							O PDO parte da análise de fatores internos e externos, identifica as competências-chave, avalia as existentes e as lacunas para alcance dos objetivos estratégicos. Baseado nesses dados, propõe o desenvolvimento permanente dos profissionais e estabelece ações a serem realizadas no médio e longo prazos.
						</p>
					</v-col>
					<v-col cols="12" md="5">
						<v-img class="mx-auto mt-4" src="./img/tela_desempenho/img_tabs.png" />
					</v-col>
					<v-col cols="12" md="7" align-self="center">
						<p class="mt-4">
							Definir Estratégias e Ações para aquisição e/ou desenvolvimento das competências críticas para a SBIBAE – atuais e futuras.
						</p>
						<p class="mt-4">
							Aprimorar o mecanismo de gestão e acompanhamento das competências e recursos disponíveis interna e externamente.
						</p>
						<p>
							Reforçar a responsabilidade pelo desenvolvimento, compartilhada entre a liderança e os colaboradores.
						</p>
						<p class="mt-4">
							Atuar continuamente no exercício de planejamento sucessório, identificando competências, recursos e ações para aquisição, desenvolvimento e permanência das competências-chave.
						</p>
					</v-col>
					
					
				</v-row>
				
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

<!-- conteúdo 13 -->

<!-- conteúdo 12 -->
	<v-card 
	v-show="isContent12Visible"
	id="content12" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont12" 
	style="z-index:7;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />
			<h3 style="color:#5BC6E8;font-family:montserrat" class="mt-n4 font-weight-bold reveal fade-left">
				AVALIAÇÃO INFORMAL DE COMPETÊNCIAS
			</h3>
			<p class="mt-4 reveal fade-left texto_branco">
				A avaliação informal é feita diariamente, durante todo o ano, por meio de diálogos contínuos.
			</p>
			<p class="mt-4 reveal fade-left texto_branco">	
				Assista ao vídeo para entender como é feita esse modalidade de avaliação.
			</p>
			<p style="color:#5BC6E8;" class="mt-4 reveal fade-left">	
				<strong>Se tiver dúvidas, busque informações! Entre em contato conosco.</strong>
			</p>
		
		<v-row class="mt-2">

		<v-col cols="12" md="12">
			<!--Vimeo-->
            <v-container 
            class="mt-5 pa-0 reveal fade-bottom"
            >
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/886970067?h=8a814ce610&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="movie"></iframe></div>

            </v-container>
		</v-col>
		
		<v-col cols="12" md="6" align-self="center">
			<v-row class="mt-1 row_ico_avaliacao">
				<v-col cols="12" md="2" align-self="center">
					<v-img class="mx-auto mt-4 ico_avaliacao" src="./img/tela_desempenho/avaliacao_ico_1.png" />
				</v-col>

				<v-col cols="12" md="10" align-self="center">
					<p class="mt-4 texto_branco">
						SAC – RH
					</p>
					<p class="mt-0 texto_branco">
						<a  style="color:#5BC6E8;font-family:montserrat;text-decoration:none" href="mailto:sacrh@einstein.br"><strong>sacrh@einstein.br</strong></a>
					</p>
				</v-col>
				<v-col cols="12" md="2" align-self="center">
					<v-img class="mx-auto mt-4 ico_avaliacao" src="./img/tela_desempenho/avaliacao_ico_2.png" />
				</v-col>

				<v-col cols="12" md="10" align-self="center">
					<p class="mt-4 texto_branco">
						Gestão de Desempenho
					</p>
					<p class="mt-0 texto_branco">
						<a  style="color:#5BC6E8;font-family:montserrat;text-decoration:none" href="mailto:gestaodedesempenho@einstein.br"><strong>gestaodedesempenho@einstein.br</strong></a>
					</p>
				</v-col>
			</v-row>
		</v-col>
		
		<v-col cols="12" md="6" align-self="center">
			<v-row class="mt-1 row_ico_avaliacao">
				
				<v-col cols="12" md="2" align-self="center">
					<v-img class="mx-auto mt-4 ico_avaliacao" src="./img/tela_desempenho/avaliacao_ico_3.png" />
				</v-col>

				<v-col cols="12" md="10" align-self="center">
					<p class="mt-4 texto_branco">
						Help Desk<br><span style="font-size:0.8em">(para dificuldade de acesso no PGP relacionado ao login, senha ou primeiro acesso)</span>
					</p>
					<p class="mt-0 texto_branco">
						<a  style="color:#5BC6E8;font-family:montserrat;text-decoration:none" href="https://spreadup.spread.com.br/portal/login.asp" target="_blank"><strong>Clique aqui</strong></a>
					</p>
				</v-col>
				<v-col cols="12" md="2" align-self="center">
					<v-img class="mx-auto mt-4 ico_avaliacao" src="./img/tela_desempenho/avaliacao_ico_2.png" />
				</v-col>

				<v-col cols="12" md="10" align-self="center">
					<p class="mt-4 texto_branco">
						Sou Einstein – Aplicar para PDI e programa de competências
					</p>
					<p class="mt-0 texto_branco">
						<a  style="color:#5BC6E8;font-family:montserrat;text-decoration:none" href="https://sbibae.sharepoint.com/sites/Desenvolvimento2/SitePages/Gest%C3%A3o-de-Desempenho(2).aspx" target="_blank"><strong>Clique aqui</strong></a>
					</p>
					
					 

					
					
				</v-col>
			</v-row>
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
				@click="isContent14Visible = true; prosseguir('content14')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 12 -->

<!-- conteúdo 14 -->
	<v-card 
	v-show="isContent14Visible"
	id="content14" 
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto pt-0 pl-16 pr-16 v-card-conteudos_planosucessorio" 
	style="z-index:5;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_roxa.png" />

	<v-card elevation="0" class="bg-transparent olhonofuturo" style="" align="center">
		<p style="font-size:2em;text-transform:uppercase" class="mx-auto">
			<strong>#Einsteindeolhonofuturo</strong>
		</p>
	</v-card>

	</v-card>

<!-- conteúdo 14 -->

<!-- conteúdo 14 -->
	<v-card 
	v-show="isContent14Visible"
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pl-16 pr-16 v-card-conteudos" 
	style="z-index:4;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header.png" />
		<h2 style="text-transform:uppercase" class="mt-n4 font-weight-bold text-secondary reveal fade-left">
				Planejamento Sucessório
			</h2>
			<p class="mt-4">
			Com foco no futuro da organização, o Einstein realiza um planejamento sucessório que envolve o mapeamento de profissionais com potencial e desempenho para assumir outras posições em curto, médio ou longo prazos.
			</p>
			
			<v-row no-gutters align="center" class="mx-auto mt-8">
				<v-col cols="12" md="6">
					<p class="mt-4 reveal fade-left">
						<strong>Elaboração de mapa sucessório</strong>
					</p>
					<p class="mt-4 mr-4 reveal fade-left">
						Exercício estratégico que visa avaliar a capacidade da organização em repor pessoas em posição estratégica para o negócio.
					</p>
				</v-col>
				<v-col cols="12" md="6">
					<p class="mt-4 reveal fade-left">
						<strong>Proposição de ações de desenvolvimento</strong>
					</p>

					<p class="mt-4 mr-4 reveal fade-left">
						Preparação de pessoas capazes para assumir posições de maior nível de complexidade.
					</p>
				</v-col>
				
				<v-col cols="12" md="12">
					<p style="text-transform:uppercase"  class="mt-8 mr-4 reveal fade-left text-secondary">
						<strong>Essa é mais uma forma de ser do Einstein para ter sempre os melhores talentos em seu quadro de profissionais!</strong>
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
				@click="isContent17Visible = true; prosseguir('content17')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 15 -->

<!-- conteúdo 17 -->
	<v-card 
	v-show="isContent17Visible"
	id="content17" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:3; margin-bottom:30px;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_desempenho/grade_header_branco.png" />

			<v-row align="center" class="mx-auto mb-16">
				<v-col cols="12" md="7">
				</v-col>
				<v-col cols="12" md="5">
					<p class="mt-4 mb-4 reveal fade-left texto_branco">
						O ambiente no Einstein é estimulante e desafiador todos os dias!
					</p>
					<p class="mt-4 mb-4 reveal fade-left texto_branco">	
						Mas fique tranquilo, pois aqui você nunca está sozinho. Nós acompanhamos você de perto, valorizando suas competências e seu desempenho, e damos todo apoio e suporte para que enfrente seus desafios e realize sua jornada com satisfação.
					</p>
					<p class="mt-4 mb-4 reveal fade-left texto_branco">	
						Para nós, cada colaborador é essencial para garantir a excelência da nossa instituição.
					</p>
					<p class="mt-4 mb-4 reveal fade-left texto_branco">	
						<strong>#Einsteinsemprejuntocomvocê</strong>
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
.v-card-conteudos_competencias {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/fundo_competencias.jpg");
	background-size: cover;
}
.img_competencias{
position:absolute;
left:55%;
bottom:-3%;
height:700px;
}
.v-card-conteudos_planosucessorio {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_desempenho/fundo_planosucessorio.png");
	background-size: cover;
	background-position:center;
	height:400px;
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
.olhonofuturo{
position:absolute;
bottom:40px;
left: 28%;
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
.img_competencias{
position:absolute;
left:60%;
bottom:-13%;
}
.olhonofuturo{
position:absolute;
bottom:40px;
left: 18%;
}
}
@media screen and (max-width: 950px){
.v-card-conteudos_competencias {
height:1050px
}
.img_competencias{
position:absolute;
left:0%;
bottom:-12%;
}
.btn_competencias{
position:absolute;
left:0%;
bottom:-0%;
}
.ico_avaliacao{
width:15%
}
.row_ico_avaliacao{
text-align:center;
}
.olhonofuturo{
position:absolute;
bottom:40px;
left: 25%;
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
.ico_avaliacao{
width:15%
}
.row_ico_avaliacao{
text-align:center;
}
}
</style>