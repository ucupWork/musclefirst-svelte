function k(){}const X=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function lt(){return Object.create(null)}function A(t){t.forEach(ut)}function q(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Qt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function Et(t){return Object.keys(t).length===0}function At(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Vt(t,e,n){t.$$.on_destroy.push(At(e,n))}function Xt(t,e,n,i){if(t){const r=ft(t,e,n,i);return t[0](r)}}function ft(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function Yt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|r[c];return o}return e.dirty|r}return e.dirty}function Zt(t,e,n,i,r,o){if(r){const s=ft(e,n,i,o);t.p(s,r)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ie(t){return t==null?"":t}function se(t,e,n){return t.set(n),e}function re(t){return t&&q(t.destroy)?t.destroy:k}const _t=typeof window<"u";let Y=_t?()=>window.performance.now():()=>Date.now(),Z=_t?t=>requestAnimationFrame(t):k;const S=new Set;function dt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Z(dt)}function tt(t){let e;return S.size===0&&Z(dt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let W=!1;function Nt(){W=!0}function St(){W=!1}function Tt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=a?r+1:Tt(1,r,u=>e[n[u]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,r=Math.max(f,r)}const o=[],s=[];let c=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<o.length&&s[l].claim_order>=o[a].claim_order;)a++;const _=a<o.length?o[a]:null;t.insertBefore(s[l],_)}}function jt(t,e){t.appendChild(e)}function ht(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=et("style");return Dt(ht(t),e),e.sheet}function Dt(t,e){jt(t.head||t,e)}function qt(t,e){if(W){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){W&&!n?qt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function z(t){t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function oe(){return nt(" ")}function ce(){return nt("")}function ae(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ue(t){return function(e){return e.preventDefault(),t.call(this,e)}}function fe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:it(t,i,e[i])}function de(t,e){for(const n in e)it(t,n,e[n])}function he(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:it(t,e,n)}function me(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function pe(t){return t===""?null:+t}function Lt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,r=!1){pt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function gt(t,e,n,i){return yt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ye(t,e,n){return gt(t,e,n,et)}function ge(t,e,n){return gt(t,e,n,mt)}function Ot(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function be(t){return Ot(t," ")}function ot(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function xe(t,e){const n=ot(t,"HTML_TAG_START",0),i=ot(t,"HTML_TAG_END",n);if(n===i)return new ct(void 0,e);pt(t);const r=t.splice(n,i-n+1);z(r[0]),z(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ct(o,e)}function $e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function we(t,e){t.value=e==null?"":e}function ve(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ke(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Ee(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ae(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Rt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=mt(n.nodeName):this.e=et(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(z)}}class ct extends Rt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}const F=new Map;let G=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Ct(e),rules:{}};return F.set(t,n),n}function I(t,e,n,i,r,o,s,c=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*o(m);a+=m*100+`%{${s(g,1-g)}}
`}const _=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Bt(_)}_${c}`,u=ht(t),{stylesheet:d,rules:h}=F.get(u)||zt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,G+=1,f}function U(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),G-=r,G||Ft())}function Ft(){Z(()=>{G||(F.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),F.clear())})}let D;function C(t){D=t}function N(){if(!D)throw new Error("Function called outside component initialization");return D}function Se(t){N().$$.before_update.push(t)}function Te(t){N().$$.on_mount.push(t)}function Me(t){N().$$.after_update.push(t)}function je(t){N().$$.on_destroy.push(t)}function Ce(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=bt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function De(t,e){return N().$$.context.set(t,e),e}function qe(t){return N().$$.context.get(t)}function Pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const j=[],at=[],R=[],Q=[],xt=Promise.resolve();let V=!1;function $t(){V||(V=!0,xt.then(wt))}function He(){return $t(),xt}function T(t){R.push(t)}function Le(t){Q.push(t)}const K=new Set;let O=0;function wt(){const t=D;do{for(;O<j.length;){const e=j[O];O++,C(e),Gt(e.$$)}for(C(null),j.length=0,O=0;at.length;)at.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];K.has(n)||(K.add(n),n())}R.length=0}while(j.length);for(;Q.length;)Q.pop()();V=!1,K.clear(),C(t)}function Gt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let M;function st(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function E(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function Oe(){v={r:0,c:[],p:v}}function Re(){v.r||A(v.c),v=v.p}function vt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function It(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt={duration:0};function Be(t,e,n){let i=e(t,n),r=!1,o,s,c=0;function l(){o&&U(t,o)}function a(){const{delay:f=0,duration:u=300,easing:d=X,tick:h=k,css:y}=i||rt;y&&(o=I(t,0,1,u,f,d,y,c++)),h(0,1);const m=Y()+f,g=m+u;s&&s.abort(),r=!0,T(()=>E(t,!0,"start")),s=tt(b=>{if(r){if(b>=g)return h(1,0),E(t,!0,"end"),l(),r=!1;if(b>=m){const x=d((b-m)/u);h(x,1-x)}}return r})}let _=!1;return{start(){_||(_=!0,U(t),q(i)?(i=i(),st().then(a)):a())},invalidate(){_=!1},end(){r&&(l(),r=!1)}}}function ze(t,e,n){let i=e(t,n),r=!0,o;const s=v;s.r+=1;function c(){const{delay:l=0,duration:a=300,easing:_=X,tick:f=k,css:u}=i||rt;u&&(o=I(t,1,0,a,l,_,u));const d=Y()+l,h=d+a;T(()=>E(t,!1,"start")),tt(y=>{if(r){if(y>=h)return f(0,1),E(t,!1,"end"),--s.r||A(s.c),!1;if(y>=d){const m=_((y-d)/a);f(1-m,m)}}return r})}return q(i)?st().then(()=>{i=i(),c()}):c(),{end(l){l&&i.tick&&i.tick(1,0),r&&(o&&U(t,o),r=!1)}}}function Fe(t,e,n,i){let r=e(t,n),o=i?0:1,s=null,c=null,l=null;function a(){l&&U(t,l)}function _(u,d){const h=u.b-o;return d*=Math.abs(h),{a:o,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:y=X,tick:m=k,css:g}=r||rt,b={start:Y()+d,b:u};u||(b.group=v,v.r+=1),s||c?c=b:(g&&(a(),l=I(t,o,u,h,d,y,g)),u&&m(0,1),s=_(b,h),T(()=>E(t,u,"start")),tt(x=>{if(c&&x>c.start&&(s=_(c,h),c=null,E(t,s.b,"start"),g&&(a(),l=I(t,o,s.b,s.duration,0,y,r.css))),s){if(x>=s.end)m(o=s.b,1-o),E(t,s.b,"end"),c||(s.b?a():--s.group.r||A(s.group.c)),s=null;else if(x>=s.start){const P=x-s.start;o=s.a+s.d*y(P/s.duration),m(o,1-o)}}return!!(s||c)}))}return{run(u){q(r)?st().then(()=>{r=r(),f(u)}):f(u)},end(){a(),s=c=null}}}const Ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ie(t,e){t.d(1),e.delete(t.key)}function Ue(t,e){It(t,1,1,()=>{e.delete(t.key)})}function We(t,e,n,i,r,o,s,c,l,a,_,f){let u=t.length,d=o.length,h=u;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=d;h--;){const p=f(r,o,h),$=n(p);let w=s.get($);w?i&&w.p(p,e):(w=a($,p),w.c()),g.set($,m[h]=w),$ in y&&b.set($,Math.abs(h-y[$]))}const x=new Set,P=new Set;function J(p){vt(p,1),p.m(c,_),s.set(p.key,p),_=p.first,d--}for(;u&&d;){const p=m[d-1],$=t[u-1],w=p.key,H=$.key;p===$?(_=p.first,u--,d--):g.has(H)?!s.has(w)||x.has(w)?J(p):P.has(H)?u--:b.get(w)>b.get(H)?(P.add(w),J(p)):(x.add(H),u--):(l($,s),u--)}for(;u--;){const p=t[u];g.has(p.key)||l(p,s)}for(;d;)J(m[d-1]);return m}function Je(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],c=e[o];if(c){for(const l in s)l in c||(i[l]=1);for(const l in c)r[l]||(n[l]=c[l],r[l]=1);t[o]=c}else for(const l in s)r[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ke(t){return typeof t=="object"&&t!==null?t:{}}function Qe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ve(t){t&&t.c()}function Xe(t,e){t&&t.l(e)}function Ut(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:c}=t.$$;r&&r.m(e,n),i||T(()=>{const l=o.map(ut).filter(q);s?s.push(...l):A(l),t.$$.on_mount=[]}),c.forEach(T)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(j.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,i,r,o,s,c=[-1]){const l=D;C(t);const a=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:r,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lt(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&r(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&Jt(t,f)),u}):[],a.update(),_=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const f=Lt(e.target);a.fragment&&a.fragment.l(f),f.forEach(z)}else a.fragment&&a.fragment.c();e.intro&&vt(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),St(),wt()}C(l)}class Ze{$destroy(){Wt(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{N as $,Ke as A,Wt as B,kt as C,He as D,k as E,At as F,A as G,q as H,Xt as I,Zt as J,te as K,Yt as L,Qt as M,qt as N,Ne as O,Vt as P,qe as Q,ae as R,Ze as S,je as T,Ge as U,ne as V,ee as W,re as X,Pe as Y,ue as Z,fe as _,oe as a,at as a0,Qe as a1,Le as a2,_e as a3,Ce as a4,se as a5,T as a6,mt as a7,ge as a8,Fe as a9,we as aa,le as ab,Ae as ac,ze as ad,Be as ae,Y as af,tt as ag,X as ah,ct as ai,xe as aj,ke as ak,Ee as al,We as am,Ie as an,Ue as ao,pe as ap,me as aq,he as ar,Se as as,de as at,ie as au,Ht as b,be as c,Re as d,ce as e,vt as f,Oe as g,z as h,Ye as i,De as j,Me as k,et as l,ye as m,Lt as n,Te as o,it as p,ve as q,nt as r,Kt as s,It as t,Ot as u,$e as v,Ve as w,Xe as x,Ut as y,Je as z};
