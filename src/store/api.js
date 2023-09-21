import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: () => ({
        fakeServer: import.meta.env.VITE_FAKESERVER
    }),

    actions: {
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
        },


        async usePost(path, data) {
	
            //axios.post(this.server + port + path, data).then(function (response) {
            axios.post(this.fakeServer + path, data).then(function (response) {
                console.log(' - Tudo certo com o envio de: ', response);
            })
            .catch(function (error) {
                //erro no envio
                console.error(error);
            });
            
        
        }

    }

})

