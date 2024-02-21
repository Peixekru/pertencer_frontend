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
/*
app.use(VueKeyboardTrapDirectivePlugin, {
    // snake-case name of the directive (without `v-` prefix)
    name: 'kbd-trap',

    // CSS selector for focusable elements
    focusableSelector: [
        ':focus',
        'a[href]:not([tabindex^="-"])',
        'area[href]:not([tabindex^="-"])',
        'input:not([disabled]):not([tabindex^="-"])',
        'select:not([disabled]):not([tabindex^="-"])',
        'textarea:not([disabled]):not([tabindex^="-"])',
        'button:not([disabled]):not([tabindex^="-"])',
        'iframe:not([tabindex^="-"])',
        '[tabindex]:not([tabindex^="-"])',
        '[contenteditable]:not([tabindex^="-"]):not([contenteditable="false"])',
        '[class*="focusable"]:not([disabled]):not([tabindex^="-"])',
    ].join(','),

    // CSS selector for elements that should not respond to roving key navigation
    rovingSkipSelector: [
        'input:not([disabled]):not([type="button"]):not([type="checkbox"]):not([type="file"]):not([type="image"]):not([type="radio"]):not([type="reset"]):not([type="submit"])',
        'select:not([disabled])',
        'select:not([disabled]) *',
        'textarea:not([disabled])',
        '[contenteditable]:not([contenteditable="false"])',
        '[contenteditable]:not([contenteditable="false"]) *',
    ].join(','),
    // CSS selector that will be applied in .roving.grid mode to exclude elements - must be a series of :not() selectors
    gridSkipSelector: [
        ':not([disabled])',
        ':not([tabindex^="-"])',
    ].join(''),

    // CSS selector for the elements that should be autofocused
    autofocusSelector: [
        '[autofocus]:not([disabled]):not([autofocus="false"])',
        '[data-autofocus]:not([disabled]):not([data-autofocus="false"])',
    ].join(','),

    // tabIndex value to be used when trap element has a tabIndex of -1 and has no `tabindex` attribute
    trapTabIndex: -9999,
});

*/

registerPlugins(app)

app.mount('#app')
