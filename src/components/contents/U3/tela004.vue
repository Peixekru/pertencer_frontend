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

	<!--// *! Executa método para finalizar conteúdo -->
  <!--
	<v-container
	class="d-flex justify-center my-10"
	>
		<v-btn variant="outlined"
		color="white"
		@click="finishedContent"
		>
			finalizar conteúdo
		</v-btn>
	</v-container>
  -->

</template>

<script setup>

	//Imports
  import { useRouter } from 'vue-router'
	import { useAppStore } from '../../../store/app'
	import { useStartProgress } from '../../../components/composables/useProgress'

	//Inicia o Pinia com a store global do App (appStore)
	const appStore = useAppStore();
  //Inicia o controle de rotas
	const router = useRouter()

	//Finaliza o conteúdo e atualiza progresso
	const finishedContent = () => {
		//appStore.finishedContent(true)
		useStartProgress()


    //libera o "Começando Bem" 
    appStore.appData.start.status = 1
		//atualiza o componente "Começando Bem"
    appStore.startCardKey += 1
		//Atualiza o localStorage


    //libera o "Começando Bem" 
    appStore.appData.workplace.status = 1
		//atualiza o componente "Começando Bem"
    appStore.workPlaceCardKey += 1
		//Atualiza o localStorage
	

		//libera o "galeria de imagen" 
		appStore.appData.galeria.status = 1
		//atualiza o componente "galeria de image na home"
		appStore.galleryCardKey += 1
		//Atualiza o localStorage
		localStorage.setItem('localAppData', JSON.stringify(appStore.appData))

	  router.push('/home')
	}

    
  function initVimeoEventListeners() {
    const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');

    vimeoIframes.forEach(iframe => {
      const player = new Vimeo.Player(iframe);

      player.on('ended', function() {
        console.log('Video Ended!');
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
      console.log('Loaded Vimeo Player API');
    }
  );

</script> 



<style lang="scss" scoped>
	@import '../GlobalStyles/contentGlobalStyles.css';
	@import '../GlobalStyles/systemGlobalVars.scss';
</style>