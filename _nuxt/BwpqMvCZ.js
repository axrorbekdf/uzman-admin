import{V as q,G as E,q as o,ab as ue,_ as U,m as Y,ac as de,g as w,h as T,i as Q,l as Z,n as V,ad as ce,a7 as fe,K as X,r as G,s as j,o as u,c as f,a as M,A as C,v as y,y as g,b as H,z as I,ae as ge,U as J,a5 as B,F as O,d as A,t as F,af as me,M as ve,C as ye,ag as be,x as he,w as pe,ah as $e}from"./CpEHuMSc.js";import{u as P}from"./CDP19T1L.js";const ke={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},Ie={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},we=(e,n)=>{const i=q("form-events",void 0),a=q("form-group",void 0),d=q("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),d&&(d.value[a.name.value]=a.inputId.value));const l=E(!1);function c(t,r){i&&i.emit({type:t,path:r})}function m(){c("blur",a==null?void 0:a.name.value),l.value=!0}function h(){c("change",a==null?void 0:a.name.value)}const S=ue(()=>{(l.value||a!=null&&a.eagerValidation.value)&&c("input",a==null?void 0:a.name.value)},300);return{inputId:o(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:o(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:o(()=>{var r;const t=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??t??((r=n==null?void 0:n.default)==null?void 0:r.size)}),color:o(()=>{var t;return(t=a==null?void 0:a.error)!=null&&t.value?"red":e==null?void 0:e.color}),emitFormBlur:m,emitFormInput:S,emitFormChange:h}},k=Y(w.ui.strategy,w.ui.input,de),Se=T({components:{UIcon:Q},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>k.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(k.size).includes(e)}},color:{type:String,default:()=>k.default.color,validator(e){return[...w.ui.colors,...Object.keys(k.color)].includes(e)}},variant:{type:String,default:()=>k.default.variant,validator(e){return[...Object.keys(k.variant),...Object.values(k.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:i}){const{ui:a,attrs:d}=Z("input",V(e,"ui"),k,V(e,"class")),{size:l,rounded:c}=ce({ui:a,props:e}),{emitFormBlur:m,emitFormInput:h,size:S,color:t,inputId:r,name:b}=we(e,k),v=o(()=>l.value||S.value),p=E(fe({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),$=E(null),_=()=>{var s;e.autofocus&&((s=$.value)==null||s.focus())},K=s=>{p.value.trim&&(s=s.trim()),(p.value.number||e.type==="number")&&(s=ge(s)),n("update:modelValue",s),h()},x=s=>{p.value.lazy||K(s.target.value)},ee=s=>{if(e.type==="file"){const z=s.target.files;n("change",z)}else{const z=s.target.value;n("change",z),p.value.lazy&&K(z),p.value.trim&&(s.target.value=z.trim())}},ae=s=>{m(),n("blur",s)};X(()=>{setTimeout(()=>{_()},e.autofocusDelay)});const ne=o(()=>{var z,R;const s=((R=(z=a.value.color)==null?void 0:z[t.value])==null?void 0:R[e.variant])||a.value.variant[e.variant];return G(j(a.value.base,a.value.form,c.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[v.value],e.padded?a.value.padding[v.value]:"p-0",s==null?void 0:s.replaceAll("{color}",t.value),(N.value||i.leading)&&a.value.leading.padding[v.value],(L.value||i.trailing)&&a.value.trailing.padding[v.value]),e.inputClass)}),N=o(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),L=o(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),te=o(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),le=o(()=>e.loading&&!N.value?e.loadingIcon:e.trailingIcon||e.icon),ie=o(()=>j(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[v.value])),re=o(()=>j(a.value.icon.base,t.value&&w.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[v.value],e.loading&&a.value.icon.loading)),se=o(()=>j(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[v.value])),oe=o(()=>j(a.value.icon.base,t.value&&w.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[v.value],e.loading&&!N.value&&a.value.icon.loading));return{ui:a,attrs:d,name:b,inputId:r,input:$,isLeading:N,isTrailing:L,inputClass:ne,leadingIconName:te,leadingIconClass:re,leadingWrapperIconClass:ie,trailingIconName:le,trailingIconClass:oe,trailingWrapperIconClass:se,onInput:x,onChange:ee,onBlur:ae}}}),ze=["id","name","value","type","required","placeholder","disabled"];function Ce(e,n,i,a,d,l){const c=Q;return u(),f("div",{class:g(e.type==="hidden"?"hidden":e.ui.wrapper)},[M("input",C({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...m)=>e.onInput&&e.onInput(...m)),onBlur:n[1]||(n[1]=(...m)=>e.onBlur&&e.onBlur(...m)),onChange:n[2]||(n[2]=(...m)=>e.onChange&&e.onChange(...m))}),null,16,ze),y(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(u(),f("span",{key:0,class:g(e.leadingWrapperIconClass)},[y(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[H(c,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):I("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(u(),f("span",{key:1,class:g(e.trailingWrapperIconClass)},[y(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[H(c,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):I("",!0)],2)}const He=U(Se,[["render",Ce]]),W=Y(w.ui.strategy,w.ui.formGroup,ke),Be=T({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(W.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:n,attrs:i}=Z("formGroup",V(e,"ui"),W,V(e,"class")),a=q("form-errors",null),d=o(()=>{var m,h;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(h=(m=a==null?void 0:a.value)==null?void 0:m.find(S=>S.path===e.name))==null?void 0:h.message}),l=o(()=>n.value.size[e.size??W.default.size]),c=E(P("$K7dDJpdOWE"));return J("form-group",{error:d,inputId:c,name:o(()=>e.name),size:o(()=>e.size),eagerValidation:o(()=>e.eagerValidation)}),{ui:n,attrs:i,inputId:c,size:l,error:d}}}),je=["for"];function Ee(e,n,i,a,d,l){return u(),f("div",C({class:e.ui.wrapper},e.attrs),[M("div",{class:g(e.ui.inner)},[e.label||e.$slots.label?(u(),f("div",{key:0,class:g([e.ui.label.wrapper,e.size])},[M("label",{for:e.inputId,class:g([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?y(e.$slots,"label",B(C({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(u(),f(O,{key:1},[A(F(e.label),1)],64))],10,je),e.hint||e.$slots.hint?(u(),f("span",{key:0,class:g([e.ui.hint])},[e.$slots.hint?y(e.$slots,"hint",B(C({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(u(),f(O,{key:1},[A(F(e.hint),1)],64))],2)):I("",!0)],2)):I("",!0),e.description||e.$slots.description?(u(),f("p",{key:1,class:g([e.ui.description,e.size])},[e.$slots.description?y(e.$slots,"description",B(C({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(u(),f(O,{key:1},[A(F(e.description),1)],64))],2)):I("",!0)],2),M("div",{class:g([e.label?e.ui.container:""])},[y(e.$slots,"default",B(me({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(u(),f("p",{key:0,class:g([e.ui.error,e.size])},[e.$slots.error?y(e.$slots,"error",B(C({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(u(),f(O,{key:1},[A(F(e.error),1)],64))],2)):e.help||e.$slots.help?(u(),f("p",{key:1,class:g([e.ui.help,e.size])},[e.$slots.help?y(e.$slots,"help",B(C({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(u(),f(O,{key:1},[A(F(e.help),1)],64))],2)):I("",!0)],2)],16)}const Qe=U(Be,[["render",Ee]]);class D extends Error{constructor(n){super(n),this.message=n,Object.setPrototypeOf(this,D.prototype)}}const Oe=T({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:n,emit:i}){const a=P("$Z55GngiEgp"),d=be(`form-${a}`);X(()=>{d.on(async t=>{var r;t.type!=="submit"&&((r=e.validateOn)!=null&&r.includes(t.type))&&await h(t.path,{silent:!0})})}),ve(()=>{d.reset()});const l=E([]);J("form-errors",l),J("form-events",d);const c=E({});J("form-inputs",c);async function m(){let t=await e.validate(e.state);if(e.schema)if(Ne(e.schema))t=t.concat(await qe(e.state,e.schema));else if(Ae(e.schema))t=t.concat(await Ve(e.state,e.schema));else if(Me(e.schema))t=t.concat(await De(e.state,e.schema));else if(Ue(e.schema))t=t.concat(await Te(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function h(t,r={silent:!1}){let b=t;if(t&&!Array.isArray(t)&&(b=[t]),b){const v=l.value.filter($=>!b.includes($.path)),p=(await m()).filter($=>b.includes($.path));l.value=v.concat(p)}else l.value=await m();if(l.value.length>0){if(r.silent)return!1;throw new D(`Form validation failed: ${JSON.stringify(l.value,null,2)}`)}return e.state}async function S(t){var b;const r=t;try{(b=e.validateOn)!=null&&b.includes("submit")&&await h();const v={...r,data:e.state};i("submit",v)}catch(v){if(!(v instanceof D))throw v;const p={...r,errors:l.value.map($=>({...$,id:c.value[$.path]}))};i("error",p)}}return n({validate:h,errors:l,setErrors(t,r){r?l.value=l.value.filter(b=>b.path!==r).concat(t):l.value=t},async submit(){await S(new Event("submit"))},getErrors(t){return t?l.value.filter(r=>r.path===t):l.value},clear(t){t?l.value=l.value.filter(r=>r.path!==t):l.value=[]}}),{onSubmit:S}}});function Ae(e){return e.validate&&e.__isYupSchema__}function Fe(e){return e.inner!==void 0}async function Ve(e,n){try{return await n.validate(e,{abortEarly:!1}),[]}catch(i){if(Fe(i))return i.inner.map(a=>({path:a.path??"",message:a.message}));throw i}}function Ne(e){return e.parse!==void 0}async function qe(e,n){const i=await n.safeParseAsync(e);return i.success===!1?i.error.issues.map(a=>({path:a.path.join("."),message:a.message})):[]}function Me(e){return e.validateAsync!==void 0&&e.id!==void 0}function Je(e){return e.isJoi===!0}async function De(e,n){try{return await n.validateAsync(e,{abortEarly:!1}),[]}catch(i){if(Je(i))return i.details.map(a=>({path:a.path.join("."),message:a.message}));throw i}}function Ue(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function Te(e,n){var a;return((a=(await("_parse"in n?n._parse(e):"_run"in n?n._run({typed:!1,value:e},{}):n(e))).issues)==null?void 0:a.map(d=>{var l;return{path:((l=d.path)==null?void 0:l.map(c=>c.key).join("."))||"",message:d.message}}))||[]}function We(e,n,i,a,d,l){return u(),f("form",{onSubmit:n[0]||(n[0]=ye((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[y(e.$slots,"default")],32)}const Xe=U(Oe,[["render",We]]),Ye=Y(w.ui.strategy,w.ui.card,Ie),Ze=T({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:n,attrs:i}=Z("card",V(e,"ui"),Ye),a=o(()=>G(j(n.value.base,n.value.rounded,n.value.divide,n.value.ring,n.value.shadow,n.value.background),e.class));return{ui:n,attrs:i,cardClass:a}}});function Ke(e,n,i,a,d,l){return u(),he($e(e.$attrs.onSubmit?"form":e.as),C({class:e.cardClass},e.attrs),{default:pe(()=>[e.$slots.header?(u(),f("div",{key:0,class:g([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[y(e.$slots,"header")],2)):I("",!0),e.$slots.default?(u(),f("div",{key:1,class:g([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[y(e.$slots,"default")],2)):I("",!0),e.$slots.footer?(u(),f("div",{key:2,class:g([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[y(e.$slots,"footer")],2)):I("",!0)]),_:3},16,["class"])}const Ge=U(Ze,[["render",Ke]]);export{He as _,Qe as a,Xe as b,Ge as c,we as u};
