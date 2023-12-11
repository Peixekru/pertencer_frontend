<template>
	<!-- header ações de desenvolvimento-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	style="z-index:21;"
	>
		<v-img class="show_desktop" src="./img/tela_ensino/header.png" />
		<v-img class="show_1277" src="./img/tela_ensino/header.png" />
		<v-img class="show_mobile" src="./img/tela_ensino/header_mob.png" />
		<v-img src="./img/tela_ensino/header_text.svg" class="header_text"
			title="AÇÕES DE DESENVOLVIMENTO" />
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
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_ensino/grade_cont4.png" />
		<v-row class="mt-2">
		<v-col cols="12" md="5" align-self="center">

			<p class="mt-4 reveal fade-left">
				O Einstein oferece oportunidades de crescimento e desenvolvimento para seus colaboradores.
			</p>
			<p class="mt-4 reveal fade-left">
				São diversas ações pensadas e desenvolvidas exclusivamente visando nosso potencial humano.
			</p>
			<p class="mt-4 reveal fade-left">
				O cuidado com o crescimento do colaborador vai além, impacta positivamente sua carreira e consequentemente nosso paciente, assim, foram criados Programas de Desenvolvimento voltados para públicos específicos para que o maior número possível de colaboradores fosse alcançado.
			</p>
			
			<p class="mt-4 reveal fade-left">
				<strong>Vamos conhecer esses Programas?</strong>
			</p>

</v-col>
		<v-col cols="12" md="7">
		<v-img class="mx-auto mt-4" src="./img/tela_ensino/cont1_img.png" />
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
	style="z-index:19;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_ensino/grade_header.png" />
		<h1 class="mt-n4 font-weight-bold texto_azul reveal fade-left">
				Programa de Desenvolvimento de Lideranças Einstein - PDLE
			</h1>
			<p class="mt-4 reveal fade-left">
				Todos os nossos colaboradores são cuidados de forma especial e, para os nossos líderes, criamos o <strong>PDLE</strong>, um Programa sustentado por quatro pilares. Clique em cada pilar para conhecê-lo.
			</p>
			
		<v-card class="box_dicas pl-0 pr-0 mt-9 reveal fade-right" style="width: 40%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas abas abaixo para saber mais.  
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
		  <v-tab value="one"><span style="color:#202428;">I) Encontros e Eventos</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">II) Treinamentos</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">III) Incentivos Educacionais</span></v-tab>
		  <v-tab value="four"><span style="color:#202428;">IV) Desenvolvimento Individual</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São encontros com a Diretoria, o Presidente, ou algum convidado de fora para falar sobre determinado tema, voltados para todos os líderes.
						</p>
						<p class="mt-4">
							Geralmente são presenciais, mas podem ocorrer de forma <em>online</em>.
						</p>
						<p class="mt-4">
							A periodicidade é variável, alguns são mensais, outros bimestrais, trimestrais e até anuais.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							Se você quiser conhecer alguns exemplos, acesse o tópico
						</p>
						<p class="mt-4">
							<a class="texto_azul" style="text-decoration:none;" href=""><strong>Encontros e Eventos para Líderes</strong></a>
						</p>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
			<v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São Trilhas de Aprendizagem realizadas com especialistas para treinar lideranças.
						</p>
						<p>
							Podem ocorrer presencialmente, de forma híbrida, <em>online</em> na modalidade síncrona e assíncrona, por meio de <em>workshops</em>, simulações, ou <em>webinar</em>.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							Há programas específicos oferecidos para lideranças de diferentes áreas.
						</p>
						<p class="mt-4">
							Para obter mais informações, acesse: <a class="texto_azul" style="text-decoration:none;" href=""><strong>link ?</strong></a>
						</p>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  	<v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							O Einstein tem uma Política de Incentivo Educacional para atender ao desejo da liderança de fazer uma formação ou participar de congressos sobre temas de interesse.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							<strong>Exemplos de incentivos:</strong>
						</p>
						<ul class="ml-8 mt-4">
							<li>Cursos de pós-graduação</li>
							<li>MBAs</li>
							<li>Cursos livres no país ou fora do país</li>
							<li>Congressos nacionais ou internacionais</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							O Einstein provê valores e auxilia a liderança a viabilizar esse aprendizado. O objetivo, além do crescimento profissional do colaborador, é que, após o retorno, o conhecimento adquirido seja replicado para o time de trabalho.
						</p>
					</v-col>
				</v-row>
			</v-window-item>
			<v-window-item value="four">
			 <v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							Assim como o pilar de Treinamento, os programas de Desenvolvimento Individual são propostos em função das necessidades avaliadas. Exemplos:
						</p>
					</v-col>
					<v-col cols="12" md="6">

						<p>
							<strong>Programa de Mentoria</strong>
						</p>
						<p class="mt-4">
							<strong>Descrição:</strong> Visa acelerar o desenvolvimento por meio de metodologias ativas de aprendizagem na qual o mentor compartilha conhecimento e experiências. 
