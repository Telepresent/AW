(()=>{var h=Object.defineProperty;var $=(t,o,r)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;var y=(t,o,r)=>($(t,typeof o!="symbol"?o+"":o,r),r);var l=class{static activateAlerts(){this.alertsActivated=!0}static alert(o,r){if(this.alertsActivated&&window.alert(o),r==="error")throw new Error(o)}};y(l,"alertsActivated",!1);var f=t=>{let o=(u,i,e)=>{let s=t[u],{key:n,values:a}=s,c;if(!i)return`[${n}]`;let p=a==null?void 0:a[i];if(typeof p=="string"?c=p:c=p(e&&"instanceIndex"in e?e.instanceIndex:void 0),!(e==null?void 0:e.operator))return`[${n}="${c}"]`;switch(e.operator){case"prefixed":return`[${n}^="${c}"]`;case"suffixed":return`[${n}$="${c}"]`;case"contains":return`[${n}*="${c}"]`}};return[o,(u,i)=>{let e=o("element",u,i);return((i==null?void 0:i.scope)||document).querySelector(e)}]};var m="fs-attributes",b={preventLoad:{key:`${m}-preventload`},debugMode:{key:`${m}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${m}-dev`}},[A,K]=f(b);var v=()=>{let{currentScript:t}=document,{preventLoad:o,debugMode:r}=b,u=typeof(t==null?void 0:t.getAttribute(o.key))=="string";return typeof(t==null?void 0:t.getAttribute(r.key))=="string"&&l.activateAlerts(),{preventsLoad:u}};var g=()=>{if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return;let t={cms:{},push(...o){var r,u;for(let[i,e]of o)(u=(r=this[i])==null?void 0:r.loading)==null||u.then(e)}};k(t),I(t),window.fsAttributes=t,window.FsAttributes=window.fsAttributes},k=t=>{let o=A("src","finsweet",{operator:"contains"}),r=A("dev"),i=[...document.querySelectorAll(`script${o}, script${r}`)].reduce((e,s)=>{var a;let n=s.getAttribute(b.dev.key)||((a=s.src.match(/[\w-. ]+(?=(\.js)$)/))==null?void 0:a[0]);return n&&!e.includes(n)&&e.push(n),e},[]);for(let e of i){t[e]={};let s=t[e];s.loading=new Promise(n=>{s.resolve=a=>{n(a),delete s.resolve}})}},I=t=>{let o=Array.isArray(window.fsAttributes)?window.fsAttributes:[];t.push(...o)};var E="1.2.1";var d="autovideo",N=`fs-${d}`,R={element:{key:`${N}-element`,values:{}}},[X,J]=f(R);var w=()=>{var u,i;let t=document.querySelectorAll("video");if(!t.length){l.alert("No videos were found in this page.","info");return}let o=new Map,r=new IntersectionObserver(e=>{for(let{target:s,isIntersecting:n}of e)s instanceof HTMLVideoElement&&(n?s.play():s.pause(),o.set(s,n))},{});document.addEventListener("visibilitychange",()=>{for(let[e,s]of o)document.hidden||!s?e.pause():e.play()});for(let e of t)e.autoplay=!1,o.set(e,null),r.observe(e);(i=(u=window.fsAttributes[d]).resolve)==null||i.call(u,o)};g();var T,S;(T=window.fsAttributes)[S=d]||(T[S]={});var x=window.fsAttributes[d],{preventsLoad:B}=v();x.version=E;B?x.init=w:(window.Webflow||(window.Webflow=[]),window.Webflow.push(w));})();