(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a(26),i=a(28),l=a(36),s="SELECT_PHOTO",u="FETCH_PHOTO_PENDING",m="FETCH_PHOTO_SUCCESS",d="FETCH_PHOTO_FAILURE",p="FETCH_FAVPHOTO_PENDING",f="FETCH_FAVPHOTO_SUCCESS",g="FETCH_FAVPHOTO_FAILURE",h={isFetchingPhotos:!1,error:null,photos:[],favs:[]};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object.assign({},e,{photos:e.photos.map(function(e){return e.id===t.payload&&(e.selected=!e.selected),e})}):t.type===u?Object(l.a)({},e,{isFetchingPhotos:!0,error:null,photos:[]}):t.type===m?(console.log(t.payload),Object(l.a)({},e,{isFetchingPhotos:!1,photos:t.payload})):t.type===d?Object(l.a)({},e,{isFetchingPhotos:!1,error:t.payload}):t.type===p?Object(l.a)({},e,{isFetchingPhotos:!0,error:null,favs:[]}):t.type===f?(console.log(t.payload),Object(l.a)({},e,{isFetchingPhotos:!1,favs:t.payload})):t.type===g?Object(l.a)({},e,{isFetchingPhotos:!1,error:t.payload}):e},E=a(74),b=a(34),v=Object(i.d)(Object(i.c)({oauth:b.b,root:A}),Object(i.a)(E.a)),w=a(176),y=a(177),C=a(185),R=a(178),O=a(40),x=a(140),F=a(184),j=a(179),I=a(43),S=a.n(I),N=o.a.forwardRef(function(e,t){return o.a.createElement(O.b,Object.assign({innerRef:t,to:"/"},e))}),T=o.a.forwardRef(function(e,t){return o.a.createElement(O.b,Object.assign({innerRef:t,to:"/favs"},e))}),k=o.a.forwardRef(function(e,t){return o.a.createElement(O.b,Object.assign({innerRef:t,to:"/sign"},e))}),G=Object(x.a)(function(e){return{grow:{flexGrow:1},button:{display:"inline-block",position:"relative",marginLeft:e.spacing(2),marginRight:e.spacing(1)},avatar:{marginLeft:e.spacing(2),marginRight:e.spacing(1),position:"relative"},input:{display:"none"},standard:{fontWeight:500,fontSize:24,fontFamily:"sans-serif"}}}),P=function(){var e=G();return o.a.createElement("div",{className:e.grow},o.a.createElement(w.a,{m:12,position:"fixed"},o.a.createElement(y.a,null,o.a.createElement(F.a,null,o.a.createElement(R.a,{className:e.standard},o.a.createElement(F.a,{className:e.standard},"FLICKRecentViewer"))),o.a.createElement("div",{className:e.grow}),o.a.createElement(F.a,null,o.a.createElement(C.a,{variant:"contained",className:e.button,component:N},"RECENT PHOTOS")),o.a.createElement(F.a,null,o.a.createElement(C.a,{variant:"contained",className:e.button,component:T},"FAVORITES")),o.a.createElement(C.a,{component:k},o.a.createElement(j.a,{alt:"LOG IN to FLICKR",src:S.a,className:e.avatar})))))},U=Object(x.a)(function(e){return{root:{flexGrow:1},notSelectedImage:{borderRadius:"5px",border:"6px solid white"},selectedImage:{border:"6px solid red",borderRadius:"5px",boxSizing:"border-box"}}}),z=function(e){var t=U();return o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("img",{className:e.selected?t.selectedImage:t.notSelectedImage,alt:e.url,src:e.url,onClick:function(){return e.handleClick(e.id)}})))},H="https://www.flickr.com/services/rest/",M="57ac7d609183a31ac9628fb3d9cc7c73",W="json&nojsoncallback=true",L={getRecentPhotos:function(){var e="".concat(H,"?method=").concat("flickr.photos.getRecent","&api_key=").concat(M,"&per_page=12&format=").concat(W);return fetch(e).then(function(e){return e.json()})},getFavoritePhotos:function(){var e="".concat(H,"?method=").concat("flickr.favorites.getList","&api_key=").concat(M,"&user_id=").concat("181706557@N05","&extras=date_upload,owner_name,views&per_page=6&format=").concat(W),t=Date.now();return console.log(t),fetch(e).then(function(e){return e.json()})}},D={translateRecentPhotos:function(e){return e.map(function(e){return{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_n.jpg"),id:e.id,selected:!1,owner:e.owner,secret:e.secret,title:e.title}})},translateFavoritePhotos:function(e){return e.map(function(e){return{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_n.jpg"),id:e.id,title:e.title,owner:e.ownername,date:new Date(1e3*e.dateupload).toLocaleDateString("pl-PL"),views:e.views}})}},K=function(){return function(e,t){e({type:u}),L.getRecentPhotos().then(function(t){e(function(e){return{type:m,payload:e}}(D.translateRecentPhotos(t.photos.photo)))}).catch(function(t){e(function(e){return{type:d,payload:e}}(t))})}},B=function(){return function(e,t){e({type:p}),L.getFavoritePhotos().then(function(t){e(function(e){return{type:f,payload:e}}(D.translateFavoritePhotos(t.photos.photo)))}).catch(function(t){e(function(e){return{type:g,payload:e}}(t))})}},V=(a(132),function(){return o.a.createElement("div",{className:"cssload-loader",style:{marginTop:"5%"}},o.a.createElement("div",{className:"cssload-inner cssload-one"}),o.a.createElement("div",{className:"cssload-inner cssload-two"}),o.a.createElement("div",{className:"cssload-inner cssload-three"}))}),Y=a(180),Q=Object(x.a)(function(e){return{root:{flexGrow:1,paddingTop:90},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16},recentBox:{marginTop:"3%",marginLeft:"5%"},recentImages:{display:"flex",flexWrap:"wrap",padding:e.spacing(2),justifyContent:"space-around"}}}),Z=Object(c.b)(function(e){return{photos:e.root.photos}},function(e){return{selectImage:function(t){return e({type:s,payload:t})},fetchPhoto:function(){return e(K())}}})(function(e){var t=Q();return Object(n.useEffect)(e.fetchPhoto,[]),e.photos.length>0?o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.recentBox},o.a.createElement(Y.a,{container:!0,spacing:8},o.a.createElement("div",{className:t.recentImages},e.photos.map(function(t){return o.a.createElement(Y.a,{item:!0,xs:3},o.a.createElement(z,Object.assign({},t,{key:t.id,handleClick:e.selectImage})))}))))):o.a.createElement(V,null)}),J=function(e){return o.a.createElement(R.a,{component:"div"},o.a.createElement("div",{className:"favLegendBox"},o.a.createElement(F.a,{className:"imageTitle",fontFamily:"Arial",fontSize:32,m:1,style:{display:"block",weight:"bold"}},e.title),o.a.createElement(F.a,{className:"imageOwner",fontFamily:"Arial",fontSize:16,m:2,style:{display:"block"}},"Owner: ",o.a.createElement("span",{style:{fontWeight:"bold"}},e.owner)),o.a.createElement(F.a,{className:"imageDate",fontFamily:"Arial",fontSize:16,m:3,style:{display:"block"}},"Date: ",o.a.createElement("span",{style:{fontWeight:"bold"}},e.date," ")),o.a.createElement(F.a,{className:"stats",fontFamily:"Arial",fontSize:16,m:4,style:{display:"block"}},o.a.createElement("span",null,"Views:"," ",o.a.createElement(F.a,{style:{fontSize:16,display:"inline",fontWeight:"bold"}},e.views)," "))))},X=a(141),q=Object(x.a)(function(e){return{root:{flexGrow:1,paddingTop:90},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16,width:"40%",marginLeft:"2%",marginTop:"1%",display:"flex",direction:"row",alignContent:"space-between"}}}),_=Object(c.b)(function(e){return{favs:e.root.favs}},function(e){return{fetchFavPhoto:function(){return e(B())}}})(function(e){var t=q();return Object(n.useEffect)(e.fetchFavPhoto,[]),e.favs.length>0?o.a.createElement("div",{className:t.root},o.a.createElement(Y.a,{container:!0,spacing:6},e.favs.map(function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(X.a,{className:t.paper,key:e.id},o.a.createElement(Y.a,{item:!0,xs:6},o.a.createElement(z,{url:e.url,handleClick:function(){}})),o.a.createElement(Y.a,{item:!0,xs:6},o.a.createElement(J,e))))}))):o.a.createElement(V,null)}),$=a(59),ee=a.n($),te=a(79),ae=a(80),ne=a(41),oe=a(84),re=a(81),ce=a(85),ie=a(182),le=a(183),se=a(5),ue=a(181),me=a(82),de=a.n(me),pe=function(e){function t(){return Object(ae.a)(this,t),Object(oe.a)(this,Object(re.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ne.a)(t,[{key:"componentWillMount",value:function(){this.props.classes;(0,this.props.dispatch)(b.a.config({token:"request_token",oauth_consumer_key:M,url:"https://www.flickr.com/services/oauth/",providers:{flickr:"authorize"}}))}},{key:"handleSignin",value:function(){var e=Object(te.a)(ee.a.mark(function e(t){var a;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.dispatch,t.preventDefault(),e.t0=console,e.next=5,a(b.a.signin({username:this.refs.username.value,password:this.refs.password.value},console.log));case 5:e.t1=e.sent,e.t0.log.call(e.t0,e.t1,"=====");case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.oauth;Object(b.c)({success:function(e){console.log(e)}})(function(e){return o.a.createElement("button",e)}),Object(b.d)({success:function(){console.log(arguments)},failed:function(){console.log("error")}})(function(e){return o.a.createElement("button",e)});return o.a.createElement(ue.a,{component:"main",maxWidth:"xs"},o.a.createElement(ie.a,null),o.a.createElement("div",{className:"paper"},o.a.createElement(Y.a,null,o.a.createElement(j.a,{className:"avatar",alt:"LOG IN to FLICKR",src:S.a}),o.a.createElement(R.a,{component:"h1",variant:"h5"},"Sign in to Flickr")),o.a.createElement("form",{onSubmit:this.handleSignin.bind(this),noValidate:!0},o.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,ref:"username"}),o.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",ref:"password"}),o.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:e.authenticating},"Sign In"),o.a.createElement(Y.a,{container:!0}))))}}]),t}(o.a.Component),fe=(de()(Object(c.b)(function(e){return{oauth:e.oauth}},null),Object(se.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white,paddingTop:90}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},{name:"SignIn"}))(pe),a(83)),ge=a.n(fe),he=function(){return o.a.createElement("div",{className:"under-construction",style:{width:"100%"}},o.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"30%",paddingTop:90},src:ge.a,alt:"Under Construction Image by Jose R. Cabello from Pixabay "}))},Ae=(a(134),a(29)),Ee=a(60);var be=function(){return o.a.createElement(O.a,null,o.a.createElement(Ee.StickyContainer,null,o.a.createElement("div",null,o.a.createElement(Ee.Sticky,{position:"fixed"},function(e){var t=e.style,a=void 0===t?{relative:!0}:t;return o.a.createElement(P,{style:a})}),o.a.createElement(Ae.a,{path:"/",exact:!0,component:Z}),o.a.createElement(Ae.a,{path:"/sign",exact:!0,component:he}),o.a.createElement(Ae.a,{path:"/favs",exact:!0,component:_}))))};Object(r.render)(o.a.createElement(c.a,{store:v},o.a.createElement(be,null)),document.getElementById("root"))},43:function(e,t){e.exports="data:image/png;base64,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"},83:function(e,t,a){e.exports=a.p+"static/media/under-construction-2408061_640.61231082.png"},92:function(e,t,a){e.exports=a(139)}},[[92,1,2]]]);
//# sourceMappingURL=main.c2be91f9.chunk.js.map