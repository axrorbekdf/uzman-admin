const c=a=>{try{const e=localStorage.getItem(a);return e?JSON.parse(e):null}catch(e){return console.log("Error getting Storage data",e),null}},t=(a,e)=>{try{localStorage.setItem(a,JSON.stringify(e))}catch(o){console.log("Error setting Storage data",o)}},i=a=>{try{localStorage.removeItem(a)}catch(e){console.log("Error deleting Storage data",e)}},n="http://10.100.104.125:5500/api/",r=[{name:"Dashboard",path:"/",icon:"radix-icons:dashboard"},{name:"Category",path:"/category",icon:"ri:todo-fill"},{name:"Level",path:"/level",icon:"game-icons:progression"},{name:"Home card",path:"/home-card",icon:"eos-icons:product-subscriptions"},{name:"Specialist",path:"/specialist",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Step work",path:"/step-work",icon:"ic:baseline-cloud-done"},{name:"Region",path:"/region",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"},{name:"Feedback",path:"/feedback",icon:"ic:baseline-cloud-done"}],s=()=>$fetch.create({baseURL:n,headers:{Authorization:`Bearer ${c("token")}`}});export{t as a,c as g,i as r,r as s,s as u};
