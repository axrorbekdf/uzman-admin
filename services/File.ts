import { useApiFetch } from "./FetchService";


  const FileService = {

    store(file: object){
        return useApiFetch()("file/upload", {
            method: "POST",
            body: file
        })
    },

    delete(file_name: any){
        return useApiFetch()(`file/delete`, {
            method: "DELETE",
            body: {
                file_name: file_name
            }
        })
    },

}

export default FileService;