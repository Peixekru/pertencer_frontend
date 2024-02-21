import { useAppStore } from '@/store/app'

export function useScreenMonitor(){

    //Inicia a store
    const appStore = useAppStore() 

    //Inicia o tamnho da tela 
    appStore.screenHeight = window.innerHeight
    appStore.screenWidth = window.innerWidth

    //Inicia o tamnho do app 
    appStore.appHeight = app.offsetHeight
    appStore.appWidth = app.offsetWidth

    //Captura o movimento do scroll da tela
    appStore.appScroll = window.top.scrollY

    //Verifica se Screen Size é xs- ou xs+
    if(window.innerWidth > 600) { appStore.isMobile = false }
    else{ appStore.isMobile = true }

    //Verifica se Screen Size está entre xs+ e lg-
    if ( window.innerWidth > 600 && window.innerWidth < 1280){ appStore.isTablet = true }
    else { appStore.isTablet = false }
    

}