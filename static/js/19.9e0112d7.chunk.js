(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[19],{1001:function(e,t,n){"use strict";n.r(t);var a,i,c,r,o=n(6),s=n(731),d=n(723),l=n(90),j=n(34),m=n(55),b=n(751),x=n(0),h=n(743),g=(n(837),n(977)),p=n(838),u=(n(799),n(839),n(840),n(841)),O=n(842),f=n(1),v=function(e,t){var n=new h.Mb({antialias:!0,alpha:!0});n.setSize(e,t);var a=new h.hb(32,e/t,1,500);a.position.set(10,0,50);var i,c,r=new h.j,o=new h.qb,s=function(){var e=new h.v(10.5,1);e.material.color.setHex(14003565),e.position.y=-10,o.add(e);var t=new h.W,n=new h.f(9,2,9),a=new h.T(n,t);a.position.y=-9,a.castShadow=!0,o.add(a)},d=function(){(new u.a).load("".concat("","/fonts/helvetiker_bold.typeface.json"),(function(e){var t=[new h.X({color:0,flatShading:!0}),new h.X({color:0})],n=new O.a("Play with me!",{font:e,size:90,height:5,curveSegments:10,bevelEnabled:!1});n.computeBoundingBox();var a=new h.T(n,t);a.scale.x=.01,a.scale.y=.01,a.scale.z=.01,a.position.z=4.5,a.position.x=-3.8,a.position.y=-9.5,o.add(a);var i=new O.a("Together in",{font:e,size:100,height:5,curveSegments:10,bevelEnabled:!1});i.computeBoundingBox();var c=new h.T(i,t);c.scale.x=.01,c.scale.y=.01,c.scale.z=.01,c.position.z=3.6,c.position.x=4.5,c.position.y=-9.5,c.rotation.y=Math.PI/2,o.add(c);var r=new O.a("KhoLand",{font:e,size:100,height:5,curveSegments:10,bevelEnabled:!1});r.computeBoundingBox();var s=new h.T(r,t);s.scale.x=.01,s.scale.y=.01,s.scale.z=.01,s.position.z=-4.5,s.position.x=3,s.position.y=-9.5,s.rotation.y=-Math.PI,o.add(s);var d=new O.a("Game-Meta",{font:e,size:100,height:5,curveSegments:10,bevelEnabled:!1});d.computeBoundingBox();var l=new h.T(d,t);l.scale.x=.01,l.scale.y=.01,l.scale.z=.01,l.position.z=-3.8,l.position.x=-4.5,l.position.y=-9.5,l.rotation.y=-Math.PI/2,o.add(l)}))},l=function(){var e=new g.a;e.load("".concat("","/models/boy.fbx"),(function(t){o.add(t),t.position.y=-8.5,t.scale.x=10,t.scale.y=10,t.scale.z=10;var n=t.position.clone();n.x+=50,a.lookAt(n),i=new h.c(t),e.load("".concat("","/models/hip-hop-dance.fbx"),(function(e){i.clipAction(e.animations[0]).play()}))}),void 0,(function(e){console.error(e)}))},j=function(){var e=new h.a(16513781);o.add(e)},m=function(){(c=new p.a(a,n.domElement)).enableDamping=!0,c.dampingFactor=.05,c.screenSpacePanning=!1,c.minDistance=20,c.maxDistance=45,c.minPolarAngle=Math.PI/4,c.maxPolarAngle=Math.PI/2,c.autoRotate=!0,c.enableZoom=!1,c.autoRotateSpeed=-1};return{init:function(){s(),d(),l(),j(),m()},getRenderer:function(){return n},animate:function(){i&&i.update(r.getDelta()),c&&c.update(),n.render(o,a)}}},y=function(){var e=Object(x.useRef)();return Object(x.useEffect)((function(){if(e.current){var t,n=e.current.offsetWidth,a=v(n,500);a.init(),e.current.appendChild(a.getRenderer().domElement);return function e(){t=requestAnimationFrame(e),a.animate()}(),function(){e.current&&(e.current.innerHTML=""),cancelAnimationFrame(t)}}}),[]),Object(f.jsx)(w,{ref:e})},w=b.a.div(a||(a=Object(m.a)(["\n\tcolor: #000;\n\t:hover {\n\t\tcolor: #ed1212;\n\t\tcursor: grab;\n\t}\n"]))),k=n(7),B=Object(k.a)(s.a)((function(e){var t,n=e.theme;return t={display:"flex",width:1024,padding:40},Object(o.a)(t,n.breakpoints.down("md"),{width:"100%"}),Object(o.a)(t,n.breakpoints.down("sm"),{width:"100%"}),t})),A=Object(k.a)(s.a)((function(e){var t=e.theme;return Object(o.a)({width:"100%"},t.breakpoints.down("md"),{justifyContent:"center",alignItems:"center",textAlign:"center"})})),z=function(e){var t=e.content,n=e.align,a=e.image,i=e.background,c="left"===n?function(e){var t=e.content,n=e.image;return Object(f.jsxs)(d.a,{container:!0,spacing:0,columns:16,children:[Object(f.jsx)(d.a,{item:!0,lg:8,md:8,sm:16,xs:16,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",height:260,marginBottom:5},children:Object(f.jsx)(s.a,{sx:{width:"100%",height:"100%",background:"url("+n+") center center no-repeat",backgroundSize:"contain"}})}),Object(f.jsx)(d.a,{item:!0,lg:8,md:8,sm:16,xs:16,children:t})]})}({content:t,image:a}):function(e){var t=e.content,n=e.image,a=Object(j.a)();return Object(f.jsxs)(d.a,{container:!0,spacing:0,columns:16,children:[Object(f.jsx)(d.a,{item:!0,lg:8,md:8,sm:16,xs:16,sx:Object(o.a)({display:"none",justifyContent:"center",alignItems:"center",textAlign:"center",height:260,marginBottom:5},a.breakpoints.down("md"),{display:"flex"}),children:Object(f.jsx)(s.a,{sx:{width:"100%",height:"100%",background:"url("+n+") center center no-repeat",backgroundSize:"contain"}})}),Object(f.jsx)(d.a,{item:!0,lg:8,md:8,sm:16,xs:16,children:t}),Object(f.jsx)(d.a,{item:!0,lg:8,md:8,sm:16,xs:16,sx:Object(o.a)({display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",height:260,marginBottom:5},a.breakpoints.down("md"),{display:"none"}),children:Object(f.jsx)(s.a,{sx:{width:"100%",height:"100%",background:"url("+n+") center center no-repeat",backgroundSize:"contain"}})})]})}({content:t,image:a});return Object(f.jsx)(s.a,{sx:{display:"flex",width:"100%",minHeight:"600px",justifyContent:"center",alignItems:"center",background:i},children:Object(f.jsx)(B,{children:Object(f.jsx)(A,{children:c})})})},C=n(724),S=(Object(k.a)(C.a)({height:50,borderRadius:6,paddingLeft:40,paddingRight:40,marginTop:20}),Object(k.a)(l.a)((function(e){e.theme;return{fontSize:"3.5rem",marginBottom:40,lineHeight:1.2}}))),T=Object(k.a)(l.a)((function(e){e.theme;return{fontSize:"1.5rem",lineHeight:1.5}})),I=b.a.span(i||(i=Object(m.a)(["\n    font-weight: 600;\n    font-size: 4rem;\n    line-height: 1.2;\n    color: #D5AD6D; /*if no support for background-clip*/\n    background: -webkit-linear-gradient(transparent, transparent),\n    -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);\n    background: -o-linear-gradient(transparent, transparent);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;"]))),R=Object(k.a)(l.a)((function(e){e.theme;return{fontSize:"2rem",lineHeight:1.2,marginBottom:12}})),E=Object(k.a)(l.a)((function(e){e.theme;return{fontSize:"1.2rem",lineHeight:1.3}})),P=b.a.img(c||(c=Object(m.a)(["\n    width:100%"]))),H=b.a.img(r||(r=Object(m.a)(["\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    width:100%"]))),M=n.p+"static/media/v.8b56eecd.png",L=function(){var e=Object(f.jsxs)(s.a,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"Vision"})}),Object(f.jsx)(R,{variant:"h1",component:"h1",children:"Create, socialize and have fun together."}),Object(f.jsxs)(E,{variant:"subtitle",component:"div",children:[Object(f.jsx)("strong",{children:"KhoLand's"})," vision is to empower everyone to create, socialize and have fun together with a sense of security and equity. It's a world for everyone to augment their artistic creativity and own their art forever."]})]});return Object(f.jsx)(z,{align:"right",image:M,background:"linear-gradient(to bottom, #1f004c, #1f004c, #1a1a2e)",content:e})},D=n(45),K=n.p+"static/media/race-track.58ecb720.png",W=function(){var e=Object(f.jsxs)(s.a,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{variant:"h1",component:"h1",children:"Build To Earn"})}),Object(f.jsx)(R,{variant:"h2",component:"div",children:"Everything is tradeable"}),Object(f.jsx)(E,{variant:"subtitle",component:"div",children:"Create scenes, artworks, games and more, using the simple Builder tool. Rent or sell your creation on your own terms. Buy land to develop games over it and sell it on higher price."}),Object(f.jsx)(C.a,{variant:"landing",component:D.b,to:"/pacman",children:"Start Building"})]});return Object(f.jsx)(z,{image:K,align:"left",background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",content:e})},F=n.p+"static/media/pacman-remix.7672d527.png",q=function(){var e=Object(f.jsxs)(s.a,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"Develop"})}),Object(f.jsx)(R,{variant:"h1",component:"h1",children:"Everyone is developer"}),Object(f.jsxs)(E,{variant:"subtitle",component:"div",children:[Object(f.jsx)("strong",{children:"KhoLand's"})," building blocks provide a wide scope of creativity. It can be built by game developers, NFT artists, software-engineer, and gamers by a low/no-code engine."]}),Object(f.jsx)(C.a,{variant:"landing",component:D.b,to:"/pacman",children:"Read Roadmap"})]});return Object(f.jsx)(z,{align:"left",image:F,background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",content:e})},G=n.p+"static/media/buggy.0a16c792.png",V=function(){var e=Object(f.jsxs)(s.a,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"Invest and trade"})}),Object(f.jsx)(R,{variant:"h1",component:"div",gutterBottom:!0,children:"Open and transparent NFT marketplace."}),Object(f.jsx)(E,{variant:"subtitle",component:"div",gutterBottom:!0,children:"Buy and sell Game, land, game-lobby, avatar in Marketplace. Speed-up your development by using already pre-built elements."}),Object(f.jsx)(C.a,{variant:"landing",component:D.b,to:"/pacman",children:"Start Borwsing"})]});return Object(f.jsx)(z,{image:G,align:"right",background:"linear-gradient(to bottom, #1a1a2e, #1f004c, #1a1a2e)",content:e})},J=n(1012),N=n(1013),U=n(1014),X=n(846),Q=n.n(X),Z=Object(k.a)(s.a)((function(e){var t=e.theme;return Object(o.a)({width:"100%",maxWidth:1024,justifyContent:"center",alignItems:"center",textAlign:"center",padding:40},t.breakpoints.down("md"),{width:"100%",padding:0})})),_=function(e){var t=e.content;return Object(f.jsxs)(J.a,{sx:{background:"#1f004c",marginLeft:2,marginRight:2},children:[Object(f.jsx)(N.a,{expandIcon:Object(f.jsx)(Q.a,{}),"aria-controls":"panel1a-content",children:Object(f.jsx)(E,{variant:"h2",component:"div",children:t.title})}),Object(f.jsx)(U.a,{children:Object(f.jsx)(E,{variant:"subtitle",component:"div",textAlign:"start",children:t.paragraph})})]})},Y={title:"What is Kho land?",paragraph:"Kho land is the earth\u2019s metaverse mapped to the real world and accessible via web, iOS and Android. In addition, there is a \u201creal economy\u201d that is sustained by the players via the market forces of supply and demand. Kho land is built on the basis of three key pillars: Play, Earn, & Connect. To learn more about the metaverse, read our whitepaper as well as our frequently updated development roadmap which details all the exciting features coming this year."},$=function(){return Object(f.jsx)(s.a,{sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(f.jsxs)(Z,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"FAQ"})}),Object(f.jsx)(_,{content:Y}),Object(f.jsx)(_,{content:Y}),Object(f.jsx)(_,{content:Y}),Object(f.jsx)(_,{content:Y}),Object(f.jsx)(_,{content:Y}),Object(f.jsx)(_,{content:Y})]})})},ee=(n(220),n(775),n.p+"static/media/jacky-1.bb3a7033.png"),te=n.p+"static/media/parth-1.a0a962ec.png",ne=n.p+"static/media/shubham-1.3ae80545.png",ae=n.p+"static/media/arink-1.0be22bce.png",ie=n.p+"static/media/amit-1.0650534e.png",ce=n.p+"static/media/aditya-1.d8d757ae.png",re=n.p+"static/media/aryan-1.adaf08c8.png",oe=function(e){var t=e.name,n=e.about,a=e.image;return Object(f.jsx)(d.a,{item:!0,lg:4,md:4,sm:6,xs:6,children:Object(f.jsxs)(d.a,{container:!0,padding:4,children:[Object(f.jsx)(d.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},children:Object(f.jsx)(P,{src:a,alt:"Avatar"})}),Object(f.jsx)(d.a,{item:!0,xs:12,marginTop:1,children:Object(f.jsx)(l.a,{variant:"h2",component:"div",textAlign:"center",children:t})}),Object(f.jsx)(d.a,{item:!0,xs:12,marginTop:1,children:Object(f.jsx)(l.a,{variant:"subtitle",component:"div",textAlign:"center",children:n})})]})})},se=function(){return Object(f.jsx)(s.a,{padding:2,sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(f.jsx)(Z,{children:Object(f.jsxs)(d.a,{container:!0,children:[Object(f.jsx)(d.a,{item:!0,xs:12,children:Object(f.jsx)(s.a,{sx:{marginBottom:0},children:Object(f.jsx)(I,{children:"Team"})})}),Object(f.jsx)(d.a,{item:!0,xs:12,marginTop:0,children:Object(f.jsxs)(d.a,{container:!0,spacing:0,children:[Object(f.jsx)(oe,{name:"Axxxk",image:ae,about:"10 years of experience as founder in gaming, ads and tech startups. Currently working with Google."}),Object(f.jsx)(oe,{name:"Jxxxy",image:ee,about:"More than 10 years of experience as founder of digital ads company."}),Object(f.jsx)(oe,{name:"Sxxxm",image:ne,about:"Have founded social e-commerce platform. Expert in architecturing smart-contracts."}),Object(f.jsx)(oe,{name:"Axxxa",image:ce,about:"Have raised multiple business across various stages. Take care of product execution and mangement."}),Object(f.jsx)(oe,{name:"Axxx",image:ie,about:"Sr software developer with 5+ years of experience in mobile app and backend development."}),Object(f.jsx)(oe,{name:"Axxx",image:re,about:"Sr software developer with 5+ years of experience in mobile app and backend development."}),Object(f.jsx)(oe,{name:"Pxxxh",image:te,about:"Currently working with Polygon in VP-Growth office. Expert in tokenomics and W3 policies."})]})})]})})})},de=function(){var e=Object(j.a)();return Object(f.jsx)(s.a,{sx:{display:"flex",width:"100%",height:"500px",overflow:"hidden",justifyContent:"center",alignItems:"center"},children:Object(f.jsxs)(Z,{sx:Object(o.a)({textAlign:"left"},e.breakpoints.down("md"),{textAlign:"center",padding:"10px"}),children:[Object(f.jsxs)(S,{variant:"h1",component:"div",children:["Welcome to",Object(f.jsx)("br",{}),Object(f.jsx)(I,{children:"KhoLand"})]}),Object(f.jsx)(T,{variant:"h3",component:"div",children:"Open world to play and build social casual games."}),Object(f.jsx)(s.a,{paddingTop:2,children:Object(f.jsx)(C.a,{variant:"landing",component:D.b,to:"/pacman",children:"Read Whitepaper"})})]})})},le=n.p+"static/media/coin.d40dfb30.png",je=function(){var e=Object(f.jsxs)(s.a,{children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"Play To Earn"})}),Object(f.jsx)(R,{variant:"h1",component:"h1",children:"Rewarding good culture"}),Object(f.jsx)(E,{variant:"subtitle",component:"div",children:"The effective and fastest way will be to play games and socialize with meta players. The reward system is highly architecture to promote social collaboration and engagement."}),Object(f.jsx)(C.a,{variant:"landing",component:D.b,to:"/pacman",children:"Explore more"})]});return Object(f.jsx)(z,{align:"right",background:"linear-gradient(to bottom, #1a1a2e, #1f004c, #1a1a2e)",content:e,image:le})},me=n.p+"static/media/skribbl.6639fa08.png",be=n.p+"static/media/ludo.9c4d4ded.png",xe=n.p+"static/media/chess.d459936c.png",he=n.p+"static/media/chat.8ef46395.png",ge=Object(k.a)(s.a)((function(e){var t=e.theme;return{padding:8,width:"100%",justifyContent:"center",borderBottomRightRadius:"16px",borderBottomLeftRadius:"16px",backgroundColor:t.palette.primary.dark,color:t.palette.primary.light}})),pe=function(e){var t=e.title,n=e.image;return Object(f.jsx)(d.a,{item:!0,lg:3,md:3,sm:6,xs:12,children:Object(f.jsxs)(d.a,{container:!0,padding:4,children:[Object(f.jsx)(d.a,{item:!0,xs:12,sx:{direction:"column",display:"flex",justifyContent:"center"},children:Object(f.jsxs)(d.a,{container:!0,sx:{maxWidth:250,maxHeight:300},children:[Object(f.jsx)(H,{src:n,alt:"Avatar"}),Object(f.jsx)(ge,{children:Object(f.jsx)(l.a,{variant:"h2",component:"div",textAlign:"center",children:t})})]})}),Object(f.jsx)(d.a,{item:!0,xs:12,marginTop:1,children:Object(f.jsx)(C.a,{variant:"landing",children:"UpVote"})})]})})},ue=function(){return Object(f.jsx)(s.a,{sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(f.jsx)(Z,{children:Object(f.jsxs)(d.a,{container:!0,children:[Object(f.jsxs)(d.a,{item:!0,xs:12,children:[Object(f.jsx)(s.a,{sx:{marginBottom:5},children:Object(f.jsx)(I,{children:"Upcoming Games"})}),Object(f.jsx)(R,{variant:"h2",component:"div",children:"Vote for next upcoming games"})]}),Object(f.jsx)(d.a,{item:!0,xs:12,marginTop:0,children:Object(f.jsxs)(d.a,{container:!0,spacing:0,children:[Object(f.jsx)(pe,{title:"Skribbl",image:me}),Object(f.jsx)(pe,{title:"Ludo",image:be}),Object(f.jsx)(pe,{title:"Chess",image:xe}),Object(f.jsx)(pe,{title:"Chat in meta",image:he})]})})]})})})},Oe=function(){var e=Object(j.a)();return Object(f.jsx)(s.a,{sx:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",background:"linear-gradient(to top, #1f004c, #1f004c, #1a1a2e)"},children:Object(f.jsx)(s.a,{sx:Object(o.a)({display:"flex",width:1024},e.breakpoints.down("md"),{width:"100%"}),children:Object(f.jsxs)(d.a,{container:!0,spacing:0,columns:12,children:[Object(f.jsx)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(f.jsx)(de,{})}),Object(f.jsx)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(f.jsx)(y,{})})]})})})},fe=function(){return Object(f.jsxs)(d.a,{container:!0,justifyContent:"center",alignItems:"end",spacing:0,columns:12,sx:{height:"300px",background:"linear-gradient(to top, #000000, #000000, #1a1a2e)"},children:[Object(f.jsx)(d.a,{item:!0,lg:1,md:1,sm:1,xs:1}),Object(f.jsx)(d.a,{item:!0,lg:10,md:10,sm:10,xs:10,children:Object(f.jsxs)(l.a,{variant:"body1",gutterBottom:!0,sx:{paddingBottom:5},children:["KhoLand project is still under active development. Users are advice to contact company official email/chat for communication.",Object(f.jsx)("br",{}),'"Myself As A Meta-Human" (https://skfb.ly/oqXyz) by HackNetAyush is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).']})}),Object(f.jsx)(d.a,{item:!0,lg:1,md:1,sm:1,xs:1})]})};t.default=function(){return Object(f.jsxs)(s.a,{sx:{display:"grid"},children:[Object(f.jsx)(Oe,{}),Object(f.jsx)(L,{}),Object(f.jsx)(q,{}),Object(f.jsx)(je,{}),Object(f.jsx)(W,{}),Object(f.jsx)(V,{}),Object(f.jsx)(ue,{}),Object(f.jsx)(se,{}),Object(f.jsx)($,{}),Object(f.jsx)(fe,{})]})}},775:function(e,t,n){"use strict";t.a=n.p+"static/media/earning.b019e86a.svg"}}]);
//# sourceMappingURL=19.9e0112d7.chunk.js.map