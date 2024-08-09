import { defineStore } from "pinia";
import MasterService from "~/services/Master";
import MasterExampleWorkService from "~/services/MasterExampleWork";
// MasterExampleWork
// masterExampleWork
// masterExampleWorks

export const useMasterExampleWorkStore = defineStore("masterExampleWork", {
    state: () => ({
        masterExampleWork: null,
        masterExampleWorks: [],
        masters: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                images: undefined,
                master_id: undefined
              },
              relations:{
                masters: []
              },
              viewEntity: {
                id: {
                  name: 'ID',
                  type: 'number'
                },
                images: {
                  name: 'Rasmlar',
                  type: 'file'
                },
                master: {
                  name: 'Master',
                  type: 'object',
                  relation: 'name'
                }
              },
              formTemplate: [
                {
                  label: "Rasmlar",
                  name: 'images',
                  relation: null
                },
                {
                  label: "Master",
                  name: 'master_id',
                  relation: {
                    name: 'masters',
                    value: 'id',
                    options: 'name'
                  }
                }
              ],
              rules: {
                images: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                master_id: {
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
                  key: 'images',
                  label: 'Rasmlar',
                  sortable: true
                }, {
                  key: 'master.name',
                  label: 'Master',
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
        masterExampleWork: state => state.masterExampleWork,
        getList: state => state.masterExampleWorks
    },
    actions: {
        async getAllList(){
            try {
            
                MasterExampleWorkService.forOptions()
                .then((res: any) => {
                    
                    this.masterExampleWorks = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async getAllMasters(){
          try {
          
              MasterService.forOptions()
              .then((res: any) => {
                  
                this.model.modelForForm.relations.masters = (res.resoult.data)
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
      },

        async createMasterExampleWork(masterExampleWork: any){
          try {
          
              MasterExampleWorkService.store(masterExampleWork)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateMasterExampleWork(id:number, masterExampleWork: any){
          try {
          
              MasterExampleWorkService.update(id, masterExampleWork)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteMasterExampleWork(id:number){
          try {
          
              MasterExampleWorkService.delete(id)
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