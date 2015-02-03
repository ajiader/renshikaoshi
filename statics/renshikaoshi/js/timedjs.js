// JavaScript Document



function DigitalTime1()  

 {   

 var deadline= new Date("03/28/2015") //开幕倒计时  

 //var symbol="3月28日"  

 var now = new Date()  

 var diff = -480 - now.getTimezoneOffset() //是北京时间和当地时间的时间差  

 var leave = (deadline.getTime() - now.getTime()) + diff*60000  

 var day = Math.floor(leave / (1000 * 60 * 60 * 24))  

 var hour = Math.floor(leave / (1000*3600)) - (day * 24)  

 var minute = Math.floor(leave / (1000*60)) - (day * 24 *60) - (hour * 60)  

 var second = Math.floor(leave / (1000)) - (day * 24 *60*60) - (hour * 60 * 60) - (minute*60)  

 var deadline_2= new Date("08/13/2004") //开幕后计时  

 //var symbol_2="8月13日"  

 var now_2 = new Date()  

 var diff_2 = -480 - now.getTimezoneOffset() //是北京时间和当地时间的时间差  

 var leave_2 = (now_2.getTime() - deadline_2.getTime()) + diff_2*60000  

 var day_2 = Math.floor(leave_2 / (1000 * 60 * 60 * 24))  

 var hour_2 = Math.floor(leave_2 / (1000*3600)) - (day_2 * 24)  

 var minute_2 = Math.floor(leave_2 / (1000*60)) - (day_2 * 24 *60) - (hour_2 * 60)  

 var second_2 = Math.floor(leave_2 / (1000)) - (day_2 * 24 *60*60) - (hour_2 * 60 * 60) - (minute_2*60)  

   

 day=day+1;  

 day_2=day_2+1;  

 if (day>0) 

 {  

 //LiveClock1.innerHTML = "现在"+symbol+"天"  

 LiveClock1.innerHTML = day;  

 setTimeout("DigitalTime1()",1000)  

 }  





 }