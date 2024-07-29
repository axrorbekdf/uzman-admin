import { useApiFetch } from "./FetchService";


  const MasterService = {

    index(params: object){
        return useApiFetch()("master/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`master/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`master/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("master/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`master/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`master/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default MasterService;