<template>
	<!-- header qualidade-->
	<v-card 
	width="100%" 
	elevation="6"
	style="z-index:11;"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_qualidade/header.png" />
		<v-img class="show_1277" src="./img/tela_qualidade/header.png" />
		<v-img class="show_mobile" src="./img/tela_qualidade/header_mob.png" />
		<v-img src="./img/tela_qualidade/header_text.svg" class="header_text"
			title="QUALIDADE E SEGURANÇA" />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:10;background-color:#fff!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_qualidade/grade_header.png" />
		
			<h1 class="mt-n6 font-weight-bold texto_azul my-6  reveal fade-left">
				O significado de SEQS
			</h1>

			<v-row class="mx-auto mt-n10">
				<v-col cols="12" md="6" class="reveal fade-left">
					<v-card-text class="pl-0 pr-0">
						<p class="mt-3">
							SEQS é a sigla de <strong>Sistema Einstein de Qualidade e Segurança</strong>, um conjunto de programas gerenciais adotados pelo Einstein, que sistematiza o planejamento, a formulação e a operacionalização dos processos assistenciais e de apoio, necessários para garantir a excelência nos serviços prestados.
						</p>
						<p class="mt-3">
							O sistema é dinâmico e permite a revisão e atualização dos padrões e critérios adotados como referenciais, com flexibilidade suficiente para possibilitar a adequação aos diferentes negócios da sociedade.
						</p>
						<p class="mt-3">
							O objetivo é <strong>identificar oportunidades de melhorias nos processos assistenciais e de apoio e utilizar ferramentas da qualidade para a identificação, correção e prevenção de novas ocorrências</strong>. 
						</p>
					</v-card-text>
				</v-col>
				
				<v-col cols="12" md="6" class="reveal fade-right">
					<v-card-text class="pl-0 pr-0">
						<p style="font-size:1.6em;line-height:1.4" class="mt-0">
							A responsabilidade pela segurança é de todos os colaboradores, mas especialmente das lideranças.
						</p>
						<p class="mt-6">
							O Einstein integra importantes iniciativas internacionais para a melhoria da assistência e da segurança do paciente, lideradas por instituições como: 
						</p>
					</v-card-text>
					<v-row class="mx-auto mt-6">
						<v-col cols="12" md="4">
							<v-img class="mx-auto logo_cont1" src="./img/tela_qualidade/cont1_logo1.png" title="Joint Commission International"/>
						</v-col>
						<v-col cols="12" md="4">
							<v-img class="mx-auto logo_cont1" src="./img/tela_qualidade/cont1_logo2.png" title="Institute for Healthcare Improvement"/>
						</v-col>
						<v-col cols="12" md="4">
							<v-img class="mx-auto logo_cont1" src="./img/tela_qualidade/cont1_logo3.png" title="Organização Mundial da Saúde"/>
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
	style="z-index:9;"
	class="mt-n4 rounded-lg pt-4 v-card-conteudos_cont2"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_qualidade/grade_header_azul2.png" />
		
		
		
		<v-row no-gutters class="mx-auto mt-10">
			<v-col cols="12" sm="12" md="6">
				<h1 style="color:#2B7080" class="mt-n4 font-weight-bold my-6 reveal fade-left">
					Princípios SEQS
				</h1>
				<v-card 
				elevation="2"
				width="100%"
				style="z-index:8;background-color:#2B7080;border-radius:25px"
				class="mt-n4 pa-2 v-card_subs"
				align="center"
				>
				<p style="font-size:1.5em;" class="texto_branco">Triple Aim® ou Triplo Objetivo</p>
				</v-card>
				<p class="mt-8">
					O conceito foi criado pelo Institute for Healthcare Improvement (IHI) e define que as instituições devem atuar em três frentes para entregar valor em saúde.
				</p>
				<v-card 
				elevation="2"
				width="100%"
				style="z-index:8;border-radius:25px"
				class="mt-8 pa-4"
				align="left"
				>
				<p style="color:#00A4E1" class="">
					<strong>
						A busca pela Governança Triple Aim® deve ser constante e consiste no exercício diário das lideranças e equipes de trabalho em desenvolver e atualizar projetos de melhorias dentro do triplo objetivo.
					</strong>
				</p>
				</v-card>
			</v-col>
			<v-col cols="12" sm="12" md="6" align-self="start" align="center">
				
				<v-card class="bg-transparent py-6" elevation="0">
					
					<img height="400" class="show_desktop" src="./img/tela_qualidade/cont2_info.png" usemap="#image-map">
					<img height="340" class="show_1277" src="./img/tela_qualidade/cont2_info_1277.png" usemap="#image-map_1277">
					<img height="300" class="show_mobile" src="./img/tela_qualidade/cont2_info_mobile.png" usemap="#image-map_1277">

					<map name="image-map">
						<area style="cursor:pointer" target="" alt="" title="" coords="222,33,41" shape="circle" 
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="303,291,41" shape="circle" 
						@click="
						isTooltip2Visible = true;
						isTooltip1Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="123,289,39" shape="circle" 
						@click="
						isTooltip3Visible = true;
						isTooltip2Visible = false;
						isTooltip1Visible = false;
						">
					</map>
					
					<map name="image-map_1277">
						<area style="cursor:pointer" target="" alt="" title="" coords="187,27,30" shape="circle" 
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="258,247,29" shape="circle" 
						@click="
						isTooltip2Visible = true;
						isTooltip1Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="105,247,33" shape="circle"
						@click="
						isTooltip3Visible = true;
						isTooltip2Visible = false;
						isTooltip1Visible = false;
						">
					</map>
					
					<map name="image-map_mobile">
						<area style="cursor:pointer" target="" alt="" title="" coords="165,25,29" shape="circle" 
						@click="
						isTooltip1Visible = true;
						isTooltip2Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="226,217,30" shape="circle" 
						@click="
						isTooltip2Visible = true;
						isTooltip1Visible = false;
						isTooltip3Visible = false;
						">
						<area style="cursor:pointer" target="" alt="" title="" coords="92,217,29" shape="circle"
						@click="
						isTooltip3Visible = true;
						isTooltip2Visible = false;
						isTooltip1Visible = false;
						">
					</map>
					
					
						  <div v-show="isTooltip1Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-1">

							  <i @click="isTooltip1Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
							  <v-img src="./img/tela_qualidade/btn_close.png"/>
							  </i>
							  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip1" aria-hidden="false" ></i>

							  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

								<div class="pt-2 pb-2 pl-2 pr-2">
									<span class="tooltip_text">
										1) Fornecer assistência segura, eficaz e confiável para cada paciente, em todas as oportunidades.
									</span>
								</div>
							  </div>
						  </div>
					  
						  <div v-show="isTooltip2Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-2">

							  <i @click="isTooltip2Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
							  <v-img src="./img/tela_qualidade/btn_close.png"/>
							  </i>
							  
							  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip2" aria-hidden="false" ></i>

							  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

								<div class="pt-2 pb-2 pl-2 pr-2">
									<span class="tooltip_text">
										2) Manter o foco na prevenção e no bem-estar.
									</span>
								</div>
							  </div>
						  </div>
					  
						  <div v-show="isTooltip3Visible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-3">

							  <i @click="isTooltip3Visible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
							  <v-img src="./img/tela_qualidade/btn_close.png"/>
							  </i>
							  
							  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip3" aria-hidden="false" ></i>

							  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

								<div class="pt-2 pb-2 pl-2 pr-2">
									<span class="tooltip_text">
										3) Buscar melhoria contínua e aplicação do conhecimento científico para eliminar desperdícios e/ou futilidades.
									</span>
								</div>
							  </div>
						  </div>
					  
					
					
				</v-card>
				
				<v-card class="box_dicas pa-0 reveal fade-right mt-n8" style="width: 60%">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos botões abaixo.  
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		
		
		

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4 mt-n8">
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
	style="z-index:8;background-color:#C4E8E1!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_qualidade/grade_header_verde.png" />
		
		<h1 style="color:#2B7080" class="mt-n4 font-weight-bold my-6 reveal fade-left">
			Princípios SEQS
		</h1>
		<v-card 
				elevation="2"
				width="500px"
				style="z-index:8;background-color:#2B7080;border-radius:25px"
				class="mt-n4 pa-2 v-card_subs"
				align="center"
				>
				<p style="font-size:1.5em;" class="texto_branco">Dimensões da Experiência do Cuidado</p>
				</v-card>
		<v-row no-gutters class="mx-auto mt-6">
			<v-col cols="12" md="8">
				<p class="my-4">
					São estabelecidas pelo Instituto de Medicina dos Estados Unidos da América do Norte (IOM).
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-card class="box_dicas ml-4 pa-0 reveal fade-right mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas setas abaixo.  
				</v-card-text>
			</v-card>
			</v-col>
		</v-row>
		
		<v-card
        elevation="3"
        width="100%"
        class="mx-auto rounded-lg mt-6 reveal fade-bottom"
        >
		<v-carousel 
            show-arrows="hover"
			hide-delimiters
            color="primary"
            :continuous="false"
            >
                <v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img1.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Assistência Focada no Paciente
									</h2>
									<p class="mt-4">
										Prover assistência que atenda e respeite as preferências, necessidades e valores dos pacientes.
									</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>

                  <v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img2.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Assistência no Tempo Adequado
									</h2>
									<p class="mt-4">
										Reduzir esperas e atrasos, por vezes prejudiciais àqueles que recebem e prestam os cuidados.
									</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>
				
				<v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img3.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Eficiência
									</h2>
									<p class="mt-4">
										Evitar desperdícios e mau uso de suprimentos, equipamentos, ideias e energia.
									</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>
				
				<v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img4.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Equidade
									</h2>
									<p class="mt-4">
										Respeitar a igualdade de direitos e as características pessoais, tais como: gênero, etnia, condições socioeconômicas ou localização geográfica.
									</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>
				
				<v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img5.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Efetividade
									</h2>
									<p class="mt-4">
										Prover serviços adequados àqueles que deles se beneficiarão com uso responsável dos recursos. Evitar uso excessivo ou insuficiente.
									</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>
				
				<v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6">
									<v-img src="./img/tela_qualidade/slider_img6.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2 class="texto_azul">
										Segurança do Paciente
									</h2>
									<p class="mt-4">
										Evitar que a assistência prestada resulte em dano ao paciente.
									</p>
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
	style="z-index:7;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos" 
	>
	<v-img class="mx-auto grade_header" src="./img/tela_qualidade/grade_header_azul.png" />
	

		<h1 style="color:#2B7080" class="mt-n4 font-weight-bold my-6 reveal fade-left">
			Princípios SEQS
		</h1>
		<v-card 
		elevation="2"
		width="70%"
		style="z-index:8;background-color:#2B7080;border-radius:25px"
		class="mt-4 pa-2 v-card_subs"
		align="center"
		>
		<p style="font-size:1.5em;" class="texto_branco">Segurança do paciente, dos profissionais e do ambiente</p>
		</v-card>
		
		<p class="mt-8">
			Este é o compromisso firme e visível de toda a liderança na eliminação ou mitigação de riscos na assistência ao paciente, na prática dos profissionais e no ambiente da saúde, e que estabelece o nível de expectativa e compromisso da liderança com a qualidade e a segurança.
		</p>
		
		<v-img class="mx-auto show_desktop" src="./img/tela_qualidade/cont4_img.png" />
		<v-img class="mx-auto my-8 show_mobile" src="./img/tela_qualidade/cont4_img_mob.png" />

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
	v-show="isContent05Visible"
	id="content05" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos" 
	style="z-index:6;background-color:#C4E8E1!important;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_qualidade/grade_header_verde.png" />
		
		<h1 style="color:#2B7080" class="mt-0 font-weight-bold my-6 reveal fade-left">
			Princípios SEQS
		</h1>
		<v-card 
				elevation="2"
				width="500px"
				style="z-index:8;background-color:#2B7080;border-radius:25px"
				class="mt-4 pa-2 v-card_subs"
				align="center"
				>
				<p style="font-size:1.5em;" class="texto_branco">Organização de Alta Confiabilidade </p>
				</v-card>
		<v-row no-gutters class="mx-auto mt-6">
			<v-col cols="12" md="8">
				<p class="mt-0">
					A meta estratégica do SEQS é zerar os eventos adversos catastróficos e reduzir em 50% os eventos com dano grave ao paciente. Veja quais são os elementos da Alta Confiabilidade. 
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-card class="box_dicas mt-4 pa-0 reveal fade-right mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos botões abaixo.  
				</v-card-text>
			</v-card>
			</v-col>
		</v-row>
		
		<v-card elevation="0" style=""	class="bg-transparent v-card_info_cont5">
		
		<img style="margin-left: 10%!important;" width="800" class="mx-auto show_desktop mt-8" src="./img/tela_qualidade/cont5_info.png" usemap="#image-map_cont5">
		
		<img width="650" class="mx-auto show_1277 mt-8" src="./img/tela_qualidade/cont5_info_1277.png" usemap="#image-map_cont5_1277">
		
		<img width="200" class="show_mobile mt-16" src="./img/tela_qualidade/cont5_info_mob.png" usemap="#image-map_cont5_mobile">
		
		<map name="image-map_cont5">
			<area style="cursor:pointer" target="" alt="" title="" coords="238,39,36" shape="circle"
			@click="
			isTooltipCont5aVisible = true;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="318,39,36" shape="circle"
			@click="
			isTooltipCont5bVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="399,37,33" shape="circle"
			@click="
			isTooltipCont5cVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="480,37,34" shape="circle"
			@click="
			isTooltipCont5dVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="563,38,35" shape="circle"
			@click="
			isTooltipCont5eVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			">
		</map>
		
		<map name="image-map_cont5_1277">
			<area style="cursor:pointer" target="" alt="" title="" coords="193,32,31" shape="circle"
			@click="
			isTooltipCont5aVisible = true;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="259,30,29" shape="circle"
			@click="
			isTooltipCont5bVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="324,30,30" shape="circle"
			@click="
			isTooltipCont5cVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="391,30,30" shape="circle"
			@click="
			isTooltipCont5dVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="458,30,29" shape="circle"
			@click="
			isTooltipCont5eVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			">
		</map>
		
		<map name="image-map_cont5_mobile">
			<area style="cursor:pointer" target="" alt="" title="" coords="41,47,38" shape="circle"
			@click="
			isTooltipCont5aVisible = true;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="42,154,34" shape="circle"
			@click="
			isTooltipCont5bVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="41,256,35" shape="circle"
			@click="
			isTooltipCont5cVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5dVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="42,362,37" shape="circle"
			@click="
			isTooltipCont5dVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5eVisible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="41,466,38" shape="circle"
			@click="
			isTooltipCont5eVisible = true;
			isTooltipCont5aVisible = false;
			isTooltipCont5bVisible = false;
			isTooltipCont5cVisible = false;
			isTooltipCont5dVisible = false;
			">
		</map>

		<div v-show="isTooltipCont5aVisible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltipCont5a">
		  <i @click="isTooltipCont5aVisible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
		  <v-img src="./img/tela_qualidade/btn_close.png"/>
		  </i>
		  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
			<div class="pt-2 pb-2 pl-2 pr-2">
				<span class="tooltip_text">
					<strong>Intolerância às falhas</strong><br> Pensar ativamente sobre o que pode dar errado e estar alerta aos sinais de problemas potenciais. 
				</span>
			</div>
		  </div>
	  </div>
	  
	  <div v-show="isTooltipCont5bVisible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltipCont5b">
		  <i @click="isTooltipCont5bVisible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
		  <v-img src="./img/tela_qualidade/btn_close.png"/>
		  </i>
		  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
			<div class="pt-2 pb-2 pl-2 pr-2">
				<span class="tooltip_text">
					<strong>Relutância em <br>simplificar</strong><br> Buscar explicações mais profundas do que superficiais para as falhas nos processos.
				</span>
			</div>
		  </div>
	  </div>
	  
	  <div v-show="isTooltipCont5cVisible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltipCont5c">
		  <i @click="isTooltipCont5cVisible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
		  <v-img src="./img/tela_qualidade/btn_close.png"/>
		  </i>
		  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
			<div class="pt-2 pb-2 pl-2 pr-2">
				<span class="tooltip_text">
					<strong>Consciência situacional</strong><br> Entender o contexto das suas atividades dentro da organização e como podem reforçar ou ameaçar a segurança. 
				</span>
			</div>
		  </div>
	  </div>
	  
	  <div v-show="isTooltipCont5dVisible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltipCont5d">
		  <i @click="isTooltipCont5dVisible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
		  <v-img src="./img/tela_qualidade/btn_close.png"/>
		  </i>
		  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
			<div class="pt-2 pb-2 pl-2 pr-2">
				<span class="tooltip_text">
					<strong>Valorização do conhecimento dos profissionais da operação</strong><br> Escutar aqueles que realizam e, portanto, conhecem a atividade no detalhe.. 
				</span>
			</div>
		  </div>
	  </div>
	  
	  <div v-show="isTooltipCont5eVisible" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltipCont5e">
		  <i @click="isTooltipCont5eVisible = false" class="animate__animated animate__fadeInUp fechar_tooltip" aria-hidden="false" >
		  <v-img src="./img/tela_qualidade/btn_close.png"/>
		  </i>
		  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">
			<div class="pt-2 pb-2 pl-2 pr-2">
				<span class="tooltip_text">
					<strong>Compromisso com a resiliência</strong><br> Assumir que os sistemas não são confiáveis e identificar ameaças rapidamente, respondendo antes que os problemas causem dano.
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
				@click="isContent06Visible = true; prosseguir('content06')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	
	</v-card>

