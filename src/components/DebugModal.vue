<template>
    <v-dialog v-model="appStore.debugModal" max-width="1100px">

        
        
        <v-card
        color="transparent"
        elevation="0"
        class="mx-auto px-6"
        >
            <v-card
            class="mx-auto my-4 text-center"
            rounded = "lg"
            min-width="280"
            title="APAGAR"
            subtitle="Apagar todos os dados do curso."
            @click="cleanData"
            >
                <v-icon color="error" icon="mdi-alert-circle-outline" size="x-large" class="mb-4"/>
            </v-card>
        </v-card>

        <v-card
        v-if="appStore.currentRoute == '/conteudo'"
        color="transparent"
        elevation="0"
        class="mx-auto px-6"
        >
            <v-card
            class="mx-auto my-4 text-center"
            rounded = "lg"
            min-width="280"
            title="AVANÇAR"
            subtitle="Completar esta tela."
            @click="goNext"
            >
                <v-icon color="success" icon="mdi-check-circle-outline" size="x-large" class="mb-4"/>
            </v-card>
        </v-card>

    </v-dialog>
</template>

<script setup>

    import { useAppStore } from '../store/app'
    import { useApiStore } from '../store/api'
    import { useRouter } from 'vue-router'
    import { useStartProgress } from './composables/useProgress'

    import json from '../../db.json'

    const appStore = useAppStore()
    const apiStore = useApiStore()
    const router = useRouter()

    //JSON LIMPO BLOQUEADO
    const cleanDataContent = json

    const cleanData = () => {

        console.log('Tudo limpo')

        //Fecha modal debug
        appStore.debugModal = false

        //Atualiza o localStorage
        localStorage.setItem('localAppData', JSON.stringify(cleanDataContent));
        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'));
        //port / path / data
        apiStore.usePost('/' + userId , JSON.parse(localStorage.getItem('localAppData')))

        //Volta para página de login
        router.push('/')

    }

    const goNext = () => {
        console.log('Footer liberado')

        //Fecha modal debug
        appStore.debugModal = false

        //Exibe o footer
        appStore.finishedContent(true)
        useStartProgress();

        //router.push('/home')
    }

</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
</style>


