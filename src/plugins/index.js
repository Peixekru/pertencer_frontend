/**
* plugins/index.js
*
* Automatically included in `./src/main.js`
*/

// Plugins
import { markRaw } from 'vue';
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'



// Inclui o router no pinia
pinia.use(({ store }) => {
	store.$router = markRaw(router)
});



export function registerPlugins (app) {
	loadFonts()
	app
	.use(vuetify)
	.use(pinia)
	.use(router)
}
