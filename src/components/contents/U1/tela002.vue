<template>
	<!-- header Missão -->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_missao/header.png"/>
		<v-img class="show_mobile" src="./img/tela_missao/header_mobile.png"/>
	
		<v-img src="./img/tela_missao/header_text.svg" class="header_text" title="Missão, visão e valores. A cultura da excelência é um atributo do Einstein e uma diretriz estratégica que permeia todas as nossas atividades. É por meio dela que aprimoramos os nossos serviços, melhoramos continuamente os processos e nos posicionamos diante dos públicos e da sociedade."/>
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:5;background-color:#0065BD" 
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		
		<v-img
		class="mx-auto grade_header"
		src="./img/tela_missao/grade_01.png"
		/>
		<v-card-text class="pt-10 pl-0 pr-0 mt-n5">
            
			<h1 class="mt-n10 text-h1 font-weight-bold text-primary my-6 reveal fade-in titulo_missao" >
                DIRETRIZES<br>estratégicas
            </h1>
			
			<v-container fill-height class="">
				<v-row justify="center" class="mt-10">
					<v-col cols="12" md="4" align="right">
						<div class="cont1_esquerda reveal fade-left">
							<p class="cont1_bold">Propósito</p>
							<p class="cont1_regular">Entregar vidas mais saudáveis, levando uma gota de Einstein para cada ser humano.</p>
						</div>
					</v-col>
					<v-col cols="12" md="3" align="center" class="reveal fade-bottom">
						<img style="height:200px" class="gota_footer reveal fade-in" src="./img/tela_missao/img_cont1.svg">
					</v-col>
					<v-col cols="12" md="4" align="left">
						<div class="cont1_direita mt-n3 reveal fade-right">
							<p class="cont1_bold">Missão</p>
							<p class="cont1_regular">Oferecer excelência de qualidade no âmbito da saúde, da geração e disseminação do conhecimento e da responsabilidade social, como forma de evidenciar a contribuição da comunidade judaica para a sociedade brasileira.</p>
						</div>
					</v-col>
				</v-row>
				<v-row justify="center" class="mt-n4">
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
	style="z-index:4; background-color:#62C9CE"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img
		class="mx-auto grade_header"
		src="./img/tela_missao/grade_02.png"
		/>
		
		<v-card elevation="0" class="bg-transparent mt-n10">
				<v-row justify="center" class="mt-10">
					<v-col cols="12" md="7" align="center">
						<h1 style="z-index:10" class="mt-n10 font-weight-bold my-6 reveal fade-in texto_azul_claro" >
						VALORES
					</h1>
					<p>
						Alguns princípios judaicos serviram como inspiração para os médicos da comunidade judaica na fundação da Sociedade Beneficente Israelita Brasileira Albert Einstein. São eles: 
					</p>
					</v-col>
					<v-col cols="12" md="7" align="center">
						<img height="600" src="./img/tela_missao/cont2_info.png" usemap="#image-map">

					<map name="image-map">
						<area target="" alt="Chinuch - Educação" title="Chinuch - Educação" coords="356,244,40" shape="circle" @click="tooltip1a=!tooltip1a" >
						<area target="" alt="Refuá - Saúde" title="Refuá - Saúde" coords="354,356,44" shape="circle" @click="tooltip1b=!tooltip1b">
						<area target="" alt="Tsedaká - Justiça Social" title="Tsedaká - Justiça Social" coords="243,352,41" shape="circle" @click="tooltip1c=!tooltip1c">
						<area target="" alt="Mitzvá - Boas Ações" title="Mitzvá - Boas Ações" coords="244,245,38" shape="circle" @click="tooltip1d=!tooltip1d">
					</map>
					</v-col>
				</v-row>
				
				  <v-expand-transition>
					  <div v-show="tooltip1a" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltip1a" style="width: 250px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip-cont2-info2" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									A palavra <em>chinuch</em> tem origem no hebraico e significa educação. O Ensino, a Pesquisa e a Inovação sempre estiveram no DNA do Hospital Israelita Albert Einstein, como parte do propósito de seus fundadores. Pautados no caminhar do saber científico lado a lado com a assistência médica, o Ensino, Pesquisa e Inovação se fixam nas atividades do Instituto Israelita de Ensino e Pesquisa e do Centro de Educação em Saúde Abram Szajman. 
								</span>
							</div>
						  </div>
					  </div>
				  </v-expand-transition>
				  
				  <v-expand-transition>
					  <div v-show="tooltip1b" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltip1b" style="width: 250px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tool-tip-cont2-info2" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									 A palavra <em>refuá</em> tem origem no hebraico e significa saúde. Este pilar tem como base a prevenção, diagnóstico, tratamento e reabilitação e foco no desenvolvimento da Instituição, com aquisição de tecnologias, equipamentos e novos serviços. 
								</span>
							</div>
						  </div>
					  </div>
				  </v-expand-transition>
				  
				  
				  <v-expand-transition>
					  <div v-show="tooltip1c" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltip1c" style="width: 260px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tooltip1c" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									Os princípios judaicos, somados aos <strong>valores organizacionais</strong>, norteiam as atividades e os colaboradores da sociedade:
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
				  
				  <v-expand-transition>
					  <div v-show="tooltip1d" aria-hidden="false" class="v-sheet v-theme--light bg-transparent tooltip1d" style="width: 260px;">

						  <i class="mdi-triangle mdi v-icon v-theme--light v-icon--size-x-large text-surface animate__animated animate__fadeInUp triangulo-tooltip1d" aria-hidden="false" ></i>

						  <div class="v-card v-theme--light v-card--density-default elevation-4 v-card--variant-elevated mx-auto d-flex rounded-lg pa-4 rounded-xl" style="z-index:6005;">

							<div class="pt-2 pb-2 pl-2 pr-2">
								<span class="tooltip_text">
									A palavra <em>mitzvá’</em> tem origem no hebraico e, no uso comum, significa boas ações. Já a palavra <em>tsedaká</em> vem da mesma raiz do vocábulo hebraico <em>tsedek</em>, que significa justiça, conferindo ao termo o conceito de justiça social. A união desses dois pilares deu origem ao compromisso do Einstein com a Responsabilidade Social, Voluntariado e Filantropia. 									
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
	<v-card 
	v-show="isContent03Visible"
	id="content03" 
	width="100%" 
	elevation="6"
	style="z-index:3;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3" 
	>

		<v-img
		class="mx-auto grade_header"
		src="./img/tela_missao/grade_03.png"
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
								src="./img/tela_missao/cont3_ICON_01.svg"
								/>
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela_missao/cont3_ICON_02.svg"
								/>
							</v-col>
							<v-col cols="12" md="2" align="center">
								
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela_missao/cont3_ICON_03.svg"
								/>
							</v-col>
							<v-col cols="12" md="5" align="center">
								<v-img
								class=""
								src="./img/tela_missao/cont3_ICON_04.svg"
								/>
							</v-col>
							<v-col cols="12" md="2" align="center">
								
							</v-col>
						</v-row>
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:2;"
	>
		
		
		<v-img
						class="mx-auto grade_header"
						src="./img/tela_missao/grade_04.png"
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
														src="./img/tela_missao/cont4_linha.svg"
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
										src="./img/tela_missao/cont4_circulo.png"
										/>
								</v-col>
								

								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela_missao/cont4_ico_01.svg"
									/>
									
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
									  
									<v-img style="width:60%"
									class="mt-n10" 
									src="./img/tela_missao/Retangulo-1.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em"><strong>ASSISTÊNCIA</strong></p>
										<p>Promove o cuidado através de um sistema integrado de saúde no qual diferentes elementos se combinam para prestar serviços de excelência e exercer a medicina baseada em evidências científicas nos âmbitos público e privado.
										</p>

								</v-col>
								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela_missao/cont4_ico_02.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10" 
									src="./img/tela_missao/Retangulo-2.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>MEDICINA<br>DIAGNÓSTICA</strong></p>
										<p>
											Apoia os serviços ambulatoriais e hospitalares na assistência pública e privada.
										</p>

								</v-col>
								<v-col cols="12" md="4" align="center">
									<v-img  style="width:25%"
									class="" 
									src="./img/tela_missao/cont4_ico_03.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10"
									src="./img/tela_missao/Retangulo-3.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>ENSINO E<br>EDUCAÇÃO</strong></p>
										<p>
											Forma profissionais para assistência e gestão da saúde com metodologias inovadoras, vivências práticas e soluções pedagógicas de ponta em diferentes níveis de ensino.
										</p>

								</v-col>
								
								<v-col cols="12" md="8" align="center" class="mt-3">
									<v-img style="width:80%; height: 10px"
									class="mt-16" 
									src="./img/tela_missao/Retangulo-4.svg"
									/>
										<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>PESQUISA E INOVAÇÃO</strong></p>
								
									<v-row align="start" justify="center" class="mt-4">
										
										<v-col cols="12" md="6" align="center">
											
											<v-img  style="width:25%"
											class="" 
											src="./img/tela_missao/cont4_ico_04.svg"
											/>
											<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
											<v-img style="width:60%"
											class="mt-n10"
											src="./img/tela_missao/Retangulo-6.svg"
											/>
											
											<p class="texto_preto mt-4" style="font-size:1.5em; line-height:1.2em"><strong>PESQUISA</strong></p>
											<p>Gera conhecimento científico por meio de métodos rigorosos de qualidade e integridade na condução de pesquisas, ampliando as fronteiras do conhecimento.
											</p>

										</v-col>
										
										<v-col cols="12" md="6" align="center">
											
											<v-img  style="width:25%"
											class="" 
											src="./img/tela_missao/cont4_ico_05.svg"
											/>
											<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
											<v-img style="width:60%"
											class="mt-n10"
											src="./img/tela_missao/Retangulo-7.svg"
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
									src="./img/tela_missao/cont4_ico_06.svg"
									/>
									<a class="btn_cont2_info4"> <img style="height:50px" src='./img/tela_missao/btn_cont4.png'/></a>
									<v-img style="width:60%"
									class="mt-n10"
									src="./img/tela_missao/Retangulo-5.svg"
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
	
	<!-- conteúdo 05 ultimo conteudo gambi -->
	
	<v-card 
	id="content05"
	width="100%"
	class="mt-n4 mx-auto rounded-lg pt-0"
	style="z-index:0;"  
	>
	&nbsp;
	</v-card>
	<!-- conteúdo 05 ultimo conteudo gambi -->
	
	</v-card>

	<!-- conteúdo 04 -->


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
	const lastElementIdOnScreen = ref('#content04')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)

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
	  tooltip1a: false,
	  tooltip1b: false,
	  tooltip1c: false,
	  tooltip1d: false,
	  tooltip3: false,
	  tooltip4: false,
	  tooltip5: false,
	  tooltip6: false,
	  tooltip7: false,
	  tooltip8: false,
    }),

  }
  

  </script>

