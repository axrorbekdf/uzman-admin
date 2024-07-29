import { useApiFetch } from "./FetchService";


  const MasterExampleWorkService = {

    index(params: object){
        return useApiFetch()("master/example/work/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`master/example/work/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`master/example/work/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("master/example/work/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`master/example/work/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`master/example/work/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default MasterExampleWorkService;