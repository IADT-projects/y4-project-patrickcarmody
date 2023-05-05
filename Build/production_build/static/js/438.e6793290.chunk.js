"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[438],{73326:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(68870),a=n(20890),o=n(11087),i=(n(89471),n(29439)),s=n(57482),c=n(58610),l=n(59061),d=n(72791),u=n(19601),p=n(80184),h=function(e){var t=e.campaign,n=(0,d.useState)(0),o=(0,i.Z)(n,2),h=o[0],x=o[1],m=(0,d.useState)(0),f=(0,i.Z)(m,2),v=f[0],g=f[1],b=(0,d.useState)(""),Z=(0,i.Z)(b,2),y=Z[0],S=Z[1],w=(0,c.Z)(t.address,l,"getTotalDeposits",[]),j=w.data;w.error,w.isLoading,w.isSuccess,w.isError;return(0,d.useEffect)((function(){j&&(x(u.formatEther(j)),g(h/t.goal*100),S(Math.round(v)))})),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.Z,{sx:{height:"50px",width:"100%"},children:[(0,p.jsxs)(a.Z,{variant:"body1",sx:{fontSize:13,textAlign:"left",fontFamily:"Poppins",paddingBottom:1},children:["Progress (",y,"%)"]}),(0,p.jsx)(s.Z,{value:v,variant:"determinate",color:"primary",sx:{height:"8px",borderRadius:"3px"}}),(0,p.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,p.jsxs)(a.Z,{variant:"body1",sx:{fontSize:13,fontFamily:"Poppins",paddingTop:1},children:[h," MATIC"]}),(0,p.jsxs)(a.Z,{variant:"body1",sx:{fontSize:13,fontFamily:"Poppins",paddingTop:1},children:[t.goal," MATIC"]})]})]})})},x=function(e){var t=e.campaign,n=t.category.charAt(0).toUpperCase()+t.category.slice(1);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",sx:{width:{xs:"100%",md:"30%"},height:{xs:"500px",md:"350px"},m:1},children:(0,p.jsxs)(r.Z,{component:o.rU,to:"/campaigns/".concat(t._id),sx:{display:"flex-inline",justifyContent:"center",alignItems:"start",flexDirection:"column",border:"1px solid #e6e6e6",borderRadius:3,width:"99%",height:"99%",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",transition:"all 0.2s ease","&:hover":{width:"100%",height:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}},children:[(0,p.jsx)(r.Z,{component:"img",src:"https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/".concat(t.image,".png"),sx:{maxWidth:"100%",height:"35%",backgroundColor:"#3BBBEB",borderTopLeftRadius:10,borderTopRightRadius:10}}),(0,p.jsx)(r.Z,{sx:{width:"98%",minHeight:"15%",pt:2,pl:1},children:(0,p.jsx)(a.Z,{sx:{fontWeight:"600",fontSize:"20px"},children:t.title})}),(0,p.jsx)(r.Z,{sx:{width:"98%",height:"10%",pl:1},children:(0,p.jsx)(a.Z,{sx:{fontWeight:"500",fontSize:"12px",color:"#2b2b2b"},children:n})}),(0,p.jsx)(r.Z,{display:"flexgrow",sx:{width:"97%",height:"24%",pl:1,borderBottomRightRadius:10,borderBottomLeftRadius:10},children:(0,p.jsx)(h,{campaign:t})})]})})})}},61034:function(e,t,n){var r=n(68870),a=n(20890),o=n(11087),i=(n(89471),n(80184));t.Z=function(e){var t=e.charity,n=t.category.charAt(0).toUpperCase()+t.category.slice(1);return(0,i.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",sx:{width:{xs:"100%",md:"30%"},height:{xs:"450px",md:"300px"},m:1},children:(0,i.jsxs)(r.Z,{component:o.rU,to:"/charity/".concat(t._id),sx:{display:"flex-inline",justifyContent:"center",alignItems:"start",flexDirection:"column",borderRadius:3,width:"99%",height:"99%",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",transition:"all 0.2s ease","&:hover":{width:"100%",height:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}},children:[(0,i.jsx)(r.Z,{component:"img",src:"https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/".concat(t.bannerImage,".png"),sx:{width:"100%",height:"45%",backgroundColor:"#FFFFFF",borderTopLeftRadius:10,borderTopRightRadius:10}}),(0,i.jsxs)(r.Z,{sx:{height:"54%",borderBottomLeftRadius:10,borderBottomRightRadius:10},children:[(0,i.jsx)(r.Z,{sx:{height:"40px",display:"flex",p:"8px"},children:(0,i.jsx)(a.Z,{sx:{fontSize:"20px",fontWeight:"600",color:"#424242"},children:t.title})}),(0,i.jsxs)(r.Z,{sx:{height:"70px",display:"flex",p:"8px"},children:[(0,i.jsx)(r.Z,{component:"img",src:"https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/".concat(t.logoImage,".png"),sx:{width:"70px",height:"70px",backgroundColor:"#FFFFFF"}}),(0,i.jsx)(r.Z,{sx:{display:"flex",height:"70px",alignItems:"center",px:"5px"},children:(0,i.jsx)(a.Z,{sx:{fontWeight:"600",fontSize:"12px"},children:n})})]})]})]})})}},19354:function(e,t,n){n(72791);var r=n(54270),a=n(80184);t.Z=function(e){var t=e.title,n=e.description,o=e.children;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.q,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:n})]}),o]})}},40077:function(e,t,n){var r=n(31243);t.Z=r.Z.create({baseURL:"http://localhost:3005/"})},58610:function(e,t,n){var r=n(38308);t.Z=function(e,t,n,a){var o=(0,r.do)({address:e,abi:t,functionName:n,args:a,watch:!0});return{data:o.data,error:o.error,isLoading:o.isLoading,isSuccess:o.isSuccess,isError:o.isError}}},90438:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(29439),a=n(72791),o=n(68870),i=n(61889),s=n(20890),c=n(36151),l=n(19354),d=n(74223),u=n(80184),p=(0,d.Z)((0,u.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East"),h=n(18801),x=n(11087),m=n(40077),f=n(73326),v=n(61034),g=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],d=t[1],g=(0,a.useState)([]),b=(0,r.Z)(g,2),Z=b[0],y=b[1];(0,a.useEffect)((function(){m.Z.get("/campaigns?limit=3").then((function(e){d(e.data)})).catch((function(e){console.error(e)}))}),[]),(0,a.useEffect)((function(){m.Z.get("/charities?limit=3").then((function(e){y(e.data)})).catch((function(e){console.error(e)}))}),[]);var S=n.map((function(e){return(0,u.jsx)(f.Z,{campaign:e,sx:{pl:5}})})),w=Z.map((function(e){return(0,u.jsx)(v.Z,{charity:e,sx:{pl:5}})}));return(0,u.jsx)(l.Z,{title:"BlockAid",description:"home page",children:(0,u.jsx)(o.Z,{children:(0,u.jsxs)(i.ZP,{container:!0,columnSpacing:3,padding:4,rowSpacing:10,children:[(0,u.jsxs)(i.ZP,{item:!0,xs:12,md:5,children:[(0,u.jsx)(s.Z,{variant:"h1",children:"Raising money"}),(0,u.jsx)(s.Z,{variant:"h1",color:"primary",children:"decentralised."}),(0,u.jsx)(s.Z,{variant:"subtitle1",sx:{fontSize:18,marginY:4},children:"Receive cryptocurrency donations for your cause directly from users on the Ethereum blockchain."}),(0,u.jsx)(c.Z,{variant:"contained",endIcon:(0,u.jsx)(p,{}),component:x.rU,to:"/campaigns/explore",sx:{height:"40px",width:"150px",borderRadius:0},children:"Donate Now"})]}),(0,u.jsx)(i.ZP,{item:!0,xs:12,md:7,sx:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(o.Z,{component:"img",src:"/images/DonateExample.png",sx:{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",ml:18}})}),(0,u.jsxs)(i.ZP,{item:!0,xs:12,container:!0,alignItems:"center",children:[(0,u.jsx)(i.ZP,{item:!0,xs:12,md:7,sx:{paddingY:1},children:(0,u.jsx)(s.Z,{variant:"h3",textAlign:"center",children:"Start accepting crypto today"})}),(0,u.jsx)(i.ZP,{item:!0,xs:12,md:5,sx:{paddingY:1},justifyContent:"center",display:"flex",children:(0,u.jsx)(c.Z,{variant:"contained",endIcon:(0,u.jsx)(h.Z,{}),component:x.rU,to:"/get-started",sx:{height:"50px",width:"200px",borderRadius:0},children:"Get Started"})})]}),(0,u.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,u.jsx)(s.Z,{variant:"h2",children:"Donate to user campaigns"})}),(0,u.jsx)(i.ZP,{item:!0,xs:12,md:4,display:"flex",justifyContent:"flex-end",children:(0,u.jsx)(c.Z,{variant:"outlined",endIcon:(0,u.jsx)(p,{}),component:x.rU,to:"/campaigns/user",sx:{height:"50px",width:"200px",borderRadius:0},children:"View all"})}),(0,u.jsx)(i.ZP,{item:!0,xs:12,container:!0,spacing:1,justifyContent:"center",children:S}),(0,u.jsx)(i.ZP,{item:!0,xs:8,container:!0,children:(0,u.jsx)(s.Z,{variant:"h2",children:"Donate to organisations"})}),(0,u.jsx)(i.ZP,{item:!0,xs:4,display:"flex",justifyContent:"flex-end",children:(0,u.jsx)(c.Z,{variant:"outlined",endIcon:(0,u.jsx)(p,{}),component:x.rU,to:"/campaigns/charity",sx:{height:"50px",width:"200px",borderRadius:0},children:"View all"})}),(0,u.jsx)(i.ZP,{item:!0,xs:12,container:!0,spacing:1,justifyContent:"center",children:w})]})})})}},18801:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article")},68870:function(e,t,n){var r=n(23814),a=n(55902),o=(0,n(67107).Z)(),i=(0,r.Z)({defaultTheme:o,defaultClassName:"MuiBox-root",generateClassName:a.Z.generate});t.Z=i},36151:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(4942),a=n(63366),o=n(87462),i=n(72791),s=n(28182),c=n(35735),l=n(94419),d=n(12065),u=n(66934),p=n(31402),h=n(19297),x=n(14036),m=n(75878),f=n(21217);function v(e){return(0,f.Z)("MuiButton",e)}var g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),Z=n(80184),y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(e){return(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},w=(0,u.ZP)(h.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,x.Z)(n.color))],t["size".concat((0,x.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,x.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,a,i=e.theme,s=e.ownerState;return(0,o.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===s.variant&&"inherit"!==s.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===s.variant&&"inherit"!==s.color&&{border:"1px solid ".concat((i.vars||i).palette[s.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===s.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===s.variant&&"inherit"!==s.color&&{backgroundColor:(i.vars||i).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[s.color].main}}),"&:active":(0,o.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,r.Z)(t,"&.".concat(g.focusVisible),(0,o.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,r.Z)(t,"&.".concat(g.disabled),(0,o.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===s.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===s.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===s.variant&&{padding:"6px 8px"},"text"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main},"outlined"===s.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[s.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[s.color].main,.5))},"contained"===s.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].contrastText,backgroundColor:(i.vars||i).palette[s.color].main},"inherit"===s.color&&{color:"inherit",borderColor:"currentColor"},"small"===s.size&&"text"===s.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"text"===s.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"outlined"===s.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"outlined"===s.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"contained"===s.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"contained"===s.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},s.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,r.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,r.Z)(t,"&:active",{boxShadow:"none"}),(0,r.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),j=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,x.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},S(t))})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,x.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},S(t))})),C=i.forwardRef((function(e,t){var n=i.useContext(b),r=(0,c.Z)(n,e),d=(0,p.Z)({props:r,name:"MuiButton"}),u=d.children,h=d.color,m=void 0===h?"primary":h,f=d.component,g=void 0===f?"button":f,S=d.className,C=d.disabled,I=void 0!==C&&C,R=d.disableElevation,k=void 0!==R&&R,P=d.disableFocusRipple,B=void 0!==P&&P,F=d.endIcon,L=d.focusVisibleClassName,M=d.fullWidth,E=void 0!==M&&M,T=d.size,N=void 0===T?"medium":T,W=d.startIcon,q=d.type,D=d.variant,V=void 0===D?"text":D,A=(0,a.Z)(d,y),O=(0,o.Z)({},d,{color:m,component:g,disabled:I,disableElevation:k,disableFocusRipple:B,fullWidth:E,size:N,type:q,variant:V}),U=function(e){var t=e.color,n=e.disableElevation,r=e.fullWidth,a=e.size,i=e.variant,s=e.classes,c={root:["root",i,"".concat(i).concat((0,x.Z)(t)),"size".concat((0,x.Z)(a)),"".concat(i,"Size").concat((0,x.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,x.Z)(a))],endIcon:["endIcon","iconSize".concat((0,x.Z)(a))]},d=(0,l.Z)(c,v,s);return(0,o.Z)({},s,d)}(O),H=W&&(0,Z.jsx)(j,{className:U.startIcon,ownerState:O,children:W}),Y=F&&(0,Z.jsx)(z,{className:U.endIcon,ownerState:O,children:F});return(0,Z.jsxs)(w,(0,o.Z)({ownerState:O,className:(0,s.Z)(n.className,U.root,S),component:g,disabled:I,focusRipple:!B,focusVisibleClassName:(0,s.Z)(U.focusVisible,L),ref:t,type:q},A,{classes:U,children:[H,u,Y]}))}))},57482:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(30168),a=n(63366),o=n(87462),i=n(72791),s=n(28182),c=n(94419),l=n(52554),d=n(12065),u=n(14036),p=n(13967),h=n(66934),x=n(31402),m=n(75878),f=n(21217);function v(e){return(0,f.Z)("MuiLinearProgress",e)}(0,m.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g,b,Z,y,S,w,j,z,C,I,R,k,P=n(80184),B=["className","color","value","valueBuffer","variant"],F=(0,l.F4)(j||(j=g||(g=(0,r.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),L=(0,l.F4)(z||(z=b||(b=(0,r.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),M=(0,l.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),E=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?(0,d.$n)(e.palette[t].main,.62):(0,d._j)(e.palette[t].main,.5)},T=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat((0,u.Z)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:E(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),N=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat((0,u.Z)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,r=E(n,t.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(I||(I=y||(y=(0,r.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),M)),W=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,l.iv)(R||(R=S||(S=(0,r.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),F)})),q=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:E(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,l.iv)(k||(k=w||(w=(0,r.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),L)})),D=i.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiLinearProgress"}),r=n.className,i=n.color,l=void 0===i?"primary":i,d=n.value,h=n.valueBuffer,m=n.variant,f=void 0===m?"indeterminate":m,g=(0,a.Z)(n,B),b=(0,o.Z)({},n,{color:l,variant:f}),Z=function(e){var t=e.classes,n=e.variant,r=e.color,a={root:["root","color".concat((0,u.Z)(r)),n],dashed:["dashed","dashedColor".concat((0,u.Z)(r))],bar1:["bar","barColor".concat((0,u.Z)(r)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat((0,u.Z)(r)),"buffer"===n&&"color".concat((0,u.Z)(r)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return(0,c.Z)(a,v,t)}(b),y=(0,p.Z)(),S={},w={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==d){S["aria-valuenow"]=Math.round(d),S["aria-valuemin"]=0,S["aria-valuemax"]=100;var j=d-100;"rtl"===y.direction&&(j=-j),w.bar1.transform="translateX(".concat(j,"%)")}else 0;if("buffer"===f)if(void 0!==h){var z=(h||0)-100;"rtl"===y.direction&&(z=-z),w.bar2.transform="translateX(".concat(z,"%)")}else 0;return(0,P.jsxs)(T,(0,o.Z)({className:(0,s.Z)(Z.root,r),ownerState:b,role:"progressbar"},S,{ref:t},g,{children:["buffer"===f?(0,P.jsx)(N,{className:Z.dashed,ownerState:b}):null,(0,P.jsx)(W,{className:Z.bar1,ownerState:b,style:w.bar1}),"determinate"===f?null:(0,P.jsx)(q,{className:Z.bar2,ownerState:b,style:w.bar2})]}))}))},89471:function(){},59061:function(e){e.exports=JSON.parse('[{"name":"getTotalDeposits","type":"function","stateMutability":"view","inputs":[],"outputs":[{"internalType":"uint256","name":"","type":"uint256"}]}]')}}]);
//# sourceMappingURL=438.e6793290.chunk.js.map