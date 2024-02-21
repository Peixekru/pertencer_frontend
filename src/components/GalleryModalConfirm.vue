<template>
    <v-dialog v-model="appStore.isImageGalleryConfirm" >

        <v-card
            max-width="344" 
            rounded="xl"
            class="mx-auto px-2 py-4"
            >
                <v-card-item class="mb-4">
                    <div>
                        <div class="text-h6 mb-3">
                            Você tem certeza que deseja substituir sua foto?
                        </div>
                        <div class="text-caption">
                            Sua galeria só tem espaço para uma bela foto mas você pode substitui-la e compartilhar quantas vezes quiser. Experimente!
                        </div>
                    </div>
                </v-card-item>

                <v-sheet
                class="px-4"
                >
                    <v-btn 
                    block
                    class="bg-primary text-secondary rounded-pill my-6"
                    @click="changeImage()"
                    >
                        Trocar de foto
                    </v-btn>
                    <v-btn 
                    block
                    variant="tonal"
                    class=" rounded-pill mt-6 mb-4"
                    @click="appStore.isImageGalleryConfirm = false"
                    >
                        Manter a foto antiga
                    </v-btn>
                </v-sheet>
            </v-card>    

    </v-dialog>
</template>


<script setup>
    import { useAppStore } from '../store/app'
    import { defineProps } from "vue";
    const appStore = useAppStore()

    const changeImage = () => {
        appStore.isImageGalleryConfirm = false
        appStore.changeImage = true
        props.openImg()
    }

    const props = defineProps({
        openImg: Function,
    });


</script>

<style lang="scss">
    @import '../styles/main.scss';
</style>