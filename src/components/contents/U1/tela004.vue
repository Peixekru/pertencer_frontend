<template>
	<!-- header VOLUNTARIADO -->
	<v-card 
	width="100%" 
	elevation="6"
	class="card_header mx-auto rounded-lg pa-6"
	>
		<v-img class="show_desktop" src="./img/tela_voluntariado/header.png" />
		<v-img class="show_1277" src="./img/tela_voluntariado/header.png"/>
		<v-img class="show_mobile" src="./img/tela_voluntariado/header_mob.png" />
		<v-img src="./img/tela_voluntariado/header_text.svg" class="header_text"
			title="VOLUNTARIADO EINSTEIN. Uma história de amor. A história do voluntariado Einstein se baseia na força e na persistência de um grupo de pessoas unidas pelo amor, dedicação e profissionalismo com o propósito de promover bem-estar e transformação social." />
	</v-card>
	<!-- header -->
	
	<!-- conteúdo 01 -->
	<v-card
	v-show="isContent01Visible"
	id="content01" 
	width="100%" 
	elevation="6"
	style="z-index:5;" 
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header.png" />
		<v-card-text class="pt-10 pl-0 pr-0">

			<h1 class="mt-n10 font-weight-bold text-primary my-6  reveal fade-left">
				O Voluntariado em poucas palavras:
			</h1>

			<v-card class="box_dicas pl-0 pr-0 reveal fade-bottom">
				<v-card-text>
					<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Clique nas cartas abaixo para saber
					mais.
				</v-card-text>
			</v-card>
		</v-card-text>
		
		<v-row class="mt-2">

			<!--Card 01-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
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
							src="./img/tela_voluntariado/card_1_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Quem somos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Nosso grupo é formado por mais de 600 pessoas com idades que vão de 15 a mais de 80 anos
								trabalhando incansavelmente para levar esperança para quem precisa de atenção e
								conforto.			
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 02-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard02Visible ? 'card-bg-img' : '' "
					@click="isCard02Visible = !isCard02Visible"
					>
						<template v-if="!isCard02Visible">
							<v-img 
							src="./img/tela_voluntariado/card_2_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Nosso propósito
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Atuamos diretamente para a transformação social, a geração de conhecimento e a
								humanização das pessoas atendidas constituindo, assim, uma referência em cidadania,
								responsabilidade social e amor ao próximo.			
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 03-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard03Visible ? 'card-bg-img' : '' "
					@click="isCard03Visible = !isCard03Visible"
					>
						<template v-if="!isCard03Visible">
							<v-img 
							src="./img/tela_voluntariado/card_3_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Alguns números
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Só para dar um exemplo, em 2022, o Voluntariado realizou 209.476 atendimentos.		
							</v-card-text>
						</template>
					</v-sheet>
				</v-card>
			</v-col>

			<!--Card 04-->
			<v-col cols="12" sm="6" md="3">
				<v-card 
				height="380"
				elevation="4"
				class="mx-auto rounded-lg reveal fade-in"
				>
					<v-sheet 
					height="100%" 
					align="center" 
					color="transparent"
					class="d-flex flex-column justify-center align-center cursor-pointer"
					:class="!isCard04Visible ? 'card-bg-img' : '' "
					@click="isCard04Visible = !isCard04Visible"
					>
						<template v-if="!isCard04Visible">
							<v-img 
							src="./img/tela_voluntariado/card_4_icon.png" 
							width="100"
							max-height="100"
							class="animate__animated animate__fadeInDown"
							/>
							<h5 
							class="text-h5 font-weight-bold py-6 animate__animated animate__fadeInDown animate__delay-0.5s"
							:class="appStore.isDarkMode ? 'text-secondary' : 'text-primary'"
							>
								Onde atuamos
							</h5>
							<v-icon color="white" 
							icon="mdi-gesture-double-tap" 
							size="50"
							class="animate__animated animate__fadeInDown animate__delay-0.7s"
							/>
						</template>

						<template v-else>
							<v-card-text class="d-flex align-center animate__animated animate__fadeInUp">
								Estamos presente em 72 setores e atuamos efetivamente em cinco frentes: Unidade Morumbi,
								Unidades Externas, Programa Einstein na Comunidade de Paraisópolis (PECP), Residencial
								Israelita Albert Einstein (RIAE) e Hospitais Municipais M’Boi Mirim e Vila Santa
								Catarina. 		
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
				class=" mt-8 mb-4 mx-auto"
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
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
	v-show ="isContent02Visible" 
	id="content02" 
	width="100%"
	elevation="6"
	style="z-index:4"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header.png" />
		<v-row class="mx-auto mt-n10">
			<v-col cols="12" md="9">
				<v-card-text class="pl-0 pr-0">

					<h2 class=" font-weight-bold text-primary my-6 reveal fade-left">
						Era uma vez...
					</h2>
					<p class="mt-4 reveal fade-left">
						<strong>Toda história tem um começo.</strong>
					</p>
					<p class="mt-4 reveal fade-left">
						O Voluntariado Einstein iniciou suas atividades na mesma época em que foi fundado o Hospital
						Israelita Albert Einstein, lá em 1959. São, portanto, mais de <strong>60 anos de atuação</strong>.
					</p>
					<p class="mt-4 reveal fade-left">
						Vamos conhecer um pouco dessa história?
					</p>
				</v-card-text>
			</v-col>
			<v-col cols="12" md="3" aligh-self="center" align="center">
				<v-img class="reveal fade-right ilus_era_uma_vez" src="./img/tela_voluntariado/ilustra_eraumavez.svg" />
			</v-col>
		</v-row>
		<v-card class="box_dicas pl-0 pr-0 my-10  reveal fade-bottom">
			<v-card-text>
				<span class="mdi mdi-gesture-double-tap box_dicas_icon"></span> Navegue pelas datas, ou pelas setas
				abaixo.
			</v-card-text>
		</v-card>
		
		<v-card elevation="3" width="100%" class="mx-auto rounded-lg reveal fade-bottom">

			<!--Timeline-->

			
				<v-sheet
				color = "transparent"
				class="mt-4 mx-auto my-0"
				:max-width="
				appStore.screenWidth < 600 ? 300 :
				appStore.screenWidth > 600 && appStore.screenWidth < 700  ? 400 : 
				appStore.screenWidth > 700 && appStore.screenWidth < 800  ? 500 : 
				appStore.screenWidth > 800 && appStore.screenWidth < 960  ? 600 : 
				appStore.screenWidth > 960 && appStore.screenWidth < 1280 ? 660 : 
				1100"
				>
			
					<v-slide-group
					center-active
					v-model="timelineSelect"
					show-arrows = "always"
					>

					<v-sheet
						height = "1"
						width = "1250"
						color = "info"
						class = 'line-pos'
					/>

						<v-slide-group-item
						v-for="i in timeLineNum.length"
						:key="i"
						v-slot="{ isSelected }"
						>
							<v-btn
							class="ma-2"
							elevation = 0
							rounded
							:color="isSelected ? 'primary' : 'info'"
							:class = "!isSelected ? 'text-primary' : ''"
							@click="timelineSelect = i - 1"
							>
							{{ timeLineNum[i - 1]}}
							</v-btn>
						</v-slide-group-item>
					</v-slide-group>
				</v-sheet>


