<template>
	<v-container class="pa-0">
        <!--Vimeo-->	
        <div class="vimeo-container">
            <iframe
            src="https://player.vimeo.com/video/885695754?h=63a51f29f9&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1" 
            frameborder="0" 
            SameSite="None"
            allow="autoplay; fullscreen; picture-in-picture;" 
            class="vimeo-player"
            :class="appStore.appData.access.color == 1 ? 'grayscale-filter' :  ''"
            />
        </div>
    </v-container>
</template>

<script setup>

	//Imports
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
	import { useAppStore } from '../../../store/app'
  import { useApiStore } from '../../../store/api'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();
  //Inicia o controle de rotas
	const router = useRouter()
  //Inicia comunicação com API
  const apiStore = useApiStore()

	//Finaliza o conteúdo, atualiza progresso e libera funcionalidades na home
	const finishedContent = () => {

    if (appStore.appData.start.status == 0) {
      //libera o "Começando Bem" 
      appStore.appData.start.status = 1
      //atualiza o componente "Começando Bem"
      appStore.startCardKey += 1
    }


    if(appStore.appData.workplace.status == 0){
      //libera o "Workplace" 
      appStore.appData.workplace.status = 1
      //atualiza o componente "Workplace"
      appStore.workPlaceCardKey += 1
    }


	


		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))


    /*
    //Atualiza backend
    const userId = JSON.parse(localStorage.getItem('userId'));
    apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

    //console.log(JSON.parse(localStorage.getItem('localAppData')))

    */
    //appStore.finishedContent(true)
		useStartProgress('finalContent')


	  router.push('/home')
	}

    
  function initVimeoEventListeners() {
    const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');

    vimeoIframes.forEach(iframe => {
      const player = new Vimeo.Player(iframe);

      player.on('ended', function() {
        finishedContent();
        console.log('Vídeo chedou ao fim');
      });
    });
  }

  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    if (callback) {
      script.onload = callback;
    }

    document.head.appendChild(script);
  }

  loadScript(
    'https://player.vimeo.com/api/player.js',
    function() {
      initVimeoEventListeners();
      console.log('API do Vimeo foi carregada');
    }
  );

  onMounted(() => {
    console.log('entrou na última tela')
  })

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>