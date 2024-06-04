<template>
    <v-container fluid class="pa-0">
        <component :is="dynamicComponent" :is-last-object="isLastObject" />
    </v-container>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from "vue";
import { useAppStore } from "../../store/app";

const appStore = useAppStore();

// Extrair os objectNames das lições da unidade atual e verificar se possuem lastObject = true
const objectNames = computed(() => {
    return appStore.appData.unidades[appStore.currentObjectIndex[0]].content
        .flatMap(content => content.lessons.map(lesson => {
            return lesson.objectName;
        }));
});

// Computed property para obter o nome do componente dinamicamente
const currentComponentName = computed(() => {
    return objectNames.value[appStore.currentObjectIndex[2]];
});

// Computed property para verificar se a lição atual tem a chave lastObject = true
const isLastObject = computed(() => {
    const currentLesson = appStore.appData.unidades[appStore.currentObjectIndex[0]].content
        .flatMap(content => content.lessons)[appStore.currentObjectIndex[2]];
    const isLast = currentLesson.lastObject === true;
    console.log('isLastObject:', isLast);
    return isLast;
});

// Definir o componente dinâmico
const dynamicComponent = computed(() => {
    const componentName = currentComponentName.value;
    console.log('NOME DO COMPONENTE: ', `./U${appStore.currentObjectIndex[0]}/${componentName}.vue`);
    return defineAsyncComponent(() => import(`./U${appStore.currentObjectIndex[0]}/${componentName}.vue`));
});

// Inicializar um array reativo para armazenar os valores de objectName
const getObjectName = ref([]);

console.log('Valores de objectName na unidade 3:');

appStore.appData.unidades[3].content.forEach((content) => {
    content.lessons.forEach((lesson) => {
        getObjectName.value.push(lesson.objectName);
    });
});

console.log('NOME DO JSON: ', getObjectName.value[appStore.currentObjectIndex[2]]);

</script>


<style>
.content-scroll-content {
    overflow: scroll;
}

.content-fade-in {
    animation: fadeIn;
    animation-duration: 3s;
}
</style>





//appStore.currentObjectIndex[0] //Unidade num
//appStore.currentObjectIndex[1] //Lessons (antigo carrossel) num
//appStore.currentObjectIndex[2] //Content num