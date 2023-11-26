import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useAuthStore = defineStore('userAuth', {
    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        //serverUrl: 'http://www.einsteinpertencer.com.br:3000/login'
        serverUrl: 'https://www.fideliadmin.com/pertencer'
    }),

    getters: {
        //
    },

    actions: {
        async useLogin(path, data) {

            const appStore = useAppStore()

            //Nova instância para utilizar this no escopo do axios
            let self = this;

            axios.post(this.serverUrl + path, data).then(function (response) {
                console.log(' - Info recebida ', response);

                //Login
                if (path == '/login') {

                    //console.log(response.data.id)
                    //console.log(response.data.info)

                    const data = JSON.parse(response.data.info) // Converte para objeto
                    appStore.appData = data; // Salva dados no pinia
                    localStorage.setItem('localAppData', JSON.stringify(data)); // Persistente dados no localSorage
                    localStorage.setItem('userId', JSON.stringify(response.data.id)); // Persistente id do usuário no localSorage
                    sessionStorage.setItem('loginState', true); // Persiste o estado de login no SessionStorage

                    //Encaminha para home ou primeiro acesso     
                    if (data.firstAccess < 5) { self.$router.push('/welcome') }
                    else { self.$router.push('home') }

                }

                //Mudar senha
                else if (path == '/chgpsw') {
                    console.log(response.data.result)
                    if (response.data.result == 'OK') {
                        console.log('foi!')
                        appStore.isChangedPassword = true;
                    }

                }

            }).catch(function (error) {
                //erro no envio
                console.error(error);
                appStore.globalMsg('Oops! Um erro inesperado aconteceu.', 'error')
            });
        }

    }

})

