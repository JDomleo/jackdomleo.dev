(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,n){var content=n(228);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("6a9a35d9",content,!0,{sourceMap:!1})},227:function(e,t,n){"use strict";var r=n(216);n.n(r).a},228:function(e,t,n){(t=n(12)(!1)).push([e.i,'.work ul[data-v-3c111e77]{padding:1rem 0 0;margin:0;list-style:none;position:relative}.work ul[data-v-3c111e77]:before{content:" ";height:100%;width:1px;background:linear-gradient(50deg,var(--color-orange-deep),var(--color-blue));position:absolute;top:0;left:.5em;z-index:-1}.work ul li[data-v-3c111e77]{display:flex;align-items:baseline}.work__bullet[data-v-3c111e77]{height:1rem;width:1rem;background-color:currentColor;border-radius:50%}.work__time[data-v-3c111e77]{width:5rem;margin:0 .5rem 0 1.5rem}@media screen and (min-width:30em){.work__time[data-v-3c111e77]{margin-right:2.5rem}}.work__details[data-v-3c111e77]{flex:1}.work__details h3[data-v-3c111e77],.work__details h3+p[data-v-3c111e77]{text-transform:uppercase}.work__details h3[data-v-3c111e77]{margin-bottom:0}.work__details h3+p[data-v-3c111e77]{margin-top:.5rem}',""]),e.exports=t},233:function(e,t,n){"use strict";n.r(t);n(16),n(17),n(11),n(25);var r=n(5),o=n(19),c=n(7),l=n(8),d=n(4),m=n(3),f=n(2),v=n(210),y=n(84);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},w=function(e){Object(c.a)(n,e);var t=_(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).workHistory=[{start:new Date("2019-05-15"),end:"present",company:"Mitrefinch",title:"Developer",description:"Creating multitennant SaaS applications such as payroll and access control using Vue.js and TypeScript"},{start:new Date("2019-03-25"),end:new Date("2019-05-15"),company:"Mitrefinch",title:"Junior Developer",description:"Created a centralised repository of consistent styles using SCSS, BEM and PostCSS to consume in new products"},{start:new Date("2018-09-03"),end:new Date("2019-02-18"),company:"flybmi",title:"IT/Developer Apprentice",description:"Used the Grav CMS to maintain the airline's website and React.js to maintain the airline's intranet"},{start:new Date("2017-06-17"),end:new Date("2018-08-31"),company:"Primark",title:"Retail Assistant",description:"Worked part-time for this fast-paced Nottingham high street store during my time in Sixth Form trying to balance my work hours, study hours and personal life"},{start:new Date("2016-07-13"),end:new Date("2016-08-31"),company:"JND Accounting",title:"Office Assistant",description:"Worked part-time for this accounting company after finishing secondary school, making tea and coffee, filing, shredding and tidying up"}],e}return Object(o.a)(n,[{key:"getDate",value:function(e){return{datetime:Object(v.a)(e,"yyyy-MM-dd"),date:Object(v.a)(e,"MMM yyyy")}}}]),n}(f.d),k=w=h([Object(f.a)({components:{DetailsCard:y.b,PageTemplate:y.e},head:function(){return{title:"Home"}}})],w),D=(n(227),n(6)),component=Object(D.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-template",{attrs:{"page-title":"Hey, I'm Jack Domleo"}},[n("p",[e._v("\n    I'm a front-end developer from Nottingham, UK. You happen to have stumbled\n    across my corner of the internet, welcome!\n  ")]),e._v(" "),n("details-card"),e._v(" "),n("section",{staticClass:"work"},[n("h2",[e._v("Work")]),e._v(" "),n("p",[e._v("\n      A brief history of my employment. More details can be found on my\n      "),n("a",{attrs:{href:"https://www.linkedin.com/in/jack-domleo",rel:"nofollow"}},[e._v("LinkedIn profile")]),e._v(".\n    ")]),e._v(" "),n("ul",e._l(e.workHistory,(function(t,r){return n("li",{key:r,attrs:{"aria-setsize":e.workHistory.length,"aria-posinset":r+1}},[n("div",{staticClass:"work__bullet"}),e._v(" "),n("div",{staticClass:"work__time"},[n("span",{staticClass:"sr-only"},[e._v("Employment dates:")]),e._v(" "),n("time",{attrs:{datetime:e.getDate(t.start).datetime}},[e._v(e._s(e.getDate(t.start).date))]),e._v(" "),n("span",{attrs:{"aria-label":"to"}},[e._v("-")]),e._v(" "),n("time",{attrs:{datetime:"present"===t.end?e.getDate(new Date).datetime:e.getDate(t.end).datetime}},[e._v(e._s("present"===t.end?"present":e.getDate(t.end).date)+"\n            "),"present"===t.end?n("span",{staticClass:"sr-only"},[e._v("day")]):e._e()])]),e._v(" "),n("div",{staticClass:"work__details"},[n("h3",[n("span",{staticClass:"sr-only"},[e._v("Company name")]),e._v(e._s(t.company))]),e._v(" "),n("p",[n("span",{staticClass:"sr-only"},[e._v("Job title")]),e._v(e._s(t.title))]),e._v(" "),n("p",[e._v(e._s(t.description))])])])})),0)])],1)}),[],!1,null,"3c111e77",null);t.default=component.exports}}]);