import{_ as r}from"./Btn-DlNtUQiG.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as c,f as n,c as d,d as e,F as u,h as f,a,w as s,q as k,e as o,t as b,n as v}from"./index-2cHf2KPc.js";import{_ as g}from"./InputText-BBjZyBGQ.js";const x={id:"backendHeader"},w={__name:"backendHeader",props:{active:{type:String,default:"none"},bgc:{type:String,required:!0}},setup(i){return(y,t)=>{const m=c("RouterLink");return n(),d("header",x,[e("nav",null,[e("ul",null,[(n(),d(u,null,f([{name:"會員管理",link:"/backend/member"},{name:"配對管理",link:"/backend/match"},{name:"寵物照片審核",link:"/backend/petCard-verify"},{name:"寵物盒方案管理",link:"/backend/sploot-box"},{name:"訂單管理",link:"/backend/order"},{name:"小幫手身份審核",link:"/backend/splootBuddy-verify"},{name:"活動管理",link:"/backend/event"},{name:"消息管理",link:"/backend/news"}],(l,_)=>e("li",{key:_},[a(m,{to:l.link,class:v({isAcitve:i.active==l.name})},{default:s(()=>[i.active==l.name?(n(),k(r,{key:0,btnStyle:"primary default"},{default:s(()=>[o(b(l.name),1)]),_:2},1024)):(n(),k(r,{key:1,btnStyle:"white default"},{default:s(()=>[o(b(l.name),1)]),_:2},1024))]),_:2},1032,["to","class"])])),64))])])])}}},B=p(w,[["__scopeId","data-v-53d62199"]]),S={class:"wrapper"},C={class:"title"},H={class:"searchBar"},I={__name:"memberManage",setup(i){return(y,t)=>(n(),d(u,null,[a(B,{active:"會員管理",bgc:"yellow-1",class:"bg-yellow-1"}),e("div",S,[e("div",C,[t[1]||(t[1]=e("h6",null,"會員管理",-1)),e("div",H,[a(g,{size:"small",textAlign:"textLeft",placeHolder:"以會員 ID 查詢"}),a(r,{btnStyle:"primary default"},{default:s(()=>t[0]||(t[0]=[o("搜尋")])),_:1})])]),e("table",null,[t[10]||(t[10]=e("thead",null,[e("th",null,"會員 ID"),e("th",null,"姓名"),e("th",null,"電子信箱"),e("th",null,"寵物數量"),e("th",null,"寵物盒訂閱數"),e("th",null,"小幫手貼文數量"),e("th",null,"帳號狀態正常"),e("th")],-1)),e("tbody",null,[(n(),d(u,null,f(10,m=>e("tr",null,[t[3]||(t[3]=e("td",null,"001",-1)),t[4]||(t[4]=e("td",null,"海綿寶寶",-1)),t[5]||(t[5]=e("td",null,"tibametibame@tibame.com",-1)),t[6]||(t[6]=e("td",null,"4",-1)),t[7]||(t[7]=e("td",null,"3",-1)),t[8]||(t[8]=e("td",null,"2",-1)),t[9]||(t[9]=e("td",null,"正常",-1)),e("td",null,[a(r,{btnStyle:"outline small"},{default:s(()=>t[2]||(t[2]=[o("查看與編輯")])),_:1})])])),64))])])])],64))}},V=p(I,[["__scopeId","data-v-c961144f"]]);export{V as default};
