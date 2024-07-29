import { useApiFetch } from "./FetchService";


  const CategoryService = {

    index(params: object){
        return useApiFetch()("category/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(){
        return useApiFetch()(`category/for/options`, {
            method: "GET"
        })
    },

    view(id: any){
        return useApiFetch()(`category/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("category/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`category/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`category/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default CategoryService;