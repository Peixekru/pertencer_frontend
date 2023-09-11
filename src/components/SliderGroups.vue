<template>

  <v-container v-if="!appStore.isMobile">
    <v-container class="container-pos d-flex justify-space-between align-center">
      <template v-if="content.lessons.length > 2">

        <div 
        class="side-fx-color-start" 
        :class="objectCardSelect > 0 ? 'mt-3' : ''" 
        />

        <div v-if="appStore.isTablet"
        class="side-fx-color-end" 
        :class="objectCardSelect > 0 ? 'mt-3' : '' " 
        />
        
        <div v-else
        class="side-fx-color-end-md" 
        :class="objectCardSelect > 0 ? 'mt-3' : '' " 
        />

      
      </template>
    </v-container>

    <v-sheet color="rgba(0,0,0, .1)" rounded="lg" class="mx-auto" elevation="0">
      <h1 class="text-h5 ms-12 pt-2 pb-1 text-primary">
        {{ content.lessonsTitle }}
      </h1>

      <v-slide-group 
      v-model="objectCardSelect" 
      center-active 
      show-arrows
      >
        <div :class="content.lessons.length < 3 &&
        appStore.screenWidth > 750 ? 
        'spacer' : '' " 
        />

        <v-slide-group-item
          v-for="(i, index) in content.lessons"
          :key="i"
          v-slot="{ isSelected }"
        >
          <v-sheet
            class="mb-4 ms-4 d-flex align-center"
            :color="isSelected ? 'primary stroke-adjust' : 'transparent'"
            :elevation="isSelected ? 4 : 0"
          >
            <!--Card Conteúdo-->
            <ConteudoCard
              class="border-primary"
              :elevationNumber="isSelected ? 0 : 2"
              :title="i.title"
              :icon="i.icon"
              :cardImg="i.img"
              :time="i.time"
              :staus="i.status"
              :block="i.block"
              @click="loadObject(appStore.currentUnidadeNumber, contentIndex, index, content)"  
            />
          </v-sheet>

        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

  </v-container>


  <!--Mobile vresion (Carousel)-->
  <v-container v-if="appStore.isMobile">

    <h1 class="text-h5 pb-1 text-primary">
      {{ content.lessonsTitle }}
    </h1>
  
    <v-carousel
    progress="primary"
    hide-delimiters
    height="254"
    class="pt-3"
    >
      <v-carousel-item
        v-for="(i, index) in content.lessons"
        :key="i"
      >
        <v-sheet
          class="mx-0"
          color="transparent"
        >
          <!--Card Conteúdo-->
          <ConteudoCard
            class="border-primary"
            :title="i.title"
            :icon="i.icon"
            :cardImg="i.img"
            :time="i.time"
            :staus="i.status"
            :block="i.block"
            @click="loadObject(appStore.currentUnidadeNumber, contentIndex, index, content)"
          />
        </v-sheet>  
    
      </v-carousel-item>
    </v-carousel>

  </v-container>

</template>

<script setup>
  import { ref } from "vue"
  import { useAppStore } from "../store/app"
  import { useRouter } from "vue-router"
  import { useLoadCurrentObject } from "../components/composables/useLoadObject"
  
  import ConteudoCard from "@/components/ConteudoCard.vue"

  const appStore = useAppStore()
  const router = useRouter()

  const objectCardSelect = ref(null);

  const loadObject = ( unidade, contentIndex, index, content ) => {
    useLoadCurrentObject(unidade, contentIndex, index, content)
    router.push('/conteudo')
  }

  defineProps({
    content: Object,
    contentIndex: Number,
  })
</script>



<style scoped>
  .stroke-adjust {
    border-radius: 12px 29px 12px 12px;
    border-width: 6px;
  }
  .container-pos {
    position: absolute;
    z-index: 5000;
    height: 272px;
    pointer-events: none;
    margin-top: 28px;
  }
  .side-fx-color-start {
    height: 100%;
    width: 10px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
    margin-left: 36px;
    pointer-events: none;
  }
  .side-fx-color-end {
    height: 100%;
    width: 10px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
    margin-right: 92px;
    pointer-events: none;
  }
  .side-fx-color-end-md {
    height: 100%;
    width: 10px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
    margin-right: 68px;
    pointer-events: none;
  }
  .spacer{
    width: 52px;
  }
</style>
