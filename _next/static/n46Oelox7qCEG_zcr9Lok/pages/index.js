(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),l=t.n(r),o=t("sAP4"),a=l.a.createElement;e.default=function(){return a(o.a,null,a("h1",null,"Hello World."),a("h2",null,"My name is Milen and I make web stuff ..."),a("p",null,"I am currently on a path of self discovery and a new technological growth."),a("p",null,"My current focus is on building Hybrid Web Apps plus I am kinda getting childish and rediscovering my passion for making games ... :)"),a("article",null,a("h3",null,"Some of the technologies I am currently exploring  are as follow:"),a("h4",null,"React"),a("p",null,a("b",null,"+++++"),"------"),a("h4",null,"Angular"),a("p",null,a("b",null,"+++"),"-------"),a("h4",null,"TypeScript"),a("p",null,a("b",null,"+++++"),"------"),a("h4",null,"GraphQL"),a("p",null,a("b",null,"++"),"--------"),a("h4",null,"Node.js"),a("p",null,a("b",null,"++"),"---------"),a("h4",null,"Python"),a("p",null,"+---------"),a("h4",null,"C#"),a("p",null,"----------")),a("article",null,a("h3",null,"That doesn't mean I am not enjoying and growing in my classical skills:"),a("h4",null,"JavaScript"),a("p",null,a("b",null,"+++++++"),"---"),a("h4",null,a("abbr",{title:"HyperText Markup Language"},"HTML")),a("p",null,a("b",null,"+++++++++"),"-"),a("h4",null,a("abbr",{title:"Cascading Style Sheets"},"CSS")),a("p",null,a("b",null,"++++++++"),"--"),a("h4",null,a("abbr",{title:"Personal Home Page"},"PHP")),a("p",null,"+---------"),a("aside",null,a("h4",null,"I also enjoy useing a lot of stuff with cryptic names, acronyms and abbreviations, like:"),a("p",null,"LESS, SASS, Stylus, jQuery, Bootstrap, Foundation, Mustache, Smarty, Twig, Blade, WordPress, Drupal, Joomla, Sitefinity, Git, SVN, Webpack, Grunt, Bower and whatnots ..."))))}},YFqc:function(n,e,t){n.exports=t("cTJO")},cTJO:function(n,e,t){"use strict";var r=t("lwsE"),l=t("W8MJ"),o=t("a1gu"),a=t("Nsbk"),i=t("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var s=t("TqRt"),c=t("284h");e.__esModule=!0,e.default=void 0;var f,p=c(t("q1tI")),h=t("QmWs"),d=t("g/15"),v=s(t("nOHt"));function y(n){return n&&"object"===typeof n?(0,d.formatWithValidation)(n):n}var m=new Map,g=window.IntersectionObserver,w={};function b(){return f||(g?f=new g((function(n){n.forEach((function(n){if(m.has(n.target)){var e=m.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(f.unobserve(n.target),m.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(n){i(s,n);var e,t=(e=s,function(){var n,t=a(e);if(u()){var r=a(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return o(this,n)});function s(n){var e;return r(this,s),(e=t.call(this,n)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(n){var e=null,t=null,r=null;return function(l,o){if(r&&l===e&&o===t)return r;var a=n(l,o);return e=l,t=o,r=a,a}}((function(n,e){return{href:y(n),as:e?y(e):e}})),e.linkClicked=function(n){var t=n.currentTarget,r=t.nodeName,l=t.target;if("A"!==r||!(l&&"_self"!==l||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),a=o.href,i=o.as;if(function(n){var e=(0,h.parse)(n,!1,!0),t=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===t.protocol&&e.host===t.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),i=i?(0,h.resolve)(u,i):a,n.preventDefault();var s=e.props.scroll;null==s&&(s=i.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](a,i,{shallow:e.props.shallow}).then((function(n){n&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==n.prefetch,e}return l(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),t=e.href,r=e.as,l=(0,h.resolve)(n,t);return[l,r?(0,h.resolve)(n,r):l]}},{key:"handleRef",value:function(n){var e=this;this.p&&g&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,e){var t=b();return t?(t.observe(n),m.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}m.delete(n)}):function(){}}(n,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],n).catch((function(n){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var n=this,e=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,l=t.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var o=p.Children.only(e),a={ref:function(e){n.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),n.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||n.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=l||r),p.default.cloneElement(o,a)}}]),s}(p.Component);e.default=k},sAP4:function(n,e,t){"use strict";var r=t("q1tI"),l=t.n(r),o=t("YFqc"),a=t.n(o),i=l.a.createElement,u={padding:"1em 0"},s={marginRight:"1em"},c=function(){return i("nav",{style:u},i(a.a,{href:"/"},i("a",{style:s},"Home")),i(a.a,{href:"/past"},i("a",{style:s},"Past")))},f=(t("00et"),l.a.createElement),p={};e.a=function(n){return f("div",{style:p},f(c,null),f("main",null,n.children))}},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);