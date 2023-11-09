<template>
<!-- header -->
	<v-card
    class="card_header mx-auto rounded-lg pa-6"
    width="100%"
    elevation = "6"
    >
		<v-img class="show_desktop" src="./img/tela001/header.png"/>
		<v-img class="show_mobile" src="./img/tela001/header_mob.png"/>
	
		<v-img src="./img/tela001/header_text.svg" class="header_text" title="A AMIGOH é uma iniciativa da Sociedade Beneficente Israelita Albert Einstein direcionada para prevenção de câncer e pesquisas científicas de doenças do sangue que beneficiem toda sociedade brasileira."/>
		<v-img src="./img/tela001/logo_header.png" class="logo_header" title="A AMIGOH é uma iniciativa da Sociedade Beneficente Israelita Albert Einstein direcionada para prevenção de câncer e pesquisas científicas de doenças do sangue que beneficiem toda sociedade brasileira."/>
	</v-card>
	
<!-- header -->

<!-- conteúdo 01 -->

	<v-card style="z-index:5"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela001/grade_header.png"
		/>
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">
            
			<h1 class="mt-n10 font-weight-bold text-primary my-6 reveal fade-left" >
                Um pouco sobre nós
            </h1>
			
        <v-card class="box_dicas pl-0 pr-0 reveal fade-left">
			<v-card-text>
				<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.  
      		</v-card-text>
    	</v-card>
		
        </v-card-text>
		
		
		
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
								<v-img src="./img/tela001/slider_img_01.png"/>
							</v-col>
							<v-col cols="12" md="6">
								<h2>
                                    Quem somos
                                </h2>
                                <p class="mt-4">
                                    Um grupo de pessoas empenhadas no combate ao câncer de diferentes formas. 
                                </p>
								<p class="mt-4">
                                    Procuramos fazer o que há de melhor para a população e contribuir com aqueles que precisam, seja levando informações, tratando pacientes ou fazendo pesquisas.  
                                </p>
								<v-card class="box_carroussel bounceIn">
										<p>Nosso pilar mais importante é a prevenção.</p>
								</v-card>
								
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
								<v-img src="./img/tela001/slider_img_01.png"/>
							</v-col>
							<v-col cols="12" md="6">
								<p>
                                    Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP, marcando o início do trabalho voluntário nesta localidade.
                                </p>
                                <p class="mt-4">
                                    Assista ao vídeo para saber mais sobre o PECP.
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
								<v-img src="./img/tela001/slider_img_01.png"/>
							</v-col>
							<v-col cols="12" md="6">
								<p>
                                    Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP, marcando o início do trabalho voluntário nesta localidade.
                                </p>
                                <p class="mt-4">
                                    Assista ao vídeo para saber mais sobre o PECP.
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
								<v-img src="./img/tela001/slider_img_01.png"/>
							</v-col>
							<v-col cols="12" md="6">
								<p>
                                    Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP, marcando o início do trabalho voluntário nesta localidade.
                                </p>
                                <p class="mt-4">
                                    Assista ao vídeo para saber mais sobre o PECP.
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
								<v-img src="./img/tela001/slider_img_01.png"/>
							</v-col>
							<v-col cols="12" md="6">
								<h4>
                                    Quem somos
                                </h4>
                                <p class="mt-4">
                                    Um grupo de pessoas empenhadas no combate ao câncer de diferentes formas. 
                                </p>
								<p class="mt-4">
                                    Procuramos fazer o que há de melhor para a população e contribuir com aqueles que precisam, seja levando informações, tratando pacientes ou fazendo pesquisas.  
                                </p>
								
							</v-col>
						</v-row>
                </v-sheet>
                </v-carousel-item>
				
            </v-carousel>
		 </v-card>
		 
		 
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide1">
				<div class="shakeY v-responsive  mt-8 mb-4  mx-auto" :class="appStore.isDarkMode ? 'verde-svg' : 'azul-svg' " style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large"
					:class="appStore.isDarkMode ? 'bg_claro' : 'bg_escuro' "
					> 
					<span 
						class="btn_expande_conteudos" 
						:class="appStore.isDarkMode ? 'texto_escuro' : 'texto_claro' " 
						@click="expand=!expand,btnhide1=!btnhide1">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>


	</v-card>

