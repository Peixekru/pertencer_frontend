<template>
    
<!-- header -->
	<v-card
    class="card_header mx-auto rounded-lg pa-6"
    width="100%"
    elevation = "6"
    >
		<v-img class="show_desktop" src="./img/tela003/header.png"/>
		<v-img class="show_mobile" src="./img/tela003/header_mobile.png"/>
	
		<v-img src="./img/tela003/header_text.svg" class="header_text" title="O EINSTEIN. NOSSA ESTRUTURA E CONQUISTAS."/>

	</v-card>
	
<!-- header -->

<!-- conteúdo 01 -->

	<v-card style="z-index:5; background-color:#C4E8E1"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela003/grade_01.png"
		/>
		
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">
            
			<h1 class="mt-n10 text-h1 font-weight-bold text-primary my-6 reveal fade-in texto_azul" >
                Nossa Infraestrutura
            </h1>
			
			<v-container fill-height class="mt-n8">
				<v-row>
					<v-col class="cont1_col1" cols="12" md="6" align="left">
						<div class="reveal fade-left texto_preto">
							<p>Somos um Hospital de grande porte, reconhecido como uma <strong>instituição de excelência e referência</strong> tanto na área de saúde, como no <strong>ensino</strong>, <strong>pesquisa</strong>, <strong>inovação</strong> e <strong>responsabilidade social</strong>.</p>
						</div>
					</v-col>
					<v-col  class="cont1_col2" cols="12" md="6" align="left">
						<div class="reveal fade-right texto_preto">
							<p>Nosso funcionamento exige a participação de inúmeras pessoas, que atuam em uma infraestrutura complexa, onde todos trabalham de forma respeitosa, com <strong>amor e dedicação</strong>, gostando de <strong>contribuir e colaborar</strong>.</p>
						</div>
					</v-col>
				</v-row>
				
			
				
			</v-container>
        </v-card-text>
		
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide1">
				<div class="shakeY v-responsive  mt-0 mb-4  mx-auto gota_azul" style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_escuro"
					> 
					<span 
						class="btn_expande_conteudos texto_claro" 
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
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont2"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela003/grade_04.png"
		/>
		
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">
			
			<v-container fill-height class="mt-n8">
				<v-row justify="center" class="">
					<v-col cols="12" md="6" align="left">
						<div class="reveal fade-left  texto_preto">
							<p>
								Até aqui, você conheceu algumas das áreas que compõem a infraestrutura do Hospital Einstein.
							</p>
							<p class="mt-4">
								Todas seguem as mesmas diretrizes estratégicas que fazem do Einstein uma das organizações líderes em termos de excelência de qualidade, segurança, inovação e sustentabilidade no âmbito da saúde, reconhecidas globalmente.
							</p>
							<p class="mt-4">
								Para orquestrar a complexidade do Einstein, é preciso ter uma Estrutura de Governança que mantenha o foco e busque garantir a excelência da assistência em todos os níveis. 
							</p>
						</div>
					</v-col>
					<v-col cols="12" md="6" align="left">
						<div class="reveal fade-right">
							
						</div>
					</v-col>
				</v-row>
			</v-container>
        </v-card-text>
	
		<!-- gota e botão -->
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide2">
				<div class="shakeY v-responsive  mt-0 mb-4  mx-auto gota_azul" style="width: 40px; height:60px">
					
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
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela003/grade_02.png"
		/>
		
		<v-card-text class="pl-0 pr-0 mt-n5">
			
			<v-container fill-height class="mt-n16">
				
				<h1 class="text-h1 font-weight-bold text-primary my-6 reveal fade-in" >
								Estrutura de governança
							</h1>
							<p class="texto_azul_claro2 mt-n8">
								<strong>Mandato: dezembro de 2022 a dezembro de 2028</strong>
							</p>
						
				<v-img
				class="mx-auto mt-10 reveal fade-in"
				src="./img/tela003/cont3_info1.svg"
				/>
				<v-img
				class="mx-auto reveal fade-in"
				src="./img/tela003/cont3_info2.svg"
				/>
				<v-img
				class="mx-auto reveal fade-in"
				src="./img/tela003/cont3_info3.svg"
				/>
			</v-container>
        </v-card-text>

		<!-- gota e botão -->
		
		<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide3">
				<div class="shakeY v-responsive  mb-4  mx-auto" :class="appStore.isDarkMode ? 'gota_azul_claro' : 'gota_azul'" style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large"
					:class="appStore.isDarkMode ? 'bg_claro' : 'bg_escuro' "
					> 
					<span 
						class="btn_expande_conteudos" 
						:class="appStore.isDarkMode ? 'texto_escuro' : 'texto_claro' " 
						@click="expand3=!expand3,btnhide3=!btnhide3">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>
