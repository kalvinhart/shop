"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[545],{6545:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var t,s,i,a,d,c=n(5861),o=n(885),l=n(7757),x=n.n(l),u=n(2791),h=n(6030),p=n(4569),m=n.n(p),f=n(3473),j=n(5764),y=n(363),g=n(168),b=n(5751),v=b.ZP.div(t||(t=(0,g.Z)(["\n  position: relative;\n  width: 100%;\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n\n  &:not(:last-child) {\n    border-bottom: var(--borders);\n  }\n\n  & ",", & "," {\n    margin-bottom: 5px;\n  }\n\n  & "," {\n    position: absolute;\n    bottom: 20px;\n    right: 0;\n    align-self: flex-end;\n    font-size: 20px;\n  }\n"])),y.NS,y.gk,y.c_),Z=n(184),w=function(e){var r=e.item,n=r.name,t=r.brand,s=r.qty,i=r.price,a=r.total;return(0,Z.jsxs)(v,{children:[(0,Z.jsx)(y.NS,{children:n}),(0,Z.jsx)(y.gk,{children:t}),(0,Z.jsx)(y.gk,{children:"\xa3".concat(i," x ").concat(s)}),(0,Z.jsxs)(y.c_,{children:["\xa3",a]})]})},F=n(399),S=b.ZP.div(s||(s=(0,g.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border: var(--borders);\n  box-shadow: var(--box-shadow-small);\n\n  @media screen and (min-width: ",") {\n    width: calc(30% - 10px);\n    margin-bottom: 0;\n  }\n"])),F.Z.large),P=b.ZP.div(i||(i=(0,g.Z)(["\n  padding: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),k=function(e){var r=e.cart,n=e.cartTotal;return(0,Z.jsxs)(S,{children:[(0,Z.jsx)(y.H3,{children:"Order Summary:"}),r.map((function(e){return(0,Z.jsx)(w,{item:e},e.name)})),(0,Z.jsxs)(P,{children:[(0,Z.jsx)(y.NS,{children:"Total:"}),(0,Z.jsxs)(y.c_,{children:["\xa3",n]})]})]})},N=n(1413),q=n(5118),C=n(4483),T=n(3174),_=n(409),z=n(7365),D=b.ZP.div(a||(a=(0,g.Z)(["\n  width: 100%;\n  padding: 20px;\n  background-color: white;\n  border: var(--borders);\n  box-shadow: var(--box-shadow-small);\n\n  @media screen and (min-width: ",") {\n    width: calc(70% - 10px);\n  }\n\n  & "," {\n    margin: 20px 0;\n  }\n"])),F.Z.large,_.z),E=function(e){var r=e.total,n=(0,j.useStripe)(),t=(0,j.useElements)(),s=(0,q.cI)(),i=s.register,a=s.handleSubmit,d=s.formState.errors,l=(0,u.useState)(!1),h=(0,o.Z)(l,2),p=h[0],m=h[1],f=(0,u.useState)(""),g=(0,o.Z)(f,2),b=g[0],v=g[1],w=function(){var e=(0,c.Z)(x().mark((function e(r){var s,i,a,d,c,o,l,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.firstName,i=r.lastName,a=r.address1,d=r.address2,c=r.city,o=r.state,l=r.postalCode,n&&t){e.next=3;break}return e.abrupt("return");case 3:return v(""),m(!0),e.next=7,n.confirmPayment({elements:t,confirmParams:{return_url:"http://localhost:3000/confirmation?paymentStatus=success",shipping:{name:"".concat(s," ").concat(i),address:{line1:a,line2:d,city:c,state:o,postal_code:l}}}});case 7:u=e.sent,m(!1),"card_error"===u.error.type||"validation_error"===u.error.type?v(u.error.message):v("An unexpected error has occurred.");case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,Z.jsx)(D,{children:(0,Z.jsxs)("form",{onSubmit:a(w),children:[(0,Z.jsxs)(z.S1,{children:[(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"firstName",children:"First Name"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"firstName"},i("firstName",{required:!0,minLength:2}))),d.firstName&&(0,Z.jsx)(y.DU,{children:"This field requires at least 2 characters."})]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"lastName",children:"Last Name"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"lastName"},i("lastName",{required:!0,minLength:2}))),d.lastName&&(0,Z.jsx)(y.DU,{children:"This field requires at least 2 characters."})]})]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"address1",children:"Address Line 1"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"address1"},i("address1",{required:!0}))),d.address1&&(0,Z.jsx)(y.DU,{children:"This field is required."})]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"address2",children:"Address Line 2"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"address2"},i("address2"))),d.address2&&(0,Z.jsx)(y.DU,{children:"This field is required."})]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"city",children:"City"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"city"},i("city",{required:!0}))),d.city&&(0,Z.jsx)(y.DU,{children:"This field is required."})]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"state",children:"County"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"state"},i("state")))]}),(0,Z.jsxs)(z.F5,{children:[(0,Z.jsx)(z.ar,{htmlFor:"postalCode",children:"Postal Code"}),(0,Z.jsx)(z.Fy,(0,N.Z)({type:"text",id:"postalCode"},i("postalCode",{required:!0}))),d.postalCode&&(0,Z.jsx)(y.DU,{children:"This field is required."})]}),(0,Z.jsx)(j.PaymentElement,{}),n&&t&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(_.z,{type:"primary",$large:!0,disabled:p,children:p?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C.G,{icon:T.LM3,size:"lg",spin:!0})," Processing..."]}):"Pay \xa3".concat(r/100)})}),b&&(0,Z.jsx)(y.DU,{staticPosition:!0,children:b})]})})},L=n(6347),U=b.ZP.div(d||(d=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])),F.Z.large),I=(0,f.J)("pk_test_51Kjje5ImZaW6WfTHivYuPw1ldK7eaujHtiC4Ct8tTQpOCmImW7gTJrkBPn58hokQd7KRg9I3MeuCSR7ydzAIQGPz00MYyEWYlX"),R=function(){var e=(0,h.v9)((function(e){return e.cart})),r=e.cart,n=e.cartTotal,t=(0,h.v9)((function(e){return e.auth})).user,s=(0,u.useState)(""),i=(0,o.Z)(s,2),a=i[0],d=i[1],l=(0,u.useState)(0),p=(0,o.Z)(l,2),f=p[0],y=p[1];(0,u.useEffect)((function(){if(r&&t){var e={};r.forEach((function(r){return e[r.id]={qty:r.qty,total:r.total}}));var n=function(){var r=(0,c.Z)(x().mark((function r(){var n,s;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m().post("/api/payment/create-intent",{items:e,user:t});case 2:n=r.sent,s=n.data,d(s.clientSecret),y(s.total);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();n()}}),[r,t]);return(0,Z.jsx)(U,{children:a?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Elements,{stripe:I,options:{clientSecret:a,appearance:{variables:{borderRadius:"5px",fontFamily:"Poppins, sans-serif"},rules:{".Input":{border:"1px solid #eee",borderRadius:"var(--borderRadius)"},".Label":{fontWeight:"700",marginBottom:"10px",color:"#111",fontSize:"16px"},".Error":{fontSize:"12px",color:"#dc143c"}}},fonts:[{cssSrc:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700"}],loader:"always"},children:(0,Z.jsx)(E,{total:f})}),(0,Z.jsx)(k,{cart:r,cartTotal:n})]}):(0,Z.jsx)(L.Z,{})})}}}]);
//# sourceMappingURL=545.44df11f5.chunk.js.map