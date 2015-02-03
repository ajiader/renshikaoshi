// JavaScript Document
$(function(){
	var ul = $(".picswitchpic ul");
	var li = $(".picswitchpic li");
	var tli = $(".picswitchnum li");	
	var speed = 350;
	var autospeed = 3000;	
	var i=1;
	var index = 0;
	var n = 0;
    /* 标题按钮事件 */
	function lxfscroll() {
				var index = tli.index($(this));					
				tli.removeClass("selected");
				$(this).addClass("selected");
				
				ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(index).css({"z-index":i});	
				li.eq(index).css({"left":"283px"});	
				ul.animate({left:"-283px"},speed); 	
				i++;	
			
    };
	/* 自动轮换 */
	function autoroll() {
					if(n >= 2) {
						n = 0;
					}
					tli.removeClass("selected");
				tli.eq(n).addClass("selected");
					ul.css({"left":"0px"});	
				li.css({"left":"0px"}); 
				li.eq(n).css({"z-index":i});	
				li.eq(n).css({"left":"288px"});	
				 	
					n++;
					i++;
					timer1 = setTimeout(autoroll, autospeed);
					ul.animate({left:"-288px"},speed);
				};
	/* 鼠标悬停即停止自动轮换 */
				function stoproll() {
					li.hover(function() {
						clearTimeout(timer1);
						n = $(this).prevAll().length+1;
					}, function() {
						timer1 = setTimeout(autoroll, autospeed);
					});
					tli.hover(function() {
						clearTimeout(timer1);
						n = $(this).prevAll().length+1;
					}, function() {
						timer1 = setTimeout(autoroll, autospeed);
					});
				};			
	tli.mouseenter(lxfscroll);
	autoroll();
	stoproll();
});


function getObject(objID)
 {if (document.getElementById && document.getElementById(objID)) 
 {return document.getElementById(objID);} 
 else 
 {if (document.all && document.all(objID)) 
 {return document.all(objectId);} 
 else 
 {if (document.layers && document.layers[objID]) 
 {return document.layers[objID];} 
 else
 {return false;}
 }
 }
 }
function newsqha(n)
{
for (var i = 1; i <= 4; i++)
{
if (i == n) 
{
getObject("newsqhone" + i).className = "selected";
getObject("newsqhaDIV" + i).style.display = "";
} 
else
{
getObject("newsqhone" + i).className = "";
getObject("newsqhaDIV" + i).style.display = "none";
}
}
}
function newsqhb(n)
{
for (var i = 1; i <= 4; i++)
{
if (i == n) 
{
getObject("newsqhtwo" + i).className = "selected";
getObject("newsqhbDIV" + i).style.display = "";
} 
else
{
getObject("newsqhtwo" + i).className = "";
getObject("newsqhbDIV" + i).style.display = "none";
}
}
}

function softdv(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("softdv" + i).className = "selected";
getObject("softDIV" + i).style.display = "";
if(i==1)
{
	getObject("softdv" + i).style.borderTop="0px";	
}
if(i==3)
{
	getObject("softdv" + i).style.borderBottom="0px";	
}
} 
else
{
getObject("softdv" + i).className = "";
getObject("softDIV" + i).style.display = "none";
}
}
}

function SetHome(obj){
        var url=window.location.href;
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(url);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',url);
                 }
        }
}