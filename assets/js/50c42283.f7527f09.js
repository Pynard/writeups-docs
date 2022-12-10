"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[7593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="STRING",s={unversionedId:"2020/BOOT2ROOT/challenges/string",id:"2020/BOOT2ROOT/challenges/string",title:"STRING",description:"Le message chiffr\xe9",source:"@site/docs/2020/BOOT2ROOT/challenges/string.md",sourceDirName:"2020/BOOT2ROOT/challenges",slug:"/2020/BOOT2ROOT/challenges/string",permalink:"/writeups-docs/docs/2020/BOOT2ROOT/challenges/string",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2020/BOOT2ROOT/challenges/string.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SHELLCODE",permalink:"/writeups-docs/docs/2020/BOOT2ROOT/challenges/shellcode"},next:{title:"TARGET1",permalink:"/writeups-docs/docs/2020/BOOT2ROOT/challenges/target1"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string"},"STRING"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Given an encrypted message, rasput1n encodes it the following way:\n\nRemoves the median letter of the word from the original word and appends it to the end of the encrypted word and repeats the process until there are no letters left.\n\nA median letter in a word is the letter present in the middle of the word and if the word length is even, the median letter is the left one out of the two middle letters.\n\nCan you decode the string?\n")),(0,a.kt)("p",null,"Le message chiffr\xe9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fichier : ",(0,a.kt)("a",{parentName:"li",href:"../attachements/string/file"},"file"),"\nUn script qui le d\xe9chiffre :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"with open('file','r') as f:\n    cipher = f.read()\n\nout=''\nfor c in cipher[::-1]:\n    out = out[:int(len(out)/2)]+c+out[int(len(out)/2):]\n\nprint(out)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fichier : ",(0,a.kt)("a",{target:"_blank",href:n(7339).Z},"solve.py"),"\nLe message d\xe9chiffr\xe9 :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Rasputin was born to a peasant family in the Siberian village of Pokrovskoye in the Tyumensky Uyezd of Tobolsk Governorate (now Yarkovsky District of Tyumen Oblast). He had a religious conversion experience after taking a pilgrimage to a monastery in 1897. He has been described as a monk or as a 'strannik' (wanderer or pilgrim), though he held no official position in the Russian Orthodox Church. He traveled to St. Petersburg in 1903 or the winter of 1904\u20131905, where he captivated some church and social leaders. He became a society figure and met Emperor Nicholas and Empress Alexandra in November 1905. In late 1906, Rasputin began acting as a healer for the imperial couple's only son, Alexei, who suffered from hemophilia. The flag is b00t2root{@The_Director_is_the_bot}. He was a divisive figure at court, seen by some Russians as a mystic, visionary, and prophet, and by others as a religious charlatan. The high point of Rasputin's power was in 1915 when Nicholas II left St. Petersburg to oversee Russian armies fighting World War I, increasing both Alexandra and Rasputin's influence. Russian defeats mounted during the war, however, and both Rasputin and Alexandra became increasingly unpopular. In the early morning of 30 December [O.S. 17 December] 1916, Rasputin was assassinated by a group of conservative noblemen who opposed his influence over Alexandra and Nicholas. Historians often suggest that Rasputin's scandalous and sinister reputation helped discredit the tsarist government and thus helped precipitate the overthrow of the Romanov dynasty a few weeks after he was assassinated. Accounts of his life and influence were often based on hearsay and rumor.```\net le flag :)\n```b00t2root{@The_Director_is_the_bot}```\nflag : `b00t2root{@The_Director_is_the_bot}`\n")))}u.isMDXComponent=!0},7339:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/solve-33f2ae56cb9d1c637abaac172bab1c8c.py"}}]);