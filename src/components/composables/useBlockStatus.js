import { useAppStore } from '../../store/app'
import { useApiStore } from '../../store/api'

// Função principal que controla o desbloqueio de conteúdo com base nos parâmetros fornecidos
export function useBlockStatus(obj) {
    
    const appStore = useAppStore(); // Hooks para acessar o estado do aplicativo e da API
    const apiStore = useApiStore();
    
    // Extrai os números da unidade, conteúdo e objeto do objeto fornecido
    const unidadeNum = parseInt(obj[0]);
    const conteudoNum = parseInt(obj[1]);
    let objetoNum = parseInt(obj[2]);

    // Funções para desbloquear o próximo objeto, atualizar o conteúdo e finalizar o curso
    const unlockNextObject = (unidadeNum, conteudoNum, objetoNum) => {
        // Desbloqueia o próximo objeto e o seleciona
        appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1].block = 1;
        appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[objetoNum + 1].selected = 1;
    };

    const updateNextContent = (unidadeNum, conteudoNum, objetoNum) => {
        // Atualiza as informações do próximo conteúdo
        appStore.nextUnidadeNumber = unidadeNum + 1;
        appStore.nextUnidadeTitle = appStore.appData.unidades[unidadeNum].title;
        const nextObjetoNum = objetoNum + 1;
        appStore.nextContent = {
            "currentContent": appStore.appData.unidades[unidadeNum].content[conteudoNum],
            "currentSelectedObject": appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[nextObjetoNum],
            "currentUnidadeTitle": appStore.nextUnidadeTitle,
            "currentUnidadeNumber": appStore.nextUnidadeNumber - 1,
            "title": appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[nextObjetoNum].title,
            "objectRating": appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons[nextObjetoNum].objectRating,
            "nextContenNumber": String(unidadeNum) + String(conteudoNum) + String(nextObjetoNum),
            "objectContent": 'tela00' + nextObjetoNum,
            "currentObjectIndex": [unidadeNum, conteudoNum, nextObjetoNum],
        };
    };

    const unlockNextContentInUnit = (unidadeNum, conteudoNum) => {
        // Desbloqueia o próximo conteúdo dentro da mesma unidade
        appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0].block = 1;
        appStore.appData.unidades[unidadeNum].content[conteudoNum + 1].lessons[0].selected = 1;
    };

    const unlockNextContentInNextUnit = (unidadeNum) => {
        // Desbloqueia o próximo conteúdo na próxima unidade
        appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0].block = 1;
        appStore.appData.unidades[unidadeNum + 1].content[0].lessons[0].selected = 1;
        appStore.appData.unidades[unidadeNum + 1].status = 1;
    };

    const finishCourse = () => {
        // Finaliza o curso
        appStore.allFinished = true;
        appStore.appData.galeria.status = 1; // Libera a galeria de imagens
        appStore.galleryCardKey += 1; // Atualiza o componente de galeria na home
    };

    // Condições para desbloquear conteúdo com base no estado atual
    if (appStore.appData.unidades[unidadeNum].content[conteudoNum].lessons.length > objetoNum + 1) {
        unlockNextObject(unidadeNum, conteudoNum, objetoNum);
        updateNextContent(unidadeNum, conteudoNum, objetoNum);
    } else if (appStore.appData.unidades[unidadeNum].content.length > conteudoNum + 1) {
        appStore.allFinished = false;
        unlockNextContentInUnit(unidadeNum, conteudoNum);
        updateNextContent(unidadeNum, conteudoNum + 1, -1); // Passando -1 como objetoNum para selecionar o primeiro objeto do próximo conteúdo
    } else if (appStore.appData.unidades.length > unidadeNum + 1) {
        appStore.allFinished = false;
        unlockNextContentInNextUnit(unidadeNum);
        updateNextContent(unidadeNum + 1, 0, -1); // Passando -1 como objetoNum para selecionar o primeiro objeto do próximo conteúdo
    } else {
        if (appStore.appData.glogalProgress == 100 && appStore.appData.galeria.status == 0) {
            finishCourse();
        }
    }

    // Atualiza o localStorage com o estado atual do aplicativo
    localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
    
    // Atualiza o backend com o estado atual do aplicativo
    const userId = JSON.parse(localStorage.getItem('userId'));
    apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))
}