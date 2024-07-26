import { defineStore } from "pinia";
import LevelService from "~/services/Level";

export const useLevelStore = defineStore("level", {
    state: () => ({
        level: null,
        categories: [],
        model: {
            input: [
                {
                  key: 'name',
                  label: 'Name',
                }
            ],
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
        
            items: (row: any) => [
                [
                  {
                    label: 'Edit',
                    icon: 'i-heroicons-pencil-square-20-solid',
                    click: () => console.log('Edit', row.id)
                  }, {
                    label: 'View',
                    icon: 'i-heroicons-arrow-right-circle-20-solid'
                  }, {
                    label: 'Delete',
                    icon: 'i-heroicons-trash-20-solid'
                  }
                ]
              ]
        }

    }),
    getters: {
        level: state => state.level,
        getList: state => state.categories
    },
    actions: {
        async getAllList(){
            try {
            
                LevelService.forOptions()
                .then((res: any) => {
                    
                    this.categories = (res.resoult.data)
                  
                }).catch((error) => {
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                
                console.error('Failed to load posts:', error);
             
              } 
        }
    },
});