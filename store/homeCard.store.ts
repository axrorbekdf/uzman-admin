import { defineStore } from "pinia";
import HomeCardService from "~/services/HomeCard";


export const useHomeCardStore = defineStore("homeCard", {
    state: () => ({
        homeCard: null,
        homeCards: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined,
                image: undefined
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
                image: {
                  name: 'Image',
                  type: 'file'
                }
              },
              formTemplate: [
                {
                  label: "Home card nomi",
                  name: 'name',
                  relation: null
                },
                {
                  label: "Home card image",
                  name: 'image',
                  relation: null
                }
              ],
              rules: {
                name: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                image: {
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
                  key: 'image',
                  label: 'Image',
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
        homeCard: state => state.homeCard,
        getList: state => state.homeCards
    },
    actions: {
        async getAllList(){
            try {
            
                HomeCardService.forOptions()
                .then((res: any) => {
                    
                    this.homeCards = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createHomeCard(homeCard: any){
          try {
          
              HomeCardService.store(homeCard)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateHomeCard(id:number, homeCard: any){
          try {
          
              HomeCardService.update(id, homeCard)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteHomeCard(id:number){
          try {
          
              HomeCardService.delete(id)
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