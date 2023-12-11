<template>
    <!--modal blur step 01-->
    <v-sheet 
    class=" overlay-home-fx">
    </v-sheet>
</template>


<style scoped>
    .overlay-home-fx{
        position: absolute;
		z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 79, 129, 0.6) !important; 
        backdrop-filter: blur(6px) !important;
    }

</style>