<!--
			<v-timeline class="timeline_carroussel" direction="horizontal">


				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1959</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1967</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1969</span>
					</template>
				</v-timeline-item> 		

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1971</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1997</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1998</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">1999</span>
					</template>
				</v-timeline-item>			

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2001</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2000</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2004</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2010</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2013</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2015</span>
					</template>
				</v-timeline-item>

				<v-timeline-item fill-dot class="mb-12" dot-color="#62C9CE" size="large">
					<template v-slot:icon>
						<span style="color:white;font-size:0.8em">2022</span>
					</template>
				</v-timeline-item>

			</v-timeline>
-->


			<!--Carousel-->
			<v-carousel 
			v-model="timelineSelect"
			:show-arrows="false"
			hide-delimiters color="primary" 
			:continuous="false"
			>
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image01.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p>
									Foi em 1959 que a história teve início. Algumas esposas de médicos e empresários se uniram para ajudar na construção do Hospital Israelita Albert Einstein. O grupo tinha como objetivo colaborar na obtenção de recursos, sendo responsável por organizar eventos e bazares para auxiliar na construção do Hospital, tendo grande relevância e representatividade. 
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>


				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image02.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 1967, o Departamento Feminino, já ampliado, passou a ser o Corpo de Voluntárias.
 								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image03.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 1969, foi inaugurado o Ambulatório de Pediatria Assistencial, com a finalidade de prestar assistência médica e social às pessoas que não tinham recursos.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image04.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									No dia 28 de julho de 1971 houve a inauguração oficial do Hospital e o Corpo de Voluntárias passou a se denominar Departamento de Voluntárias.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image05.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 1997, a Pediatria Assistencial precisou introduzir ações voltadas para a prevenção de doenças e promoção da saúde, pois teve um alto índice de reinternações devido a problemas gastrointestinais e doenças do aparelho respiratório. Com isso, foi idealizado o Programa Einstein na Comunidade de Paraisópolis (PECP), um dos principais programas de assistência da Sociedade Beneficente Israelita Brasileira Hospital Albert Einstein e de seu Departamento de Voluntárias.  
 
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image06.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 1998, foi inaugurado o Programa Einstein na Comunidade de Paraisópolis, o PECP, marcando o início do trabalho voluntário nesta localidade.
								</p>
								<p class="padding-left:30px; mb-4">
									Assista ao vídeo para saber mais sobre o PECP.
								</p>
								
								<v-dialog width="80%">
								  <template v-slot:activator="{ props }">
								
								<v-btn 
								v-bind="props"
								type="button"
								density="comfortable"
								size="large"
								rounded="pill"
								class=""
								:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
								> 
									<span class="mdi mdi-video-outline"></span> Assistir Vídeo
								</v-btn>
								
								  </template>

								  <template v-slot:default="{ isActive }">
									
									  
									  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/885695414?h=5f1b696fef&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 10px" title="2.4.1 - Voluntariado"></iframe></div>


									
								  </template>
								</v-dialog>
								
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image07.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 1999, os homens começaram a trabalhar no Voluntariado do Einstein e, por isso houve uma mudança do nome para Departamento de Voluntários. Nesse mesmo período, foi renovada a identidade visual da Sociedade e criada a logomarca do Voluntariado.
 
								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image08.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2001, o PECP passou a ser conhecido como “Complexo Telma Sobolh” e ganhou novas instalações para o atual Ambulatório de Pediatria, uma quadra poliesportiva e a Casa da Criança.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image09.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									2002 foi um marco importante da profissionalização do Voluntariado Einstein, quando se tornou o primeiro Voluntariado da América Latina a conquistar a certificação ISO 9001.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image10.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2004, o Departamento de Voluntários integrou o Voluntariado já existente do Residencial Israelita Albert Einstein (RIAE) e passou a prestar seus serviços à entidade que, além de oferecer abrigo aos idosos da comunidade, promoveu uma série de atividades de enriquecimento social e cultural, oferecendo opções de lazer e entretenimento e proporcionando um cotidiano saudável aos que ali residiam.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image11.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em fevereiro de 2010, atendendo à solicitação do Instituto Israelita de Responsabilidade Social, o Voluntariado ampliou sua atuação junto à área de Parcerias Públicas, inaugurando o Setor de Visitação no Hospital M’ Boi Mirim. Em agosto do mesmo ano, dois novos espaços foram patrocinados pelo Voluntariado: uma brinquedoteca para as crianças internadas na pediatria do hospital e salas de aula para capacitação e promoção de conhecimento tanto para os profissionais da Instituição, como para a população local.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image12.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2013, as Unidades Externas da Instituição (Ibirapuera, Perdizes e Alphaville) começaram a fazer parte das atividades desenvolvidas pelo Departamento com a missão de contribuir com os colaboradores no processo de humanização dos pacientes.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image13.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2015, o diretor do Hospital Municipal Vila Santa Catarina, antes mesmo de sua inauguração, entrou em contato com a diretoria do Voluntariado para solicitar que os voluntários atuassem no hospital. Logo após a inauguração, o Voluntariado iniciou seu trabalho no setor de Transplantes, seguido de Visitação aos pacientes e acompanhantes, promovendo a humanização por meio de ações sociais.

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image14.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2022, o Departamento de Voluntários expandiu a sua área de atuação assumindo a gestão do Voluntariado do Hospital Municipal de Aparecida de Goiânia (HMAP).

								</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-carousel-item>
				
				<v-carousel-item>
					<v-sheet color="transparent" width="100%" height="100%" class="d-flex justify-end px-8 py-8">
						<v-row justify="center" align="center">
							<v-col cols="12" md="6">
								<v-img src="./img/tela_voluntariado/image15.png" />
							</v-col>
							<v-col style="padding-right: 60px;" cols="12" md="6">
								<p class="padding-left:30px;">
									Em 2023, são mais de 60 anos de atuação e o grupo atualmente é formado por quase 600 voluntários. Suas ações se fazem presentes em diversas iniciativas educativas voltadas para a promoção da saúde e prevenção de doenças, além do incentivo à geração de renda.
								</p>
								<p class="padding-left:30px;">
									Assim é o Voluntariado do Einstein, sempre contribuindo para a saúde física, mental e social da população de São Paulo!
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
				:class="appStore.isDarkMode ? 'white-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-secondary bg_escuro' : 'text-secondary bg_claro'"
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
	style="z-index:3; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	class="mt-n4 mx-auto rounded-lg pt-4 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />
		<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">

			<h1 class="font-weight-bold mt-0 texto_azul">
				Nossa marca: os aventais cor-de-rosa
			</h1>
			<p style="color:#DC7689" class="mt-0">
				<strong>Os aventais rosa: é assim que nos identificamos!</strong>
			</p>
			<p class="mt-4 texto_preto">
				Qualquer pessoa que conhece as unidades do Einstein, já viu circulando mulheres e homens com aventais cor-de-rosa ou camisetas brancas com a marca do Voluntariado. São pessoas unidas pelo propósito de fazer a diferença e transformar o ambiente hospitalar em um lugar mais acolhedor.
			</p>
		</v-card-text>
		
		<v-row class="">
			<v-col cols="12" md="12">
				<v-img class="show_desktop" height="430" src="./img/tela_voluntariado/img_nossa_marca.png" />
				<v-img class="show_1277" height="300" src="./img/tela_voluntariado/img_nossa_marca.png" />
				<v-img class="show_mobile" height="200" src="./img/tela_voluntariado/img_nossa_marca.png" />
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

	<!--Grafisrmos "Triangulo" do conteúdo 3 -->
	<v-sheet 
	v-if="isContent03Visible" 
	color="transparent"
	class="d-flex justify-center mt-n8 mb-8"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-sheet>

	<!-- conteúdo 03 -->
	
	<!-- conteúdo 04 -->
	<v-card 
	v-show="isContent04Visible"
	id="content04" 
	width="100%" 
	elevation="6"
	style="z-index:3; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	class="mt-n4 mx-auto rounded-lg pt-0 v-card-conteudos" 
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />
		<v-card-text class="pl-0 pr-0 mt-n10 reveal fade-left">

			<h1 class="font-weight-bold my-6 texto_azul">
				Onde atuamos
			</h1>
			<p class="mt-4 texto_preto">
				<strong>Unidade Morumbi</strong>
			</p>
		</v-card-text>

		<v-row class="mt-n0 reveal fade-bottom">

			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos01.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos02.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos03.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				A Unidade Morumbi ampliou o atendimento em medicina preventiva e reabilitação, com a criação de infraestrutura ambulatorial e atendimento integrado e multiprofissional. E lá os Voluntários estão sempre a postos para dar todo o apoio que os pacientes necessitam. 

			</p>
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent05Visible = true; prosseguir('content05')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!--Grafisrmos "Triangulo" do conteúdo 5-->
	<v-container 
	v-if="isContent04Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	<!-- conteúdo 04 -->

	<!-- conteúdo 05 -->
	<v-card 
	v-show="isContent05Visible"
	id="content05" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Unidades Externas: Alphaville, Ibirapuera e Perdizes</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img src="./img/tela_voluntariado/onde_atuamos04.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img src="./img/tela_voluntariado/onde_atuamos05.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img src="./img/tela_voluntariado/onde_atuamos06.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Os voluntários têm como objetivo amenizar os efeitos do tratamento com uma palavra de conforto e
				esperança, oferecendo suporte aos pacientes e acompanhantes, além de contribuir com o trabalho da equipe
				multiprofissional.
			</p>
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent06Visible = true; prosseguir('content06')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 05 -->
	<!-- conteúdo 06 -->
	
	<!--Grafisrmos "Triangulo" do conteúdo 6-->
	<v-container 
	v-if="isContent05Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	
	<v-card 
	v-show="isContent06Visible"
	id="content06" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Programa Einstein na Comunidade de Paraisópolis</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos07.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos08.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos09.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Os voluntários atuam em conjunto com a equipe profissional do PECP para oferecer aos moradores da comunidade atividades relacionadas à saúde e a educação, com o propósito de promover a transformação social e a geração de conhecimento.
			</p>
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent07Visible = true; prosseguir('content07')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 06 -->
	
	<!-- conteúdo 07 -->
	
	<!--Grafisrmos "Triangulo" do conteúdo 7-->
	<v-container 
	v-if="isContent06Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	
	<v-card 
	v-show="isContent07Visible"
	id="content07" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Residencial Israelita Albert Einstein</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos10.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos11.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos12.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Com mais de 80 anos de existência, o RIAE está localizado na Vila Mariana e acolhe cerca de 100 idosos da comunidade judaica, com o objetivo de cuidar e preservar sua história e preceitos.
			</p>
			<p class="mt-4 texto_preto">
				Os voluntários auxiliam na promoção da socialização, bem-estar e entretenimento dos idosos, oferecendoqualidade de vida e acolhimento aos residentes.
			</p>
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent08Visible = true; prosseguir('content08')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 07 -->
	
		<!-- conteúdo 08 -->
	
	<!--Grafisrmos "Triangulo" do conteúdo 6-->
	<v-container 
	v-if="isContent07Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	
	<v-card 
	v-show="isContent08Visible"
	id="content08" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Hospitais Municipais M’Boi Mirim</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos13.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos14.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos15.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Em fevereiro de 2010, o Voluntariado ampliou sua atuação junto à área de Parcerias Públicas do Einstein contribuindo com à equipe multiprofissional e pacientes do Hospital M’Boi Mirim. 
			</p>
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
				:class="appStore.isDarkMode ? 'icon-dark-blue-svg' : 'icon-dark-blue-svg'" 
				/>

				<v-btn 
				type="button"
				density="comfortable"
				size="large"
				rounded="pill"
				class=""
				:class="appStore.isDarkMode ? 'text-primary bg_claro' : 'text-secondary bg_claro'"
				@click="isContent09Visible = true; prosseguir('content09')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 08 -->
	
	<!-- conteúdo 09 -->
	
	<!--Grafisrmos "Triangulo" do conteúdo 9-->
	<v-container 
	v-if="isContent09Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	
	<v-card 
	v-show="isContent09Visible"
	id="content09" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<p class="mt-4">
				<strong>Hospital Vila Santa Catarina</strong>
			</p>
		</v-card-text>
		<v-row class="mt-n0 reveal fade-bottom">
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos16.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos17.png" />
			</v-col>
			<v-col cols="12" md="4">
				<v-img class="fadeInDown" src="./img/tela_voluntariado/onde_atuamos18.png" />
			</v-col>
		</v-row>
		<v-card-text class="pl-0 pr-0 mt-0 reveal fade-left">
			<p class="mt-4 texto_preto">
				Desde 2015, ano de inauguração do hospital, o Voluntariado atua no Vila Santa Catarina com o propósito de promover a humanização e levar alegria e esperança aos pacientes. 
			</p>
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
	
	<!-- conteúdo 10 -->
	
	<!--Grafisrmos "Triangulo" do conteúdo 10-->
	<v-container 
	v-if="isContent10Visible" 
	class="d-flex justify-center mt-n12 mb-4"
	>
		<i style="color:#62C9CE; font-size:4rem;" class="mdi-triangle mdi-rotate-180 mdi v-icon v-icon--size-x-large"
			aria-hidden="true"></i>
	</v-container>

	
	<v-card 
	v-show="isContent10Visible"
	id="content10" 
	width="100%" 
	elevation="6"
	class="mt-n4 mx-auto rounded-lg pt-0 pl-16 pr-16 content-slide" 
	style="z-index:2; background-image: radial-gradient(#C4E8E1, #62C9CE);"
	>
		<v-img class="mx-auto grade_header" src="./img/tela_voluntariado/grade_header_branco.png" />

		<v-card-text class="pl-0 pr-0 mt-n10 texto_preto reveal fade-left">
			<h1 class="font-weight-bold texto_azul">
				Patrocínios e doações
			</h1>
		</v-card-text>
		<v-row class="mt-n0">
			<v-col cols="12" md="6" class=" reveal fade-left">
				<v-img src="./img/tela_voluntariado/img_patrocinio.png" />
			</v-col>
			<v-col cols="12" md="6">
				<v-card-text class="pl-0 pr-0 mt-0 reveal fade-right">
			<p class="mt-4 texto_preto">
				O Voluntariado tem forte atuação na angariação de verba para os projetos sociais do Hospital, tanto por meio da realização de bazares, vendas de produtos e outras iniciativas, como através da captação de doações. 
			</p>
			<p class="mt-4 texto_preto">
				Os valores arrecadados têm um impacto positivo nas ações de responsabilidade social do Hospital e envolvem patrocínio de projetos, reformas de infraestrutura, educação e capacitação, pesquisa e inovação, além de compra de equipamentos para melhoria do atendimento aos pacientes. 
			</p>
		</v-card-text>
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
				@click="isContent11Visible = true; prosseguir('content11')"
				> 
					Prosseguir	
				</v-btn>
			</v-sheet>
		</v-container>

	</v-card>

	<!-- conteúdo 10 -->
	
	<!-- conteúdo 11 footer -->
	<v-card 
	v-show="isContent11Visible"
	id="content11" 
	width="100%"
	class="mt-n4 mx-auto rounded-lg pt-0 footer"
	style="z-index:1; background-color: #dc7689;"  
	>

		<v-container fill-height class="my-10">
			<v-row>
				<v-col cols="12" md="5">

				</v-col>
				<v-col cols="12" md="7">
					<v-row style="text-align:center">
						<v-col cols="12" md="4">

						</v-col>
						<v-col cols="12" md="4">
							<img class="gota_footer reveal fade-in" src="./img/tela_voluntariado/gota_footer.svg">
						</v-col>
						<v-col cols="12" md="4">

						</v-col>
					</v-row>

					<v-row >
						<v-col cols="12" md="12">
							<v-img class=" reveal fade-right" src="./img/tela_voluntariado/texto_footer.svg"
								title="O Voluntariado continua seu trabalho, levando uma gota Einstein a cada pessoa e, com isso, é capaz de transformar sonhos em realidade e contribuir para a busca de uma sociedade mais justa e igualitária para todos os indivíduos." />
						</v-col>
					</v-row>
					<v-row style="text-align:center" class=" reveal fade-bottom">
						<v-col cols="12" md="4" class="mx-auto">
							<span class="footericons mdi mdi-instagram"></span>
							<span class="footericons mdi mdi-facebook"></span>
							<span class="footericons mdi mdi-youtube"></span>
							<p class="footericontext">/voluntarioseinstein</p>
						</v-col>
						<v-col cols="12" md="4" style="text-align:center">
							<span class="footericons mdi mdi-phone"></span>
							<p class="footericontext">(11) 2151 3580</p>
						</v-col>
						<v-col cols="12" md="4" style="text-align:center">
							<span class="footericons mdi mdi-web"></span>
							<p class="footericontext">voluntarios.einstein.br</p>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>

	</v-card>

	<!-- conteúdo 11 -->

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
	const lastElementIdOnScreen = ref('#content11')

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

	//Controle dos cards do conteúdo 01
	const isCard01Visible = ref(false)
	const isCard02Visible = ref(false)
	const isCard03Visible = ref(false)
	const isCard04Visible = ref(false)

	//Linha do tempo
	const timeLineNum = ref([
		1959, 1967, 1969, 1971, 1997, 1998, 1999, 2001, 2000, 2004, 2010, 2013, 2015, 2022, 2023
	])
	//Controla a seleção da linha do tempo e do carrossel
	const timelineSelect = ref(0)


	const teste = () => {
		console.log(timelineSelect)
	}


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

