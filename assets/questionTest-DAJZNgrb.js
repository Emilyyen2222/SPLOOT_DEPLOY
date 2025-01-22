import{f as b,c as f,n as y,k as _,j as H,d as l,F as S,r as g,a as t,l as B,u as p,w as o,b as x,e as i,v as P}from"./index-CKNfyEFX.js";import{_ as m}from"./dogbox-k3Nttv9r.js";import{a as e,_ as I}from"./MainHeader-OhdswOi7.js";import{_ as n}from"./DropdownMenu-BjS1j3Sj.js";import{_ as u}from"./InputText-CIXUemqA.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O={__name:"PopUp",props:{isPopUp:{type:Boolean,required:!0}},setup(T){const d=T;return(r,c)=>(b(),f(S,null,[d.isPopUp?(b(),f("div",{key:0,class:y(["popUp",{clicked:d.isPopUp}])},[_(r.$slots,"default",{},void 0,!0)],2)):H("",!0),l("div",{class:y(["popBlackCover",{clicked:d.isPopUp}])},null,2)],64))}},k=Q(O,[["__scopeId","data-v-15d21d3f"]]),C={class:"box firstBox"},E={class:"questionContainer"},L={class:"options"},$={class:"first"},q={class:"box"},A={class:"questionContainer"},U={class:"options"},z={class:"box"},D={class:"questionContainer"},N={class:"options"},M={class:"box"},V={class:"questionContainer"},w={class:"options"},F={class:"box"},X={class:"questionContainer"},Y={class:"options date"},h={class:"birthday"},j={class:"year"},G={class:"month"},J={class:"date"},K={class:"box"},R={class:"questionContainer"},W={class:"options"},Z={class:""},ss={class:"quickLogin"},ls={class:"boxSub"},ts={class:"questionContainer"},is={class:"subBtn"},os={class:"boxSub"},es={class:"questionContainer"},as={class:"subBtn"},ns={class:"box"},ds={class:"questionContainer"},rs={class:"options date"},ps={class:"ship"},ms={class:"year"},vs={class:"month"},xs={class:"date"},us={class:"boxPayment"},cs={class:"questionContainer"},bs={class:"options"},fs={class:"infoBox"},Ts={class:"cardInfo"},ys={class:"info"},gs={class:"info"},Ss={class:"info"},_s={class:"boxFinish"},Hs={class:"finishBox"},Bs={class:""},Ps={class:"boxFinish"},Is={class:"finishBox"},$s={__name:"questionTest",setup(T){let d=g(!1),r=g(!1);function c(){d.value=!d.value,d.value?document.body.classList.add("clicked"):document.body.classList.remove("clicked")}const a={menu1:{placeHolder:"我的毛孩品種是",options:[{id:0,name:"柴犬"},{id:1,name:"拉布拉多"},{id:2,name:"哈士奇"},{id:3,name:"黃金獵犬"},{id:4,name:"德國牧羊犬"},{id:5,name:"法國鬥牛犬"},{id:6,name:"貴賓犬（泰迪）"},{id:7,name:"臘腸犬"},{id:8,name:"比熊犬"},{id:9,name:"邊境牧羊犬"},{id:10,name:"雪納瑞"},{id:11,name:"西施犬"},{id:12,name:"約克夏"},{id:13,name:"柯基犬"},{id:14,name:"馬爾濟斯"},{id:15,name:"秋田犬"},{id:16,name:"松獅犬"},{id:17,name:"沙皮狗"},{id:18,name:"牛頭梗"},{id:19,name:"羅威納犬"},{id:20,name:"大丹犬"},{id:21,name:"杜賓犬"},{id:22,name:"博美犬"},{id:23,name:"喜樂蒂牧羊犬"},{id:24,name:"阿拉斯加雪橇犬"},{id:25,name:"巴哥犬"},{id:26,name:"狐狸犬"},{id:27,name:"愛斯基摩犬"},{id:28,name:"大白熊犬"},{id:29,name:"巴吉度犬"},{id:30,name:"比格犬"}]},year:{placeHolder:"年份",options:Array.from({length:21},(v,s)=>({id:s,name:`${2025-s} 年`}))},month:{placeHolder:"月份",options:Array.from({length:12},(v,s)=>({id:s+1,name:`${s+1} 月`}))},day:{placeHolder:"日期",options:Array.from({length:31},(v,s)=>({id:s+1,name:`${s+1} 日`}))},country:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},shipPlace:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},payment:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},visaYear:{placeHolder:"年份",options:Array.from({length:21},(v,s)=>({id:s,name:`${2025-s} 年`}))},visaMonth:{placeHolder:"月份",options:Array.from({length:12},(v,s)=>({id:s+1,name:`${s+1} 月`}))}};return(v,s)=>(b(),f(S,null,[t(I,{theme:"red",bgc:""}),l("div",C,[l("div",E,[s[5]||(s[5]=l("h4",{class:"title bold"},"您的毛孩叫什麼名字？",-1)),B(l("div",L,[l("div",$,[t(u,{placeHolder:"毛孩姓名",errorMsg:"Invalid Input",hasError:p(r)},null,8,["hasError"])]),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[0]||(s[0]=[i("女生 狗狗")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[1]||(s[1]=[i("男生 狗狗")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[2]||(s[2]=[i("女生 貓貓")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[3]||(s[3]=[i("男生 貓貓")])),_:1})],512),[[P,!0]]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[4]||(s[4]=[i("下一題")])),_:1})]),s[6]||(s[6]=x('<div class="progressBarContainer"><div class="progressBar"><div class="progressSegment filled"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div></div></div>',1))]),l("div",q,[l("div",A,[s[11]||(s[11]=l("h4",{class:"title bold"},"您的毛孩是哪種體型？",-1)),l("div",U,[t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[7]||(s[7]=[i("幼貓")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[8]||(s[8]=[i("成貓")])),_:1})]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[9]||(s[9]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[10]||(s[10]=[i("上一題")])),_:1})])]),l("div",z,[l("div",D,[s[17]||(s[17]=l("h4",{class:"title bold"},"您的毛孩是哪種體型？",-1)),l("div",N,[t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[12]||(s[12]=[i("小型犬")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[13]||(s[13]=[i("中型犬")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[14]||(s[14]=[i("大型犬")])),_:1})]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[15]||(s[15]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[16]||(s[16]=[i("上一題")])),_:1})])]),l("div",M,[l("div",V,[s[20]||(s[20]=l("h4",{class:"title bold"},"您的毛孩是什麼品種？",-1)),l("div",w,[t(n,{size:"large",placeHolder:a.menu1.placeHolder,options:a.menu1.options},null,8,["placeHolder","options"])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[18]||(s[18]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[19]||(s[19]=[i("上一題")])),_:1})])]),l("div",F,[l("div",X,[s[24]||(s[24]=l("h4",{class:"title bold"},"您的毛孩生日是？",-1)),l("div",Y,[s[21]||(s[21]=l("div",{class:"smallText"},[i("領養的日期也可以喔！"),l("br"),i(" 我們希望可以幫您的毛孩一起慶祝這特別的日子！")],-1)),l("div",h,[l("div",j,[t(n,{size:"large",placeHolder:a.year.placeHolder,options:a.year.options},null,8,["placeHolder","options"])]),l("div",G,[t(n,{size:"large",placeHolder:a.month.placeHolder,options:a.month.options},null,8,["placeHolder","options"])]),l("div",J,[t(n,{size:"large",placeHolder:a.day.placeHolder,options:a.day.options},null,8,["placeHolder","options"])])])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[22]||(s[22]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[23]||(s[23]=[i("上一題")])),_:1})])]),l("div",K,[l("div",R,[s[29]||(s[29]=l("h4",{class:"title bold"},"請輸入您的Email",-1)),l("div",W,[l("div",Z,[t(u,{placeHolder:"Email",errorMsg:"Invalid Input",hasError:p(r)},null,8,["hasError"])]),l("div",ss,[s[26]||(s[26]=l("div",{class:""},"已經有帳號？",-1)),t(e,{class:"check",btnStyle:"baseline small"},{default:o(()=>s[25]||(s[25]=[i("查看")])),_:1})])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[27]||(s[27]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[28]||(s[28]=[i("上一題")])),_:1})])]),l("div",ls,[l("div",ts,[s[32]||(s[32]=x('<h4 class="title bold">為您的毛孩選擇一個方案等級</h4><div class="container"><div class="card"><div class="content"><h6 class="title">銀卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">精選功能玩具 x1</li><li class="smallText">天然原肉零食 x1</li><li class="smallText">必備日用品<span class="xsText">（如便攜式飲水器或小型毛巾）</span></li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">初次體驗者，讓毛孩嘗試 Sploot Box 的基本樂趣！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div><div class="card"><div class="content"><h6 class="title">金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">高互動功能玩具 x2</li><li class="smallText">原肉健康零食 x2</li><li class="smallText">必備日用品<span class="xsText">（如寵物洗毛精、耳朵清潔用品）</span></li><li class="smallText">免費加入會員獨享活動資格</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">需要更多寵物用品、愛好玩具的活潑毛孩！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div><div class="card popular"><div class="content"><h6 class="title">白金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">全套高互動玩具 x3</li><li class="smallText">豪華版原肉零食組 x3</li><li class="smallText">高級寵物日用品<span class="xsText">如牙膏牙刷組、耳護清潔液）</span></li><li class="smallText">獨家驚喜禮物 x1</li><li class="smallText red">專屬服務：免費諮詢小幫手專區</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">追求全方位照護及豐富體驗的毛孩與飼主！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div></div>',2)),l("div",is,[t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[30]||(s[30]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[31]||(s[31]=[i("上一題")])),_:1})])])]),l("div",os,[l("div",es,[s[35]||(s[35]=x('<h4 class="title bold">為您的毛孩選擇一個方案等級</h4><div class="container"><div class="card"><div class="content"><h6 class="title">銀卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">精選功能玩具 x1</li><li class="smallText">天然原肉零食 x1</li><li class="smallText">必備日用品<span class="xsText">（如便攜式飲水器或小型毛巾）</span></li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">初次體驗者，讓毛孩嘗試 Sploot Box 的基本樂趣！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div><div class="card"><div class="content"><h6 class="title">金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">高互動功能玩具 x2</li><li class="smallText">原肉健康零食 x2</li><li class="smallText">必備日用品<span class="xsText">（如寵物洗毛精、耳朵清潔用品）</span></li><li class="smallText">免費加入會員獨享活動資格</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">需要更多寵物用品、愛好玩具的活潑毛孩！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div><div class="card popular"><div class="content"><h6 class="title">白金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">全套高互動玩具 x3</li><li class="smallText">豪華版原肉零食組 x3</li><li class="smallText">高級寵物日用品<span class="xsText">如牙膏牙刷組、耳護清潔液）</span></li><li class="smallText">獨家驚喜禮物 x1</li><li class="smallText red">專屬服務：免費諮詢小幫手專區</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">追求全方位照護及豐富體驗的毛孩與飼主！</li></ul></div><div class="image"><img src="'+m+'" alt=""></div></div></div>',2)),l("div",as,[t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[33]||(s[33]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[34]||(s[34]=[i("上一題")])),_:1})])])]),l("div",ns,[l("div",ds,[s[42]||(s[42]=l("h4",{class:"title bold"},"選擇付款與運送方式",-1)),l("div",rs,[l("div",ps,[s[36]||(s[36]=l("div",{class:"xsText left"},"收貨地點",-1)),l("div",ms,[t(n,{size:"large",placeHolder:a.country.placeHolder,options:a.country.options},null,8,["placeHolder","options"])]),s[37]||(s[37]=l("div",{class:"xsText left"},"取貨方式",-1)),l("div",vs,[t(n,{size:"large",placeHolder:a.shipPlace.placeHolder,options:a.shipPlace.options},null,8,["placeHolder","options"])]),s[38]||(s[38]=l("div",{class:"xsText left"},"付款方式",-1)),l("div",xs,[t(n,{size:"large",placeHolder:a.payment.placeHolder,options:a.payment.options},null,8,["placeHolder","options"])]),s[39]||(s[39]=l("div",{class:"xsText"}," *目前僅提供信用卡付款",-1))])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[40]||(s[40]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[41]||(s[41]=[i("上一題")])),_:1})])]),l("div",us,[l("div",cs,[s[50]||(s[50]=l("h4",{class:"title bold"},"完成購買程序",-1)),l("div",bs,[s[44]||(s[44]=x('<div class="paymentBox"><div class="textBox"><p>SPLOOT BOX 三個月方案 - 白金卡(Platinum)</p><p>$3,597</p></div><div class="boxDivider"></div><div class="textBox"><p>月費</p><p>$3,597</p></div><div class="boxDivider"></div><div class="textBox"><p>今日應付金額</p><p>$3,597</p></div></div>',1)),l("div",fs,[s[43]||(s[43]=l("div",{class:"xsText left"},"信用卡付款",-1)),t(u,{textAlign:"textLeft",placeHolder:"卡號",errorMsg:"Invalid Input",hasError:p(r)},null,8,["hasError"]),t(u,{textAlign:"textLeft",placeHolder:"持卡人姓名",errorMsg:"Invalid Input",hasError:p(r)},null,8,["hasError"]),l("div",Ts,[l("div",ys,[t(n,{size:"",placeHolder:a.visaYear.placeHolder,options:a.visaYear.options},null,8,["placeHolder","options"])]),l("div",gs,[t(n,{size:"",placeHolder:a.visaMonth.placeHolder,options:a.visaMonth.options},null,8,["placeHolder","options"])]),l("div",Ss,[t(u,{textAlign:"textLeft",placeHolder:"安全碼",errorMsg:"Invalid Input",hasError:p(r)},null,8,["hasError"])])])])]),s[51]||(s[51]=l("ul",{class:"planItems"},[l("li",{class:"xsText"},"SHOPLINE將會使用本次交易資訊作為後續定期扣款，點擊提交即同意 《SHOPLINE Payments 支付服務條款》及《SHOPLINE Payments 隱私權政策》。"),l("li",{class:"xsText"},"本金流服務由 SHOPLINE Payments 提供，通過 PCI-DSS 國際信用卡組織最高等級認證，提供安全的交易服務，支援國內外信用卡刷卡。")],-1)),l("li",{class:"checkBox"},[l("div",{class:"boxAlign"},[s[47]||(s[47]=l("input",{type:"checkbox"},null,-1)),l("p",{class:"xsText"},[s[45]||(s[45]=i(" 我同意 ")),l("span",{class:"xsText link",onClick:c,href:""},"網站服務條款"),s[46]||(s[46]=i(" 及 ")),l("span",{class:"xsText link",onClick:c,href:""},"隱私權政策")])]),s[48]||(s[48]=x('<div class="boxAlign"><input type="checkbox"><p class="xsText">我同意成為 SPLOOT 的會員</p></div><div class="boxAlign"><input type="checkbox"><p class="xsText">我願意接收 SPLOOT 的最新消息、優惠及服務推廣相關資訊</p></div>',2))]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[49]||(s[49]=[i("開始訂閱SPLOOT BOX")])),_:1})])]),l("div",_s,[l("div",Hs,[s[54]||(s[54]=l("h4",{class:"title bold"},"感謝您的訂閱",-1)),l("div",Bs,[s[53]||(s[53]=l("p",null,"您已成功訂閱SPLOOT BOX 白金卡(Platinum)三個月方案 ",-1)),t(e,{class:"padding",btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[52]||(s[52]=[i("回到首頁")])),_:1})])])]),l("div",Ps,[l("div",Is,[s[56]||(s[56]=l("h4",{class:"title bold"},"感謝您的訂閱",-1)),s[57]||(s[57]=l("p",null,"您已成功訂閱SPLOOT BOX 白金卡(Platinum)三個月方案",-1)),s[58]||(s[58]=l("p",null,"請至信箱查閱訂單詳情",-1)),t(e,{class:"padding top",btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[55]||(s[55]=[i("回到首頁")])),_:1})])]),s[59]||(s[59]=l("div",{class:"circleQuestion"},null,-1)),t(k,{isPopUp:p(d).value},null,8,["isPopUp"])],64))}};export{$s as default};
