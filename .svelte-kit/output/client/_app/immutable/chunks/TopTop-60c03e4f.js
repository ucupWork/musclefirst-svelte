import{S as N,i as O,s as j,a6 as y,e as g,b as B,R as E,f as m,g as C,t as b,d as S,h as d,U,l as q,a7 as w,m as L,n as h,a8 as v,p as c,N as T,a9 as k}from"./index-1f4a59e6.js";import{f as z}from"./index-dbb8795d.js";const{window:_}=U;function x(u){let l,s,r,a,o,n,f,t;return{c(){l=q("button"),s=w("svg"),r=w("path"),this.h()},l(e){l=L(e,"BUTTON",{class:!0});var i=h(l);s=v(i,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var p=h(s);r=v(p,"path",{"fill-rule":!0,d:!0}),h(r).forEach(d),p.forEach(d),i.forEach(d),this.h()},h(){c(r,"fill-rule","evenodd"),c(r,"d","M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"),c(s,"xmlns","http://www.w3.org/2000/svg"),c(s,"width","16"),c(s,"height","16"),c(s,"fill","currentColor"),c(s,"class","w-4 h-4 text-white bi bi-chevron-up"),c(s,"viewBox","0 0 16 16"),c(l,"class",a="fixed "+u[0]+" rounded-xl md:rounded-full mr-3 p-4 w-auto h-auto flex justify-center items-center z-[100] bg-gradient-to-t from-black to-zinc-900 hover:bg-zinc-800")},m(e,i){B(e,l,i),T(l,s),T(s,r),n=!0,f||(t=E(l,"click",u[2]),f=!0)},p(e,i){(!n||i&1&&a!==(a="fixed "+e[0]+" rounded-xl md:rounded-full mr-3 p-4 w-auto h-auto flex justify-center items-center z-[100] bg-gradient-to-t from-black to-zinc-900 hover:bg-zinc-800"))&&c(l,"class",a)},i(e){n||(y(()=>{o||(o=k(l,z,{duration:100},!0)),o.run(1)}),n=!0)},o(e){o||(o=k(l,z,{duration:100},!1)),o.run(0),n=!1},d(e){e&&d(l),e&&o&&o.end(),f=!1,t()}}}function M(u){let l=!1,s=()=>{l=!1},r,a,o,n,f;y(u[3]);let t=u[1]>50&&x(u);return{c(){t&&t.c(),a=g()},l(e){t&&t.l(e),a=g()},m(e,i){t&&t.m(e,i),B(e,a,i),o=!0,n||(f=E(_,"scroll",()=>{l=!0,clearTimeout(r),r=setTimeout(s,100),u[3]()}),n=!0)},p(e,[i]){i&2&&!l&&(l=!0,clearTimeout(r),scrollTo(_.pageXOffset,e[1]),r=setTimeout(s,100)),e[1]>50?t?(t.p(e,i),i&2&&m(t,1)):(t=x(e),t.c(),m(t,1),t.m(a.parentNode,a)):t&&(C(),b(t,1,1,()=>{t=null}),S())},i(e){o||(m(t),o=!0)},o(e){b(t),o=!1},d(e){t&&t.d(e),e&&d(a),n=!1,f()}}}function P(u,l,s){let r,{classes:a=""}=l;const o=()=>window.scrollTo({top:0,behavior:"smooth"});function n(){s(1,r=_.pageYOffset)}return u.$$set=f=>{"classes"in f&&s(0,a=f.classes)},[a,r,o,n]}class Y extends N{constructor(l){super(),O(this,l,P,M,j,{classes:0})}}export{Y as T};
