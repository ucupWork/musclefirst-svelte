import{S as kr,i as br,s as _r,l,r as d,a as m,m as s,n as i,u as h,h as r,c as g,p as e,q as Ke,M as Pe,b as $e,N as t,am as ir,an as or,E as nr,v as Ze,e as cr,ab as Dr,w as na,x as ca,y as ua,f as fa,t as da,B as ha}from"../../chunks/index-95005367.js";import{a as Sr}from"../../chunks/recipe-article-queries-b9b0d8b1.js";import{a as jr}from"../../chunks/recipe-queries-3b8725cc.js";import{c as ur}from"../../chunks/graphql-client-47f6858c.js";import{S as zr}from"../../chunks/SEO-c94e67c8.js";import{w as Tr,o as Vr}from"../../chunks/BannerPromo.svelte_svelte_type_style_lang-4e48ccc0.js";import"../../chunks/navigation-490fb908.js";import{B as Rr}from"../../chunks/Breadcrumbs-f5fe8d7a.js";import{r as ht}from"../../chunks/readable-date-297548ee.js";import"../../chunks/stores-15d05184.js";import"../../chunks/singletons-7d13fefd.js";const fr="/_app/immutable/assets/img-notfound-be16995f.webp";function dr(v,a,o){const n=v.slice();return n[2]=a[o],n}function hr(v,a,o){const n=v.slice();return n[5]=a[o],n}function mr(v,a,o){const n=v.slice();return n[2]=a[o],n}function gr(v,a){let o,n,c,f,p,u,E,b,M,O=(a[2].createdAt?ht(a[2].createdAt):"No Date Now")+"",X,K,y,N=(a[2].title?a[2].title:"No Title")+"",U,Q,z;return{key:v,first:null,c(){o=l("a"),n=l("img"),p=m(),u=l("div"),E=l("div"),b=l("div"),M=l("span"),X=d(O),K=m(),y=l("h2"),U=d(N),Q=m(),this.h()},l(V){o=s(V,"A",{rel:!0,href:!0,class:!0});var T=i(o);n=s(T,"IMG",{role:!0,class:!0,src:!0,alt:!0}),p=g(T),u=s(T,"DIV",{class:!0});var re=i(u);E=s(re,"DIV",{class:!0});var le=i(E);b=s(le,"DIV",{class:!0});var D=i(b);M=s(D,"SPAN",{class:!0});var se=i(M);X=h(se,O),se.forEach(r),K=g(D),y=s(D,"H2",{class:!0});var Y=i(y);U=h(Y,N),Y.forEach(r),D.forEach(r),le.forEach(r),re.forEach(r),Q=g(T),T.forEach(r),this.h()},h(){e(n,"role","presentation"),e(n,"class","object-cover w-full h-auto dark:bg-gray-500"),Pe(n.src,c=a[2].image[0].url?a[2].image[0].url:fr)||e(n,"src",c),e(n,"alt",f=a[2].title?a[2].title:"No Image Found"),e(M,"class","text-xs text-amber-500 font-medium"),e(y,"class","block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight leading-none"),e(b,"class","flex flex-col w-auto h-auto tracking-tighter leading-none text-left mb-4"),e(E,"class","flex flex-col justify-start items-center w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900"),e(u,"class","absolute inset-x-0 bottom-0 w-full h-auto md:h-56 bg-white dark:bg-zinc-900 shadow"),e(o,"rel","noopener noreferrer"),e(o,"href",z=a[2].slug?`/recipes/article/${a[2].slug}`:"/"),e(o,"class","relative col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline w-full h-full shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900"),this.first=o},m(V,T){$e(V,o,T),t(o,n),t(o,p),t(o,u),t(u,E),t(E,b),t(b,M),t(M,X),t(b,K),t(b,y),t(y,U),t(o,Q)},p(V,T){a=V,T&2&&!Pe(n.src,c=a[2].image[0].url?a[2].image[0].url:fr)&&e(n,"src",c),T&2&&f!==(f=a[2].title?a[2].title:"No Image Found")&&e(n,"alt",f),T&2&&O!==(O=(a[2].createdAt?ht(a[2].createdAt):"No Date Now")+"")&&Ze(X,O),T&2&&N!==(N=(a[2].title?a[2].title:"No Title")+"")&&Ze(U,N),T&2&&z!==(z=a[2].slug?`/recipes/article/${a[2].slug}`:"/")&&e(o,"href",z)},d(V){V&&r(o)}}}function pr(v){let a,o=v[2].tags,n=[];for(let c=0;c<o.length;c+=1)n[c]=vr(hr(v,o,c));return{c(){for(let c=0;c<n.length;c+=1)n[c].c();a=cr()},l(c){for(let f=0;f<n.length;f+=1)n[f].l(c);a=cr()},m(c,f){for(let p=0;p<n.length;p+=1)n[p].m(c,f);$e(c,a,f)},p(c,f){if(f&1){o=c[2].tags;let p;for(p=0;p<o.length;p+=1){const u=hr(c,o,p);n[p]?n[p].p(u,f):(n[p]=vr(u),n[p].c(),n[p].m(a.parentNode,a))}for(;p<n.length;p+=1)n[p].d(1);n.length=o.length}},d(c){Dr(n,c),c&&r(a)}}}function vr(v){let a,o=v[5]+"",n;return{c(){a=l("small"),n=d(o),this.h()},l(c){a=s(c,"SMALL",{class:!0});var f=i(a);n=h(f,o),f.forEach(r),this.h()},h(){e(a,"class","text-zinc-900 dark:text-white cursor-pointer")},m(c,f){$e(c,a,f),t(a,n)},p(c,f){f&1&&o!==(o=c[5]+"")&&Ze(n,o)},d(c){c&&r(a)}}}function wr(v,a){let o,n,c,f,p,u,E,b,M=a[2].totalTime+"",O,X,K,y,N,U,Q,z,V=a[2].calories+"",T,re,le,D,se,Y,Be,x,P,L=ht(a[2].date)+"",H,F,ie,he=a[2].name+"",G,Oe,oe,C,Ue,ke,A=a[2].tags&&pr(a);return{key:v,first:null,c(){o=l("a"),n=l("div"),c=l("div"),f=l("div"),p=l("div"),u=l("div"),E=m(),b=l("span"),O=d(M),X=d(" Min"),K=m(),y=l("div"),N=l("div"),U=l("div"),Q=m(),z=l("span"),T=d(V),re=d(" Kcal"),le=m(),D=l("img"),Be=m(),x=l("div"),P=l("span"),H=d(L),F=m(),ie=l("h2"),G=d(he),Oe=m(),oe=l("div"),C=l("div"),A&&A.c(),Ue=m(),this.h()},l(ne){o=s(ne,"A",{rel:!0,href:!0,class:!0});var j=i(o);n=s(j,"DIV",{class:!0});var Z=i(n);c=s(Z,"DIV",{class:!0});var B=i(c);f=s(B,"DIV",{class:!0});var w=i(f);p=s(w,"DIV",{class:!0});var W=i(p);u=s(W,"DIV",{class:!0}),i(u).forEach(r),E=g(W),b=s(W,"SPAN",{class:!0});var Qe=i(b);O=h(Qe,M),X=h(Qe," Min"),Qe.forEach(r),W.forEach(r),w.forEach(r),K=g(B),y=s(B,"DIV",{class:!0});var et=i(y);N=s(et,"DIV",{class:!0});var J=i(N);U=s(J,"DIV",{class:!0}),i(U).forEach(r),Q=g(J),z=s(J,"SPAN",{class:!0});var He=i(z);T=h(He,V),re=h(He," Kcal"),He.forEach(r),J.forEach(r),et.forEach(r),B.forEach(r),Z.forEach(r),le=g(j),D=s(j,"IMG",{role:!0,class:!0,src:!0,alt:!0}),Be=g(j),x=s(j,"DIV",{class:!0});var ce=i(x);P=s(ce,"SPAN",{class:!0});var $=i(P);H=h($,L),$.forEach(r),F=g(ce),ie=s(ce,"H2",{class:!0});var tt=i(ie);G=h(tt,he),tt.forEach(r),Oe=g(ce),oe=s(ce,"DIV",{class:!0});var at=i(oe);C=s(at,"DIV",{class:!0});var ee=i(C);A&&A.l(ee),ee.forEach(r),at.forEach(r),ce.forEach(r),Ue=g(j),j.forEach(r),this.h()},h(){e(u,"class","i-ph:timer text-zinc-900 dark:text-white"),e(b,"class","text-sm font-medium text-zinc-900 dark:text-white"),e(p,"class","bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center"),e(f,"class","col-span-1 md:col-span-1 w-full h-auto flex justify-start items-center"),e(U,"class","i-ph:fork-knife text-zinc-900 dark:text-white"),e(z,"class","text-sm font-medium text-zinc-900 dark:text-white"),e(N,"class","bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center"),e(y,"class","col-span-1 md:col-span-1 w-full h-auto flex justify-end items-center"),e(c,"class","grid grid-cols-2 gap-2 w-full h-auto"),e(n,"class","p-4 space-y-2 bg-white dark:bg-zinc-900 shadow"),e(D,"role","presentation"),e(D,"class","object-cover w-full h-44 dark:bg-gray-500"),Pe(D.src,se=a[2].image[0].url)||e(D,"src",se),e(D,"alt",Y=a[2].name),e(P,"class","text-xs text-amber-500 font-medium"),e(ie,"class","block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight"),e(C,"class","flex flex-row space-x-0"),e(oe,"class","block w-auto h-auto"),e(x,"class","w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900 shadow"),e(o,"rel","noopener noreferrer"),e(o,"href",ke=`/recipes/${a[2].slug}`),e(o,"class","col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900"),this.first=o},m(ne,j){$e(ne,o,j),t(o,n),t(n,c),t(c,f),t(f,p),t(p,u),t(p,E),t(p,b),t(b,O),t(b,X),t(c,K),t(c,y),t(y,N),t(N,U),t(N,Q),t(N,z),t(z,T),t(z,re),t(o,le),t(o,D),t(o,Be),t(o,x),t(x,P),t(P,H),t(x,F),t(x,ie),t(ie,G),t(x,Oe),t(x,oe),t(oe,C),A&&A.m(C,null),t(o,Ue)},p(ne,j){a=ne,j&1&&M!==(M=a[2].totalTime+"")&&Ze(O,M),j&1&&V!==(V=a[2].calories+"")&&Ze(T,V),j&1&&!Pe(D.src,se=a[2].image[0].url)&&e(D,"src",se),j&1&&Y!==(Y=a[2].name)&&e(D,"alt",Y),j&1&&L!==(L=ht(a[2].date)+"")&&Ze(H,L),j&1&&he!==(he=a[2].name+"")&&Ze(G,he),a[2].tags?A?A.p(a,j):(A=pr(a),A.c(),A.m(C,null)):A&&(A.d(1),A=null),j&1&&ke!==(ke=`/recipes/${a[2].slug}`)&&e(o,"href",ke)},d(ne){ne&&r(o),A&&A.d()}}}function Mr(v){let a,o,n,c,f,p="Resep Artikel",u,E,b,M="Kumpulan bentuk artikel dari video yang sudah ada dan di mix dengan produk musclefirst, temukan disini",O,X,K,y=[],N=new Map,U,Q,z,V,T="Resep Kami",re,le,D,se="Kami daftar dari beberapa resep unggulan yang ada, nikmati rasa yang berbeda",Y,Be,x,P,L,H,F,ie,he,G,Oe,oe,C,Ue,ke,A,ne,j,Z,B,w,W,Qe,et,J,He,ce,$,tt,at,ee,mt,gt,be,pt,vt,_e,wt,kt,Ee,bt,_t,ye,Et,yt,xe,xt,At,Ae,It,Dt,Ie,St,jt,De,zt,Tt,me,Vt,Rt,We,ma,Mt,Se,ue,R,ge,Nt,Ct,je,qt,Lt,ze,Kt,Pt,Te,Bt,Ot,Ve,Ut,Qt,Re,Ht,Wt,Me,Ft,Fe,Gt,pe,Jt,Xt,Ge,ga,Yt,Ne,fe,te,ve,Zt,$t,Ce,ea,ta,qe,aa,ra,we,la,sa,Je,pa,ia,lt,oa,Xe,ae=[],va=new Map,st=v[1];const wa=k=>k[2].id;for(let k=0;k<st.length;k+=1){let S=mr(v,st,k),I=wa(S);N.set(I,y[k]=gr(I,S))}let it=v[0];const ka=k=>k[2].id;for(let k=0;k<it.length;k+=1){let S=dr(v,it,k),I=ka(S);va.set(I,ae[k]=wr(I,S))}return{c(){a=l("div"),o=l("div"),n=l("div"),c=l("div"),f=l("h1"),u=d(p),E=m(),b=l("p"),O=d(M),X=m(),K=l("div");for(let k=0;k<y.length;k+=1)y[k].c();U=m(),Q=l("div"),z=l("div"),V=l("h1"),re=d(T),le=m(),D=l("p"),Y=d(se),Be=m(),x=l("div"),P=l("div"),L=l("blockquote"),H=l("section"),F=l("a"),ie=d("@bizzlexo"),he=d(" cemilan buat kalian yang lagi diet, cuma 3 bahan aja loh, protein powder "),G=l("a"),Oe=d("#musclefirst"),oe=d(" @musclefirstofficial "),C=l("a"),Ue=d("\u266C Woman - Doja Cat"),ke=m(),A=l("script"),j=m(),Z=l("div"),B=l("blockquote"),w=l("section"),W=l("a"),Qe=d("@yessbaby98"),et=d(" Tanpa tepung terigu! Empukk dan wangiii\u{1F44D}@musclefirstofficial "),J=l("a"),He=d("#browniescoklat"),ce=m(),$=l("a"),tt=d("#browniesdiet"),at=m(),ee=l("a"),mt=d("#musclefirst"),gt=m(),be=l("a"),pt=d("#wheyprotein"),vt=m(),_e=l("a"),wt=d("#bodyideal"),kt=m(),Ee=l("a"),bt=d("#olahraga"),_t=m(),ye=l("a"),Et=d("#healthysnacks"),yt=m(),xe=l("a"),xt=d("#RamadanKembaliKuat"),At=m(),Ae=l("a"),It=d("#fyp"),Dt=m(),Ie=l("a"),St=d("#fyp\u30C4"),jt=m(),De=l("a"),zt=d("#masukberandafyp"),Tt=m(),me=l("a"),Vt=d("\u266C Love, Maybe - SECRET NUMBER"),Rt=m(),We=l("script"),Mt=m(),Se=l("div"),ue=l("blockquote"),R=l("section"),ge=l("a"),Nt=d("@virgierolettaa"),Ct=d(" cocok buat buka puasa nihh! enak, bikinnya gampang, ga ribet & yg terpenting cocok buat yg lagi diet \u{1F97A}\u{1F496} @musclefirstofficial "),je=l("a"),qt=d("#Musclefirst"),Lt=m(),ze=l("a"),Kt=d("#KulinerSeruRamadan"),Pt=m(),Te=l("a"),Bt=d("#SerunyaRamadan"),Ot=m(),Ve=l("a"),Ut=d("#mochi"),Qt=m(),Re=l("a"),Ht=d("#takjil"),Wt=m(),Me=l("a"),Ft=d("#menuviral"),Fe=l("a"),Gt=m(),pe=l("a"),Jt=d("\u266C Love, Maybe - SECRET NUMBER"),Xt=m(),Ge=l("script"),Yt=m(),Ne=l("div"),fe=l("blockquote"),te=l("section"),ve=l("a"),Zt=d("@vishelajovita"),$t=d(" my favorite flavor of whey is honey banana, high in ptotein and diet friendly\u{1F61A} "),Ce=l("a"),ea=d("#musclefirst"),ta=m(),qe=l("a"),aa=d("#lavatoast"),ra=m(),we=l("a"),la=d("\u266C The Show - Lenka"),sa=m(),Je=l("script"),ia=m(),lt=l("div"),oa=m(),Xe=l("div");for(let k=0;k<ae.length;k+=1)ae[k].c();this.h()},l(k){a=s(k,"DIV",{class:!0});var S=i(a);o=s(S,"DIV",{class:!0});var I=i(o);n=s(I,"DIV",{class:!0});var ba=i(n);c=s(ba,"DIV",{class:!0});var ot=i(c);f=s(ot,"H1",{class:!0});var _a=i(f);u=h(_a,p),_a.forEach(r),E=g(ot),b=s(ot,"P",{class:!0});var Ea=i(b);O=h(Ea,M),Ea.forEach(r),ot.forEach(r),ba.forEach(r),X=g(I),K=s(I,"DIV",{class:!0});var ya=i(K);for(let Ye=0;Ye<y.length;Ye+=1)y[Ye].l(ya);ya.forEach(r),U=g(I),Q=s(I,"DIV",{class:!0});var xa=i(Q);z=s(xa,"DIV",{class:!0});var nt=i(z);V=s(nt,"H1",{class:!0});var Aa=i(V);re=h(Aa,T),Aa.forEach(r),le=g(nt),D=s(nt,"P",{class:!0});var Ia=i(D);Y=h(Ia,se),Ia.forEach(r),nt.forEach(r),xa.forEach(r),Be=g(I),x=s(I,"DIV",{class:!0});var de=i(x);P=s(de,"DIV",{class:!0});var ct=i(P);L=s(ct,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,style:!0});var Da=i(L);H=s(Da,"SECTION",{});var rt=i(H);F=s(rt,"A",{target:!0,rel:!0,title:!0,href:!0});var Sa=i(F);ie=h(Sa,"@bizzlexo"),Sa.forEach(r),he=h(rt," cemilan buat kalian yang lagi diet, cuma 3 bahan aja loh, protein powder "),G=s(rt,"A",{title:!0,target:!0,href:!0});var ja=i(G);Oe=h(ja,"#musclefirst"),ja.forEach(r),oe=h(rt," @musclefirstofficial "),C=s(rt,"A",{target:!0,rel:!0,title:!0,href:!0});var za=i(C);Ue=h(za,"\u266C Woman - Doja Cat"),za.forEach(r),rt.forEach(r),Da.forEach(r),ke=g(ct),A=s(ct,"SCRIPT",{src:!0});var Er=i(A);Er.forEach(r),ct.forEach(r),j=g(de),Z=s(de,"DIV",{class:!0});var ut=i(Z);B=s(ut,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,style:!0});var Ta=i(B);w=s(Ta,"SECTION",{});var _=i(w);W=s(_,"A",{target:!0,rel:!0,title:!0,href:!0});var Va=i(W);Qe=h(Va,"@yessbaby98"),Va.forEach(r),et=h(_," Tanpa tepung terigu! Empukk dan wangiii\u{1F44D}@musclefirstofficial "),J=s(_,"A",{title:!0,target:!0,href:!0});var Ra=i(J);He=h(Ra,"#browniescoklat"),Ra.forEach(r),ce=g(_),$=s(_,"A",{title:!0,target:!0,href:!0});var Ma=i($);tt=h(Ma,"#browniesdiet"),Ma.forEach(r),at=g(_),ee=s(_,"A",{title:!0,target:!0,href:!0});var Na=i(ee);mt=h(Na,"#musclefirst"),Na.forEach(r),gt=g(_),be=s(_,"A",{title:!0,target:!0,href:!0});var Ca=i(be);pt=h(Ca,"#wheyprotein"),Ca.forEach(r),vt=g(_),_e=s(_,"A",{title:!0,target:!0,href:!0});var qa=i(_e);wt=h(qa,"#bodyideal"),qa.forEach(r),kt=g(_),Ee=s(_,"A",{title:!0,target:!0,href:!0});var La=i(Ee);bt=h(La,"#olahraga"),La.forEach(r),_t=g(_),ye=s(_,"A",{title:!0,target:!0,href:!0});var Ka=i(ye);Et=h(Ka,"#healthysnacks"),Ka.forEach(r),yt=g(_),xe=s(_,"A",{title:!0,target:!0,href:!0});var Pa=i(xe);xt=h(Pa,"#RamadanKembaliKuat"),Pa.forEach(r),At=g(_),Ae=s(_,"A",{title:!0,target:!0,href:!0});var Ba=i(Ae);It=h(Ba,"#fyp"),Ba.forEach(r),Dt=g(_),Ie=s(_,"A",{title:!0,target:!0,href:!0});var Oa=i(Ie);St=h(Oa,"#fyp\u30C4"),Oa.forEach(r),jt=g(_),De=s(_,"A",{title:!0,target:!0,href:!0});var Ua=i(De);zt=h(Ua,"#masukberandafyp"),Ua.forEach(r),Tt=g(_),me=s(_,"A",{target:!0,rel:!0,title:!0,href:!0});var Qa=i(me);Vt=h(Qa,"\u266C Love, Maybe - SECRET NUMBER"),Qa.forEach(r),_.forEach(r),Ta.forEach(r),Rt=g(ut),We=s(ut,"SCRIPT",{src:!0});var yr=i(We);yr.forEach(r),ut.forEach(r),Mt=g(de),Se=s(de,"DIV",{class:!0});var ft=i(Se);ue=s(ft,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,style:!0});var Ha=i(ue);R=s(Ha,"SECTION",{});var q=i(R);ge=s(q,"A",{target:!0,rel:!0,title:!0,href:!0});var Wa=i(ge);Nt=h(Wa,"@virgierolettaa"),Wa.forEach(r),Ct=h(q," cocok buat buka puasa nihh! enak, bikinnya gampang, ga ribet & yg terpenting cocok buat yg lagi diet \u{1F97A}\u{1F496} @musclefirstofficial "),je=s(q,"A",{title:!0,target:!0,href:!0});var Fa=i(je);qt=h(Fa,"#Musclefirst"),Fa.forEach(r),Lt=g(q),ze=s(q,"A",{title:!0,target:!0,href:!0});var Ga=i(ze);Kt=h(Ga,"#KulinerSeruRamadan"),Ga.forEach(r),Pt=g(q),Te=s(q,"A",{title:!0,target:!0,href:!0});var Ja=i(Te);Bt=h(Ja,"#SerunyaRamadan"),Ja.forEach(r),Ot=g(q),Ve=s(q,"A",{title:!0,target:!0,href:!0});var Xa=i(Ve);Ut=h(Xa,"#mochi"),Xa.forEach(r),Qt=g(q),Re=s(q,"A",{title:!0,target:!0,href:!0});var Ya=i(Re);Ht=h(Ya,"#takjil"),Ya.forEach(r),Wt=g(q),Me=s(q,"A",{title:!0,target:!0,href:!0});var Za=i(Me);Ft=h(Za,"#menuviral"),Za.forEach(r),Fe=s(q,"A",{title:!0,target:!0,href:!0}),i(Fe).forEach(r),Gt=g(q),pe=s(q,"A",{target:!0,rel:!0,title:!0,href:!0});var $a=i(pe);Jt=h($a,"\u266C Love, Maybe - SECRET NUMBER"),$a.forEach(r),q.forEach(r),Ha.forEach(r),Xt=g(ft),Ge=s(ft,"SCRIPT",{src:!0});var xr=i(Ge);xr.forEach(r),ft.forEach(r),Yt=g(de),Ne=s(de,"DIV",{class:!0});var dt=i(Ne);fe=s(dt,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,style:!0});var er=i(fe);te=s(er,"SECTION",{});var Le=i(te);ve=s(Le,"A",{target:!0,rel:!0,title:!0,href:!0});var tr=i(ve);Zt=h(tr,"@vishelajovita"),tr.forEach(r),$t=h(Le," my favorite flavor of whey is honey banana, high in ptotein and diet friendly\u{1F61A} "),Ce=s(Le,"A",{title:!0,target:!0,href:!0});var ar=i(Ce);ea=h(ar,"#musclefirst"),ar.forEach(r),ta=g(Le),qe=s(Le,"A",{title:!0,target:!0,href:!0});var rr=i(qe);aa=h(rr,"#lavatoast"),rr.forEach(r),ra=g(Le),we=s(Le,"A",{target:!0,rel:!0,title:!0,href:!0});var lr=i(we);la=h(lr,"\u266C The Show - Lenka"),lr.forEach(r),Le.forEach(r),er.forEach(r),sa=g(dt),Je=s(dt,"SCRIPT",{src:!0});var Ar=i(Je);Ar.forEach(r),dt.forEach(r),ia=g(de),lt=s(de,"DIV",{class:!0});var Ir=i(lt);Ir.forEach(r),de.forEach(r),oa=g(I),Xe=s(I,"DIV",{class:!0});var sr=i(Xe);for(let Ye=0;Ye<ae.length;Ye+=1)ae[Ye].l(sr);sr.forEach(r),I.forEach(r),S.forEach(r),this.h()},h(){e(f,"class","font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"),e(b,"class","w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"),e(c,"class","flex flex-col space-y-4 w-full mb-0"),e(n,"class","flex justify-between items-center w-full h-auto pt-8"),e(K,"class","grid grid-cols-4 gap-4 justify-center w-full pb-16"),e(V,"class","font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"),e(D,"class","w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"),e(z,"class","flex flex-col space-y-4 w-full mb-0"),e(Q,"class","flex justify-between items-center w-full h-auto pt-8"),e(F,"target","_blank"),e(F,"rel","noreferrer nofollow"),e(F,"title","@bizzlexo"),e(F,"href","https://www.tiktok.com/@bizzlexo?refer=embed"),e(G,"title","musclefirst"),e(G,"target","_blank"),e(G,"href","https://www.tiktok.com/tag/musclefirst?refer=embed"),e(C,"target","_blank"),e(C,"rel","noreferrer nofollow"),e(C,"title","\u266C Woman - Doja Cat"),e(C,"href","https://www.tiktok.com/music/Woman-6976278887063898114?refer=embed"),e(L,"class","tiktok-embed"),e(L,"cite","https://www.tiktok.com/@bizzlexo/video/7087882458171051290"),e(L,"data-video-id","7087882458171051290"),Ke(L,"max-width","605px"),Ke(L,"min-width","325px"),A.async=!0,Pe(A.src,ne="https://www.tiktok.com/embed.js")||e(A,"src",ne),e(P,"class","col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"),e(W,"target","_blank"),e(W,"rel","noreferrer nofollow"),e(W,"title","@yessbaby98"),e(W,"href","https://www.tiktok.com/@yessbaby98?refer=embed"),e(J,"title","browniescoklat"),e(J,"target","_blank"),e(J,"href","https://www.tiktok.com/tag/browniescoklat?refer=embed"),e($,"title","browniesdiet"),e($,"target","_blank"),e($,"href","https://www.tiktok.com/tag/browniesdiet?refer=embed"),e(ee,"title","musclefirst"),e(ee,"target","_blank"),e(ee,"href","https://www.tiktok.com/tag/musclefirst?refer=embed"),e(be,"title","wheyprotein"),e(be,"target","_blank"),e(be,"href","https://www.tiktok.com/tag/wheyprotein?refer=embed"),e(_e,"title","bodyideal"),e(_e,"target","_blank"),e(_e,"href","https://www.tiktok.com/tag/bodyideal?refer=embed"),e(Ee,"title","olahraga"),e(Ee,"target","_blank"),e(Ee,"href","https://www.tiktok.com/tag/olahraga?refer=embed"),e(ye,"title","healthysnacks"),e(ye,"target","_blank"),e(ye,"href","https://www.tiktok.com/tag/healthysnacks?refer=embed"),e(xe,"title","ramadankembalikuat"),e(xe,"target","_blank"),e(xe,"href","https://www.tiktok.com/tag/ramadankembalikuat?refer=embed"),e(Ae,"title","fyp"),e(Ae,"target","_blank"),e(Ae,"href","https://www.tiktok.com/tag/fyp?refer=embed"),e(Ie,"title","fyp\u30C4"),e(Ie,"target","_blank"),e(Ie,"href","https://www.tiktok.com/tag/fyp%E3%83%84?refer=embed"),e(De,"title","masukberandafyp"),e(De,"target","_blank"),e(De,"href","https://www.tiktok.com/tag/masukberandafyp?refer=embed"),e(me,"target","_blank"),e(me,"rel","noreferrer nofollow"),e(me,"title","\u266C Love, Maybe - SECRET NUMBER"),e(me,"href","https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed"),e(B,"class","tiktok-embed"),e(B,"cite","https://www.tiktok.com/@yessbaby98/video/7082732739329330458"),e(B,"data-video-id","7082732739329330458"),Ke(B,"max-width","605px"),Ke(B,"min-width","325px"),We.async=!0,Pe(We.src,ma="https://www.tiktok.com/embed.js")||e(We,"src",ma),e(Z,"class","col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"),e(ge,"target","_blank"),e(ge,"rel","noreferrer nofollow"),e(ge,"title","@virgierolettaa"),e(ge,"href","https://www.tiktok.com/@virgierolettaa?refer=embed"),e(je,"title","musclefirst"),e(je,"target","_blank"),e(je,"href","https://www.tiktok.com/tag/musclefirst?refer=embed"),e(ze,"title","kulinerseruramadan"),e(ze,"target","_blank"),e(ze,"href","https://www.tiktok.com/tag/kulinerseruramadan?refer=embed"),e(Te,"title","serunyaramadan"),e(Te,"target","_blank"),e(Te,"href","https://www.tiktok.com/tag/serunyaramadan?refer=embed"),e(Ve,"title","mochi"),e(Ve,"target","_blank"),e(Ve,"href","https://www.tiktok.com/tag/mochi?refer=embed"),e(Re,"title","takjil"),e(Re,"target","_blank"),e(Re,"href","https://www.tiktok.com/tag/takjil?refer=embed"),e(Me,"title","menuviral"),e(Me,"target","_blank"),e(Me,"href","https://www.tiktok.com/tag/menuviral?refer=embed"),e(Fe,"title","sponsored"),e(Fe,"target","_blank"),e(Fe,"href","https://www.tiktok.com/tag/sponsored?refer=embed"),e(pe,"target","_blank"),e(pe,"rel","noreferrer nofollow"),e(pe,"title","\u266C Love, Maybe - SECRET NUMBER"),e(pe,"href","https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed"),e(ue,"class","tiktok-embed"),e(ue,"cite","https://www.tiktok.com/@virgierolettaa/video/7080496131666398491"),e(ue,"data-video-id","7080496131666398491"),Ke(ue,"max-width","605px"),Ke(ue,"min-width","325px"),Ge.async=!0,Pe(Ge.src,ga="https://www.tiktok.com/embed.js")||e(Ge,"src",ga),e(Se,"class","col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"),e(ve,"target","_blank"),e(ve,"rel","noreferrer nofollow"),e(ve,"title","@vishelajovita"),e(ve,"href","https://www.tiktok.com/@vishelajovita?refer=embed"),e(Ce,"title","musclefirst"),e(Ce,"target","_blank"),e(Ce,"href","https://www.tiktok.com/tag/musclefirst?refer=embed"),e(qe,"title","lavatoast"),e(qe,"target","_blank"),e(qe,"href","https://www.tiktok.com/tag/lavatoast?refer=embed"),e(we,"target","_blank"),e(we,"rel","noreferrer nofollow"),e(we,"title","\u266C The Show - Lenka"),e(we,"href","https://www.tiktok.com/music/The-Show-6782318616630003714?refer=embed"),e(fe,"class","tiktok-embed"),e(fe,"cite","https://www.tiktok.com/@vishelajovita/video/7076790519023602971"),e(fe,"data-video-id","7076790519023602971"),Ke(fe,"max-width","605px"),Ke(fe,"min-width","325px"),Je.async=!0,Pe(Je.src,pa="https://www.tiktok.com/embed.js")||e(Je,"src",pa),e(Ne,"class","col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"),e(lt,"class","col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"),e(x,"class","grid grid-cols-4 gap-4 justify-center w-full pb-4"),e(Xe,"class","grid grid-cols-3 gap-4 justify-center w-full pb-16"),e(o,"class","px-4 md:px-12 space-y-6 sm:space-y-12"),e(a,"class","w-full h-auto bg-zinc-100 relative py-8 md:py-0 px-4 md:px-4")},m(k,S){$e(k,a,S),t(a,o),t(o,n),t(n,c),t(c,f),t(f,u),t(c,E),t(c,b),t(b,O),t(o,X),t(o,K);for(let I=0;I<y.length;I+=1)y[I].m(K,null);t(o,U),t(o,Q),t(Q,z),t(z,V),t(V,re),t(z,le),t(z,D),t(D,Y),t(o,Be),t(o,x),t(x,P),t(P,L),t(L,H),t(H,F),t(F,ie),t(H,he),t(H,G),t(G,Oe),t(H,oe),t(H,C),t(C,Ue),t(P,ke),t(P,A),t(x,j),t(x,Z),t(Z,B),t(B,w),t(w,W),t(W,Qe),t(w,et),t(w,J),t(J,He),t(w,ce),t(w,$),t($,tt),t(w,at),t(w,ee),t(ee,mt),t(w,gt),t(w,be),t(be,pt),t(w,vt),t(w,_e),t(_e,wt),t(w,kt),t(w,Ee),t(Ee,bt),t(w,_t),t(w,ye),t(ye,Et),t(w,yt),t(w,xe),t(xe,xt),t(w,At),t(w,Ae),t(Ae,It),t(w,Dt),t(w,Ie),t(Ie,St),t(w,jt),t(w,De),t(De,zt),t(w,Tt),t(w,me),t(me,Vt),t(Z,Rt),t(Z,We),t(x,Mt),t(x,Se),t(Se,ue),t(ue,R),t(R,ge),t(ge,Nt),t(R,Ct),t(R,je),t(je,qt),t(R,Lt),t(R,ze),t(ze,Kt),t(R,Pt),t(R,Te),t(Te,Bt),t(R,Ot),t(R,Ve),t(Ve,Ut),t(R,Qt),t(R,Re),t(Re,Ht),t(R,Wt),t(R,Me),t(Me,Ft),t(R,Fe),t(R,Gt),t(R,pe),t(pe,Jt),t(Se,Xt),t(Se,Ge),t(x,Yt),t(x,Ne),t(Ne,fe),t(fe,te),t(te,ve),t(ve,Zt),t(te,$t),t(te,Ce),t(Ce,ea),t(te,ta),t(te,qe),t(qe,aa),t(te,ra),t(te,we),t(we,la),t(Ne,sa),t(Ne,Je),t(x,ia),t(x,lt),t(o,oa),t(o,Xe);for(let I=0;I<ae.length;I+=1)ae[I].m(Xe,null)},p(k,[S]){S&2&&(st=k[1],y=ir(y,S,wa,1,k,st,N,K,or,gr,null,mr)),S&1&&(it=k[0],ae=ir(ae,S,ka,1,k,it,va,Xe,or,wr,null,dr))},i:nr,o:nr,d(k){k&&r(a);for(let S=0;S<y.length;S+=1)y[S].d();for(let S=0;S<ae.length;S+=1)ae[S].d()}}}function Nr(v,a,o){let{recipes:n=[]}=a,{recipeArticles:c=[]}=a;return v.$$set=f=>{"recipes"in f&&o(0,n=f.recipes),"recipeArticles"in f&&o(1,c=f.recipeArticles)},[n,c]}class Cr extends kr{constructor(a){super(),br(this,a,Nr,Mr,_r,{recipes:0,recipeArticles:1})}}function qr(v){let a,o,n,c,f,p;return a=new zr({props:{title:"Recipes",schemas:[Tr,Vr]}}),n=new Rr({props:{segment:v[2],title:"Recipes",linkUrl:v[3],slug:""}}),f=new Cr({props:{recipes:v[0],recipeArticles:v[1]}}),{c(){na(a.$$.fragment),o=m(),na(n.$$.fragment),c=m(),na(f.$$.fragment)},l(u){ca(a.$$.fragment,u),o=g(u),ca(n.$$.fragment,u),c=g(u),ca(f.$$.fragment,u)},m(u,E){ua(a,u,E),$e(u,o,E),ua(n,u,E),$e(u,c,E),ua(f,u,E),p=!0},p(u,[E]){const b={};E&4&&(b.segment=u[2]),E&8&&(b.linkUrl=u[3]),n.$set(b);const M={};E&1&&(M.recipes=u[0]),E&2&&(M.recipeArticles=u[1]),f.$set(M)},i(u){p||(fa(a.$$.fragment,u),fa(n.$$.fragment,u),fa(f.$$.fragment,u),p=!0)},o(u){da(a.$$.fragment,u),da(n.$$.fragment,u),da(f.$$.fragment,u),p=!1},d(u){ha(a,u),u&&r(o),ha(n,u),u&&r(c),ha(f,u)}}}async function Xr({url:v}){const{recipes:a}=await ur.request(jr),{recipeArticles:o}=await ur.request(Sr);return{segment:v.pathname.substring(1).split("/")[0],currentPage:v.pathname,props:{recipes:a,recipeArticles:o},cache:{maxage:3600,private:!1}}}function Lr(v,a,o){let{recipes:n}=a,{recipeArticles:c}=a,{segment:f}=a,{currentPage:p}=a;return v.$$set=u=>{"recipes"in u&&o(0,n=u.recipes),"recipeArticles"in u&&o(1,c=u.recipeArticles),"segment"in u&&o(2,f=u.segment),"currentPage"in u&&o(3,p=u.currentPage)},[n,c,f,p]}class Yr extends kr{constructor(a){super(),br(this,a,Lr,qr,_r,{recipes:0,recipeArticles:1,segment:2,currentPage:3})}}export{Yr as default,Xr as load};