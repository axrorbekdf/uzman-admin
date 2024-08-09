import { defineStore } from "pinia";
import CommentService from "~/services/Comment";


export const useCommentStore = defineStore("comment", {
    state: () => ({
        comment: null,
        comments: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                text: undefined,
                user_from_id: undefined,
                user_to_id: undefined
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
                    name: 'text',
                    relation: null
                },
                {
                    label: "Userdan",
                    name: 'user_from_id',
                    relation: null
                },
                {
                    label: "Userga",
                    name: 'user_to_id',
                    relation: null
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
                }, {
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
        comment: state => state.comment,
        getList: state => state.comments
    },
    actions: {
        async getAllList(){
            try {
            
                CommentService.forOptions()
                .then((res: any) => {
                    
                    this.comments = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createComment(comment: any){
          try {
          
              CommentService.store(comment)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateComment(id:number, comment: any){
          try {
          
              CommentService.update(id, comment)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteComment(id:number){
          try {
          
              CommentService.delete(id)
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