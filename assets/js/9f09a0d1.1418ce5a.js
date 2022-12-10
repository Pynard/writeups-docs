"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[7895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"IMAGINARYCTF",title:"IMAGINARYCTF"},i="INFOS",o={unversionedId:"2021/IMAGINARYCTF/IMAGINARYCTF",id:"2021/IMAGINARYCTF/IMAGINARYCTF",title:"IMAGINARYCTF",description:"Description",source:"@site/docs/2021/IMAGINARYCTF/IMAGINARYCTF.md",sourceDirName:"2021/IMAGINARYCTF",slug:"/2021/IMAGINARYCTF/",permalink:"/docs/2021/IMAGINARYCTF/",draft:!1,editUrl:"https://github.com/Pynard/writeups-docs/tree/main/packages/create-docusaurus/templates/shared/docs/2021/IMAGINARYCTF/IMAGINARYCTF.md",tags:[],version:"current",frontMatter:{id:"IMAGINARYCTF",title:"IMAGINARYCTF"},sidebar:"tutorialSidebar",previous:{title:"CTF IN 2021",permalink:"/docs/2021/"},next:{title:"FAKE_CANARY",permalink:"/docs/2021/IMAGINARYCTF/challenges/fake_canary"}},c={},p=[{value:"WRITE UPS",id:"write-ups",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"infos"},"INFOS"),(0,a.kt)("p",null,"\ud83d\udcc4 ",(0,a.kt)("strong",{parentName:"p"},"Description")),(0,a.kt)("p",null,"ImaginaryCTF 2021 is an all new CTF competition, with all skill levels welcome to participate."),(0,a.kt)("p",null,"It runs from July 23 to July 27, starting and ending at 4 PM UTC. In the competition, teams of up to six players will be challenged to hack websites and servers, crack codes, and recover information through challenges in cryptography, binary exploitation, web exploitation, forensics, reversing, and more."),(0,a.kt)("p",null,"We hope you will have fun and learn something new!"),(0,a.kt)("p",null,"Join our discord server to receive updates ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/bb4r5DgGnC"},"https://discord.gg/bb4r5DgGnC")),(0,a.kt)("p",null,"\ud83c\udfc6 ",(0,a.kt)("strong",{parentName:"p"},"Prizes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thanks to Trail of Bits and Cybrancee for providing prizes for this CTF!\nThe prizes are:\n1st Place: $250 gift card\n2nd Place: $200 gift card\n3rd Place: $150 gift card\n4th Place: $125 gift card\n5th Place: $100 gift card\n$200 prize pool for the best writeups (open to everyone!)\n")),(0,a.kt)("p",null,"\ud83d\udea9 ",(0,a.kt)("strong",{parentName:"p"},"Flags")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hidden              --\x3e ictf{wut_how_do_you_see_this}\nchicken_caesar      --\x3e ictf{wHen_dID_cAEseR_cIphERs_gEt_sO_hARd}\nvacation            --\x3e ictf{38.947_-119.961}\nstackoverflow       --\x3e ictf{4nd_th4t_1s_why_y0u_ch3ck_1nput_l3ngth5_486b39aa}\nroos_world          --\x3e ictf{1nsp3ct0r_r00_g0es_th0nk}\npassword_protected  --\x3e ictf{dont_use_zipcrypto_5e2b32f3}\nformatting          --\x3e ictf{c4r3rul_w1th_f0rmat_str1ngs_4a2bd219}\nimaginary           --\x3e ictf{n1c3_y0u_c4n_4dd_4nd_subtr4ct!_49fd21bc}\nunpuzzled1          --\x3e ictf{1_h0p3_y0u_d1dnt_d0x_y0urs3lf_92bc1032}\nspelling_test       --\x3e ictf{youpassedthespellingtest}\nfake_canary         --\x3e ictf{m4ke_y0ur_canaries_r4ndom_f492b211}\nspeedrun            --\x3e ictf{4ut0m4t1ng_expl0it_d3v????_b7d75e95}\nflip_flop           --\x3e ictf{fl1p_fl0p_b1ts_fl1pped_b6731f96}\nstings              --\x3e ictf{str1ngs_4r3nt_h1dd3n_17b21a69}\n")),(0,a.kt)("h2",{id:"write-ups"},"WRITE UPS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Flags"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/stackoverflow"},"stackoverflow")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{4nd_th4t_1s_why_y0u_ch3ck_1nput_l3ngth5_486b39aa}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/roos_world"},"roos_world")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{1nsp3ct0r_r00_g0es_th0nk}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/formatting"},"formatting")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{c4r3rul_w1th_f0rmat_str1ngs_4a2bd219}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/imaginary"},"imaginary")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{n1c3_y0u_c4n_4dd_4nd_subtr4ct!_49fd21bc}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/spelling_test"},"spelling_test")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{youpassedthespellingtest}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/fake_canary"},"fake_canary")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{m4ke_y0ur_canaries_r4ndom_f492b211}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/speedrun"},"speedrun")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{4ut0m4t1ng_expl0it_d3v????_b7d75e95}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/flip_flop"},"flip_flop")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{fl1p_fl0p_b1ts_fl1pped_b6731f96}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/IMAGINARYCTF/challenges/stings"},"stings")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ictf{str1ngs_4r3nt_h1dd3n_17b21a69}"))))))}d.isMDXComponent=!0}}]);