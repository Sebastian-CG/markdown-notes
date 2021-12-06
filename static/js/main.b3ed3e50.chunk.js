(this["webpackJsonpmarkdown-notes"]=this["webpackJsonpmarkdown-notes"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(6),c=n.n(i),a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),i(e),c(e)}))},l=n(3);var u=function(e,t){var n=Object(o.useState)((function(){var n=window.localStorage.getItem(e);return n?JSON.parse(n):t})),r=Object(l.a)(n,2),i=r[0],c=r[1];return[i,function(t){c(t),window.localStorage.setItem(e,JSON.stringify(t))}]},f=n(2),h=Object(o.createContext)();function j(e){var t=e.children,n=u("layout","horizontal-grid"),o=Object(l.a)(n,2),r=o[0],i=o[1],c=u("editor-theme","vs-dark"),a=Object(l.a)(c,2),s=a[0],d=a[1],j={editorTheme:s,layout:r,changeEditorTheme:function(){d("vs-dark"===s?"vs-light":"vs-dark")},changeLayout:function(){i("horizontal-grid"===r?"vertical-grid":"horizontal-grid"),window.location.reload()}};return Object(f.jsx)(h.Provider,{value:j,children:t})}function b(e){var t=e.children,n=e.onClick,o=e.className;return Object(f.jsx)("button",{className:o,onClick:n,children:t})}b.defaultProps={className:"btn"};var w=n(4);function v(e){var t=e.editorText,n=e.setEditorText,r=Object(o.useRef)(null),i=Object(o.useContext)(h),c=i.changeEditorTheme,a=i.changeLayout;return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)("input",{style:{display:"none"},type:"file",ref:r,onChange:function(e){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var t=e.target.files,o=new FileReader;o.onload=function(e){return n(e.target.result),!0},o.readAsText(t[0]),window.location.reload()}else alert("The File APIs are not fully supported in this browser.")},accept:".md,.mdown,.txt,.markdown"}),Object(f.jsxs)("header",{children:[Object(f.jsxs)(b,{onClick:a,children:[Object(f.jsx)(w.d,{}),"Change grid"]}),Object(f.jsxs)(b,{onClick:c,children:[Object(f.jsx)(w.a,{}),"Change Editor Theme"]}),Object(f.jsxs)(b,{onClick:function(){r.current.click()},children:[Object(f.jsx)(w.c,{}),"Open File"]}),Object(f.jsxs)(b,{onClick:function(){var e=document.getElementsByTagName("h1")[0].innerText,n=new Blob([t],{type:"text/plain"}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=e.trim()+".md",r.click(),URL.revokeObjectURL(o)},children:[Object(f.jsx)(w.b,{}),"Download"]})]})]})}var g=n(7),m=n(8);function x(e){var t=e.editorText,n=e.setEditorText,r=Object(o.useContext)(h).editorTheme;return Object(f.jsx)(m.a,{theme:r,defaultLanguage:"markdown",defaultValue:t,onChange:function(e){return n(e)}})}function O(e){var t=e.markedText,n=Object(o.useState)(window.outerWidth),r=Object(l.a)(n,2),i=r[0],c=r[1];return window.addEventListener("resize",(function(){return c(window.outerWidth)})),Object(o.useEffect)((function(){var e=i>=768?90:30;Array.from(document.querySelectorAll("pre")).forEach((function(t){t.style.maxWidth="".concat((i-e)/2,"px")}))}),[t,i]),Object(o.useEffect)((function(){Array.from(document.querySelectorAll("pre")).forEach((function(e){var t=function(){return n.classList.toggle("visible-copy-button")},n=document.createElement("button");n.classList.add("copy-button"),n.innerText="Copy",e.appendChild(n),e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",t),n.addEventListener("click",(function(){return function(e){var t=e.slice(0,e.length-6);navigator.clipboard.writeText(t)}(e.innerText)}))}))}),[t]),Object(f.jsx)("section",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}})}function p(e){var t=e.editorText,n=e.setEditorText,r=Object(o.useState)(""),i=Object(l.a)(r,2),c=i[0],a=i[1],s=Object(o.useContext)(h).layout;return Object(o.useEffect)((function(){return a(g.marked.parse(t))}),[t]),Object(f.jsxs)("main",{className:s,children:[Object(f.jsx)(x,{editorText:t,setEditorText:n}),Object(f.jsx)(O,{markedText:c})]})}function k(){var e=u("editorText",""),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(f.jsx)(j,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(v,{editorText:n,setEditorText:o}),Object(f.jsx)(p,{editorText:n,setEditorText:o})]})})}n(16),n(17);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/markdown-notes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/markdown-notes","/service-worker.js");a?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}(),d()}},[[18,1,2]]]);
//# sourceMappingURL=main.b3ed3e50.chunk.js.map