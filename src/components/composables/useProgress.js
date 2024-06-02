import { useAppStore } from '../../store/app'
import { useBlockStatus } from './useBlockStatus'

// Função auxiliar para calcular o progresso de uma unidade
function calculateUnitProgress(unit) {
    const totalItems = [];
    const completedItems = [];

    unit.content.forEach(content => {
        content.lessons.forEach((lesson, lessonIndex) => {
            totalItems.push(lessonIndex);
            if (lesson.status === 1) {
                completedItems.push(1);
            }
        });
    });

    return { totalItems, completedItems };
}

// Calcula o progresso da unidade e retorna os valores solicitados
export function useProgressCalc(select, unitIndex) {
    const appStore = useAppStore();
    const { totalItems, completedItems } = calculateUnitProgress(appStore.appData.unidades[unitIndex]);

    let progressPercent = ((completedItems.length) * 100) / totalItems.length;
    if (unitIndex === 3 && completedItems.length > 0) {
        progressPercent = ((completedItems.length + 1) * 100) / totalItems.length;
    }

    if (select === 'total') {
        return unitIndex === 3 ? totalItems.length : totalItems.length;
    }
    if (select === 'progressNum') {
        return completedItems.length;
    }
    if (select === 'progressBar') {
        return Math.max(progressPercent, 5);
    }
}

// Função auxiliar para controlar a animação do progresso global
function animateGlobalProgress() {
    const progressEl = document.querySelector('.GlobalProgress');
    progressEl.classList.add('animate__animated', 'animate__swing');

    progressEl.addEventListener('animationend', () => {
        progressEl.classList.remove('animate__animated', 'animate__swing');
    });
}

// Função auxiliar para tocar o som de alerta de progresso
function playProgressAlert() {
    let audio = new Audio('./assets/progressAlert.mp3');
    audio.play();
}

// Atualiza o progresso global e chama as funções auxiliares necessárias
function updateGlobalProgress() {
    const appStore = useAppStore();
    let total = 0;
    let progressNum = 0;

    appStore.appData.unidades.forEach((unit, unitIndex) => {
        total += useProgressCalc('total', unitIndex);
        progressNum += useProgressCalc('progressNum', unitIndex);
    });

    const totalProgress = Math.ceil((progressNum * 100) / total);
    appStore.appData.glogalProgress = totalProgress === 0 ? 2 : totalProgress;

    playProgressAlert();
    animateGlobalProgress();
}

// Inicializa o progresso do curso ou finaliza a última tela
export function useStartProgress(finalContent) {
    const appStore = useAppStore();

    if (finalContent === undefined) {
        updateGlobalProgress();
    } else {
        console.log('É a última tela');
        appStore.appData.glogalProgress = 100;
        playProgressAlert();
        animateGlobalProgress();
    }

    console.log(appStore.appData.glogalProgress);

    appStore.currentSelectedObject.status = 1;
    useBlockStatus(appStore.currentObjectIndex);
}
