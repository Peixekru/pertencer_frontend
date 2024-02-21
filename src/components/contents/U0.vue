<template>
    <tela000 v-if="appStore.objectContent == 'tela000' "/>
    <tela001 v-if="appStore.objectContent == 'tela001' "/>
</template>

<script setup>
    import { useAppStore } from '../../store/app'
    const appStore = useAppStore() 

    import tela000 from "./U0/tela000.vue"
    import tela001 from "./U0/tela001.vue"
</script>