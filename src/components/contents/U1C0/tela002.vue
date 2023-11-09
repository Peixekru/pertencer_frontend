<template>
    
<!-- header -->
	<v-card
    class="card_header mx-auto rounded-lg pa-6"
    width="100%"
    elevation = "6"
    >
		<v-img class="show_desktop" src="./img/tela002/header.png"/>
		<v-img class="show_mobile" src="./img/tela002/header_mobile.png"/>
	
		<v-img src="./img/tela002/header_text.svg" class="header_text" title="Missão, visão e valores. A cultura da excelência é um atributo do Einstein e uma diretriz estratégica que permeia todas as nossas atividades. É por meio dela que aprimoramos os nossos serviços, melhoramos continuamente os processos e nos posicionamos diante dos públicos e da sociedade."/>

	</v-card>
	
<!-- header -->

<!-- conteúdo 01 -->

	<v-card style="z-index:5; background-color:#0065BD"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela002/grade_01.png"
		/>
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">
            
			<h1 class="mt-n10 text-h1 font-weight-bold text-primary my-6 reveal fade-in texto_branco titulo_missao" >
                DIRETRIZES<br>estratégicas
            </h1>
			
			<v-container fill-height class="">
				<v-row justify="center" class="mt-10">
					<v-col cols="12" md="5" align="right">
						<div class="cont1_esquerda reveal fade-left">
							<p class="cont1_bold">Propósito</p>
							<p class="cont1_regular">Entregar vidas mais saudáveis, levando uma gota de Einstein para cada ser humano.</p>
						</div>
					</v-col>
					<v-col cols="12" md="2" align="center" class="reveal fade-bottom">
						<img style="height:150px" class="gota_footer reveal fade-in" src="./img/tela000/gota_branca.svg">
					</v-col>
					<v-col cols="12" md="5" align="left">
						<div class="cont1_direita  reveal fade-right">
							<p class="cont1_bold">Missão</p>
							<p class="cont1_regular">Oferecer excelência de qualidade no âmbito da saúde, da geração e disseminação do conhecimento e da responsabilidade social, como forma de evidenciar a contribuição da comunidade judaica . sociedade brasileira.</p>
						</div>
					</v-col>
				</v-row>
				<v-row justify="center" class="mt-4">
					<v-col cols="12" md="5" align="center">
						<div class="cont1_inferior reveal fade-bottom">
							<p class="cont1_bold">Visão</p>
						</div>
					</v-col>
				</v-row>
				<v-row justify="center" class="mt-n12">
					<v-col cols="12" md="5" align="center">
						<div class="cont1_inferiorp reveal fade-bottom">
							<p class="cont1_regular">Ser líder e inovadora na assistência à saúde, referência na gestão de conhecimento e pelo comprometimento com a responsabilidade social e sustentabilidade.</p>
						</div>
					</v-col>
				</v-row>
			</v-container>
		
        </v-card-text>
		
		
		
		
		 
		 
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4 ">
			<div v-show="btnhide1">
				<div class="shakeY v-responsive  mt-0 mb-4  mx-auto gota-missao-png" style="width: 40px; height:60px">
					
				</div>
				<button 
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_claro"
					> 
					<span 
						class="btn_expande_conteudos texto_azul_claro" 
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

	<v-card v-show="expand" style="z-index:4; background-color:#62C9CE"
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela002/grade_02.png"
		/>
		
		<v-card elevation="0" class="bg-transparent mt-n10">
				<v-row justify="center" class="mt-10">
					<v-col cols="12" md="5" align="center">
						<h1 style="z-index:10" class="mt-n10 font-weight-bold my-6 reveal fade-in texto_azul_claro" >
						VALORES
					</h1>
					</v-col>
				</v-row>
				<v-row justify="center" class="mt-n16">
					<v-col cols="12" md="2" align="left">
						<v-card elevation="0" class="bg-transparent">
						</v-card>
					</v-col>
					<v-col cols="12" md="4" align="left">
						<v-img style="height:300px"
							class=""
							src="./img/tela002/cont2_info1.svg"
						/>
					</v-col>
					
					<v-col cols="12" md="4" align="left">
						<v-card elevation="0" class="bg-transparent">
							  <v-img style="height:300px" class="" src="./img/tela002/cont2_info2.svg"/>
							  <a class="btn_cont2_info2" @click="tooltip1=!tooltip1"> <img style="height:50px" src='./img/tela002/btn_cont2.png'/></a>
						</v-card>
						
					</v-col>
					
					<v-col cols="12" md="2" align="right">
						
					</v-col>
				</v-row>
				
				<v-row justify="center" class="mt-n14">
					<v-col cols="12" md="2">
						
					</v-col>
					<v-col cols="12" md="4">
						<v-card elevation="0" class="bg-transparent">
							<v-img style="height:300px"
							class=""
							src="./img/tela002/cont2_info3.svg"/>
							<a class="btn_cont2_info3" @click="tooltip2=!tooltip2"> <img style="height:50px" src='./img/tela002/btn_cont2.png'/></a>
						</v-card>
					</v-col>
					<v-col cols="12" md="4">
					<v-img style="height:300px"
							class=""
							src="./img/tela002/cont2_info4.svg"
						/>
						
					</v-col>
					<v-col cols="12" md="2" align="right">
						
					</v-col>
				</v-row>

				  <v-expand-transition>
					  <div v-show="tooltip1" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-cont2-info2" style="width: 250px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip-cont2-info2" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									<strong>Chinuch - Educação</strong><br>
									Esses são os preceitos judaicos que motivaram médicos da comunidade judaica a fundar a Sociedade Beneficente Israelita Brasileira Albert Einstein há 60 anos.
								</span>
							</div>
						  </div>
					  </div>
				  </v-expand-transition>
				  
				  <v-expand-transition>
					  <div v-show="tooltip2" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tool-tip-cont2-info3" style="width: 260px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip-cont2-info3" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									<strong>Tsedaká - Justiça social</strong><br>
									Somados aos valores organizacionais, eles norteiam as atividades e os colaboradores da Sociedade:
									<ul style="list-style-type: none; color:#0065BD; font-weight: 600">
										<li>Honestidade</li>
										<li>Verdade</li>
										<li>Integridade</li>
										<li>Diligência</li>
										<li>Justiça</li>
										<li>Altruísmo</li>
										<li>Autonomia</li>
										<li>Profissionalismo</li>
										<li>Trabalho em Equipe</li>
									</ul>
								</span>
							</div>
						  </div>
					  </div>
				  </v-expand-transition>
				  
			</v-card>
			<v-card class="box_dicas pl-0 pr-0 mt-n8 reveal fade-bottom mx-auto" style="width: 30%">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos sinais de "+".  
				</v-card-text>
			</v-card>
	
		<!-- gota e botão -->
	
	<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide2">
				<div class="shakeY v-responsive  mt-0 mb-4  mx-auto azul-svg" style="width: 40px; height:60px">
					
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
    class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3"
    width="100%"
    elevation = "6"
    >	
		<v-img
		class="mx-auto grade_header"
		src="./img/tela002/grade_03.png"
		/>
		
		
		
		<v-container fill-height class="">
				<v-row justify="center" class="mt-0">
					<v-col cols="12" md="6" align="left">
						
							<h1 class="texto_branco" style="margin-top: 30%">OBJETIVO ESTRATÉGICO</h1>
							<p class="texto_branco">Ser reconhecida globalmente como uma das organizações líderes em termos de excelência de qualidade, segurança, inovação e sustentabilidade no âmbito da saúde.</p>
						
					</v-col>
					<v-col cols="12" md="6" align="center" class="reveal fade-bottom">
						<v-row justify="center" class="mt-0">
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela002/cont3_ICON_01.svg"
								/>
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela002/cont3_ICON_02.svg"
								/>
							</v-col>
							<v-col cols="12" md="2" align="center">
								
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela002/cont3_ICON_03.svg"
								/>
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela002/cont3_ICON_04.svg"
								/>
							</v-col>
							<v-col cols="12" md="2" align="center">
								
							</v-col>
						</v-row>
					</v-col>
					
				</v-row>
				
				
				
			</v-container>
		
		
		
		<!-- gota e botão -->
		
		<v-expand-transition>
		<v-container class="d-flex justify-center mb-4">
			<div v-show="btnhide3">
				<div class="shakeY v-responsive  mt-n4 mb-4  mx-auto azul-svg" style="width: 40px; height:60px">
					
				</div>
				<button @click="finishedContent"
					type="button" 
					class="v-btn v-btn--density-comfortable v-btn--rounded v-btn--size-large bg_escuro"
					> 
					<span 
						class="btn_expande_conteudos texto_claro" 
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

				  <v-card v-show="expand3" style="z-index:2; margin-bottom:130px;"
					class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide"
					width="100%"
					elevation = "6"
					>	
						<v-img
						class="mx-auto grade_header"
						src="./img/tela002/grade_04.png"
						/>
						
						<v-container fill-height class="">
							<v-row align="start" justify="center" class="mt-0">
								
								<v-col cols="12" md="4" align="left">
										<v-row justify="center" class="mt-0">
											<v-col cols="12" md="12" align="left">
													<h1 class="texto_azul_claro" style="margin-top: 5%">CÍRCULO VIRTUOSO...</h1>
													<p>
														O Einstein é uma plataforma de assistência, ensino e educação, pesquisa e inovação e responsabilidade social que integra centenas de atividades e trabalha para a melhoria de acesso e qualidade da saúde no País.
													</p>

											</v-col>
											<v-col cols="12" md="12" align="left">
													<v-img
														class="" height="400px"
														src="./img/tela002/cont4_linha.svg"
														/>
											</v-col>
											<v-col cols="12" md="12" align="left">

													<h1 class="texto_azul_claro" style="margin-top: 0%">...E CONECTADO.</h1>
											</v-col>
										</v-row>
								</v-col>
								<v-col cols="12" md="8" align="left">
										<v-img
										class="mb-10" 
										src="./img/tela002/cont4_circulo.png"
										/>
								</v-col>
								

								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela002/cont4_ico_01.svg"
									/>
									
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
									  
									<v-img style="width:60%"
									class="mt-n10" 
									src="./img/tela002/Retangulo-1.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em"><strong>ASSISTÊNCIA</strong></p>
										<p>Promove o cuidado através de um sistema integrado de saúde no qual diferentes elementos se combinam para prestar serviços de excelência e exercer a medicina baseada em evidências científicas nos âmbitos público e privado.
										</p>

								</v-col>
								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela002/cont4_ico_02.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10" 
									src="./img/tela002/Retangulo-2.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>MEDICINA<br>DIAGNÓSTICA</strong></p>
										<p>
											Apoia os serviços ambulatoriais e hospitalares na assistência pública e privada.
										</p>

								</v-col>
								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela002/cont4_ico_03.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10"
									src="./img/tela002/Retangulo-3.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>ENSINO E<br>EDUCAÇÃO</strong></p>
										<p>
											Forma profissionais para assistência e gestão da saúde com metodologias inovadoras, vivências práticas e soluções pedagógicas de ponta em diferentes níveis de ensino.
										</p>

								</v-col>
								
								<v-col cols="12" md="8" align="center" class="mt-3">
									<v-img style="width:80%; height: 10px"
									class="mt-16" 
									src="./img/tela002/Retangulo-4.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>PESQUISA E INOVAÇÃO</strong></p>
								
									<v-row align="start" justify="center" class="mt-4">
										
										<v-col cols="12" md="6" align="center">
											
											<v-img  style="width:25%"
											class="" 
											src="./img/tela002/cont4_ico_04.svg"
											/>
											<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
											<v-img style="width:60%"
											class="mt-n10"
											src="./img/tela002/Retangulo-6.svg"
											/>
											
											<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>PESQUISA</strong></p>
											<p>Gera conhecimento científico por meio de métodos rigorosos de qualidade e integridade na condução de pesquisas, ampliando as fronteiras do conhecimento.
											</p>

										</v-col>
										
										<v-col cols="12" md="6" align="center">
											
											<v-img  style="width:25%"
											class="" 
											src="./img/tela002/cont4_ico_05.svg"
											/>
											<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
											<v-img style="width:60%"
											class="mt-n10"
											src="./img/tela002/Retangulo-7.svg"
											/>
											
											<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>INOVAÇÃO</strong></p>
											<p>
												Mobiliza a colaboração em diferentes áreas de conhecimento, impulsionando a evolução da assistência à saúde.
											</p>

										</v-col>

									</v-row>

								</v-col>
								
								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela002/cont4_ico_06.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela002/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10"
									src="./img/tela002/Retangulo-5.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>RESPONSABILIDADE<br>SOCIAL</strong></p>
										<p>
											
