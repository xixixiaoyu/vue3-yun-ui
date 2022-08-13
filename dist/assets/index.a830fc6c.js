var Io=Object.defineProperty,Lo=Object.defineProperties;var So=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Ve=(e,t,o)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,be=(e,t)=>{for(var o in t||(t={}))Oe.call(t,o)&&Ve(e,o,t[o]);if(me)for(var o of me(t))He.call(t,o)&&Ve(e,o,t[o]);return e},$e=(e,t)=>Lo(e,So(t));var Ae=(e,t)=>{var o={};for(var r in e)Oe.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&me)for(var r of me(e))t.indexOf(r)<0&&He.call(e,r)&&(o[r]=e[r]);return o};import{i as ie,r as S,o as i,c as d,a as n,w as a,b as l,d as I,p as F,e as N,f as p,g as M,n as P,F as y,h as D,t as k,j as B,k as de,v as ue,T as sn,l as m,m as Te,q as K,s as ln,u as A,x as E,y as Y,z as an,A as pe,B as he,C as ze,D as jo,E as _e,G as ve,H as Ie,I as s,J as Mo,K as Do,L as Le,M as qo,N as Po,O as Uo,P as Ro,Q as cn,R as Vo,S as Oo,U as Ho}from"./vendor.5c8cc091.js";const Ao=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const _ of u.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}};Ao();var x=(e,t)=>{const o=e.__vccOpts||e;for(const[r,c]of t)o[r]=c;return o};const Eo={props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const e=ie("menuVisible");return{toggleMenu:()=>{e.value=!e.value}}}},Se=e=>(F("data-v-60048ef9"),e=e(),N(),e),Fo={class:"topnav"},No=Se(()=>l("svg",{class:"icon"},[l("use",{"xlink:href":"#icon-yun"})],-1)),Go=Se(()=>l("h1",null,[l("span",null,"Y"),p("un-ui Vue")],-1)),Yo={class:"menu"},Ko=p("\u6587\u6863"),Zo=Se(()=>l("use",{"xlink:href":"#icon-caidan"},null,-1)),Wo=[Zo];function Qo(e,t,o,r,c,u){const _=S("router-link");return i(),d("div",Fo,[n(_,{class:"logo",to:"/"},{default:a(()=>[No,Go]),_:1}),l("ul",Yo,[l("li",null,[n(_,{to:"/doc/switch"},{default:a(()=>[Ko]),_:1})])]),o.toggleMenuButtonVisible?(i(),d("svg",{key:0,class:"toggleAside",onClick:t[0]||(t[0]=(...f)=>r.toggleMenu&&r.toggleMenu(...f))},Wo)):I("",!0)])}var Xo=x(Eo,[["render",Qo],["__scopeId","data-v-60048ef9"]]);const Jo={name:"Icon",props:{name:{type:String,required:!0},prefix:{type:String,required:!1,default:"icon"},extraClass:{type:String},color:{type:String}},setup(e){return{iconName:M(()=>"#"+e.prefix+"-"+e.name)}}},er={"aria-hidden":"true",class:"yun-icon"},tr=["xlink:href","full"];function nr(e,t,o,r,c,u){return i(),d("svg",er,[l("use",{"xlink:href":r.iconName,class:P(o.extraClass),full:o.color},null,10,tr)])}var J=x(Jo,[["render",nr]]);const or={components:{Topnav:Xo,Icon:J},setup(){return{contentList:[{iconName:"vue",title:"Vue3",description:"\u4F7F\u7528\u4E86\u6700\u65B0\u7684 Vue3.2 setup \u8BED\u6CD5"},{iconName:"vite",title:"Vite2",description:"\u5B98\u7F51\u57FA\u4E8E Vite2.x \u6784\u5EFA"},{iconName:"ts",title:"TypeScript",description:"\u6E90\u4EE3\u7801\u91C7\u7528\u4E86 TypeScript \u7F16\u5199"},{iconName:"gj",title:"\u6587\u6863\u5B8C\u6574",description:"\u6240\u6709\u7EC4\u4EF6\u62E5\u6709\u5B8C\u6574\u7684\u4F7F\u7528\u6587\u6863\u53CA\u793A\u4F8B"}]}}},je=e=>(F("data-v-0904e724"),e=e(),N(),e),rr={class:"topNav-wrapper"},sr={class:"banner"},lr=je(()=>l("h2",{class:"title"},[l("span",null,"Y"),p("un-UI")],-1)),ar=je(()=>l("h3",null,"\u7B80\u7EA6 \u8F7B\u5DE7 \u597D\u7528",-1)),cr={class:"actions"},ir=je(()=>l("a",{href:"https://github.com/xixixiaoyu/vue3-yun-ui",target:"_blank"},"GitHub",-1)),dr=p("\u5F00\u59CB"),ur={class:"content"};function pr(e,t,o,r,c,u){const _=S("Topnav"),f=S("router-link"),h=S("Icon");return i(),d("div",null,[l("div",rr,[n(_),l("div",sr,[lr,ar,l("p",cr,[ir,n(f,{to:"/doc/get-started"},{default:a(()=>[dr]),_:1})])])]),l("div",ur,[l("ul",null,[(i(!0),d(y,null,D(r.contentList,b=>(i(),d("li",{key:b.title},[n(h,{name:b.iconName,class:"icon"},null,8,["name"]),l("h3",null,k(b.title),1),l("p",null,k(b.description),1)]))),128))])])])}var _r=x(or,[["render",pr],["__scopeId","data-v-0904e724"]]);const fr={props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const e=ie("menuVisible");return{toggleMenu:()=>{e.value=!e.value}}}},Me=e=>(F("data-v-84d6d24e"),e=e(),N(),e),mr={class:"topnav"},hr=Me(()=>l("svg",{class:"icon"},[l("use",{"xlink:href":"#icon-yun"})],-1)),vr=Me(()=>l("h1",null,[l("span",null,"Y"),p("un-ui Vue")],-1)),gr={class:"menu"},yr=p("\u6587\u6863"),br=Me(()=>l("use",{"xlink:href":"#icon-caidan"},null,-1)),$r=[br];function xr(e,t,o,r,c,u){const _=S("router-link");return i(),d("div",mr,[n(_,{class:"logo",to:"/"},{default:a(()=>[hr,vr]),_:1}),l("ul",gr,[l("li",null,[n(_,{to:"/doc/switch"},{default:a(()=>[yr]),_:1})])]),o.toggleMenuButtonVisible?(i(),d("svg",{key:0,class:"toggleAside",onClick:t[0]||(t[0]=(...f)=>r.toggleMenu&&r.toggleMenu(...f))},$r)):I("",!0)])}var Cr=x(fr,[["render",xr],["__scopeId","data-v-84d6d24e"]]);const wr={components:{Topnav:Cr},setup(){const e=M(()=>document.documentElement.clientWidth<500),t=ie("menuVisible");return{menuVisible:t,closeOverlay:()=>{t.value=!1},isPhone:e}}},ee=e=>(F("data-v-391c8045"),e=e(),N(),e),kr={class:"layout"},Br=ee(()=>l("h2",null,"\u5F15\u5BFC",-1)),Tr={class:"intro"},zr=p("\u4ECB\u7ECD"),Ir=p("\u5B89\u88C5"),Lr=p("\u5F00\u59CB\u4F7F\u7528"),Sr=ee(()=>l("h2",null,"\u7EC4\u4EF6",-1)),jr={class:"Cpn"},Mr=ee(()=>l("li",{class:"title"},[l("span",null,"\u57FA\u7840")],-1)),Dr=p("Button \u6309\u94AE"),qr=p("Grid \u7EC4\u4EF6"),Pr=p("Layout \u7EC4\u4EF6"),Ur=ee(()=>l("li",{class:"title"},[l("span",null,"\u53CD\u9988")],-1)),Rr=p("Dialog \u7EC4\u4EF6"),Vr=p("Toast \u7EC4\u4EF6"),Or=p("Popover \u7EC4\u4EF6"),Hr=ee(()=>l("li",{class:"title"},[l("span",null,"\u5BFC\u822A")],-1)),Ar=p("Tabs \u7EC4\u4EF6"),Er=p("BackTop \u7EC4\u4EF6"),Fr=p("Breadcrumb\u7EC4\u4EF6"),Nr=p("Steps \u7EC4\u4EF6"),Gr=p("Sticky \u7EC4\u4EF6"),Yr=ee(()=>l("li",{class:"title"},[l("span",null,"\u6570\u636E\u5C55\u793A")],-1)),Kr=p("Card \u7EC4\u4EF6"),Zr=p("Carousel \u7EC4\u4EF6"),Wr=p("Pagination \u7EC4\u4EF6"),Qr=p("InfiniteLoaing\u7EC4\u4EF6"),Xr=p("Skeleton \u7EC4\u4EF6"),Jr=p("City \u7EC4\u4EF6"),es=ee(()=>l("li",{class:"title"},[l("span",null,"\u8868\u5355")],-1)),ts=p("Switch \u5F00\u5173"),ns=p("Input \u7EC4\u4EF6"),os=ee(()=>l("li",{class:"title"},[l("span",null,"\u5176\u4ED6")],-1));function rs(e,t,o,r,c,u){const _=S("Topnav"),f=S("router-link"),h=S("router-view");return i(),d("div",kr,[(i(),B(sn,{to:"body"},[de(l("div",{class:"aside-overlay",onClick:t[0]||(t[0]=(...b)=>r.closeOverlay&&r.closeOverlay(...b))},null,512),[[ue,r.menuVisible&&r.isPhone]])])),n(_,{class:"nav",toggleMenuButtonVisible:""}),l("div",{class:P(["content",{open:r.menuVisible}])},[l("aside",{class:P({open:r.menuVisible})},[Br,l("ol",Tr,[l("li",null,[n(f,{to:"/doc/get-started"},{default:a(()=>[zr]),_:1})]),l("li",null,[n(f,{to:"/doc/install"},{default:a(()=>[Ir]),_:1})]),l("li",null,[n(f,{to:"/doc/intro"},{default:a(()=>[Lr]),_:1})])]),Sr,l("ol",jr,[Mr,l("li",null,[n(f,{to:"/doc/button"},{default:a(()=>[Dr]),_:1})]),l("li",null,[n(f,{to:"/doc/grid"},{default:a(()=>[qr]),_:1})]),l("li",null,[n(f,{to:"/doc/layout"},{default:a(()=>[Pr]),_:1})]),Ur,l("li",null,[n(f,{to:"/doc/dialog"},{default:a(()=>[Rr]),_:1})]),l("li",null,[n(f,{to:"/doc/toast"},{default:a(()=>[Vr]),_:1})]),l("li",null,[n(f,{to:"/doc/popover"},{default:a(()=>[Or]),_:1})]),Hr,l("li",null,[n(f,{to:"/doc/tabs"},{default:a(()=>[Ar]),_:1})]),l("li",null,[n(f,{to:"/doc/backtop"},{default:a(()=>[Er]),_:1})]),l("li",null,[n(f,{to:"/doc/breadcrumb"},{default:a(()=>[Fr]),_:1})]),l("li",null,[n(f,{to:"/doc/step"},{default:a(()=>[Nr]),_:1})]),l("li",null,[n(f,{to:"/doc/sticky"},{default:a(()=>[Gr]),_:1})]),Yr,l("li",null,[n(f,{to:"/doc/card"},{default:a(()=>[Kr]),_:1})]),l("li",null,[n(f,{to:"/doc/carousel"},{default:a(()=>[Zr]),_:1})]),l("li",null,[n(f,{to:"/doc/pagination"},{default:a(()=>[Wr]),_:1})]),l("li",null,[n(f,{to:"/doc/infinite"},{default:a(()=>[Qr]),_:1})]),l("li",null,[n(f,{to:"/doc/skeleton"},{default:a(()=>[Xr]),_:1})]),l("li",null,[n(f,{to:"/doc/city"},{default:a(()=>[Jr]),_:1})]),es,l("li",null,[n(f,{to:"/doc/switch"},{default:a(()=>[ts]),_:1})]),l("li",null,[n(f,{to:"/doc/input"},{default:a(()=>[ns]),_:1})]),os])],2),l("main",null,[n(h)])],2)])}var ss=x(wr,[["render",rs],["__scopeId","data-v-391c8045"]]);const Ee=window.Prism,ls={name:"code-per",props:{component:{type:Object}},setup(e,t){const o=m(!1);return{show:o,enter:()=>{o.value=!0},leave:()=>{o.value=!1}}},computed:{showCode:function(){return this.height!==0}},data(){return{html:"",height:0,computedHeight:0}},mounted(){this.html=Ee.highlight(this.component.__sourceCode,Ee.languages.javascript,"javascript"),this.$nextTick(()=>{let{height:e}=this.$refs.codePer.getBoundingClientRect();this.computedHeight=e})},methods:{toggle(){this.height===0?this.height=this.computedHeight:this.height=0}}},as=e=>(F("data-v-2ad3f4dc"),e=e(),N(),e),cs={class:"demo-wrapper"},is={class:"per-wrapper"},ds=as(()=>l("div",{class:"per-desc"},null,-1)),us=["innerHTML"],ps={class:"down"},_s=["xlink:href"];function fs(e,t,o,r,c,u){return i(),d("div",{class:"fold-code",onMouseenter:t[1]||(t[1]=(..._)=>r.enter&&r.enter(..._)),onMouseleave:t[2]||(t[2]=(..._)=>r.leave&&r.leave(..._))},[l("div",cs,[(i(),B(Te(o.component)))]),l("div",is,[l("div",{class:"per-content",style:K({height:c.height+"px"})},[ds,l("pre",{ref:"codePer",class:"language-html",innerHTML:c.html},null,8,us)],4),l("div",{class:"demo-block-control",onClick:t[0]||(t[0]=(..._)=>u.toggle&&u.toggle(..._))},[(i(),d("svg",ps,[l("use",{"xlink:href":u.showCode===!1?"#icon-up":"#icon-down"},null,8,_s)])),n(ln,{name:"fade"},{default:a(()=>[de(l("span",{class:"show-world"},k(u.showCode===!0?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),513),[[ue,r.show]])]),_:1})])])],32)}var ms=x(ls,[["render",fs],["__scopeId","data-v-2ad3f4dc"]]);const hs={name:"demo-doc",components:{CodePer:ms},props:{title:{type:String},description:{type:String,default:""},component:{type:Object}}},vs={class:"demo-container"};function gs(e,t,o,r,c,u){const _=S("code-per");return i(),d("div",vs,[l("h2",null,k(o.title||o.component.__sourceCodeTitle),1),l("p",null,k(o.description||o.component.__sourceDescription),1),n(_,{ref:"codePer",component:o.component},null,8,["component"])])}var g=x(hs,[["render",gs],["__scopeId","data-v-4ed4ee52"]]);const ys={name:"attr",props:{columns:{type:Object},data:{type:Object}}},bs=e=>(F("data-v-94bf1eaa"),e=e(),N(),e),$s={class:"z-attr"},xs=bs(()=>l("h2",null,"Attributes",-1)),Cs={class:"attr-table"};function ws(e,t,o,r,c,u){return i(),d("div",$s,[xs,l("table",Cs,[l("thead",null,[l("tr",null,[(i(!0),d(y,null,D(o.columns,(_,f)=>(i(),d("th",{class:"z-attr-title",key:f},k(_.title),1))),128))])]),l("tbody",null,[(i(!0),d(y,null,D(o.data,(_,f)=>(i(),d("tr",{key:f},[(i(!0),d(y,null,D(_,(h,b)=>(i(),d("td",{class:"z-attr-title td",key:b},k(h),1))),128))]))),128))])])])}var V=x(ys,[["render",ws],["__scopeId","data-v-94bf1eaa"]]);const ks=A({name:"YunSwitch",props:{value:Boolean},emits:["update:value"],setup(e,{emit:t}){return{toggle:()=>{t("update:value",!e.value)}}}}),Bs=l("span",null,null,-1),Ts=[Bs];function zs(e,t,o,r,c,u){return i(),d("button",{class:P(["gulu-switch",{"gulu-checked":e.value}]),onClick:t[0]||(t[0]=(..._)=>e.toggle&&e.toggle(..._))},Ts,2)}var dn=x(ks,[["render",zs]]);const Is=A({name:"YunButton",props:{theme:{type:String,default:"button",validator:e=>["button","link","text"].includes(e)},size:{type:String,default:"normal",validator:e=>["normal","big","small"].includes(e)},level:{type:String,default:"normal",validator:e=>["normal","main","danger","warning"].includes(e)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},swordLoaded:{type:Boolean,default:!1},circleLoading:{type:Boolean,default:!1},swordLoading:{type:Boolean,default:!1}},setup(e){const{theme:t,size:o,level:r}=e;return{classes:M(()=>({[`coast-button-theme-${t}`]:t,[`coast-button-size-${o}`]:o,[`coast-button-level-${r}`]:r,"coast-button-loading":e.loading}))}}}),Ls=["disabled"],Ss={key:0,class:"yun-loadingIndicator"},js={key:1,class:"orbit-spinner"},Ms=l("div",{class:"orbit"},null,-1),Ds=l("div",{class:"orbit"},null,-1),qs=l("div",{class:"orbit"},null,-1),Ps=[Ms,Ds,qs],Us={key:2,class:"checked-style"},Rs={key:3,class:"circle-loading"},Vs={key:4};function Os(e,t,o,r,c,u){return i(),d("button",{class:P([e.classes,"coast-button"]),disabled:e.disabled||e.loading},[e.loading?(i(),d("span",Ss)):I("",!0),e.swordLoading?(i(),d("div",js,Ps)):I("",!0),e.swordLoaded?(i(),d("div",Us)):I("",!0),e.circleLoading?(i(),d("div",Rs)):I("",!0),e.$slots.default?(i(),d("span",Vs,[E(e.$slots,"default")])):I("",!0)],10,Ls)}var $=x(Is,[["render",Os]]);const Hs=A({name:"YunButtonGroup",setup(e,{slots:t}){return()=>{var o;return Y("div",{class:"coast-button-group"},(o=t.default)==null?void 0:o.call(t))}}}),As={name:"YunTab"};function Es(e,t,o,r,c,u){return i(),d("div",null,[E(e.$slots,"default")])}var oe=x(As,[["render",Es]]);const Fs={name:"YunTabs",props:{selected:{type:String}},setup(e,t){var b;const o=m(null),r=m(null),c=m(null);an(()=>{const{width:C}=o.value.getBoundingClientRect();r.value.style.width=C+"px";const{left:T}=c.value.getBoundingClientRect(),{left:w}=o.value.getBoundingClientRect(),z=w-T;r.value.style.left=z+"px"},{flush:"post"});const u=(b=t==null?void 0:t.slots)==null?void 0:b.default(),_=u.map(C=>({title:C.props.title,disabled:C.props.disabled===!0||C.props.disabled===""}));u.forEach(C=>{if(C.type.name!==oe.name)throw new Error("Tabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662F Tab")});const f=M(()=>u.find(C=>C.props.title===e.selected));return{defaults:u,select:C=>{t.emit("update:selected",C)},selectedItem:o,indicator:r,container:c,current:f,subElements:_}}},Ns={class:"gulu-tabs"},Gs={class:"gulu-tabs-nav",ref:"container"},Ys=["onClick"],Ks={class:"gulu-tabs-nav-indicator",ref:"indicator"},Zs={class:"gulu-tabs-content"};function Ws(e,t,o,r,c,u){return i(),d("div",Ns,[l("div",Gs,[(i(!0),d(y,null,D(r.subElements,(_,f)=>(i(),d("div",{class:P(["gulu-tabs-nav-item",{selected:_.title===o.selected,"yun-tab-disabled":_.disabled}]),key:f,onClick:h=>r.select(_.title),ref_for:!0,ref:h=>{_.title===o.selected&&(r.selectedItem=h)}},k(_.title),11,Ys))),128)),l("div",Ks,null,512)],512),l("div",Zs,[(i(),B(Te(r.current),{class:"gulu-tabs-content-item",key:r.current.props.title}))])])}var un=x(Fs,[["render",Ws]]);const Qs=A({name:"YunDialog",components:{Button:$},emits:["closeOverlay","update:visible"],props:{visible:{type:Boolean,default:!1},overlayClosable:{type:Boolean,default:!0,required:!1},confirm:{type:Function,required:!1},cancel:{type:Function,required:!1}},setup(e,{emit:t}){const o=()=>{t("update:visible",!1)};return{close:o,onClickOverlay:()=>{e.overlayClosable&&(o(),t("closeOverlay"))},confirmDialog:()=>{e.confirm&&e.confirm()!==!1&&o()},cancel:()=>{e.cancel&&e.cancel(),o()}}}}),Xs={class:"gulu-dialog-wrapper"},Js={class:"gulu-dialog"},el=p("\u63D0\u793A"),tl=p("\u5185\u5BB9"),nl=p("\u786E\u5B9A"),ol=p("\u53D6\u6D88");function rl(e,t,o,r,c,u){const _=S("Button");return e.visible?(i(),B(sn,{key:0,to:"body"},[l("div",{class:"gulu-dialog-overlay",onClick:t[0]||(t[0]=(...f)=>e.onClickOverlay&&e.onClickOverlay(...f))}),l("div",Xs,[l("div",Js,[l("header",null,[E(e.$slots,"title",{},()=>[el]),l("span",{class:"gulu-dialog-close",onClick:t[1]||(t[1]=(...f)=>e.close&&e.close(...f))})]),l("main",null,[E(e.$slots,"content",{},()=>[tl])]),l("footer",null,[n(_,{level:"main",onClick:e.confirmDialog},{default:a(()=>[nl]),_:1},8,["onClick"]),n(_,{onClick:e.cancel},{default:a(()=>[ol]),_:1},8,["onClick"])])])])])):I("",!0)}var ge=x(Qs,[["render",rl]]);const De={name:"YunStep",props:{count:{type:Number,default:3},active:{type:Number,default:0},activeColor:{type:String,default:"#27ba9b"},defaultColor:{type:String,default:"#e4e4e4"},width:{type:String,default:"100%"}},setup(e){return{color:M(()=>e.width)}}},Fe=()=>{pe(e=>({"48f4e3e1":e.color}))},Ne=De.setup;De.setup=Ne?(e,t)=>(Fe(),Ne(e,t)):Fe;const sl=De,ll={class:"lg-steps"},al=l("div",{class:"lg-steps-line"},null,-1);function cl(e,t,o,r,c,u){return i(),d("div",ll,[al,(i(!0),d(y,null,D(o.count,_=>(i(),d("div",{class:"lg-step",key:_,style:K({color:o.active>=_?o.activeColor:o.defaultColor})},k(_),5))),128))])}var il=x(sl,[["render",cl]]);const dl=e=>{const{title:t,content:o,overlayClosable:r,confirm:c,cancel:u}=e,_=document.createElement("div");document.body.appendChild(_);const f=()=>{he(null,_),_.remove()},h=n(ge,{visible:!0,title:t,overlayClosable:r,confirm:c,cancel:u,"onUpdate:visible":b=>{b===!1&&f()}},{default:()=>o});return he(h,_),{close:f}};const ul={name:"Icon",props:{name:{type:String,required:!0},prefix:{type:String,required:!1,default:"icon"},extraClass:{type:String},color:{type:String}},setup(e){return{iconName:M(()=>"#"+e.prefix+"-"+e.name)}}},pl={"aria-hidden":"true",class:"yun-icon"},_l=["xlink:href","full"];function fl(e,t,o,r,c,u){return i(),d("svg",pl,[l("use",{"xlink:href":r.iconName,class:P(o.extraClass),full:o.color},null,10,_l)])}var pn=x(ul,[["render",fl]]);const ml=A({name:"YunInput",components:{Icon:pn},props:{value:{type:[String,Number],required:!0},type:{type:String,default:"text"},clearable:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},placeholder:{type:String,required:!1},disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},width:{type:String,required:!1},label:{type:String,required:!1},labelRight:{type:String,required:!1},status:{type:String,required:!1,default:"normal",validator:e=>["normal","secondary","success","warning","error"].includes(e)},size:{type:String,required:!1,default:"medium",validator:e=>["mini","small","medium","large"].includes(e)}},emits:["update:value","input","change","blur","focus","keydown","clear"],setup(e,{emit:t}){const o=m(null),r=m(null),c=m(!1),u=M(()=>({"coast-input-label-left":e.label,"coast-input-label-right":e.labelRight,"coast-input-suffix-clear":e.clearable,"coast-input-suffix-password":e.type==="password",[`coast-input-status-${e.status}`]:e.status})),_=M(()=>{const q=o.value?o.value.offsetWidth:0,le=e.type==="password"?24:0;return-q-le}),f=()=>{ze(()=>{r.value.focus()})};return{classes:u,onClear:()=>{t("update:value",""),t("change",""),t("clear"),f()},onInput:q=>{t("update:value",q.target.value),t("input",q.target.value)},onChange:q=>{t("change",q.target.value)},onBlur:q=>{t("blur",q)},onFocus:q=>{t("focus",q)},onKeydown:q=>{t("keydown",q)},onTogglePasswordVisible:()=>{c.value=!c.value,f()},inputRef:r,labelRightRef:o,actionIconTransform:_,passwordVisible:c}}}),hl={key:0,class:"coast-label left"},vl=["disabled","maxlength","placeholder","readonly","type","value"];function gl(e,t,o,r,c,u){const _=S("Icon");return i(),d("div",{class:P([{[`coast-input-wrapper-size-${e.size}`]:e.size},"coast-input-wrapper"]),style:K(`width:${e.width}`)},[e.label?(i(),d("span",hl,k(e.label),1)):I("",!0),l("input",jo({ref:"inputRef"},e.$attrs,{class:[e.classes,"coast-input"],disabled:e.disabled,maxlength:e.maxlength,placeholder:e.placeholder,readonly:e.readonly,type:e.type==="password"?e.passwordVisible?"text":"password":e.type,value:e.value,onBlur:t[0]||(t[0]=(...f)=>e.onBlur&&e.onBlur(...f)),onChange:t[1]||(t[1]=(...f)=>e.onChange&&e.onChange(...f)),onFocus:t[2]||(t[2]=(...f)=>e.onFocus&&e.onFocus(...f)),onInput:t[3]||(t[3]=(...f)=>e.onInput&&e.onInput(...f)),onKeydown:t[4]||(t[4]=(...f)=>e.onKeydown&&e.onKeydown(...f))}),null,16,vl),e.clearable?(i(),B(_,{key:1,style:K(`transform: translateX(${e.actionIconTransform}px)`),class:"coast-input-action",name:"clear",onClick:e.onClear},null,8,["style","onClick"])):I("",!0),e.type==="password"?(i(),B(_,{key:2,name:e.passwordVisible?"eye":"eye-close",style:K(`transform: translateX(${e.actionIconTransform+24}px)`),class:"coast-input-action",onClick:e.onTogglePasswordVisible},null,8,["name","style","onClick"])):I("",!0),e.labelRight?(i(),d("span",{key:3,ref:"labelRightRef",class:"coast-label right"},k(e.labelRight),513)):I("",!0)],6)}var L=x(ml,[["render",gl]]);const yl=A({name:"YunCard",props:{title:{type:String,required:!1},hoverable:{type:Boolean,required:!1},shadow:{type:Boolean,required:!1},type:{type:String,required:!1,validator:e=>["secondary","alert","success","purple","warning","violet","error","cyan","dark","lite"].includes(e)}},setup(e){const{hoverable:t,shadow:o,type:r}=e;return{classes:M(()=>({"coast-card-hoverable":t,"coast-card-shadow":o,[`coast-card-${r}`]:r}))}}}),bl={key:0,class:"coast-card-title"},$l={class:"coast-card-content"},xl={key:1,class:"coast-card-footer"};function Cl(e,t,o,r,c,u){return i(),d("div",{class:P([e.classes,"coast-card"])},[e.title?(i(),d("h2",bl,k(e.title),1)):I("",!0),l("main",$l,[E(e.$slots,"default")]),e.$slots.footer?(i(),d("footer",xl,[E(e.$slots,"footer")])):I("",!0)],2)}var se=x(yl,[["render",Cl]]);const wl=A({name:"YunToast",components:{Icon:pn},props:{text:{type:String,required:!1,default:""},type:{type:String,required:!1,default:"normal",validator:e=>["normal","secondary","success","warning","error"].includes(e)},delay:{type:Number,required:!1,default:3},center:{type:Boolean,required:!1,default:!1},showClose:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1,default:""},top:{type:Number,default:10,required:!1}},emits:["destroy"],setup(e,{emit:t}){const o=m(!1),r=m(null),c=M(()=>["coast-toast",{"coast-toast-center":e.center,[`coast-toast-${e.type}`]:e.type}]);_e(()=>{o.value=!0,_()});const u=()=>{o.value=!1,t("destroy")},_=()=>{e.delay>0&&(r.value=setTimeout(()=>{u()},e.delay*1e3))};return{visible:o,classes:c,handleClose:u,startTimer:_,clearTimer:()=>{clearTimeout(r.value),r.value=null}}}});function kl(e,t,o,r,c,u){const _=S("Icon");return de((i(),d("div",{class:P(e.classes),style:K({top:`${e.top}px`}),onMouseenter:t[0]||(t[0]=(...f)=>e.clearTimer&&e.clearTimer(...f)),onMouseleave:t[1]||(t[1]=(...f)=>e.startTimer&&e.startTimer(...f))},[l("span",null,k(e.text),1),e.showClose?(i(),B(_,{key:0,class:"coast-toast-close",name:"clear",onClick:e.handleClose},null,8,["onClick"])):I("",!0)],38)),[[ue,e.visible]])}var Bl=x(wl,[["render",kl]]);const Z=[];let Tl=1;const W=e=>{const t=$e(be({},e),{id:`coast-toast-${Tl++}`});zl(t)},zl=e=>{const u=e,{destroyed:t=()=>{}}=u,o=Ae(u,["destroyed"]),r=document.createElement("div");document.body.appendChild(r);const c=n(Bl,$e(be({},o),{top:10+Z.length*60,onDestroy:()=>{t(),Il(e.id,r)}}));Z.push(c),he(c,r)},Il=(e,t)=>{he(null,t),t.remove();const o=Z.findIndex(c=>c.component.props.id===e);if(o===-1)return;const r=Z[o].el.offsetHeight;if(Z.splice(o,1),!(Z.length<1))for(let c=o;c<Z.length;c++)Z[c].component.props.top=parseInt(Z[c].el.style.top)-r-60};const Ll={class:"carousel-body"},Sl=["src"],jl={class:"carousel-indicator"},Ml=["onClick"],Dl={props:{width:{type:String,require:!0,default:"1150"},height:{type:String,require:!0,default:"600"},sliders:{type:Array,default:()=>[],require:!0},loop:{type:Boolean,default:!1},duration:{type:Number,default:3e3},autoPlay:{type:Boolean,default:!1}},setup(e){const t=e;pe(C=>({"444840da":r,"2af0e093":c}));const o=m(0),r=t.width+"px",c=t.height+"px";let u=null;const _=()=>{clearInterval(u),u=setInterval(()=>{o.value++,o.value>=t.sliders.length&&(o.value=0)},t.duration)};ve(()=>t.sliders,C=>{C.length&&t.autoPlay&&(o.value=0,_())},{immediate:!0});const f=()=>{u&&clearInterval(u)},h=()=>{t.sliders.length&&t.autoPlay&&_()},b=C=>{const T=o.value+C;if(!((T===-1||T>=t.sliders.length)&&!t.loop)){{if(T>=t.sliders.length){o.value=0;return}if(T<0){o.value=t.sliders.length-1;return}}o.value=T}};return Ie(()=>{clearInterval(u)}),(C,T)=>(i(),d("div",{class:"xtx-carousel",onMouseenter:f,onMouseleave:h},[l("ul",Ll,[(i(!0),d(y,null,D(e.sliders,(w,z)=>(i(),d("li",{class:P(["carousel-item",{fade:o.value===z}]),key:w.id},[l("img",{src:w.imgUrl},null,8,Sl)],2))),128))]),l("a",{href:"javascript:;",class:"carousel-btn prev",onClick:T[0]||(T[0]=w=>b(-1))},[n(J,{name:"zuojiantou"})]),l("a",{href:"javascript:;",class:"carousel-btn next",onClick:T[1]||(T[1]=w=>b(1))},[n(J,{name:"youjiantou1"})]),l("div",jl,[(i(!0),d(y,null,D(e.sliders,(w,z)=>(i(),d("span",{key:z,onClick:R=>o.value=z,class:P({active:o.value===z})},null,10,Ml))),128))])],32))}};var _n=x(Dl,[["__scopeId","data-v-a3fa6f2a"]]);const ql=["src"],Pl={class:"carousel-indicator"},Ul=["onClick"],fn={props:{width:{type:String,require:!0,default:"1150"},height:{type:String,require:!0,default:"600"},sliders:{type:Array,default:()=>[],require:!0},gapless:{type:Boolean,default:!1},duration:{type:Number,default:3e3},autoPlay:{type:Boolean,default:!1}},setup(e){const t=e;pe(z=>({"408c8edd":c,"91935a20":u}));const o=m(null),r=m(0),c=t.width+"px",u=t.height+"px",_=M(()=>-t.width*r.value+"px"),f=t.gapless;ze(()=>{if(f){let z=o.value.firstElementChild.cloneNode(!0);o.value.appendChild(z)}});let h=null;const b=()=>{clearInterval(h),h=setInterval(()=>{r.value++,r.value>=t.sliders.length&&(r.value=0)},t.duration)};ve(()=>t.sliders,z=>{z.length&&t.autoPlay&&(r.value=0,b())},{immediate:!0});const C=()=>{h&&clearInterval(h)},T=()=>{t.sliders.length&&t.autoPlay&&b()},w=z=>{const R=r.value+z;if(f)o.value.style.transition="300ms",R===-1?(o.value.style.transition="none",r.value=t.sliders.length,setTimeout(()=>{o.value.style.transition="300ms",r.value=t.sliders.length-1},0)):R===t.sliders.length?(r.value=t.sliders.length,setTimeout(()=>{o.value.style.transition="none",r.value=0},300)):r.value=R;else{if(R>=t.sliders.length){r.value=0;return}if(R<0){r.value=t.sliders.length-1;return}r.value=R}};return Ie(()=>{clearInterval(h)}),(z,R)=>(i(),d("div",{class:"xtx-carousel",onMouseenter:C,onMouseleave:T},[l("ul",{class:"carousel-body",ref_key:"carouselBody",ref:o,style:K({left:s(_)})},[(i(!0),d(y,null,D(e.sliders,q=>(i(),d("li",{class:"carousel-item",key:q.id},[l("img",{src:q.imgUrl},null,8,ql)]))),128))],4),l("a",{href:"javascript:;",class:"carousel-btn prev",onClick:R[0]||(R[0]=q=>w(-1))},[n(J,{name:"zuojiantou"})]),l("a",{href:"javascript:;",class:"carousel-btn next",onClick:R[1]||(R[1]=q=>w(1))},[n(J,{name:"youjiantou1"})]),l("div",Pl,[(i(!0),d(y,null,D(e.sliders,(q,le)=>(i(),d("span",{key:le,onClick:Pd=>r.value=le,class:P({active:r.value%e.sliders.length===le})},null,10,Ul))),128))])],32))}};const Rl=p("UP"),mn={props:{visibilityHeight:{type:Number,default:100},right:{type:String,required:!1,default:"20"},bottom:{type:String,required:!1,default:"16"}},emits:["clicked"],setup(e,{emit:t}){const o=e;pe(b=>({"38141338":h,decf356e:f}));const r=m(document.documentElement.scrollTop>0);let c=null;const u=()=>{r.value=document.documentElement.scrollTop};window.addEventListener("scroll",u);const _=()=>{t("clicked"),clearInterval(c),c=setInterval(function(){document.documentElement.scrollTop-=50,document.documentElement.scrollTop<=0&&clearInterval(c)},16)};an(()=>{r.value>o.visibilityHeight?r.value=!0:r.value=!1},{flush:"post"});const f=o.right+"%",h=o.bottom+"%";return Ie(()=>{clearInterval(c),window.removeEventListener("scroll",u)}),(b,C)=>(i(),d("div",{class:P(["backtotop-container",{visible:r.value}])},[b.$slots.default?(i(),d("div",{key:1,class:"custom-backtotop",onClick:_},[E(b.$slots,"default",{},()=>[Rl])])):(i(),d("div",{key:0,class:"backtotop",onClick:_},[n(J,{name:"backtop"})]))],2))}};const hn={props:{width:{type:String,default:"100px"},height:{type:String,default:"100px"},bg:{type:String,default:"#efefef"},animated:{type:Boolean,default:!1}},setup(e){const t=e,o=t.width.includes("px")?t.width:t.width+"px",r=t.height.includes("px")?t.height:t.height+"px";return(c,u)=>(i(),d("div",{class:P(["yun-skeleton",{shan:e.animated}]),style:K({width:s(o),height:s(r)})},[l("div",{class:"block",style:K({backgroundColor:e.bg})},null,4)],6))}};const vn={name:"YunBread",props:{separator:{type:String,default:"/"}},setup(e,{slots:t}){const o=t.default(),r=[];return o.forEach((c,u)=>{r.push(c),u<o.length-1&&r.push([Y("span",{class:"separator"},[e.separator])])}),()=>Y("div",{class:"yun-bread"},r)}},Vl={name:"YunBreadItem",props:{to:{type:[String,Object]}}},Ol={class:"yun-bread-item"},Hl={key:1};function Al(e,t,o,r,c,u){const _=S("RouterLink");return i(),d("div",Ol,[o.to?(i(),B(_,{key:0,to:o.to},{default:a(()=>[E(e.$slots,"default")]),_:3},8,["to"])):(i(),d("span",Hl,[E(e.$slots,"default")]))])}var X=x(Vl,[["render",Al]]);const El={name:"YunPagination",props:{showCount:{type:Number,default:5},total:{type:Number,default:100},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}},setup(e,{emit:t}){const o=e.showCount,r=m(e.currentPage),c=m(e.total),u=m(e.pageSize),_=M(()=>{const h=Math.ceil(c.value/u.value),b=Math.floor(o/2);let C=r.value-b,T=C+o-1;C<1&&(C=1,T=C+o-1>h?h:C+o-1),T>h&&(T=h,C=T-o+1<1?1:T-o+1);const w=[];for(let z=C;z<=T;z++)w.push(z);return{pageCount:h,btnArr:w,start:C,end:T}});return ve(e,()=>{c.value=e.total,u.value=e.pageSize,r.value=e.currentPage},{immediate:!0}),{myCurrentPage:r,pager:_,changePager:h=>{r.value!==h&&(r.value=h,t("current-change",h))}}}},Fl={key:0,class:"xtx-pagination"},Nl={key:1,href:"javascript:;",class:"disabled"},Gl={key:2},Yl=["onClick"],Kl={key:3},Zl={key:5,href:"javascript:;",class:"disabled"};function Wl(e,t,o,r,c,u){return o.total>0?(i(),d("div",Fl,[r.myCurrentPage>1?(i(),d("a",{key:0,onClick:t[0]||(t[0]=_=>r.changePager(r.myCurrentPage-1)),href:"javascript:;"},"\u4E0A\u4E00\u9875")):(i(),d("a",Nl,"\u4E0A\u4E00\u9875")),r.pager.start>1?(i(),d("span",Gl,"...")):I("",!0),(i(!0),d(y,null,D(r.pager.btnArr,_=>(i(),d("a",{onClick:f=>r.changePager(_),href:"javascript:;",key:_,class:P({active:_===r.myCurrentPage})},k(_),11,Yl))),128)),r.pager.end<r.pager.pageCount?(i(),d("span",Kl,"...")):I("",!0),r.myCurrentPage<r.pager.pageCount?(i(),d("a",{key:4,onClick:t[1]||(t[1]=_=>r.changePager(r.myCurrentPage+1)),href:"javascript:;"},"\u4E0B\u4E00\u9875")):(i(),d("a",Zl,"\u4E0B\u4E00\u9875"))])):I("",!0)}var qe=x(El,[["render",Wl]]);const Ql={name:"YunCity",components:{Icon:J},props:{fullLocation:{type:String,default:""},placeholder:{type:String,defulat:"\u8BF7\u9009\u62E9\u914D\u9001\u5730\u5740"}},setup(e,{emit:t}){const o=Mo({provinceCode:"",provinceName:"",cityCode:"",cityName:"",countyCode:"",countyName:"",fullLocation:""}),r=m(!1),c=m([]),u=m(!1),_=()=>{r.value=!0,u.value=!0,Xl().then(w=>{c.value=w,u.value=!1});for(const w in o)o[w]=""},f=()=>{r.value=!1},h=()=>{r.value?f():_()},b=m(null);Do(b,()=>{f()});const C=w=>{w.level===0&&(o.provinceCode=w.code,o.provinceName=w.name),w.level===1&&(o.cityCode=w.code,o.cityName=w.name),w.level===2&&(o.countyCode=w.code,o.countyName=w.name,o.fullLocation=`${o.provinceName} ${o.cityName} ${o.countyName}`,f(),t("change",o))},T=M(()=>{let w=c.value;return o.provinceCode&&o.provinceName&&(w=w.find(z=>z.code===o.provinceCode).areaList),o.cityCode&&o.cityName&&(w=w.find(z=>z.code===o.cityCode).areaList),w});return{visible:r,toggle:h,target:b,loading:u,currList:T,changeItem:C}}},Xl=()=>new Promise((e,t)=>{if(window.cityData)e(window.cityData);else{const o="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json";Le.get(o).then(r=>{window.cityData=r.data,e(r.data)})}}),Jl={class:"xtx-city",ref:"target"},ea={key:0,class:"placeholder"},ta={key:1,class:"value"},na={key:0,class:"option"},oa={key:0,class:"loading"},ra=["onClick"];function sa(e,t,o,r,c,u){const _=S("Icon");return i(),d("div",Jl,[l("div",{class:P(["select",{active:r.visible}]),onClick:t[0]||(t[0]=f=>r.toggle())},[o.fullLocation?(i(),d("span",ta,k(o.fullLocation),1)):(i(),d("span",ea,k(o.placeholder),1)),n(_,{name:"angle-down",class:"angle-down"})],2),r.visible?(i(),d("div",na,[r.loading?(i(),d("div",oa)):(i(!0),d(y,{key:1},D(r.currList,f=>(i(),d("span",{class:"ellipsis",onClick:h=>r.changeItem(f),key:f.code},k(f.name),9,ra))),128))])):I("",!0)],512)}var la=x(Ql,[["render",sa],["__scopeId","data-v-1a2f72ba"]]);const aa={name:"YunInfiniteLoading",props:{loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1}},setup(e,{emit:t}){const o=m(null);return qo(o,([{isIntersecting:r}])=>{r&&!e.loading&&!e.finished&&t("infinite")},{threshold:0}),{target:o}}},ca={class:"yun-infinite-loading",ref:"target"},ia={key:0,class:"loading"},da=l("span",{class:"img"},null,-1),ua=l("span",{class:"text"},"\u6B63\u5728\u52A0\u8F7D...",-1),pa=[da,ua],_a={key:1,class:"none"},fa=l("span",{class:"img"},null,-1),ma=l("span",{class:"text"},"\u4EB2\uFF0C\u6CA1\u6709\u66F4\u591A\u4E86",-1),ha=[fa,ma];function va(e,t,o,r,c,u){return i(),d("div",ca,[o.loading?(i(),d("div",ia,pa)):I("",!0),o.finished?(i(),d("div",_a,ha)):I("",!0)],512)}var gn=x(aa,[["render",va]]);const Pe={name:"AppHeaderSticky",props:{component:{type:Object,require:!1}},setup(){const t=ie("menuVisible").value?"160px":"0",{y:o}=Po();return{y:o,isOffset:t}}},Ge=()=>{pe(e=>({c29f6bec:e.isOffset}))},Ye=Pe.setup;Pe.setup=Ye?(e,t)=>(Ge(),Ye(e,t)):Ge;const ga=Pe,ya={class:"container"};function ba(e,t,o,r,c,u){return i(),d("div",{class:P(["app-header-sticky",{show:r.y>=78}])},[de(l("div",ya,[(i(),B(Te(o.component))),E(e.$slots,"default")],512),[[ue,r.y>=78]])],2)}var $a=x(ga,[["render",ba]]);const xa={data:()=>({days:"0",hours:"00",mins:"00",seconds:"00",timer:null,curTime:0}),props:{time:{type:[Number,String],default:0},refreshCounter:{type:[Number,String],default:0},end:{type:[Number,String],default:0},isMiniSecond:{type:Boolean,default:!1}},computed:{duration(){if(this.end){let t=String(this.end).length>=13?+this.end:+this.end*1e3;return t-=Date.now(),t}return this.isMiniSecond?Math.round(+this.time/1e3):Math.round(+this.time)}},mounted(){this.countDown()},watch:{duration(){this.countDown()},refreshCounter(){this.countDown()}},methods:{durationFormatter(e){if(!e)return{ss:0};let t=e;const o=t%60;if(t=(t-o)/60,t<1)return{ss:o};const r=t%60;if(t=(t-r)/60,t<1)return{mm:r,ss:o};const c=t%24;return t=(t-c)/24,t<1?{hh:c,mm:r,ss:o}:{dd:t,hh:c,mm:r,ss:o}},countDown(){this.curTime=Date.now(),this.getTime(this.duration)},getTime(e){if(this.timer&&clearTimeout(this.timer),e<0)return;const{dd:t,hh:o,mm:r,ss:c}=this.durationFormatter(e);this.days=t||0,this.hours=o||0,this.mins=r||0,this.seconds=c||0,this.timer=setTimeout(()=>{const u=Date.now(),_=Math.floor((u-this.curTime)/1e3),f=_>1?_:1;this.curTime=u,this.getTime(e-f)},1e3)}}},Ca={class:"_base-count-down no-rtl"},wa={class:"content"};function ka(e,t,o,r,c,u){return i(),d("div",Ca,[l("div",wa,[E(e.$slots,"default",Uo(Ro({d:e.days,h:e.hours,m:e.mins,s:e.seconds,hh:`00${e.hours}`.slice(-2),mm:`00${e.mins}`.slice(-2),ss:`00${e.seconds}`.slice(-2)})),void 0,!0)])])}var Ba=x(xa,[["render",ka],["__scopeId","data-v-218cde6f"]]);const yn="top-left",bn="top-right",$n="bottom-left",xn="bottom-right";function Ta(){let t=null;const o=m(!1);return{isVisible:o,onMouseenter:()=>{o.value=!0,t&&clearTimeout(t)},onMouseleave:()=>{t=window.setTimeout(()=>{o.value=!1,t=null},150)}}}function za(e,t){const o=m(null),r=m(null),c=_=>_?{width:_.offsetWidth,height:_.offsetHeight}:{},u=m({top:c(o.value).height+"px",left:-c(r.value).width+"px"});return ve(t,_=>{!_||ze(()=>{switch(e.placement){case yn:u.value.top="0",u.value.left=-c(r.value).width+"px";break;case bn:u.value.top="0",u.value.left=c(o.value).width+"px";break;case $n:u.value.top=c(o.value).height+"px",u.value.left=-c(r.value).width+"px";break;case xn:u.value.top=c(o.value).height+"px",u.value.left=c(o.value).width+"px";break}})}),{referenceTarget:o,contentTarget:r,contentStyle:u}}const Ia={name:"Popover"},Ke=[yn,bn,$n,xn],La=Object.assign(Ia,{props:{placement:{type:String,default:"bottom-left",validator(e){const t=Ke.includes(e);if(!t)throw new Error(`\u4F60\u7684 placement \u5FC5\u987B\u662F${Ke.join("\u3001")}\u4E2D\u7684\u4E00\u4E2A `);return t}}},setup(e){const t=e,{isVisible:o,onMouseenter:r,onMouseleave:c}=Ta(),{referenceTarget:u,contentTarget:_,contentStyle:f}=za(t,o);return(h,b)=>(i(),d("div",{class:"relative",onMouseenter:b[0]||(b[0]=(...C)=>s(r)&&s(r)(...C)),onMouseleave:b[1]||(b[1]=(...C)=>s(c)&&s(c)(...C))},[l("div",{ref_key:"referenceTarget",ref:u},[E(h.$slots,"reference",{},void 0,!0)],512),n(ln,{name:"slide"},{default:a(()=>[de(l("div",{ref_key:"contentTarget",ref:_,class:"absolute p-1 z-20 bg-slate-100 border rounded-md dark:bg-zinc-900 dark:border-zinc-700",style:K(s(f))},[E(h.$slots,"default",{},void 0,!0)],4),[[ue,s(o)]])]),_:3})],32))}});var Sa=x(La,[["__scopeId","data-v-af4fe7b4"]]);const ja=()=>{document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("html");let o=window.innerWidth/10;o=o>40?40:o,t.style.fontSize=o+"px"})},Ma=[Sa,J];function Da(e){Ma.forEach(t=>{e.component(t.name,t)})}var Ze=e=>{e.__sourceCode=`<template>\r
  <Switch v-model:value="bool" />\r
</template>\r
\r
<script setup>\r
import { Switch } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const bool = ref(true);\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u4F1A\u547C\u5438\u7684\u5F00\u5173"};const Cn={setup(e){const t=m(!0);return(o,r)=>(i(),B(s(dn),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c)},null,8,["value"]))}};typeof Ze=="function"&&Ze(Cn);var We=e=>{e.__sourceCode=`<template>\r
  <Switch v-model:value="bool" disabled />\r
</template>\r
\r
<script setup>\r
import { Switch } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const bool = ref(true);\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 disabled",e.__sourceDescription="\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u7981\u7528"};const wn={setup(e){const t=m(!0);return(o,r)=>(i(),B(s(dn),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),disabled:""},null,8,["value"]))}};typeof We=="function"&&We(wn);const O=[{title:"\u53C2\u6570",dataIndex:"params",key:"age"},{title:"\u8BF4\u660E",dataIndex:"desc",key:"age"},{title:"\u7C7B\u578B",dataIndex:"type",key:"age"},{title:"\u53EF\u9009\u503C",dataIndex:"select",key:"age"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"default",key:"age"}];const qa=e=>(F("data-v-000fdc3e"),e=e(),N(),e),Pa=qa(()=>l("h1",null,"Switch \u793A\u4F8B",-1)),Ua={setup(e){const t=[{params:"value",desc:"\u662F\u5426\u9009\u4E2D",type:"boolean",select:"false / true",default:"false"},{params:"disabled ",desc:"\u662F\u5426\u7981\u7528",type:"boolean",select:"false / true",default:"false"}];return(o,r)=>(i(),d(y,null,[l("div",null,[Pa,n(g,{component:Cn}),n(g,{component:wn})]),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Ra=x(Ua,[["__scopeId","data-v-000fdc3e"]]),Qe=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button>\u9ED8\u8BA4\u6309\u94AE</Button>\r
    <Button theme="link">\u94FE\u63A5\u6309\u94AE</Button>\r
    <Button theme="text">\u6587\u672C\u6309\u94AE</Button>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u4F7F\u7528 theme \u5C5E\u6027\u6307\u5B9A\u6309\u94AE\u7C7B\u578B"};const Va=p("\u9ED8\u8BA4\u6309\u94AE"),Oa=p("\u94FE\u63A5\u6309\u94AE"),Ha=p("\u6587\u672C\u6309\u94AE"),kn={setup(e){return(t,o)=>(i(),d("div",null,[n(s($),null,{default:a(()=>[Va]),_:1}),n(s($),{theme:"link"},{default:a(()=>[Oa]),_:1}),n(s($),{theme:"text"},{default:a(()=>[Ha]),_:1})]))}};typeof Qe=="function"&&Qe(kn);var Xe=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button size="big">\u8D85\u5927\u6309\u94AE</Button>\r
      <Button>\u9ED8\u8BA4\u5927\u5C0F</Button>\r
      <Button size="small">\u8D85\u5C0F\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button theme="link" size="big">\u8D85\u5927\u6309\u94AE</Button>\r
      <Button theme="link">\u9ED8\u8BA4\u5927\u5C0F</Button>\r
      <Button size="small" theme="link">\u8D85\u5C0F\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button size="big" theme="text">\u8D85\u5927\u6309\u94AE</Button>\r
      <Button theme="text">\u9ED8\u8BA4\u5927\u5C0F</Button>\r
      <Button size="small" theme="text">\u8D85\u5C0F\u6309\u94AE</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
  \u81EA\u5B9A\u4E49 size\r
`,e.__sourceDescription=""};const Aa=p("\u8D85\u5927\u6309\u94AE"),Ea=p("\u9ED8\u8BA4\u5927\u5C0F"),Fa=p("\u8D85\u5C0F\u6309\u94AE"),Na=p("\u8D85\u5927\u6309\u94AE"),Ga=p("\u9ED8\u8BA4\u5927\u5C0F"),Ya=p("\u8D85\u5C0F\u6309\u94AE"),Ka=p("\u8D85\u5927\u6309\u94AE"),Za=p("\u9ED8\u8BA4\u5927\u5C0F"),Wa=p("\u8D85\u5C0F\u6309\u94AE"),Bn={setup(e){return(t,o)=>(i(),d("div",null,[l("div",null,[n(s($),{size:"big"},{default:a(()=>[Aa]),_:1}),n(s($),null,{default:a(()=>[Ea]),_:1}),n(s($),{size:"small"},{default:a(()=>[Fa]),_:1})]),l("div",null,[n(s($),{theme:"link",size:"big"},{default:a(()=>[Na]),_:1}),n(s($),{theme:"link"},{default:a(()=>[Ga]),_:1}),n(s($),{size:"small",theme:"link"},{default:a(()=>[Ya]),_:1})]),l("div",null,[n(s($),{size:"big",theme:"text"},{default:a(()=>[Ka]),_:1}),n(s($),{theme:"text"},{default:a(()=>[Za]),_:1}),n(s($),{size:"small",theme:"text"},{default:a(()=>[Wa]),_:1})])]))}};typeof Xe=="function"&&Xe(Bn);var Je=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button level="main">\u4E3B\u8981\u6309\u94AE</Button>\r
      <Button>\u666E\u901A\u6309\u94AE</Button>\r
      <Button level="warning">\u8B66\u544A\u6309\u94AE</Button>\r
      <Button level="danger">\u5371\u9669\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button level="main" theme="link">\u4E3B\u8981\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button theme="link">\u666E\u901A\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button level="warning" theme="link">\u8B66\u544A\u6309\u94AE</Button>\r
      <Button level="danger" theme="link">\u5371\u9669\u94FE\u63A5\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button level="main" theme="text">\u4E3B\u8981\u6587\u5B57\u6309\u94AE</Button>\r
      <Button theme="text">\u666E\u901A\u6587\u5B57\u6309\u94AE</Button>\r
      <Button level="warning" theme="text">\u8B66\u544A\u6309\u94AE</Button>\r
      <Button level="danger" theme="text">\u5371\u9669\u6587\u5B57\u6309\u94AE</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
  \u81EA\u5B9A\u4E49 level\r
`,e.__sourceDescription=""};const Qa=p("\u4E3B\u8981\u6309\u94AE"),Xa=p("\u666E\u901A\u6309\u94AE"),Ja=p("\u8B66\u544A\u6309\u94AE"),e1=p("\u5371\u9669\u6309\u94AE"),t1=p("\u4E3B\u8981\u94FE\u63A5\u6309\u94AE"),n1=p("\u666E\u901A\u94FE\u63A5\u6309\u94AE"),o1=p("\u8B66\u544A\u6309\u94AE"),r1=p("\u5371\u9669\u94FE\u63A5\u6309\u94AE"),s1=p("\u4E3B\u8981\u6587\u5B57\u6309\u94AE"),l1=p("\u666E\u901A\u6587\u5B57\u6309\u94AE"),a1=p("\u8B66\u544A\u6309\u94AE"),c1=p("\u5371\u9669\u6587\u5B57\u6309\u94AE"),Tn={setup(e){return(t,o)=>(i(),d("div",null,[l("div",null,[n(s($),{level:"main"},{default:a(()=>[Qa]),_:1}),n(s($),null,{default:a(()=>[Xa]),_:1}),n(s($),{level:"warning"},{default:a(()=>[Ja]),_:1}),n(s($),{level:"danger"},{default:a(()=>[e1]),_:1})]),l("div",null,[n(s($),{level:"main",theme:"link"},{default:a(()=>[t1]),_:1}),n(s($),{theme:"link"},{default:a(()=>[n1]),_:1}),n(s($),{level:"warning",theme:"link"},{default:a(()=>[o1]),_:1}),n(s($),{level:"danger",theme:"link"},{default:a(()=>[r1]),_:1})]),l("div",null,[n(s($),{level:"main",theme:"text"},{default:a(()=>[s1]),_:1}),n(s($),{theme:"text"},{default:a(()=>[l1]),_:1}),n(s($),{level:"warning",theme:"text"},{default:a(()=>[a1]),_:1}),n(s($),{level:"danger",theme:"text"},{default:a(()=>[c1]),_:1})])]))}};typeof Je=="function"&&Je(Tn);var et=e=>{e.__sourceCode=`<template>\r
  <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
  <Button theme="link" disabled>\u7981\u7528\u94FE\u63A5\u6309\u94AE</Button>\r
  <Button theme="text" disabled>\u7981\u7528\u6309\u94AE</Button>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
  disabled \u5C5E\u6027\u7981\u7528\r
`,e.__sourceDescription=""};const i1=p("\u7981\u7528\u6309\u94AE"),d1=p("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),u1=p("\u7981\u7528\u6309\u94AE"),zn={setup(e){return(t,o)=>(i(),d(y,null,[n(s($),{disabled:""},{default:a(()=>[i1]),_:1}),n(s($),{theme:"link",disabled:""},{default:a(()=>[d1]),_:1}),n(s($),{theme:"text",disabled:""},{default:a(()=>[u1]),_:1})],64))}};typeof et=="function"&&et(zn);var tt=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button circle-loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button swordLoading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button swordLoaded>\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
    <Button :loading="loading" @click="handleLoading">\u70B9\u51FB\u52A0\u8F7D</Button>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
import { ref } from "vue";\r
const loading = ref(false);\r
\r
const handleLoading = () => {\r
  loading.value = true;\r
  setTimeout(() => {\r
    loading.value = false;\r
  }, 2000);\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
   loading \u5C5E\u6027\u52A0\u8F7D\r
`,e.__sourceDescription=""};const p1=p("\u52A0\u8F7D\u4E2D"),_1=p("\u52A0\u8F7D\u4E2D"),f1=p("\u52A0\u8F7D\u4E2D"),m1=p("\u52A0\u8F7D\u5B8C\u6BD5"),h1=p("\u70B9\u51FB\u52A0\u8F7D"),In={setup(e){const t=m(!1),o=()=>{t.value=!0,setTimeout(()=>{t.value=!1},2e3)};return(r,c)=>(i(),d("div",null,[n(s($),{loading:""},{default:a(()=>[p1]),_:1}),n(s($),{"circle-loading":""},{default:a(()=>[_1]),_:1}),n(s($),{swordLoading:""},{default:a(()=>[f1]),_:1}),n(s($),{swordLoaded:""},{default:a(()=>[m1]),_:1}),n(s($),{loading:t.value,onClick:o},{default:a(()=>[h1]),_:1},8,["loading"])]))}};typeof tt=="function"&&tt(In);var nt=e=>{e.__sourceCode=`<template>\r
  <ButtonGroup>\r
    <Button>\u4E0A\u4E00\u9875</Button>\r
    <Button>\u5F53\u524D</Button>\r
    <Button>\u4E0B\u4E00\u9875</Button>\r
  </ButtonGroup>\r
</template>\r
\r
<script setup>\r
import { Button } from "../../lib/index";\r
import { ButtonGroup } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
 ButtonGroup \u6309\u94AE\u7EC4\r
`,e.__sourceDescription=""};const v1=p("\u4E0A\u4E00\u9875"),g1=p("\u5F53\u524D"),y1=p("\u4E0B\u4E00\u9875"),Ln={setup(e){return(t,o)=>(i(),B(s(Hs),null,{default:a(()=>[n(s($),null,{default:a(()=>[v1]),_:1}),n(s($),null,{default:a(()=>[g1]),_:1}),n(s($),null,{default:a(()=>[y1]),_:1})]),_:1}))}};typeof nt=="function"&&nt(Ln);const b1=l("h1",null,"Button \u6309\u94AE\u793A\u4F8B",-1),$1={setup(e){const t=[{params:"size",desc:"\u5C3A\u5BF8",type:"string",select:"normal / big / small",default:"normal"},{params:"level",desc:"\u6309\u94AE\u7C7B\u578B",type:"string",select:"normal / main / warning / danger ",default:"normal"},{params:"theme",desc:"\u6309\u94AE\u7C7B\u578B",type:"string",select:"normal / link / text",default:"normal"},{params:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",select:"false / true",default:"false"},{params:"loading",desc:"\u52A0\u8F7D\u4E2D",type:"boolean",select:"false / true",default:"false"},{params:"sword-loading",desc:"\u52A0\u8F7D\u4E2D",type:"boolean",select:"false / true",default:"false"},{params:"circle-loading",desc:"\u52A0\u8F7D\u4E2D",type:"boolean",select:"false / true",default:"false"},{params:"sword-loaded",desc:"\u52A0\u8F7D\u4E2D",type:"boolean",select:"false / true",default:"false"}];return(o,r)=>(i(),d(y,null,[b1,n(g,{component:kn}),n(g,{component:Bn}),n(g,{component:Tn}),n(g,{component:zn}),n(g,{component:In}),n(g,{component:Ln}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var ot=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog v-model:visible="visible" :confirm="hanleConfirm" :cancel="handleCancel">\r
      <template v-slot:content>\r
        <strong>\u6587\u672C\u6846\u7B2C\u4E00\u884C </strong>\r
        <div>\u6587\u672C\u6846\u7B2C\u4E8C\u884C</div>\r
      </template>\r
      <template v-slot:title>\r
        <strong>\u6807\u9898</strong>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button, Dialog } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const hanleConfirm = () => {\r
  console.log("onConfirm");\r
};\r
const handleCancel = () => {\r
  console.log("onCancel");\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
\u57FA\u672C\u4F7F\u7528\r
`,e.__sourceDescription=""};const x1=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),C1=l("strong",null,"\u6587\u672C\u6846\u7B2C\u4E00\u884C ",-1),w1=l("div",null,"\u6587\u672C\u6846\u7B2C\u4E8C\u884C",-1),k1=l("strong",null,"\u6807\u9898",-1),Sn={setup(e){const t=m(!1),o=()=>{t.value=!t.value},r=()=>{console.log("onConfirm")},c=()=>{console.log("onCancel")};return(u,_)=>(i(),d("div",null,[n(s($),{onClick:o},{default:a(()=>[x1]),_:1}),n(s(ge),{visible:t.value,"onUpdate:visible":_[0]||(_[0]=f=>t.value=f),confirm:r,cancel:c},{content:a(()=>[C1,w1]),title:a(()=>[k1]),_:1},8,["visible"])]))}};typeof ot=="function"&&ot(Sn);var rt=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog\r
      v-model:visible="visible"\r
      :overlayClosable="false"\r
      :confirm="() => {}"\r
      :cancel="() => {}"\r
    >\r
      <template #content>\r
        <div>\u9ED8\u8BA4 overlayClosable \u662F\u5F00\u542F\u7684\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846</div>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button, Dialog } from "../../lib/index";\r
