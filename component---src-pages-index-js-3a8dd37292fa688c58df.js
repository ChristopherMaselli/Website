(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),o=a("vhPU"),i=/"/g,l=function(e,t,a,n){var r=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=(a("dZ+Y"),a("8+KV"),a("LK8F"),a("a1Th"),a("h7Nl"),a("XfO3"),a("9AAn"),a("V+eJ"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("hHhE"),a("91GP"),a("HAE/"),!0),l="Invariant failed";var s=function(e,t){if(!e)throw i?new Error(l):new Error(l+": "+(t||""))};function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=new Map,u=new Map,f=new Map,p=0;function g(e,t,a){void 0===a&&(a={}),a.threshold||(a.threshold=0);var n=a,r=n.root,o=n.rootMargin,i=n.threshold;if(h.has(e)&&s(!1),e){var l=function(e){return e?f.has(e)?f.get(e):(p+=1,f.set(e,p.toString()),f.get(e)+"_"):""}(r)+(o?i.toString()+"_"+o:i.toString()),c=u.get(l);c||(c=new IntersectionObserver(y,a),l&&u.set(l,c));var m={callback:t,element:e,inView:!1,observerId:l,observer:c,thresholds:c.thresholds||(Array.isArray(i)?i:[i])};return h.set(e,m),c.observe(e),m}}function E(e){if(e){var t=h.get(e);if(t){var a=t.observerId,n=t.observer,r=n.root;n.unobserve(e);var o=!1,i=!1;a&&h.forEach((function(t,n){n!==e&&(t.observerId===a&&(o=!0,i=!0),t.observer.root===r&&(i=!0))})),!i&&r&&f.delete(r),n&&!o&&n.disconnect(),h.delete(e)}}}function y(e){e.forEach((function(e){var t=e.isIntersecting,a=e.intersectionRatio,n=e.target,r=h.get(n);if(r&&a>=0){var o=r.thresholds.some((function(e){return r.inView?a>e:a>=e}));void 0!==t&&(o=o&&t),r.inView=o,r.callback(o,e)}}))}var w=function(e){var t,a;function r(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return c(d(t=e.call.apply(e,[this].concat(n))||this),"state",{inView:!1,entry:void 0}),c(d(t),"node",null),c(d(t),"handleNode",(function(e){t.node&&E(t.node),t.node=e||null,t.observeNode()})),c(d(t),"handleChange",(function(e,a){(e!==t.state.inView||e)&&t.setState({inView:e,entry:a}),t.props.onChange&&t.props.onChange(e,a)})),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){this.node||s(!1)},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(E(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(E(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(E(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,a=e.root,n=e.rootMargin;g(this.node,this.handleChange,{threshold:t,root:a,rootMargin:n})}},o.render=function(){var e=this.state,t=e.inView,a=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:a,ref:this.handleNode});var r=this.props,o=r.children,i=r.as,l=r.tag,s=(r.triggerOnce,r.threshold,r.root,r.rootMargin,r.onChange,function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(n.createElement)(i||l||"div",m({ref:this.handleNode},s),o)},r}(n.Component);function v(e){void 0===e&&(e={});var t=Object(n.useRef)(),a=Object(n.useState)({inView:!1,entry:void 0}),r=a[0],o=a[1],i=Object(n.useCallback)((function(a){t.current&&E(t.current),a&&g(a,(function(t,n){o({inView:t,entry:n}),t&&e.triggerOnce&&E(a)}),e),t.current=a}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(n.useDebugValue)(r.inView),[i,r.inView,r.entry]}c(w,"displayName","InView"),c(w,"defaultProps",{threshold:0,triggerOnce:!1});var b=r.a.forwardRef((function(e,t){return r.a.createElement("section",{id:"intro",class:"wrapper style1 fullscreen fade-up",ref:t},r.a.createElement("div",{class:"inner"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"ChristopherFMaselli.com!",r.a.createElement("br",null),"Scroll down to learn more about me."),r.a.createElement("ul",{class:"actions"},r.a.createElement("li",null,r.a.createElement(o.Link,{to:"#one",class:"button scrolly"},"My Story")))))})),k=(a("tUrg"),r.a.forwardRef((function(e,t){return r.a.createElement("section",{ref:t},r.a.createElement(o.Link,{to:e.link,class:"image"},r.a.createElement("img",{src:e.img,alt:"","data-position":e.dataPosition,className:"homePageImage"})),r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"inner"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.bodyParagraph),r.a.createElement("ul",{class:"actions"},r.a.createElement("li",null,r.a.createElement(o.Link,{to:e.link,class:"button"},"Learn more"))))))}))),P=function(e){return r.a.createElement("section",null,r.a.createElement("span",{class:e.className}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.paragraphText))},j=r.a.forwardRef((function(e,t){return r.a.createElement("section",{id:e.id,class:e.className,ref:t},r.a.createElement("div",{class:"inner"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("main",null,e.children)))})),S=r.a.forwardRef((function(e,t){return r.a.createElement("div",{class:"split style1",ref:t},r.a.createElement("section",null,r.a.createElement("form",{method:"post",action:"#"},r.a.createElement("div",{class:"fields"},r.a.createElement("div",{class:"field half"},r.a.createElement("label",{for:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name"})),r.a.createElement("div",{class:"field half"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",id:"email"})),r.a.createElement("div",{class:"field"},r.a.createElement("label",{for:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",rows:"5"}))),r.a.createElement("ul",{class:"actionsContact"},r.a.createElement("li",null,r.a.createElement("a",{href:"",class:"button submit"},"Send Message")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"../../ChristopherMaselli_Resume.jpg",class:"button submit"},"View Resume"))))),r.a.createElement("section",null,r.a.createElement("ul",{class:"contact"},r.a.createElement("li",null,r.a.createElement("h3",null,"Address"),r.a.createElement("span",null,"455 East 14th Street",r.a.createElement("br",null),"New York, NY 10009",r.a.createElement("br",null),"USA")),r.a.createElement("li",null,r.a.createElement("h3",null,"Email"),r.a.createElement("a",{href:"#"},"Christopherfmaselli@gmail.com")),r.a.createElement("li",null,r.a.createElement("h3",null,"Phone"),r.a.createElement("span",null,"(201) 961-4859")),r.a.createElement("li",null,r.a.createElement("h3",null,"Github"),r.a.createElement("a",{href:"https://github.com/ChristopherMaselli"},"Github.com/ChristopherMaselli")),r.a.createElement("li",null,r.a.createElement("h3",null,"LinkedIn"),r.a.createElement("a",{href:"https://www.linkedin.com/in/christopher-maselli-b51864ab/"},"Linkedin.com/in/christopher-maselli-b51864ab")))))})),C=a("W/9C"),M=(a("cKkx"),a("wxDN"),a("nDrc"),a("vrFN"));t.default=function(){var e=v({threshold:.5}),t=e[0],a=e[1],n=v({threshold:.25}),i=n[0],l=n[1],s=v({threshold:.5}),c=s[0],m=s[1],d=v({threshold:.5}),h=d[0],u=d[1];return r.a.createElement("body",{class:"is-preload"},r.a.createElement(M.a,{title:"Home"}),r.a.createElement("section",{id:"sidebar"},r.a.createElement("div",{class:"inner"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/#intro",class:a?"scrolly active":"scrolly"},"Welcome")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/#one",class:l?"scrolly active":"scrolly"},"My Story")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/#two",class:m?"scrolly active":"scrolly"},"My Skills")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/#three",class:u?"scrolly active":"scrolly"},"Get in touch")))))),r.a.createElement("div",{id:"wrapper"},r.a.createElement(b,{ref:t}),r.a.createElement("section",{id:"one",class:"wrapper style2 spotlights",ref:i},r.a.createElement(k,{title:"The Start:",img:"../../bioengineering.jpg",dataPosition:"center center",bodyParagraph:"After graduating at Lehigh University with a degree in Bioengineering, I started my career with Progenitor Cell Therapy (PCT). Performing various roles both in and out of a laboratory environment gave me a solid grasp of the fundamentals of Bioengineering, and after working in an operations capacity for 2.5 years in various roles, I decided it was time to move on.",link:"/Bioengineering"}),r.a.createElement(k,{title:"The Game:",img:"../../gameproject.png",dataPosition:"top center",bodyParagraph:"I developed a fascination for programming, and lack of a computer science/software engineering degree would not stop me from delving into the field. During my off time while at PCT, I focused my efforts on a new project. My brother and I worked together to build a quality, fully functional, online multiplayer game in a Unity/C# framework. This project became my mentorship and taught me the fundamentals of object oriented programming.",link:"GameProject"}),r.a.createElement(k,{title:"The Switch:",dataPosition:"25% 25%",img:"../../innovest.png",bodyParagraph:"Realizing my potential lay most strongly in the software development field, I decided to make a choice. After a successful 2.5 years in the Bioengineering field, I decided to make software development my career. The change was nothing short of liberating. Innovest Systems LLC became the first step of my new journey. I managed code as a T-SQL engineer and gained significant experience in the world of software engineering.",link:"InnovestSystems"}),r.a.createElement(k,{title:"The Second Project:",dataPosition:"25% 25%",img:"../../helpdesk.png",bodyParagraph:"Wanting to expand my skills further, and familiarize myself with new areas of software development, I took on a full-stack Helpdesk Project. A fully-functional full-stack application, this project taught me the fundamentals of web development. With a front-end built on a React.js framework, and an API/Backend built through ASP.NET/SQL, the project expanded my proficiencies to many new platforms.",link:"HelpdeskProject"}),r.a.createElement(k,{title:"The Website:",dataPosition:"25% 25%",img:"../../website.png",bodyParagraph:"After completion of the Helpdesk project, my learnings in front-end applications prompted the creation of my personal website. Built in a Gatsby-React framework, with a Github-hosted custom domain-name, the project was a learning experience in itself. From the animation-work to the modularization of it’s pages, the website represents my desire to grow my skills and develop in my new career.",link:"Website"})),r.a.createElement(j,{id:"two",className:"wrapper style3 fade-up",title:"Skills",description:"My strongest platforms and languages picked up through project-work experience.",ref:c},r.a.createElement("div",{class:"features"},r.a.createElement(P,{className:"icon solid major fa-code",title:"C#",paragraphText:"Primary language for Backend operations. Learned from the Game Project."}),r.a.createElement(P,{className:"icon solid major fa-lock",title:"React.js",paragraphText:"Front-End framework used to create interactive UI designs."}),r.a.createElement(P,{className:"icon solid major fa-cog",title:"SQL/T-SQL",paragraphText:"Strong SQL skills learned from time at Innovest systems. often used to Get, Post, Put, and Delete items from Database."}),r.a.createElement(P,{className:"icon solid major fa-desktop",title:"HTML/CSS",paragraphText:"Primary languages for front-end operations, combine with a React framework to create beautiful web-design."}),r.a.createElement(P,{className:"icon solid major fa-link",title:"ASP.NET/MVC",paragraphText:"Primary framework for backend API functionality. Currently most experienced with MVC (Model View Controller) setup."}),r.a.createElement(P,{className:"icon major fa-gem",title:"Unity",paragraphText:"Primary framework for coding C# aspects of any game projects. Utilized for the game project and plan to do so for my next project."}))),r.a.createElement(j,{id:"three",className:"wrapper style1 fade-up",title:"Get in touch",description:"(Functional use coming soon! Please use email attached)",ref:h},r.a.createElement(S,null))),r.a.createElement(C.a,null))}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-3a8dd37292fa688c58df.js.map