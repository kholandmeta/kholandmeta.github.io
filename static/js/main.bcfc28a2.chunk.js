(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[5],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=3},153:function(e,t,r){"use strict";var n=r(11),a=r(0),o=r(345),i=r(170),c=r(1),s=Object(a.forwardRef)((function(e,t){var r,a,s,l,d=e.children,u=e.type,p=e.direction,b=e.offset,h=e.scale;switch(p){case"up":case"left":s=b,l=0;break;default:s=0,l=b}var f=Object(o.a)(s,l),m=Object(n.a)(f,2),j=m[0],x=m[1],g=Object(o.a)(s,l),v=Object(n.a)(g,2),O=v[0],y=v[1];switch(u){case"rotate":return Object(c.jsx)(i.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===p||"down"===p?Object(c.jsx)(i.a.div,{ref:t,animate:{y:void 0!==O?O:""},onHoverEnd:function(){return y()},onHoverStart:function(){return y()},children:d}):Object(c.jsx)(i.a.div,{ref:t,animate:{x:void 0!==j?j:""},onHoverEnd:function(){return x()},onHoverStart:function(){return x()},children:d});default:return"number"===typeof h&&(h={hover:h,tap:h}),Object(c.jsx)(i.a.div,{ref:t,whileHover:{scale:null===(r=h)||void 0===r?void 0:r.hover},whileTap:{scale:null===(a=h)||void 0===a?void 0:a.tap},children:d})}}));s.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=s},175:function(e,t,r){"use strict";var n=r(22),a=r(70),o=r(0),i=r(34),c=r(343),s=r(171),l=r(90),d=r(342),u=r(344),p=r(1),b=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],h=Object(o.forwardRef)((function(e,t){var r=e.children,o=e.content,h=e.contentClass,f=e.darkTitle,m=e.secondary,j=e.sx,x=void 0===j?{}:j,g=e.contentSX,v=void 0===g?{}:g,O=e.title,y=Object(a.a)(e,b),k=Object(i.a)();return Object(p.jsxs)(c.a,Object(n.a)(Object(n.a)({ref:t,sx:Object(n.a)({border:"1px solid",borderColor:k.palette.primary.light,":hover":{boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)"}},x)},y),{},{children:[!f&&O&&Object(p.jsx)(s.a,{sx:{p:2.5},title:Object(p.jsx)(l.a,{variant:"h5",children:O}),action:m}),f&&O&&Object(p.jsx)(s.a,{sx:{p:2.5},title:Object(p.jsx)(l.a,{variant:"h4",children:O}),action:m}),O&&Object(p.jsx)(d.a,{sx:{opacity:1,borderColor:k.palette.primary.light}}),o&&Object(p.jsx)(u.a,{sx:Object(n.a)({p:2.5},v),className:h||"",children:r}),!o&&r]}))}));h.defaultProps={content:!0},t.a=h},220:function(e,t,r){"use strict";var n=r(22),a=r(70),o=r(0),i=r(34),c=r(343),s=r(171),l=r(90),d=r(342),u=r(344),p=r(1),b=["border","boxShadow","children","content","contentClass","contentSX","darkTitle","secondary","shadow","sx","title"],h={"& .MuiCardHeader-action":{mr:0}},f=Object(o.forwardRef)((function(e,t){var r=e.border,o=void 0===r||r,f=e.boxShadow,m=e.children,j=e.content,x=void 0===j||j,g=e.contentClass,v=void 0===g?"":g,O=e.contentSX,y=void 0===O?{}:O,k=e.darkTitle,w=e.secondary,S=e.shadow,T=e.sx,I=void 0===T?{}:T,z=e.title,M=Object(a.a)(e,b),R=Object(i.a)();return Object(p.jsxs)(c.a,Object(n.a)(Object(n.a)({ref:t},M),{},{sx:Object(n.a)({border:o?"1px solid":"none",borderColor:R.palette.primary[200]+75,":hover":{boxShadow:f?S||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"}},I),children:[!k&&z&&Object(p.jsx)(s.a,{sx:h,title:z,action:w}),k&&z&&Object(p.jsx)(s.a,{sx:h,title:Object(p.jsx)(l.a,{variant:"h3",children:z}),action:w}),z&&Object(p.jsx)(d.a,{}),x&&Object(p.jsx)(u.a,{sx:y,className:v,children:m}),!x&&m]}))}));t.a=f},225:function(e,t,r){"use strict";var n=r(34),a=r(1);t.a=function(){Object(n.a)();return Object(a.jsx)(a.Fragment,{})}},328:function(e,t,r){e.exports={paper:"#fff",primaryLight:"#e3f2fd",primary200:"#90caf9",primaryMain:"#2196f3",primaryDark:"#1e88e5",primary800:"#1565c0",secondaryLight:"#ede7f6",secondary200:"#b39ddb",secondaryMain:"#673ab7",secondaryDark:"#5e35b1",secondary800:"#4527a0",successLight:"#b9f6ca",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eee",grey300:"#e0e0e0",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey900:"#212121",color1:"#1a1a2e",color2:"#16213e",color3:"#0f3460",color4:"#e94560",darkPaper:"#111936",darkBackground:"#1a223f",darkLevel1:"#29314f",darkLevel2:"#212946",darkTextTitle:"#d7dcec",darkTextPrimary:"#bdc8f0",darkTextSecondary:"#8492c4",darkPrimaryLight:"#e3f2fd",darkPrimaryMain:"#2196f3",darkPrimaryDark:"#1e88e5",darkPrimary200:"#90caf9",darkPrimary800:"#1565c0",darkSecondaryLight:"#d1c4e9",darkSecondaryMain:"#7c4dff",darkSecondaryDark:"#651fff",darkSecondary200:"#b39ddb",darkSecondary800:"#6200ea"}},377:function(e,t){},399:function(e,t){},401:function(e,t){},480:function(e,t){},482:function(e,t){},515:function(e,t){},520:function(e,t){},522:function(e,t){},529:function(e,t){},542:function(e,t){},565:function(e,t){},567:function(e,t){},576:function(e,t){},578:function(e,t){},660:function(e,t,r){},661:function(e,t,r){"use strict";r.r(t);var n=r(64),a=r.n(n),o=r(45),i=r(56);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=r(729),s=r(717),l=r(715),d=r(24),u=r(0),p=r(22),b=r(7),h=r(34),f=r(714),m=r(731),j=r(734),x=r(735),g=r(11),v=r(70),O=r(90),y=r(343),k=r(723),w=r(342),S=r(722),T={basename:"",defaultPath:"/dashboard/default",fontFamily:"'Roboto', sans-serif",borderRadius:8},I=r(113),z=r(37),M=r(218),R=r.n(M),C=r(333),P=r.n(C),L=r(332),D=r.n(L),A=r(1),B=["card","divider","icon","icons","maxItems","navigation","rightAlign","separator","title","titleBottom"],W={display:"flex",color:"grey.900",textDecoration:"none",alignContent:"center",alignItems:"center"},F=function(e){var t=e.card,r=e.divider,n=e.icon,a=e.icons,i=e.maxItems,c=e.navigation,s=e.rightAlign,l=e.separator,d=e.title,b=e.titleBottom,f=Object(v.a)(e,B),j=Object(h.a)(),x={marginRight:j.spacing(.75),marginTop:"-".concat(j.spacing(.25)),width:"1rem",height:"1rem",color:j.palette.secondary.main},M=Object(u.useState)(),C=Object(g.a)(M,2),L=C[0],F=C[1],E=Object(u.useState)(),H=Object(g.a)(E,2),q=H[0],N=H[1],_=function e(t){t.children&&t.children.filter((function(r){return r.type&&"collapse"===r.type?e(r):r.type&&"item"===r.type&&document.location.pathname===T.basename+r.url&&(F(t),N(r)),!1}))};Object(u.useEffect)((function(){var e;null===c||void 0===c||null===(e=c.items)||void 0===e||e.map((function(e){return e.type&&"group"===e.type&&_(e),!1}))}));var G,J,K,U,X=l,Y=l?Object(A.jsx)(X,{stroke:1.5,size:"1rem"}):Object(A.jsx)(z.j,{stroke:1.5,size:"1rem"}),$=Object(A.jsx)(O.a,{}),V="";return L&&"collapse"===L.type&&(K=L.icon?L.icon:R.a,G=Object(A.jsxs)(O.a,{component:o.b,to:"#",variant:"subtitle1",sx:W,children:[a&&Object(A.jsx)(K,{style:x}),L.title]})),q&&"item"===q.type&&(V=q.title,U=q.icon?q.icon:R.a,J=Object(A.jsxs)(O.a,{variant:"subtitle1",sx:{display:"flex",textDecoration:"none",alignContent:"center",alignItems:"center",color:"grey.500"},children:[a&&Object(A.jsx)(U,{style:x}),V]}),!1!==q.breadcrumbs&&($=Object(A.jsxs)(y.a,Object(p.a)(Object(p.a)({sx:{marginBottom:!1===t?0:j.spacing(I.a),border:!1===t?"none":"1px solid",borderColor:j.palette.primary[200]+75,background:!1===t?"transparent":j.palette.background.default}},f),{},{children:[Object(A.jsx)(m.a,{sx:{p:2,pl:!1===t?0:2},children:Object(A.jsxs)(k.a,{container:!0,direction:s?"row":"column",justifyContent:s?"space-between":"flex-start",alignItems:s?"center":"flex-start",spacing:1,children:[d&&!b&&Object(A.jsx)(k.a,{item:!0,children:Object(A.jsx)(O.a,{variant:"h3",sx:{fontWeight:500},children:q.title})}),Object(A.jsx)(k.a,{item:!0,children:Object(A.jsxs)(S.a,{sx:{"& .MuiBreadcrumbs-separator":{width:16,ml:1.25,mr:1.25}},"aria-label":"breadcrumb",maxItems:i||8,separator:Y,children:[Object(A.jsxs)(O.a,{component:o.b,to:"/",color:"inherit",variant:"subtitle1",sx:W,children:[a&&Object(A.jsx)(D.a,{sx:x}),n&&Object(A.jsx)(P.a,{sx:Object(p.a)(Object(p.a)({},x),{},{mr:0})}),!n&&"Dashboard"]}),G,J]})}),d&&b&&Object(A.jsx)(k.a,{item:!0,children:Object(A.jsx)(O.a,{variant:"h3",sx:{fontWeight:500},children:q.title})})]})}),!1===t&&!1!==r&&Object(A.jsx)(w.a,{sx:{borderColor:j.palette.primary.main,mb:I.a}})]})))),$},E=r(6),H=r(35),q=r(23),N=r.n(q),_=r(724),G=r(20),J=r(21),K=r(161),U=r.n(K),X=(r(336),"kholand"),Y=function(){var e=localStorage.getItem(X),t=e&&JSON.parse(e).accessToken;return t||console.error("AccessToken not found."),t},$=Object(G.a)((function e(){Object(J.a)(this,e)}));$.jsonOrFail=function(e){if(!e.ok)throw new Error("HTTP status=".concat(e.status,"; data=").concat(e.data));return e.json().catch((function(e){throw new Error(e)}))},$.getRequest=function(){var e=Object(H.a)(N.a.mark((function e(t){var r,n,a,o=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(o.length>1&&void 0!==o[1])||o[1],(n=Y())||!r){e.next=4;break}return e.abrupt("return",new Promise((function(e,t){t("No auth-token found.")})));case 4:return a=r&&{Authorization:"Bearer ".concat(n)}||{},e.abrupt("return",fetch("".concat("https://young-stream-43548.herokuapp.com","/v1").concat(t),{headers:Object(p.a)({"Content-Type":"application/json"},a),method:"GET"}).then($.jsonOrFail));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$.postRequest=function(){var e=Object(H.a)(N.a.mark((function e(t,r){var n,a,o,i=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(i.length>2&&void 0!==i[2])||i[2],(a=Y())||!n){e.next=4;break}return e.abrupt("return",new Promise((function(e,t){t("No auth-token found.")})));case 4:return o=n&&{Authorization:"Bearer ".concat(a)}||{},e.abrupt("return",fetch("".concat("https://young-stream-43548.herokuapp.com","/v1").concat(t),{headers:Object(p.a)({"Content-Type":"application/json"},o),method:"POST",body:JSON.stringify(r)}).then($.jsonOrFail));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),$.getAbi=function(){var e=Object(H.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/abi/".concat(t),e.abrupt("return",$.getRequest(r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$.txnPlayerGameTicker=function(){return $.postRequest("/txn/player/game-ticket",{})},$.userCreateAccessToken=function(e,t){return $.postRequest("/auth/accesstoken",{signature:t,publicAddress:e},!1)},$.userGetNonce=function(e){var t="/auth/nonce/".concat(e);return $.getRequest(t,!1)},$.getWalletBalance=function(){return $.getRequest("/wallet")},$.getAbiFutureToken=function(){return $.getRequest("/abi/futuretoken")},$.getConsumableBalance=Object(H.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/txn/player/game-ticket",e.abrupt("return",$.getRequest("/txn/player/game-ticket"));case 2:case"end":return e.stop()}}),e)}))),$.consumeGameTicket=Object(H.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/txn/player/execute-gameplay",e.abrupt("return",$.postRequest("/txn/player/execute-gameplay",{x:"1",y:"1"}));case 2:case"end":return e.stop()}}),e)}))),$.getTransactions=Object(H.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/txn",e.abrupt("return",$.getRequest("/txn"));case 2:case"end":return e.stop()}}),e)})));var V=Object(G.a)((function e(){var t=this;Object(J.a)(this,e),this.web3=void 0,this.futureTokenABI=void 0,this.contractAddress=void 0,this.init=Object(H.a)(N.a.mark((function e(){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.web3){e.next=3;break}return console.log("Web3 from cache."),e.abrupt("return",t.web3);case 3:if(window.ethereum){e.next=6;break}return window.alert("Please install MetaMask first."),e.abrupt("return");case 6:if(t.web3){e.next=17;break}return e.prev=7,e.next=10,window.ethereum.enable();case 10:t.web3=new U.a(window.ethereum),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(7),t.window.alert("You need to allow MetaMask."),e.abrupt("return");case 17:return e.next=19,$.getAbiFutureToken();case 19:t.futureTokenABI=e.sent,r=t.futureTokenABI,t.contractAddress="0x1AB2ff183735d817A285a39b240926d32997fcD7",t.futureToken=new t.web3.eth.Contract(r.abi,t.contractAddress);case 23:case"end":return e.stop()}}),e,null,[[7,13]])}))),this.userAddress=Object(H.a)(N.a.mark((function e(){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getCoinbase();case 2:if(r=e.sent){e.next=6;break}return window.alert("Please activate MetaMask first."),e.abrupt("return");case 6:return e.abrupt("return",r.toLowerCase());case 7:case"end":return e.stop()}}),e)}))),this.loginSignature=function(){var e=Object(H.a)(N.a.mark((function e(r,n){var a,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getCoinbase();case 2:if(e.sent){e.next=6;break}return window.alert("Please activate MetaMask first."),e.abrupt("return");case 6:return a="I am signing my one-time nonce: ".concat(n),e.prev=7,e.next=10,t.web3.eth.personal.sign(a,r,"");case 10:return o=e.sent,e.abrupt("return",o);case 14:throw e.prev=14,e.t0=e.catch(7),console.log(e.t0),new Error("You need to sign the message to be able to log in.");case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,r){return e.apply(this,arguments)}}(),this.balanceOf=function(){var e=Object(H.a)(N.a.mark((function e(r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.futureToken.methods.balanceOf(r).call();case 2:return n=e.sent,e.abrupt("return",n.toString());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transfer=function(){var e=Object(H.a)(N.a.mark((function e(r,n,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.futureToken.methods.transfer(n,a).send({from:r});case 2:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),this.payGameFee=function(){var e=Object(H.a)(N.a.mark((function e(r){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.userAddress();case 2:return n=e.sent,e.next=5,t.futureToken.methods.gameAddress().call();case 5:return a=e.sent,e.next=8,t.futureToken.methods.transfer(a,r).send({from:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.payGameFeeNative=function(){var e=Object(H.a)(N.a.mark((function e(r,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.futureToken.methods.txnPlayerToGame(n).send({from:r});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),this.addTokenToWallet=Object(H.a)(N.a.mark((function e(){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.contractAddress,"KHO",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:r,symbol:"KHO",decimals:18}}});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))}));V.instance=void 0,V.getInstance=Object(H.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Web3Service.getInstance"),!V.instance){e.next=4;break}return console.log("Web3Service.getInstance from cache"),e.abrupt("return",V.instance);case 4:return V.instance=new V,e.next=7,V.instance.init();case 7:return e.abrupt("return",V.instance);case 8:case"end":return e.stop()}}),e)})));r(674),r(225),r(725),r(726),r(718),r(730),r(710),r(708),r(344),r(733),r(711),r(712),r(713);var Q=r(162),Z=r.n(Q),ee=(r(220),r(704)),te=r(732),re=r(705),ne=r(706),ae=r(707),oe=["children","position","type","direction"],ie=Object(u.forwardRef)((function(e,t){var r=e.children,n=e.position,a=e.type,o=e.direction,i=Object(v.a)(e,oe),c={transformOrigin:"0 0 0"};switch(n){case"top-right":c={transformOrigin:"top right"};break;case"top":c={transformOrigin:"top"};break;case"bottom-left":c={transformOrigin:"bottom left"};break;case"bottom-right":c={transformOrigin:"bottom right"};break;case"bottom":c={transformOrigin:"bottom"};break;default:c={transformOrigin:"0 0 0"}}return Object(A.jsxs)(m.a,{ref:t,children:["grow"===a&&Object(A.jsx)(ee.a,Object(p.a)(Object(p.a)({},i),{},{children:Object(A.jsx)(m.a,{sx:c,children:r})})),"collapse"===a&&Object(A.jsx)(te.a,Object(p.a)(Object(p.a)({},i),{},{sx:c,children:r})),"fade"===a&&Object(A.jsx)(re.a,Object(p.a)(Object(p.a)({},i),{},{timeout:{appear:500,enter:600,exit:400},children:Object(A.jsx)(m.a,{sx:c,children:r})})),"slide"===a&&Object(A.jsx)(ne.a,Object(p.a)(Object(p.a)({},i),{},{timeout:{appear:0,enter:400,exit:200},direction:o,children:Object(A.jsx)(m.a,{sx:c,children:r})})),"zoom"===a&&Object(A.jsx)(ae.a,Object(p.a)(Object(p.a)({},i),{},{children:Object(A.jsx)(m.a,{sx:c,children:r})}))]})}));ie.defaultProps={type:"grow",position:"top-left",direction:"up"};var ce=r(153),se=(Object(b.a)(y.a)((function(e){var t=e.theme;return{background:t.palette.secondary.dark,marginTop:"16px",marginBottom:"16px",overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:"200px",height:"200px",border:"19px solid ",borderColor:t.palette.warning.main,borderRadius:"50%",top:"65px",right:"-150px"},"&:before":{content:'""',position:"absolute",width:"200px",height:"200px",border:"3px solid ",borderColor:t.palette.warning.main,borderRadius:"50%",top:"145px",right:"-70px"}}})),r(338)),le=r.n(se),de=(r.p,function(e){e.handleLeftDrawerToggle,e.history;var t=Object(h.a)();return Object(A.jsx)(m.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%"},children:Object(A.jsx)(m.a,{sx:Object(E.a)({width:"100%",maxWidth:1024,justifyContent:"center",alignItems:"center",textAlign:"center"},t.breakpoints.down("sm"),{width:"100%"}),children:Object(A.jsxs)(m.a,{sx:{display:"flex"},children:[Object(A.jsx)(_.a,{sx:{mr:2},variant:"contained",href:"https://docs.kho.land/",target:"_blank",children:"Whitepaper"}),Object(A.jsxs)(_.a,{sx:{mr:2},variant:"contained",href:"https://t.me/buildingkholand",target:"_blank",children:[Object(A.jsx)(le.a,{sx:{mr:1.75}}),"Join Telegram"]}),Object(A.jsx)(_.a,{variant:"contained",component:o.b,to:"/development",children:"Architecture"})]})})})}),ue={id:"dashboard",title:"Dashboard",type:"group",children:[{id:"default",title:"Dashboard",type:"item",url:"/dashboard/default",icon:{IconDashboard:z.c}.IconDashboard,breadcrumbs:!1}]},pe={id:"pages",title:"Pages",caption:"Pages Caption",type:"group",children:[{id:"authentication",title:"Authentication",type:"collapse",icon:{IconKey:z.e}.IconKey,children:[{id:"login3",title:"Login",type:"item",url:"/pages/login/login3",target:!0},{id:"register3",title:"Register",type:"item",url:"/pages/register/register3",target:!0}]}]},be={IconTypography:z.k,IconPalette:z.g,IconShadow:z.i,IconWindmill:z.l},he={id:"utilities",title:"Utilities",type:"group",children:[{id:"util-typography",title:"Typography",type:"item",url:"/utils/util-typography",icon:be.IconTypography,breadcrumbs:!1},{id:"util-color",title:"Color",type:"item",url:"/utils/util-color",icon:be.IconPalette,breadcrumbs:!1},{id:"util-shadow",title:"Shadow",type:"item",url:"/utils/util-shadow",icon:be.IconShadow,breadcrumbs:!1},{id:"icons",title:"Icons",type:"collapse",icon:be.IconWindmill,children:[{id:"tabler-icons",title:"Tabler Icons",type:"item",url:"/icons/tabler-icons",breadcrumbs:!1},{id:"material-icons",title:"Material Icons",type:"item",url:"/icons/material-icons",breadcrumbs:!1}]}]},fe={IconBrandChrome:z.a,IconHelp:z.d},me={items:[ue,pe,he,{id:"sample-docs-roadmap",type:"group",children:[{id:"sample-page",title:"Sample Page",type:"item",url:"/sample-page",icon:fe.IconBrandChrome,breadcrumbs:!1},{id:"documentation",title:"Documentation",type:"item",url:"https://codedthemes.gitbook.io/berry/",icon:fe.IconHelp,external:!0,target:!0}]}]},je="@customization/SET_MENU",xe="@customization/MENU_OPEN",ge="@customization/SET_FONT_FAMILY",ve="@customization/SET_BORDER_RADIUS",Oe=Object(b.a)("main")((function(e){var t=e.theme;return Object(p.a)(Object(p.a)({},t.typography.mainContent),{},{padding:0,marginLeft:0,marginRight:0,borderBottomLeftRadius:0,borderBottomRightRadius:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})})})),ye=function(){var e=Object(h.a)(),t=Object(f.a)(e.breakpoints.down("lg")),r=Object(i.b)();return Object(u.useEffect)((function(){r({type:je,opened:!t})}),[t]),Object(A.jsxs)(m.a,{sx:{display:"flex",padding:0},children:[Object(A.jsx)(l.a,{}),Object(A.jsx)(j.a,{enableColorOnDark:!0,position:"fixed",color:"inherit",elevation:0,sx:{bgcolor:e.palette.background.default,transition:"none"},children:Object(A.jsx)(x.a,{children:Object(A.jsx)(de,{handleLeftDrawerToggle:function(){r({type:je,opened:!0})}})})}),Object(A.jsxs)(Oe,{theme:e,children:[Object(A.jsx)(F,{separator:z.b,navigation:me,icon:!0,title:!0,rightAlign:!0}),Object(A.jsx)(d.a,{})]})]})},ke=r(736),we=Object(b.a)("div")({position:"fixed",top:0,left:0,zIndex:1301,width:"100%"}),Se=function(){return Object(A.jsx)(we,{children:Object(A.jsx)(ke.a,{color:"primary"})})},Te=function(e){return function(t){return Object(A.jsx)(u.Suspense,{fallback:Object(A.jsx)(Se,{}),children:Object(A.jsx)(e,Object(p.a)({},t))})}},Ie=Te(Object(u.lazy)((function(){return Promise.all([r.e(2),r.e(3),r.e(18)]).then(r.bind(null,976))}))),ze=Te(Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(4),r.e(8),r.e(16)]).then(r.bind(null,983))}))),Me=Te(Object(u.lazy)((function(){return r.e(15).then(r.bind(null,977))}))),Re=Te(Object(u.lazy)((function(){return r.e(12).then(r.bind(null,978))}))),Ce=Te(Object(u.lazy)((function(){return r.e(14).then(r.bind(null,979))}))),Pe=Te(Object(u.lazy)((function(){return r.e(13).then(r.bind(null,980))}))),Le=Te(Object(u.lazy)((function(){return r.e(11).then(r.bind(null,981))}))),De=Te(Object(u.lazy)((function(){return r.e(19).then(r.bind(null,982))}))),Ae=Te(Object(u.lazy)((function(){return Promise.all([r.e(2),r.e(3),r.e(17)]).then(r.bind(null,998))}))),Be={path:"/",element:Object(A.jsx)(ye,{}),children:[{path:"/",element:Object(A.jsx)(Ie,{})},{path:"/development",element:Object(A.jsx)(Ae,{})},{path:"/sample-page",element:Object(A.jsx)(De,{})},{path:"/dashboard",element:Object(A.jsx)(ze,{})},{path:"/utils/util-typography",element:Object(A.jsx)(Me,{})},{path:"/utils/util-color",element:Object(A.jsx)(Re,{})},{path:"/utils/util-shadow",element:Object(A.jsx)(Ce,{})},{path:"/icons/tabler-icons",element:Object(A.jsx)(Le,{})},{path:"/icons/material-icons",element:Object(A.jsx)(Pe,{})}]},We=r(727),Fe=r(737),Ee=r(738),He=r(739),qe=r(740),Ne=r(728),_e=r(741),Ge=r(720),Je=r(721),Ke=r(175);function Ue(e){return"".concat(e,"px")}var Xe=function(){var e,t=Object(h.a)(),r=Object(i.b)(),n=Object(i.c)((function(e){return e.customization})),a=Object(u.useState)(!1),o=Object(g.a)(a,2),c=o[0],s=o[1],l=function(){s(!c)},d=Object(u.useState)(n.borderRadius),p=Object(g.a)(d,2),b=p[0],f=p[1];switch(Object(u.useEffect)((function(){r({type:ve,borderRadius:b})}),[r,b]),n.fontFamily){case"'Inter', sans-serif":e="Inter";break;case"'Poppins', sans-serif":e="Poppins";break;default:e="Roboto"}var m=Object(u.useState)(e),j=Object(g.a)(m,2),x=j[0],v=j[1];return Object(u.useEffect)((function(){var e;switch(x){case"Inter":e="'Inter', sans-serif";break;case"Poppins":e="'Poppins', sans-serif";break;default:e="'Roboto', sans-serif"}r({type:ge,fontFamily:e})}),[r,x]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(We.a,{title:"Live Customize",children:Object(A.jsx)(Fe.a,{component:"div",onClick:l,size:"medium",variant:"circular",color:"secondary",sx:{borderRadius:0,borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"4px",top:"25%",position:"fixed",right:10,zIndex:t.zIndex.speedDial},children:Object(A.jsx)(ce.a,{type:"rotate",children:Object(A.jsx)(Ee.a,{color:"inherit",size:"large",disableRipple:!0,children:Object(A.jsx)(z.h,{})})})})}),Object(A.jsx)(He.a,{anchor:"right",onClose:l,open:c,PaperProps:{sx:{width:280}},children:Object(A.jsx)(Z.a,{component:"div",children:Object(A.jsxs)(k.a,{container:!0,spacing:I.a,sx:{p:3},children:[Object(A.jsx)(k.a,{item:!0,xs:12,children:Object(A.jsx)(Ke.a,{title:"Font Family",children:Object(A.jsx)(qe.a,{children:Object(A.jsxs)(Ne.a,{"aria-label":"font-family",value:x,onChange:function(e){return v(e.target.value)},name:"row-radio-buttons-group",children:[Object(A.jsx)(_e.a,{value:"Roboto",control:Object(A.jsx)(Ge.a,{}),label:"Roboto",sx:{"& .MuiSvgIcon-root":{fontSize:28},"& .MuiFormControlLabel-label":{color:t.palette.grey[900]}}}),Object(A.jsx)(_e.a,{value:"Poppins",control:Object(A.jsx)(Ge.a,{}),label:"Poppins",sx:{"& .MuiSvgIcon-root":{fontSize:28},"& .MuiFormControlLabel-label":{color:t.palette.grey[900]}}}),Object(A.jsx)(_e.a,{value:"Inter",control:Object(A.jsx)(Ge.a,{}),label:"Inter",sx:{"& .MuiSvgIcon-root":{fontSize:28},"& .MuiFormControlLabel-label":{color:t.palette.grey[900]}}})]})})})}),Object(A.jsx)(k.a,{item:!0,xs:12,children:Object(A.jsx)(Ke.a,{title:"Border Radius",children:Object(A.jsxs)(k.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[Object(A.jsx)(k.a,{item:!0,children:Object(A.jsx)(O.a,{variant:"h6",color:"secondary",children:"4px"})}),Object(A.jsx)(k.a,{item:!0,xs:!0,children:Object(A.jsx)(Je.a,{size:"small",value:b,onChange:function(e,t){f(t)},getAriaValueText:Ue,valueLabelDisplay:"on","aria-labelledby":"discrete-slider-small-steps",marks:!0,step:2,min:4,max:24,color:"secondary",sx:{"& .MuiSlider-valueLabel":{color:"secondary.light"}}})}),Object(A.jsx)(k.a,{item:!0,children:Object(A.jsx)(O.a,{variant:"h6",color:"secondary",children:"24px"})})]})})})]})})})]})},Ye=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(d.a,{}),Object(A.jsx)(Xe,{})]})},$e=Te(Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(9)]).then(r.bind(null,999))}))),Ve=Te(Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(4),r.e(10)]).then(r.bind(null,991))}))),Qe={path:"/",element:Object(A.jsx)(Ye,{}),children:[{path:"/pages/login/login3",element:Object(A.jsx)($e,{})},{path:"/pages/register/register3",element:Object(A.jsx)(Ve,{})}]};function Ze(){return Object(d.g)([Be,Qe],T.basename)}var et=r(339),tt=r(328),rt=r.n(tt);function nt(e){var t,r,n,a,o,i,c,s,l,d,u,p,b,h,f,m,j,x,g,v,O,y,k,w,S,T,I,z,M,R,C,P;return{mode:"dark",common:{black:null===(t=e.colors)||void 0===t?void 0:t.darkPaper},primary:{light:null===(r=e.colors)||void 0===r?void 0:r.darkPrimaryLight,main:null===(n=e.colors)||void 0===n?void 0:n.darkPrimaryMain,dark:null===(a=e.colors)||void 0===a?void 0:a.darkPrimaryDark,200:null===(o=e.colors)||void 0===o?void 0:o.darkPrimary200,800:null===(i=e.colors)||void 0===i?void 0:i.darkPrimary800},secondary:{light:null===(c=e.colors)||void 0===c?void 0:c.darkSecondaryLight,main:null===(s=e.colors)||void 0===s?void 0:s.darkSecondaryMain,dark:null===(l=e.colors)||void 0===l?void 0:l.darkSecondaryDark,200:null===(d=e.colors)||void 0===d?void 0:d.darkSecondary200,800:null===(u=e.colors)||void 0===u?void 0:u.darkSecondary800},error:{light:null===(p=e.colors)||void 0===p?void 0:p.errorLight,main:null===(b=e.colors)||void 0===b?void 0:b.errorMain,dark:null===(h=e.colors)||void 0===h?void 0:h.errorDark},orange:{light:null===(f=e.colors)||void 0===f?void 0:f.orangeLight,main:null===(m=e.colors)||void 0===m?void 0:m.orangeMain,dark:null===(j=e.colors)||void 0===j?void 0:j.orangeDark},warning:{light:null===(x=e.colors)||void 0===x?void 0:x.warningLight,main:null===(g=e.colors)||void 0===g?void 0:g.warningMain,dark:null===(v=e.colors)||void 0===v?void 0:v.warningDark},success:{light:null===(O=e.colors)||void 0===O?void 0:O.successLight,200:null===(y=e.colors)||void 0===y?void 0:y.success200,main:null===(k=e.colors)||void 0===k?void 0:k.successMain,dark:null===(w=e.colors)||void 0===w?void 0:w.successDark},grey:{50:null===(S=e.colors)||void 0===S?void 0:S.grey50,100:null===(T=e.colors)||void 0===T?void 0:T.grey100,500:e.darkTextSecondary,600:e.heading,700:e.darkTextPrimary,900:e.textDark},dark:{light:null===(I=e.colors)||void 0===I?void 0:I.darkTextPrimary,main:null===(z=e.colors)||void 0===z?void 0:z.darkLevel1,dark:null===(M=e.colors)||void 0===M?void 0:M.darkLevel2,800:null===(R=e.colors)||void 0===R?void 0:R.darkBackground,900:null===(C=e.colors)||void 0===C?void 0:C.darkPaper},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary,dark:e.textDark,hint:null===(P=e.colors)||void 0===P?void 0:P.grey100},background:{paper:e.paper,default:e.backgroundDefault}}}function at(e){var t,r;return{fontFamily:null===e||void 0===e||null===(t=e.customization)||void 0===t?void 0:t.fontFamily,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500},h4:{fontSize:"1rem",color:e.heading,fontWeight:600},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{letterSpacing:"0em",fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:1,marginBottom:1,"& > label":{top:23,left:0,color:e.grey500,'&[data-shrink="false"]':{top:5}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:e.background,width:"100%",minHeight:"calc(100vh - 88px)",flexGrow:1,padding:"20px",marginTop:"88px",marginRight:"20px",borderRadius:"".concat(null===e||void 0===e||null===(r=e.customization)||void 0===r?void 0:r.borderRadius,"px")},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}}var ot=function(e){var t=rt.a,r={colors:t,heading:t.grey300,paper:t.darkPaper,backgroundDefault:t.color1,background:t.darkBackground,darkTextPrimary:t.darkTextPrimary,darkTextSecondary:t.darkTextSecondary,textDark:t.grey200,menuSelected:t.darkSecondaryDark,menuSelectedBack:t.darkSecondaryLight,divider:t.grey200,customization:e},n={direction:"ltr",palette:nt(r),mixins:{toolbar:{minHeight:"48px",padding:"16px","@media (min-width: 600px)":{minHeight:"48px"}}},typography:at(r)},a=Object(et.a)(n);return a.components=function(e){var t,r,n,a,o,i,c,s,l,d,u,p,b,h=null===(t=e.colors)||void 0===t?void 0:t.grey50;return{MuiButton:{variants:[{props:{variant:"landing"},style:{border:"2px solid white",color:"white",borderRadius:"10px",marginTop:20,fontWeight:500,fontSize:"1.2rem",padding:"10px 20px","&:hover":{backgroundColor:e.colors.darkPrimaryMain}}}],styleOverrides:{root:{fontWeight:500,borderRadius:"4px"}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:"".concat(null===e||void 0===e||null===(r=e.customization)||void 0===r?void 0:r.borderRadius,"px")}}},MuiCardHeader:{styleOverrides:{root:{color:null===(n=e.colors)||void 0===n?void 0:n.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary,fontSize:"0.875rem"}}}},MuiOutlinedInput:{styleOverrides:{root:{background:h,borderRadius:"".concat(null===e||void 0===e||null===(a=e.customization)||void 0===a?void 0:a.borderRadius,"px"),"& .MuiOutlinedInput-notchedOutline":{borderColor:null===(o=e.colors)||void 0===o?void 0:o.grey400},"&:hover $notchedOutline":{borderColor:null===(i=e.colors)||void 0===i?void 0:i.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:h,padding:"15.5px 14px",borderRadius:"".concat(null===e||void 0===e||null===(c=e.customization)||void 0===c?void 0:c.borderRadius,"px"),"&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:"".concat(null===e||void 0===e||null===(s=e.customization)||void 0===s?void 0:s.borderRadius,"px")}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:null===(l=e.colors)||void 0===l?void 0:l.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:null===e||void 0===e||null===(d=e.colors)||void 0===d?void 0:d.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:null===(u=e.colors)||void 0===u?void 0:u.primaryDark,background:null===(p=e.colors)||void 0===p?void 0:p.primary200}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:null===(b=e.colors)||void 0===b?void 0:b.grey700}}}}}(r),a},it=r(9),ct=function(e){var t=e.children,r=Object(d.d)().pathname;return Object(u.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),t||null};ct.propTypes={children:r.n(it).a.node};var st=ct,lt=function(){var e=Object(i.c)((function(e){return e.customization}));return Object(A.jsx)(s.a,{injectFirst:!0,children:Object(A.jsxs)(c.a,{theme:ot(e),children:[Object(A.jsx)(l.a,{}),Object(A.jsx)(st,{children:Object(A.jsx)(Ze,{})})]})})},dt=r(164),ut={isOpen:[],fontFamily:T.fontFamily,borderRadius:T.borderRadius,opened:!0},pt=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case xe:return e=r.id,Object(p.a)(Object(p.a)({},t),{},{isOpen:[e]});case je:return Object(p.a)(Object(p.a)({},t),{},{opened:r.opened});case ge:return Object(p.a)(Object(p.a)({},t),{},{fontFamily:r.fontFamily});case ve:return Object(p.a)(Object(p.a)({},t),{},{borderRadius:r.borderRadius});default:return t}},bt=Object(dt.a)({customization:pt}),ht=Object(dt.b)(bt);r(660);a.a.render(Object(A.jsx)(i.a,{store:ht,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(lt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[661,6,7]]]);
//# sourceMappingURL=main.bcfc28a2.chunk.js.map