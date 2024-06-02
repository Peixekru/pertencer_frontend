import { defineStore } from 'pinia';
import { useAppStore } from './app';
import CryptoJS from 'crypto-js';
import axios from 'axios';

// Definir a loja de autenticação com Pinia
export const useAuthStore = defineStore('userAuth', {
    state: () => ({
        // URL do servidor configurada a partir das variáveis de ambiente
        serverUrl: `${import.meta.env.VITE_BASE_URL}pertencer`,
        permition: null
    }),

    actions: {
        // Função para criptografar dados
        encrypt(data) {
            return CryptoJS.AES.encrypt(data, '19041981').toString();
        },

        // Função para descriptografar dados
        decrypt(data) {
            return CryptoJS.AES.decrypt(data, '19041981').toString(CryptoJS.enc.Utf8);
        },

        // Função assíncrona para login do usuário
        async useLogin(path, data) {
            const appStore = useAppStore();

            // Criptografar e armazenar o nome de usuário no localStorage
            if (data.username) {
                const encryptedUsername = this.encrypt(data.username);
                localStorage.setItem('userName', JSON.stringify(encryptedUsername));
            }

            // Criptografar e armazenar a senha no localStorage
            if (data.password) {
                const encryptedPassword = this.encrypt(data.password);
                localStorage.setItem('psw', JSON.stringify(encryptedPassword));
            }

            try {
                // Enviar dados de login para o servidor
                const response = await axios.post(`${this.serverUrl}${path}`, data);

                // Aguarda o carregamento da cápsula do tempo
                await this.loadCapsule(data.username, appStore);

                // Tratar a resposta do login
                if (path === '/login') {
                    await this.handleLoginResponse(response, appStore);
                } else if (path === '/chgpsw') {
                    // Tratar a resposta de mudança de senha
                    this.handleChangePasswordResponse(response, appStore);
                } else if (path === '/resetpassword') {
                    // Tratar a resposta de recuperação de senha
                    this.handleResetPasswordResponse(response, appStore);
                }

            } catch (error) {
                // Tratar erros na solicitação
                console.error(error);
                appStore.globalMsg('Oops! Um erro inesperado aconteceu.', 'error');
            }
        },

        // Função para tratar a resposta de login
        async handleLoginResponse(response, appStore) {
            console.log('LOGIN GERAL: ', response.data.hideactivities);


            const data = JSON.parse(response.data.info);
            appStore.appData = data;
            localStorage.setItem('localAppData', JSON.stringify(data));
            localStorage.setItem('userId', JSON.stringify(response.data.id));
            sessionStorage.setItem('loginState', true);

            this.permition = response.data.hideactivities;




            console.log(' -> Objeto recebido do servidor no Login: ', data);

            // Verificar e executar a função addObjectNameToLessons
            if (!appStore.appData.setPermission || appStore.appData.setPermission === false) {
                await this.addObjectNameToLessons(appStore);
                appStore.appData.setPermission = true;
                localStorage.setItem('localAppData', JSON.stringify(appStore.appData));
            }

            console.log('Objetos escondidos', appStore.appData);

            // Encaminhar para a página de boas-vindas ou home
            if (data.firstAccess < 5 || data.firstAccess !== 'finished') {
                this.$router.push('/welcome');
            } else {
                this.$router.push('home');
            }
        },

        // Função para tratar a resposta de mudança de senha
        handleChangePasswordResponse(response, appStore) {
            if (response.data.result === 'OK') {
                console.log(' -> Status da alteração de senha: ', response.data.result);
                appStore.isChangedPassword = true;
                appStore.globalMsg('Sua senha foi alterada com sucesso!', 'success');
            }
        },

        // Função para tratar a resposta de recuperação de senha
        handleResetPasswordResponse(response, appStore) {
            console.log(' -> Status da recuperação da senha: ', response.data.result);
            appStore.globalMsg('Se você tem um usuário no EinsteinPertencer, receberá um email com o link para resetar sua senha.', 'success');
        },

        // Função assíncrona para carregar informações da cápsula do tempo
        async loadCapsule(username, appStore) {
            try {
                const response = await axios.post(`${this.serverUrl}/loadcapsule`, { username });
                console.log('-> Cápsula info: ', response.data.info);
                appStore.capsulaInfo = JSON.parse(response.data.info);

                sessionStorage.setItem('userMail', response.data.email);
                localStorage.setItem('capsulaInfo', response.data.info);
            } catch (error) {
                // Tratar erros na solicitação
                console.error(error);
                appStore.globalMsg('Oops! As informações da cápsula do tempo não foram carregadas.', 'error');
            }
        },

        // Adicionar nomes às lições, substituir valores de "img" e remover lições baseadas em permissão
        async addObjectNameToLessons(appStore) {
            function removeLessonsByIndice(appData, indices) {
                // Ordenar os índices de exclusão de forma decrescente
                indices.sort((a, b) => {
                    if (a[0] !== b[0]) return b[0] - a[0]; // Primeiro, ordenar por unidade
                    if (a[1] !== b[1]) return b[1] - a[1]; // Depois, por content
                    return b[2] - a[2]; // Finalmente, por lição
                });

                indices.forEach(([indiceUnidade, indiceContent, indiceLicao]) => {
                    const unidade = appData.unidades[indiceUnidade];
                    if (unidade) {
                        const content = unidade.content[indiceContent];
                        if (content) {
                            content.lessons.splice(indiceLicao, 1);
                        }
                    }
                });
            }

            let imgCount = 1; // Inicializa o contador para as imagens
            // Percorre todas as unidades
            appStore.appData.unidades.forEach((unidade) => {
                let count = 0; // Inicializa o contador para os nomes das telas
                // Percorre todas as content de cada unidade
                unidade.content.forEach((content) => {
                    // Percorre todas as lições de cada content
                    content.lessons.forEach((lesson) => {
                        // Cria o nome da tela com base no contador
                        lesson.objectName = `tela${count.toString().padStart(3, '0')}`;
                        // Substitui o valor de "img"
                        lesson.img = `img-${imgCount}`;
                        // Incrementa os contadores
                        count++;
                        imgCount++;
                    });
                });
            });

            console.log('localStatePermition', this.permition)

            if (this.permition === 0) {
                // Exclui o objeto que já está oculto para todos os perfis 
                removeLessonsByIndice(appStore.appData, [[3, 0, 2]]);
            } else {
                // Exclui objetos do perfil de Goiania
                removeLessonsByIndice(appStore.appData, [
                    [3, 0, 2],
                    [2, 0, 0],
                    [2, 0, 6]
                ]);

                // Atribui novos valores para todas as chaves dentro de "badges"
                appStore.appData.badges = {
                    "capsula": 0,
                    "clock": 0,
                    "heart": 'hide',
                    "picture": 0
                };
            }

        }
    }
});
