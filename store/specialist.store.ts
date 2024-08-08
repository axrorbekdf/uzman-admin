import { defineStore } from "pinia";
import CategoryService from "~/services/Category";
import SpecialistService from "~/services/Specialist";


export const useSpecialistStore = defineStore("specialist", {
    state: () => ({
        specialist: null,
        specialists: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined,
                category_id: undefined
              },
              relations:{
                categories: []
              },
              viewEntity: {
                id: {
                  name: 'ID',
                  type: 'number'
                },
                name: {
                  name: 'Nomi',
                  type: 'string'
                },
                category: {
                  name: 'Category',
                  type: 'object',
                  relation: 'name'
                }
              },
              formTemplate: [
                {
                  label: "Category nomi",
                  name: 'name',
                  relation: null
                },
                {
                  label: "Category",
                  name: 'category_id',
                  relation: {
                    name: 'categories',
                    value: 'id',
                    options: 'name'
                  }
                }
              ],
              rules: {
                name: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                category_id: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                }
              }
            },
            columns: [
                {
                  key: 'id',
                  label: 'ID',
                  sortable: true
                }, {
                  key: 'name',
                  label: 'Name',
                  sortable: true
                }, {
                  key: 'category.name',
                  label: 'Category',
                  sortable: true
                }, {
                  key: 'date',
                  label: 'Sana',
                  sortable: true
                },{
                  key: 'actions'
                }
            ],
        
            // items: (row: any) => [
            //     [
            //       {
            //         label: 'Edit',
            //         icon: 'i-heroicons-pencil-square-20-solid',
            //         click: () => {console.log('Edit', row.id)}
            //       }, {
            //         label: 'View',
            //         icon: 'i-heroicons-arrow-right-circle-20-solid'
            //       }, {
            //         label: 'Delete',
            //         icon: 'i-heroicons-trash-20-solid'
            //       }
            //     ]
            //   ]
        }

    }),
    getters: {
        specialist: state => state.specialist,
        getList: state => state.specialists
    },
    actions: {
        async getAllList(){
            try {
            
                SpecialistService.forOptions()
                .then((res: any) => {
                    
                    this.specialists = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async getAllCategories(){
          try {
          
              CategoryService.forOptions()
              .then((res: any) => {
                  
                  this.model.modelForForm.relations.categories = (res.resoult.data)
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
      },

        async createSpecialist(specialist: any){
          try {
          
              SpecialistService.store(specialist)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateSpecialist(id:number, specialist: any){
          try {
          
              SpecialistService.update(id, specialist)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteSpecialist(id:number){
          try {
          
              SpecialistService.delete(id)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});