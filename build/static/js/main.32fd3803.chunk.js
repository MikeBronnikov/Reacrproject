/*! For license information please see main.32fd3803.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);a(72);var n=a(0),r=a.n(n),s=a(32),i=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(8),o=a(20),l=a(1),u={dialogs:[{id:1,name:"Anna",avatarSrc:"https://fsd.multiurok.ru/viewImage.php?image=http://s.zefirka.net/images/2017-05-01/kak-chelovek-priruchal-i-odomashnival-zhivotnyx/kak-chelovek-priruchal-i-odomashnival-zhivotnyx-6.png"},{id:2,name:"Lola",avatarSrc:"https://yt3.ggpht.com/a/AATXAJxJkwo0-2wjdP6A3BWczaSxZcfEaed-Z7UPk1USGQ=s900-c-k-c0xffffffff-no-rj-mo"},{id:3,name:"Adrian",avatarSrc:"https://montessoriself.ru/wp-content/uploads/2016/05/m17.jpg"}],messages:["hello"],messageTexting:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-MESSAGE-TEXT":var a=Object(l.a)({},e);return a.messageTexting=t.text,a;case"SEND-MESSAGE":var n={text:e.messageTexting,sender:"user"},r=Object(l.a)({},e);return r.messages=Object(o.a)(e.messages),r.messages.push(n),r;default:return e}},m=a(5),d=a.n(m),f=a(14),g=a(58).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a37d76b8-f757-4ade-b7a2-1a76f12fe03e"}}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return g.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return g.post("follow/".concat(e))},b=function(e){return g.delete("follow/".concat(e))},v=function(e){return g.get("profile/"+e)},_=function(e){return g.get("profile/status/"+e)},w=function(e){return g.put("profile/status",{status:e})},O=function(){return g.get("auth/me")},x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.post("auth/login",{email:e,password:t,rememberMe:a})},j=function(){return g.delete("auth/login")},S=a(24),C=a.n(S),N={posts:[{id:1,text:"Lorem lor sit amet consece error obcaecati!",likesCount:12,avatarSrc:"https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg"},{id:2,text:"\u041f\u0440\u0438\u0432\u0435\u0442 D\u0413\u0443\u0431\u043a\u0430 \u0411\u043e\u0431\u0447\u0430\u043d\u0441\u043a\u0438\u0439!",likesCount:21,avatarSrc:"https://pbs.twimg.com/media/CWN6WdbWEAAJw8h.jpg:large"}],profile:null,status:null,isFetching:!1},P=function(e){return{type:"SET_PROFILE",profile:e}},T=function(e){return{type:"SET_FETCHING",isFetching:e}},I=function(e){return{type:"SET_STATUS",status:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"SET_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"CREATE-POST-OBJECT":var a={id:5,text:t.text,likesCount:0,avatarSrc:e.profile.photos.small?e.profile.photos.small:C.a},n=Object(l.a)({},e);return n.posts=Object(o.a)(e.posts),n.posts.unshift(a),n;default:return e}},y={friends:[{name:"Skwidvard",avatarSrc:"https://i.pinimg.com/736x/b7/61/b8/b761b89e7349e353c5330af6dbdc0ada.jpg",isOnline:!0,index:0},{name:"Patrik",avatarSrc:"https://i.pinimg.com/736x/9e/d9/88/9ed98867ada260f6113e3a62c90b7159.jpg",isOnline:!1,index:1}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NONE":default:return e}},A={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},U=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:"SET_CURRENT_PAGE",currentPage:e}},G=function(e){return{type:"FOLLOW",id:e}},z=function(e){return{type:"UNFOLLOW",id:e}},D=function(e){return{type:"SET_USERS",users:e}},W=function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}},M=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":var a=Object(l.a)({},e);return a.users=e.users.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e})),a;case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(l.a)(Object(l.a)({},e),{},{users:Object(o.a)(t.users),totalUsersCount:t.totalCount});case"SET_TOTAL_COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.totalCount});case"SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"TOGGLE_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},H={id:null,login:null,email:null,isAuth:!1,isFetching:!1},Z=function(e,t,a,n){return{type:"SET_AUTH_DATA",payload:{email:a,id:e,login:t,isAuth:n}}},B=function(e){return{type:"SET_FETCHING",isFetching:e}},J=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return a=e.sent,console.log(a),0===a.data.resultCode&&(n=a.data.data,r=n.id,s=n.login,i=n.email,t(Z(r,s,i,!0))),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_DATA":return Object(l.a)(Object(l.a)({},e),t.payload);case"SET_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});default:return e}},q=a(59),Y={isInitialized:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCEED":return Object(l.a)(Object(l.a)({},e),{},{isInitialized:!0});default:return e}},V=Object(c.c)({profilePage:k,dialogsPage:p,friendsPage:F,usersPage:R,auth:X,app:K}),Q=Object(c.e)(V,Object(c.a)(q.a)),$=a(4),ee=(a(96),a(97),a(3)),te=a(2),ae=a(61),ne=a.n(ae),re=function(e){return r.a.createElement($.b,{to:"/dialogs/"+e.id},r.a.createElement("div",{className:ne.a.item},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:e.avatarSrc}),e.name))))},se=a(41),ie=a.n(se),ce=a(62),oe=a.n(ce),le=function(e){return r.a.createElement("div",{className:oe.a.wrapper},r.a.createElement("p",null,e.text))},ue=a(63),pe=a.n(ue),me=function(){return r.a.createElement("div",{className:pe.a.wrapper},"Hello")},de=a(42),fe=a.n(de),ge=function(e){var t=r.a.createRef();return r.a.createElement($.a,null,r.a.createElement("div",{className:fe.a.wrapper},r.a.createElement(ee.b,{path:"/dialogs/1",component:me}),r.a.createElement("div",{className:fe.a.writtingItems},r.a.createElement("textarea",{onChange:function(){var a=t.current.value;e.updatemessagetext(a)},ref:t,className:fe.a.textarea,value:e.messageTexting,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",spellcheck:"false",name:"",id:"",cols:"30",rows:"10"}),r.a.createElement("button",{onClick:function(){e.addMessage()}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))},Ee=Object(te.b)((function(e){return{messageTexting:e.messageTexting}}),(function(e){return{addMessage:function(){e({type:"SEND-MESSAGE"})},updatemessagetext:function(t){e(function(e){return{type:"UPDATE-MESSAGE-TEXT",text:e}}(t))}}}))(ge),he=function(e){var t=e.messages.map((function(e){return r.a.createElement(le,{text:e.text})})),a=e.dialogs.map((function(e){return r.a.createElement(re,{name:e.name,id:e.id,avatarSrc:e.avatarSrc})}));return r.a.createElement("div",{className:ie.a.wrapper},r.a.createElement("div",{className:ie.a.dialogs},r.a.createElement("p",null,"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"),a),r.a.createElement("div",{className:ie.a.chatwrapper},t,r.a.createElement(Ee,null)))},be=function(e){return{isAuth:e.auth.isAuth}},ve=function(e){return Object(te.b)(be)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(ee.a,{to:"/login"})}))},_e=Object(c.d)(ve,Object(te.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}})))((function(e){return r.a.createElement(he,e)})),we=a(29),Oe=a.n(we),xe=a(28),je=a(22),Se=a.n(je),Ce=function(e){for(var t=Object(n.useState)(1),a=Object(xe.a)(t,2),s=a[0],i=a[1],c=Math.ceil(e.totalItemsCount/e.pageSize),o=c/10,l=[],u=function(t){l.push(r.a.createElement("a",{className:t==e.currentPage?Se.a.active:Se.a.pageItem,onClick:function(){var a;a=t,e.getUsers(a)}},t+" "))},p=1;p<=c;p++)u(p);var m=l.slice(10*(s-1),10*s);return r.a.createElement("div",{className:Se.a.wrapper},r.a.createElement("button",{onClick:function(){i(s-1)},disabled:1==s?Se.a.disapear:""},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435"),r.a.createElement("div",{className:Se.a.pages},m),r.a.createElement("button",{onClick:function(){i(s+1)},className:s==o?Se.a.disapear:""},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435"))},Ne=function(e){return r.a.createElement("div",{className:Oe.a.usersWrapper},r.a.createElement(Ce,{getUsers:e.getUsers,totalItemsCount:e.totalUsersCount,currentPage:e.currentPage,pageSize:e.pageSize}),r.a.createElement("div",null),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:Oe.a.eachUser},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement($.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:C.a,className:Oe.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.setUnFollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.setFollow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("div",{className:Oe.a.username},t.name),r.a.createElement("div",null,t.status)))})))},Pe=a(35),Te=a(36),Ie=a(40),ke=a(39),ye=a(64),Fe=a.n(ye),Ae=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Fe.a}))},Ue=function(e){Object(Ie.a)(a,e);var t=Object(ke.a)(a);function a(){var e;Object(Pe.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Te.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.isFetching&&r.a.createElement(Ae,null),r.a.createElement(Ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,getUsers:this.props.getUsers,setFollow:this.props.setFollow,setUnFollow:this.props.setUnFollow,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),Le=Object(c.d)(Object(te.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setFollow:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0,e)),t.next=3,h(e);case 3:0==t.sent.data.resultCode&&(a(M(!1,e)),a(G(e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUnFollow:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0,e)),t.next=3,b(e);case 3:0==t.sent.data.resultCode&&(a(M(!1,e)),a(z(e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:M,getUsers:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U(!0)),t.next=3,E(e);case 3:n=t.sent,a(D(n.items)),a(W(n.totalCount)),a(L(e)),a(U(!1));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ue),Ge=a(65),ze=a.n(Ge),De=a(19),We=a.n(De),Me=a(25),Re=a(68),He=a.n(Re),Ze=function(e){var t=Object(n.useState)(e.status),a=Object(xe.a)(t,2),s=a[0],i=(a[1],Object(Me.a)({initialValues:{status:s},onSubmit:function(t){e.updateStatus(t.status),u(!1)}})),c=Object(n.useState)(!1),o=Object(xe.a)(c,2),l=o[0],u=o[1];return console.log(e),e.isFetching?r.a.createElement(Ae,null):r.a.createElement("div",{className:He.a.statusWrapper},l?r.a.createElement("div",null,r.a.createElement("input",{name:"status",onChange:i.handleChange,onBlur:i.handleSubmit,autoFocus:!0,value:i.values.status}),r.a.createElement("button",{onClick:function(){u(!1)}},"\u041d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c")):r.a.createElement("span",{onClick:function(){u(!0)}},e.status," "))},Be=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("div",{className:We.a.headPic},r.a.createElement("img",{src:"https://pbs.twimg.com/profile_banners/1028740017055838208/1534106006/1500x500",alt:""})),r.a.createElement("div",{className:We.a.infowrapper},r.a.createElement("div",{className:We.a.avatar},r.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:C.a,alt:""})),r.a.createElement("div",{className:We.a.descriptionWrapper},r.a.createElement("div",{className:We.a.name},e.profile.fullName),r.a.createElement(Ze,e),r.a.createElement("br",null),r.a.createElement("div",{className:We.a.description},r.a.createElement("span",{className:We.a.job},e.profile.lookingForAJob?"[\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0449\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443]":"[\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0435 \u0438\u0449\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443]")))))},Je=a(47),Xe=a.n(Je),qe=a(30),Ye=a.n(qe),Ke=function(e){return r.a.createElement("div",{className:Ye.a.post},r.a.createElement("div",{className:Ye.a.imgAndContent},r.a.createElement("img",{src:e.avatarSrc,alt:""}),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:Ye.a.buttons},r.a.createElement("button",null,"Like it"),r.a.createElement("div",{className:Ye.a.numOflikes},e.numOflikes),r.a.createElement("button",null,"Hate it"),r.a.createElement("button",null,"Complain it")))},Ve=function(e){var t=Object(Me.a)({initialValues:{postText:""},onSubmit:function(t){e.addPost(t.postText)},validate:function(e){var t={};return e.postText||(t.postText="requered"),t}}),a=e.dataposts.map((function(e){return r.a.createElement(Ke,{avatarSrc:e.avatarSrc,text:e.text,numOflikes:e.likesCount})}));return console.log(t.errors),r.a.createElement("div",{className:Xe.a.posts},r.a.createElement("p",null,e.userId==e.autorizedUserId?"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b":"\u041f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("form",{action:""},r.a.createElement("textarea",{disabled:!e.userId,onChange:t.handleChange,name:"postText",id:"",cols:"30",rows:"10",value:t.values.postText}),t.errors.postText?r.a.createElement("span",{className:Xe.a.error},t.errors.postText):"",r.a.createElement("button",{onClick:t.handleSubmit},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0442\u0435\u043d\u0443")),a)},Qe=Object(te.b)((function(e){return{posttext:e.profilePage.posttext,dataposts:e.profilePage.posts,autorizedUserId:e.auth.id,userId:e.profilePage.profile.userId}}),{addPost:function(e){return{type:"CREATE-POST-OBJECT",text:e}}})(Ve),$e=function(e){return e.profile?r.a.createElement("div",{className:ze.a.bodyContent},r.a.createElement(Be,{isFetching:e.isFetching,updateStatus:e.updateStatus,status:e.status,profile:e.profile}),r.a.createElement("div",null,r.a.createElement(Qe,{userId:e.profile.userId}))):r.a.createElement("div",null,r.a.createElement(Ae,null))},et=function(e){Object(Ie.a)(a,e);var t=Object(ke.a)(a);function a(){return Object(Pe.a)(this,a),t.apply(this,arguments)}return Object(Te.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProfile(e),this.props.getStatus(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($e,Object.assign({},this.props,{profile:this.props.profile})))}}]),a}(r.a.Component),tt=Object(c.d)(ve,ee.f,Object(te.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isFetching:e.profilePage.isFetching}}),{getProfile:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(T(!0)),t.next=4,v(e);case 4:n=t.sent,a(T(!1)),a(P(n.data));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:n=t.sent,a(I(n.data));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(T(!0)),t.next=4,w(e);case 4:n=t.sent,a(T(!1)),0==n.data.resultCode&&a(I(e));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(et),at=a(26),nt=a.n(at),rt=function(e){console.log(e);var t=Object(Me.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){e.getLogin(t.email,t.password,t.rememberMe)},validate:function(e){var a={};return t.touched.password&&!e.password&&(a.password="\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),e.email?e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(a.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"):a.email="\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",a}});return e.isFetching?r.a.createElement(Ae,null):e.isAuth?r.a.createElement(ee.a,{to:"profile"}):r.a.createElement("div",{className:nt.a.wrapper},r.a.createElement("span",{className:nt.a.head},"\u0410\u0412\u0422\u041e\u0420\u0418\u0417\u0410\u0426\u0418\u042f (\u0435\u0441\u043b\u0438 \u0432\u044b \u0414\u0430\u0448\u0430- \u0432\u044b \u0441\u0430\u043c\u0430\u044f \u0441\u043b\u0430\u0434\u043a\u044f \u0434\u0435\u0432\u043e\u0447\u043a\u0430)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{action:""},r.a.createElement("label",{for:"email"},"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430"),r.a.createElement("br",null),r.a.createElement("input",{onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email,type:"text",name:"email",id:"email"})," ",r.a.createElement("br",null),r.a.createElement("span",{className:nt.a.error},t.errors.email),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("br",null),r.a.createElement("input",{onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password,type:"password",name:"password",id:"password"})," ",r.a.createElement("br",null),r.a.createElement("span",{className:nt.a.error},t.errors.password),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:t.handleChange,value:t.values.rememberMe,id:"check",name:"rememberMe",type:"checkbox"})," ",r.a.createElement("label",{for:"check"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),r.a.createElement("br",null),r.a.createElement("button",{onClick:t.handleSubmit,className:nt.a.btn},"\u0412\u043e\u0439\u0442\u0438")))},st=a(13),it=a.n(st),ct=a(69),ot=a.n(ct),lt=a(70),ut=a.n(lt),pt=function(e){return r.a.createElement("div",{className:ut.a.wrapper},r.a.createElement("img",{src:e.avatarSrc}),r.a.createElement("p",null,e.name))},mt=function(e){var t=e.friends.map((function(t){return r.a.createElement(pt,{name:t.name,avatarSrc:t.avatarSrc,friends:e.friends,index:t.index})}));return r.a.createElement("div",{className:ot.a.wrapper},r.a.createElement("p",null,"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0441\u0435\u0442\u0438"),t)},dt=Object(te.b)((function(e){return{friends:e.friendsPage.friends}}),(function(e){return{}}))(mt),ft=function(e){return r.a.createElement("div",{className:it.a.navbar},r.a.createElement("nav",null,r.a.createElement($.b,{to:"/profile/".concat(e.id),className:it.a.item,activeClassName:it.a.active},"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement($.b,{to:"/dialogs",className:it.a.item,activeClassName:it.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),r.a.createElement($.b,{to:"/music",className:it.a.item,activeClassName:it.a.active},"\u041c\u0443\u0437\u044b\u043a\u0430"),r.a.createElement($.b,{to:"/news",className:it.a.item,activeClassName:it.a.active},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement($.b,{to:"/users",className:it.a.item,activeClassName:it.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),r.a.createElement("br",null),r.a.createElement("div",{className:it.a.item},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(dt,null)))},gt=Object(te.b)((function(e){return{id:e.auth.id}}),{})((function(e){return r.a.createElement(ft,e)})),Et=a(48),ht=a.n(Et),bt=function(e){return r.a.createElement("div",{className:ht.a.header},r.a.createElement("img",{src:"http://cdn.onlinewebfonts.com/svg/download_246224.png",alt:""}),r.a.createElement("div",{className:ht.a.auth},e.isAuth?r.a.createElement("div",null," ",r.a.createElement("span",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a ".concat(e.login)),"  ",r.a.createElement("button",{onClick:function(){e.getLogout()}},"\u0412\u044b\u0439\u0442\u0438")," "):r.a.createElement("div",null," ",r.a.createElement("span",null,"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b"),"  ",r.a.createElement("button",{onClick:function(){e.history.push("/login")}},"\u0412\u043e\u0439\u0442\u0438")," ")))},vt=Object(c.d)(ee.f,Object(te.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getLogout:function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,j();case 3:0==e.sent.data.resultCode&&t(Z(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){return r.a.createElement(bt,e)})),_t=Object(te.b)((function(e){return{isAuth:e.auth.isAuth,isFetching:e.auth.isFetching}}),{getLogin:function(e,t,a){return function(){var n=Object(f.a)(d.a.mark((function n(r){var s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),n.next=3,x(e,t,a);case 3:s=n.sent,r(B(!1)),0==s.data.resultCode?r(J()):console.log("\u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 \u0441\u0430\u043c\u043e\u0439 \u0444\u043e\u0440\u043c\u0435");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return r.a.createElement(rt,e)}));var wt=Object(te.b)((function(e){return{id:e.auth.id,isInitialized:e.app.isInitialized,isAuth:e.auth.isAuth}}),{initializeApp:function(){return function(e){e(J()).then((function(){e({type:"INITIALIZED_SUCCEED"})}))}}})((function(e){return Object(n.useEffect)((function(){e.initializeApp(),console.log(e)}),[e.id]),0==e.isInitialized?r.a.createElement(Ae,null):r.a.createElement("div",{className:"wrapper"},r.a.createElement(vt,null),r.a.createElement(ee.b,{path:"/profile/:id?",render:function(){return r.a.createElement(tt,null)}}),r.a.createElement(ee.b,{path:"/dialogs",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(ee.b,{path:"/users",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(ee.b,{path:"/login",render:function(){return r.a.createElement(_t,null)}}),r.a.createElement(gt,null))}));window.store=Q,i.a.render(r.a.createElement($.a,null,r.a.createElement(te.a,{store:Q},r.a.createElement(wt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,a){e.exports={navbar:"Navbar_navbar__14mCZ",active:"Navbar_active__2WDes",item:"Navbar_item__TANHf"}},19:function(e,t,a){e.exports={headPic:"ProfileInfo_headPic__2kWRF",infowrapper:"ProfileInfo_infowrapper__38Snx",avatar:"ProfileInfo_avatar__1a-s_",descriptionWrapper:"ProfileInfo_descriptionWrapper__3zxXQ",job:"ProfileInfo_job__2KfiO"}},22:function(e,t,a){e.exports={wrapper:"PagesLine_wrapper__t9hZs",pages:"PagesLine_pages__2jLDa",disapear:"PagesLine_disapear__3Etna",active:"PagesLine_active__CFwbL",pageItem:"PagesLine_pageItem__1Np_6"}},24:function(e,t,a){e.exports=a.p+"static/media/user.b556e41a.png"},26:function(e,t,a){e.exports={wrapper:"styles_wrapper__13Tbn",head:"styles_head__1HPrp",inputandlabel:"styles_inputandlabel__2x4lN",btn:"styles_btn__3lDN9",error:"styles_error__1HFc3"}},29:function(e,t,a){e.exports={usersWrapper:"Users_usersWrapper__39DJO",eachUser:"Users_eachUser__22p5a",username:"Users_username__20MwF"}},30:function(e,t,a){e.exports={post:"post_post__2Y85d",imgAndContent:"post_imgAndContent__2Xrnc",buttons:"post_buttons__2rvGX",numOflikes:"post_numOflikes__-zYu1"}},41:function(e,t,a){e.exports={wrapper:"Dialogs_wrapper__e8Vwx",dialogs:"Dialogs_dialogs__28fO_",chatwrapper:"Dialogs_chatwrapper__3g6-w"}},42:function(e,t,a){e.exports={wrapper:"TextingArea_wrapper__2TH6Y",dialogWindow:"TextingArea_dialogWindow__3Afb7",writtingItems:"TextingArea_writtingItems__3TUqZ",textarea:"TextingArea_textarea__LhdGI"}},47:function(e,t,a){e.exports={posts:"posts_posts__s8aC5",error:"posts_error__1iy9r"}},48:function(e,t,a){e.exports={header:"Header_header__ePJqt",item:"Header_item__iF7ef",auth:"Header_auth__1jYIF"}},61:function(e,t,a){e.exports={item:"DialogItem_item__1299O",active:"DialogItem_active__2Lmry"}},62:function(e,t,a){e.exports={wrapper:"Message_wrapper___oweM"}},63:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/Dual Ring-1.9s-200px.97a48eef.svg"},65:function(e,t,a){e.exports={bodyContent:"Profile_bodyContent__LKk28",Name:"Profile_Name__ZrEZD",description:"Profile_description__3Y06x",newpostMaker:"Profile_newpostMaker__1q5Xa",wall:"Profile_wall__35z1E"}},68:function(e,t,a){},69:function(e,t,a){e.exports={wrapper:"MyFriends_wrapper__34Mji"}},70:function(e,t,a){e.exports={wrapper:"Friend_wrapper__1CKqg",online:"Friend_online__2dtqN",offline:"Friend_offline__153_5"}},71:function(e,t,a){e.exports=a(102)},72:function(e,t,a){},96:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},97:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.32fd3803.chunk.js.map