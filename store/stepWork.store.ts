import { defineStore } from "pinia";
import StepWorkService from "~/services/StepWork";
// stepWork
// stepWorks
// StepWork

export const useStepWorkStore = defineStore("stepWork", {
    state: () => ({
        stepWork: null,
        stepWorks: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined,
                text: undefined,
                icon: undefined
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
                text:{
                  name: 'Text',
                  type: 'relation'
                },
                icon: {
                  name: 'Icon',
                  type: 'file'
                }
              },
              formTemplate: [
                {
                  label: "Nomi",
                  name: 'name',
                  relation: null
                },
                {
                  label: "Text",
                  name: 'text',
                  relation: null
                },
                {
                  label: "Icon",
                  name: 'icon',
                  relation: null
                }
              ],
              rules: {
                name: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                text: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                icon: {
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
                },{
                  key: 'text',
                  label: 'Text',
                  sortable: true
                }, {
                  key: 'icon',
                  label: 'Icon',
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
        stepWork: state => state.stepWork,
        getList: state => state.stepWorks
    },
    actions: {
        async getAllList(){
            try {
            
                StepWorkService.forOptions()
                .then((res: any) => {
                    
                    this.stepWorks = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createStepWork(stepWork: any){
          try {
          
              StepWorkService.store(stepWork)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateStepWork(id:number, stepWork: any){
          try {
          
              StepWorkService.update(id, stepWork)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteStepWork(id:number){
          try {
          
              StepWorkService.delete(id)
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