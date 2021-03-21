(this["webpackJsonplatex-snippets"]=this["webpackJsonplatex-snippets"]||[]).push([[0],{309:function(e,t,n){},314:function(e,t,n){},522:function(e,t,n){},523:function(e,t,n){},524:function(e,t,n){"use strict";n.r(t);n(308),n(309);var a=n(0),c=n.n(a),i=n(85),r=n.n(i),s=n(43),o=(n(314),n(120)),l=n.n(o),u=n(148),j=n(285),p=n.n(j),d=function(e,t){var n=document.createElement("a");document.body.appendChild(n),n.download=t,n.href=e,n.click(),n.remove(),setTimeout((function(){URL.revokeObjectURL(e)}),1e3)},b=function(e){var t="latex-snippets:".concat(p()().unix());window.localStorage.setItem(t,e)},h=function(){return Object.keys(localStorage).filter((function(e){return e.startsWith("latex-snippets:")})).map((function(e){return{key:e,date:Number(e.split(":").pop())}})).filter((function(e){var t=e.date;return!Number.isNaN(t)})).sort((function(e,t){return t.date-e.date})).map((function(e){return e.key})).map((function(e){return{tex:window.localStorage.getItem(e),key:e}}))},x=function(e){window.localStorage.removeItem(e)},f=n(228),O=n(217);function v(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t){var n,a,c,i,r,s,o,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.width,a=t.height,c=t.svg,i=t.emSize,r=new OffscreenCanvas(n,a),s=r.getContext("2d"),e.next=5,O.a.from(s,c,Object(f.a)(Object(f.a)({},O.b.offscreen()),{},{emSize:i}));case 5:return o=e.sent,e.next=8,o.render();case 8:return e.next=10,r.convertToBlob();case 10:return u=e.sent,j=URL.createObjectURL(u),e.abrupt("return",{pngUrl:j});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(537),w=n(539),S=n(538),C=n(169),k=n(541),y=n(7),T=Object(a.createContext)({ready:!1}),N=function(e){var t=e.children,c=Object(a.useState)(!1),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){window.MathJax={tex:{},svg:{fontCache:"none"},startup:{ready:function(){window.MathJax.startup.defaultReady(),o(!0)}}},n.e(3).then(n.t.bind(null,543,7))}),[]),Object(y.jsx)(T.Provider,{value:{ready:r},children:t})},L=function(e){var t=e.tex,n=e.scale,c=Object(a.useContext)(T).ready,i=Object(a.useState)(null),r=Object(s.a)(i,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){c&&(t?window.MathJax.tex2svgPromise(t,{display:!1}).then((function(e){var t=e.firstElementChild.outerHTML,a=e.firstElementChild.width.baseVal.valueInSpecifiedUnits*n,c=e.firstElementChild.height.baseVal.valueInSpecifiedUnits*n;l({svgText:t,width:a,height:c})})):l(null))}),[c,t,l,n]),t?o?Object(y.jsx)(C.a,{src:o.svgText,width:o.width,height:o.height}):Object(y.jsx)(k.a,{children:Object(y.jsxs)(k.a.Paragraph,{children:[Object(y.jsx)(k.a.Line,{}),Object(y.jsx)(k.a.Line,{}),Object(y.jsx)(k.a.Line,{})]})}):null},A=n(542),E=n(76),U=function(e){var t=e.onClick,n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useCallback)((function(){t(),r(!0),setTimeout((function(){r(!1)}),1e3)}),[t]);return Object(y.jsx)(A.a,{onClick:o,disabled:i,children:i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E.a,{name:"check"})," Save"]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E.a,{name:"save outline"})," Save"]})})},I=function(e){var t=e.onToggle,n=e.open;return Object(y.jsx)(A.a,{onClick:t,children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E.a,{name:"angle up"})," Hide Snippets"]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E.a,{name:"angle down"})," Show Snippets"]})})},M=(n(522),n(540)),z=function(e){var t=e.snippets,n=e.onPaste,a=e.onDownload,c=e.onDelete;return Object(y.jsxs)(M.a,{relaxed:"very",divided:!0,children:[0===t.length&&Object(y.jsx)("p",{children:'No Snippets. "Save" to add a snippet.'}),t.map((function(e){var t=e.key,i=e.tex;return Object(y.jsxs)(M.a.Item,{children:[Object(y.jsxs)(M.a.Content,{floated:"right",children:[Object(y.jsxs)(A.a,{icon:!0,circular:!0,onClick:function(){return n(i)},title:"Paste to the editor",size:"mini",children:[Object(y.jsx)(E.a,{name:"paste"})," Paste"]}),Object(y.jsx)(A.a,{icon:!0,circular:!0,onClick:function(){return a({key:t,tex:i})},title:"Download as a png image",size:"mini",children:Object(y.jsx)(E.a,{name:"download"})}),Object(y.jsx)(A.a,{icon:!0,circular:!0,onClick:function(){return c(t)},title:"Delete the snippet",size:"mini",style:{marginLeft:"12px"},children:Object(y.jsx)(E.a,{name:"trash"})})]}),Object(y.jsx)(M.a.Content,{className:"SnippetList-item-content",children:Object(y.jsx)(L,{tex:i,scale:12})})]},t)}))]})},P=(n(523),function(e){var t=e.size;return Object(y.jsx)(C.a,{className:"Logo",src:'\n<svg viewBox="0 0 100 100">\n  <polygon points="0,0 100,0 50.0,86" style="fill:rgb(182 212 233);"></polygon>\n</svg>\n',width:t,height:t})});var J=function(){var e=function(){var e,t=Object(a.useMemo)((function(){return h()}),[]),n=Object(a.useState)(t),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useCallback)((function(){var e=h();r(e)}),[r]),l=Object(a.useCallback)((function(e){x(e),o()}),[o]);return{addSnippet:Object(a.useCallback)((function(e){b(e),o()}),[o]),deleteSnippet:l,snippets:i,topSnippet:null===(e=i[0])||void 0===e?void 0:e.tex}}(),t=e.snippets,n=e.topSnippet,c=e.addSnippet,i=e.deleteSnippet,r=function(e){var t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],i=n[1];return{text:c,onChangeText:Object(a.useCallback)((function(e){i(e.target.value)}),[i]),onResetText:i}}(n||"ax^2+bx+c=0"),o=r.text,j=r.onChangeText,p=r.onResetText,f=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1];return[c,Object(a.useCallback)((function(e){i("boolean"===typeof e?e:function(e){return!e})}),[i])]}(),O=Object(s.a)(f,2),m=O[0],C=O[1],k=function(e){var t=e.pngScale,n=e.svgScale;return Object(a.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(a){var c,i,r,s,o,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.tex,i=a.key,e.next=3,window.MathJax.tex2svgPromise(c,{display:!1}).then((function(e){return{svgText:e.firstElementChild.outerHTML,width:e.firstElementChild.width.baseVal.valueInSpecifiedUnits*n,height:e.firstElementChild.height.baseVal.valueInSpecifiedUnits*n}}));case 3:return r=e.sent,s=r.width*t,o=r.height*t,e.next=8,v({svg:r.svgText,width:s,height:o,emSize:n*t*2});case 8:u=e.sent,j=u.pngUrl,d(j,"".concat(i.split(":").pop(),".png"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n])}({pngScale:4,svgScale:16}),T=Object(a.useCallback)((function(){c(o),C(!0)}),[o,c,C]);return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(g.a,{children:[Object(y.jsx)("header",{className:"App-header",children:Object(y.jsxs)("h1",{className:"App-header-title",children:[Object(y.jsx)(P,{size:24}),"LaTeX Snippet with"," ",Object(y.jsx)("a",{href:"https://www.mathjax.org/",target:"_blank",rel:"noreferrer",children:"MathJax"})]})}),Object(y.jsx)("div",{className:"App-row App-container",children:Object(y.jsx)(w.a,{children:Object(y.jsx)(S.a,{className:"App-textarea",placeholder:"Write a LaTeX equation",value:o,onChange:j,spellCheck:!1})})}),Object(y.jsx)("div",{className:"App-row App-container",children:Object(y.jsx)(L,{tex:o,scale:16})}),Object(y.jsxs)("div",{className:"App-menu App-container",children:[Object(y.jsx)(U,{onClick:T}),Object(y.jsx)(I,{onToggle:C,open:m})]}),m&&Object(y.jsx)("div",{className:"App-snippets App-container",children:Object(y.jsx)(z,{snippets:t,onPaste:p,onDownload:k,onDelete:i})})]}),Object(y.jsx)("footer",{className:"App-footer",children:Object(y.jsx)("div",{children:"\xa9 2021 FujiHaruka"})})]})};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(N,{children:Object(y.jsx)(J,{})})}),document.getElementById("root"))}},[[524,1,2]]]);
//# sourceMappingURL=main.f3ec7cbc.chunk.js.map