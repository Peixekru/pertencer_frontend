<template>
    
    <v-card
    class="mx-auto rounded-lg pa-6 content-fade-in"
    width="100%"
    elevation = "6"
    > 
        <!--CapsulaContent component-->
        <CapsulaContent />
    </v-card>

</template>

<script setup>
    import { useAppStore } from '../../../store/app'
    import CapsulaContent from "@/components/CapsulaContent.vue";
    const appStore = useAppStore();
</script> 

<style scoped>
    @import '../GlobalStyles/contentGlobalStyles.css';
</style>