import { ref } from "vue";\r
const visible = ref(false);\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
\u652F\u6301 overlayClosable\r
`,e.__sourceDescription=""};const B1=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),T1=l("div",null,"\u9ED8\u8BA4 overlayClosable \u662F\u5F00\u542F\u7684\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846",-1),jn={setup(e){const t=m(!1),o=()=>{t.value=!t.value};return(r,c)=>(i(),d("div",null,[n(s($),{onClick:o},{default:a(()=>[B1]),_:1}),n(s(ge),{visible:t.value,"onUpdate:visible":c[0]||(c[0]=u=>t.value=u),overlayClosable:!1,confirm:()=>{},cancel:()=>{}},{content:a(()=>[T1]),_:1},8,["visible","confirm","cancel"])]))}};typeof rt=="function"&&rt(jn);var st=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog\r
      v-model:visible="visible"\r
      :confirm="handleConfirm"\r
      :cancel="handleCancel"\r
      @closeOverlay="hanleOverlay"\r
    >\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button, Dialog } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const handleConfirm = () => {\r
  console.log("onConfirm");\r
  return false;\r
};\r
const handleCancel = () => {\r
  console.log("onCancel");\r
};\r
\r
const hanleOverlay = () => {\r
  console.log("\u906E\u7F69\u5173\u95ED\u4E86");\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
\u963B\u6B62\u786E\u8BA4\u6846\u548C\u76D1\u542C\u906E\u7F69\u5173\u95ED\r
`,e.__sourceDescription=""};const z1=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),Mn={setup(e){const t=m(!1),o=()=>{t.value=!t.value},r=()=>(console.log("onConfirm"),!1),c=()=>{console.log("onCancel")},u=()=>{console.log("\u906E\u7F69\u5173\u95ED\u4E86")};return(_,f)=>(i(),d("div",null,[n(s($),{onClick:o},{default:a(()=>[z1]),_:1}),n(s(ge),{visible:t.value,"onUpdate:visible":f[0]||(f[0]=h=>t.value=h),confirm:r,cancel:c,onCloseOverlay:u},null,8,["visible"])]))}};typeof st=="function"&&st(Mn);var lt=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Button, openDialog } from "../../lib/index";\r
\r
const showDialog = () => {\r
  openDialog({\r
    title: "\u6807\u9898",\r
    content: "\u6587\u6863\u5185\u5BB9",\r
    overlayClosable: false,\r
    confirm() {\r
      console.log("confirm");\r
      // return false;\r
    },\r
    cancel() {\r
      console.log("cancel");\r
    },\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
\u51FD\u6570\u5F0F API \u6253\u5F00 Dialog\r
`,e.__sourceDescription=""};const I1=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),Dn={setup(e){const t=()=>{dl({title:"\u6807\u9898",content:"\u6587\u6863\u5185\u5BB9",overlayClosable:!1,confirm(){console.log("confirm")},cancel(){console.log("cancel")}})};return(o,r)=>(i(),d("div",null,[n(s($),{onClick:t},{default:a(()=>[I1]),_:1})]))}};typeof lt=="function"&&lt(Dn);const L1=l("h1",null,"Dialog \u793A\u4F8B",-1),S1={setup(e){const t=[{params:"visible",desc:"\u662F\u5426\u5C55\u793A",type:"boolean",select:"true / false",default:"false"},{params:"overlayClosable",desc:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846",type:"boolean",select:"true / false",default:"true"},{params:"confirm",desc:"\u786E\u8BA4\u89E6\u53D1\u51FD\u6570",type:"function",select:"() => {}",default:"\u4E00"},{params:"cancel",desc:"\u53D6\u6D88\u89E6\u53D1\u51FD\u6570",type:"function",select:"() => {}",default:"\u4E00"},{params:"closeOverlay",desc:"\u8499\u5C42\u5173\u95ED\u89E6\u53D1\u51FD\u6570",type:"function",select:"() => {}",default:"\u4E00"}];return(o,r)=>(i(),d(y,null,[L1,n(g,{component:Sn}),n(g,{component:jn}),n(g,{component:Mn}),n(g,{component:Dn}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var at=e=>{e.__sourceCode=`<template>\r
  <Tabs v-model:selected="selected">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A22">\u5185\u5BB9222</Tab>\r
    <Tab title="\u5BFC\u822A3333">\u5185\u5BB9333</Tab>\r
  </Tabs>\r
</template>\r
\r
<script setup>\r
import { Tabs, Tab } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const selected = ref("\u5BFC\u822A1");\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u9ED8\u8BA4\u9009\u4E2D\u9879\u4E0E title \u5BF9\u5E94"};const j1=p("\u5185\u5BB91"),M1=p("\u5185\u5BB9222"),D1=p("\u5185\u5BB9333"),qn={setup(e){const t=m("\u5BFC\u822A1");return(o,r)=>(i(),B(s(un),{selected:t.value,"onUpdate:selected":r[0]||(r[0]=c=>t.value=c)},{default:a(()=>[n(s(oe),{title:"\u5BFC\u822A1"},{default:a(()=>[j1]),_:1}),n(s(oe),{title:"\u5BFC\u822A22"},{default:a(()=>[M1]),_:1}),n(s(oe),{title:"\u5BFC\u822A3333"},{default:a(()=>[D1]),_:1})]),_:1},8,["selected"]))}};typeof at=="function"&&at(qn);var ct=e=>{e.__sourceCode=`<template>\r
  <Tabs v-model:selected="x">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A22 disabled" disabled>\u5185\u5BB92</Tab>\r
    <Tab title="\u5BFC\u822A333">\u5185\u5BB93</Tab>\r
  </Tabs>\r
</template>\r
\r
<script setup>\r
import { Tabs, Tab } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const x = ref("\u5BFC\u822A1");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 disabled",e.__sourceDescription="\u7ED9\u5BF9\u5E94 tab \u7EC4\u4EF6\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u7981\u7528\u5BF9\u5E94\u9879"};const q1=p("\u5185\u5BB91"),P1=p("\u5185\u5BB92"),U1=p("\u5185\u5BB93"),Pn={setup(e){const t=m("\u5BFC\u822A1");return(o,r)=>(i(),B(s(un),{selected:t.value,"onUpdate:selected":r[0]||(r[0]=c=>t.value=c)},{default:a(()=>[n(s(oe),{title:"\u5BFC\u822A1"},{default:a(()=>[q1]),_:1}),n(s(oe),{title:"\u5BFC\u822A22 disabled",disabled:""},{default:a(()=>[P1]),_:1}),n(s(oe),{title:"\u5BFC\u822A333"},{default:a(()=>[U1]),_:1})]),_:1},8,["selected"]))}};typeof ct=="function"&&ct(Pn);const R1=l("h1",null,"Tabs \u793A\u4F8B",-1),V1={setup(e){const t=[{params:"Tabs",desc:"tab\u5BB9\u5668",type:"component",select:"\u4E00",default:"\u4E00"},{params:"Tab",desc:"tab\u9875\u7B7E",type:"component",select:"\u4E00",default:"\u4E00"},{params:"title",desc:"tab\u6807\u9898",type:"string",select:"\u4E00",default:"\u4E00"},{params:"selected",desc:"\u5F53\u524D\u9009\u4E2D\u9879\uFF0C\u4E0Etitle\u5BF9\u5E94",type:"string",select:"\u4E00",default:"\u4E00"},{params:"disabled",desc:"\u5F53\u524D\u9879\u7981\u7528",type:"boolean",select:"true / false",default:"false"}];return(o,r)=>(i(),d(y,null,[R1,n(g,{component:qn}),n(g,{component:Pn}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var it=e=>{e.__sourceCode=`<template>\r
  <div class="step-container">\r
    <Step :count="count" :active="active" />\r
    <Button @click="next">\u70B9\u51FB\u4E0B\u4E00\u6B65</Button>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Step, Button } from "../../lib/index";\r
import { ref } from "vue";\r
\r
const count = ref(5);\r
const active = ref(0);\r
const next = () => {\r
  active.value++;\r
};\r
<\/script>`,e.__sourceCodeTitle=`\r
\u57FA\u672C\u4F7F\u7528\r
`,e.__sourceDescription=""};const O1={class:"step-container"},H1=p("\u70B9\u51FB\u4E0B\u4E00\u6B65"),Un={setup(e){const t=m(5),o=m(0),r=()=>{o.value++};return(c,u)=>(i(),d("div",O1,[n(s(il),{count:t.value,active:o.value},null,8,["count","active"]),n(s($),{onClick:r},{default:a(()=>[H1]),_:1})]))}};typeof it=="function"&&it(Un);var A1={name:"YunSteps",props:{active:{type:Number,default:1}},render(){const e=this.$slots.default(),t=[];e.forEach(r=>{r.type.name==="YunStepsItem"?t.push(r):r.children.forEach(c=>{t.push(c)})});const o=t.map((r,c)=>n("div",{class:{active:c<this.active,"xtx-steps-item":!0}},[n("div",{class:"step"},[n("span",null,[c+1])]),n("div",{class:"title"},[r.props.title]),n("div",{class:"desc"},[r.props.desc])]));return n("div",{class:"xtx-steps"},[o])}};const ae={name:"YunStepsItem",props:{title:{type:String,default:""},desc:{type:String,default:""}}};var dt=e=>{e.__sourceCode=`<template>\r
  <Steps :active="active">\r
    <steps-item title="\u82B1\u524D\u6708\u4E0B" desc="\u6625\u65E5\u6E38\uFF0C\u674F\u82B1\u5439\u6EE1\u5934\uFF0C\u964C\u4E0A\u8C01\u5BB6\u5E74\u5C11\u8DB3\u98CE\u6D41" />\r
    <steps-item title="\u76F8\u6FE1\u4EE5\u6CAB" desc="\u5E18\u5916\u82AD\u8549\u60F9\u9AA4\u96E8\uFF0C\u95E8\u73AF\u60F9\u94DC\u7EFF\uFF0C\u800C\u6211\u8DEF\u8FC7\u90A3\u6C5F\u5357\u5C0F\u9547\u60F9\u4E86\u4F60" />\r
    <steps-item title="\u77E2\u5FD7\u4E0D\u6E1D" desc="\u6BCF\u4E2A\u4EBA\u90FD\u6709\u4E00\u6BB5\u60B2\u4F24\uFF0C\u60F3\u9690\u85CF\u5374\u6B32\u76D6\u5F25\u5F70" />\r
    <steps-item title="\u6D77\u67AF\u77F3\u70C2" desc="\u8D70\u5B8C\u540C\u4E00\u6761\u8857\uFF0C\u56DE\u5230\u4E24\u4E2A\u4E16\u754C" />\r
    <steps-item title="\u5929\u8352\u5730\u8001" desc="\u6700\u521D\u4E0D\u76F8\u8BC6\uFF0C\u6700\u540E\u4E0D\u76F8\u8BA4" />\r
  </Steps>\r
  <Button @click="next">\u70B9\u51FB\u4E0B\u4E00\u6B65</Button>\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Steps, StepsItem } from "../../lib/Step/index";\r
import { Button } from "../../lib/index";\r
\r
const count = ref(5);\r
const active = ref(0);\r
const next = () => {\r
  active.value++;\r
};\r
<\/script>`,e.__sourceCodeTitle="\u66F4\u5B8C\u7F8E\u7684\u7528\u6CD5",e.__sourceDescription="\u652F\u6301 title \u548C desc \u5C5E\u6027\u4E14\u6837\u5F0F\u53D8\u5F97\u66F4\u597D\u770B\u4E86"};const E1=p("\u70B9\u51FB\u4E0B\u4E00\u6B65"),Rn={setup(e){m(5);const t=m(0),o=()=>{t.value++};return(r,c)=>(i(),d(y,null,[n(s(A1),{active:t.value},{default:a(()=>[n(s(ae),{title:"\u82B1\u524D\u6708\u4E0B",desc:"\u6625\u65E5\u6E38\uFF0C\u674F\u82B1\u5439\u6EE1\u5934\uFF0C\u964C\u4E0A\u8C01\u5BB6\u5E74\u5C11\u8DB3\u98CE\u6D41"}),n(s(ae),{title:"\u76F8\u6FE1\u4EE5\u6CAB",desc:"\u5E18\u5916\u82AD\u8549\u60F9\u9AA4\u96E8\uFF0C\u95E8\u73AF\u60F9\u94DC\u7EFF\uFF0C\u800C\u6211\u8DEF\u8FC7\u90A3\u6C5F\u5357\u5C0F\u9547\u60F9\u4E86\u4F60"}),n(s(ae),{title:"\u77E2\u5FD7\u4E0D\u6E1D",desc:"\u6BCF\u4E2A\u4EBA\u90FD\u6709\u4E00\u6BB5\u60B2\u4F24\uFF0C\u60F3\u9690\u85CF\u5374\u6B32\u76D6\u5F25\u5F70"}),n(s(ae),{title:"\u6D77\u67AF\u77F3\u70C2",desc:"\u8D70\u5B8C\u540C\u4E00\u6761\u8857\uFF0C\u56DE\u5230\u4E24\u4E2A\u4E16\u754C"}),n(s(ae),{title:"\u5929\u8352\u5730\u8001",desc:"\u6700\u521D\u4E0D\u76F8\u8BC6\uFF0C\u6700\u540E\u4E0D\u76F8\u8BA4"})]),_:1},8,["active"]),n(s($),{onClick:o},{default:a(()=>[E1]),_:1})],64))}};typeof dt=="function"&&dt(Rn);const F1=l("h1",null,"Step \u793A\u4F8B",-1),N1={setup(e){const t=[{params:"count",desc:"\u6B65\u9AA4\u6570\u91CF",type:"number",select:"number",default:"3"},{params:"active",desc:"\u6FC0\u6D3B\u6570\u91CF",type:"number",select:"number",default:"1"},{params:"title ",desc:"\u6807\u9898",type:"string",select:"string",default:"\u4E00"},{params:"desc ",desc:"\u7B80\u4ECB",type:"string",select:"string",default:"\u4E00"}];return(o,r)=>(i(),d(y,null,[F1,n(g,{component:Un,description:"\u6DFB\u52A0 count \u548C active \u548C width \u5C5E\u6027\u5373\u53EF\u63A7\u5236\u6B65\u9AA4\u6761"}),n(g,{component:Rn}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};const ce=A({name:"CoastAside",props:{width:{type:String,default:"300px"}},setup(e,{slots:t}){return()=>{var o;return Y("aside",{class:"coast-aside",style:{width:e.width}},(o=t.default)==null?void 0:o.call(t))}}}),ne=A({name:"CoastContent",setup(e,{slots:t}){return()=>{var o;return Y("main",{class:"coast-content"},(o=t.default)==null?void 0:o.call(t))}}}),xe=A({name:"CoastFooter",props:{height:{type:String,default:"60px"}},setup(e,{slots:t}){return()=>{var o;return Y("footer",{class:"coast-footer",style:{height:e.height}},(o=t.default)==null?void 0:o.call(t))}}}),re=A({name:"CoastHeader",props:{height:{type:String,default:"60px"}},setup(e,{slots:t}){return()=>{var o;return Y("header",{class:"coast-header",style:{height:e.height}},(o=t.default)==null?void 0:o.call(t))}}}),G=A({name:"CoastLayout",setup(e,{slots:t}){const o=M(()=>t!=null&&t.default?t.default().some(c=>c.type.name==="CoastAside"):!1);return()=>{var r;return Y("section",{class:["coast-layout",{"coast-layout-has-aside":o.value}]},(r=t.default)==null?void 0:r.call(t))}}});var ut=e=>{e.__sourceCode=`<template>\r
  <co-layout>\r
    <co-header>Header</co-header>\r
    <co-content>Content</co-content>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-header>Header</co-header>\r
    <co-content>Content</co-content>\r
    <co-footer>Footer</co-footer>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-aside width="200px">Aside</co-aside>\r
    <co-content>Content</co-content>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-header>Header</co-header>\r
    <co-layout>\r
      <co-aside width="200px">Aside</co-aside>\r
      <co-content>Content</co-content>\r
    </co-layout>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-header>Header</co-header>\r
    <co-layout>\r
      <co-aside width="200px">Aside</co-aside>\r
      <co-layout>\r
        <co-content>Content</co-content>\r
        <co-footer>Footer</co-footer>\r
      </co-layout>\r
    </co-layout>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-aside width="200px">Aside</co-aside>\r
    <co-layout>\r
      <co-header>Header</co-header>\r
      <co-content>Content</co-content>\r
    </co-layout>\r
  </co-layout>\r
\r
  <co-layout>\r
    <co-aside width="100px">Aside</co-aside>\r
    <co-layout>\r
      <co-header height="70px">Header</co-header>\r
      <co-content>Content</co-content>\r
      <co-footer height="50px">Footer</co-footer>\r
    </co-layout>\r
  </co-layout>\r
</template>\r
\r
<script setup>\r
import { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from "../../lib/Layout/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-layout {\r
  margin-bottom: 40px;\r
  color: #fff;\r
  * {\r
    text-align: center;\r
  }\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
  .coast-header,\r
  .coast-footer {\r
    background: #7dbcea;\r
    line-height: 60px;\r
  }\r
  .coast-content {\r
    background: #108ee9;\r
    line-height: 120px;\r
  }\r
  .coast-aside {\r
    background: #3ba0e9;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u5E38\u89C1\u9875\u9762\u5E03\u5C40",e.__sourceDescription="Layout\uFF1A\u5916\u5C42\u5BB9\u5668\u3002\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B Aside \u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u5DE6\u53F3\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u4E0A\u4E0B\u6392\u5217\u3002Header\uFF1A\u9876\u680F\u5BB9\u5668\u3002Aside\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668\u3002Content\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668\u3002Footer\uFF1A\u5E95\u680F\u5BB9\u5668\u3002"};const G1=p("Header"),Y1=p("Content"),K1=p("Header"),Z1=p("Content"),W1=p("Footer"),Q1=p("Aside"),X1=p("Content"),J1=p("Header"),ec=p("Aside"),tc=p("Content"),nc=p("Header"),oc=p("Aside"),rc=p("Content"),sc=p("Footer"),lc=p("Aside"),ac=p("Header"),cc=p("Content"),ic=p("Aside"),dc=p("Header"),uc=p("Content"),pc=p("Footer"),Vn={setup(e){return(t,o)=>(i(),d(y,null,[n(s(G),null,{default:a(()=>[n(s(re),null,{default:a(()=>[G1]),_:1}),n(s(ne),null,{default:a(()=>[Y1]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(re),null,{default:a(()=>[K1]),_:1}),n(s(ne),null,{default:a(()=>[Z1]),_:1}),n(s(xe),null,{default:a(()=>[W1]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(ce),{width:"200px"},{default:a(()=>[Q1]),_:1}),n(s(ne),null,{default:a(()=>[X1]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(re),null,{default:a(()=>[J1]),_:1}),n(s(G),null,{default:a(()=>[n(s(ce),{width:"200px"},{default:a(()=>[ec]),_:1}),n(s(ne),null,{default:a(()=>[tc]),_:1})]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(re),null,{default:a(()=>[nc]),_:1}),n(s(G),null,{default:a(()=>[n(s(ce),{width:"200px"},{default:a(()=>[oc]),_:1}),n(s(G),null,{default:a(()=>[n(s(ne),null,{default:a(()=>[rc]),_:1}),n(s(xe),null,{default:a(()=>[sc]),_:1})]),_:1})]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(ce),{width:"200px"},{default:a(()=>[lc]),_:1}),n(s(G),null,{default:a(()=>[n(s(re),null,{default:a(()=>[ac]),_:1}),n(s(ne),null,{default:a(()=>[cc]),_:1})]),_:1})]),_:1}),n(s(G),null,{default:a(()=>[n(s(ce),{width:"100px"},{default:a(()=>[ic]),_:1}),n(s(G),null,{default:a(()=>[n(s(re),{height:"70px"},{default:a(()=>[dc]),_:1}),n(s(ne),null,{default:a(()=>[uc]),_:1}),n(s(xe),{height:"50px"},{default:a(()=>[pc]),_:1})]),_:1})]),_:1})],64))}};typeof ut=="function"&&ut(Vn);var _c=x(Vn,[["__scopeId","data-v-f20d7b56"]]);const fc=l("h1",null,"Layout \u793A\u4F8B",-1),mc={setup(e){return(t,o)=>(i(),d(y,null,[fc,l("div",null,[n(g,{component:_c,title:"\u5E38\u89C1\u9875\u9762\u5E03\u5C40",description:"Layout\uFF1A\u5916\u5C42\u5BB9\u5668\u3002\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B Aside \u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u5DE6\u53F3\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u4E0A\u4E0B\u6392\u5217\u3002Header\uFF1A\u9876\u680F\u5BB9\u5668\u3002Aside\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668\u3002Content\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668\u3002Footer\uFF1A\u5E95\u680F\u5BB9\u5668\u3002"})])],64))}};var pt=e=>{e.__sourceCode=`<template>\r
  <Card class="box" title="card \u6807\u9898">card \u5185\u5BB9</Card>\r
</template>\r
\r
<script setup>\r
import { Card } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
\u57FA\u672C\u4F7F\u7528\r
`,e.__sourceDescription=""};const hc=p("card \u5185\u5BB9"),we={setup(e){return(t,o)=>(i(),B(s(se),{class:"box",title:"card \u6807\u9898"},{default:a(()=>[hc]),_:1}))}};typeof pt=="function"&&pt(we);var _t=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Card title="\u652F\u6301 hover \u6548\u679C" hoverable>card \u5185\u5BB9</Card>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Card } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
Hover \u6548\u679C\r
`,e.__sourceDescription=""};const vc=p("card \u5185\u5BB9"),ke={setup(e){return(t,o)=>(i(),d("div",null,[n(s(se),{title:"\u652F\u6301 hover \u6548\u679C",hoverable:""},{default:a(()=>[vc]),_:1})]))}};typeof _t=="function"&&_t(ke);var ft=e=>{e.__sourceCode=`<template>\r
  <div>\r
    <Card title="\u652F\u6301 shadow \u6548\u679C" hoverable shadow>card \u5185\u5BB9</Card>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Card } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle=`\r
Shadow \u6548\u679C\r
`,e.__sourceDescription=""};const gc=p("card \u5185\u5BB9"),Be={setup(e){return(t,o)=>(i(),d("div",null,[n(s(se),{title:"\u652F\u6301 shadow \u6548\u679C",hoverable:"",shadow:""},{default:a(()=>[gc]),_:1})]))}};typeof ft=="function"&&ft(Be);var mt=e=>{e.__sourceCode=`<template>\r
  <div class="wrap">\r
    <Card title="\u652F\u6301 footer" hoverable shadow>\r
      card content\r
      <template #footer>card footer</template>\r
    </Card>\r
    <Card title="\u652F\u6301 footer" type="cyan">\r
      card content\r
      <template #footer>card footer</template>\r
    </Card>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Card } from "../../lib/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.wrap {\r
  display: flex;\r
  .coast-card {\r
    width: 40%;\r
    margin-left: 5%;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle=`\r
Footer slot\r
`,e.__sourceDescription=""};const yc={class:"wrap"},bc=p(" card content "),$c=p("card footer"),xc=p(" card content "),Cc=p("card footer"),On={setup(e){return(t,o)=>(i(),d("div",yc,[n(s(se),{title:"\u652F\u6301 footer",hoverable:"",shadow:""},{footer:a(()=>[$c]),default:a(()=>[bc]),_:1}),n(s(se),{title:"\u652F\u6301 footer",type:"cyan"},{footer:a(()=>[Cc]),default:a(()=>[xc]),_:1})]))}};typeof mt=="function"&&mt(On);var ht=x(On,[["__scopeId","data-v-b6e565c0"]]);var vt=e=>{e.__sourceCode=`<template>\r
  <div class="wrap">\r
    <template v-for="type in types" :key="type">\r
      <Card :title="type" :type="type">{{ type }} card</Card>\r
    </template>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Card } from "../../lib/index";\r
\r
const types = [\r
  "secondary",\r
  "alert",\r
  "success",\r
  "purple",\r
  "warning",\r
  "violet",\r
  "cyan",\r
  "error",\r
  "dark",\r
  "lite",\r
];\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.wrap {\r
  display: flex;\r
  flex-wrap: wrap;\r
  .coast-card {\r
    width: 40%;\r
    margin-left: 5%;\r
    margin-top: 16px;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle=`\r
\u652F\u6301\u4E0D\u540C\u7684 Type\r
`,e.__sourceDescription=""};const wc={class:"wrap"},Hn={setup(e){const t=["secondary","alert","success","purple","warning","violet","cyan","error","dark","lite"];return(o,r)=>(i(),d("div",wc,[(i(),d(y,null,D(t,c=>n(s(se),{key:c,title:c,type:c},{default:a(()=>[p(k(c)+" card",1)]),_:2},1032,["title","type"])),64))]))}};typeof vt=="function"&&vt(Hn);var gt=x(Hn,[["__scopeId","data-v-20d83783"]]);const kc={components:{Demo:g,Card1:we,Card2:ke,Card3:Be,Card4:ht,Card5:gt},setup(){return{Card1:we,Card2:ke,Card3:Be,Card4:ht,Card5:gt}}},Bc=l("h1",null,"Card \u793A\u4F8B",-1);function Tc(e,t,o,r,c,u){const _=S("Demo");return i(),d(y,null,[Bc,n(_,{component:r.Card1},null,8,["component"]),n(_,{component:r.Card2},null,8,["component"]),n(_,{component:r.Card3},null,8,["component"]),n(_,{component:r.Card4},null,8,["component"]),n(_,{component:r.Card5},null,8,["component"])],64)}var zc=x(kc,[["render",Tc]]),yt=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="inputVal" placeholder="please input username" />\r
  input value: {{ inputVal }}\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
<\/script>`,e.__sourceCodeTitle=`\r
\u57FA\u672C\u4F7F\u7528 v-model\r
`,e.__sourceDescription=""};const An={setup(e){const t=m("");return(o,r)=>(i(),d(y,null,[n(s(L),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),placeholder:"please input username"},null,8,["value"]),p(" input value: "+k(t.value),1)],64))}};typeof yt=="function"&&yt(An);var bt=e=>{e.__sourceCode=`<template>\r
  <Input value="this is disabled" disabled /><br />\r
  <Input value="this is readonly" readonly />\r
</template>\r
\r
<script setup>\r
import { Input } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u7981\u6B62\u8F93\u5165",e.__sourceDescription=""};const Ic=l("br",null,null,-1),En={setup(e){return(t,o)=>(i(),d(y,null,[n(s(L),{value:"this is disabled",disabled:""}),Ic,n(s(L),{value:"this is readonly",readonly:""})],64))}};typeof bt=="function"&&bt(En);var $t=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="inputVal" clearable @clear="handleClear" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("this is clearable");\r
const handleClear = () => {\r
  console.log("input is clear");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 clearable",e.__sourceDescription=""};const Fn={setup(e){const t=m("this is clearable"),o=()=>{console.log("input is clear")};return(r,c)=>(i(),B(s(L),{value:t.value,"onUpdate:value":c[0]||(c[0]=u=>t.value=u),clearable:"",onClear:o},null,8,["value"]))}};typeof $t=="function"&&$t(Fn);var xt=e=>{e.__sourceCode=`<template>\r
  <Input type="password" v-model:value="inputVal" placeholder="please input password" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("this is password");\r
<\/script>`,e.__sourceCodeTitle="password \u5BC6\u7801\u6846",e.__sourceDescription=""};const Nn={setup(e){const t=m("this is password");return(o,r)=>(i(),B(s(L),{type:"password",value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),placeholder:"please input password"},null,8,["value"]))}};typeof xt=="function"&&xt(Nn);var Ct=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="inputVal" :maxlength="5" placeholder="limit 5 characters" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 maxlength",e.__sourceDescription=""};const Gn={setup(e){const t=m("");return(o,r)=>(i(),B(s(L),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),maxlength:5,placeholder:"limit 5 characters"},null,8,["value"]))}};typeof Ct=="function"&&Ct(Gn);var wt=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="inputVal" placeholder="mini input" size="mini" /> <br />\r
  <Input v-model:value="inputVal" placeholder="small input" size="small" /><br />\r
  <Input v-model:value="inputVal" placeholder="medium input" size="medium" /><br />\r
  <Input v-model:value="inputVal" placeholder="large input" size="large" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 size",e.__sourceDescription=""};const Lc=p(),Sc=l("br",null,null,-1),jc=l("br",null,null,-1),Mc=l("br",null,null,-1),Yn={setup(e){const t=m("");return(o,r)=>(i(),d(y,null,[n(s(L),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),placeholder:"mini input",size:"mini"},null,8,["value"]),Lc,Sc,n(s(L),{value:t.value,"onUpdate:value":r[1]||(r[1]=c=>t.value=c),placeholder:"small input",size:"small"},null,8,["value"]),jc,n(s(L),{value:t.value,"onUpdate:value":r[2]||(r[2]=c=>t.value=c),placeholder:"medium input",size:"medium"},null,8,["value"]),Mc,n(s(L),{value:t.value,"onUpdate:value":r[3]||(r[3]=c=>t.value=c),placeholder:"large input",size:"large"},null,8,["value"])],64))}};typeof wt=="function"&&wt(Yn);var kt=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="value1" placeholder="normal" status="normal" /> <br />\r
  <Input v-model:value="value2" placeholder="secondary" status="secondary" /><br />\r
  <Input v-model:value="value3" placeholder="success" status="success" /><br />\r
  <Input v-model:value="value4" placeholder="warning" status="warning" /><br />\r
  <Input v-model:value="value5" placeholder="error" status="error" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const value1 = ref("");\r
const value2 = ref("");\r
const value3 = ref("");\r
const value4 = ref("");\r
const value5 = ref("");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 status",e.__sourceDescription=""};const Dc=p(),qc=l("br",null,null,-1),Pc=l("br",null,null,-1),Uc=l("br",null,null,-1),Rc=l("br",null,null,-1),Kn={setup(e){const t=m(""),o=m(""),r=m(""),c=m(""),u=m("");return(_,f)=>(i(),d(y,null,[n(s(L),{value:t.value,"onUpdate:value":f[0]||(f[0]=h=>t.value=h),placeholder:"normal",status:"normal"},null,8,["value"]),Dc,qc,n(s(L),{value:o.value,"onUpdate:value":f[1]||(f[1]=h=>o.value=h),placeholder:"secondary",status:"secondary"},null,8,["value"]),Pc,n(s(L),{value:r.value,"onUpdate:value":f[2]||(f[2]=h=>r.value=h),placeholder:"success",status:"success"},null,8,["value"]),Uc,n(s(L),{value:c.value,"onUpdate:value":f[3]||(f[3]=h=>c.value=h),placeholder:"warning",status:"warning"},null,8,["value"]),Rc,n(s(L),{value:u.value,"onUpdate:value":f[4]||(f[4]=h=>u.value=h),placeholder:"error",status:"error"},null,8,["value"])],64))}};typeof kt=="function"&&kt(Kn);var Bt=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="inputVal" width="100%" placeholder="width: 100%" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 width",e.__sourceDescription=""};const Zn={setup(e){const t=m("");return(o,r)=>(i(),B(s(L),{value:t.value,"onUpdate:value":r[0]||(r[0]=c=>t.value=c),width:"100%",placeholder:"width: 100%"},null,8,["value"]))}};typeof Bt=="function"&&Bt(Zn);var Tt=e=>{e.__sourceCode=`<template>\r
  <Input v-model:value="value1" placeholder="EnochQin" label="userName" /> <br />\r
  <Input v-model:value="value2" placeholder="http://yun-ui-y2y7" labelRight=".com" /><br />\r
  <Input v-model:value="value3" placeholder="yun-ui.y2y7" label="http://" labelRight=".com" />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const value1 = ref("");\r
const value2 = ref("");\r
const value3 = ref("");\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 label",e.__sourceDescription=""};const Vc=p(),Oc=l("br",null,null,-1),Hc=l("br",null,null,-1),Wn={setup(e){const t=m(""),o=m(""),r=m("");return(c,u)=>(i(),d(y,null,[n(s(L),{value:t.value,"onUpdate:value":u[0]||(u[0]=_=>t.value=_),placeholder:"EnochQin",label:"userName"},null,8,["value"]),Vc,Oc,n(s(L),{value:o.value,"onUpdate:value":u[1]||(u[1]=_=>o.value=_),placeholder:"http://yun-ui-y2y7",labelRight:".com"},null,8,["value"]),Hc,n(s(L),{value:r.value,"onUpdate:value":u[2]||(u[2]=_=>r.value=_),placeholder:"yun-ui.y2y7",label:"http://",labelRight:".com"},null,8,["value"])],64))}};typeof Tt=="function"&&Tt(Wn);var zt=e=>{e.__sourceCode=`<template>\r
  <Input\r
    v-model:value="inputVal"\r
    placeholder="please input username"\r
    @update:value="handleUpdate"\r
  />\r
  input value: {{ inputVal }}\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
\r
const handleUpdate = (newValue) => {\r
  console.log("input get new value", newValue);\r
};\r
<\/script>`,e.__sourceCodeTitle="Input update:value",e.__sourceDescription=""};const Qn={setup(e){const t=m(""),o=r=>{console.log("input get new value",r)};return(r,c)=>(i(),d(y,null,[n(s(L),{value:t.value,"onUpdate:value":[c[0]||(c[0]=u=>t.value=u),o],placeholder:"please input username"},null,8,["value"]),p(" input value: "+k(t.value),1)],64))}};typeof zt=="function"&&zt(Qn);var It=e=>{e.__sourceCode=`<template>\r
  <Input\r
    v-model:value="inputVal"\r
    placeholder="please input content"\r
    @input="handleInput"\r
    @change="handleChange"\r
    @focus="handleFocus"\r
    @blur="handleBlur"\r
    @keydown="handleKeydown"\r
  />\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { Input } from "../../lib/index";\r
\r
const inputVal = ref("");\r
\r
const handleInput = (value) => {\r
  console.log("input event", value);\r
};\r
const handleChange = (value) => {\r
  console.log("change event", value);\r
};\r
const handleBlur = (event) => {\r
  console.log("blur event", event);\r
};\r
const handleFocus = (event) => {\r
  console.log("focus event", event);\r
};\r
const handleKeydown = (event) => {\r
  console.log("keydown event", event);\r
};\r
<\/script>`,e.__sourceCodeTitle="Input events",e.__sourceDescription=""};const Xn={setup(e){const t=m(""),o=f=>{console.log("input event",f)},r=f=>{console.log("change event",f)},c=f=>{console.log("blur event",f)},u=f=>{console.log("focus event",f)},_=f=>{console.log("keydown event",f)};return(f,h)=>(i(),B(s(L),{value:t.value,"onUpdate:value":h[0]||(h[0]=b=>t.value=b),placeholder:"please input content",onInput:o,onChange:r,onFocus:u,onBlur:c,onKeydown:_},null,8,["value"]))}};typeof It=="function"&&It(Xn);const Ac=l("h1",null,"Input \u793A\u4F8B",-1),Ec={setup(e){return(t,o)=>(i(),d(y,null,[Ac,l("div",null,[n(g,{component:An}),n(g,{component:En}),n(g,{component:Fn}),n(g,{component:Nn}),n(g,{component:Gn}),n(g,{component:Yn,description:"\u5171\u652F\u6301 mini\uFF0Csmall\uFF0Cmedium\uFF0Clarge \u56DB\u79CD size\uFF0C\u9ED8\u8BA4\u7684 size \u662F medium"}),n(g,{component:Kn,description:"\u5171\u652F\u6301 normal\uFF0Csecondary\uFF0Csuccess\uFF0Cwarning\uFF0Cerror \u4E94\u79CD status\uFF0C\u9ED8\u8BA4\u7684 status \u662F normal"}),n(g,{component:Zn}),n(g,{component:Wn}),n(g,{component:Qn,description:"\u53EF\u901A\u8FC7\u4E8B\u4EF6 update:value \u83B7\u53D6\u6700\u65B0\u503C"}),n(g,{component:Xn,description:"\u4E8B\u4EF6\u5305\u542B: input, change, focus, blur, keydown"})])],64))}};var Lt=e=>{e.__sourceCode=`<template>\r
  <Button @click="onClick">\u6253\u5F00 toast</Button>\r
</template>\r
\r
<script setup>\r
import { Toast, Button } from "../../lib/index";\r
\r
let index = 1;\r
const onClick = () => {\r
  Toast({ text: \`\u8FD9\u662F\u7B2C \${index++} \u6761\u6D88\u606F\u63D0\u793A ~\` });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3\u79D2\u540E\u6D88\u5931"};const Fc=p("\u6253\u5F00 toast"),Jn={setup(e){let t=1;const o=()=>{W({text:`\u8FD9\u662F\u7B2C ${t++} \u6761\u6D88\u606F\u63D0\u793A ~`})};return(r,c)=>(i(),B(s($),{onClick:o},{default:a(()=>[Fc]),_:1}))}};typeof Lt=="function"&&Lt(Jn);var St=e=>{e.__sourceCode=`<template>\r
  <Button @click="onClick1">\u666E\u901A normal</Button>\r
  <Button @click="onClick2">\u6B21\u7EA7 secondary</Button>\r
  <Button @click="onClick3">\u6210\u529F success</Button>\r
  <Button @click="onClick4">\u8B66\u544A warning</Button>\r
  <Button @click="onClick5">\u9519\u8BEF error</Button>\r
</template>\r
\r
<script setup>\r
import { Toast, Button } from "../../lib/index";\r
\r
const onClick1 = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A ~", type: "normal" });\r
};\r
const onClick2 = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u6B21\u8981\u7684\u6D88\u606F\u63D0\u793A ~", type: "secondary" });\r
};\r
const onClick3 = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A ~", type: "success" });\r
};\r
const onClick4 = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A ~", type: "warning" });\r
};\r
const onClick5 = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A ~", type: "error" });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u72B6\u6001",e.__sourceDescription="\u5305\u542B\u7684\u72B6\u6001\u6709 [normal, secondary, success, warning, error]"};const Nc=p("\u666E\u901A normal"),Gc=p("\u6B21\u7EA7 secondary"),Yc=p("\u6210\u529F success"),Kc=p("\u8B66\u544A warning"),Zc=p("\u9519\u8BEF error"),eo={setup(e){const t=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A ~",type:"normal"})},o=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u6B21\u8981\u7684\u6D88\u606F\u63D0\u793A ~",type:"secondary"})},r=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A ~",type:"success"})},c=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A ~",type:"warning"})},u=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A ~",type:"error"})};return(_,f)=>(i(),d(y,null,[n(s($),{onClick:t},{default:a(()=>[Nc]),_:1}),n(s($),{onClick:o},{default:a(()=>[Gc]),_:1}),n(s($),{onClick:r},{default:a(()=>[Yc]),_:1}),n(s($),{onClick:c},{default:a(()=>[Kc]),_:1}),n(s($),{onClick:u},{default:a(()=>[Zc]),_:1})],64))}};typeof St=="function"&&St(eo);var jt=e=>{e.__sourceCode=`<template>\r
  <Button @click="onClick">\u6253\u5F00 toast</Button>\r
