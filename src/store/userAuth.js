import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useAuthStore = defineStore('userAuth', {
    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        serverUrl: 'http://www.einsteinpertencer.com.br:3000/login'
    }),

    getters: {
        //
    },

    actions: {
        async useLogin(data) {

            //console.log(data)

            const appStore = useAppStore()

            let self = this;
            axios.post( this.serverUrl, data ).then(function (response) {
            console.log(' - Info recebida ', response);
            //console.log(response.data.id)
            //console.log(response.data.info)
            const data = JSON.parse(response.data.info) // Converte para objeto
            //console.log(data)
            appStore.appData = data ; // Salva dados no pinia
            localStorage.setItem('localAppData', JSON.stringify(data)); // Persistente dados no localSorage
            localStorage.setItem('userId', JSON.stringify(response.data.id)); // Persistente id do usuário no localSorage
            sessionStorage.setItem('loginState', true); // Persiste o estado de login no SessionStorage

            //Encaminha para home ou primeiro acesso     
            if(data.firstAccess < 5){ self.$router.push('/welcome') } 
            else { self.$router.push('home') }
        })
        .catch(function (error) {
            //erro no envio
            console.error(error);
            appStore.globalMsg('Oops! Um erro inesperado aconteceu.', 'error')
        }); 



            /* FAKE BACKEND

            const appStore = useAppStore()

            try {
                //Envia user e passawor -> Armazena id e token
                const response = await axios.get( this.fakeServer + '/login', data );
                localStorage.setItem('userId', JSON.stringify(response.data.userId)); // Persistente
                sessionStorage.setItem('token', JSON.stringify(response.data.token)); // Persistente Parcial
                sessionStorage.setItem('loginState', true); // Controla o status de login

                try { 
                    //Envia token -> Armazena dados 
                    const userId = JSON.parse(localStorage.getItem('userId'));
                    const token = JSON.parse(sessionStorage.getItem('token'));
                    const response = await axios.get( this.fakeServer + '/' + userId, token );

                    
                    appStore.appData = response.data; // Local
                    localStorage.setItem('localAppData', JSON.stringify(response.data)); // Persistente 

                    //Encaminha para home ou primeiro acesso     
                    if(response.data.firstAccess < 5){
                        this.$router.push('/welcome'); 
                    } else {
                        this.$router.push('/home'); 
                    }

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

            */


        
        }

    }

})

