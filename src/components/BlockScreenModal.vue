<template>
    <v-dialog class="teste" v-model="appStore.blockScreenModal" >

        <v-card
        max-width="344" 
        rounded="xl"
        class="mx-auto px-2 py-4"
        >
            <v-card-item class="mb-4">
                <div>
                    <div class="text-h6 mb-3">
                        Este treinamento foi projetado para proporcionar uma experiência melhor utilizando o 
                        celular no sentido vertical.
                    </div>
                    <v-sheet class="d-flex justify-start">
                        <v-icon icon="mdi-phone-rotate-portrait" size="x-large" />
                        <div class="text-caption ms-6">
                            Rotacione o seu dispositivo e aproveite tudo que preparamos!
                        </div>
                    </v-sheet>
                </div>
            </v-card-item>

        </v-card>

    </v-dialog>
</template>

<script setup>
import { useAppStore } from '../store/app'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()

const logout = () => {
    //Fecha o modal de confirmação
    appStore.logoutModal = false
    //Apaga dados locais 
    sessionStorage.clear();
    localStorage.clear();
    //Direciona para login View
    router.push('/')
}


</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.teste {
    background-color: rgb(100, 100, 100);
}

</style>


