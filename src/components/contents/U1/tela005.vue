<template>
	<!-- header presença-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_presenca/header.png" />
		<v-img class="show_1277" src="./img/tela_presenca/header.png"/>
		<v-img class="show_mobile" src="./img/tela_presenca/header_mobile.png" />
		<v-img src="./img/tela_presenca/header_text.svg" class="header_text"
			title="presença Einstein" />
	</v-card>

	<v-card
	v-if="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:9;background-color:#00A4E1!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header_branco.png" />
		<v-card-text class="pt-10 pl-0 pr-0">
			<p class="texto_branco reveal fade-left">
				O Hospital Israelita Albert Einstein é hoje um sistema completo de saúde e atua em todas as etapas da assistência à saúde, no âmbito privado e público, em ensino, educação e consultoria, em pesquisa e inovação e em responsabilidade social. Tem sede em São Paulo (SP) e desenvolve atividades na cidade e no interior do estado de São Paulo, nos estados de Goiás, Rio  de Janeiro e Minas Gerais.
			</p>
			<h3 class="font-weight-bold texto_branco my-6  reveal fade-left">
				A seguir, conheça onde o Einstein está presente.
			</h3>
		</v-card-text>
	</v-card>
<!-- header -->
	
<!-- conteúdo mapa 01 -->
	<v-card 
	v-if="isMapa01Visible" 
	id="mapa01" 
	width="100%"
	elevation="6"
	style="z-index:8;background-color:#D9D9D9!important;"
	class="mt-4 mx-auto rounded-lg pt-4 v-card-conteudos_map1"
	>
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_presenca/grade_header_azul2.png" />

<v-row class="mb-8" no-gutters>
			<v-col cols="12" md="5">
				
				<v-card elevation="6" class="box_mapas_btns_1 pl-0 pr-0 mt-n8 reveal fade-left mx-auto" style="width:100%">
					<v-card-text>
						<strong>Região Norte - Amazonas</strong>
					</v-card-text>
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-microscope box_dicas_icon"></span> 1  Unidade de pesquisa</strong>
						</li>
					</ul>
					</v-card-text>
					
					<v-card-text>
						<strong>Região Norte - Pará</strong>
					</v-card-text>
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 1 Hospital</strong> | Morumbi
						</li>
					</ul>
					</v-card-text>
				</v-card>
				
				<v-card elevation="6" class="box_mapas_btns pl-0 pr-0 mt-4 reveal fade-left mx-auto" style="width:100%">
					<v-card-text>
						<strong>São Paulo</strong>
					</v-card-text>
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 1 Unidade Avançada</strong>
						</li>
					</ul>
					</v-card-text>
					<v-card-text>
						
						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = true; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_1_mapa_1')"
							> 
							SAIBA MAIS	
						</v-btn>
						
					</v-card-text>
					
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 5 Unidades Avançadas</strong> | Pronto atendimento, exames, consultas  e procedimentos de média complexidade em São Paulo e Barueri (SP). 
						</li>
					</ul>
						
					</v-card-text>
					<v-card-text>
						
				
						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = true; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_2_mapa_1')"
							> 
							SAIBA MAIS	
						</v-btn>
						
					</v-card-text>
					
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 5 Clínicas Einstein</strong> | Atenção primária em São Paulo. 
						</li>
					</ul>
						
					</v-card-text>
					<v-card-text>
						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = true;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_3_mapa_1')"
							> 
							SAIBA MAIS	
						</v-btn>
					</v-card-text>
					
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 4 Espaços Einstein</strong> | Reabilitação e Esporte em São Paulo. 
						</li>
					</ul>
						
					</v-card-text>
					<v-card-text>
						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = true;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_4_mapa_1')"
							> 
							SAIBA MAIS	
						</v-btn>
					</v-card-text>
					
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							<strong><span class="mdi mdi-google-classroom box_dicas_icon"></span> <span class="mdi mdi-microscope box_dicas_icon"></span> 11 unidades de ensino e pesquisa.</strong>
						</li>
					</ul>
						
					</v-card-text>
					<v-card-text>
						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = true;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_5_mapa_1')"
							> 
							SAIBA MAIS	
						</v-btn>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12"  md="7" align-self="center" align="center">
								
				<img width="600" class="show_desktop" src="./img/tela_presenca/mapa_01.png" usemap="#image-map">
				<img width="450" class="show_1277" src="./img/tela_presenca/mapa_01_1277.png" usemap="#image-map_1277">
				<img width="300" class="mt-6 show_mobile" src="./img/tela_presenca/mapa_01_mobile.png" usemap="#image-map_mobile">

				<map name="image-map">
					<area style="cursor:pointer"
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = true;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_6_mapa_1')"
					
					target="" alt="goiania" title="goiania" coords="296,104,29" shape="circle">
					
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = true;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_7_mapa_1')" 
					
					target="" alt="rio de janeiro" title="rio de janeiro" coords="571,302,27" shape="circle">
					
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = true;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_8_mapa_1')"
					
					target="" alt="belo horizonte" title="belo horizonte" coords="571,104,26" shape="circle">
				</map>
				
				<map name="image-map_1277">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = true;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_6_mapa_1')"
					
					target="" alt="goiania" title="goiania" coords="222,78,19" shape="circle">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = true;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_7_mapa_1')"
					
					target="" alt="rio de janeiro" title="rio de janeiro" coords="428,228,19" shape="circle">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = true;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_8_mapa_1')"
					
					target="" alt="belo horizonte" title="belo horizonte" coords="431,77,19" shape="circle">
				</map>
				
				<map name="image-map_mobile">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = true;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_6_mapa_1')"
					
					target="" alt="goiania" title="goiania" coords="148,50,17" shape="circle">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = true;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_7_mapa_1')"
					
					target="" alt="rio de janeiro" title="rio de janeiro" coords="285,151,12" shape="circle">
					<area style="cursor:pointer" 
					
					@click="isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = true;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_8_mapa_1')" 
					
					target="" alt="belo horizonte" title="belo horizonte" coords="286,52,16" shape="circle">
				</map>
				
				
				<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-bottom mx-auto" style="width: 60%">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos botões para saber mais.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		
		<v-card elevation="0" class="box_mapas_btns pl-0 pr-0 mt-n8 mb-4 mx-auto bg-transparent" style="width:100%">
			<v-card-text>
					<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span></strong> — Unidades de saúde | <strong><span class="mdi mdi-google-classroom box_dicas_icon"></span></strong> — Unidades de ensino
			</v-card-text>
		</v-card>
		
		<img class="map1_unidades" src="./img/tela_presenca/map1_unidades.png" />
		

	</v-card>
<!-- conteúdo mapa 01 -->

