webpackJsonp([1],{"/VYB":function(t,e){},"0xZw":function(t,e){},DIIJ:function(t,e){},FVDW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={name:"app-header",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1",href:""}},[n("a",{attrs:{href:"/"}},[n("img",{staticClass:"logo-img",attrs:{src:"/static/黑球兽.png"}}),t._v("首页")])]),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("友情链接")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("虚位以待")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("虚位以待")])],2)],1),t._v(" "),n("div",{staticClass:"line"})],1)},staticRenderFns:[]};var r={name:"app-footer",data:function(){return{}},methods:{tomianze:function(){this.$router.push("/mianze")}},mounted:function(){var t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",document.head.appendChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js",document.head.appendChild(e);var n=document.createElement("script");n.type="text/javascript",n.src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js",document.head.appendChild(n)}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("meting-js",{attrs:{server:"netease",type:"playlist",id:"3778678",autoHide:"true",fixed:"true",listFolded:"true"}}),t._v(" "),n("div",{staticClass:"copyright"},[n("a",{on:{click:t.tomianze}},[t._v("免责声明")]),t._v(" "),n("span",{staticClass:"separator hideIn768Only"},[t._v(" | ")]),t._v(" "),n("span",{staticClass:"text"},[t._v(" © 2022 ")]),t._v(" "),n("br")])],1)},staticRenderFns:[]};var l={name:"App",data:function(){return{header_show:!0,footer_show:!0}},components:{"app-header":n("VU/8")(s,i,!1,function(t){n("FVDW")},"data-v-029017b2",null).exports,"app-footer":n("VU/8")(r,o,!1,function(t){n("ujk6")},"data-v-0fc1c64e",null).exports},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.header_show?e("app-header"):this._e(),this._v(" "),e("router-view"),this._v(" "),this.footer_show?e("app-footer"):this._e()],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("0xZw")},null,null).exports,d=n("/ocq"),h=n("mtWM"),p=n.n(h),f={data:function(){return{games:[],resouList:[]}},created:function(){this.queryGames()},methods:{tiaozhuan:function(){this.msgSuccess("")},queryGames:function(){var t=this;p.a.get("/static/db.json").then(function(e){var n=e.data;t.games=n.games});new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"text/plain"})}},mounted:function(){}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.games,function(e){return n("div",[t._v(t._s(e.name))])}),t._v(" "),n("div"),t._v(" "),t._l(t.resouList,function(e){return[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),n("br")]})],2)},staticRenderFns:[]};n("VU/8")(f,m,!1,function(t){n("n8vY")},"data-v-3edb793a",null).exports;var v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v(this._s(this.msg))]),this._v(" "),e("button",{on:{click:this.tiaozhuan}},[this._v("跳转")])])},staticRenderFns:[]};var _=n("VU/8")({data:function(){return{msg:"page2"}},methods:{tiaozhuan:function(){this.$router.push("/")}}},v,!1,function(t){n("to4G")},"data-v-120a266a",null).exports,g={data:function(){return{weiboresouList:[],zhihuresouList:[],douyinresouList:[],baiduresouList:[],yiyan:"",yiyanfrom:""}},created:function(){var t=this;p.a.post("https://api.kit9.cn/api/weibohotsearch/").then(function(e){t.weiboresouList=e.data.data}),p.a.post("https://tenapi.cn/zhihuresou/").then(function(e){t.zhihuresouList=e.data.list}),p.a.post("https://api.kit9.cn/api/douyinhotsearch/").then(function(e){t.douyinresouList=e.data.data}),p.a.post("https://api.kit9.cn/api/baiduhotsearch/").then(function(e){t.baiduresouList=e.data.data}),p.a.post("https://v1.hitokoto.cn/").then(function(e){t.yiyan=e.data.hitokoto,t.yiyanfrom=e.data.from})},methods:{indexMethod:function(t){return t+1+"."},formatNumber:function(t){return t=Number(t),isNaN(t)?"":0==t?t+"":t>1&&t<1e4?t+"":(t/1e4).toFixed(1)+"万"}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"yiyan"},[n("h3",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.yiyan))]),n("span",{staticStyle:{"font-size":"1px","margin-left":"20px",color:"#606266"}},[t._v("  --          "+t._s(t.yiyanfrom))])]),t._v(" "),n("div",{staticClass:"news-wrapper"},[n("div",{staticClass:"weibo"},[t._m(0),t._v(" "),[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.weiboresouList,"empty-text":"正在努力加载中"}},[n("el-table-column",{attrs:{type:"index",index:t.indexMethod}}),t._v(" "),n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank"}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"hot",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank"}},[t._v(t._s(t.formatNumber(e.row.heat)))])]}}])})],1)]],2),t._v(" "),n("div",{staticClass:"douyin"},[t._m(1),t._v(" "),[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.douyinresouList,"empty-text":"正在努力加载中"}},[n("el-table-column",{attrs:{type:"index",index:t.indexMethod}}),t._v(" "),n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank"}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"hot",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank"}},[t._v(t._s(t.formatNumber(e.row.heat)))])]}}])})],1)]],2),t._v(" "),n("div",{staticClass:"zhihu"},[t._m(2),t._v(" "),[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.zhihuresouList,"empty-text":"正在努力加载中"}},[n("el-table-column",{attrs:{type:"index",index:t.indexMethod}}),t._v(" "),n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"hot",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.url,target:"_blank"}},[t._v(t._s(t.formatNumber(e.row.hot)))])]}}])})],1)],t._v(" "),t._m(3),t._v(" "),[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.baiduresouList,"empty-text":"正在努力加载中"}},[n("el-table-column",{attrs:{type:"index",index:t.indexMethod}}),t._v(" "),n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank",title:e.row.desc}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"hot",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"nt",attrs:{href:e.row.link,target:"_blank"}},[t._v(t._s(t.formatNumber(e.row.heat)))])]}}])})],1)]],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:"https://img.t.sinajs.cn/t5/style/images/register/logo_big.png?id=1395992824012"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkphgeh7nuvspognuhbo/douyin_web/img/images/logo-horizontal.svg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:"https://www.baidu.com/img/flexible/logo/pc/result.png"}})])}]};var b=n("VU/8")(g,y,!1,function(t){n("/VYB")},"data-v-7d13f15c",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mianze"},[n("h1",[t._v("免责声明")]),t._v(" "),n("h3",[t._v("本站 提供的信息资料、图片及视频等均来源于公开网络。")]),t._v(" "),n("h3",[t._v("本站仅提供推荐服务，所有详细信息均跳转到原始网页地址访问，")]),t._v(" "),n("h3",[t._v("不做任何转码类操作，正文内容不做任何抓取存储，如果侵犯您的权益，")]),t._v(" "),n("h3",[t._v("请与我们联系,我们会尽快处理。同时请注意原网站的观点不表示我们也认同，信息内容真实性请自己辨别。")])])}]};var x=n("VU/8")({data:function(){return{msg:"page2"}},methods:{tiaozhuan:function(){this.$router.push("/")}}},w,!1,function(t){n("DIIJ")},"data-v-811911b2",null).exports;a.default.use(d.a);var k=new d.a({mode:"history",routes:[{path:"/",name:"page1",component:b},{path:"/page2",name:"page2",component:_},{path:"/newsindex",name:"newsindex",component:b},{path:"/mianze",name:"mianze",component:x}]}),C=n("zL8q"),z=n.n(C);n("tvR6");a.default.config.productionTip=!1,a.default.use(z.a),a.default.prototype.msgSuccess=function(t){this.$message({showClose:!0,message:t,type:"success"})},a.default.prototype.msgError=function(t){this.$message({showClose:!0,message:t,type:"error"})},a.default.prototype.msgInfo=function(t){this.$message.info(t)};var L=null,S=0;a.default.prototype.showLoading=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"正在请求中......";0===S&&function(t){L=C.Loading.service({lock:!0,text:t,background:"rgba(0, 0, 0, 0.7)"})}(t),S++},a.default.prototype.hideLoading=function(){S<=0||0==--S&&L.close()},new a.default({el:"#app",router:k,components:{App:u},template:"<App/>"})},n8vY:function(t,e){},to4G:function(t,e){},tvR6:function(t,e){},ujk6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.114ddf4c65e5a798830a.js.map