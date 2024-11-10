!function(){"use strict";const e=document,t=String,n=Number,i=Array,o=Object,r=Boolean,a=JSON,s=URL,l=Date,d=Math,c=RegExp,u=Promise,f=Node,g=parseInt,h=isNaN,p=structuredClone,y=setTimeout,m=IntersectionObserver,b=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\\:]+\s*\))|[\w\.]+)\s*\}\}/i,M=/\s+([\w\.]+)\s*$/i,k=/\s*[\!\>\<\=]+\=*\s*/,C=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,w=/\.([\w_-]+)?/gi,A=/\#([\w_-]+)?/i,D=/^\w+(?=[\#\.]*)/i,I=":path",N=":for",T=":if",x=":else-if",E=":elif",v=":else",j="add",P="addEventListener",O="animation",S="anonymous",z="appendChild",L="attributes",R="body",Y="children",Z="class",B="classList",H="cloneNode",$="createDocumentFragment",U="createElement",V="createTextNode",G="crossOrigin",W="data",Q="effect",X="ELEMENT_NODE",_="error",F="event",J="from",q="get",K="getAttribute",ee="head",te="headers",ne="id",ie="includes",oe="index",re="indexOf",ae="innerHTML",se="isArray",le="join",de="key",ce="keys",ue="lazyload",fe="length",ge="toLowerCase",he="map",pe="match",ye="next",me="nodeType",be="now",Me="observe",ke="parentElement",Ce="parentNode",we="parse",Ae="props",De="push",Ie="querySelectorAll",Ne="remove",Te="removeAttribute",xe="render",Ee="replace",ve="script",je="setAttribute",Pe="shift",Oe="slice",Se="splice",ze="split",Le="src",Re="startsWith",Ye="stringify",Ze="style",Be="tag",He="tagName",$e="temp",Ue="test",Ve="TEXT_NODE",Ge="textContent",We="toString",Qe="toUpperCase",Xe="trim",_e="type",Fe="unobserve",Je="value",qe="vdom",Ke={[T]:null,[x]:null,[E]:null,[v]:null},et={":id":"id",":src":Le,":alt":"alt",":href":"href",tagHtml:"innerHTML"},tt={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":background-image":"backgroundImage",":background-attachment":"backgroundAttachment",":background-blend-mode":"backgroundBlendMode",":background-clip":"backgroundClip",":background-origin":"backgroundOrigin",":background-position":"backgroundPosition",":background-position-x":"backgroundPositionX",":background-position-y":"backgroundPositionY",":background-repeat":"backgroundRepeat",":background-size":"backgroundSize",":background-color":"backgroundColor",":color":"color",":bg-image":"backgroundImage",":bg-attachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":bg-clip":"backgroundClip",":bg-origin":"backgroundOrigin",":bg-position":"backgroundPosition",":bg-position-x":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":bg-size":"backgroundSize",":bg-color":"backgroundColor",":borderRadius":"borderRadius",":boxSahdow":"boxShadow",":backgroundImage":"backgroundImage",":backgroundAttachment":"backgroundAttachment",":backgroundBlendMode":"backgroundBlendMode",":backgroundClip":"backgroundClip",":backgroundOrigin":"backgroundOrigin",":backgroundPosition":"backgroundPosition",":backgroundPositionX":"backgroundPositionX",":backgroundPositionY":"backgroundPositionY",":backgroundRepeat":"backgroundRepeat",":backgroundSize":"backgroundSize",":backgroundColor":"backgroundColor"},nt="beforeRender",it="beforeUpdate",ot="beforeDestroy",rt="rendered",at="updated",st="destroyed",lt="before_render",dt="before_update",ct="before_destroy",ut={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},ft={domId:"ID: 未提供。",dom:"元素: 不存在。",vdomModel:"虛擬 DOM: 未初始化。",vdomTemp:"虛擬 DOM: 未創建。"};e[ee][z](yt("style",'\n*[\\:effect="fade-in"],\n*[effect="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:effect="fade-in"].show,\n*[effect="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:effect="expand"],\n*[effect="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:effect="expand"].show,\n*[effect="expand"].show {\n    opacity: 1;\n}\n\n*[\\:animation="fade-in"],\n*[animation="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:animation="fade-in"].show,\n*[animation="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:animation="expand"],\n*[animation="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:animation="expand"].show,\n*[animation="expand"].show {\n    opacity: 1;\n}\n\n*[\\:mask="1=true"],\n*[mask="true"],\n*[\\:mask="1"],\n*[mask="1"] {\n    position: relative;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"]::after,\n*[mask="1"]::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to right, #e0e0e0 25%, #f0f0f0, #e0e0e0 75%);\n    /* 使用灰色漸層 */\n    background-size: 200% 100%;\n    /* 背景尺寸兩倍寬度 */\n    animation: loading-animation 1.5s infinite alternate;\n    /* 來回移動動畫 */\n    z-index: 10;\n    transition: 0.3s;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"].show::after,\n*[mask="1"].show::after {\n    opacity: 0;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: -100% 0;\n    }\n\n    100% {\n        background-position: 100% 0;\n    }\n}\n\nimg[lazyload]:not([lazyload=""]) {\n    animation: spin 2s ease-in-out infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}'));const gt="\ndata:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1OTVfMzA1OSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEwQzE2IDExLjc3NyAxNS4yMjc1IDEzLjM3MzYgMTQgMTQuNDcyMkMxMi45Mzg1IDE1LjQyMjMgMTEuNTM2NyAxNiAxMCAxNlYyMEMxMS40MjIyIDIwIDEyLjc3NTEgMTkuNzAzMSAxNCAxOS4xNjc5QzE3LjUzMTggMTcuNjI0OCAyMCAxNC4xMDA2IDIwIDEwQzIwIDUuODk5MzYgMTcuNTMxOCAyLjM3NTIgMTQgMC44MzIwODdDMTIuNzc1MSAwLjI5Njg5NSAxMS40MjIyIDAgMTAgMFY0QzExLjUzNjcgNCAxMi45Mzg1IDQuNTc3NzEgMTQgNS41Mjc3OUMxNS4yMjc1IDYuNjI2NDMgMTYgOC4yMjMgMTYgMTBaIiBmaWxsPSIjMzQ5OERCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxMEM0IDExLjc3NyA0Ljc3MjUgMTMuMzczNiA2IDE0LjQ3MjJDNy4wNjE1MSAxNS40MjIzIDguNDYzMjkgMTYgMTAgMTZWMjBDOC41Nzc3OSAyMCA3LjIyNDkyIDE5LjcwMzEgNiAxOS4xNjc5QzIuNDY4MTkgMTcuNjI0OCAwIDE0LjEwMDYgMCAxMEMwIDUuODk5MzYgMi40NjgxOSAyLjM3NTIgNiAwLjgzMjA4N0M3LjIyNDkyIDAuMjk2ODk1IDguNTc3NzkgMCAxMCAwVjRDOC40NjMyOSA0IDcuMDYxNTEgNC41Nzc3MSA2IDUuNTI3NzlDNC43NzI1IDYuNjI2NDMgNCA4LjIyMyA0IDEwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1OTVfMzA1OSI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\n";function ht(e,t,i){return e=n(e),i=n(i),h(e)||h(i)?void 0:"+"===t?e+i:"-"===t?e-i:"*"===t?e*i:"/"===t?e/i:"%"===t?e%i:e}async function pt(e,t=!1){return new u((async(n,i)=>{try{const o=await fetch(e);if(o.ok){const e=o[te][q]("Content-Type");if(e&&e[Re]("image")){if("image/svg+xml"==e&&!t)return void n(o);const r=await o.blob(),a=new Image,l=s.createObjectURL(r);a[Le]=l,a[G]=S,a.onload=e=>n({[Le]:l,img:a}),a.onerror=e=>{s.revokeObjectURL(l),i(e)}}else n(o)}else i(new Error(`HTTP error! status: ${o.status}`))}catch(e){i(e)}}))}function yt(n="",o,r){const a=((n[pe](D)||[])[0]||"")[Xe](),s=((n[pe](A)||[])[1]||"")[Xe](),l=(w[Ue](n)&&n[pe](w)||[])[he]((e=>e[Ee](/^\./,"")));if(a[fe]<1)return;let d,c,u,f=!1;"temp"===n?(f=!0,d=e[$]()):d=e[U](a),s[fe]&&(d[ne]=s);for(let e of l)d[B][j](e);if(null==o&&null!=r&&([o,r]=[r,null]),null!=o&&null!=r)[c,u]=[o,r];else if(null==r)"string"==typeof o||"number"==typeof o||i[se](o)?u=o:c=o;else if(null==o)return d;if("object"==typeof c&&null!=c)for(const e in c){if(!c.hasOwnProperty(e))continue;const t=c[e];-1!=["value","innerText",ae,"textContent","contentEditable"][re](e)?d[e]=t:-1!=["color","backgroundColor","width","height","display","float"][re](e)?d[Ze][e]=t:null!=t&&d[je](e,t)}if(null!=u){const n="string"==typeof u,o="number"==typeof u,r=i[se](u);if(n||o){const t=u;"img"===a||"source"===a?d[Le]=t:f?d[z](e[V](u)):d[ae]=t}else if(r)for(let n of u){const i=n instanceof Element;"string"==typeof n||"number"==typeof n?d[z](e[V](t(n))):i&&d[z](n)}}return d}function mt(e,t,n){return new Proxy(e,{get(e,i,o){const r=Reflect[q](e,i,o),a=t?`${t}.${i[We]()}`:i[We]();return"object"==typeof r&&null!==r?mt(r,a,n):r},set(e,i,o,r){const a=e[i],s=Reflect.set(e,i,o,r),l=t?`${t}.${i[We]()}`:i[We]();return a!==o&&n(l,o,a),s}})}function bt(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const i=new Date(1e3*e),o=t(i.getFullYear()),r=t(i.getMonth()+1),a=t(i.getDate()),s=t(i.getDay()),l=t(i.getHours()),d=t(i.getMinutes()),c=t(i.getSeconds()),u=t(i.getMilliseconds());let f={YYYY:o,yyyy:o,YY:o[Oe](-2),yy:o[Oe](-2),Y:o[Oe](-2),y:o[Oe](-2),M:r,MM:("0"+r)[Oe](-2),D:a,DD:("0"+a)[Oe](-2),d:s,dd:("0"+s)[Oe](-2),H:l,HH:("0"+l)[Oe](-2),h:t(g(l)%12||12),hh:("0"+(g(l)%12||12))[Oe](-2),m:d,mm:("0"+d)[Oe](-2),s:c,ss:("0"+c)[Oe](-2),SSS:("00"+u)[Oe](-3),a:g(l)>=12?"pm":"am",A:g(l)>=12?"PM":"AM"};const h=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return f.ddd=h[g(s)][Oe](0,3),f.dddd=h[g(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>f[e]))}let Mt,kt;new Map;function Ct(e){return At(wt(e[Xe]()[Ee](/\s*([\{\}\[\]\:,])\s*/g,"$1")))}function wt(e){const t=[];let n=0;for(;n<e[fe];){let i=Dt(e,n),o=It(e,n);if(null==o&&null==i)break;if(null!=o&&null==i)t[De](o[Je]),n=o[ye];else if(null!=i){let o={[Be]:i[Be],[ne]:i[ne],[Z]:i[Z],[L]:{}};for(;"}"!==e[n];){if(e[Oe](n,n+9)===Y+":"){n+=9;const t=Tt(e,n);o[Y]=t[Je],n=t[ye]}const t=Nt(e,n,[ne,Z,Y]);t?(o[L][t[de]]=t[Je],n=t[ye]):n++}n++,t[De](o)}}return t}function At(t){const n=yt($e);if(!i[se](t))return n;for(let i of t){if(null==t)continue;const o=i[Be]+(null==i[ne]?"":"#"+i[ne])+(null==i[Z]?"":"."+i[Z][Ee](/\s/g,".")),r="string"==typeof i?e[V](i):yt(o,i[L]||{});null!=r&&("string"!=typeof i&&r[z](At(i[Y])),n[z](r))}return n}function Dt(e,t){let n=t,i="",o="",r=[];for(;/[\s\,]/[Ue](e[n]);)n++;for(;/[a-zA-Z]/[Ue](e[n]);)i+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/[Ue](e[n]);)o+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/[Ue](e[n]);)t+=e[n],n++;r[De](t)}const a=r[le](" ");for(;/\s/[Ue](e[n]);)n++;return"{"===e[n]?(n++,{[Be]:i[Xe](),[ne]:o||null,[Z]:a||null,[ye]:n}):null}function It(e,t){let n=t,i="";for(;/\s/[Ue](e[n]);)n++;for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)i+=e[n],n++;return n++,{[Je]:i,[ye]:n}}function Nt(e,t,n=[]){let i=t,o="",r="";for(;/\s/[Ue](e[i]);)i++;for(;/[a-zA-Z_-]/[Ue](e[i]);)o+=e[i],i++;if(n[ie](o[Xe]()))return null;if(":"===e[i]){i++;const t=It(e,i);return r=t[Je],i=t[ye],{[de]:o[Xe](),[Je]:r,[ye]:i}}return null}function Tt(e,t){let n=t,i=[],o=0,r="";for(;/\s/[Ue](e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e[fe];){const t=e[n];if("{"===t)o++,r+=t;else if("}"===t)o--,r+=t;else{if("]"===t&&0===o){i=wt(r);break}r+=t}n++}return{[Je]:i,[ye]:n}}function xt(t,...n){const i=yt(ve,`console.${t}.apply(void 0, ${a[Ye](n)});`);e[R][z](i),i[Ne]()}class Et{#e;#t;#n;#i;#o;#r;#a;#s;#l;constructor(e={}){this.#e=e[lt]||void 0,this.#t=e[rt]||void 0,this.#n=e[dt]||void 0,this.#i=e[at]||void 0,this.#o=e[ct]||void 0,this.#r=e[st]||void 0}async#d(e){return new u(((t,n)=>{t(!1!==e())}))}#c(e){e(!1)}async render(e){this.#a=l.now(),null!=this.#e&&!1===await this.#d(this.#e)||(await e(),this.#s=l[be]()-this.#a,xt("log","渲染耗時:",this.#s/1e3),null!=this.#t&&this.#c(this.#t))}async update(e){clearTimeout(this.#l),this.#l=y((async()=>{this.#a=l.now(),null!=this.#n&&!1===await this.#d(this.#n)||(await e(),this.#s=l[be]()-this.#a,xt("log","更新耗時:",this.#s/1e3),null!=this.#i&&this.#c(this.#i))}),300)}async destroy(e){this.#a=l.now(),null!=this.#o&&!1===await this.#d(this.#o)||(await e(),this.#s=l[be]()-this.#a,xt("log","銷毀耗時:",this.#s/1e3),null!=this.#r&&this.#c(this.#r))}}window.QUI=class{body;data={};event={};isScheduled=!1;#u=!0;#f=null;#g=null;#h=null;#p=null;constructor(n){const i=t(n[ne]||"")[Xe]();if(i[fe]<1)return void xt(_,ft.domId);const o=e.getElementById(i);if(null==o)return void xt(_,ft.dom);if(this.#f=o[H](!0),this.#h=new vt(this.#f),"function"==typeof n[xe]){const e=n[xe](),t=yt($e),i=o[H](!0);t[z](Ct(e)),i.replaceChildren(t),this.#f=i}this[R]=o,this[W]=mt(n[W]||{},"",(e=>{this.#p?.update((()=>this.#y()))})),this[F]=n[F]||{};const r=n.option||{};!1!==r.svg&&function(){kt=new m((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;const n=(e[K](Le)||"")[Xe]();if(n[fe]<1)return;await pt(n).then((t=>{kt[Fe](e),t.text().then((t=>{const n=yt("div");n[ae]=t;const i=n[Y][0];i.id=e.id,e.classList.forEach((e=>i.classList.add(e))),i.onclick=e.onclick,null!=e[ke]&&e[ke].insertBefore(i,e),e.remove()})).catch((t=>{e[ae]="☒"}))})).catch((t=>{e[ae]="☒"}))}}));for(let e of[][Oe].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[]))Mt[Me](e)}(),!1!==r[ue]&&function(){Mt=new m((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;Mt[Fe](e);const n=(e[K](ue)||"")[Xe]();if(n[fe]<1)return;await pt(n,!0).then((t=>{e[Le]=t[Le]})).catch((t=>{e[Le]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"})),e[Te](ue)}}));for(let e of[][Oe].call(document.body.querySelectorAll("img[lazyload]:not([lazyload=''])")||[]))Mt[Me](e)}();const a=n.when||n.lifecycle||n||{};this.#p=new Et({before_render:a[lt]||a[nt],rendered:a[rt],before_update:a[dt]||a[it],updated:a[at],before_destroy:a[ct]||a[ot],destroyed:a[st]}),this.#p.render((async()=>{await this.#y(),this.#u=!1}))}#y(){return new u((async e=>{null!=this.#f?(this.#g=new vt(this.#f),null!=this.#g?(this.#g[W]=a[we](a[Ye](this[W])),await this.#g.updateChildren(),this.isScheduled=!0,requestAnimationFrame((()=>{this.#m(),this.isScheduled=!1,e(!0)}))):xt(_,ft.vdomTemp)):xt(_,ft.vdomModel)}))}#m(){const e=this[R];if(null==e)return void xt("error",ft.dom);const t=this.#g?.getPatches(this.#h);i[se](t)&&this.#b(e,t);for(let t of e[Ie]("*[\\:if]"))t[Te](":if");e[B][j]("show"),"expand"!=e[K](Q)&&"expand"!=e[K](O)||(e[Ze].minHeight=e.scrollHeight+"px"),y((()=>{e[Te](Q),e[Te](O),e[Te]("mask"),e[B][Ne]("fade-in"),e[B][Ne]("loading-block"),e[B][Ne]("expand"),e[B][Ne]("show")}),300),this.#h=this.#g,this.#g=null}#b(e,t){if(null!=e&&i[se](t)){this.#M(e,t);for(const n of t){const{index:t}=n,i=a[we](a[Ye](t||[]));let o;n.type===ut.append&&(o=i?.pop());const r=i?this.#k(e,i):e;r&&(n.type===ut.create&&qe in n?this.#C(r,n):n.type===ut.replace&&qe in n&&null!=r[Ce]?this.#w(r,n):n.type===ut.append&&qe in n&&null!=o?this.#A(r,n,o):n.type===ut.prop&&de in n&&Je in n&&r instanceof Element?this.#D(r,n.key,n.value||"",n[qe]):n.type===ut.text&&Je in n&&r.nodeType===f[Ve]&&(r[Ge]=n.value||""))}}}#M(e,t){const n=t.filter((e=>e.type===ut.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const t of n){const n=this.#k(e,t.index);null!=n&&null!=n[Ce]&&n[Ce].removeChild(n)}}#C(t,n){if(n.type!==ut.create||!(qe in n))return;const i="string"==typeof n[qe]?e[V](n[qe]):this.#I(n[qe]);null!=t[ke]&&t[ke][z](i)}#w(t,n){if(n.type!==ut.replace||!(qe in n)||null==t[Ce])return;const i="string"==typeof n[qe]?e[V](n[qe]):this.#I(n[qe]);if(t[Ce].replaceChild(i,t),!(i instanceof Text||"string"==typeof n[qe])){for(const e in n[qe][Ae])this.#D(i,e,n[qe][Ae][e]||"",n[qe]);this.#N(n[qe],i)}}#A(t,n,i){if(n.type!==ut.append||!(qe in n)||null==i)return;const r="string"==typeof n[qe]?e[V](n[qe]):this.#I(n[qe]);if(i+1>t[Y][fe]?t[z](r):t.insertBefore(r,t[Y][i+1]),"string"!=typeof n[qe]){for(const[e,r]of o.entries(n[qe][Ae]))this.#D(t[Y][i],e,r||"",n[qe]);this.#N(n[qe],t[Y][i])}}#D(e,t,n,i){null==n?e[Te](t):t[Re](":@")||t[Re]("@")?this.#T(e,t,n,i):t[ge]()[Re](":model")?this.#x(e,t,n):t[Re](":")?this.#E(e,t,n,i):null!=e&&e[je](t,n)}#T(e,t,n,i){(()=>{if(!1===t[Re]("@"))return;const i=t[Ee](/^\@/,"on"),o=this[F][n];e[i]=o})(),(()=>{if(!1===t[Re](":@"))return;const o=t[Ee](/^\:\@/,"on"),r=this.#v(n,i[W]),a=this[F][r];e[o]=a})(),e[Te](t)}#x(t,n,i){if(null==i||!/(input|select|textarea)/i[Ue](t[He]))return;const o=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t[K]("type");!o||"checkbox"!==s&&"radio"!==s?a?t[P]("change",(e=>{this[W][i]=e.target[Je]||""})):(o||r)&&(t[P]("keyup",(e=>{this[W][i]=e.target[Je]||""})),t[P]("change",(e=>{this[W][i]=e.target[Je]||""}))):t[P]("change",(t=>{this[W][i]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[Te](n)}#E(e,t,n,i){const o=t[ge](),a=null==this.#v(n,i[W])?n:this.#v(n,i[W]),s=(et[o]||"")[Xe](),l=(tt[o]||"")[Xe](),d=t[We]()[Ee](/^\:/g,"")[Ee](/-+/g," ")[Ee](/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e[ge]():e[Qe]()}))[Ee](/\s+/g,"");if(o===":"+ue&&n[Xe]()[fe]>0)if(this.#u)e.src=gt,Mt[Me](e);else{if(null==e[K](ue))return void(e.src=a);e.src=gt,Mt[Me](e)}if(":html"===o&&n[Xe]()[fe]>0)e[ae]=a||n;else if(o===N||o in Ke);else if(":src"===o&&"temp-svg"===i.tag[ge]()&&n[Xe]()[fe]>0){const t=this.#v(n,i[W])||n;e[je](Le,t),kt[Me](e)}else o in et?e[s]=a:o in tt?e[Ze][l]=a:!(d in e[Ze])||t===":"+O&&/(fade-in|expand)/[Ue](n)?":hide"===o&&r(h(+a)?a:+a)?e[Ze].display="none":e[je](`${t[Ee](/^:/,"")}`,a):e[Ze][d]=a;e[Te](t)}#N(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const i=e.children[+n],r=t.children[+n];if("string"!=typeof i){for(const[e,t]of o.entries(i[Ae]))this.#D(r,e,t||"",i);this.#N(i,r)}}}#v(e,n){if(e[Xe]()[fe]<1)return;const r=b[Ue](e);let a="",s="";r&&(a=e[ze](b)[0]||"",s=e[ze](b)[4]||"",e=e[pe](b)[1]);const l=/^LENGTH\(.+\)/[Ue](e);l&&(e=e[Ee](/^LENGTH\(|\)$/g,""));const d=/^CALC\(.*\)$/[Ue](e);let c="",u=0;if(d){const t=(e=e[Ee](/^CALC\(|\)$/g,""))[pe](C);e=t[1],c=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Ue](e),g=/^LOWER\(.*\)$/[Ue](e);(f||g)&&(e=e[Ee](/^(UPPER|LOWER)\(|\)$/g,""));const h=/^DATE\([\w\,\-\s\:]*\)$/[Ue](e);let p="";if(h){const t=(e=e[Ee](/^DATE\(|\)$/g,""))[pe](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let y=e[ze](/\./),m=n||this[W],M=y[0],k=m[M];for(y[Pe]();y[fe]>0;)m=k||{},M=y[0],k=m[M],y[Pe]();if(null==k)for(y=e[ze](/\./),m=this[W],M=y[0],k=m[M],y[Pe]();y[fe]>0;)m=k||{},M=y[0],k=m[M],y[Pe]();let w="";if(null!=k&&k instanceof Object&&!i[se](k)?w=t(o[ce](k)[fe]):null!=k&&(w=k[fe]),r){if(l)return a+w+s;if(d&&(k=ht(k,c,u),null==k))return;return a+k+s}if(l)return w;if(d){if(k=ht(k,c,u),null==k)return}else{if(f)return k[Qe]();if(g)return k[ge]();if(h)return bt(+k,p)}return k}#k(e,t){let n=e,o=i.from(n.childNodes).filter((e=>e.nodeType===f[X]||e.nodeType===f[Ve]&&""!==e[Ge]?.trim()))||[];for(const e of t)n=o[e],null!=n&&(o=i.from(n.childNodes).filter((e=>e.nodeType===f[X]||e.nodeType===f[Ve]&&""!==e[Ge]?.trim()))||[]);return n}#I(t){const n=e.createElement(t.tag);if(t[Ae])for(const[e,i]of o.entries(t[Ae]))e[Re](":")||e[Re]("@")||void 0!==i&&n[je](e,i);for(const i of t[Y])"string"==typeof i?n[z](e[V](i)):n[z](this.#I(i));return n}};class vt{tag="";props={};children=[];data=null;constructor(t){if(t[He][ge]()===ve){let n=!1;for(const i of e[ee][Ie](ve)||[])if(null!=t[Le]&&i[Le]===t[Le]||null!=t[Ge]&&i[Ge]===t[Ge]){n=!0;break}n||e[ee][z](t),this[Be]=ve}this[Be]=t[He][ge](),this[Ae]=[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{}),this[Y]=function(e){return i[J](e.childNodes).filter((e=>e[me]===f[X]||e[me]===f[Ve]&&e[Ge]&&e[Ge][Xe]()[fe]>0))}(t)[he]((e=>e.nodeType===Node[X]?new vt(e):(e[Ge]||"")[Xe]()))}async updateChildren(){this.#j(this),this.#P(this),await this.#O(this),this.#j(this),this.#P(this),this.#S(this)}getPatches(e){return this.#z(e,this)}#j(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){const n=e[Y][t];if("string"==typeof n){t++;continue}if(null==n[W]&&(n[W]=e[W]),!(N in n[Ae])){t++;continue}const o=n[Ae][N],r=(o[pe](/^\(?\s*(\w+)/)||[])[1],s=(o[pe](/\,\s*(\w+)/)||[])[1],l=(o[pe](M)||[])[1];let d=this.#v(l,e[W]),c=[];if(delete n[Ae][N],i[se](d)){d=a[we](a[Ye](d));for(const e in d){const t=a[we](a[Ye](d[+e]));let i=p(n);i[W]=a[we](a[Ye]({[r]:t,[l]:d})),null!=s&&(i[W][s]=+e),c.push(i)}e[Y][Se](t,1,...c),t+=c[fe]-2}else if(null!=d&&"object"==typeof d){d=a[we](a[Ye](d));for(const e in d){const t=a[we](a[Ye](d[e]));let i=p(n);i[W]=a[we](a[Ye]({[r]:e,[s]:t,[l]:d})),c.push(i)}e[Y][Se](t,1,...c),t+=c[fe]-2}else t++}for(let t of e[Y])this.#j(t)}}#P(e){let i=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;i<e[Y][fe];){const o=e[Y][i];if("string"==typeof o){i++;continue}if(!(T in o[Ae])){delete o[Ae][x],delete o[Ae][E],delete o[Ae][v],i++;continue}let a=i+1,s=e[Y][a],l=[i],d=!1;(()=>{for(;!d;){if(l[De](a),a+=1,s=e[Y][a],null==s||"string"==typeof s){d=!0;continue}const t=s[Ae]||{};d=null==(t[x]||t[E]||t[v])}})();let c=!1;for(let o of l){const a=e[Y][o];if(null==a||"string"==typeof a)return;const s=a[Ae][T]||a[Ae][x]||a[Ae][E],d=null!=a[Ae][v];if(c)return;if(d)e[Y][Se](i,l.length,a);else if(null!=s){const o=s[ze](k)[0],d=s[ze](k)[1],u=((s[pe](k)||[])[0]||"")[Xe](),f=this.#v(o,a[W]);if(null==d&&u[fe]<1?c=r(f):">"===u?c=(n(f)||0)>(n(d)||0):"<"===u?c=(n(f)||0)<(n(d)||0):">="===u||">=="===u?c=(n(f)||0)>=(n(d)||0):"<="===u||"<=="===u?c=(n(f)||0)<=(n(d)||0):"=="===u||"==="===u?c="null"==d?null==f:"true"==d?r(f):"false"==d?!r(f):"empty"==d?t(f||"")[fe]<1:t(f||"")==t(d):"!="!==u&&"!=="!==u||(c="null"==d?null!=f:"true"==d?!r(f):"false"==d?r(f):"empty"==d?t(f||"")[fe]>0:t(f||"")!=t(d)),c)return delete a[Ae][T],void e[Y][Se](i,l.length,a)}}c?i+=l.length-2:i++}for(let t of e[Y])this.#P(t)}}async#O(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){const n=e[Y][t];if("string"==typeof n){t++;continue}if(!(I in n[Ae])||"temp"!=n.tag){t++;continue}const i=n[Ae][I],o=this.#v(i,e[W])||i;delete n[Ae][I],await fetch(o).then((async n=>{const i=yt("div",await n.text()).cloneNode(!0),o=new vt(i);e[Y][Se](t,1,...o[Y]),t+=o[Y][fe]-2})),t++}for(let t of e[Y])await this.#O(t)}}#S(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){let n=e[Y][t];if("string"==typeof n)for(let i of n[pe](new c(b,"g"))||[]){const n=e[Y][t]||"",o=i[pe](b)||[];if(o[fe]<1)continue;const r=o[1]||"",a=this.#v(r,e[W]);"string"!=typeof n||r.length<1||null==a||(e[Y][t]=n[Ee](new c("{{\\s*?"+r[Ee](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}else null!=n&&null==n[W]&&(n[W]=e[W]);t++}for(let t of e[Y])this.#S(t)}}#v(e,n){if(e[Xe]()[fe]<1)return;const r=b[Ue](e);let a="",s="";r&&(a=e[ze](b)[0]||"",s=e[ze](b)[4]||"",e=e[pe](b)[1]);const l=/^LENGTH\(.+\)/[Ue](e);l&&(e=e[Ee](/^LENGTH\(|\)$/g,""));const d=/^CALC\(.*\)$/[Ue](e);let c="",u=0;if(d){const t=(e=e[Ee](/^CALC\(|\)$/g,""))[pe](C);e=t[1],c=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[Ue](e),g=/^LOWER\(.*\)$/[Ue](e);(f||g)&&(e=e[Ee](/^(UPPER|LOWER)\(|\)$/g,""));const h=/^DATE\([\w\,\-\s\:]*\)$/[Ue](e);let p="";if(h){const t=(e=e[Ee](/^DATE\(|\)$/g,""))[pe](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let y=e[ze](/\./),m=n||this[W],M=y[0],k=m[M];for(y[Pe]();y[fe]>0;)m=k||{},M=y[0],k=m[M],y[Pe]();if(null==k)for(y=e[ze](/\./),m=this[W],M=y[0],k=m[M],y[Pe]();y[fe]>0;)m=k||{},M=y[0],k=m[M],y[Pe]();let w="";if(null!=k&&k instanceof Object&&!i[se](k)?w=t(o[ce](k)[fe]):null!=k&&(w=k[fe]),r){if(l)return a+w+s;if(d&&(k=ht(k,c,u),null==k))return;return a+k+s}if(l)return w;if(d){if(k=ht(k,c,u),null==k)return}else{if(f)return k[Qe]();if(g)return k[ge]();if(h)return bt(+k,p)}return k}#z(e,t,n=[]){if(null==e&&t)return[{[_e]:ut.create,[oe]:n,[qe]:t}];if(e&&!t)return[{[_e]:ut.remove,[oe]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[_e]:ut[Ee],[oe]:n,[qe]:t}];const i=[];return i[De](...this.#L(e,t,n)),i[De](...this.#R(e,t,n)),i}#L(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=e[Ae]||{},a=o[ce](r)[fe],s=t[Ae]||{},l=o[ce](s)[fe];if(l>0)for(let e in s){const o=s[e];i[De]({[_e]:ut.prop,[qe]:t,key:e,value:o,[oe]:n})}if(a>0){if(l<1)for(let e in r)i[De]({[_e]:ut.prop,[qe]:t,key:e,[Je]:null,[oe]:n});for(let e in s)l>0&&!(e in s)&&i[De]({[_e]:ut.prop,[qe]:t,key:e,[Je]:null,[oe]:n})}return i}#R(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=i[se](e[Y])?e[Y]:[],a=i[se](t[Y])?t[Y]:[],s=d.max(r[fe],a[fe]);for(let e=0;e<s;e++){const i=r[e],s=a[e],l=n.concat(e);if("string"==typeof i&&"string"==typeof s){if(i===s)continue;o[De]({[_e]:ut.text,[qe]:t,[Je]:s,[oe]:l})}else null==i?o[De]({[_e]:ut.append,[qe]:s,[oe]:l}):null==s?o[De]({[_e]:ut.remove,index:l}):o[De](...this.#z(i,s,l))}return o}}}("undefined"==typeof window?window={}:window);export const QUI = window.QUI;