<!-- Grafisrmos "Triangulo" link_1_mapa_1 -->
	<v-container 
	v-if="isLink_1_mapa_1Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	v-if="isLink_1_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_1_mapa_1 -->
	<v-card 
	v-if="isLink_1_mapa_1Visible"
	id="link_1_mapa_1" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="7">
				<h3 class="texto_azul_claro">
					UNIDADE MORUMBI 
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					A unidade hospitalar do Morumbi conta com: 
				</p>
				<ul class="ml-6">
						<li>
							Pronto Atendimento 24h 
						</li>
						<li>
							Estrutura completa de Medicina Diagnóstica
						</li>
						<li>
							Centros cirúrgicos
						</li>
						<li>
							Consultórios médicos 
						</li>
						<li>
							Vacinação
						</li>
						<li>
							Maternidade 
						</li>
						<li>
							Centro completo para o tratamento do câncer e doenças hematológicas
						</li>
						<li>
							Banco de sangue
						</li>
						<li>
							Centro de reabilitação
						</li>
						<li>
							Sistema em expansão de quartos inteligentes, que são ambientes personalizados e com funcionalidades específicas que permitem controlar, a distância, diversos dispositivos do ambiente.
						</li>
						<li>
							Auditórios e espaços para a realização de eventos. 
						</li>
					</ul>
					<v-sheet class="bg-transparent">
						<a @click="modal_morumbi = true"> 
							<v-img  width="60%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="60%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_morumbi" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_morumbi = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/morumbicsr/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													title="2.2.5 - Responsabilidade Social"
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>

	
					
					
					
					
					
			</v-col>
			<v-col cols="12" md="5">
				<v-img class="mx-auto" src="./img/tela_presenca/map1_link1_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet class="bg-transparent">
			<v-img width="100%" class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_timeline.png" title="acontecimentos recentes. 2022. 50 novos leitos foram criados, ampliando a capacidade de operação e número de pacientes atendidos na unidade. Em julho, a unidade Morumbi recebeu o reconhecimento Magnet pela excelência de práticas e estratégias de enfermagem do mundo. O Einstein é a primeira organização da América Latina a conquistar a condição de hospital Magnet. Apenas 14 centros de saúde fora dos Estados Unidos têm essa designação. A unidade Morumbi do Einstein foi eleita, pelo terceiro ano consecutivo, um dos melhores hospitais do mundo no ranking publicado pela revista americana Newsweek. Em pesquisa feita em 27 países, o Einstein foi o único hospital brasileiro entre os 50 melhores do mundo, ocupando o 34º lugar na lista, duas posições acima da de 2021."/>
			<v-img width="100%" class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_timeline.png" title="acontecimentos recentes. 2022. 50 novos leitos foram criados, ampliando a capacidade de operação e número de pacientes atendidos na unidade. Em julho, a unidade Morumbi recebeu o reconhecimento Magnet pela excelência de práticas e estratégias de enfermagem do mundo. O Einstein é a primeira organização da América Latina a conquistar a condição de hospital Magnet. Apenas 14 centros de saúde fora dos Estados Unidos têm essa designação. A unidade Morumbi do Einstein foi eleita, pelo terceiro ano consecutivo, um dos melhores hospitais do mundo no ranking publicado pela revista americana Newsweek. Em pesquisa feita em 27 países, o Einstein foi o único hospital brasileiro entre os 50 melhores do mundo, ocupando o 34º lugar na lista, duas posições acima da de 2021."/>
			<v-img width="100%" class="mt-4 show_mobile" src="./img/tela_presenca/map1_link1_timeline_mobile.png" title="acontecimentos recentes. 2022. 50 novos leitos foram criados, ampliando a capacidade de operação e número de pacientes atendidos na unidade. Em julho, a unidade Morumbi recebeu o reconhecimento Magnet pela excelência de práticas e estratégias de enfermagem do mundo. O Einstein é a primeira organização da América Latina a conquistar a condição de hospital Magnet. Apenas 14 centros de saúde fora dos Estados Unidos têm essa designação. A unidade Morumbi do Einstein foi eleita, pelo terceiro ano consecutivo, um dos melhores hospitais do mundo no ranking publicado pela revista americana Newsweek. Em pesquisa feita em 27 países, o Einstein foi o único hospital brasileiro entre os 50 melhores do mundo, ocupando o 34º lugar na lista, duas posições acima da de 2021."/>
		</v-sheet>


		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

			
				
				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
				
				
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_1_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_2_mapa_1 -->
	<v-container 
	v-if="isLink_2_mapa_1Visible" 
	id="link_2_mapa_1" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	
	</v-container>
	
	<v-card 
	v-if="isLink_2_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_2_mapa_1 -->
	<v-card 
	v-if="isLink_2_mapa_1Visible"
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="8">
				<h3 class="texto_azul_claro">
					UNIDADES AVANÇADAS
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Pronto atendimento, exames, consultas  e procedimentos de média complexidade. 
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="end">
				<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-bottom mx-auto" style="width: 100%">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		
		<v-card class="pl-0 pr-0 mt-6" elevation="4" style="border-radius:20px">
			<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false">
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link2_mapa1_slide1.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link2_mapa1_slide2.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link2_mapa1_slide3.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link2_mapa1_slide4.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link2_mapa1_slide5.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>

			</v-carousel>
		</v-card>
	
			
			<v-row class="my-4 reveal fade-bottom">
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					Maiores em área do que as Clínicas Einstein, as unidades avançadas contam com instalações modernas, excelente localização e os serviços médicos assistenciais do Einstein. 
				</p>
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>As cinco unidades, somadas, atendem cerca de <span style="font-size:1.2em;color:#62C9CE">2.300</span> pessoas por dia.</strong> 
				</p>
			</v-col>
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					Todas as unidades avançadas contam com:
				</p>
				<ul class="ml-8">
					<li>Pronto atendimento.</li>
					<li>Consultórios.</li>
					<li>Exames de imagem e laboratoriais. </li>
					<li>Fisioterapia.</li>
					<li>Vacinação, entre outros serviços.</li>
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

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_2_mapa_1 -->


<!-- Grafisrmos "Triangulo" link_3_mapa_1 -->
	<v-container 
	v-if="isLink_3_mapa_1Visible" 
	id="link_3_mapa_1" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	
	</v-container>
	
	<v-card 
	v-if="isLink_3_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_3_mapa_1 -->
	<v-card 
	v-if="isLink_3_mapa_1Visible"
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="8">
				<h3 class="texto_azul_claro">
					CLÍNICAS EINSTEIN
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					As Clínicas Einstein são unidades ambulatoriais que oferecem atenção primária à saúde e coordenação de cuidado. Elas têm como ponto central a promoção da saúde e a prevenção de doenças.  
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="end">
				<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-bottom mx-auto" style="width: 100%">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		
		<v-card class="pl-0 pr-0 mt-6" elevation="4" style="border-radius:20px">
		<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false">

				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link3_mapa1_slide1.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link3_mapa1_slide2.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link3_mapa1_slide3.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link3_mapa1_slide4.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
						<v-row justify="center" align="center">
							<v-col cols="12" md="12">
								<v-img src="./img/tela_presenca/link3_mapa1_slide5.png" />
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>

			</v-carousel>
		</v-card>
		
	
			
			<v-row class="my-4 reveal fade-bottom">
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					O atendimento é realizado por médicos de família, enfermeiros, equipe multidisciplinar e coordenadores do cuidado, que oferecem um cuidado abrangente, longitudinal e coordenado.
				</p>
				
			</v-col>
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>São cinco unidades próprias e outras oito localizadas em empresas.</strong> 
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

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_3_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_4_mapa_1 -->
	<v-container 
	v-if="isLink_4_mapa_1Visible" 
	id="link_4_mapa_1" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	
	</v-container>
	
	<v-card 
	v-if="isLink_4_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_4_mapa_1 -->
	<v-card 
	v-if="isLink_4_mapa_1Visible"
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="8">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Espaço Esporte e Reabilitação
				</h3>
				
			</v-col>
			<v-col cols="12" md="4" align-self="end">
				<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-bottom mx-auto" style="width: 100%">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		
		
		
		<v-card class="pl-0 pr-0 mt-6" elevation="4" style="border-radius:20px">
		
			<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false" elevation="6">
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_presenca/link4_mapa1_slide1.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									O Espaço Einstein é uma unidade destinada à reabilitação física e ao desempenho Esportivo, que atende tanto as pessoas que querem iniciar uma prática esportiva orientada como aquelas que já praticam atividade física de alto rendimento e precisam de suporte para manter essa intensidade, melhorar o desempenho ou recuperar-se de lesão relacionada à prática esportiva.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_presenca/link4_mapa1_slide2.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									A primeira unidade do Espaço Einstein, voltada para a promoção da saúde e da medicina do esporte foi inaugurada em setembro de 2022. O foco é a reabilitação de baixa complexidade, ou seja, que não demanda suporte hospitalar, por meio da promoção da saúde física e mental.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_presenca/link4_mapa1_slide3.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Entre os serviços oferecidos pelo Espaço Einstein estão ioga, grupos de consultores para corrida, pilates e condicionamento físico, além de programas de atividades físicas para a comunidade vizinha.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_presenca/link4_mapa1_slide4.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Nos seus primeiros sete meses de funcionamento, foram cerca de <strong>12 mil atendimentos</strong>, sendo 95% em serviços de reabilitação e 5% em serviços de medicina esportiva.
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
			</v-carousel>
		
		</v-card>
		
			
			
			


		<!--Btn final-->
		<v-container class="d-flex justify-center mt-8 mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_4_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_5_mapa_1 -->
	<v-container 
	v-if="isLink_5_mapa_1Visible" 
	id="link_5_mapa_1" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	
	</v-container>
	
	<v-card 
	v-if="isLink_5_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_ensino.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_5_mapa_1 -->
	<v-card 
	v-if="isLink_5_mapa_1Visible"
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos_LINK5MAP1" 
	>
		<v-img style="padding-left:6%; padding-right: 6%;" class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="8">
				<h3 class="texto_azul_claro">
					UNIDADES DE ENSINO
				</h3>
			</v-col>
		</v-row>
		
