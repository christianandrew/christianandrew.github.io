(this["webpackJsonpdeveloper-portfolio-app"]=this["webpackJsonpdeveloper-portfolio-app"]||[]).push([[0],{156:function(e,a,t){var n={"./certificates.md":[159,3],"./education.md":[160,4],"./experience.md":[161,5],"./skills.md":[162,6]};function o(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],o=a[0];return t.e(a[1]).then((function(){return t.t(o,7)}))}o.keys=function(){return Object.keys(n)},o.id=156,e.exports=o},158:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(44),r=t.n(l),i=(t(60),t(13)),c=t(45),s=t(4);i.b.add(c.a,s.g,s.f,s.a,s.c,s.j,s.n,s.b,s.m,s.k,s.l,s.e,s.i,s.d,s.h);var u,g,m,p=t(11),d=t(3),h=t(10),f=t(2),b=t(23),x=t(12),y=t(8),v="45rem",w=50,E=200,j=40,k=22,S="'Ubuntu', sans-serif",O={root:{'& a[aria-current="page"] span':{display:"inline-block !important"}},navText:Object(d.a)({marginLeft:"8px"},"@media screen and (max-width: ".concat(v,")"),{display:"none"}),currentTab:{"& .closeButton":(u={color:"#abb2bf",marginLeft:"8px",paddingLeft:"8px"},Object(d.a)(u,"@media screen and (max-width: ".concat(v,")"),{paddingLeft:"8px"}),Object(d.a)(u,"&:hover",{color:"#f3f3f3"}),u)},otherTab:{"& .closeButton":{display:"none"}}},N=Object(f.a)(O),H=function(e){var a=e.name,t=e.url,n=(e.mdFileName,Object(x.a)(e,["name","url","mdFileName"])),l=N();return o.a.createElement("span",{className:l.root},o.a.createElement(p.a,{to:t,getProps:function(e){return{className:e.isCurrent?l.currentTab:l.otherTab}}},o.a.createElement(y.a,Object.assign({},n,{size:n.size||"lg"})),o.a.createElement("span",{className:l.navText},a),o.a.createElement(y.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Object(p.d)("/")},className:"closeButton",icon:"times",size:"1x",title:"Close"})))},z=t(6),C=t.n(z),I={root:{fontFamily:S,height:j},list:{color:"#abb2bf",listStyle:"none",margin:"0",padding:"0"},listItem:{display:"inline-block","& a":(g={borderRight:"1px solid ".concat(C()("#282c34").darken(.05).string()),borderTop:"4px solid ".concat("#21252b"),cursor:"pointer",display:"inline-block",fontSize:"1.2rem",letterSpacing:"0.5px",padding:"10px 15px",textTransform:"lowercase",transition:"background, border-color 250ms ease"},Object(d.a)(g,"@media screen and (max-width: ".concat(v,")"),{letterSpacing:"0",padding:"10px"}),Object(d.a)(g,'&:hover, &[aria-current="page"]',{borderTopColor:"#21252b",background:C()("#21252b").lighten(.02).string(),color:"#f3f3f3"}),Object(d.a)(g,'&[aria-current="page"]',{background:"#282c34",borderTopColor:C()("#21252b").lighten(.05).string()}),g)}},D=Object(f.a)(I),T=function(e){var a=e.tabs,t=D();return o.a.createElement("nav",{className:t.root},o.a.createElement("ul",{className:t.list},a.map((function(e){return o.a.createElement("li",{className:t.listItem,key:e.name},o.a.createElement(H,e))}))))},F={root:{background:"#21252b",position:"sticky",top:0,left:0,width:"100%",height:j}},M=Object(f.a)(F),B=function(e){var a=e.tabs,t=M();return o.a.createElement("header",{className:t.root},o.a.createElement(T,{tabs:a}))},A={link:{color:"#9599a0",cursor:"pointer",marginBottom:"10px",transition:"color 100ms ease","&:hover":{color:C()("#9599a0").lighten(.2).string()},"&:last-of-type":{marginBottom:"20px"}},iconWrapper:{position:"relative",display:"inline-block"},icon:{padding:"10px"},badge:{position:"absolute",right:"4px",top:"4px",fontSize:"0.8em",backgroundColor:"#98c379",borderRadius:"4px",color:"#111",padding:"1px 2px",opacity:"0.9"}},L=Object(f.a)(A),J=function(e){var a=e.name,t=e.url,n=e.icon,l=e.isInternal,r=e.badge,i=L(),c=o.a.createElement("span",{className:i.iconWrapper},o.a.createElement(y.a,{className:i.icon,icon:n,size:"lg"}),r&&o.a.createElement("span",{className:i.badge},r));return l?o.a.createElement(p.a,{to:t,key:"left-bar-".concat(a),className:i.link,"aria-label":a,title:a},c):o.a.createElement("a",{href:t,key:"left-bar-".concat(a),className:i.link,"aria-label":"Find me on ".concat(a),title:"Find me on ".concat(a),target:"_blank",rel:"noopener noreferrer"},c)},W=t(48),G=t.n(W),U={root:{background:"#21252b",borderRadius:"4px",color:"#abb2bf",display:"flex",margin:"8px",transition:"color 500ms ease","&:hover":{background:C()("#21252b").darken(.1).string()},"&:hover .icon":{color:"#42a5f5"}},contents:{alignItems:"center",display:"flex",minHeight:"24px",padding:"6px 10px"},text:{fontSize:"1.2rem",fontWeight:400,marginLeft:"6px"},count:{fontSize:"1.2rem",background:C()("#21252b").lighten(.5).string(),borderRadius:"50%",marginLeft:"10px",padding:"4px 8px"}},P=Object(f.a)(U),K=function(e){var a=e.href,t=e.title,n=e.icon,l=e.size,r=e.text,i=e.showCount,c=e.count,s=P();return o.a.createElement("a",{className:s.root,href:a,"aria-label":t,title:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:s.contents},o.a.createElement(y.a,{className:"icon",icon:n,size:l||"lg"}),o.a.createElement("span",{className:s.text},r),!!i&&o.a.createElement("span",{className:s.count},c)))},_=t(17),R=t.n(_),q=t(24),V=t(34),Y=function(e){return{data:e,lastChecked:Date.now()}},X=function(e,a){return void 0!==e.data&&!function(e,a){return Date.now()>e.lastChecked+60*a*1e3}(e,a)},$=function(e){var a=e.resource,t=a.attr,l=a.endpoint,r=e.timeout,i=void 0===r?10:r,c=Object(x.a)(e,["resource","timeout"]),s=Object(n.useState)(!1),u=Object(h.a)(s,2),g=u[0],m=u[1],p=function(e,a){var t=Object(n.useState)((function(){var t,n=Y(a);try{t=JSON.parse(window.localStorage.getItem(e)||JSON.stringify(n))}catch(o){t=n}return t})),o=Object(h.a)(t,2),l=o[0],r=o[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(l))}),[l,e]),[l,r]}(t,void 0),d=Object(h.a)(p,2),f=d[0],b=d[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(q.a)(R.a.mark((function e(){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l);case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent)[t]>=0&&b(Y(n[t])),m(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();X(f,i)||e()})),o.a.createElement(K,Object.assign({},c,{showCount:!g&&void 0!==f,count:f.data}))},Q=Object(f.a)({root:{display:"flex",flexDirection:"column",marginTop:"50px","& div":{display:"flex",alignItems:"center",justifyContent:"center"}}}),Z=function(e){var a=e.contactData,t=e.repoUrl,n=Q(),l=function(e){var a=new URL(e).pathname.split("/");return{repo:a.pop()||"",username:a.pop()||""}}(t),r=l.repo,i=l.username,c=[{resource:{endpoint:"https://api.github.com/users/".concat(i),attr:"followers"},href:"https://github.com/".concat(i),title:"Follow @".concat(i," on GitHub"),icon:["fab","github"],size:"lg",text:"Follow @".concat(i)},{resource:{endpoint:"https://api.github.com/repos/".concat(i,"/").concat(r),attr:"stargazers_count"},href:t,title:"Star ".concat(i,"/").concat(r," on GitHub"),icon:"star",size:"sm",text:"Star"}],s=a.find((function(e){return e.isMain}));return o.a.createElement("div",{className:n.root},o.a.createElement("div",null,c.map((function(e){return o.a.createElement($,Object.assign({key:"gh-btn-".concat(e.resource.attr)},e))}))),o.a.createElement("div",null,o.a.createElement(K,{href:s.url,title:"Find me on ".concat(s.name),icon:s.icon,size:"lg",text:"Contact Me"})))},ee=t(49),ae=t(5),te=function(e){var a=e.title,t=e.description,n=e.lang,l=void 0===n?"en":n,r=e.meta,i=void 0===r?[]:r,c=t||ae.description;return o.a.createElement(ee.a,{htmlAttributes:{lang:l},title:a,titleTemplate:"%s \u2022 ".concat(ae.title),meta:[{name:"description",content:c},{name:"keywords",content:ae.keywords},{name:"canonical",content:ae.homepage},{name:"theme-color",content:ae.themeColor},{property:"og:title",content:ae.title},{property:"og:description",content:ae.description},{property:"og:type",content:"website"},{property:"og:url",content:ae.homepage},{property:"og:image",content:ae.image},{property:"og:image:width",content:"320"},{property:"og:image:height",content:"320"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:ae.homepage},{name:"twitter:title",content:ae.title},{name:"twitter:description",content:ae.description},{name:"twitter:image",content:ae.image},{name:"google-site-verification",content:ae.verification.google}].concat(i)})},ne={root:{alignItems:"center",display:"flex",flexDirection:"column",width:"100%",height:"calc(100vh - ".concat(j+k,"px)"),justifyContent:"center",fontFamily:S},heading:Object(d.a)({color:"#c2c2c2",fontWeight:400,fontSize:"3.2rem",letterSpacing:"2px",margin:"10px 20px",padding:"0",textShadow:"5px 5px ".concat("#21252b"),userSelect:"none"},"@media screen and (max-width: ".concat(v,")"),{fontSize:"2.4rem"}),typedWrap:Object(d.a)({color:"#909295",fontSize:"2.4rem",fontWeight:400,margin:"5px",padding:"0",userSelect:"none","& a":{textDecoration:"none",borderBottom:"1px dashed ".concat("#909295")},"& strong":{fontWeight:"500"}},"@media screen and (max-width: ".concat(v,")"),{fontSize:"2.0rem"}),".typed-cursor":{color:"#42a5f5"}},oe=Object(f.a)(ne),le=function(e){var a=e.staticData,t=e.contactData,l=e.repoUrl,r=oe();Object(n.useEffect)((function(){var e={strings:a.typed,typeSpeed:70,backSpeed:50,loop:!0,smartBackspace:!0},t=new G.a("#typed-insert-point",e);return function(){t.destroy()}}),[a]);var i=function(){var e=Math.floor(Math.random()*V.length);return"".concat(V[e].hello,"!")}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(te,{title:i}),o.a.createElement("section",{className:r.root},o.a.createElement("h1",{className:r.heading},a.mainLine),o.a.createElement("div",{className:r.typedWrap},o.a.createElement("span",{id:"typed-insert-point",style:{whiteSpace:"pre"}})),o.a.createElement(Z,{contactData:t,repoUrl:l})))},re=t(52),ie=t(25),ce=t(26),se=[{name:"Home",url:"/",icon:"home",isInternal:!0,comp:function(){return o.a.createElement(le,{staticData:re,contactData:ie,repoUrl:ce.repository.url})}}],ue=[{name:"skills.js",url:"/skills",icon:["fab","js"],color:"#ffca28",mdFileName:"skills"},{name:".educationrc",url:"/education",icon:"university",color:"#42a5f5",mdFileName:"education"},{name:"experience.config",url:"/experience",icon:"sliders-h",color:"#98c379",mdFileName:"experience"},{name:"certificates.sass",url:"/certificates",icon:["fab","sass"],color:"#e13e76",mdFileName:"certificates"}],ge={root:(m={alignItems:"center",background:"#333842",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",position:"fixed",left:"0",top:"0",width:"".concat(w,"px")},Object(d.a)(m,"@media screen and (max-width: ".concat(v,")"),{display:"none"}),Object(d.a)(m,"& div",{display:"flex",alignItems:"center",flexDirection:"column",padding:"10px 0"}),m),divider:{height:"1px",background:C()("#333842").lighten(.35).string(),width:"95%",marginTop:"4px",marginBottom:"12px"}},me=Object(f.a)(ge),pe=function(e){var a=e.contactData,t=me(),n=se.map((function(e){return{name:e.name,url:e.url,icon:e.icon,isInternal:e.isInternal,badge:e.badge}})),l=function(e){return e.map((function(e){return o.a.createElement(J,Object.assign({key:e.name},e))}))};return o.a.createElement("div",{className:t.root},o.a.createElement("div",null,l(n),o.a.createElement("span",{className:t.divider}),l(a)),o.a.createElement("div",null,l([{name:"Useless button!",url:"",icon:"cog",isInternal:!0}])))},de={root:{background:"#21252b",height:"100vh",position:"fixed",top:"0",left:w,width:E,"& li":{listStyle:"none",padding:"6px 12px"}},closed:{display:"none"}},he=Object(f.a)(de),fe=function(e){var a=e.tabs,t=e.open,n=he();return o.a.createElement("div",{className:Object(b.a)(n.root,Object(d.a)({},n.closed,!t))},a.map((function(e){return o.a.createElement("li",{key:e.name},e.mdFileName)})))},be={root:{bottom:"0",background:"#21252b",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:S,fontWeight:400,left:"0",position:"fixed",width:"100vw",height:k,"& span, & a":{display:"inline-block",padding:"2px 8px","&:hover":{background:"#282c34",cursor:"pointer"}}},icon:{color:"#abb2bf"},text:{color:"#abb2bf",fontSize:"1.2rem",padding:"0 4px"}},xe=Object(f.a)(be),ye=function(){var e=xe();return o.a.createElement("footer",{className:e.root},o.a.createElement("a",{href:ce.repository.url,rel:"noopener noreferrer",target:"_blank"},o.a.createElement(y.a,{className:e.icon,icon:"code-branch",size:"xs",inverse:!0}),o.a.createElement("span",{className:e.text},"master")),o.a.createElement("span",null,o.a.createElement(y.a,{className:e.icon,icon:"smile",size:"sm",inverse:!0})))},ve={"@global":{html:{fontSize:"62.5%"},body:{fontFamily:"'Ubuntu Mono', monospace",fontSize:"1.6rem",background:"#282c34",boxSizing:"border-box"},button:{cursor:"pointer","&:disabled":{cursor:"default"}},a:{color:"#abb2bf",textDecoration:"none",transition:"color 500ms ease","&:visited":{color:C()("#abb2bf").darken(.1).string()}},".color-transform":{transform:"color 500ms ease"}},root:{position:"absolute",height:"100vh",width:"calc(100% - ".concat(w,"px)"),padding:0,margin:0},content:Object(d.a)({position:"relative",top:0,left:"".concat(w,"px"),right:0,width:"100%"},"@media screen and (max-width: ".concat(v,")"),{left:"0"}),explorerOpen:{left:"".concat(w+E,"px")}},we=Object(f.a)(ve),Ee=function(e){var a=e.children,t=e.tabs,l=e.contactData,r=Object(n.useState)(!1),i=Object(h.a)(r,2),c=i[0],s=(i[1],we());return o.a.createElement("div",{className:s.root},o.a.createElement(pe,{contactData:l}),o.a.createElement(fe,{tabs:t,open:c}),o.a.createElement("main",{className:Object(b.a)(s.content,Object(d.a)({},s.explorerOpen,c))},o.a.createElement(B,{tabs:t}),a),o.a.createElement(ye,null))},je=t(53),ke=t.n(je),Se={root:Object(d.a)({maxWidth:"960px",padding:"0 20px",marginBottom:"200px","& a:hover":{color:"#c2c2c2"},"& li":{listStyle:"square"}},"@media screen and (max-width: ".concat(v,")"),{marginLeft:0}),content:{color:"#abb2bf",fontSize:"1.6rem","& h3":{color:"#42a5f5"},"& ul":Object(d.a)({"& li":{paddingBottom:"4px"}},"@media screen and (max-width: ".concat(v,")"),{paddingLeft:"20px"})}},Oe=Object(f.a)(Se),Ne=function(e){var a=e.seo,t=e.children,n=Oe();return o.a.createElement(o.a.Fragment,null,!!a&&o.a.createElement(te,a),o.a.createElement("div",{className:n.root},o.a.createElement("div",{className:n.content},t)))},He=function(e){var a=e.fileName,l=Object(n.useState)(""),r=Object(h.a)(l,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(q.a)(R.a.mark((function e(){var n,o,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(156)("./".concat(a,".md"));case 2:return n=e.sent,e.next=5,fetch(n.default);case 5:return o=e.sent,e.next=8,o.text();case 8:l=e.sent,c(l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),o.a.createElement(Ne,{seo:{title:a}},o.a.createElement(ke.a,{source:i}))},ze=function(e){var a=e.comp,t=Object(x.a)(e,["comp"]);return o.a.createElement(a,t)},Ce=function(e){var a=e.fileName;return o.a.createElement(He,{fileName:a})},Ie=[se.map((function(e){var a=e.name,t=e.url,n=e.comp,l=Object(x.a)(e,["name","url","comp"]);return o.a.createElement(ze,Object.assign({path:t,key:a,comp:n},l))})),ue.map((function(e){var a=e.name,t=e.url,n=e.mdFileName;return o.a.createElement(Ce,{path:t,key:a,fileName:n})})),o.a.createElement(p.b,{key:"notfound",from:"*",to:"/",default:!0,noThrow:!0})],De=function(){return o.a.createElement(Ee,{tabs:ue,contactData:ie},o.a.createElement(p.c,null,Ie))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(54);t.n(Te).a.config(),r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e){e.exports=JSON.parse('[{"name":"Telegram","url":"https://t.me/nymos7","icon":["fab","telegram-plane"],"isMain":true},{"name":"GitHub","url":"https://github.com/alpha666","icon":["fab","github"],"isMain":false},{"name":"LinkedIn","url":"https://www.linkedin.com/in/christian-andrew-85903512a/","icon":["fab","linkedin"],"isMain":false},{"name":"Instagram","url":"https://www.instagram.com/christian_andrew7/","icon":["fab","instagram"],"isMain":false}]')},26:function(e){e.exports=JSON.parse('{"name":"developer-portfolio-app","version":"2.0.0","description":"VS Code/Atom One Dark inspired developer portfolio app.","private":true,"repository":{"type":"git","url":"https://github.com/alpha666/"},"homepage":"https://christianandrew.netlify.com/","license":"GNU GPLv3","scripts":{"start":"react-scripts start","build":"react-scripts build","test:base":"react-scripts test --passWithNoTests","test":"npm run test:base -- --watchAll=false","test:watch":"npm run test:base -- --watchAll","test:update":"npm run test:base -- --updateSnapshot --forceExit","eject":"react-scripts eject","lint":"eslint \\"*/**/*.{js,ts,tsx}\\"","lint:ci":"npm run lint -- --quiet","lint:fix":"npm run lint -- --fix","predeploy":"npm run build && cp build/index.html build/404.html","deploy":"gh-pages -d build -r https://$GH_TOKEN@github.com/caglarturali/caglarturali.github.io.git","progress":"ts-node -O \'{\\"module\\":\\"commonjs\\"}\' scripts/updateProgress.ts"},"husky":{"hooks":{"pre-commit":"lint-staged","pre-push":"npm test"}},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","@fortawesome/react-fontawesome":"^0.1.13","@reach/router":"^1.3.4","clsx":"^1.1.1","color":"^3.1.3","dotenv":"^8.2.0","isomorphic-unfetch":"^3.1.0","normalize.css":"^8.0.1","react":"^16.14.0","react-circular-progressbar":"^2.0.3","react-dom":"^16.14.0","react-helmet":"^6.1.0","react-jss":"^10.5.0","react-markdown":"^4.3.1","react-scripts":"3.4.1","react-tooltip":"^4.2.11","typed.js":"^2.0.11"},"devDependencies":{"@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^10.4.9","@testing-library/user-event":"^12.5.0","@types/color":"^3.0.1","@types/jest":"^25.2.3","@types/node":"^14.14.10","@types/reach__router":"^1.3.6","@types/react":"^16.14.2","@types/react-dom":"^16.9.10","@types/react-helmet":"^5.0.16","@typescript-eslint/eslint-plugin":"^2.34.0","@typescript-eslint/parser":"^2.34.0","eslint":"6.8.0","eslint-config-prettier":"^6.15.0","eslint-plugin-prettier":"^3.2.0","eslint-plugin-react":"^7.21.5","gh-pages":"^3.1.0","husky":"^4.3.4","lint-staged":"^10.5.3","prettier":"^2.2.1","ts-node":"^9.1.0","ts-node-dev":"^1.0.0","typescript":"^3.9.7"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},34:function(e){e.exports=JSON.parse('[{"language":"Afrikaans","hello":"hallo"},{"language":"Albanian","hello":"P\xebrsh\xebndetje"},{"language":"Amharic","hello":"\u1230\u120b\u121d"},{"language":"Arabic","hello":"\u0645\u0631\u062d\u0628\u0627"},{"language":"Armenian","hello":"\u0532\u0561\u0580\u0565\u0582"},{"language":"Azerbaijani","hello":"Salam"},{"language":"Basque","hello":"Kaixo"},{"language":"Belarusian","hello":"\u0434\u043e\u0431\u0440\u044b \u0434\u0437\u0435\u043d\u044c"},{"language":"Bengali","hello":"\u09b9\u09cd\u09af\u09be\u09b2\u09cb"},{"language":"Bosnian","hello":"zdravo"},{"language":"Bulgarian","hello":"\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435"},{"language":"Catalan","hello":"Hola"},{"language":"Cebuano","hello":"Hello"},{"language":"Chichewa","hello":"Moni"},{"language":"Chinese (Simplified)","hello":"\u60a8\u597d"},{"language":"Chinese (Traditional)","hello":"\u60a8\u597d"},{"language":"Corsican","hello":"Bonghjornu"},{"language":"Croatian","hello":"zdravo"},{"language":"Czech","hello":"Ahoj"},{"language":"Danish","hello":"Hej"},{"language":"Dutch","hello":"Hallo"},{"language":"English","hello":"Hello"},{"language":"Esperanto","hello":"Saluton"},{"language":"Estonian","hello":"Tere"},{"language":"Filipino","hello":"Hello"},{"language":"Finnish","hello":"Hei"},{"language":"French","hello":"Bonjour"},{"language":"Frisian","hello":"Hello"},{"language":"Galician","hello":"Ola"},{"language":"Georgian","hello":"\u10d2\u10d0\u10db\u10d0\u10e0\u10ef\u10dd\u10d1\u10d0"},{"language":"German","hello":"Hallo"},{"language":"Greek","hello":"\u0393\u03b5\u03b9\u03b1 \u03c3\u03b1\u03c2"},{"language":"Gujarati","hello":"\u0ab9\u0ac7\u0ab2\u0acb"},{"language":"Haitian Creole","hello":"Bonjou"},{"language":"Hausa","hello":"Sannu"},{"language":"Hawaiian","hello":"Aloha\u02bboe"},{"language":"Hebrew","hello":"\u05e9\u05dc\u05d5\u05dd"},{"language":"Hindi","hello":"\u0928\u092e\u0938\u094d\u0924\u0947"},{"language":"Hmong","hello":"Nyob zoo"},{"language":"Hungarian","hello":"Hell\xf3"},{"language":"Icelandic","hello":"Hall\xf3"},{"language":"Igbo","hello":"Ndewo"},{"language":"Indonesian","hello":"Halo"},{"language":"Irish","hello":"Dia duit"},{"language":"Italian","hello":"Ciao"},{"language":"Japanese","hello":"\u3053\u3093\u306b\u3061\u306f"},{"language":"Javanese","hello":"Hello"},{"language":"Kannada","hello":"\u0cb9\u0cb2\u0ccb"},{"language":"Kazakh","hello":"\u0421\u04d9\u043b\u0435\u043c"},{"language":"Khmer","hello":"\u1787\u17c6\u179a\u17b6\u1794\u179f\u17bd\u179a"},{"language":"Korean","hello":"\uc548\ub155\ud558\uc138\uc694."},{"language":"Kurdish (Kurmanji)","hello":"Hello"},{"language":"Kyrgyz","hello":"\u0441\u0430\u043b\u0430\u043c"},{"language":"Lao","hello":"\u0eaa\u0eb0\u0e9a\u0eb2\u0e8d\u0e94\u0eb5"},{"language":"Latin","hello":"salve"},{"language":"Latvian","hello":"Labdien!"},{"language":"Lithuanian","hello":"Sveiki"},{"language":"Luxembourgish","hello":"Moien"},{"language":"Macedonian","hello":"\u0417\u0434\u0440\u0430\u0432\u043e"},{"language":"Malagasy","hello":"Hello"},{"language":"Malay","hello":"Hello"},{"language":"Malayalam","hello":"\u0d39\u0d32\u0d4b"},{"language":"Maltese","hello":"Hello"},{"language":"Maori","hello":"Hiha"},{"language":"Marathi","hello":"\u0939\u0945\u0932\u094b"},{"language":"Mongolian","hello":"\u0421\u0430\u0439\u043d \u0431\u0430\u0439\u043d\u0430 \u0443\u0443"},{"language":"Myanmar (Burmese)","hello":"\u1019\u1004\u103a\u1039\u1002\u101c\u102c\u1015\u102b"},{"language":"Nepali","hello":"\u0928\u092e\u0938\u094d\u0924\u0947"},{"language":"Norwegian","hello":"Hallo"},{"language":"Pashto","hello":"\u0633\u0644\u0627\u0645"},{"language":"Persian","hello":"\u0633\u0644\u0627\u0645"},{"language":"Polish","hello":"Cze\u015b\u0107"},{"language":"Portuguese","hello":"Ol\xe1"},{"language":"Punjabi","hello":"\u0a39\u0a48\u0a32\u0a4b"},{"language":"Romanian","hello":"Alo"},{"language":"Russian","hello":"\u043f\u0440\u0438\u0432\u0435\u0442"},{"language":"Samoan","hello":"Talofa"},{"language":"Scots Gaelic","hello":"Hello"},{"language":"Serbian","hello":"\u0417\u0434\u0440\u0430\u0432\u043e"},{"language":"Sesotho","hello":"Hello"},{"language":"Shona","hello":"Hello"},{"language":"Sindhi","hello":"\u0647\u064a\u0644\u0648"},{"language":"Sinhala","hello":"\u0dc4\u0dd9\u0dbd\u0ddd"},{"language":"Slovak","hello":"ahoj"},{"language":"Slovenian","hello":"Pozdravljeni"},{"language":"Somali","hello":"Hello"},{"language":"Spanish","hello":"Hola"},{"language":"Sundanese","hello":"halo"},{"language":"Swahili","hello":"Sawa"},{"language":"Swedish","hello":"Hall\xe5"},{"language":"Tajik","hello":"\u0421\u0430\u043b\u043e\u043c"},{"language":"Tamil","hello":"\u0bb9\u0bb2\u0bc7\u0bbe"},{"language":"Telugu","hello":"\u0c39\u0c32\u0c4b"},{"language":"Thai","hello":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35"},{"language":"Turkish","hello":"Merhaba"},{"language":"Ukranian","hello":"\u0417\u0434\u0440\u0430\u0441\u0442\u0443\u0439\u0442\u0435"},{"language":"Urdu","hello":"\u06c1\u06cc\u0644\u0648"},{"language":"Uzbek","hello":"Salom"},{"language":"Vietnamese","hello":"Xin ch\xe0o"},{"language":"Welsh","hello":"Helo"},{"language":"Xhosa","hello":"Sawubona"},{"language":"Yiddish","hello":"\u05d4\u05e2\u05dc\u05d0"},{"language":"Yoruba","hello":"Kaabo"},{"language":"Zulu","hello":"Sawubona"}]')},5:function(e){e.exports=JSON.parse('{"title":"Christian Andrew","description":"Christian Andrew personal portfolio website","keywords":"JavaScript, TypeScript, React, Fullstack JavaScript, Node, Flutter, Dart, Vue, MongoDB, MEAN stack, MERN stack, GatsbyJS, NextJS, Bilen Adam, Astroloci","homepage":"https://http://christianandrew.netlify.com/","themeColor":"#21252b","image":"https://turali.js.org/images/logo512.png","verification":{"google":"yoA6kTc96mzuKG5z93MpyxJbTBmCeHRsP64QEEGuI28"}}')},52:function(e){e.exports=JSON.parse('{"mainLine":"Hi! I\'m Christian Andrew.","typed":["I\'m a Full Stack Developer.","I\'m interested at Cybersecurity and Internet of Things","I\'m a <strong>Technology</strong> Enthusiast.","You know where this goes..","..I\'m a <strong>Full-Stack</strong> Web Developer. :)"],"diploma":{"title":"Diploma in Software Engineering","subtitle":"Specialization in Autonomous Systems","info":"Long story short, I\'ve been thinking about pursuing a postgraduate degree in software engineering for a while now but, eventually, I\'ve decided to go my way. So, here it is, my self-curated study plan of Software Engineering Diploma! I will be attending courses listed below and will be doing practical assignments throughout my studies but it won\'t necessarily be my priority to pursue any form of \'certificate of completion\'. We\'ll all see how it goes. :)"}}')},55:function(e,a,t){e.exports=t(158)}},[[55,1,2]]]);
//# sourceMappingURL=main.903382c1.chunk.js.map