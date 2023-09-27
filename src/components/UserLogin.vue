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
        v-model="user"
        :counter="11"
        :class="user.length == 11 ? 'text-success' : '' "
        maxlength="11"
        prepend-inner-icon="mdi-account-outline"
        placeholder="CPF"
        required
        color="primary"
        ></v-text-field>


        <div class="text-subtitle-1 text-medium-emphasis">Senha</div>

        <v-text-field
        v-model="password"
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
        @click="user != '' && user.length == 11 && password != ''? 
        submmitUser() : appStore.globalMsg('Oops! Login ou senha incorretos. ', 'error')"
        >
        Entrar
        </v-btn>

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
    import { useAuthStore } from '../store/userAuth'

    //Inicia a store
    const appStore = useAppStore()
    const authStore = useAuthStore()

    //Exibe / esconde a senha
    const isVisible = ref(false)

    //Armezena user e password
    const user = ref('')
    const password = ref('')

    //Limpa informações do usuário persistentes
    localStorage.removeItem("userInfos");

    //Envia os dados para validação de login
    const submmitUser = () => {
        authStore.useLogin(
            // path / { user, password }
            '/login', {"user": user.value, "password": password.value}
        )
    }

    //Debug tool
    const teste = (msg) => {
        alert(msg)
    }

    onMounted(() => {
        localStorage.removeItem('userToken')
        appStore.logginStatus = false
    })

</script>