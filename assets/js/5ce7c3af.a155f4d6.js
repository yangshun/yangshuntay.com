"use strict";(self.webpackChunkyangshuntay_com=self.webpackChunkyangshuntay_com||[]).push([[419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,d=c["".concat(l,".").concat(g)]||c[g]||h[g]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],s={title:"Mobile Assignment Reflections",slug:"mobile-assignment-reflections",author:"Yangshun Tay",author_url:"https://github.com/yangshun",author_image_url:"https://github.com/yangshun.png",tags:["cs3216"]},l=void 0,u={permalink:"/blog/mobile-assignment-reflections",source:"@site/blog/2013-10-21-mobile-assignment-reflections.md",title:"Mobile Assignment Reflections",description:"This assignment made me worry a lot because of the little time we spent coding and testing it. I still stand by my previous rants that mobile web development is a PITA, there are simply too many nitty gritty things to consider and pitfalls to avoid when developing for mobile.",date:"2013-10-21T00:00:00.000Z",formattedDate:"October 21, 2013",tags:[{label:"cs3216",permalink:"/blog/tags/cs-3216"}],readingTime:3.71,hasTruncateMarker:!0,authors:[{name:"Yangshun Tay",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png"}],frontMatter:{title:"Mobile Assignment Reflections",slug:"mobile-assignment-reflections",author:"Yangshun Tay",author_url:"https://github.com/yangshun",author_image_url:"https://github.com/yangshun.png",tags:["cs3216"]},prevItem:{title:"How to do Projects",permalink:"/blog/how-to-do-projects"},nextItem:{title:"More Thinking, Less Coding",permalink:"/blog/more-thinking-less-coding"}},p={authorsImageUrls:[void 0]},h=[{value:"Choosing a Suitable CSS Framework",id:"choosing-a-suitable-css-framework",level:2},{value:"Flat Design",id:"flat-design",level:2},{value:"Optional to Sign Up",id:"optional-to-sign-up",level:2},{value:"AngularJS",id:"angularjs",level:2},{value:"Building a Help/FAQ Page",id:"building-a-helpfaq-page",level:2},{value:"Keep Things Simple",id:"keep-things-simple",level:2},{value:"Overall",id:"overall",level:2}],c={toc:h};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This assignment made me worry a lot because of the little time we spent coding and testing it. I still stand by my previous rants that mobile web development is a PITA, there are simply too many nitty gritty things to consider and pitfalls to avoid when developing for mobile."),(0,o.kt)("p",null,"But surprisingly we did extremely well for this assignment! Far exceeding my expectations by just too much. Based on the feedback given from the teaching team, I'm glad that the decisions I made when designing (both aesthetic and product) the application turned out to be the right ones:"),(0,o.kt)("h2",{id:"choosing-a-suitable-css-framework"},"Choosing a Suitable CSS Framework"),(0,o.kt)("p",null,"I didn't use Bootstrap, Foundation nor jQuery Mobile (because every other team would be using it) for the HTML and CSS. Instead, I chose to use ",(0,o.kt)("a",{parentName:"p",href:"http://www.getuikit.com/"},(0,o.kt)("strong",{parentName:"a"},"UIKit")),", which I chanced upon (thankfully) in a Web Designer newsletter a week before the start of Assignment 3. I chose UIKit because they had a slide-to-reveal navigation component which was prevalent in pre-iOS7 mobile apps. This helped me score quite a few points in achieving a native-like feel."),(0,o.kt)("h2",{id:"flat-design"},"Flat Design"),(0,o.kt)("p",null,"Almost every new UI design is flat now! Not that I really like flat design, but flat design is seriously easier to implement because I can do away with drop shadows, inner shadows, etc. I also wanted to try out developing an iOS7-like app, with heavy usage of Helvetica Neue and little use of borders."),(0,o.kt)("h2",{id:"optional-to-sign-up"},"Optional to Sign Up"),(0,o.kt)("p",null,"For our app, Qivi, which is a mobile version of a classroom clicker, if every user needed to sign up before being able to use it, I'm pretty sure nobody would use it. I actually learnt this from my the startup I interned over my NOC program, ",(0,o.kt)("a",{parentName:"p",href:"http://www.easilydo.com"},(0,o.kt)("strong",{parentName:"a"},"EasilyDo")),". The EasilyDo app does not require users to sign up before allowing them to use it, because users have to see the value in it before being willing to sign up. This was a pain to implement because users had to be given a temporary identity, but it's necessary to gain some users."),(0,o.kt)("h2",{id:"angularjs"},"AngularJS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://angularjs.org/"},(0,o.kt)("strong",{parentName:"a"},"AngularJS"))," was perfect for this app because the app has to be backed by a RESTful service. The trouble with using RESTful APIs comes when you have to handle the updating of the view after the data has been retrieved. Those without frameworks will either append raw HTML or use jQuery to manipulate the DOM. I hate mixing my HTML and JS together because it becomes an unmaintainable mess very soon."),(0,o.kt)("p",null,"Also, AngularJS is pretty good for making Single-Page Applications, which is extremely suitable for a mobile web app that requires caching of files. Routing is done on the client side, and the number of page loads/refreshes is reduced."),(0,o.kt)("p",null,"Admittedly, I used some hackish methods to get around some issues of using UIKit and AngularJS together, but kinda unavoidable because we were under schedule constraints >","_","<"),(0,o.kt)("h2",{id:"building-a-helpfaq-page"},"Building a Help/FAQ Page"),(0,o.kt)("p",null,"This is another tip that I picked up from the EasilyDo mobile app. If your app has a certain level of complexity, it's not realistic to expect users to learn the app on their own. This is made even harder if the interface is confusing and does not stick to the convention of mobile apps."),(0,o.kt)("p",null,"As Su Yuen said,"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\"Most average laymen users however would give up within about 5-10 seconds if they open your app/website and can't figure out what is going on. It is especially confusing if the data you have populated in the website/app upon landing on your site is data like 'Test 123'. \"")),(0,o.kt)("p",null,"Thankfully I created a sample event titled ",(0,o.kt)("strong",{parentName:"p"},'"Testing Event for Qivi"'),' with detailed instructions in the "Help" page on how to understand and experience what Qivi does.'),(0,o.kt)("h2",{id:"keep-things-simple"},"Keep Things Simple"),(0,o.kt)("p",null,'Given the lack of time, my team had to cut features and ultimately we reduced our feature set to the core functionality of real-time response to polls. In the pitch, I repeatedly stressed the key value proposition of Qivi and guided users in experiencing it through the "Help" page.'),(0,o.kt)("p",null,"Focus on one thing, do it extremely well before moving on to other features."),(0,o.kt)("h2",{id:"overall"},"Overall"),(0,o.kt)("p",null,"Overall, I'm ",(0,o.kt)("em",{parentName:"p"},"extremely")," glad that things turned out alright and that the (coincidentally?) good UI/UX decisions made up for the lack of time in building an app that is robust against the dumbest users. I definitely learnt something valuable from this assignment and shall apply it to the final project (:"))}g.isMDXComponent=!0}}]);