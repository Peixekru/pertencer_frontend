<template>
	<v-container class="pa-0">
        <!--Vimeo-->	
        <div class="vimeo-container">
            <iframe
            src="https://player.vimeo.com/video/886963976?h=bb0fc30692&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1" 
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
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'
  import { useRouter } from 'vue-router'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();

  //Inicia o controle de rotas
	const router = useRouter()

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
    //Informa fim de unidade
    appStore.isUnidadeFinished = true;
    
		appStore.finishedContent(true)
		useStartProgress()
	}

    
  function initVimeoEventListeners() {
    const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');

    vimeoIframes.forEach(iframe => {
      const player = new Vimeo.Player(iframe);

      player.on('ended', function() {
        console.log('Vídeo chedou ao fim');
        finishedContent();
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
    
    
</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>