"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[41],{5041:function(r,e,n){n.r(e);var s=n(2791),i=n(6030),a=n(6871),o=n(5063),t=n(9409),l=n(184);e.default=function(){var r=(0,i.I0)(),e=(0,a.TH)(),n=(0,a.s0)(),d=(0,i.v9)((function(r){return r.auth})),c=d.loading,u=d.user,m=d.error;(0,s.useEffect)((function(){var r;u&&n(null!==(r=e.state)&&void 0!==r&&r.from?e.state.from:"/")}),[u]);return(0,l.jsx)(t.Z,{type:"LOGIN",loading:c,inputConfig:{email:{value:"",options:{required:!0,min:6}},password:{value:"",options:{required:!0,min:8}}},formSubmit:function(e){var n=e.email,s=e.password;r((0,o.vz)({email:n.value,password:s.value}))},formError:m})}},9409:function(r,e,n){n.d(e,{Z:function(){return f}});var s=n(4942),i=n(1413),a=n(885),o=n(2791),t=n(3504),l=n(4483),d=n(3174),c=n(7365),u=n(363),m=n(409),h=n(184),f=function(r){var e=r.type,n=r.loading,f=r.inputConfig,p=r.formSubmit,j=(r.formError,(0,o.useState)(f)),v=(0,a.Z)(j,2),x=v[0],g=v[1],w=(0,o.useState)({}),E=(0,a.Z)(w,2),R=E[0],P=E[1],S=function(r){R&&P({}),g((0,i.Z)((0,i.Z)({},x),{},(0,s.Z)({},r.target.name,{value:r.target.value,options:(0,i.Z)({},x[r.target.name].options)})))},y=function(r){r.preventDefault();var e=function(r){var e={};for(var n in r)r[n].options.required&&""===r[n].value&&(e[n]="This field is required."),r[n].options.min&&""!==r[n].value&&r[n].value.length<r[n].options.min&&(e[n]="This field must contain a minimum of ".concat(r[n].options.min," characters."));return r.confirmPassword&&(e.confirmPassword||r.password.value===r.confirmPassword.value||(e.confirmPassword="Passwords do not match.")),Object.keys(e).length>0?[e]:[]}(x);e.length>0?P(e[0]):p(x)};return(0,h.jsx)(c.cM,{children:(0,h.jsxs)(c.Vd,{children:[(0,h.jsx)(u.H2,{children:"REGISTER"===e?"Register":"Sign In"}),(0,h.jsxs)(c.Gq,{onSubmit:y,children:[(0,h.jsxs)(c.F5,{children:[(0,h.jsx)(c.ar,{htmlFor:"email",children:"Email:"}),(0,h.jsx)(c.Fy,{type:"text",name:"email",id:"email",value:x.email.value,placeholder:"Email address",onChange:S}),R.email&&(0,h.jsxs)(u.DU,{children:[(0,h.jsx)(l.G,{icon:d.RLE}),R.email]})]}),(0,h.jsxs)(c.F5,{children:[(0,h.jsx)(c.ar,{htmlFor:"password",children:"Password:"}),(0,h.jsx)(c.Fy,{type:"password",name:"password",id:"password",value:x.password.value,placeholder:"Password",onChange:S}),R.password&&(0,h.jsxs)(u.DU,{children:[(0,h.jsx)(l.G,{icon:d.RLE}),R.password]})]}),"REGISTER"===e&&(0,h.jsxs)(c.F5,{children:[(0,h.jsx)(c.ar,{htmlFor:"confirmPassword",children:"Confirm Password:"}),(0,h.jsx)(c.Fy,{type:"password",name:"confirmPassword",id:"confirmPassword",value:x.confirmPassword.value,placeholder:"Confirm Password",onChange:S}),R.confirmPassword&&(0,h.jsxs)(u.DU,{children:[(0,h.jsx)(l.G,{icon:d.RLE}),R.confirmPassword]})]}),(0,h.jsx)(m.z,{type:"primary",$large:!0,disabled:n,onClick:y,children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.G,{icon:d.LM3,size:"lg",spin:!0}),"REGISTER"===e?"Registering...":"Signing in..."]}):"REGISTER"===e?"Register Account":"Sign In"})]}),"REGISTER"===e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Me,{children:"Already have an account?"}),(0,h.jsx)(u.Me,{children:(0,h.jsx)(t.rU,{to:"/login",children:"Sign in!"})})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Me,{children:"Don't have an account?"}),(0,h.jsx)(u.Me,{children:(0,h.jsx)(t.rU,{to:"/register",children:"Sign up!"})})]})]})})}}}]);
//# sourceMappingURL=41.e31b4757.chunk.js.map