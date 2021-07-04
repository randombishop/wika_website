(self.webpackChunkwika=self.webpackChunkwika||[]).push([[570],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5673:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={},l="How it works",p={type:"mdx",permalink:"/how-it-works",source:"@site/src/pages/how-it-works.md"},u=[{value:"1. In a nutshell",id:"1-in-a-nutshell",children:[]},{value:"2. The Webpage Registry",id:"2-the-webpage-registry",children:[]},{value:"3. The Like Social Contract",id:"3-the-like-social-contract",children:[]},{value:"4. Why should I buy and spend Wikas?",id:"4-why-should-i-buy-and-spend-wikas",children:[]}],c={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-it-works"},"How it works"),(0,o.kt)("h2",{id:"1-in-a-nutshell"},"1. In a nutshell"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:n(3992).Z})),(0,o.kt)("p",null,"As you can see in the screenshot, Wika is a simple button that allows users to like webpages."),(0,o.kt)("p",null,"Think about all the ",(0,o.kt)("strong",{parentName:"p"},"like")," buttons in the world, Facebook, YouTube, Twitter, some platforms have even 2 kinds of them."),(0,o.kt)("p",null,"Why so many? Each one generating data in private databases\nthat are often used to optimize for advertisment or hidden agendas. "),(0,o.kt)("p",null,"Wika proposes one clean and transparent version of those, which you can use on any platform,\nwith a genuine mission to improve the internet and recommend quality content."),(0,o.kt)("h2",{id:"2-the-webpage-registry"},"2. The Webpage Registry"),(0,o.kt)("p",null,"Every internet web page is represented by an address.\nThe technical term is ",(0,o.kt)("strong",{parentName:"p"},"URL")," (Universal Resource Locator),\nbut it's a just a tech name for the address that shows on the web browser and that we use to navigate to pages."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:n(4222).Z})),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"https://randombishop.medium.com/are-cryptocurrencies-cool-590c2314c1fc"),"\nis the URL of the article above, published on medium blogging platform."),(0,o.kt)("p",null,"The internet already has registries that manage the domain names ownership,\nfor example ",(0,o.kt)("inlineCode",{parentName:"p"},"medium.com")," is owned and controlled by the company who runs that platform,\nbut there is currently no standard way to know who is the author of one particular page in a domain."),(0,o.kt)("p",null,"In some cases, it might be possible to track who authored the page,\nbut for the majority of internet content, each domain has their own private database. "),(0,o.kt)("p",null,"The core of the Wika Network is to solve this problem and\nprovide a registry capable of mapping a URL to an owner account."),(0,o.kt)("p",null,"The author of a web page marks their webpage with their unique account number,\nsubmits a verification request to the Wika blockchain, and upon verification,\ngets registered as the owner of their page in our decentralized ledger, secured by blockchain technology."),(0,o.kt)("p",null,"Now, why would they want to do that?\nBecause whether their content is published on Medium, Wikipedia, YouTube, Facebook,\nor any other platform, they'll get access to an ecosystem where they can monetize their posts\nwithout any dependency. Users can send them value, notify that they like their page, post reviews and ratings,\nall in an unprecedented decentralized and transparent way."),(0,o.kt)("p",null,"Wika Network's ambition is to empower authors and free them from unnecessary intermediaries."),(0,o.kt)("h2",{id:"3-the-like-social-contract"},"3. The Like Social Contract"),(0,o.kt)("p",null,"When you send a transaction in the bitcoin network, you simply move some value from one address to the other."),(0,o.kt)("p",null,"Of course, it is also possible to do that in the Wika Network, but we also propose a special transaction called Like."),(0,o.kt)("p",null,"In the blockchain technology jargon, this kind of transaction is called a ",(0,o.kt)("strong",{parentName:"p"},"Smart Contract"),"."),(0,o.kt)("p",null,"In our case, you can think of it as a ",(0,o.kt)("strong",{parentName:"p"},"Social Contract")," that works like this -",(0,o.kt)("br",{parentName:"p"}),"\n","when someones likes an URL (in other words when they submit a like transaction):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"They pay an amount of Wikas depending on current Like price.\nFor example, they sent 10 Likes, 1 Like = 0.25 Wikas, so they're spending 2.5 Wikas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"33% of this amount goes to the registered owner of the URL. If there is no owner registered yet,\nthis amount stays in a special account until an owner registers the page and claims it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"33% goes to the people who liked the page previously.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"33% goes to the agent who referred the webpage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"1% goes to a pot used to organize a daily lottery.   "))),(0,o.kt)("p",null,"The percentages are configurable and will be fine tuned as we test the system, gather data and analyze its dynamics."),(0,o.kt)("p",null,"But the important idea here is that the Wika Network defines a Social Contract between its agents. "),(0,o.kt)("p",null,"People who like webpages reward the authors and referrers,\nand also get a chance to earn rewards from upcoming likers."),(0,o.kt)("h2",{id:"4-why-should-i-buy-and-spend-wikas"},"4. Why should I buy and spend Wikas?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To reward authors directly with one single click.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To remain anonymous, because you are represented with an address only,\nand the information you share is exclusively limited to the likes that you send.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will promote new search engines and recommendation systems, developed using universal, transparent, decentralized and public data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can choose from an ecosystem of those tools,\nrather than depend on the ones proposed by each platform using their opaque algorithms.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will stay away from privacy-intruding centralized databases. "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contributing to the Wika Network is an engaged action to improve the internet and promote quality content,\nand ultimately, it only depends on your generosity.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/getting-started"},"Get started now!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/roadmap"},"Check out our roadmap")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/sPEwJUmAwH"},"Join us on discord")))}h.isMDXComponent=!0},4222:function(e,t,n){"use strict";t.Z=n.p+"assets/images/url_example-b0db955c592e83a55ab8b4f3e1f438e7.png"},3992:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wika_widget-46cc25a7f2804430c43d76124ef290f5.png"}}]);