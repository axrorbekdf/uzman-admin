import{u as p,_ as h}from"./OE-iVYja.js";import{_ as y}from"./T9zb2FQT.js";import{L as f,h as F,K as _,I as i,o as a,x as k,c as L,b}from"./CZtNgAxi.js";import{u as r}from"./CkKw5vfm.js";import"./K07SeaZw.js";import"./B_YYKSCv.js";import"./Du1CYpPk.js";import"./BZAvPXmG.js";const n={index(o){return r()("region/index",{method:"GET",params:o})},forOptions(){return r()("region/for/options",{method:"GET"})},view(o){return r()(`region/view/${o}`,{method:"GET"})},store(o){return r()("region/store",{method:"POST",body:o})},update(o,e){return r()(`region/update/${o}`,{method:"PUT",body:e})},delete(o){return r()(`region/delete/${o}`,{method:"DELETE"})}},R=f("region",{state:()=>({region:null,regions:[],model:{modelForForm:{entity:{id:void 0,name:void 0},viewEntity:{id:{name:"ID",type:"number"},name:{name:"Nomi",type:"string"}},formTemplate:[{label:"Nomi",name:"name"}],rules:{name:{rule:"required",message:"To'ldirilishi kerak"},icon:{rule:"required",message:"To'ldirilishi kerak"}}},columns:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"date",label:"Sana",sortable:!0},{key:"actions"}]}}),getters:{region:o=>o.region,getList:o=>o.regions},actions:{async getAllList(){try{n.forOptions().then(o=>{this.regions=o.resoult.data}).catch(o=>{console.error("Failed to load posts:",o)})}catch(o){console.error("Failed to load posts:",o)}},async createRegion(o){try{n.store(o).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}},async updateRegion(o,e){try{n.update(o,e).then(t=>{this.getAllList()}).catch(t=>{console.error("Failed to load posts:",t)})}catch(t){console.error("Failed to load posts:",t)}},async deleteRegion(o){try{n.delete(o).then(e=>{this.getAllList()}).catch(e=>{console.error("Failed to load posts:",e)})}catch(e){console.error("Failed to load posts:",e)}}}}),v={key:1},D=F({__name:"index",setup(o){const e=p(),t=R();_(async()=>{t.getAllList()});function l(){t.model.modelForForm.entity={id:void 0,name:void 0}}function d(){e.set(!0),t.createRegion(t.model.modelForForm.entity).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function c(){e.set(!0),t.updateRegion(t.model.modelForForm.entity.id??0,t.model.modelForForm.entity).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}function m(){console.log(t.model.modelForForm.entity.id??0),e.set(!0),t.deleteRegion(t.model.modelForForm.entity.id??0).then(s=>{e.set(!1)}).catch(()=>{e.set(!1)}).finally(()=>{e.set(!1)})}return(s,E)=>{const u=h,g=y;return i(e).isLoading?(a(),k(u,{key:0})):(a(),L("div",v,[b(g,{data:i(t).getList,model:i(t).model,"clear-entity":l,"create-model":d,"update-model":c,"delete-model":m},null,8,["data","model"])]))}}});export{D as default};