</template>\r
\r
<script setup>\r
import { Toast, Button } from "../../lib/index";\r
\r
const onClick = () => {\r
  Toast({ text: "\u8FD9\u662F\u4E00\u6761\u5C45\u4E2D\u7684\u6D88\u606F\u63D0\u793A~", center: true });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u6587\u5B57\u5C45\u4E2D",e.__sourceDescription="\u4F7F\u7528 center \u5C5E\u6027\u8BA9\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D"};const Wc=p("\u6253\u5F00 toast"),to={setup(e){const t=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u5C45\u4E2D\u7684\u6D88\u606F\u63D0\u793A~",center:!0})};return(o,r)=>(i(),B(s($),{onClick:t},{default:a(()=>[Wc]),_:1}))}};typeof jt=="function"&&jt(to);var Mt=e=>{e.__sourceCode=`<template>\r
  <Button @click="onClick1">\u53EF\u5173\u95ED\uFF0Cdelay: 5</Button>\r
  <Button @click="onClick2">\u53EF\u5173\u95ED\uFF0Cdelay: 0</Button>\r
</template>\r
\r
<script setup>\r
import { Toast, Button } from "../../lib/index";\r
\r
const onClick1 = () => {\r
  Toast({\r
    text: "\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A\uFF0C\u4E0D\u64CD\u4F5C\u4E94\u79D2\u540E\u6211\u5C31\u4F1A\u81EA\u52A8\u6D88\u5931\u54E6 ~",\r
    showClose: true,\r
    delay: 5,\r
    destroyed() {\r
      console.log("\u6211\u8D70\u4E86");\r
    },\r
  });\r
};\r
const onClick2 = () => {\r
  Toast({\r
    text: "\u8FD9\u662F\u4E00\u6761\u9700\u8981\u70B9\u51FB\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A ~",\r
    showClose: true,\r
    delay: 0,\r
    destroyed() {\r
      console.log("\u6211\u8D70\u4E86");\r
    },\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u5173\u95ED",e.__sourceDescription="\u53EF\u4EE5\u4F7F\u7528 showClose \u5C5E\u6027\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\uFF0C\u9ED8\u8BA43\u79D2\u540E\u6D88\u5931\u3002\u624B\u52A8\u4F20\u5165 delay \u5C5E\u6027\u63A7\u5236\u5EF6\u65F6\u5173\u95ED\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002delay \u8BBE\u7F6E 0 \u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED"};const Qc=p("\u53EF\u5173\u95ED\uFF0Cdelay: 5"),Xc=p("\u53EF\u5173\u95ED\uFF0Cdelay: 0"),no={setup(e){const t=()=>{W({text:"\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A\uFF0C\u4E0D\u64CD\u4F5C\u4E94\u79D2\u540E\u6211\u5C31\u4F1A\u81EA\u52A8\u6D88\u5931\u54E6 ~",showClose:!0,delay:5,destroyed(){console.log("\u6211\u8D70\u4E86")}})},o=()=>{W({text:"\u8FD9\u662F\u4E00\u6761\u9700\u8981\u70B9\u51FB\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A ~",showClose:!0,delay:0,destroyed(){console.log("\u6211\u8D70\u4E86")}})};return(r,c)=>(i(),d(y,null,[n(s($),{onClick:t},{default:a(()=>[Qc]),_:1}),n(s($),{onClick:o},{default:a(()=>[Xc]),_:1})],64))}};typeof Mt=="function"&&Mt(no);const Jc=l("h1",null,"Toast \u793A\u4F8B",-1),ei={setup(e){const t=[{params:"text",desc:"\u63D0\u793A\u6587\u672C",type:"string",select:"string",default:"\u4E00"},{params:"type",desc:"\u72B6\u6001\u7C7B\u578B",type:"string",select:"normal / secondary / success / warning / error",default:"normal"},{params:"center",desc:"\u6587\u5B57\u5C45\u4E2D",type:"boolean",select:"true / false",default:"false"},{params:"showClose",desc:"\u662F\u5426\u80FD\u624B\u52A8\u5173\u95ED",type:"boolean",select:"true / false",default:"false"},{params:"delay",desc:"\u624B\u52A8\u4E0D\u5173\u95ED\u5EF6\u65F6\u591A\u4E45\u81EA\u52A8\u5173\u95ED",type:"number",select:"number",default:"3"}];return(o,r)=>(i(),d(y,null,[Jc,n(g,{component:Jn}),n(g,{component:eo}),n(g,{component:to}),n(g,{component:no}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Dt=e=>{e.__sourceCode=`<template>\r
  <div class="home-banner">\r
    <CarouselScroll\r
      :sliders="sliders"\r
      width="1150"\r
      height="600"\r
      autoPlay\r
      :duration="2000"\r
    ></CarouselScroll>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref, onMounted } from "vue";\r
