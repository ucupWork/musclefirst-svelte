import{S as I,i as C,s as E,l as o,a as U,m as h,n as p,c as b,h as g,p as s,M as w,b as y,N as d,E as v}from"./index-1f4a59e6.js";function S(u){let e,r,a,i,n,t,m;return{c(){e=o("div"),r=o("span"),a=o("picture"),i=o("source"),n=U(),t=o("img"),this.h()},l(l){e=h(l,"DIV",{class:!0});var c=p(e);r=h(c,"SPAN",{class:!0});var _=p(r);a=h(_,"PICTURE",{});var f=p(a);i=h(f,"SOURCE",{srcset:!0,type:!0}),n=b(f),t=h(f,"IMG",{src:!0,width:!0,height:!0,class:!0,alt:!0}),f.forEach(g),_.forEach(g),c.forEach(g),this.h()},h(){s(i,"srcset",u[0]),s(i,"type","image/webp"),w(t.src,m=u[0])||s(t,"src",m),s(t,"width","640"),s(t,"height","360"),s(t,"class","w-40 h-auto overflow-hidden rounded-md bg-white transition-shadow duration-300 ease-in-out flex items-center justify-center"),s(t,"alt",u[1]),s(r,"class","w-auto h-auto p-2"),s(e,"class","flex justify-center items-center w-full h-full rounded-md shadow-lg p-2 bg-white border")},m(l,c){y(l,e,c),d(e,r),d(r,a),d(a,i),d(a,n),d(a,t)},p(l,[c]){c&1&&s(i,"srcset",l[0]),c&1&&!w(t.src,m=l[0])&&s(t,"src",m),c&2&&s(t,"alt",l[1])},i:v,o:v,d(l){l&&g(e)}}}function j(u,e,r){let{imgUrl:a}=e,{altImg:i}=e;return u.$$set=n=>{"imgUrl"in n&&r(0,a=n.imgUrl),"altImg"in n&&r(1,i=n.altImg)},[a,i]}class M extends I{constructor(e){super(),C(this,e,j,S,E,{imgUrl:0,altImg:1})}}export{M as C};