Áreas contempladas:
						</p>
						<ul class="ml-8 mt-4">
							<li>UPA - médicos</li>
							<li>IIRS - médicos</li>
							<li>DPG - médicos</li>
							<li>Liderança</li>
							<li>Gestão</li>
							<li>Grupo Charone</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							<strong>Programa de <em>Assessment</em></strong>
						</p>
						<p class="mt-4">
							<strong>Objetivo e foco:</strong> Visa aprimorar o plano de formação de sucessores para posições críticas e alta liderança por meio de um programa estruturado de <em>assessment</em> para mapeamento de potencialidades e construção do PDI (Plano de Desenvolvimento Individual).
						</p>
					</v-col>
				</v-row>
			</v-window-item>
		  </v-window>
		</v-card-text>
	  </v-card>
	  
	  
	  
	  <v-card class="mt-10 show_desktop">
		<v-tabs
		  v-model="tab"
		  color="white"
		  bg-color="none"
		  grow
		  
		>
		  <v-tab value="one"><span style="color:#202428;">I) Encontros e Eventos</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">II) Treinamentos</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">III) Incentivos<br>Educacionais</span></v-tab>
		  <v-tab style="margin:0" value="four"><span style="color:#202428;">IV) Desenvolvimento<br>Individual</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São encontros com a Diretoria, o Presidente, ou algum convidado de fora para falar sobre determinado tema, voltados para todos os líderes.
						</p>
						<p class="mt-4">
							Geralmente são presenciais, mas podem ocorrer de forma <em>online</em>.
						</p>
						<p class="mt-4">
							A periodicidade é variável, alguns são mensais, outros bimestrais, trimestrais e até anuais.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							Se você quiser conhecer alguns exemplos, acesse o tópico
						</p>
						<a 
						class="texto_azul" 
						style="text-decoration:none;" 
						href="./tela_ensino/encontros_e_eventos.pdf" 
						target="_blank"
						>
							<p class="mt-4">
								<strong>Encontros e Eventos para Líderes</strong>
							</p>
						</a>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
			<v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São Trilhas de Aprendizagem realizadas com especialistas para treinar lideranças.
						</p>
						<p>
							Podem ocorrer presencialmente, de forma híbrida, <em>online</em> na modalidade síncrona e assíncrona, por meio de <em>workshops</em>, simulações, ou <em>webinar</em>.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							Há programas específicos oferecidos para lideranças de diferentes áreas.
						</p>
						<p>
							Para obter mais informações, acesse: 
						<a 
						class="texto_azul" 
						style="text-decoration:none;" 
						href="./tela_ensino/encontros_e_eventos.pdf" 
						target="_blank"
						>
							<p class="mt-4">
								<strong>Encontros e Eventos para Líderes</strong>
							</p>
						</a>
						</p>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  	<v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							O Einstein tem uma Política de Incentivo Educacional para atender ao desejo da liderança de fazer uma formação ou participar de congressos sobre temas de interesse.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							<strong>Exemplos de incentivos:</strong>
						</p>
						<ul class="ml-8 mt-4">
							<li>Cursos de pós-graduação</li>
							<li>MBAs</li>
							<li>Cursos livres no país ou fora do país</li>
							<li>Congressos nacionais ou internacionais</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							O Einstein provê valores e auxilia a liderança a viabilizar esse aprendizado. O objetivo, além do crescimento profissional do colaborador, é que, após o retorno, o conhecimento adquirido seja replicado para o time de trabalho.
						</p>
					</v-col>
				</v-row>
			</v-window-item>
			<v-window-item value="four">
			 <v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							Assim como o pilar de Treinamento, os programas de Desenvolvimento Individual são propostos em função das necessidades avaliadas. Exemplos:
						</p>
					</v-col>
					<v-col cols="12" md="6">

						<p>
							<strong>Programa de Mentoria</strong>
						</p>
						<p class="mt-4">
							<strong>Descrição:</strong> Visa acelerar o desenvolvimento por meio de metodologias ativas de aprendizagem na qual o mentor compartilha conhecimento e experiências. 
