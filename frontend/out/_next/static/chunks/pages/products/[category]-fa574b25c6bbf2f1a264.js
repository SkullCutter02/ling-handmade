_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"5jyH":function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),r=i("q1tI"),a=i.n(r),s=i("nOHt"),c=i("5Yp1"),o=i("MX0m"),l=i.n(o),d=i("HbWr"),x=i("nQYz"),j=i("kGJ0"),p=i("uVAS"),m=function(e){var t=e.category,i=Object(r.useContext)(d.a).data,s=Object(r.useState)(),c=s[0],o=s[1];return Object(r.useEffect)((function(){void 0!==i&&o(i.filter((function(e){return e.categories[0].slug===t})))}),[i]),Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(j.a,{titleText:t&&t.charAt(0).toUpperCase()+t.slice(1).replaceAll("-"," ")}),c?Object(n.jsx)("div",{className:"jsx-933507976 grid-container",children:c.map((function(e){return Object(n.jsx)(x.a,{imgSrc:"".concat(e.photo.formats.medium.url),alternativeTxt:e.photo.alternativeText,name:e.name,price:e.price,categorySlug:t,productSlug:e.slug},e.id)}))}):Object(n.jsx)("img",{src:p.a,alt:"spinner",className:"jsx-933507976 spinner"}),Object(n.jsx)(l.a,{id:"933507976",children:[".grid-container.jsx-933507976{width:100%;height:100%;margin-top:2em;display:grid;grid-template-columns:1fr 1fr 1fr;}","@media screen and (max-width:1000px){.grid-container.jsx-933507976{grid-template-columns:1fr 1fr;}}","@media screen and (max-width:600px){.grid-container.jsx-933507976{grid-template-columns:1fr;}}"]})]})};t.default=function(){var e=Object(s.useRouter)().query.category;return Object(n.jsx)(d.b,{children:Object(n.jsx)(c.a,{children:Object(n.jsx)(m,{category:e})})})}},U53Z:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[category]",function(){return i("5jyH")}])},kGJ0:function(e,t,i){"use strict";var n=i("nKUr"),r=i("MX0m"),a=i.n(r);i("q1tI");t.a=function(e){var t=e.titleText;return Object(n.jsxs)("div",{className:"jsx-2273185480",children:[Object(n.jsx)("h1",{className:"jsx-2273185480",children:t}),Object(n.jsx)("div",{className:"jsx-2273185480 line"}),Object(n.jsx)(a.a,{id:"2273185480",children:["h1.jsx-2273185480{text-align:center;font-size:3rem;margin-top:1em;}",".line.jsx-2273185480{width:70px;margin:0 auto;padding-top:5px;border-bottom:4px solid #af9b7d;}","@media screen and (max-width:700px){h1.jsx-2273185480{font-size:2.5rem;}}"]})]})}},nQYz:function(e,t,i){"use strict";var n=i("nKUr"),r=i("MX0m"),a=i.n(r),s=i("q1tI"),c=i.n(s),o=i("YFqc"),l=i.n(o);t.a=function(e){var t=e.imgSrc,i=e.alternativeTxt,r=e.name,s=e.price,o=e.categorySlug,d=e.productSlug;function x(e){e.target.parentNode.firstElementChild.style.opacity="100%"}return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("div",{className:"jsx-218576074 grid-item",children:[Object(n.jsxs)("div",{className:"jsx-218576074 container",children:[Object(n.jsx)("div",{onMouseEnter:x,onMouseLeave:function(e){e.target.parentNode.firstElementChild.style.opacity="0"},className:"jsx-218576074 overlay"}),Object(n.jsx)(l.a,{href:"/products/".concat(o,"/").concat(d),children:Object(n.jsx)("button",{type:"click",onMouseEnter:x,className:"jsx-218576074",children:"LEARN MORE"})}),Object(n.jsx)("img",{src:t,alt:i,className:"jsx-218576074"})]}),Object(n.jsx)(l.a,{href:"/products/".concat(o,"/").concat(d),children:Object(n.jsx)("a",{className:"jsx-218576074 name",children:r})}),Object(n.jsxs)("p",{className:"jsx-218576074 price",children:["$",s]})]}),Object(n.jsx)(a.a,{id:"218576074",children:[".grid-item.jsx-218576074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:350px;}","a.jsx-218576074{font-size:1.5rem;color:black;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}","p.jsx-218576074{font-size:1.5rem;}",".name.jsx-218576074{margin-top:10px;}",".container.jsx-218576074{width:80%;height:70%;border:3px solid #af9b7d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".overlay.jsx-218576074{opacity:0;position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.3);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}",".overlay.jsx-218576074:hover{opacity:100%;}","img.jsx-218576074{width:100%;height:100%;object-fit:cover;}","button.jsx-218576074{opacity:0;position:absolute;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:40%;height:15%;background:#af9b7d;border:3px solid #af9b7d;color:black;font-size:1rem;cursor:pointer;z-index:3;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}",".overlay.jsx-218576074:hover~button.jsx-218576074{opacity:100%;}","button.jsx-218576074:hover{opacity:100%;background:none;}","@media screen and (max-width:700px){button.jsx-218576074{font-size:0.6rem;}}","@media screen and (max-width:600px){button.jsx-218576074{font-size:0.8rem;}}"]})]})}}},[["U53Z",0,2,1,3]]]);