import { useApiFetch } from "./FetchService";


  const HomeCardService = {

    index(params: object){
        return useApiFetch()("home/card/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`home/card/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`home/card/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("home/card/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`home/card/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`home/card/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default HomeCardService;