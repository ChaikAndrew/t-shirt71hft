(this["webpackJsonpt-shirt71hft"]=this["webpackJsonpt-shirt71hft"]||[]).push([[3],{103:function(e,t,a){"use strict";t.a=a.p+"static/media/hft.f782d513.svg"},116:function(e,t,a){e.exports={HomePage:"Homepage_HomePage__1iCVA",container:"Homepage_container__3dHH0",article:"Homepage_article__DP1LI",title:"Homepage_title__2BHAk",logo:"Homepage_logo__391Zk",rotating:"Homepage_rotating__2r4Qh",rotate:"Homepage_rotate__2S9Th",subtitle:"Homepage_subtitle__2QNw0",subtitleItemFirst:"Homepage_subtitleItemFirst__3oBPC",subtitleItemSecond:"Homepage_subtitleItemSecond__28oqR",dropdown:"Homepage_dropdown__1HJPH",search:"Homepage_search__1aL6j",searchType:"Homepage_searchType__2Lrf-",searchValue:"Homepage_searchValue__x4rMt",article_subtitle:"Homepage_article_subtitle__1p_25",showSizeTable:"Homepage_showSizeTable__3VNZf",searchResultContainer:"Homepage_searchResultContainer__3BdSW",nameLight:"Homepage_nameLight__Vvxm8",numberLight:"Homepage_numberLight__oEMZZ",tableHead:"Homepage_tableHead__3boq_",tableTitle:"Homepage_tableTitle__jUsgj",tableItem:"Homepage_tableItem__2l1Ax",closeModal:"Homepage_closeModal__8bcnE"}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(1),c=a(100),s=a(0),r=a(116),i=a.n(r),o=a(20),l=a.n(o),u=a(24);l.a.defaults.baseURL="https://t-shirts-api.vercel.app/api";var b=a(96),d=a(97),m=function(e){return e.sizes.items},h=a(9),j=a(98),_=a(103),f=a(118),p=a.n(f);p.a.setAppElement("#modal");var g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"20px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",border:"none",borderRadius:"15px"},overlay:{background:"rgba(0, 0, 0, 0.7)"}},O=function(){var e,t=Object(s.useState)(!1),a=Object(c.a)(t,2),r=a[0],o=a[1],f=Object(s.useState)(null),O=Object(c.a)(f,2),x=O[0],v=O[1];console.log("HomePage  selectedSize:",x);var H=Object(s.useState)("name"),N=Object(c.a)(H,2),z=N[0],w=N[1],S=Object(s.useState)([]),C=Object(c.a)(S,2),T=C[0],L=C[1],y=Object(h.c)(),k=Object(h.d)(d.a),I=Object(h.d)(m);Object(s.useEffect)((function(){y((function(e){e(Object(u.b)()),l.a.get("/sizes").then((function(t){var a=t.data;e(Object(u.c)(a.sizes))})).catch((function(t){return e(Object(u.a)(t))}))})),y(Object(b.d)())}),[y]);function R(e){v(e),o(!0)}function F(){o(!1)}return console.log(I[x]),Object(n.jsxs)("div",{className:i.a.HomePage,style:{backgroundImage:"linear-gradient(0.51turn, #1d12127c, #3d00191c), url(".concat(j.a,")")},children:[Object(n.jsxs)("section",{className:i.a.container,children:[Object(n.jsx)("h1",{className:i.a.title,children:"Your Helper"}),Object(n.jsxs)("div",{className:i.a.logo,children:[Object(n.jsx)("div",{className:i.a.rotating,tabIndex:"0",children:Object(n.jsx)("img",{src:_.a,width:"20",height:"20",alt:"logo"})}),Object(n.jsxs)("h2",{className:i.a.subtitle,children:["HFT",Object(n.jsx)("span",{className:i.a.subtitleItemFirst,children:"7"}),Object(n.jsx)("span",{className:i.a.subtitleItemSecond,children:"1"})]})]}),Object(n.jsx)("div",{className:i.a.dropdown,children:Object(n.jsx)("label",{htmlFor:"searchType",children:"Select search type:"})}),Object(n.jsxs)("div",{className:i.a.search,children:[Object(n.jsxs)("select",{value:z,className:i.a.searchType,id:"searchType",onChange:function(e){w(e.target.value)},children:[Object(n.jsx)("option",{value:"color",children:"By name"}),Object(n.jsx)("option",{value:"number",children:"By number"})]}),Object(n.jsx)("input",{onChange:function(e){var t=e.target.value.trim().toLowerCase();if(""!==t){var a=k.filter((function(e){return"name"===z&&e.name.toLowerCase().includes(t)||"number"===z&&e.number.toLowerCase().startsWith(t)}));L(a)}else L([])},type:"text",className:i.a.searchValue,id:"searchValue"})]}),Object(n.jsx)("div",{id:"resultContainer",className:i.a.result,children:0!==T.length&&T.map((function(e){var t=e.name,a=e.number;return Object(n.jsxs)("div",{className:i.a.searchResultContainer,children:["Color: ",Object(n.jsx)("span",{className:i.a.nameLight,children:t}),"Number: ",Object(n.jsx)("span",{className:i.a.numberLight,children:a})]},a)}))})]}),Object(n.jsxs)("section",{className:i.a.article,children:[Object(n.jsx)("h3",{className:i.a.article_subtitle,children:"Color, size and model finder"}),Object(n.jsx)("button",{onClick:function(){return R("standard_size")},className:i.a.showSizeTable,id:"showSizeTable",children:"Standard sizes"}),Object(n.jsx)("button",{onClick:function(){return R("childrens_size")},className:i.a.showSizeTable,id:"showSizeTable2",children:"Children's sizes"}),Object(n.jsx)("button",{onClick:function(){return R("babys_size")},className:i.a.showSizeTable,id:"showSizeTable3",children:"Baby's sizes"}),Object(n.jsx)("button",{onClick:function(){return R("fotl_size")},className:i.a.showSizeTable,id:"showSizeTable4",children:"FotL sizes"}),Object(n.jsx)("button",{onClick:function(){return R("fotl_size_bluzy")},className:i.a.showSizeTable,id:"showSizeTable5",children:"FotL sizes bluzy"})]}),Object(n.jsxs)(p.a,{isOpen:r,onRequestClose:F,style:g,contentLabel:"Example Modal",children:[Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{className:i.a.tableHead,children:[Object(n.jsx)("th",{className:i.a.tableTitle,children:"Size (Marking)"}),Object(n.jsx)("th",{className:i.a.tableTitle,children:"Number"})]}),x&&0!==(null===(e=I[x])||void 0===e?void 0:e.length)&&I[x].map((function(e){var t=e.name,a=e.number;return Object(n.jsxs)("tr",{className:i.a.tableItem,children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:a})]})}))]}),Object(n.jsx)("button",{className:i.a.closeModal,onClick:F,children:"Close"})]})]})}},96:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(20),c=a.n(n),s=a(8),r=a(109),i=a.n(r);c.a.defaults.baseURL="https://t-shirts-api.vercel.app/api";var o=function(){return function(e){e(Object(s.i)()),c.a.get("/colors").then((function(t){var a=t.data;e(Object(s.j)(i()(a.colors,"name")))})).catch((function(t){return e(Object(s.h)(t))}))}},l=function(e){return function(t){var a={name:e.name,number:e.number};t(Object(s.b)()),c.a.post("/colors",a).then((function(e){var a=e.data;return t(Object(s.c)(a.color))})).catch((function(e){return t(Object(s.a)(e))}))}},u=function(e){var t=e.id,a=e.name,n=e.number;return function(e){var r={name:a,number:n};e(Object(s.l)()),c.a.put("/colors/".concat(t),r).then((function(){return e(Object(s.m)({id:t,name:a,number:n}))})).catch((function(t){return e(Object(s.k)(t))}))}},b=function(e){return function(t){t(Object(s.f)()),c.a.delete("/colors/".concat(e)).then((function(){return t(Object(s.g)(e))})).catch((function(e){return t(Object(s.e)(e))}))}}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r}));var n=a(29),c=function(e){return e.colors.items},s=function(e){return e.colors.filter},r=Object(n.a)([c,s],(function(e,t){var a=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(a)}))}))},98:function(e,t,a){"use strict";t.a=a.p+"static/media/photo-1523381210434-271e8be1f52b.d55d1bb0.avif"}}]);
//# sourceMappingURL=home-page.f8c87e46.chunk.js.map