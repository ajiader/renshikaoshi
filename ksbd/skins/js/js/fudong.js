document.write("<DIV id=divStay style=\"POSITION: absolute\"> </DIV>")
function CloseQQ()
{
kefuQQ.style.display="none";
return true; 
}
var online= new Array();
var betimefun = function (beginTime,endTime){
var strb=beginTime.split(":");
if(strb.length!=2){return false;}var stre=endTime.split(":");
if(stre.length!=2){return false;}
var b = new Date();
var e = new Date();
var n = new Date();
b.setHours(strb[0]);
b.setMinutes(strb[1]);
e.setHours(stre[0]);
e.setMinutes(stre[1]);
if(n.getTime()-b.getTime()>0 && n.getTime()-e.getTime()<0){return true;}else{return false;}}
document.writeln("<DIV id=kefuQQ  style=\"margin:0; padding:0; z-index: 20; visibility: visible; position: absolute; top: 168px; right:6px;\"><TABLE id=\"qqtab\" cellSpacing=0 cellPadding=0 width=120 border=0><TBODY><TR><TD><A onclick=CloseQQ() href=\"javascript:;\" shape=circle coords=91,16,12><IMG height=39 src=\"/ksbd/skins/images/qq_top.gif\" width=120 useMap=#Map border=0></A></TD></TR><TR><TD background=\"/ksbd/skins/images/qq_bg.gif\"><div style=\"font-size:12px;margin-left:12px;\"><p style=\"margin-top:5px;\"><a href=\"http://wpa.qq.com/msgrd?v=3&uin=2843579389&site=qq&menu=yes\" target=\"_blank\"><img alt=\"点击这里给我发消息\" border=\"0\" src=\"/ksbd/skins/images/qq.gif\" title=\"点击这里给我发消息\" /></a><br><a href=\"http://wpa.qq.com/msgrd?v=3&uin=850746600&site=qq&menu=yes\" target=\"_blank\"><img alt=\"点击这里给我发消息\" border=\"0\" src=\"/ksbd/skins/images/qq.gif\" title=\"点击这里给我发消息\" vspace=\"8\" /></a><br><a href=\"http://wpa.qq.com/msgrd?v=3&uin=2102526994&site=qq&menu=yes\" target=\"_blank\"><img alt=\"点击这里给我发消息\" border=\"0\" src=\"/ksbd/skins/images/pa.gif\" title=\"点击这里给我发消息\" /></a><br><a href=\"http://wpa.qq.com/msgrd?v=3&uin=2843579389&site=qq&menu=yes\" target=\"_blank\"><img src=\"/ksbd/skins/images/pa.gif\" alt=\"点击这里给我发消息\" vspace=\"8\" border=\"0\" title=\"点击这里给我发消息\" /></a></p><br /><p><a href=\"/ksbd/goumai.html\" target=\"_blank\"><img border=\"0\" src=\"/ksbd/skins/images/wj.gif\" />购买方法</a><br><a href=\"/ksbd/wenti.html\" target=\"_blank\"><img border=\"0\" src=\"/ksbd/skins/images/wj.gif\" />常见问题</a></p><BR><p style=\"font-size:12px\"><strong>咨询热线</strong><br>400-0188-625</p></div></TD></TR><TR><TD><IMG height=35 src=\"/ksbd/skins/images/qq_bottom.gif\" width=120></TD></TR></TBODY></TABLE></DIV>")
document.writeln("<script type=\"text\/javascript\">");
document.writeln("\/\/<![CDATA[");
document.writeln("var tips; var theTop = 168; var old = theTop;");
document.writeln("function initFloatTips() {");
document.writeln("tips = document.getElementById(\'kefuQQ\');");
document.writeln("moveTips();");
document.writeln("};");
document.writeln("function moveTips() {");
document.writeln("var grantt=40;");
document.writeln("if (window.innerHeight) {");
document.writeln(" pos = window.pageYOffset");
document.writeln("}");
document.writeln("else if (document.documentElement && document.documentElement.scrollTop) {");
document.writeln(" pos = document.documentElement.scrollTop");
document.writeln("}");
document.writeln("else if (document.body) {");
document.writeln(" pos = document.body.scrollTop;");
document.writeln("}");
document.writeln("pos=pos-tips.offsetTop+theTop;");
document.writeln("pos=tips.offsetTop+pos\/10;");
document.writeln("if (pos < theTop) pos = theTop;");
document.writeln("if (pos != old) {");
document.writeln(" tips.style.top = pos+\"px\";");
document.writeln(" grantt=10;");
document.writeln("   \/\/alert(tips.style.top);");
document.writeln("}");
document.writeln("old = pos;");
document.writeln("setTimeout(moveTips,grantt);");
document.writeln("}");
document.writeln("\/\/!]]>");
document.writeln("initFloatTips();");
document.writeln("<\/script>");