<!-- conteúdo 05 -->

<!-- conteúdo 06 -->
	<v-card 
	v-show="isContent06Visible"
	id="content06" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont6" 
	style="z-index:5;background-color:#C4E8E1!important;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_qualidade/grade_header_verde.png" />
		
		<h1 style="color:#2B7080" class="mt-n4 font-weight-bold my-6 reveal fade-left">
			O significado de SEQS
		</h1>
		<v-card 
				elevation="2"
				width="480px"
				style="z-index:8;background-color:#2B7080;border-radius:25px"
				class="mt-n4 pa-2"
				align="center"
				>
				<p style="font-size:1.5em;" class="texto_branco">Acreditações e Certificações</p>
				</v-card>
		<v-row no-gutters class="mx-auto mt-6">
			<v-col cols="12" md="5">
				<p class="mt-0">
					É o conjunto de padrões e práticas que representam direcionadores e barreiras de segurança fundamentais para o controle de sistemas complexos e de processos críticos para a segurança do paciente, dos profissionais e do ambiente.
				</p>
				<p class="mt-4">
					Desde 1999, o Einstein vem recebendo acreditação em qualidade no atendimento contemplada pela Joint Commission International Hospitalar, além de diversas certificações específicas.
				</p>
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				
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
	style="z-index:4;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_qualidade/grade_header_verde.png" />
		
		
		<v-row no-gutters class="mx-auto mt-n4">
			<v-col cols="12" md="7">
				
			</v-col>
			<v-col cols="12" md="5" align-self="start">
				<h1 style="color:#2B7080" class="mt-6 font-weight-bold my-6 reveal fade-left">
			O significado de SEQS
		</h1>
		<v-card 
				elevation="2"
				width="100%"
				style="z-index:8;background-color:#2B7080;border-radius:25px"
				class="mt-n4 pa-2"
				align="center"
				>
				<p style="font-size:1.5em;" class="texto_branco">Acreditações e Certificações</p>
				</v-card>
				<p class="mt-4">
					Seguimos a definição do Beryl Institute que diz que a experiência do paciente é o somatório de todas as interações, moldadas pela cultura da organização e que influenciam a percepção do paciente por meio da continuidade do cuidado. 
				</p>
				<p class="mt-4">
					A identidade Einstein de Atendimento é denominada SPA – Segurança, Paixão em Servir e Atenção aos detalhes.
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
				@click="isContent08Visible = true; prosseguir('content08')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	
	</v-card>