<!-- conteúdo 01 -->

<!-- conteúdo 02 -->
<v-expand-transition>

	<v-card v-show="expand" style="z-index:4;"
    class="mt-n10 mx-auto rounded-lg pt-4 v-card-conteudos fundo_cont2"
    width="100%"
    elevation = "6"
    >	
		
		<v-row class="mx-auto mt-10">
            
			<v-col 
            cols="12"
            md="12"
            >
  				<v-card-text class="text_cont2 mr-16 reveal fade-left">

					<h1 class="font-weight-bold text-primary mt-6 texto_azul" >
						Nossos colaboradores
					</h1>
					<h2 class="texto_preto mt-4">
						No AmigoH, os colaboradores fazem a diferença
					</h2>

					<p class="texto_preto mt-6">São 30 pessoas divididas em grupo de captação, grupo de divulgação e grupo estratégico, que, como uma orquestra, trabalham juntas e afinadas.
					</p>

				</v-card-text>
				
            </v-col>
			
			<v-col 
            cols="12"
            md="12"
            >
  				<v-card class="reveal fade-bottom box_cont2">
						<p>Equação fundamental do AmigoH: Criatividade + tempo de dedicação = participação com prazer</p>
				</v-card>
				
            </v-col>

        </v-row>
	
		<!-- gota e botão -->
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide2">
				<div class="shakeY v-responsive  mt-16 mb-4  mx-auto azul-svg" style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_escuro"
					> 
					<span 
						class="btn_expande_conteudos texto_claro" 
						@click="expand2=!expand2,btnhide2=!btnhide2">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>
		
<!-- gota e botão -->
</v-card>
	
</v-expand-transition>	
<!-- conteúdo 02 -->

<!-- conteúdo 03 -->
<v-expand-transition>		
	
	<v-card v-show="expand2" style="z-index:3;"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_video"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela001/grade_header_azul.png"
		/>
		
		
		
			<v-card-text class="reveal fade-left mb-10">

					<h1 class="font-weight-bold text-primary mt-n6 texto_branco" >
						Visão geral do AmigoH e suas ações
					</h1>
					<p class="mt-6 texto_branco">
						Assista o vídeo e conheça algumas das ações realizadas pelo AMIGOH.
					</p>

				</v-card-text>
		
		
		
		
		
		
		
		
		
		
		
		
		<!--Vimeo-->
            <v-container 
            class="mt-n5 mb-10 pa-0 reveal fade-bottom"
            >
                <div 
                style="
                    padding:56.25% 0 0 0;
                    position:relative; 
                "
                >
                    <iframe
                    src="https://player.vimeo.com/video/372349574?h=1abc33ff76&color=ebf490&title=0&byline=0&portrait=0" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    style="
                        position:absolute; 
                        top:0; 
                        left:0; 
                        width:100%; 
                        height:100%; 
                        border-radius: 10px
                    " 
                    />
                </div>
            </v-container>
		
		
		
		
		<!-- gota e botão -->
		
		<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide3">
				<div class="shakeY v-responsive  mt-n4 mb-4  mx-auto verde-svg" style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_claro"
					> 
					<span 
						class="btn_expande_conteudos texto_escuro" 
						@click="expand3=!expand3,btnhide3=!btnhide3">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>
		
<!-- gota e botão -->
		
	</v-card>
	
	<v-container class="d-flex justify-center mt-n12 mb-4">
	   <i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large" aria-hidden="true"></i>
	</v-container>
	
</v-expand-transition>	
<!-- conteúdo 03 -->