Atua para mitigar as vulnerabilidades de comunidades próximas por meio da prestação de serviços de assistência à saúde, ensino, geração de empregos e ações filantrópicas.
										</p>

								</v-col>
								
								
								
								
							</v-row>

						</v-container>
						
			 <v-card class="box_dicas pl-0 pr-0 mt-2 mb-8 reveal fade-bottom mx-auto">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nos sinais de "+".  
				</v-card-text>
			</v-card>
		
	
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


.titulo_missao{
line-height: 1.2em;
text-align: center;
}
.cont1_esquerda{
width: 60%;
border-right: thick solid #62C9CE;
padding: 10px 20px 35px 20px;
}
.cont1_direita{
width: 100%;
border-left: thick solid #62C9CE;
padding: 5px 20px 20px 20px;
}
.cont1_inferior{
width: 40%;
border-top: thick solid #62C9CE;
border-radius: 5px;
padding: 10px 10px 10px 10px;
}
.cont1_inferiorp{
width: 100%;
padding: 10px 10px 10px 10px;
}
.cont1_bold{
color: #62C9CE;
font-weight:900;
font-size: 1.2rem!important;
line-height: 3rem;
}
.cont1_regular{
color: #ffffff;
font-weight:600;
font-size: 0.9rem!important;
line-height: 1.2rem;
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
	.texto_azul_claro{
	color:#0065BD!important;
	}
	.bg_claro{
	background-color: #62C9CE;
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
	.gota-missao-png {
	background-image: url("./img/tela002/gota-missao-png.png");
	background-size: contain;
	}
	
	.v-card-conteudos_cont3{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela002/cont3_fundo.png");
	background-size: cover!important;
	background-repeat: no-repeat;
    background-position: center;
	}
	.btn_cont2_info2{
	position: relative;
	top: -75px;
	left: 30px;
	z-index: 100000 !important;
	}
	
	.btn_cont2_info3{
	position: relative;
	top: -275px;
	left: 235px;
	z-index: 6003 !important;
	}
	
	.btn_cont2_info4{
	position: relative;
	top: -60px;
	left: 70px;
	z-index: 6003 !important;
	}
	.tool-tip-cont2-info2 {
    position: absolute!important;
    z-index: 6002 !important;
    top: 42%;
    left: 75%;
    transform: translate(-50%, -50%);
	}
	.triangulo-tool-tip-cont2-info2 {
	position: absolute!important;
    top: 37%;
    left: -20px;
	z-index: 6001 !important;
	transform: rotate(30deg)!important;
	}
	.tool-tip-cont2-info3 {
    position: absolute!important;
    z-index: 6002 !important;
    top: 58%;
    left: 24%;
    transform: translate(-50%, -50%);
	}
	.triangulo-tool-tip-cont2-info3 {
	position: absolute!important;
    top: 45%;
    left: 255px;
	z-index: 6001 !important;
	transform: rotate(90deg)!important;
	}

.card_trans{
	background-image: url("./img/tela002/card_fundo.png");
	background-size: cover;
	text-aligh: center;
	padding-bottom: 80;
	height:350px;
	width:100%;
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
.timeline_carroussel {
    grid-column-gap: 0px!important;
    width: 100%;
	}
	.v-timeline .v-timeline-divider__inner-dot {
    /* background: rgb(var(--v-theme-on-surface)); */
    border: 2px solid #62C9CE!important;
	}
.footer{
	background-image: url("./img/tela002/fundo_footer.png");
	background-position: center;
	background-size: cover;
	padding-left:6%!important;
	padding-right:6%!important;
	margin-bottom:130px;
	}
	
	@media screen and (max-width: 1277px){
	
	.btn_cont2_info2{
	position: relative;
	top: -100px;
	left: 15px;
	z-index: 100000 !important;
	}


	}
	@media screen and (max-width: 768px){
	
	.btn_cont2_info2{
	position: absolute;
	top: 225px;
	left: 35px;
	z-index: 100000 !important;
	}
	
	}

</style>