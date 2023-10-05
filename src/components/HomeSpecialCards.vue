<template>
    <v-row class="d-class justify-space-between mx-1 pt-10">
    
        <CapsulaCard :key="appStore.capsulaCardKey"
        v-if="appStore.appData.capsula.status == 1" 
        />

        <GalleryCard :key="appStore.galleryCardKey"
        v-if="appStore.appData.galeria.status == 1" 
        />

        <StarterCard
        v-if="appStore.appData.start.status == 1"
        />

        <WorkplaceCard 
        v-if="appStore.appData.workplace.status == 1"
        />

    </v-row>
</template>


<script setup>
    //import { ref } from 'vue';
    import { useAppStore } from '../store/app'
    import CapsulaCard from '../components/CapsulaCard.vue'
    import GalleryCard from '../components/GalleryCard.vue'
    import StarterCard from '../components/StarterCard.vue'
    import WorkplaceCard from '../components/WorkplaceCard.vue'
    const appStore = useAppStore()

    //const capsulaCardKey = ref(appStore.capsulaCardKey);
</script>