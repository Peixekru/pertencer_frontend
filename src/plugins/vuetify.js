import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
//import '@/styles/main.scss'


//import '@fortawe//some/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { createVuetify } from 'vuetify'
//import { aliases, fa } from 'vuetify/iconsets/fa'

const darkMono = {
	dark: true,
	colors: {
		primary: "#d1d1d1",
		secondary: "#434343",

		background: "#000",
		surface: "#212121",

		info: "#616161",
		accent: '#3c3c3c',

		error: "#333",
		success: "#2f2f2f",
		warning: "#666",
	},
};

const lightMono = {
	dark: false,
	colors: {
		primary: "#2f2f2f",
		secondary: "#a3a3a3",

		background: "#bdbdbd",
		surface: '#F4F4F4',

		info: "#9a9a9a",
		accent: '#575757',

		error: "#333",
		success: "#2f2f2f",
		warning: "#666",
	},
};


/* Export vuetify */
export default createVuetify({

	/*
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
		fa,
		},
	},
	*/
	
	theme: {
		defaultTheme: "light",
		themes: {

		darkMono,
		lightMono,


		light: {
			colors: {
			primary: "#1B1F45",
			secondary: "#5BC6E8",
			surface: '#F4F4F4',
			info: "#62C9CE",
			accent: '#2B7080',
			}
		},

		dark: {
			colors: {
			primary: "#5BC6E8",
			secondary: "#004F81",
			surface: '#1b1b1e',
			info: "#62C9CE",
			accent: '#2B7080',
			}
		},

		},
	},
});