(this["webpackJsonpt-shirt71hft"]=this["webpackJsonpt-shirt71hft"]||[]).push([[2],{102:function(e,t,n){"use strict";var r,o,c,i=n(133),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){c=!1}function s(e){if(e){if(e!==r){if(e.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==a&&(r=a,u())}function l(){return c||(c=function(){r||s(a);for(var e,t=r.split(""),n=[],o=i.nextValue();t.length>0;)o=i.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||a},characters:function(e){return s(e),r},seed:function(e){i.seed(e),o!==e&&(u(),o=e)},lookup:function(e){return l()[e]},shuffled:l}},103:function(e,t,n){"use strict";t.a=n.p+"static/media/hft.f782d513.svg"},105:function(e,t,n){e.exports={label:"Input_label__2hQwK",input:"Input_input__mcpaw"}},106:function(e,t,n){e.exports={enter:"fadeNotification_enter__ElxRQ",enterActive:"fadeNotification_enterActive__1iOib",exit:"fadeNotification_exit__3ZbX2",exitActive:"fadeNotification_exitActive__1KBu3"}},107:function(e,t,n){e.exports={notification:"Notification_notification__2b54h",blueColor:"Notification_blueColor__3OBAw",redColor:"Notification_redColor__247H9"}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),o=n(107),c=n.n(o),i=n(43),a=n.n(i);function u(e){var t=e.text,n=e.color,o=c.a.blueColor,i=c.a.redColor,u=[c.a.notification];return"red"===n&&u.push(i),"blue"===n&&u.push(o),Object(r.jsx)("p",{className:a()(u.join(" ")),children:t})}},114:function(e,t,n){"use strict";e.exports=n(132)},128:function(e,t,n){e.exports={section:"Section_section__1MLWm",titleContainer:"Section_titleContainer__1Ik51",titlePhonebook:"Section_titlePhonebook__1-6K_",titleContacts:"Section_titleContacts__2TaF7",appear:"Section_appear__g4KhE",appearActive:"Section_appearActive__C47b_"}},129:function(e,t,n){e.exports={list:"ColorsList_list__3Vd99",item:"ColorsList_item__2FMfK",contactsText:"ColorsList_contactsText__17uWg"}},130:function(e,t,n){},131:function(e,t,n){e.exports={container:"FormEditColor_container__1jvpI",adminEditForm:"FormEditColor_adminEditForm__Vwips",formButtonContainer:"FormEditColor_formButtonContainer__2IYPz"}},132:function(e,t,n){"use strict";var r=n(102),o=n(134),c=n(138),i=n(139)||0;function a(){return o(i)}e.exports=a,e.exports.generate=a,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=c},133:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},134:function(e,t,n){"use strict";var r,o,c=n(135);n(102);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),t+=c(7),t+=c(e),r>0&&(t+=c(r)),t+=c(n)}},135:function(e,t,n){"use strict";var r=n(102),o=n(136),c=n(137);e.exports=function(e){for(var t,n=0,i="";!t;)i+=c(o,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},136:function(e,t,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},137:function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*n/t.length),c="";;)for(var i=e(o),a=o;a--;)if((c+=t[i[a]&r]||"").length===+n)return c}},138:function(e,t,n){"use strict";var r=n(102);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},139:function(e,t,n){"use strict";e.exports=0},140:function(e,t,n){e.exports={form:"FormAddColor_form__1CCnd"}},141:function(e,t,n){e.exports={container:"Container_container__30hcB"}},142:function(e,t,n){e.exports={enter:"fadeFindColors_enter__vi4nI",enterActive:"fadeFindColors_enterActive__1zdWs",exit:"fadeFindColors_exit__1izo0",exitActive:"fadeFindColors_exitActive__1IgJo"}},143:function(e,t,n){e.exports={HomePage:"ColorPage_HomePage__24uwg"}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var r=n(1),o=n(0),c=n.n(o),i=n(128),a=n.n(i),u=n(147),s=n(43),l=n.n(s);function d(e){var t=e.title,n=e.children,o=e.appear,c=e.styles,i=e.image,s=["phonebook"===c?a.a.titlePhonebook:a.a.titleContacts];return Object(r.jsxs)("section",{className:a.a.section,children:[Object(r.jsx)(u.a,{in:!0,appear:o,timeout:500,classNames:a.a,unmountOnExit:!0,children:Object(r.jsx)("div",{className:a.a.titleContainer,children:i&&Object(r.jsx)("img",{src:i,width:"50",height:"50",alt:"logo"})})}),t&&Object(r.jsx)("h2",{className:l()(s.join(" ")),children:t}),n]})}var f=n(9),b=n(97),h=n(129),m=n.n(h),j=(n(130),n(10)),p=n(4);var x=n(12),O=(n(19),n(113));function v(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function _(e,t,n){return null!=n[t]?n[t]:e.props[t]}function g(e,t,n){var r=v(e.children),c=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),c=[];for(var i in e)i in t?c.length&&(o[i]=c,c=[]):c.push(i);var a={};for(var u in t){if(o[u])for(r=0;r<o[u].length;r++){var s=o[u][r];a[o[u][r]]=n(s)}a[u]=n(u)}for(r=0;r<c.length;r++)a[c[r]]=n(c[r]);return a}(t,r);return Object.keys(c).forEach((function(i){var a=c[i];if(Object(o.isValidElement)(a)){var u=i in t,s=i in r,l=t[i],d=Object(o.isValidElement)(l)&&!l.props.in;!s||u&&!d?s||!u||d?s&&u&&Object(o.isValidElement)(l)&&(c[i]=Object(o.cloneElement)(a,{onExited:n.bind(null,a),in:l.props.in,exit:_(a,"exit",e),enter:_(a,"enter",e)})):c[i]=Object(o.cloneElement)(a,{in:!1}):c[i]=Object(o.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:_(a,"exit",e),enter:_(a,"enter",e)})}})),c}var C=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},E=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}Object(x.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,c=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,v(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:_(e,"appear",n),enter:_(e,"enter",n),exit:_(e,"exit",n)})}))):g(e,c,i),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(p.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(j.a)(e,["component","childFactory"]),o=this.state.contextValue,i=C(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?c.a.createElement(O.a.Provider,{value:o},i):c.a.createElement(O.a.Provider,{value:o},c.a.createElement(t,r,i))},t}(c.a.Component);E.propTypes={},E.defaultProps={component:"div",childFactory:function(e){return e}};var y=E,w=n(100),N=n(99),F=n(42),k=n(96),S=n(131),A=n.n(S);function P(e){var t=e.name,n=e.number,c=e.id,i=Object(o.useState)(t),a=Object(w.a)(i,2),u=a[0],s=a[1],l=Object(o.useState)(n),d=Object(w.a)(l,2),b=d[0],h=d[1],m=Object(o.useState)(!1),j=Object(w.a)(m,2),p=j[0],x=j[1],O=Object(o.useState)(""),v=Object(w.a)(O,2),_=v[0],g=v[1],C=Object(f.c)(),E=function(e){var t=e.target,n=t.name,r=t.value;g(""),p&&(console.log("handleInputChange  isEditMode:",p),"name"!==n?"number"!==n||h(r):s(r))},y=Object(o.useCallback)((function(e,t){window.confirm('Do you want to delete color "'.concat(t,'"?'))&&C(Object(k.b)(e))}),[C]),S=Object(o.useCallback)((function(e,t,n){var r=/^\d{5}$/;(console.log(r.test(n)),r.test(n))?window.confirm('Do you want to update color "'.concat(t,'"?'))&&(C(Object(k.c)({id:e,name:t,number:n})),x(!1)):g("Please enter 5 number!")}),[C]);return Object(r.jsx)("div",{className:A.a.container,children:Object(r.jsxs)("div",{className:A.a.adminEditForm,children:[Object(r.jsx)(N.a,{label:"Color name",type:"text",name:"name",value:u,placeholder:"Enter username...",onChange:E,readOnly:!p}),Object(r.jsxs)("div",{children:[Object(r.jsx)(N.a,{label:"Color number",type:"text",name:"number",value:b,placeholder:"Enter number...",onChange:E,readOnly:!p}),_&&Object(r.jsx)("span",{children:_})]}),Object(r.jsx)("div",{className:A.a.formButtonContainer,children:p?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F.a,{text:"Save",listener:function(){return S(c,u,b)},color:"red"}),Object(r.jsx)(F.a,{text:"Cancel",listener:function(){return s(t),h(n),void x(!1)},color:"red"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F.a,{text:"Edit",listener:function(){return x(!0)},color:"red"}),Object(r.jsx)(F.a,{text:"Delete",listener:function(){return y(c,t)},color:"red"})]})})]})})}function V(){var e=Object(f.d)(b.c);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(y,{component:"ul",className:m.a.list,children:e.map((function(e){var t=e.name,n=e.number,o=e._id;return Object(r.jsx)(u.a,{timeout:250,classNames:"e-fade",appear:!0,children:Object(r.jsx)("li",{id:o,className:m.a.item,children:Object(r.jsx)("div",{className:m.a.colorsText,children:Object(r.jsx)(P,{name:t,number:n,id:o})})})},o)}))})})}var M=n(114),I=n.n(M),R=n(140),T=n.n(R),L=n(106),D=n.n(L),B=n(108);function K(){var e=Object(o.useState)(""),t=Object(w.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),a=Object(w.a)(i,2),s=a[0],l=a[1],d=Object(o.useState)(""),h=Object(w.a)(d,2),m=h[0],j=h[1],p=Object(o.useState)(null),x=Object(w.a)(p,2),O=x[0],v=x[1],_=Object(f.d)(b.c),g=Object(f.c)(),C=Object(o.useCallback)((function(e){return g(Object(k.a)(e))}),[g]),E=I.a.generate(),y=I.a.generate(),S=function(e){var t=e.currentTarget,n=t.name,r=t.value;"name"!==n?"number"!==n||l(r):c(r)},A=function(e,t){""!==e?""!==t?(_.some((function(t){return t.name===e}))?P("".concat(e," is already in colors!")):C({name:e,number:t}),V()):P("Please enter color phone number!"):P("Please enter color name!")},P=function(e){j(e),v(!0),setTimeout((function(){v(!1)}),3e3)},V=function(){c(""),l("")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{in:O,timeout:1e3,classNames:D.a,unmountOnExit:!0,children:Object(r.jsx)(B.a,{text:m,color:"red"})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A(n,s)},className:T.a.form,children:[Object(r.jsx)(N.a,{label:"Name",type:"text",name:"name",value:n,id:E,placeholder:"Enter name...",onChange:S}),Object(r.jsx)(N.a,{label:"Number",type:"number",name:"number",value:s,id:y,placeholder:"00000",onChange:S,pattern:"^\\?[0-9]{5}$"}),Object(r.jsx)(F.a,{text:"Add color",type:"submit",color:"blue"})]})]})}var H=n(141),W=n.n(H);var q=function(e){var t=e.children;return Object(r.jsx)("div",{className:W.a.container,children:t})},z=n(142),J=n.n(z),U=n(8),$=n(103),Q=n(143),Y=n.n(Q),X=n(98);function Z(){var e=Object(f.d)(b.a),t=Object(f.d)(b.b),n=Object(f.c)();Object(o.useEffect)((function(){n(Object(k.d)())}),[n]);var c=I.a.generate();return Object(r.jsxs)("div",{className:Y.a.HomePage,style:{backgroundImage:"linear-gradient(0.51turn, #1d12127c, #3d00191c), url(".concat(X.a,")")},children:[Object(r.jsx)(d,{title:"Add new color",image:$.a,appear:!0,styles:"phonebook",children:Object(r.jsx)(K,{})}),Object(r.jsxs)(d,{title:"Colors",children:[Object(r.jsx)(u.a,{in:e.length>1,timeout:250,classNames:J.a,unmountOnExit:!0,children:Object(r.jsx)(q,{children:Object(r.jsx)(N.a,{label:"Find colors by name",type:"text",name:"filter",value:t,id:c,placeholder:"Find...",onChange:function(e){var t=e.currentTarget;n(U.d(t.value))}})})}),0===e.length?Object(r.jsx)("span",{style:{display:"block",textAlign:"center"},children:"No colors"}):Object(r.jsx)(V,{colors:e})]})]})}},96:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(20),o=n.n(r),c=n(8),i=n(109),a=n.n(i);o.a.defaults.baseURL="https://t-shirts-api.vercel.app/api";var u=function(){return function(e){e(Object(c.i)()),o.a.get("/colors").then((function(t){var n=t.data;e(Object(c.j)(a()(n.colors,"name")))})).catch((function(t){return e(Object(c.h)(t))}))}},s=function(e){return function(t){var n={name:e.name,number:e.number};t(Object(c.b)()),o.a.post("/colors",n).then((function(e){var n=e.data;return t(Object(c.c)(n.color))})).catch((function(e){return t(Object(c.a)(e))}))}},l=function(e){var t=e.id,n=e.name,r=e.number;return function(e){var i={name:n,number:r};e(Object(c.l)()),o.a.put("/colors/".concat(t),i).then((function(){return e(Object(c.m)({id:t,name:n,number:r}))})).catch((function(t){return e(Object(c.k)(t))}))}},d=function(e){return function(t){t(Object(c.f)()),o.a.delete("/colors/".concat(e)).then((function(){return t(Object(c.g)(e))})).catch((function(e){return t(Object(c.e)(e))}))}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(29),o=function(e){return e.colors.items},c=function(e){return e.colors.filter},i=Object(r.a)([o,c],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}))},98:function(e,t,n){"use strict";t.a=n.p+"static/media/photo-1523381210434-271e8be1f52b.d55d1bb0.avif"},99:function(e,t,n){"use strict";var r=n(1),o=n(105),c=n.n(o);t.a=function(e){var t=e.name,n=e.label,o=e.value,i=e.id,a=e.placeholder,u=e.type,s=e.onChange,l=e.pattern,d=e.readOnly;return Object(r.jsxs)("label",{htmlFor:i,className:c.a.label,children:[n,Object(r.jsx)("input",{type:u,name:t,value:o,id:i,placeholder:a,onChange:s,className:c.a.input,pattern:l,readOnly:d})]})}}}]);
//# sourceMappingURL=contact-page.4ae9a00a.chunk.js.map