<!-- conteúdo 07 -->

<!-- conteúdo 08 grafismos -->
<v-card 
	v-show="isContent08Visible"
	id="content08" 
	width="100%" 
	elevation="0"
	class="mt-n4 mx-auto rounded-lg pt-0 bg-transparent" 
	style="z-index:3;"  
	>
	<v-img class="mx-auto mt-4" src="./img/tela_qualidade/cont8_grade.png" />
	</v-card>
<!-- conteúdo 08 grafismos -->


<!-- conteúdo 08 -->
	<v-card 
	v-show="isContent08Visible"
	width="100%" 
	elevation="6"
	class="mt-n8 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont8" 
	style="z-index:3;background-color:#C4E8E1!important;"  
	>
	
		
		<v-row class="mx-auto mt-6">
			<v-col cols="12" md="4">
				<p style="font-size:1.5em; text-transform:uppercase" class="mt-8 texto_branco my-6  reveal fade-left">
					Gestão de Melhoria contínua da qualidade hospitalar: esse é o nosso compromisso!
				</p>
			</v-col>
			<v-col cols="12" md="8">
				<p class="mt-8 texto_branco reveal fade-left">
					Visando reforçar o compromisso das lideranças e de todos os colaboradores da SBIBAE com a Melhoria Contínua da Qualidade e a Segurança de nossos processos, a Equipe Nuclear de Implantação do modelo Joint Commission na Instituição idealizou, em 1999, o programa de Exposição da Qualidade.
				</p>
				<p class="mt-4 texto_branco reveal fade-left">
					O programa está fundamentado em dois princípios básicos da qualidade:
				</p>
				<ul class="ml-8 texto_branco mt-4 reveal fade-left">
					<li>Um programa de melhoria contínua da qualidade hospitalar deve representar a soma das iniciativas geradas nas ou pelas equipes da organização;</li>
					<li>A filosofia de melhoria contínua da qualidade deve estar presente em todos os aspectos da organização, criando a cultura do uso sistemático de metodologias e ferramentas da qualidade na solução de problemas, na revisão dos processos e no registro de melhorias.</li>
				</ul>
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
	style="z-index:2;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_qualidade/grade_header_branco.png" />
		
		<v-row class="mx-auto mt-n10">
			<v-col cols="12" md="12" align="center" class="mx-auto mt-6 col_exposicao">
				<p style="font-size:1.5em;" class="texto_branco">
					A <strong>Exposição da Qualidade</strong> é um evento interno, realizado anualmente.
				</p>
			</v-col>
			<v-col cols="12" md="12" align="center">
				<p style="font-size:1.5em;" class="texto_branco">
					<strong>São objetivos da Exposição da Qualidade:</strong>.
				</p>
			</v-col>
			<v-col cols="12" md="3">
				<v-card 
				elevation="6"
				align="center"
				class="mt-0 mx-auto rounded-lg  px-6 py-11" 
				style="background-color:#FEFB99;"
				>
				Exercitar a prática da melhoria contínua.
				</v-card>
			</v-col>
			<v-col cols="12" md="3">
				<v-card 
				elevation="6"
				align="center"
				class="mt-0 mx-auto rounded-lg px-6 py-8" 
				style="background-color:#F3D4C6;"
				>
				Registrar os projetos de melhoria desenvolvidos na instituição.
				</v-card>
			</v-col>
			<v-col cols="12" md="3">
				<v-card 
				elevation="6"
				align="center"
				class="mt-0 mx-auto rounded-lg pa-8" 
				style="background-color:#B3F5FE;"
				>
				Trocar boas experiências entre as áreas.
				</v-card>
			</v-col>
			<v-col cols="12" md="3">
				<v-card 
				elevation="6"
				align="center"
				class="mt-0 mx-auto rounded-lg pa-8" 
				style="background-color:#D7AF65;"
				>
				Divulgar os projetos para os clientes internos e externos.
				</v-card>
			</v-col>
			<v-col cols="12" md="12">
				
				<ul class="ml-8 texto_branco mt-4">
					<li>Desde o início, o evento conta com o apoio da alta administração durante todo o processo de preparo e desenvolvimento.</li>
					<li>Os trabalhos apresentados na Exposição da Qualidade são submetidos à avaliação de uma banca julgadora e os autores concorrem a prêmios conforme o regulamento vigente.</li>
					<li>A banca pode ser formada por profissionais externos à SBIBAE e também internos, desde que não tenham vínculo com as áreas executoras dos trabalhos.</li>
				</ul>
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

