import{u as k,_ as h}from"./CzlCWrZk.js";import{_ as y}from"./DlAZ5gD1.js";import{L as f,h as F,K as _,I as a,o as n,x as S,c as W,b}from"./CpEHuMSc.js";import{u as r}from"./BUWGproX.js";import"./BwpqMvCZ.js";import"./CDP19T1L.js";import"./D3lp_g-g.js";const s={index(t){return r()("step/work/index",{method:"GET",params:t})},forOptions(){return r()("step/work/for/options",{method:"GET"})},view(t){return r()(`step/work/view/${t}`,{method:"GET"})},store(t){return r()("step/work/store",{method:"POST",body:t})},update(t,e){return r()(`step/work/update/${t}`,{method:"PUT",body:e})},delete(t){return r()(`step/work/delete/${t}`,{method:"DELETE"})}},g=f("stepWork",{state:()=>({stepWork:null,stepWorks:[],model:{modelForForm:{entity:{id:void 0,name:void 0,text:void 0,icon:void 0},formTemplate:[{label:"Nomi",name:"name"},{label:"Text",name:"text"},{label:"Icon",name:"icon"}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},text:{rule:"required",message:"To'ldirilishi kerak"},icon:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"text",label:"Text",sortable:!0},{key:"icon",label:"Icon",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{stepWork:t=>t.stepWork,getList:t=>t.stepWorks},actions:{async getAllList(){try{s.forOptions().then(t=>{this.stepWorks=t.resoult.data}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async createStepWork(t){try{s.store(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateStepWork(t,e){try{s.update(t,e).then(o=>{this.getAllList()}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async deleteStepWork(t){try{s.delete(t).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),x={key:1},q=F({__name:"index",setup(t){const e=k(),o=g();_(async()=>{o.getAllList()});function i(){o.model.modelForForm.entity={id:void 0,name:void 0,text:void 0,icon:void 0}}function d(){e.set(!0),o.createStepWork(o.model.modelForForm.entity).then(l=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){e.set(!0),o.updateStepWork(o.model.modelForForm.entity.id??0,o.model.modelForForm.entity).then(l=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function m(){console.log(o.model.modelForForm.entity.id??0),e.set(!0),o.deleteStepWork(o.model.modelForForm.entity.id??0).then(l=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(l,L)=>{const p=h,u=y;return a(e).isLoading?(n(),S(p,{key:0})):(n(),W("div",x,[b(u,{data:a(o).getList,model:a(o).model,"clear-entity":i,"create-model":d,"update-model":c,"delete-model":m},null,8,["data","model"])]))}}});export{q as default};
