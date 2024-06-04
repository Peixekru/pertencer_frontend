<template>
  <v-container class="pa-0">
    <!--Vimeo-->
    <div class="vimeo-container">
      <iframe
        src="https://player.vimeo.com/video/885695592?h=95045a640b&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1"
        frameborder="0" SameSite="None" allow="autoplay; fullscreen; picture-in-picture;" class="vimeo-player"
        :class="appStore.appData.access.color == 1 ? 'grayscale-filter' : ''" />
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
import { defineProps } from 'vue';
import { useAppStore } from '../../../store/app'
import { useStartProgress } from '../../../components/composables/useProgress'

//Inicia o Pinia com a store global do App (appStore)
const appStore = useAppStore();

//Finaliza o conteúdo e atualiza progresso
const finishedContent = () => {
  // Ajusta isUnidadeFinished com base na prop isLastObject
  props.isLastObject ?
    appStore.isUnidadeFinished = true :
    appStore.isUnidadeFinished = false;

  appStore.finishedContent(true)
  useStartProgress()
}

// Recebe a prop isLastObject do componente pai
const props = defineProps({
  isLastObject: Boolean
});


function initVimeoEventListeners() {
  const vimeoIframes = document.querySelectorAll('iframe[src*="player.vimeo.com"]');

  vimeoIframes.forEach(iframe => {
    const player = new Vimeo.Player(iframe);

    player.on('ended', function () {
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
  function () {
    initVimeoEventListeners();
    console.log('API do Vimeo foi carregada');
  }
);


</script>



<style lang="scss" scoped>
@import '../GlobalStyles/contentGlobalStyles.css';
@import '../GlobalStyles/systemGlobalVars.scss';
</style>