<template>

    <template v-if="isLogincard">

        <v-card 
        transition="scroll-x-transition"
        class="mx-auto px-10 py-6 animate__animated animate__fadeInLeft"
        elevation="4"
        max-width="380"
        rounded="xl"
        >
    
        <v-img
            class="mx-auto my-8"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            max-width="220"
            src="../assets/img/login-top-logo.svg"
        />
    
            <div class="text-subtitle-1 text-medium-emphasis">Login</div>
                    
            <v-text-field
            v-model="user"
            :counter="11"
            :class="user.length == 11 ? 'text-success' : '' "
            maxlength="11"
            prepend-inner-icon="mdi-account-outline"
            placeholder="CPF"
            required
            color="secondary"
            />
    
    
            <div class="text-subtitle-1 text-medium-emphasis">Senha</div>
    
            <v-text-field
            v-model="password"
            :append-inner-icon=" isVisible ? 'mdi-eye-off' : 'mdi-eye' "
            :type=" isVisible? 'text' : 'password' "
            prepend-inner-icon="mdi-lock-outline"
            placeholder="- - -"
            required
            color="secondary"
            @click:append-inner="isVisible= !isVisible"
            />
    
    
            <v-btn
            block
            class="my-3 text-secondary"
            color="primary"
            size="large"
            rounded
            @click="user != '' && user.length == 11 && password != ''? 
            submmitUser() : appStore.globalMsg('Oops! Seu login precisa ter 11 caracteres', 'error')"
            >
            Entrar
            </v-btn>
    
            <v-card-text class="text-center">
                <a
                class="text-decoration-none text-primary"
                @click="isLogincard = !isLogincard"
                >
                    Esqueci minha senha <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
    
            <v-card-text class="text-center font-weight-bold mb-4">
                <a
                class="text-decoration-none text-primary"
                @click="sendMail"
                >
                    PRECISA DE AJUDA?
                </a>
            </v-card-text>
    
    
            <v-img
                class="mx-auto my-4  animate__animated animate__flipInX animate__delay-1s"
                :class="appStore.isDarkMode ? 'white-svg' : '' "
                max-width="250"
                src="../assets/img/login-footer-logo.svg"
            />
    
        </v-card>

    </template>

    <template v-else>

        <v-card 
        transition="scroll-x-transition"
        class="mx-auto px-10 py-6 animate__animated animate__fadeInRight"
        elevation="4"
        max-width="380"
        rounded="xl"
        >

        <v-img
            class="mx-auto my-8"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            max-width="220"
            src="../assets/img/login-top-logo.svg"
        />

            <div class="text-subtitle-1 text-medium-emphasis mb-3">Insira seu CPF para receber uma nova senha por e-mail.</div>
                    
            <v-text-field
            v-model="userCPF"
            :counter="11"
            :class="userCPF.length == 11 ? 'text-success' : '' "
            maxlength="11"
            prepend-inner-icon="mdi-account-outline"
            placeholder="CPF"
            required
            color="secondary"
            />

            <v-btn
            block
            class="my-3 text-secondary"
            color="primary"
            size="large"
            rounded
            @click=" userCPF != '' && userCPF.length == 11? 
            resetPwd() : appStore.globalMsg('Oops! Seu login precisa ter 11 caracteres', 'error')"
            >
            Enviar
            </v-btn>

            <v-card-text class="text-center">
                <a
                class="text-decoration-none text-primary"
                @click="isLogincard = !isLogincard"
                >
                <v-icon icon="mdi-chevron-left"/> Entrar com minha senha
                </a>
            </v-card-text>

            <v-card-text class="text-center font-weight-bold mb-4">
                <a
                class="text-decoration-none text-primary"
                @click="sendMail"
                >
                    PRECISA DE AJUDA?
                </a>
            </v-card-text>


            <v-img
                class="mx-auto my-4  animate__animated animate__flipInX animate__delay-1s"
                :class="appStore.isDarkMode ? 'white-svg' : '' "
                max-width="250"
                src="../assets/img/login-footer-logo.svg"
            />

        </v-card>

    </template>

</template>


<script setup>

    import { ref, onMounted } from 'vue'
    import { useAppStore } from '../store/app'
    import { useAuthStore } from '../store/userAuth'

    //Sons dos botões
    import { useBeepSound }  from '@/components/composables/useSounds'


    //Está em login ou esqueçeu a senha?

    const isLogincard = ref(true)


    //Inicia a store
    const appStore = useAppStore()
    const authStore = useAuthStore()

    //Exibe / esconde a senha
    const isVisible = ref(false)

    //Armezena user e password
    const user = ref('')
    const password = ref('')


    const userCPF = ref('')

    //Limpa informações do usuário persistentes
    localStorage.removeItem("userInfos");


    //Envia email
    const sendMail = () => {
        window.open('mailto:Pertencer<ensinocorporativo@einstein.br>?subject=Contato - Pertencer&body=Olá, Einstein Pertencer!')
    }


    //Envia os dados para validação de login
    const submmitUser = () => {
        authStore.useLogin(
            // path / { user, password }
            '/login', {"username": user.value, "password": password.value }
        )
    }

    //Envia cpf quando o usuário esquece a senha
    const resetPwd = () => {
        authStore.useLogin(
            // path / { user, password }
            '/resetpassword', { "userCPF": userCPF.value }
        )
    } 


    onMounted(() => {
        appStore.logginStatus = false
        //inicia som nos botões
        useBeepSound()
    })

</script>