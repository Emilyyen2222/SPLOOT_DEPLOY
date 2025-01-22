import{a as i,_ as T}from"./MainHeader-CX1JENvv.js";import{_ as k}from"./MainFooter-CGAUgPm-.js";import{_ as H}from"./InputText-GekYEs3G.js";import{_ as L}from"./DropdownQa-Cjz04EDK.js";import{_ as M}from"./DropdownMenu-cB4xI_mi.js";import{f,c as v,n as b,d as e,t as m,r as A,g as I,F as x,h as p,i as S,a as t,j as $,w as s,e as a}from"./index-DH14vEHU.js";const z="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='36'%20height='36'%20rx='18'%20fill='%23F2EEEB'/%3e%3cpath%20d='M13.832%2013.834L22.1654%2022.1673'%20stroke='%23693413'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.168%2013.834L13.8346%2022.1673'%20stroke='%23693413'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",F={class:"introTitle"},C={class:"bold"},U={class:"overflowBox"},D={class:"overflow"},Q={__name:"LightBox",props:{bgc:{type:String,default:"#FFFEFA"},isLightBox:{type:Boolean,required:!0},title:{type:String,required:!0}},emits:["toggle"],setup(g,{emit:w}){const E=w;function u(){E("toggle")}return(r,n)=>(f(),v(x,null,[g.isLightBox?(f(),v("div",{key:0,class:b(["lightBox",{clicked:g.isLightBox}])},[e("div",{class:b(["lightBoxContent",g.bgc])},[e("div",{class:"closeBtnBox"},[e("div",{class:"closeBtn",onClick:u},n[0]||(n[0]=[e("img",{src:z,alt:"closeIcon"},null,-1)]))]),e("div",F,[e("h4",C,m(g.title),1)]),e("div",U,[e("div",D,[A(r.$slots,"default")])])],2)],2)):I("",!0),e("div",{class:b(["blackCover",{clicked:g.isLightBox}])},null,2)],64))}},N={class:"buttons"},q={style:{"flex-direction":"column"}},j={style:{display:"flex"}},O={style:{display:"flex","flex-direction":"column","align-items":"center",width:"200px"}},X={style:{"flex-direction":"column",gap:"8px",padding:"10px",margin:"0 auto"}},Y={style:{"flex-direction":"column",gap:"8px",padding:"10px",margin:"0 auto"}},G={class:"dropdowns"},J={style:{"flex-direction":"column"}},_={__name:"dsView",setup(g){const w=["primary","white","outline","baseline","text"],E=["large","default","small"],u={placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:p(""),inputError:p(!1)},r={textAlign:"textLeft",placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:p(""),inputError:p(!1)},n={size:"small",textAlign:"textLeft",placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:p(""),inputError:p(!1)};S(u.inputValue,(y,l)=>{u.inputValue.value.includes("123")?u.inputError.value=!0:u.inputError.value=!1}),S(r.inputValue,(y,l)=>{r.inputValue.value.includes("123")?r.inputError.value=!0:r.inputError.value=!1}),S(n.inputValue,(y,l)=>{n.inputValue.value.includes("123")?n.inputError.value=!0:n.inputError.value=!1});const d=p([]),V={placeHolder:"請選擇一個選項",options:[{id:0,name:"選項1"},{id:1,name:"選項2"},{id:2,name:"選項3"},{id:3,name:"選項4"}]};return(y,l)=>(f(),v(x,null,[t(T,{theme:"red",bgc:"purple-1"}),l[36]||(l[36]=e("h4",{style:{margin:"20px 0"}},"首頁還沒切元件庫先當首頁",-1)),e("section",N,[l[8]||(l[8]=e("h4",null,"Buttons (完成)",-1)),e("div",q,[(f(),v(x,null,$(w,o=>(f(),v(x,null,[e("div",j,[(f(),v(x,null,$(E,B=>e("div",O,[e("h6",null,m(o)+" "+m(B),1),t(i,{class:b(`${B}Box`),btnStyle:`${o} ${B}`},{default:s(()=>l[6]||(l[6]=[a("查看")])),_:2},1032,["class","btnStyle"])])),64))]),l[7]||(l[7]=e("br",null,null,-1))],64))),64))])]),t(i,{btnStyle:"text large"},{default:s(()=>l[9]||(l[9]=[a("Test")])),_:1}),e("section",null,[l[21]||(l[21]=e("h4",null,"問卷問題",-1)),e("div",X,[l[15]||(l[15]=e("h6",null,"Input (預設字置中)",-1)),t(H,{placeHolder:u.placeHolder,errorMsg:u.errorMsg,hasError:u.inputError.value,modelValue:u.inputValue.value,"onUpdate:modelValue":l[0]||(l[0]=o=>u.inputValue.value=o)},null,8,["placeHolder","errorMsg","hasError","modelValue"]),e("p",null,"用 v-model 監聽: "+m(u.inputValue),1),l[16]||(l[16]=e("h6",null,'Input (字靠左): textAlign = "textLeft"',-1)),t(H,{textAlign:r.textAlign,placeHolder:r.placeHolder,errorMsg:r.errorMsg,hasError:r.inputError.value,modelValue:r.inputValue.value,"onUpdate:modelValue":l[1]||(l[1]=o=>r.inputValue.value=o)},null,8,["textAlign","placeHolder","errorMsg","hasError","modelValue"]),e("p",null,"用 v-model 監聽: "+m(r.inputValue),1),l[17]||(l[17]=e("h6",null,'Input (小) size = "small"',-1)),t(H,{size:n.size,textAlign:n.textAlign,placeHolder:n.placeHolder,errorMsg:n.errorMsg,hasError:n.inputError.value,modelValue:n.inputValue.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.inputValue.value=o)},null,8,["size","textAlign","placeHolder","errorMsg","hasError","modelValue"]),e("p",null,"用 v-model 監聽: "+m(n.inputValue),1),l[18]||(l[18]=e("h6",null,"Option",-1)),t(i,{btnType:"form",btnStyle:"option",modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=o=>d.value=o)},{default:s(()=>l[10]||(l[10]=[a("選項1")])),_:1},8,["modelValue"]),t(i,{btnType:"form",btnStyle:"option",modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=o=>d.value=o)},{default:s(()=>l[11]||(l[11]=[a("選項2")])),_:1},8,["modelValue"]),t(i,{btnType:"form",btnStyle:"option",modelValue:d.value,"onUpdate:modelValue":l[5]||(l[5]=o=>d.value=o)},{default:s(()=>l[12]||(l[12]=[a("選項3")])),_:1},8,["modelValue"]),e("p",null,"用 v-model 監聽: "+m(d.value.join(" , ")),1),l[19]||(l[19]=e("h6",null,"nextQ",-1)),t(i,{btnType:"form",btnStyle:"nextQ"},{default:s(()=>l[13]||(l[13]=[a("上一題")])),_:1}),l[20]||(l[20]=e("h6",null,"lastQ",-1)),t(i,{btnType:"form",btnStyle:"lastQ"},{default:s(()=>l[14]||(l[14]=[a("下一題")])),_:1})])]),e("section",null,[l[30]||(l[30]=e("h4",null,"活動參加",-1)),e("div",Y,[l[26]||(l[26]=e("h6",null,"預設",-1)),t(i,{btnType:"event",btnStyle:"attend"},{default:s(()=>l[22]||(l[22]=[a("參加")])),_:1}),l[27]||(l[27]=e("h6",null,"可編輯",-1)),t(i,{btnType:"event",btnStyle:"edit"},{default:s(()=>l[23]||(l[23]=[a("編輯")])),_:1}),l[28]||(l[28]=e("h6",null,"已參加",-1)),t(i,{btnType:"event",btnStyle:"registered"},{default:s(()=>l[24]||(l[24]=[a("已參加")])),_:1}),l[29]||(l[29]=e("h6",null,"額滿",-1)),t(i,{btnType:"event",btnStyle:"disable"},{default:s(()=>l[25]||(l[25]=[a("已額滿")])),_:1})])]),e("section",G,[l[34]||(l[34]=e("h4",null,"Dropdowns (還沒加動畫)",-1)),e("div",J,[l[31]||(l[31]=e("h6",null,"DropdownQa",-1)),t(L,{question:"這裡是問題",answer:"這裡是回答"}),l[32]||(l[32]=e("h6",null,"DropdownMenu",-1)),t(M,{placeHolder:V.placeHolder,options:V.options},null,8,["placeHolder","options"]),l[33]||(l[33]=e("h6",null,'DropdownMenu (size="large")',-1)),t(M,{size:"large",placeHolder:V.placeHolder,options:V.options},null,8,["placeHolder","options"])])]),e("section",null,[l[35]||(l[35]=e("h4",null,"燈箱",-1)),t(Q,{"is-light-box":!1,onToggle:y.toggleLightBox,pY:"0",pX:"0"},null,8,["onToggle"])]),t(k,{class:"bg-yellow-2"})],64))}};export{_ as default};
