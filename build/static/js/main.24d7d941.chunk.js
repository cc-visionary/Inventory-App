(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){},127:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(22),c=(n(109),n(9)),a=n(10),o=n(11),i=n(12),u=n(49),l=n(16),d=n(40),j=n.n(d),b="/api/users",h={getAllUsers:function(){return j.a.get(b)},postRegister:function(e){return j.a.post("".concat(b,"/register"),{username:e})},postLogin:function(e){return j.a.post("".concat(b,"/login"),e)},postLogout:function(){return j.a.post("".concat(b,"/logout"))},patchUser:function(e,t,n){return j.a.patch("".concat(b),{username:e,previousPassword:t,newPassword:n})},deleteUser:function(e){return j.a.delete("".concat(b,"/").concat(e))}},O=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null},p=(n(127),n(4)),f=function(){var e=function(){h.postLogout().then((function(e){200===e.status?(localStorage.removeItem("user"),window.location.reload()):console.log("There was an error logging out...")}))};return Object(p.jsxs)("div",{id:"navbar",children:[Object(p.jsx)("div",{className:"left"}),Object(p.jsxs)("div",{className:"middle",children:["admin"===O().userType?Object(p.jsx)("a",{href:"/users",className:"/users"===window.location.pathname?"active":"",children:"Accounts"}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)("a",{href:"/inventory",className:"/inventory"===window.location.pathname?"active":"",children:"Inventory"})]}),Object(p.jsx)("button",{className:"logout-button",onClick:function(){return e()},children:"Log out"})]})},m=n(5),x=n(144),v=n(143),g=function(e){var t=e.errorMessage,n=e.visible,s=e.onOk,c=e.onCancel,a=Object(r.useState)(""),o=Object(m.a)(a,2),i=o[0],u=o[1],l=function(){u("")},d=function(){s(i),l()};return Object(p.jsxs)(x.a,{title:"Add Account",visible:n,onOk:d,okText:"Create",onCancel:function(){c(),l()},children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Username"})}),Object(p.jsx)(v.a,{value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter username",onKeyPress:function(e){return"Enter"===e.key&&d()}}),Object(p.jsx)("p",{style:{color:"#f00"},children:t}),Object(p.jsx)("p",{children:"Note: Password will automatically generated."})]})},w=function(e){var t=e.username,n=e.errorMessage,s=e.visible,c=e.onOk,a=e.onCancel,o=Object(r.useState)(""),i=Object(m.a)(o,2),u=i[0],l=i[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],h=j[1],O=Object(r.useState)(""),f=Object(m.a)(O,2),g=f[0],w=f[1],y=function(){l(""),h(""),w("")},E=function(){c(u,b,g),y()};return Object(p.jsxs)(x.a,{title:"Edit ".concat(t,"'s Password"),visible:s,onOk:E,okText:"Confirm",onCancel:function(){a(),y()},children:[Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Previous Password"})}),Object(p.jsx)(v.a,{value:u,onChange:function(e){return l(e.target.value)},placeholder:"Enter previous password",onKeyPress:function(e){return"Enter"===e.key&&E()}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"New Password"})}),Object(p.jsx)(v.a,{value:b,onChange:function(e){return h(e.target.value)},placeholder:"Enter current password",onKeyPress:function(e){return"Enter"===e.key&&E()}}),Object(p.jsx)("label",{children:Object(p.jsx)("strong",{children:"Confirm Password"})}),Object(p.jsx)(v.a,{value:g,onChange:function(e){return w(e.target.value)},placeholder:"Confirm your password",onKeyPress:function(e){return"Enter"===e.key&&E()}}),Object(p.jsx)("p",{style:{color:"#f00"},children:n})]})},y=n.p+"static/media/Login Image.6954d3e8.svg",E=(n(131),function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(m.a)(c,2),o=a[0],i=a[1],u=Object(r.useState)(""),l=Object(m.a)(u,2),d=l[0],j=l[1],b=function(){var e={username:n,password:o};""!==n?""!==o?h.postLogin(e).then((function(e){200===e.status&&(!function(e){localStorage.setItem("user",JSON.stringify(e))}({username:n,userType:e.data.userType}),window.location.reload())})).catch((function(e){401===e.response.status&&j("Invalid username or password")})):j("Password is empty"):j("Username is empty")};return Object(p.jsx)("div",{id:"login-page",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("p",{className:"title",children:"Login"}),Object(p.jsx)("p",{className:"sub-title",children:"Welcome back!"}),Object(p.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&b()}}),Object(p.jsx)("input",{type:"password",placeholder:"Password",value:o,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&b()}}),Object(p.jsx)("p",{className:"error-message",children:d}),Object(p.jsx)("img",{src:y,alt:"Login"}),Object(p.jsx)("button",{onClick:function(){return b()},children:"Sign in"})]})})}),P=n(6),S=n(39),k=n(21),C=n.n(k),A=n.p+"static/media/Edit Icon.7ee14592.svg",N=n.p+"static/media/Trash Icon.5db8102e.svg",U=(n(132),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={users:[],searchValue:"",count:0,addAccountVisible:!1,editPasswordVisible:!1,addAccountError:"",editPasswordError:"",toBeEdited:null},r}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.getAllUsers().then((function(t){var n=t.data.result;e.setState({users:n.map((function(e){return{username:e.username,userType:e.userType}})),count:n.length})})).catch((function(e){console.log(e)}))}},{key:"onEdit",value:function(e,t,n){var r=this,s=this.state.toBeEdited;if(null!=s){if(""===e||null===e)return void this.setState({editPasswordError:"Previous password is empty"});if(""===t||null===t)return void this.setState({editPasswordError:"New password is empty"});if(""===n||null===n)return void this.setState({editPasswordError:"Confirm password is empty"});if(e.length<6||t.length<6||n.length<6)return void this.setState({editPasswordError:"Password has to be atleast 6 characters"});if(e.length>30||t.length>30||n.length>30)return void this.setState({editPasswordError:"Password has to be atmost 30 characters"});if(t!==n)return void this.setState({editPasswordError:"New password and confirm password doesn't match"});h.patchUser(s,e,t).then((function(e){r.setState({editPasswordVisible:!1,toBeEdited:null})})).catch((function(e){var t=e.response.data;r.setState({editPasswordError:t})}))}}},{key:"onDelete",value:function(e){var t=this,n=this.state.users;x.a.confirm({title:"Are you sure you want to delete ".concat(e.username),onOk:function(){var r=Object(S.a)(C.a.mark((function r(){return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:h.deleteUser(e.username).then((function(r){var s=n.indexOf(e),c=[].concat(Object(P.a)(n.slice(0,s)),Object(P.a)(n.slice(s+1)));t.setState({users:c,count:c.length})})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()})}},{key:"addAccount",value:function(e){var t=this;""!==e&&null!==e?e.length<6?this.setState({addAccountError:"Username has to be atleast 6 characters"}):e.length>30?this.setState({addAccountError:"Username has to be atmost 30 characters"}):h.postRegister(e).then((function(n){var r=n.data.password;t.setState({users:[].concat(Object(P.a)(t.state.users),[{username:e,userType:"user"}]),count:t.state.count+1,addAccountVisible:!1,addAccountError:""}),x.a.info({title:"Password",content:Object(p.jsxs)("div",{children:["Password: ",r]})})})).catch((function(e){11e3===e.response.data.error.code&&t.setState({addAccountError:"Username already exists"})})):this.setState({addAccountError:"Username is empty"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.searchValue,s=t.count,c=t.addAccountVisible,a=t.addAccountError,o=t.editPasswordVisible,i=t.editPasswordError,u=t.toBeEdited;return Object(p.jsxs)("div",{id:"users-page",children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{className:"search-input",placeholder:"Search",onChange:function(t){return e.setState({searchValue:t.target.value})},value:r}),Object(p.jsx)("button",{className:"add-account-button",onClick:function(){return e.setState({addAccountVisible:!0})},children:"Add Account"})]}),Object(p.jsxs)("div",{className:"user-stats",children:["Accounts: ",Object(p.jsx)("span",{className:"count",children:s})]})]}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Username"}),Object(p.jsx)("th",{children:"Role"}),Object(p.jsx)("th",{children:"Operations"})]})}),Object(p.jsx)("tbody",{children:n.filter((function(e){return e.username.includes(r)})).map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.username}),Object(p.jsx)("td",{children:t.userType}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{className:"edit-button",onClick:function(){return e.setState({editPasswordVisible:!0,toBeEdited:t.username})},children:Object(p.jsx)("img",{src:A,alt:"Edit"})}),Object(p.jsx)("button",{className:"delete-button",onClick:function(){return e.onDelete(t)},disabled:"admin"===t,children:Object(p.jsx)("img",{src:N,alt:"Delete"})})]})]})}))})]}),Object(p.jsx)(g,{visible:c,onOk:function(t){return e.addAccount(t)},onCancel:function(){return e.setState({addAccountVisible:!1})},errorMessage:a}),Object(p.jsx)(w,{username:u,visible:o,onOk:function(t,n,r){return e.onEdit(t,n,r)},onCancel:function(){return e.setState({editPasswordVisible:!1})},errorMessage:i})]})}}]),n}(r.Component)),T=(n(133),function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Inventory Page"})})}),V=n(1),I=n(17),L="/inventory",B=["component"],K=function(e){var t=e.component,n=Object(I.a)(e,B);return Object(p.jsx)(l.b,Object(V.a)(Object(V.a)({},n),{},{render:function(e){return O()?"user"===O().userType?Object(p.jsx)(l.a,{to:{pathname:L,state:{from:e.location}}}):Object(p.jsx)(t,Object(V.a)({},e)):Object(p.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},M=["component"],D=function(e){var t=e.component,n=Object(I.a)(e,M);return Object(p.jsx)(l.b,Object(V.a)(Object(V.a)({},n),{},{render:function(e){return O()?Object(p.jsx)(t,Object(V.a)({},e)):Object(p.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},J=["component"],R=function(e){var t=e.component,n=Object(I.a)(e,J);return Object(p.jsx)(l.b,Object(V.a)(Object(V.a)({},n),{},{render:function(e){return O()?"admin"===O().userType?Object(p.jsx)(l.a,{to:{pathname:"/users"}}):Object(p.jsx)(l.a,{to:{pathname:L}}):Object(p.jsx)(t,Object(V.a)({},e))}}))},F=(n(141),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)(l.d,{children:[Object(p.jsx)(K,{path:"/users",component:f}),Object(p.jsx)(D,{path:"/inventory",component:f}),Object(p.jsx)(l.b,{path:"/",component:function(){return Object(p.jsx)(p.Fragment,{})}})]}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(K,{path:"/users",component:U}),Object(p.jsx)(D,{path:"/inventory",component:T}),Object(p.jsx)(R,{path:"/",component:E})]})]})})}}]),n}(r.Component));Object(s.render)(Object(p.jsx)(F,{}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.24d7d941.chunk.js.map