(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,n){},165:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(27),a=(n(147),n(9)),s=n(10),o=n(11),i=n(12),u=n(68),d=n(21),l=n(38),j=n.n(l),b="/inventory",h="/api/users",O="/api/products",p={getAllUsers:function(){return j.a.get(h)},postRegister:function(e){return j.a.post("".concat(h,"/register"),{username:e})},postLogin:function(e){return j.a.post("".concat(h,"/login"),e)},postLogout:function(){return j.a.post("".concat(h,"/logout"))},patchUser:function(e,t,n,r,c){return j.a.patch("".concat(h),{id:e,username:t,userType:n,previousPassword:r,newPassword:c})},deleteUser:function(e){return j.a.delete("".concat(h,"/").concat(e))}},f={getAllProducts:function(){return j.a.get(O)},postAddProduct:function(e){return j.a.post("".concat(O,"/add"),e)},patchProduct:function(e){return j.a.patch(O,e)},deleteProduct:function(e){return j.a.delete("".concat(O,"/delete/").concat(e))}},m=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null},x=function(e){localStorage.setItem("user",JSON.stringify(e))},v=(n(165),n(4)),g=function(e){var t=e.username,n=function(){p.postLogout().then((function(e){200===e.status?(localStorage.removeItem("user"),window.location.reload()):console.log("There was an error logging out...")}))};return Object(v.jsxs)("div",{id:"navbar",children:[Object(v.jsx)("div",{className:"left",children:Object(v.jsx)("span",{children:t})}),Object(v.jsxs)("div",{className:"middle",children:["admin"===m().userType?Object(v.jsx)("a",{href:"/users",className:"/users"===window.location.pathname?"active":"",children:"Accounts"}):Object(v.jsx)(v.Fragment,{}),Object(v.jsx)("a",{href:"/inventory",className:"/inventory"===window.location.pathname?"active":"",children:"Inventory"}),"user"===m().userType?Object(v.jsx)("a",{href:"/edit",className:"/edit"===window.location.pathname?"active":"",children:"Edit"}):Object(v.jsx)(v.Fragment,{})]}),Object(v.jsx)("button",{className:"logout-button",onClick:function(){return n()},children:"Log out"})]})},y=n(5),P=n(253),E=n(252),S=function(e){var t=e.errorMessage,n=e.visible,c=e.onOk,a=e.onCancel,s=Object(r.useState)(""),o=Object(y.a)(s,2),i=o[0],u=o[1],d=function(){u("")},l=function(){c(i),d()};return Object(v.jsxs)(P.a,{title:"Add Account",visible:n,onOk:l,okText:"Add",onCancel:function(){a(),d()},children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Username"})}),Object(v.jsx)(E.a,{value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter username",onKeyPress:function(e){return"Enter"===e.key&&l()}}),Object(v.jsx)("p",{style:{color:"#f00"},children:t}),Object(v.jsx)("p",{children:"Note: Password will automatically generated."})]})},w=n(254),k=n(255),C=w.a.Option,A=function(e){var t=e.user,n=e.errorMessage,c=e.visible,a=e.onOk,s=e.onCancel,o=Object(r.useState)(""),i=Object(y.a)(o,2),u=i[0],d=i[1],l=Object(r.useState)(""),j=Object(y.a)(l,2),b=j[0],h=j[1],O=Object(r.useState)(!1),p=Object(y.a)(O,2),f=p[0],x=p[1],g=Object(r.useState)(""),S=Object(y.a)(g,2),A=S[0],N=S[1],U=Object(r.useState)(""),V=Object(y.a)(U,2),D=V[0],M=V[1],K=Object(r.useState)(""),L=Object(y.a)(K,2),T=L[0],Y=L[1];Object(r.useEffect)((function(){B()}),[t]);var B=function(){null!=t&&(d(t.username),h(t.userType)),N(""),M(""),Y("")},I=function(){a(u,b,f,A,D,T),B()};return Object(v.jsxs)(P.a,{title:"Edit ".concat(u,"'s Password"),visible:c,onOk:I,okText:"Confirm",onCancel:function(){s(),B()},children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Username"})}),Object(v.jsx)(E.a,{value:u,onChange:function(e){return d(e.target.value)},placeholder:"Enter username",onKeyPress:function(e){return"Enter"===e.key&&I()}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Role"})}),Object(v.jsx)("br",{}),Object(v.jsxs)(w.a,{style:{width:"100%"},value:b,onChange:function(e){return h(e)},disabled:!t||m().username===t.username,children:[Object(v.jsx)(C,{value:"user",children:"user"}),Object(v.jsx)(C,{value:"admin",children:"admin"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(k.a,{checked:f,onChange:function(e){return x(e.target.checked)},children:"Edit Password"}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Previous Password"})}),Object(v.jsx)(E.a,{value:A,onChange:function(e){return N(e.target.value)},placeholder:"Enter previous password",onKeyPress:function(e){return"Enter"===e.key&&I()},disabled:!f}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"New Password"})}),Object(v.jsx)(E.a,{value:D,onChange:function(e){return M(e.target.value)},placeholder:"Enter current password",onKeyPress:function(e){return"Enter"===e.key&&I()},disabled:!f}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Confirm Password"})}),Object(v.jsx)(E.a,{value:T,onChange:function(e){return Y(e.target.value)},placeholder:"Confirm your password",onKeyPress:function(e){return"Enter"===e.key&&I()},disabled:!f}),Object(v.jsx)("p",{style:{color:"#f00"},children:n})]})},N=n(251),U=n(250),V=n(29),D=n.n(V),M=function(e){var t=e.errorMessage,n=e.visible,c=e.onOk,a=e.onCancel,s=Object(r.useState)(""),o=Object(y.a)(s,2),i=o[0],u=o[1],d=Object(r.useState)(1),l=Object(y.a)(d,2),j=l[0],b=l[1],h=Object(r.useState)(1),O=Object(y.a)(h,2),p=O[0],f=O[1],m=Object(r.useState)(""),x=Object(y.a)(m,2),g=x[0],S=x[1],w=Object(r.useState)(""),k=Object(y.a)(w,2),C=k[0],A=k[1],V=Object(r.useState)(D()()),M=Object(y.a)(V,2),K=M[0],L=M[1],T=function(){u(""),b(1),f(1),S(""),A(""),L(D()())},Y=function(){c(i,j,p,g,C,K),T()};return Object(v.jsxs)(P.a,{title:"Add Product",visible:n,onOk:Y,okText:"Add",onCancel:function(){a(),T()},children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Product Name"})}),Object(v.jsx)(E.a,{name:"product_name",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&Y()}}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Quantity"})}),Object(v.jsx)(N.a,{name:"quantity",min:1,value:j,onChange:function(e){return b(e)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&Y()},style:{width:"100%"}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Price"})}),Object(v.jsx)(N.a,{name:"price",min:1,value:p,onChange:function(e){return f(e)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&Y()},style:{width:"100%"}})]})]}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Supplier"})}),Object(v.jsx)(E.a,{name:"supplier",value:g,onChange:function(e){return S(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&Y()}}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Stock Location"})}),Object(v.jsx)(E.a,{name:"location",value:C,onChange:function(e){return A(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&Y()}}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Date Purchased"})}),Object(v.jsx)("br",{}),Object(v.jsx)(U.a,{name:"date_purchased",value:K,format:"MMMM DD, YYYY",onChange:function(e){return L(e)},style:{width:"100%"}}),Object(v.jsx)("p",{style:{color:"#f00"},children:t})]})},K=function(e){var t=e.product,n=e.errorMessage,c=e.visible,a=e.onOk,s=e.onCancel,o=Object(r.useState)(""),i=Object(y.a)(o,2),u=i[0],d=i[1],l=Object(r.useState)(1),j=Object(y.a)(l,2),b=j[0],h=j[1],O=Object(r.useState)(1),p=Object(y.a)(O,2),f=p[0],m=p[1],x=Object(r.useState)(""),g=Object(y.a)(x,2),S=g[0],w=g[1],k=Object(r.useState)(""),C=Object(y.a)(k,2),A=C[0],V=C[1],M=Object(r.useState)(D()()),K=Object(y.a)(M,2),L=K[0],T=K[1];Object(r.useEffect)((function(){Y()}),[t]);var Y=function(){t&&(d(t.name),h(t.quantity),m(t.price),w(t.supplier),V(t.location),console.log(t.date),T(D()(t.date)))},B=function(){a(u,b,f,S,A,L),Y()};return Object(v.jsxs)(P.a,{title:"Edit Product",visible:c,onOk:B,okText:"Edit",onCancel:function(){s(),Y()},children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Product Name"})}),Object(v.jsx)(E.a,{name:"product_name",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&B()}}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Quantity"})}),Object(v.jsx)(N.a,{name:"quantity",min:1,value:b,onChange:function(e){return h(e)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&B()},style:{width:"100%"}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Price"})}),Object(v.jsx)(N.a,{name:"price",min:1,value:f,onChange:function(e){return m(e)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&B()},style:{width:"100%"}})]})]}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Supplier"})}),Object(v.jsx)(E.a,{name:"supplier",value:S,onChange:function(e){return w(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&B()}}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Stock Location"})}),Object(v.jsx)(E.a,{name:"location",value:A,onChange:function(e){return V(e.target.value)},placeholder:"Enter product name",onKeyPress:function(e){return"Enter"===e.key&&B()}}),Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Date Purchased"})}),Object(v.jsx)("br",{}),Object(v.jsx)(U.a,{name:"date_purchased",value:L,format:"MMMM DD, YYYY",onChange:function(e){return T(e)},style:{width:"100%"}}),Object(v.jsx)("p",{style:{color:"#f00"},children:n})]})},L=n.p+"static/media/Login Image.6954d3e8.svg",T=(n(236),function(){var e=Object(r.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(y.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(""),d=Object(y.a)(u,2),l=d[0],j=d[1],b=function(){var e={username:n,password:o};""!==n?""!==o?p.postLogin(e).then((function(e){if(200===e.status){var t=e.data.result;x(t),window.location.reload()}})).catch((function(e){401===e.response.status&&j("Invalid username or password")})):j("Password is empty"):j("Username is empty")};return Object(v.jsx)("div",{id:"login-page",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("p",{className:"title",children:"Login"}),Object(v.jsx)("p",{className:"sub-title",children:"Welcome back!"}),Object(v.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&b()}}),Object(v.jsx)("input",{type:"password",placeholder:"Password",value:o,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&b()}}),Object(v.jsx)("p",{className:"error-message",children:l}),Object(v.jsx)("img",{src:L,alt:"Login"}),Object(v.jsx)("button",{onClick:function(){return b()},children:"Sign in"})]})})}),Y=n(39),B=n(7),I=n(24),q=n.n(I),_=n.p+"static/media/Edit Icon.7ee14592.svg",F=n.p+"static/media/Trash Icon.5db8102e.svg",Q=(n(237),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={users:[],searchValue:"",count:0,addAccountVisible:!1,editAccountVisible:!1,addAccountError:"",editAccountError:"",toBeEdited:null},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.getAllUsers().then((function(t){var n=t.data.result;e.setState({users:n,count:n.length})})).catch((function(e){console.log(e)}))}},{key:"onEdit",value:function(e,t,n,r,c,a){var s=this,o=this.state,i=o.toBeEdited,u=o.users;if(null!=i){if(""===e||null===e)return void this.setState({editAccountError:"Username cannot be empty"});if(e.length<6)return void this.setState({editAccountError:"Username has to be atleast 6 characters"});if(e.length>30)return void this.setState({editAccountError:"Username has to be atmost 30 characters"});if(e.includes(" "))return void this.setState({editAccountError:"Username cannot contain a space"});if(!n&&e===i.username&&t===i.userType)return void this.setState({editAccountError:"Cannot proceed. No changes has been done"});if("user"!==t&&"admin"!==t)return void this.setState({editAccountError:"Role can only be either `user` or `admin`"});if(n){if(""===r||null===r)return void this.setState({editAccountError:"Previous password cannot be empty"});if(""===c||null===c)return void this.setState({editAccountError:"New password cannot be empty"});if(""===a||null===a)return void this.setState({editAccountError:"Confirm password cannot be empty"});if(r.length<6||c.length<6||a.length<6)return void this.setState({editAccountError:"Password has to be atleast 6 characters"});if(r.length>30||c.length>30||a.length>30)return void this.setState({editAccountError:"Password has to be atmost 30 characters"});if(c!==a)return void this.setState({editAccountError:"New password and confirm password doesn't match"})}else r=null,c=null;p.patchUser(i._id,e,t,r,c).then((function(t){var n=t.data.result;alert("Edit was successful");var r=u.indexOf(i);m().username===i.username&&(x(n),s.props.updateUser(e)),s.setState({editAccountVisible:!1,toBeEdited:null,users:[].concat(Object(B.a)(u.slice(0,r)),[n],Object(B.a)(u.slice(r+1))),editAccountError:""})})).catch((function(e){var t=e.response.data;s.setState({editAccountError:t})}))}}},{key:"onDelete",value:function(e){var t=this,n=this.state.users;P.a.confirm({title:"Are you sure you want to delete ".concat(e.username),onOk:function(){var r=Object(Y.a)(q.a.mark((function r(){return q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:p.deleteUser(e._id).then((function(){var r=n.indexOf(e),c=[].concat(Object(B.a)(n.slice(0,r)),Object(B.a)(n.slice(r+1)));t.setState({users:c,count:c.length}),alert("Deletion was successful")})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()})}},{key:"addAccount",value:function(e){var t=this,n=this.state,r=n.users,c=n.count;""!==e&&null!==e?e.length<6?this.setState({addAccountError:"Username has to be atleast 6 characters"}):e.length>30?this.setState({addAccountError:"Username has to be atmost 30 characters"}):e.includes(" ")?this.setState({addAccountError:"Username cannot contain a space"}):p.postRegister(e).then((function(e){var n=e.data.result;t.setState({users:[].concat(Object(B.a)(r),[n]),count:c+1,addAccountVisible:!1,addAccountError:""}),P.a.info({title:"Password",content:Object(v.jsxs)("div",{children:["Password: ",n.password]})})})).catch((function(e){11e3===e.response.data.error.code&&t.setState({addAccountError:"Username already exists"})})):this.setState({addAccountError:"Username cannot be empty"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.searchValue,c=t.count,a=t.addAccountVisible,s=t.addAccountError,o=t.editAccountVisible,i=t.editAccountError,u=t.toBeEdited;return Object(v.jsxs)("div",{id:"users-page",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:"search-input",placeholder:"Search",onChange:function(t){return e.setState({searchValue:t.target.value})},value:r}),Object(v.jsx)("button",{className:"add-account-button",onClick:function(){return e.setState({addAccountVisible:!0})},children:"Add Account"})]}),Object(v.jsxs)("div",{className:"user-stats",children:["Accounts: ",Object(v.jsx)("span",{className:"count",children:c})]})]}),Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Username"}),Object(v.jsx)("th",{children:"Role"}),Object(v.jsx)("th",{children:"Operations"})]})}),Object(v.jsx)("tbody",{children:n.filter((function(e){return e.username.toLowerCase().includes(r.toLowerCase())})).map((function(t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t.username}),Object(v.jsx)("td",{children:t.userType}),Object(v.jsxs)("td",{children:[Object(v.jsx)("button",{className:"edit-button",onClick:function(){return e.setState({editAccountVisible:!0,toBeEdited:t})},children:Object(v.jsx)("img",{src:_,alt:"Edit"})}),Object(v.jsx)("button",{className:"delete-button",onClick:function(){return e.onDelete(t)},disabled:"admin"===t,children:Object(v.jsx)("img",{src:F,alt:"Delete"})})]})]})}))})]}),Object(v.jsx)(S,{visible:a,onOk:function(t){return e.addAccount(t)},onCancel:function(){return e.setState({addAccountVisible:!1,addAccountError:""})},errorMessage:s}),Object(v.jsx)(A,{user:u,visible:o,onOk:function(t,n,r,c,a,s){return e.onEdit(t,n,r,c,a,s)},onCancel:function(){return e.setState({editAccountVisible:!1,editAccountError:""})},errorMessage:i})]})}}]),n}(r.Component)),R=(n(238),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={searchValue:"",products:[],count:0,toBeEdited:null,addProductVisible:!1,addProductError:"",editProductVisible:!1,editProductError:""},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.getAllProducts().then((function(t){var n=t.data.result;e.setState({products:n,count:n.length})}))}},{key:"addProduct",value:function(e,t,n,r,c,a){var s=this,o=this.state,i=o.products,u=o.count;if(null!==e&&""!==e)if(t<1)this.setState({addProductError:"Quantity has to be greater than 0"});else if(n<1)this.setState({addProductError:"Price has to be greater than 0"});else if(null!==r&&""!==r)if(null!==c&&""!==c)if(null!==a){var d={supplier:r,location:c,date:a,name:e,quantity:t,price:n};f.postAddProduct(d).then((function(e){var t=e.data.result;s.setState({products:[].concat(Object(B.a)(i),[t]),count:u+1,addProductVisible:!1,addProductError:""}),alert("Product has been successfully added.")})).catch((function(e){11e3===e.response.data.error.code&&s.setState({addProductError:"Product name already exists"})}))}else this.setState({addProductError:"Date Purchased cannot be empty"});else this.setState({addProductError:"Stock Location cannot be empty"});else this.setState({addProductError:"Supplier cannot empty"});else this.setState({addProductError:"Product Name cannot be empty"})}},{key:"editProduct",value:function(e,t,n,r,c,a){var s=this,o=this.state,i=o.products,u=o.toBeEdited;if(null!==e&&""!==e)if(t<1)this.setState({editProductError:"Quantity has to be greater than 0"});else if(n<1)this.setState({editProductError:"Price has to be greater than 0"});else if(null!==r&&""!==r)if(null!==c&&""!==c)if(null!==a){var d=D()(u.date),l=D()(a);if(d.format("MMMM DD, YYYY")!==l.format("MMMM DD, YYYY")||u.name!==e||u.quantity!==t||u.price!==n||u.price!==n||u.location!==c||u.supplier!==r){var j={supplier:r,location:c,date:a,name:e,quantity:t,prevName:u.name,price:n};f.patchProduct(j).then((function(e){var t=e.data.result;console.log(t),alert("Product has been successfully updated.");var n=i.indexOf(u);s.setState({products:[].concat(Object(B.a)(i.slice(0,n)),[t],Object(B.a)(i.slice(n+1))),toBeEdited:null,editProductVisible:!1,editProductError:""})})).catch((function(e){var t=e.response.data;s.setState({editProductError:t})}))}else this.setState({editProductError:"There were no changes made"})}else this.setState({editProductError:"Date Purchased cannot be empty"});else this.setState({editProductError:"Stock Location cannot be empty"});else this.setState({editProductError:"Supplier cannot be empty"});else this.setState({editProductError:"Product Name cannot be empty"})}},{key:"onDelete",value:function(e){var t=this,n=this.state.products;P.a.confirm({title:"Are you sure you want to delete ".concat(e.name),onOk:function(){var r=Object(Y.a)(q.a.mark((function r(){return q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:f.deleteProduct(e.name).then((function(){var r=n.indexOf(e),c=[].concat(Object(B.a)(n.slice(0,r)),Object(B.a)(n.slice(r+1)));t.setState({products:c,count:c.length}),alert("Deletion was successful")})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchValue,r=t.products,c=t.count,a=t.addProductVisible,s=t.addProductError,o=t.editProductVisible,i=t.editProductError,u=t.toBeEdited;return Object(v.jsxs)("div",{id:"admin-inventory",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:"search-input",placeholder:"Search",onChange:function(t){return e.setState({searchValue:t.target.value})},value:n}),Object(v.jsx)("button",{className:"add-product-button",onClick:function(){return e.setState({addProductVisible:!0})},children:"Add Product"})]}),Object(v.jsxs)("div",{className:"product-stats",children:["Products: ",Object(v.jsx)("span",{className:"count",children:c})]})]}),Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Date Purchased"}),Object(v.jsx)("th",{children:"Product Name"}),Object(v.jsx)("th",{children:"Supplier"}),Object(v.jsx)("th",{children:"Quantity"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Location"}),Object(v.jsx)("th",{children:"Operations"})]})}),Object(v.jsx)("tbody",{children:r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t.dateString}),Object(v.jsx)("td",{children:t.name}),Object(v.jsx)("td",{children:t.supplier}),Object(v.jsx)("td",{children:t.quantity}),Object(v.jsxs)("td",{children:["P ",parseFloat(t.price).toLocaleString("en-US",{minimumFractionDigits:2})]}),Object(v.jsx)("td",{children:t.location}),Object(v.jsxs)("td",{children:[Object(v.jsx)("button",{className:"edit-button",onClick:function(){return e.setState({editProductVisible:!0,toBeEdited:t})},children:Object(v.jsx)("img",{src:_,alt:"Edit"})}),Object(v.jsx)("button",{className:"delete-button",onClick:function(){return e.onDelete(t)},children:Object(v.jsx)("img",{src:F,alt:"Delete"})})]})]},t.name)}))})]}),Object(v.jsx)(M,{errorMessage:s,visible:a,onOk:function(t,n,r,c,a,s){return e.addProduct(t,n,r,c,a,s)},onCancel:function(){return e.setState({addProductVisible:!1,addProductError:""})}}),Object(v.jsx)(K,{product:u,errorMessage:i,visible:o,onOk:function(t,n,r,c,a,s){return e.editProduct(t,n,r,c,a,s)},onCancel:function(){return e.setState({editProductVisible:!1,editProductError:""})}})]})}}]),n}(r.Component)),J=(n(239),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={searchValue:"",products:[]},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.getAllProducts().then((function(t){var n=t.data.result;e.setState({products:n})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchValue,r=t.products;return Object(v.jsxs)("div",{id:"user-inventory",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("input",{className:"search-input",placeholder:"Search",onChange:function(t){return e.setState({searchValue:t.target.value})},value:n}),Object(v.jsx)(v.Fragment,{})]}),Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Product Name"}),Object(v.jsx)("th",{children:"Supplier"}),Object(v.jsx)("th",{children:"Quantity"}),Object(v.jsx)("th",{children:"Date Purchased"})]})}),Object(v.jsx)("tbody",{children:r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("td",{children:e.supplier}),Object(v.jsx)("td",{children:e.quantity}),Object(v.jsx)("td",{children:e.dateString})]},e.name)}))})]})]})}}]),n}(r.Component)),W=(n(240),function(e){var t=e.updateUser,n=m(),c=Object(r.useState)(n.username),a=Object(y.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),u=Object(y.a)(i,2),d=u[0],l=u[1],j=Object(r.useState)(!1),b=Object(y.a)(j,2),h=b[0],O=b[1],f=Object(r.useState)(""),g=Object(y.a)(f,2),P=g[0],E=g[1],S=Object(r.useState)(""),w=Object(y.a)(S,2),C=w[0],A=w[1],N=Object(r.useState)(""),U=Object(y.a)(N,2),V=U[0],D=U[1],M=function(e){if(e.preventDefault(),l(""),E(""),A(""),""!==s&&null!==s){if(s.length<6)return D("Username has to be atleast 6 characters"),void o(n.username);if(s.length>30)return D("Username has to be atmost 30 characters"),void o(n.username);if(s.includes(" "))return D("Username cannot contain a space"),void o(n.username);if(h){if(""===d||null===d)return void D("Previous password cannot be empty");if(""===P||null===P)return void D("Previous password cannot be empty");if(""===C||null===C)return void D("Previous password cannot be empty");if(d.length<6||P.length<6||C.length<6)return void D("Password has to be atleast 6 characters");if(d.length>30||P.length>30||C.length>30)return void D("Password has to be atmost 30 characters");if(d===P&&d===C)return void D("Previous password and the new password is the same");if(P!==C)return void D("New password and confirm new password must be the same.")}else if(s===n.username)return void D("Username cannot be the same");p.patchUser(n._id,s,"user",h?d:null,h?P:null).then((function(e){var n=e.data.result;x(n),D(""),t(n.username),alert("Successfully edited the account")})).catch((function(e){var t=e.response.data;D(t)}))}else D("Username cannot be empty")(n.username)};return Object(v.jsxs)("div",{id:"user-edit-account",children:[Object(v.jsx)("h1",{children:"Edit Account"}),Object(v.jsx)("input",{placeholder:"Username",value:s,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&M(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(k.a,{checked:h,onChange:function(e){return O(e.target.checked)},children:"Edit Password"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{placeholder:"Previous Password",value:d,onChange:function(e){return l(e.target.value)},disabled:!h,onKeyPress:function(e){return"Enter"===e.key&&M(e)}}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{placeholder:"New Password",value:P,onChange:function(e){return E(e.target.value)},disabled:!h,onKeyPress:function(e){return"Enter"===e.key&&M(e)}}),Object(v.jsx)("input",{placeholder:"Confirm New Password",value:C,onChange:function(e){return A(e.target.value)},disabled:!h,onKeyPress:function(e){return"Enter"===e.key&&M(e)}}),Object(v.jsx)("div",{className:"error-message",children:V}),Object(v.jsx)("button",{className:"confirm-button",onClick:function(e){return M(e)},children:"Confirm"})]})}),z=n(2),G=n(14),H=["component"],X=function(e){var t=e.component,n=Object(G.a)(e,H);return Object(v.jsx)(d.b,Object(z.a)(Object(z.a)({},n),{},{render:function(e){return m()?"user"===m().userType?Object(v.jsx)(d.a,{to:{pathname:b,state:{from:e.location}}}):Object(v.jsx)(t,Object(z.a)({},e)):Object(v.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Z=["component"],$=function(e){var t=e.component,n=Object(G.a)(e,Z);return Object(v.jsx)(d.b,Object(z.a)(Object(z.a)({},n),{},{render:function(e){return m()?Object(v.jsx)(t,Object(z.a)({},e)):Object(v.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ee=["component"],te=function(e){var t=e.component,n=Object(G.a)(e,ee);return Object(v.jsx)(d.b,Object(z.a)(Object(z.a)({},n),{},{render:function(e){return m()?"admin"===m().userType?Object(v.jsx)(d.a,{to:{pathname:"/users"}}):Object(v.jsx)(d.a,{to:{pathname:b}}):Object(v.jsx)(t,Object(z.a)({},e))}}))},ne=(n(248),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={username:""},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({username:m()?m().username:""})}},{key:"render",value:function(){var e=this,t=this.state.username;return Object(v.jsx)(u.a,{children:Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)(d.d,{children:[Object(v.jsx)(X,{path:"/users",component:function(){return Object(v.jsx)(g,{username:t})}}),Object(v.jsx)($,{path:"/inventory",component:function(){return Object(v.jsx)(g,{username:t})}}),Object(v.jsx)($,{path:"/edit",component:function(){return Object(v.jsx)(g,{username:t})}}),Object(v.jsx)(d.b,{path:"/",component:function(){return Object(v.jsx)(v.Fragment,{})}})]}),Object(v.jsxs)(d.d,{children:[Object(v.jsx)(X,{path:"/users",component:function(){return Object(v.jsx)(Q,{updateUser:function(t){return e.setState({username:t})}})}}),Object(v.jsx)($,{path:"/inventory",component:m()?"user"===m().userType?J:R:null}),Object(v.jsx)($,{path:"/edit",component:function(){return Object(v.jsx)(W,{updateUser:function(t){return e.setState({username:t})}})}}),Object(v.jsx)(te,{path:"/",component:T})]})]})})}}]),n}(r.Component));Object(c.render)(Object(v.jsx)(ne,{}),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.7b97b190.chunk.js.map