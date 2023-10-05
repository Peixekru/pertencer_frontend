<template>

    <v-container 
    fluid class="pa-0"
    >

        <!--//* Unidade 1 -->
        <U0C0 
        v-if="
        appStore.currentObjectIndex[0] == '0' &&
        appStore.currentObjectIndex[1] == '0' " 
        />

        <!--//* Unidade 2 -->
        <U1C0 
        v-if="
        appStore.currentObjectIndex[0] == '1' &&
        appStore.currentObjectIndex[1] == '0' " 
        />

        <U1C1 
        v-if="
        appStore.currentObjectIndex[0] == '1' &&
        appStore.currentObjectIndex[1] == '1' " 
        />

        <U1C2 
        v-if="
        appStore.currentObjectIndex[0] == '1' &&
        appStore.currentObjectIndex[1] == '2' " 
        />

        <U1C3 
        v-if="
        appStore.currentObjectIndex[0] == '1' &&
        appStore.currentObjectIndex[1] == '3' " 
        />

        <U1C4 
        v-if="
        appStore.currentObjectIndex[0] == '1' &&
        appStore.currentObjectIndex[1] == '4' " 
        />

        <!--//* Unidade 3 -->
        <U2C0 
        v-if="
        appStore.currentObjectIndex[0] == '2' &&
        appStore.currentObjectIndex[1] == '0' " 
        />

        <!--//* Unidade 4 -->
        <U3C0 
        v-if="
        appStore.currentObjectIndex[0] == '3' &&
        appStore.currentObjectIndex[1] == '0' " 
        />

    </v-container>


</template>

<script setup>
    import { useAppStore } from "../../store/app"
    const appStore = useAppStore()

    //Importação das unidades
    import U0C0 from "./U0C0.vue"
    import U1C0 from "./U1C0.vue"
    import U1C1 from "./U1C1.vue"
    import U1C2 from "./U1C2.vue"
    import U1C3 from "./U1C3.vue"
    import U1C4 from "./U1C4.vue"
    import U2C0 from "./U2C0.vue"
    import U3C0 from "./U3C0.vue"

</script>


<!--//* Styles Globais 'content- ...' -->
<style>
    .content-scroll-content{
        overflow: scroll;
    }

    .content-fade-in {
        animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 3s; /* don't forget to set a duration! */
    }
</style>