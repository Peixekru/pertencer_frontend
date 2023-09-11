import { useAppStore } from '../../store/app'

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
    const progressPercent = (totalTrueItems.length * 100) / totalItems.length

    if (select == 'total') { return totalItems.length }
    if (select == 'progressNum') { return totalTrueItems.length }
    if (select == 'progressBar') { return progressPercent }

}

export function useStartProgress(){

    const appStore = useAppStore() 

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
    const totalProgress = (progressNum * 100) / total
    appStore.appData.glogalProgress = totalProgress


    //Controla animação do progresso global
    const progressEl = document.querySelector('.GlobalProgress');
    progressEl.classList.add('animate__animated', 'animate__swing');

    progressEl.addEventListener('animationend', () => {
        progressEl.classList.remove('animate__animated', 'animate__swing');
    }); 

}