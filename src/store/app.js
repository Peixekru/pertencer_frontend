// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({

		//Global Controllers

		//Rotas
		currentRoute: '/',
		nexRoute: [],
		navigationStart: false,

		//Unidades
		currentUnidadeNumber: 0,
		currentUnidadeTitle: '',
		nextUnidadeTitle: '',
		totalItems: [],

		//Objetos
		currentContent: {},
		currentContentNumber: 0,
		currentObjectIndex:[],
		currentContentTitle: "",
		currentSelectedObject: 0,

		isLastObject: false,
		objectRating: 0,
		objectContent: '',
		isFinished: false,

		//Próximo objeto (FooterBar)
		nextContent: {},
		nextContenNumber: 0,
		nextUnidadeNumber: 0,
		nextUnidadeTitle: '',
		allFinished: false,

		//Modais
		///
		accessModal: false,
		colorSelect: 0,
		///
		capsulaModal: false,
		///
		galleryModal: false,
		isZoomImg: false,
		selectedGallery: null,
		selectedImg: null,

		//Temas
		themeName: 'light',
		themeNumber: "0",
		isDarkMode: false,

		//Tamanhos e posições da tela e do app
		isMobile: false,
		isTablet: false,
		screenHeight: 0,
		screenWidth: 0,
		appHeight: 0,
		appWidth: 0,
		appScrol: 0,

		//Capsula do tempo
		sendDate: '',
		countdown: '',
		progress: 0,
		msg:'',
		capsulaCardKey: 0,
		capsulaModalKey: 0,

		//Galeria de fotos
		totalUsers: 0,
		totalGlobalImgs: 0,
		galleryCardKey: 0,
		gallerySendImageKey: 0,


		//Systema
		globalOverlay: false,

		//Global Msgs
		msgVisibilty: false,
		msgText: '',
		msgColor: ''
	}),

	actions: {
		//Global Msgs
		globalMsg (msg, color) {
			this.msgVisibilty = true
        	this.msgColor = color
        	this.msgText = msg
		},

		finishedContent (param) {
			this.isFinished  = param
		}
	}

})
