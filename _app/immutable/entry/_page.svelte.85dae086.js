import{S as T,i as $,s as q,k as f,a as G,q as b,J as A,l as d,h as o,c as H,m as k,r as E,n as u,K as B,p as x,G as p,b as g,H as O,o as Y,L as C,u as N}from"../chunks/index.259d9cf7.js";function z(y){let l,n,r,s,m,t;return{c(){l=f("h1"),n=b("NO"),r=G(),s=f("h3"),m=b("...but it will be out in "),t=b(y[0]),this.h()},l(e){l=d(e,"H1",{style:!0,class:!0});var c=k(l);n=E(c,"NO"),c.forEach(o),r=H(e),s=d(e,"H3",{class:!0});var a=k(s);m=E(a,"...but it will be out in "),t=E(a,y[0]),a.forEach(o),this.h()},h(){x(l,"color","red"),u(l,"class","svelte-1a2x97j"),u(s,"class","svelte-1a2x97j")},m(e,c){g(e,l,c),p(l,n),g(e,r,c),g(e,s,c),p(s,m),p(s,t)},p(e,c){c&1&&N(t,e[0])},d(e){e&&o(l),e&&o(r),e&&o(s)}}}function J(y){let l,n,r,s,m;return{c(){l=f("h1"),n=b("YES"),r=G(),s=f("h3"),m=b("...go play it!!"),this.h()},l(t){l=d(t,"H1",{style:!0,class:!0});var e=k(l);n=E(e,"YES"),e.forEach(o),r=H(t),s=d(t,"H3",{class:!0});var c=k(s);m=E(c,"...go play it!!"),c.forEach(o),this.h()},h(){x(l,"color","green"),u(l,"class","svelte-1a2x97j"),u(s,"class","svelte-1a2x97j")},m(t,e){g(t,l,e),p(l,n),g(t,r,e),g(t,s,e),p(s,m)},p:O,d(t){t&&o(l),t&&o(r),t&&o(s)}}}function K(y){let l,n,r,s,m,t,e,c,a,v,D,M;function j(i,h){return new Date>=i[1]?J:z}let _=j(y)(y);return{c(){l=f("meta"),n=f("meta"),r=f("meta"),s=f("meta"),m=G(),t=f("div"),e=f("h2"),c=b("Is "),a=f("img"),D=b(" out yet?"),M=G(),_.c(),this.h()},l(i){const h=A("svelte-tiknfq",document.head);l=d(h,"META",{property:!0,content:!0}),n=d(h,"META",{property:!0,content:!0}),r=d(h,"META",{property:!0,content:!0}),s=d(h,"META",{property:!0,content:!0}),h.forEach(o),m=H(i),t=d(i,"DIV",{id:!0,class:!0});var w=k(t);e=d(w,"H2",{style:!0,class:!0});var I=k(e);c=E(I,"Is "),a=d(I,"IMG",{src:!0,alt:!0,style:!0}),D=E(I," out yet?"),I.forEach(o),M=H(w),_.l(w),w.forEach(o),this.h()},h(){u(l,"property","og:title"),u(l,"content","Is Baldur's Gate 3 Out Yet?"),u(n,"property","og:description"),u(n,"content","Come to find out if BG3 is out yet!"),u(r,"property","og:url"),u(r,"content","https://bg3.adammi.ch"),u(s,"property","og:type"),u(s,"content","website"),B(a.src,v="logo-bg3.png")||u(a,"src",v),u(a,"alt","Baldur's Gate 3"),x(a,"height","4em"),x(a,"transform","translateY(2em)"),x(e,"margin-bottom","1em"),u(e,"class","svelte-1a2x97j"),u(t,"id","container"),u(t,"class","svelte-1a2x97j")},m(i,h){p(document.head,l),p(document.head,n),p(document.head,r),p(document.head,s),g(i,m,h),g(i,t,h),p(t,e),p(e,c),p(e,a),p(e,D),p(t,M),_.m(t,null)},p(i,[h]){_.p(i,h)},i:O,o:O,d(i){o(l),o(n),o(r),o(s),i&&o(m),i&&o(t),_.d()}}}function L(y,l,n){const r=new Date().getTimezoneOffset();console.log(r);const s=new Date(2023,7,3,15);s.setMinutes(s.getMinutes()-r);let m="idk";const t=(a,v)=>[Math.floor(a/v),a%v],e=async()=>{let a=s.valueOf()-new Date().valueOf(),v,D,M,j;[v,a]=t(a,864e5),[D,a]=t(a,36e5),[M,a]=t(a,6e4),[j,a]=t(a,1e3);const _=[[v,"day"],[D,"hour"],[M,"minute"],[j,"second"]].filter(([i,h])=>i!=0).map(([i,h])=>`${i} ${h}${i!=1?"s":""}`);_.length==1?n(0,m=_[0]):n(0,m=_.slice(0,-1).join(", ")+`, and ${_.slice(-1)}`)},c=setInterval(async()=>{e()},500);return Y(()=>{e()}),C(()=>{clearInterval(c)}),[m,s]}class R extends T{constructor(l){super(),$(this,l,L,K,q,{})}}export{R as default};
