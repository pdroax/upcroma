(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7634:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,9628,23)),Promise.resolve().then(a.t.bind(a,1596,23)),Promise.resolve().then(a.bind(a,1193)),Promise.resolve().then(a.bind(a,8438))},1193:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var i=a(5155),r=a(2115);a(3078);let s=function(){return(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://static.elfsight.com/platform/platform.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,i.jsx)("div",{className:"rates-container",children:(0,i.jsx)("div",{className:"elfsight-app-ffe5d2e3-89cb-4523-b29b-3c90fad22762","data-elfsight-app-lazy":!0})})}},8438:(e,t,a)=>{"use strict";a.d(t,{default:()=>k});var i=a(5155),r=a(2115);class s{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async(e,t,a={})=>{let i=await fetch(o.origin+e,{method:"POST",headers:a,body:t}),r=await i.text(),l=new s(i.status,r);if(i.ok)return l;throw l},c=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},m=e=>e.webdriver||!e.languages||0===e.languages.length,h=()=>new s(451,"Unavailable For Headless Browser"),u=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>!e.list?.length||!e.watchVariable,b=(e,t)=>e instanceof FormData?e.get(t):e[t],f=(e,t)=>{if(p(e))return!1;u(e.list,e.watchVariable);let a=b(t,e.watchVariable);return"string"==typeof a&&e.list.includes(a)},g=()=>new s(403,"Forbidden"),j=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},v=async(e,t,a)=>{let i=Number(await a.get(e)||0);return t-Date.now()+i},x=async(e,t,a)=>{if(!t.throttle||!a)return!1;j(t.throttle,t.id);let i=t.id||e;return await v(i,t.throttle,a)>0||(await a.set(i,Date.now().toString()),!1)},w=()=>new s(429,"Too Many Requests"),y={send:async(e,t,a,i)=>{let r=l(i),s=r.publicKey||o.publicKey,u=r.blockHeadless||o.blockHeadless,p=r.storageProvider||o.storageProvider,b={...o.blockList,...r.blockList},j={...o.limitRate,...r.limitRate};return u&&m(navigator)?Promise.reject(h()):(c(s,e,t),d(a),a&&f(b,a))?Promise.reject(g()):await x(location.pathname,j,p)?Promise.reject(w()):n("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})}};a(7681);let O=function(){return(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"submit-btn",children:"Enviar mensagem"})})};a(4747);var S=a(8897),_=a.n(S);let k=function(){let[e,t]=(0,r.useState)(""),[a,s]=(0,r.useState)(""),[o,l]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[d,m]=(0,r.useState)("");return(0,i.jsx)("div",{className:"contato",children:(0,i.jsxs)("form",{onSubmit:function(i){i.preventDefault(),y.send("service_789b6pd","template_8s6chc9",{from_name:e,from_email:a,from_number:o,from_subject:n,message:d},"VKzAz5-bTYCd6fCMb").then(()=>{t(""),s(""),l(""),m(""),c(""),_().fire({title:"Mensagem enviada! <br> Logo entraremos em contato!",icon:"success",draggable:!0})},e=>{console.log("Erro: ",e)})},className:"form",children:[(0,i.jsxs)("div",{className:"form-input",children:[(0,i.jsx)("label",{children:"Nome:"}),(0,i.jsx)("input",{required:!0,type:"text",placeholder:"Preencha seu nome",onChange:e=>t(e.target.value),value:e}),(0,i.jsx)("label",{children:"E-mail:"}),(0,i.jsx)("input",{required:!0,type:"email",placeholder:"Ex: email@exemplo.com",onChange:e=>s(e.target.value),value:a}),(0,i.jsx)("label",{children:"Telefone:"}),(0,i.jsx)("input",{required:!0,type:"text",placeholder:"(99)99999-9999)",onChange:e=>l(e.target.value),value:o})]}),(0,i.jsxs)("div",{className:"form-select",children:[(0,i.jsx)("label",{children:"Selecione o assunto:"}),(0,i.jsxs)("select",{required:!0,onChange:e=>c(e.target.value),value:n,children:[(0,i.jsx)("option",{value:"",disabled:!0,children:"Selecione"}),(0,i.jsx)("option",{children:"D\xfavidas sobre instala\xe7\xe3o"}),(0,i.jsx)("option",{children:"D\xfavidas sobre pel\xedculas"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Fum\xea"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Metalizada"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Seguran\xe7a"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Jateada"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Vinil Jateado"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Prata Espelhada"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Silver Black"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Espelhada (Colorida)"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula LG-80"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Opacas"}),(0,i.jsx)("option",{children:"Or\xe7amento de pelicula Nanocer\xe2mica"}),(0,i.jsx)("option",{children:"Or\xe7amento de pel\xedcula Venetian"})]})]}),(0,i.jsxs)("div",{className:"form-text",children:[(0,i.jsx)("label",{children:"Deixe sua mensagem:"}),(0,i.jsx)("textarea",{required:!0,placeholder:"Descreva melhor o que deseja",onChange:e=>m(e.target.value),value:d})]}),(0,i.jsx)(O,{})]})})}},1596:()=>{},9628:()=>{},7681:()=>{},3078:()=>{},4747:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[37,435,320,441,517,358],()=>t(7634)),_N_E=e.O()}]);