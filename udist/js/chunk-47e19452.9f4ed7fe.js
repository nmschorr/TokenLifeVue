(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e19452"],{"20f6":function(e,t,n){},abf2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"savedgraphs",fluid:""}},[e.showme?n("v-card",{attrs:{color:"teal"}}):e._e()],1)},a=[],o=(n("96cf"),n("1da1")),c=n("bc3a"),s=n.n(c),u=s.a.create(),i=n("a448"),l=i.operation({retries:10,factor:3,minTimeout:1e3,maxTimeout:4e4}),p={name:"SavedGraphs",data:function(){return{showme:!1}},mounted:function(){var e=this;console.log("starting in mounted"),l.attempt(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("sending request: ",n," attempt"),t.prev=1,t.next=4,u.get(myurl);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t["catch"](1),!l.retry(t.t0)){t.next=10;break}return t.abrupt("return");case 10:r=l.attempts(),console.log("retries: "+r),r<11&&(e.showme=!0);case 13:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}())},methods:{operation:l}},m=p,f=n("2877"),d=n("6544"),h=n.n(d),v=n("b0af"),w=n("a523"),b=Object(f["a"])(m,r,a,!1,null,null,null);t["default"]=b.exports;h()(b,{VCard:v["a"],VContainer:w["a"]})}}]);
//# sourceMappingURL=chunk-47e19452.9f4ed7fe.js.map