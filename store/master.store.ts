import { defineStore } from "pinia";
import MasterService from "~/services/Master";


export const useMasterStore = defineStore("master", {
    state: () => ({
        master: null,
        masters: [],
        model: {
            modelForForm: {
              entity: {
                id: undefined,
                name: undefined,
                phone: undefined,
                price: undefined,
                time: undefined,
                verify: undefined,
                experience: undefined,
                image: undefined,
                pasport_image: undefined,
                about: undefined,
                level_id: undefined,
                specialist_id: undefined,
                user_id: undefined,
              },
              relations:{
                levels: [],
                specialists: [],
                // users: []
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
                phone: {
                  name: 'Telefon',
                  type: 'string'
                },
                price: {
                  name: 'Narx',
                  type: 'string'
                },
                time: {
                  name: 'Vaqt',
                  type: 'string'
                },
                verify: {
                  name: 'Tasdiqlash',
                  type: 'string'
                },
                experience: {
                  name: 'Ish tajribasi',
                  type: 'string'
                },
                image: {
                  name: 'Rasm',
                  type: 'file'
                },
                pasport_image: {
                  name: 'Pasport rasm',
                  type: 'file'
                },
                about: {
                  name: 'Haqida',
                  type: 'string'
                },
                level_id: {
                  name: 'Darajasi',
                  type: 'object',
                  relation: 'name'
                },
                specialist_id: {
                  name: 'Mutaxasisligi',
                  type: 'object',
                  relation: 'name'
                },
                user_id: {
                  name: 'Foydalanuchi',
                  type: 'object',
                  relation: 'name'
                },
              },
              formTemplate: [
                {
                    label: "Nomi",
                    name: 'name',
                    relation: null
                },
                {
                    label: "Telefon",
                    name: 'phone',
                    relation: null
                },
                {
                    label: "Narxi",
                    name: 'price',
                    relation: null
                },
                {
                    label: "Vaqt",
                    name: 'time',
                    relation: null
                },
                {
                    label: "Status",
                    name: 'verify',
                    relation: null
                },
                {
                    label: "Ish staji",
                    name: 'experience',
                    relation: null
                },
                {
                    label: "Rasm",
                    name: 'image',
                    relation: null
                },
                {
                    label: "Pasport image",
                    name: 'pasport_image',
                    relation: null
                },
                {
                    label: "Haqida",
                    name: 'about',
                    relation: null
                },
                {
                    label: "Level",
                    name: 'level_id',
                    relation: {
                      name: 'levels',
                      value: 'id',
                      options: 'name'
                    }
                },
                {
                    label: "Musaxasisligi",
                    name: 'specialist_id',
                    relation: {
                      name: 'specialists',
                      value: 'id',
                      options: 'name'
                    }
                },
                {
                    label: "Login",
                    name: 'user_id',
                    relation: null
                },
              ],
              rules: {
                name: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                phone: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                price: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                time: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                verify: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                experience: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                image: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                pasport_image: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                about: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                level_id: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                specialist_id: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
                user_id: {
                    rule: "required",
                    message: "To'ldirilishi kerak"
                },
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
                  key: 'phone',
                  label: 'Telefoni',
                  sortable: true
                }, {
                  key: 'price',
                  label: 'Narxi',
                  sortable: true
                },{
                  key: 'time',
                  label: 'Vaqt',
                  sortable: true
                },{
                  key: 'verify',
                  label: 'Status',
                  sortable: true
                },{
                  key: 'experience',
                  label: 'Ish tajribasi',
                  sortable: true
                },{
                  key: 'image',
                  label: 'Rasm',
                  sortable: true
                },{
                  key: 'pasport_image',
                  label: 'Pasport rasm',
                  sortable: true
                },{
                  key: 'about',
                  label: 'Haqida',
                  sortable: true
                },{
                  key: 'level.name',
                  label: 'Daraja',
                  sortable: true
                },{
                  key: 'specialist.name',
                  label: 'Mutaxasisligi',
                  sortable: true
                },{
                  key: 'Login',
                  label: 'user.name',
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
        master: state => state.master,
        getList: state => state.masters
    },
    actions: {
        async getAllList(){
            try {
            
                MasterService.forOptions()
                .then((res: any) => {
                    
                    this.masters = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async getAllLevels(){
            try {
            
                MasterService.forOptions()
                .then((res: any) => {
                    
                  this.model.modelForForm.relations.levels = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async getAllSpecialists(){
            try {
            
                MasterService.forOptions()
                .then((res: any) => {
                    
                  this.model.modelForForm.relations.specialists = (res.resoult.data)
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createMaster(master: any){
          try {
          
              MasterService.store(master)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateMaster(id:number, master: any){
          try {
          
              MasterService.update(id, master)
              .then((res: any) => {

                this.getAllList();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteMaster(id:number){
          try {
          
              MasterService.delete(id)
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