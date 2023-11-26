import { defineStore } from 'pinia';
import axios from 'axios';
//import { useAppStore } from './app'


export const useApiStore = defineStore('api', {
    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        serverUrl: 'https://www.fideliadmin.com/pertencer/save'
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
    }
})

