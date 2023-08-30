(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L(){}function kr(e){return e()}function Di(){return Object.create(null)}function Le(e){e.forEach(kr)}function br(e){return typeof e=="function"}function Me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function io(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Yn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function S(){return x(" ")}function Ue(){return x("")}function me(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ro(e){return function(t){return t.preventDefault(),e.call(this,t)}}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function so(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.data!==t&&(e.data=t)}function ne(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function oo(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}let ht;function st(e){ht=e}function Sr(){if(!ht)throw new Error("Function called outside component initialization");return ht}function Cr(e){Sr().$$.after_update.push(e)}function en(){const e=Sr();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=oo(t,n,{cancelable:i});return r.slice().forEach(o=>{o.call(e,s)}),!s.defaultPrevented}return!0}}const ze=[],Pi=[];let qe=[];const Oi=[],ao=Promise.resolve();let Ln=!1;function lo(){Ln||(Ln=!0,ao.then(Rr))}function Mn(e){qe.push(e)}const vn=new Set;let He=0;function Rr(){if(He!==0)return;const e=ht;do{try{for(;He<ze.length;){const t=ze[He];He++,st(t),ho(t.$$)}}catch(t){throw ze.length=0,He=0,t}for(st(null),ze.length=0,He=0;Pi.length;)Pi.pop()();for(let t=0;t<qe.length;t+=1){const n=qe[t];vn.has(n)||(vn.add(n),n())}qe.length=0}while(ze.length);for(;Oi.length;)Oi.pop()();Ln=!1,vn.clear(),st(e)}function ho(e){if(e.fragment!==null){e.update(),Le(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Mn)}}function co(e){const t=[],n=[];qe.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),qe=t}const xt=new Set;let Ce;function Te(){Ce={r:0,c:[],p:Ce}}function Ie(){Ce.r||Le(Ce.c),Ce=Ce.p}function D(e,t){e&&e.i&&(xt.delete(e),e.i(t))}function U(e,t,n,i){if(e&&e.o){if(xt.has(e))return;xt.add(e),Ce.c.push(()=>{xt.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function _e(e){e&&e.c()}function ce(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||Mn(()=>{const o=e.$$.on_mount.map(kr).filter(br);e.$$.on_destroy?e.$$.on_destroy.push(...o):Le(o),e.$$.on_mount=[]}),s.forEach(Mn)}function ue(e,t){const n=e.$$;n.fragment!==null&&(co(n.after_update),Le(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function uo(e,t){e.$$.dirty[0]===-1&&(ze.push(e),lo(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,r,s,o,h=[-1]){const a=ht;st(e);const l=e.$$={fragment:null,ctx:[],props:s,update:L,not_equal:r,bound:Di(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Di(),dirty:h,skip_bound:!1,root:t.target||a.$$.root};o&&o(l.root);let c=!1;if(l.ctx=n?n(e,t.props||{},(u,p,...m)=>{const d=m.length?m[0]:p;return l.ctx&&r(l.ctx[u],l.ctx[u]=d)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](d),c&&uo(e,u)),p}):[],l.update(),c=!0,Le(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const u=so(t.target);l.fragment&&l.fragment.l(u),u.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&D(e.$$.fragment),ce(e,t.target,t.anchor,t.customElement),Rr()}st(a)}class $e{$destroy(){ue(this,1),this.$destroy=L}$on(t,n){if(!br(n))return L;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!io(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function fo(e){let t;return{c(){t=_("header"),t.innerHTML=`<h1 class="h1">Quiz Application</h1> 
  <i class="small">Over 1000 questions!</i>`,y(t,"class","p-5 text-light text-center"),ne(t,"background-color","#4b5bab")},m(n,i){A(n,t,i)},p:L,i:L,o:L,d(n){n&&T(t)}}}class po extends $e{constructor(t){super(),xe(this,t,null,fo,Me,{})}}const go="modulepreload",mo=function(e,t){return new URL(e,t).href},Li={},_o=function(t,n,i){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=mo(s,i),s in Li)return;Li[s]=!0;const o=s.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const u=r[c];if(u.href===s&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":go,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var yo=Object.defineProperty,vo=(e,t,n)=>t in e?yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>(vo(e,typeof t!="symbol"?t+"":t,n),n);class Bt{constructor(t,n={}){En(this,"src"),En(this,"options"),En(this,"howl"),this.src=t,this.options=n,this.create()}async create(){const{Howl:t}=await _o(()=>import("./howler.core-e669a980-4e0b937d.js"),[],import.meta.url).then(s=>s.h),{loop:n,volume:i}=this.options,r=new t({src:this.src,loop:n||!1,volume:i||1,...this.options});this.howl=r}update(t=this.options){this.unload(),this.options=t,this.create()}destroy(){this.stop(),this.unload()}play(){this.howl.play()}stop(){this.howl.stop()}unload(){this.howl.unload()}}const Qn=""+new URL("../mouseclick.mp3",import.meta.url).href,Eo=""+new URL("../twinklesparkle.mp3",import.meta.url).href;let wo=["History","Science","Geography","Literature","Sports","Music","Movies","Art","Technology","Math","Animals","General knowledge","Politics","Mythology"];function To(e,t,n){let i=n;const s={History:23,Science:17,Geography:22,Literature:10,Sports:21,Music:12,Movies:14,Art:25,Technology:18,Math:19,Animals:27,"General knowledge":9,Politics:24,Mythology:20}[e];return`${`https://opentdb.com/api.php?amount=${i}&category=${s}`}&difficulty=${Io(t)}&type=multiple`}function Io(e){return e.charAt(0).toLowerCase()+e.slice(1)}function Mi(e,t,n){const i=e.slice();return i[5]=t[n],i}function Ui(e){let t,n=e[5]+"",i,r;return{c(){t=_("option"),i=x(n),t.__value=r=e[5],t.value=t.__value},m(s,o){A(s,t,o),f(t,i)},p(s,o){o&1&&n!==(n=s[5]+"")&&ie(i,n),o&1&&r!==(r=s[5])&&(t.__value=r,t.value=t.__value)},d(s){s&&T(t)}}}function Ao(e){let t,n,i,r=e[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Ui(Mi(e,r,o));return{c(){t=_("select");for(let o=0;o<s.length;o+=1)s[o].c();y(t,"class","form-select mt-2")},m(o,h){A(o,t,h);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);n||(i=me(t,"change",e[1]),n=!0)},p(o,[h]){if(h&1){r=o[0];let a;for(a=0;a<r.length;a+=1){const l=Mi(o,r,a);s[a]?s[a].p(l,h):(s[a]=Ui(l),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:L,o:L,d(o){o&&T(t),Yn(s,o),n=!1,i()}}}function ko(e,t,n){let i=en(),{values:r=[]}=t,s=null;function o(a){const c=a.target.value;n(2,s=c)}function h(){i("return",s)}return e.$$set=a=>{"values"in a&&n(0,r=a.values)},e.$$.update=()=>{e.$$.dirty&4&&h()},[r,o,s]}class $t extends $e{constructor(t){super(),xe(this,t,ko,Ao,Me,{values:0})}}function xi(e,t,n){const i=e.slice();return i[6]=t[n],i}function $i(e){let t,n=Ht(e[6])+"",i,r,s,o;function h(){return e[4](e[6])}return{c(){t=_("button"),i=x(n),r=S(),y(t,"class","btn h6 mt-2 p-2 animate__animated animate__fadeIn"),ne(t,"background-color","#c2c2d1")},m(a,l){A(a,t,l),f(t,i),f(t,r),s||(o=me(t,"click",h),s=!0)},p(a,l){e=a,l&2&&n!==(n=Ht(e[6])+"")&&ie(i,n)},d(a){a&&T(t),s=!1,o()}}}function bo(e){let t,n,i=Ht(e[0].question)+"",r,s,o,h=e[1],a=[];for(let l=0;l<h.length;l+=1)a[l]=$i(xi(e,h,l));return{c(){t=_("div"),n=_("h4"),r=x(i),s=S(),o=_("div");for(let l=0;l<a.length;l+=1)a[l].c();y(n,"class","h4 text-dark text-opacity-75 mt-2 animate__animated animate__slideInLeft"),y(o,"class","row"),y(t,"class","container text-center")},m(l,c){A(l,t,c),f(t,n),f(n,r),f(t,s),f(t,o);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(o,null)},p(l,[c]){if(c&1&&i!==(i=Ht(l[0].question)+"")&&ie(r,i),c&14){h=l[1];let u;for(u=0;u<h.length;u+=1){const p=xi(l,h,u);a[u]?a[u].p(p,c):(a[u]=$i(p),a[u].c(),a[u].m(o,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=h.length}},i:L,o:L,d(l){l&&T(t),Yn(a,l)}}}function So(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Ht(e){var t=document.createElement("div");return e&&typeof e=="string"&&(t.innerHTML=e,e=t.textContent,t.textContent=""),t.remove(),e}function Co(e,t,n){const i=en(),r=new Bt(Qn);let{question:s}=t,o=[s.correct_answer,...s.incorrect_answers];function h(l){l==s.correct_answer?i("return",!0):i("return",!1)}o=So(o);const a=l=>{r.play(),h(l)};return e.$$set=l=>{"question"in l&&n(0,s=l.question)},[s,o,r,h,a]}class Ro extends $e{constructor(t){super(),xe(this,t,Co,bo,Me,{question:0})}}function Fi(e,t,n){const i=e.slice();return i[29]=t[n],i}function No(e){let t;return{c(){t=_("div"),t.innerHTML='<p class="h4">Rush Attack</p>',y(t,"class","container text-center rounded-2 p-2"),ne(t,"background-color","#eb564b")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function Do(e){let t;return{c(){t=_("div"),t.innerHTML='<p class="h4">Time Countdown</p>',y(t,"class","container text-center rounded-2 p-2"),ne(t,"background-color","#ffe478")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function Po(e){let t;return{c(){t=_("div"),t.innerHTML='<p class="h4">Classic</p>',y(t,"class","container text-center rounded-2 p-2"),ne(t,"background-color","#4da6ff")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function Oo(e){let t,n,i,r;const s=[xo,Uo],o=[];function h(a,l){return a[3]===a[2].length?0:1}return t=h(e),n=o[t]=s[t](e),{c(){n.c(),i=Ue()},m(a,l){o[t].m(a,l),A(a,i,l),r=!0},p(a,l){let c=t;t=h(a),t===c?o[t].p(a,l):(Te(),U(o[c],1,1,()=>{o[c]=null}),Ie(),n=o[t],n?n.p(a,l):(n=o[t]=s[t](a),n.c()),D(n,1),n.m(i.parentNode,i))},i(a){r||(D(n),r=!0)},o(a){U(n),r=!1},d(a){o[t].d(a),a&&T(i)}}}function Lo(e){let t;return{c(){t=_("div"),t.innerHTML='<div class="spinner-border"></div>',y(t,"class","text-center mt-5")},m(n,i){A(n,t,i)},p:L,i:L,o:L,d(n){n&&T(t)}}}function Mo(e){let t,n,i,r,s,o,h,a,l,c,u,p,m,d,E,v,C,O,B,$,H;s=new $t({props:{values:wo}}),s.$on("return",e[18]),l=new $t({props:{values:e[16]}}),l.$on("return",e[19]),m=new $t({props:{values:[5,10,15,20,25,30,35,40,45,50]}}),m.$on("return",e[20]);let I=e[0]==="Time Countdown"&&zi(e);return{c(){t=_("div"),n=_("form"),i=_("p"),i.textContent="Category",r=S(),_e(s.$$.fragment),o=S(),h=_("p"),h.textContent="Difficulty",a=S(),_e(l.$$.fragment),c=S(),u=_("p"),u.textContent="Amount of questions",p=S(),_e(m.$$.fragment),d=S(),I&&I.c(),E=S(),v=_("button"),v.textContent="Submit",C=S(),O=_("button"),O.textContent="Exit",y(i,"class","text-dark text-opacity-75 h6 mt-2"),y(h,"class","text-dark text-opacity-75 h6 mt-2"),y(u,"class","text-dark text-opacity-75 h6 mt-2"),y(v,"class","btn text-bg-success mt-2"),y(n,"class","row"),y(O,"class","btn text-bg-danger mt-2"),y(t,"class","container text-center")},m(k,J){A(k,t,J),f(t,n),f(n,i),f(n,r),ce(s,n,null),f(n,o),f(n,h),f(n,a),ce(l,n,null),f(n,c),f(n,u),f(n,p),ce(m,n,null),f(n,d),I&&I.m(n,null),f(n,E),f(n,v),f(t,C),f(t,O),B=!0,$||(H=[me(n,"submit",ro(e[17])),me(O,"click",e[22])],$=!0)},p(k,J){k[0]==="Time Countdown"?I?(I.p(k,J),J[0]&1&&D(I,1)):(I=zi(k),I.c(),D(I,1),I.m(n,E)):I&&(Te(),U(I,1,1,()=>{I=null}),Ie())},i(k){B||(D(s.$$.fragment,k),D(l.$$.fragment,k),D(m.$$.fragment,k),D(I),B=!0)},o(k){U(s.$$.fragment,k),U(l.$$.fragment,k),U(m.$$.fragment,k),U(I),B=!1},d(k){k&&T(t),ue(s),ue(l),ue(m),I&&I.d(),$=!1,Le(H)}}}function Uo(e){let t,n,i,r=e[3]+1+"",s,o,h,a,l,c=e[0]==="Time Countdown"&&Bi(e),u=e[2],p=[];for(let d=0;d<u.length;d+=1)p[d]=ji(Fi(e,u,d));const m=d=>U(p[d],1,1,()=>{p[d]=null});return{c(){t=_("div"),n=_("div"),i=_("div"),s=x(r),o=S(),c&&c.c(),h=S();for(let d=0;d<p.length;d+=1)p[d].c();a=Ue(),y(i,"class","progress-bar"),ne(i,"width",(e[3]+1)/e[2].length*100+"%"),y(n,"class","progress"),y(t,"class","container mt-2")},m(d,E){A(d,t,E),f(t,n),f(n,i),f(i,s),f(t,o),c&&c.m(t,null),A(d,h,E);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(d,E);A(d,a,E),l=!0},p(d,E){if((!l||E[0]&8)&&r!==(r=d[3]+1+"")&&ie(s,r),(!l||E[0]&12)&&ne(i,"width",(d[3]+1)/d[2].length*100+"%"),d[0]==="Time Countdown"?c?c.p(d,E):(c=Bi(d),c.c(),c.m(t,null)):c&&(c.d(1),c=null),E[0]&12780){u=d[2];let v;for(v=0;v<u.length;v+=1){const C=Fi(d,u,v);p[v]?(p[v].p(C,E),D(p[v],1)):(p[v]=ji(C),p[v].c(),D(p[v],1),p[v].m(a.parentNode,a))}for(Te(),v=u.length;v<p.length;v+=1)m(v);Ie()}},i(d){if(!l){for(let E=0;E<u.length;E+=1)D(p[E]);l=!0}},o(d){p=p.filter(Boolean);for(let E=0;E<p.length;E+=1)U(p[E]);l=!1},d(d){d&&T(t),c&&c.d(),d&&T(h),Yn(p,d),d&&T(a)}}}function xo(e){let t,n,i,r,s,o,h,a,l,c,u,p,m;function d(C,O){return C[5]>=C[6]?zo:jo}let E=d(e),v=E(e);return{c(){t=_("div"),v.c(),n=S(),i=_("p"),r=x("Correct answers = "),s=x(e[5]),o=S(),h=_("br"),a=x(`\r
        Wrong answers = `),l=x(e[6]),c=S(),u=_("button"),u.textContent="Exit",y(u,"class","btn text-bg-danger mt-2"),y(t,"class","text-center animate__animated animate__fadeIn")},m(C,O){A(C,t,O),v.m(t,null),f(t,n),f(t,i),f(i,r),f(i,s),f(i,o),f(i,h),f(i,a),f(i,l),f(t,c),f(t,u),p||(m=me(u,"click",e[23]),p=!0)},p(C,O){E!==(E=d(C))&&(v.d(1),v=E(C),v&&(v.c(),v.m(t,n))),O[0]&32&&ie(s,C[5]),O[0]&64&&ie(l,C[6])},i:L,o:L,d(C){C&&T(t),v.d(),p=!1,m()}}}function Bi(e){let t,n,i,r;return{c(){t=_("div"),n=_("p"),i=x(e[13]),r=x(" seconds left"),y(n,"class","mt-2 h5"),y(t,"class","text-center")},m(s,o){A(s,t,o),f(t,n),f(n,i),f(n,r)},p(s,o){o[0]&8192&&ie(i,s[13])},d(s){s&&T(t)}}}function Hi(e){let t,n,i,r;const s=[Fo,$o],o=[];function h(a,l){return a[7]===!1?0:1}return t=h(e),n=o[t]=s[t](e),{c(){n.c(),i=Ue()},m(a,l){o[t].m(a,l),A(a,i,l),r=!0},p(a,l){let c=t;t=h(a),t===c?o[t].p(a,l):(Te(),U(o[c],1,1,()=>{o[c]=null}),Ie(),n=o[t],n?n.p(a,l):(n=o[t]=s[t](a),n.c()),D(n,1),n.m(i.parentNode,i))},i(a){r||(D(n),r=!0)},o(a){U(n),r=!1},d(a){o[t].d(a),a&&T(i)}}}function $o(e){let t,n,i=jt(e[2][e[3]].question)+"",r,s,o,h;function a(u,p){if(u[8]===!0)return Ho;if(u[8]===!1)return Bo}let l=a(e),c=l&&l(e);return{c(){t=_("div"),n=_("h4"),r=x(i),s=S(),o=_("div"),c&&c.c(),h=S(),y(n,"class","h4 text-dark text-opacity-75 mt-2"),y(o,"class","mt-5 animate__animated animate__pulse text-light"),y(t,"class","container text-center")},m(u,p){A(u,t,p),f(t,n),f(n,r),f(t,s),f(t,o),c&&c.m(o,null),f(t,h)},p(u,p){p[0]&12&&i!==(i=jt(u[2][u[3]].question)+"")&&ie(r,i),l===(l=a(u))&&c?c.p(u,p):(c&&c.d(1),c=l&&l(u),c&&(c.c(),c.m(o,null)))},i:L,o:L,d(u){u&&T(t),c&&c.d()}}}function Fo(e){let t,n;return t=new Ro({props:{question:e[29]}}),t.$on("return",e[24]),{c(){_e(t.$$.fragment)},m(i,r){ce(t,i,r),n=!0},p(i,r){const s={};r[0]&4&&(s.question=i[29]),t.$set(s)},i(i){n||(D(t.$$.fragment,i),n=!0)},o(i){U(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function Bo(e){let t,n,i,r,s,o=jt(e[29].correct_answer)+"",h;return{c(){t=_("div"),n=_("h4"),n.innerHTML="Your answer is wrong<br/>Try better next time!",i=S(),r=_("p"),s=x("Correct Answer is "),h=x(o),y(n,"class","h4"),y(r,"class","text-dark"),y(t,"class","p-5 rounded-2"),ne(t,"background-color","#eb564b")},m(a,l){A(a,t,l),f(t,n),f(t,i),f(t,r),f(r,s),f(r,h)},p(a,l){l[0]&4&&o!==(o=jt(a[29].correct_answer)+"")&&ie(h,o)},d(a){a&&T(t)}}}function Ho(e){let t;return{c(){t=_("div"),t.innerHTML='<h4 class="h4">Your answer is correct<br/>Well done!</h4>',y(t,"class","p-5 rounded-2"),ne(t,"background-color","#3ca370")},m(n,i){A(n,t,i)},p:L,d(n){n&&T(t)}}}function ji(e){let t=e[2].indexOf(e[29])===e[3],n,i,r=t&&Hi(e);return{c(){r&&r.c(),n=Ue()},m(s,o){r&&r.m(s,o),A(s,n,o),i=!0},p(s,o){o[0]&12&&(t=s[2].indexOf(s[29])===s[3]),t?r?(r.p(s,o),o[0]&12&&D(r,1)):(r=Hi(s),r.c(),D(r,1),r.m(n.parentNode,n)):r&&(Te(),U(r,1,1,()=>{r=null}),Ie())},i(s){i||(D(r),i=!0)},o(s){U(r),i=!1},d(s){r&&r.d(s),s&&T(n)}}}function jo(e){let t;return{c(){t=_("h4"),t.textContent="Keep practicing!",y(t,"class","h4 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function zo(e){let t;return{c(){t=_("h4"),t.textContent="Good job!",y(t,"class","h4 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function zi(e){let t,n,i,r;return i=new $t({props:{values:[3,4,5,6,7,8,9,10]}}),i.$on("return",e[21]),{c(){t=_("p"),t.textContent="Time limit for each question (seconds)",n=S(),_e(i.$$.fragment),y(t,"class","text-dark text-opacity-75 h6 mt-2")},m(s,o){A(s,t,o),A(s,n,o),ce(i,s,o),r=!0},p:L,i(s){r||(D(i.$$.fragment,s),r=!0)},o(s){U(i.$$.fragment,s),r=!1},d(s){s&&T(t),s&&T(n),ue(i,s)}}}function Vo(e){let t,n,i,r,s,o;function h(m,d){return m[0]==="Classic"?Po:m[0]==="Time Countdown"?Do:No}let a=h(e),l=a(e);const c=[Mo,Lo,Oo],u=[];function p(m,d){return m[1]==="choose"?0:m[4]===!0?1:m[4]===!1&&m[2]?2:-1}return~(i=p(e))&&(r=u[i]=c[i](e)),{c(){t=_("div"),l.c(),n=S(),r&&r.c(),s=Ue(),y(t,"class","container mt-5")},m(m,d){A(m,t,d),l.m(t,null),A(m,n,d),~i&&u[i].m(m,d),A(m,s,d),o=!0},p(m,d){a!==(a=h(m))&&(l.d(1),l=a(m),l&&(l.c(),l.m(t,null)));let E=i;i=p(m),i===E?~i&&u[i].p(m,d):(r&&(Te(),U(u[E],1,1,()=>{u[E]=null}),Ie()),~i?(r=u[i],r?r.p(m,d):(r=u[i]=c[i](m),r.c()),D(r,1),r.m(s.parentNode,s)):r=null)},i(m){o||(D(r),o=!0)},o(m){U(r),o=!1},d(m){m&&T(t),l.d(),m&&T(n),~i&&u[i].d(m),m&&T(s)}}}function jt(e){var t=document.createElement("div");return e&&typeof e=="string"&&(t.innerHTML=e,e=t.textContent,t.textContent=""),t.remove(),e}function qo(e,t,n){let i=en();const r=new Bt(Eo),s=new Bt(Qn);let{quizType:o=""}=t,h="choose",a="",l,c=0,u=!1,p=0,m=0,d=!1,E=!1,v=["Easy","Medium","Hard"],C="History",O="Easy",B=5,$=3;Cr(()=>{l!=null&&c==l.length&&(r.play(),n(1,h="finished"),i("finished",[p,m]))});async function H(){try{n(4,u=!0);const V=await fetch(a),no=await V.json();if(V.ok)return n(4,u=!1),no.results;throw new Error("Network response was not ok")}catch(V){console.log("Quiz Error: |",V,"|")}}async function I(){s.play(),a=To(C,O,B),n(1,h="started"),n(13,k=$),n(2,l=await H())}let k=$,J=!1;o==="Time Countdown"&&setInterval(()=>{h=="started"&&u==!1&&d==!1&&(k!=0?n(13,k=k-1):k==0&&J==!1&&(n(8,E=!1),n(7,d=!0),J=!0,setTimeout(()=>{n(6,m=m+1),J=!1,n(7,d=!1),n(3,c+=1),n(13,k=$)},3e3)))},1e3);const pe=V=>{n(9,C=V.detail)},Fe=V=>{n(10,O=V.detail)},Dt=V=>{n(11,B=V.detail)},Be=V=>{n(12,$=V.detail)},oe=()=>{s.play(),i("exit","finished")},Q=()=>{s.play(),i("exit","finished")},Se=V=>{d==!1&&(n(7,d=!0),n(8,E=V.detail),n(13,k=$),E==!0?n(5,p+=1):E==!1&&n(6,m+=1),setTimeout(()=>{n(7,d=!1),n(3,c+=1)},3e3))};return e.$$set=V=>{"quizType"in V&&n(0,o=V.quizType)},[o,h,l,c,u,p,m,d,E,C,O,B,$,k,i,s,v,I,pe,Fe,Dt,Be,oe,Q,Se]}class Ko extends $e{constructor(t){super(),xe(this,t,qo,Vo,Me,{quizType:0},null,[-1,-1])}}function Go(e){let t,n,i,r,s,o,h,a,l,c,u,p,m,d,E,v,C,O=e[0][0]+"",B,$,H,I,k=e[0][1]+"",J,pe,Fe;function Dt(Q,Se){return Q[0][0]>=Q[0][1]?Jo:Xo}let Be=Dt(e),oe=Be(e);return{c(){t=_("div"),n=_("div"),i=_("div"),r=_("div"),s=_("button"),s.textContent="Classic",o=S(),h=_("button"),h.textContent="Time Countdown",a=S(),l=_("button"),l.textContent="Rush Attack",c=S(),u=_("div"),p=_("div"),m=_("h4"),m.textContent="Previous quiz results",d=S(),oe.c(),E=S(),v=_("p"),C=x("Correct answers = "),B=x(O),$=S(),H=_("br"),I=x(`\r
            Wrong answers = `),J=x(k),y(s,"type","button"),y(s,"class","btn text-dark btn-lg animate__animated animate__pulse"),ne(s,"background-color","#4da6ff"),y(h,"type","button"),y(h,"class","btn text-dark btn-lg animate__animated animate__pulse animate__delay-1s"),ne(h,"background-color","#ffe478"),y(l,"type","button"),y(l,"class","btn text-dark btn-lg"),ne(l,"background-color","#eb564b"),l.disabled=!0,y(r,"class","d-grid gap-3"),y(i,"class","col"),y(m,"class","h4"),y(p,"class","text-center"),y(u,"class","col"),y(n,"class","row"),y(t,"class","container mt-5")},m(Q,Se){A(Q,t,Se),f(t,n),f(n,i),f(i,r),f(r,s),f(r,o),f(r,h),f(r,a),f(r,l),f(n,c),f(n,u),f(u,p),f(p,m),f(p,d),oe.m(p,null),f(p,E),f(p,v),f(v,C),f(v,B),f(v,$),f(v,H),f(v,I),f(v,J),pe||(Fe=[me(s,"click",e[8]),me(h,"click",e[9]),me(l,"click",e[10])],pe=!0)},p(Q,Se){Be!==(Be=Dt(Q))&&(oe.d(1),oe=Be(Q),oe&&(oe.c(),oe.m(p,E))),Se&1&&O!==(O=Q[0][0]+"")&&ie(B,O),Se&1&&k!==(k=Q[0][1]+"")&&ie(J,k)},i:L,o:L,d(Q){Q&&T(t),oe.d(),pe=!1,Le(Fe)}}}function Wo(e){let t,n,i,r;const s=[Qo,Yo],o=[];function h(a,l){return a[3]==!1?0:1}return t=h(e),n=o[t]=s[t](e),{c(){n.c(),i=Ue()},m(a,l){o[t].m(a,l),A(a,i,l),r=!0},p(a,l){let c=t;t=h(a),t===c?o[t].p(a,l):(Te(),U(o[c],1,1,()=>{o[c]=null}),Ie(),n=o[t],n?n.p(a,l):(n=o[t]=s[t](a),n.c()),D(n,1),n.m(i.parentNode,i))},i(a){r||(D(n),r=!0)},o(a){U(n),r=!1},d(a){o[t].d(a),a&&T(i)}}}function Xo(e){let t;return{c(){t=_("p"),t.textContent="Keep practicing!",y(t,"class","h5 text-dark text-opacity-75 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function Jo(e){let t;return{c(){t=_("p"),t.textContent="Good job!",y(t,"class","h5 text-dark text-opacity-75 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function Yo(e){let t,n,i;return n=new Ko({props:{quizType:e[1]}}),n.$on("exit",e[6]),n.$on("finished",e[7]),{c(){t=_("div"),_e(n.$$.fragment),y(t,"class","animate__animated animate__fadeIn animate__delay-1s")},m(r,s){A(r,t,s),ce(n,t,null),i=!0},p(r,s){const o={};s&2&&(o.quizType=r[1]),n.$set(o)},i(r){i||(D(n.$$.fragment,r),i=!0)},o(r){U(n.$$.fragment,r),i=!1},d(r){r&&T(t),ue(n)}}}function Qo(e){let t,n,i,r,s,o,h,a,l,c,u,p=e[0][0]+"",m,d,E,v,C=e[0][1]+"",O;function B(I,k){return I[0][0]>=I[0][1]?ea:Zo}let $=B(e),H=$(e);return{c(){t=_("div"),n=_("div"),i=_("div"),i.innerHTML=`<div class="d-grid gap-3"><button type="button" class="btn btn-lg" style="background-color: #4da6ff;">Classic</button> 
            <button type="button" class="btn btn-lg" style="background-color: #ffe478;">Time Countdown</button> 
            <button type="button" class="btn btn-lg" style="background-color: #eb564b;" disabled="">Rush Attack</button></div>`,r=S(),s=_("div"),o=_("div"),h=_("h4"),h.textContent="Previous quiz results",a=S(),H.c(),l=S(),c=_("p"),u=x("Correct answers = "),m=x(p),d=S(),E=_("br"),v=x(`\r
              Wrong answers = `),O=x(C),y(i,"class","col"),y(h,"class","h4"),y(o,"class","text-center"),y(s,"class","col"),y(n,"class","row"),y(t,"class","container mt-5 animate__animated animate__fadeOut")},m(I,k){A(I,t,k),f(t,n),f(n,i),f(n,r),f(n,s),f(s,o),f(o,h),f(o,a),H.m(o,null),f(o,l),f(o,c),f(c,u),f(c,m),f(c,d),f(c,E),f(c,v),f(c,O)},p(I,k){$!==($=B(I))&&(H.d(1),H=$(I),H&&(H.c(),H.m(o,l))),k&1&&p!==(p=I[0][0]+"")&&ie(m,p),k&1&&C!==(C=I[0][1]+"")&&ie(O,C)},i:L,o:L,d(I){I&&T(t),H.d()}}}function Zo(e){let t;return{c(){t=_("p"),t.textContent="Keep practicing!",y(t,"class","h5 text-dark text-opacity-75 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function ea(e){let t;return{c(){t=_("p"),t.textContent="Good job!",y(t,"class","h5 text-dark text-opacity-75 mt-2")},m(n,i){A(n,t,i)},d(n){n&&T(t)}}}function ta(e){let t,n,i,r;const s=[Wo,Go],o=[];function h(a,l){return a[2]===!0?0:1}return t=h(e),n=o[t]=s[t](e),{c(){n.c(),i=Ue()},m(a,l){o[t].m(a,l),A(a,i,l),r=!0},p(a,[l]){let c=t;t=h(a),t===c?o[t].p(a,l):(Te(),U(o[c],1,1,()=>{o[c]=null}),Ie(),n=o[t],n?n.p(a,l):(n=o[t]=s[t](a),n.c()),D(n,1),n.m(i.parentNode,i))},i(a){r||(D(n),r=!0)},o(a){U(n),r=!1},d(a){o[t].d(a),a&&T(i)}}}function na(e,t,n){let i=en();const r=new Bt(Qn);let s="",o=!1,{previousQuizResults:h=[0,0]}=t,a=!1;Cr(()=>{o==!0&&setTimeout(()=>{n(3,a=!0),i("quizStarted")},500)});const l=d=>{d.detail=="finished"&&i("finished"),n(2,o=!1),n(3,a=!1)},c=d=>{i("quizResults",d.detail)},u=()=>{r.play(),n(1,s="Classic"),n(2,o=!0)},p=()=>{n(1,s="Time Countdown"),n(2,o=!0)},m=()=>{n(1,s="Rush Attack"),n(2,o=!0)};return e.$$set=d=>{"previousQuizResults"in d&&n(0,h=d.previousQuizResults)},[h,s,o,a,i,r,l,c,u,p,m]}class ia extends $e{constructor(t){super(),xe(this,t,na,ta,Me,{previousQuizResults:0})}}function ra(e){let t,n,i,r,s,o,h,a,l,c;return{c(){t=_("footer"),n=_("p"),n.innerHTML=`Powered by Open Trivia Database<br/>
    Designed by Bootstrap 5<br/>
    Animated by Animate.css<br/>
    Data handled by localStorage + Firebase`,i=S(),r=_("div"),s=_("div"),s.innerHTML='<p class="p-3 small">Made by realSkyQuest -</p>',o=S(),h=_("div"),a=_("button"),a.textContent="Github",y(n,"class","p-3 small"),y(s,"class","col-sm-2"),y(a,"type","button"),y(a,"class","btn text-light"),ne(a,"background-color","#4da6ff"),y(h,"class","col-sm-2"),y(r,"class","row justify-content-center align-items-center"),y(t,"class","mt-5 p-4 text-bg-dark text-center")},m(u,p){A(u,t,p),f(t,n),f(t,i),f(t,r),f(r,s),f(r,o),f(r,h),f(h,a),l||(c=me(a,"click",e[0]),l=!0)},p:L,i:L,o:L,d(u){u&&T(t),l=!1,c()}}}function sa(e){return[()=>{window.location.href="https://github.com/realskyquest/quiz-application"}]}class oa extends $e{constructor(t){super(),xe(this,t,sa,ra,Me,{})}}/**
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
 */const Nr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},aa=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],h=e[n++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|h&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,h=o?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=s>>2,u=(s&3)<<4|h>>4;let p=(h&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),i.push(n[c],n[u],n[p],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Nr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):aa(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],h=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const u=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||h==null||l==null||u==null)throw new la;const p=s<<2|h>>4;if(i.push(p),l!==64){const m=h<<4&240|l>>2;if(i.push(m),u!==64){const d=l<<6&192|u;i.push(d)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class la extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ha=function(e){const t=Nr(e);return Dr.encodeByteArray(t,!0)},Pr=function(e){return ha(e).replace(/\./g,"")},Or=function(e){try{return Dr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ua=()=>ca().__FIREBASE_DEFAULTS__,fa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},da=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Or(e[1]);return t&&JSON.parse(t)},pa=()=>{try{return ua()||fa()||da()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ga=e=>{var t;return(t=pa())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function _a(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ya(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function va(){try{return typeof indexedDB=="object"}catch{return!1}}function Ea(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const wa="FirebaseError";class Ae extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=wa,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wt.prototype.create)}}class wt{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Ta(s,i):"Error",h=`${this.serviceName}: ${o} (${r}).`;return new Ae(r,h,i)}}function Ta(e,t){return e.replace(Ia,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Ia=/\{\$([^}]+)}/g;/**
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
 */function Lr(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Aa(e,t){const n=new ka(e,t);return n.subscribe.bind(n)}class ka{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ba(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=wn),r.error===void 0&&(r.error=wn),r.complete===void 0&&(r.complete=wn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ba(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function wn(){}/**
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
 */function tn(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var R;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(R||(R={}));const Sa={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Ca=R.INFO,Ra={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Na=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=Ra[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zn{constructor(t){this.name=t,this._logLevel=Ca,this._logHandler=Na,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in R))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...t),this._logHandler(this,R.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...t),this._logHandler(this,R.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,R.INFO,...t),this._logHandler(this,R.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,R.WARN,...t),this._logHandler(this,R.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...t),this._logHandler(this,R.ERROR,...t)}}const Da=(e,t)=>t.some(n=>e instanceof n);let Vi,qi;function Pa(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oa(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mr=new WeakMap,Un=new WeakMap,Ur=new WeakMap,Tn=new WeakMap,ei=new WeakMap;function La(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ee(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mr.set(n,e)}).catch(()=>{}),ei.set(t,e),t}function Ma(e){if(Un.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Un.set(e,t)}let xn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Un.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ur.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ua(e){xn=e(xn)}function xa(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(In(this),t,...n);return Ur.set(i,t.sort?t.sort():[t]),Ee(i)}:Oa().includes(e)?function(...t){return e.apply(In(this),t),Ee(Mr.get(this))}:function(...t){return Ee(e.apply(In(this),t))}}function $a(e){return typeof e=="function"?xa(e):(e instanceof IDBTransaction&&Ma(e),Da(e,Pa())?new Proxy(e,xn):e)}function Ee(e){if(e instanceof IDBRequest)return La(e);if(Tn.has(e))return Tn.get(e);const t=$a(e);return t!==e&&(Tn.set(e,t),ei.set(t,e)),t}const In=e=>ei.get(e);function Fa(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),h=Ee(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Ee(o.result),a.oldVersion,a.newVersion,Ee(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),h.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),h}const Ba=["get","getKey","getAll","getAllKeys","count"],Ha=["put","add","delete","clear"],An=new Map;function Ki(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(An.get(t))return An.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Ha.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Ba.includes(n)))return;const s=async function(o,...h){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return i&&(l=l.index(h.shift())),(await Promise.all([l[n](...h),r&&a.done]))[0]};return An.set(t,s),s}Ua(e=>({...e,get:(t,n,i)=>Ki(t,n)||e.get(t,n,i),has:(t,n)=>!!Ki(t,n)||e.has(t,n)}));/**
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
 */class ja{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(za(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function za(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $n="@firebase/app",Gi="0.9.13";/**
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
 */const Oe=new Zn("@firebase/app"),Va="@firebase/app-compat",qa="@firebase/analytics-compat",Ka="@firebase/analytics",Ga="@firebase/app-check-compat",Wa="@firebase/app-check",Xa="@firebase/auth",Ja="@firebase/auth-compat",Ya="@firebase/database",Qa="@firebase/database-compat",Za="@firebase/functions",el="@firebase/functions-compat",tl="@firebase/installations",nl="@firebase/installations-compat",il="@firebase/messaging",rl="@firebase/messaging-compat",sl="@firebase/performance",ol="@firebase/performance-compat",al="@firebase/remote-config",ll="@firebase/remote-config-compat",hl="@firebase/storage",cl="@firebase/storage-compat",ul="@firebase/firestore",fl="@firebase/firestore-compat",dl="firebase",pl="9.23.0",gl={[$n]:"fire-core",[Va]:"fire-core-compat",[Ka]:"fire-analytics",[qa]:"fire-analytics-compat",[Wa]:"fire-app-check",[Ga]:"fire-app-check-compat",[Xa]:"fire-auth",[Ja]:"fire-auth-compat",[Ya]:"fire-rtdb",[Qa]:"fire-rtdb-compat",[Za]:"fire-fn",[el]:"fire-fn-compat",[tl]:"fire-iid",[nl]:"fire-iid-compat",[il]:"fire-fcm",[rl]:"fire-fcm-compat",[sl]:"fire-perf",[ol]:"fire-perf-compat",[al]:"fire-rc",[ll]:"fire-rc-compat",[hl]:"fire-gcs",[cl]:"fire-gcs-compat",[ul]:"fire-fst",[fl]:"fire-fst-compat","fire-js":"fire-js",[dl]:"fire-js-all"};/**
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
 */const ml=new Map,Wi=new Map;function _l(e,t){try{e.container.addComponent(t)}catch(n){Oe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ye(e){const t=e.name;if(Wi.has(t))return Oe.debug(`There were multiple attempts to register component ${t}.`),!1;Wi.set(t,e);for(const n of ml.values())_l(n,e);return!0}/**
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
 */const yl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ti=new wt("app","Firebase",yl);/**
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
 */const nn=pl;function we(e,t,n){var i;let r=(i=gl[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const h=[`Unable to register library "${r}" with version "${t}":`];s&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&h.push("and"),o&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Oe.warn(h.join(" "));return}Ye(new Je(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const vl="firebase-heartbeat-database",El=1,ct="firebase-heartbeat-store";let kn=null;function xr(){return kn||(kn=Fa(vl,El,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ct)}}}).catch(e=>{throw ti.create("idb-open",{originalErrorMessage:e.message})})),kn}async function wl(e){try{return await(await xr()).transaction(ct).objectStore(ct).get($r(e))}catch(t){if(t instanceof Ae)Oe.warn(t.message);else{const n=ti.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(n.message)}}}async function Xi(e,t){try{const i=(await xr()).transaction(ct,"readwrite");await i.objectStore(ct).put(t,$r(e)),await i.done}catch(n){if(n instanceof Ae)Oe.warn(n.message);else{const i=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oe.warn(i.message)}}}function $r(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Tl=1024,Il=30*24*60*60*1e3;class Al{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ji();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Il}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ji(),{heartbeatsToSend:n,unsentEntries:i}=kl(this._heartbeatsCache.heartbeats),r=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ji(){return new Date().toISOString().substring(0,10)}function kl(e,t=Tl){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Yi(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yi(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class bl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return va()?Ea().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Yi(e){return Pr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Sl(e){Ye(new Je("platform-logger",t=>new ja(t),"PRIVATE")),Ye(new Je("heartbeat",t=>new Al(t),"PRIVATE")),we($n,Gi,e),we($n,Gi,"esm2017"),we("fire-js","")}Sl("");var Cl="firebase",Rl="9.23.0";/**
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
 */we(Cl,Rl,"app");function Fr(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function Br(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nl=Br,Hr=new wt("auth","Firebase",Br());/**
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
 */const zt=new Zn("@firebase/auth");function Dl(e,...t){zt.logLevel<=R.WARN&&zt.warn(`Auth (${nn}): ${e}`,...t)}function Ft(e,...t){zt.logLevel<=R.ERROR&&zt.error(`Auth (${nn}): ${e}`,...t)}/**
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
 */function Qi(e,...t){throw ii(e,...t)}function ni(e,...t){return ii(e,...t)}function Pl(e,t,n){const i=Object.assign(Object.assign({},Nl()),{[t]:n});return new wt("auth","Firebase",i).create(t,{appName:e.name})}function ii(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Hr.create(e,...t)}function N(e,t,...n){if(!e)throw ii(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ft(t),new Error(t)}function Vt(e,t){e||ot(t)}function Ol(){return Zi()==="http:"||Zi()==="https:"}function Zi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Ll(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ol()||_a()||"connection"in navigator)?navigator.onLine:!0}function Ml(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Tt{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=ma()||ya()}get(){return Ll()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(e,t){Vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class jr{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $l=new Tt(3e4,6e4);function Fl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ri(e,t,n,i,r={}){return zr(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const h=Lr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),jr.fetch()(Vr(e,e.config.apiHost,n,h),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function zr(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},xl),t);try{const r=new Bl(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pt(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const h=s.ok?o.errorMessage:o.error.message,[a,l]=h.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pt(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Pt(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Pt(e,"user-disabled",o);const c=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pl(e,c,l);Qi(e,c)}}catch(r){if(r instanceof Ae)throw r;Qi(e,"network-request-failed",{message:String(r)})}}function Vr(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Ul(e.config,r):`${e.config.apiScheme}://${r}`}class Bl{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ni(this.auth,"network-request-failed")),$l.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ni(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Hl(e,t){return ri(e,"POST","/v1/accounts:delete",t)}async function jl(e,t){return ri(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function at(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zl(e,t=!1){const n=tn(e),i=await n.getIdToken(t),r=qr(i);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:at(bn(r.auth_time)),issuedAtTime:at(bn(r.iat)),expirationTime:at(bn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bn(e){return Number(e)*1e3}function qr(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Ft("JWT malformed, contained fewer than 3 sections"),null;try{const r=Or(n);return r?JSON.parse(r):(Ft("Failed to decode base64 JWT payload"),null)}catch(r){return Ft("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Vl(e){const t=qr(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fn(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Ae&&ql(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ql({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Kl{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kr{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Fn(e,jl(n,{idToken:i}));N(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Xl(s.providerUserInfo):[],h=Wl(e.providerData,o),a=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(h!=null&&h.length),c=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:h,metadata:new Kr(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}async function Gl(e){const t=tn(e);await qt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wl(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Xl(e){return e.map(t=>{var{providerId:n}=t,i=Fr(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Jl(e,t){const n=await zr(e,{},async()=>{const i=Lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=Vr(e,r,"/v1/token",`key=${s}`),h=await e._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",jr.fetch()(o,{method:"POST",headers:h,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Jl(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ut;return i&&(N(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(N(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(N(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function ve(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ke{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=Fr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return zl(this,t)}reload(){return Gl(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ke(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await qt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fn(this,Hl(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,h,a,l,c;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,d=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(h=n.tenantId)!==null&&h!==void 0?h:void 0,v=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:B,emailVerified:$,isAnonymous:H,providerData:I,stsTokenManager:k}=n;N(B&&k,t,"internal-error");const J=ut.fromJSON(this.name,k);N(typeof B=="string",t,"internal-error"),ve(u,t.name),ve(p,t.name),N(typeof $=="boolean",t,"internal-error"),N(typeof H=="boolean",t,"internal-error"),ve(m,t.name),ve(d,t.name),ve(E,t.name),ve(v,t.name),ve(C,t.name),ve(O,t.name);const pe=new Ke({uid:B,auth:t,email:p,emailVerified:$,displayName:u,isAnonymous:H,photoURL:d,phoneNumber:m,tenantId:E,stsTokenManager:J,createdAt:C,lastLoginAt:O});return I&&Array.isArray(I)&&(pe.providerData=I.map(Fe=>Object.assign({},Fe))),v&&(pe._redirectEventId=v),pe}static async _fromIdTokenResponse(t,n,i=!1){const r=new ut;r.updateFromServerResponse(n);const s=new Ke({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await qt(s),s}}/**
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
 */const er=new Map;function Re(e){Vt(e instanceof Function,"Expected a class definition");let t=er.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,er.set(e,t),t)}/**
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
 */class Gr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Gr.type="NONE";const tr=Gr;/**
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
 */function Sn(e,t,n){return`firebase:${e}:${t}:${n}`}class Ge{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Sn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Sn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ke._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ge(Re(tr),t,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Re(tr);const o=Sn(i,t.config.apiKey,t.name);let h=null;for(const l of n)try{const c=await l._get(o);if(c){const u=Ke._fromJSON(t,c);l!==s&&(h=u),s=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ge(s,t,i):(s=a[0],h&&await s._set(o,h.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ge(s,t,i))}}/**
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
 */function nr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nh(t))return"Blackberry";if(ih(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||Zl(t))&&!t.includes("edge/"))return"Chrome";if(th(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Yl(e=fe()){return/firefox\//i.test(e)}function Ql(e=fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zl(e=fe()){return/crios\//i.test(e)}function eh(e=fe()){return/iemobile/i.test(e)}function th(e=fe()){return/android/i.test(e)}function nh(e=fe()){return/blackberry/i.test(e)}function ih(e=fe()){return/webos/i.test(e)}/**
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
 */function Wr(e,t=[]){let n;switch(e){case"Browser":n=nr(fe());break;case"Worker":n=`${nr(fe())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${nn}/${i}`}async function Xr(e,t){return ri(e,"GET","/v2/recaptchaConfig",Fl(e,t))}function ir(e){return e!==void 0&&e.enterprise!==void 0}class Jr{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function rh(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function sh(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=ni("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",rh().appendChild(i)})}const oh="https://www.google.com/recaptcha/enterprise.js?render=",ah="recaptcha-enterprise",lh="NO_RECAPTCHA";class hh{constructor(t){this.type=ah,this.auth=Yr(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,h)=>{Xr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jr(a);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(a=>{h(a)})})}function r(s,o,h){const a=window.grecaptcha;ir(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(lh)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(h=>{if(!n&&ir(window.grecaptcha))r(h,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sh(oh+h).then(()=>{r(h,s,o)}).catch(a=>{o(a)})}}).catch(h=>{o(h)})})}}/**
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
 */class ch{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,h)=>{try{const a=t(s);o(a)}catch(a){h(a)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class uh{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rr(this),this.idTokenSubscription=new rr(this),this.beforeStateQueue=new ch(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Re(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===h)&&(a!=null&&a.user)&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qt(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ml()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?tn(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(t))})}async initializeRecaptchaConfig(){const t=await Xr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jr(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wt("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Re(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[Re(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,i,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Dl(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(e){return tn(e)}class rr{constructor(t){this.auth=t,this.observer=null,this.addObserver=Aa(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function fh(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Re);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}new Tt(3e4,6e4);/**
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
 */new Tt(2e3,1e4);/**
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
 */new Tt(3e4,6e4);/**
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
 */new Tt(5e3,15e3);var sr="@firebase/auth",or="0.23.2";/**
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
 */class dh{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ph(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gh(e){Ye(new Je("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:h}=i.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:h,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wr(e)},l=new uh(i,r,s,a);return fh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Ye(new Je("auth-internal",t=>{const n=Yr(t.getProvider("auth").getImmediate());return(i=>new dh(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),we(sr,or,ph(e)),we(sr,or,"esm2017")}/**
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
 */const mh=5*60;ga("authIdTokenMaxAge");gh("Browser");var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,si=si||{},w=_h||self;function rn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function It(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function yh(e){return Object.prototype.hasOwnProperty.call(e,Cn)&&e[Cn]||(e[Cn]=++vh)}var Cn="closure_uid_"+(1e9*Math.random()>>>0),vh=0;function Eh(e,t,n){return e.call.apply(e.bind,arguments)}function wh(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function G(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=Eh:G=wh,G.apply(null,arguments)}function Ot(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,r,s){for(var o=Array(arguments.length-2),h=2;h<arguments.length;h++)o[h-2]=arguments[h];return t.prototype[r].apply(i,o)}}function ke(){this.s=this.s,this.o=this.o}var Th=0;ke.prototype.s=!1;ke.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Th!=0)&&yh(this)};ke.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function oi(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ar(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(rn(i)){const r=e.length||0,s=i.length||0;e.length=r+s;for(let o=0;o<s;o++)e[r+o]=i[o]}else e.push(i)}}function W(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var Ih=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",()=>{},t),w.removeEventListener("test",()=>{},t)}catch{}return e}();function ft(e){return/^[\s\xa0]*$/.test(e)}function sn(){var e=w.navigator;return e&&(e=e.userAgent)?e:""}function ae(e){return sn().indexOf(e)!=-1}function ai(e){return ai[" "](e),e}ai[" "]=function(){};function Ah(e,t){var n=_c;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var kh=ae("Opera"),dt=ae("Trident")||ae("MSIE"),Zr=ae("Edge"),Bn=Zr||dt,es=ae("Gecko")&&!(sn().toLowerCase().indexOf("webkit")!=-1&&!ae("Edge"))&&!(ae("Trident")||ae("MSIE"))&&!ae("Edge"),bh=sn().toLowerCase().indexOf("webkit")!=-1&&!ae("Edge");function ts(){var e=w.document;return e?e.documentMode:void 0}e:{var lr="",Rn=function(){var e=sn();if(es)return/rv:([^\);]+)(\)|;)/.exec(e);if(Zr)return/Edge\/([\d\.]+)/.exec(e);if(dt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bh)return/WebKit\/(\S+)/.exec(e);if(kh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Rn&&(lr=Rn?Rn[1]:""),dt){var hr=ts();if(hr!=null&&hr>parseFloat(lr))break e}}w.document&&dt&&ts();function pt(e,t){if(W.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(es){e:{try{ai(t.nodeName);var r=!0;break e}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&pt.$.h.call(this)}}z(pt,W);var Sh={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Ch=0;function Rh(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Ch,this.fa=this.ia=!1}function on(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function li(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Nh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ns(e){const t={};for(const n in e)t[n]=e[n];return t}const cr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function is(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<cr.length;s++)n=cr[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function an(e){this.src=e,this.g={},this.h=0}an.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=jn(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Rh(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};function Hn(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=Qr(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(on(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function jn(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),Nn={};function rs(e,t,n,i,r){if(i&&i.once)return os(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)rs(e,t[s],n,i,r);return null}return n=fi(n),e&&e[At]?e.O(t,n,It(i)?!!i.capture:!!i,r):ss(e,t,n,!1,i,r)}function ss(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=It(r)?!!r.capture:!!r,h=ui(e);if(h||(e[hi]=h=new an(e)),n=h.add(t,n,i,o,s),n.proxy)return n;if(i=Dh(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Ih||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ls(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Dh(){function e(n){return t.call(e.src,e.listener,n)}const t=Ph;return e}function os(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)os(e,t[s],n,i,r);return null}return n=fi(n),e&&e[At]?e.P(t,n,It(i)?!!i.capture:!!i,r):ss(e,t,n,!0,i,r)}function as(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)as(e,t[s],n,i,r);else i=It(i)?!!i.capture:!!i,n=fi(n),e&&e[At]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=jn(s,n,i,r),-1<n&&(on(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=ui(e))&&(t=e.g[t.toString()],e=-1,t&&(e=jn(t,n,i,r)),(n=-1<e?t[e]:null)&&ci(n))}function ci(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[At])Hn(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ls(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ui(t))?(Hn(n,e),n.h==0&&(n.src=null,t[hi]=null)):on(e)}}}function ls(e){return e in Nn?Nn[e]:Nn[e]="on"+e}function Ph(e,t){if(e.fa)e=!0;else{t=new pt(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ci(e),e=n.call(i,t)}return e}function ui(e){return e=e[hi],e instanceof an?e:null}var Dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(e){return typeof e=="function"?e:(e[Dn]||(e[Dn]=function(t){return e.handleEvent(t)}),e[Dn])}function j(){ke.call(this),this.i=new an(this),this.S=this,this.J=null}z(j,ke);j.prototype[At]=!0;j.prototype.removeEventListener=function(e,t,n,i){as(this,e,t,n,i)};function K(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new W(t,e);else if(t instanceof W)t.target=t.target||e;else{var r=t;t=new W(i,e),is(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Lt(o,i,!0,t)&&r}if(o=t.g=e,r=Lt(o,i,!0,t)&&r,r=Lt(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Lt(o,i,!1,t)&&r}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)on(n[i]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};j.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Lt(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var h=o.listener,a=o.la||o.src;o.ia&&Hn(e.i,o),r=h.call(a,i)!==!1&&r}}return r&&!i.defaultPrevented}var di=w.JSON.stringify;class Oh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Lh(){var e=pi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Mh{constructor(){this.h=this.g=null}add(t,n){const i=hs.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var hs=new Oh(()=>new Uh,e=>e.reset());class Uh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function $h(e){w.setTimeout(()=>{throw e},0)}let gt,mt=!1,pi=new Mh,cs=()=>{const e=w.Promise.resolve(void 0);gt=()=>{e.then(Fh)}};var Fh=()=>{for(var e;e=Lh();){try{e.h.call(e.g)}catch(n){$h(n)}var t=hs;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}mt=!1};function ln(e,t){j.call(this),this.h=e||1,this.g=t||w,this.j=G(this.qb,this),this.l=Date.now()}z(ln,j);g=ln.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(gi(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){ln.$.N.call(this),gi(this),delete this.g};function mi(e,t,n){if(typeof e=="function")n&&(e=G(e,n));else if(e&&typeof e.handleEvent=="function")e=G(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function us(e){e.g=mi(()=>{e.g=null,e.i&&(e.i=!1,us(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Bh extends ke{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:us(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(e){ke.call(this),this.h=e,this.g={}}z(_t,ke);var ur=[];function fs(e,t,n,i){Array.isArray(n)||(n&&(ur[0]=n.toString()),n=ur);for(var r=0;r<n.length;r++){var s=rs(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ds(e){li(e.g,function(t,n){this.g.hasOwnProperty(n)&&ci(t)},e),e.g={}}_t.prototype.N=function(){_t.$.N.call(this),ds(this)};_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hn(){this.g=!0}hn.prototype.Ea=function(){this.g=!1};function Hh(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",h=s.split("&"),a=0;a<h.length;a++){var l=h[a].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&u[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function jh(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function Ve(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vh(e,n)+(i?" "+i:"")})}function zh(e,t){e.info(function(){return"TIMEOUT: "+t})}hn.prototype.info=function(){};function Vh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return di(n)}catch{return t}}var Qe={},fr=null;function _i(){return fr=fr||new j}Qe.Ta="serverreachability";function ps(e){W.call(this,Qe.Ta,e)}z(ps,W);function yt(e){const t=_i();K(t,new ps(t))}Qe.STAT_EVENT="statevent";function gs(e,t){W.call(this,Qe.STAT_EVENT,e),this.stat=t}z(gs,W);function X(e){const t=_i();K(t,new gs(t,e))}Qe.Ua="timingevent";function ms(e,t){W.call(this,Qe.Ua,e),this.size=t}z(ms,W);function kt(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var yi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vi(){}vi.prototype.h=null;function dr(e){return e.h||(e.h=e.i())}function Kh(){}var bt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ei(){W.call(this,"d")}z(Ei,W);function wi(){W.call(this,"c")}z(wi,W);var zn;function cn(){}z(cn,vi);cn.prototype.g=function(){return new XMLHttpRequest};cn.prototype.i=function(){return{}};zn=new cn;function St(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new _t(this),this.P=Gh,e=Bn?125:void 0,this.V=new ln(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _s}function _s(){this.i=null,this.g="",this.h=!1}var Gh=45e3,Vn={},Kt={};g=St.prototype;g.setTimeout=function(e){this.P=e};function qn(e,t,n){e.L=1,e.v=fn(ye(t)),e.s=n,e.S=!0,ys(e,null)}function ys(e,t){e.G=Date.now(),Ct(e),e.A=ye(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),bs(n.i,"t",i),e.C=0,n=e.l.J,e.h=new _s,e.g=Gs(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Bh(G(e.Pa,e,e.g),e.O)),fs(e.U,e.g,"readystatechange",e.nb),t=e.I?ns(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),yt(),Hh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&le(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)e:{const c=le(this.g);var t=this.g.Ia();const u=this.g.da();if(!(3>c)&&(c!=3||Bn||this.g&&(this.h.h||this.g.ja()||_r(this.g)))){this.J||c!=4||t==7||(t==8||0>=u?yt(3):yt(2)),un(this);var n=this.g.da();this.ca=n;t:if(vs(this)){var i=_r(this.g);e="";var r=i.length,s=le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),lt(this);var o="";break t}this.h.i=new w.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jh(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var h,a=this.g;if((h=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ft(h)){var l=h;break t}}l=null}if(n=l)Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kn(this,n);else{this.i=!1,this.o=3,X(12),Ne(this),lt(this);break e}}this.S?(Es(this,c,o),Bn&&this.i&&c==3&&(fs(this.U,this.V,"tick",this.mb),this.V.start())):(Ve(this.j,this.m,o,null),Kn(this,o)),c==4&&Ne(this),this.i&&!this.J&&(c==4?zs(this.l,this):(this.i=!1,Ct(this)))}else pc(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),Ne(this),lt(this)}}}catch{}finally{}};function vs(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Es(e,t,n){let i=!0,r;for(;!e.J&&e.C<n.length;)if(r=Wh(e,n),r==Kt){t==4&&(e.o=4,X(14),i=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Vn){e.o=4,X(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Ve(e.j,e.m,r,null),Kn(e,r);vs(e)&&r!=Kt&&r!=Vn&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(t),t.M=!0,X(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),Ne(e),lt(e))}g.mb=function(){if(this.g){var e=le(this.g),t=this.g.ja();this.C<t.length&&(un(this),Es(this,e,t),this.i&&e!=4&&Ct(this))}};function Wh(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Kt:(n=Number(t.substring(n,i)),isNaN(n)?Vn:(i+=1,i+n>t.length?Kt:(t=t.slice(i,i+n),e.C=i+n,t)))}g.cancel=function(){this.J=!0,Ne(this)};function Ct(e){e.Y=Date.now()+e.P,ws(e,e.P)}function ws(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=kt(G(e.lb,e),t)}function un(e){e.B&&(w.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(zh(this.j,this.A),this.L!=2&&(yt(),X(17)),Ne(this),this.o=2,lt(this)):ws(this,this.Y-e)};function lt(e){e.l.H==0||e.J||zs(e.l,e)}function Ne(e){un(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,gi(e.V),ds(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Kn(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Gn(n.i,e))){if(!e.K&&Gn(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Xt(n),mn(n);else break e;bi(n),X(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=kt(G(n.ib,n),6e3));if(1>=Rs(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else De(n,11)}else if((e.K||n.g==e)&&Xt(n),!ft(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const u=l[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=e.g;if(m){const d=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var s=i.i;s.g||d.indexOf("spdy")==-1&&d.indexOf("quic")==-1&&d.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ti(s,s.h),s.h=null))}if(i.F){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(i.Da=E,M(i.I,i.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=Ks(i,i.J?i.pa:null,i.Y),o.K){Ns(i.i,o);var h=o,a=i.L;a&&h.setTimeout(a),h.B&&(un(h),Ct(h)),i.g=o}else Hs(i);0<n.j.length&&_n(n)}else l[0]!="stop"&&l[0]!="close"||De(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?De(n,7):ki(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}yt(4)}catch{}}function Xh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Jh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Ts(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jh(e),i=Xh(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Pe(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Pe){this.h=e.h,Gt(this,e.j),this.s=e.s,this.g=e.g,Wt(this,e.m),this.l=e.l;var t=e.i,n=new vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pr(this,n),this.o=e.o}else e&&(t=String(e).match(Is))?(this.h=!1,Gt(this,t[1]||"",!0),this.s=it(t[2]||""),this.g=it(t[3]||"",!0),Wt(this,t[4]),this.l=it(t[5]||"",!0),pr(this,t[6]||"",!0),this.o=it(t[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}Pe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rt(t,gr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(rt(t,gr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(rt(n,n.charAt(0)=="/"?ec:Zh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",rt(n,nc)),e.join("")};function ye(e){return new Pe(e)}function Gt(e,t,n){e.j=n?it(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pr(e,t,n){t instanceof vt?(e.i=t,ic(e.i,e.h)):(n||(t=rt(t,tc)),e.i=new vt(t,e.h))}function M(e,t,n){e.i.set(t,n)}function fn(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function it(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Qh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gr=/[#\/\?@]/g,Zh=/[#\?:]/g,ec=/[#\?]/g,tc=/[#\?@]/g,nc=/#/g;function vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function be(e){e.g||(e.g=new Map,e.h=0,e.i&&Yh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=vt.prototype;g.add=function(e,t){be(this),this.i=null,e=Ze(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function As(e,t){be(e),t=Ze(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ks(e,t){return be(e),t=Ze(e,t),e.g.has(t)}g.forEach=function(e,t){be(this),this.g.forEach(function(n,i){n.forEach(function(r){e.call(t,r,i,this)},this)},this)};g.ta=function(){be(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let s=0;s<r.length;s++)n.push(t[i])}return n};g.Z=function(e){be(this);let t=[];if(typeof e=="string")ks(this,e)&&(t=t.concat(this.g.get(Ze(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return be(this),this.i=null,e=Ze(this,e),ks(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function bs(e,t,n){As(e,t),0<n.length&&(e.i=null,e.g.set(Ze(e,t),oi(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function Ze(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ic(e,t){t&&!e.j&&(be(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(As(this,i),bs(this,r,n))},e)),e.j=t}var rc=class{constructor(e,t){this.g=e,this.map=t}};function Ss(e){this.l=e||sc,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ka&&w.g.Ka()&&w.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sc=10;function Cs(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Rs(e){return e.h?1:e.g?e.g.size:0}function Gn(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ti(e,t){e.g?e.g.add(t):e.h=t}function Ns(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ss.prototype.cancel=function(){if(this.i=Ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ds(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return oi(e.i)}var oc=class{stringify(e){return w.JSON.stringify(e,void 0)}parse(e){return w.JSON.parse(e,void 0)}};function ac(){this.g=new oc}function lc(e,t,n){const i=n||"";try{Ts(e,function(r,s){let o=r;It(r)&&(o=di(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function hc(e,t){const n=new hn;if(w.Image){const i=new Image;i.onload=Ot(Mt,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ot(Mt,n,i,"TestLoadImage: error",!1,t),i.onabort=Ot(Mt,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ot(Mt,n,i,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Mt(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function dn(e){this.l=e.fc||null,this.j=e.ob||!1}z(dn,vi);dn.prototype.g=function(){return new pn(this.l,this.j)};dn.prototype.i=function(e){return function(){return e}}({});function pn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(pn,j);var Ii=0;g=pn.prototype;g.open=function(e,t){if(this.readyState!=Ii)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Et(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||w).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rt(this)),this.readyState=Ii};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ps(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ps(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Et(this),this.readyState==3&&Ps(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,Rt(this))};g.Ya=function(e){this.g&&(this.response=e,Rt(this))};g.ka=function(){this.g&&Rt(this)};function Rt(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Et(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Et(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var cc=w.JSON.parse;function F(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Os,this.L=this.M=!1}z(F,j);var Os="",uc=/^https?$/i,fc=["POST","PUT"];g=F.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zn.g(),this.C=this.u?dr(this.u):dr(zn),this.g.onreadystatechange=G(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){mr(this,s);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=w.FormData&&e instanceof w.FormData,!(0<=Qr(fc,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Us(this),0<this.B&&((this.L=dc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.ua,this)):this.A=mi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){mr(this,s)}};function dc(e){return dt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function mr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ls(e),gn(e)}function Ls(e){e.F||(e.F=!0,K(e,"complete"),K(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),gn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),F.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Ms(this):this.kb())};g.kb=function(){Ms(this)};function Ms(e){if(e.h&&typeof si<"u"&&(!e.C[1]||le(e)!=4||e.da()!=2)){if(e.v&&le(e)==4)mi(e.La,0,e);else if(K(e,"readystatechange"),le(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var r=String(e.I).match(Is)[1]||null;!r&&w.self&&w.self.location&&(r=w.self.location.protocol.slice(0,-1)),i=!uc.test(r?r.toLowerCase():"")}n=i}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var s=2<le(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ls(e)}}finally{gn(e)}}}}function gn(e,t){if(e.g){Us(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=i}catch{}}}function Us(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function le(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<le(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),cc(t)}};function _r(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Os:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function pc(e){const t={};e=(e.g&&2<=le(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(ft(e[i]))continue;var n=xh(e[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}Nh(t,function(i){return i.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xs(e){let t="";return li(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Ai(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=xs(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function tt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $s(e){this.Ga=0,this.j=[],this.l=new hn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tt("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tt("baseRetryDelayMs",5e3,e),this.hb=tt("retryDelaySeedMs",1e4,e),this.eb=tt("forwardChannelMaxRetries",2,e),this.xa=tt("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ss(e&&e.concurrentRequestLimit),this.Ja=new ac,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=$s.prototype;g.ra=8;g.H=1;function ki(e){if(Fs(e),e.H==3){var t=e.W++,n=ye(e.I);if(M(n,"SID",e.K),M(n,"RID",t),M(n,"TYPE","terminate"),Nt(e,n),t=new St(e,e.l,t),t.L=2,t.v=fn(ye(n)),n=!1,w.navigator&&w.navigator.sendBeacon)try{n=w.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=Gs(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ct(t)}qs(e)}function mn(e){e.g&&(Si(e),e.g.cancel(),e.g=null)}function Fs(e){mn(e),e.u&&(w.clearTimeout(e.u),e.u=null),Xt(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function _n(e){if(!Cs(e.i)&&!e.m){e.m=!0;var t=e.Na;gt||cs(),mt||(gt(),mt=!0),pi.add(t,e),e.C=0}}function gc(e,t){return Rs(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=kt(G(e.Na,e,t),Vs(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new St(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ns(s),is(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Bs(this,r,t),n=ye(this.I),M(n,"RID",e),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),Nt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(xs(s)))+"&"+t:this.o&&Ai(n,this.o,s)),Ti(this.i,r),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",t),M(n,"SID","null"),r.aa=!0,qn(r,n,null)):qn(r,n,t),this.H=2}}else this.H==3&&(e?yr(this,e):this.j.length==0||Cs(this.i)||yr(this))};function yr(e,t){var n;t?n=t.m:n=e.W++;const i=ye(e.I);M(i,"SID",e.K),M(i,"RID",n),M(i,"AID",e.V),Nt(e,i),e.o&&e.s&&Ai(i,e.o,e.s),n=new St(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Bs(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ti(e.i,n),qn(n,i,t)}function Nt(e,t){e.na&&li(e.na,function(n,i){M(t,i,n)}),e.h&&Ts({},function(n,i){M(t,i,n)})}function Bs(e,t,n){n=Math.min(e.j.length,n);var i=e.h?G(e.h.Va,e.h,e):null;e:{var r=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let h=!0;for(let a=0;a<n;a++){let l=r[a].g;const c=r[a].map;if(l-=s,0>l)s=Math.max(0,r[a].g-100),h=!1;else try{lc(c,o,"req"+l+"_")}catch{i&&i(c)}}if(h){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Hs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;gt||cs(),mt||(gt(),mt=!0),pi.add(t,e),e.A=0}}function bi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=kt(G(e.Ma,e),Vs(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,js(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=kt(G(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,X(10),mn(this),js(this))};function Si(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function js(e){e.g=new St(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ye(e.wa);M(t,"RID","rpc"),M(t,"SID",e.K),M(t,"AID",e.V),M(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&M(t,"TO",e.qa),M(t,"TYPE","xmlhttp"),Nt(e,t),e.o&&e.s&&Ai(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=fn(ye(t)),n.s=null,n.S=!0,ys(n,e)}g.ib=function(){this.v!=null&&(this.v=null,mn(this),bi(this),X(19))};function Xt(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function zs(e,t){var n=null;if(e.g==t){Xt(e),Si(e),e.g=null;var i=2}else if(Gn(e.i,t))n=t.F,Ns(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;i=_i(),K(i,new ms(i,n)),_n(e)}else Hs(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(i==1&&gc(e,t)||i==2&&bi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:De(e,5);break;case 4:De(e,10);break;case 3:De(e,6);break;default:De(e,2)}}}function Vs(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function De(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=G(e.pb,e);n||(n=new Pe("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Gt(n,"https"),fn(n)),hc(n.toString(),i)}else X(2);e.H=0,e.h&&e.h.za(t),qs(e),Fs(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),X(2)):(this.l.info("Failed to ping google.com"),X(1))};function qs(e){if(e.H=0,e.ma=[],e.h){const t=Ds(e.i);(t.length!=0||e.j.length!=0)&&(ar(e.ma,t),ar(e.ma,e.j),e.i.i.length=0,oi(e.j),e.j.length=0),e.h.ya()}}function Ks(e,t,n){var i=n instanceof Pe?ye(n):new Pe(n);if(i.g!="")t&&(i.g=t+"."+i.g),Wt(i,i.m);else{var r=w.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Pe(null);i&&Gt(s,i),t&&(s.g=t),r&&Wt(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&M(i,n,t),M(i,"VER",e.ra),Nt(e,i),i}function Gs(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new F(new dn({ob:!0})):new F(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ws(){}g=Ws.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function se(e,t){j.call(this),this.g=new $s(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ft(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ft(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new et(this)}z(se,j);se.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;X(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ks(e,null,e.Y),_n(e)};se.prototype.close=function(){ki(this.g)};se.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=di(e),e=n);t.j.push(new rc(t.fb++,e)),t.H==3&&_n(t)};se.prototype.N=function(){this.g.h=null,delete this.j,ki(this.g),delete this.g,se.$.N.call(this)};function Xs(e){Ei.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Xs,Ei);function Js(){wi.call(this),this.status=1}z(Js,wi);function et(e){this.g=e}z(et,Ws);et.prototype.Ba=function(){K(this.g,"a")};et.prototype.Aa=function(e){K(this.g,new Xs(e))};et.prototype.za=function(e){K(this.g,new Js)};et.prototype.ya=function(){K(this.g,"b")};function mc(){this.blockSize=-1}function de(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(de,mc);de.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pn(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}de.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(r==0)for(;s<=n;)Pn(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){Pn(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){Pn(this,i),r=0;break}}this.h=r,this.i+=t};de.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function P(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=e[r]|0;i&&s==t||(n[r]=s,i=!1)}this.g=n}var _c={};function Ci(e){return-128<=e&&128>e?Ah(e,function(t){return new P([t|0],0>t?-1:0)}):new P([e|0],0>e?-1:0)}function he(e){if(isNaN(e)||!isFinite(e))return We;if(0>e)return q(he(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Wn;return new P(t,0)}function Ys(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return q(Ys(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=he(Math.pow(t,8)),i=We,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=he(Math.pow(t,s)),i=i.R(s).add(he(o))):(i=i.R(n),i=i.add(he(o)))}return i}var Wn=4294967296,We=Ci(0),Xn=Ci(1),vr=Ci(16777216);g=P.prototype;g.ea=function(){if(re(this))return-q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Wn+i)*t,t*=Wn}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(ge(this))return"0";if(re(this))return"-"+q(this).toString(e);for(var t=he(Math.pow(e,6)),n=this,i="";;){var r=Yt(n,t).g;n=Jt(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,ge(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function ge(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function re(e){return e.h==-1}g.X=function(e){return e=Jt(this,e),re(e)?-1:ge(e)?0:1};function q(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new P(n,~e.h).add(Xn)}g.abs=function(){return re(this)?q(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(this.D(r)&65535)+(e.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new P(n,n[n.length-1]&-2147483648?-1:0)};function Jt(e,t){return e.add(q(t))}g.R=function(e){if(ge(this)||ge(e))return We;if(re(this))return re(e)?q(this).R(q(e)):q(q(this).R(e));if(re(e))return q(this.R(q(e)));if(0>this.X(vr)&&0>e.X(vr))return he(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,h=e.D(r)>>>16,a=e.D(r)&65535;n[2*i+2*r]+=o*a,Ut(n,2*i+2*r),n[2*i+2*r+1]+=s*a,Ut(n,2*i+2*r+1),n[2*i+2*r+1]+=o*h,Ut(n,2*i+2*r+1),n[2*i+2*r+2]+=s*h,Ut(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new P(n,0)};function Ut(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nt(e,t){this.g=e,this.h=t}function Yt(e,t){if(ge(t))throw Error("division by zero");if(ge(e))return new nt(We,We);if(re(e))return t=Yt(q(e),t),new nt(q(t.g),q(t.h));if(re(t))return t=Yt(e,q(t)),new nt(q(t.g),t.h);if(30<e.g.length){if(re(e)||re(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Xn,i=t;0>=i.X(e);)n=Er(n),i=Er(i);var r=je(n,1),s=je(i,1);for(i=je(i,2),n=je(n,2);!ge(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=je(i,1),n=je(n,1)}return t=Jt(e,r.R(t)),new nt(r,t)}for(r=We;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=he(n),o=s.R(t);re(o)||0<o.X(e);)n-=i,s=he(n),o=s.R(t);ge(s)&&(s=Xn),r=r.add(s),e=Jt(e,o)}return new nt(r,e)}g.gb=function(e){return Yt(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new P(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new P(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new P(n,this.h^e.h)};function Er(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new P(n,e.h)}function je(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new P(r,e.h)}se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;yi.NO_ERROR=0;yi.TIMEOUT=8;yi.HTTP_ERROR=6;qh.COMPLETE="complete";Kh.EventType=bt;bt.OPEN="a";bt.CLOSE="b";bt.ERROR="c";bt.MESSAGE="d";j.prototype.listen=j.prototype.O;F.prototype.listenOnce=F.prototype.P;F.prototype.getLastError=F.prototype.Sa;F.prototype.getLastErrorCode=F.prototype.Ia;F.prototype.getStatus=F.prototype.da;F.prototype.getResponseJson=F.prototype.Wa;F.prototype.getResponseText=F.prototype.ja;F.prototype.send=F.prototype.ha;F.prototype.setWithCredentials=F.prototype.Oa;de.prototype.digest=de.prototype.l;de.prototype.reset=de.prototype.reset;de.prototype.update=de.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=he;P.fromString=Ys;var yc=P;const wr="@firebase/firestore";/**
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
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let yn="9.23.0";/**
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
 */const Qt=new Zn("@firebase/firestore");function te(e,...t){if(Qt.logLevel<=R.DEBUG){const n=t.map(Qs);Qt.debug(`Firestore (${yn}): ${e}`,...n)}}function Ri(e,...t){if(Qt.logLevel<=R.ERROR){const n=t.map(Qs);Qt.error(`Firestore (${yn}): ${e}`,...n)}}function Qs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function Zs(e="Unexpected state"){const t=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: `+e;throw Ri(t),new Error(t)}function Jn(e,t){e||Zs()}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Ae{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xe{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class vc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ec{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class wc{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let s=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xe,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await r(this.currentUser)})},h=a=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>h(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?h(a):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xe)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Jn(typeof i.accessToken=="string"),new vc(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Jn(t===null||typeof t=="string"),new Y(t)}}class Tc{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ic{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Tc(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ac{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kc{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Jn(typeof n.token=="string"),this.T=n.token,new Ac(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bc(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Sc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=bc(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function eo(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(t,n,i,r,s,o,h,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=h,this.longPollingOptions=a,this.useFetchStreams=l}}class Zt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Tr,b;(b=Tr||(Tr={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new yc([4294967295,4294967295],0);function On(){return typeof document<"u"?document:null}/**
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
 */class Rc{constructor(t,n,i=1e3,r=1.5,s=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-i);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Ni{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,h=new Ni(t,n,o,r,s);return h.start(i),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Z.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nc(e,t){if(Ri("AsyncQueue",`${t}: ${e}`),eo(e))return new ee(Z.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Dc{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Y.UNAUTHENTICATED,this.clientId=Sc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{te("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(te("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(Z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Nc(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
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
 */function to(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ir=new Map;function Pc(e,t,n,i){if(t===!0&&i===!0)throw new ee(Z.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Ar{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new ee(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ee(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=to((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class Oc{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ar({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ee(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ar(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ec;switch(n.type){case"firstParty":return new Ic(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ee(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ir.get(t);n&&(te("ComponentProvider","Removing Datastore"),Ir.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Lc{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Rc(this,"async_queue_retry"),this.Xc=()=>{const n=On();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=On();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=On();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Xe;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!eo(t))throw t;te("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ri("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=Ni.createAndSchedule(this,t,n,i,s=>this.na(s));return this.zc.push(r),r}Zc(){this.Wc&&Zs()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Mc extends Oc{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new Lc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uc(this),this._firestoreClient.terminate()}}function Uc(e){var t,n,i;const r=e._freezeSettings(),s=function(o,h,a,l){return new Cc(o,h,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,to(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Dc(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){yn=n})(nn),Ye(new Je("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Mc(new wc(n.getProvider("auth-internal")),new kc(n.getProvider("app-check-internal")),function(h,a){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(h.options.projectId,a)}(s,i),s);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),we(wr,"3.13.0",e),we(wr,"3.13.0","esm2017")})();function xc(e){let t,n,i,r,s,o,h;return n=new po({}),r=new ia({props:{previousQuizResults:e[1]}}),r.$on("quizResults",e[2]),r.$on("quizStarted",e[3]),r.$on("finished",e[4]),o=new oa({}),{c(){t=_("main"),_e(n.$$.fragment),i=S(),_e(r.$$.fragment),s=S(),_e(o.$$.fragment)},m(a,l){A(a,t,l),ce(n,t,null),f(t,i),ce(r,t,null),f(t,s),ce(o,t,null),h=!0},p(a,[l]){const c={};l&2&&(c.previousQuizResults=a[1]),r.$set(c)},i(a){h||(D(n.$$.fragment,a),D(r.$$.fragment,a),D(o.$$.fragment,a),h=!0)},o(a){U(n.$$.fragment,a),U(r.$$.fragment,a),U(o.$$.fragment,a),h=!1},d(a){a&&T(t),ue(n),ue(r),ue(o)}}}function $c(e,t,n){let i=!1,r=[0,0];return[i,r,a=>{n(1,r=a.detail)},()=>{n(0,i=!0)},()=>{n(0,i=!1)}]}class Fc extends $e{constructor(t){super(),xe(this,t,$c,xc,Me,{})}}new Fc({target:document.getElementById("app")});
