import{S as se,i as ae,s as le,w as oe,a as E,l as m,r as P,e as te,x as ne,c as w,m as p,n as _,h as o,u as I,p as c,M as ie,y as ce,b as x,N as l,f as ue,t as fe,B as me,E as pe,v as _e}from"../../chunks/index-95005367.js";import{S as de}from"../../chunks/SEO-c94e67c8.js";import{w as he}from"../../chunks/BannerPromo.svelte_svelte_type_style_lang-4e48ccc0.js";import"../../chunks/navigation-490fb908.js";import{L as re}from"../../chunks/logo-white-1c91df9c.js";/* empty css                       */import"../../chunks/stores-15d05184.js";import"../../chunks/singletons-7d13fefd.js";function be(i){let e,r;return{c(){e=m("span"),r=P("Page not found"),this.h()},l(a){e=p(a,"SPAN",{class:!0});var s=_(e);r=I(s,"Page not found"),s.forEach(o),this.h()},h(){c(e,"class","uppercase")},m(a,s){x(a,e,s),l(e,r)},p:pe,d(a){a&&o(e)}}}function ve(i){let e,r,a;return{c(){e=m("span"),r=P("Error: "),a=P(i[0])},l(s){e=p(s,"SPAN",{});var n=_(e);r=I(n,"Error: "),a=I(n,i[0]),n.forEach(o)},m(s,n){x(s,e,n),l(e,r),l(e,a)},p(s,n){n&1&&_e(a,s[0])},d(s){s&&o(e)}}}function Ee(i){let e;return{c(){e=P("Requested page wasn't found")},l(r){e=I(r,"Requested page wasn't found")},m(r,a){x(r,e,a)},d(r){r&&o(e)}}}function we(i){let e;return{c(){e=P("Error Message")},l(r){e=I(r,"Error Message")},m(r,a){x(r,e,a)},d(r){r&&o(e)}}}function xe(i){let e,r,a,s,n,f,g,N,L,y,F,O,k,U,S,Y,$,z,G,b,A,T,W,q,R,j,B;e=new de({props:{title:`${i[0]}`,noindex:!0,description:`Error: ${i[0]}`,schemas:[he],canonical:"/"}});function J(t,u){return t[0]===404?ve:be}let C=J(i),d=C(i);function K(t,u){return t[1]?we:Ee}let D=K(i),v=D(i);return{c(){oe(e.$$.fragment),r=E(),a=E(),s=m("main"),n=m("div"),f=m("div"),g=m("picture"),N=m("source"),L=E(),y=m("img"),O=E(),k=m("h1"),d.c(),U=E(),S=m("p"),v.c(),Y=E(),$=m("p"),z=P("You will be redirected to main site in 10 seconds"),G=E(),b=m("a"),A=m("span"),T=P("Back to Home"),W=E(),q=m("div"),R=E(),j=te(),this.h()},l(t){ne(e.$$.fragment,t),r=w(t),a=w(t),s=p(t,"MAIN",{class:!0,id:!0});var u=_(s);n=p(u,"DIV",{class:!0});var M=_(n);f=p(M,"DIV",{class:!0});var h=_(f);g=p(h,"PICTURE",{});var H=_(g);N=p(H,"SOURCE",{srcset:!0,type:!0}),L=w(H),y=p(H,"IMG",{src:!0,class:!0,alt:!0}),H.forEach(o),O=w(h),k=p(h,"H1",{class:!0});var Q=_(k);d.l(Q),Q.forEach(o),U=w(h),S=p(h,"P",{class:!0});var X=_(S);v.l(X),X.forEach(o),Y=w(h),$=p(h,"P",{class:!0});var Z=_($);z=I(Z,"You will be redirected to main site in 10 seconds"),Z.forEach(o),G=w(h),b=p(h,"A",{href:!0,class:!0});var V=_(b);A=p(V,"SPAN",{class:!0});var ee=_(A);T=I(ee,"Back to Home"),ee.forEach(o),W=w(V),q=p(V,"DIV",{class:!0}),_(q).forEach(o),V.forEach(o),h.forEach(o),M.forEach(o),u.forEach(o),R=w(t),j=te(),this.h()},h(){c(N,"srcset","$"+re),c(N,"type","image/webp"),ie(y.src,F="$"+re)||c(y,"src",F),c(y,"class","w-12 h-auto"),c(y,"alt","AboutImage"),c(k,"class","title text-white text-6xl md:text-8xl font-black"),c(S,"class","text-thin art text-rose-600 text-md font-medium"),c($,"class","text-thin art text-white text-xs font-light"),c(A,"class","font-bold text-white"),c(q,"class","i-ph:caret-right text-white"),c(b,"href","/"),c(b,"class","w-auto h-auto py-2 px-4 border hover:bg-zinc-900 flex justify-between items-center mt-4"),c(f,"class","flex flex-col wrapper-choose w-auto h-auto"),c(n,"class","flex w-full h-auto justify-center items-center"),c(s,"class","flex justify-center items-center error-page w-full h-screen md:h-screen bg-[#151515]"),c(s,"id","error-page")},m(t,u){ce(e,t,u),x(t,r,u),x(t,a,u),x(t,s,u),l(s,n),l(n,f),l(f,g),l(g,N),l(g,L),l(g,y),l(f,O),l(f,k),d.m(k,null),l(f,U),l(f,S),v.m(S,null),l(f,Y),l(f,$),l($,z),l(f,G),l(f,b),l(b,A),l(A,T),l(b,W),l(b,q),x(t,R,u),x(t,j,u),B=!0},p(t,[u]){const M={};u&1&&(M.title=`${t[0]}`),u&1&&(M.description=`Error: ${t[0]}`),e.$set(M),C===(C=J(t))&&d?d.p(t,u):(d.d(1),d=C(t),d&&(d.c(),d.m(k,null))),D!==(D=K(t))&&(v.d(1),v=D(t),v&&(v.c(),v.m(S,null)))},i(t){B||(ue(e.$$.fragment,t),B=!0)},o(t){fe(e.$$.fragment,t),B=!1},d(t){me(e,t),t&&o(r),t&&o(a),t&&o(s),d.d(),v.d(),t&&o(R),t&&o(j)}}}function Ne({error:i,status:e}){return{props:{status:e,error:i.message}}}const qe=!1;function ge(i,e,r){let{status:a}=e,{error:s}=e;return i.$$set=n=>{"status"in n&&r(0,a=n.status),"error"in n&&r(1,s=n.error)},[a,s]}class Re extends se{constructor(e){super(),ae(this,e,ge,xe,le,{status:0,error:1})}}export{Re as default,Ne as load,qe as prerender};
