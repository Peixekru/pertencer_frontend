<template>
    
    <v-card
    class="mx-auto rounded-lg pa-6 content-fade-in"
    width="100%"
    elevation = "6"
    >   

        <!--Compoente carousel timelien pertencer-->
        <v-row
        no-gutters="true"
        >
            <!--Slot btn left-->
            <v-col
                cols="1"
                class="d-flex justify-start align-center"
            >
                <v-icon icon="mdi-chevron-left" 
                size="x-large"
                />
            </v-col>
            <!--Main Container -->
            <v-col>
                <v-sheet
                width="100%" color="transparent" class="pa-2 mb-2 rounded-pill d-flex flex-nowrap"
                >
                    
                    <v-btn
                     color="primary"
                    class="text-caption rounded-pill mx-1"
                    v-for="i in timeLineBtnsTxts"
                    >
                        <p>{{i}}</p>
                    </v-btn>

                </v-sheet>

                <v-row>
                    <v-col>
                        <v-img
                        height="250"
                        aspect-ratio="16/9"
                        cover
                        class="rounded-xl"
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                        />
                    </v-col>
                    <v-col>
                        <p class=" font-weight-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, maiores quia. Sit molestiae veniam eligendi minima ipsum, at quo non autem rem obcaecati consequatur, ab debitis aperiam ipsa earum impedit?
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <!--Slot btn Right-->
            <v-col
            cols="1"
            class="d-flex justify-end align-center"
            >
                <v-icon icon="mdi-chevron-right" 
                size="x-large"
                />
            </v-col>
        </v-row>

        <!--
        <v-container class="d-flex justify-center">
         // *! Executa método para finalizar conteúdo 
            <v-btn variant="tonal"
            @click="finishedContent"
            >
                finalizar conteúdo
            </v-btn>
        </v-container>-->

    </v-card>

</template>


<script setup>
    import { ref, onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
    const appStore = useAppStore();
    // função que finaliza a unidade //
    const finishedContent = () => {
        appStore.finishedContent(true)
    } 

    const timeLineBtnsTxts = ref ([
        "1995",
        "1967",
        "2069",
        "1971",
        "1997",
        "2098",
        "1999",
        "1201",
        "2204",
        "1910",
        "1215",
        "2204",
    ])
    onMounted(() => {
        useStartProgress();
    })
</script> 

<style scoped>
    @import '../GlobalStyles/contentGlobalStyles.css';
</style>