<!-- conteúdo 10 -->
	<v-card 
	v-show="isContent10Visible"
	id="content10" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:1; margin-bottom:30px;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_qualidade/grade_header_branco.png" />
		<v-row class="mx-auto mt-6">
			<v-col cols="12" md="7">
				
			</v-col>
			<v-col cols="12" md="5">
				<p style="font-size:1.5em;margin-bottom:130px;" class="texto_branco">
					Esse é o nosso desafio: oferecer atendimento de qualidade, utilizando os mais avançados recursos e sempre garantindo a segurança dos nossos pacientes e colaboradores!
				</p>
			</v-col>
		</v-row>

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
	const isContent07Visible = ref(false)
	const isContent08Visible = ref(false)
	const isContent09Visible = ref(false)
	const isContent10Visible = ref(false)
	const isTooltip1Visible = ref(false)
	const isTooltip2Visible = ref(false)
	const isTooltip3Visible = ref(false)
	const isTooltipCont5aVisible = ref(false)
	const isTooltipCont5bVisible = ref(false)
	const isTooltipCont5cVisible = ref(false)
	const isTooltipCont5dVisible = ref(false)
	const isTooltipCont5eVisible = ref(false)


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
.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
}
.v-card-conteudos_cont2 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/cont2_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont6 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/cont6_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont7 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/cont7_fundo.png");
	background-size: cover;
	background-position: center;
}
.v-card-conteudos_cont8 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/cont8_fundo.png");
	background-size: cover;
	background-position: center;
}
.v-card-conteudos_cont9 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/cont9_fundo.png");
	background-size: cover;
	background-position: top center;
	background-color:#362014;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_qualidade/footer_fundo.png");
	background-size: cover;
	background-position: top center;
}
.card_header {
	padding: 0 !Important;
	border-radius: 18px 18px 0px 0px !important;
	z-index: 10;
	background-color: #2B7080;
}
.header_text {
	position: absolute;
	top: 20%;
	left: 6%;
	width: 42%;
}
.grade_header {
	max-width: 70%;
}
.box_dicas {
	border-radius: 25px;
}
.col_exposicao{
height:550px;
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.9rem;
	}