<!-- gota e botão -->
	</v-card>
</v-expand-transition>	
<!-- conteúdo 03 -->
<!-- conteúdo 04 -->
		<v-expand-transition>
				 <v-card v-show="expand3" style="z-index:2;"
					class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3"
					width="100%"
					elevation = "6"
					>	
						<v-img
						class="mx-auto grade_header"
						src="./img/tela003/grade_04.png"
						/>
						<v-img src="./img/tela003/header_text.svg" class="header_text" title="O EINSTEIN. NOSSA ESTRUTURA E CONQUISTAS."/>
				</v-card>
	 	</v-expand-transition>
<!-- conteúdo 04 -->
<!-- conteúdo 03 -->
<v-expand-transition>		
	<v-card v-show="expand3" style="z-index:1;"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela003/grade_03.png"
		/>
		<v-container fill-height class="mt-n16">
				<v-row justify="center" class="">
					<v-col cols="12" md="9" align="left">
						<div class="reveal fade-left">
							<h1 class="text-h1 font-weight-bold text-primary my-6 reveal fade-in" >
								Números Einstein
							</h1>
							<p class="mt-n8">
								Os serviços e processos de controle do Einstein são certificados, acreditados ou designados com relação a padrões e normas externas de referência. 
							</p>
							<p class="mt-4">
								<strong>Destacamos os principais para você conhecer.</strong>
							</p>
						</div>
					</v-col>
					<v-col cols="12" md="3" align="right">
						<v-img
							class="mx-auto mt-16 reveal fade-right"
							src="./img/tela003/cont4_info1.svg"
							/>
					</v-col>
				</v-row>
				</v-container>
				
				<v-container class="pt-10">
				  <v-card class="float-left rounded-lg cont4_info_row1_1 reveal fade-left">	
					<v-img src="./img/tela003/cont4_info2.svg"/>
				  </v-card>

				  <v-card class="float-left rounded-lg cont4_info_row1_2 reveal fade-bottom">
					<v-img src="./img/tela003/cont4_info3.svg"/>
				  </v-card>

				  <v-card class="float-left rounded-lg cont4_info_row1_3 reveal fade-right">
					<v-img src="./img/tela003/cont4_info4.svg"/>
				  </v-card>
				  
				</v-container>

			
        <v-container fill-height class="float-right">
			
			<v-row justify="center" class="">
					
					<v-col cols="12" md="6" align="right">
						<v-card class="rounded-lg cont4_info_row2_1 reveal fade-left">
							<v-img src="./img/tela003/cont4_info5.svg"/>
						</v-card>
					</v-col>
					<v-col cols="12" md="6" align="right">
						<v-card class="rounded-lg cont4_info_row2_2 reveal fade-right">
							<v-img src="./img/tela003/cont4_info6.svg"/>
						</v-card>
					</v-col>
			</v-row>
			
			<v-row justify="center" class="">
					
					<v-col cols="12" md="6" align="left">
						<p class="cont4_info_tit font-weight-bold my-2 reveal fade-in" >
							PRODUÇÃO CIENTÍFICA
						</p>
						<v-card class="rounded-lg cont4_info_row3_1 reveal fade-left">
							<v-img src="./img/tela003/cont4_info7.svg"/>
						</v-card>
					</v-col>
					<v-col cols="12" md="6" align="left">
						<p class="cont4_info_tit font-weight-bold my-2 reveal fade-in" >
							DISSEMINAÇÃO DE CONHECIMENTO
						</p>
						<v-card class="rounded-lg cont4_info_row3_2 reveal fade-right">
							<v-img src="./img/tela003/cont4_info8.svg"/>
						</v-card>
					</v-col>
			</v-row>
			
		</v-container>
  
 
		
		
		<!-- gota e botão -->
		
		<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide4">
				<div class="shakeY v-responsive  mt-n4 mb-4  mx-auto gota_azul" style="width: 40px; height:60px">
					
				</div>
				<button @click="finishedContent"
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_escuro"
					> 
					<span 
						class="btn_expande_conteudos texto_claro" 
						@click="expand4=!expand4,btnhide4=!btnhide4">PROSSEGUIR
					</span>
				</button>
			</div>
		</v-container>
	</v-expand-transition>
		
