<template>

    <v-card 
    transition="scroll-x-transition"
    class="mx-auto animate__animated animate__fadeInUp"
    elevation="8"
    max-width="380"
    rounded="xl"
    >
        <!--Top Modal-->
        <v-sheet
        height="80"  
        class="d-flex align-center w-100 rounded-t-xl fixed-bar"
        :class=" appStore.isDarkMode ? 'container-dark' : 'container-light' "
        >
            <v-toolbar
            color="rgba(0, 0, 0, 0)"
            theme="light"
            >
                <v-container
                color="transparent"
                width="100%"
                class=" d-flex align-center"
                :class="!appStore.isMobile ? 'justify-center' : 'justify-start'"
                >
                    <v-img
                    v-if="!appStore.isMobile"
                    class="me-4"
                    src="../assets/img/login-change-icon.svg"
                    max-width="40"
                    />

                    <h5 class="text-h5 font-weight-bold text-white w-auto"> 
                        Troque sua senha 
                    </h5>
                </v-container>
            </v-toolbar>
        </v-sheet>

        <v-container
        class="pa-6"
        >
            <v-sheet 
            color="transparent" 
            class="text-start text-subtitle-1 font-weight-light mb-5 mt-2 mx-4"
            >
                <a>
                Lorem ipsum dolor sit am et,
                consetetur sadipscing elitr, sed
                diam nonumy eirm od tem por
                invidunt ut labore et dolore m agna
                aliquyam erat, sed diam voluptua.
                At vero eos et accusam et.
                </a>
            </v-sheet>

            <v-container
            class="px-10"
            >
                <div class="text-subtitle-1 text-medium-emphasis">Nova senha:</div>

                <v-text-field
                v-model="password"
                :append-inner-icon=" isVisible ? 'mdi-eye-off' : 'mdi-eye' "
                :type=" isVisible? 'text' : 'password' "
                :counter="6"
                :class="password.length >= 6 ? 'text-success' : '' "
                minlength="6"
                prepend-inner-icon="mdi-lock-outline"
                placeholder="- - -"
                required
                color="secondary"
                @click:append-inner="isVisible= !isVisible"
                />

                <div class="text-subtitle-1 text-medium-emphasis">Repita a senha:</div>

                <v-text-field
                :disabled ="password.length < 6"
                v-model="passwordConfirm"
                :append-inner-icon=" isVisible ? 'mdi-eye-off' : 'mdi-eye' "
                :type=" isVisible? 'text' : 'password' "
                :class="password == passwordConfirm && password.length >= 6 ? 'text-success' :  passwordConfirm != '' &&  password.length >= 6?  'text-error' : '' "
                prepend-inner-icon="mdi mdi-lock-check-outline"
                placeholder="- - -"
                required
                color="secondary"
                @click:append-inner="isVisible= !isVisible"
                />

                <v-btn
                :disabled ="password != passwordConfirm || password.length < 6 || isFinishBtn"
                :append-icon="isFinishBtn ? 'mdi-check-circle-outline' : '' "
                block
                class="mb-6 mt-4 text-secondary"
                color="primary"
                size="large"
                rounded
                @click="submmitUser"
                >
                <span v-if="!isFinishBtn">Confirmar</span>
                <span v-else>Feito!</span>

                </v-btn>

                <v-btn
                v-if="isFinishBtn "
                :disabled ="password != passwordConfirm || password.length < 6"
                block
                class="mb-6 mt-4 animate__animated animate__fadeInUp"
                color="primary"
                size="large"
                rounded
                @click="goNext"
                >
                Ok, vamos lá?
                </v-btn>
            </v-container>
        </v-container>
    </v-card>
</template>


<script setup>

    import { ref } from 'vue'
    import { useAppStore } from '@/store/app'
    import { useApiStore } from '@/store/api'

    //Inicia a store
    const appStore = useAppStore()
    const apiStore = useApiStore();

    //Exibe / esconde a senha
    const isVisible = ref(false)

    //Armezena user e password
    const password = ref('')
    const passwordConfirm = ref('')
    const isFinishBtn = ref(false)

    //Finaliza etapa
    const goNext = () => {
        //Atualiza o localStorage
        appStore.appData.firstAccess = 1
        localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
    }

    //Altera senha do usuário
    const submmitUser = () => { 
        //Atualiza backend
        const userId = JSON.parse(localStorage.getItem('userId'))
        const token = JSON.parse(sessionStorage.getItem('token'))
        apiStore.usePost('/login', {"userId": userId,"token": token, "newPassword": password.value})

        //User Feedback
        appStore.globalMsg('Sua senha foi alterada com sucesso! ', 'success')

        isFinishBtn.value = true
    }

</script>