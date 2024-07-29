import { useApiFetch } from "./FetchService";


  const RegionService = {

    index(params: object){
        return useApiFetch()("region/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`region/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`region/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("region/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`region/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`region/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default RegionService;