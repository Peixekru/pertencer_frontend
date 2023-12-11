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
                    Para garantir a segurança de sua conta, solicitamos que crie uma nova senha numérica de 
                    seis caracteres. Insira a senha desejada no campo abaixo e repita-a para confirmação. 
                    Agradecemos por sua colaboração.
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
                :counter="12"
                maxlength="12"
                :class="password.length >= 6  ? 'text-success' : '' "
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
                maxlength="12"
                v-model="passwordConfirm"
                :append-inner-icon=" isVisibleConfirm ? 'mdi-eye-off' : 'mdi-eye' "
                :type=" isVisibleConfirm ? 'text' : 'password' "
                :class="password == passwordConfirm && password.length >= 6 ? 'text-success' :  passwordConfirm != '' &&  password.length >= 6 ? 'text-error' : '' "
                prepend-inner-icon="mdi mdi-lock-check-outline"
                placeholder="- - -"
                required
                color="secondary"
                @click:append-inner="isVisibleConfirm = !isVisibleConfirm"
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
                v-show="appStore.isChangedPassword && isFinishBtn"
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
    import { useAuthStore } from '../store/userAuth'

    //Inicia a store
    const appStore = useAppStore()
    const authStore = useAuthStore()

    //Exibe / esconde a senha
    const isVisible = ref(false)
    const isVisibleConfirm = ref(false)

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

        isFinishBtn.value = true

        const userId = JSON.parse(localStorage.getItem('userId'))

        authStore.useLogin(
            // path / { userID, password }
            '/chgpsw', {"userId": userId, "password": password.value }
        )

    }

</script>