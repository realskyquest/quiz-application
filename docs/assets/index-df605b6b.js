(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function B(){}function gl(n){return n()}function La(){return Object.create(null)}function it(n){n.forEach(gl)}function ml(n){return typeof n=="function"}function Dt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Wr;function Ma(n,e){return Wr||(Wr=document.createElement("a")),Wr.href=e,n===Wr.href}function kd(n){return Object.keys(n).length===0}function p(n,e){n.appendChild(e)}function S(n,e,t){n.insertBefore(e,t||null)}function k(n){n.parentNode&&n.parentNode.removeChild(n)}function $i(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function X(n){return document.createTextNode(n)}function A(){return X(" ")}function pt(){return X("")}function le(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function Sd(n){return function(e){return e.preventDefault(),n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Cd(n){return Array.from(n.childNodes)}function De(n,e){e=""+e,n.data!==e&&(n.data=e)}function Gr(n,e){n.value=e??""}function ie(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function Ad(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,r,e),i}let er;function Wn(n){er=n}function yl(){if(!er)throw new Error("Function called outside component initialization");return er}function Eo(n){yl().$$.after_update.push(n)}function wr(){const n=yl();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=Ad(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const on=[],xa=[];let hn=[];const Ua=[],Rd=Promise.resolve();let js=!1;function Dd(){js||(js=!0,Rd.then(vl))}function qs(n){hn.push(n)}const ms=new Set;let rn=0;function vl(){if(rn!==0)return;const n=er;do{try{for(;rn<on.length;){const e=on[rn];rn++,Wn(e),Nd(e.$$)}}catch(e){throw on.length=0,rn=0,e}for(Wn(null),on.length=0,rn=0;xa.length;)xa.pop()();for(let e=0;e<hn.length;e+=1){const t=hn[e];ms.has(t)||(ms.add(t),t())}hn.length=0}while(on.length);for(;Ua.length;)Ua.pop()();js=!1,ms.clear(),Wn(n)}function Nd(n){if(n.fragment!==null){n.update(),it(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(qs)}}function Od(n){const e=[],t=[];hn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),hn=e}const si=new Set;let $t;function Nt(){$t={r:0,c:[],p:$t}}function Ot(){$t.r||it($t.c),$t=$t.p}function J(n,e){n&&n.i&&(si.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(si.has(n))return;si.add(n),$t.c.push(()=>{si.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function st(n){n&&n.c()}function Ge(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||qs(()=>{const o=n.$$.on_mount.map(gl).filter(ml);n.$$.on_destroy?n.$$.on_destroy.push(...o):it(o),n.$$.on_mount=[]}),s.forEach(qs)}function Qe(n,e){const t=n.$$;t.fragment!==null&&(Od(t.after_update),it(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Pd(n,e){n.$$.dirty[0]===-1&&(on.push(n),Dd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Pt(n,e,t,r,i,s,o,c=[-1]){const a=er;Wn(n);const l=n.$$={fragment:null,ctx:[],props:s,update:B,not_equal:i,bound:La(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:La(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Pd(n,h)),d}):[],l.update(),u=!0,it(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Cd(e.target);l.fragment&&l.fragment.l(h),h.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&J(n.$$.fragment),Ge(n,e.target,e.anchor,e.customElement),vl()}Wn(a)}class Lt{$destroy(){Qe(this,1),this.$destroy=B}$on(e,t){if(!ml(t))return B;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!kd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ld(n){let e;return{c(){e=v("header"),e.innerHTML=`<h1 class="h1">Quiz Application</h1> 
  <i class="small">Over 1000 questions!</i>`,m(e,"class","p-5 text-light text-center"),ie(e,"background-color","#4b5bab")},m(t,r){S(t,e,r)},p:B,i:B,o:B,d(t){t&&k(e)}}}class Md extends Lt{constructor(e){super(),Pt(this,e,null,Ld,Dt,{})}}const xd="modulepreload",Ud=function(n,e){return new URL(n,e).href},Fa={},Fd=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Ud(s,r),s in Fa)return;Fa[s]=!0;const o=s.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":xd,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var Vd=Object.defineProperty,$d=(n,e,t)=>e in n?Vd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ys=(n,e,t)=>($d(n,typeof e!="symbol"?e+"":e,t),t);class pi{constructor(e,t={}){ys(this,"src"),ys(this,"options"),ys(this,"howl"),this.src=e,this.options=t,this.create()}async create(){const{Howl:e}=await Fd(()=>import("./howler.core-e669a980-4e0b937d.js"),[],import.meta.url).then(s=>s.h),{loop:t,volume:r}=this.options,i=new e({src:this.src,loop:t||!1,volume:r||1,...this.options});this.howl=i}update(e=this.options){this.unload(),this.options=e,this.create()}destroy(){this.stop(),this.unload()}play(){this.howl.play()}stop(){this.howl.stop()}unload(){this.howl.unload()}}const Io=""+new URL("../mouseclick.mp3",import.meta.url).href,Bd=""+new URL("../twinklesparkle.mp3",import.meta.url).href;let jd=["History","Science","Geography","Literature","Sports","Music","Movies","Art","Technology","Math","Animals","General knowledge","Politics","Mythology"];function qd(n,e,t){let r=t;const s={History:23,Science:17,Geography:22,Literature:10,Sports:21,Music:12,Movies:14,Art:25,Technology:18,Math:19,Animals:27,"General knowledge":9,Politics:24,Mythology:20}[n];return`${`https://opentdb.com/api.php?amount=${r}&category=${s}`}&difficulty=${zd(e)}&type=multiple`}function zd(n){return n.charAt(0).toLowerCase()+n.slice(1)}function Va(n,e,t){const r=n.slice();return r[5]=e[t],r}function $a(n){let e,t=n[5]+"",r,i;return{c(){e=v("option"),r=X(t),e.__value=i=n[5],e.value=e.__value},m(s,o){S(s,e,o),p(e,r)},p(s,o){o&1&&t!==(t=s[5]+"")&&De(r,t),o&1&&i!==(i=s[5])&&(e.__value=i,e.value=e.__value)},d(s){s&&k(e)}}}function Hd(n){let e,t,r,i=n[0],s=[];for(let o=0;o<i.length;o+=1)s[o]=$a(Va(n,i,o));return{c(){e=v("select");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","form-select mt-2")},m(o,c){S(o,e,c);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);t||(r=le(e,"change",n[1]),t=!0)},p(o,[c]){if(c&1){i=o[0];let a;for(a=0;a<i.length;a+=1){const l=Va(o,i,a);s[a]?s[a].p(l,c):(s[a]=$a(l),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},i:B,o:B,d(o){o&&k(e),$i(s,o),t=!1,r()}}}function Kd(n,e,t){let r=wr(),{values:i=[]}=e,s=null;function o(a){const u=a.target.value;t(2,s=u)}function c(){r("return",s)}return n.$$set=a=>{"values"in a&&t(0,i=a.values)},n.$$.update=()=>{n.$$.dirty&4&&c()},[i,o,s]}class vs extends Lt{constructor(e){super(),Pt(this,e,Kd,Hd,Dt,{values:0})}}function Ba(n,e,t){const r=n.slice();return r[6]=e[t],r}function ja(n){let e,t=gi(n[6])+"",r,i,s,o;function c(){return n[4](n[6])}return{c(){e=v("button"),r=X(t),i=A(),m(e,"class","btn h6 mt-2 p-2 animate__animated animate__fadeIn"),ie(e,"background-color","#c2c2d1")},m(a,l){S(a,e,l),p(e,r),p(e,i),s||(o=le(e,"click",c),s=!0)},p(a,l){n=a,l&2&&t!==(t=gi(n[6])+"")&&De(r,t)},d(a){a&&k(e),s=!1,o()}}}function Wd(n){let e,t,r=gi(n[0].question)+"",i,s,o,c=n[1],a=[];for(let l=0;l<c.length;l+=1)a[l]=ja(Ba(n,c,l));return{c(){e=v("div"),t=v("h4"),i=X(r),s=A(),o=v("div");for(let l=0;l<a.length;l+=1)a[l].c();m(t,"class","h4 text-dark text-opacity-75 mt-2 animate__animated animate__slideInLeft"),m(o,"class","row"),m(e,"class","container text-center")},m(l,u){S(l,e,u),p(e,t),p(t,i),p(e,s),p(e,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(o,null)},p(l,[u]){if(u&1&&r!==(r=gi(l[0].question)+"")&&De(i,r),u&14){c=l[1];let h;for(h=0;h<c.length;h+=1){const d=Ba(l,c,h);a[h]?a[h].p(d,u):(a[h]=ja(d),a[h].c(),a[h].m(o,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=c.length}},i:B,o:B,d(l){l&&k(e),$i(a,l)}}}function Gd(n){for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function gi(n){var e=document.createElement("div");return n&&typeof n=="string"&&(e.innerHTML=n,n=e.textContent,e.textContent=""),e.remove(),n}function Qd(n,e,t){const r=wr(),i=new pi(Io);let{question:s}=e,o=[s.correct_answer,...s.incorrect_answers];function c(l){l==s.correct_answer?r("return",!0):r("return",!1)}o=Gd(o);const a=l=>{i.play(),c(l)};return n.$$set=l=>{"question"in l&&t(0,s=l.question)},[s,o,i,c,a]}class Yd extends Lt{constructor(e){super(),Pt(this,e,Qd,Wd,Dt,{question:0})}}function qa(n,e,t){const r=n.slice();return r[25]=e[t],r}function Jd(n){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4">Rush Attack</p>',m(e,"class","container text-center rounded-2 p-2"),ie(e,"background-color","#eb564b")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function Xd(n){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4">Time Countdown</p>',m(e,"class","container text-center rounded-2 p-2"),ie(e,"background-color","#ffe478")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function Zd(n){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4">Classic</p>',m(e,"class","container text-center rounded-2 p-2"),ie(e,"background-color","#4da6ff")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function ef(n){let e,t,r,i;const s=[rf,nf],o=[];function c(a,l){return a[4]===!0?0:a[4]===!1&&a[2]?1:-1}return~(e=c(n))&&(t=o[e]=s[e](n)),{c(){t&&t.c(),r=pt()},m(a,l){~e&&o[e].m(a,l),S(a,r,l),i=!0},p(a,l){let u=e;e=c(a),e===u?~e&&o[e].p(a,l):(t&&(Nt(),ee(o[u],1,1,()=>{o[u]=null}),Ot()),~e?(t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),J(t,1),t.m(r.parentNode,r)):t=null)},i(a){i||(J(t),i=!0)},o(a){ee(t),i=!1},d(a){~e&&o[e].d(a),a&&k(r)}}}function tf(n){let e,t,r,i,s,o,c,a,l,u,h,d,f,g,_,y,I,T,L,q;return s=new vs({props:{values:jd}}),s.$on("return",n[16]),l=new vs({props:{values:n[14]}}),l.$on("return",n[17]),f=new vs({props:{values:[5,10,15,20,25,30,35,40,45,50]}}),f.$on("return",n[18]),{c(){e=v("div"),t=v("form"),r=v("p"),r.textContent="Category",i=A(),st(s.$$.fragment),o=A(),c=v("p"),c.textContent="Difficulty",a=A(),st(l.$$.fragment),u=A(),h=v("p"),h.textContent="Amount of questions",d=A(),st(f.$$.fragment),g=A(),_=v("button"),_.textContent="Submit",y=A(),I=v("button"),I.textContent="Exit",m(r,"class","text-dark text-opacity-75 h6 mt-2"),m(c,"class","text-dark text-opacity-75 h6 mt-2"),m(h,"class","text-dark text-opacity-75 h6 mt-2"),m(_,"class","btn text-bg-success mt-2"),m(t,"class","row"),m(I,"class","btn text-bg-danger mt-2"),m(e,"class","container text-center")},m(N,$){S(N,e,$),p(e,t),p(t,r),p(t,i),Ge(s,t,null),p(t,o),p(t,c),p(t,a),Ge(l,t,null),p(t,u),p(t,h),p(t,d),Ge(f,t,null),p(t,g),p(t,_),p(e,y),p(e,I),T=!0,L||(q=[le(t,"submit",Sd(n[15])),le(I,"click",n[19])],L=!0)},p:B,i(N){T||(J(s.$$.fragment,N),J(l.$$.fragment,N),J(f.$$.fragment,N),T=!0)},o(N){ee(s.$$.fragment,N),ee(l.$$.fragment,N),ee(f.$$.fragment,N),T=!1},d(N){N&&k(e),Qe(s),Qe(l),Qe(f),L=!1,it(q)}}}function nf(n){let e,t,r,i;const s=[of,sf],o=[];function c(a,l){return a[3]===a[2].length?0:1}return e=c(n),t=o[e]=s[e](n),{c(){t.c(),r=pt()},m(a,l){o[e].m(a,l),S(a,r,l),i=!0},p(a,l){let u=e;e=c(a),e===u?o[e].p(a,l):(Nt(),ee(o[u],1,1,()=>{o[u]=null}),Ot(),t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),J(t,1),t.m(r.parentNode,r))},i(a){i||(J(t),i=!0)},o(a){ee(t),i=!1},d(a){o[e].d(a),a&&k(r)}}}function rf(n){let e;return{c(){e=v("div"),e.innerHTML='<div class="spinner-border"></div>',m(e,"class","text-center mt-5")},m(t,r){S(t,e,r)},p:B,i:B,o:B,d(t){t&&k(e)}}}function sf(n){let e,t,r,i=n[3]+1+"",s,o,c,a,l=n[2],u=[];for(let d=0;d<l.length;d+=1)u[d]=Ha(qa(n,l,d));const h=d=>ee(u[d],1,1,()=>{u[d]=null});return{c(){e=v("div"),t=v("div"),r=v("div"),s=X(i),o=A();for(let d=0;d<u.length;d+=1)u[d].c();c=pt(),m(r,"class","progress-bar"),ie(r,"width",(n[3]+1)/n[2].length*100+"%"),m(t,"class","progress"),m(e,"class","container mt-2")},m(d,f){S(d,e,f),p(e,t),p(t,r),p(r,s),S(d,o,f);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(d,f);S(d,c,f),a=!0},p(d,f){if((!a||f&8)&&i!==(i=d[3]+1+"")&&De(s,i),(!a||f&12)&&ie(r,"width",(d[3]+1)/d[2].length*100+"%"),f&492){l=d[2];let g;for(g=0;g<l.length;g+=1){const _=qa(d,l,g);u[g]?(u[g].p(_,f),J(u[g],1)):(u[g]=Ha(_),u[g].c(),J(u[g],1),u[g].m(c.parentNode,c))}for(Nt(),g=l.length;g<u.length;g+=1)h(g);Ot()}},i(d){if(!a){for(let f=0;f<l.length;f+=1)J(u[f]);a=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)ee(u[f]);a=!1},d(d){d&&k(e),d&&k(o),$i(u,d),d&&k(c)}}}function of(n){let e,t,r,i,s,o,c,a,l,u,h,d,f;function g(I,T){return I[5]>=I[6]?df:hf}let _=g(n),y=_(n);return{c(){e=v("div"),y.c(),t=A(),r=v("p"),i=X("Correct answers = "),s=X(n[5]),o=A(),c=v("br"),a=X(`\r
          Wrong answers = `),l=X(n[6]),u=A(),h=v("button"),h.textContent="Exit",m(h,"class","btn text-bg-danger mt-2"),m(e,"class","text-center animate__animated animate__fadeIn")},m(I,T){S(I,e,T),y.m(e,null),p(e,t),p(e,r),p(r,i),p(r,s),p(r,o),p(r,c),p(r,a),p(r,l),p(e,u),p(e,h),d||(f=le(h,"click",n[20]),d=!0)},p(I,T){_!==(_=g(I))&&(y.d(1),y=_(I),y&&(y.c(),y.m(e,t))),T&32&&De(s,I[5]),T&64&&De(l,I[6])},i:B,o:B,d(I){I&&k(e),y.d(),d=!1,f()}}}function za(n){let e,t,r,i;const s=[cf,af],o=[];function c(a,l){return a[7]===!1?0:1}return e=c(n),t=o[e]=s[e](n),{c(){t.c(),r=pt()},m(a,l){o[e].m(a,l),S(a,r,l),i=!0},p(a,l){let u=e;e=c(a),e===u?o[e].p(a,l):(Nt(),ee(o[u],1,1,()=>{o[u]=null}),Ot(),t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),J(t,1),t.m(r.parentNode,r))},i(a){i||(J(t),i=!0)},o(a){ee(t),i=!1},d(a){o[e].d(a),a&&k(r)}}}function af(n){let e,t,r=mi(n[2][n[3]].question)+"",i,s,o,c;function a(h,d){if(h[8]===!0)return uf;if(h[8]===!1)return lf}let l=a(n),u=l&&l(n);return{c(){e=v("div"),t=v("h4"),i=X(r),s=A(),o=v("div"),u&&u.c(),c=A(),m(t,"class","h4 text-dark text-opacity-75 mt-2"),m(o,"class","mt-5 animate__animated animate__pulse text-light"),m(e,"class","container text-center")},m(h,d){S(h,e,d),p(e,t),p(t,i),p(e,s),p(e,o),u&&u.m(o,null),p(e,c)},p(h,d){d&12&&r!==(r=mi(h[2][h[3]].question)+"")&&De(i,r),l===(l=a(h))&&u?u.p(h,d):(u&&u.d(1),u=l&&l(h),u&&(u.c(),u.m(o,null)))},i:B,o:B,d(h){h&&k(e),u&&u.d()}}}function cf(n){let e,t;return e=new Yd({props:{question:n[25]}}),e.$on("return",n[21]),{c(){st(e.$$.fragment)},m(r,i){Ge(e,r,i),t=!0},p(r,i){const s={};i&4&&(s.question=r[25]),e.$set(s)},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Qe(e,r)}}}function lf(n){let e,t,r,i,s,o=mi(n[25].correct_answer)+"",c;return{c(){e=v("div"),t=v("h4"),t.innerHTML="Your answer is wrong<br/>Try better next time!",r=A(),i=v("p"),s=X("Correct Answer is "),c=X(o),m(t,"class","h4"),m(i,"class","text-dark"),m(e,"class","p-5 rounded-2"),ie(e,"background-color","#eb564b")},m(a,l){S(a,e,l),p(e,t),p(e,r),p(e,i),p(i,s),p(i,c)},p(a,l){l&4&&o!==(o=mi(a[25].correct_answer)+"")&&De(c,o)},d(a){a&&k(e)}}}function uf(n){let e;return{c(){e=v("div"),e.innerHTML='<h4 class="h4">Your answer is correct<br/>Well done!</h4>',m(e,"class","p-5 rounded-2"),ie(e,"background-color","#3ca370")},m(t,r){S(t,e,r)},p:B,d(t){t&&k(e)}}}function Ha(n){let e=n[2].indexOf(n[25])===n[3],t,r,i=e&&za(n);return{c(){i&&i.c(),t=pt()},m(s,o){i&&i.m(s,o),S(s,t,o),r=!0},p(s,o){o&12&&(e=s[2].indexOf(s[25])===s[3]),e?i?(i.p(s,o),o&12&&J(i,1)):(i=za(s),i.c(),J(i,1),i.m(t.parentNode,t)):i&&(Nt(),ee(i,1,1,()=>{i=null}),Ot())},i(s){r||(J(i),r=!0)},o(s){ee(i),r=!1},d(s){i&&i.d(s),s&&k(t)}}}function hf(n){let e;return{c(){e=v("h4"),e.textContent="Keep practicing!",m(e,"class","h4 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function df(n){let e;return{c(){e=v("h4"),e.textContent="Good job!",m(e,"class","h4 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function ff(n){let e,t,r,i,s,o;function c(f,g){return f[0]==="Classic"?Zd:f[0]==="Time Countdown"?Xd:Jd}let a=c(n),l=a(n);const u=[tf,ef],h=[];function d(f,g){return f[1]==="choose"?0:f[1]==="started"?1:-1}return~(r=d(n))&&(i=h[r]=u[r](n)),{c(){e=v("div"),l.c(),t=A(),i&&i.c(),s=pt(),m(e,"class","container mt-5")},m(f,g){S(f,e,g),l.m(e,null),S(f,t,g),~r&&h[r].m(f,g),S(f,s,g),o=!0},p(f,[g]){a!==(a=c(f))&&(l.d(1),l=a(f),l&&(l.c(),l.m(e,null)));let _=r;r=d(f),r===_?~r&&h[r].p(f,g):(i&&(Nt(),ee(h[_],1,1,()=>{h[_]=null}),Ot()),~r?(i=h[r],i?i.p(f,g):(i=h[r]=u[r](f),i.c()),J(i,1),i.m(s.parentNode,s)):i=null)},i(f){o||(J(i),o=!0)},o(f){ee(i),o=!1},d(f){f&&k(e),l.d(),f&&k(t),~r&&h[r].d(f),f&&k(s)}}}function mi(n){var e=document.createElement("div");return n&&typeof n=="string"&&(e.innerHTML=n,n=e.textContent,e.textContent=""),e.remove(),n}function pf(n,e,t){let r=wr();const i=new pi(Bd),s=new pi(Io);let{quizType:o=""}=e,c="choose",a="",l,u=0,h=!1,d=0,f=0,g=!1,_=!1,y=["Easy","Medium","Hard"],I="History",T="Easy",L=5;Eo(()=>{l!=null&&u==l.length&&(i.play(),r("finished",[d,f]))});async function q(){try{t(4,h=!0);const K=await fetch(a),Q=await K.json();if(K.ok)return t(4,h=!1),Q.results;throw new Error("Network response was not ok")}catch(K){console.log("Quiz Error: |",K,"|")}}async function N(){s.play(),a=qd(I,T,L),t(1,c="started"),t(2,l=await q())}const $=K=>{t(9,I=K.detail)},H=K=>{t(10,T=K.detail)},Ne=K=>{t(11,L=K.detail)},ge=()=>{s.play(),r("exit","finished")},Pe=()=>{s.play(),r("exit","finished")},qe=K=>{t(7,g=!0),t(8,_=K.detail),_==!0?t(5,d+=1):_==!1&&t(6,f+=1),setTimeout(()=>{t(7,g=!1),t(3,u+=1)},3e3)};return n.$$set=K=>{"quizType"in K&&t(0,o=K.quizType)},[o,c,l,u,h,d,f,g,_,I,T,L,r,s,y,N,$,H,Ne,ge,Pe,qe]}class gf extends Lt{constructor(e){super(),Pt(this,e,pf,ff,Dt,{quizType:0})}}function mf(n){let e,t,r,i,s,o,c,a,l,u,h,d,f,g,_,y,I,T=n[0][0]+"",L,q,N,$,H=n[0][1]+"",Ne,ge,Pe;function qe(oe,ze){return oe[0][0]>=oe[0][1]?_f:vf}let K=qe(n),Q=K(n);return{c(){e=v("div"),t=v("div"),r=v("div"),i=v("div"),s=v("button"),s.textContent="Classic",o=A(),c=v("button"),c.textContent="Time Countdown",a=A(),l=v("button"),l.textContent="Rush Attack",u=A(),h=v("div"),d=v("div"),f=v("h4"),f.textContent="Previous quiz results",g=A(),Q.c(),_=A(),y=v("p"),I=X("Correct answers = "),L=X(T),q=A(),N=v("br"),$=X(`\r
            Wrong answers = `),Ne=X(H),m(s,"type","button"),m(s,"class","btn text-dark btn-lg animate__animated animate__pulse"),ie(s,"background-color","#4da6ff"),m(c,"type","button"),m(c,"class","btn text-dark btn-lg"),ie(c,"background-color","#ffe478"),c.disabled=!0,m(l,"type","button"),m(l,"class","btn text-dark btn-lg"),ie(l,"background-color","#eb564b"),l.disabled=!0,m(i,"class","d-grid gap-3"),m(r,"class","col"),m(f,"class","h4"),m(d,"class","text-center"),m(h,"class","col"),m(t,"class","row"),m(e,"class","container mt-5")},m(oe,ze){S(oe,e,ze),p(e,t),p(t,r),p(r,i),p(i,s),p(i,o),p(i,c),p(i,a),p(i,l),p(t,u),p(t,h),p(h,d),p(d,f),p(d,g),Q.m(d,null),p(d,_),p(d,y),p(y,I),p(y,L),p(y,q),p(y,N),p(y,$),p(y,Ne),ge||(Pe=[le(s,"click",n[8]),le(c,"click",n[9]),le(l,"click",n[10])],ge=!0)},p(oe,ze){K!==(K=qe(oe))&&(Q.d(1),Q=K(oe),Q&&(Q.c(),Q.m(d,_))),ze&1&&T!==(T=oe[0][0]+"")&&De(L,T),ze&1&&H!==(H=oe[0][1]+"")&&De(Ne,H)},i:B,o:B,d(oe){oe&&k(e),Q.d(),ge=!1,it(Pe)}}}function yf(n){let e,t,r,i;const s=[Ef,wf],o=[];function c(a,l){return a[3]==!1?0:1}return e=c(n),t=o[e]=s[e](n),{c(){t.c(),r=pt()},m(a,l){o[e].m(a,l),S(a,r,l),i=!0},p(a,l){let u=e;e=c(a),e===u?o[e].p(a,l):(Nt(),ee(o[u],1,1,()=>{o[u]=null}),Ot(),t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),J(t,1),t.m(r.parentNode,r))},i(a){i||(J(t),i=!0)},o(a){ee(t),i=!1},d(a){o[e].d(a),a&&k(r)}}}function vf(n){let e;return{c(){e=v("p"),e.textContent="Keep practicing!",m(e,"class","h5 text-dark text-opacity-75 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function _f(n){let e;return{c(){e=v("p"),e.textContent="Good job!",m(e,"class","h5 text-dark text-opacity-75 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function wf(n){let e,t,r;return t=new gf({props:{quizType:n[1]}}),t.$on("exit",n[6]),t.$on("finished",n[7]),{c(){e=v("div"),st(t.$$.fragment),m(e,"class","animate__animated animate__fadeIn animate__delay-1s")},m(i,s){S(i,e,s),Ge(t,e,null),r=!0},p(i,s){const o={};s&2&&(o.quizType=i[1]),t.$set(o)},i(i){r||(J(t.$$.fragment,i),r=!0)},o(i){ee(t.$$.fragment,i),r=!1},d(i){i&&k(e),Qe(t)}}}function Ef(n){let e,t,r,i,s,o,c,a,l,u,h,d=n[0][0]+"",f,g,_,y,I=n[0][1]+"",T;function L($,H){return $[0][0]>=$[0][1]?Tf:If}let q=L(n),N=q(n);return{c(){e=v("div"),t=v("div"),r=v("div"),r.innerHTML=`<div class="d-grid gap-3"><button type="button" class="btn btn-lg" style="background-color: #4da6ff;">Classic</button> 
            <button type="button" class="btn btn-lg" style="background-color: #ffe478;" disabled="">Time Countdown</button> 
            <button type="button" class="btn btn-lg" style="background-color: #eb564b;" disabled="">Rush Attack</button></div>`,i=A(),s=v("div"),o=v("div"),c=v("h4"),c.textContent="Previous quiz results",a=A(),N.c(),l=A(),u=v("p"),h=X("Correct answers = "),f=X(d),g=A(),_=v("br"),y=X(`\r
              Wrong answers = `),T=X(I),m(r,"class","col"),m(c,"class","h4"),m(o,"class","text-center"),m(s,"class","col"),m(t,"class","row"),m(e,"class","container mt-5 animate__animated animate__fadeOut")},m($,H){S($,e,H),p(e,t),p(t,r),p(t,i),p(t,s),p(s,o),p(o,c),p(o,a),N.m(o,null),p(o,l),p(o,u),p(u,h),p(u,f),p(u,g),p(u,_),p(u,y),p(u,T)},p($,H){q!==(q=L($))&&(N.d(1),N=q($),N&&(N.c(),N.m(o,l))),H&1&&d!==(d=$[0][0]+"")&&De(f,d),H&1&&I!==(I=$[0][1]+"")&&De(T,I)},i:B,o:B,d($){$&&k(e),N.d()}}}function If(n){let e;return{c(){e=v("p"),e.textContent="Keep practicing!",m(e,"class","h5 text-dark text-opacity-75 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function Tf(n){let e;return{c(){e=v("p"),e.textContent="Good job!",m(e,"class","h5 text-dark text-opacity-75 mt-2")},m(t,r){S(t,e,r)},d(t){t&&k(e)}}}function bf(n){let e,t,r,i;const s=[yf,mf],o=[];function c(a,l){return a[2]===!0?0:1}return e=c(n),t=o[e]=s[e](n),{c(){t.c(),r=pt()},m(a,l){o[e].m(a,l),S(a,r,l),i=!0},p(a,[l]){let u=e;e=c(a),e===u?o[e].p(a,l):(Nt(),ee(o[u],1,1,()=>{o[u]=null}),Ot(),t=o[e],t?t.p(a,l):(t=o[e]=s[e](a),t.c()),J(t,1),t.m(r.parentNode,r))},i(a){i||(J(t),i=!0)},o(a){ee(t),i=!1},d(a){o[e].d(a),a&&k(r)}}}function kf(n,e,t){let r=wr();const i=new pi(Io);let s="",o=!1,{previousQuizResults:c=[0,0]}=e,a=!1;Eo(()=>{o==!0&&setTimeout(()=>{t(3,a=!0),r("quizStarted")},500)});const l=g=>{g.detail=="finished"&&r("finished"),t(2,o=!1),t(3,a=!1)},u=g=>{r("quizResults",g.detail)},h=()=>{i.play(),t(1,s="Classic"),t(2,o=!0)},d=()=>{t(1,s="Time Countdown"),t(2,o=!0)},f=()=>{t(1,s="Rush Attack"),t(2,o=!0)};return n.$$set=g=>{"previousQuizResults"in g&&t(0,c=g.previousQuizResults)},[c,s,o,a,r,i,l,u,h,d,f]}class Sf extends Lt{constructor(e){super(),Pt(this,e,kf,bf,Dt,{previousQuizResults:0})}}function Cf(n){let e,t,r,i,s,o,c,a,l,u;return{c(){e=v("footer"),t=v("p"),t.innerHTML=`Powered by Open Trivia Database<br/>
    Designed by Bootstrap 5<br/>
    Animated by Animate.css<br/>
    Data handled by localStorage + Firebase`,r=A(),i=v("div"),s=v("div"),s.innerHTML='<p class="p-3 small">Made by realSkyQuest -</p>',o=A(),c=v("div"),a=v("button"),a.textContent="Github",m(t,"class","p-3 small"),m(s,"class","col-sm-2"),m(a,"type","button"),m(a,"class","btn text-light"),ie(a,"background-color","#4da6ff"),m(c,"class","col-sm-2"),m(i,"class","row justify-content-center align-items-center"),m(e,"class","mt-5 p-4 text-bg-dark text-center")},m(h,d){S(h,e,d),p(e,t),p(e,r),p(e,i),p(i,s),p(i,o),p(i,c),p(c,a),l||(u=le(a,"click",n[0]),l=!0)},p:B,i:B,o:B,d(h){h&&k(e),l=!1,u()}}}function Af(n){return[()=>{window.location.href="https://github.com/realskyquest/quiz-application"}]}class Rf extends Lt{constructor(e){super(),Pt(this,e,Af,Cf,Dt,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Df=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,a=i+2<n.length,l=a?n[i+2]:0,u=s>>2,h=(s&3)<<4|c>>4;let d=(c&15)<<2|l>>6,f=l&63;a||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_l(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Df(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||h==null)throw new Nf;const d=s<<2|c>>4;if(r.push(d),l!==64){const f=c<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Of=function(n){const e=_l(n);return wl.encodeByteArray(e,!0)},yi=function(n){return Of(n).replace(/\./g,"")},El=function(n){try{return wl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=()=>Pf().__FIREBASE_DEFAULTS__,Mf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&El(n[1]);return e&&JSON.parse(e)},To=()=>{try{return Lf()||Mf()||xf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Il=n=>{var e,t;return(t=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Uf=n=>{const e=Il(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tl=()=>{var n;return(n=To())===null||n===void 0?void 0:n.config},bl=n=>{var e;return(e=To())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[yi(JSON.stringify(t)),yi(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Bf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="FirebaseError";class gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wf(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new gt(i,c,r)}}function Wf(n,e){return n.replace(Gf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gf=/\{\$([^}]+)}/g;function Qf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ka(s)&&Ka(o)){if(!vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ka(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function jn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yf(n,e){const t=new Jf(n,e);return t.subscribe.bind(t)}class Jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ff;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ep(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ep(n){return n===Vt?void 0:n}function tp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const rp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},ip=z.INFO,sp={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},op=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=sp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=ip,this._logHandler=op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const ap=(n,e)=>e.some(t=>n instanceof t);let Wa,Ga;function cp(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lp(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,zs=new WeakMap,Sl=new WeakMap,ws=new WeakMap,ko=new WeakMap;function up(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Tt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kl.set(t,n)}).catch(()=>{}),ko.set(e,n),e}function hp(n){if(zs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zs.set(n,e)}let Hs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dp(n){Hs=n(Hs)}function fp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Es(this),e,...t);return Sl.set(r,e.sort?e.sort():[e]),Tt(r)}:lp().includes(n)?function(...e){return n.apply(Es(this),e),Tt(kl.get(this))}:function(...e){return Tt(n.apply(Es(this),e))}}function pp(n){return typeof n=="function"?fp(n):(n instanceof IDBTransaction&&hp(n),ap(n,cp())?new Proxy(n,Hs):n)}function Tt(n){if(n instanceof IDBRequest)return up(n);if(ws.has(n))return ws.get(n);const e=pp(n);return e!==n&&(ws.set(n,e),ko.set(e,n)),e}const Es=n=>ko.get(n);function gp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Tt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tt(o.result),a.oldVersion,a.newVersion,Tt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const mp=["get","getKey","getAll","getAllKeys","count"],yp=["put","add","delete","clear"],Is=new Map;function Qa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=yp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mp.includes(t)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&a.done]))[0]};return Is.set(e,s),s}dp(n=>({...n,get:(e,t,r)=>Qa(e,t)||n.get(e,t,r),has:(e,t)=>!!Qa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_p(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _p(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ks="@firebase/app",Ya="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new bo("@firebase/app"),wp="@firebase/app-compat",Ep="@firebase/analytics-compat",Ip="@firebase/analytics",Tp="@firebase/app-check-compat",bp="@firebase/app-check",kp="@firebase/auth",Sp="@firebase/auth-compat",Cp="@firebase/database",Ap="@firebase/database-compat",Rp="@firebase/functions",Dp="@firebase/functions-compat",Np="@firebase/installations",Op="@firebase/installations-compat",Pp="@firebase/messaging",Lp="@firebase/messaging-compat",Mp="@firebase/performance",xp="@firebase/performance-compat",Up="@firebase/remote-config",Fp="@firebase/remote-config-compat",Vp="@firebase/storage",$p="@firebase/storage-compat",Bp="@firebase/firestore",jp="@firebase/firestore-compat",qp="firebase",zp="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="[DEFAULT]",Hp={[Ks]:"fire-core",[wp]:"fire-core-compat",[Ip]:"fire-analytics",[Ep]:"fire-analytics-compat",[bp]:"fire-app-check",[Tp]:"fire-app-check-compat",[kp]:"fire-auth",[Sp]:"fire-auth-compat",[Cp]:"fire-rtdb",[Ap]:"fire-rtdb-compat",[Rp]:"fire-fn",[Dp]:"fire-fn-compat",[Np]:"fire-iid",[Op]:"fire-iid-compat",[Pp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Mp]:"fire-perf",[xp]:"fire-perf-compat",[Up]:"fire-rc",[Fp]:"fire-rc-compat",[Vp]:"fire-gcs",[$p]:"fire-gcs-compat",[Bp]:"fire-fst",[jp]:"fire-fst-compat","fire-js":"fire-js",[qp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Map,Gs=new Map;function Kp(n,e){try{n.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vn(n){const e=n.name;if(Gs.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;Gs.set(e,n);for(const t of _i.values())Kp(t,n);return!0}function So(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Er("app","Firebase",Wp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=zp;function Cl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ws,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(t||(t=Tl()),!t)throw bt.create("no-options");const s=_i.get(i);if(s){if(vi(t,s.options)&&vi(r,s.config))return s;throw bt.create("duplicate-app",{appName:i})}const o=new np(i);for(const a of Gs.values())o.addComponent(a);const c=new Gp(t,r,o);return _i.set(i,c),c}function Al(n=Ws){const e=_i.get(n);if(!e&&n===Ws&&Tl())return Cl();if(!e)throw bt.create("no-app",{appName:n});return e}function kt(n,e,t){var r;let i=(r=Hp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(c.join(" "));return}vn(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="firebase-heartbeat-database",Yp=1,tr="firebase-heartbeat-store";let Ts=null;function Rl(){return Ts||(Ts=gp(Qp,Yp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(tr)}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),Ts}async function Jp(n){try{return await(await Rl()).transaction(tr).objectStore(tr).get(Dl(n))}catch(e){if(e instanceof gt)Wt.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function Ja(n,e){try{const r=(await Rl()).transaction(tr,"readwrite");await r.objectStore(tr).put(e,Dl(n)),await r.done}catch(t){if(t instanceof gt)Wt.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(r.message)}}}function Dl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=1024,Zp=30*24*60*60*1e3;class eg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ng(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xa(),{heartbeatsToSend:t,unsentEntries:r}=tg(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xa(){return new Date().toISOString().substring(0,10)}function tg(n,e=Xp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Za(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Za(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Za(n){return yi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){vn(new Kt("platform-logger",e=>new vp(e),"PRIVATE")),vn(new Kt("heartbeat",e=>new eg(e),"PRIVATE")),kt(Ks,Ya,n),kt(Ks,Ya,"esm2017"),kt("fire-js","")}rg("");var ig="firebase",sg="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(ig,sg,"app");function Co(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Nl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const og=Nl,Ol=new Er("auth","Firebase",Nl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new bo("@firebase/auth");function ag(n,...e){wi.logLevel<=z.WARN&&wi.warn(`Auth (${Rn}): ${n}`,...e)}function oi(n,...e){wi.logLevel<=z.ERROR&&wi.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw Ao(n,...e)}function Xe(n,...e){return Ao(n,...e)}function cg(n,e,t){const r=Object.assign(Object.assign({},og()),{[e]:t});return new Er("auth","Firebase",r).create(e,{appName:n.name})}function Ao(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ol.create(n,...e)}function O(n,e,...t){if(!n)throw Ao(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function lt(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Pl(){return ec()==="http:"||ec()==="https:"}function ec(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pl()||Bf()||"connection"in navigator)?navigator.onLine:!0}function ug(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=$f()||jf()}get(){return lg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Tr(3e4,6e4);function Mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,r,i={}){return Ml(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Ir(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),Ll.fetch()(xl(n,n.config.apiHost,t,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Ml(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hg),e);try{const i=new fg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Qr(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw Qr(n,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cg(n,u,l);Be(n,u)}}catch(i){if(i instanceof gt)throw i;Be(n,"network-request-failed",{message:String(i)})}}async function br(n,e,t,r,i={}){const s=await xt(n,e,t,r,i);return"mfaPendingCredential"in s&&Be(n,"multi-factor-auth-required",{_serverResponse:s}),s}function xl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ro(n.config,i):`${n.config.apiScheme}://${i}`}class fg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),dg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Xe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function gg(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mg(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),i=Do(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gn(bs(i.auth_time)),issuedAtTime:Gn(bs(i.iat)),expirationTime:Gn(bs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bs(n){return Number(n)*1e3}function Do(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=El(t);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yg(n){const e=Do(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gt&&vg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){var e;const t=n.auth,r=await n.getIdToken(),i=await nr(n,gg(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ig(s.providerUserInfo):[],c=Eg(n.providerData,o),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function wg(n){const e=Ce(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ig(n){return n.map(e=>{var{providerId:t}=e,r=Co(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(n,e){const t=await Ml(n,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=xl(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ll.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new rr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _g(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ul(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await nr(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mg(this,e)}reload(){return wg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,a,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(c=t.tenantId)!==null&&c!==void 0?c:void 0,y=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,I=(l=t.createdAt)!==null&&l!==void 0?l:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:q,isAnonymous:N,providerData:$,stsTokenManager:H}=t;O(L&&H,e,"internal-error");const Ne=rr.fromJSON(this.name,H);O(typeof L=="string",e,"internal-error"),yt(h,e.name),yt(d,e.name),O(typeof q=="boolean",e,"internal-error"),O(typeof N=="boolean",e,"internal-error"),yt(f,e.name),yt(g,e.name),yt(_,e.name),yt(y,e.name),yt(I,e.name),yt(T,e.name);const ge=new zt({uid:L,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:N,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:Ne,createdAt:I,lastLoginAt:T});return $&&Array.isArray($)&&(ge.providerData=$.map(Pe=>Object.assign({},Pe))),y&&(ge._redirectEventId=y),ge}static async _fromIdTokenResponse(e,t,r=!1){const i=new rr;i.updateFromServerResponse(t);const s=new zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Map;function at(n){lt(n instanceof Function,"Expected a class definition");let e=tc.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,tc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fl.type="NONE";const nc=Fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e,t){return`firebase:${n}:${e}:${t}`}class dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=ai("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dn(at(nc),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||at(nc);const o=ai(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const u=await l._get(o);if(u){const h=zt._fromJSON(e,u);l!==s&&(c=h),s=l;break}}catch{}const a=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new dn(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new dn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ql(e))return"Blackberry";if(zl(e))return"Webos";if(No(e))return"Safari";if((e.includes("chrome/")||$l(e))&&!e.includes("edge/"))return"Chrome";if(jl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vl(n=Se()){return/firefox\//i.test(n)}function No(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $l(n=Se()){return/crios\//i.test(n)}function Bl(n=Se()){return/iemobile/i.test(n)}function jl(n=Se()){return/android/i.test(n)}function ql(n=Se()){return/blackberry/i.test(n)}function zl(n=Se()){return/webos/i.test(n)}function Bi(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bg(n=Se()){var e;return Bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kg(){return qf()&&document.documentMode===10}function Hl(n=Se()){return Bi(n)||jl(n)||zl(n)||ql(n)||/windows phone/i.test(n)||Bl(n)}function Sg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,e=[]){let t;switch(n){case"Browser":t=rc(Se());break;case"Worker":t=`${rc(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${r}`}async function Wl(n,e){return xt(n,"GET","/v2/recaptchaConfig",Mt(n,e))}function ic(n){return n!==void 0&&n.enterprise!==void 0}class Gl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ql(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cg().appendChild(r)})}function Ag(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Rg="https://www.google.com/recaptcha/enterprise.js?render=",Dg="recaptcha-enterprise",Ng="NO_RECAPTCHA";class Yl{constructor(e){this.type=Dg,this.auth=Zt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Wl(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gl(a);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;ic(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ng)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&ic(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ql(Rg+c).then(()=>{i(c,s,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function _n(n,e,t,r=!1){const i=new Yl(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sc(this),this.idTokenSubscription=new sc(this),this.beforeStateQueue=new Og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ug()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ce(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await Wl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Gl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Yl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ag(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zt(n){return Ce(n)}class sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yf(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n,e){const t=So(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(vi(s,e??{}))return i;Be(i,"already-initialized")}return t.initialize({options:e})}function Mg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xg(n,e,t){const r=Zt(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Jl(e),{host:o,port:c}=Ug(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fg()}function Jl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ug(n){const e=Jl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:oc(o)}}}function oc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Vg(n,e){return xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e){return br(n,"POST","/v1/accounts:signInWithPassword",Mt(n,e))}async function Xl(n,e){return xt(n,"POST","/v1/accounts:sendOobCode",Mt(n,e))}async function $g(n,e){return Xl(n,e)}async function Ss(n,e){return Xl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e){return br(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}async function jg(n,e){return br(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Oo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await _n(e,r,"signInWithPassword");return ks(e,i)}else return ks(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await _n(e,r,"signInWithPassword");return ks(e,s)}else return Promise.reject(i)});case"emailLink":return Bg(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Vg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jg(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n,e){return br(n,"POST","/v1/accounts:signInWithIdp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="http://localhost";class Gt extends Oo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Co(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:qg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hg(n){const e=Bn(jn(n)).link,t=e?Bn(jn(e)).deep_link_id:null,r=Bn(jn(n)).deep_link_id;return(r?Bn(jn(r)).link:null)||r||t||e||n}class Po{constructor(e){var t,r,i,s,o,c;const a=Bn(jn(e)),l=(t=a.apiKey)!==null&&t!==void 0?t:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=zg((i=a.mode)!==null&&i!==void 0?i:null);O(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Hg(e);try{return new Po(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,t){return ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Po.parseLink(t);return O(r,"argument-error"),ir._fromEmailAndCode(e,r.code,r.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends kr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends kr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends kr{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n,e){return br(n,"POST","/v1/accounts:signUp",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=ac(r);return new Qt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ac(r);return new Qt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ac(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends gt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ti(e,t,r,i)}}function eu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(n,s,e,r):s})}async function Kg(n,e,t=!1){const r=await nr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await nr(n,eu(r,i,e,n),t);O(s.idToken,r,"internal-error");const o=Do(s.idToken);O(o,r,"internal-error");const{sub:c}=o;return O(n.uid===c,r,"user-mismatch"),Qt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(n,e,t=!1){const r="signIn",i=await eu(n,r,e),s=await Qt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Gg(n,e){return tu(Zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e,t){var r;O(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e,t){var r;const i=Zt(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await _n(i,s,"getOobCode",!0);t&&ci(i,o,t),await Ss(i,o)}else t&&ci(i,s,t),await Ss(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const c=await _n(i,s,"getOobCode",!0);t&&ci(i,c,t),await Ss(i,c)}else return Promise.reject(o)})}async function Yg(n,e,t){var r;const i=Zt(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await _n(i,s,"signUpPassword");o=Cs(i,l)}else o=Cs(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _n(i,s,"signUpPassword");return Cs(i,u)}else return Promise.reject(l)});const c=await o.catch(l=>Promise.reject(l)),a=await Qt._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(a.user),a}function Jg(n,e,t){return Gg(Ce(n),Dn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e){return xt(n,"POST","/v1/accounts:createAuthUri",Mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(n,e){const t=Pl()?Ei():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Xg(Ce(n),r);return i||[]}async function em(n,e){const t=Ce(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&ci(t.auth,i,e);const{email:s}=await $g(t.auth,i);s!==n.email&&await n.reload()}function tm(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function nm(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function rm(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}function im(n){return Ce(n).signOut()}async function sm(n){return Ce(n).delete()}const bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){const n=Se();return No(n)||Bi(n)}const am=1e3,cm=10;class ru extends nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=om()&&Sg(),this.fallbackToPolling=Hl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ru.type="LOCAL";const lm=ru;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iu.type="SESSION";const su=iu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ji(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(t.origin,s)),a=await um(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const l=Lo("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(d.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function dm(n){Ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function fm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gm(){return ou()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="firebaseLocalStorageDb",mm=1,ki="firebaseLocalStorage",cu="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qi(n,e){return n.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function ym(){const n=indexedDB.deleteDatabase(au);return new Sr(n).toPromise()}function Qs(){const n=indexedDB.open(au,mm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ki,{keyPath:cu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ki)?e(r):(r.close(),await ym(),e(await Qs()))})})}async function cc(n,e,t){const r=qi(n,!0).put({[cu]:e,value:t});return new Sr(r).toPromise()}async function vm(n,e){const t=qi(n,!1).get(e),r=await new Sr(t).toPromise();return r===void 0?null:r.value}function lc(n,e){const t=qi(n,!0).delete(e);return new Sr(t).toPromise()}const _m=800,wm=3;class lu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>wm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ou()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(gm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fm(),!this.activeServiceWorker)return;this.sender=new hm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await cc(e,bi,"1"),await lc(e,bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>vm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qi(i,!1).getAll();return new Sr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lu.type="LOCAL";const Em=lu;new Tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e){return e?at(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Oo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tm(n){return tu(n.auth,new Mo(n),n.bypassAuthState)}function bm(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Wg(t,new Mo(n),n.bypassAuthState)}async function km(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Kg(t,new Mo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tm;case"linkViaPopup":case"linkViaRedirect":return km;case"reauthViaPopup":case"reauthViaRedirect":return bm;default:Be(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Tr(2e3,1e4);class ln extends uu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sm.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="pendingRedirect",li=new Map;class Am extends uu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=li.get(this.auth._key());if(!e){try{const r=await Rm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}li.set(this.auth._key(),e)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rm(n,e){const t=Om(e),r=Nm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Dm(n,e){li.set(n._key(),e)}function Nm(n){return at(n._redirectPersistence)}function Om(n){return ai(Cm,n.config.apiKey,n.name)}async function Pm(n,e,t=!1){const r=Zt(n),i=Im(r,e),o=await new Am(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=10*60*1e3;class Mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(uc(e))}saveEventToCache(e){this.cachedEventUids.add(uc(e)),this.lastProcessedEventTime=Date.now()}}function uc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vm=/^https?/;async function $m(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Um(n);for(const t of e)try{if(Bm(t))return}catch{}Be(n,"unauthorized-domain")}function Bm(n){const e=Ei(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Vm.test(t))return!1;if(Fm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Tr(3e4,6e4);function hc(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qm(n){return new Promise((e,t)=>{var r,i,s;function o(){hc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hc(),t(Xe(n,"network-request-failed"))},timeout:jm.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)o();else{const c=Ag("iframefcb");return Ze()[c]=()=>{gapi.load?o():t(Xe(n,"network-request-failed"))},Ql(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw ui=null,e})}let ui=null;function zm(n){return ui=ui||qm(n),ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Tr(5e3,15e3),Km="__/auth/iframe",Wm="emulator/auth/iframe",Gm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ym(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ro(e,Wm):`https://${n.config.authDomain}/${Km}`,r={apiKey:e.apiKey,appName:n.name,v:Rn},i=Qm.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ir(r).slice(1)}`}async function Jm(n){const e=await zm(n),t=Ze().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Ym(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),c=Ze().setTimeout(()=>{s(o)},Hm.get());function a(){Ze().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zm=500,ey=600,ty="_blank",ny="http://localhost";class dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ry(n,e,t,r=Zm,i=ey){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Xm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Se().toLowerCase();t&&(c=$l(l)?ty:t),Vl(l)&&(e=e||ny,a.scrollbars="yes");const u=Object.entries(a).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(bg(l)&&c!=="_self")return iy(e||"",c),new dc(null);const h=window.open(e||"",c,u);O(h,n,"popup-blocked");try{h.focus()}catch{}return new dc(h)}function iy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="__/auth/handler",oy="emulator/auth/handler",ay=encodeURIComponent("fac");async function fc(n,e,t,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Rn,eventId:i};if(e instanceof Zl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof kr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await n._getAppCheckToken(),l=a?`#${ay}=${encodeURIComponent(a)}`:"";return`${cy(n)}?${Ir(c).slice(1)}${l}`}function cy({config:n}){return n.emulator?Ro(n,oy):`https://${n.authDomain}/${sy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="webStorageSupport";class ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=su,this._completeRedirectFn=Pm,this._overrideRedirectResult=Dm}async _openPopup(e,t,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fc(e,t,r,Ei(),i);return ry(e,o,Lo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await fc(e,t,r,Ei(),i);return dm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Jm(e),r=new Mm(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(As,{type:As},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[As];o!==void 0&&t(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$m(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hl()||No()||Bi()}}const uy=ly;var pc="@firebase/auth",gc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fy(n){vn(new Kt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kl(n)},l=new Pg(r,i,s,a);return Mg(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vn(new Kt("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(r=>new hy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(pc,gc,dy(n)),kt(pc,gc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=5*60,gy=bl("authIdTokenMaxAge")||py;let mc=null;const my=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gy)return;const i=t==null?void 0:t.token;mc!==i&&(mc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yy(n=Al()){const e=So(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Lg(n,{popupRedirectResolver:uy,persistence:[Em,lm,su]}),r=bl("authTokenSyncURL");if(r){const s=my(r);nm(t,s,()=>s(t.currentUser)),tm(t,o=>s(o))}const i=Il("auth");return i&&xg(t,`http://${i}`),t}fy("Browser");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,xo=xo||{},M=vy||self;function zi(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Cr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function _y(n){return Object.prototype.hasOwnProperty.call(n,Rs)&&n[Rs]||(n[Rs]=++wy)}var Rs="closure_uid_"+(1e9*Math.random()>>>0),wy=0;function Ey(n,e,t){return n.call.apply(n.bind,arguments)}function Iy(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Te(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=Ey:Te=Iy,Te.apply(null,arguments)}function Yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function pe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[i].apply(r,o)}}function Ut(){this.s=this.s,this.o=this.o}var Ty=0;Ut.prototype.s=!1;Ut.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ty!=0)&&_y(this)};Ut.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const du=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Uo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function yc(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(zi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function be(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var by=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{M.addEventListener("test",()=>{},e),M.removeEventListener("test",()=>{},e)}catch{}return n}();function sr(n){return/^[\s\xa0]*$/.test(n)}function Hi(){var n=M.navigator;return n&&(n=n.userAgent)?n:""}function We(n){return Hi().indexOf(n)!=-1}function Fo(n){return Fo[" "](n),n}Fo[" "]=function(){};function ky(n,e){var t=yv;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Sy=We("Opera"),wn=We("Trident")||We("MSIE"),fu=We("Edge"),Ys=fu||wn,pu=We("Gecko")&&!(Hi().toLowerCase().indexOf("webkit")!=-1&&!We("Edge"))&&!(We("Trident")||We("MSIE"))&&!We("Edge"),Cy=Hi().toLowerCase().indexOf("webkit")!=-1&&!We("Edge");function gu(){var n=M.document;return n?n.documentMode:void 0}var Js;e:{var Ds="",Ns=function(){var n=Hi();if(pu)return/rv:([^\);]+)(\)|;)/.exec(n);if(fu)return/Edge\/([\d\.]+)/.exec(n);if(wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Cy)return/WebKit\/(\S+)/.exec(n);if(Sy)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ns&&(Ds=Ns?Ns[1]:""),wn){var Os=gu();if(Os!=null&&Os>parseFloat(Ds)){Js=String(Os);break e}}Js=Ds}var Xs;if(M.document&&wn){var vc=gu();Xs=vc||parseInt(Js,10)||void 0}else Xs=void 0;var Ay=Xs;function or(n,e){if(be.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(pu){e:{try{Fo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ry[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&or.$.h.call(this)}}pe(or,be);var Ry={2:"touch",3:"pen",4:"mouse"};or.prototype.h=function(){or.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ar="closure_listenable_"+(1e6*Math.random()|0),Dy=0;function Ny(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Dy,this.fa=this.ia=!1}function Ki(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Vo(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Oy(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function mu(n){const e={};for(const t in n)e[t]=n[t];return e}const _c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yu(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<_c.length;s++)t=_c[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Wi(n){this.src=n,this.g={},this.h=0}Wi.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=eo(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Ny(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Zs(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=du(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ki(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function eo(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var $o="closure_lm_"+(1e6*Math.random()|0),Ps={};function vu(n,e,t,r,i){if(r&&r.once)return wu(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vu(n,e[s],t,r,i);return null}return t=qo(t),n&&n[Ar]?n.O(e,t,Cr(r)?!!r.capture:!!r,i):_u(n,e,t,!1,r,i)}function _u(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Cr(i)?!!i.capture:!!i,c=jo(n);if(c||(n[$o]=c=new Wi(n)),t=c.add(e,t,r,o,s),t.proxy)return t;if(r=Py(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)by||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Iu(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Py(){function n(t){return e.call(n.src,n.listener,t)}const e=Ly;return n}function wu(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wu(n,e[s],t,r,i);return null}return t=qo(t),n&&n[Ar]?n.P(e,t,Cr(r)?!!r.capture:!!r,i):_u(n,e,t,!0,r,i)}function Eu(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Eu(n,e[s],t,r,i);else r=Cr(r)?!!r.capture:!!r,t=qo(t),n&&n[Ar]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=eo(s,t,r,i),-1<t&&(Ki(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=jo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=eo(e,t,r,i)),(t=-1<n?e[n]:null)&&Bo(t))}function Bo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ar])Zs(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Iu(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=jo(e))?(Zs(t,n),t.h==0&&(t.src=null,e[$o]=null)):Ki(n)}}}function Iu(n){return n in Ps?Ps[n]:Ps[n]="on"+n}function Ly(n,e){if(n.fa)n=!0;else{e=new or(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Bo(n),n=t.call(r,e)}return n}function jo(n){return n=n[$o],n instanceof Wi?n:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function qo(n){return typeof n=="function"?n:(n[Ls]||(n[Ls]=function(e){return n.handleEvent(e)}),n[Ls])}function fe(){Ut.call(this),this.i=new Wi(this),this.S=this,this.J=null}pe(fe,Ut);fe.prototype[Ar]=!0;fe.prototype.removeEventListener=function(n,e,t,r){Eu(this,n,e,t,r)};function ve(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new be(e,n);else if(e instanceof be)e.target=e.target||n;else{var i=e;e=new be(r,n),yu(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Jr(o,r,!0,e)&&i}if(o=e.g=n,i=Jr(o,r,!0,e)&&i,i=Jr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Jr(o,r,!1,e)&&i}fe.prototype.N=function(){if(fe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Ki(t[r]);delete n.g[e],n.h--}}this.J=null};fe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};fe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Jr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var c=o.listener,a=o.la||o.src;o.ia&&Zs(n.i,o),i=c.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var zo=M.JSON.stringify;class My{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xy(){var n=Ho;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Uy{constructor(){this.h=this.g=null}add(e,t){const r=Tu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Tu=new My(()=>new Fy,n=>n.reset());class Fy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Vy(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function $y(n){M.setTimeout(()=>{throw n},0)}let ar,cr=!1,Ho=new Uy,bu=()=>{const n=M.Promise.resolve(void 0);ar=()=>{n.then(By)}};var By=()=>{for(var n;n=xy();){try{n.h.call(n.g)}catch(t){$y(t)}var e=Tu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}cr=!1};function Gi(n,e){fe.call(this),this.h=n||1,this.g=e||M,this.j=Te(this.qb,this),this.l=Date.now()}pe(Gi,fe);b=Gi.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ve(this,"tick"),this.ga&&(Ko(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ko(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}b.N=function(){Gi.$.N.call(this),Ko(this),delete this.g};function Wo(n,e,t){if(typeof n=="function")t&&(n=Te(n,t));else if(n&&typeof n.handleEvent=="function")n=Te(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(n,e||0)}function ku(n){n.g=Wo(()=>{n.g=null,n.i&&(n.i=!1,ku(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class jy extends Ut{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ku(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(n){Ut.call(this),this.h=n,this.g={}}pe(lr,Ut);var wc=[];function Su(n,e,t,r){Array.isArray(t)||(t&&(wc[0]=t.toString()),t=wc);for(var i=0;i<t.length;i++){var s=vu(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Cu(n){Vo(n.g,function(e,t){this.g.hasOwnProperty(t)&&Bo(e)},n),n.g={}}lr.prototype.N=function(){lr.$.N.call(this),Cu(this)};lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qi(){this.g=!0}Qi.prototype.Ea=function(){this.g=!1};function qy(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",c=s.split("&"),a=0;a<c.length;a++){var l=c[a].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function zy(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function un(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ky(n,t)+(r?" "+r:"")})}function Hy(n,e){n.info(function(){return"TIMEOUT: "+e})}Qi.prototype.info=function(){};function Ky(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zo(t)}catch{return e}}var en={},Ec=null;function Yi(){return Ec=Ec||new fe}en.Ta="serverreachability";function Au(n){be.call(this,en.Ta,n)}pe(Au,be);function ur(n){const e=Yi();ve(e,new Au(e))}en.STAT_EVENT="statevent";function Ru(n,e){be.call(this,en.STAT_EVENT,n),this.stat=e}pe(Ru,be);function Re(n){const e=Yi();ve(e,new Ru(e,n))}en.Ua="timingevent";function Du(n,e){be.call(this,en.Ua,n),this.size=e}pe(Du,be);function Rr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){n()},e)}var Ji={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Go(){}Go.prototype.h=null;function Ic(n){return n.h||(n.h=n.i())}function Ou(){}var Dr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qo(){be.call(this,"d")}pe(Qo,be);function Yo(){be.call(this,"c")}pe(Yo,be);var to;function Xi(){}pe(Xi,Go);Xi.prototype.g=function(){return new XMLHttpRequest};Xi.prototype.i=function(){return{}};to=new Xi;function Nr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new lr(this),this.P=Wy,n=Ys?125:void 0,this.V=new Gi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Wy=45e3,no={},Si={};b=Nr.prototype;b.setTimeout=function(n){this.P=n};function ro(n,e,t){n.L=1,n.v=es(ut(e)),n.s=t,n.S=!0,Lu(n,null)}function Lu(n,e){n.G=Date.now(),Or(n),n.A=ut(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),ju(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Pu,n.g=lh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new jy(Te(n.Pa,n,n.g),n.O)),Su(n.U,n.g,"readystatechange",n.nb),e=n.I?mu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ur(),qy(n.j,n.u,n.A,n.m,n.W,n.s)}b.nb=function(n){n=n.target;const e=this.M;e&&Ye(n)==3?e.l():this.Pa(n)};b.Pa=function(n){try{if(n==this.g)e:{const u=Ye(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ys||this.g&&(this.h.h||this.g.ja()||Sc(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ur(3):ur(2)),Zi(this);var t=this.g.da();this.ca=t;t:if(Mu(this)){var r=Sc(this.g);n="";var i=r.length,s=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Qn(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,zy(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,a=this.g;if((c=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sr(c)){var l=c;break t}}l=null}if(t=l)un(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,io(this,t);else{this.i=!1,this.o=3,Re(12),Bt(this),Qn(this);break e}}this.S?(xu(this,u,o),Ys&&this.i&&u==3&&(Su(this.U,this.V,"tick",this.mb),this.V.start())):(un(this.j,this.m,o,null),io(this,o)),u==4&&Bt(this),this.i&&!this.J&&(u==4?sh(this.l,this):(this.i=!1,Or(this)))}else pv(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Re(12)):(this.o=0,Re(13)),Bt(this),Qn(this)}}}catch{}finally{}};function Mu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function xu(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=Gy(n,t),i==Si){e==4&&(n.o=4,Re(14),r=!1),un(n.j,n.m,null,"[Incomplete Response]");break}else if(i==no){n.o=4,Re(15),un(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else un(n.j,n.m,i,null),io(n,i);Mu(n)&&i!=Si&&i!=no&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Re(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),na(e),e.M=!0,Re(11))):(un(n.j,n.m,t,"[Invalid Chunked Response]"),Bt(n),Qn(n))}b.mb=function(){if(this.g){var n=Ye(this.g),e=this.g.ja();this.C<e.length&&(Zi(this),xu(this,n,e),this.i&&n!=4&&Or(this))}};function Gy(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Si:(t=Number(e.substring(t,r)),isNaN(t)?no:(r+=1,r+t>e.length?Si:(e=e.slice(r,r+t),n.C=r+t,e)))}b.cancel=function(){this.J=!0,Bt(this)};function Or(n){n.Y=Date.now()+n.P,Uu(n,n.P)}function Uu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Rr(Te(n.lb,n),e)}function Zi(n){n.B&&(M.clearTimeout(n.B),n.B=null)}b.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Hy(this.j,this.A),this.L!=2&&(ur(),Re(17)),Bt(this),this.o=2,Qn(this)):Uu(this,this.Y-n)};function Qn(n){n.l.H==0||n.J||sh(n.l,n)}function Bt(n){Zi(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Ko(n.V),Cu(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function io(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||so(t.i,n))){if(!n.K&&so(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Ri(t),rs(t);else break e;ta(t),Re(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Rr(Te(t.ib,t),6e3));if(1>=Hu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else jt(t,11)}else if((n.K||t.g==n)&&Ri(t),!sr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jo(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Z(r.I,r.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=ch(r,r.J?r.pa:null,r.Y),o.K){Ku(r.i,o);var c=o,a=r.L;a&&c.setTimeout(a),c.B&&(Zi(c),Or(c)),r.g=o}else rh(r);0<t.j.length&&is(t)}else l[0]!="stop"&&l[0]!="close"||jt(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?jt(t,7):ea(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}ur(4)}catch{}}function Qy(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(zi(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Yy(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(zi(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Fu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(zi(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Yy(n),r=Qy(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ht(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ht){this.h=n.h,Ci(this,n.j),this.s=n.s,this.g=n.g,Ai(this,n.m),this.l=n.l;var e=n.i,t=new hr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Tc(this,t),this.o=n.o}else n&&(e=String(n).match(Vu))?(this.h=!1,Ci(this,e[1]||"",!0),this.s=qn(e[2]||""),this.g=qn(e[3]||"",!0),Ai(this,e[4]),this.l=qn(e[5]||"",!0),Tc(this,e[6]||"",!0),this.o=qn(e[7]||"")):(this.h=!1,this.i=new hr(null,this.h))}Ht.prototype.toString=function(){var n=[],e=this.j;e&&n.push(zn(e,bc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(zn(e,bc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(zn(t,t.charAt(0)=="/"?ev:Zy,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",zn(t,nv)),n.join("")};function ut(n){return new Ht(n)}function Ci(n,e,t){n.j=t?qn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ai(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Tc(n,e,t){e instanceof hr?(n.i=e,rv(n.i,n.h)):(t||(e=zn(e,tv)),n.i=new hr(e,n.h))}function Z(n,e,t){n.i.set(e,t)}function es(n){return Z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function qn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function zn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Xy),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Xy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var bc=/[#\/\?@]/g,Zy=/[#\?:]/g,ev=/[#\?]/g,tv=/[#\?@]/g,nv=/#/g;function hr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ft(n){n.g||(n.g=new Map,n.h=0,n.i&&Jy(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}b=hr.prototype;b.add=function(n,e){Ft(this),this.i=null,n=Nn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function $u(n,e){Ft(n),e=Nn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Bu(n,e){return Ft(n),e=Nn(n,e),n.g.has(e)}b.forEach=function(n,e){Ft(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};b.ta=function(){Ft(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};b.Z=function(n){Ft(this);let e=[];if(typeof n=="string")Bu(this,n)&&(e=e.concat(this.g.get(Nn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};b.set=function(n,e){return Ft(this),this.i=null,n=Nn(this,n),Bu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};b.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function ju(n,e,t){$u(n,e),0<t.length&&(n.i=null,n.g.set(Nn(n,e),Uo(t)),n.h+=t.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Nn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function rv(n,e){e&&!n.j&&(Ft(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&($u(this,r),ju(this,i,t))},n)),n.j=e}var iv=class{constructor(n,e){this.g=n,this.map=e}};function qu(n){this.l=n||sv,M.PerformanceNavigationTiming?(n=M.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sv=10;function zu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Hu(n){return n.h?1:n.g?n.g.size:0}function so(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Jo(n,e){n.g?n.g.add(e):n.h=e}function Ku(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}qu.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Wu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Uo(n.i)}var ov=class{stringify(n){return M.JSON.stringify(n,void 0)}parse(n){return M.JSON.parse(n,void 0)}};function av(){this.g=new ov}function cv(n,e,t){const r=t||"";try{Fu(n,function(i,s){let o=i;Cr(i)&&(o=zo(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function lv(n,e){const t=new Qi;if(M.Image){const r=new Image;r.onload=Yr(Xr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Yr(Xr,t,r,"TestLoadImage: error",!1,e),r.onabort=Yr(Xr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yr(Xr,t,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Xr(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pr(n){this.l=n.fc||null,this.j=n.ob||!1}pe(Pr,Go);Pr.prototype.g=function(){return new ts(this.l,this.j)};Pr.prototype.i=function(n){return function(){return n}}({});function ts(n,e){fe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Xo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pe(ts,fe);var Xo=0;b=ts.prototype;b.open=function(n,e){if(this.readyState!=Xo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,dr(this)};b.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=Xo};b.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Gu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}b.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Lr(this):dr(this),this.readyState==3&&Gu(this)}};b.Za=function(n){this.g&&(this.response=this.responseText=n,Lr(this))};b.Ya=function(n){this.g&&(this.response=n,Lr(this))};b.ka=function(){this.g&&Lr(this)};function Lr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,dr(n)}b.setRequestHeader=function(n,e){this.v.append(n,e)};b.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function dr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var uv=M.JSON.parse;function se(n){fe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qu,this.L=this.M=!1}pe(se,fe);var Qu="",hv=/^https?$/i,dv=["POST","PUT"];b=se.prototype;b.Oa=function(n){this.M=n};b.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():to.g(),this.C=this.u?Ic(this.u):Ic(to),this.g.onreadystatechange=Te(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){kc(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&n instanceof M.FormData,!(0<=du(dv,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xu(this),0<this.B&&((this.L=fv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.ua,this)):this.A=Wo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){kc(this,s)}};function fv(n){return wn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}b.ua=function(){typeof xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))};function kc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Yu(n),ns(n)}function Yu(n){n.F||(n.F=!0,ve(n,"complete"),ve(n,"error"))}b.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ve(this,"complete"),ve(this,"abort"),ns(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),se.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?Ju(this):this.kb())};b.kb=function(){Ju(this)};function Ju(n){if(n.h&&typeof xo<"u"&&(!n.C[1]||Ye(n)!=4||n.da()!=2)){if(n.v&&Ye(n)==4)Wo(n.La,0,n);else if(ve(n,"readystatechange"),Ye(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Vu)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!hv.test(i?i.toLowerCase():"")}t=r}if(t)ve(n,"complete"),ve(n,"success");else{n.m=6;try{var s=2<Ye(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Yu(n)}}finally{ns(n)}}}}function ns(n,e){if(n.g){Xu(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ve(n,"ready");try{t.onreadystatechange=r}catch{}}}function Xu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(M.clearTimeout(n.A),n.A=null)}b.isActive=function(){return!!this.g};function Ye(n){return n.g?n.g.readyState:0}b.da=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),uv(e)}};function Sc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Qu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function pv(n){const e={};n=(n.g&&2<=Ye(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(sr(n[r]))continue;var t=Vy(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}Oy(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zu(n){let e="";return Vo(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Zo(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Zu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Z(n,e,t))}function Vn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function eh(n){this.Ga=0,this.j=[],this.l=new Qi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vn("baseRetryDelayMs",5e3,n),this.hb=Vn("retryDelaySeedMs",1e4,n),this.eb=Vn("forwardChannelMaxRetries",2,n),this.xa=Vn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new qu(n&&n.concurrentRequestLimit),this.Ja=new av,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=eh.prototype;b.ra=8;b.H=1;function ea(n){if(th(n),n.H==3){var e=n.W++,t=ut(n.I);if(Z(t,"SID",n.K),Z(t,"RID",e),Z(t,"TYPE","terminate"),Mr(n,t),e=new Nr(n,n.l,e),e.L=2,e.v=es(ut(t)),t=!1,M.navigator&&M.navigator.sendBeacon)try{t=M.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&M.Image&&(new Image().src=e.v,t=!0),t||(e.g=lh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Or(e)}ah(n)}function rs(n){n.g&&(na(n),n.g.cancel(),n.g=null)}function th(n){rs(n),n.u&&(M.clearTimeout(n.u),n.u=null),Ri(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&M.clearTimeout(n.m),n.m=null)}function is(n){if(!zu(n.i)&&!n.m){n.m=!0;var e=n.Na;ar||bu(),cr||(ar(),cr=!0),Ho.add(e,n),n.C=0}}function gv(n,e){return Hu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Rr(Te(n.Na,n,e),oh(n,n.C)),n.C++,!0)}b.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Nr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=mu(s),yu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=nh(this,i,e),t=ut(this.I),Z(t,"RID",n),Z(t,"CVER",22),this.F&&Z(t,"X-HTTP-Session-Id",this.F),Mr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Zu(s)))+"&"+e:this.o&&Zo(t,this.o,s)),Jo(this.i,i),this.bb&&Z(t,"TYPE","init"),this.P?(Z(t,"$req",e),Z(t,"SID","null"),i.aa=!0,ro(i,t,null)):ro(i,t,e),this.H=2}}else this.H==3&&(n?Cc(this,n):this.j.length==0||zu(this.i)||Cc(this))};function Cc(n,e){var t;e?t=e.m:t=n.W++;const r=ut(n.I);Z(r,"SID",n.K),Z(r,"RID",t),Z(r,"AID",n.V),Mr(n,r),n.o&&n.s&&Zo(r,n.o,n.s),t=new Nr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=nh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Jo(n.i,t),ro(t,r,e)}function Mr(n,e){n.na&&Vo(n.na,function(t,r){Z(e,r,t)}),n.h&&Fu({},function(t,r){Z(e,r,t)})}function nh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Te(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let c=!0;for(let a=0;a<t;a++){let l=i[a].g;const u=i[a].map;if(l-=s,0>l)s=Math.max(0,i[a].g-100),c=!1;else try{cv(u,o,"req"+l+"_")}catch{r&&r(u)}}if(c){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function rh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;ar||bu(),cr||(ar(),cr=!0),Ho.add(e,n),n.A=0}}function ta(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Rr(Te(n.Ma,n),oh(n,n.A)),n.A++,!0)}b.Ma=function(){if(this.u=null,ih(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Rr(Te(this.jb,this),n)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Re(10),rs(this),ih(this))};function na(n){n.B!=null&&(M.clearTimeout(n.B),n.B=null)}function ih(n){n.g=new Nr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ut(n.wa);Z(e,"RID","rpc"),Z(e,"SID",n.K),Z(e,"AID",n.V),Z(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Z(e,"TO",n.qa),Z(e,"TYPE","xmlhttp"),Mr(n,e),n.o&&n.s&&Zo(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=es(ut(e)),t.s=null,t.S=!0,Lu(t,n)}b.ib=function(){this.v!=null&&(this.v=null,rs(this),ta(this),Re(19))};function Ri(n){n.v!=null&&(M.clearTimeout(n.v),n.v=null)}function sh(n,e){var t=null;if(n.g==e){Ri(n),na(n),n.g=null;var r=2}else if(so(n.i,e))t=e.F,Ku(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Yi(),ve(r,new Du(r,t)),is(n)}else rh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&gv(n,e)||r==2&&ta(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:jt(n,5);break;case 4:jt(n,10);break;case 3:jt(n,6);break;default:jt(n,2)}}}function oh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function jt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Te(n.pb,n);t||(t=new Ht("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Ci(t,"https"),es(t)),lv(t.toString(),r)}else Re(2);n.H=0,n.h&&n.h.za(e),ah(n),th(n)}b.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Re(2)):(this.l.info("Failed to ping google.com"),Re(1))};function ah(n){if(n.H=0,n.ma=[],n.h){const e=Wu(n.i);(e.length!=0||n.j.length!=0)&&(yc(n.ma,e),yc(n.ma,n.j),n.i.i.length=0,Uo(n.j),n.j.length=0),n.h.ya()}}function ch(n,e,t){var r=t instanceof Ht?ut(t):new Ht(t);if(r.g!="")e&&(r.g=e+"."+r.g),Ai(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ht(null);r&&Ci(s,r),e&&(s.g=e),i&&Ai(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Z(r,t,e),Z(r,"VER",n.ra),Mr(n,r),r}function lh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new se(new Pr({ob:!0})):new se(n.va),e.Oa(n.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function uh(){}b=uh.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Di(){if(wn&&!(10<=Number(Ay)))throw Error("Environmental error: no available transport.")}Di.prototype.g=function(n,e){return new xe(n,e)};function xe(n,e){fe.call(this),this.g=new eh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!sr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new On(this)}pe(xe,fe);xe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Re(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=ch(n,null,n.Y),is(n)};xe.prototype.close=function(){ea(this.g)};xe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=zo(n),n=t);e.j.push(new iv(e.fb++,n)),e.H==3&&is(e)};xe.prototype.N=function(){this.g.h=null,delete this.j,ea(this.g),delete this.g,xe.$.N.call(this)};function hh(n){Qo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}pe(hh,Qo);function dh(){Yo.call(this),this.status=1}pe(dh,Yo);function On(n){this.g=n}pe(On,uh);On.prototype.Ba=function(){ve(this.g,"a")};On.prototype.Aa=function(n){ve(this.g,new hh(n))};On.prototype.za=function(n){ve(this.g,new dh)};On.prototype.ya=function(){ve(this.g,"b")};function mv(){this.blockSize=-1}function je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pe(je,mv);je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ms(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}je.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ms(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ms(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ms(this,r),i=0;break}}this.h=i,this.i+=e};je.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Y(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var yv={};function ra(n){return-128<=n&&128>n?ky(n,function(e){return new Y([e|0],0>e?-1:0)}):new Y([n|0],0>n?-1:0)}function Je(n){if(isNaN(n)||!isFinite(n))return pn;if(0>n)return ye(Je(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=oo;return new Y(e,0)}function fh(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ye(fh(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Je(Math.pow(e,8)),r=pn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Je(Math.pow(e,s)),r=r.R(s).add(Je(o))):(r=r.R(t),r=r.add(Je(o)))}return r}var oo=4294967296,pn=ra(0),ao=ra(1),Ac=ra(16777216);b=Y.prototype;b.ea=function(){if(Ue(this))return-ye(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:oo+r)*e,e*=oo}return n};b.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ct(this))return"0";if(Ue(this))return"-"+ye(this).toString(n);for(var e=Je(Math.pow(n,6)),t=this,r="";;){var i=Oi(t,e).g;t=Ni(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,ct(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ct(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ue(n){return n.h==-1}b.X=function(n){return n=Ni(this,n),Ue(n)?-1:ct(n)?0:1};function ye(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Y(t,~n.h).add(ao)}b.abs=function(){return Ue(this)?ye(this):this};b.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Y(t,t[t.length-1]&-2147483648?-1:0)};function Ni(n,e){return n.add(ye(e))}b.R=function(n){if(ct(this)||ct(n))return pn;if(Ue(this))return Ue(n)?ye(this).R(ye(n)):ye(ye(this).R(n));if(Ue(n))return ye(this.R(ye(n)));if(0>this.X(Ac)&&0>n.X(Ac))return Je(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,c=n.D(i)>>>16,a=n.D(i)&65535;t[2*r+2*i]+=o*a,Zr(t,2*r+2*i),t[2*r+2*i+1]+=s*a,Zr(t,2*r+2*i+1),t[2*r+2*i+1]+=o*c,Zr(t,2*r+2*i+1),t[2*r+2*i+2]+=s*c,Zr(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Y(t,0)};function Zr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function $n(n,e){this.g=n,this.h=e}function Oi(n,e){if(ct(e))throw Error("division by zero");if(ct(n))return new $n(pn,pn);if(Ue(n))return e=Oi(ye(n),e),new $n(ye(e.g),ye(e.h));if(Ue(e))return e=Oi(n,ye(e)),new $n(ye(e.g),e.h);if(30<n.g.length){if(Ue(n)||Ue(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ao,r=e;0>=r.X(n);)t=Rc(t),r=Rc(r);var i=sn(t,1),s=sn(r,1);for(r=sn(r,2),t=sn(t,2);!ct(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=sn(r,1),t=sn(t,1)}return e=Ni(n,i.R(e)),new $n(i,e)}for(i=pn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Je(t),o=s.R(e);Ue(o)||0<o.X(n);)t-=r,s=Je(t),o=s.R(e);ct(s)&&(s=ao),i=i.add(s),n=Ni(n,o)}return new $n(i,n)}b.gb=function(n){return Oi(this,n).h};b.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Y(t,this.h&n.h)};b.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Y(t,this.h|n.h)};b.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Y(t,this.h^n.h)};function Rc(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Y(t,n.h)}function sn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Y(i,n.h)}Di.prototype.createWebChannel=Di.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;Ji.NO_ERROR=0;Ji.TIMEOUT=8;Ji.HTTP_ERROR=6;Nu.COMPLETE="complete";Ou.EventType=Dr;Dr.OPEN="a";Dr.CLOSE="b";Dr.ERROR="c";Dr.MESSAGE="d";fe.prototype.listen=fe.prototype.O;se.prototype.listenOnce=se.prototype.P;se.prototype.getLastError=se.prototype.Sa;se.prototype.getLastErrorCode=se.prototype.Ia;se.prototype.getStatus=se.prototype.da;se.prototype.getResponseJson=se.prototype.Wa;se.prototype.getResponseText=se.prototype.ja;se.prototype.send=se.prototype.ha;se.prototype.setWithCredentials=se.prototype.Oa;je.prototype.digest=je.prototype.l;je.prototype.reset=je.prototype.reset;je.prototype.update=je.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=Je;Y.fromString=fh;var vv=function(){return new Di},_v=function(){return Yi()},xs=Ji,wv=Nu,Ev=en,Dc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Iv=Pr,ei=Ou,Tv=se,bv=je,gn=Y;const Nc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new bo("@firebase/firestore");function Oc(){return Yt.logLevel}function C(n,...e){if(Yt.logLevel<=z.DEBUG){const t=e.map(ia);Yt.debug(`Firestore (${Pn}): ${n}`,...t)}}function ht(n,...e){if(Yt.logLevel<=z.ERROR){const t=e.map(ia);Yt.error(`Firestore (${Pn}): ${n}`,...t)}}function En(n,...e){if(Yt.logLevel<=z.WARN){const t=e.map(ia);Yt.warn(`Firestore (${Pn}): ${n}`,...t)}}function ia(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+n;throw ht(e),new Error(e)}function te(n,e){n||x()}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class Sv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Cv{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=a=>this.i!==r?(r=this.i,t(a)):Promise.resolve();let s=new St;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new St,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},c=a=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>c(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?c(a):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new St)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new ph(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new we(e)}}class Av{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rv{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Av(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nv{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.T=t.token,new Dv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ov(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function In(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new he(0,0))}static max(){return new U(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends fr{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends fr{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return Pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new P(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new P(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new P(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(re.fromString(e))}static fromName(e){return new D(re.fromString(e).popFirst(5))}static empty(){return new D(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new re(e.slice()))}}function Lv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Ct(i,D.empty(),e)}function Mv(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct(U.min(),D.empty(),-1)}static max(){return new Ct(U.max(),D.empty(),-1)}}function xv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=D.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n){if(n.code!==w.FAILED_PRECONDITION||n.message!==Uv)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},a=>r(a))}),o=!0,s===i&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(i=>i?E.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new E((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next(u=>{o[l]=u,++c,c===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new E((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sa.ct=-1;function ss(n){return n==null}function Pi(n){return n===0&&1/n==-1/0}function Vv(n){return typeof n=="number"&&Number.isInteger(n)&&!Pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ti(this.root,e,this.comparator,!0)}}class ti{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??me.RED,this.left=i??me.EMPTY,this.right=s??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new me(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(n,e,t,r,i){return this}insert(n,e,t){return new me(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lc(this.data.getIterator())}getIteratorFrom(e){return new Lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new $e([])}unionWith(e){let t=new ke(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yh("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(te(!!n),typeof n=="string"){let e=0;const t=$v.exec(n);if(te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function aa(n){const e=n.mapValue.fields.__previous_value__;return oa(e)?aa(e):e}function pr(n){const e=At(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,r,i,s,o,c,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=a,this.useFetchStreams=l}}class gr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oa(n)?4:jv(n)?9007199254740991:10:x()}function nt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=At(r.timestampValue),o=At(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Jt(r.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ce(r.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ce(r.integerValue)===ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ce(r.doubleValue),o=ce(i.doubleValue);return s===o?Pi(s)===Pi(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return In(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Pc(s)!==Pc(o))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(o[c]===void 0||!nt(s[c],o[c])))return!1;return!0}(n,e);default:return x()}}function mr(n,e){return(n.values||[]).find(t=>nt(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ce(i.integerValue||i.doubleValue),c=ce(s.integerValue||s.doubleValue);return o<c?-1:o>c?1:o===c?0:isNaN(o)?isNaN(c)?0:-1:1}(n,e);case 3:return Mc(n.timestampValue,e.timestampValue);case 4:return Mc(pr(n),pr(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Jt(i),c=Jt(s);return o.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),c=s.split("/");for(let a=0;a<o.length&&a<c.length;a++){const l=G(o[a],c[a]);if(l!==0)return l}return G(o.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(ce(i.latitude),ce(s.latitude));return o!==0?o:G(ce(i.longitude),ce(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],c=s.values||[];for(let a=0;a<o.length&&a<c.length;++a){const l=Tn(o[a],c[a]);if(l)return l}return G(o.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ni.mapValue&&s===ni.mapValue)return 0;if(i===ni.mapValue)return 1;if(s===ni.mapValue)return-1;const o=i.fields||{},c=Object.keys(o),a=s.fields||{},l=Object.keys(a);c.sort(),l.sort();for(let u=0;u<c.length&&u<l.length;++u){const h=G(c[u],l[u]);if(h!==0)return h;const d=Tn(o[c[u]],a[l[u]]);if(d!==0)return d}return G(c.length,l.length)}(n.mapValue,e.mapValue);default:throw x()}}function Mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=At(n),r=At(e),i=G(t.seconds,r.seconds);return i!==0?i:G(t.nanos,r.nanos)}function bn(n){return co(n)}function co(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=At(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Jt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,D.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=co(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const c of i)o?o=!1:s+=",",s+=`${c}:${co(r.fields[c])}`;return s+"}"}(n.mapValue):x();var e,t}function lo(n){return!!n&&"integerValue"in n}function ca(n){return!!n&&"arrayValue"in n}function xc(n){return!!n&&"nullValue"in n}function Uc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hi(n){return!!n&&"mapValue"in n}function Yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Yn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const a=this.getFieldsMap(t);this.applyChanges(a,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Yn(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];hi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ln(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Fe(Yn(this.value))}}function vh(n){const e=[];return Ln(n.fields,(t,r)=>{const i=new Ie([t]);if(hi(r)){const s=vh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,U.min(),U.min(),U.min(),Fe.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,U.min(),U.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,U.min(),U.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),t.key):r=Tn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t="asc"){this.field=e,this.dir=t}}function qv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{}class ue extends _h{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Hv(e,t,r):t==="array-contains"?new Gv(e,r):t==="in"?new Qv(e,r):t==="not-in"?new Yv(e,r):t==="array-contains-any"?new Jv(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Kv(e,r):new Wv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rt extends _h{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new rt(e,t)}matches(e){return wh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function wh(n){return n.op==="and"}function Eh(n){return zv(n)&&wh(n)}function zv(n){for(const e of n.filters)if(e instanceof rt)return!1;return!0}function uo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(Eh(n))return n.filters.map(e=>uo(e)).join(",");{const e=n.filters.map(t=>uo(t)).join(",");return`${n.op}(${e})`}}function Ih(n,e){return n instanceof ue?function(t,r){return r instanceof ue&&t.op===r.op&&t.field.isEqual(r.field)&&nt(t.value,r.value)}(n,e):n instanceof rt?function(t,r){return r instanceof rt&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&Ih(s,r.filters[o]),!0):!1}(n,e):void x()}function Th(n){return n instanceof ue?function(e){return`${e.field.canonicalString()} ${e.op} ${bn(e.value)}`}(n):n instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Th).join(" ,")+"}"}(n):"Filter"}class Hv extends ue{constructor(e,t,r){super(e,t,r),this.key=D.fromName(r.referenceValue)}matches(e){const t=D.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kv extends ue{constructor(e,t){super(e,"in",t),this.keys=bh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wv extends ue{constructor(e,t){super(e,"not-in",t),this.keys=bh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>D.fromName(r.referenceValue))}class Gv extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ca(t)&&mr(t.arrayValue,this.value)}}class Qv extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mr(this.value.arrayValue,t)}}class Yv extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mr(this.value.arrayValue,t)}}class Jv extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ca(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.dt=null}}function $c(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Xv(n,e,t,r,i,s,o)}function la(n){const e=F(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>uo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>bn(r)).join(",")),e.dt=t}return e.dt}function ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ih(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vc(n.startAt,e.startAt)&&Vc(n.endAt,e.endAt)}function ho(n){return D.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Zv(n,e,t,r,i,s,o,c){return new os(n,e,t,r,i,s,o,c)}function ha(n){return new os(n)}function Bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function e_(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function t_(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function n_(n){return n.collectionGroup!==null}function mn(n){const e=F(n);if(e.wt===null){e.wt=[];const t=t_(e),r=e_(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Jn(t)),e.wt.push(new Jn(Ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Jn(Ie.keyField(),s))}}}return e.wt}function dt(n){const e=F(n);if(!e._t)if(e.limitType==="F")e._t=$c(e.path,e.collectionGroup,mn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of mn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Jn(s.field,o))}const r=e.endAt?new Li(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Li(e.startAt.position,e.startAt.inclusive):null;e._t=$c(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function fo(n,e,t){return new os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function as(n,e){return ua(dt(n),dt(e))&&n.limitType===e.limitType}function kh(n){return`${la(dt(n))}|lt:${n.limitType}`}function po(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Th(r)).join(", ")}]`),ss(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>bn(r)).join(",")),`Target(${t})`}(dt(n))}; limitType=${n.limitType})`}function cs(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):D.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of mn(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const c=Fc(i,s,o);return i.inclusive?c<=0:c<0}(t.startAt,mn(t),r)||t.endAt&&!function(i,s,o){const c=Fc(i,s,o);return i.inclusive?c>=0:c>0}(t.endAt,mn(t),r))}(n,e)}function r_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sh(n){return(e,t)=>{let r=!1;for(const i of mn(n)){const s=i_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i_(n,e,t){const r=n.field.isKeyField()?D.comparator(e.key,t.key):function(i,s,o){const c=s.data.field(i),a=o.data.field(i);return c!==null&&a!==null?Tn(c,a):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new ne(D.comparator);function ft(){return s_}const Ch=new ne(D.comparator);function Hn(...n){let e=Ch;for(const t of n)e=e.insert(t.key,t);return e}function Ah(n){let e=Ch;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function qt(){return Xn()}function Rh(){return Xn()}function Xn(){return new Mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const o_=new ne(D.comparator),a_=new ke(D.comparator);function V(...n){let e=a_;for(const t of n)e=e.add(t);return e}const c_=new ke(G);function l_(){return c_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function Nh(n){return{integerValue:""+n}}function u_(n,e){return Vv(e)?Nh(e):Dh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this._=void 0}}function h_(n,e,t){return n instanceof Mi?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&oa(i)&&(i=aa(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof yr?Ph(n,e):n instanceof vr?Lh(n,e):function(r,i){const s=Oh(r,i),o=jc(s)+jc(r.gt);return lo(s)&&lo(r.gt)?Nh(o):Dh(r.serializer,o)}(n,e)}function d_(n,e,t){return n instanceof yr?Ph(n,e):n instanceof vr?Lh(n,e):t}function Oh(n,e){return n instanceof xi?lo(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Mi extends ls{}class yr extends ls{constructor(e){super(),this.elements=e}}function Ph(n,e){const t=Mh(e);for(const r of n.elements)t.some(i=>nt(i,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends ls{constructor(e){super(),this.elements=e}}function Lh(n,e){let t=Mh(e);for(const r of n.elements)t=t.filter(i=>!nt(i,r));return{arrayValue:{values:t}}}class xi extends ls{constructor(e,t){super(),this.serializer=e,this.gt=t}}function jc(n){return ce(n.integerValue||n.doubleValue)}function Mh(n){return ca(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function f_(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof yr&&r instanceof yr||t instanceof vr&&r instanceof vr?In(t.elements,r.elements,nt):t instanceof xi&&r instanceof xi?nt(t.gt,r.gt):t instanceof Mi&&r instanceof Mi}(n.transform,e.transform)}class p_{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class us{}function xh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new da(n.key,et.none()):new Fr(n.key,n.data,et.none());{const t=n.data,r=Fe.empty();let i=new ke(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tn(n.key,r,new $e(i.toArray()),et.none())}}function g_(n,e,t){n instanceof Fr?function(r,i,s){const o=r.value.clone(),c=zc(r.fieldTransforms,i,s.transformResults);o.setAll(c),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof tn?function(r,i,s){if(!di(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zc(r.fieldTransforms,i,s.transformResults),c=i.data;c.setAll(Uh(r)),c.setAll(o),i.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Zn(n,e,t,r){return n instanceof Fr?function(i,s,o,c){if(!di(i.precondition,s))return o;const a=i.value.clone(),l=Hc(i.fieldTransforms,c,s);return a.setAll(l),s.convertToFoundDocument(s.version,a).setHasLocalMutations(),null}(n,e,t,r):n instanceof tn?function(i,s,o,c){if(!di(i.precondition,s))return o;const a=Hc(i.fieldTransforms,c,s),l=s.data;return l.setAll(Uh(i)),l.setAll(a),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(i,s,o){return di(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function m_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Oh(r.transform,i||null);s!=null&&(t===null&&(t=Fe.empty()),t.set(r.field,s))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&In(t,r,(i,s)=>f_(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fr extends us{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tn extends us{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zc(n,e,t){const r=new Map;te(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,d_(o,c,t[i]))}return r}function Hc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,h_(s,o,e))}return r}class da extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y_ extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&g_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Rh();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const a=xh(o,c);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(t,r)=>qc(t,r))&&In(this.baseMutations,e.baseMutations,(t,r)=>qc(t,r))}}class fa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length);let i=o_;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fa(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,j;function E_(n){switch(n){default:return x();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Fh(n){if(n===void 0)return ht("GRPC error has no .code"),w.UNKNOWN;switch(n){case ae.OK:return w.OK;case ae.CANCELLED:return w.CANCELLED;case ae.UNKNOWN:return w.UNKNOWN;case ae.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ae.INTERNAL:return w.INTERNAL;case ae.UNAVAILABLE:return w.UNAVAILABLE;case ae.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ae.NOT_FOUND:return w.NOT_FOUND;case ae.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ae.ABORTED:return w.ABORTED;case ae.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ae.DATA_LOSS:return w.DATA_LOSS;default:return x()}}(j=ae||(ae={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ri}static getOrCreateInstance(){return ri===null&&(ri=new pa),ri}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let ri=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new gn([4294967295,4294967295],0);function Kc(n){const e=I_().encode(n),t=new bv;return t.update(e),new Uint8Array(t.digest())}function Wc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gn([t,r],0),new gn([i,s],0)]}class ga{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kn(`Invalid padding: ${t}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=gn.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(gn.fromNumber(r)));return i.compare(T_)===1&&(i=new gn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Kc(e),[r,i]=Wc(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ga(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.It===0)return;const t=Kc(e),[r,i]=Wc(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hs(U.min(),i,new ne(G),ft(),V())}}class Vr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vr(r,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class Vh{constructor(e,t){this.targetId=e,this.Vt=t}}class $h{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Gc{constructor(){this.St=0,this.Dt=Yc(),this.Ct=Ae.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=V(),t=V(),r=V();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new Vr(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=Yc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class b_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ft(),this.zt=Qc(),this.Wt=new ne(G)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(ho(o))if(i===0){const c=new D(o.path);this.Yt(r,c,Ee.newNoDocument(c,U.min()))}else te(i===1);else{const c=this.ie(r);if(c!==i){const a=this.re(e,c);if(a!==0){this.ee(r);const l=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(t=pa.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,_,y,I;const T={localCacheCount:u,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(T.bloomFilter={applied:l===0,hashCount:(d=L==null?void 0:L.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(g=(f=L==null?void 0:L.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&_!==void 0?_:0,padding:(I=(y=L==null?void 0:L.bits)===null||y===void 0?void 0:y.padding)!==null&&I!==void 0?I:0}),T}(a,c,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=r;let a,l;try{a=Jt(s).toUint8Array()}catch(u){if(u instanceof yh)return En("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new ga(a,o,c)}catch(u){return En(u instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(c)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const c=this.se(o);if(c){if(s.current&&ho(c.target)){const a=new D(c.target.path);this.jt.get(a)!==null||this.ae(o,a)||this.Yt(o,a,Ee.newNoDocument(a,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=V();this.zt.forEach((s,o)=>{let c=!0;o.forEachWhile(a=>{const l=this.se(a);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new hs(e,t,this.Wt,this.jt,r);return this.jt=ft(),this.zt=Qc(),this.Wt=new ne(G),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Gc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new ke(G),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Gc),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Qc(){return new ne(D.comparator)}function Yc(){return new ne(D.comparator)}const k_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),S_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),C_=(()=>({and:"AND",or:"OR"}))();class A_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function go(n,e){return n.useProto3Json||ss(e)?e:{value:e}}function Ui(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R_(n,e){return Ui(n,e.toTimestamp())}function tt(n){return te(!!n),U.fromTimestamp(function(e){const t=At(e);return new he(t.seconds,t.nanos)}(n))}function ma(n,e){return function(t){return new re(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function jh(n){const e=re.fromString(n);return te(Kh(e)),e}function mo(n,e){return ma(n.databaseId,e.path)}function Us(n,e){const t=jh(e);if(t.get(1)!==n.databaseId.projectId)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new D(qh(t))}function yo(n,e){return ma(n.databaseId,e)}function D_(n){const e=jh(n);return e.length===4?re.emptyPath():qh(e)}function vo(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qh(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jc(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function N_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(a){return a==="NO_CHANGE"?0:a==="ADD"?1:a==="REMOVE"?2:a==="CURRENT"?3:a==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(a,l){return a.useProto3Json?(te(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(a){const l=a.code===void 0?w.UNKNOWN:Fh(a.code);return new P(l,a.message||"")}(o);t=new $h(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Us(n,r.document.name),s=tt(r.document.updateTime),o=r.document.createTime?tt(r.document.createTime):U.min(),c=new Fe({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o,c),l=r.targetIds||[],u=r.removedTargetIds||[];t=new fi(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Us(n,r.document),s=r.readTime?tt(r.readTime):U.min(),o=Ee.newNoDocument(i,s),c=r.removedTargetIds||[];t=new fi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Us(n,r.document),s=r.removedTargetIds||[];t=new fi([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new w_(i,s),c=r.targetId;t=new Vh(c,o)}}return t}function O_(n,e){let t;if(e instanceof Fr)t={update:Jc(n,e.key,e.value)};else if(e instanceof da)t={delete:mo(n,e.key)};else if(e instanceof tn)t={update:Jc(n,e.key,e.data),updateMask:B_(e.fieldMask)};else{if(!(e instanceof y_))return x();t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Mi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yr)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vr)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xi)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:R_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(n,e.precondition)),t}function P_(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?tt(r.updateTime):tt(i);return s.isEqual(U.min())&&(s=tt(i)),new p_(s,r.transformResults||[])}(t,e))):[]}function L_(n,e){return{documents:[yo(n,e.path)]}}function M_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=yo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=yo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length!==0)return Hh(rt.create(a,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(l=>function(u){return{field:an(u.field),direction:F_(u.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=go(n,e.limit);var c;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(t.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),t}function x_(n){let e=D_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(u){const h=zh(u);return h instanceof rt&&Eh(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Jn(cn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let c=null;t.limit&&(c=function(u){let h;return h=typeof u=="object"?u.value:u,ss(h)?null:h}(t.limit));let a=null;t.startAt&&(a=function(u){const h=!!u.before,d=u.values||[];return new Li(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Li(d,h)}(t.endAt)),Zv(e,i,o,s,c,"F",a,l)}function U_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=cn(e.unaryFilter.field);return ue.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=cn(e.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cn(e.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=cn(e.unaryFilter.field);return ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return ue.create(cn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return rt.create(e.compositeFilter.filters.map(t=>zh(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function F_(n){return k_[n]}function V_(n){return S_[n]}function $_(n){return C_[n]}function an(n){return{fieldPath:n.canonicalString()}}function cn(n){return Ie.fromServerFormat(n.fieldPath)}function Hh(n){return n instanceof ue?function(e){if(e.op==="=="){if(Uc(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NAN"}};if(xc(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uc(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NAN"}};if(xc(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(e.field),op:V_(e.op),value:e.value}}}(n):n instanceof rt?function(e){const t=e.getFilters().map(r=>Hh(r));return t.length===1?t[0]:{compositeFilter:{op:$_(e.op),filters:t}}}(n):x()}function B_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,r,i,s=U.min(),o=U.min(),c=Ae.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=a}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.fe=e}}function q_(n){const e=x_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.rn=new H_}addToCollectionParentIndex(e,t){return this.rn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(Ct.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class H_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ke(re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new kn(0)}static Mn(){return new kn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zn(r.mutation,i,$e.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const i=qt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Hn();return s.forEach((c,a)=>{o=o.insert(c,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=ft();const o=Xn(),c=Xn();return t.forEach((a,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof tn)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Zn(u.mutation,l,u.mutation.getFieldMask(),he.now())):o.set(l.key,$e.empty())}),this.recalculateAndSaveOverlays(e,s).next(a=>(a.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return c.set(l,new W_(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Xn();let i=new ne((o,c)=>o-c),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(a=>{const l=t.get(a);if(l===null)return;let u=r.get(a)||$e.empty();u=c.applyToLocalView(l,u),r.set(a,u);const h=(i.get(c.batchId)||V()).add(a);i=i.insert(c.batchId,h)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const a=c.getNext(),l=a.key,u=a.value,h=Rh();u.forEach(d=>{if(!s.has(d)){const f=xh(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):n_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(qt());let c=-1,a=s;return o.next(l=>E.forEach(l,(u,h)=>(c<h.largestBatchId&&(c=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{a=a.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,a,l,V())).next(u=>({batchId:c,changes:Ah(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new D(t)).next(r=>{let i=Hn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Hn();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,c=>{const a=function(l,u){return new os(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((c,a)=>{const l=a.getKey();s.get(l)===null&&(s=s.insert(l,Ee.newInvalidDocument(l)))});let o=Hn();return s.forEach((c,a)=>{const l=i.get(c);l!==void 0&&Zn(l.mutation,a,$e.empty(),he.now()),cs(t,a)&&(o=o.insert(c,a))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return E.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:tt(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:q_(r.bundledQuery),readTime:tt(r.readTime)}}(t)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.overlays=new ne(D.comparator),this.ls=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=qt();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=qt(),s=t.length+1,o=new D(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const a=c.getNext().value,l=a.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=qt(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const c=qt(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((l,u)=>c.set(l,u)),!(c.size()>=i)););return E.resolve(c)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new __(t,r));let s=this.ls.get(t);s===void 0&&(s=V(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.fs=new ke(de.ds),this.ws=new ke(de._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new de(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new de(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new D(new re([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new D(new re([])),r=new de(t,e),i=new de(t,e+1);let s=V();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return D.comparator(e.key,t.key)||G(e.As,t.As)}static _s(e,t){return G(e.As,t.As)||D.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new ke(de.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new v_(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Rs=this.Rs.add(new de(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const c=this.Ps(o.As);s.push(c)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(G);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],c=>{r=r.add(c.As)})}),E.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new de(new D(s),0);let c=new ke(G);return this.Rs.forEachWhile(a=>{const l=a.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(c=c.add(a.As)),!0)},o),E.resolve(this.Vs(c))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new de(t,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.Ds=e,this.docs=new ne(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ft();const o=t.path,c=new D(o.child("")),a=this.docs.getIteratorFrom(c);for(;a.hasNext();){const{key:l,value:{document:u}}=a.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||xv(Mv(u),r)<=0||(i.has(u.key)||cs(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){x()}Cs(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Z_(this)}getSize(e){return E.resolve(this.size)}}class Z_ extends K_{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.persistence=e,this.xs=new Mn(t=>la(t),ua),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ya,this.targetCount=0,this.Ms=kn.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),E.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Fn(t),E.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.$s={},this.overlays={},this.Os=new sa(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new ew(this),this.indexManager=new z_,this.remoteDocumentCache=function(r){return new X_(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new j_(t),this.qs=new Q_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Y_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new J_(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){C("MemoryPersistence","Starting transaction:",e);const i=new nw(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return E.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class nw extends Fv{constructor(e){super(),this.currentSequenceNumber=e}}class va{constructor(e){this.persistence=e,this.Qs=new ya,this.js=null}static zs(e){return new va(e)}get Ws(){if(this.js)return this.js;throw x()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),E.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,r=>{const i=D.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return E.or([()=>E.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=V(),i=V();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Bc(t))return E.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=fo(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=V(...s);return this.Ui.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(a=>{const l=this.ji(t,c);return this.zi(t,l,o,a.readTime)?this.Ki(e,fo(t,null,"F")):this.Wi(e,l,t,a)}))})))}Gi(e,t,r,i){return Bc(t)||i.isEqual(U.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Oc()<=z.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(t)),this.Wi(e,o,t,Lv(i,-1)))})}ji(e,t){let r=new ke(Sh(e));return t.forEach((i,s)=>{cs(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Oc()<=z.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",po(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ct.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new ne(G),this.Yi=new Mn(s=>la(s),ua),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G_(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function sw(n,e,t,r){return new iw(n,e,t,r)}async function Wh(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let a=V();for(const l of i){o.push(l.batchId);for(const u of l.mutations)a=a.add(u.key)}for(const l of s){c.push(l.batchId);for(const u of l.mutations)a=a.add(u.key)}return t.localDocuments.getDocuments(r,a).next(l=>({er:l,removedBatchIds:o,addedBatchIds:c}))})})}function ow(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,c,a,l){const u=a.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(c,f)).next(g=>{const _=a.docVersions.get(f);te(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,a),g.isValidDocument()&&(g.setReadTime(a.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(c,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let c=V();for(let a=0;a<o.mutationResults.length;++a)o.mutationResults[a].transformResults.length>0&&(c=c.add(o.batch.mutations[a].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gh(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function aw(n,e){const t=F(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const c=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;c.push(t.Bs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(g,_,y){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&c.push(t.Bs.updateTargetData(s,f))});let a=ft(),l=V();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),c.push(cw(s,o,e.documentUpdates).next(u=>{a=u.nr,l=u.sr})),!r.isEqual(U.min())){const u=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(u)}return E.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,a,l)).next(()=>a)}).then(s=>(t.Ji=i,s))}function cw(n,e,t){let r=V(),i=V();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ft();return t.forEach((c,a)=>{const l=s.get(c);a.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(c)),a.isNoDocument()&&a.version.isEqual(U.min())?(e.removeEntry(c,a.readTime),o=o.insert(c,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),o=o.insert(c,a)):C("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",a.version)}),{nr:o,sr:i}})}function lw(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uw(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new It(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function _o(n,e,t){const r=F(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ur(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Xc(n,e,t){const r=F(n);let i=U.min(),s=V();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,a,l){const u=F(c),h=u.Yi.get(l);return h!==void 0?E.resolve(u.Ji.get(h)):u.Bs.getTargetData(a,l)}(r,o,dt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,c.targetId).next(a=>{s=a})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:U.min(),t?s:V())).next(c=>(hw(r,r_(e),c),{documents:c,ir:s})))}function hw(n,e,t){let r=n.Xi.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}class Zc{constructor(){this.activeTargetIds=l_()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dw{constructor(){this.Hr=new Zc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Zc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii=null;function Fs(){return ii===null?ii=268435456+Math.round(2147483648*Math.random()):ii++,"0x"+ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection";class mw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=Fs(),c=this.To(e,t);C("RestConnection",`Sending RPC '${e}' ${o}:`,c,r);const a={};return this.Eo(a,i,s),this.Ao(e,c,a,r).then(l=>(C("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw En("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",c,"request:",r),l})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Pn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=pw[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=Fs();return new Promise((o,c)=>{const a=new Tv;a.setWithCredentials(!0),a.listenOnce(wv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xs.NO_ERROR:const u=a.getResponseJson();C(_e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case xs.TIMEOUT:C(_e,`RPC '${e}' ${s} timed out`),c(new P(w.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const h=a.getStatus();if(C(_e,`RPC '${e}' ${s} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(y)>=0?y:w.UNKNOWN}(f.status);c(new P(g,f.message))}else c(new P(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else c(new P(w.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{C(_e,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);C(_e,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,r,15)})}Ro(e,t,r){const i=Fs(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),c=_v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new Iv({})),this.Eo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const u=s.join("");C(_e,`Creating RPC '${e}' stream ${i}: ${u}`,a);const h=o.createWebChannel(u,a);let d=!1,f=!1;const g=new gw({ro:y=>{f?C(_e,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(C(_e,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),C(_e,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),_=(y,I,T)=>{y.listen(I,L=>{try{T(L)}catch(q){setTimeout(()=>{throw q},0)}})};return _(h,ei.EventType.OPEN,()=>{f||C(_e,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ei.EventType.CLOSE,()=>{f||(f=!0,C(_e,`RPC '${e}' stream ${i} transport closed`),g.wo())}),_(h,ei.EventType.ERROR,y=>{f||(f=!0,En(_e,`RPC '${e}' stream ${i} transport errored:`,y),g.wo(new P(w.UNAVAILABLE,"The operation could not be completed")))}),_(h,ei.EventType.MESSAGE,y=>{var I;if(!f){const T=y.data[0];te(!!T);const L=T,q=L.error||((I=L[0])===null||I===void 0?void 0:I.error);if(q){C(_e,`RPC '${e}' stream ${i} received error:`,q);const N=q.status;let $=function(Ne){const ge=ae[Ne];if(ge!==void 0)return Fh(ge)}(N),H=q.message;$===void 0&&($=w.INTERNAL,H="Unknown error status: "+N+" with message "+q.message),f=!0,g.wo(new P($,H)),h.close()}else C(_e,`RPC '${e}' stream ${i} received:`,T),g._o(T)}}),_(c,Ev.STAT_EVENT,y=>{y.stat===Dc.PROXY?C(_e,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Dc.NOPROXY&&C(_e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){return new A_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,r,i,s,o,c,a){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Qh(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new P(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yw extends Yh{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=N_(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?tt(s.readTime):U.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=vo(this.serializer),t.addTarget=function(i,s){let o;const c=s.target;if(o=ho(c)?{documents:L_(i,c)}:{query:M_(i,c)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Bh(i,s.resumeToken);const a=go(i,s.expectedCount);a!==null&&(o.expectedCount=a)}else if(s.snapshotVersion.compareTo(U.min())>0){o.readTime=Ui(i,s.snapshotVersion.toTimestamp());const a=go(i,s.expectedCount);a!==null&&(o.expectedCount=a)}return o}(this.serializer,e);const r=U_(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=vo(this.serializer),t.removeTarget=e,this.Wo(t)}}class vw extends Yh{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=P_(e.writeResults,e.commitTime),r=tt(e.commitTime);return this.listener.cu(r,t)}return te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=vo(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>O_(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(w.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(w.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class ww{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ht(t),this.mu=!1):C("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{nn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const a=F(c);a.vu.add(4),await $r(a),a.bu.set("Unknown"),a.vu.delete(4),await fs(a)}(this))})}),this.bu=new ww(r,i)}}async function fs(n){if(nn(n))for(const e of n.Ru)await e(!0)}async function $r(n){for(const e of n.Ru)await e(!1)}function Jh(n,e){const t=F(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Ia(t)?Ea(t):xn(t).Ko()&&wa(t,e))}function Xh(n,e){const t=F(n),r=xn(t);t.Au.delete(e),r.Ko()&&Zh(t,e),t.Au.size===0&&(r.Ko()?r.jo():nn(t)&&t.bu.set("Unknown"))}function wa(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xn(n).su(e)}function Zh(n,e){n.Vu.qt(e),xn(n).iu(e)}function Ea(n){n.Vu=new b_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.bu.gu()}function Ia(n){return nn(n)&&!xn(n).Uo()&&n.Au.size>0}function nn(n){return F(n).vu.size===0}function ed(n){n.Vu=void 0}async function Iw(n){n.Au.forEach((e,t)=>{wa(n,e)})}async function Tw(n,e){ed(n),Ia(n)?(n.bu.Iu(e),Ea(n)):n.bu.set("Unknown")}async function bw(n,e,t){if(n.bu.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fi(n,r)}else if(e instanceof fi?n.Vu.Ht(e):e instanceof Vh?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(U.min()))try{const r=await Gh(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((c,a)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.Au.get(a);l&&i.Au.set(a,l.withResumeToken(c.resumeToken,s))}}),o.targetMismatches.forEach((c,a)=>{const l=i.Au.get(c);if(!l)return;i.Au.set(c,l.withResumeToken(Ae.EMPTY_BYTE_STRING,l.snapshotVersion)),Zh(i,c);const u=new It(l.target,c,a,l.sequenceNumber);wa(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Fi(n,r)}}async function Fi(n,e,t){if(!Ur(e))throw e;n.vu.add(1),await $r(n),n.bu.set("Offline"),t||(t=()=>Gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await fs(n)})}function td(n,e){return e().catch(t=>Fi(n,t,e))}async function ps(n){const e=F(n),t=Rt(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;kw(e);)try{const i=await lw(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,Sw(e,i)}catch(i){await Fi(e,i)}nd(e)&&rd(e)}function kw(n){return nn(n)&&n.Eu.length<10}function Sw(n,e){n.Eu.push(e);const t=Rt(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function nd(n){return nn(n)&&!Rt(n).Uo()&&n.Eu.length>0}function rd(n){Rt(n).start()}async function Cw(n){Rt(n).hu()}async function Aw(n){const e=Rt(n);for(const t of n.Eu)e.uu(t.mutations)}async function Rw(n,e,t){const r=n.Eu.shift(),i=fa.from(r,e,t);await td(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ps(n)}async function Dw(n,e){e&&Rt(n).ou&&await async function(t,r){if(i=r.code,E_(i)&&i!==w.ABORTED){const s=t.Eu.shift();Rt(t).Qo(),await td(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ps(t)}var i}(n,e),nd(n)&&rd(n)}async function tl(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=nn(t);t.vu.add(3),await $r(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await fs(t)}async function Nw(n,e){const t=F(n);e?(t.vu.delete(2),await fs(t)):e||(t.vu.add(2),await $r(t),t.bu.set("Unknown"))}function xn(n){return n.Su||(n.Su=function(e,t,r){const i=F(e);return i.fu(),new yw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:Iw.bind(null,n),ao:Tw.bind(null,n),nu:bw.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Ia(n)?Ea(n):n.bu.set("Unknown")):(await n.Su.stop(),ed(n))})),n.Su}function Rt(n){return n.Du||(n.Du=function(e,t,r){const i=F(e);return i.fu(),new vw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:Cw.bind(null,n),ao:Dw.bind(null,n),au:Aw.bind(null,n),cu:Rw.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await ps(n)):(await n.Du.stop(),n.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Ta(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(n,e){if(ht("AsyncQueue",`${e}: ${n}`),Ur(n))return new P(w.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||D.comparator(t.key,r.key):(t,r)=>D.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Cu=new ne(D.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):x():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sn{constructor(e,t,r,i,s,o,c,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Sn(e,t,yn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.Nu=void 0,this.listeners=[]}}class Pw{constructor(){this.queries=new Mn(e=>kh(e),as),this.onlineState="Unknown",this.ku=new Set}}async function Lw(n,e){const t=F(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Ow),i)try{s.Nu=await t.onListen(r)}catch(o){const c=ba(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&ka(t)}async function Mw(n,e){const t=F(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function xw(n,e){const t=F(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.listeners)c.$u(i)&&(r=!0);o.Nu=i}}r&&ka(t)}function Uw(n,e,t){const r=F(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function ka(n){n.ku.forEach(e=>{e.next()})}class Fw{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.key=e}}class sd{constructor(e){this.key=e}}class Vw{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=V(),this.mutatedKeys=V(),this.tc=Sh(e),this.ec=new yn(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new nl,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const a=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=cs(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(r.track({type:3,doc:f}),y=!0):this.rc(d,f)||(r.track({type:2,doc:f}),y=!0,(a&&this.tc(f,a)>0||l&&this.tc(f,l)<0)&&(c=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(a||l)&&(c=!0)),y&&(f?(o=o.add(f),s=_?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:c,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=t?this.uc():[],c=this.Zu.size===0&&this.current?1:0,a=c!==this.Xu;return this.Xu=c,s.length!==0||a?{snapshot:new Sn(this.query,e.ec,i,s,e.mutatedKeys,c===0,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new nl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=V(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new sd(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new id(r))}),t}hc(e){this.Yu=e.ir,this.Zu=V();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Sn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $w{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Bw{constructor(e){this.key=e,this.fc=!1}}class jw{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Mn(c=>kh(c),as),this._c=new Map,this.mc=new Set,this.gc=new ne(D.comparator),this.yc=new Map,this.Ic=new ya,this.Tc={},this.Ec=new Map,this.Ac=kn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function qw(n,e){const t=Zw(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await uw(t.localStore,dt(e)),c=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await zw(t,e,r,c==="current",o.resumeToken),t.isPrimaryClient&&Jh(t.remoteStore,o)}return i}async function zw(n,e,t,r,i){n.Rc=(h,d,f)=>async function(g,_,y,I){let T=_.view.sc(y);T.zi&&(T=await Xc(g.localStore,_.query,!1).then(({documents:N})=>_.view.sc(N,T)));const L=I&&I.targetChanges.get(_.targetId),q=_.view.applyChanges(T,g.isPrimaryClient,L);return il(g,_.targetId,q.cc),q.snapshot}(n,h,d,f);const s=await Xc(n.localStore,e,!0),o=new Vw(e,s.ir),c=o.sc(s.documents),a=Vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(c,n.isPrimaryClient,a);il(n,t,l.cc);const u=new $w(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function Hw(n,e){const t=F(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!as(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await _o(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Xh(t.remoteStore,r.targetId),wo(t,r.targetId)}).catch(xr)):(wo(t,r.targetId),await _o(t.localStore,r.targetId,!0))}async function Kw(n,e,t){const r=e0(n);try{const i=await function(s,o){const c=F(s),a=he.now(),l=o.reduce((d,f)=>d.add(f.key),V());let u,h;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ft(),g=V();return c.Zi.getEntries(d,l).next(_=>{f=_,f.forEach((y,I)=>{I.isValidDocument()||(g=g.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const y=[];for(const I of o){const T=m_(I,u.get(I.key).overlayedDocument);T!=null&&y.push(new tn(I.key,T,vh(T.value.mapValue),et.exists(!0)))}return c.mutationQueue.addMutationBatch(d,a,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(u,g);return c.documentOverlayCache.saveOverlays(d,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Ah(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,c){let a=s.Tc[s.currentUser.toKey()];a||(a=new ne(G)),a=a.insert(o,c),s.Tc[s.currentUser.toKey()]=a}(r,i.batchId,t),await Br(r,i.changes),await ps(r.remoteStore)}catch(i){const s=ba(i,"Failed to persist write");t.reject(s)}}async function od(n,e){const t=F(n);try{const r=await aw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?te(o.fc):i.removedDocuments.size>0&&(te(o.fc),o.fc=!1))}),await Br(t,r,e)}catch(r){await xr(r)}}function rl(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const c=o.view.Mu(e);c.snapshot&&i.push(c.snapshot)}),function(s,o){const c=F(s);c.onlineState=o;let a=!1;c.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(a=!0)}),a&&ka(c)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ww(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ne(D.comparator);o=o.insert(s,Ee.newNoDocument(s,U.min()));const c=V().add(s),a=new hs(U.min(),new Map,new ne(G),o,c);await od(r,a),r.gc=r.gc.remove(s),r.yc.delete(e),Sa(r)}else await _o(r.localStore,e,!1).then(()=>wo(r,e,t)).catch(xr)}async function Gw(n,e){const t=F(n),r=e.batch.batchId;try{const i=await ow(t.localStore,e);cd(t,r,null),ad(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Br(t,i)}catch(i){await xr(i)}}async function Qw(n,e,t){const r=F(n);try{const i=await function(s,o){const c=F(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let l;return c.mutationQueue.lookupMutationBatch(a,o).next(u=>(te(u!==null),l=u.keys(),c.mutationQueue.removeMutationBatch(a,u))).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,l,o)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,l)).next(()=>c.localDocuments.getDocuments(a,l))})}(r.localStore,e);cd(r,e,t),ad(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Br(r,i)}catch(i){await xr(i)}}function ad(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function cd(n,e,t){const r=F(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||ld(n,r)})}function ld(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(Xh(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Sa(n))}function il(n,e,t){for(const r of t)r instanceof id?(n.Ic.addReference(r.key,e),Yw(n,r)):r instanceof sd?(C("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||ld(n,r.key)):x()}function Yw(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(C("SyncEngine","New document in limbo: "+t),n.mc.add(r),Sa(n))}function Sa(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new D(re.fromString(e)),r=n.Ac.next();n.yc.set(r,new Bw(t)),n.gc=n.gc.insert(t,r),Jh(n.remoteStore,new It(dt(ha(t.path)),r,"TargetPurposeLimboResolution",sa.ct))}}async function Br(n,e,t){const r=F(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((c,a)=>{o.push(r.Rc(a,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=_a.Li(a.targetId,l);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(c,a){const l=F(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(a,h=>E.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ur(u))throw u;C("LocalStore","Failed to update sequence numbers: "+u)}for(const u of a){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(r.localStore,s))}async function Jw(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await Wh(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(c=>{c.reject(new P(w.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Br(t,r.er)}}function Xw(n,e){const t=F(n),r=t.yc.get(e);if(r&&r.fc)return V().add(r.key);{let i=V();const s=t._c.get(e);if(!s)return i;for(const o of s){const c=t.wc.get(o);i=i.unionWith(c.view.nc)}return i}}function Zw(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ww.bind(null,e),e.dc.nu=xw.bind(null,e.eventManager),e.dc.Pc=Uw.bind(null,e.eventManager),e}function e0(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qw.bind(null,e),e}class sl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return sw(this.persistence,new rw,e.initialUser,this.serializer)}createPersistence(e){return new tw(va.zs,this.serializer)}createSharedClientState(e){return new dw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class t0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jw.bind(null,this.syncEngine),await Nw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Pw}createDatastore(e){const t=ds(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new mw(i));var i;return function(s,o,c,a){return new _w(s,o,c,a)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=c=>rl(this.syncEngine,c,0),o=el.D()?new el:new fw,new Ew(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,c,a,l){const u=new jw(r,i,s,o,c,a);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);C("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await $r(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=gh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ba(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $s(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ol(n,e){n.asyncQueue.verifyOperationInProgress();const t=await s0(n);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>tl(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>tl(e.remoteStore,s)),n._onlineComponents=e}function i0(n){return n.name==="FirebaseError"?n.code===w.FAILED_PRECONDITION||n.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function s0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await $s(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!i0(t))throw t;En("Error using user provided cache. Falling back to memory cache: "+t),await $s(n,new sl)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await $s(n,new sl);return n._offlineComponents}async function ud(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await ol(n,new t0))),n._onlineComponents}function o0(n){return ud(n).then(e=>e.syncEngine)}async function a0(n){const e=await ud(n),t=e.eventManager;return t.onListen=qw.bind(null,e.syncEngine),t.onUnlisten=Hw.bind(null,e.syncEngine),t}function c0(n,e,t={}){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,c,a){const l=new n0({next:h=>{s.enqueueAndForget(()=>Mw(i,u));const d=h.docs.has(o);!d&&h.fromCache?a.reject(new P(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&c&&c.source==="server"?a.reject(new P(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(h)},error:h=>a.reject(h)}),u=new Fw(ha(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Lw(i,u)}(await a0(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(n,e,t){if(!t)throw new P(w.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u0(n,e,t,r){if(e===!0&&r===!0)throw new P(w.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cl(n){if(!D.isDocumentKey(n))throw new P(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ca(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function Cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new P(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ca(n);throw new P(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Aa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new kv;switch(t.type){case"firstParty":return new Rv(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=al.get(e);t&&(C("ComponentProvider","Removing Datastore"),al.delete(e),t.terminate())}(this),Promise.resolve()}}function h0(n,e,t,r={}){var i;const s=(n=Cn(n,Aa))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let c,a;if(typeof r.mockUserToken=="string")c=r.mockUserToken,a=we.MOCK_USER;else{c=Vf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new we(l)}n._authCredentials=new Sv(new ph(c,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Ra{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ra(this.firestore,e,this._query)}}class _r extends Ra{constructor(e,t,r){super(e,t,ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new D(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function Bs(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=gh.A()),l0("doc","path",e),n instanceof Aa){const r=re.fromString(e,...t);return cl(r),new Ve(n,null,new D(r))}{if(!(n instanceof Ve||n instanceof _r))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return cl(r),new Ve(n.firestore,n instanceof _r?n.converter:null,new D(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Qh(this,"async_queue_retry"),this.Xc=()=>{const t=Vs();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new St;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ur(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Ta.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&x()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class gs extends Aa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new d0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fd(this),this._firestoreClient.terminate()}}function f0(n,e){const t=typeof n=="object"?n:Al(),r=typeof n=="string"?n:e||"(default)",i=So(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Uf("firestore");s&&h0(i,...s)}return i}function dd(n){return n._firestoreClient||fd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function fd(n){var e,t,r;const i=n._freezeSettings(),s=function(o,c,a,l){return new Bv(o,c,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hd(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new r0(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ae.fromBase64String(e))}catch(t){throw new P(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new P(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=/^__.*__$/;class g0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fr(e,this.data,t,this.fieldTransforms)}}function gd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Oa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Vi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(gd(this.ca)&&p0.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class m0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ds(e)}ya(e,t,r,i=!1){return new Oa({ca:e,methodName:t,ga:r,path:Ie.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function y0(n){const e=n._freezeSettings(),t=ds(n._databaseId);return new m0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function v0(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);_d("Data must be an object, but it was:",o,r);const c=yd(r,o);let a,l;if(s.merge)a=new $e(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=_0(e,h,t);if(!o.contains(d))throw new P(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);E0(u,d)||u.push(d)}a=new $e(u),l=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,l=o.fieldTransforms;return new g0(new Fe(c),a,l)}function md(n,e){if(vd(n=Ce(n)))return _d("Unsupported field value:",e,n),yd(n,e);if(n instanceof pd)return function(t,r){if(!gd(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let c=md(o,r.wa(s));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=Ce(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return u_(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=he.fromDate(t);return{timestampValue:Ui(r.serializer,i)}}if(t instanceof he){const i=new he(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ui(r.serializer,i)}}if(t instanceof Na)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof An)return{bytesValue:Bh(r.serializer,t._byteString)};if(t instanceof Ve){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ma(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Ca(t)}`)}(n,e)}function yd(n,e){const t={};return mh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(r,i)=>{const s=md(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function vd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof Na||n instanceof An||n instanceof Ve||n instanceof pd)}function _d(n,e,t){if(!vd(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ca(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function _0(n,e,t){if((e=Ce(e))instanceof Da)return e._internalPath;if(typeof e=="string")return wd(n,e);throw Vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const w0=new RegExp("[~\\*/\\[\\]]");function wd(n,e,t){if(e.search(w0)>=0)throw Vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Da(...e.split("."))._internalPath}catch{throw Vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vi(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new P(w.INVALID_ARGUMENT,c+n+a)}function E0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Id("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I0 extends Ed{data(){return super.data()}}function Id(n,e){return typeof e=="string"?wd(n,e):e instanceof Da?e._internalPath:e._delegate._internalPath}class T0{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ln(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Na(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=At(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);te(Kh(r));const i=new gr(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(t)||ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Td extends Ed{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new S0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Id("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class S0 extends Td{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){n=Cn(n,Ve);const e=Cn(n.firestore,gs);return c0(dd(e),n._key).then(t=>N0(e,n,t))}class A0 extends T0{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function R0(n,e,t){n=Cn(n,Ve);const r=Cn(n.firestore,gs),i=b0(n.converter,e,t);return bd(r,[v0(y0(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,et.none())])}function D0(n){return bd(Cn(n.firestore,gs),[new da(n._key,et.none())])}function bd(n,e){return function(t,r){const i=new St;return t.asyncQueue.enqueueAndForget(async()=>Kw(await o0(t),r,i)),i.promise}(dd(n),e)}function N0(n,e,t){const r=t.docs.get(e._key),i=new A0(n);return new Td(n,i,e._key,r,new k0(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){Pn=t})(Rn),vn(new Kt("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new gs(new Cv(t.getProvider("auth-internal")),new Nv(t.getProvider("app-check-internal")),function(c,a){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new P(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(c.options.projectId,a)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kt(Nc,"3.13.0",n),kt(Nc,"3.13.0","esm2017")})();function ul(n,e,t){const r=n.slice();return r[36]=e[t],r}function hl(n){let e,t,r,i,s,o,c,a,l,u,h,d,f,g,_,y,I,T,L,q,N,$,H,Ne,ge,Pe,qe,K,Q,oe,ze,jr,qr,Un,Fn,zr;function Hr(W,Me){if(W[1]==="createOrSignIn")return L0;if(W[11]===!0)return P0;if(W[11]===!1)return O0}let mt=Hr(n),R=mt&&mt(n);function Le(W,Me){if(W[1]==="createOrSignIn")return U0;if(W[11]===!0)return x0;if(W[11]===!1)return M0}let He=Le(n),Oe=He&&He(n);function Pa(W,Me){return W[1]==="createOrSignIn"?$0:W[8]===!1?V0:F0}let Kr=Pa(n),Ke=Kr(n);return{c(){e=v("div"),t=v("div"),r=v("div"),i=v("div"),s=v("img"),c=A(),a=v("div"),l=v("div"),R&&R.c(),u=A(),h=v("div"),h.innerHTML='<div class="d-grid mt-3"><button type="button" class="btn text-light" style="background-color: #eb564b;" data-bs-toggle="modal" data-bs-target="#accountModal">View Account</button></div>',d=A(),f=v("div"),g=v("div"),_=v("div"),y=v("div"),I=v("h4"),I.textContent="My Account",T=A(),L=v("button"),q=A(),N=v("div"),$=v("div"),H=v("img"),ge=A(),Oe&&Oe.c(),Pe=A(),Ke.c(),qe=A(),K=v("div"),Q=v("p"),oe=X(n[10]),ze=A(),jr=v("br"),qr=A(),Un=v("i"),Un.textContent=`If the email we send has a broken link. Attempt using an\r
              proxy(like ultrasurf).`,Ma(s.src,o="./user.svg")||m(s,"src",o),m(s,"alt","standard icon for user"),m(s,"class","img-thumbnail border-1 border-opacity-75 border-dark"),ie(s,"background-color",n[2]),m(s,"width","45px"),m(s,"height","45px"),m(i,"class","container p-2 text-center"),m(r,"class","col-sm-2"),m(l,"class","container mt-4 text-start"),m(a,"class","col"),m(h,"class","col"),m(t,"class","row"),m(e,"class","container-fluid mt-2 p-2 border"),m(I,"class","modal-title"),m(L,"type","button"),m(L,"class","btn-close"),m(L,"data-bs-dismiss","modal"),m(y,"class","modal-header"),Ma(H.src,Ne="./user.svg")||m(H,"src",Ne),m(H,"alt","standard icon for user"),m(H,"class","img-thumbnail border-1 border-opacity-75 border-dark"),ie(H,"background-color",n[2]),m(H,"width","45px"),m(H,"height","45px"),m($,"class","container p-2 text-center"),m(Q,"class","text-center text-danger"),m(K,"class","bg-black bg-opacity-10 mt-2"),m(N,"class","modal-body"),m(_,"class","modal-content"),m(g,"class","modal-dialog"),m(f,"class","modal fade"),m(f,"id","accountModal")},m(W,Me){S(W,e,Me),p(e,t),p(t,r),p(r,i),p(i,s),p(t,c),p(t,a),p(a,l),R&&R.m(l,null),p(t,u),p(t,h),S(W,d,Me),S(W,f,Me),p(f,g),p(g,_),p(_,y),p(y,I),p(y,T),p(y,L),p(_,q),p(_,N),p(N,$),p($,H),p(N,ge),Oe&&Oe.m(N,null),p(N,Pe),Ke.m(N,null),p(N,qe),p(N,K),p(K,Q),p(Q,oe),p(K,ze),p(K,jr),p(K,qr),p(K,Un),Fn||(zr=le(L,"click",n[21]),Fn=!0)},p(W,Me){Me[0]&4&&ie(s,"background-color",W[2]),mt===(mt=Hr(W))&&R?R.p(W,Me):(R&&R.d(1),R=mt&&mt(W),R&&(R.c(),R.m(l,null))),Me[0]&4&&ie(H,"background-color",W[2]),He===(He=Le(W))&&Oe?Oe.p(W,Me):(Oe&&Oe.d(1),Oe=He&&He(W),Oe&&(Oe.c(),Oe.m(N,Pe))),Kr===(Kr=Pa(W))&&Ke?Ke.p(W,Me):(Ke.d(1),Ke=Kr(W),Ke&&(Ke.c(),Ke.m(N,qe))),Me[0]&1024&&De(oe,W[10])},d(W){W&&k(e),R&&R.d(),W&&k(d),W&&k(f),Oe&&Oe.d(),Ke.d(),Fn=!1,zr()}}}function O0(n){let e,t,r,i;return{c(){e=v("p"),t=X("Welcome "),r=X(n[4]),i=X("!"),m(e,"class","text-dark text-opacity-75 h6")},m(s,o){S(s,e,o),p(e,t),p(e,r),p(e,i)},p(s,o){o[0]&16&&De(r,s[4])},d(s){s&&k(e)}}}function P0(n){let e;return{c(){e=v("div"),m(e,"class","spinner-border text-muted")},m(t,r){S(t,e,r)},p:B,d(t){t&&k(e)}}}function L0(n){let e;return{c(){e=v("p"),e.textContent="Not signed in",m(e,"class","text-dark text-opacity-75 h6")},m(t,r){S(t,e,r)},p:B,d(t){t&&k(e)}}}function M0(n){let e,t,r,i;return{c(){e=v("p"),t=X(n[4]),r=A(),i=v("p"),i.textContent=`${n[12].currentUser.email}`,m(e,"class","text-dark text-center text-opacity-75 h6"),m(i,"class","text-dark text-center text-opacity-75 small")},m(s,o){S(s,e,o),p(e,t),S(s,r,o),S(s,i,o)},p(s,o){o[0]&16&&De(t,s[4])},d(s){s&&k(e),s&&k(r),s&&k(i)}}}function x0(n){let e;return{c(){e=v("div"),m(e,"class","spinner-border text-muted")},m(t,r){S(t,e,r)},p:B,d(t){t&&k(e)}}}function U0(n){let e;return{c(){e=v("p"),e.textContent="Not signed in",m(e,"class","text-dark text-center text-opacity-75 h6")},m(t,r){S(t,e,r)},p:B,d(t){t&&k(e)}}}function F0(n){let e,t,r,i,s,o,c,a,l,u;return{c(){e=v("p"),e.textContent="Are you sure you want to delete your account",t=A(),r=v("div"),i=v("div"),s=v("button"),s.textContent="No",o=A(),c=v("div"),a=v("button"),a.textContent="Yes",m(e,"class","text-bg-danger text-center"),m(s,"class","btn text-bg-dark opacity-50"),m(i,"class","col"),m(a,"class","btn text-bg-danger t-3"),m(c,"class","col"),m(r,"class","row text-center")},m(h,d){S(h,e,d),S(h,t,d),S(h,r,d),p(r,i),p(i,s),p(r,o),p(r,c),p(c,a),l||(u=[le(s,"click",n[27]),le(a,"click",n[18])],l=!0)},p:B,d(h){h&&k(e),h&&k(t),h&&k(r),l=!1,it(u)}}}function V0(n){let e,t,r,i,s,o,c,a,l,u,h,d,f=n[13],g=[];for(let y=0;y<f.length;y+=1)g[y]=dl(ul(n,f,y));let _=n[12]&&n[12].currentUser&&n[12].currentUser.emailVerified===!1&&n[7]===!1&&fl(n);return{c(){e=v("div"),t=v("button"),t.textContent="Color List",r=A(),i=v("ul");for(let y=0;y<g.length;y+=1)g[y].c();s=A(),o=v("div"),_&&_.c(),c=A(),a=v("button"),a.textContent="Sign Out",l=A(),u=v("button"),u.textContent="Delete Account",m(t,"type","button"),m(t,"class","btn btn-primary dropdown-toggle"),m(t,"data-bs-toggle","dropdown"),m(i,"class","dropdown-menu bg-dark-subtle"),m(e,"class","dropdown text-center"),m(a,"class","btn text-light mt-2"),ie(a,"background-color","#eb564b"),m(u,"class","btn text-danger mt-2"),m(o,"class","row text-center")},m(y,I){S(y,e,I),p(e,t),p(e,r),p(e,i);for(let T=0;T<g.length;T+=1)g[T]&&g[T].m(i,null);S(y,s,I),S(y,o,I),_&&_.m(o,null),p(o,c),p(o,a),p(o,l),p(o,u),h||(d=[le(a,"click",n[15]),le(u,"click",n[26])],h=!0)},p(y,I){if(I[0]&8196){f=y[13];let T;for(T=0;T<f.length;T+=1){const L=ul(y,f,T);g[T]?g[T].p(L,I):(g[T]=dl(L),g[T].c(),g[T].m(i,null))}for(;T<g.length;T+=1)g[T].d(1);g.length=f.length}y[12]&&y[12].currentUser&&y[12].currentUser.emailVerified===!1&&y[7]===!1?_?_.p(y,I):(_=fl(y),_.c(),_.m(o,c)):_&&(_.d(1),_=null)},d(y){y&&k(e),$i(g,y),y&&k(s),y&&k(o),_&&_.d(),h=!1,it(d)}}}function $0(n){let e,t,r,i,s,o,c,a,l,u,h,d,f,g,_,y=n[9]===!0&&pl(n);return{c(){e=v("div"),t=v("span"),t.textContent="Email",r=A(),i=v("input"),s=A(),o=v("div"),c=v("span"),c.textContent="Password",a=A(),l=v("input"),u=A(),h=v("div"),y&&y.c(),d=A(),f=v("button"),f.textContent="Sign In",m(t,"class","input-group-text"),m(i,"class","form-control"),m(i,"type","email"),m(i,"placeholder","Your email"),m(e,"class","input-group"),m(c,"class","input-group-text"),m(l,"class","form-control"),m(l,"type","password"),m(l,"placeholder","Your password"),m(o,"class","input-group"),m(f,"class","btn mt-2"),ie(f,"background-color","#eb564b"),m(h,"class","row text-center")},m(I,T){S(I,e,T),p(e,t),p(e,r),p(e,i),Gr(i,n[5]),S(I,s,T),S(I,o,T),p(o,c),p(o,a),p(o,l),Gr(l,n[6]),S(I,u,T),S(I,h,T),y&&y.m(h,null),p(h,d),p(h,f),g||(_=[le(i,"input",n[22]),le(l,"input",n[23]),le(f,"click",n[14])],g=!0)},p(I,T){T[0]&32&&i.value!==I[5]&&Gr(i,I[5]),T[0]&64&&l.value!==I[6]&&Gr(l,I[6]),I[9]===!0?y?y.p(I,T):(y=pl(I),y.c(),y.m(h,d)):y&&(y.d(1),y=null)},d(I){I&&k(e),I&&k(s),I&&k(o),I&&k(u),I&&k(h),y&&y.d(),g=!1,it(_)}}}function dl(n){let e,t,r,i,s;function o(){return n[24](n[36])}return{c(){e=v("button"),t=v("p"),r=A(),m(e,"class","dropdown-item btn mt-1"),ie(e,"background-color",n[36])},m(c,a){S(c,e,a),p(e,t),p(e,r),i||(s=le(e,"click",o),i=!0)},p(c,a){n=c},d(c){c&&k(e),i=!1,s()}}}function fl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Verifiy with email",m(e,"class","btn text-light mt-2"),ie(e,"background-color","#3ca370")},m(i,s){S(i,e,s),t||(r=le(e,"click",n[25]),t=!0)},p:B,d(i){i&&k(e),t=!1,r()}}}function pl(n){let e,t,r;return{c(){e=v("button"),e.textContent="Reset Password",m(e,"class","btn mt-2"),ie(e,"color","#ff9166")},m(i,s){S(i,e,s),t||(r=le(e,"click",n[17]),t=!0)},p:B,d(i){i&&k(e),t=!1,r()}}}function B0(n){let e,t=n[0]===!1&&hl(n);return{c(){t&&t.c(),e=pt()},m(r,i){t&&t.m(r,i),S(r,e,i)},p(r,i){r[0]===!1?t?t.p(r,i):(t=hl(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:B,o:B,d(r){t&&t.d(r),r&&k(e)}}}function j0(n,e,t){let r=wr();const s=Cl({apiKey:"AIzaSyBbvBqzON19_chtz1aiunetpJXCcr85pEc",authDomain:"quiz-application-84c7e.firebaseapp.com",projectId:"quiz-application-84c7e",storageBucket:"quiz-application-84c7e.appspot.com",messagingSenderId:"192981103335",appId:"1:192981103335:web:bbc425fdab0861e700a842"}),o=yy(s),c=f0(s);let a="",l=["#ffffeb","#ffe478","#eb564b","#3ca370","#4da6ff","#ff6b97","#ba6156","#7e7e8f","#43434f"],u=null,h=null,d=" ",f="",g="",{cloudData:_}=e,y=null,I=!1,T=!1,L=!1,{hidePanel:q}=e,N="Error output panel",$=!1;async function H(){t(11,$=!0),rm(o,function(R){R?(t(1,a="signedIn"),t(5,f=""),t(6,g=""),t(11,$=!1),ze()):(t(1,a="createOrSignIn"),t(2,u=l[0]))})}H(),Eo(()=>{o&&o.currentUser&&(t(4,d=o.currentUser.email.split("@")[0]),_!=null&&y!=null&&JSON.stringify(_)!==JSON.stringify(y)&&oe(),y=_)});function Ne(){Zg(o,f).then(R=>{R.length>0?Jg(o,f,g).then(Le=>{Q("Error output panel")}).catch(Le=>{Q(Le.code)}):Yg(o,f,g).then(Le=>{Q("Error output panel")}).catch(Le=>{Q(Le.code)})}).catch(R=>{Q(R.code)})}function ge(){im(o).then(()=>{t(4,d=""),t(2,u="white"),Q("Error output panel")}).catch(R=>{Q(R.code)})}function Pe(){em(o.currentUser).then(()=>{Q("Error output panel")}).catch(R=>{Q(R.code)})}function qe(){Qg(o,f).then(()=>{Q("Error output panel")}).catch(R=>{R.code,R.message,Q(R.code)})}function K(){const R=o.currentUser,Le=Bs(c,"users",R.uid);D0(Le).then(()=>{sm(R).then(()=>{t(1,a="createOrSignIn"),t(8,T=!1),Q("Error output panel")}).catch(He=>{Q(He.code)})}).catch(He=>{Q(He.code)})}function Q(R){var Le={"auth/invalid-email":"Invalid email","auth/too-many-requests":"Too many requests","auth/user-disabled":"User is disabled","auth/wrong-password":"Wrong password","auth/invalid-password":"Invalid password","auth/missing-password":"Missing password","auth/email-already-in-use":"Email is already in use","auth/weak-password":"Weak password","auth/user-not-found":"User not found","auth/operation-not-allowed":"Operation not allowed","auth/network-request-failed":"Network request failed","auth/internal-error":"Internal error","auth/requires-recent-login":"Error: Recent sign-in required; please sign out and sign back in","Error output panel":"Error output panel"};Le.hasOwnProperty(R)?(t(10,N=Le[R]),R=="auth/wrong-password"?t(9,L=!0):R=="Error output panel"&&t(9,L=!1)):t(10,N="Unknown error")}async function oe(){if(o!=null&&o.currentUser&&o.currentUser.emailVerified==!0&&_!=null)try{await R0(Bs(c,"users",o.currentUser.uid),{pfp:u,info:_})}catch(R){console.log(R.code,R.message)}}async function ze(){if(o!=null&&o.currentUser!=null&&o.currentUser.emailVerified==!0&&_!=null)try{const R=await C0(Bs(c,"users",o.currentUser.uid));R&&R.exists()==!0?(t(2,u=R.data().pfp),t(20,_=R.data().info),r("returnData",_)):oe()}catch(R){console.error(R.code,R.message)}}const jr=()=>{u!==h&&oe(),t(3,h=u)};function qr(){f=this.value,t(5,f)}function Un(){g=this.value,t(6,g)}const Fn=R=>{t(2,u=R)},zr=()=>{Pe(),t(7,I=!0)},Hr=()=>{t(8,T=!0)},mt=()=>{t(8,T=!1)};return n.$$set=R=>{"cloudData"in R&&t(20,_=R.cloudData),"hidePanel"in R&&t(0,q=R.hidePanel)},[q,a,u,h,d,f,g,I,T,L,N,$,o,l,Ne,ge,Pe,qe,K,oe,_,jr,qr,Un,Fn,zr,Hr,mt]}class q0 extends Lt{constructor(e){super(),Pt(this,e,j0,B0,Dt,{cloudData:20,hidePanel:0},null,[-1,-1])}}function z0(n){let e,t,r,i,s,o,c,a,l;return t=new Md({}),i=new q0({props:{cloudData:n[1],hidePanel:n[0]}}),i.$on("returnData",n[2]),o=new Sf({props:{previousQuizResults:n[1]}}),o.$on("quizResults",n[3]),o.$on("quizStarted",n[4]),o.$on("finished",n[5]),a=new Rf({}),{c(){e=v("main"),st(t.$$.fragment),r=A(),st(i.$$.fragment),s=A(),st(o.$$.fragment),c=A(),st(a.$$.fragment)},m(u,h){S(u,e,h),Ge(t,e,null),p(e,r),Ge(i,e,null),p(e,s),Ge(o,e,null),p(e,c),Ge(a,e,null),l=!0},p(u,[h]){const d={};h&2&&(d.cloudData=u[1]),h&1&&(d.hidePanel=u[0]),i.$set(d);const f={};h&2&&(f.previousQuizResults=u[1]),o.$set(f)},i(u){l||(J(t.$$.fragment,u),J(i.$$.fragment,u),J(o.$$.fragment,u),J(a.$$.fragment,u),l=!0)},o(u){ee(t.$$.fragment,u),ee(i.$$.fragment,u),ee(o.$$.fragment,u),ee(a.$$.fragment,u),l=!1},d(u){u&&k(e),Qe(t),Qe(i),Qe(o),Qe(a)}}}function H0(n,e,t){let r=!1,i=[0,0];return[r,i,l=>{i!=null&&t(1,i=l.detail)},l=>{t(1,i=l.detail)},()=>{t(0,r=!0)},()=>{t(0,r=!1)}]}class K0 extends Lt{constructor(e){super(),Pt(this,e,H0,z0,Dt,{})}}new K0({target:document.getElementById("app")});