Áreas contempladas:
						</p>
						<ul class="ml-8 mt-4">
							<li>UPA - médicos</li>
							<li>IIRS - médicos</li>
							<li>DPG - médicos</li>
							<li>Liderança</li>
							<li>Gestão</li>
							<li>Grupo Charone</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							<strong>Programa de <em>Assessment</em></strong>
						</p>
						<p class="mt-4">
							<strong>Objetivo e foco:</strong> Visa aprimorar o plano de formação de sucessores para posições críticas e alta liderança por meio de um programa estruturado de <em>assessment</em> para mapeamento de potencialidades e construção do PDI (Plano de Desenvolvimento Individual).
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
		  <v-tab value="one"><span style="color:#202428;">I) Encontros<br>e Eventos</span></v-tab>
		  <v-tab value="two"><span style="color:#202428;">II) Treinamentos</span></v-tab>
		  <v-tab value="three"><span style="color:#202428;">III) Incentivos<br>Educacionais</span></v-tab>
		  <v-tab style="margin:0" value="four"><span style="color:#202428;">IV) Desenvolvimento<br>Individual</span></v-tab>
		</v-tabs>

		<v-card-text style="background-color:white">
		  <v-window v-model="tab" bg-color="white">
			
			<v-window-item value="one" class="pa-8">
			 <v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São encontros com a Diretoria, o Presidente, ou algum convidado de fora para falar sobre determinado tema, voltados para todos os líderes.
						</p>
						<p class="mt-4">
							Geralmente são presenciais, mas podem ocorrer de forma <em>online</em>.
						</p>
						<p class="mt-4">
							A periodicidade é variável, alguns são mensais, outros bimestrais, trimestrais e até anuais.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							Se você quiser conhecer alguns exemplos, acesse o tópico
						</p>
						<p class="mt-4">
							<a class="texto_azul" style="text-decoration:none;" href=""><strong>Encontros e Eventos para Líderes</strong></a>
						</p>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="two" class="pa-8">
			<v-row class="pa-10">
					<v-col cols="12" md="6">
						<p>
							São Trilhas de Aprendizagem realizadas com especialistas para treinar lideranças.
						</p>
						<p>
							Podem ocorrer presencialmente, de forma híbrida, <em>online</em> na modalidade síncrona e assíncrona, por meio de <em>workshops</em>, simulações, ou <em>webinar</em>.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							Há programas específicos oferecidos para lideranças de diferentes áreas.
						</p>
						<p class="mt-4">
							Para obter mais informações, acesse: <a class="texto_azul" style="text-decoration:none;" href=""><strong>link ?</strong></a>
						</p>
					</v-col>
				</v-row>
			</v-window-item>

			<v-window-item value="three" class="pa-8">
			  	<v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							O Einstein tem uma Política de Incentivo Educacional para atender ao desejo da liderança de fazer uma formação ou participar de congressos sobre temas de interesse.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							<strong>Exemplos de incentivos:</strong>
						</p>
						<ul class="ml-8 mt-4">
							<li>Cursos de pós-graduação</li>
							<li>MBAs</li>
							<li>Cursos livres no país ou fora do país</li>
							<li>Congressos nacionais ou internacionais</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							O Einstein provê valores e auxilia a liderança a viabilizar esse aprendizado. O objetivo, além do crescimento profissional do colaborador, é que, após o retorno, o conhecimento adquirido seja replicado para o time de trabalho.
						</p>
					</v-col>
				</v-row>
			</v-window-item>
			<v-window-item value="four">
			 <v-row class="pa-10">
			 		<v-col cols="12" md="12">
						<p>
							Assim como o pilar de Treinamento, os programas de Desenvolvimento Individual são propostos em função das necessidades avaliadas. Exemplos:
						</p>
					</v-col>
					<v-col cols="12" md="6">

						<p>
							<strong>Programa de Mentoria</strong>
						</p>
						<p class="mt-4">
							<strong>Descrição:</strong> Visa acelerar o desenvolvimento por meio de metodologias ativas de aprendizagem na qual o mentor compartilha conhecimento e experiências. 
