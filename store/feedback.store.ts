import { defineStore } from "pinia";
import FeedbackService from "~/services/Feedback";


export const useFeedbackStore = defineStore("feedback", {
    state: () => ({
        feedback: null,
        feedbacks: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                text: undefined,
                user_from_id: undefined,
                user_to_id: undefined,
              },
              viewEntity: {
                id: {
                  name: 'ID',
                  type: 'number'
                },
                text: {
                  name: 'Text',
                  type: 'string'
                },
                user_from: {
                  name: 'Userdan',
                  type: 'object',
                  relation: 'name'
                },
                user_to: {
                  name: 'Userga',
                  type: 'object',
                  relation: 'name'
                }
              },
              formTemplate: [
                {
                    label: "Text",
                    name: 'text'
                    
                },
                {
                    label: "Userdan",
                    name: 'user_from_id'
                },
                {
                    label: "Userga",
                    name: 'user_to_id'
                }
              ],
              rules: {
                text: {
                  rule: "required",
                  message: "To'ldirilishi kerak"
                },
                user_from_id: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                user_to_id: {
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
                    key: 'text',
                    label: 'Text',
                    sortable: true
                },{
                    key: 'user_from.name',
                    label: 'Userdan',
                    sortable: true
                }, {
                    key: 'user_to.name',
                    label: 'Userga',
                    sortable: true
                }, {
                    key: 'date',
                    label: 'Sana',
                    sortable: true
                }, {
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
        feedback: state => state.feedback,
        getList: state => state.feedbacks
    },
    actions: {
        async getAllList(){
            try {
            
                FeedbackService.forOptions()
                .then((res: any) => {
                    
                    this.feedbacks = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createFeedback(feedback: any){
          try {
          
              FeedbackService.store(feedback)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateFeedback(id:number, feedback: any){
          try {
          
              FeedbackService.update(id, feedback)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteFeedback(id:number){
          try {
          
              FeedbackService.delete(id)
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