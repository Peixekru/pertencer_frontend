import { defineStore } from 'pinia';
//import { useAppStore } from './app'

import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        serverUrl: 'http://www.einsteinpertencer.com.br:3000/save'
    }),

    actions: {
        async usePost(path, data) {
            axios.post(this.serverUrl, {"userid": path, info: JSON.stringify(data)} 
            ).then(function (response) {
                console.log(' - Tudo certo com o envio de: ', response);
            })
            .catch(function (error) {
                console.error(error);
            });
            
        
        },


        /*

        async useGet(path, data) {
            const appStore = useAppStore()
            try {
                //const response = await axios.get( this.server + port + path );
                const response = await axios.get( this.fakeServer + path, data );
                appStore.appData = response.data
            } catch (error) {
                //Erro na resposta do servidor
                console.error(error);
            }
        }

        */

    }

})