<!-- gota e botão -->
		
		
		
	</v-card>
	
</v-expand-transition>	
<!-- conteúdo 03 -->

<!-- conteúdo 04 -->
<v-expand-transition>		
	
	<v-card v-show="expand4" style="z-index:0; background-color:#004F81; margin-bottom:130px;"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela003/grade_04.png"
		/>
		
		<v-container fill-height class="mt-n10">
		
		<v-row justify="center" class="mt-n10">
					
					<v-col cols="12" md="8" align="left">
						<h2 class="texto_branco font-weight-bold text-primary mt-6 reveal fade-left" >
								Certificações, acreditações e reconhecimentos
							</h2>
							<p class="mt-4 texto_branco reveal fade-left">
								Os serviços e processos de controle do Einstein são certificados, acreditados ou designados com relação a padrões e normas externas de referência.
							</p>
							<p class="my-4 texto_branco reveal fade-left">
								Destacamos os principais para você conhecer. 
							</p>
					</v-col>
					<v-col cols="12" md="4" align="left">
						<v-card class="box_dicas_tela003 pl-0 pr-0 reveal fade-right">
							<v-card-text>
								<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.  
							</v-card-text>
						</v-card>
					</v-col>
			</v-row>
	<v-card
        elevation="3"
        width="100%"
        class="mx-auto rounded-lg my-8 reveal fade-bottom"
        >
		<v-carousel 
            show-arrows="hover"
			hide-delimiter-background
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
                                    Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3 
                                </h2>
                                <p class="mt-4">
                                    Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança. Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e ao Hospital Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho. 
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
								<h2>
                                    Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3 
                                </h2>
                                <p class="mt-4">
                                    Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança. Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e ao Hospital Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho. 
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
								<h2>
                                    Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3 
                                </h2>
                                <p class="mt-4">
                                    Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança. Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e ao Hospital Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho. 
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
								<h2>
                                    Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3 
                                </h2>
                                <p class="mt-4">
                                    Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança. Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e ao Hospital Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho. 
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
								<h2>
                                    Acreditação Hospitalar Organização Nacional de Acreditação (ONA) Nível 3 
                                </h2>
                                <p class="mt-4">
                                    Garantir padrões nacionais hospitalares de excelência, qualidade e de segurança. Área e escopo: Hospital Municipal M’Boi Mirim – Dr. Moysés Deutsch e ao Hospital Municipal Vila Santa Catarina – Dr. Gilson de Cássia Marques de Carvalho. 
                                </p>
							</v-col>
						</v-row>
                </v-sheet>
                </v-carousel-item>
				
            </v-carousel>
		 </v-card>
				</v-container>
	</v-card>
