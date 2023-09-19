import { defineStore } from 'pinia';
import { useAppStore } from './app'

import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: () => ({
        server: 'http://localhost:',
        fakeLoginServer: 'https://fakebackend.onrender.com'
    }),

    actions: {
        async useGet(port, path) {

            const appStore = useAppStore()

            try {
                //const response = await axios.get( this.server + port + path );
                const response = await axios.get( this.akeLoginServer + path );
                appStore.appData = response.data
            } catch (error) {
                //Erro na resposta do servidor
                console.error(error);
            }
        },


        async usePost(port, path, data) {

	
            //axios.post(this.server + port + path, data).then(function (response) {
            axios.post(this.fakeLoginServer + path, data).then(function (response) {
                console.log(port, ' - Tudo certo com o envio de: ', response);
            })
            .catch(function (error) {
                //erro no envio
                console.error(error);
            });
            
        
        }

    }

})