<!-- link5_map1_img01 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img01.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				
		
					
					<v-sheet class="bg-transparent mt-n10">
						<a @click="modal_faculdade_cep = true"> 
							<v-img  width="100%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="100%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_faculdade_cep" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_faculdade_cep = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/faculdade_cep/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>

			</v-col>
			
			<v-col cols="12" md="12">
			<p class="mt-8 texto_preto fadeInLeft">
					O novo Centro de Ensino e Pesquisa da Sociedade Beneficente Israelita Brasileira Albert Einstein, inaugurado em 2022, ocupa uma área construída de mais de 44 mil m², adjacente ao hospital, integrando o paisagismo interno e externo. Com capacidade para cerca de 6 mil pessoas, o prédio acomoda alunos das graduações de medicina e enfermagem, docentes e pesquisadores, e além dos diversos pontos de área verde e ambientes de convivência, conta com todos os requisitos e tecnologias para se tornar uma das instituições mais avançadas da América Latina em estudos e pesquisas médicas.
				</p>
			</v-col>
			<v-col cols="12" md="5">
				<p class="mt-0 texto_preto fadeInLeft">
					<strong>Estrutura</strong>
				</p>
				<ul class="ml-8 mt-4">
					<li>Capacidade para cerca de 6.000 pessoas</li>
					<li>Salas de aula</li>
					<li>Salas de conferência</li>
					<li>Auditório com 400 assentos</li>
					<li>Laboratório de Terapia Celular</li>
					<li>Laboratório de Biologia Experimental</li>
					<li>Laboratório Multidisciplinar</li>
					<li>Laboratório de Enfermagem</li>
					<li>Espaço de exposição</li>
					<li>Espaço de Videoconferência</li>
					<li>Biblioteca</li>
					<li>Centro de Simulação Realística</li>
					<li>Centro de Conhecimento</li>
					<li>Centro de Pesquisa Clínica</li>
					<li>Jardim Interno</li>
					<li>Praça de alimentação com 220 assentos</li>
					<li>Passarela com ligação direta com o Hospital Albert Einstein</li>
				</ul>
			</v-col>
			<v-col cols="12" md="7" align-self="center">
				<v-img class="mt-0" src="./img/tela_presenca/link5_mapa1_img02.png" />
			</v-col>
		</v-row>
		
<!-- link5_map1_img01 -->

<!-- link5_map1_img02 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img03.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<a @click="modal_farialima = true"> 
							<v-img  width="100%" class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="100%" class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
				
								<template>
									<v-dialog v-model="modal_farialima" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_farialima = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/farialima/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>
					
					
					
					
					
					
					
					
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					Inaugurada em março de 2014, a Unidade Faria Lima tem capacidade para 330 alunos por ano, em 15 turmas simultâneas e são oferecidos cursos de pós-graduação.

				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img02 -->

<!-- link5_map1_img03 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img04.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			
			<v-col cols="12" md="5">
				 <img style="position:relative;top:-50px" class="btn_img" src='./img/tela_presenca/map1_link1_btn_tour_fake.png'/>
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					A Unidade Morato é composta por um prédio dedicado exclusivamente às atividades do Ensino Einstein. O espaço, que teve início com os Cursos Técnicos na área da saúde e a Graduação em Enfermagem, comporta agora outros cursos, como Pós-graduação, Atualização e Graduação em Medicina. O prédio conta, também, com o Centro de Experimentação e Treinamento em Cirurgia, laboratórios, biblioteca, centro acadêmico, espaço de convivência e salas de aula,

				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img03 -->

<!-- link5_map1_img04 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img05.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">

					<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<a @click="modal_ensino_paulista_1 = true"> 
							<v-img  width="100%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="100%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_ensino_paulista_1" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_ensino_paulista_1 = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/ensino_paulista_1/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>
					
					
					
					
					
			
				
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					Inaugurada em 2012, a Unidade Paulista de Ensino tem localização privilegiada, em um dos cartões-postais da cidade de São Paulo. Em 2017 inaugurou seu novo espaço, com expansão e alteração de endereço. Atualmente possui a capacidade para 860 alunos simultaneamente, oferece salas de aula modernas e confortáveis. O destaque é a sala de Imagem, que dispõe de <em>workstations</em> individuais (com 2 monitores de 24 polegadas), computadores de alta performance e sistema PACS integrado. Nesta Unidade são oferecidos: Pós-graduação, Cursos técnicos, Cursos de atualização e Cursos do Centro de Simulação Realística.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img04 -->

<!-- link5_map1_img05 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img06.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				<img style="position:relative;top:-50px" class="btn_img" src='./img/tela_presenca/map1_link1_btn_tour_fake.png'/>
				 
				 <!--<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<a href="https://gridcriacaodigital.com/demo/einstein/tour/ensino_paulista_1/index.html" target="_bank"> 
							<v-img width="100%"  class="mt-4" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>-->
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					Inaugurada em 2020, a Unidade de Ensino Paulista II tem capacidade de receber 430 alunos simultaneamente e possui salas de aula modernas, com uma disposição de mesas diferenciada, permitindo ao aluno melhor aproveitamento e interação. Também possui um belo projeto de arquitetura, com ambientes silenciosos, tranquilos e repletos de plantas, tornando o espaço ainda mais agradável, acolhedor e propício para estudo e leitura. A unidade oferece cursos de Pós-graduação, o MBA Executivo, o Programa de Gestão em Saúde e o Centro de Simulação Realística.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img05 -->

<!-- link5_map1_img06 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img07.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<img style="position:relative;top:-50px" class="btn_img" src='./img/tela_presenca/map1_link1_btn_tour_fake.png'/>
					</v-sheet>
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					Administrada pelo Einstein desde 2003, a Unidade Vila Mariana integra diversas áreas e serviços, sendo eles o Residencial Israelita Albert Einstein, com mais de 120 moradores e os seguintes ambulatórios: Geriatria/PECJ (Programa Einstein para a Comunidade Judaica), Residência Médica, Saúde do Trabalho, Projeto Coluna e Programa de Transplantes. Também estão alocadas na Unidade Vila Mariana algumas áreas administrativas como a Eretz Bio, Laboratório de Inovação e Incubadora de Startups e Escritório Proadi.
				</p>
				<p class="mt-0 texto_preto fadeInLeft">
					No ensino em saúde, se destaca como campo de estágio assistencial para cursos de Pós-graduação, Residência Médica e Multiprofissional e Graduação em Enfermagem, além de receber alguns cursos de atualização do Einstein.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img06 -->

<!-- link5_map1_img07 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img08.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">

					<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<a @click="modal_hospsantacatarina = true"> 
							<v-img  width="100%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="100%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_hospsantacatarina" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_hospsantacatarina = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/hospsantacatarina/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>
					
					
					
					
					
					
					
					
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					Inaugurado em 2015, o Hospital Municipal Vila Santa Catarina (HMVSC) é administrado pelo Einstein em parceria inédita com o SUS e oferece assistência de alta complexidade. Atende também como hospital escola aos nossos programas de ensino formal, como a Residência Médica e Graduação em Medicina e em Enfermagem. Na assistência, destaca-se o Programa de Transplante de Órgãos Sólidos e as áreas de Oncologia, Maternidade, Pediatria, Terapia Intensiva e Clínica Cirúrgica.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img07 -->

<!-- link5_map1_img08 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img09.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				<img style="position:relative;top:-50px" class="btn_img" src='./img/tela_presenca/map1_link1_btn_tour_fake.png'/>

			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					No ensino em saúde, o HMVSC se destaca como campo de estágio hospitalar para cursos de Graduação em Medicina e em Enfermagem, Residências Médicas e Multiprofissionais e estágios para Cursos Técnicos e outros estágios supervisionados na área hospitalar. Conta também com profissionais capacitados para as atividades de ensino desenvolvidas, além de um setor destinado às atividades de ensino, com salas de aulas, anfiteatro, biblioteca e espaço de convívio para estudantes.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img08 -->

<!-- link5_map1_img09 -->
		
		<v-img class="mt-6" style="border-top: solid #00A4E1" src="./img/tela_presenca/link5_mapa1_img10.png" />
		
		<v-row class="mt-n16 reveal fade-bottom" style="padding-left:6%; padding-right: 6%;">
			<v-col cols="12" md="7">
			</v-col>
			<v-col cols="12" md="5">
				
					
					<v-sheet style="position:relative;top:-50px" class="bg-transparent">
						<a @click="modal_ceebe = true"> 
							<v-img  width="100%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="100%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_ceebe" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_ceebe = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/ceebe/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
			</v-col>
			
			<v-col cols="12" md="12">
				<p class="mt-0 texto_preto fadeInLeft">
					O Centro Einstein de Esporte e Bem-estar (CEEBE) foi criado para promover a qualidade de vida dos alunos da Graduação e da Residência, com atividades que estimulam a saúde física e mental e proporcionam momentos de lazer e convívio social entre calouros, veteranos, residentes e professores. A unidade conta com diversos espaços e equipamentos para a prática esportiva, inclusive com o suporte de educadores físicos, e para confraternizações, como uma churrasqueira e um <em>rooftop</em>.
				</p> 
				<p class="mt-0 texto_preto fadeInLeft">
					Inaugurado em 2017, o CEEBE já provou ser um recurso eficiente para prevenir o <em>burnout</em> e outros sinais de esgotamento comuns em estudantes da área da saúde, e ainda incentivar a adoção de hábitos para uma vida mais saudável.
				</p>
			</v-col>
		</v-row>
		
