(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[19],{1001:function(e,t,n){"use strict";n.r(t);var a,i,r,c=n(731),o=n(723),s=n(55),d=n(751),l=n(0),j=n(743),b=(n(837),n(977)),x=n(838),m=(n(799),n(839),n(840),n(841)),h=n(842),p=n(1),g=function(){var e=Object(l.useRef)(),t=new j.Lb({antialias:!0}),n=new j.pb;return Object(l.useEffect)((function(){var a,i=new b.a,r="".concat("","/models/boy.fbx");n.background=new j.j(2031692),n.fog=new j.t(2031692,.002);var c,o=new j.v(10,1);o.material.color.setHex(14003565),o.position.y=-8,n.add(o);var s=new j.gb(30,1,1,500);s.position.set(10,0,50),(new m.a).load("".concat("","/fonts/helvetiker_bold.typeface.json"),(function(e){c=e;var t=[new j.W({color:14003565,flatShading:!0}),new j.W({color:14003565})],a=new h.a("Play with me!",{font:c,size:100,height:5,curveSegments:10,bevelEnabled:!1});a.computeBoundingBox();var i=new j.T(a,t);i.scale.x=.01,i.scale.y=.01,i.scale.z=.01,i.position.z=5,i.position.x=-4.5,i.position.y=-9.5,n.add(i);var r=new h.a("Together in",{font:c,size:100,height:5,curveSegments:10,bevelEnabled:!1});r.computeBoundingBox();var o=new j.T(r,t);o.scale.x=.01,o.scale.y=.01,o.scale.z=.01,o.position.z=4,o.position.x=5,o.position.y=-9.5,o.rotation.y=Math.PI/2,n.add(o);var s=new h.a("KhoLand",{font:c,size:100,height:5,curveSegments:10,bevelEnabled:!1});s.computeBoundingBox();var d=new j.T(s,t);d.scale.x=.01,d.scale.y=.01,d.scale.z=.01,d.position.z=-5,d.position.x=3,d.position.y=-9.5,d.rotation.y=-Math.PI,n.add(d)})),i.load(r,(function(e){n.add(e),e.position.y=-8,e.scale.x=10,e.scale.y=10,e.scale.z=10;var t=e.position.clone();t.x+=50,s.lookAt(t),a=new j.c(e),i.load("".concat("","/models/hip-hop-dance.fbx"),(function(e){console.log("loaded samba",e),a.clipAction(e.animations[0]).play()}))}),void 0,(function(e){console.error(e)})),t.setSize(500,500),e.current.appendChild(t.domElement);var d=new x.a(s,t.domElement);d.listenToKeyEvents(window),d.enableDamping=!0,d.dampingFactor=.05,d.screenSpacePanning=!1,d.minDistance=20,d.maxDistance=45,d.minPolarAngle=Math.PI/4,d.maxPolarAngle=Math.PI/2,d.autoRotate=!0,d.enableZoom=!1,d.autoRotateSpeed=-1;var l=new j.l(16777215),p=new j.l(16777215),g=new j.l(16777215),u=new j.l(16777215),O=new j.l(16777215),f=new j.a(16579836);l.position.set(0,1,0),p.position.set(1,1,0),g.position.set(0,1,1),u.position.set(-1,1,0),O.position.set(0,1,-1),n.add(l),n.add(f);var v=new j.i;return function e(){requestAnimationFrame(e),a&&a.update(v.getDelta()),d.update(),t.render(n,s)}(),function(){}}),[]),Object(p.jsx)(u,{ref:e})},u=d.a.div(a||(a=Object(s.a)(["\n\tcolor: #000;\n\t:hover {\n\t\tcolor: #ed1212;\n\t\tcursor: grab;\n\t}\n"]))),O=n(724),f=n(44),v=n(6),w=n(7),y=Object(w.a)(c.a)((function(e){var t,n=e.theme;return t={display:"flex",width:1024,padding:40},Object(v.a)(t,n.breakpoints.down("md"),{width:"100%"}),Object(v.a)(t,n.breakpoints.down("sm"),{width:"100%"}),t})),k=Object(w.a)(c.a)((function(e){var t=e.theme;return Object(v.a)({width:"100%"},t.breakpoints.down("sm"),{justifyContent:"center",alignItems:"center",textAlign:"center"})})),A=function(e){var t=e.content,n=(e.align,e.background);return Object(p.jsx)(c.a,{sx:{display:"flex",width:"100%",height:"600px",justifyContent:"center",alignItems:"center",background:n},children:Object(p.jsx)(y,{children:Object(p.jsx)(k,{children:t})})})},z=n(90),B=(Object(w.a)(O.a)({height:50,borderRadius:6,paddingLeft:40,paddingRight:40,marginTop:20}),Object(w.a)(z.a)((function(e){e.theme;return{fontSize:"3.5rem",marginBottom:40,lineHeight:1.2}}))),C=Object(w.a)(z.a)((function(e){e.theme;return{fontSize:"1.5rem",lineHeight:1.5}})),S=d.a.span(i||(i=Object(s.a)(["\n    font-weight: 600;\n    font-size: 4rem;\n    color: #D5AD6D; /*if no support for background-clip*/\n    background: -webkit-linear-gradient(transparent, transparent),\n    -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);\n    background: -o-linear-gradient(transparent, transparent);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;"]))),T=Object(w.a)(z.a)((function(e){e.theme;return{fontSize:"2rem",lineHeight:1.2,marginBottom:12}})),E=Object(w.a)(z.a)((function(e){e.theme;return{fontSize:"1.2rem",lineHeight:1.3}})),I=d.a.img(r||(r=Object(s.a)(["\n    width:100%"]))),R=n.p+"static/media/v.8b56eecd.png",D=function(){var e=Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:10,children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"Vision"})}),Object(p.jsx)(T,{variant:"h1",component:"h1",children:"Remix creativity with existing game"}),Object(p.jsx)(E,{variant:"subtitle",component:"div",children:"Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members."}),Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Explore more"})]})}),Object(p.jsx)(o.a,{item:!0,xs:6,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(p.jsx)(c.a,{sx:{width:"100%",height:"100%",background:"url("+R+") center center no-repeat",backgroundSize:"contain"}})})]});return Object(p.jsx)(A,{align:"start",background:"linear-gradient(to bottom, #1f004c, #1f004c, #1a1a2e)",content:e})},P=n.p+"static/media/race-track.58ecb720.png",G=function(){var e=Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:8,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(p.jsx)(c.a,{sx:{width:"100%",height:"100%",background:"url("+P+") center center no-repeat",backgroundSize:"contain"}})}),Object(p.jsx)(o.a,{item:!0,xs:8,children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{variant:"h1",component:"h1",children:"Build To Earn"})}),Object(p.jsx)(T,{variant:"h2",component:"div",children:"Test the limits of your imagination"}),Object(p.jsx)(E,{variant:"subtitle",component:"div",children:"Create scenes, artworks, challenges and more, using the simple Builder tool, then take part in events to win prizes. For more experienced creators, the SDK provides the tools to fill the world with social games and applications."}),Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Start Building"})]})})]});return Object(p.jsx)(A,{align:"end",background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",content:e})},L=n.p+"static/media/pacman-remix.7672d527.png",F=function(){var e=Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:8,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(p.jsx)(c.a,{sx:{width:"100%",height:"100%",background:"url("+L+") center center no-repeat",backgroundSize:"contain"}})}),Object(p.jsx)(o.a,{item:!0,xs:8,children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"Remix"})}),Object(p.jsx)(T,{variant:"h1",component:"h1",children:"Remix creativity with existing game"}),Object(p.jsx)(E,{variant:"subtitle",component:"div",children:"Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members."}),Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Explore more"})]})})]});return Object(p.jsx)(A,{align:"start",background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",content:e})},H=n.p+"static/media/buggy.0a16c792.png",K=function(){var e=Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:8,children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"Invest and trade"})}),Object(p.jsx)(T,{variant:"h1",component:"div",gutterBottom:!0,children:"The virtual destination for digital assets"}),Object(p.jsx)(E,{variant:"subtitle",component:"div",gutterBottom:!0,children:"Buy and sell LAND, Estates, Avatar wearables and names in the Decentraland Marketplace: stocking the very best digital goods and paraphernalia backed by the ethereum blockchain."}),Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Start Borwsing"})]})}),Object(p.jsx)(o.a,{item:!0,xs:8,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(p.jsx)(c.a,{sx:{width:"100%",height:"100%",background:"url("+H+") center center no-repeat",backgroundSize:"contain"}})})]});return Object(p.jsx)(A,{align:"start",background:"linear-gradient(to bottom, #1a1a2e, #1f004c, #1a1a2e)",content:e})},M=n(1012),W=n(1013),N=n(1014),V=n(846),J=n.n(V),q=Object(w.a)(c.a)((function(e){var t,n=e.theme;return t={width:"100%",maxWidth:1024,justifyContent:"center",alignItems:"center",textAlign:"center",padding:40},Object(v.a)(t,n.breakpoints.down("md"),{width:"100%"}),Object(v.a)(t,n.breakpoints.down("sm"),{width:"100%"}),t})),U=function(e){var t=e.content;return Object(p.jsxs)(M.a,{sx:{background:" #1f004c"},children:[Object(p.jsx)(W.a,{expandIcon:Object(p.jsx)(J.a,{}),"aria-controls":"panel1a-content",children:Object(p.jsx)(E,{variant:"h2",component:"div",children:t.title})}),Object(p.jsx)(N.a,{children:Object(p.jsx)(E,{variant:"subtitle",component:"div",textAlign:"start",children:t.paragraph})})]})},Q={title:"What is Kho land?",paragraph:"Kho land is the earth\u2019s metaverse mapped to the real world and accessible via web, iOS and Android. In addition, there is a \u201creal economy\u201d that is sustained by the players via the market forces of supply and demand. Kho land is built on the basis of three key pillars: Play, Earn, & Connect. To learn more about the metaverse, read our whitepaper as well as our frequently updated development roadmap which details all the exciting features coming this year."},Z=function(){return Object(p.jsx)(c.a,{padding:10,sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(p.jsxs)(q,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"FAQ"})}),Object(p.jsx)(U,{content:Q}),Object(p.jsx)(U,{content:Q}),Object(p.jsx)(U,{content:Q}),Object(p.jsx)(U,{content:Q}),Object(p.jsx)(U,{content:Q}),Object(p.jsx)(U,{content:Q})]})})},_=n(220),X=(n(775),n.p+"static/media/jacky-1.bb3a7033.png"),Y=n.p+"static/media/parth-1.a0a962ec.png",$=n.p+"static/media/shubham-1.3ae80545.png",ee=n.p+"static/media/arink-1.0be22bce.png",te=n.p+"static/media/amit-1.0650534e.png",ne=n.p+"static/media/aditya-1.d8d757ae.png",ae=n.p+"static/media/aryan-1.adaf08c8.png",ie=(Object(w.a)(_.a)((function(e){var t=e.theme;return{backgroundColor:"transparent",color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(210.04deg, ".concat(t.palette.primary[200]," -50.94%, rgba(144, 202, 249, 0) 83.49%)"),borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(140.9deg, ".concat(t.palette.primary[200]," -14.02%, rgba(144, 202, 249, 0) 77.58%)"),borderRadius:"50%",top:-160,right:-130}}})),function(e){var t=e.name,n=e.about,a=e.image;return Object(p.jsx)(o.a,{item:!0,lg:4,md:4,sm:6,xs:12,children:Object(p.jsxs)(o.a,{container:!0,padding:4,children:[Object(p.jsx)(o.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},children:Object(p.jsx)(I,{src:a,alt:"Avatar"})}),Object(p.jsx)(o.a,{item:!0,xs:12,marginTop:1,children:Object(p.jsx)(z.a,{variant:"h2",component:"div",textAlign:"center",children:t})}),Object(p.jsx)(o.a,{item:!0,xs:12,marginTop:1,children:Object(p.jsx)(z.a,{variant:"subtitle",component:"div",textAlign:"center",children:n})})]})})}),re=function(){return Object(p.jsx)(c.a,{padding:10,sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(p.jsx)(q,{children:Object(p.jsxs)(o.a,{container:!0,children:[Object(p.jsx)(o.a,{item:!0,xs:12,children:Object(p.jsx)(c.a,{sx:{marginBottom:0},children:Object(p.jsx)(S,{children:"Team"})})}),Object(p.jsx)(o.a,{item:!0,xs:12,marginTop:0,children:Object(p.jsxs)(o.a,{container:!0,spacing:0,children:[Object(p.jsx)(ie,{name:"Axxxk",image:ee,about:"10 years of experience as founder in gaming, ads and tech startups. Currently working with Google."}),Object(p.jsx)(ie,{name:"Jxxxy",image:X,about:"More than 10 years of experience as founder of digital ads company."}),Object(p.jsx)(ie,{name:"Sxxxm",image:$,about:"Have founded social e-commerce platform. Expert in architecturing smart-contracts."}),Object(p.jsx)(ie,{name:"Axxxa",image:ne,about:"Have raised multiple business across various stages. Take care of product execution and mangement."}),Object(p.jsx)(ie,{name:"Axxx",image:te,about:"Sr software developer with 5+ years of experience in mobile app and backend development."}),Object(p.jsx)(ie,{name:"Axxx",image:ae,about:"Sr software developer with 5+ years of experience in mobile app and backend development."}),Object(p.jsx)(ie,{name:"Pxxxh",image:Y,about:"Currently working with Polygon in VP-Growth office. Expert in tokenomics and W3 policies."})]})})]})})})},ce=function(){return Object(p.jsx)(c.a,{sx:{display:"flex",width:"100%",height:"500px",overflow:"hidden",justifyContent:"center",alignItems:"center"},children:Object(p.jsxs)(q,{sx:{textAlign:"left"},children:[Object(p.jsxs)(B,{variant:"h1",component:"div",children:["Welcome to  ",Object(p.jsx)("br",{})," ",Object(p.jsx)(S,{children:"KhoLand"})]}),Object(p.jsx)(C,{variant:"h3",component:"div",children:"Trusted place for game developer, artist and publisher to play and build together."}),Object(p.jsx)(c.a,{paddingTop:2,children:Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Explore and deploy"})})]})})},oe=n.p+"static/media/coin.d40dfb30.png",se=function(){var e=Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:8,children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"Play To Earn"})}),Object(p.jsx)(T,{variant:"h1",component:"h1",children:"Remix creativity with existing game"}),Object(p.jsx)(E,{variant:"subtitle",component:"div",children:"Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members."}),Object(p.jsx)(O.a,{variant:"landing",component:f.b,to:"/pacman",children:"Explore more"})]})}),Object(p.jsx)(o.a,{item:!0,xs:8,sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(p.jsx)(c.a,{sx:{width:"100%",height:"100%",background:"url("+oe+") center center no-repeat",backgroundSize:"contain"}})})]});return Object(p.jsx)(A,{align:"start",background:"linear-gradient(to bottom, #1a1a2e, #1f004c, #1a1a2e)",content:e})},de=n.p+"static/media/BowlingGame.6af990c5.jpeg",le=n.p+"static/media/FlipCardGame.ddc74491.jpeg",je=n.p+"static/media/RacingGame.56dfefca.jpeg",be=n.p+"static/media/TetrisGame.21e9f825.jpeg",xe=200,me=Object(w.a)(c.a)((function(e){e.theme;return{display:"flex",maxWidth:xe,maxHeight:xe,height:xe,width:xe,zIndex:5,alignItems:"end",borderRadius:"16px"}})),he=Object(w.a)(c.a)((function(e){var t=e.theme;return{padding:8,width:xe,justifyContent:"center",borderBottomRightRadius:"16px",borderBottomLeftRadius:"16px",backgroundColor:t.palette.primary.dark,color:t.palette.primary.light}})),pe=function(e){var t=e.title,n=e.image;return Object(p.jsxs)(o.a,{item:!0,lg:3,md:6,sm:6,xs:12,children:[Object(p.jsx)(me,{sx:{background:"url("+n+") center center no-repeat",backgroundSize:"cover"},children:Object(p.jsx)(he,{children:Object(p.jsx)(E,{variant:"h3",component:"div",children:t})})}),Object(p.jsx)(ge,{})]})},ge=function(){return Object(p.jsx)(c.a,{sx:{display:"flex",width:xe,justifyContent:"center"},children:Object(p.jsx)(O.a,{variant:"landing",children:"UpVote"})})},ue=function(){return Object(p.jsx)(c.a,{padding:18,sx:{background:"linear-gradient(to top, #1a1a2e, #1f004c, #1a1a2e)",display:"flex",width:"100%",justifyContent:"center"},children:Object(p.jsx)(q,{children:Object(p.jsxs)(o.a,{container:!0,children:[Object(p.jsxs)(o.a,{item:!0,xs:12,children:[Object(p.jsx)(c.a,{sx:{marginBottom:5},children:Object(p.jsx)(S,{children:"Upcoming Games"})}),Object(p.jsx)(T,{variant:"h2",component:"div",children:"Vote for next upcoming games"})]}),Object(p.jsx)(o.a,{item:!0,xs:12,marginTop:8,children:Object(p.jsxs)(o.a,{container:!0,spacing:8,children:[Object(p.jsx)(pe,{title:"Racing Game",image:je}),Object(p.jsx)(pe,{title:"Memory Card Game",image:le}),Object(p.jsx)(pe,{title:"Tetris Game",image:be}),Object(p.jsx)(pe,{title:"Bowling GAme",image:de})]})})]})})})},Oe=function(){return Object(p.jsx)(c.a,{sx:{display:"flex",width:"100%",height:"500px",justifyContent:"center",alignItems:"center",background:"#1f004c"},children:Object(p.jsx)(c.a,{sx:{display:"flex",width:1024},children:Object(p.jsxs)(o.a,{container:!0,spacing:0,columns:16,children:[Object(p.jsx)(o.a,{item:!0,xs:7,children:Object(p.jsx)(ce,{})}),Object(p.jsx)(o.a,{item:!0,xs:9,children:Object(p.jsx)(g,{})})]})})})};t.default=function(){return Object(p.jsxs)(c.a,{sx:{display:"grid"},children:[Object(p.jsx)(Oe,{}),Object(p.jsx)(D,{}),Object(p.jsx)(F,{}),Object(p.jsx)(se,{}),Object(p.jsx)(G,{}),Object(p.jsx)(K,{}),Object(p.jsx)(ue,{}),Object(p.jsx)(re,{}),Object(p.jsx)(Z,{})]})}},775:function(e,t,n){"use strict";t.a=n.p+"static/media/earning.b019e86a.svg"}}]);
//# sourceMappingURL=19.8977ae08.chunk.js.map