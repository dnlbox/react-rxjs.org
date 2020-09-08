(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(83)),i={title:"Motivation"},c={unversionedId:"motivation",id:"motivation",isDocsHomePage:!1,title:"Motivation",description:"As you probably already know, React's state management system is not Reactive.",source:"@site/docs/motivation.md",slug:"/motivation",permalink:"/docs/motivation",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/motivation.md",version:"current",sidebar:"someSidebar",next:{title:"Core Concepts",permalink:"/docs/core-concepts"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As you probably already know, React's state management system is not Reactive.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/Rich_Harris"}),"Richard Harris")," does a great job explaining this\nin his talk ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=AdNJ3fydeao"}),"Rethinking Reactivity"),".\nIn that same talk Rich borrows the following quote from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://apfelmus.nfshost.com/"}),"Heinrich Apfelmus"),",\nwhich brilliantly defines the essence of Functional Reactive Programming:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The essence of functional reactive programming is to specify the dynamic\nbehavior of a value completely at the time of declaration")),Object(o.b)("p",null,"The goal of this library is to create a set of bindings that bring this essence\nof Reactive Programming into React. We may not be able to use Svelte's destiny\noperator \ud83e\udd37, but we will be able to declare the dynamic behavior of our state\nat the time of its declaration using RxJS streams. No stores. No context.\nJust reactive streams that integrate seamlessly with React."),Object(o.b)("p",null,"Working with Reactive solutions has many advantages, among them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"They provide loosely coupled solutions: reactive streams are only coupled to events that they directly depend on."),Object(o.b)("li",{parentName:"ul"},"Avoiding unnecessary computations, which translates into optimal react updates."),Object(o.b)("li",{parentName:"ul"},"Improving code navigability, by avoiding unnecessary layers of indirection."),Object(o.b)("li",{parentName:"ul"},"If we compare them with Flux based architectures, they generate a lot less boilerplate."),Object(o.b)("li",{parentName:"ul"},"By avoiding central stores we get code-splitting out of the box.")))}u.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);