import { useApiFetch } from "./FetchService";


  const FeedbackService = {

    index(params: object){
        return useApiFetch()("feedback/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`feedback/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`feedback/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("feedback/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`feedback/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`feedback/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default FeedbackService;