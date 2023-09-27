<template>
    
    <v-card
    class="mx-auto rounded-lg pa-6 content-fade-in"
    width="100%"
    elevation = "6"
    >
        
        <CapsulaContent />        

        <v-container class="d-flex justify-center">
            <!--// *! Executa método para finalizar conteúdo -->
            <v-btn variant="tonal"
            @click="finishedContent"
            >
                finalizar conteúdo
            </v-btn>
        </v-container>

    </v-card>

</template>


<style scoped> 
    .item-opacity{
        opacity: .9;
    }
    .content-scroll-content{
        overflow: scroll;
    }
</style>


<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
    import { useBlockStatus } from '../../../components/composables/useBlockStatus'

    import CapsulaContent from "@/components/CapsulaContent.vue";

    const appStore = useAppStore();
    // *! função que finaliza a unidade //
    const finishedContent = () => {
        appStore.isFinished = true
    }
    onMounted(() => {
        //Atualiza o status do objeto
        appStore.currentSelectedObject.status = 1
        useStartProgress();
        useBlockStatus(appStore.currentObjectIndex)
    })
</script> 