import { defineStore } from "pinia";


type Category = {
    id: Number,
    name: String,
    icon: String,
    date: String
}

type TC = {
    category: Category, 
    categories: Array<Category>
}

const initialState: TC = {
    category: {
        id: 0,
        name: "",
        icon: "",
        date: "",
    },
    categories: []
}


export const useCategoryStore = defineStore("category", {
    state: () => initialState,
    getters: {
        category: state => state.category,
        categories: state => state.categories,
    },
    actions: {
        set(category: Category){
        
            this.$patch({category})
        },
        
        setData(categories: Array<Category>){

            this.$patch({categories})
        },
        clear(){
            
            this.$patch(initialState)
        }
    },
});