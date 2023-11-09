<template>
    <v-row class="d-flex align-end">
        <v-col cols="12" lg="7" md="12">
            <v-container
            color="transparent"
            class="d-flex justify-start align-center px-0 pb-0"
            >
                <h2 
                class="text-h2 font-weight-bold text-info" 
                >
                    0{{ appStore.currentUnidadeNumber + 1}}
                </h2>
                <div class="text-white ps-4">
                    <h5 class="text-h5 font-weight-bold">
                        {{ appStore.currentUnidadeTitle }}
                    </h5>
                    <p class="text-caption">
                        {{ appStore.currentContent.lessonsTitle }} / 
                        {{ appStore.currentContentTitle }}
                    </p>
                </div>
            </v-container>
            
        </v-col> 

        <v-col cols="12" lg="5" md="12">
            <v-container 
            class="d-flex justify-end align-center pa-0 mb-3 content-opacity"
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
                readonly="true"

                />
            </v-container>
        </v-col>

    </v-row>

</template>


<script setup>
    import { useAppStore } from "../store/app"

    //Inicia a store
    const appStore = useAppStore()


</script>


<style scoped>
    .content-opacity{
        opacity: .5;
    }
    .star-size{
        font-size: 10px;
    }
</style>