import { useAppStore } from '../../store/app'
import { useBlockStatus } from './useBlockStatus'

export function useProgressCalc(select, i) {

    const appStore = useAppStore() 

    let totalItems = []
    let totalTrueItems = []

    appStore.totalItems = []

    for (
        let a = 0 ; 
        a < appStore.appData.unidades[i].content.length; 
        a++) {

            for (
                let b = 0 ; 
                b < appStore.appData.unidades[i].content[a].lessons.length; 
                b++) {
                    //separa todos os itens da unidade
                    totalItems.push(b);
                    // Separa os itens da unidade com status = 1
                    if (appStore.appData.unidades[i].content[a].lessons[b].status == 1) {
                        totalTrueItems.push(1);
                    }
            }
    }
    
    // calculo bara de progresso unidade [Hanna]
    //let progressPercent = progressPercent = ((totalTrueItems.length) * 100) / totalItems.length
    
    let progressPercent = 0
    if (i == 3 && totalTrueItems.length > 0 ) { progressPercent = ( (totalTrueItems.length + 1 ) * 100 ) / totalItems.length} 
    else { progressPercent = ((totalTrueItems.length) * 100) / totalItems.length }

    if (select == 'total') {if(i == 3){ return totalItems.length - 1 } else { return totalItems.length } }
    if (select == 'progressNum') { return totalTrueItems.length }
    if (select == 'progressBar') { 
        //Caso a barra de progresso não esteja visível, compensa em 5%
        if (progressPercent < 5){progressPercent = 5} 
        return progressPercent 
    }

}

export function useStartProgress(finalContent){

    const appStore = useAppStore() 

    if (finalContent === undefined){
    
        let total = 0
        let progressNum = 0
    
        for (
            let a = 0 ; 
            a < appStore.appData.unidades.length; 
            a++) {
                total += useProgressCalc('total', a)
                progressNum += useProgressCalc('progressNum', a)
        }
    
        // calculo progresso do curso (Gota) 
        const totalProgress = Math.ceil((progressNum * 100) / total) 
    
        if (totalProgress == 0 ) {appStore.appData.glogalProgress = 2} else{
            appStore.appData.glogalProgress = totalProgress
        }
    
        let audio = new Audio('./assets/progressAlert.mp3');
        audio.play();
    
    
        //Controla animação do progresso global
        const progressEl = document.querySelector('.GlobalProgress');
        progressEl.classList.add('animate__animated', 'animate__swing');
    
        progressEl.addEventListener('animationend', () => {
            progressEl.classList.remove('animate__animated', 'animate__swing');
        }); 
    
        //Atualiza o status do objeto atual
        appStore.currentSelectedObject.status = 1
    
        //Marca o conteúdo atual como concluído e libera o seguinte
        useBlockStatus(appStore.currentObjectIndex)

    } else {

        console.log('É a última tela')

        appStore.appData.glogalProgress = 100
        

        let audio = new Audio('./assets/progressAlert.mp3');
        audio.play();

        //Controla animação do progresso global
        const progressEl = document.querySelector('.GlobalProgress');
        progressEl.classList.add('animate__animated', 'animate__swing');
    
        progressEl.addEventListener('animationend', () => {
            progressEl.classList.remove('animate__animated', 'animate__swing');
        }); 
    
        //Atualiza o status do objeto atual
        appStore.currentSelectedObject.status = 1
    
        //Marca o conteúdo atual como concluído e libera o seguinte
        useBlockStatus(appStore.currentObjectIndex)
    }

    console.log(appStore.appData.glogalProgress)

}