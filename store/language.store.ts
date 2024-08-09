import { defineStore } from "pinia";
import LanguageService from "~/services/Language";


export const useLanguageStore = defineStore("language", {
    state: () => ({
        language: null,
        languages: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined,
                slug: undefined
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
                slug: {
                  name: 'slug',
                  type: 'string'
                }
              },
              formTemplate: [
                {
                  label: "Nomi",
                  name: 'name',
                  relation: null
                },
                {
                  label: "Slug",
                  name: 'slug',
                  relation: null
                }
              ],
              rules: {
                name: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                slug: {
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
                  key: 'slug',
                  label: 'Slug',
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
        language: state => state.language,
        getList: state => state.languages
    },
    actions: {
        async getAllList(){
            try {
            
                LanguageService.forOptions()
                .then((res: any) => {
                    
                    this.languages = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createLanguage(language: any){
          try {
          
              LanguageService.store(language)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateLanguage(id:number, language: any){
          try {
          
              LanguageService.update(id, language)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteLanguage(id:number){
          try {
          
              LanguageService.delete(id)
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