Áreas contempladas:
						</p>
						<ul class="ml-8 mt-4">
							<li>UPA - médicos</li>
							<li>IIRS - médicos</li>
							<li>DPG - médicos</li>
							<li>Liderança</li>
							<li>Gestão</li>
							<li>Grupo Charone</li>
						</ul>
					</v-col>
					<v-col cols="12" md="6">
						<p class="mt-4">
							<strong>Programa de <em>Assessment</em></strong>
						</p>
						<p class="mt-4">
							<strong>Objetivo e foco:</strong> Visa aprimorar o plano de formação de sucessores para posições críticas e alta liderança por meio de um programa estruturado de <em>assessment</em> para mapeamento de potencialidades e construção do PDI (Plano de Desenvolvimento Individual).
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
	style="z-index:18;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_ensino/grade_header_branco.png" />
	
	<v-row class="mt-2">
		<v-col cols="12" md="5">

			<p style="font-size:2em" class="texto_branco">
				Programa de Incentivo Educacional
			</p>
			
			<p class="texto_branco mt-4">
				Essa é uma iniciativa Einstein para estimular os colaboradores a aprimorarem a sua formação profissional.
			</p>
			<p class="texto_branco mt-4">
				O Einstein oferece bolsas para os cursos técnicos, de graduação, de pós-graduação e de mestrado.
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
	style="z-index:17;"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_ensino/grade_header.png" />
		
		<v-card-text class="pt-10 pl-0 pr-0">

			<h1 class="mt-n10 font-weight-bold text-primary reveal fade-left">
				Programa de Incentivo Educacional
			</h1>
			
			<v-card class="box_dicas pl-0 pr-0 my-8 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber
					mais.
				</v-card-text>
			</v-card>
		</v-card-text>
		
		<v-row class="mt-2 mx-auto">

			<!--Card 01-->
			<v-col cols="12" sm="12" md="6" lg="4">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="left" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard01Visible ? 'card-bg-img' : '' "
					@click="isCard01Visible = !isCard01Visible"
					>
						<template v-if="!isCard01Visible">
							<v-img 
							src="./img/tela_ensino/cont4_ico1.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 texto_azul font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Objetivos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								<ul style="font-size:0.8em;" class="ml-8">
									<li>Desenvolver e capacitar os colaboradores da SBIBAE atrelados às estratégias de investimento em Educação de cada Diretoria.</li>
									<li>Valorizar e reconhecer os colaboradores com melhores desempenhos.</li>
									<li>Criar oportunidades de crescimento e desenvolvimento de carreira.</li>
									<li>Propiciar a fidelização e retenção de profissionais.</li>
									<li>Suprir a escassez de mão de obra com foco nas necessidades atuais e futuras da Sociedade.</li>
								</ul>
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>
			
			<!--Card 02-->
			<v-col cols="12" sm="12" md="6" lg="4">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="left" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard02Visible ? 'card-bg-img' : '' "
					@click="isCard02Visible = !isCard02Visible"
					>
						<template v-if="!isCard02Visible">
							<v-img 
							src="./img/tela_ensino/cont4_ico2.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 texto_azul font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Requisitos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">

								<ul style="font-size:0.8em;" class="ml-4">
									<li class="ml-n4 mb-4" style="list-style-type: none">Os cursos podem ser realizados tanto na Faculdade do Einstein como em outras faculdades. É preciso, porém, observar alguns critérios para poder participar do incentivo:</li>
									<li>Ser colaborador com registro CLT (aprendiz e estagiário não são elegíveis).</li>
									<li>Ter obtido no mínimo nota AT na última avaliação de competências.</li>
									<li>Não possuir advertência ou suspensão nos últimos 12 meses.</li>
									<li>Tempo de instituição:</li>
									<ul style="font-size:0.9em;" class="ml-4">
										<li>Para curso técnico, graduação,  pós-graduação e mestrado: mínimo 6 meses.</li>
										<li>Para cursos de pós-graduação na Faculdade Einstein: mínimo 3 meses.</li>
									</ul>
								</ul>

							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>
			
			<!--Card 03-->
			<v-col cols="12" sm="12" md="6" lg="4">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="left" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard03Visible ? 'card-bg-img' : '' "
					@click="isCard03Visible = !isCard03Visible"
					>
						<template v-if="!isCard03Visible">
							<v-img 
							src="./img/tela_ensino/cont4_ico3.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 texto_azul font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Informações
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								<p  style="font-size:0.8em;">
								<strong>Informações:</strong><br><br>
								
								Para saber mais sobre o Programa, fale com TINA nossa Assistente Virtual, no Teams ou no Sou Einstein, ou envie um <em>e-mail</em> para a caixa do Programa:
								<br><br><a class="texto_azul" style="text-decoration:none" href="mailto:progincentivoeducacionalo@einstein.br"><strong>progincentivoeducacionalo@einstein.br</strong></a>
								</p>
			
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

