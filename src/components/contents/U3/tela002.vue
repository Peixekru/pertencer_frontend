<template>
	<!-- header etica-->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_etica/header.png" />
		<v-img class="show_1277" src="./img/tela_etica/header.png" />
		<v-img class="show_mobile" src="./img/tela_etica/header_mob.png" />
		<v-img src="./img/tela_etica/header_text.svg" class="header_text"
			title="ÉTICA E COMPLIANCE. Esse lema traduz o jeito Einstein de ser e reforça o compromisso que está presente desde a sua fundação:SEMPRE VALORIZAR E PRIORIZAR A CONDUTA ÉTICA EM TODAS AS SUAS ATIVIDADES." />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:9;background-color:#fff!important;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_etica/grade_header_laranja.png" />
		
			<h1 class="mt-n6 font-weight-bold texto_azul my-6  reveal fade-left">
				Vamos conhecer um pouco sobre a Área de Compliance do Einstein.
			</h1>
			<v-card class="box_dicas pl-0 pr-0 my-10  reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber mais.
				</v-card-text>
			</v-card>


			
			<v-row class="mt-2">

			<!--Card 01-->
			<v-col cols="12" sm="6" md="6">
				<v-card 
				height="350"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard01Visible ? 'card-bg-img' : '' "
					@click="isCard01Visible = !isCard01Visible"
					>
						<template v-if="!isCard01Visible">
							<v-img 
							src="./img/tela_etica/card_1_nome.png" 
							width="250"
							max-height="250"
							class="animate__animated animate__fadeInDown"
							/>
							<v-img 
							src="./img/tela_etica/card_icon.png" 
							width="50"
							max-height="50"
							class="animate__animated animate__fadeInDown"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp pa-8">
								Compliance existe para garantir a conformidade com as leis, normas e com a boa conduta. Estar em Compliance é fazer o que é certo e agir conforme as regras, atendendo ao que determinam políticas internas, leis e regulamentos aplicáveis.<br><br>A Diretoria de Compliance foi criada para nos dar a segurança de que os aspectos éticos e morais estejam descritos e cumpridos dentro da atividade normal do nosso dia a dia.		
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>
			
			<!--Card 02-->
			<v-col cols="12" sm="6" md="6">
				<v-card 
				height="350"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard02Visible ? 'card-bg-img2' : '' "
					@click="isCard02Visible = !isCard02Visible"
					>
						<template v-if="!isCard02Visible">
							<v-img 
							src="./img/tela_etica/card_2_nome.png" 
							width="210"
							max-height="250"
							class="animate__animated animate__fadeInDown"
							/>
							<v-img 
							src="./img/tela_etica/card_icon.png" 
							width="50"
							max-height="50"
							class="animate__animated animate__fadeInDown"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp pa-8">
								Nossa atuação é voltada para ser um ponto de apoio às diversas áreas da SBIBAE em relação aos dilemas éticos.<br><br>Buscamos criar um ambiente de trabalho mais íntegro e ético por meio da prevenção de atitudes antiéticas, transformação da cultura e disseminação de temas relacionados à ética.
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			
		</v-row>
	

		<!--Btn final-->
		<v-container class="d-flex justify-center mt-4 mb-4">
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
	style="z-index:8;"
	class="mt-n4 rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_etica/grade_header_azul.png" />
		
		<h1 class="mt-n4 font-weight-bold texto_azul my-6 reveal fade-left">
			Como é a estrutura do Programa de Ética e Compliance?  
		</h1>
		<p class="mt-4 reveal fade-left">
			O Programa de Ética e Compliance do Einstein é composto por uma estrutura baseada em sete pilares, presentes na mandala que contém os princípios norteadores do Programa.
		</p>
		<v-row class="mx-auto mt-4">
			<v-col cols="12" md="12"  class=" reveal fade-right">
			
				<v-card width="40%" class="box_dicas pl-0 pr-0">
					<v-card-text>
						<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas setas abaixo.  
					</v-card-text>
				</v-card>
				
				<v-card
				elevation="3"
				width="100%"
				class="mx-auto rounded-lg mt-6"
				>
				<v-carousel 
					show-arrows="hover"
					color="primary"
					:continuous="false"
					hide-delimiter-background
					>
						<v-carousel-item>
					<v-sheet 
						color="transparent"
						width="100%"
						height="100%"
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_01.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												1º Estrutura de Compliance:
											</h2>
											<p class="mt-4">
												Temos uma estrutura independente que tem o total apoio da Alta Administração. O principal objetivo deste pilar é estimular um bom ambiente de controle interno, e fortalecer e estimular a conduta ética por parte de todos os públicos que se relacionam com o Einstein.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_02.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												2º Políticas e Procedimentos: 
											</h2>
											<p class="mt-4">
												Os normativos representam as diretrizes que conduzem as atividades dentro da organização e orientam a conduta dos colaboradores. Por isso, as diretrizes institucionais devem ser conhecidas e praticadas por todas as pessoas que atuam na Sociedade.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_03.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												3º Educação e Treinamento: 
											</h2>
											<p class="mt-4">
												 Este pilar abrange todas as ações voltadas para comunicar, disseminar e reforçar a conduta ética para todos os colaboradores.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_04.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												4º: Mapa de Riscos
											</h2>
											<p class="mt-4">
												Pilar que visa identificar e mensurar os riscos, ou seja, os temas que devem ser priorizados. O Mapa de Riscos ajuda a planejar as ações de Compliance e os trabalhos de Auditoria.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_05.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												5º Monitoramento e Auditoria:
											</h2>
											<p class="mt-4">
												 A partir do resultado dos riscos identificados, os casos mais críticos devem ser auditados com o objetivo de avaliar a efetividade dos controles internos.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_06.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
										6º Canal de Denúncias:
									</h2>
									<p class="mt-4">
										 Permite que qualquer pessoa (interna ou externa) relate eventuais violações ao Manual de Conduta Ética.
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
						class="d-flex justify-end px-8 py-8 mb-16">
							<v-row justify="center" align="center">
								<v-col cols="12" md="6" align="center">
									<v-img width="90%" src="./img/tela_etica/mand_07.png"/>
								</v-col>
								<v-col style="padding-right: 60px;" cols="12" md="6">
									<h2>
												7º Resposta Adequada: 
											</h2>
											<p class="mt-4">
												 Diz respeito ao compromisso e à seriedade existentes na condução dos processos de apuração dos relatos inseridos no Canal de Denúncias, respondendo as infrações detectadas e aplicando medidas adequadas para correção dos processos e melhoria contínua dos controles.
											</p>
								</v-col>
							</v-row>
					</v-sheet>
                </v-carousel-item>
				
				
						

					</v-carousel>
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
	style="z-index:7;"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos_cont3"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_etica/grade_header_azul.png" />
		
		<h1 style="color:#2B7080" class="mt-n4 font-weight-bold my-6 reveal fade-left texto_branco">
			Quais são os objetivos do Programa de Ética e Compliance?
		</h1>
		<p class="mt-4 reveal fade-left texto_branco">
			O Programa de Ética e Compliance é promovido com total apoio da Alta Administração do Einstein, com base nos princípios e valores que norteiem as ações e decisões da Sociedade.
		</p>
		<p class="mt-4 reveal fade-left texto_branco">
			<strong>Seus principais objetivos são:</strong>
		</p>
		<v-row class="mx-auto mt-4">
			<v-col cols="12" md="6" class="reveal fade-left">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-5 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2"  class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico1.png" />
						</v-col>
						<v-col cols="12" md="10"  class="">
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Resguardar o cumprimento da lei, dos valores organizacionais e dos mais altos padrões éticos da Sociedade.
							</p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-right">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-5 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2" class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico2.png" />
						</v-col>
						<v-col cols="12" md="10" >
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Garantir um bom ambiente de controles internos e gerir adequadamente os riscos.
							</p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-left">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-5 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2" class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico3.png" />
						</v-col>
						<v-col cols="12" md="10" class="">
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Reforçar o compromisso institucional com a responsabilidade social e com o desenvolvimento sustentável.
							</p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-right">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-5 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2" class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico4.png" />
						</v-col>
						<v-col cols="12" md="10" class="">
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Dar tratamento adequado aos dilemas éticos comuns no sistema de saúde.
							</p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-left">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-5 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2" class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico5.png" />
						</v-col>
						<v-col cols="12" md="10"  class="">
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Fomentar e fortalecer a cultura de ética e o ambiente de controles internos, contribuindo para a excelência da SBIBAE.
							</p>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-right">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pt-3 px-3 cards_icones"
				align="left"
				>
					<v-row class="mx-auto">
						<v-col cols="12" md="2"  class="reveal fade-left">
							<v-img class="ico_cards" src="./img/tela_etica/cont3_ico6.png" />
						</v-col>
						<v-col cols="12" md="10" class="">
							<p style="font-size:0.8em" class="reveal fade-left pb-3">
								Implantar mecanismos para manter, incentivar e exigir comportamento ético e o cumprimento das leis, regulamentos, normas e políticas internas que se aplicam a todas as atividades do Einstein.
							</p>
						</v-col>
					</v-row>
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
	
	<!-- conteúdo 04 grafismos -->
	<v-card 
	v-show="isContent04Visible" 
	width="60%" 
	elevation="0"
	class="mt-n4 mx-auto rounded-lg pt-0 bg-transparent" 
	style="z-index:3;"  
	>
	<v-img class="mx-auto mt-4" src="./img/tela_etica/cont4_grade.png" />
	</v-card>
	<!-- conteúdo 04 grafismos -->
	
	<!-- conteúdo 04 -->
	<v-card 
	v-show="isContent04Visible"
	id="content04"
	width="100%" 
	elevation="6"
	style="z-index:7;"
	class="mt-0 mx-auto rounded-lg pt-4 v-card-conteudos_cont4" 
	>
	
		<v-row class="mx-auto mt-10">
			<v-col cols="12" md="6" class="reveal fade-left">
				<p style="font-size:1.5em; text-transform:uppercase" class="reveal fade-left texto_branco">
					Como é feita a gestão do Programa de Ética e Compliance?
				</p>
			</v-col>
			<v-col cols="12" md="6"  class="">
				<p style="" class="reveal fade-right texto_branco">
					A gestão do Programa de Ética e Compliance faz parte das atribuições da Diretoria de Auditoria, Gestão de Riscos e Compliance. Essa Diretoria é composta por três Gerências, que atuam de forma integrada.
				</p>
			</v-col>
		</v-row>
		
		<v-container class="mx-auto" align="center">
		
		<img height="500" class="show_desktop" src="./img/tela_etica/cont4_info.png" usemap="#image-map">
		
		<img height="500" class="show_1277" src="./img/tela_etica/cont4_info.png" usemap="#image-map">
		
		<img height="300" class="show_mobile" src="./img/tela_etica/cont4_info.png" usemap="#image-map_mobile">

		<map name="image-map">
			<area style="cursor:pointer" target="" alt="auditoria" title="auditoria" coords="373,151,35" shape="circle"
			@click="
			isTooltip1Visible = true;
			isTooltip2Visible = false;
			isTooltip3Visible = false;
			">
			<area style="cursor:pointer" target="" alt="gestão de riscos" title="gestão de riscos" coords="255,359,34" shape="circle"
			@click="
			isTooltip2Visible = true;
			isTooltip1Visible = false;
			isTooltip3Visible = false;
			">
			<area style="cursor:pointer" target="" alt="compliance" title="compliance" coords="135,146,36" shape="circle"
			@click="
			isTooltip3Visible = true;
			isTooltip2Visible = false;
			isTooltip1Visible = false;
			">
		</map>
		
		<map name="image-map_mobile">
			<area style="cursor:pointer" target="" alt="" title="" coords="215,87,21" shape="circle"
			@click="
			isTooltip1Visible = true;
			isTooltip2Visible = false;
			isTooltip3Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="147,207,20" shape="circle"
			@click="
			isTooltip2Visible = true;
			isTooltip1Visible = false;
			isTooltip3Visible = false;
			">
			<area style="cursor:pointer" target="" alt="" title="" coords="78,87,22" shape="circle"
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
					Responsável pela Auditoria Interna, cujo objetivo é revisar a eficácia e eficiência dos controles associados aos processos críticos da SBIBAE.
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
					Responsável por gerir os riscos, assegurando a atualização permanente do Mapa de Riscos alinhada ao Plano Estratégico da Sociedade.
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
					Responsável pelo planejamento, gestão e controle do Programa de Ética e Compliance, conforme legislação vigente, melhores práticas de mercado e em linha com o planejamento estratégico da Sociedade. 
				</span>
			</div>
		  </div>
	  </div>

		
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
	style="z-index:6;background-color:#004F81!important;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_etica/grade_header_azul.png" />
		
		<h1 style="color:#2B7080" class="mt-0 font-weight-bold mt-n6 reveal fade-left texto_branco">
			O que fazemos?
		</h1>
		<p style="" class="reveal fade-right texto_branco">
			Faz parte do Programa de Ética e Compliance a orientação a públicos internos e externos quanto ao cumprimento de suas diretrizes, através de Campanhas de Comunicação e Programas de Educação permanentes.
		</p>
		
		<v-img class="mx-auto mt-4 show_desktop" src="./img/tela_etica/cont5_fotos.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos1.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos2.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos3.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos4.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos5.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos6.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos7.png" />
		<v-img class="mx-auto mt-4 show_mobile" src="./img/tela_etica/cont5_fotos8.png" />
		
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
				@click="isContent06Visible = true; prosseguir('content06')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	
	</v-card>

