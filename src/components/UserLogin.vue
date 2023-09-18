<template>

    <v-card 
    transition="scroll-x-transition"
    class="mx-auto px-10 py-6 animate__animated animate__fadeInUp"
    elevation="8"
    max-width="380"
    rounded="xl"
    >

    <v-img
        class="mx-auto my-8"
        :class="appStore.isDarkMode ? 'white-svg' : '' "
        max-width="350"
        src="../assets/img/login-top-logo.svg"
    ></v-img>

        <div class="text-subtitle-1 text-medium-emphasis">Login</div>
                
        <v-text-field
        v-model="login"
        :counter="11"
        :class="login.length == 11 ? 'text-success' : '' "
        maxlength="11"
        prepend-inner-icon="mdi-account-outline"
        placeholder="CPF"
        required
        color="primary"
        ></v-text-field>


        <div class="text-subtitle-1 text-medium-emphasis">Senha</div>

        <v-text-field
        v-model="senha"
        :append-inner-icon=" isVisible ? 'mdi-eye-off' : 'mdi-eye' "
        :type=" isVisible? 'text' : 'password' "
        prepend-inner-icon="mdi-lock-outline"
        placeholder="- - -"
        required
        color="primary"
        @click:append-inner="isVisible= !isVisible"
        ></v-text-field>


        <v-btn
        block
        class="mb-6 mt-4"
        color="primary"
        size="large"
        rounded
        @click="login != '' && login.length == 11 && senha != ''? 
        sendInfos() : snackbar = true"
        >
        Entrar
        </v-btn>

        <v-snackbar
        v-model="snackbar"
        :location="location"
        :timeout="timeout"
        >
            {{ text }}
            <template #actions>
                <v-btn
                icon="mdi-close"
                color="secundary"
                variant="plain"
                @click="snackbar = false"
                />
            </template>
        </v-snackbar>


        <v-card-text class="text-center mb-4">
            <a
            class="text-decoration-none text-primary"
            @click="teste('Criar fuxo de recuperação de senha.')"
            >
                Esqueci minha senha <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>


        <v-img
            class="mx-auto my-2 animate__animated animate__flipInX animate__delay-1s"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            max-width="250"
            src="../assets/img/login-footer-logo.svg"
        ></v-img>


    </v-card>

</template>


<script setup>

    import { ref, onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    import { useRouter } from 'vue-router'

    import { useApiGet } from '@/components/composables/useApi'

    const router = useRouter()

    //Inicia a store
    const appStore = useAppStore()

    //Exibe / esconde a senha
    const isVisible = ref(false)

    //Registra login e senha
    const login = ref('')
    const senha = ref('')

    async function sendInfos () {
        useApiGet(':3001', '/login', {"login": login.value, "senha": senha.value})
        loadHome()
    }

    const loadHome = () => {
            useApiGet(':3006', '/user', {"Key": "Logoin"});
            router.push('/home')
    }

    //Mensagem snapbar
    const snackbar = ref(false)
    const text = ref('Oops... Seu login ou senha estão incorretos.')
    const location = ref('bottom')
    const timeout = ref(3000)

    //Debug tool
    const teste = (msg) => {
        alert(msg)
    }

    onMounted(() => {
        localStorage.removeItem('userToken')
        appStore.logginStatus = false
    })

</script>