.v-card--reveal {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 30%;
	font-size: 1em;
}

.v-card--reveal2 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 25%;
	font-size: 1em;
}

.v-card--reveal3 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 50%;
	font-size: 1em;
}

.v-card--reveal4 {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	text-align: center;
	padding-top: 10%;
	font-size: 1em;
}

.card-bg-img {
	background-image: url("./img/tela_voluntariado/card_fundo.png");
	background-size: cover;
}

.col_card_trans_pri {
	margin: 0px 4px 0px -12px;
}

.col_card_trans {
	margin: 0px 4px 0px 0px;
}

.col_card_trans_ult {
	margin: 0px 0px 0px 0px;
}

.card_icon {
	height: 25%;
	position: relative;
	top: 100px;
}

.card_text {
	text-align: center;
	font-size: 1.5em !important;
	position: relative;
	top: 120px;
	color: #004F81 !important;
}

.btn_icon_card {
	font-size: 3rem !important;
	position: relative;
	top: 100px;
}

.v-card-actions .v-btn {
	padding: 0 8px;
	position: absolute;
	top: 0px;
	left: 0;
}

.btn_expande_conteudos {
	padding-left: 20px;
	padding-right: 20px;
	font-family: 'Roboto';
	font-size: 16px;
	letter-spacing: initial;
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
	background-image: url("./img/tela_voluntariado/gota_azul.png");
	background-size: contain;
}

.verde-svg {
	background-image: url("./img/tela_voluntariado/gota_verde.png");
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

.line-pos{
	position: absolute;
	top: 25px
}

.footer {
	background-image: url("./img/tela_voluntariado/fundo_footer.png");
	background-size: cover;
	padding-left: 6% !important;
	padding-right: 6% !important;
	margin-bottom: 30px;
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
@media screen and (max-width: 1277px){
	.ilus_era_uma_vez{
	width:90%;
	}
	}
	@media screen and (max-width: 960px){
	.ilus_era_uma_vez{
	width:60%;
	}
	}
@media screen and (max-width: 768px){
	.ilus_era_uma_vez{
	width:50%;
	}
	}

</style>