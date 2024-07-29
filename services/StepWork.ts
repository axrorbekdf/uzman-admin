import { useApiFetch } from "./FetchService";


  const StepWorkService = {

    index(params: object){
        return useApiFetch()("step/work/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`step/work/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`step/work/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("step/work/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`step/work/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`step/work/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default StepWorkService;