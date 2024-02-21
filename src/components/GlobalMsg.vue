<template>
    <v-snackbar
    v-model="appStore.msgVisibilty"
    timeout=3000
    location='bottom'
    :color="appStore.msgColor"
    >
        {{ appStore.msgText }}
        <template #actions>
            <v-btn
            icon="mdi-close"
            variant="plain"
            @click="appStore.msgVisibilty = false"
            />
        </template>
    </v-snackbar>
</template>

<script setup>
    import { useAppStore } from '@/store/app'
    const appStore = useAppStore()
</script>