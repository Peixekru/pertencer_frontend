import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null
    }),

    getters: {
        user: (state) => state.authUser
    },

    actions: {
        async getToken(){
            await axios.get("/home");
        },
        async getUser(){
            this.getToken();
            const data = await axios.get("api/users");
            this.authUser.data.data;
        }
    }

})

