import{u as p,_ as f}from"./CzlCWrZk.js";import{_ as y}from"./DlAZ5gD1.js";import{L as F,h as _,K as g,I as d,o as l,x as C,c as k,b}from"./CpEHuMSc.js";import{u as r}from"./BUWGproX.js";import"./BwpqMvCZ.js";import"./CDP19T1L.js";import"./D3lp_g-g.js";const a={index(o){return r()("home/card/index",{method:"GET",params:o})},forOptions(){return r()("home/card/for/options",{method:"GET"})},view(o){return r()(`home/card/view/${o}`,{method:"GET"})},store(o){return r()("home/card/store",{method:"POST",body:o})},update(o,e){return r()(`home/card/update/${o}`,{method:"PUT",body:e})},delete(o){return r()(`home/card/delete/${o}`,{method:"DELETE"})}},H=F("homeCard",{state:()=>({homeCard:null,homeCards:[],model:{modelForForm:{entity:{id:void 0,name:void 0,image:void 0},formTemplate:[{label:"Home card nomi",name:"name"},{label:"Home card image",name:"image"}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},image:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"image",label:"Image",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{homeCard:o=>o.homeCard,getList:o=>o.homeCards},actions:{async getAllList(){try{a.forOptions().then(o=>{this.homeCards=o.resoult.data}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async createHomeCard(o){try{a.store(o).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateHomeCard(o,e){try{a.update(o,e).then(t=>{this.getAllList()}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async deleteHomeCard(o){try{a.delete(o).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),L={key:1},G=_({__name:"index",setup(o){const e=p(),t=H();g(async()=>{t.getAllList()});function m(){t.model.modelForForm.entity={id:void 0,name:void 0,image:void 0}}function n(){e.set(!0),t.createHomeCard(t.model.modelForForm.entity).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function i(){e.set(!0),t.updateHomeCard(t.model.modelForForm.entity.id??0,t.model.modelForForm.entity).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){console.log(t.model.modelForForm.entity.id??0),e.set(!0),t.deleteHomeCard(t.model.modelForForm.entity.id??0).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(s,v)=>{const h=f,u=y;return d(e).isLoading?(l(),C(h,{key:0})):(l(),k("div",L,[b(u,{data:d(t).getList,model:d(t).model,"clear-entity":m,"create-model":n,"update-model":i,"delete-model":c},null,8,["data","model"])]))}}});export{G as default};
