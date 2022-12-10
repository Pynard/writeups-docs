"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[6265],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>b});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),v=i,b=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return r?t.createElement(b,o(o({ref:n},s),{},{components:r})):t.createElement(b,o({ref:n},s))}));function b(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const a={},o="ANDROID",p={unversionedId:"2020/BRIXEL/challenges/android",id:"2020/BRIXEL/challenges/android",title:"ANDROID",description:"- Fichier : brixelCTF.apk",source:"@site/docs/2020/BRIXEL/challenges/android.md",sourceDirName:"2020/BRIXEL/challenges",slug:"/2020/BRIXEL/challenges/android",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/android",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2020/BRIXEL/challenges/android.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BRIXEL",permalink:"/writeups-docs/docs/2020/BRIXEL/"},next:{title:"BIRDCALL",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/birdcall"}},l={},c=[],s={toc:c};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android"},"ANDROID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"This little android app requires a password, can you find it?\n\nthe flag is the password\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fichier : ",(0,i.kt)("a",{target:"_blank",href:r(563).Z},"brixelCTF.apk"))),(0,i.kt)("p",null,"unzip brixelCTF.apk"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ strings classes* | grep brixel\nt/tmp/1602666767984_0.27958933214667514-0/youngandroidproject/../src/appinventor/ai_kevin_erna/brixelCTF/Screen1.yail\nt/tmp/1602666767984_0.27958933214667514-0/youngandroidproject/../src/appinventor/ai_kevin_erna/brixelCTF/Screen2.yail\nt/tmp/1602666767984_0.27958933214667514-0/youngandroidproject/../src/appinventor/ai_kevin_erna/brixelCTF/Screen3.yail\n,Lappinventor/ai_kevin_erna/brixelCTF/R$anim;\n,Lappinventor/ai_kevin_erna/brixelCTF/R$attr;\n,Lappinventor/ai_kevin_erna/brixelCTF/R$bool;\n-Lappinventor/ai_kevin_erna/brixelCTF/R$color;\n-Lappinventor/ai_kevin_erna/brixelCTF/R$dimen;\n0Lappinventor/ai_kevin_erna/brixelCTF/R$drawable;\n*Lappinventor/ai_kevin_erna/brixelCTF/R$id;\n/Lappinventor/ai_kevin_erna/brixelCTF/R$integer;\n.Lappinventor/ai_kevin_erna/brixelCTF/R$layout;\n.Lappinventor/ai_kevin_erna/brixelCTF/R$mipmap;\n.Lappinventor/ai_kevin_erna/brixelCTF/R$string;\n-Lappinventor/ai_kevin_erna/brixelCTF/R$style;\n1Lappinventor/ai_kevin_erna/brixelCTF/R$styleable;\n+Lappinventor/ai_kevin_erna/brixelCTF/R$xml;\n'Lappinventor/ai_kevin_erna/brixelCTF/R;\n3Lappinventor/ai_kevin_erna/brixelCTF/Screen1$frame;\n-Lappinventor/ai_kevin_erna/brixelCTF/Screen1;\n3Lappinventor/ai_kevin_erna/brixelCTF/Screen2$frame;\n-Lappinventor/ai_kevin_erna/brixelCTF/Screen2;\n3Lappinventor/ai_kevin_erna/brixelCTF/Screen3$frame;\n-Lappinventor/ai_kevin_erna/brixelCTF/Screen3;\n    brixelCTF\n+brixelCTF{th3_4ndr0ids_y0u_4r3_l00k1ng_f0r}\n")),(0,i.kt)("p",null,"flag : ",(0,i.kt)("inlineCode",{parentName:"p"},"brixelCTF{th3_4ndr0ids_y0u_4r3_l00k1ng_f0r}")))}d.isMDXComponent=!0},563:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/files/brixelCTF-5a97f6a630f78f23fc7866b3ee8f7b32.apk"}}]);