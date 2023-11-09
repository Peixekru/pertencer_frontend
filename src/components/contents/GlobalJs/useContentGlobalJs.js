//Controle da posição do scroll em relação aos conteúdos

export function useScrollMonitor(el) {

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (window.scrollY >= scrollableHeight) {
        //Verifica se o Id do último elemnto está inteiro na tela
        try {
            return useElementDetector(document.querySelector(el))
        } catch (error) {
            //console.log('Elemento ainda não está inteiro na tela');
        }
    }

}



//Retorna se um elemento está complatamente ou parcialmente (true / false) dentro da tela
export function useElementDetector(el) {
    
    //Retorna se um elemento está complatamente ou parcialmente (true / false) dentro da tela
	const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)) &&
                ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
        };

        return elementIsVisibleInViewport(el)
}



//Controla as animações dos elementos pela barra de rolagem
export function useAnim(d, h) {

    const stcollAnim = () => {

        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = d;

            if (h){

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }

            } else {
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

    }

        window.addEventListener("scroll", stcollAnim.bind(d, h));
        stcollAnim(d, h)
}



