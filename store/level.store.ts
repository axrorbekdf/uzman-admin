import { defineStore } from "pinia";
import LevelService from "~/services/Level";

export const useLevelStore = defineStore("level", {
    state: () => ({
        level: null,
        levels: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined
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
              },
              formTemplate: [
                {
                  label: "Level nomi",
                  name: 'name',
                  relation: null
                }
              ],
              rules: {
                name: {
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
                  key: 'date',
                  label: 'Sana',
                  sortable: true
                },{
                  key: 'actions'
                }
            ],
        
            // items: (row: any) => [
            //   [
            //     {
            //       label: 'Edit',
            //       icon: 'i-heroicons-pencil-square-20-solid',
            //       click: () => console.log('Edit', row.id)
            //     }, {
            //       label: 'View',
            //       icon: 'i-heroicons-arrow-right-circle-20-solid'
            //     }, {
            //       label: 'Delete',
            //       icon: 'i-heroicons-trash-20-solid'
            //     }
            //     ]
            // ]
        }

    }),
    getters: {
        level: state => state.level,
        getList: state => state.levels
    },
    actions: {
        async getAllList(){
            try {
            
                LevelService.forOptions()
                .then((res: any) => {
                    
                    this.levels = (res.resoult.data)
                  
                }).catch((error) => {
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                
                console.error('Failed to load posts:', error);
             
              } 
        },
        async createLevel(level: any){
          try {
          
              LevelService.store(level)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateLevel(id:number, level: any){
          try {
          
              LevelService.update(id, level)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteLevel(id:number){
          try {
          
              LevelService.delete(id)
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