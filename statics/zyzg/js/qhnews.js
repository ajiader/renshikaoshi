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
					if(n >= 3) {
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