// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/default/Default.vue'),
		
		children: [
		{
			path: '',
			name: 'Login',
			component: () => import('@/views/LoginView.vue'),
		},
		{
			path: '/welcome',
			name: 'welcome',
			component: () => import('@/views/Welcome.vue')
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/unidade',
			name: 'unidade',
			component: () => import('@/views/UnidadeView.vue')
		},
		{
			path: '/conteudo',
			name: 'conteudo',
			component: () => import('@/views/ConteudoView.vue')
		}
		],
	},
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	//retorna o scroll para o início quando quando a rota atual é modificada
	scrollBehavior(savedPosition) {
		if (savedPosition) {
		return savedPosition
		} else {
		return { 
			top: 0,
			behavior: 'smooth'
		}
		}
	},
})

export default router
