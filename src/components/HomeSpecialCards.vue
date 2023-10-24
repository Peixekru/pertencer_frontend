<template>
    <v-row class="pa-2">

        <CapsulaCardV2 :key="appStore.capsulaCardKey"
        v-if="appStore.appData.capsula.status == 1" 
        />

        <GalleryCardV2 :key="appStore.galleryCardKey"
        v-if="appStore.appData.galeria.status == 1"
        />

        <StarterCardV2
        v-if="appStore.appData.start.status == 1"
        />

        <WorkplaceCardV2
        v-if="appStore.appData.workplace.status == 1"
        />

        <!--<CapsulaCard :key="appStore.capsulaCardKey"
        v-if="appStore.appData.capsula.status == 1" 
        />-->


        <!--<GalleryCard
        v-if="appStore.appData.galeria.status == 1"
        />-->

   
        <!--<StarterCard
        v-if="appStore.appData.start.status == 1"
        />-->

    

        <!--<WorkplaceCard 
        v-if="appStore.appData.workplace.status == 1"
        />-->

    </v-row>
</template>


<script setup>
    import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    //import CapsulaCard from '../components/CapsulaCard.vue'
    import CapsulaCardV2 from './CapsulaCardV2.vue'
    //import GalleryCard from '../components/GalleryCard.vue'
    import GalleryCardV2 from '../components/GalleryCardV2.vue'
    //import StarterCard from '../components/StarterCard.vue'
    import StarterCardV2 from '../components/StarterCardV2.vue'
    //import WorkplaceCard from '../components/WorkplaceCard.vue'
    import WorkplaceCardV2 from '../components/WorkplaceCardV2.vue'

    const appStore = useAppStore()

    const capsulaCardKey = ref(appStore.capsulaCardKey);
</script>