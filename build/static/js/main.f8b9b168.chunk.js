(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(28),r=(n(39),n(29)),a=n(30),s=n(34),i=n(33),j=n(11),u=n(2),l=n(13),b=n.n(l),O="/api/users",p={getAllUsers:function(){return b.a.get(O)},postRegister:function(e){return b.a.post("".concat(O,"/register"),e)},postLogin:function(e){return b.a.post("".concat(O,"/login"),e)},postLogout:function(){return b.a.post("".concat(O,"/logout"))}},d=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null},m=(n(58),n(0)),h=function(){var e=function(){p.postLogout().then((function(e){200===e.status?(localStorage.removeItem("user"),window.location.reload()):console.log("There was an error logging out...")}))};return console.log(window.location.pathname),Object(m.jsxs)("div",{id:"navbar",children:[Object(m.jsx)("div",{className:"left"}),Object(m.jsxs)("div",{className:"middle",children:["admin"===d().userType?Object(m.jsx)("a",{href:"/users",className:"/users"===window.location.pathname?"active":"",children:"Users"}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("a",{href:"/inventory",className:"/inventory"===window.location.pathname?"active":"",children:"Inventory"})]}),Object(m.jsx)("button",{className:"logout-button",onClick:function(){return e()},children:"Log out"})]})},f=n(16),x=n.p+"static/media/login_image.6954d3e8.svg",g=(n(60),function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),a=Object(f.a)(r,2),s=a[0],i=a[1],j=Object(c.useState)(""),u=Object(f.a)(j,2),l=u[0],b=u[1],O=function(){var e={username:n,password:s};""!==n?""!==s?p.postLogin(e).then((function(e){200===e.status&&(!function(e){localStorage.setItem("user",JSON.stringify(e))}({username:n,userType:e.data.userType}),window.location.reload())})).catch((function(e){401===e.response.status&&b("Invalid username or password")})):b("Password is empty"):b("Username is empty")};return Object(m.jsx)("div",{id:"login-page",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("p",{className:"title",children:"Login"}),Object(m.jsx)("p",{className:"sub-title",children:"Welcome back!"}),Object(m.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&O()}}),Object(m.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&O()}}),Object(m.jsx)("p",{className:"error-message",children:l}),Object(m.jsx)("img",{src:x,alt:"Login"}),Object(m.jsx)("button",{onClick:function(){return O()},children:"Sign in"})]})})}),v=(n(61),function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Users Page"})})}),y=(n(62),function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Inventory Page"})})}),w=n(8),N=n(10),S="/inventory",k=["component"],I=function(e){var t=e.component,n=Object(N.a)(e,k);return Object(m.jsx)(u.b,Object(w.a)(Object(w.a)({},n),{},{render:function(e){return d()?"user"===d().userType?Object(m.jsx)(u.a,{to:{pathname:S,state:{from:e.location}}}):Object(m.jsx)(t,Object(w.a)({},e)):Object(m.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},L=["component"],P=function(e){var t=e.component,n=Object(N.a)(e,L);return Object(m.jsx)(u.b,Object(w.a)(Object(w.a)({},n),{},{render:function(e){return d()?Object(m.jsx)(t,Object(w.a)({},e)):Object(m.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},T=["component"],C=function(e){var t=e.component,n=Object(N.a)(e,T);return Object(m.jsx)(u.b,Object(w.a)(Object(w.a)({},n),{},{render:function(e){return d()?"admin"===d().userType?Object(m.jsx)(u.a,{to:{pathname:"/users"}}):Object(m.jsx)(u.a,{to:{pathname:S}}):Object(m.jsx)(t,Object(w.a)({},e))}}))},U=(n(71),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(a.a)(n,[{key:"render",value:function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)(u.d,{children:[Object(m.jsx)(I,{path:"/users",component:h}),Object(m.jsx)(P,{path:"/inventory",component:h}),Object(m.jsx)(u.b,{path:"/",component:function(){return Object(m.jsx)(m.Fragment,{})}})]}),Object(m.jsxs)(u.d,{children:[Object(m.jsx)(I,{path:"/users",component:v}),Object(m.jsx)(P,{path:"/inventory",component:y}),Object(m.jsx)(C,{path:"/",component:g})]})]})})}}]),n}(c.Component));Object(o.render)(Object(m.jsx)(U,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f8b9b168.chunk.js.map