<!-- conteúdo 04 -->

	<!-- conteúdo 11 -->
	<v-card 
	v-show="isContent11Visible"
	id="content11" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont5" 
	style="z-index:10;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header.png" />
		<h2 class="mt-n4 font-weight-bold texto_azul reveal fade-left">
			Programa de Formação Interna
		</h2>
		<v-row class="mt-2">
		<v-col cols="12" md="5">
			
			<p class="mt-4 reveal fade-left">
				O Programa de Formação Interna teve início em 2012, com cursos de capacitação, de aprimoramento e técnicos.
			</p>
			<p class="mt-4 reveal fade-left">
				<strong>São objetivos do Programa:</strong>
			</p>
			<ul class="ml-8 mt-4">
				<li>Oferecer oportunidades de crescimento aos profissionais, gerando mão de obra qualificada.</li>
				<li>Capacitar e desenvolver os colaboradores, possibilitando maior aproveitamento interno.</li>
				<li>Suprir as demandas de contratação de mão de obra da Sociedade.</li>
				<li>Diminuir a rotatividade, permitindo a retenção, a satisfação e o engajamento dos funcionários.</li>
			</ul>

</v-col>
		<v-col cols="12" md="7">
		<v-img height="380" class="mx-auto mt-4" src="./img/tela_ensino/cont05_img.png" />
		</v-col>
	</v-row>


	<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
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

<!-- conteúdo 11 -->

<!-- conteúdo 16 -->
	<v-card 
	v-show="isContent16Visible"
	id="content16" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:5;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header_branco.png" />
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<p style="text-transform: uppercase;" class="mt-4 texto_branco">
						<strong>Desde o início do Programa até 2022, foram oferecidos os seguintes cursos:</strong>
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
				  <p><span style="text-transform:uppercase">Atendimento/Administrativo</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Rotinas Administrativas</li>
					<li>Assistente de Atendimento</li>
					<li>Representante de Atendimento</li>
					<li>Princípios da Gestão e Liderança aplicados à área de atendimento</li>
					<li>Técnico em Administração com ênfase nos Serviços de Saúde</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Assistencial</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Auxiliar Enfermagem</li>
					<li>Técnico Enfermagem</li>
					<li>Atualização Auxiliar e Técnico Enfermagem</li>
					<li>Atualização Auxiliar de Enfermagem ESF</li>
					<li>Téc. Enfermagem Coleta</li>
					<li>Aprimoramento Auxiliar de Enf. Maternidade</li>
					<li>Aprimoramento Auxiliar de Enf. Imagem</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Apoio operacional</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Copeiro</li>
					<li>Camareiro</li>
					<li>Auxiliar Serviços Gerais</li>
					<li>Auxiliar de Farmácia</li>
					<li>Auxiliar de Sala</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">outros</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Curso de Libras</li>
					<li>Jornada de Aprendizagem Tech e Big Data</li>
					<li>Imersão Tech</li>
				</ul>
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
				@click="isContent14Visible = true; prosseguir('content14')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 16 -->


