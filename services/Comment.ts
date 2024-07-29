import { useApiFetch } from "./FetchService";


  const CommentService = {

    index(params: object){
        return useApiFetch()("comment/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`comment/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`comment/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("comment/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`comment/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`comment/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default CommentService;