import { CarouselScroll } from "../../lib/index";\r
\r
const sliders = ref([]);\r
\r
onMounted(() => {\r
  sliders.value = [\r
    {\r
      id: "1",\r
      imgUrl: "//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "2",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "3",\r
      imgUrl: "//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "4",\r
      imgUrl: "//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",\r
      hrefUrl: "category",\r
    },\r
    {\r
      id: "5",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",\r
      hrefUrl: "carousel",\r
    },\r
  ];\r
});\r
<\/script>\r
\r
<style lang="scss">\r
.home-banner {\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>`,e.__sourceCodeTitle="\u6EDA\u52A8\u8F6E\u64AD\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="sliders \u4F20\u5165\u8F6E\u64AD\u6570\u636E\uFF0Cwidth\u3001height \u8BBE\u7F6E\u8F6E\u64AD\u9AD8\u5EA6\uFF0CautoPlay\u3001duration \u8BBE\u7F6E\u81EA\u52A8\u8F6E\u64AD\u548C\u95F4\u9694"};const ti={class:"home-banner"},oo={setup(e){const t=m([]);return _e(()=>{t.value=[{id:"1",imgUrl:"//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",hrefUrl:"carousel"},{id:"2",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",hrefUrl:"carousel"},{id:"3",imgUrl:"//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",hrefUrl:"carousel"},{id:"4",imgUrl:"//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",hrefUrl:"category"},{id:"5",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",hrefUrl:"carousel"}]}),(o,r)=>(i(),d("div",ti,[n(s(fn),{sliders:t.value,width:"1150",height:"600",autoPlay:"",duration:2e3},null,8,["sliders"])]))}};typeof Dt=="function"&&Dt(oo);var qt=e=>{e.__sourceCode=`<template>\r
  <div class="home-banner">\r
    <CarouselScroll :sliders="sliders" width="1150" height="600" :gapless="true"></CarouselScroll>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref, onMounted } from "vue";\r
import { CarouselScroll } from "../../lib/index";\r
\r
const sliders = ref([]);\r
onMounted(() => {\r
  sliders.value = [\r
    {\r
      id: "1",\r
      imgUrl: "//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "2",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "3",\r
      imgUrl: "//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "4",\r
      imgUrl: "//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",\r
      hrefUrl: "category",\r
    },\r
    {\r
      id: "5",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",\r
      hrefUrl: "carousel",\r
    },\r
  ];\r
});\r
<\/script>\r
\r
<style lang="scss">\r
.home-banner {\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>`,e.__sourceCodeTitle="\u652F\u6301\u65E0\u7F1D\u8F6E\u64AD",e.__sourceDescription="\u8BBE\u7F6E gapless \u5C5E\u6027\u5F00\u542F\u65E0\u7F1D\u8F6E\u64AD"};const ni={class:"home-banner"},ro={setup(e){const t=m([]);return _e(()=>{t.value=[{id:"1",imgUrl:"//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",hrefUrl:"carousel"},{id:"2",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",hrefUrl:"carousel"},{id:"3",imgUrl:"//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",hrefUrl:"carousel"},{id:"4",imgUrl:"//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",hrefUrl:"category"},{id:"5",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",hrefUrl:"carousel"}]}),(o,r)=>(i(),d("div",ni,[n(s(fn),{sliders:t.value,width:"1150",height:"600",gapless:!0},null,8,["sliders"])]))}};typeof qt=="function"&&qt(ro);var Pt=e=>{e.__sourceCode=`<template>\r
  <div class="home-banner">\r
    <CarouselBase :sliders="sliders" width="1150" height="600" autoPlay></CarouselBase>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref, onMounted } from "vue";\r
import { CarouselBase } from "../../lib/index";\r
\r
const sliders = ref([]);\r
onMounted(() => {\r
  sliders.value = [\r
    {\r
      id: "1",\r
      imgUrl: "//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "2",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "3",\r
      imgUrl: "//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "4",\r
      imgUrl: "//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",\r
      hrefUrl: "category",\r
    },\r
    {\r
      id: "5",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",\r
      hrefUrl: "carousel",\r
    },\r
  ];\r
});\r
<\/script>\r
\r
<style lang="scss">\r
.home-banner {\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>`,e.__sourceCodeTitle="\u900F\u660E\u5EA6\u6E10\u53D8\u8F6E\u64AD",e.__sourceDescription=""};const oi={class:"home-banner"},so={setup(e){const t=m([]);return _e(()=>{t.value=[{id:"1",imgUrl:"//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",hrefUrl:"carousel"},{id:"2",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",hrefUrl:"carousel"},{id:"3",imgUrl:"//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",hrefUrl:"carousel"},{id:"4",imgUrl:"//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",hrefUrl:"category"},{id:"5",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",hrefUrl:"carousel"}]}),(o,r)=>(i(),d("div",oi,[n(s(_n),{sliders:t.value,width:"1150",height:"600",autoPlay:""},null,8,["sliders"])]))}};typeof Pt=="function"&&Pt(so);var Ut=e=>{e.__sourceCode=`<template>\r
  <div class="home-banner">\r
    <CarouselBase :sliders="sliders" width="1150" height="600" autoPlay loop></CarouselBase>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref, onMounted } from "vue";\r
import { CarouselBase } from "../../lib/index";\r
\r
const sliders = ref([]);\r
onMounted(() => {\r
  sliders.value = [\r
    {\r
      id: "1",\r
      imgUrl: "//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "2",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "3",\r
      imgUrl: "//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",\r
      hrefUrl: "carousel",\r
    },\r
    {\r
      id: "4",\r
      imgUrl: "//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",\r
      hrefUrl: "category",\r
    },\r
    {\r
      id: "5",\r
      imgUrl: "//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",\r
      hrefUrl: "carousel",\r
    },\r
  ];\r
});\r
<\/script>\r
\r
<style lang="scss">\r
.home-banner {\r
  display: flex;\r
  justify-content: center;\r
}\r
</style>`,e.__sourceCodeTitle="\u652F\u6301 loop",e.__sourceDescription="\u8BBE\u7F6E loop \u5C5E\u6027\u5F00\u542F\u65E0\u9650\u8F6E\u64AD"};const ri={class:"home-banner"},lo={setup(e){const t=m([]);return _e(()=>{t.value=[{id:"1",imgUrl:"//tva1.sinaimg.cn/large/007c1Ltfgy1h0plytaly5j32yo1o0tj6.jpg",hrefUrl:"carousel"},{id:"2",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm00mnrcj32yo1o0qhq.jpg",hrefUrl:"carousel"},{id:"3",imgUrl:"//tvax2.sinaimg.cn/large/007c1Ltfgy1h0pm0au14kj33341rp4fh.jpg",hrefUrl:"carousel"},{id:"4",imgUrl:"//tva4.sinaimg.cn/large/007c1Ltfgy1h0pm0i71mxj33kv1o07ir.jpg",hrefUrl:"category"},{id:"5",imgUrl:"//tva3.sinaimg.cn/large/007c1Ltfgy1h0pm0seq94j333426k105.jpg",hrefUrl:"carousel"}]}),(o,r)=>(i(),d("div",ri,[n(s(_n),{sliders:t.value,width:"1150",height:"600",autoPlay:"",loop:""},null,8,["sliders"])]))}};typeof Ut=="function"&&Ut(lo);const si=l("h1",null,"Carousel \u793A\u4F8B",-1),li={setup(e){const t=[{params:"width",desc:"\u8F6E\u64AD\u56FE\u5BBD\u5EA6",type:"string",select:"string",default:"1150"},{params:"height",desc:"\u8F6E\u64AD\u56FE\u9AD8\u5EA6",type:"string",select:"string",default:"600"},{params:"sliders",desc:"\u786E\u8BA4\u89E6\u53D1\u51FD\u6570",type:"function",select:"() => {}",default:"() => {}"},{params:"autoPlay",desc:"\u662F\u5426\u5F00\u542F\u81EA\u52A8\u8F6E\u64AD",type:"boolean",select:"true / false",default:"false"},{params:"duration",desc:"\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\u65F6\u95F4",type:"number",select:"number",default:"3000"},{params:"gapless",desc:"\u6EDA\u52A8\u8F6E\u64AD\u662F\u5426\u5F00\u542F\u65E0\u7F1D\u8F6E\u64AD",type:"boolean",select:"true / false",default:"false"},{params:"loop",desc:"\u900F\u660E\u6E10\u53D8\u8F6E\u64AD\u662F\u5426\u5F00\u542F\u65E0\u8FB9\u754C\u8F6E\u64AD",type:"boolean",select:"true / false",default:"false"}];return(o,r)=>(i(),d(y,null,[si,n(g,{component:oo}),n(g,{component:ro}),n(g,{component:so}),n(g,{component:lo}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Rt=e=>{e.__sourceCode=`<template>\r
  Scroll down to see the bottom-right button\r
  <BackTop />\r