<!-- link5_map1_img09 -->

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_5_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_6_mapa_1 -->
	<v-container 
	v-if="isLink_6_mapa_1Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	v-if="isLink_6_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_6_mapa_1 -->
	<v-card 
	v-if="isLink_6_mapa_1Visible"
	id="link_6_mapa_1" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 class="texto_azul_claro">
					UNIDADE GOIÂNIA
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Com 18 mil m<sup>2</sup> de área total, a unidade conta com:
				</p>
				<ul class="ml-6">
						<li>
							Pronto Atendimento 24h. 
						</li>
						<li>
							Leitos de internação.
						</li>
						<li>
							Terapia intensiva.
						</li>
						<li>
							Transplante medular óssea.
						</li>
						<li>
							Cirurgia Robótica.
						</li>
					</ul>
					
					<v-card class="mt-6 pa-3 reveal fade-bottom mx-auto d-flex justify-center align-center cursor-pointer" style="width: 100%; background-color:#81C300">
								<span style="font-size:2em;" class="texto_branco mdi mdi-map"></span>
								 <p class="texto_branco ml-4">A unidade de Goiânia é o primeiro hospital do Einstein fora de São Paulo.</p>
					</v-card>

			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/map1_link6_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			<v-img width="100%" class="mt-4 show_desktop" src="./img/tela_presenca/map1_link6_timeline.png" title="acontecimentos recentes. 2022. A Unidade recebeu R$ 16,7 milhões de investimentos em infraestrutura, com destaque para a instalação da primeira plataforma de cirurgia robótica do estado. A unidade também inaugurou um novo laboratório de microbiologia. Em agosto, foi inaugurado o check-up executivo com uma área de 550 metros quadrados. No espaço, os cuidados ficam centrados em um só local, garantindo estrutura e privacidade aos pacientes. Também foram construídos nove novos consultórios médicos com recepção dedicada."/>
			
			<v-img width="100%" class="mt-4 show_mobile" src="./img/tela_presenca/map1_link6_timeline_mobile.png" title="acontecimentos recentes. 2022. A Unidade recebeu R$ 16,7 milhões de investimentos em infraestrutura, com destaque para a instalação da primeira plataforma de cirurgia robótica do estado. A unidade também inaugurou um novo laboratório de microbiologia. Em agosto, foi inaugurado o check-up executivo com uma área de 550 metros quadrados. No espaço, os cuidados ficam centrados em um só local, garantindo estrutura e privacidade aos pacientes. Também foram construídos nove novos consultórios médicos com recepção dedicada."/>
		</v-sheet>
		
		<v-sheet>
			
		</v-sheet>


		<!--Btn final-->
		
		<v-container class="d-flex justify-center mb-4">
		
			<v-row no-gutters>
				<v-col cols="12" md="12" align-self="center" class="ml-4" align="center">
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
				</v-col>
			</v-row>

		</v-container>

	</v-card>
<!-- link_6_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_7_mapa_1 -->
	<v-container 
	v-if="isLink_7_mapa_1Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_7_mapa_1Visible"
	
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_ensino.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_7_mapa_1 -->
	<v-card 
	v-if="isLink_7_mapa_1Visible"
	id="link_7_mapa_1" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 class="texto_azul_claro">
					UNIDADE RIO DE JANEIRO
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					A primeira unidade de Ensino do Einstein fora de São Paulo foi inaugurada em março de 2015 em localização privilegiada, no Centro da cidade do Rio de Janeiro. Com 10 salas de aula, um laboratório e uma biblioteca, comporta 320 alunos simultaneamente. O corpo docente é composto por profissionais que integram o corpo clínico do Einstein e os alunos podem realizar os estágios no próprio hospital em São Paulo. 

				</p>
				
				
					<v-sheet class="bg-transparent">
						<a @click="modal_riodejaneiro = true"> 
							<v-img  width="90%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="90%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_riodejaneiro" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_riodejaneiro = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/riodejaneiro/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													title="2.2.5 - Responsabilidade Social"
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>
					
					
		
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/map1_link7_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
	
<!-- link_8_mapa_1 -->

<!-- Grafisrmos "Triangulo" link_8_mapa_1 -->
	<v-container 
	v-if="isLink_8_mapa_1Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_8_mapa_1Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_ensino.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_8_mapa_1 -->
	<v-card 
	v-if="isLink_8_mapa_1Visible"
	id="link_8_mapa_1" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 class="texto_azul_claro">
					UNIDADE BELO HORIZONTE
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Inaugurada em 2016, Unidade de Ensino do Einstein em Belo Horizonte tem capacidade para 120 alunos e oferece, principalmente, cursos de pós-graduação. Com estrutura moderna e confortável, oferece aos profissionais de saúde de Minas Gerais a oportunidade de aperfeiçoarem seus conhecimentos com base na <em>expertise</em> do Hospital Israelita Albert Einstein e de seu corpo clínico.
				</p>
			
					
					
					<v-sheet class="bg-transparent">
						<a @click="modal_belohorizonte = true"> 
							<v-img  width="90%"  class="mt-4 show_desktop" src="./img/tela_presenca/map1_link1_btn_tour.png" />
							<v-img  width="90%"  class="mt-4 show_1277" src="./img/tela_presenca/map1_link1_btn_tour.png" />
						</a>
					</v-sheet>
					
				
								<template>
									<v-dialog v-model="modal_belohorizonte" max-width="1200px">
										<v-sheet
										class="close-btn rounded-pill"
										>
											<v-icon 
											icon="mdi-close-circle-outline" 
											size="48px" 
											:color="appStore.isDarkMode ? 'white' : 'primary'"
											@click="modal_belohorizonte = false" 
											/>
										</v-sheet>
										<v-card max-width="1200" class="rounded-xl me-6">
											<!--Vimeo-->
											<v-container fluid class="animate__animated animate__fadeInUp">
												<div 
												class="vimeo-container"
												>
													
													<iframe src="https://gridcriacaodigital.com/demo/einstein/tour/belohorizonte/index.html" 
													frameborder="0" 
													allow="autoplay; fullscreen; picture-in-picture" 
													title="2.2.5 - Responsabilidade Social"
													class="vimeo-player" 
													/>

												</div>
											</v-container>
										</v-card>
									</v-dialog>
									</template>

					
					
					
					
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/map1_link8_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_8_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_8_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_8_mapa_1Visible = false; prosseguir('mapa01')">
					
					RETORNAR AO MAPA DE SETOR PRIVADO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_8_mapa_1 -->


