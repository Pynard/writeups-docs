"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[4743],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",_={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,c=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||_[f]||c;return r?n.createElement(m,l(l({ref:e},s),{},{components:r})):n.createElement(m,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=r.length,l=new Array(c);l[0]=f;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3237:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={id:"RARCTF",title:"RARCTF"},l="INFOS",o={unversionedId:"2021/RARCTF/RARCTF",id:"2021/RARCTF/RARCTF",title:"RARCTF",description:"Description",source:"@site/docs/2021/RARCTF/RARCTF.md",sourceDirName:"2021/RARCTF",slug:"/2021/RARCTF/",permalink:"/docs/2021/RARCTF/",draft:!1,editUrl:"https://github.com/Pynard/writeups-docs/tree/main/packages/create-docusaurus/templates/shared/docs/2021/RARCTF/RARCTF.md",tags:[],version:"current",frontMatter:{id:"RARCTF",title:"RARCTF"},sidebar:"tutorialSidebar",previous:{title:"STINGS",permalink:"/docs/2021/IMAGINARYCTF/challenges/stings"},next:{title:"ARCHER",permalink:"/docs/2021/RARCTF/challenges/archer"}},i={},p=[{value:"WRITE UPS",id:"write-ups",level:2}],s={toc:p};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"infos"},"INFOS"),(0,a.kt)("p",null,"\ud83d\udcc4 ",(0,a.kt)("strong",{parentName:"p"},"Description")),(0,a.kt)("p",null,"The first CTF hosted by The WinRaRs. Registration open now at ",(0,a.kt)("a",{parentName:"p",href:"https://ctf.rars.win/register.%5C"},"https://ctf.rars.win/register.\\"),"\nJoin our discord at ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/VMWvNW36Zx"},"https://discord.gg/VMWvNW36Zx")," and check out ",(0,a.kt)("a",{parentName:"p",href:"https://ctf.rars.win/"},"https://ctf.rars.win/")," for more info!"),(0,a.kt)("p",null,"\ud83c\udfc6 ",(0,a.kt)("strong",{parentName:"p"},"Prizes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1st Place\n- $400\n- HackTheBox Annual VIP+ Subscription (x5)\n2nd Place\n- $200\n- HackTheBox 6 month VIP Subscription (x5)\n3rd Place\n- $100\n- HackTheBox 3 month VIP Subscription (x5)\nAdditionally, there will be prizes for first bloods for certain challenges in each category, as well as several writeup prizes.\n")),(0,a.kt)("p",null,"\ud83d\udea9 ",(0,a.kt)("strong",{parentName:"p"},"Flags")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"srsa                    --\x3e rarctf{ST3GL0LS_ju5t_k1dd1ng_th1s_w4s_n0t_st3g_L0L!_83b7e829d9}\narcher                  --\x3e rarctf{sw33t_sh0t!_1nt3g3r_0v3rfl0w_r0cks!_170b2820c9}\nlemonthinker            --\x3e rarctf{b451c-c0mm4nd_1nj3ct10n_f0r-y0u_4nd_y0ur-l3m0nth1nk3rs_d8d21128bf}\nfancy_button_generator  --\x3e rarctf{th0s3_f4ncy_butt0n5_w3r3_t00_cl1ck4bl3_f0r_u5_a4667cb69f}\nverybabyrev             --\x3e rarctf{3v3ry_s1ngl3_b4by-r3v_ch4ll3ng3_u535_x0r-f0r_s0m3_r34s0n_4nd_1-d0nt_kn0w_why_dc37158365}\ndotty                   --\x3e rarctf{d1d_y0u_p33k_0r_5py????_fa4ac605}\nrarpg                   --\x3e rarctf{g4m3_h4ck1ng_f0r_n00b5!-75f8b0}\ninfinite_free_trial     --\x3e rarctf{welc0m3_t0_y0ur_new_tr14l_281099b9}\n")),(0,a.kt)("h2",{id:"write-ups"},"WRITE UPS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Flags"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/srsa"},"srsa")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{ST3GL0LS_ju5t_k1dd1ng_th1s_w4s_n0t_st3g_L0L!_83b7e829d9}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/babycrypt"},"babycrypt")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{g3n3r1c_m4th5_equ4t10n_th1ng_ch4ll3ng3_5a174f54e6}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/archer"},"archer")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{sw33t_sh0t!_1nt3g3r_0v3rfl0w_r0cks!_170b2820c9}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/fancy_button_generator"},"fancy_button_generator")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{th0s3_f4ncy_butt0n5_w3r3_t00_cl1ck4bl3_f0r_u5_a4667cb69f}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/verybabyrev"},"verybabyrev")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{3v3ry_s1ngl3_b4by-r3v_ch4ll3ng3_u535_x0r-f0r_s0m3_r34s0n_4nd_1-d0nt_kn0w_why_dc37158365}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/dotty"},"dotty")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{d1d_y0u_p33k_0r_5py????_fa4ac605}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/rarpg"},"rarpg")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{g4m3_h4ck1ng_f0r_n00b5!-75f8b0}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/2021/RARCTF/challenges/infinite_free_trial"},"infinite_free_trial")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rarctf{welc0m3_t0_y0ur_new_tr14l_281099b9}"))))))}d.isMDXComponent=!0}}]);