import { useAppStore } from '../../store/app'

//Carrega o conteúdo 
export function useLoadCurrentObject( unidadeNum, conteudoNum, objetoNum, content ) { 
    //Inicia a store
    const appStore = useAppStore();

   /* appStore.currentContent = content; // Conteúdo - { Carousel }
    appStore.currentSelectedObject = content.lessons[objetoNum]; // Objeto { Card conteúdo }
    appStore.currentContentTitle = content.lessons[objetoNum].title; // Título do objeto
    appStore.objectRating = content.lessons[objetoNum].objectRating; // Avaliação do conteúdo atual ? - Int
    appStore.objectContent = 'tela00' + (objetoNum); // Nome da tela que será carregada - Tela000
    appStore.currentObjectIndex = [unidadeNum, conteudoNum, objetoNum]; //Arrey da rota - [0,0,0]
    appStore.currentContentNumber = unidadeNum + conteudoNum + objetoNum; // String da rota - '000'
    */

    appStore.currentSelectedObject = content;
    appStore.currentContentTitle = content.title; // Título do objeto
    appStore.objectRating = content.objectRating; // Avaliação do conteúdo atual ? - Int

    appStore.currentObjectIndex = [unidadeNum, conteudoNum, objetoNum]; //Arrey da rota - [0,0,0]   --> ROTA DO CONTEÚDO
    appStore.objectContent = 'tela00' + (objetoNum); // Nome da tela que será carregada - Tela000   --> NOME DA TELA
    appStore.currentContentNumber = unidadeNum + conteudoNum + objetoNum; // String da rota - '000' --> NÚMERO DO CONTÚDO

}

//Carrega o conteúdo seguinte
export function useLoadNextObject(obj){
    //Inicia a store
    const appStore = useAppStore();

    appStore.currentContent = obj.currentContent; // Conteúdo - { Carousel }
    appStore.currentSelectedObject = obj.currentSelectedObject; // Objeto { Card conteúdo }
    appStore.currentUnidadeNumber = obj.currentUnidadeNumber; // Numero da Unidade
    appStore.currentUnidadeTitle = obj.currentUnidadeTitle;
    appStore.currentContentTitle = obj.title; // Título do objeto
    appStore.objectRating =  obj.objectRating; // Avaliação do conteúdo atual ? - Int
    appStore.objectContent = obj.objectContent; // Nome da tela que será carregada - Tela000
    appStore.currentObjectIndex = obj.currentObjectIndex; //Arrey da rota - [0,0,0]
    appStore.nextContenNumber = obj.nextContenNumber; // String da rota - '000'

    console.log(obj.currentObjectIndex)

    console.log(obj.currentSelectedObject)

    window.scrollTo({ top: 0, behavior: "smooth" });
}