import { defineStore } from 'pinia';
import { useAppStore } from './app'
import axios from 'axios';
//import { useAppStore } from './app'


export const useApiStore = defineStore('api', {

    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        //serverUrl: 'https://www.fideliadmin.com/pertencer/save'
        serverUrl: 'https://www.einsteinpertencer.com.br/pertencer',
    }),

    actions: {

        async usePost(path, data) {
            axios.post(this.serverUrl + '/save', {"userid": path, info: JSON.stringify(data)} 
            ).then(function (response) {
                //console.log(response);
                console.log('-> Objeto atualizado e enviado', data);
            })
            .catch(function (error) {
                console.error(error);
            });
        },

        async useSaveImg(img, frame) {

            const appStore = useAppStore()

            axios.post(this.serverUrl + '/saveimg', {"img" : img, "frame" : frame} 
            ).then(function (res) {
                console.log(res);
                console.log(`img-> ${img}`, `frame-> ${frame}`);
            })
            .catch(function (error) {
                console.error(error);
                console.log(`img-> ${img}`, `frame-> ${frame}`);

                appStore.imgRes.push(
                    {
                        "img": "https://i.ibb.co/SNP6rV7/img-Res-800.png",
				        "thumb": "https://i.ibb.co/KGNmfH9/img-Res-200.png",
				        "visible": false
                    },
                )

                appStore.userImagesKey += 1,
                console.log(appStore.imgRes)
            });
        },
        
    }
})



