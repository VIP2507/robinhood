(this.webpackJsonprobinhood=this.webpackJsonprobinhood||[]).push([[0],{101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},110:function(e,t,s){},222:function(e,t,s){},223:function(e,t,s){},227:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(26),i=s.n(n),r=(s(101),s(102),s(86)),o=s.n(r),d=(s(103),s.p+"static/media/robinhood.d4c5626b.svg"),l=s(3);var j=function(){return Object(l.jsxs)("div",{className:"header__wrapper",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)("img",{src:d,width:25})}),Object(l.jsx)("div",{className:"header__search",children:Object(l.jsxs)("div",{className:"header__searchContainer",children:[Object(l.jsx)(o.a,{}),Object(l.jsx)("input",{placeholder:"Search",type:"text"})]})}),Object(l.jsxs)("div",{className:"header__menuItems",children:[Object(l.jsx)("a",{href:"/",children:"Free Stocks"}),Object(l.jsx)("a",{href:"/",children:"PortFolio"}),Object(l.jsx)("a",{href:"/",children:"Cash"}),Object(l.jsx)("a",{href:"/",children:"Messages"}),Object(l.jsx)("a",{href:"/",children:"Account"})]})]})},h=s(18),b=(s(110),s(34)),m=s.n(b),u=(s(62),s(33)),p=s.n(u);var O=s(245),_=s(92),x={legend:{display:!1},hover:{intersect:!1},elements:{line:{tension:0},point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1}}]}};var v=function(e){e.casesType;var t=Object(c.useState)({}),s=Object(h.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){for(var e=[],t=50,s=0;s<366;s++){var c=new Date;c.setHours(0,0,0,0),c.setDate(s),t+=Math.round((Math.random()<.5?1:0)*Math.random()*10),e.push({x:c,y:t})}n(e)}),[]),Object(l.jsx)("div",{children:(null===a||void 0===a?void 0:a.length)>0&&Object(l.jsx)(_.Line,{data:{datasets:[{type:"line",backgroundColor:"black",borderColor:"#5AC53B",borderWidth:2,pointBorderColor:"rgba(0, 0, 0, 0)",pointBackgroundColor:"rgba(0, 0, 0, 0)",pointHoverBackgroundColor:"#5AC53B",pointHoverBorderColor:"#000000",pointHoverBorderWidth:4,pointHoverRadius:6,data:a}]},options:x})})},f=s(244);s(222);var N=function(){return Object(l.jsx)("div",{className:"timeline__container",children:Object(l.jsxs)("div",{className:"timeline__buttons__container",children:[Object(l.jsx)("div",{className:"timeline__button",children:"LIVE"}),Object(l.jsx)("div",{className:"timeline__button",children:"1D"}),Object(l.jsx)("div",{className:"timeline__button active",children:"1W"}),Object(l.jsx)("div",{className:"timeline__button",children:"3M"}),Object(l.jsx)("div",{className:"timeline__button",children:"1Y"}),Object(l.jsx)("div",{className:"timeline__button",children:"ALL"})]})})};var g=function(){var e=Object(c.useState)(["Technology","Top Movies","Upcoming Earnings","Crypto","Cannabis","Healthcare Supplies","Index ETFs","Technology","China","Pharma"]),t=Object(h.a)(e,2),s=t[0],a=(t[1],Object(c.useState)("")),n=Object(h.a)(a,2),i=(n[0],n[1]);return Object(c.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[]),Object(l.jsx)("div",{className:"newsfeed",children:Object(l.jsxs)("div",{className:"newsfeed__container",children:[Object(l.jsxs)("div",{className:"newsfeed__chart__section",children:[Object(l.jsxs)("div",{className:"newsfeed_price_asset",children:[Object(l.jsx)("h1",{children:" $114,656,84"}),Object(l.jsx)("p",{children:" $142.90 (-0,12) Today "})]}),Object(l.jsxs)("div",{className:"newsfeed__chart",children:[Object(l.jsx)(v,{}),Object(l.jsx)(N,{})]})]}),Object(l.jsxs)("div",{className:"newsfeed__buying__section",children:[Object(l.jsx)("h2",{children:" Buying Power"}),Object(l.jsx)("h2",{children:" $4.11"})]}),Object(l.jsx)("div",{className:"newsfeed__market__section",children:Object(l.jsxs)("div",{className:"newsfeed__market__box",children:[Object(l.jsx)("p",{children:" Markets Closed"}),Object(l.jsx)("h1",{children:" Happy Thanksgiving"})]})}),Object(l.jsxs)("div",{className:"newsfeed__popularlists__section",children:[Object(l.jsxs)("div",{className:"newsfeed__popularlists__intro",children:[Object(l.jsx)("h1",{children:"Popular lists"}),Object(l.jsx)("p",{children:"Show More"})]}),Object(l.jsx)("div",{className:"newsfeed_popularlists_badges",children:s.map((function(e){return Object(l.jsx)(f.a,{className:"topic__badge",variant:"outlined",label:e,avatar:Object(l.jsx)(O.a,{src:"https://avatars.dicebear.com/api/human/".concat(e,".svg")})})}))})]})]})})},w=s(94),y=(s(223),s.p+"static/media/stock.ef9ad219.svg");var k=function(e){var t=(e.price-e.openPrice)/e.openPrice*100;return Object(l.jsxs)("div",{className:"row",onClick:function(){},children:[Object(l.jsxs)("div",{className:"row__intro",children:[Object(l.jsx)("h1",{children:null===e||void 0===e?void 0:e.name}),Object(l.jsx)("p",{children:e.volume&&e.volume+" shares"})]}),Object(l.jsx)("div",{className:"row__chart",children:Object(l.jsx)("img",{src:y,height:16})}),Object(l.jsxs)("div",{className:"row__numbers",children:[Object(l.jsx)("p",{className:"row__price",children:e.price}),Object(l.jsxs)("p",{className:"row__percentage",children:[" +",Number(t).toFixed(2),"%"]})]})]})},S=s(93).a.initializeApp({apiKey:"AIzaSyBpORPZTGCJu6pf9yYcoBCGOxMVnayLTCM",authDomain:"robinhood-7a2b6.firebaseapp.com",projectId:"robinhood-7a2b6",storageBucket:"robinhood-7a2b6.appspot.com",messagingSenderId:"768434091658",appId:"1:768434091658:web:7d5ba67d60f4d3afd19f73",measurementId:"G-9SK3QNS60S"}).firestore(),C="&token=".concat("bv1uf4v48v6o5ed6h88g"),B=[];var M=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(h.a)(n,2),r=i[0],o=i[1],d=function(e){return p.a.get("".concat("https://finnhub.io/api/v1/quote?symbol=").concat(e).concat(C)).catch((function(e){console.error("Error",e.message)}))};return Object(c.useEffect)((function(){S.collection("myStocks").onSnapshot((function(e){var t=[],s=[];e.docs.map((function(e){t.push(d(e.data().ticker).then((function(t){s.push({id:e.id,data:e.data(),info:t.data})})))})),Promise.all(t).then((function(){o(s)}))}));var e=[];["AAPL","MSFT","TSLA","FB","BABA","UBER","DIS","SBUX"].map((function(t){e.push(d(t).then((function(e){B.push(Object(w.a)({name:t},e.data))})))})),Promise.all(e).then((function(){console.log(B),a(B)}))}),[]),Object(l.jsx)("div",{className:"stats",children:Object(l.jsxs)("div",{className:"stats__container",children:[Object(l.jsxs)("div",{className:"stats__header",children:[Object(l.jsx)("p",{children:" Stocks"}),Object(l.jsx)(m.a,{})]}),Object(l.jsx)("div",{className:"stats__content",children:Object(l.jsx)("div",{className:"stats__rows",children:r.map((function(e){return Object(l.jsx)(k,{name:e.data.ticker,openPrice:e.info.o,volume:e.data.shares,price:e.info.c},e.data.ticker)}))})}),Object(l.jsx)("div",{className:"stats__header stats-lists",children:Object(l.jsx)("p",{children:"Lists"})}),Object(l.jsx)("div",{className:"stats__content",children:Object(l.jsx)("div",{className:"stats__rows",children:s.map((function(e){return Object(l.jsx)(k,{name:e.name,openPrice:e.o,price:e.c},e.name)}))})})]})})};var A=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"app__header",children:Object(l.jsx)(j,{})}),Object(l.jsx)("div",{className:"app__body",children:Object(l.jsxs)("div",{className:"app__container",children:[Object(l.jsx)(g,{}),Object(l.jsx)(M,{})]})})]})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,246)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),P()}},[[227,1,2]]]);
//# sourceMappingURL=main.6a7cebaf.chunk.js.map