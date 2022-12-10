"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[5493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),u=i,g=f["".concat(o,".").concat(u)]||f[u]||d[u]||p;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,l=new Array(p);l[0]=u;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[f]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<p;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const p={},l="FLIP_FLOP",a={unversionedId:"2021/IMAGINARYCTF/challenges/flip_flop",id:"2021/IMAGINARYCTF/challenges/flip_flop",title:"FLIP_FLOP",description:"- File : flop.py",source:"@site/docs/2021/IMAGINARYCTF/challenges/flip_flop.md",sourceDirName:"2021/IMAGINARYCTF/challenges",slug:"/2021/IMAGINARYCTF/challenges/flip_flop",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/flip_flop",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2021/IMAGINARYCTF/challenges/flip_flop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAKE_CANARY",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/fake_canary"},next:{title:"FORMATTING",permalink:"/writeups-docs/docs/2021/IMAGINARYCTF/challenges/formatting"}},o={},c=[{value:"Steps",id:"steps",level:2}],s={toc:c};function f(e){let{components:n,...p}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flip_flop"},"FLIP_FLOP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Description\nYesterday, Roo bought some new flip flops. Let's see how good at flopping you are.\n\nAttachments\nhttps://imaginaryctf.org/r/7B4E-flop.py nc chal.imaginaryctf.org 42011\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File : ",(0,i.kt)("a",{target:"_blank",href:t(1617).Z},"flop.py"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/local/bin/python\nfrom Crypto.Cipher import AES\nfrom Crypto.Util.Padding import pad, unpad\nimport binascii\nimport os\n\nprint(\'\'\'\n                                        ,,~~~~~~,,..\n                             ...., ,\'~             |\n                             \\    V                /\n                              \\  /                 /\n                              ;####>     @@@@@     )\n                              ##;,      @@@@@@@    )\n                           .##/  ~>      @@@@@   .   .\n                          ###\'\'#>              \'      \'\n      .:::::::.      ..###/ #>               \'         \'\n     //////))))----~~ ## #}                \'            \'\n   ///////))))))                          \'             \'\n  ///////)))))))\\                        \'              \'\n //////)))))))))))                                      \'\n |////)))))))))))))____________________________________).\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n\n(yeah they\'re not flip flops but close enough)\n\n\'\'\')\n\nkey = os.urandom(16)\niv = os.urandom(16)\nflag = open("flag.txt").read().strip()\n\n\nfor _ in range(3):\n    print("Send me a string that when decrypted contains \'gimmeflag\'.")\n    print("1. Encrypt")\n    print("2. Check")\n    choice = input("> ")\n    if choice == "1":\n        cipher = AES.new(key, AES.MODE_CBC, iv)\n        pt = binascii.unhexlify(input("Enter your plaintext (in hex): "))\n        if b"gimmeflag" in pt:\n            print("I\'m not making it *that* easy for you :kekw:")\n        else:\n            print(binascii.hexlify(cipher.encrypt(pad(pt, 16))).decode())\n    else:\n        cipher = AES.new(key, AES.MODE_CBC, iv)\n        ct = binascii.unhexlify(input("Enter ciphertext (in hex): "))\n        assert len(ct) % 16 == 0\n        if b"gimmeflag" in cipher.decrypt(ct):\n            print(flag)\n        else:\n            print("Bad")\n\nprint("Out of operations!")\n')),(0,i.kt)("p",null,"A key and an IV is picked at random for an AES CBC encryption algorithm."),(0,i.kt)("p",null,"You can encrypt a chosen text and get the cypher."),(0,i.kt)("p",null,"In order to get the flag you need to enter a cipher that when decrypted contains 'gimmeflag'."),(0,i.kt)("p",null,"Obviously you can't encrypt 'gimmeflag' directly...."),(0,i.kt)("p",null,"Here we will perform a ",(0,i.kt)("strong",{parentName:"p"},"bitflip attack")," (as suggested by the name of the challenge)"),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first step is to encrypt a string containing 'gimmeflag' but with a difference of one bit"),(0,i.kt)("li",{parentName:"ul"},"Flip the bit"),(0,i.kt)("li",{parentName:"ul"},"And decrypt the flipped cipher to obtain 'gimmeflag'\nThe AES CBC decryption works with 16 bytes blocks likewise :")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"902px-CBC_decryption.png",src:t(6386).Z,title:"902px-CBC_decryption.png",width:"902",height:"363"}),"\nSo we ask the script to encrypt this string :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ A A A A A A A A A A A A A A A A ] [ f i m m e f l a g ]\n")),(0,i.kt)("p",null,"Because ",(0,i.kt)("strong",{parentName:"p"},"f (110 0110)")," and ",(0,i.kt)("strong",{parentName:"p"},"g (110 0111)")," are one bit off in ascii"),(0,i.kt)("p",null,"We then flip the first bit of the first character in the first block of the cipher."),(0,i.kt)("p",null,"And we ask the script to decrypt it to obtain the flag !"),(0,i.kt)("p",null,"Here is the script :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File : ",(0,i.kt)("a",{target:"_blank",href:t(4177).Z},"solve.py"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\n\np = remote('chal.imaginaryctf.org', 42011)\n\np.recvuntil('Check\\n').decode()\np.recvuntil('> ').decode()\np.send(b'1\\n')\np.recvuntil(': ').decode()\n\nlog.info(\"Sending 'fimmeflag'\")\np.send(b'0'*32+binascii.hexlify(b'fimmeflag')+b'\\n')\n\nlog.info(\"Flipping 1st byte in cipher\")\ncipher = binascii.unhexlify(p.recvuntil('\\n')[:-1])\ncipher = (cipher[0]^0b1).to_bytes(1,'little')+cipher[1:]\ncipher = binascii.hexlify(cipher)\n\np.recvuntil('> ').decode()\np.send(b'2\\n')\np.recvuntil(': ').decode()\n\nlog.info(\"Sending flipped cipher\")\np.send(cipher+b'\\n')\nflag = p.recvuntil('\\n').decode()\nlog.success('Flag = '+flag)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python solve.py\n[+] Opening connection to chal.imaginaryctf.org on port 42011: Done\n[*] Sending 'fimmeflag'\n[*] Flipping 1st byte in cipher\n[*] Sending flipped cipher\n[+] Flag = ictf{fl1p_fl0p_b1ts_fl1pped_b6731f96}\n")),(0,i.kt)("p",null,"flag : ",(0,i.kt)("inlineCode",{parentName:"p"},"ictf{fl1p_fl0p_b1ts_fl1pped_b6731f96}")))}f.isMDXComponent=!0},1617:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/flop-c7ffdd96644bfe442e61900774a7d52a.py"},4177:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/solve-267800a61b944d3b475d73a9016f2977.py"},6386:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/902px-CBC_decryption-02addfd3d73f2175db4baf18c9116975.png"}}]);