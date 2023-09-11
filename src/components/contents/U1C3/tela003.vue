<template>
    
    <v-card
    class="mx-auto rounded-lg pa-6 content-fade-in"
    width="100%"
    elevation = "6"
    >

        <v-card-text>
            <h1 class="text-h5 font-weight-bold text-decoration-underline text-uppercase text-secondary">
                <span class="text-caption">Unidade » 1 - carousel » 3 - </span>
                tela003
            </h1>

            <h5 class="text-h5 font-weight-bold text-primary my-6" >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
            </h5>
            <v-row>
                <v-col
                col="12"
                md="6"
                >
                    <p>
                        Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tem por invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam
                        nonumy eirm od tem por invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                        rebum . Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                    <p class="my-6">
                        Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tem por invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam
                        nonumy eirm od tem por invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                        rebum . Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tem por invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed diam.
                    </p>
                </v-col>  
                <v-col
                cols="12"
                md="6"
                >
                    <v-img 
                    cover
                    height="100%"
                    class="rounded-lg"
                    lazy-src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++01&font=montserrat"
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++01&font=montserrat"
                    /> 
                </v-col> 
            </v-row>
        </v-card-text>

            <!--Vimeo-->
            <v-container 
            class="mt-16 pa-0"
            >
                <div 
                style="
                    padding:56.25% 0 0 0;
                    position:relative; 
                "
                >
                    <iframe
                    src="https://player.vimeo.com/video/372349574?h=1abc33ff76&color=ebf490&title=0&byline=0&portrait=0" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    style="
                        position:absolute; 
                        top:0; 
                        left:0; 
                        width:100%; 
                        height:100%; 
                        border-radius: 10px
                    " 
                    />
                </div>
            </v-container>

            <v-row class="mt-16">
                <v-col
                col="12"
                md="6"
                >
                    <h6 class="text-h6 text-primary">
                        Cápsula do tempo
                    </h6>
                    <p class="py-8">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirm od tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum . Stet.
                    </p>
                    <v-btn color="primary" variant="tonal" class="rounded-pill">
                        ENVIAR MENSAGEM PARA O FUTURO
                    </v-btn>
                </v-col>  

                <v-col
                cols="12"
                md="6"
                >
                    <v-sheet
                    color="transparent"
                    class="d-flex justify-center"
                    >
                        <v-img 
                        max-width="300px"
                        class="rounded-lg py-8"
                        lazy-src="./img/capsula-tempo.png"
                        src="./img/capsula-tempo.png"
                        /> 
                    </v-sheet>
                </v-col>
            </v-row>  


        <h2 class="text-center mb-4 text-primary">
            Lorem ipsum.
        </h2>
        <v-card
        elevation="24"
        width="100%"
        class="mx-auto rounded-lg"
        >
            <v-carousel 
            hide-delimiter-background
            show-arrows="hover"
            color="primary"
            :continuous="false"
            >
                <v-carousel-item
                    src="https://www.einstein.br/GaleriaNewsroom/Unidade%20Morumbi%20l%20Noite.jpg"
                    cover
                >
                    <v-sheet 
                    color="transparent"
                    width="100%"
                    height="100%"
                    class="d-flex justify-end">
                        <v-sheet 
                        color="surface"
                        width="50%"
                        height="100%"
                        class="d-flex justify-center item-opacity pa-8"
                        >
                            <v-sheet
                            color="transparent"
                            class="content-scroll-content text-body-2"
                            >
                                <p>
                                    Lorem ipsum dolor sit am et, consetetur sadipscing elitr, sed
                                    diam nonumy eirm od tem por invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takim ata sanctus est Lorem ipsum dolor
                                    sit amet.
                                </p>
                                <p class="mt-4">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirm od tempor invidunt ut labore et
                                    dolore m agna aliquyam erat, sed diam voluptua. At vero eos
                                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takim ata sanctus est Lorem ipsum dolor
                                    sit amet.
                                </p>
                            </v-sheet>
                        </v-sheet>
                    </v-sheet>
                
                </v-carousel-item>

                <v-carousel-item
                    src="https://www.einstein.br/GaleriaNewsroom/58beb8d7fee6bfef11658397_1497224211125_2017.06.09_FHM_0001.jpg"
                    cover
                >
                    <v-sheet 
                    color="transparent"
                    width="100%"
                    height="100%"
                    class="d-flex justify-end">
                        <v-sheet 
                        color="surface"
                        width="50%"
                        height="100%"
                        class="d-flex justify-center item-opacity pa-8"
                        >
                            <v-sheet
                            color="transparent"
                            class="content-scroll-content text-body-2"
                            >
                                <p>
                                    Consetetur sadipscing elitr, sed
                                    diam nonumy eirm od tem por invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takim ata sanctus est Lorem ipsum dolor
                                    sit amet.
                                </p>
                                <p class="mt-4">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirm od tempor invidunt ut labore et
                                    dolore m agna aliquyam erat, sed diam voluptua. At vero eos
                                    et accusam et justo duo dolores 
                                </p>
                            </v-sheet>
                        </v-sheet>
                    </v-sheet>
                </v-carousel-item>

                <v-carousel-item
                    src="https://www.einstein.br/GaleriaNewsroom/Unidade%20Chacara%20Klabin.JPG"
                    cover
                >
                    <v-sheet 
                    color="transparent"
                    width="100%"
                    height="100%"
                    class="d-flex justify-end">
                        <v-sheet 
                        color="surface"
                        width="50%"
                        height="100%"
                        class="d-flex justify-center item-opacity pa-8"
                        >
                            <v-sheet
                            color="transparent"
                            class="content-scroll-content text-body-2"
                            >
                                <p>
                                    Sit am et, consetetur sadipscing elitr, sed
                                    diam nonumy eirm od tem por invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takim ata sanctus.
                                </p>
                                <p class="mt-4">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirm od tempor invidunt ut labore et
                                    dolore m agna aliquyam erat, sed diam voluptua.
                                </p>
                            </v-sheet>
                        </v-sheet>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>

        <v-row class="mx-auto mt-16">
            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++01&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++02&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++03&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++04&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++05&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <v-card
                    class="rounded-lg mx-1"
                    max-width="344"
                    elevation="6"
                >
                    <v-img
                    src="https://placehold.co/600x400/ccc/eaeaea?text=content++image++06&font=montserrat"
                    height="200px"
                    cover
                    />
                    <v-card-title>
                        Lorem ipsum
                    </v-card-title>
                    <p class="text-body-2 mb-4 px-4 text-medium-emphasis">
                        Lorem ipsum dolor sit am et, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tem por invidunt ut labore et dolore magna.
                    </p>
                </v-card>
            </v-col>
        </v-row>
    
        <div class="mb-16" />

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


<script setup>
    import { onMounted } from "vue";
    import { useAppStore } from '../../../store/app'
    import { useStartProgress } from '../../../components/composables/useProgress'
    import { useBlockStatus } from '../../../components/composables/useBlockStatus'
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