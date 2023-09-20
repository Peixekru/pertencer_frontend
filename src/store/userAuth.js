import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useAuthStore = defineStore('userAuth', {
    state: () => ({
        localServer: 'http://localhost:',
        fakeServer: 'https://fakebackend.onrender.com'
    }),

    getters: {
        //
    },

    actions: {
        async useLogin(path, data) {

            const appStore = useAppStore()

            try {
                //Envia user e passawor -> Armazena id e token
                const response = await axios.get( this.fakeServer + path, data );
                localStorage.setItem('userId', JSON.stringify(response.data.userId)); // Persistente
                sessionStorage.setItem('token', JSON.stringify(response.data.token)); // Persistente Parcial

                try { 
                    //Envia token -> Armazena dados 
                    const userId = JSON.parse(localStorage.getItem('userId'));
                    const token = JSON.parse(sessionStorage.getItem('token'));
                    const response = await axios.get( this.fakeServer + '/' + userId, token );

                    
                    appStore.appData = response.data; // Local
                    localStorage.setItem('localAppData', JSON.stringify(response.data)); // Persistente 

                    //Encaminha para home
                    this.$router.push('/home'); 

                    //Debug
                    console.log('Token recebido e enviado: ', token) 

                } catch (error) {
                    //Erro na rquisição de dados do usuário
                    console.error(error);
                }  

            } catch (error) {
                //Erro no login
                console.error(error);
            }
        
        }

    }

})