<!-- conteúdo mapa 02 -->
	<v-card 
	v-if="isMapa02Visible" 
	id="mapa02" 
	width="100%"
	elevation="6"
	style="z-index:8;background-color:#D9D9D9!important;"
	class="mt-4 mx-auto rounded-lg pt-4 v-card-conteudos_map2"
	>
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_presenca/grade_header_azul2.png" />
		
		<v-row class="mb-8">
			<v-col cols="12" md="12" align-self="center" align="center">
				<img class="mt-8 show_mobile" width="300" src="./img/tela_presenca/mapa_02_mobile.png" usemap="#image-map2_mobile">

				<map name="image-map2_mobile">
					<area style="cursor:pointer" target="" alt="" title="" coords="6,130,118,168" shape="rect" @click="expand = !expand;">
					<area style="cursor:pointer" target="" alt="" title="" coords="154,129,271,166" shape="rect" @click="expand2 = !expand2;">
				</map>
			</v-col>
		</v-row>
		
		<v-row class="mb-8">
			<v-col cols="12" md="6" sm="6">
				
				<v-expand-transition>
				
				<v-card v-show="expand" elevation="6" class="box_map2_go pl-0 pr-0 mt-n8 mx-auto">
					<v-card-text>
						<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 1 Hospital Municipal</strong>
					</v-card-text>
					<v-card-text class="mt-n4">
					<ul class="ml-6">
						<li>
							Hospital Municipal de Aparecida de Goiânia | Iris Rezende Machado (Aparecida de Goiânia).
						</li>
					</ul>
					</v-card-text>
					<v-card-text>

						<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = true;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_1_mapa_2')"
							> 
							SAIBA MAIS	
						</v-btn>
						
					</v-card-text>
				</v-card>
				
				</v-expand-transition>
				
			</v-col>
			<v-col cols="12"  md="6" sm="6">
				
				<v-expand-transition>
				
				<v-card v-show="expand2" elevation="6" class="box_map2_sp pl-0 pr-0 mt-n8 mx-auto">
				<v-card-text>
					<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> 2 Hospitais Municipais</strong>
				</v-card-text>
				<v-card-text class="mt-n4">
				<ul class="ml-6">
					<li>
						Vila Santa Catarina I Dr. Gilson de C. Marques de Carvalho (São Paulo).
					</li>
				</ul>
				</v-card-text>
				<v-card-text>
					<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = true;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_2_mapa_2')"
							> 
							SAIBA MAIS	
						</v-btn>
				</v-card-text>

				<v-card-text class="mt-n4">
				
				<ul class="ml-6">
					<li>
						M’Boi Mirim I Dr. Moysés Deutsch (São Paulo).
					</li>
				</ul>
				</v-card-text>
				<v-card-text>
					<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 ml-6"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = true;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_3_mapa_2')"
							> 
							SAIBA MAIS	
						</v-btn>
				</v-card-text>
			</v-card>	
			
			</v-expand-transition>

			</v-col>
		</v-row>

	<v-row class="mb-8">
			<v-col cols="12" md="5">
				
				<p>
					Um dos destaques da atuação do Einstein no cuidado público é a gestão de uma estrutura que inclui a atenção primária através de:
				</p>
				<ul class="ml-8 mt-4">
					<li>Rede de Unidades Básicas de Saúde (UBS).</li>
					<li>Assistências Médicas Ambulatoriais (AMAs).</li>
					<li>Centros de Apoio Psicossocial (CAPS).</li>
					<li>Unidades de Pronto Atendimento (UPAs).</li>
					<li>Serviços de Residências Terapêuticas (SRTs).</li>
				</ul>
				<p class="mt-4">
					Essas unidades realizam desde a saúde da família até procedimentos mais especializados, beneficiando mais de 2 milhões de usuários do sistema público. A operação dessas unidades se dá por meio de convênios que o Einstein mantém com a Prefeitura de São Paulo. 
				</p>

				<p class="mt-4">
					O Einstein atua na contratação de profissionais, no acompanhamento do trabalho das equipes, na capacitação e no aprimoramento da assistência prestada, realizando a gestão compartilhada com as diversas instâncias públicas municipais.
				</p>
				
				<v-card class="box_dicas pl-0 pr-0 mt-6 reveal fade-bottom mx-auto" style="width: 100%">
					<v-card-text>
						 <span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos botões para saber mais.
					</v-card-text>
				</v-card>
				
			</v-col>
			<v-col cols="12" md="7" align="center">
					<img class="mt-n16 show_desktop" width="600" src="./img/tela_presenca/mapa_02.png" usemap="#image-map2">
					<img class="mt-16 show_1277" width="450" src="./img/tela_presenca/mapa_02_1277.png" usemap="#image-map2_1277">
		<map name="image-map2">
			<area style="cursor:pointer" target="" alt="" title="" coords="236,347,21,262" shape="rect"  @click="expand = !expand;">
			<area style="cursor:pointer" target="" alt="" title="" coords="303,261,549,347" shape="rect"  @click="expand2 = !expand2;">
		</map>
		

		<map name="image-map2_1277">
			<area style="cursor:pointer" target="" alt="" title="" coords="11,199,175,250" shape="rect"  @click="expand = !expand;">
			<area style="cursor:pointer" target="" alt="" title="" coords="224,199,413,251" shape="rect"  @click="expand2 = !expand2;">
		</map>

			</v-col>
		</v-row>
		<v-card elevation="0" class="box_mapas_btns pl-0 pr-0 mt-n8 mb-4 mx-auto bg-transparent" style="width:100%">
			<v-card-text>
					<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span></strong> — Unidades de saúde | <strong><span class="mdi mdi-google-classroom box_dicas_icon"></span></strong> — Unidades de ensino
			</v-card-text>
		</v-card>
		
		<img class="map1_unidades" src="./img/tela_presenca/map2_unidades.png" />
		
		
		

	</v-card>
<!-- conteúdo mapa 02 -->

<!-- link_1_mapa_2 -->

<!-- Grafisrmos "Triangulo" link_1_mapa_2 -->
	<v-container 
	v-if="isLink_1_mapa_2Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_1_mapa_2Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_1_mapa_2 -->
	<v-card 
	v-if="isLink_1_mapa_2Visible"
	id="link_1_mapa_2" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					GOIÂNIA — Hospital Municipal de Aparecida | Iris Rezende de Machado (HMAP)
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Em 2022, o Einstein assumiu a gestão do Hospital Municipal de Aparecida de Goiânia — Iris Rezende Machado no município do mesmo nome, em Goiás. Trata-se da primeira operação de hospital público feita pelo Einstein fora da cidade de São Paulo. Com 235 leitos, o hospital é voltado para o atendimento de alta complexidade, incluindo hemodinâmica, cirurgia bariátrica e, futuramente, cirurgia cardíaca, além de várias especialidades cirúrgicas e diagnósticas.
				</p>
				
			
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link1_map2_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
				
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_1_mapa_2 -->

<!-- link_2_mapa_2 -->

<!-- Grafisrmos "Triangulo" link_2_mapa_2 -->
	<v-container 
	v-if="isLink_2_mapa_2Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_2_mapa_2Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_2_mapa_2 -->
	<v-card 
	v-if="isLink_2_mapa_2Visible"
	id="link_2_mapa_2" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="12">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					SÃO PAULO — Vila Santa Catarina I Dr. Gilson de C. Marques de Carvalho 
				</h3>			
			</v-col>

			<v-col cols="12" md="6" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link2_map2_img1.png" />
			</v-col>
			<v-col cols="12" md="6" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link2_map2_img2.png" />
			</v-col>
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					O Hospital Municipal Vila Santa Catarina — Dr. Gilson de Cássia Marques de Carvalho é um hospital de alta complexidade. Realiza cirurgias bariátrica, urológica e vascular, e oferece atendimento especializado em oncologia, em maternidade de alto risco e em pediatria, além de disponibilizar serviços de diagnóstico, como laboratório clinico e de imagem.
				</p>
				
			</v-col>
			<v-col cols="12" md="6">
				<p class="mt-4 texto_preto fadeInLeft">
					Em 2022, foi inaugurado o novo Centro de Diagnóstico e Tratamento Avançado em Oncologia, Bruno Covas, com o intuito de dar mais agilidade à rede municipal de saúde no diagnóstico precoce de pacientes com câncer, permitindo tratamento mais rápido, especializado e atualizado, incluindo atendimento clínico, quimioterapia, radioterapia e cirurgia, inclusive robótica.
				</p>
				<p class="mt-4 texto_preto fadeInLeft">
					Com o novo espaço, houve a ampliação da área de quimioterapia, abertura de novas salas de atendimento ambulatorial e aumento do número de leitos de internação oncológica, que passou de 98 para 111, além de 30 leitos de oncologia cirúrgica.
				</p>
			</v-col>
		</v-row>
		
		<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_2_mapa_2 -->

<!-- link_3_mapa_2 -->

<!-- Grafisrmos "Triangulo" link_3_mapa_2 -->
	<v-container 
	v-if="isLink_3_mapa_2Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_3_mapa_2Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_ensino.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_3_mapa_2 -->
	<v-card 
	v-if="isLink_3_mapa_2Visible"
	id="link_3_mapa_2" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="6">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					São Paulo — Hospital Municipal M’Boi Mirim — Dr. Moysés Deutsch 
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					O Hospital Municipal M’Boi Mirim — Dr. Moysés Deutsch é gerido e operado pelo Einstein, em associação com o Centro de Estudos e Pesquisas Dr. João Amorim (CEJAM). A unidade funciona desde 2008 atendendo urgências, emergências, cirurgias eletivas e assistência ao parto, com destaque para o atendimento nas especialidades de Clínica Médica, Cirurgia Geral, Pediatria, Ortopedia, Ginecologia, Obstetrícia e Psiquiatria.
				</p>
				
			
			</v-col>
			<v-col cols="12" md="6" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link3_map2_img1.png" />
				
			</v-col>
			
			<v-col cols="12" md="4" align-self="start">
				<v-img width="80%" class="mx-auto" src="./img/tela_presenca/link3_map2_img2.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					Em 2022, o hospital recebeu a reacreditação de Excelência (nível 3) da Organização Nacional de Acreditação (ONA). A primeira acreditação foi em 2012, como Acreditado Pleno, e, desde 2014, mantém o nível Acreditado com Excelência nas visitas anuais.
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img width="40%" class="mx-auto" src="./img/tela_presenca/link3_map2_img4.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					Outro destaque de 2022 foi o Programa Marca-Passo, que reduziu de 30 para 7 dias de espera o intervalo de implantação do dispositivo em pacientes cardíacos.
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img width="40%" class="mx-auto" src="./img/tela_presenca/link3_map2_img3.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					O Hospital recebeu em 2022 o Selo Inicial de Hospital Amigo do Idoso. A iniciativa é da Secretaria de Estado da Saúde de São Paulo e tem como objetivo incentivar e apoiar a qualificação geronto-geriátrica dos hospitais que são referência assistencial em inclusão, valorização e preservação da autonomia e independência dos idosos. 
				</p>
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_2Visible = false; prosseguir('mapa02')">
					
					RETORNAR AO MAPA DE SISTEMA PÚBLICO DE ASSISTÊNCIA À SAÚDE
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_3_mapa_2 -->
	
