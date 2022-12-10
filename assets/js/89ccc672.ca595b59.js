"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[1630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},p="SRSA",l={unversionedId:"2021/RARCTF/challenges/srsa",id:"2021/RARCTF/challenges/srsa",title:"SRSA",description:"The problem",source:"@site/docs/2021/RARCTF/challenges/srsa.md",sourceDirName:"2021/RARCTF/challenges",slug:"/2021/RARCTF/challenges/srsa",permalink:"/writeups-docs/docs/2021/RARCTF/challenges/srsa",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2021/RARCTF/challenges/srsa.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RARPG",permalink:"/writeups-docs/docs/2021/RARCTF/challenges/rarpg"},next:{title:"VERYBABYREV",permalink:"/writeups-docs/docs/2021/RARCTF/challenges/verybabyrev"}},s={},i=[{value:"The problem",id:"the-problem",level:2},{value:"The solution",id:"the-solution",level:2}],c={toc:i};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"srsa"},"SRSA"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2382).Z,title:"unknown.png",width:"818",height:"224"})),(0,a.kt)("h2",{id:"the-problem"},"The problem"),(0,a.kt)("p",null,"Let's take a look at the encryption part ",(0,a.kt)("strong",{parentName:"p"},"script.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from Crypto.Util.number import *\n\np = getPrime(256)\nq = getPrime(256)\nn = p * q\ne = 0x69420\n\nflag = bytes_to_long(open("flag.txt", "rb").read())\nprint("n =",n)\nprint("e =", e)\nprint("ct =",(flag * e) % n)\n')),(0,a.kt)("p",null,"This script return the public exposant ",(0,a.kt)("strong",{parentName:"p"},"e"),", the modulus ",(0,a.kt)("strong",{parentName:"p"},"n")," and the ciphertext ",(0,a.kt)("strong",{parentName:"p"},"ct"),", available in the file ",(0,a.kt)("strong",{parentName:"p"},"output.txt"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"n = 5496273377454199065242669248583423666922734652724977923256519661692097814683426757178129328854814879115976202924927868808744465886633837487140240744798219\ne = 431136\nct = 3258949841055516264978851602001574678758659990591377418619956168981354029697501692633419406607677808798749678532871833190946495336912907920485168329153735\n")),(0,a.kt)("p",null,"So the encryption is very weak, we just need to solve ",(0,a.kt)("inlineCode",{parentName:"p"},"a.x mod n = b")),(0,a.kt)("h2",{id:"the-solution"},"The solution"),(0,a.kt)("p",null,"In order to solve the equation we use the ","[extended Euclid algorithm]","(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm"},"Extended Euclidean algorithm - Wikipedia"),") since ",(0,a.kt)("strong",{parentName:"p"},"e")," and ",(0,a.kt)("strong",{parentName:"p"},"n")," are coprime. So, let's deduce (",(0,a.kt)("strong",{parentName:"p"},"u"),",",(0,a.kt)("strong",{parentName:"p"},"v"),") the coefficients of B\xe9zout's identity for ",(0,a.kt)("strong",{parentName:"p"},"e")," and ",(0,a.kt)("strong",{parentName:"p"},"n"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"=> e.u + v.n = 1\n=> e.u = 1 mod n\n")),(0,a.kt)("p",null,"So, we have the ",(0,a.kt)("strong",{parentName:"p"},"u"),", ",(0,a.kt)("strong",{parentName:"p"},"v")," and the following equation :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"flag*e = ct (mod n)\n")),(0,a.kt)("p",null,"By multiplying each side of the equation by ",(0,a.kt)("strong",{parentName:"p"},"u"),", we can deduce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"flag*e*u = ct*u (mod n)\n=> flag*1 = ct*u (mod n)\n=> flag = ct*u (mod n)\n")),(0,a.kt)("p",null,"Let's use Sage to retrieve the plaintext message ",(0,a.kt)("strong",{parentName:"p"},"flag")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sage: n = 5496273377454199065242669248583423666922734652724977923256519661692097814683426757178129328854814879115976202924927868808744465886633837487140240744798219                                                                       \nsage: e = 431136                                                                                                                                                                                                                           \nsage: ct = 3258949841055516264978851602001574678758659990591377418619956168981354029697501692633419406607677808798749678532871833190946495336912907920485168329153735\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sage: d,u,v = xgcd(e,n)                                                                                                                                                                                                                    \nsage: d == 1                                                                                                                                                                                                                               \nTrue\nsage: u                                                                                                                                                                                                                                    \n-1725247189852515711279864525532647026154903796685788213770661838344404757104307750862079297955287780203101052841872201379045584949770011924247049469852408\n\nsage: flag = (ct*u).mod(n)                                                                                                                                                                                                                 \nsage: flag                                                                                                                                                                                                                                 \n23400784433379515514791798696357028880636218612551319923630440360753870806366867070053302757958493331539502806645178113396322834087874834615580297017725\n")),(0,a.kt)("p",null,"Using python, let's apply ",(0,a.kt)("strong",{parentName:"p"},"long_to_bytes()")," function (from pycryptodome python package) to this final number, an we obtain :"),(0,a.kt)("p",null,"flag : ",(0,a.kt)("inlineCode",{parentName:"p"},"rarctf{ST3GL0LS_ju5t_k1dd1ng_th1s_w4s_n0t_st3g_L0L!_83b7e829d9}")))}u.isMDXComponent=!0},2382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unknown-1d8c3e2dca6564b5941da285e5ced933.png"}}]);