<!-- conteúdo 05 -->

	<!-- conteúdo 06 grafismos -->
	<v-card 
	v-show="isContent06Visible"
	id="content06" 
	elevation="0"
	class="mt-n4 mx-auto rounded-lg pt-0 bg-transparent" 
	style="z-index:6;"  
	>
	<v-img class="mx-auto mt-4" src="./img/tela_etica/cont6_grade.png" />
	</v-card>
	
<!-- conteúdo 05 grafismos -->

<!-- conteúdo 06 -->
	<v-card 
	v-show="isContent06Visible"
	width="100%" 
	elevation="6"
	class="mx-auto rounded-lg pb-16 pt-0 pl-16 pr-16 v-card-conteudos_cont6" 
	style="z-index:5;background-color:#C4E8E1!important;"  
	>
		<v-container align="center">
			<h1 style="color:#2B7080;" class="texto_preto font-weight-bold mt-6 reveal fade-left cont6_title">
				Manual Institucional Diretrizes de Conduta Ética
			</h1>
		</v-container>
		<v-row class="mx-auto mt-0">
			<v-col cols="12" md="12"  class="reveal fade-left">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pa-6"
				align="center"
				>
					<p style="font-size:2em; color:#62C9CE">
						ESSE MANUAL É A NOSSA CONSTITUIÇÃO!
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="3" class="">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pa-8 d-flex flex-column justify-center align-center cursor-pointer v-cards_cont6"
				align="left"
				>
					<p>
						É um importante documento que norteia a conduta de colaboradores, profissionais e todos que atuam em nome da Sociedade. 

					</p>
				</v-card>

			</v-col>
			<v-col cols="12" md="3"  class="">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pa-7 d-flex flex-column justify-center align-center cursor-pointer v-cards_cont6"
				align="left"
				
				>
					<p>
						Ele aborda os compromissos éticos do Einstein, as responsabilidades e como devemos agir no diante das mais diversas situações do dia a dia.
					</p>
				</v-card>

			</v-col><v-col cols="12" md="6" class="">
				<v-card 
				elevation="2"
				style="z-index:8;border-radius:15px;background-color:#62C9CE"
				class="mt-4 pa-10 d-flex flex-column justify-center align-center cursor-pointer v-cards_cont6"
				align="left"
				
				>
					<p style="font-size:1.2em" class="texto_branco font-weight-bold">
						Um Manual de Conduta Ética, construído com a participação da liderança, reafirma o compromisso com as atitudes corretas na condução das atividades e, principalmente, em relação às pessoas. 

					</p>
				</v-card>

			</v-col>
		</v-row>
		
		
	<!--Btn final-->
		<v-container class="d-flex justify-center mt-4">
			<v-sheet 
			color="transparent"
			class="mt-4"
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
				@click="isContent07aVisible = true; prosseguir('content07a')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	
	</v-card>

