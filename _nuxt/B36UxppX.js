import{u as ge,_ as Re}from"./dCH5DhQ6.js";import{_ as be,a as Pe}from"./BOg7uorL.js";import{au as Ce,h as D,G as R,q as T,V as De,K as te,M as Ae,X as Oe,Z as E,Y as ze,_ as G,m as ae,g as L,l as ne,n as K,r as he,s as oe,o as b,c as S,v as F,d as se,t as C,A as B,i as re,j as le,a5 as Le,R as fe,av as je,a2 as V,x as A,w as x,b as k,y as P,a as _,ac as Ne,ab as Be,z as U,F as H,B as Q,aa as Ue,e as J,E as ye,D as Ee,I as z,k as _e,aw as Fe,J as He}from"./Be7rl1fj.js";import{u as Ke}from"./VnilOB_E.js";import{w as Je,p as qe,q as Ve,o as M,t as Qe,u as Ze,i as Z,A as W,I as ie,s as Ge,b as We,l as Xe,N as me,r as Ye,d as et,f as tt,c as $,e as w,B as at,j as ve,_ as ke,O as nt,z as ot,y as st}from"./C0oNA2KS.js";import{u as xe}from"./Bhg417Bq.js";import{A as we}from"./CyO0X899.js";import{s as rt}from"./CkKw5vfm.js";const lt={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},translate:{"top-right":"-translate-y-1/2 translate-x-1/2 transform","bottom-right":"translate-y-1/2 translate-x-1/2 transform","top-left":"-translate-y-1/2 -translate-x-1/2 transform","bottom-left":"translate-y-1/2 -translate-x-1/2 transform"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"},default:{size:"sm",color:"primary",position:"top-right",inset:!1}},it={wrapper:"relative inline-flex text-left rtl:text-right",container:"z-20 group",trigger:"inline-flex w-full",width:"w-48",height:"",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-700",base:"relative focus:outline-none overflow-y-auto scroll-py-1",divide:"divide-y divide-gray-200 dark:divide-gray-700",padding:"p-1",item:{base:"group flex items-center gap-1.5 w-full",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",active:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",inactive:"text-gray-700 dark:text-gray-200",disabled:"cursor-not-allowed opacity-50",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-500 dark:text-gray-400",inactive:"text-gray-400 dark:text-gray-500"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"truncate",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"},transition:{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},popper:{placement:"bottom-end",strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...Ce,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},ut={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}};var ct=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ct||{}),dt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(dt||{});function pt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function X(e){let s=ze(Ie,null);if(s===null){let p=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,X),p}return s}let ft=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:s,attrs:p}){let i=R(1),c=R(null),v=R(null),t=R([]),o=R(""),u=R(null),g=R(1);function I(a=d=>d){let d=u.value!==null?t.value[u.value]:null,r=nt(a(t.value.slice()),l=>M(l.dataRef.domRef)),f=d?r.indexOf(d):null;return f===-1&&(f=null),{items:r,activeItemIndex:f}}let m={menuState:i,buttonRef:c,itemsRef:v,items:t,searchQuery:o,activeItemIndex:u,activationTrigger:g,closeMenu:()=>{i.value=1,u.value=null},openMenu:()=>i.value=0,goToItem(a,d,r){let f=I(),l=tt(a===$.Specific?{focus:$.Specific,id:d}:{focus:a},{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",u.value=l,g.value=r??1,t.value=f.items},search(a){let d=o.value!==""?0:1;o.value+=a.toLowerCase();let r=(u.value!==null?t.value.slice(u.value+d).concat(t.value.slice(0,u.value+d)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),f=r?t.value.indexOf(r):-1;f===-1||f===u.value||(u.value=f,g.value=1)},clearSearch(){o.value=""},registerItem(a,d){let r=I(f=>[...f,{id:a,dataRef:d}]);t.value=r.items,u.value=r.activeItemIndex,g.value=1},unregisterItem(a){let d=I(r=>{let f=r.findIndex(l=>l.id===a);return f!==-1&&r.splice(f,1),r});t.value=d.items,u.value=d.activeItemIndex,g.value=1}};return Je([c,v],(a,d)=>{var r;m.closeMenu(),qe(d,Ve.Loose)||(a.preventDefault(),(r=M(c))==null||r.focus())},T(()=>i.value===0)),De(Ie,m),Qe(T(()=>Ze(i.value,{0:Z.Open,1:Z.Closed}))),()=>{let a={open:i.value===0,close:m.closeMenu};return W({ourProps:{},theirProps:e,slot:a,slots:s,attrs:p,name:"Menu"})}}}),mt=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:s,slots:p,expose:i}){var c;let v=(c=e.id)!=null?c:`headlessui-menu-button-${ie()}`,t=X("MenuButton");i({el:t.buttonRef,$el:t.buttonRef});function o(m){switch(m.key){case w.Space:case w.Enter:case w.ArrowDown:m.preventDefault(),m.stopPropagation(),t.openMenu(),E(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem($.First)});break;case w.ArrowUp:m.preventDefault(),m.stopPropagation(),t.openMenu(),E(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem($.Last)});break}}function u(m){switch(m.key){case w.Space:m.preventDefault();break}}function g(m){e.disabled||(t.menuState.value===0?(t.closeMenu(),E(()=>{var a;return(a=M(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(m.preventDefault(),t.openMenu(),pt(()=>{var a;return(a=M(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let I=Ge(T(()=>({as:e.as,type:s.type})),t.buttonRef);return()=>{var m;let a={open:t.menuState.value===0},{...d}=e,r={ref:t.buttonRef,id:v,type:I.value,"aria-haspopup":"menu","aria-controls":(m=M(t.itemsRef))==null?void 0:m.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:u,onClick:g};return W({ourProps:r,theirProps:d,slot:a,attrs:s,slots:p,name:"MenuButton"})}}}),vt=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:s,slots:p,expose:i}){var c;let v=(c=e.id)!=null?c:`headlessui-menu-items-${ie()}`,t=X("MenuItems"),o=R(null);i({el:t.itemsRef,$el:t.itemsRef}),We({container:T(()=>M(t.itemsRef)),enabled:T(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function u(a){var d;switch(o.value&&clearTimeout(o.value),a.key){case w.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case w.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let r=t.items.value[t.activeItemIndex.value];(d=M(r.dataRef.domRef))==null||d.click()}t.closeMenu(),ke(M(t.buttonRef));break;case w.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem($.Next);case w.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem($.Previous);case w.Home:case w.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem($.First);case w.End:case w.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem($.Last);case w.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),E(()=>{var r;return(r=M(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case w.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),E(()=>at(M(t.buttonRef),a.shiftKey?ve.Previous:ve.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function g(a){switch(a.key){case w.Space:a.preventDefault();break}}let I=Xe(),m=T(()=>I!==null?(I.value&Z.Open)===Z.Open:t.menuState.value===0);return()=>{var a,d;let r={open:t.menuState.value===0},{...f}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(d=M(t.buttonRef))==null?void 0:d.id,id:v,onKeydown:u,onKeyup:g,role:"menu",tabIndex:0,ref:t.itemsRef};return W({ourProps:l,theirProps:f,slot:r,attrs:s,slots:p,features:me.RenderStrategy|me.Static,visible:m.value,name:"MenuItems"})}}}),gt=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:s,attrs:p,expose:i}){var c;let v=(c=e.id)!=null?c:`headlessui-menu-item-${ie()}`,t=X("MenuItem"),o=R(null);i({el:o,$el:o});let u=T(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===v:!1),g=Ye(o),I=T(()=>({disabled:e.disabled,get textValue(){return g()},domRef:o}));te(()=>t.registerItem(v,I)),Ae(()=>t.unregisterItem(v)),Oe(()=>{t.menuState.value===0&&u.value&&t.activationTrigger.value!==0&&E(()=>{var n,h;return(h=(n=M(o))==null?void 0:n.scrollIntoView)==null?void 0:h.call(n,{block:"nearest"})})});function m(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ke(M(t.buttonRef))}function a(){if(e.disabled)return t.goToItem($.Nothing);t.goToItem($.Specific,v)}let d=et();function r(n){d.update(n)}function f(n){d.wasMoved(n)&&(e.disabled||u.value||t.goToItem($.Specific,v,0))}function l(n){d.wasMoved(n)&&(e.disabled||u.value&&t.goToItem($.Nothing))}return()=>{let{disabled:n,...h}=e,y={active:u.value,disabled:n,close:t.closeMenu};return W({ourProps:{id:v,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:m,onFocus:a,onPointerenter:r,onMouseenter:r,onPointermove:f,onMousemove:f,onPointerleave:l,onMouseleave:l},theirProps:{...p,...h},slot:y,attrs:p,slots:s,name:"MenuItem"})}}});const Y=ae(L.ui.strategy,L.ui.kbd,ut),bt=D({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>Y.default.size,validator(e){return Object.keys(Y.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:p}=ne("kbd",K(e,"ui"),Y),i=T(()=>he(oe(s.value.base,s.value.size[e.size],s.value.padding,s.value.rounded,s.value.font,s.value.background,s.value.ring),e.class));return{ui:s,attrs:p,kbdClass:i}}});function ht(e,s,p,i,c,v){return b(),S("kbd",B({class:e.kbdClass},e.attrs),[F(e.$slots,"default",{},()=>[se(C(e.value),1)])],16)}const Me=G(bt,[["render",ht]]),ee=ae(L.ui.strategy,L.ui.dropdown,it),yt=D({components:{HMenu:ft,HMenuButton:mt,HMenuItems:vt,HMenuItem:gt,UIcon:re,UAvatar:le,UKbd:Me},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>ee.default.openDelay},closeDelay:{type:Number,default:()=>ee.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:s}){const{ui:p,attrs:i}=ne("dropdown",K(e,"ui"),ee,K(e,"class")),c=T(()=>Le(e.mode==="hover"?{offsetDistance:0}:{},e.popper,p.value.popper)),[v,t]=ot(c.value),o=R(null);let u=null,g=null;te(()=>{var h,y;const l=(h=v.value)==null?void 0:h.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((y=o.value)==null||y.openMenu())});const I=T(()=>{var y,j,N;if(e.mode!=="hover")return{};const l=((y=e.popper)==null?void 0:y.offsetDistance)||((j=p.value.popper)==null?void 0:j.offsetDistance)||8,n=(N=c.value.placement)==null?void 0:N.split("-")[0],h=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:h,paddingBottom:h}:n==="left"||n==="right"?{paddingLeft:h,paddingRight:h}:{paddingTop:h,paddingBottom:h,paddingLeft:h,paddingRight:h}});function m(l){!l.cancelable||!o.value||(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(g&&(clearTimeout(g),g=null),o.value.menuState!==0&&(u=u||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),u=null},e.openDelay)))}function d(){e.mode!=="hover"||!o.value||(u&&(clearTimeout(u),u=null),o.value.menuState!==1&&(g=g||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),g=null},e.closeDelay)))}function r(l,n,{href:h,navigate:y,close:j,isExternal:N}){n.click&&n.click(l),h&&!N&&(y(l),j())}fe(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),fe(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||s("update:open",l===0)});const f=J;return st(()=>Ke("$ctlRmIk4j0")),{ui:p,attrs:i,popper:c,trigger:v,container:t,containerStyle:I,onTouchStart:m,onMouseEnter:a,onMouseLeave:d,onClick:r,getNuxtLinkProps:je,twMerge:he,twJoin:oe,NuxtLink:f}}}),_t=["disabled"];function kt(e,s,p,i,c,v){const t=V("HMenuButton"),o=re,u=le,g=Me,I=V("HMenuItem"),m=J,a=V("HMenuItems"),d=V("HMenu");return b(),A(d,B({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:x(({open:r})=>[k(t,{ref:"trigger",as:"div",disabled:e.disabled,class:P(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:x(()=>[F(e.$slots,"default",{open:r,disabled:e.disabled},()=>[_("button",{disabled:e.disabled}," Open ",8,_t)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),r&&e.items.length?(b(),S("div",{key:0,ref:"container",class:P([e.ui.container,e.ui.width]),style:Ne(e.containerStyle),onMouseenter:s[0]||(s[0]=(...f)=>e.onMouseEnter&&e.onMouseEnter(...f))},[k(Be,B({appear:""},e.ui.transition),{default:x(()=>[_("div",null,[e.popper.arrow?(b(),S("div",{key:0,"data-popper-arrow":"",class:P(Object.values(e.ui.arrow))},null,2)):U("",!0),k(a,{class:P([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:x(()=>[(b(!0),S(H,null,Q(e.items,(f,l)=>(b(),S("div",{key:l,class:P(e.ui.padding)},[(b(!0),S(H,null,Q(f,(n,h)=>(b(),A(m,B({key:h,ref_for:!0},e.getNuxtLinkProps(n),{custom:""}),{default:x(({href:y,target:j,rel:N,navigate:Se,isExternal:$e,isActive:ue})=>[k(I,{disabled:n.disabled},{default:x(({active:ce,disabled:de,close:Te})=>[(b(),A(Ue(y?"a":"button"),{href:de?void 0:y,rel:N,target:j,class:P(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,ce||ue?e.ui.item.active:e.ui.item.inactive,de&&e.ui.item.disabled),n.class)),onClick:q=>e.onClick(q,n,{href:y,navigate:Se,close:Te,isExternal:$e})},{default:x(()=>[F(e.$slots,n.slot||"item",{item:n},()=>{var q;return[n.icon?(b(),A(o,{key:0,name:n.icon,class:P(e.twMerge(e.twJoin(e.ui.item.icon.base,ce||ue?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(b(),A(u,B({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):U("",!0),_("span",{class:P(e.twMerge(e.ui.item.label,n.labelClass))},C(n.label),3),(q=n.shortcuts)!=null&&q.length?(b(),S("span",{key:2,class:P(e.ui.item.shortcuts)},[(b(!0),S(H,null,Q(n.shortcuts,pe=>(b(),A(g,{key:pe},{default:x(()=>[se(C(pe),1)]),_:2},1024))),128))],2)):U("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):U("",!0)]),_:3},16,["class","onMouseleave"])}const xt=G(yt,[["render",kt]]),O=ae(L.ui.strategy,L.ui.chip,lt),wt=D({inheritAttrs:!1,props:{size:{type:String,default:()=>O.default.size,validator(e){return Object.keys(O.size).includes(e)}},color:{type:String,default:()=>O.default.color,validator(e){return["gray",...L.ui.colors].includes(e)}},position:{type:String,default:()=>O.default.position,validator(e){return Object.keys(O.position).includes(e)}},text:{type:[String,Number],default:null},inset:{type:Boolean,default:()=>O.default.inset},show:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:p}=ne("chip",K(e,"ui"),O,K(e,"class")),i=T(()=>oe(s.value.base,s.value.size[e.size],s.value.position[e.position],e.inset?null:s.value.translate[e.position],s.value.background.replaceAll("{color}",e.color)));return{ui:s,attrs:p,chipClass:i}}});function It(e,s,p,i,c,v){return b(),S("div",B({class:e.ui.wrapper},e.attrs),[F(e.$slots,"default"),e.show?(b(),S("span",{key:0,class:P(e.chipClass)},[F(e.$slots,"content",{},()=>[se(C(e.text),1)])],2)):U("",!0)],16)}const Mt=G(wt,[["render",It]]),St={class:"h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50"},$t={class:"container-fluid mx-10 flex items-center h-full justify-between"},Tt=_("span",{class:"text-2xl font-medium"},"Uzman LLC",-1),Rt={class:"flex items-center space-x-2"},Pt={class:"mx-2"},Ct={class:"text-left"},Dt={class:"truncate font-medium text-gray-900 dark:text-white"},At={class:"truncate"},Ot=D({__name:"main-navbar",setup(e){const{currentUser:s,clear:p}=xe(),i=ge(),c=ye(),v=Ee(),t=R(""),o=[[{label:s.email,slot:"account",disabled:!0}],[{label:"Settings",icon:"i-heroicons-cog-8-tooth"}],[{label:"Log out",icon:"i-heroicons-arrow-left-on-rectangle",click:()=>{u()}}]],u=async()=>{i.set(!0),we.logout().then(()=>{i.set(!1),c.push("auth/login"),v.add({title:"Tizimdan chiqildi!"}),p()}).catch(g=>{i.set(!1),t.value=g,v.add({title:"Error",description:g.message})}).finally(()=>{i.set(!1)})};return(g,I)=>{const m=be,a=J,d=Pe,r=le,f=re,l=xt,n=_e,h=Mt;return b(),S("div",St,[_("div",$t,[k(a,{to:"/",class:"flex items-center space-x-1"},{default:x(()=>[k(m,{src:"/logo.png",width:"50",height:"50"}),Tt]),_:1}),_("div",Rt,[k(d),z(s)?(b(),A(h,{key:0},{default:x(()=>[k(n,{class:"font-sans",color:"white",variant:"solid"},{default:x(()=>[_("div",Pt,C(z(s).username),1),k(l,{items:o,ui:{item:{disabled:"cursor-text select-text"}},popper:{placement:"bottom-start"}},{account:x(({item:y})=>[_("div",Ct,[_("p",null,C(z(s).username),1),_("p",null,C(z(s).email),1),_("p",Dt,C(y.label),1)])]),item:x(({item:y})=>[_("span",At,C(y.label),1),k(f,{name:y.icon,class:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"},null,8,["name"])]),default:x(()=>[k(r,{src:"https://avatars.githubusercontent.com/u/739984?v=4"})]),_:1})]),_:1})]),_:1})):U("",!0)])])])}}}),zt=D({__name:"sidebar-item",setup(e){const s=Fe();return(p,i)=>{const c=He,v=_e,t=J;return b(!0),S(H,null,Q(z(rt),(o,u)=>(b(),A(t,{to:o.path,key:o.name},{default:x(()=>[k(v,{class:"w-full text-left h-12 flex justify-start rounded-none",variant:z(s).fullPath===o.path?"solid":"ghost",color:"blue"},{default:x(()=>[k(c,{name:o.icon,size:"20",class:"mr-2"},null,8,["name"]),_("span",null,C(o.name),1)]),_:2},1032,["variant"])]),_:2},1032,["to"]))),128)}}}),Lt={},jt={class:"fixed top-0 left-0 bottom-0 h-screen dark:bg-gray-900 bg-gray-200 w-72 border-r dark:border-r-gray-800 border-r-gray-300 pt-4"},Nt={class:"flex flex-col space-y-6"},Bt=_("span",{class:"text-2xl font-medium"},"Jira software",-1),Ut={class:"pl-4"};function Et(e,s){const p=be,i=J,c=zt;return b(),S("div",jt,[_("div",Nt,[k(i,{to:"/",class:"flex items-center space-x-1 pl-2"},{default:x(()=>[k(p,{src:"/logo.svg",width:"50",height:"50"}),Bt]),_:1}),_("div",Ut,[k(c)])])])}const Ft=G(Lt,[["render",Et]]),Ht={class:"min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]"},Kt={class:"p-4"},Yt=D({__name:"default",setup(e){const s=ye(),p=xe(),i=ge();return te(()=>{i.set(!0),we.getUser().then(c=>{c.status?p.update({id:c.resoult.$id,username:c.resoult.username,email:c.resoult.email,password:"",token:c.resoult.token}):s.push("/auth/login"),i.set(!1)}).catch(c=>{s.push("/auth/login"),i.set(!1)}).finally(()=>{i.set(!1)})}),(c,v)=>{const t=Re,o=Ot,u=Ft;return z(i).isLoading?(b(),A(t,{key:0})):(b(),S(H,{key:1},[k(o),k(u),_("section",Ht,[_("div",Kt,[F(c.$slots,"default")])])],64))}}});export{Yt as default};
