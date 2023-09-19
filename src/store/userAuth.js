import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useAuthStore = defineStore('userAuth', {
    state: () => ({
        server: 'http://localhost:',
        fakeLoginServer: 'https://fakebackend.onrender.com'
    }),

    getters: {
        //
    },

    actions: {
        async useLogin(port, path, data) {

            const appStore = useAppStore()

            try {
                //Envia user e passawor -> Armazena id e token
                //const response = await axios.get( this.server + port + path, data );
                const response = await axios.get( this.fakeLoginServer + path, data );
                sessionStorage.setItem('userInfos', JSON.stringify(response.data)); // Persistente

                try { 
                    //Envia token -> Armazena dados 
                    const userInfos = JSON.parse(sessionStorage.getItem('userInfos'));
                    //const response = await axios.get( this.server + '3006' + '/' + userInfos.userId, userInfos.token );
                    const response = await axios.get( this.fakeLoginServer + '/' + userInfos.userId, userInfos.token );
                    appStore.appData = response.data; // Local
                    localStorage.setItem('localAppData', JSON.stringify(response.data)); // Persistente 

                    //Encaminha para home
                    this.$router.push('/home'); 

                    //Debug
                    console.log('Token recebido e enviado: ', userInfos.token) 

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

