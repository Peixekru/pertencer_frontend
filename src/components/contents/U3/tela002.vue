<template>
	
	<h1 class="text-white">Pg Oculta</h1>

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
	//Controla os slides do carousel01
	const carousel01 = ref(0)
	
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
	top: 18%;
	left: 6%;
	width: 100%;
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
    top: 57%;
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
    top: 54%;
    left: 51%;
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
    top: 60%;
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
	.btn-left {
	position: absolute;
	z-index: 2000;
	top: 50%;
	left: 1%;
	transform: translate(0, -50%);
}

.btn-right {
	position: absolute;
	z-index: 2000;
	top: 50%;
	right: 1%;
	transform: translate(0, -50%);
}
.triangulo_cards{
position:relative;
left:50%;
top:-8px
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
    top: 59%;
    left: 64%;
    width: 281px;
}
.triangulo-tool-tip1 {
    top: -10%;
    left: 41%;
}
.tool-tip-2 {
    top: 56%;
    left: 51%;
    width: 281px;
}
.triangulo-tool-tip2 {
    top: 89%;
    left: 41%;
}
.tool-tip-3 {
    top: 62%;
    left: 35.5%;
    width: 281px;
}
.triangulo-tool-tip3 {
    top: -10%;
    left: 41%;
}
.header_text {
	position: absolute;
	top: 18%;
	left: 6%;
	width: 100%;
}
.cards_icones{
height: 140px;
}
}
@media screen and (max-width: 950px){
.header_text {
	position: absolute;
	top: 18%;
	left: 6%;
	width: 80%;
}
.show_desktop{
display:none
}
.show_1277{
display:none
}
.show_mobile{
display:block
}
.selo_mobile{
    width: 15%;
    position: absolute;
    top: 10px;
    right: 10px;
}
.cards_icones{
height: auto;
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
    top: 63%;
    left: 64%;
    width: 281px;
}
.triangulo-tool-tip1 {
    top: -10%;
    left: 41%;
}
.tool-tip-2 {
    top: 55%;
    left: 51%;
    width: 281px;
}
.triangulo-tool-tip2 {
    top: 89%;
    left: 43%;
}
.tool-tip-3 {
    top: 67%;
    left: 35.5%;
    width: 281px;
}
.triangulo-tool-tip3 {
    top: -10%;
    left: 43%;
}
.header_text {
	position: absolute;
	top: 18%;
	left: 6%;
	width: 85%;
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
    top: 30%;
    left: 65%;
}
.tool-tip-2 {
    top: 58%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip2 {
    top: 60%;
    left: 50%;
}
.tool-tip-3 {
    top: 64%;
    left: 50%;
    width: 90%;
}
.triangulo-tool-tip3 {
    top: 30%;
    left: 24%;
}
.header_text {
	position: absolute;
	top: 18%;
	left: 6%;
	width: 90%;
}
}
</style>