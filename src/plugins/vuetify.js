import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

//import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { createVuetify } from 'vuetify'
//import { aliases, fa } from 'vuetify/iconsets/fa'


/* Custom Thems */
const customDarkTheme = {
	dark: true,
	colors: {
		background: "#15202b",
		surface: "#15202b",
		primary: "#00FFCD",
		secondary: "#03dac6",
		error: "#ff5722",
		info: "#2196F3",
		success: "#4caf50",
		warning: "#fb8c00",
	},
};

const customLightTheme = {
	dark: false,
	colors: {
		background: "#bdbdbd",
		surface: "#e0e0e0",
		primary: "#004F99",
		secondary: "#00ccff",
		error: "#ffcc00",
		info: "#2196F3",
		success: "#4caf50",
		warning: "#fb8c00",
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
		customDarkTheme,
		customLightTheme,

		light: {
			colors: {
			primary: "#004F81",
			secondary: "#5BC6E8",
			}
		},

		dark: {
			colors: {
			primary: "#5BC6E8",
			secondary: "#004F81",
			}
		},

		},
	},
});