"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[180],{17180:function(e,t,i){i.r(t);var n=i(29439),s=i(32636),r=i(61889),a=i(13400),d=i(20890),c=i(68870),o=i(53767),l=i(94721),x=i(36151),h=i(72791),f=i(57689),p=i(38308),g=i(19354),Z=(i(79690),i(40077)),u=i(78421),w=i(19601),j=i(58610),b=i(59061),m=i(80184);t.default=function(){var e=(0,f.UO)().id,t=(0,f.s0)(),i=(0,h.useState)({}),S=(0,n.Z)(i,2),W=S[0],C=S[1],A=(0,h.useState)(0),T=(0,n.Z)(A,2),k=T[0],v=T[1],z=(0,h.useState)(0),I=(0,n.Z)(z,2),y=I[0],D=I[1],M=(0,p.KQ)({address:W.address,watch:!0}).data,P=(0,j.Z)(W.address,b,"getTotalDeposits",[]).data;(0,h.useEffect)((function(){M&&D(M.formatted),P&&v(w.formatEther(P))})),(0,h.useEffect)((function(){Z.Z.get("/campaigns/".concat(e)).then((function(e){C(e.data)})).catch((function(e){console.error(e)}))}),[]);var R=(0,u.Z)(W.address),E=R.withdraw,B=R.isLoading;return(0,m.jsxs)(g.Z,{title:"Withdraw",description:"withdraw",children:[(0,m.jsxs)(r.ZP,{container:!0,direction:"row",children:[(0,m.jsx)(a.Z,{onClick:function(){return t(-1)},children:(0,m.jsx)(s.Z,{})}),(0,m.jsx)(d.Z,{variant:"h3",marginY:2,children:"Withdraw Balance"})]}),(0,m.jsx)(c.Z,{sx:{padding:3,width:"100%",height:"100%",bgcolor:"#fafafa",border:"1px solid #f2f2f2",borderRadius:2},children:(0,m.jsxs)(r.ZP,{container:!0,children:[(0,m.jsx)(r.ZP,{item:!0,md:6,sx:12,children:(0,m.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},children:[(0,m.jsx)(d.Z,{textAlign:"center",sx:{mb:3.5,fontSize:"20px",fontWeight:"bold"},children:W.title}),(0,m.jsxs)(o.Z,{spacing:2,sx:{justifyContent:"center",mr:2,borderRadius:2,width:"100%",height:"180px",p:2,boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"},children:[(0,m.jsxs)(d.Z,{sx:{fontSize:"15px",fontWeight:550},children:["Available balance: ",y," MATIC"]}),(0,m.jsx)(l.Z,{}),(0,m.jsxs)(d.Z,{sx:{fontSize:"15px",fontWeight:500},children:["Total Raised: ",k," MATIC"]}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(d.Z,{sx:{fontSize:"15px",fontWeight:500},children:(0,m.jsx)("b",{children:"Total withdrawn: TBD MATIC"})})]})]})}),(0,m.jsx)(r.ZP,{item:!0,md:6,sx:12,children:(0,m.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},children:[(0,m.jsx)(d.Z,{textAlign:"center",sx:{mb:3.5,fontSize:"20px",fontWeight:"bold"},children:"Withdraw"}),(0,m.jsxs)(o.Z,{spacing:2,sx:{ml:2,borderRadius:2,width:"100%",height:"180px",p:2,boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"},children:[(0,m.jsx)(d.Z,{sx:{fontSize:"15px"},children:"Withdrawing your campaign's balance will not affect the progress displayed on the site"}),(0,m.jsxs)(d.Z,{textAlign:"center",sx:{fontSize:"15px",fontWeight:500},children:["Click below to withdraw ",y," MATIC"]}),(0,m.jsx)(x.Z,{variant:"contained",onClick:function(){null===E||void 0===E||E()},disabled:y<.01,children:B?"Loading":"Withdraw"})]})]})})]})})]})}}}]);
//# sourceMappingURL=180.bd4d1691.chunk.js.map