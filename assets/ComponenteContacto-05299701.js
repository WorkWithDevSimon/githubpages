import{r as p,j as a}from"./index-a8c7e47d.js";class c{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const g=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:g()},b=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},v=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=b(e);o.publicKey=r.publicKey,o.blockHeadless=r.blockHeadless,o.storageProvider=r.storageProvider,o.blockList=r.blockList,o.limitRate=r.limitRate,o.origin=r.origin||t},y=async(e,t,r={})=>{const s=await fetch(o.origin+e,{method:"POST",headers:r,body:t}),i=await s.text(),n=new c(s.status,i);if(s.ok)return n;throw n},x=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},w=e=>e.webdriver||!e.languages||e.languages.length===0,j=()=>new c(451,"Unavailable For Headless Browser"),P=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},L=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},S=(e,t)=>e instanceof FormData?e.get(t):e[t],k=(e,t)=>{if(L(e))return!1;P(e.list,e.watchVariable);const r=S(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},E=()=>new c(403,"Forbidden"),R=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},T=async(e,t,r)=>{const s=Number(await r.get(e)||0);return t-Date.now()+s},q=async(e,t,r)=>{if(!t.throttle||!r)return!1;R(t.throttle,t.id);const s=t.id||e;return await T(s,t.throttle,r)>0?!0:(await r.set(s,Date.now().toString()),!1)},N=()=>new c(429,"Too Many Requests"),H=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},F=e=>typeof e=="string"?document.querySelector(e):e,V=async(e,t,r,s)=>{const i=b(s),n=i.publicKey||o.publicKey,m=i.blockHeadless||o.blockHeadless,u=o.storageProvider||i.storageProvider,d={...o.blockList,...i.blockList},h={...o.limitRate,...i.limitRate};if(m&&w(navigator))return Promise.reject(j());const f=F(r);x(n,e,t),H(f);const l=new FormData(f);return k(d,l)?Promise.reject(E()):await q(location.pathname,h,u)?Promise.reject(N()):(l.append("lib_version","4.4.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",n),y("/api/v1.0/email/send-form",l))};const I=()=>{p.useEffect(()=>{v("eRnwuzzwRiqzbNCpN")},[]);const e=t=>{t.preventDefault();const r=t.target.querySelector('button[type="submit"]');r.value="Enviando...";const s=t.target.querySelector('input[name="nombre"]'),i=t.target.querySelector('input[name="telefono"]'),n=t.target.querySelector('input[name="email"]'),m=t.target.querySelector('textarea[name="textarea"]');if(s.value.trim()===""||i.value.length>=20||i.value.trim()===""||n.value.trim()===""||m.value.trim()===""){alert("Por favor, ingrese datos correspondientes."),r.value="Enviar";return}V("service_bi48y4b","template_c9on7co",t.target).then(()=>{r.value="Enviar",alert("Mensaje enviado exitosamente"),t.target.reset()}).catch(h=>{r.value="Enviar",alert("Ocurrió un error. Intenta nuevamente más tarde.")})};return a.jsx(a.Fragment,{children:a.jsxs("section",{className:"contactame",children:[a.jsxs("div",{className:"contactem_titulo",children:[a.jsx("h1",{children:"Contacto"}),a.jsx("div",{className:"SobreLineacontactame"})]}),a.jsxs("div",{className:"container_contacto",children:[a.jsx("h4",{children:"Puedes contactarme a través de este formulario"}),a.jsxs("form",{id:"form",className:"form",onSubmit:e,children:[a.jsx("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Ingrese Nombre",maxLength:"100"}),a.jsx("input",{type:"number",id:"telefono",name:"telefono",placeholder:"Ingrese teléfono",min:"0",maxLength:"20"}),a.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Ingrese correo electronico",maxLength:"254 "}),a.jsx("textarea",{id:"textarea",name:"textarea",placeholder:"Escribe tu mensaje aquí...",maxLength:"300"}),a.jsx("button",{type:"submit",className:"btn_form",children:"Enviar Información"})]})]})]})})};export{I as C};
