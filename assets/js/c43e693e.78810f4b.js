"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[4747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="FAST ENOUGH",c={unversionedId:"2020/BRIXEL/challenges/fast_enough",id:"2020/BRIXEL/challenges/fast_enough",title:"FAST ENOUGH",description:"On this page we get a code to send back via a POST method in less than 1 second",source:"@site/docs/2020/BRIXEL/challenges/fast_enough.md",sourceDirName:"2020/BRIXEL/challenges",slug:"/2020/BRIXEL/challenges/fast_enough",permalink:"/docs/2020/BRIXEL/challenges/fast_enough",draft:!1,editUrl:"https://github.com/Pynard/writeups-docs/tree/main/packages/create-docusaurus/templates/shared/docs/2020/BRIXEL/challenges/fast_enough.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EVIDENCE",permalink:"/docs/2020/BRIXEL/challenges/evidence"},next:{title:"GOODBYE",permalink:"/docs/2020/BRIXEL/challenges/goodbye"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fast-enough"},"FAST ENOUGH"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Can you program something that is fast enough to submit the solution before the time runs out?\n\nhttp://timesink.be/speedy\n")),(0,o.kt)("p",null,"On this page we get a code to send back via a POST method in less than 1 second"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nrm index header\n\ncurl --output index -D header http://timesink.be/speedy/index.php\n\ncookie=$(cat header | grep Cookie | cut -d ' ' -f 2 | tr -d ';')\ncode=$(cat index | cut -d '>' -f 13-14 | cut -d '<' -f 1)\n\ncurl -X POST --cookie \"$cookie\" --data-raw \"inputfield=$code\" http://timesink.be/speedy/index.php\n")),(0,o.kt)("p",null,"We get this response :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div align="center">\n      <h1>Are you fast enough?  </h1>\n    </div>\n    <hr>\n      <div align="center">You took: 0 second(s) to complete the task.</div>\n    <br>\n    <div align="center">Congratulations, you completed the task in under 1 seconds!</div>\n    <div algin="center">The flag is: <b>brixelCTF{sp33d_d3m0n}</b></div>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"flag : ",(0,o.kt)("inlineCode",{parentName:"p"},"brixelCTF{sp33d_d3m0n}")))}u.isMDXComponent=!0}}]);