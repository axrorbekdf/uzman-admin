import { defineStore } from "pinia";
import { getItem, removeItem, setItem } from "~/helpers/persistaneStorage";
import AuthService from "~/services/Auth";

interface User {
    id: String,
    username: String,
    email: String,
    password: String,
    token: String,
}

const initialState: {user: User} = {
    user: {
        id: "",
        username: "",
        email: "",
        password: "",
        token: "",
    }
}


export const useAuthStore = defineStore("auth", {
    state: () => initialState,
    getters: {
        currentUser: state => state.user,
    },
    actions: {
        set(user: User){
            setItem('token', user.token)
        
            this.$patch({user})
        },
        update(user: User){
            const token = getItem('token')
            user.token = token
            this.$patch({user})
        },
        clear(){
            removeItem('token')
            
            this.$patch(initialState)
        }
    },
});