<!-- conteúdo 06 -->


<!-- conteúdo 07a grafismos -->
	<v-card 
	v-show="isContent07aVisible"
	id="content07a" 
	width="100%" 
	elevation="0"
	class="mt-0 mx-auto rounded-lg pt-0 bg-transparent grafismos_cont7" 
	style="z-index:3;"  
	>
	<v-container class="d-flex justify-center mt-16">
		<v-row class="mx-auto mt-0">
			<v-col cols="12" md="8" align="right" class="reveal fade-left">
				<p style="font-size:1.3em" class="mt-6 font-weight-bold reveal fade-left texto_branco">
					É importante que você conheça bem o que diz o nosso Manual: 
				</p>
			</v-col>
			<v-col cols="12" md="4" class="reveal fade-left">
				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-primary bg_escuro'"
				> 
					CLIQUE AQUI PARA ACESSAR
				</v-btn>
			</v-col><strong></strong>
		</v-row>
	</v-container>
	
	<!--Btn final-->
		<v-container class="d-flex justify-center mb-4">
			<v-sheet 
			color="transparent"
			class="mt-4"
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
				@click="isContent07Visible = true; prosseguir('content07')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>
	
	
	</v-card>
<!-- conteúdo 07a grafismos -->




<!-- conteúdo 07 -->
	<v-card 
	v-show="isContent07Visible"
	id="content07" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 v-card-conteudos_cont7" 
	style="z-index:4;"  
	>
		<v-row class="mx-auto mt-0">
			<v-col cols="12" md="6" align="right"  class="reveal fade-left">
				<v-img class="mx-auto mt-4" src="./img/tela_etica/cont7_img.png" />
			</v-col>
			<v-col cols="12" md="6" class="reveal fade-left mt-0" align-self="center">
				<h1 style="color:#2B7080; line-height:1.3em;" class="mt-6 font-weight-bold my-6 reveal fade-left">
					Política Institucional de combate ao Assédio Moral e Sexual, Importunação Sexual e Discriminação
				</h1>
				<p class="mt-6 reveal fade-left">
					Sempre comprometido com a saúde e bem-estar de seus colaboradores, clientes e demais públicos com quem se relaciona, o Einstein elaborou a Política de Prevenção e Enfrentamento ao Assédio Moral e Sexual, Importunação Sexual e à Discriminação. 
				</p>
				<p class="mt-3 reveal fade-left">
					O objetivo dessa Política é prevenir, enfrentar e intervir em casos de condutas de assédio moral e sexual e discriminação em seu ambiente, buscando eliminar esse tipo de conduta e definindo as boas práticas de convivência.
				</p>
				
				<p class="mt-3 reveal fade-left">
					<a style="text-decoration:none;" class="texto_azul" href="https://docinst.einstein.br/Search" target="_blank"><strong>CLIQUE AQUI</strong></a> PARA ACESSAR A POLITICA
				</p>
				
			</v-col><strong></strong>
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