<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';


.custom-v-card {
	position: absolute;
	bottom: 0;
	opacity: 1 !important;	
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 1em;
}
.titulo_missao{
line-height: 1.2em;
text-align: center;
color:white!important;
}
.cont1_esquerda{
width: 80%;
padding-top: 20px;
}
.cont1_direita{
width: 100%;
padding-top: 0px;
}
.cont1_inferior{
width: 40%;
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
.v-card-conteudos_cont3{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela_missao/cont3_fundo.png");
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
	.tooltip1a {
    position: absolute!important;
    z-index: 6002 !important;
    top: 61%;
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
	.tooltip1b {
    position: absolute!important;
    z-index: 6002 !important;
    top: 72%;
    left: 75%;
    transform: translate(-50%, -50%);
	}
	.tooltip1c {
    position: absolute!important;
    z-index: 6002 !important;
    top: 69%;
    left: 27%;
    transform: translate(-50%, -50%);
	}
	.tooltip1d {
    position: absolute!important;
    z-index: 6002 !important;
    top: 55%;
    left: 27%;
    transform: translate(-50%, -50%);
	}
	.triangulo-tooltip1c {
	position: absolute!important;
    top: 45%;
    left: 255px;
	z-index: 6001 !important;
	transform: rotate(90deg)!important;
	}
	.triangulo-tooltip1d {
	position: absolute!important;
    top: 45%;
    left: 255px;
	z-index: 6001 !important;
	transform: rotate(90deg)!important;
	}
.texto_branco{
	color:#ffffff!important;
	}
.texto_escuro {
	color: #1B1F45 !important;
}

.texto_claro {
	color: #62C9CE !important;
}

.texto_preto {
	color: #202428 !important;
}

.texto_azul {
	color: #004F81 !important;
}

.bg_claro {
	background-color: $primaryLight !important;
}

.bg_escuro {
	background-color: $primaryDark !important;	
}

.azul-svg {
	background-image: url("./img/tela000/gota_azul.png");
	background-size: contain;
}

.verde-svg {
	background-image: url("./img/tela000/gota_verde.png");
	background-size: contain;
}

.v-card-conteudos {
	padding-left: 6% !important;
	padding-right: 6% !important;
}

.card_header {
	padding: 0 !Important;
	border-radius: 18px 18px 0px 0px !important;
	z-index: 10;
	background-color: #DC7689;
}

.header_text {
	position: absolute;
	top: 9%;
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

.triangulo_v-card {
	font-size: 6rem !important;
	color: #62C9CE !important;
}

.col_card_3_img_pri {
	margin: 0px 6px 0px -12px;
}

.col_card_3_img {
	margin: 0px 6px 0px 0px;
}

.col_card_3_img_ult {
	margin: 0px 0px 0px 0px;
}

.footer {
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

.timeline_carroussel {
	grid-column-gap: 0px !important;
	width: 100%;
}

.v-timeline .v-timeline-divider__inner-dot {
	/* background: rgb(var(--v-theme-on-surface)); */
	border: 2px solid #62C9CE !important;
}
</style>