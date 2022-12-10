"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[9399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=c,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),c=(n(7294),n(3905));const a={},o="EVIDENCE",i={unversionedId:"2020/BRIXEL/challenges/evidence",id:"2020/BRIXEL/challenges/evidence",title:"EVIDENCE",description:"- File : evidence.zip",source:"@site/docs/2020/BRIXEL/challenges/evidence.md",sourceDirName:"2020/BRIXEL/challenges",slug:"/2020/BRIXEL/challenges/evidence",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/evidence",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2020/BRIXEL/challenges/evidence.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"COOKIES",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/cookies"},next:{title:"FAST ENOUGH",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/fast_enough"}},l={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"evidence"},"EVIDENCE"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"A buddy of mine is in serious trouble. He works for the feds and accidentally deleted a pendrive containing crucial evidence\n\nCan you get it back and tell us what the evidence is?\n\nWe need to know what the suspect bought\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"File : ",(0,c.kt)("a",{target:"_blank",href:n(3701).Z},"evidence.zip"))),(0,c.kt)("p",null,"First we unzip the archive to find an img file :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'$ file evidence.img\nevidence.img: DOS/MBR boot sector, code offset 0x52+2, OEM-ID "NTFS    ", sectors/cluster 8, Media descriptor 0xf8, sectors/track 63, heads 255, dos < 4.0 BootSector (0x0), FAT (1Y bit by descriptor); NTFS, sectors/track 63, physical drive 0x80, sectors 1880044, $MFT start cluster 78335, $MFTMirror start cluster 2, bytes/RecordSegment 2^(-1*246), clusters/index block 1, serial number 0a6822852822828ef; contains bootstrap BOOTMGR\n')),(0,c.kt)("p",null,"This img seems corrupted, as shown with fdisk :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ fdisk -l evidence.img\nP\xe9riph\xe9rique   Amor\xe7age   D\xe9but      Fin  Secteurs Taille Id Type\nevidence.img1  1920221984 3736432267 1816210284   866G 72 inconnu\nevidence.img2  1936028192 3889681299 1953653108 931,6G 6c inconnu\nevidence.img3           0          0          0     0B  0 Vide\nevidence.img4    27722122   27722568        447 223,5K  0 Vide\n")),(0,c.kt)("p",null,"We'll use ",(0,c.kt)("strong",{parentName:"p"},"photorec")," to recover some deleted files and we get 2 wav files :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ ls recup_dir.1\nf0011328.wav  f0028304.wav\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{target:"_blank",href:n(613).Z},"f0011328.wav")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{target:"_blank",href:n(4473).Z},"f0028304.wav"))),(0,c.kt)("p",null,"These are phone calls between Dorfmeister and a bot"),(0,c.kt)("p",null,"We have to recover DTMF key press :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$ multimon-ng -a DTMF -t wav f0011328.wav\n")),(0,c.kt)("p",null,"We get :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"212555424054666916092533266500018449903336667770844330222666222244466330227778844#2\n")),(0,c.kt)("p",null,"Some are numbers others are multi-tap letters, so lets convert it to text to see what we've got :"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"A ALGAG JGOW M WAJEANJ THX FOR THE COCAINE BRUH\n")),(0,c.kt)("p",null,"So he clearly bought cocaine"),(0,c.kt)("p",null,"flag : ",(0,c.kt)("inlineCode",{parentName:"p"},"brixelCTF{cocaine}")))}u.isMDXComponent=!0},3701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/evidence-6203cc7637d1afbc236f29fe9b89a297.zip"},613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/f0011328-c82efbe646f0cce0ecdecdc8b0cdc736.wav"},4473:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/f0028304-c82efbe646f0cce0ecdecdc8b0cdc736.wav"}}]);