<!-- conteúdo 04 -->
		<v-expand-transition>

				  <v-card v-show="expand3" style="z-index:2;"
					class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide"
					width="100%"
					elevation = "6"
					>	
						<v-img
						class="mx-auto grade_header"
						src="./img/tela001/grade_header_laranja.png"
						/>

			


						<v-card-text class="pl-0 pr-0 mt-n12 reveal fade-left">

							<h5 class=" text-h5 font-weight-bold text-primary my-6" >
								Nossos projetos
							</h5>
							<p class="mt-4">
								O AMIGOH apoia inúmeros projetos. Vamos conhecer alguns deles?</p>
						</v-card-text>
						
			 <v-card class="box_dicas pl-0 pr-0 mt-2 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber mais.  
				</v-card-text>
			</v-card>
		
								  <!-- cards frente e verso  -->
		  
		  <v-row class="mt-6">
            
			<v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card 
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Quem somos
						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
						  width="100%"
						  height="100%"
						  position="absolute"
						  color="white"
						  @click="reveal = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal"
							class="v-card--reveal"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Receitas dos Chefs</strong><br> A chef Paola Carosella faz uma proposta de café da manhã para os pacientes oncológicos com alimentos que contribuem para seus tratamentos.</p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal = false"
							  >
							  </v-btn>
							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>

            <v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Superação Einstein Perdizes
						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
						  	width="100%"
						  	height="100%"
						  	position="absolute"
							color="white"
							@click="reveal2 = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal2"
							class="v-card--reveal2"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Superação Einstein Perdizes</strong><br> Uma manhã repleta de atividades físicas, trabalhando o gerenciamento do estresse e a importância do controle sobre os próprios pensamentos e reações.</p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal2 = false"
							  >
							  </v-btn>
							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>

            <v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card 
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Parque Ibirapuera: Dia de Combate ao Fumo

						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
							width="100%"

							height="100%"
							position="absolute"
							color="white"
							@click="reveal3 = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal3"
							class="v-card--reveal3"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Parque Ibirapuera: Dia de Combate ao Fumo</strong><br> Dia com atividades que estimulam a prática de atividades físicas, trazendo informações e orientações médicas que contribuem para que as pessoas parem de fumar.</p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal3 = false"
							  >
							  </v-btn>
							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>
			
			
			<v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card 
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Campanha de Combate ao Câncer de Pele

						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
						  	width="100%"
						  	height="100%"
							position="absolute"
							color="white"
							@click="reveal4 = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal4"
							class="v-card--reveal4"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Campanha de Combate ao Câncer de Pele</strong><br> Atendimento de comunidade carente para a conscientização da prevenção, o diagnóstico e o tratamento do câncer de pele.</p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal4 = false"
							  >
							  </v-btn>

							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>
			
			<v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card 
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Projeto Morro do Chapéu
						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
						  	width="100%"
						  	height="100%"
							position="absolute"
							color="white"
							@click="reveal5 = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal5"
							class="v-card--reveal5"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Projeto Morro do Chapéu</strong><br> Capacitação em oncologia para equipes do SUS, realizado na Bahia. </p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal5 = false"
							  >
							  </v-btn>

							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>
			
			
			<v-col
            cols="12"
			sm="6"
            md="4"
            >
                <v-card 
						class="mx-auto rounded-lg card_trans reveal fade-in"
					  >
						

						<h5 class="text-h5 font-weight-bold text-primary card_text_amigoh">
							Einstein na Ação Global 2014
						</h5>

						<v-card-actions>

						  <v-btn class="mx-auto"
						  	width="100%"
						  	height="100%"
							position="absolute"
							color="white"
							@click="reveal6 = true"
						  >
							<span class="mdi mdi-gesture-double-tap btn_icon_card"></span>
						  </v-btn>

						</v-card-actions>

						<v-expand-transition>
						  <v-card
							v-if="reveal6"
							class="v-card--reveal6"
							style="height: 100%;"
						  >
							<v-card-text class="pb-0 v-card-text_amigoh">
							  <p><strong>Einstein na Ação Global 2014</strong><br> Projeto com foco na saúde da mulher, sendo oferecido exames e orientações para prevenção do câncer de mama e de colo do útero. </p>
							</v-card-text>
							<v-card-actions class="pt-0">

							  <v-btn class="mx-auto"
						  		width="100%"
						  		height="100%"
						  		position="absolute"
								color="primary"
								@click="reveal6 = false"
							  >
							  </v-btn>

							</v-card-actions>
						  </v-card>
						</v-expand-transition>
					  </v-card>
            </v-col>
			
        </v-row>
		
	<!-- cards frente e verso  -->
	
		<v-card class=" reveal fade-bottom box_cont2_cards mt-8">
				<p>Veja mais detalhes sobre esses e outros projetos em <a style="color:white" href="https://amigoh.com.br/portfolio-de-projetos/"> https://amigoh.com.br/portfolio-de-projetos/ </a>