<!-- conteúdo 08 -->
	<v-card 
	v-show="isContent08Visible" 
	id="content08" 
	width="100%"
	elevation="6"
	style="z-index:2;"
	class="mt-n8 rounded-lg pt-4 v-card-conteudos_cont8"
	>
		<v-img class="mx-auto mt-3 grade_header" src="./img/tela_etica/grade_header_azul.png" />
		
		
		<v-row class="mx-auto mt-0">
			<v-col cols="12" md="5" align="left" class="reveal fade-left">
				<p style="color:#5BC6E8;font-size:1.4em;text-transform:uppercase" class="font-weight-bold reveal fade-left">
					Canal de Denúncias
				</p>
				<p class="mt-3 reveal fade-left texto_branco">
					O Canal de Denúncias é o principal meio de comunicação para você relatar atos que possam infringir as diretrizes do Manual de Conduta Ética e as Políticas da Sociedade. 
				</p>
				<p class="mt-3 reveal fade-left texto_branco">
					As denúncias são recebidas por uma empresa externa especializada e independente, para garantir que as informações sejam confidenciais, encaminhadas com imparcialidade e registradas de forma anônima. 
				</p>
				<p class="mt-3 reveal fade-left texto_branco">
					Assista ao vídeo para saber como utilizar o <a class="texto_branco" href="https://www.canaldedenuncias.com.br/einstein/" target="_blank"><strong>Canal de Denúncias</strong></a>.
				</p>
				
				<v-card 
				elevation="0"
				style="z-index:8;border-radius:15px;"
				class="mt-4 pa-2 d-flex flex-column justify-center align-center cursor-pointer bg-transparent v-card_video"
				align="left"
				>	
				
				<v-row class="mx-auto">
					<v-col cols="12" md="2" align="left">
						<v-img class="mx-auto ico_video" src="./img/tela_etica/cont8_ico.png" />
					</v-col>
					<v-col cols="12" md="10" align="left">
						<p style="font-size:1.1em;text-transform:uppercase" class="font-weight-bold texto_branco">
							E lembre-se:
						</p>
						<p style="font-size:1.1em;text-transform:uppercase;color:#5BC6E8" class="font-weight-bold">
							Se alguma coisa não for bem... use o 0800-741-0004.	
						</p>
					</v-col>
				</v-row>
					
				</v-card>

			</v-col>
			<v-col cols="12" md="7" align="right" class="reveal fade-right">
				<!--Vimeo-->
				<v-container 
				class="mt-0 mb-10 pa-0"
				>
					<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/885695686?h=03eecda7cc&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:10px" title="4.3.1 - Ética e Compliance"></iframe></div>
				</v-container>
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
				:class="appStore.isDarkMode ? 'white-svg' : 'white-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-primary bg_escuro'"
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
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 footer" 
	style="z-index:1; margin-bottom:30px;"  
	>
		<v-img class="mx-auto mt-4 grade_header" src="./img/tela_etica/grade_header_branco.png" />
		<v-row class="mx-auto mt-6">
			<v-col cols="12" md="7">
				
			</v-col>
			<v-col cols="12" md="5">
				<p style="font-size:1.5em;" class="texto_branco">
					O Einstein não se faz sozinho. Estar em Compliance é responsabilidade de todos!
				</p>
				<p class="texto_branco mt-4">
					Tudo o que fazemos é feito pensando em você e seu papel é muito importante para nos ajudar a continuar sendo uma organização que promove relações éticas!
				</p>

				<v-card 
				elevation="2"
				width="100%"
				style="z-index:8;background-color:#1B1F45;border-radius:25px;margin-bottom:130px;"
				class="mt-4 pa-2 v-card_subs"
				align="center"
				>
					<p style="font-size:1.2em;text-transform:uppercase;letter-spacing:-1px"> 
						<a style="color:#62C9CE;text-decoration: none;" 
						href="http://www.Einstein.br/compliance" target="_blank"
						>
						<span class="mdi mdi-link-variant"></span> 
							www.Einstein.br/compliance
						</a> 
					</p>
				</v-card>
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
	import { useAnim, useScrollMonitor } from '../GlobalJs/useContentGlobalJs'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

	//!!! --> Defina o id do último bloco de conteúdo ou elemento da tela Ex: ref('#ultimoId')
	const lastElementIdOnScreen = ref('#content09')

	//Controle da visibilidade dos conteúdos
	const isContent01Visible = ref(true) // <-- Primeiro conteúdo inicia visível
	const isContent02Visible = ref(false)
	const isContent03Visible = ref(false)
	const isContent04Visible = ref(false)
	const isContent05Visible = ref(false)
	const isContent06Visible = ref(false)
	const isContent07aVisible = ref(false)
	const isContent07Visible = ref(false)
	const isContent08Visible = ref(false)
	const isContent09Visible = ref(false)
	const isTooltip1Visible = ref(false)
	const isTooltip2Visible = ref(false)
	const isTooltip3Visible = ref(false)
	
	
	//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)


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
.v-card-conteudos_cont3 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_etica/cont3_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont4 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_etica/cont4_fundo.png");
	background-size: cover;
}
.v-card-conteudos_cont6 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	margin-top:-218px!important;
}
.grafismos_cont7{
background-image: url("./img/tela_etica/cont7_grade.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 400px;
}
.v-card-conteudos_cont8 {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_etica/bg_video.svg");
	background-size: cover;
}
.cont6_title{
margin-top:200px!important;
}
.footer {
	padding-left: 6% !important;
	padding-right: 6% !important;
	background-image: url("./img/tela_etica/fundo_footer.png");
	background-size: cover;
	background-position: top right;
	margin-bottom:130px;
}
.box_dicas {
	border-radius: 25px;
}
.card_header {
	padding: 0 !Important;
	border-radius: 18px 18px 0px 0px !important;
	z-index: 10;
	background-color: #2B7080;
}
.header_text {
	position: absolute;
	top: 15%;
	left: 6%;
	width: 42%;
}
.grade_header {
	max-width: 70%;
}
.card-bg-img {
	background-image: url("./img/tela_etica/card1_fundo.png");
	background-size: cover;
}
.card-bg-img2 {
	background-image: url("./img/tela_etica/card2_fundo.png");
	background-size: cover;
}
.cards_icones{
height: 100px;
}
.ico_cards{
max-height: 80px;
}
.cont4_info{
width: 60%;
margin-top: 50px;
}
.v-cards_cont6{
height: 250px;
}
.v-card_video{
border: solid white 1px;
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.9rem;
	}
.tool-tip-1 {
    position: absolute !important;
    z-index: 6002 !important;
    top: 52%;
    left: 60.5%;
    transform: translate(-50%, -50%);
    width: 281px;
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
    top: 48%;
    left: 50.5%;
    transform: translate(-50%, -50%);
    width: 281px;
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
    top: 57%;
    left: 39.5%;
    transform: translate(-50%, -50%);
    width: 281px;
    line-height: normal;
}
.triangulo-tool-tip3 {
    position: absolute !important;
    top: -10%;
    left: 41%;
    z-index: 6005 !important;
    transform: rotate(-120deg) !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
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
.v-cards_cont6{
height: 300px;
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.9rem;
	}
.tool-tip-1 {
    top: 56%;
    left: 65%;
    width: 281px;
}
.triangulo-tool-tip1 {
    top: -10%;
    left: 41%;
}
.tool-tip-2 {
    top: 51%;
    left: 51%;
    width: 281px;
}
.triangulo-tool-tip2 {
    top: 89%;
    left: 41%;
}
.tool-tip-3 {
    top: 60%;
    left: 35.5%;
    width: 281px;
}
.triangulo-tool-tip3 {
    top: -10%;
    left: 41%;
}
}
@media screen and (max-width: 768px){
h2{
font-size:1.5em!important;
}
.cards_icones{
height: auto;
}
.v-cards_cont6{
height: auto;
}
.ico_video{
width: 20%
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8rem;
	}
.tool-tip-1 {
    top: 58%;
    left: 64%;
    width: 281px;
}
.triangulo-tool-tip1 {
    top: -10%;
    left: 41%;
}
.tool-tip-2 {
    top: 45%;
    left: 51%;
    width: 281px;
}
.triangulo-tool-tip2 {
    top: 89%;
    left: 43%;
}
.tool-tip-3 {
    top: 64%;
    left: 35.5%;
    width: 281px;
}
.triangulo-tool-tip3 {
    top: -10%;
    left: 43%;
}
}
@media screen and (max-width: 500px){
.cards_icones{
height: auto;
}
.v-cards_cont6{
height: auto;
}
.ico_video{
width: 20%
}
.tooltip_text{
	font-family: 'montserrat'!important;
	font-size:0.8rem;
	}
.tool-tip-1 {
    top: 62%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip1 {
    top: -10%;
    left: 65%;
}
.tool-tip-2 {
    top: 49%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip2 {
    top: 89%;
    left: 50%;
}
.tool-tip-3 {
    top: 64%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip3 {
    top: -10%;
    left: 24%;
}
}
</style>