</template>\r
\r
<script setup>\r
import { BackTop } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u901A\u8FC7\u6ED1\u52A8\u6765\u67E5\u770B\u5BB9\u5668\u53F3\u4E0B\u89D2\u7684\u6309\u94AE"};const ai=p(" Scroll down to see the bottom-right button "),ao={setup(e){return(t,o)=>(i(),d(y,null,[ai,n(s(mn))],64))}};typeof Rt=="function"&&Rt(ao);var Vt=e=>{e.__sourceCode=`<template>\r
  Scroll down to see the bottom-right button\r
  <BackTop right="60" :visibilityHeight="330" @clicked="handleClick">\r
    <div\r
      style="\r
        height: 45px;\r
        width: 45px;\r
        background-color: #f2f5f6;\r
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);\r
        text-align: center;\r
        line-height: 45px;\r
        color: #1989fa;\r
        text-align: center;\r
      "\r
    >\r
      UP\r
    </div>\r
  </BackTop>\r
</template>\r
\r
<script setup>\r
import { BackTop } from "../../lib/index";\r
\r
const handleClick = () => {\r
  console.log("BackTop is clicked");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u5185\u5BB9",e.__sourceDescription="\u663E\u793A\u533A\u57DF\u88AB\u56FA\u5B9A\u4E3A 40px * 40px \u7684\u533A\u57DF, \u5176\u4E2D\u7684\u5185\u5BB9\u53EF\u652F\u6301\u81EA\u5B9A\u4E49"};const ci=p(" Scroll down to see the bottom-right button "),ii=l("div",{style:{height:"45px",width:"45px","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"45px",color:"#1989fa"}}," UP ",-1),co={setup(e){const t=()=>{console.log("BackTop is clicked")};return(o,r)=>(i(),d(y,null,[ci,n(s(mn),{right:"60",visibilityHeight:330,onClicked:t},{default:a(()=>[ii]),_:1})],64))}};typeof Vt=="function"&&Vt(co);const di=l("h1",null,"BackTop \u793A\u4F8B",-1),ui=l("div",{style:{height:"3000px"}},null,-1),pi={setup(e){const t=[{params:"visibility-height",desc:"\u6EDA\u52A8\u9AD8\u5EA6\u5927\u4E8E\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0",type:"number",select:"number",default:"100"},{params:"right",desc:"	\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD",type:"	string",select:"string",default:"20"},{params:"bottom",desc:"	\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u4E0B\u8FB9\u8DDD",type:"	string",select:"string",default:"16"},{params:"clicked",desc:"	\u70B9\u51FB\u6309\u94AE\u56DE\u4F20\u89E6\u53D1\u7684\u4E8B\u4EF6",type:"	function",select:"() => {}",default:"() => {}"}];return(o,r)=>(i(),d(y,null,[di,n(g,{component:ao}),n(g,{component:co}),n(V,{columns:s(O),data:t},null,8,["columns"]),ui],64))}};const v=A({name:"CoastCol",props:{span:{type:[Number,String],required:!1,default:24},offset:{type:[Number,String],required:!1},xs:{type:[Number,String,Object],required:!1,default:()=>({})},sm:{type:[Number,String,Object],required:!1,default:()=>({})},md:{type:[Number,String,Object],required:!1,default:()=>({})},lg:{type:[Number,String,Object],required:!1,default:()=>({})},xl:{type:[Number,String,Object],required:!1,default:()=>({})},xxl:{type:[Number,String,Object],required:!1,default:()=>({})}},setup(e,{slots:t}){const{gutter:o}=ie("CoRow",{gutter:{value:0}}),r=M(()=>{const u=["coast-col",{[`coast-col-span-${e.span}`]:e.span,[`coast-col-offset-${e.offset}`]:e.offset}];return["xs","sm","md","lg","xl","xxl"].forEach(f=>{const h=e[f],b=typeof h;b==="number"||b==="string"?u.push(`coast-col-${f}-span-${h}`):b==="object"&&Object.keys(h).forEach(C=>{u.push(`coast-col-${f}-${C}-${h[C]}`)})}),u}),c=M(()=>{const u=o.value?`${o.value/2}px`:"";return{paddingLeft:u,paddingRight:u}});return()=>{var u;return Y("div",{class:r.value,style:c.value},(u=t.default)==null?void 0:u.call(t))}}}),j=A({name:"CoastRow",props:{gutter:{type:[Number,String],required:!1,default:0},justify:{type:String,required:!1,validator:e=>["end","start","center","space-between","space-around","space-evenly"].includes(e)}},setup(e,{slots:t}){const o=M(()=>e.gutter);cn("CoRow",{gutter:o});const r=M(()=>{const u=e.gutter?`${-e.gutter/2}px`:"";return{marginLeft:u,marginRight:u}}),c=M(()=>["coast-row",{[`coast-justify-${e.justify}`]:e.justify}]);return()=>{var u;return Y("div",{class:c.value,style:r.value},(u=t.default)==null?void 0:u.call(t))}}});var Ot=e=>{e.__sourceCode=`<template>\r
  <Row>\r
    <Col><div class="card" /></Col>\r
  </Row>\r
  <Row>\r
    <Col span="12"><div class="card"></div></Col>\r
    <Col span="12"><div class="card light"></div></Col>\r
  </Row>\r
  <Row>\r
    <Col span="8"><div class="card"></div></Col>\r
    <Col span="8"><div class="card light"></div></Col>\r
    <Col span="8"><div class="card"></div></Col>\r
  </Row>\r
  <Row>\r
    <Col span="6"><div class="card"></div></Col>\r
    <Col span="6"><div class="card light"></div></Col>\r
    <Col span="6"><div class="card"></div></Col>\r
    <Col span="6"><div class="card light"></div></Col>\r
  </Row>\r
  <Row>\r
    <Col span="4"><div class="card"></div></Col>\r
    <Col span="4"><div class="card light"></div></Col>\r
    <Col span="4"><div class="card"></div></Col>\r
    <Col span="4"><div class="card light"></div></Col>\r
    <Col span="4"><div class="card"></div></Col>\r
    <Col span="4"><div class="card light"></div></Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-row {\r
  margin-bottom: 20px;\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u57FA\u7840\u5E03\u5C40",e.__sourceDescription="\u901A\u8FC7\u57FA\u7840\u7684 24 \u5206\u680F\uFF0C\u8FC5\u901F\u7B80\u4FBF\u5730\u521B\u5EFA\u5E03\u5C40"};const H=e=>(F("data-v-f5f8a22e"),e=e(),N(),e),_i=H(()=>l("div",{class:"card"},null,-1)),fi=H(()=>l("div",{class:"card"},null,-1)),mi=H(()=>l("div",{class:"card light"},null,-1)),hi=H(()=>l("div",{class:"card"},null,-1)),vi=H(()=>l("div",{class:"card light"},null,-1)),gi=H(()=>l("div",{class:"card"},null,-1)),yi=H(()=>l("div",{class:"card"},null,-1)),bi=H(()=>l("div",{class:"card light"},null,-1)),$i=H(()=>l("div",{class:"card"},null,-1)),xi=H(()=>l("div",{class:"card light"},null,-1)),Ci=H(()=>l("div",{class:"card"},null,-1)),wi=H(()=>l("div",{class:"card light"},null,-1)),ki=H(()=>l("div",{class:"card"},null,-1)),Bi=H(()=>l("div",{class:"card light"},null,-1)),Ti=H(()=>l("div",{class:"card"},null,-1)),zi=H(()=>l("div",{class:"card light"},null,-1)),io={setup(e){return(t,o)=>(i(),d(y,null,[n(s(j),null,{default:a(()=>[n(s(v),null,{default:a(()=>[_i]),_:1})]),_:1}),n(s(j),null,{default:a(()=>[n(s(v),{span:"12"},{default:a(()=>[fi]),_:1}),n(s(v),{span:"12"},{default:a(()=>[mi]),_:1})]),_:1}),n(s(j),null,{default:a(()=>[n(s(v),{span:"8"},{default:a(()=>[hi]),_:1}),n(s(v),{span:"8"},{default:a(()=>[vi]),_:1}),n(s(v),{span:"8"},{default:a(()=>[gi]),_:1})]),_:1}),n(s(j),null,{default:a(()=>[n(s(v),{span:"6"},{default:a(()=>[yi]),_:1}),n(s(v),{span:"6"},{default:a(()=>[bi]),_:1}),n(s(v),{span:"6"},{default:a(()=>[$i]),_:1}),n(s(v),{span:"6"},{default:a(()=>[xi]),_:1})]),_:1}),n(s(j),null,{default:a(()=>[n(s(v),{span:"4"},{default:a(()=>[Ci]),_:1}),n(s(v),{span:"4"},{default:a(()=>[wi]),_:1}),n(s(v),{span:"4"},{default:a(()=>[ki]),_:1}),n(s(v),{span:"4"},{default:a(()=>[Bi]),_:1}),n(s(v),{span:"4"},{default:a(()=>[Ti]),_:1}),n(s(v),{span:"4"},{default:a(()=>[zi]),_:1})]),_:1})],64))}};typeof Ot=="function"&&Ot(io);var Ii=x(io,[["__scopeId","data-v-f5f8a22e"]]);var Ht=e=>{e.__sourceCode=`<template>\r
  <Row gutter="20">\r
    <Col span="6"><div class="card"></div></Col>\r
    <Col span="6"><div class="card light"></div></Col>\r
    <Col span="6"><div class="card"></div></Col>\r
    <Col span="6"><div class="card light"></div></Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-row {\r
  margin-bottom: 20px;\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u5206\u680F\u95F4\u9694",e.__sourceDescription="Row \u7EC4\u4EF6 \u63D0\u4F9B gutter \u5C5E\u6027\u6765\u6307\u5B9A\u6BCF\u4E00\u680F\u4E4B\u95F4\u7684\u95F4\u9694\uFF0C\u9ED8\u8BA4\u95F4\u9694\u4E3A 0"};const ye=e=>(F("data-v-b05350cc"),e=e(),N(),e),Li=ye(()=>l("div",{class:"card"},null,-1)),Si=ye(()=>l("div",{class:"card light"},null,-1)),ji=ye(()=>l("div",{class:"card"},null,-1)),Mi=ye(()=>l("div",{class:"card light"},null,-1)),uo={setup(e){return(t,o)=>(i(),B(s(j),{gutter:"20"},{default:a(()=>[n(s(v),{span:"6"},{default:a(()=>[Li]),_:1}),n(s(v),{span:"6"},{default:a(()=>[Si]),_:1}),n(s(v),{span:"6"},{default:a(()=>[ji]),_:1}),n(s(v),{span:"6"},{default:a(()=>[Mi]),_:1})]),_:1}))}};typeof Ht=="function"&&Ht(uo);var Di=x(uo,[["__scopeId","data-v-b05350cc"]]);var At=e=>{e.__sourceCode=`<template>\r
  <Row :gutter="20">\r
    <Col span="16"><div class="card"></div> </Col>\r
    <Col span="8"><div class="card light"></div></Col>\r
  </Row>\r
  <Row :gutter="20">\r
    <Col span="8"><div class="card"></div></Col>\r
    <Col span="8"><div class="card light"></div></Col>\r
    <Col span="4"><div class="card"></div></Col>\r
    <Col span="4"><div class="card light"></div></Col>\r
  </Row>\r
  <Row :gutter="20">\r
    <Col span="4"><div class="card"></div></Col>\r
    <Col span="16"><div class="card light"></div></Col>\r
    <Col span="4"><div class="card"></div></Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-row {\r
  margin-bottom: 20px;\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u6DF7\u5408\u5E03\u5C40",e.__sourceDescription="\u901A\u8FC7\u57FA\u7840\u7684 1/24 \u5206\u680F\u4EFB\u610F\u6269\u5C55\u7EC4\u5408\u5F62\u6210\u8F83\u4E3A\u590D\u6742\u7684\u6DF7\u5408\u5E03\u5C40"};const Q=e=>(F("data-v-2f21e653"),e=e(),N(),e),qi=Q(()=>l("div",{class:"card"},null,-1)),Pi=Q(()=>l("div",{class:"card light"},null,-1)),Ui=Q(()=>l("div",{class:"card"},null,-1)),Ri=Q(()=>l("div",{class:"card light"},null,-1)),Vi=Q(()=>l("div",{class:"card"},null,-1)),Oi=Q(()=>l("div",{class:"card light"},null,-1)),Hi=Q(()=>l("div",{class:"card"},null,-1)),Ai=Q(()=>l("div",{class:"card light"},null,-1)),Ei=Q(()=>l("div",{class:"card"},null,-1)),po={setup(e){return(t,o)=>(i(),d(y,null,[n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:"16"},{default:a(()=>[qi]),_:1}),n(s(v),{span:"8"},{default:a(()=>[Pi]),_:1})]),_:1}),n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:"8"},{default:a(()=>[Ui]),_:1}),n(s(v),{span:"8"},{default:a(()=>[Ri]),_:1}),n(s(v),{span:"4"},{default:a(()=>[Vi]),_:1}),n(s(v),{span:"4"},{default:a(()=>[Oi]),_:1})]),_:1}),n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:"4"},{default:a(()=>[Hi]),_:1}),n(s(v),{span:"16"},{default:a(()=>[Ai]),_:1}),n(s(v),{span:"4"},{default:a(()=>[Ei]),_:1})]),_:1})],64))}};typeof At=="function"&&At(po);var Fi=x(po,[["__scopeId","data-v-2f21e653"]]);var Et=e=>{e.__sourceCode=`<template>\r
  <Row :gutter="20">\r
    <Col :span="6"><div class="card"></div> </Col>\r
    <Col :span="6" :offset="6"><div class="card light"></div></Col>\r
  </Row>\r
  <Row :gutter="20">\r
    <Col :span="6" :offset="6"><div class="card"></div></Col>\r
    <Col :span="6" :offset="6"><div class="card light"></div></Col>\r
  </Row>\r
  <Row :gutter="20">\r
    <Col :span="12" :offset="6"><div class="card"></div></Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-row {\r
  margin-bottom: 20px;\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u5206\u680F\u504F\u79FB",e.__sourceDescription="\u652F\u6301\u504F\u79FB\u6307\u5B9A\u7684\u680F\u6570\uFF0C\u901A\u8FC7\u5236\u5B9A Col \u7EC4\u4EF6\u7684 offset \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u5206\u680F\u504F\u79FB\u7684\u680F\u6570"};const fe=e=>(F("data-v-66eb6e30"),e=e(),N(),e),Ni=fe(()=>l("div",{class:"card"},null,-1)),Gi=fe(()=>l("div",{class:"card light"},null,-1)),Yi=fe(()=>l("div",{class:"card"},null,-1)),Ki=fe(()=>l("div",{class:"card light"},null,-1)),Zi=fe(()=>l("div",{class:"card"},null,-1)),_o={setup(e){return(t,o)=>(i(),d(y,null,[n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[Ni]),_:1}),n(s(v),{span:6,offset:6},{default:a(()=>[Gi]),_:1})]),_:1}),n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:6,offset:6},{default:a(()=>[Yi]),_:1}),n(s(v),{span:6,offset:6},{default:a(()=>[Ki]),_:1})]),_:1}),n(s(j),{gutter:20},{default:a(()=>[n(s(v),{span:12,offset:6},{default:a(()=>[Zi]),_:1})]),_:1})],64))}};typeof Et=="function"&&Et(_o);var Wi=x(_o,[["__scopeId","data-v-66eb6e30"]]);var Ft=e=>{e.__sourceCode=`<template>\r
  <Row justify="start">\r
    <Col :span="6"><div class="card"></div> </Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
  <Row justify="center">\r
    <Col :span="6"><div class="card"></div></Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
  <Row justify="end">\r
    <Col :span="6"><div class="card"></div></Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
  <Row justify="space-between">\r
    <Col :span="6"><div class="card"></div></Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
  <Row justify="space-around">\r
    <Col :span="6"><div class="card"></div></Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
  <Row justify="space-evenly">\r
    <Col :span="6"><div class="card"></div></Col>\r
    <Col :span="6"><div class="card light"></div></Col>\r
    <Col :span="6"><div class="card"></div></Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-row {\r
  margin-bottom: 20px;\r
  &:last-child {\r
    margin-bottom: 0;\r
  }\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u5BF9\u9F50\u65B9\u5F0F",e.__sourceDescription="\u901A\u8FC7 flex \u5E03\u5C40\u7684 justify-content \u6765\u5BF9\u5206\u680F\u8FDB\u884C\u7075\u6D3B\u7684\u5BF9\u9F50\uFF0C\u5E76\u53EF\u901A\u8FC7 Row \u7684 justify \u5C5E\u6027\u6765\u6307\u5B9A start, center, end, space-between, space-around \u5176\u4E2D\u7684\u503C\u6765\u5B9A\u4E49\u5B50\u5143\u7D20\u7684\u6392\u7248\u65B9\u5F0F"};const U=e=>(F("data-v-40c3cbfd"),e=e(),N(),e),Qi=U(()=>l("div",{class:"card"},null,-1)),Xi=U(()=>l("div",{class:"card light"},null,-1)),Ji=U(()=>l("div",{class:"card"},null,-1)),e2=U(()=>l("div",{class:"card"},null,-1)),t2=U(()=>l("div",{class:"card light"},null,-1)),n2=U(()=>l("div",{class:"card"},null,-1)),o2=U(()=>l("div",{class:"card"},null,-1)),r2=U(()=>l("div",{class:"card light"},null,-1)),s2=U(()=>l("div",{class:"card"},null,-1)),l2=U(()=>l("div",{class:"card"},null,-1)),a2=U(()=>l("div",{class:"card light"},null,-1)),c2=U(()=>l("div",{class:"card"},null,-1)),i2=U(()=>l("div",{class:"card"},null,-1)),d2=U(()=>l("div",{class:"card light"},null,-1)),u2=U(()=>l("div",{class:"card"},null,-1)),p2=U(()=>l("div",{class:"card"},null,-1)),_2=U(()=>l("div",{class:"card light"},null,-1)),f2=U(()=>l("div",{class:"card"},null,-1)),fo={setup(e){return(t,o)=>(i(),d(y,null,[n(s(j),{justify:"start"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[Qi]),_:1}),n(s(v),{span:6},{default:a(()=>[Xi]),_:1}),n(s(v),{span:6},{default:a(()=>[Ji]),_:1})]),_:1}),n(s(j),{justify:"center"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[e2]),_:1}),n(s(v),{span:6},{default:a(()=>[t2]),_:1}),n(s(v),{span:6},{default:a(()=>[n2]),_:1})]),_:1}),n(s(j),{justify:"end"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[o2]),_:1}),n(s(v),{span:6},{default:a(()=>[r2]),_:1}),n(s(v),{span:6},{default:a(()=>[s2]),_:1})]),_:1}),n(s(j),{justify:"space-between"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[l2]),_:1}),n(s(v),{span:6},{default:a(()=>[a2]),_:1}),n(s(v),{span:6},{default:a(()=>[c2]),_:1})]),_:1}),n(s(j),{justify:"space-around"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[i2]),_:1}),n(s(v),{span:6},{default:a(()=>[d2]),_:1}),n(s(v),{span:6},{default:a(()=>[u2]),_:1})]),_:1}),n(s(j),{justify:"space-evenly"},{default:a(()=>[n(s(v),{span:6},{default:a(()=>[p2]),_:1}),n(s(v),{span:6},{default:a(()=>[_2]),_:1}),n(s(v),{span:6},{default:a(()=>[f2]),_:1})]),_:1})],64))}};typeof Ft=="function"&&Ft(fo);var m2=x(fo,[["__scopeId","data-v-40c3cbfd"]]);var Nt=e=>{e.__sourceCode=`<template>\r
  <Row gutter="10">\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card light"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card light"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card light"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card"></div>\r
    </Col>\r
    <Col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">\r
      <div class="card light"></div>\r
    </Col>\r
  </Row>\r
</template>\r
\r
<script setup>\r
import { Row, Col } from "../../lib/Grid/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.coast-col {\r
  margin-bottom: 20px;\r
}\r
.card {\r
  min-height: 36px;\r
  background: #d3dce6;\r
  border-radius: 4px;\r
  &.light {\r
    background: #e5e9f2;\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u54CD\u5E94\u5F0F\u5E03\u5C40",e.__sourceDescription="\u53C2\u7167 Bootstrap \u7684 \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1Axs sm md lg xl xxl"};const te=e=>(F("data-v-edf67060"),e=e(),N(),e),h2=te(()=>l("div",{class:"card"},null,-1)),v2=te(()=>l("div",{class:"card light"},null,-1)),g2=te(()=>l("div",{class:"card"},null,-1)),y2=te(()=>l("div",{class:"card light"},null,-1)),b2=te(()=>l("div",{class:"card"},null,-1)),$2=te(()=>l("div",{class:"card light"},null,-1)),x2=te(()=>l("div",{class:"card"},null,-1)),C2=te(()=>l("div",{class:"card light"},null,-1)),mo={setup(e){return(t,o)=>(i(),B(s(j),{gutter:"10"},{default:a(()=>[n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[h2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[v2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[g2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[y2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[b2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[$2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[x2]),_:1}),n(s(v),{span:"24",sm:"12",md:{span:6,offset:2},lg:{offset:0},xl:"4",xxl:"2"},{default:a(()=>[C2]),_:1})]),_:1}))}};typeof Nt=="function"&&Nt(mo);var w2=x(mo,[["__scopeId","data-v-edf67060"]]);const k2=l("h1",null,"Grid \u793A\u4F8B",-1),B2={setup(e){return(t,o)=>(i(),d(y,null,[k2,n(g,{component:Ii}),n(g,{component:Di}),n(g,{component:Fi}),n(g,{component:Wi}),n(g,{component:m2}),n(g,{component:w2})],64))}};var Gt=e=>{e.__sourceCode=`<template>\r
  <div class="skeleton-container">\r
    <div v-for="i in 5" :key="i">\r
      <Skeleton width="200" height="200" bg="rgb(204 228 237)"></Skeleton>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Skeleton } from "../../lib/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.skeleton-container {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: space-between;\r
}\r
:deep(.yun-skeleton) {\r
  margin-bottom: 15px;\r
}\r
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u6DFB\u52A0 width\u3001height\u3001bg \u7B49\u5C5E\u6027\u5B9A\u5236\u9AA8\u67B6\u5C4F"};const T2={class:"skeleton-container"},ho={setup(e){return(t,o)=>(i(),d("div",T2,[(i(),d(y,null,D(5,r=>l("div",{key:r},[n(s(hn),{width:"200",height:"200",bg:"rgb(204 228 237)"})])),64))]))}};typeof Gt=="function"&&Gt(ho);var z2=x(ho,[["__scopeId","data-v-1205efe0"]]);var Yt=e=>{e.__sourceCode=`<template>\r
  <div class="skeleton-container">\r
    <div v-for="i in 5" :key="i">\r
      <Skeleton width="200" height="200" bg="rgb(204 228 237)" animated></Skeleton>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { Skeleton } from "../../lib/index";\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.skeleton-container {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: space-between;\r
}\r
:deep(.yun-skeleton) {\r
  margin-bottom: 15px;\r
}\r
</style>`,e.__sourceCodeTitle="\u589E\u52A0\u95EA\u70C1\u52A8\u753B",e.__sourceDescription="\u6DFB\u52A0 animated \u5C5E\u6027\u5373\u53EF\u5F00\u542F"};const I2={class:"skeleton-container"},vo={setup(e){return(t,o)=>(i(),d("div",I2,[(i(),d(y,null,D(5,r=>l("div",{key:r},[n(s(hn),{width:"200",height:"200",bg:"rgb(204 228 237)",animated:""})])),64))]))}};typeof Yt=="function"&&Yt(vo);var L2=x(vo,[["__scopeId","data-v-842dec2a"]]);const S2=l("h1",null,"Skeleton \u793A\u4F8B",-1),j2={setup(e){const t=[{params:"width",desc:"\u5BBD\u5EA6",type:"string",select:"string",default:"100"},{params:"height",desc:"\u9AD8\u5EA6",type:"string",select:"string",default:"100"},{params:"bg",desc:"\u80CC\u666F\u989C\u8272",type:"string",select:"string",default:"#efefef"},{params:"animated",desc:"\u662F\u5426\u5F00\u542F\u95EA\u70C1\u52A8\u753B",type:"boolean",select:"true / false",default:"false"}];return(o,r)=>(i(),d(y,null,[S2,n(g,{component:z2}),n(g,{component:L2}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Kt=e=>{e.__sourceCode=`<template>\r
  <Breadcrumb>\r
    <BreadcrumbItem to="/doc/backtop">backtop</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/grid">grid</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/skeleton">skeleton</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/toast">toast</BreadcrumbItem>\r
  </Breadcrumb>\r
</template>\r
\r
<script setup>\r
import { Breadcrumb, BreadcrumbItem } from "../../lib/index";\r
<\/script>\r
\r
<style lang="scss"></style>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription=""};const M2=p("backtop"),D2=p("grid"),q2=p("skeleton"),P2=p("toast"),go={setup(e){return(t,o)=>(i(),B(s(vn),null,{default:a(()=>[n(s(X),{to:"/doc/backtop"},{default:a(()=>[M2]),_:1}),n(s(X),{to:"/doc/grid"},{default:a(()=>[D2]),_:1}),n(s(X),{to:"/doc/skeleton"},{default:a(()=>[q2]),_:1}),n(s(X),{to:"/doc/toast"},{default:a(()=>[P2]),_:1})]),_:1}))}};typeof Kt=="function"&&Kt(go);var Zt=e=>{e.__sourceCode=`<template>\r
  <Breadcrumb separator=">">\r
    <BreadcrumbItem to="/doc/backtop">backtop</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/grid">grid</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/skeleton">skeleton</BreadcrumbItem>\r
    <BreadcrumbItem to="/doc/toast">toast</BreadcrumbItem>\r
  </Breadcrumb>\r
</template>\r
\r
<script setup>\r
import { Breadcrumb, BreadcrumbItem } from "../../lib/index";\r
<\/script>\r
\r
<style lang="scss">\r
.yun-bread-item a {\r
  color: #8ca38c;\r
}\r
</style>`,e.__sourceCodeTitle="\u652F\u6301 separator",e.__sourceDescription=""};const U2=p("backtop"),R2=p("grid"),V2=p("skeleton"),O2=p("toast"),yo={setup(e){return(t,o)=>(i(),B(s(vn),{separator:">"},{default:a(()=>[n(s(X),{to:"/doc/backtop"},{default:a(()=>[U2]),_:1}),n(s(X),{to:"/doc/grid"},{default:a(()=>[R2]),_:1}),n(s(X),{to:"/doc/skeleton"},{default:a(()=>[V2]),_:1}),n(s(X),{to:"/doc/toast"},{default:a(()=>[O2]),_:1})]),_:1}))}};typeof Zt=="function"&&Zt(yo);const H2=l("h1",null,"Breadcrumb \u793A\u4F8B",-1),A2={setup(e){const t=[{params:"to",desc:"\u8DF3\u8F6C\u5730\u5740",type:"string / object",select:"string / object",default:"\u4E00"},{params:"separator",desc:"	\u5206\u9694\u7B26",type:"	string",select:"string",default:"/"}];return(o,r)=>(i(),d(y,null,[H2,n(g,{component:go}),n(g,{component:yo}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Wt=e=>{e.__sourceCode=`<template>\r
  <Pagination></Pagination>\r
</template>\r
\r
<script setup>\r
import { Pagination } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription=""};const bo={setup(e){return(t,o)=>(i(),B(s(qe)))}};typeof Wt=="function"&&Wt(bo);var Qt=e=>{e.__sourceCode=`<template>\r
  <Pagination :showCount="8" :total="100" :pageSize="10" :currentPage="5"></Pagination>\r
</template>\r
\r
<script setup>\r
import { Pagination } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301\u66F4\u591A\u5C5E\u6027",e.__sourceDescription="\u53EF\u8BBE\u7F6E showCount \u4E3A\u5C55\u793A\u6309\u94AE\u6570\u91CF\uFF0Ctotal \u4E3A\u603B\u6761\u6570\uFF0CpageSize \u4E3A\u6BCF\u9875\u6761\u6570\uFF0CcurrentPage \u4E3A\u5F53\u524D\u9875\u7801"};const $o={setup(e){return(t,o)=>(i(),B(s(qe),{showCount:8,total:100,pageSize:10,currentPage:5}))}};typeof Qt=="function"&&Qt($o);var Xt=e=>{e.__sourceCode=`<template>\r
  <Pagination @current-change="handleCurrentChange"></Pagination>\r
</template>\r
\r
<script setup>\r
import { Pagination } from "../../lib/index";\r
const handleCurrentChange = (page) => {\r
  console.log("page change", page);\r
};\r
<\/script>`,e.__sourceCodeTitle="\u652F\u6301\u76D1\u542C\u9875\u7801\u70B9\u51FB",e.__sourceDescription=""};const xo={setup(e){const t=o=>{console.log("page change",o)};return(o,r)=>(i(),B(s(qe),{onCurrentChange:t}))}};typeof Xt=="function"&&Xt(xo);const E2=l("h1",null,"Pagination \u793A\u4F8B",-1),F2={setup(e){const t=[{params:"showCount",desc:"\u5C55\u793A\u6309\u94AE\u6570\u91CF",type:"number",select:"number",default:"5"},{params:"total",desc:"\u603B\u6761\u6570",type:"number",select:"number",default:"100"},{params:"pageSize",desc:"\u6BCF\u9875\u6761\u6570",type:"number",select:"number",default:"10"},{params:"currentPage",desc:"\u5F53\u524D\u9875\u7801",type:"number",select:"number",default:"1"},{params:"current-change",desc:"\u9875\u7801\u70B9\u51FB\u56DE\u8C03\u4E8B\u4EF6",type:"function",select:"(page) => {}",default:"(page) => {}"}];return(o,r)=>(i(),d(y,null,[E2,n(g,{component:bo}),n(g,{component:$o}),n(g,{component:xo}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var Jt=e=>{e.__sourceCode=`<template>\r
  <div class="city-container">\r
    <City placeholder="\u53EC\u5524\u5E08\uFF0C\u8BF7\u9009\u62E9\u51FA\u751F\u5730" :fullLocation="fullLocation" @change="changeCity" />\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { City } from "../../lib/index";\r
\r
const fullLocation = ref(null);\r
const changeCity = (result) => {\r
  fullLocation.value = result.fullLocation;\r
};\r
<\/script>\r
\r
<style>\r
.city-container {\r
  padding-bottom: 310px;\r
}\r
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription=""};const N2={class:"city-container"},Co={setup(e){const t=m(null),o=r=>{t.value=r.fullLocation};return(r,c)=>(i(),d("div",N2,[n(s(la),{placeholder:"\u53EC\u5524\u5E08\uFF0C\u8BF7\u9009\u62E9\u51FA\u751F\u5730",fullLocation:t.value,onChange:o},null,8,["fullLocation"])]))}};typeof Jt=="function"&&Jt(Co);const G2=l("h1",null,"City \u793A\u4F8B",-1),Y2={setup(e){const t=[{params:"placeholder",desc:"\u5360\u4F4D\u7B26",type:"string",select:"string",default:"\u8BF7\u9009\u62E9\u914D\u9001\u5730\u5740"},{params:"fullLocation",desc:"\u56DE\u663E\u5B8C\u6574\u5730\u5740",type:"string",select:"string",default:"\u4E00"},{params:"change",desc:"	\u9009\u62E9\u5B8C\u6BD5\u7684\u56DE\u8C03\u51FD\u6570",type:"	function",select:"() => {}",default:"() => {}"}];return(o,r)=>(i(),d(y,null,[G2,n(g,{component:Co}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}};var en=e=>{e.__sourceCode=`<template>\r
  <div class="goods-list">\r
    <ul>\r
      <li v-for="goods in goodsList" :key="goods.id">\r
        <RouterLink :to="\`/doc/infinite\`" class="goods-item">\r
          <img :src="goods.picture" />\r
          <p class="name ellipsis">{{ goods.name }}</p>\r
          <p class="desc ellipsis">{{ goods.desc }}</p>\r
          <p class="price">&yen;{{ goods.price }}</p>\r
        </RouterLink>\r
        <!-- <GoodsItem :goods="goods" /> -->\r
      </li>\r
    </ul>\r
    <InfiniteLoading :loading="loading" :finished="finished" @infinite="getData" />\r
  </div>\r
</template>\r
\r
<script setup>\r
import axios from "axios";\r
import { ref } from "vue";\r
import { InfiniteLoading } from "../../lib/index";\r
\r
// \u52A0\u8F7D\u72B6\u6001\r
const loading = ref(false);\r
\r
// \u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5\r
const finished = ref(false);\r
\r
// \u5546\u54C1\u5217\u8868\u6570\u636E\r
const goodsList = ref([]);\r
\r
const reqParams = {\r
  page: 1,\r
  pageSize: 20,\r
  categoryId: "109311007",\r
};\r
\r
const getData = () => {\r
  loading.value = true;\r
  axios\r
    .post("http://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary", reqParams)\r
    .then(({ data: { result } }) => {\r
      // \u83B7\u53D6\u6570\u636E\u6210\u529F\r
      if (result.items.length) {\r
        // \u6709\u6570\u636E\u5C31\u8FFD\u52A0\u6570\u636E\r
        goodsList.value.push(...result.items);\r
        // \u628Apage\u6539\u6210\u4E0B\u4E00\u9875\u9875\u7801\r
        reqParams.page++;\r
      } else {\r
        // \u6CA1\u6709\u6570\u636E\uFF0C\u4EE3\u8868\u52A0\u8F7D\u5B8C\u6210\r
        finished.value = true;\r
      }\r
      loading.value = false;\r
    });\r
};\r
<\/script>\r
\r
<style scoped lang="scss">\r
.goods-list {\r
  background: #fff;\r
  ul {\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: space-between;\r
    padding: 0 5px;\r
  }\r
  .goods-item {\r
    display: flex;\r
    flex-direction: column;\r
    width: 220px;\r
    padding: 20px 30px;\r
    text-align: center;\r
    transition: all 0.5s;\r
    &:hover {\r
      text-decoration: none;\r
      transform: translate3d(0, -3px, 0);\r
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\r
    }\r
    img {\r
      width: 160px;\r
      height: 160px;\r
    }\r
    p {\r
      text-overflow: ellipsis;\r
      overflow: hidden;\r
      white-space: nowrap;\r
      padding-top: 5px;\r
    }\r
    .name {\r
      font-size: 16px;\r
    }\r
    .desc {\r
      color: #999;\r
    }\r
    .price {\r
      color: #cf4444;\r
      font-size: 20px;\r
    }\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u5F53\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u518D\u52A0\u8F7D\uFF0C\u6570\u636E\u8BF7\u6C42\u5B8C\u6210\u4F1A\u505C\u6B62\u52A0\u8F7D"};const K2={class:"goods-list"},Z2=["src"],W2={class:"name ellipsis"},Q2={class:"desc ellipsis"},X2={class:"price"},wo={setup(e){const t=m(!1),o=m(!1),r=m([]),c={page:1,pageSize:20,categoryId:"109311007"},u=()=>{t.value=!0,Le.post("http://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary",c).then(({data:{result:_}})=>{_.items.length?(r.value.push(..._.items),c.page++):o.value=!0,t.value=!1})};return(_,f)=>{const h=S("RouterLink");return i(),d("div",K2,[l("ul",null,[(i(!0),d(y,null,D(r.value,b=>(i(),d("li",{key:b.id},[n(h,{to:"/doc/infinite",class:"goods-item"},{default:a(()=>[l("img",{src:b.picture},null,8,Z2),l("p",W2,k(b.name),1),l("p",Q2,k(b.desc),1),l("p",X2,"\xA5"+k(b.price),1)]),_:2},1024)]))),128))]),n(s(gn),{loading:t.value,finished:o.value,onInfinite:u},null,8,["loading","finished"])])}}};typeof en=="function"&&en(wo);var J2=x(wo,[["__scopeId","data-v-7aad66ae"]]);var tn=e=>{e.__sourceCode=`<template>\r
  <div class="goods-list">\r
    <ul>\r
      <li v-for="goods in goodsList" :key="goods.id">\r
        <RouterLink :to="\`/doc/infinite\`" class="goods-item">\r
          <img :src="goods.picture" />\r
          <p class="name ellipsis">{{ goods.name }}</p>\r
          <p class="desc ellipsis">{{ goods.desc }}</p>\r
          <p class="price">&yen;{{ goods.price }}</p>\r
        </RouterLink>\r
        <!-- <GoodsItem :goods="goods" /> -->\r
      </li>\r
    </ul>\r
    <InfiniteLoading :loading="loading" :finished="finished" @infinite="getData" />\r
  </div>\r
</template>\r
\r
<script setup>\r
import axios from "axios";\r
import { ref } from "vue";\r
import { InfiniteLoading } from "../../lib/index";\r
\r
// \u52A0\u8F7D\u72B6\u6001\r
const loading = ref(false);\r
\r
// \u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5\r
const finished = ref(false);\r
\r
// \u5546\u54C1\u5217\u8868\u6570\u636E\r
const goodsList = ref([]);\r
\r
const reqParams = {\r
  page: 1,\r
  pageSize: 20,\r
  categoryId: "109311007",\r
};\r
\r
const getData = () => {\r
  loading.value = true;\r
  axios\r
    .post("http://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary", reqParams)\r
    .then(({ data: { result } }) => {\r
      // \u83B7\u53D6\u6570\u636E\u6210\u529F\r
      if (result.items.length) {\r
        // \u6709\u6570\u636E\u5C31\u8FFD\u52A0\u6570\u636E\r
        goodsList.value.push(...result.items);\r
      } else {\r
        // \u6CA1\u6709\u6570\u636E\uFF0C\u4EE3\u8868\u52A0\u8F7D\u5B8C\u6210\r
        finished.value = true;\r
      }\r
      loading.value = false;\r
    });\r
};\r
\r
console.log(goodsList.value);\r
<\/script>\r
\r
<style scoped lang="scss">\r
.goods-list {\r
  background: #fff;\r
  ul {\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: space-between;\r
    padding: 0 5px;\r
  }\r
  .goods-item {\r
    display: flex;\r
    flex-direction: column;\r
    width: 220px;\r
    padding: 20px 30px;\r
    text-align: center;\r
    transition: all 0.5s;\r
    &:hover {\r
      text-decoration: none;\r
      transform: translate3d(0, -3px, 0);\r
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\r
    }\r
    img {\r
      width: 160px;\r
      height: 160px;\r
    }\r
    p {\r
      text-overflow: ellipsis;\r
      overflow: hidden;\r
      white-space: nowrap;\r
      padding-top: 5px;\r
    }\r
    .name {\r
      font-size: 16px;\r
    }\r
    .desc {\r
      color: #999;\r
    }\r
    .price {\r
      color: #cf4444;\r
      font-size: 20px;\r
    }\r
  }\r
}\r
</style>`,e.__sourceCodeTitle="\u652F\u6301\u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D",e.__sourceDescription=""};const ed={class:"goods-list"},td=["src"],nd={class:"name ellipsis"},od={class:"desc ellipsis"},rd={class:"price"},ko={setup(e){const t=m(!1),o=m(!1),r=m([]),c={page:1,pageSize:20,categoryId:"109311007"},u=()=>{t.value=!0,Le.post("http://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary",c).then(({data:{result:_}})=>{_.items.length?r.value.push(..._.items):o.value=!0,t.value=!1})};return console.log(r.value),(_,f)=>{const h=S("RouterLink");return i(),d("div",ed,[l("ul",null,[(i(!0),d(y,null,D(r.value,b=>(i(),d("li",{key:b.id},[n(h,{to:"/doc/infinite",class:"goods-item"},{default:a(()=>[l("img",{src:b.picture},null,8,td),l("p",nd,k(b.name),1),l("p",od,k(b.desc),1),l("p",rd,"\xA5"+k(b.price),1)]),_:2},1024)]))),128))]),n(s(gn),{loading:t.value,finished:o.value,onInfinite:u},null,8,["loading","finished"])])}}};typeof tn=="function"&&tn(ko);var sd=x(ko,[["__scopeId","data-v-23df260f"]]);const ld=l("h1",null,"InfiniteLoading \u793A\u4F8B",-1),ad={setup(e){const t=[{params:"loading",desc:"\u6B63\u5728\u52A0\u8F7D\u4E2D",type:"boolean",select:"true / false",default:"false"},{params:"finished",desc:"\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5",type:"boolean",select:"true / false",default:"false"},{params:"infinite",desc:"\u52A0\u8F7D\u56DE\u8C03\u51FD\u6570",type:"	function",select:"() => {}",default:"() => {}"}];return(o,r)=>(i(),d(y,null,[ld,n(g,{component:J2}),n(V,{columns:s(O),data:t},null,8,["columns"]),n(g,{component:sd})],64))}};var nn=e=>{e.__sourceCode=`<template>\r
  Scroll down to see Stick layout\r
  <Sticky>\r
    <h1>Sticky \u793A\u4F8B</h1>\r
  </Sticky>\r
</template>\r
\r
<script setup>\r
import { Sticky } from "../../lib/index";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528",e.__sourceDescription="\u5411\u4E0B\u6EDA\u52A8\u67E5\u770B Sticky \u7EC4\u4EF6"};const cd=p(" Scroll down to see Stick layout "),id=l("h1",null,"Sticky \u793A\u4F8B",-1),Bo={setup(e){return(t,o)=>(i(),d(y,null,[cd,n(s($a),null,{default:a(()=>[id]),_:1})],64))}};typeof nn=="function"&&nn(Bo);const dd=l("h1",null,"Sticky \u793A\u4F8B",-1),ud=l("div",{style:{height:"2000px"}},null,-1),pd={setup(e){const t=[{params:"component",desc:"\u4F20\u5165\u7EC4\u4EF6",type:"object",select:"object",default:"\u4E00"}];return(o,r)=>(i(),d(y,null,[dd,n(g,{component:Bo}),n(V,{columns:s(O),data:t},null,8,["columns"]),ud],64))}};var on=e=>{e.__sourceCode=`<template>\r
  <CountDown v-slot="{ d, hh, mm, ss }" :time="countDown">\r
    <div class="count-down">{{ d }} \u5929 {{ hh }} \u5C0F\u65F6 {{ mm }} \u5206\u949F {{ ss }} \u79D2</div>\r
  </CountDown>\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import { CountDown } from "../../lib/index";\r
const countDown = ref(10);\r
<\/script>`,e.__sourceCodeTitle="CountDown\u57FA\u672C\u4F7F\u7528",e.__sourceDescription=""};const _d={class:"count-down"},To={setup(e){const t=m(10);return(o,r)=>(i(),B(s(Ba),{time:t.value},{default:a(({d:c,hh:u,mm:_,ss:f})=>[l("div",_d,k(c)+" \u5929 "+k(u)+" \u5C0F\u65F6 "+k(_)+" \u5206\u949F "+k(f)+" \u79D2",1)]),_:1},8,["time"]))}};typeof on=="function"&&on(To);const fd=l("h1",null,"CountDown \u793A\u4F8B",-1),md=l("div",{style:{height:"2000px"}},null,-1),hd={setup(e){const t=[{params:"time",desc:"\u591A\u5C11\u79D2\u540E\u7ED3\u675F",type:"number/string",select:"number/string",default:"0"},{params:"end",desc:"\u5012\u8BA1\u65F6",type:"number/string",select:"number/string",default:"0"},{params:"isMilliSecond",desc:"\u662F\u5426\u662F\u6BEB\u79D2",type:"boolean",select:"boolean",default:"false"},{params:"refreshCounter",desc:"\u5237\u65B0\u5F53\u524D\u65F6\u95F4",type:"boolean",select:"boolean",default:"false"}];return(o,r)=>(i(),d(y,null,[fd,n(g,{component:To}),n(V,{columns:s(O),data:t},null,8,["columns"]),md],64))}};var rn=e=>{e.__sourceCode=`<template>\r
  <div class="flex justify-evenly">\r
    <Popover v-for="(position, index) in positionArr" :placement="position">\r
      <template #reference>\r
        <span class="align-middle block text-center">{{ position }}</span>\r
        <img :src="imgUrl[index]" class="w-7 p-0.5 cursor-pointer rounded-md align-middle" />\r
      </template>\r
\r
      <div class="w-[140px] overflow-hidden">\r
        <div\r
          class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-300"\r
          v-for="innerItem in themeArr"\r
        >\r
          <Icon\r
            :name="innerItem.icon"\r
            class="w-1.5 h-1.5 mr-1"\r
            extraClass="fill-zinc-900 dark:fill-zinc-300"\r
          ></Icon>\r
          <span class="text-zinc-800 text-sm"> {{ innerItem.name }}</span>\r
        </div>\r
      </div>\r
    </Popover>\r
  </div>\r
</template>\r
\r
<script setup>\r
// \u6E32\u67D3\u6570\u636E\u6E90\r
const themeArr = [\r
  {\r
    id: "0",\r
    icon: "theme-light",\r
    name: "\u6781\u7B80\u767D",\r
  },\r
  {\r
    id: "1",\r
    icon: "theme-dark",\r
    name: "\u6781\u591C\u9ED1",\r
  },\r
  {\r
    id: "2",\r
    icon: "theme-system",\r
    name: "\u8DDF\u968F\u7CFB\u7EDF",\r
  },\r
];\r
\r
// \u6307\u5B9A\u56FE\u7247\u5217\u8868\r
const imgUrl = [\r
  "//tva2.sinaimg.cn/mw690/007c1Ltfgy1h4a6gg3r12j30u00u0ta3.jpg",\r
  "//tvax1.sinaimg.cn/mw690/007c1Ltfgy1h4aei7d8xrj305j05j3yj.jpg",\r
  "//tvax3.sinaimg.cn/mw690/007c1Ltfgy1h4aej1ylr0j30hs0hsmxp.jpg",\r
  "//tva4.sinaimg.cn/mw690/007c1Ltfgy1h4aeom7w1oj30u00u0q74.jpg",\r
];\r
\r
const PROP_TOP_LEFT = "top-left";\r
const PROP_TOP_RIGHT = "top-right";\r
const PROP_BOTTOM_LEFT = "bottom-left";\r
const PROP_BOTTOM_RIGHT = "bottom-right";\r
\r
// \u5B9A\u4E49\u6307\u5B9A\u4F4D\u7F6E\r
const positionArr = [PROP_TOP_LEFT, PROP_TOP_RIGHT, PROP_BOTTOM_LEFT, PROP_BOTTOM_RIGHT];\r
<\/script>\r
\r
<style lang="scss" scoped></style>`,e.__sourceCodeTitle=`\r
\u57FA\u672C\u4F7F\u7528\r
`,e.__sourceDescription=""};const vd={class:"flex justify-evenly"},gd={class:"align-middle block text-center"},yd=["src"],bd={class:"w-[140px] overflow-hidden"},$d={class:"flex items-center p-1 cursor-pointer rounded hover:bg-zinc-300"},xd={class:"text-zinc-800 text-sm"},zo={setup(e){const t=[{id:"0",icon:"theme-light",name:"\u6781\u7B80\u767D"},{id:"1",icon:"theme-dark",name:"\u6781\u591C\u9ED1"},{id:"2",icon:"theme-system",name:"\u8DDF\u968F\u7CFB\u7EDF"}],o=["//tva2.sinaimg.cn/mw690/007c1Ltfgy1h4a6gg3r12j30u00u0ta3.jpg","//tvax1.sinaimg.cn/mw690/007c1Ltfgy1h4aei7d8xrj305j05j3yj.jpg","//tvax3.sinaimg.cn/mw690/007c1Ltfgy1h4aej1ylr0j30hs0hsmxp.jpg","//tva4.sinaimg.cn/mw690/007c1Ltfgy1h4aeom7w1oj30u00u0q74.jpg"],f=["top-left","top-right","bottom-left","bottom-right"];return(h,b)=>{const C=S("Icon"),T=S("Popover");return i(),d("div",vd,[(i(),d(y,null,D(f,(w,z)=>n(T,{placement:w},{reference:a(()=>[l("span",gd,k(w),1),l("img",{src:o[z],class:"w-7 p-0.5 cursor-pointer rounded-md align-middle"},null,8,yd)]),default:a(()=>[l("div",bd,[(i(),d(y,null,D(t,R=>l("div",$d,[n(C,{name:R.icon,class:"w-1.5 h-1.5 mr-1",extraClass:"fill-zinc-900 dark:fill-zinc-300"},null,8,["name"]),l("span",xd,k(R.name),1)])),64))])]),_:2},1032,["placement"])),64))])}}};typeof rn=="function"&&rn(zo);const Cd=l("h1",null,"Popover \u793A\u4F8B",-1),wd={setup(e){const t=[{params:"placement",desc:"\u6C14\u6CE1\u51FA\u73B0\u4F4D\u7F6E",type:"string",select:"top-left | top-right | bottom-left |  bottom-right",default:"bottom-left"}];return(o,r)=>(i(),d(y,null,[Cd,n(g,{component:zo}),n(V,{columns:s(O),data:t},null,8,["columns"])],64))}},kd={props:{content:{type:String,required:!0}}},Bd=["innerHTML"];function Td(e,t,o,r,c,u){return i(),d("article",{class:"markdown-body",innerHTML:o.content},null,8,Bd)}var zd=x(kd,[["render",Td]]),Id=`<h1 id="\u5F00\u59CB\u4F7F\u7528">\u5F00\u59CB\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u7136\u540E\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u5199\u5165\u4E0B\u9762\u7684\u4EE3\u7801</p>
<pre><code>import { CoButton, CoTabs, CoSwitch, CoDialog, openDialog } from &quot;coast-ui-vue3&quot;;
import &quot;coast-ui-vue3/package/coast-ui.css&quot;;
</code></pre>
<p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002</p>
<h2 id="vue-\u5355\u6587\u4EF6\u7EC4\u4EF6">Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;co-button&gt;\u6309\u94AE&lt;/co-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {CoButton, CoTabs, CoSwitch, CoDialog} from &quot;coast-ui-vue3&quot;
export default {
  components: { CoButton }
}
&lt;/script&gt;
</code></pre>
`,Ld=`<h1 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h1>
<p>Yun-ui \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u3001 TypeScript\u3001 Vite \u7684 UI \u7EC4\u4EF6\u5E93\uFF0C\u56E0\u6B64\u62E5\u6709\u826F\u597D\u7684\u4EE3\u7801\u63D0\u793A\uFF0C\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF\u3002\u7EC4\u4EF6\u6837\u5F0F\u91C7\u7528\u4E86\u7B80\u6D01\u7684\u8BBE\u8BA1\u98CE\u683C\u3002</p>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u4F7F\u7528\u4E86\u6700\u65B0\u7684\u6280\u672F\u6808\uFF0C\u5168\u7A0B\u624B\u5199\uFF0C\u7EC4\u4EF6\u5E93\u6E90\u7801\u4E0D\u91C7\u7528\u4EFB\u4F55\u7B2C\u4E09\u65B9\u5E93\u3002\u6E90\u7801\u62E5\u6709\u826F\u597D\u7684\u7F16\u7801\u98CE\u683C\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u4EE3\u7801\u90FD\u8DB3\u591F\u7B80\u6D01\uFF0C\u5341\u5206\u6613\u8BFB\u3002</p>
<p>\u6587\u6863\u5B8C\u6574\uFF0C\u62E5\u6709\u5B8C\u6574\u7684\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B\u4EE3\u7801\u3002</p>
<p>\u6E90\u4EE3\u7801\u653E\u5728\u4E86 github\uFF1A<a href="https://github.com/xixixiaoyu/vue3-yun-ui">https://github.com/xixixiaoyu/vue3-yun-ui</a> \u4E0A</p>
<p>\u5386\u53F2\u63D0\u4EA4\u4FE1\u606F\u975E\u5E38\u89C4\u8303\uFF0C\u4F60\u53EF\u4EE5\u6309\u63D0\u4EA4\u7684\u987A\u5E8F\u9010\u4E2A\u67E5\u770B\uFF1B\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`,Sd=`<h1 id="\u5B89\u88C5">\u5B89\u88C5</h1>
<p>\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A</p>
<pre><code>npm install coast-ui-vue3
</code></pre>
<p>\u6216</p>
<pre><code>yarn add coast-ui-vue3
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/intro">\u5F00\u59CB\u4F7F\u7528</a></p>
`;const Ce=e=>Y(zd,{content:e,key:e}),jd=Vo(),Ue=Oo({history:jd,routes:[{path:"/",component:_r},{path:"/doc",component:ss,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:Ce(Id)},{path:"get-started",component:Ce(Ld)},{path:"install",component:Ce(Sd)},{path:"switch",component:Ra},{path:"button",component:$1},{path:"dialog",component:S1},{path:"tabs",component:V1},{path:"step",component:N1},{path:"layout",component:mc},{path:"card",component:zc},{path:"input",component:Ec},{path:"toast",component:ei},{path:"carousel",component:li},{path:"backtop",component:pi},{path:"grid",component:B2},{path:"skeleton",component:j2},{path:"breadcrumb",component:A2},{path:"pagination",component:F2},{path:"city",component:Y2},{path:"infinite",component:ad},{path:"sticky",component:pd},{path:"countdown",component:hd},{path:"popover",component:wd}]}]});Ue.afterEach(()=>{});const Md={name:"App",setup(){const e=document.documentElement.clientWidth,t=m(!(e<=500));cn("menuVisible",t),Ue.afterEach(()=>{e<=500&&(t.value=!1)})}};function Dd(e,t,o,r,c,u){const _=S("router-view");return i(),B(_)}var qd=x(Md,[["render",Dd]]);if(typeof window!="undefined"){let e=function(){var t=document.body,o=document.getElementById("__svg__icons__dom__");o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",o.id="__svg__icons__dom__",o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),o.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-back"><path d="M732.226 998.214c-11.44 0-22.88-2.86-31.46-11.44L260.312 543.46c-17.16-17.16-17.16-42.901 0-60.062L703.625 40.086c17.161-17.16 42.902-17.16 60.062 0 17.16 17.161 17.16 42.902 0 60.062L351.835 512l411.852 411.852c17.16 17.16 17.16 42.901 0 60.062-8.58 8.58-20.02 14.3-31.46 14.3z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-calendar"><path d="M897.9 369.2H205c-33.8 0-61.4-27.6-61.4-61.4s27.6-61.4 61.4-61.4h692.9c33.8 0 61.4 27.6 61.4 61.4s-27.6 61.4-61.4 61.4z" fill="#FFB89A" /><path d="M807 171H703.3c-16.6 0-30 13.4-30 30s13.4 30 30 30H807c31.6 0 57.4 24 57.4 53.4v42.3H125.2v-42.3c0-29.5 25.7-53.4 57.4-53.4H293c16.6 0 30-13.4 30-30s-13.4-30-30-30H182.5c-64.7 0-117.4 50.9-117.4 113.4v527.7c0 62.5 52.7 113.4 117.4 113.4H807c64.7 0 117.4-50.9 117.4-113.4V284.5c0-62.6-52.7-113.5-117.4-113.5zm0 694.6H182.5c-31.6 0-57.4-24-57.4-53.4V386.8h739.2v425.4c.1 29.5-25.7 53.4-57.3 53.4z" fill="#45484C" /><path d="M447.6 217.1c-12.4-6.1-27-2.8-35.7 7.1-2.2-6.7-4-16.2-4-28.1 0-13 2.2-23 4.6-29.8 9.5 8.1 23.5 9.6 34.9 2.8 14.2-8.5 18.8-27 10.3-41.2-15.5-25.9-35.9-29.7-46.6-29.7-36.6 0-63.1 41.2-63.1 97.8s26.4 98 63 98c20.6 0 39-13.4 50.4-36.7 7.3-14.9 1.1-32.9-13.8-40.2zm188.3 1.4c-12.4-6.1-27-2.8-35.7 7.1-2.2-6.7-4-16.2-4-28.1 0-13 2.2-23 4.6-29.8 9.5 8.1 23.5 9.6 34.9 2.8 14.2-8.5 18.8-27 10.3-41.2-15.5-25.9-35.9-29.7-46.6-29.7-36.6 0-63.1 41.2-63.1 97.8s26.5 97.8 63.1 97.8c20.6 0 39-13.4 50.4-36.7 7.1-14.7.9-32.7-13.9-40z" fill="#45484C" /><path d="M700.2 514.5H200.5c-16.6 0-30 13.4-30 30s13.4 30 30 30h499.7c16.6 0 30-13.4 30-30s-13.5-30-30-30zm-31.8 175.3h-74c-16.6 0-30 13.4-30 30s13.4 30 30 30h74c16.6 0 30-13.4 30-30s-13.4-30-30-30zm-189.1 0H200.5c-16.6 0-30 13.4-30 30s13.4 30 30 30h278.8c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#3C9" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-change-header-image"><path d="M928 427.2c-14.4 0-27.2-9.6-30.4-24C849.6 232 691.2 112 512 112S174.4 232 126.4 404.8c-4.8 17.6-22.4 27.2-40 22.4-17.6-4.8-27.2-22.4-22.4-40C121.6 187.2 304 48 512 48s390.4 139.2 446.4 339.2c4.8 17.6-4.8 35.2-22.4 40h-8zM512 976c-208 0-390.4-139.2-446.4-339.2-4.8-17.6 4.8-35.2 22.4-40 17.6-4.8 35.2 4.8 40 22.4C174.4 792 332.8 912 512 912s337.6-120 385.6-292.8c4.8-17.6 22.4-27.2 40-22.4 17.6 4.8 27.2 22.4 22.4 40C902.4 836.8 720 976 512 976z" fill="#fff" /><path d="m123.2 491.2 67.2-67.2c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L100.8 424 56 379.2c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l67.2 67.2c11.2 11.2 32 11.2 44.8 0zm777.6 41.6L833.6 600c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l44.8-44.8 44.8 44.8c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8l-67.2-67.2c-11.2-11.2-32-11.2-44.8 0zM400 400a112 112 0 1 0 224 0 112 112 0 1 0-224 0ZM544 544h-64c-88 0-160 72-160 160 0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32 0-88-72-160-160-160z" fill="#fff" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-close"><path d="M556.806 494.325 949.76 101.371a44.187 44.187 0 0 0-62.48-62.48L494.324 431.845 101.371 38.891a44.187 44.187 0 0 0-62.48 62.48l392.954 392.954L38.891 887.28a44.187 44.187 0 0 0 62.48 62.48l392.954-392.953L887.28 949.76a44.054 44.054 0 0 0 62.48 0 44.187 44.187 0 0 0 0-62.48L556.807 494.324z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-comment"><path d="M181.95 904.357a528.11 528.11 0 0 1-32.377-.993l-48.23-2.964 42.439-22.8c50.363-27.06 90.082-70.546 112.799-123.194C156.57 689.54 99.48 593.496 99.48 489.308c0-187.337 188.312-339.76 419.768-339.76s419.75 152.423 419.75 339.76c0 187.342-188.293 339.76-419.75 339.76-18.07 0-36.352-.96-54.389-2.855-42.696 26.136-90.273 46.212-141.495 59.676-46.612 12.26-94.189 18.468-141.414 18.468zM519.25 177.016c-216.107 0-391.931 140.096-391.931 312.292 0 97.858 56.06 188.229 153.797 247.956l9.733 5.958-4.038 10.552c-18.65 48.95-50.323 91.405-91.144 122.93 40.294-1.073 80.775-6.902 120.52-17.35 50.148-13.183 96.558-33.003 137.92-58.916l4.175-2.599 4.892.563a493.317 493.317 0 0 0 56.076 3.204c216.095 0 391.907-140.092 391.907-312.298 0-172.196-175.813-312.292-391.907-312.292z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-countdown"><path d="M931.7 63.87c20.6 0 37.32 16.57 37.47 37.17.12 20.4-16.32 37.05-36.72 37.17h-75.38v102.11c0 118.75-74.64 220.34-182.87 271.39 108.23 50.53 182.87 152.64 182.87 271.39v102.11h74.64c20.53 0 37.17 16.64 37.17 37.17s-16.64 37.17-37.17 37.17H110.5l-6.72-.6c-20.25-3.1-34.16-22.03-31.06-42.28 2.84-18.58 19.14-32.1 37.93-31.47h75.24V783.11c0-118.75 74.57-220.34 182.87-271.39-108.3-50.53-182.87-152.64-182.87-271.39V138.21h-75.24c-20.53 0-37.17-16.64-37.17-37.17s16.64-37.17 37.17-37.17H931.7zm-149.29 74.34H260.3V239.8c0 88.45 55.76 169.81 141.59 210.71 25.98 13.66 40.83 37.47 40.83 61.21.75 27-15.62 51.53-40.83 61.21-85.31 40.9-141.59 122.26-141.52 210.71V886.2h41.57v-43.29c0-79.87 29.41-167.42 120.62-220.64l14.93-8.14c34.04-14.7 61.95-45.83 83.67-93.3 17.17 43.96 46.28 75.09 87.48 93.3 111.96 57.85 129.65 144.8 129.65 228.77v43.29h44.11V784.15c0-88.45-55.68-169.81-141.52-210.79-25.97-13.66-40.83-37.4-40.83-61.21 0-27.24 14.85-50.98 40.83-61.13 85.31-40.83 141.52-122.19 141.52-210.71v-102.1zm-51.87 149.58c0 48.52-59.71 102.86-115.39 125.92-33.29 13.81-64.64 39.78-93.97 77.93-27.77-38.14-58.22-64.12-91.14-77.92-59.49-24.93-110.39-74.86-110.39-125.92h410.89z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-delete"><path d="M939.198 201.31H783.853v-97.09c0-42.84-34.831-77.672-77.672-77.672H317.819c-42.84 0-77.672 34.831-77.672 77.672v97.09H84.802c-21.48 0-38.836 17.356-38.836 38.837v38.836c0 5.34 4.37 9.71 9.71 9.71h73.302l29.977 634.727c1.942 41.385 36.166 74.032 77.551 74.032h550.988c41.506 0 75.61-32.525 77.55-74.032l29.978-634.728h73.303c5.34 0 9.709-4.369 9.709-9.709v-38.836c0-21.481-17.355-38.836-38.836-38.836zm-242.726 0H327.528v-87.38h368.944v87.38z" /></symbol><symbol class="icon" viewBox="0 0 1026 1024"  id="icon-down-arrow"><path d="M857.088 224.256q28.672-28.672 69.12-28.672t69.12 28.672q29.696 28.672 29.696 68.608t-29.696 68.608L612.352 742.4q-12.288 14.336-30.72 19.968t-38.912 4.608-40.448-8.704-34.304-22.016L91.136 361.472Q61.44 332.8 61.44 292.864t29.696-68.608q14.336-14.336 32.256-21.504t36.864-7.168 37.376 7.168 32.768 21.504l313.344 309.248z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-download"><path d="M317.82 657.636a48.545 48.545 0 0 1-48.546 48.545H220.73a194.18 194.18 0 0 1-45.827-382.925 339.865 339.865 0 0 1 648.71-92.624 242.726 242.726 0 0 1-68.886 475.549 48.545 48.545 0 0 1 .048-97.09 145.636 145.636 0 0 0 41.41-285.35l-43.4-12.815-18.107-41.458a242.774 242.774 0 0 0-463.413 66.022l-8.398 66.41-65.05 15.728a97.187 97.187 0 0 0 22.913 191.462h48.545a48.545 48.545 0 0 1 48.545 48.546zm366.03 99.372a48.545 48.545 0 0 1 0 68.642L546.273 963.13c-18.981 18.933-49.71 18.933-68.692 0L340.004 825.65a48.545 48.545 0 0 1 68.643-68.642l54.808 54.807V414.91a48.545 48.545 0 0 1 97.09 0v396.76l54.662-54.662a48.545 48.545 0 0 1 68.643 0z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-error"><path d="M512 34.133q202.684 5.325 337.613 140.254T989.867 512q-5.325 202.684-140.254 337.613T512 989.867q-202.684-5.325-337.613-140.254T34.133 512q5.325-202.684 140.254-337.613T512 34.133zm0 420.284L401.067 343.484q-12.8-12.8-29.32-12.8t-28.81 12.254-12.253 28.808 12.8 29.32L454.417 512 343.484 622.933q-12.8 12.8-12.8 29.32t12.254 28.81 28.808 12.253 29.32-12.8L512 569.583l110.933 110.933q17.067 16.009 39.458 10.138t28.263-28.263-10.138-39.458L569.583 512l110.933-110.933q12.8-12.8 12.8-29.32t-12.254-28.81-28.808-12.253-29.32 12.8z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-feedback"><path d="M1021.36 288.454 755.798 513.709l265.562 275.128ZM716.814 546.614l-203.393 172.78-202.056-169.461L7.987 864.047h1015.991ZM2.862 795.82l269.24-278.95L2.862 288.455Z" /><path d="M2.862 163.837v56.636l510.401 432.903 508.097-431.468v-58.07Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-fine-loading"><path d="M512 960C265.6 960 64 758.4 64 512c0-19.2 12.8-32 32-32s32 12.8 32 32c0 211.2 172.8 384 384 384s384-172.8 384-384-172.8-384-384-384c-19.2 0-32-12.8-32-32s12.8-32 32-32c246.4 0 448 201.6 448 448S758.4 960 512 960z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-fold"><path d="m103.517 539.494 404.555-404.556 404.556 404.556c7.855 7.856 15.71 11.783 27.494 11.783 11.783 0 19.639-3.927 27.494-11.783 15.711-15.71 15.711-39.277 0-54.988L508.072 24.962 48.528 484.506c-11.783 15.71-11.783 35.35 0 51.06 15.711 15.711 39.278 19.639 54.989 3.928z" /><path d="M508.072 457.012 48.528 916.556c-11.783 15.71-11.783 35.35 0 51.06 15.711 15.711 39.278 19.639 54.989 3.928l404.555-404.556 404.556 404.556c7.855 7.855 15.71 11.783 27.494 11.783 11.783 0 19.639-3.928 27.494-11.783 15.711-15.711 15.711-39.277 0-54.988L508.072 457.012z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-full"><path d="M368.896 192H224a32 32 0 0 0-32 32v137.888a32 32 0 0 0 64 0V256h112.896a32 32 0 0 0 0-64zm415.968 0H640a32 32 0 1 0 0 64h112.864v105.888a32 32 0 1 0 64 0V224a32 32 0 0 0-32-32zM368.896 777.92H256V672a32 32 0 1 0-64 0v137.92a32 32 0 0 0 32 32h144.896a32 32 0 1 0 0-64zM784.864 640a32 32 0 0 0-32 32v105.92H640a32 32 0 1 0 0 64h144.864a32 32 0 0 0 32-32V672a32 32 0 0 0-32-32z" /><path d="M912 48H112c-35.296 0-64 28.704-64 64v800c0 35.296 28.704 64 64 64h800c35.296 0 64-28.704 64-64V112c0-35.296-28.704-64-64-64zM112 912V112h800l.064 800H112z" /></symbol><symbol class="icon" viewBox="0 0 1117 1024"  id="icon-guide"><path d="m53.865 558.08 289.92 121.6 560-492.16-491.52 530.56 371.84 140.8c8.96 3.2 19.2-1.28 22.4-10.24V848l260.48-816.64-1014.4 494.72c-8.96 4.48-12.16 14.72-8.32 23.68 2.56 3.84 5.76 7.04 9.6 8.32zm357.76 434.56 144.64-155.52-144.64-58.88v214.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-hamburger"><path d="M922.667 583.125H101.333c-32.426 0-58.666-32-58.666-71.253s26.325-71.125 58.666-71.125h821.334c32.426.085 58.666 31.914 58.666 71.168 0 39.253-26.325 71.082-58.666 71.082v.128zm0-355.541H101.333c-32.426 0-58.666-31.787-58.666-71.04 0-39.381 26.325-71.21 58.666-71.21h821.334c32.426 0 58.666 31.829 58.666 71.167 0 39.296-26.325 71.083-58.666 71.083zM101.333 796.501h821.334c32.426 0 58.666 31.83 58.666 70.998 0 39.338-26.325 71.168-58.666 71.168H101.333c-32.426 0-58.666-31.83-58.666-71.083s26.325-71.083 58.666-71.083z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-heart"><path d="M991.154 223.659A273.138 273.138 0 0 0 512 178.944 273.067 273.067 0 0 0 11.378 329.956c0 38.357 1.948 71.047 11.47 105.912 10.73 39.296 30.116 77.824 61.006 121.252 33.06 46.464 80.662 100.018 145.536 163.712 67.214 65.991 154.83 144.782 267.876 240.86a22.756 22.756 0 0 0 29.468 0c113.067-96.078 200.662-174.869 267.876-240.86 64.874-63.694 112.476-117.248 145.536-163.712 30.89-43.428 50.275-81.956 61.006-121.252 9.522-34.844 11.47-67.555 11.47-105.912a271.396 271.396 0 0 0-21.468-106.297z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-home"><path d="M999.88 506.652 544.995 51.77c-18.205-18.205-47.787-18.205-65.992 0L24.121 506.652c-13.653 13.654-3.982 37.092 15.36 37.092h108.43V864.37c0 62.805 50.973 113.778 113.778 113.778h114.46c25.145 0 45.511-20.367 45.511-45.512V705.877c0-12.515 10.24-22.755 22.756-22.755h135.623c12.516 0 22.756 10.24 22.756 22.755v226.76c0 25.144 20.366 45.51 45.51 45.51H762.54c62.805 0 113.777-50.972 113.777-113.777V543.858H984.52c19.342 0 29.127-23.438 15.36-37.206z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-infinite-load"><path d="M989.44 448.213c-2.987-18.56-6.613-36.906-11.307-55.04-5.973-23.04-13.653-45.866-23.04-67.84-18.986-45.226-45.013-87.466-76.586-125.013C844.373 160 803.2 125.227 757.547 98.56c-45.014-26.453-94.08-45.227-145.28-55.68-26.454-5.333-53.12-8.533-80.214-8.747-21.12-.213-42.24.64-63.146 2.56-54.4 5.334-108.16 20.48-157.654 43.734-42.453 20.053-81.92 46.08-116.906 77.226-34.987 31.147-65.494 67.414-90.027 107.307-27.093 44.373-47.36 92.8-58.453 143.573-8.96 40.534-13.227 82.347-11.094 123.947 1.92 40.32 8.107 80.64 20.267 119.253 7.68 24.534 16.853 48.427 28.373 71.68 11.307 22.827 24.534 44.8 39.254 65.494 29.44 41.173 65.28 77.653 106.24 107.733 41.813 30.933 88.96 54.827 138.453 70.613C418.987 983.68 473.813 991.36 528 989.44c52.907-1.707 105.387-11.947 154.88-30.933 47.573-18.347 92.16-44.587 131.2-77.44 19.627-16.64 37.12-35.414 53.547-55.254 16.64-20.053 31.573-41.173 43.946-64 10.667-19.626 19.627-40.106 27.307-60.8 3.84-10.24 7.467-20.48 10.453-31.146 3.2-11.307 5.547-23.04 7.68-34.56 3.2-18.134 4.48-36.907 2.774-55.254-1.494 8.107-2.774 16-4.694 23.894-2.346 9.173-5.333 18.133-8.746 26.88-6.827 18.56-15.36 36.48-23.467 54.4-10.453 22.826-22.613 44.586-35.84 65.706-6.827 10.88-13.867 21.547-21.547 31.787-7.68 10.24-16.426 20.053-25.173 29.653-17.493 19.414-36.48 36.694-57.6 52.054-21.547 15.786-44.373 29.653-68.48 41.173-48.213 23.467-100.907 37.547-154.24 42.24-54.613 4.693-110.293-.64-162.773-16.213-49.92-14.72-97.28-38.614-138.88-69.974-40.32-30.506-75.307-68.053-102.827-110.506C126.72 707.84 106.88 658.987 96 608c-2.773-13.227-4.907-26.88-6.4-40.32-1.28-11.52-2.347-23.253-2.773-34.987-.64-24.106.853-49.066 4.48-72.96 7.893-52.48 24.96-103.04 51.413-149.12 23.467-41.173 53.973-78.293 89.813-109.653 35.84-31.573 76.8-56.96 121.174-74.88 25.6-10.453 52.48-18.133 79.786-23.253 13.867-2.56 27.734-4.694 41.6-5.76 6.827-.64 13.44-.64 20.267-1.28 2.773 0 5.547.213 8.32.213 46.293-.853 92.8 5.12 136.96 18.987 47.573 14.933 92.373 39.04 131.2 70.4 40.747 32.853 74.667 73.386 100.267 119.04 21.76 38.826 37.333 80.64 46.72 124.16 2.133 10.026 3.84 20.053 5.546 30.08 1.494 9.173 6.614 17.706 14.507 22.826 16.64 11.094 39.893 3.627 48-14.293 2.773-6.187 3.627-12.8 2.56-18.987z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-input-delete"><path d="M512 1024C229.232 1024 0 794.768 0 512 0 229.232 229.232 0 512 0c282.768 0 512 229.232 512 512 0 282.768-229.232 512-512 512zm0-552.224-150.56-150.56a28.448 28.448 0 0 0-40.224 40.224L471.776 512l-150.56 150.56a28.448 28.448 0 0 0 40.224 40.224L512 552.224l150.56 150.56a28.448 28.448 0 0 0 40.224-40.224L552.224 512l150.56-150.56a28.448 28.448 0 0 0-40.224-40.224L512 471.776z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-like"><path d="M190.193 471.412c14.446 0 26.14-11.72 26.14-26.139 0-14.445-11.694-26.165-26.14-26.165-.271 0-.49.15-.737.15l-62.496.146a32.345 32.345 0 0 0-4.374-.296c-19.677 0-35.62 16.142-35.62 36.115l-.344 433.327c0 19.95 15.968 35.598 35.67 35.598 1.917 0 3.81.292 5.65 0l61.023.022c.1 0 .149.048.248.048.097 0 .146-.048.244-.048h.737v-.148c13.414-.54 24.175-11.422 24.175-24.96 0-13.56-10.76-24.442-24.175-24.982v-.394h-50.95l1.45-402.276h49.5zM926.522 433.948c-19.283-31.445-47.339-44.172-81.289-45.546a38.646 38.646 0 0 0-5.38-.393l-205.448-.689c13.463-39.06 22.7-85.589 22.7-129.317 0-28.35-3.194-55.962-9.043-82.543l-.49.05c-10.638-46.58-51.736-81.316-100.966-81.316-57.265 0-95.467 48.151-95.467 106.126 0 3.242-.294 6.388 0 9.532-2.996 108.387-91.24 195.55-196.236 207.514v54.882l-.786 222.227v229.744h10.71l500.025.223 8.747-.244c19.356.05 30.24-4.818 47.803-16.116 16.683-10.761 29.237-25.5 37.491-42.156 2.26-3.341 4.029-7.075 5.106-11.201L941.018 510.4c1.056-4.054 1.348-8.182 1.056-12.161 1.57-21.794-3.292-44.295-15.552-64.292zm-32.696 52.89L810.842 854.62l-.1-.049c-2.555 6.142-6.88 11.596-12.872 15.428a32.208 32.208 0 0 1-13.414 4.964c-1.498-.196-3.047 0-4.62 0l-477.029-.54-.172-407.41c89.324-40.266 154.842-79.67 188.596-173.66.073.024.125.048.196.072 3-9.137 6.314-20.734 8.697-33.164 5.551-29.186 5.259-58.124 5.259-58.124-4.938-37.98 25.94-52.966 44.364-52.966 25.305.861 50.264 33.657 50.264 52.327 0 0 5.6 27.564 5.65 57.19.048 37.367-4.668 56.848-4.668 56.848h-.466c-5.873 30.88-16.215 60.14-30.465 86.965l.368.343a36.146 36.146 0 0 0-3.71 15.943c0 19.923 19.09 21.742 38.767 21.742l238.762.27 14.69.466v.1c12.132-.638 24.222 5.208 31.1 16.41 5.505 9.016 6.438 19.605 3.487 28.988l.3.074z" fill="#707070" /><path d="M264.827 924.319c.32.024.441.024.296-.025.243-.048.367-.075-.296-.075s-.54.027-.271.075c-.122.05-.024.05.271.025z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-loading"><path d="M512 85.333c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512 276.352 85.333 512 85.333zm0 128a298.667 298.667 0 1 0 0 597.334 298.667 298.667 0 0 0 0-597.334z" fill-opacity=".05" /><path d="M813.696 813.696c166.613-166.613 166.613-436.779 0-603.392-166.613-166.613-436.779-166.613-603.392 0A64 64 0 0 0 300.8 300.8a298.667 298.667 0 1 1 422.4 422.4 64 64 0 0 0 90.496 90.496z" fill="#fff" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-logout"><path d="M761.608 636.773c-12.816 32.023-35.22 60.82-57.624 86.388a256 256 0 0 1-86.388 57.655C585.604 793.6 550.416 803.188 512 803.188s-73.573-6.392-105.596-22.372a406.59 406.59 0 0 1-86.388-57.655 255.72 255.72 0 0 1-57.593-86.388c-12.846-31.961-22.435-67.212-22.435-105.596 0-22.342 3.228-44.777 6.424-63.985 6.36-22.342 12.784-41.58 22.372-60.82 9.62-19.145 22.404-35.156 35.22-54.395a215.35 215.35 0 0 1 48.004-44.777c9.62-6.423 19.208-9.588 28.796-6.423 9.62 3.258 19.208 6.423 25.6 16.011 6.423 9.589 9.62 19.24 6.423 28.796-3.227 9.62-6.423 19.177-16.043 25.6-25.6 19.208-47.972 41.612-60.788 70.377-12.784 28.858-22.435 57.623-22.435 89.616 0 25.6 6.423 51.2 16.012 76.8 9.62 25.6 25.6 44.839 41.611 60.82a187.578 187.578 0 0 0 60.82 41.58c24.204 10.55 50.362 15.98 76.769 16.011 25.6 0 51.2-6.392 76.83-16.011 25.6-9.589 44.809-25.6 60.79-41.58a187.578 187.578 0 0 0 41.58-60.82c10.55-24.235 15.98-50.362 16.043-76.8 0-31.961-6.393-60.789-19.177-86.389-12.816-25.6-32.023-51.2-57.655-67.211-9.557-6.361-12.784-15.95-15.98-25.6-3.227-9.589 0-19.177 6.423-28.765 6.361-9.62 15.98-12.785 25.6-16.012 9.589-3.196 19.146 0 28.765 6.361A297.89 297.89 0 0 1 716.8 358.4c12.784 16.012 25.6 35.188 35.188 51.2 9.62 19.177 16.012 38.416 22.435 57.592 6.393 19.208 6.393 41.58 6.393 63.985 3.196 38.415-3.228 73.635-19.208 105.658v-.062zM473.584 265.619c0-9.588 3.228-19.176 12.816-28.827 7.478-7.975 17.873-12.567 28.796-12.784 9.62 0 19.177 3.258 25.6 12.784 8.006 7.51 12.63 17.905 12.816 28.858v230.4c0 9.558-3.228 19.208-12.816 25.631-6.423 6.362-15.98 12.723-25.6 12.723-9.62 0-19.208-3.196-28.796-12.785-6.392-6.392-12.816-16.011-12.816-25.6V265.59zM512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-pay-fail"><path d="M512 2.276q216.196 5.68 360.12 149.604T1021.724 512q-5.68 216.196-149.604 360.12T512 1021.724q-216.196-5.68-360.12-149.604T2.276 512q5.68-216.196 149.604-360.12T512 2.276zm0 448.302L393.671 332.25q-13.653-13.653-31.275-13.653t-30.73 13.07-13.07 30.73 13.653 31.275L450.58 512l-118.33 118.329q-13.653 13.653-13.653 31.275t13.07 30.73 30.73 13.07 31.275-13.653L512 573.42l118.329 118.33q18.204 17.075 42.089 10.813t30.146-30.146-10.813-42.09L573.42 512l118.33-118.329q13.653-13.653 13.653-31.275t-13.07-30.73-30.73-13.07-31.275 13.653z" fill="#ad1a07" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-pay-success"><path d="M512.793 1.643c-281.645 0-509.96 228.316-509.96 509.961s228.315 509.961 509.96 509.961c281.646 0 509.962-228.316 509.962-509.96 0-281.646-228.316-509.962-509.962-509.962zM819.94 369.009 467.07 729.525c-1.203 1.805-2.542 3.528-4.12 5.125a35.038 35.038 0 0 1-50.091 0L237.58 556.675c-13.82-14.048-13.82-36.813 0-50.84a35.024 35.024 0 0 1 50.08 0l149.714 151.998L769.85 318.15a35.038 35.038 0 0 1 50.091 0c13.82 14.047 13.82 36.81 0 50.86z" fill="#5CA745" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-profile"><path d="M394.547 565.402C205.21 565.402 51.2 717.978 51.2 905.677V925.9C51.2 1024 202.752 1024 394.547 1024h203.725c184.269 0 343.347 0 343.347-98.1v-20.223c0-187.597-154.01-340.275-343.347-340.275H394.496zm91.648-26.01c149.965 0 271.923-120.934 271.923-269.67C758.118 120.986 636.16 0 486.246 0 336.282 0 214.272 120.986 214.272 269.722c0 148.684 122.01 269.67 271.974 269.67z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-qq"><path d="M512 34.133C248.107 34.133 34.133 248.107 34.133 512S248.107 989.867 512 989.867 989.867 775.893 989.867 512 775.893 34.133 512 34.133zM736.533 687.36c-12.266 1.493-47.893-56.213-47.893-56.213 0 33.386-17.28 77.013-54.507 108.586 18.027 5.547 58.56 20.48 48.96 36.694-7.786 13.12-133.973 8.426-170.453 4.266-36.48 4.054-162.667 8.854-170.453-4.266-9.707-16.214 30.826-31.147 48.853-36.694-37.333-31.466-54.507-75.093-54.507-108.586 0 0-35.626 57.706-47.893 56.213-5.76-.747-13.227-31.573 10.027-106.347 10.986-35.2 23.466-64.533 42.88-112.853-3.307-124.693 48.32-229.333 171.093-229.333 121.493 0 174.187 102.506 171.093 229.333 19.307 48.213 31.894 77.653 42.88 112.853 23.147 74.774 15.574 105.707 9.92 106.347z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-read"><path d="M515.2 224C208 224 22.4 537.6 22.4 537.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2-28.8 32-60.8 67.2-99.2 99.2z" fill="#707070" /><path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6S604.8 345.6 512 345.6zm0 294.4c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6 0 64-54.4 121.6-121.6 121.6z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-refresh"><path d="M900.361 803.344A484.82 484.82 0 0 1 512 997.452C243.885 997.452 26.548 780.115 26.548 512S243.885 26.548 512 26.548 997.452 243.885 997.452 512a24.273 24.273 0 0 1-48.545 0c0-241.294-195.613-436.907-436.907-436.907S75.093 270.706 75.093 512 270.706 948.907 512 948.907a436.421 436.421 0 0 0 363.36-194.181h-96.434a24.176 24.176 0 0 1-24.2-24.273c0-13.398 10.995-24.272 24.2-24.272h145.78c6.676 0 12.72 2.67 17.089 7.039l.024.121c4.37 4.418 7.088 10.437 7.088 17.04v145.78c0 13.35-10.777 24.2-24.273 24.2-13.398 0-24.273-10.995-24.273-24.2v-72.817z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-remind"><path d="M797.867 75.093h-552.96c-102.4 0-191.147 88.747-191.147 191.147v382.293c0 102.4 88.747 191.147 191.147 191.147h20.48s0 6.827 6.826 6.827l75.094 81.92c13.653 13.653 34.133 13.653 40.96 0l68.266-75.094 6.827-6.826h334.507c102.4 0 191.146-88.747 191.146-191.147V266.24c0-102.4-88.746-191.147-191.146-191.147zM258.56 532.48c-40.96 0-68.267-34.133-68.267-75.093s34.134-75.094 75.094-75.094c40.96 0 75.093 34.134 75.093 75.094-6.827 40.96-40.96 75.093-81.92 75.093zm259.413 0c-40.96 0-75.093-34.133-75.093-75.093s34.133-75.094 75.093-75.094 75.094 34.134 75.094 75.094c0 40.96-34.134 75.093-75.094 75.093zm266.24 0c-40.96 0-75.093-34.133-75.093-75.093s34.133-75.094 75.093-75.094 75.094 34.134 75.094 75.094c-6.827 40.96-40.96 75.093-75.094 75.093z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-search"><path d="M387.724 97.748c157.416 0 289.977 132.56 289.977 289.976S545.14 677.701 387.724 677.701 97.748 545.14 97.748 387.724 230.308 97.748 387.724 97.748m0-82.85c-207.126 0-372.827 165.7-372.827 372.826s165.701 372.827 372.827 372.827 372.827-165.7 372.827-372.827-165.7-372.827-372.827-372.827z" /><path d="M926.252 967.677c-8.285 0-24.855 0-33.14-8.285l-248.551-248.55c-16.57-16.571-16.57-41.426 0-57.996s41.425-16.57 57.995 0l248.551 248.551c16.57 16.57 16.57 41.425 0 57.995 0 8.285-16.57 8.285-24.855 8.285z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-setting"><path d="M940.8 512c0-57.6 32-108.8 83.2-128-25.6-89.6-76.8-172.8-140.8-236.8-44.8 32-108.8 38.4-160 12.8-51.2-32-76.8-83.2-70.4-140.8C608 6.4 556.8 0 512 0c-51.2 0-96 6.4-140.8 19.2C377.6 70.4 352 128 300.8 160c-51.2 32-115.2 25.6-160-12.8C76.8 211.2 25.6 294.4 0 384c51.2 19.2 83.2 70.4 83.2 128 0 57.6-32 108.8-83.2 128 25.6 89.6 76.8 172.8 140.8 236.8 44.8-32 108.8-38.4 160-12.8 51.2 32 76.8 83.2 70.4 140.8 44.8 12.8 96 19.2 140.8 19.2 51.2 0 96-6.4 140.8-19.2C646.4 953.6 672 896 723.2 864c51.2-32 115.2-25.6 160 12.8 64-64 115.2-147.2 140.8-236.8-51.2-19.2-83.2-70.4-83.2-128ZM512 723.2c-121.6 0-217.6-96-217.6-211.2 0-115.2 96-211.2 217.6-211.2s217.6 96 217.6 211.2c0 115.2-96 211.2-217.6 211.2Zm0-83.2c70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-share"><path d="m365.605 262.1 127.792-127.793.153 503.227c.004 11.015 8.934 19.943 19.95 19.943h.005c11.017-.004 19.948-8.937 19.943-19.954l-.152-503.1 127.676 127.676c3.897 3.897 9 5.843 14.106 5.843a19.892 19.892 0 0 0 14.106-5.842c7.79-7.79 7.79-20.422 0-28.212L527.854 72.555c-3.64-3.87-8.792-6.3-14.523-6.3h-.006l-.018.001-.019-.001a19.953 19.953 0 0 0-14.106 5.842l-161.79 161.79c-7.79 7.79-7.79 20.422 0 28.212 7.79 7.792 20.422 7.792 28.213.001z" /><path d="M782.508 315.087H642.713c-11.017 0-19.95 8.932-19.95 19.95s8.933 19.949 19.95 19.949h139.795c38.499 0 69.821 31.322 69.821 69.821v425.444c0 38.499-31.322 69.821-69.821 69.821H246.01c-38.499 0-69.821-31.322-69.821-69.821V424.806c0-38.499 31.322-69.821 69.821-69.821h143.936c11.018 0 19.95-8.931 19.95-19.95s-8.932-19.949-19.95-19.949H246.01c-60.5 0-109.719 49.22-109.719 109.72v425.443c0 60.5 49.22 109.719 109.719 109.719h536.498c60.5 0 109.719-49.22 109.719-109.72V424.807c0-60.5-49.22-109.719-109.72-109.719z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-success"><path d="M512.564 13.548c-276.604 0-500.71 224.106-500.71 500.71s224.106 500.71 500.71 500.71 500.146-224.106 500.146-500.71-224.106-500.71-500.146-500.71zm276.605 434.1c-156.366 89.19-312.732 342.65-312.732 342.65-134.351-164.27-241.041-197.575-241.041-197.575l134.35-77.9c63.224 60.4 106.69 103.867 106.69 103.867C652.56 282.25 789.17 238.783 789.17 238.783v208.864z" /></symbol><symbol class="icon" viewBox="0 0 1026 1024"  id="icon-theme-dark"><path d="M716.8 2.048q67.584 27.648 124.416 74.24t97.28 106.496 63.488 131.072 23.04 148.992q0 68.608-17.92 132.096t-50.176 118.784-77.824 100.864-100.864 77.824-119.296 50.176-132.608 17.92q-77.824 0-148.992-22.528t-131.072-63.488-106.496-97.792-74.24-124.416q64.512 73.728 153.6 115.712t194.56 41.984q95.232 0 179.2-36.352t146.432-98.816 98.816-146.432 36.352-179.2q0-104.448-42.496-194.048T716.8 2.048zM220.16 289.792l-89.088-86.016 122.88-18.432 54.272-110.592 55.296 110.592 122.88 18.432-89.088 86.016 21.504 122.88-110.592-58.368-109.568 58.368z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-theme-light"><path d="M843.98 137.387c11.558 0 21.573 4.266 30.004 12.656 8.472 8.397 12.684 18.494 12.684 30.01 0 11.81-4.212 21.9-12.684 30.297l-60.307 60.3c-8.192 8.247-18.186 12.37-29.996 12.37-12.254 0-22.371-4.123-30.502-12.083-8.123-8.11-12.151-18.35-12.151-30.584 0-11.803 4.082-21.756 12.308-30.003l60.3-60.307c8.479-8.39 18.569-12.656 30.352-12.656zm52.006 331.946h85.334c11.776 0 21.845 4.124 30.153 12.514C1019.85 490.243 1024 500.197 1024 512c0 11.81-4.15 21.9-12.527 30.153-8.308 8.39-18.377 12.514-30.153 12.514h-85.334c-11.776 0-21.818-4.124-30.194-12.514-8.308-8.253-12.506-18.35-12.506-30.153 0-11.81 4.198-21.763 12.506-30.153 8.376-8.39 18.418-12.514 30.194-12.514zM512 0c11.776 0 21.804 4.267 30.174 12.513 8.315 8.397 12.506 18.494 12.506 30.154V128c0 11.81-4.191 21.9-12.5 30.153-8.376 8.39-18.404 12.657-30.18 12.657-11.79 0-21.818-4.267-30.194-12.657-8.308-8.253-12.5-18.35-12.5-30.153V42.667c0-11.66 4.192-21.764 12.5-30.154C490.189 4.267 500.217 0 512.006 0zM180.34 137.387c11.55 0 21.559 4.266 30.024 12.656l60.3 60.307c8.478 8.39 12.663 18.487 12.663 30.003 0 11.81-4.157 21.907-12.506 30.154-8.329 8.396-18.37 12.513-30.174 12.513-12.008 0-22.132-4.123-30.31-12.227l-60.321-60.306c-8.247-8.247-12.329-18.344-12.329-30.434 0-11.81 4.15-21.763 12.527-30.153 8.308-8.247 18.377-12.513 30.18-12.513h-.054zm603.34 603.306c11.552 0 21.553 4.124 29.997 12.657l60.307 60.307c8.472 8.533 12.684 18.486 12.684 30.29 0 11.523-4.212 21.62-12.684 30.01-8.438 8.533-18.446 12.656-29.996 12.656-11.776 0-21.873-4.123-30.352-12.656l-60.3-60.3c-8.226-8.11-12.308-18.207-12.308-30.01 0-11.81 4.157-21.907 12.506-30.297 8.329-8.39 18.405-12.657 30.174-12.657h-.027zm-271.673-399.36c-47.118 0-87.3 16.644-120.675 50.06-33.328 33.28-50.005 73.53-50.005 120.607s16.677 87.327 50.005 120.75c33.382 33.266 73.557 49.917 120.668 49.917 47.118 0 87.313-16.644 120.695-49.924 33.294-33.41 49.972-73.66 49.972-120.743 0-47.077-16.678-87.327-49.972-120.607-33.382-33.416-73.577-50.06-120.695-50.06zm-469.327 128h85.334c11.79 0 21.818 4.124 30.194 12.514 8.308 8.396 12.506 18.35 12.506 30.153 0 11.81-4.198 21.9-12.506 30.153-8.376 8.39-18.405 12.514-30.194 12.514H42.68c-11.776 0-21.831-4.124-30.153-12.514C4.15 533.9 0 523.803 0 512c0-11.81 4.15-21.763 12.527-30.153 8.328-8.39 18.377-12.514 30.153-12.514zm469.327 384c11.776 0 21.804 4.124 30.174 12.514 8.315 8.396 12.506 18.35 12.506 30.153v85.333c0 11.81-4.191 21.9-12.5 30.154-8.376 8.39-18.404 12.513-30.187 12.513-11.79 0-21.818-4.123-30.194-12.513-8.308-8.254-12.5-18.35-12.5-30.154V896c0-11.81 4.192-21.763 12.5-30.153 8.376-8.39 18.404-12.514 30.194-12.514zM240.7 740.693c11.742 0 21.818 4.124 30.167 12.657 8.329 8.397 12.527 18.493 12.527 30.297 0 11.66-4.253 21.613-12.697 30.003l-60.307 60.307c-8.43 8.533-18.432 12.656-29.996 12.656-11.804 0-21.873-4.123-30.174-12.376-8.383-8.39-12.534-18.487-12.534-30.29 0-11.947 4.082-22.05 12.329-30.297l60.32-60.3c8.431-8.533 18.562-12.657 30.31-12.657h.055zM512 256c46.435 0 89.272 11.523 128.485 34.27 39.253 23.047 70.314 54.047 93.156 93.3 22.883 39.117 34.339 81.92 34.339 128.43 0 46.51-11.428 89.313-34.339 128.567-22.896 39.116-53.971 70.116-93.156 93.156C601.32 756.62 558.496 768 512 768c-46.49 0-89.3-11.38-128.498-34.27-39.185-23.047-70.233-54.053-93.157-93.163-22.897-39.254-34.338-82.057-34.338-128.567 0-46.51 11.482-89.313 34.338-128.43 22.856-39.253 53.903-70.253 93.157-93.293C422.735 267.517 465.565 256 512 256z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-theme-system"><path d="M512 3.868C139.947 3.868 2.276 328.363 2.276 510.293c0 181.931 132.323 509.725 498.915 509.725 0 0 91.136 1.593 91.136-80.327s-40.96-55.751-40.96-114.688c0-59.051 40.96-85.22 60.644-85.22 19.683 0 149.162 9.785 221.297-18.09 72.022-27.762 188.416-116.281 188.416-267.037 0-132.779-137.67-450.788-509.724-450.788zM201.273 512c-48.925 0-88.52-39.595-88.52-88.52s39.595-88.518 88.52-88.518 88.519 39.594 88.519 88.519c-.114 48.924-39.708 88.519-88.52 88.519zm166.912-219.022c-48.925 0-88.52-39.595-88.52-88.52s39.595-88.518 88.52-88.518c48.81 0 88.519 39.594 88.519 88.519s-39.595 88.519-88.52 88.519zm283.875 0c-48.81 0-88.519-39.595-88.519-88.52s39.595-88.518 88.52-88.518c48.81 0 88.519 39.594 88.519 88.519s-39.595 88.519-88.52 88.519zM820.565 512c-48.81 0-88.519-39.595-88.519-88.52s39.595-88.518 88.52-88.518 88.518 39.594 88.518 88.519C909.198 472.405 869.49 512 820.565 512z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-theme"><path d="M105.152 511.936a416 416 0 1 0 832 0 416 416 0 1 0-832 0Z" fill="#AEECFF" /><path d="M837.568 634.56a13.568 13.568 0 0 0-19.328 0L622.272 830.464a13.696 13.696 0 0 0 0 19.328l62.784 62.72c2.56 2.624 6.016 3.968 9.472 3.968h.064l.064.064s65.984-22.4 92.352-19.264c52.032 6.08 120.448 59.968 120.448 59.968l.192-.256a26.816 26.816 0 0 0 35.52-1.856 26.816 26.816 0 0 0 1.856-35.52l.384-.32s-53.376-68.992-59.136-120.64c-3.264-28.48 17.856-91.904 17.856-91.904l-.064.064a13.568 13.568 0 0 0-3.904-9.472l-62.592-62.784zm96.32 311.552a12.8 12.8 0 1 1-18.112-18.176 12.8 12.8 0 0 1 18.112 18.176z" fill="#01C4C6" /><path d="M837.568 634.56a13.568 13.568 0 0 0-19.328 0l-97.92 97.92 195.456 195.456a12.8 12.8 0 1 1 18.112 18.176l9.216 9.152.192-.192a26.816 26.816 0 0 0 1.856-35.52l.384-.32S892.16 850.24 886.4 798.592c-3.264-28.48 17.856-91.904 17.856-91.904l-.064.064a13.568 13.568 0 0 0-3.904-9.472l-62.72-62.72z" fill="#00B1B3" /><path d="m882.688 679.68-45.12-45.12a13.568 13.568 0 0 0-19.328 0L622.272 830.464a13.696 13.696 0 0 0 0 19.328l45.184 45.184L882.688 679.68z" fill="#D8D8D8" /><path d="M849.856 636.8a6.848 6.848 0 0 1 0 9.6L634.24 862.08a6.848 6.848 0 0 1-9.664-9.664l215.616-215.68a6.848 6.848 0 0 1 9.664.064zm20.8 20.864a6.72 6.72 0 0 1 0 9.6L655.04 882.88a6.848 6.848 0 0 1-9.6 0 6.848 6.848 0 0 1-.064-9.664L860.992 657.6a6.72 6.72 0 0 1 9.664.064z" fill="#F7F7F7" /><path d="M542.784 745.088 733.888 553.92l82.432 82.432L625.28 827.52z" fill="#F7DC8F" /><path d="m571.712 716.16 28.928-28.928 82.56 82.432-28.928 28.928zm49.216-49.28 17.28-17.344 82.56 82.304-17.28 17.344z" fill="#FFECBD" /><path d="m658.624 629.12 37.952-37.952 82.56 82.368-38.016 38.016z" fill="#EFCE71" /><path d="m679.872 608 37.888-37.888 82.496 82.432-37.952 37.952z" fill="#EDCE8A" /><path d="M521.088 96a416 416 0 0 0-416 416c0 31.168 3.712 61.44 10.176 90.688 2.88.256 5.312 1.536 8.256 1.536 35.968 0 65.152-29.184 65.152-65.152 0-.384-.192-.704-.192-1.152h.32v-120h.256a23.68 23.68 0 0 1 47.296 1.472h.384l.512 118.656h.576a51.584 51.584 0 0 0 103.104 0h.64l-.832-246.848v-1.216h.192a37.056 37.056 0 0 1 74.112 1.152c0 .512-.256.96-.32 1.536l1.152 244.16c-.064 1.216-.704 2.24-.704 3.392a61.504 61.504 0 0 0 122.944 0c0-.832-.448-1.472-.448-2.24h.192V268.032h.32c0-.512-.32-.96-.32-1.472a31.488 31.488 0 1 1 62.976 0c0 .512-.256.96-.32 1.472h.192l.768 266.496c-.064.512-.256.96-.256 1.472 0 .576.32 1.024.32 1.536v.448h.064a28.8 28.8 0 0 0 28.544 27.008 28.8 28.8 0 0 0 28.608-27.008v-.128c.064-.64.384-1.216.384-1.856 0-.64-.32-1.216-.384-1.792l.512-244.992-.064-.32a43.52 43.52 0 0 1 87.04 0l-.064.448h.64v127.552c-.064.96-.576 1.792-.576 2.752 0 1.024.512 1.792.576 2.752v5.568h1.152a42.88 42.88 0 0 0 41.728 35.136 42.816 42.816 0 0 0 41.792-35.136h1.344v-6.464c0-.64.384-1.216.384-1.856s-.384-1.216-.384-1.856v-42.048c-.064-.576-.64-.896-.64-1.472s.576-.96.64-1.472v-.32h.128a20.928 20.928 0 0 1 20.48-19.52c11.2 0 20.032 8.96 20.736 20.032h.64l.896 164.992h.832c.704 23.488 19.712 42.24 43.2 42.24 4.16 0 7.936-1.28 11.776-2.368 3.456-21.504 5.76-43.456 5.76-65.92A416.192 416.192 0 0 0 521.088 96z" fill="#0091DC" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-unfold"><path d="M920.483 484.506 515.928 889.062 111.372 484.506c-7.855-7.856-15.71-11.783-27.494-11.783-11.783 0-19.639 3.927-27.494 11.783-15.711 15.71-15.711 39.277 0 54.988l459.544 459.544 459.544-459.544c11.783-15.71 11.783-35.35 0-51.06-15.711-15.711-39.278-19.639-54.989-3.928z" /><path d="m515.928 566.988 459.544-459.544c11.783-15.71 11.783-35.35 0-51.06-15.711-15.711-39.278-19.639-54.989-3.928L515.928 457.012 111.372 52.456c-7.855-7.855-15.71-11.783-27.494-11.783-11.783 0-19.639 3.928-27.494 11.783-15.711 15.711-15.711 39.277 0 54.988l459.544 459.544z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-vip-profile"><path d="M581.616 423.193q-46.216 19.03-84.729 50.747t-66.605 72.495-43.498 89.26-15.405 101.947q0 47.123 12.234 90.167t33.982 81.104h-24.467q-26.28 0-61.168-1.812t-72.043-4.984-73.855-7.25-66.605-8.609-50.747-9.062-26.28-9.061q-9.968-7.25-14.952-44.857t4.078-96.51q3.625-22.655 14.952-37.154t27.64-24.92 36.247-16.765 40.779-12.233 40.325-12.687 35.795-16.765q19.03-11.78 29.451-23.108t14.953-22.201 4.53-22.655-.906-26.28q-1.812-20.842-14.499-33.076t-28.092-24.92q-7.25-6.344-13.14-17.671t-10.42-23.108q-4.532-13.593-9.063-28.092-6.343-1.813-12.686-6.344-5.438-4.53-11.781-12.686t-10.874-23.561-3.625-28.092 5.437-22.655q3.625-9.968 11.78-19.03 0-34.436 3.625-68.871 3.625-28.998 12.687-62.528t28.092-59.808q18.124-25.374 38.966-41.232t43.498-24.92 44.856-12.234T393.128 0q26.28 0 52.106 5.89t48.481 15.859 40.326 22.655 27.639 25.373q23.561 28.998 34.435 63.887t15.406 66.605q4.53 36.248 4.53 73.402 6.344 4.53 9.969 11.78 3.625 6.344 5.89 16.312t.453 24.467q-1.812 19.936-7.703 31.264t-13.14 17.67q-8.155 7.25-17.217 9.969-1.812 5.437-3.625 11.78l-4.53 12.687q-1.813 6.343-4.532 13.593zm129.586 28.998q58.903 0 111.009 22.655t90.62 61.621 61.168 91.073 22.654 111.009T974 849.558 912.83 940.63t-90.62 61.168T711.203 1024q-59.809 0-111.915-22.202t-90.62-61.168-61.168-91.072-22.654-111.01 22.654-111.008 61.169-91.073 90.619-61.621 111.915-22.655zm166.74 230.174q5.437-18.124-4.984-33.077t-27.64-21.295-34.435-.906-25.373 28.092q-4.53 15.405-8.609 28.545t-8.156 27.639-9.968 31.264-14.952 38.513Q734.763 804.7 718 803.342t-25.827-19.484q-9.968-18.123-18.577-38.966t-16.765-40.779-14.499-36.248-10.874-26.28q-7.25-14.498-24.014-16.31t-32.623 4.983-26.28 21.296-3.172 31.717q6.344 18.124 14.5 40.779t17.217 46.215 17.218 46.216 14.5 38.967q13.592 34.435 41.23 51.653t57.997 18.124 57.997-13.593 40.326-43.497q9.968-23.562 20.389-49.388t19.936-50.294 17.671-47.122 13.593-38.966z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-vip"><path d="M510.732 900.044c-28.533 0-55.163-12.047-74.82-32.97L59.283 458.738c-34.874-38.044-36.142-96.377-1.903-135.689L200.043 158.83c19.021-22.192 46.92-34.873 76.72-34.873h469.839c29.167 0 57.065 12.68 76.087 34.873L965.987 323.05c34.239 39.312 33.605 97.645-1.903 135.689L584.917 867.073c-19.022 20.924-46.286 32.971-74.185 32.971z" fill="#F2CB51" /><path d="M505.66 670.515c-6.341 0-13.316-2.536-18.388-7.609L239.988 409.282c-9.51-10.145-9.51-25.996.635-36.141 10.144-9.51 25.996-9.51 36.14.634l229.53 235.236 241.577-235.87c10.145-9.51 25.997-9.51 36.142.634 9.51 10.145 9.51 25.996-.635 36.141L523.413 663.54c-5.072 4.439-11.413 6.975-17.754 6.975z" fill="#FFF7E1" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-warn"><path d="M512 34.457C248.261 34.457 34.457 248.261 34.457 512S248.261 989.543 512 989.543 989.543 775.739 989.543 512 775.739 34.457 512 34.457zm0 790.02c-37.676 0-68.22-30.543-68.22-68.22 0-37.678 30.544-68.22 68.22-68.22s68.22 30.542 68.22 68.22c0 37.677-30.544 68.22-68.22 68.22zM580.22 512c0 37.676-30.544 68.22-68.22 68.22s-68.22-30.544-68.22-68.22V273.229c0-37.679 30.544-68.22 68.22-68.22s68.22 30.541 68.22 68.22V512z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-wei-bo"><path d="M851.4 590.193c-22.196-66.233-90.385-90.422-105.912-91.863-15.523-1.442-29.593-9.94-19.295-27.505 10.302-17.566 29.304-68.684-7.248-104.681-36.564-36.14-116.512-22.462-173.094.866-56.434 23.327-53.39 7.055-51.65-8.925 1.89-16.848 32.355-111.02-60.791-122.395-122.015-14.83-278.56 135.064-333.838 221.46C16 587.607 29.208 675.873 29.208 675.873h.58c10.009 121.819 190.787 218.869 412.328 218.869 190.5 0 350.961-71.853 398.402-169.478 0 0 .143-.433.575-1.156 4.938-10.506 8.71-21.168 11.035-32.254 6.668-26.205 11.755-64.215-.728-101.66zm-436.7 251.27c-157.71 0-285.674-84.095-285.674-187.768 0-103.671 127.82-187.76 285.674-187.76 157.705 0 285.673 84.089 285.673 187.76 0 103.815-127.968 187.768-285.673 187.768z" fill="#E71F19" /><path d="M803.096 425.327c2.896 1.298 5.945 1.869 8.994 1.869 8.993 0 17.7-5.328 21.323-14.112 5.95-13.964 8.993-28.793 8.993-44.205 0-62.488-51.208-113.321-114.181-113.321-15.379 0-30.32 3.022-44.396 8.926-11.755 4.896-17.263 18.432-12.335 30.24 4.933 11.662 18.572 17.134 30.465 12.238 8.419-3.46 17.268-5.33 26.41-5.33 37.431 0 67.752 30.241 67.752 67.247 0 9.068-1.735 17.857-5.369 26.202a22.832 22.832 0 0 0 12.335 30.236l.01.01z" fill="#F5AA15" /><path d="M726.922 114.157c-25.969 0-51.65 3.744-76.315 10.942-18.423 5.472-28.868 24.622-23.5 42.91 5.509 18.29 24.804 28.657 43.237 23.329a201.888 201.888 0 0 1 56.578-8.064c109.253 0 198.189 88.271 198.189 196.696 0 19.436-2.905 38.729-8.419 57.16-5.508 18.289 4.79 37.588 23.212 43.053 3.342 1.014 6.817 1.442 10.159 1.442 14.943 0 28.725-9.648 33.37-24.48 7.547-24.906 11.462-50.826 11.462-77.175-.143-146.588-120.278-265.813-267.973-265.813z" fill="#F5AA15" /><path d="M388.294 534.47c-84.151 0-152.34 59.178-152.34 132.334 0 73.141 68.189 132.328 152.34 132.328 84.148 0 152.337-59.182 152.337-132.328 0-73.15-68.19-132.334-152.337-132.334zM338.53 752.763c-29.454 0-53.39-23.755-53.39-52.987 0-29.228 23.941-52.989 53.39-52.989 29.453 0 53.39 23.76 53.39 52.989 0 29.227-23.937 52.987-53.39 52.987zm99.82-95.465c-6.382 11.086-19.296 15.696-28.726 10.219-9.43-5.323-11.75-18.717-5.37-29.803 6.386-11.09 19.297-15.7 28.725-10.224 9.43 5.472 11.755 18.864 5.37 29.808z" fill="#040000" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-wei-xin"><path d="M847.222 17.88h-671.9a158.925 158.925 0 0 0-157.39 159.158v670.808a158.353 158.353 0 0 0 158.17 158.275h671.796a158.873 158.873 0 0 0 158.17-158.379V177.038A160.121 160.121 0 0 0 847.223 17.88zm-335.95 753.43a386.376 386.376 0 0 1-103.661-13.992 124.96 124.96 0 0 0-28.087 8.582l-63.872 39.79c-18.725 12.43-24.914 7.802-17.944-14.018l13.991-49.88a96.223 96.223 0 0 0-2.314-29.647A268.776 268.776 0 0 1 183.15 492.13c0-153.645 147.274-279.204 328.122-279.204a348.641 348.641 0 0 1 267.345 117.73L473.042 475.722a47.774 47.774 0 0 1-63.09-3.875l-49.153-43.69c-22.573-7.074-30.375.78-23.328 21.013L390.446 577.9c11.703 19.505 29.648 25.772 59.269 3.875l354.57-216.113a246.332 246.332 0 0 1 35.03 125.585c.079 154.504-147.273 280.062-328.043 280.062zm0 0" fill="#2AAC38" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-wexin"><path d="M579.847 514.372c-10.185 0-20.43 10.243-20.43 20.41 0 10.338 10.245 20.448 20.43 20.448 15.445 0 25.552-10.11 25.552-20.447.002-10.169-10.107-20.41-25.552-20.41zM692.188 514.372c-10.111 0-20.296 10.243-20.296 20.41 0 10.338 10.185 20.448 20.296 20.448 15.309 0 25.552-10.11 25.552-20.447 0-10.169-10.245-20.41-25.552-20.41zM370.479 366.249c-15.289 0-30.75 10.09-30.75 25.474 0 15.307 15.461 25.548 30.75 25.548 15.31 0 25.477-10.242 25.477-25.548 0-15.384-10.167-25.474-25.477-25.474zM513.436 417.271c15.365 0 25.553-10.242 25.553-25.548 0-15.384-10.188-25.474-25.553-25.474-15.31 0-30.694 10.09-30.694 25.474 0 15.307 15.385 25.548 30.694 25.548z" fill="#707070" /><path d="M521.156 37.005c-263.531 0-477.403 213.751-477.403 477.364 0 263.614 213.872 477.365 477.403 477.365 263.56 0 477.33-213.752 477.33-477.364 0-263.614-213.771-477.365-477.33-477.365zm-84.32 589.83c-25.495 0-45.983-5.2-71.535-10.244l-71.4 35.812 20.412-61.459c-51.106-35.715-81.723-81.79-81.723-137.858 0-97.177 91.964-173.692 204.247-173.692 100.407 0 188.381 61.112 206.069 143.404-6.486-.73-13.046-1.19-19.665-1.19-97.029 0-173.63 72.392-173.63 161.626 0 14.826 2.302 29.137 6.293 42.795-6.31.499-12.661.805-19.068.805zm301.258 71.529 15.385 51.061-56.017-30.69c-20.43 5.121-40.955 10.244-61.291 10.244-97.181 0-173.707-66.41-173.707-148.2 0-81.658 76.525-148.2 173.707-148.2 91.735 0 173.478 66.542 173.478 148.2-.001 46.055-30.542 86.854-71.555 117.585z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-zhi-fu-bao"><path d="M1016.993 694.363 692.116 585.114s24.967-37.373 51.618-110.647c26.655-73.278 30.472-113.516 30.472-113.516l-210.303-1.734v-71.83l254.686-1.795V234.81H563.853V119.22h-124.74v115.595h-237.63v50.78l237.63-1.687v77.042H248.507v40.233h392.328s-4.32 32.652-19.36 73.278c-15.036 40.623-30.525 76.2-30.525 76.2s-184.213-64.474-281.284-64.474S94.536 525.184 83.09 638.361c-11.392 113.12 54.993 174.395 148.52 196.95 93.538 22.671 179.891-.224 255.075-37.033 75.196-36.753 148.977-120.305 148.977-120.305l378.634 183.877c-15.446 89.712-93.293 155.234-184.325 155.143H194.023c-103.193.1-186.921-83.476-187.017-186.665v-636.3C6.91 90.828 90.494 7.098 193.685 7.006h636.29C933.168 6.91 1016.9 90.49 1016.992 193.682v500.68zm-473.49-63.297S425.309 780.278 286.046 780.278c-139.322 0-168.572-70.898-168.572-121.888 0-50.927 28.963-106.338 147.504-114.35 118.474-8 278.584 87.026 278.584 87.026h-.06z" fill="#02A9F1" /></symbol>',t.insertBefore(o,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}ja();const Re=Ho(qd);Da(Re);Re.use(Ue);Re.mount("#app");
