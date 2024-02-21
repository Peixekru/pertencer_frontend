<template>
    <v-dialog v-model="appStore.logoutModal" >

        <v-card
        max-width="344" 
        rounded="xl"
        class="mx-auto px-2 py-4"
        >
            <v-card-item class="mb-4">
                <div>
                    <div class="text-h6 mb-3">
                        Você tem certeza que deseja sair do treinamento?
                    </div>
                    <div class="text-caption">
                        Todas as suas conquistas e progresso já foram salvos e você poderá voltar quando quiser.
                    </div>
                </div>
            </v-card-item>

            <v-sheet
            class="px-4"
            >
                <v-btn 
                block
                class="bg-primary text-secondary rounded-pill my-6"
                @click="logout"
                >
                    Quero sair
                </v-btn>
                <v-btn 
                block
                variant="tonal"
                class=" rounded-pill mt-6 mb-4"
                @click="appStore.logoutModal = false"
                >
                    Quero voltar
                </v-btn>
            </v-sheet>
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
</style>


