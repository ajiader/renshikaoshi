// JavaScript Document

function DigitalTime1()  
 {   
 var deadline= new Date("03/29/2014") //开幕倒计时  
 var symbol="3月29日"  
 var now = new Date()  
 var diff = -480 - now.getTimezoneOffset() //是北京时间和当地时间的时间差  
 var leave = (deadline.getTime() - now.getTime()) + diff*60000  
 var day = Math.floor(leave / (1000 * 60 * 60 * 24))  
 var hour = Math.floor(leave / (1000*3600)) - (day * 24)  
 var minute = Math.floor(leave / (1000*60)) - (day * 24 *60) - (hour * 60)  
 var second = Math.floor(leave / (1000)) - (day * 24 *60*60) - (hour * 60 * 60) - (minute*60)  
 var deadline_2= new Date("08/13/2004") //开幕后计时  
 var symbol_2="8月13日"  
 var now_2 = new Date()  
 var diff_2 = -480 - now.getTimezoneOffset() //是北京时间和当地时间的时间差  
 var leave_2 = (now_2.getTime() - deadline_2.getTime()) + diff_2*60000  
 var day_2 = Math.floor(leave_2 / (1000 * 60 * 60 * 24))  
 var hour_2 = Math.floor(leave_2 / (1000*3600)) - (day_2 * 24)  
 var minute_2 = Math.floor(leave_2 / (1000*60)) - (day_2 * 24 *60) - (hour_2 * 60)  
 var second_2 = Math.floor(leave_2 / (1000)) - (day_2 * 24 *60*60) - (hour_2 * 60 * 60) - (minute_2*60)  
   
 day=day+1;  
 day_2=day_2+1;  
 if (day>0) //还未开幕  
 {  
 //LiveClock1.innerHTML = "现在"+symbol+"天"  
 LiveClock1.innerHTML = day;  
 setTimeout("DigitalTime1()",1000)  
 }  
 if (day<0) //已经开幕  
 {  
 //LiveClock1.innerHTML = "现在离"+symbol+"还有"+day+"天"+hour+"小时"+minute+"分"+second +"秒"  
 LiveClock1.innerHTML = "<font class=fon1>"+symbol+"开幕已有<font class=fon2>"+day_2+"</font>天</font>"  
 setTimeout("DigitalTime1()",1000)  
 }  
 if (day==0) //正在开幕  
 {  
 //LiveClock1.innerHTML = "现在"+symbol+"天"  
 LiveClock1.innerHTML = "<font class=fon1>某某运动会今天开幕</font>"  
 setTimeout("DigitalTime1()",1000)  
 }  
   
   
 if (day<0 & day_2>19) //某某运动会结束  
 {  
 //LiveClock1.innerHTML = "现在离"+symbol+"还有"+day+"天"+hour+"小时"+minute+"分"+second +"秒"  
 LiveClock1.innerHTML = "<font class=fon1>某某运动会已全部结束</font>"  
 setTimeout("DigitalTime1()",1000)  
 }  
 }