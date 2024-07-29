import { useApiFetch } from "./FetchService";


  const SpecialistService = {

    index(params: object){
        return useApiFetch()("specialist/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`specialist/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`specialist/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("specialist/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`specialist/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`specialist/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default SpecialistService;