<!-- conteúdo 14 -->
	<v-card 
	v-show="isContent14Visible"
	id="content14" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:4;"
	align="center"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_roxa.png" />
			
			<p class="mx-auto font-weight-bold reveal fade-left " style="color:#7D5CB5;text-transform:uppercase">
				Veja um panorama geral dos resultados obtidos de 2012 a 2022.
			</p>
			
			<v-container class="mt-8">
			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="1">
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-left texto_preto">
						<p style="text-align:right">
							<span style="font-size:1.3em"><strong>28</strong></span> cursos
						</p>
						<p style="text-align:right">
							<span style="font-size:1.3em"><strong>43</strong></span> turmas
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_ensino/barra_roxa.png" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/rol1_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/folha_roxa.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/folha_azul.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/rol2_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							<span style="font-size:1.3em"><strong>1348</strong></span> contemplações
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_ensino/barra_azul.png" />
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
							<span style="font-size:1.3em"><strong>83% (1.139)</strong></span> formados
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_ensino/barra_roxa.png" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/rol3_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/folha_roxa.svg" />
				</v-col>
				<v-col cols="12" md="3">

				</v-col>
			</v-row>

			<v-row align="center" class="mx-auto mt-0">
				<v-col cols="12" md="3">
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/folha_azul.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/rol4_icone.svg" />
				</v-col>
				<v-col cols="12" md="4">
					<v-card-text class="pl-0 pr-0 reveal fade-right texto_preto">
						<p style="text-align:left">
							 Meta de <span style="font-size:1.3em"><strong>60%</strong></span> de aproveitamento interno
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_ensino/barra_azul.png" />
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
							<span style="font-size:1.3em"><strong>80%</strong></span> de retenção geral
						</p>
						<v-img height="30px" class="mx-auto" src="./img/tela_ensino/barra_roxa.png" />
					</v-card-text>
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/rol5_icone.svg" />
				</v-col>
				<v-col cols="12" md="2">
					<v-img class="mx-auto icone_cont2 reveal fade-in" src="./img/tela_ensino/folha_roxa.svg" />
				</v-col>
				<v-col cols="12" md="3">

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
				@click="isContent12Visible = true; prosseguir('content12')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 14 -->

<!-- conteúdo 12 -->
	<v-card 
	v-show="isContent12Visible"
	id="content12" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont12" 
	style="z-index:3;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header_branco.png" />
		<h2 style="color:#5BC6E8" class="mt-n4 font-weight-bold reveal fade-left">
				Os cursos são estruturados a partir de uma demanda e envolvem a participação de quatro áreas:
			</h2>
		<v-row class="mt-2">
		<v-col cols="12" md="5">

			<p class="mt-4 reveal fade-left texto_branco">
				<strong>Recursos Humanos</strong> – Faz o levantamento das necessidades de formação, mapeia o público-alvo, faz o acompanhamento dos alunos e do aproveitamento interno.
			</p>
			<p class="mt-4 reveal fade-left texto_branco">
				<strong>Comunicação</strong> – É responsável pelo plano de comunicação.
			</p>
			<p class="mt-4 reveal fade-left texto_branco">
				<strong>Ensino</strong> – Dá apoio ao desenvolvimento da proposta de ensino e ao fornecimento da estrutura física, e faz o acompanhamento dos alunos em relação ao desempenho.
			</p>
			<p class="mt-4 reveal fade-left texto_branco">
				<strong>Área Técnica</strong> – Dá apoio na construção do curso com informações técnicas, necessidades e principais conhecimentos/competências a serem desenvolvidos. 
			</p>
		</v-col>
		<v-col cols="12" md="7">
			<!--Vimeo-->
            <v-container 
            class="mt-5 pa-0 reveal fade-bottom"
            >
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/888762475?h=b8262de7b6&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ENC_Programa de Formação Interna_Maria Aparecida e Marli"></iframe></div>

            </v-container>
			
			<p class="mt-4 reveal fade-left texto_branco">
				Assista a alguns depoimentos de colaboradores que se beneficiaram com o Programa de Formação Interna. 
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
				@click="isContent12aVisible = true; prosseguir('content12a')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 12 -->

