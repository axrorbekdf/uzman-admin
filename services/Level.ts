import { useApiFetch } from "./FetchService";


  const LevelService = {

    index(params: object){
        return useApiFetch()("level/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`level/for/options`, {
            method: "GET"
        })
    },

    view(id: number){
        return useApiFetch()(`level/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("level/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: number, catgory: object){
        return useApiFetch()(`level/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: number){
        return useApiFetch()(`level/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default LevelService;