import { useApiFetch } from "./FetchService";


  const AuthService = {

    login(user: object){
        return useApiFetch()("auth/login", {
            method: "POST",
            body: user
        })
    },

    getUser(){
        return useApiFetch()("auth/me", {
            method: "GET"
        })
    },

    logout(){
        return useApiFetch()("auth/logout", {
            method: "POST"
        })
    }

}

export default AuthService;