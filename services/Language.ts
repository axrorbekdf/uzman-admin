import { useApiFetch } from "./FetchService";


  const LanguageService = {

    index(params: object){
        return useApiFetch()("language/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`language/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`language/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("language/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`language/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`language/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default LanguageService;