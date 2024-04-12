import { defineStore } from 'pinia';
import axios from 'axios';
import { useAppStore } from './app'



export const useApiStore = defineStore('api', {
    state: () => ({
        //fakeServer: import.meta.env.VITE_FAKESERVER,
        //serverUrl: 'https://www.fideliadmin.com/pertencer/save'
        dataSaveUrl: 'https://www.einsteinpertencer.com.br/pertencer/save',
        serverUrl: 'https://www.einsteinpertencer.com.br/pertencer'
    }),

    actions: {
        async usePost(path, data) {
            axios.post(this.dataSaveUrl, {"userid": path, info: JSON.stringify(data)} 
            ).then(function (response) {
                console.log('-> Objeto atualizado e enviado', data);
                //console.log(response)
            })
            .catch(function (error) {
                console.error(error);
            });
        },

        //Save Cápsula
        async useSaveCapsule(path, data) {
            axios.post(this.serverUrl + path, data 
            ).then(function (response) {
                console.log('-> Objeto enviado para a cápsula', data);
                //console.log(response)
            })
            .catch(function (error) {
                console.error(error);
            });
        },

        //Save img
        async useSaveImg(path, data) { 
            
            const appStore = useAppStore()
            const apiStore = useApiStore();

            await axios.post(this.serverUrl + path, data 
            ).then(function (response) {
                console.log('-> Objeto atualizado e enviado', data);

                if (path == '/uploadimage'){
                    console.log('-> Resposta do envio de imagens:', response);
                    //console.log(response.data.thumb);

                    //Captuta o timestamp atual 
                    let timestamp = new Date().getTime();

                    //Concatena o timestamp com os links recebidos para evitar imgs em cache
                    let thumb = response.data.thumb + '?' + timestamp
                    let img = response.data.img + '?' + timestamp

                    //Cria o objeto img 
                    const imgsLink = { "thumb": thumb, "img": img, "visible": false }

                    //Limpa o arrey da galeria do usuário 
                    appStore.appData.galeria.content.userImgs = []

                    //Insere a nova imagem no índice 0 do array da galeria do usuário
                    appStore.appData.galeria.content.userImgs.push(imgsLink)
                }


                const userId = JSON.parse(localStorage.getItem('userId'));
                //Atualiza o localStorage
                localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
                //Atualiza backend
                apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))


            })
            .catch(function (error) {
                console.error(error);
            });
        },

        //Get Global gallery /pertencer/getgallery/

        async getGlobalImgs(path, data) { 

            const appStore = useAppStore()

            await axios.get('https://einsteinpertencer.com.br/pertencer' + path + data
            ).then(function (response) {
                console.log('-> Objeto atualizado e enviado', data);
                console.log(response.data.thumbs[0].thumb);

                    const imgsLinkGlobal = response.data.thumbs
                    appStore.appData.galeria.content.globalImgs = imgsLinkGlobal;
                    //console.log(appStore.appData.galeria.content.globalImgs)

            })
            .catch(function (error) {
                console.error(error);
            });
        },

    }
})

