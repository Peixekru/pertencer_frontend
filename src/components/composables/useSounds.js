
import btnSound from '../../assets/img/beep-01.mp3'

export function useBeepSound(){

    const btnbeep = new Audio(btnSound);

    let buttons = document.querySelectorAll('button');



    buttons.forEach(button => {
        button.addEventListener('click', () => {   

            setTimeout(()=> {
                btnbeep.play();
            },500);
            
        });
    });


    
    

}