<!-- conteúdo 12a -->
	<v-card 
	v-show="isContent12aVisible"
	id="content12a" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont16" 
	style="z-index:2;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header_branco.png" />
		
		
		<v-row class="mt-10">

			<v-col cols="12" md="8">
				<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">
					<h2 style="text-transform: uppercase;" class="mt-4 texto_branco">
						CAEX
					</h2>
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
				  <p><span style="text-transform:uppercase">Objetivo</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<p>
					O Programa de Capacitação Externa, é uma iniciativa para ações de valorização e reconhecimento dos melhores desempenhos, para concessão de apoio financeiro para capacitações nas modalidades de curta duração, de acordo com a aplicabilidade e estratégia da área.
				</p>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Modalidades</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Eventos Internos – Ensino Einstein;</li>
					<li>Eventos Externos;</li>
					<li>Qualificação Profissional;</li>
					<li>Simpósios;</li>
					<li>Workshops;</li>
					<li>Palestras, etc.</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Abrangência</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Eventos Internos (Ensino Einstein), Eventos Nacionais e Internacionais, nas modalidades Online, Presencial e Híbrido</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Subsídios contemplados</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>A verba orçada tem como foco os subsídios de <strong>inscrição, hospedagem, transporte aéreo e seguro viagem</strong>.</li>
					<li><strong>% de subsídio:</strong> as concessões são analisadas pelos gestores e podem ser de 50% a 100% </li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Critérios de Elegibilidade</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Funcionário (CLT)</li>
					<li>Ter obtido como consenso na última avaliação de competências institucional o resultado mínimo AT;</li>
					<li>Ter no mínimo 3 meses na organização;</li>
					<li>O evento deve ter o tema diferente dos cursos relacionados no planejamento interno da organização (Trilhas).</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Premissas do Programa</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Recomendação que o evento esteja no Plano de Desenvolvimento Individual (PDI);</li>
					<li>A concessão do CAEX é uma das ações de valorização e reconhecimento dos melhores desempenhos;</li>
					<li>Aplicabilidade do curso na área e cargo/função atual;</li>
					<li>Priorizar cursos de qualificação que atendam as necessidades atuais e futuras de demandas de estratégia da SBIBAE</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  <v-expansion-panel class="mb-2">
				<v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
				  <p><span style="text-transform:uppercase">Recomendações</span></p>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
				<ul class="ml-8">
					<li>Priorizar a concessão do subsídio em apenas 1 programa por profissional no ciclo;</li>
					<li>1 evento internacional por ano;</li>
					<li>Ter domínio no idioma inglês, nos casos de eventos internacionais.</li>
				</ul>
				</v-expansion-panel-text>
			  </v-expansion-panel>
			  
			  
			</v-expansion-panels>
			
			<v-card class="box_dicas_verde mt-4 pa-0 reveal fade-bottom mx-auto" style="width: 100%">
				<v-card-text>
					<v-row class="mt-0">
						<v-col cols="12" md="1" align-self="center">
							<span class="ml-5 mdi mdi-alert box_verde_icon"></span> 
						</v-col>
						<v-col  align-self="center" align="left">
							<span style="color:white">
								Os profissionais são indicados anualmente pelos gestores para contemplação no Programa. Aos interessados que não foram indicados, devem procurar o gestor. Em caso de dúvidas, acionar o time de CAEX através do e-mail: <a class="texto_azul" style="text-decoration:none;" href="mailto:IIEPapoiofin@einstein.br"><strong>IIEPapoiofin@einstein.br </strong></a>
							</span>
						</v-col>
					</v-row>
					  
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
				@click="isContent13Visible = true; prosseguir('content13')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	</v-card>

<!-- conteúdo 16 -->


