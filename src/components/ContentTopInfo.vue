<template>
    <v-container
    color="transparent"
    class="d-flex justify-start align-center px-0 pb-0"
    >
        <h2 class="text-h2 font-weight-bold top-title-number" >
            0{{ appStore.currentUnidadeNumber + 1}}
        </h2>
        <div class="text-white ps-4">
            <h5 class="text-h5">
                {{ appStore.currentUnidadeTitle }}
            </h5>
            <p class="text-caption">
                {{ appStore.currentContent.lessonsTitle }} / 
                {{ appStore.currentContentTitle }}
            </p>
        </div>
    </v-container>


    <v-container 
    class="d-flex justify-end align-center pa-0 my-4 content-opacity"
    >
        <p 
        v-if=" !appStore.isMobile "
        class="text-caption text-end text-white"
        >
            O que meus colegas estão achando do conteúdo:
        </p>

        <v-rating
        v-model="appStore.objectRating"
        disabled
        color="white"
        size="16"
        class="ms-2 star-size"
        />
    </v-container>
</template>


<script setup>
    import { useAppStore } from "../store/app"

    //Inicia a store
    const appStore = useAppStore()


</script>


<style scoped>
    .top-title-number{
        color: #00FFCD;
    }
    .content-opacity{
        opacity: .5;
    }
    .star-size{
        font-size: 10px;
    }
</style>