</p>
		</v-card>



						<!-- gota e botão -->
		<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide4">
				<div class="shakeY v-responsive  mt-8 mb-4  mx-auto" :class="appStore.isDarkMode ? 'verde-svg' : 'azul-svg' " style="width: 40px; height:60px">
					
				</div>
				<button  @click="finishedContent"
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large"
					:class="appStore.isDarkMode ? 'bg_claro' : 'bg_escuro' "
					> 
					<span 
						class="btn_expande_conteudos" 
						:class="appStore.isDarkMode ? 'texto_escuro' : 'texto_claro' " 
						@click="expand4=!expand4,btnhide4=!btnhide4">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>

<!-- gota e botão -->
		
				</v-card>
				  
	 	</v-expand-transition>
		
<!-- conteúdo 04 -->
<!-- conteúdo 05 footer -->

		<v-expand-transition>

				  <v-card v-show="expand4" style="z-index:1;"
					class="mt-n4 mx-auto rounded-lg pt-0 footer"
					width="100%"
					>	
						
						<v-container fill-height class="">
							
							<v-row justify="center" align="center" class="mt-10 reveal fade-right">
								<v-col cols="12" md="6">
									
								</v-col>
								<v-col cols="12" md="6">
									<p class="texto_footer texto_preto">
										O AmigoH tem apoiado a pesquisa brasileira e permitido avanços extraordinários na área da oncologia.
									</p>
									<p class="texto_footer texto_preto">
										Os projetos de pesquisa visam garantir o bem-estar dos pacientes, pois caracterizam as doenças e contribuem com o desenvolvimento de medicamentos. 
									</p>
									<p class="texto_footer texto_preto">
										Isso requer infraestrutura, pesquisadores de qualidade e recursos financeiros.
									</p>
								</v-col>
							</v-row>
						</v-container>
					
				  </v-card>
				  
	 	</v-expand-transition>

<!-- conteúdo 05 -->

</template>

<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
	import { useAnim } from '../GlobalJs/useContentGlobalJs'
    const appStore = useAppStore();
    // função que finaliza a unidade //
    const finishedContent = () => {
        appStore.finishedContent(true)
    } 
    onMounted(() => {
        useStartProgress();
		useAnim(150, true);
    })
  
</script> 

<!-- transitions dos Cards e conteudos -->

<script>
  export default {
    data: () => ({
      reveal: false,
	  reveal2: false,
	  reveal3: false,
	  reveal4: false,
	  reveal5: false,
	  reveal6: false,
	  expand: false,
      expand2: false,
	  expand3: false,
	  expand4: false,
	  expand5: false,
	  expand6: false,
	  btnhide1: true,
	  btnhide2: true,
	  btnhide3: true,
	  btnhide4: true
    }),
  }

  </script>
  

