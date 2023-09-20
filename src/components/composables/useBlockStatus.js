import { useAppStore } from '../../store/app'
import { useApiStore } from '../../store/api'

export function useBlockStatus(obj) {

    const appStore = useAppStore();
    const apiStore = useApiStore();

    const unidadeNum = parseInt(obj[0]);
    const conteudoNum = parseInt(obj[1]);
    const objetoNum = parseInt(obj[2]);

    //Testa se ainda existe navegação dentro do objeto { Carousel }
    if (appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons.length > objetoNum + 1){
        //Desbloqueia o objeto seguinte
        appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1].block = 1;
        //Armazena o número da unidade atual
        appStore.nextUnidadeNumber = unidadeNum + 1;
        //Armazena o título da unidade atual
        appStore.nextUnidadeTitle = appStore.appData.unidades[unidadeNum].title;

        //Armazena o conteúdo do objeto seguinte
        appStore.nextContent = {
            "currentContent" : appStore.appData.unidades[unidadeNum].content[conteudoNum],
            "currentSelectedObject" : appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1], //Status da tela
            "currentUnidadeTitle" : appStore.nextUnidadeTitle,
            "currentUnidadeNumber" : appStore.nextUnidadeNumber - 1,
            "title" : appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1].title,
            "objectRating" :  appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1].objectRating, // Aval Conteúdo atual
            "nextContenNumber" : String(unidadeNum) + String(conteudoNum) + String(objetoNum + 1), // URI
            "objectContent" : 'tela00' + (objetoNum + 1), // Nome da tela
            "currentObjectIndex" : [unidadeNum, conteudoNum, objetoNum + 1], //Desbloqueio de tela
        }
    //Testa se ainda existe navegação dentro da unidade
    } else {
        if (appStore.appData.unidades[unidadeNum].content.length > conteudoNum + 1){
            //Desbloqueia o primeiro bojeto do carousel seguinte
            appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0].block = 1;
            //Armazena o número da unidade atual
            appStore.nextUnidadeNumber = unidadeNum + 1;
            //Armazena o título da unidade atual
            appStore.nextUnidadeTitle = appStore.appData.unidades[unidadeNum].title;

            //Armazena o conteúdo do objeto seguinte
            appStore.nextContent = {
                "currentContent" : appStore.appData.unidades[unidadeNum].content[conteudoNum + 1],
                "currentSelectedObject" : appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0], //Status da tela
                "currentUnidadeTitle" : appStore.nextUnidadeTitle,
                "currentUnidadeNumber" : appStore.nextUnidadeNumber - 1,
                "title" : appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0].title,
                "objectRating" :  appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0].objectRating, // Aval Conteúdo atual
                "nextContenNumber" : String(unidadeNum) + String(conteudoNum + 1) + '0', // URI
                "objectContent" : 'tela000', // Nome da tela
                "currentObjectIndex" : [unidadeNum, conteudoNum + 1, 0], //Desbloqueio de tela
            }
        //Testa se ainda existe unidade no curso
        } else {
            if(appStore.appData.unidades.length > unidadeNum + 1) {
                //Desbloqueia o primeiro bojeto da unidade seguinte
                appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0].block = 1;
                //Armazena o número da unidade unidade seguinte
                appStore.nextUnidadeNumber = unidadeNum + 2;
                //Armazena o título da unidade atual
                appStore.nextUnidadeTitle = appStore.appData.unidades[unidadeNum + 1].title;

                appStore.appData.unidades[unidadeNum + 1].status = 1;

                //Armazena o conteúdo do objeto seguinte
                appStore.nextContent = {
                    "currentContent" : appStore.appData.unidades[unidadeNum + 1].content[0],
                    "currentSelectedObject" : appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0], //Status da tela
                    "currentUnidadeTitle" : appStore.nextUnidadeTitle,
                    "currentUnidadeNumber" : appStore.nextUnidadeNumber - 1,
                    "title" : appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0].title,
                    "objectRating" :  appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0].objectRating, // Aval Conteúdo atual
                    "nextContenNumber" : String(unidadeNum + 1) + '0' + '0', // URI
                    "objectContent" : 'tela000', // Nome da tela
                    "currentObjectIndex" : [unidadeNum + 1, 0, 0], //Desbloqueio de tela
                }
            }
            //Finaliza o curso
            else{
                alert('Treinamento concluido.');
                appStore.allFinished = true;
            }
        }
    };


    //Atualiza o localStorage
    localStorage.setItem('localAppData', JSON.stringify(appStore.appData));

    //Atualiza backend
    const userId = JSON.parse(localStorage.getItem('userId'));
    //port / path / data
    apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
}