<template>

    <v-progress-linear 
        v-model="appStore.appData.glogalProgress"
        color="#80c600" 
        height="8"
        class="bar-pos"
    />

</template>

<script setup>
    import { useAppStore } from '../store/app'
    const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.bar-pos{
    position: fixed;
    top: 0;
    z-index: 10000;
    border-bottom: solid 1px rgba(255,255,255,.3);
    background-color: #181542;
}
</style>