<style scoped>
@import '../GlobalStyles/contentGlobalStyles.css';

	.fundo_cont2{
	max-width: 100%;
	background-image: url("./img/tela001/fundo_cont2.png");
	background-size: cover;
	}
	.text_cont2{
	width:50%;
	margin-left: -30px;
	}
	.box_cont2{
	width: 100%!important;
	border-radius: 15px!important;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	background-color: #E17000;
	margin-top:10px;
	padding: 15px;
	}
	.text_cont2 h5{
	}
	.text_cont2 h4{
	margin-top: 20px;
	margin-bottom: 20px;
	}
	.box_cont2 p{
	color: #ffffff!important;
    font-size: 1.2rem!important;
    line-heigt: 2rem;
    line-height: 2rem;
	}
	.box_cont2_cards{
	border-radius: 15px!important;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	background-color: #E17000;
	margin-top:10px;
	padding: 15px;
	}
	.box_cont2_cards p{
	color: #ffffff!important;
    font-size: 1.2rem!important;
    line-heigt: 2rem;
    line-height: 2rem;
	}
	.box_carroussel{
	border-radius: 20px;
	text-align:left;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width:100%;
	background-color: #E17000;
	margin-top:10px;
	padding: 15px;
	}
	.box_carroussel p{
	color: #ffffff!important;
    font-size: 1.4rem;
    line-heigt: 2rem;
    line-height: 2rem;
	}
	.card_text_amigoh{
	text-align: center;
	font-size:1.5em!important;
	position: relative;
	top: 35%;
	margin-left: 10%;
    margin-right: 10%;
	color: #004F81!important;
	}
	.v-card-text_amigoh {
	font-size:1rem!important;
	font-family: 'montserrat'!important;
	margin-left: 5%;
    margin-right: 5%;
	}
	.btn_videos {
    background-color: #62C9CE !important;
    color: rgb(var(--v-theme-on-primary)) !important;
	}
	.btn_expande_conteudos_videos {
	padding-left: 20px;
    padding-right: 20px;
    color: #1B1F45;
    font-family: 'Roboto';
    font-size: 16px;
	letter-spacing: initial;
	font-weight: 900;
	}
	.texto_footer{
	 font-size: 1.4rem;
	 font-weight: 600;
	 letter-spacing: -1px;
	 margin-bottom: 20px
	}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 30%;
  font-size:1em;
}
.v-card--reveal2 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 30%;
  font-size:1em;
}
.v-card--reveal3 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 25%;
  font-size:1em;
}
.v-card--reveal4 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 30%;
  font-size:1em;
}
.v-card--reveal5 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 40%;
  font-size:1em;
}
.v-card--reveal6 {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 30%;
  font-size:1em;
}
.card_trans{
	background-image: url("./img/tela001/card_fundo.png");
	background-size: cover;
	text-aligh: center;
	padding-bottom: 80;
	height:350px;
	width:100%;
	}
	.col_card_trans_pri{
	margin: 0px 4px 0px -12px;
	}
	.col_card_trans{
	margin: 0px 4px 0px 0px;
	}
	.col_card_trans_ult{
	margin: 0px 0px 0px 0px;
	}
	.card_icon{
	height: 25%;
	position: relative;
	top: 100px;
	}
	.card_text{
	text-align: center;
	font-size:1.5em!important;
	position: relative;
	top: 120px;
	color: #004F81!important;
	}
	.btn_icon_card{
	font-size:3rem!important;
	position: relative;
	top: 100px;
	}
	.v-card-actions .v-btn {
	padding: 0 8px;
	position: absolute;
	top: 0px;
	left: 0;
	}
	.texto_escuro{
	color:#1B1F45!important;
	}
	.texto_claro{
	color:#62C9CE!important;
	}
	.texto_branco{
	color:#ffffff!important;
	}
	.texto_preto{
	color:#202428!important;
	}
	.texto_azul{
	color:#004F81!important;
	}
	.bg_claro{
	background-color: #00FFCD;
	}
	.bg_escuro{
	background-color: #1B1F45!important;
	}
	.azul-svg {
    background-image: url("./img/tela002/gota_azul.png");
	background-size: contain;
	}
	.verde-svg {
	background-image: url("./img/tela002/gota_verde.png");
	background-size: contain;
	}
	.v-card-conteudos_video{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela001/bg_video.svg");
	background-size: cover;
	}
	.col_card_3_img_pri{
	margin: 0px 6px 0px -12px;
	}
	.col_card_3_img{
	margin: 0px 6px 0px 0px;
	}
	.col_card_3_img_ult{
	margin: 0px 0px 0px 0px;
	}
	.footer{
	background-image: url("./img/tela001/fundo_footer.png");
	background-position: center;
	background-size: cover;
	padding-left:6%!important;
	padding-right:6%!important;
	margin-bottom:130px;
	}
	
	@media screen and (max-width: 768px){
	.fundo_cont2{
	max-width: 100%;
	background-image: url("./img/tela001/fundo_cont2_mobile.png");
	background-size: cover;
	background-repeat: no-repeat;
    background-position: center;
	}
	.text_cont2{
	width: 60%;
	margin-top: 10px
	}
	.text_cont2 h5{
	font-size: 1.4rem!important;
    line-height: 1.2rem;
	}
	.text_cont2 h4{
	font-size: 1.2rem!important;
    line-height: 1.1rem;
	}
	.text_cont2 p{
	font-size: 1.0rem!important;
    line-height: 1.2rem;
	}
	.box_cont2{
	width: 100%!important;
	border-radius: 15px!important;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	background-color: #E17000;
	margin-top:10px;
	padding: 15px;
	}
	
	.box_cont2 p{
	color: #ffffff!important;
    font-size: 0.8rem!important;
    line-height: 1rem;
	}
	}
	
</style>