.tool-tip-1 {
position: absolute !important;
    z-index: 6002 !important;
    top: 65%;
    left: 51%;
    transform: translate(-50%, -50%);
    width: 190px;
	line-height: normal;
}
.triangulo-tool-tip1 {
    position: absolute !important;
    top: -10%;
    left: 41%;
    z-index: 6005 !important;
    transform: rotate(-120deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-2 {
position: absolute !important;
    z-index: 6002 !important;
    top: 23%;
    left: 70%;
    transform: translate(-50%, -50%);
    width: 190px;
	line-height: normal;
}
.triangulo-tool-tip2 {
    position: absolute !important;
    top: 89%;
    left: 41%;
    z-index: 6005 !important;
    transform: rotate(-300deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.tool-tip-3 {
position: absolute !important;
    z-index: 6002 !important;
    top: 18%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 250px;
	line-height: normal;
}
.triangulo-tool-tip3 {
    position: absolute !important;
    top: 89%;
    left: 41%;
    z-index: 6005 !important;
    transform: rotate(-300deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
.v-card_info_cont5{
height:450px;
}
.tooltipCont5a {
    position: absolute !important;
    z-index: 6002 !important;
    top: 76%;
    left: 17%;
    transform: translate(-50%, -50%);
    width: 237px;
    line-height: normal;
	}
	.tooltipCont5b {
    position: absolute !important;
    z-index: 6002 !important;
    top: 76%;
    left: 32%;
    transform: translate(-50%, -50%);
    width: 237px;
    line-height: normal;
	}
	.tooltipCont5c {
    position: absolute !important;
    z-index: 6002 !important;
    top: 76%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 237px;
    line-height: normal;
	}
	.tooltipCont5d {
    position: absolute !important;
    z-index: 6002 !important;
    top: 78%;
    left: 63%;
    transform: translate(-50%, -50%);
    width: 250px;
    line-height: normal;
	}
	.tooltipCont5e {
    position: absolute !important;
    z-index: 6002 !important;
    top: 78%;
    left: 78%;
    transform: translate(-50%, -50%);
    width: 266px;
    line-height: normal;
	}
	.fechar_tooltip {
	position: absolute!important;
    top: 0px;
    right: 0px;
	z-index: 6009 !important;
	cursor: pointer;
	width:50px;
	}
@media screen and (max-width: 1277px){
.v-card_subs{
width:100%!important;
}
.logo_cont1{
padding:10%;
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8rem;
	}
.tool-tip-3 {
    top: 18%;
    left: 47%;
    width: 300px;
}
.triangulo-tool-tip3 {
    top: 89%;
    left: 15%;
}
.v-card_info_cont5{
height:400px;
}
.tooltipCont5a {
    top: 74%;
    left: 19%;
    width: 218px;
	}
	.tooltipCont5b {
    top: 76%;
    left: 32%;
    width: 207px;
	}
	.tooltipCont5c {
    top: 76%;
    left: 50%;
    width: 237px;
	}
	.tooltipCont5d {
    top: 76%;
    left: 67%;
    width: 237px;
	}
	.tooltipCont5e {
    top: 74%;
    left: 76%;
    width: 270px;
	}
}
@media screen and (max-width: 768px){
	.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8rem;
	}
.cont2_info{
margin-top: 50px!important;
}
.v-card_subs{
width:100%!important;
}
.logo_cont1{
width:50%;
padding:10%;
}
.v-card-conteudos_cont7 {
	background-position: right;
}
.v-card-conteudos_cont9 {
	background-position:top;
	background-size: contain;
	background-repeat: no-repeat;
	background-color:#362014;
}
.col_exposicao{
height:80px;
padding-top:300px;
margin-bottom:40px;
}
.v-card_info_cont5{
height:650px;
}
.tooltipCont5a {
    top: 17%;
    left: 74%;
     width: 50%;
	}
	.tooltipCont5b {
    top: 33%;
    left: 74%;
     width: 50%;
	}
	.tooltipCont5c {
    top: 50%;
    left: 74%;
     width: 50%;
	}
	.tooltipCont5d {
    top: 67%;
    left: 74%;
     width: 50%;
	}
	.tooltipCont5e {
    top: 82%;
    left: 74%;
    width: 50%;
	}
}
</style>