<!-- conteúdo mapa 03 -->
	<v-card 
	v-if="isMapa03Visible" 
	id="mapa03"  
	width="100%"
	elevation="6"
	style="z-index:8;background-color:#D9D9D9!important;"
	class="mt-4 mx-auto rounded-lg pt-4 v-card-conteudos_map3"
	>
		<v-img class="mx-auto mt-n4 grade_header" src="./img/tela_presenca/grade_header_azul2.png" />
		<v-img class="mx-auto mt-6 show_mobile" src="./img/tela_presenca/map3_mobile.png" />
		<v-img class="mx-auto mt-6 show_1277" src="./img/tela_presenca/map3_mobile.png" />
			
	<v-row class="mb-4">
		<v-col cols="12" md="5" align="right" align-self="end">
			<v-card class="box_dicas pl-0 pr-0 mt-4 reveal fade-bottom mx-auto" style="width: 100%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos botões para saber mais.
				</v-card-text>
			</v-card>
		</v-col>
		
		<v-col cols="12" md="1" align="right" align-self="end">
				
		</v-col>
		
		<v-col cols="12" md="6" class="my-4">
			<v-card elevation="6" class="box_mapas_btns pl-0 pr-0 mt-n8 reveal fade-left mx-auto" style="width:100%">
				
				<v-card-text>
					<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span> Ecossistema SP</strong>
				</v-card-text>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									1  Laboratório Municipal de Exames Diagnósticos em Mogi das Cruzes (SP)
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = true;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_1_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									2 Unidades de Pronto Atendimento (UPA) 
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = true;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_2_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									1 Assistência Médica Ambulatorial de Especialidades Pediátricas (AME-P)
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = true;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_3_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									13 Unidades Básicas de Saúde (UBS) 
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = true;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_4_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									3 Unidades de Assistência Médico Ambulatorial (AMA)
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = true;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_5_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									3 Centros de Atenção Psicossocial (CAPS) 
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = true;
							isLink_7_mapa_3Visible = false;
							prosseguir('link_6_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
				<v-row no-gutters class="">
					<v-col cols="12" md="7" align="left">
						<v-card-text class="mt-n4">
							<ul class="ml-6">
								<li>
									2 Serviços de Residência Terapêutica (SRT)
								</li>
							</ul>
						</v-card-text>
					</v-col>
					<v-col cols="12" md="5" align="center">
						<v-card-text>
							<v-btn 
							type="button"
							style="letter-spacing: normal;"
							density="comfortable"
							size="large"
							rounded="pill"
							class="mt-n8 mr-4"
							:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
							@click="
							isLink_1_mapa_1Visible = false; 
							isLink_2_mapa_1Visible = false; 
							isLink_3_mapa_1Visible = false;
							isLink_4_mapa_1Visible = false;
							isLink_5_mapa_1Visible = false;
							isLink_6_mapa_1Visible = false;
							isLink_7_mapa_1Visible = false;
							isLink_8_mapa_1Visible = false;
							isLink_1_mapa_2Visible = false;
							isLink_2_mapa_2Visible = false;
							isLink_3_mapa_2Visible = false;
							isLink_1_mapa_3Visible = false;
							isLink_2_mapa_3Visible = false;
							isLink_3_mapa_3Visible = false;
							isLink_4_mapa_3Visible = false;
							isLink_5_mapa_3Visible = false;
							isLink_6_mapa_3Visible = false;
							isLink_7_mapa_3Visible = true;
							prosseguir('link_7_mapa_3')"
							> 
							SAIBA MAIS	
						</v-btn>
						</v-card-text>
					</v-col>
				</v-row>
				
			</v-card>

		</v-col>
	</v-row>
	
	<v-card elevation="0" class="box_mapas_btns pl-0 pr-0 mt-n8 mb-4 mx-auto bg-transparent" style="width:100%">
		<v-card-text>
				<strong><span class="mdi mdi-heart-pulse box_dicas_icon"></span></strong> — Unidades de saúde | <strong><span class="mdi mdi-google-classroom box_dicas_icon"></span></strong> — Unidades de ensino
		</v-card-text>
	</v-card>
	<img class="map3_unidades" src="./img/tela_presenca/map3_unidades.png" />
	
	
	</v-card>
	<!-- conteúdo mapa 03 -->
	
	<!-- link_1_mapa_3 -->

<!-- Grafisrmos "Triangulo" link_1_mapa_3 -->
	<v-container 
	v-if="isLink_1_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_1_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

<!-- Grafisrmos "Triangulo" -->
	
<!-- link_1_mapa_3 -->
	<v-card 
	v-if="isLink_1_mapa_3Visible"
	id="link_1_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Laboratório Municipal de Exames Diagnósticos em Mogi das Cruzes (SP)
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Localizado no Parque Monte Líbano, o Laboratório Municipal de Exames Diagnósticos conta com capacidade para realizar 100 mil procedimentos por mês e é resultado de uma parceria firmada pela Administração Municipal com o Cejam — Centro de Estudos e Pesquisas Dr. João Amorim e o Albert Einstein Medicina Diagnóstica.
				</p>
				<p class="mt-4 texto_preto fadeInLeft">
					O Laboratório Municipal funciona 24 horas por dia, inclusive aos sábados, domingos e feriados, para atender à demanda proveniente das 50 unidades municipais de saúde. Com a alta tecnologia trazida pela equipe do Albert Einstein, os mogianos contam com recursos que garantem mais qualidade e resolutividade.
				</p>
			
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link1_map3_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

			
				
				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_1_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
				
				
				
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_1_mapa_3 -->

<!-- link_2_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_2_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_2_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_2_mapa_3Visible"
	id="link_2_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />
		
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="12">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					UnidadeS de Pronto Atendimento (UPA)  
				</h3>			
			</v-col>

			<v-col cols="12" md="6" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link2_map3_img1.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>Campo Limpo</strong>
				</p>
				
				<p class="mt-4 texto_preto fadeInLeft">
					A Unidade de Pronto Atendimento (UPA) 24 horas do Campo Limpo tem gestão compartilhada com a Sociedade Beneficente Israelita Brasileira Albert Einstein e realiza, em média, 18.000 atendimentos por mês incluindo casos de baixa e média complexidade.
				</p>
				
				<p class="mt-4 texto_preto fadeInLeft">
					A equipe médica da UPA Campo Limpo é composta por clínico, pediatra, emergencista, ortopedista e cirurgião. 
				</p>
			</v-col>
			<v-col cols="12" md="6" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link2_map3_img2.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>Vila Santa Catarina I Dr. Gilson de C. Marques de Carvalho</strong>
				</p>
				
				<p class="mt-4 texto_preto fadeInLeft">
					A UPA Vila Santa Catarina presta atendimento a pacientes com quadro agudo de natureza clínica e o primeiro atendimento em casos cirúrgicos e traumáticos, estabiliza o paciente, realiza o diagnóstico inicial e verifica a necessidade ou não de encaminhamento à unidade hospitalar de maior complexidade. 
				</p>
				
				<p class="mt-4 texto_preto fadeInLeft">
					A UPA se tornou  a primeira do Brasil a receber  a acreditação de Excelência (nível 3) pela Organização Nacional de Acreditação (ONA), modelo brasileiro que certifica a qualidade de hospitais e serviços de saúde. A certificação nível 3 atesta o alto grau de maturidade da cultura  de melhoria contínua.
				</p>
			</v-col>
		</v-row>

		<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_2_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_2_mapa_3 -->

<!-- link_3_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_3_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_3_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_3_mapa_3Visible"
	id="link_3_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Assistência Médica Ambulatorial de Especialidades Pediátricas (AME-P) 
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					A unidade oferece atendimento ambulatorial, compondo um serviço médico especializado para pacientes de 0 a 14 anos advindos da região Sul de São Paulo. Além das consultas especializadas a unidade também oferece alguns exames complementares e atividades educativas e atua de forma integrada a equipe multiprofissional: enfermagem, assistência social, fisioterapia, fonoaudiologia, psicologia e nutrição. 
				</p>
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link3_map3_img.png" />
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_3_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_3_mapa_3 -->
	
<!-- link_4_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_4_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_4_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_4_mapa_3Visible"
	id="link_4_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="5">
				<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Unidades Básicas de Saúde (UBS)   
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Desde 2001, a Sociedade Beneficente Israelita Brasileira Albert Einstein possui parceria com a Secretaria Municipal de Saúde de São Paulo para implantação, implementação e gestão de unidades e equipes da Estratégia Saúde da Família (ESF). As Unidades Básicas de Saúde (UBS) que atuamos são:
				</p>
			
			</v-col>
			<v-col cols="12" md="7" align-self="start">
				<v-card class="pl-0 pr-0 mt-0" elevation="4" style="border-radius:20px">
					<v-carousel show-arrows="hover" hide-delimiters color="primary" :continuous="false">
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide01.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>

						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide02.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide03.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide04.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide05.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide06.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide07.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide08.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide09.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide10.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide11.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide12.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>
						
						<v-carousel-item>
							<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end">
								<v-row justify="center" align="center">
									<v-col cols="12" md="12">
										<v-img src="./img/tela_presenca/link4_map3_slide13.png" />
									</v-col>
								</v-row>
							</v-sheet>
						</v-carousel-item>

					</v-carousel>
				</v-card>
			</v-col>
		</v-row>
		
		<v-sheet>
			
		</v-sheet>

		<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_4_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_4_mapa_3 -->

<!-- link_5_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_5_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_5_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_5_mapa_3Visible"
	id="link_5_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />
		<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Unidades de Assistência Médico Ambulatorial (AMA)  
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					As Unidades de Assistência Médica Ambulatorial (AMA) tem como objetivos principais ofertar serviços que possibilitem a assistência médica imediata e direcionar os usuários que necessitem de acompanhamento na UBS através de agendamento de consulta em sua unidade de referência.
				</p>
				<p class="mt-4 texto_preto fadeInLeft">
					Em 2006, foi firmado convênio entre a SBIBAE e a SMS/PMSP, para implantação de unidades de Assistência Médica Ambulatorial (AMA), na Região da Supervisão de Saúde do Campo Limpo. Atualmente, temos 2 AMA’s com funcionamento de 12 horas e 1 AMA 24 horas. 
				</p>

		<v-row class="mt-6 reveal fade-bottom">

			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link5_map3_img1.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>AMA/UBS Integrada Vila Prel</strong>
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link5_map3_img2.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>AMA Paraisópolis</strong>
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link5_map3_img3.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>AMA/UBS Integrada Vila Prel</strong>
				</p>
			</v-col>
		</v-row>
		

		<!--Btn final-->
		<v-container class="d-flex justify-center my-4">
			<v-sheet 
			color="transparent"
			class="mb-4"
			width = "auto"
			>

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_5_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_5_mapa_3 -->
	
<!-- link_6_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_6_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_6_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_6_mapa_3Visible"
	id="link_6_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Centros de Atenção Psicossocial (CAPS)  
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Os Centros de Atenção Psicossocial (CAPS) são pontos de atenção da Rede de Atenção Psicossocial (RAPS) e realizam prioritariamente atendimento às pessoas com sofrimento ou transtorno mental, incluindo aquelas com necessidades decorrentes do uso de álcool e outras drogas, em sua área territorial, sejam em situações de crise ou nos processos de reabilitação psicossocial e são substitutivos ao modelo asilar.
				</p>

		<v-row class="mt-6 reveal fade-bottom">

			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link6_map3_img1.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>CAPS Adulto III Paraisópolis</strong>
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link6_map3_img2.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong> CAPS Álcool e Drogas III Campo Limpo</strong>
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link6_map3_img3.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>CAPS Infantojuvenil II Campo Limpo</strong>
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

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_6_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_6_mapa_3 -->

<!-- link_7_mapa_3 -->

<!-- Grafisrmos "Triangulo" -->
	<v-container 
	v-if="isLink_7_mapa_3Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#D9D9D9; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>
	
	<v-card 
	
	v-if="isLink_7_mapa_3Visible"
	elevation="0"
	style="z-index:4;margin-bottom:2px;"
	class="ml-16 mt-n10 bg-transparent" 
	width="50"
	>
	<v-img height="50" src="./img/tela_presenca/banner_saude.png" />
	</v-card>

	<v-card 
	v-if="isLink_7_mapa_3Visible"
	id="link_7_mapa_3" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n11 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_presenca/grade_header.png" />

		<h3 style="text-transform:uppercase" class="texto_azul_claro">
					Serviços de Residência Terapêutica (SRT) 
				</h3>
				<p class="mt-4 texto_preto fadeInLeft">
					Os Serviços Residenciais Terapêuticos (SRT) são moradias inseridas, preferencialmente, na comunidade, destinadas a cuidar dos portadores de transtornos mentais, egressos de internações psiquiátricas de longa permanência, que não possuam suporte social e laços familiares. A implantação de um SRT é o início de um longo processo de reabilitação que deverá buscar a progressiva inclusão social do morador e sua reinserção na rede de serviços, organizações e relações sociais da comunidade.
				</p>

		<v-row class="mt-6 reveal fade-bottom" justify="center">
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link7_map3_img1.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>Residência Terapêutica II Campo Limpo</strong>
				</p>
			</v-col>
			<v-col cols="12" md="4" align-self="start">
				<v-img class="mx-auto" src="./img/tela_presenca/link7_map3_img2.png" />
				<p class="mt-4 texto_preto fadeInLeft">
					<strong>Residência Terapêutica IIl Campo Limpo</strong>
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

				<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_desktop"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="large"
					rounded="pill"
					class="text-secondary show_1277"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
					
					<v-btn 
					type="button"
					style="letter-spacing: -1px;"
					density="comfortable"
					size="small"
					rounded="pill"
					class="text-secondary show_mobile"
					:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
					@click="isLink_7_mapa_3Visible = false; prosseguir('mapa03')">
					
					RETORNAR AO MAPA DE ECOSSISTEMA EINSTEIN EM SP
						
					</v-btn>
			</v-sheet>
		</v-container>

	</v-card>
<!-- link_7_mapa_3 -->


<v-container fluid align="center" class="show_desktop py-16 mb-16">
		<v-img
		width="40"
		height="60"
		src="../GlobalStyles/img/gota-icon.svg"
		class=" mt-n8 mb-6 mx-auto"
		:class="appStore.isDarkMode ? 'verde-svg' : 'verde-svg'" 
		/>
		<v-btn 
		size="large"
		class=" mx-2 text-primary animate__animated animate__fadeInDown"
		rounded
		min-width="150px"
		style="letter-spacing:normal"
		color="#2cfece"
		@click="finishedContent"
		>
			<a>APÓS CONHECER AS UNIDADES, CLIQUE AQUI PARA PROSSEGUIR</a>
		</v-btn>
	</v-container>
	
	<v-container fluid align="center" class="show_1277 py-16 mb-16">
		<v-img
		width="40"
		height="60"
		src="../GlobalStyles/img/gota-icon.svg"
		class=" mt-n8 mb-6 mx-auto"
		:class="appStore.isDarkMode ? 'verde-svg' : 'verde-svg'" 
		/>
		<v-btn 
		size="small"
		class=" mx-2 text-primary animate__animated animate__fadeInDown"
		rounded
		min-width="50px"
		style="letter-spacing:normal"
		color="#2cfece"
		@click="finishedContent"
		>
			<a>APÓS CONHECER AS UNIDADES, CLIQUE AQUI PARA PROSSEGUIR</a>
		</v-btn>
	</v-container>
	
	<v-container fluid align="center" class="show_mobile py-16 mb-16">
		<v-img
		width="40"
		height="60"
		src="../GlobalStyles/img/gota-icon.svg"
		class=" mt-n8 mb-6 mx-auto"
		:class="appStore.isDarkMode ? 'verde-svg' : 'verde-svg'" 
		/>
		<v-btn 
		size="medium"
		class=" mx-2 text-primary animate__animated animate__fadeInDown"
		rounded
		min-width="50px"
		style="letter-spacing:-1px"
		color="#2cfece"
		@click="finishedContent"
		>
			<a class="pa-4"> APÓS CONHECER AS UNIDADES,<br>CLIQUE AQUI PARA PROSSEGUIR</a>
		</v-btn>
	</v-container>
	

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
	const lastElementIdOnScreen = ref('#mapa03')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isMapa01Visible = ref(true)
	const isMapa02Visible = ref(true)
	const isMapa03Visible = ref(true)
	const isLink_1_mapa_1Visible = ref(false)
	const isLink_2_mapa_1Visible = ref(false)
	const isLink_3_mapa_1Visible = ref(false)
	const isLink_4_mapa_1Visible = ref(false)
	const isLink_5_mapa_1Visible = ref(false)
	const isLink_6_mapa_1Visible = ref(false)
	const isLink_7_mapa_1Visible = ref(false)
	const isLink_8_mapa_1Visible = ref(false)
	const isLink_1_mapa_2Visible = ref(false)
	const isLink_2_mapa_2Visible = ref(false)
	const isLink_3_mapa_2Visible = ref(false)
	const isLink_1_mapa_3Visible = ref(false)
	const isLink_2_mapa_3Visible = ref(false)
	const isLink_3_mapa_3Visible = ref(false)
	const isLink_4_mapa_3Visible = ref(false)
	const isLink_5_mapa_3Visible = ref(false)
	const isLink_6_mapa_3Visible = ref(false)
	const isLink_7_mapa_3Visible = ref(false)
	const isMapa2BoxgoVisible = ref(true)
	const isMapa2BoxspVisible = ref(true)
	
	const modal_morumbi = ref(false)
	const modal_faculdade_cep = ref(false)
	const modal_ensino_paulista_1 = ref(false)
	const modal_hospsantacatarina = ref(false)
	const modal_ceebe = ref(false)
	const modal_riodejaneiro = ref(false)
	const modal_belohorizonte = ref(false)
	const modal_farialima = ref(false)
	
	

	//Finaliza o conteúdo
	const finishedContent = () => {
		appStore.finishedContent(true)
		useStartProgress();
		
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
	  
	  expand: false,
      expand2: false,
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
.texto_azul_claro {
	color: #5BC6E8
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
	background-color: #ffffff!important;
}
.v-card-conteudos_map1 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_presenca/fundos_mapas.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
.v-card-conteudos_map2 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_presenca/fundos_mapas.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
.mapa_02{
margin-top:-80px
}
.v-card-conteudos_map3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_presenca/map3.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
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
.box_mapas_btns {
	border-radius: 20px;
	text-align: left;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
}
.box_mapas_btns_1 {
	border-radius: 20px;
	text-align: left;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
}
.box_map2_go {
    border-radius: 20px;
    text-align: left;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
    position: absolute;
    top: 62%;
    left: 45%;
    width: 255px;
}
.box_map2_sp {
    border-radius: 20px;
    text-align: left;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
    position: absolute;
    top: 62%;
    left: 69%;
    width: 255px;
}
.btn_map1_sp{
	position: absolute;
    top: 43%;
    left: 40%;
}
.btn_map1_go{
	position: absolute;
    top: 25%;
    left: 50%;
}
.btn_map1_bh{
	position: absolute;
    top: 28%;
    left: 70%;
}
.btn_map1_rj{
	position: absolute;
    top: 62%;
    left: 73%;
}
.map1_unidades{
    height: 15%;
    position: absolute;
    top: 2%;
    right: 1%;
}
.map3_unidades{
    height: 15%;
    position: absolute;
    top: 5%;
    left: 3%;
}
.btn_img{
height:60px;
}
.btn_map2_sp{
	position: absolute;
    top: 45%;
    left: 76%;
}
.btn_map2_go{
	position: absolute;
    top: 45%;
    left: 60%;
}

.box_dicas_icon {
	font-size: 1.4rem;
}
.v-card-text {
	font-size: 1rem !important;
	font-family: 'montserrat' !important;
}
.box_mapas_btns{
width:100%!important;
}
@media screen and (max-width: 1277px){
.v-card-conteudos_map3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: none;
}
ul li {
font-size:0.9em!important;
}
.box_map2_go {
    top: 48%;
    left: 45%;
    width: 200px;
}
.box_map2_sp {
    top: 48%;
    left: 72%;
    width: 200px;
}
.btn_map1_sp{
	position: absolute;
    top: 45%;
    left: 40%;
}
.btn_map1_go{
	position: absolute;
    top: 32%;
    left: 50%;
}
.btn_map1_bh{
	position: absolute;
    top: 32%;
    left: 70%;
}
.btn_map1_rj{
	position: absolute;
    top: 58%;
    left: 70%;
}
.btn_img{
height:50px;
}
.mapa_02{
margin-top:80px
}
.btn_map2_sp{
	position: absolute;
    top: 48%;
    left: 76%;
}
.btn_map2_go{
	position: absolute;
    top: 48%;
    left: 60%;
}
.map1_unidades{
    height: 10%!important;
}
.box_mapas_btns{
width:100%!important;
}
.box_mapas_btns_1{
width:100%!important;
}
}

@media screen and (max-width: 950px){
ul li {
font-size:0.9em!important;
}
.box_map2_go {
    top: 63%;
    left: 8%;
    width: 250px;
}
.box_map2_sp {
    top: 63%;
    left: 41%;
    width: 404px;
}
.map1_unidades{
    height: 7%!important;
}
.map3_unidades{
    height: 7%!important;
}
.btn_map1_sp{
	position: absolute;
    top: 45%;
    left: 40%;
}
.btn_map1_go{
	position: absolute;
    top: 32%;
    left: 50%;
}
.btn_map1_bh{
	position: absolute;
    top: 32%;
    left: 70%;
}
.btn_map1_rj{
	position: absolute;
    top: 58%;
    left: 70%;
}
.btn_img{
height:50px;
}
.mapa_02{
margin-top:80px
}
.btn_map2_sp{
	position: absolute;
    top: 48%;
    left: 76%;
}
.btn_map2_go{
	position: absolute;
    top: 48%;
    left: 60%;
}
.box_mapas_btns{
width:80%!important;
}
.box_mapas_btns_1{
width:80%!important;
}
}
@media screen and (max-width: 768px){
.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-color: #ffffff!important;
}
.v-card-conteudos_map1 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: none;
}
.v-card-conteudos_map2 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: none;
}
.v-card-conteudos_map3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: none;
}
.box_mapas_btns {
	border-radius: 20px;
	text-align: left;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	margin-top: 20px!important;
}
.box_mapas_btns_1 {
	border-radius: 20px;
	text-align: left;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	margin-top: 20px!important;
}
.box_map2_go {
    position: static;
    top: 58%;
    left: 51%;
    width: 255px;
}
.box_map2_sp {
    position: static;
    top: 58%;
    left: 75%;
    width: 255px;
}
.mapa_02{
display:none
}
.btn_map1_sp{
	position: absolute;
    top: 18%;
    left: 18%;
}
.btn_map1_go{
	position: absolute;
    top: 13%;
    left: 28%;
}
.btn_map1_bh{
	position: absolute;
    top: 13%;
    left: 59%;
}
.btn_map1_rj{
	position: absolute;
    top: 26%;
    left: 56%;
}
.btn_img{
height:50px;
}
.map1_unidades{
    height: 7%;
}
.map2_unidades{
    height: 7%;
}
.map3_unidades{
    height: 7%;
}
.btn_map2_sp{
	position: absolute;
    top: 24%;
    left: 55%;
}
.btn_map2_go{
	position: absolute;
    top: 24%;
    left: 27%;
}
.box_mapas_btns{
width:80%!important;
}
.box_mapas_btns_1{
width:80%!important;
}
}
@media screen and (max-width: 599px){

.box_map2_go {
    position: static;
    top: 58%;
    left: 51%;
    width: 255px;
}
.box_map2_sp {
    position: static;
    top: -20%;
    left: 75%;
    width: 255px;
}
.btn_map1_sp{
	position: absolute;
    top: 18%;
    left: 18%;
}
.btn_map1_go{
	position: absolute;
    top: 10%;
    left: 28%;
}
.btn_map1_bh{
	position: absolute;
    top: 13%;
    left: 59%;
}
.btn_map1_rj{
	position: absolute;
    top: 23%;
    left: 56%;
}
.btn_img{
height:50px;
}
.map1_unidades{
    height: 7%;
}
.map3_unidades{
    height: 7%;
}
.btn_map2_sp{
	position: absolute;
    top: 18%;
    left: 55%;
}
.btn_map2_go{
	position: absolute;
    top: 18%;
    left: 27%;
}
.box_mapas_btns{
width:80%!important;
}
.box_mapas_btns_1{
width:80%!important;
margin-top: 100px!important;
}
}
</style>