(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[13],{725:function(e,t,r){"use strict";var a=r(28),n=r(125),o=r(0),i=r(40),c=r(667),s=r(332),l=r(331),u=r(663),d=r(668),b=r(3),p=["border","boxShadow","children","content","contentClass","contentSX","darkTitle","secondary","shadow","sx","title"],j={"& .MuiCardHeader-action":{mr:0}},h=Object(o.forwardRef)((function(e,t){var r=e.border,o=void 0===r||r,h=e.boxShadow,m=e.children,f=e.content,O=void 0===f||f,v=e.contentClass,g=void 0===v?"":v,x=e.contentSX,y=void 0===x?{}:x,w=e.darkTitle,k=e.secondary,S=e.shadow,M=e.sx,L=void 0===M?{}:M,V=e.title,R=Object(n.a)(e,p),C=Object(i.a)();return Object(b.jsxs)(c.a,Object(a.a)(Object(a.a)({ref:t},R),{},{sx:Object(a.a)({border:o?"1px solid":"none",borderColor:C.palette.primary[200]+75,":hover":{boxShadow:h?S||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"}},L),children:[!w&&V&&Object(b.jsx)(s.a,{sx:j,title:V,action:k}),w&&V&&Object(b.jsx)(s.a,{sx:j,title:Object(b.jsx)(l.a,{variant:"h3",children:V}),action:k}),V&&Object(b.jsx)(u.a,{}),O&&Object(b.jsx)(d.a,{sx:y,className:g,children:m}),!O&&m]}))}));t.a=h},730:function(e,t,r){"use strict";var a=r(40),n=r(705),o=r(707),i=r(740),c=r(28),s=r(125),l=r(739),u=r(3),d=["color","outline","size","sx"],b=function(e){var t=e.color,r=e.outline,n=e.size,o=e.sx,i=Object(s.a)(e,d),b=Object(a.a)(),p=t&&!r&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},j=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(n){case"badge":h={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":h={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":h={width:b.spacing(5),height:b.spacing(5)};break;case"lg":h={width:b.spacing(9),height:b.spacing(9)};break;case"xl":h={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":h={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:h={}}return Object(u.jsx)(l.a,Object(c.a)({sx:Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},p),j),h),o)},i))};t.a=function(e){var t=e.title,r=e.link,c=e.icon,s=Object(a.a)();return Object(u.jsx)(n.a,{title:t||"Reference",placement:"left",children:Object(u.jsxs)(o.a,{disableRipple:!0,children:[!c&&Object(u.jsx)(b,{component:i.a,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(u.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(u.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:s.palette.primary[800]}),Object(u.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:s.palette.primary.main}),Object(u.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:s.palette.primary[800]}),Object(u.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:s.palette.primary.main})]}),Object(u.jsx)("defs",{children:Object(u.jsx)("clipPath",{id:"clip0",children:Object(u.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&Object(u.jsx)(b,{component:i.a,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:c})]})})}},739:function(e,t,r){"use strict";var a=r(15),n=r(6),o=r(2),i=r(0),c=r(9),s=r(653),l=r(8),u=r(17),d=r(68),b=r(3),p=Object(d.a)(Object(b.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),j=r(329),h=r(654);function m(e){return Object(j.a)("MuiAvatar",e)}Object(h.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],O=Object(l.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return Object(o.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:t.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),v=Object(l.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=Object(l.a)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var x=i.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiAvatar"}),l=r.alt,d=r.children,p=r.className,j=r.component,h=void 0===j?"div":j,x=r.imgProps,y=r.sizes,w=r.src,k=r.srcSet,S=r.variant,M=void 0===S?"circular":S,L=Object(n.a)(r,f),V=null,R=function(e){var t=e.crossOrigin,r=e.referrerPolicy,n=e.src,o=e.srcSet,c=i.useState(!1),s=Object(a.a)(c,2),l=s[0],u=s[1];return i.useEffect((function(){if(n||o){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[t,r,n,o]),l}(Object(o.a)({},x,{src:w,srcSet:k})),C=w||k,D=C&&"error"!==R,z=Object(o.a)({},r,{colorDefault:!D,component:h,variant:M}),A=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(s.a)(r,m,t)}(z);return V=D?Object(b.jsx)(v,Object(o.a)({alt:l,src:w,srcSet:k,sizes:y,ownerState:z,className:A.img},x)):null!=d?d:C&&l?l[0]:Object(b.jsx)(g,{className:A.fallback}),Object(b.jsx)(O,Object(o.a)({as:h,ownerState:z,className:Object(c.a)(A.root,p),ref:t},L,{children:V}))}));t.a=x},740:function(e,t,r){"use strict";var a=r(15),n=r(14),o=r(6),i=r(2),c=r(0),s=r(9),l=r(653),u=r(11),d=r(652),b=r(10),p=r(8),j=r(17),h=r(87),m=r(34),f=r(331),O=r(329),v=r(654);function g(e){return Object(O.a)("MuiLink",e)}var x=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(3),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=Object(p.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,a=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(r.color)))||r.color;return Object(i.a)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(d.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&Object(n.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.focusVisible),{outline:"auto"}))})),M=c.forwardRef((function(e,t){var r=Object(j.a)({props:e,name:"MuiLink"}),n=r.className,u=r.color,d=void 0===u?"primary":u,p=r.component,f=void 0===p?"a":p,O=r.onBlur,v=r.onFocus,x=r.TypographyClasses,k=r.underline,M=void 0===k?"always":k,L=r.variant,V=void 0===L?"inherit":L,R=Object(o.a)(r,w),C=Object(h.a)(),D=C.isFocusVisibleRef,z=C.onBlur,A=C.onFocus,N=C.ref,F=c.useState(!1),P=Object(a.a)(F,2),I=P[0],T=P[1],B=Object(m.a)(t,N),Z=Object(i.a)({},r,{color:d,component:f,focusVisible:I,underline:M,variant:V}),H=function(e){var t=e.classes,r=e.component,a=e.focusVisible,n=e.underline,o={root:["root","underline".concat(Object(b.a)(n)),"button"===r&&"button",a&&"focusVisible"]};return Object(l.a)(o,g,t)}(Z);return Object(y.jsx)(S,Object(i.a)({className:Object(s.a)(H.root,n),classes:x,color:d,component:f,onBlur:function(e){z(e),!1===D.current&&T(!1),O&&O(e)},onFocus:function(e){A(e),!0===D.current&&T(!0),v&&v(e)},ref:B,ownerState:Z,variant:V},R))}));t.a=M},958:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(667),o=r(725),i=r(730),c=r(3),s=Object(a.a)("iframe")((function(e){return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:e.theme.palette.primary.light}}));t.default=function(){return Object(c.jsx)(o.a,{title:"Material Icons",secondary:Object(c.jsx)(i.a,{link:"https://next.material-ui.com/components/material-icons/"}),children:Object(c.jsx)(n.a,{sx:{overflow:"hidden"},children:Object(c.jsx)(s,{title:"Material Icon",width:"100%",src:"https://material-ui.com/components/material-icons/"})})})}}}]);
//# sourceMappingURL=13.62b9b06d.chunk.js.map