</v-expand-transition>	
<!-- conteúdo 04 -->
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
	  expand: false,
      expand2: false,
	  expand3: false,
	  expand4: false,
	  expand5: false,
	  expand6: false,
	  btnhide1: true,
	  btnhide2: true,
	  btnhide3: true,
	  btnhide4: true,
	  tooltip1: false,
	  tooltip2: false,
	  tooltip3: false,
	  tooltip4: false,
	  tooltip5: false,
	  tooltip6: false,
	  tooltip7: false,
	  tooltip8: false,
    }),
  }
  </script>
<style scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
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
	.texto_azul_claro{
	color:#0065BD!important;
	}
	.texto_azul_claro2{
	color:#5BC6E8!important;
	}
	.bg_claro{
	background-color: #62C9CE;
	}
	.bg_escuro{
	background-color: #1B1F45!important;
	}
	.gota_azul {
    background-image: url("./img/tela003/gota_azul.png");
	background-size: contain;
	}
	.gota_verde {
	background-image: url("./img/tela003/gota_verde.png");
	background-size: contain;
	}
	.gota_azul_claro {
	background-image: url("./img/tela003/gota-missao-png.png");
	background-size: contain;
	}
	.v-card-conteudos_cont2{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela003/bg_cont2.png");
	background-size: cover!important;
	background-repeat: no-repeat;
    background-position: center;
	}
	.v-card-conteudos_cont3{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela003/bg_cont3.png");
	background-size: cover!important;
	background-repeat: no-repeat;
    background-position: center;
	height: 450px;
	}
	.header_text{
	position: absolute;
	top: 35%;
	left: 6%;
	width: 42%;
	}
	.cont4_info_row1_1{
	margin-right:1.5%;
	padding:1.5%;
	width:28.4%;
	}
	.cont4_info_row1_2{
	margin-right:1.5%;
	padding:1.5%;
	width:39%;
	}
	.cont4_info_row1_3{
	padding:1.5%;
	width:29%;
	}
	.cont4_info_row2_1{
	padding:3%;
	width:100%;
	}
	.cont4_info_row2_2{
	padding:3%;
	width:100%;
	}
	.cont4_info_row3_1{
	padding:3%;
	width:100%;
	}
	.cont4_info_row3_2{
	padding:3%;
	width:100%;
	}
	.box_dicas_tela003{
	border-radius: 20px;
	position: relative;
	top: 170px;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width:100%;
	}
	.cont1_col1{
	margin-left: -15px;
	padding-right: 20px;
	}
	.cont1_col2{
	padding-left: 40px;
	}
.footer{
	background-image: url("./img/tela003/fundo_footer.png");
	background-position: center;
	background-size: cover;
	padding-left:6%!important;
	padding-right:6%!important;
	margin-bottom:130px;
	}
	@media screen and (max-width: 1277px){
	.cont1_col1{
	margin-left: 0px;
	padding-right: 0px;
	}
	.cont1_col2{
	padding-left: 0px;
	}
	}
	@media screen and (max-width: 768px){
	.cont4_info_row1_1{
	margin-right:0%;
	margin-bottom:5%;
	padding:10%;
	width:100%;
	}
	.cont4_info_row1_2{
	margin-right:0%;
	margin-bottom:5%;
	padding:10%;
	width:100%;
	}
	.cont4_info_row1_3{
	padding:10%;
	margin-bottom:5%;
	width:100%;
	}
	.v-card-conteudos_cont3{
	height: 300px;
	}
	.header_text{
	position: absolute;
	top: 40%;
	left: 6%;
	width: 60%;
	}
	.box_dicas_tela003{
	border-radius: 20px;
	position: static;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width:60%;
	margin-top:20px
	}
	.cont1_col1{
	margin-left: -15px;
	padding-right: 0px;
	}
	.cont1_col2{
	margin-left: -3px;
	}
	}
</style>