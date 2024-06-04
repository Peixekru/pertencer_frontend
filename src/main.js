// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//import { VueKeyboardTrapDirectivePlugin } from '@pdanpdan/vue-keyboard-trap';

// Plugins
import { registerPlugins } from '@/plugins'

// Animate CSS
import 'animate.css';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
