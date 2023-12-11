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

    const appStore = useAppStore()
    const apiStore = useApiStore()
    const router = useRouter()

    //JSON LIMPO BLOQUEADO
    const cleanDataContent = {
        "firstAccess": 0,
        "welcomeStepCounter": 0,
        "glogalProgress": 0,
        "access": {
            "baixaVisao": "0",
            "habMotoras": "0",
            "daltonismo": "0",
            "epilepsia": "0",
            "tdah": "0",
            "dislexia": "0",
            "fontSize": "1",
            "lineSize": "1",
            "zoomSize": "0",
            "contrast": "0",
            "color": "0",
            "cursor": "0",
            "textSpeech": "0",
            "keyboardNavigation": "0",
            "linkHighlight": "0",
            "animationBlock": "0",
            "readFocus": "0",
            "readGuid": "0"
        },
        "colorTheme": "light",
        "themeNumber": "0",
        "unidades": [
            {
                "title": "Felizes por termos você",
                "image": "https://i.ibb.co/VYjTRPT/card-img01.png",
                "progress": 0,
                "status": 0,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Boas-vindas com Sidney Klajner",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 1
                            },
                            {
                                "title": "Vídeo manifesto",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Um sonho que virou compromisso",
                "image": "https://i.ibb.co/chYNqzG/card-img02.png",
                "progress": 0,
                "status": 0,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Linha do Tempo - Nossa História",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Cápsula do tempo",
                                "icon": "capsula",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 2,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Missão, Visão e Valores",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++03&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "AmigoH",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Voluntariado Einstein",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Presença Einstein",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Nossa estrutura e conquistas",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Relógio - Quiz game",
                                "icon": "slide",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Meus Benefícios e Oportunidades",
                "image": "https://i.ibb.co/rpkStYn/card-img03.png",
                "progress": 0,
                "status": 0,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Benefícios",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Ensino Corporativo",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Ações de Desenvolvimento",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Gestão de Desempenho",
                                "icon": "slide",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Experiência do Colaborador",
                                "icon": "slide",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Carreira, Reconhecimento e Recompensa",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Coração - Jogo da Memória",
                                "icon": "slide",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Jeito Einstein de ser",
                "image": "https://i.ibb.co/FzCHSDg/card-img04.png",
                "progress": 0,
                "status": 0,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Diversidade, Equidade e Inclusão",
                                "icon": "video",
                                "time": "23",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Qualidade e Segurança",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Ética e Compliance",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "Experiência do Paciente",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            },
                            {
                                "title": "#Agora eu sou uma gotinha Einstein - Encerramento com Sidney Klajner",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 0,
                                "block": 0
                            }
                        ]
                    }
                ]
            }
        ],
        "capsula": {
            "status": 0,
            "content": {
                "startDate": "",
                "sendDate": "",
                "email": "",
                "style": 1,
                "sendMessage": ""
            }
        },
        "galeria": {
            "status": 0,
            "totalUsers": 0,
            "content": {
                "userImgs": [],
                "globalImgs": []
            }
        },
        "start": {
            "status": 0,
            "content": []
        },
        "workplace": {
            "status": 0,
            "content": []
        },
        "badges": {
            "capsula" : 0,
            "clock" : 0,
            "heart": 0,
            "picture" : 0
        }
    }

    //JSON LIMPO OBJSTOS LIBERADOS
    /*const cleanDataContent = {
        "firstAccess": 0,
        "welcomeStepCounter": 0,
        "glogalProgress": 100,
        "access": {
            "baixaVisao": "0",
            "habMotoras": "0",
            "daltonismo": "0",
            "epilepsia": "0",
            "tdah": "0",
            "dislexia": "0",
            "fontSize": "1",
            "lineSize": "1",
            "zoomSize": "0",
            "contrast": "0",
            "color": "0",
            "cursor": "0",
            "textSpeech": "0",
            "keyboardNavigation": "0",
            "linkHighlight": "0",
            "animationBlock": "0",
            "readFocus": "0",
            "readGuid": "0"
        },
        "colorTheme": "light",
        "themeNumber": "0",
        "unidades": [
            {
                "title": "Felizes por termos você",
                "image": "https://i.ibb.co/VYjTRPT/card-img01.png",
                "progress": 0,
                "status": 1,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Boas-vindas com Sidney Klajner",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Vídeo manifesto",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                        ]
                    }
                ]
            },
            {
                "title": "Um sonho que virou compromisso",
                "image": "https://i.ibb.co/chYNqzG/card-img02.png",
                "progress": 0,
                "status": 1,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Linha do Tempo - Nossa História",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Cápsula do tempo",
                                "icon": "capsula",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 2,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Missão, Visão e Valores",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++03&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "AmigoH",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Voluntariado Einstein",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Presença Einstein",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Nossa estrutura e conquistas",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Relógio - Quiz game",
                                "icon": "slide",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++04&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Meus Benefícios e Oportunidades",
                "image": "https://i.ibb.co/rpkStYn/card-img03.png",
                "progress": 0,
                "status": 1,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Benefícios",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Ensino Corporativo",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Ações de Desenvolvimento",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Gestão de Desempenho",
                                "icon": "slide",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Experiência do Colaborador",
                                "icon": "slide",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Carreira, Reconhecimento e Recompensa",
                                "icon": "tree",
                                "time": "6",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Coração - Jogo da Memória",
                                "icon": "slide",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Jeito Einstein de ser",
                "image": "https://i.ibb.co/FzCHSDg/card-img04.png",
                "progress": 0,
                "status": 1,
                "content": [
                    {
                        "lessonsTitle": "",
                        "lessons": [
                            {
                                "title": "Diversidade, Equidade e Inclusão",
                                "icon": "video",
                                "time": "23",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++01&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Qualidade e Segurança",
                                "icon": "tree",
                                "time": "5",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Ética e Compliance",
                                "icon": "tree",
                                "time": "7",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "Experiência do Paciente",
                                "icon": "slide",
                                "time": "8",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            },
                            {
                                "title": "#Agora eu sou uma gotinha Einstein - Encerramento com Sidney Klajner",
                                "icon": "video",
                                "time": "3",
                                "img": "https://placehold.co/600x400/fff/eaeaea?text=content++image++02&font=montserrat",
                                "objectRating": 0,
                                "userRating": 0,
                                "status": 1,
                                "block": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "capsula": {
            "status": 0,
            "content": {
                "startDate": "",
                "sendDate": "07/02/2024",
                "email": "",
                "style": 1,
                "sendMessage": ""
            }
        },
        "galeria": {
            "status": 0,
            "totalUsers": 233,
            "content": {
                "userImgs": [],
                "globalImgs": []
            }
        },
        "start": {
            "status": 0,
            "content": []
        },
        "workplace": {
            "status": 0,
            "content": []
        },
        "badges": {
            "capsula" : 0,
            "clock" : 0,
            "heart": 0,
            "picture" : 0
        }
    }*/

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


