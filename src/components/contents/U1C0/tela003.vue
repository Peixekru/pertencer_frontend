<template>



		<!--Exemplo iFrame-->
		<v-container fluid
			class="pa-0"
		>
			<v-sheet
				color="transparent"
				elevation="6"
				height="700"
			>
				<iframe 
					id="iframeId1"
					width="100%" 
					height="700" 
					src="/iTela003/story.html"
					title="story"
					style="border: none"
					class="rounded-lg"
					>
				</iframe>
			</v-sheet>
		</v-container>

		
</template>

<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'


	const appStore = useAppStore();

    const finishedContent = () => {
		//Atualiza conteúdo
        appStore.finishedContent(true)
		//Atualiza barra de progresso
        useStartProgress()

    } 
	//Finaliza o conteúdo pelo Storylyne
    onMounted(() => {
		document.getElementById ("iframeId1").addEventListener ("click", finishedContent, false)
    })
	

</script> 


<style scoped>
@import '../GlobalStyles/contentGlobalStyles.css';


/* tela amigoh */
	
	.fundo_cont2{
	max-width: 100%;
	background-image: url("./img/tela003/fundo_cont2.png");
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
	
	@media screen and (max-width: 768px){
	.fundo_cont2{
	max-width: 100%;
	background-image: url("./img/tela003/fundo_cont2_mobile.png");
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
	
/* tela amigoh */



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
	background-image: url("./img/tela003/card_fundo.png");
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
	
	.btn_expande_conteudos {
	padding-left: 20px;
    padding-right: 20px;
    font-family: 'Roboto';
    font-size: 16px;
	letter-spacing: initial;
	}
	.texto_escuro{
	color:#1B1F45!important;
	}
	.texto_claro{
	color:#62C9CE!important;
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

	h5 {
	font-family: 'montserrat'!important;
	font-size:2rem!important;
	}
	h4 {
	font-size:1.7rem!important;
	line-height: 1.2em;
	}
	p {
	font-family: 'montserrat'!important;
	}
	.v-card-conteudos{
	padding-left:6%!important;
	padding-right:6%!important;
	}
	.v-card-conteudos_video{
	padding-left:6%!important;
	padding-right:6%!important;
	background-image: url("./img/tela003/bg_video.svg");
	background-size: cover;
	}
	.card_header{
	padding:0!Important;
	border-radius: 18px 18px 0px 0px!important;
	z-index: 10;
	}
	.header_text{
	position: absolute;
	top: 20%;
	left: 6%;
	width: 42%;
	}
	.logo_header{
	position: absolute;
	top: 30%;
	left: 80%;
	width: 15%;
	}
	.grade_header{
	max-width: 70%;
	}
	
	.box_dicas{
	border-radius: 20px;
	text-align:center;
	box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.16);
	width:45%;
	}
	
	.img_shadow{
	box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
	border-radius: 15px 40px 15px 15px !important;
	}
	.box_dicas_icon{
	font-size: 1.4rem;
	}
	.v-card-text {
	font-size:1rem!important;
	font-family: 'montserrat'!important;
	}
	
  
	
	.triangulo_v-card{
	font-size:6rem!important;
	color: #62C9CE!important;
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
	background-image: url("./img/tela003/fundo_footer.png");
	background-position: center;
	background-size: cover;
	padding-left:6%!important;
	padding-right:6%!important;
	margin-bottom:130px;
	}
	.footericons{
	font-size: 3rem;
	color: white;
	}
	.footericontext{
	font-family: 'montserrat'!important;
	font-weight: 600;
	font-size: 0.8rem;
	color: white!important;
	}
	.timeline_carroussel {
    grid-column-gap: 0px!important;
    width: 100%;
	}
	.v-timeline .v-timeline-divider__inner-dot {
    /* background: rgb(var(--v-theme-on-surface)); */
    border: 2px solid #62C9CE!important;
	}
	.v-carousel {
    height: auto!important;
	}
	.v-shit_carroussel{
	padding: 0px 0px 0px 0px!important;
	margin: 0px 0px 0px 0px!important;
	}
	.v-shit_interno_carroussel{
	width:50%;
    height:100%
	}
	.white-svg {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(81deg) brightness(150%) contrast(102%) !important;
}

		
		.content-slide {
        animation: slide; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 3s; /* don't forget to set a duration! */
    	}
		.bounceIn {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: bounceIn;
		}
		
		.fadeInRight {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: fadeInRight;
		}
		
		.animated.flip {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  backface-visibility: visible;
		  animation-name: flip;
		}

		.fadeInLeft {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: fadeInLeft;
		}
		.fadeInDown {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: fadeInDown;
		}
		.fadeIn {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: fadeIn;
		}
		.headShake {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-timing-function: ease-in-out;
		  animation-name: headShake;
		}
		
		.shakeY {
		  animation-duration: calc(var(--animate-duration) * 1.5);
		  animation-name: shakeY;
		}
		

	.show_mobile{
		display: none;
		}
	@media screen and (max-width: 1277px){
		.box_dicas{
		width:70%!important;
		}
	}
	@media screen and (max-width: 768px){
		.show_mobile{
		display: block;
		}
		.show_desktop{
		display: none;
		}
		.v-card-conteudos{
		padding-left:30px!important;
		padding-right:30px!important;
		}
		.header_text{
		position: absolute;
		top: 20%;
		left: 6%;
		width: 60%;
		}
		.logo_header{
		position: absolute;
		top: 30%;
		left: 65%;
		width: 25%;
		}
		.grade_header{
		max-width: 100%;
		}
		h5 {
		font-family: 'montserrat'!important;
		font-size:1.5rem!important;
		}
		h4 {
		font-size:1.3rem!important;
		}
		p {
		
		}
		.box_dicas{
		width:100%!important;
		}
		.gota_footer{
		width:40%
		}
		.v-shit_interno_carroussel{
		width:100%;
		height:100%
		}
		.footer{
		margin-bottom:115px!important;
		}
	}

</style>