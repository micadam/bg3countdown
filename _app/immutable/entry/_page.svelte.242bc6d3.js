import{J,S as K,i as L,s as P,k as v,a as A,q as O,K as F,l as b,h as c,c as q,m as S,r as T,n as d,L as z,p as B,G as h,b as D,d as U,f as Q,g as j,o as W,M as X,v as Z,w as $,u as x,H as Y,N as ee,O as te}from"../chunks/index.f92b1b3f.js";function se(m,{delay:e=0,duration:o=400,easing:n=J}={}){const l=+getComputedStyle(m).opacity;return{delay:e,duration:o,easing:n,css:t=>`opacity: ${t*l}`}}function le(m){let e,o,n,l,t,s;return{c(){e=v("h1"),o=O("NO"),n=A(),l=v("h3"),t=O("...but it will be out in "),s=O(m[0]),this.h()},l(i){e=b(i,"H1",{style:!0,class:!0});var f=S(e);o=T(f,"NO"),f.forEach(c),n=q(i),l=b(i,"H3",{class:!0});var _=S(l);t=T(_,"...but it will be out in "),s=T(_,m[0]),_.forEach(c),this.h()},h(){B(e,"color","red"),d(e,"class","svelte-1e8cc9f"),d(l,"class","svelte-1e8cc9f")},m(i,f){D(i,e,f),h(e,o),D(i,n,f),D(i,l,f),h(l,t),h(l,s)},p(i,f){f&1&&x(s,i[0])},d(i){i&&c(e),i&&c(n),i&&c(l)}}}function oe(m){let e,o,n,l,t,s,i,f,_;return{c(){e=v("audio"),o=v("source"),l=A(),t=v("h1"),s=O("YES"),i=A(),f=v("h3"),_=O("...go play it!!"),this.h()},l(u){e=b(u,"AUDIO",{style:!0});var y=S(e);o=b(y,"SOURCE",{src:!0}),y.forEach(c),l=q(u),t=b(u,"H1",{style:!0,class:!0});var C=S(t);s=T(C,"YES"),C.forEach(c),i=q(u),f=b(u,"H3",{class:!0});var I=S(f);_=T(I,"...go play it!!"),I.forEach(c),this.h()},h(){z(o.src,n="./bg3maintheme.mp3")||d(o,"src",n),B(e,"display","none"),e.loop=!0,e.controls=!0,B(t,"color","green"),d(t,"class","svelte-1e8cc9f"),d(f,"class","svelte-1e8cc9f")},m(u,y){D(u,e,y),h(e,o),m[6](e),D(u,l,y),D(u,t,y),h(t,s),D(u,i,y),D(u,f,y),h(f,_)},p:Y,d(u){u&&c(e),m[6](null),u&&c(l),u&&c(t),u&&c(i),u&&c(f)}}}function ie(m){let e,o,n,l;return{c(){e=v("div"),o=O("(notification enabled)"),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=S(e);o=T(s,"(notification enabled)"),s.forEach(c),this.h()},h(){d(e,"class","svelte-1e8cc9f")},m(t,s){D(t,e,s),h(e,o),l=!0},p:Y,i(t){l||(n&&n.end(1),l=!0)},o(t){n=ee(e,se,{}),l=!1},d(t){t&&c(e),t&&n&&n.end()}}}function re(m){let e,o,n,l;return{c(){e=v("div"),o=O("Click here to get notified when it's out!"),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=S(e);o=T(s,"Click here to get notified when it's out!"),s.forEach(c),this.h()},h(){d(e,"class","button svelte-1e8cc9f")},m(t,s){D(t,e,s),h(e,o),n||(l=te(e,"click",m[7]),n=!0)},p:Y,i:Y,o:Y,d(t){t&&c(e),n=!1,l()}}}function ne(m){let e,o,n,l,t,s,i,f,_,u,y,C,I,p,r,M;function N(a,g){return a[4]>=a[5]?oe:le}let G=N(m),k=G(m);const R=[re,ie],E=[];function H(a,g){return a[2]?a[3]?-1:1:0}return~(p=H(m))&&(r=E[p]=R[p](m)),{c(){e=v("meta"),o=v("meta"),n=v("meta"),l=v("meta"),t=A(),s=v("div"),i=v("h2"),f=O("Is "),_=v("img"),y=O(" out yet?"),C=A(),k.c(),I=A(),r&&r.c(),this.h()},l(a){const g=F("svelte-tiknfq",document.head);e=b(g,"META",{property:!0,content:!0}),o=b(g,"META",{property:!0,content:!0}),n=b(g,"META",{property:!0,content:!0}),l=b(g,"META",{property:!0,content:!0}),g.forEach(c),t=q(a),s=b(a,"DIV",{id:!0,class:!0});var w=S(s);i=b(w,"H2",{style:!0,class:!0});var V=S(i);f=T(V,"Is "),_=b(V,"IMG",{src:!0,alt:!0,style:!0}),y=T(V," out yet?"),V.forEach(c),C=q(w),k.l(w),I=q(w),r&&r.l(w),w.forEach(c),this.h()},h(){d(e,"property","og:title"),d(e,"content","Is Baldur's Gate 3 Out Yet?"),d(o,"property","og:description"),d(o,"content","Come to find out if BG3 is out yet!"),d(n,"property","og:url"),d(n,"content","https://bg3.adammi.ch"),d(l,"property","og:type"),d(l,"content","website"),z(_.src,u="logo-bg3.png")||d(_,"src",u),d(_,"alt","Baldur's Gate 3"),B(_,"height","4em"),B(_,"transform","translateY(2em)"),B(i,"margin-bottom","1em"),d(i,"class","svelte-1e8cc9f"),d(s,"id","container"),d(s,"class","svelte-1e8cc9f")},m(a,g){h(document.head,e),h(document.head,o),h(document.head,n),h(document.head,l),D(a,t,g),D(a,s,g),h(s,i),h(i,f),h(i,_),h(i,y),h(s,C),k.m(s,null),h(s,I),~p&&E[p].m(s,null),M=!0},p(a,[g]){G===(G=N(a))&&k?k.p(a,g):(k.d(1),k=G(a),k&&(k.c(),k.m(s,I)));let w=p;p=H(a),p===w?~p&&E[p].p(a,g):(r&&(Z(),U(E[w],1,1,()=>{E[w]=null}),Q()),~p?(r=E[p],r?r.p(a,g):(r=E[p]=R[p](a),r.c()),j(r,1),r.m(s,null)):r=null)},i(a){M||(j(r),M=!0)},o(a){U(r),M=!1},d(a){c(e),c(o),c(n),c(l),a&&c(t),a&&c(s),k.d(),~p&&E[p].d()}}}function ae(m,e,o){const n=new Date().getTimezoneOffset(),l=new Date(2023,7,3,15);l.setMinutes(l.getMinutes()-n);let t="idk",s,i=!1,f=!1,_;const u=(r,M)=>[Math.floor(r/M),r%M],y=async()=>{o(4,_=new Date);let r=l.valueOf()-_.valueOf();i&&r<0&&s.play();let M,N,G,k;[M,r]=u(r,864e5),[N,r]=u(r,36e5),[G,r]=u(r,6e4),[k,r]=u(r,1e3);const E=[[M,"day"],[N,"hour"],[G,"minute"],[k,"second"]].filter(([H,a])=>H!=0).map(([H,a])=>`${H} ${a}${H!=1?"s":""}`);E.length==1?o(0,t=E[0]):o(0,t=E.slice(0,-1).join(", ")+`, and ${E.slice(-1)}`)},C=setInterval(async()=>{y()},500);W(()=>{y()}),X(()=>{clearInterval(C)});function I(r){$[r?"unshift":"push"](()=>{s=r,o(1,s)})}return[t,s,i,f,_,l,I,()=>{o(2,i=!0),setTimeout(()=>{o(3,f=!0)},5e3)}]}class ue extends K{constructor(e){super(),L(this,e,ae,ne,P,{})}}export{ue as default};