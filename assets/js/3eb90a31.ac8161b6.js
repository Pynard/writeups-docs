"use strict";(self.webpackChunkwriteups_docs=self.webpackChunkwriteups_docs||[]).push([[7998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={},a="QUIZBOT",i={unversionedId:"2020/BRIXEL/challenges/quizbot",id:"2020/BRIXEL/challenges/quizbot",title:"QUIZBOT",description:"On this page we have to answer to 1000 questions !",source:"@site/docs/2020/BRIXEL/challenges/quizbot.md",sourceDirName:"2020/BRIXEL/challenges",slug:"/2020/BRIXEL/challenges/quizbot",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/quizbot",draft:!1,editUrl:"https://github.com/pynard/writeups-docs/tree/main/docs/2020/BRIXEL/challenges/quizbot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PUNCHCARD",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/punchcard"},next:{title:"REGISTERE ME",permalink:"/writeups-docs/docs/2020/BRIXEL/challenges/registereme"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quizbot"},"QUIZBOT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Legend has it there's a flag at the end when you have a perfect score\n\nhttp://timesink.be/quizbot\n")),(0,o.kt)("p",null,"On this page we have to answer to 1000 questions !"),(0,o.kt)("p",null,"Gladly when your answer is wrong, the right answer is given with the next question."),(0,o.kt)("p",null,"So lets write a bot that gathers all questions + answers in a dict and then play the quiz with them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nfrom bs4 import BeautifulSoup\nfrom tqdm import tqdm\n\n\nurl = 'http://timesink.be/quizbot/index.php'\npost_data = {'insert_answer':' ', 'submit':'answer'}\nquiz = {}\n\n###\n\nresponse = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})\nhtml_text = response.text\ncookies = response.cookies.get_dict()\nsoup = BeautifulSoup(html_text,'html.parser')\nquestion = soup.find(name='h4').text\n\nwith tqdm(range(1000),desc='Downloading questions + answers') as pbar:\n    for i in pbar:\n        response = requests.post(url, cookies=cookies, data=post_data, headers={'User-Agent': 'Mozilla/5.0'})\n        html_text = response.text\n        \n        soup = BeautifulSoup(html_text,'html.parser')\n        answer = soup.find(name='div',attrs={'id':'answer'}).text\n        quiz[question] = answer\n        if i != 999:\n            question = soup.find(name='h4').text\n        pbar.update(1)\n\n\n###\n\nresponse = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})\nhtml_text = response.text\ncookies = response.cookies.get_dict()\nsoup = BeautifulSoup(html_text,'html.parser')\nquestion = soup.find(name='h4').text\n\nwith tqdm(range(1000),desc='Pwn quiz') as pbar:\n    for i in pbar:\n        post_data['insert_answer'] = quiz[question]\n        response = requests.post(url, cookies=cookies, data=post_data, headers={'User-Agent': 'Mozilla/5.0'})\n        html_text = response.text\n        \n        soup = BeautifulSoup(html_text,'html.parser')\n        if i != 999:\n            question = soup.find(name='h4').text\n\n        pbar.update(1)\nprint(html_text)\n")),(0,o.kt)("p",null,"And thew we get the flag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div align="center">Correct!</div>\nCongratulations, you have defeated the mighty QuizB0t, your flag is: brixelCTF{kn0wl3dg3}\n')),(0,o.kt)("p",null,"flag : ",(0,o.kt)("inlineCode",{parentName:"p"},"brixelCTF{kn0wl3dg3}")))}c.isMDXComponent=!0}}]);