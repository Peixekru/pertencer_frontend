<template>
    <tela000 v-if="appStore.objectContent == 'tela000' "/>
    <tela001 v-if="appStore.objectContent == 'tela001' "/>
    <tela002 v-if="appStore.objectContent == 'tela002' "/>
    <tela003 v-if="appStore.objectContent == 'tela003' "/>
    <tela004 v-if="appStore.objectContent == 'tela004' "/>
    <tela005 v-if="appStore.objectContent == 'tela005' "/>
</template>

<script setup>
    import { useAppStore } from '../../store/app'
    const appStore = useAppStore() 

    import tela000 from "./U1C3/tela000.vue"
    import tela001 from "./U1C3/tela001.vue"
    import tela002 from "./U1C3/tela002.vue"
    import tela003 from "./U1C3/tela003.vue"
    import tela004 from "./U1C3/tela004.vue"
    import tela005 from "./U1C3/tela005.vue"
</script>