<!-- conteúdo 13 -->
	<v-card 
	v-show="isContent13Visible"
	id="content13" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:1;"
	>
			
			<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header.png" />
		
			<v-row class="mt-2">
				<v-col cols="12" md="5">
					<v-img height="480" width="100%" class="mx-auto mt-4 show_desktop" src="./img/tela_ensino/cont13_img.png" />
					<v-img height="320" width="100%" class="mx-auto mt-4 show_1277" src="./img/tela_ensino/cont13_img.png" />
					<v-img width="100%" class="mx-auto mt-4 show_mobile" src="./img/tela_ensino/cont13_img.png" />
				</v-col>
				<v-col cols="12" md="1">

				</v-col>
				<v-col cols="12" md="6" align-self="center">
					<h2 class="mt-n4 font-weight-bold text-primary reveal fade-left">
						Bolsas para Idiomas
					</h2>

					<p class="mt-4 reveal fade-left">
						Os colaboradores Einstein interessados em desenvolver um novo idioma podem obter descontos de duas maneiras:
					</p>
					
					<ul class="ml-8 mt-4 reveal fade-left">
						<li>Clube de Benefícios: Através das plataformas <a class="texto_azul" style="text-decoration:none;" href="https://www.newvalue.com.br/" target="_blank"><strong>New Value</strong></a> e <a class="texto_azul" style="text-decoration:none;" href="https://www.ifepaf.com.br/bem-vindo" target="_blank"><strong>IFEPAF</strong></a>, o colaborador tem acesso a descontos em diversas escolas com percentuais de desconto variados;</li>
						<li>Programa de Idiomas: Este programa é destinado para demandas/necessidades identificadas como necessárias para atuação profissional e/ou para as expansões de novas unidades fora do Brasil.</li>
					</ul>

					<p class="mt-4 reveal fade-left">
						<strong>As demandas são avaliadas e validadas pela diretoria.</strong>
					</p>
					<p class="mt-4 reveal fade-left">
						Em caso de novas demandas, entre em contato: <a class="texto_azul" style="text-decoration:none;" href="mailto:programadeidiomas@einstein.br"><strong>programadeidiomas@einstein.br</strong></a>
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

<!-- conteúdo 13 -->


<!-- conteúdo 17 -->
	<v-card 
	v-show="isContent17Visible"
	id="content17" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:0; margin-bottom:30px;"
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_ensino/grade_header_branco.png" />

			<v-row align="center" class="mx-auto mb-16">
				<v-col cols="12" md="7">
				
				
					<p style="font-size:2em" class="mt-4 mb-4 reveal fade-left texto_branco">
						Oferecer aos colaboradores as melhores oportunidades de crescimento pessoal e profissional, esse é um de nossos objetivos!
					</p>
					<p class="mt-4 mb-4 reveal fade-left texto_branco">
						Somos comprometidos com a excelência, com a busca da melhoria contínua e com o desenvolvimento dos nossos profissionais. Por isso, nós cuidamos dos detalhes e buscamos sempre atender a sua demanda.
					</p>
					<p class="mt-4 mb-4 reveal fade-left texto_branco">
						<strong>#Einsteinsemprepertodevocê</strong>
					</p>
				</v-col>
				<v-col cols="12" md="5">
					
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
	const isContent12aVisible = ref(false)
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
	background-image: url("./img/tela_ensino/card_fundo.png");
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
	background-image: url("./img/tela_ensino/cont2_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont3_fundo.jpg");
	background-size: cover;
}
.v-card-conteudos_cont5 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont5_fundo.png");
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
	background-image: url("./img/tela_ensino/cont9_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont10 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont10_fundo.svg");
	background-size: cover;
}
.v-card-conteudos_cont12 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/bg_video.svg");
	background-size: cover;
}
.v-card-conteudos_cont13 {
	padding-left: 0% !important;
	padding-right: 0% !important;
}
.v-card-conteudos_cont15 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont15_fundo.png");
	background-size: contain;
	background-repeat: no-repeat;
	
}
.v-card-conteudos_cont16 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont16_fundo.svg");
	background-size: cover;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont17_fundo.jpg");
	background-size: cover;
}
.cont6_box {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_ensino/cont6_box_fundo.png");
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
@media screen and (max-width: 950px){
.icone_cont2{
width:40%;
}

}
@media screen and (max-width: 768px){
.icone_cont2{
width:50%;
}

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