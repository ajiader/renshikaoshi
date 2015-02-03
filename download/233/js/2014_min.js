// JavaScript Document
$(document).ready(function() {

	userName = unescape(getSubCookie("wxuserinforset","username"));
	if(userName != null && userName != "" && userName.length > 0){
		$("#denglu").html('<a href="/search/UserCenter/"><span class="wn"><strong>'+userName+'</strong>,</span></a> 您好!');
		$("#tuichu").html('<a href="javascript:;" onclick="ulogout();"><span class="wn">退出</span></a>');
	}
	buynum()
//	$("img:not([name='topbm'])").lazyload({
//		placeholder : "http://img.233.com/www/img/cy/2012_3/space.gif",				  
//		effect : "fadeIn"
//	}); 
	MyClassIDCookie = getCookie('WangXiao=MyClassID')
	$(".bmbg[myclassid]").each(function(){
		if( MyClassIDCookieTF($(this).attr("myclassid")) == true){
			$(this).attr("class","bmbg2")
		}
	})
	
	
	
$("#qitakc").hover(function(){
   $(this).children(".nian_ji").show();
 },function(){
	$(this).children(".nian_ji").hide();
  });	
  
  $("#ydkt").hover(function(){
    $(this).children(".xllb").show();
  },function(){
    $(this).children(".xllb").hide();
  });
  
  
 $(".vid_one ul").click(function(){
			var kcID = $(this).attr("kcID");
			var teacherID = $(this).attr("teacherID")
		    $(".vid_all .vid_one").removeClass("hover");
			$(this).parents(".vid_one").addClass("hover");
		
		if(typeof(Worker)!="undefined"){
		 if(kcID=="all"){
		   $.get("/search/shiting/Propagandaurl.asp?dm="+mysite,function(outdata){
			   var mp4url = outdata.url;
			   if(mp4url.indexOf("f4v")){
					flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm="+mysite)};
					$("#playerContent").html(swfobject.embedSWF(playerurl, "playerContent", 720, 460, "10", Installurl,flashvars,params))
				}else{
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			    $("#playerContent").html(playhtml);}
		   },"json");
		 }else if(teacherID=="57"){
			$.get("/search/shiting/Propagandaurl.asp?dm=jzs2_sggl",function(outdata){
			   var mp4url = outdata.url;
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			   $("#playerContent").html(playhtml);
		   },"json"); 
		 }else if(teacherID=="159"){
			$.get("/search/shiting/Propagandaurl.asp?dm=wxy_jzgcfg_jzs2",function(outdata){
			   var mp4url = outdata.url;
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			   $("#playerContent").html(playhtml);
		   },"json"); 
		 }else if(teacherID=="95"){
			$.get("/search/shiting/Propagandaurl.asp?dm=jzgc_jzs2_yzy",function(outdata){
			   var mp4url = outdata.url;
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			   $("#playerContent").html(playhtml);
		   },"json"); 
		  }else if(teacherID=="219"){
			$.get("/search/shiting/Propagandaurl.asp?dm=cpp_sjgc_jzs2",function(outdata){
			   var mp4url = outdata.url;
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			   $("#playerContent").html(playhtml);
		   },"json"); 
		  }else if(isNaN(kcID)){
			$.get("/search/shiting/Propagandaurl.asp?dm="+kcID,function(outdata){
			   var mp4url = outdata.url;
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			   $("#playerContent").html(playhtml);
		   },"json"); 
		 }else {
			 $.get("/search/shiting/wxkcidsturl_xin.asp?Domain="+mysite+"&kcID="+kcID+"&teacherID="+teacherID,function(outdata){
			   var mp4url = outdata.url;
				if(mp4url.indexOf("f4v")){
					flashvars = {configUrl:escape("/search/shiting/wxkcidst.asp?Domain="+mysite+"&kcID="+kcID+"&teacherID="+teacherID)};
					$("#playerContent").html(swfobject.embedSWF(playerurl, "playerContent", 720, 460, "10", Installurl,flashvars,params))
				}else{
			   var playhtml = "<video width='720' height='450' controls='controls' autoplay='autoplay'><source src='"+mp4url+"' type='video/mp4'></video>";
			    $("#playerContent").html(playhtml);}
		   },"json"); 
			 
			 }
		   
		}else{	
	
			if(kcID=="all"){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm="+mysite)};
			}else if(teacherID=="57"){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm=jzs2_sggl")};
			}else if(teacherID=="159"){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm=wxy_jzgcfg_jzs2")};
			}else if(teacherID=="95"){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm=jzgc_jzs2_yzy")};
			}else if(teacherID=="219"){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm=cpp_sjgc_jzs2")};
			}else if(isNaN(kcID)){
		    	flashvars = {configUrl:escape("/search/shiting/Propaganda.asp?dm="+kcID)};
			}else{
		    	flashvars = {configUrl:escape("/search/shiting/wxkcidst.asp?Domain="+mysite+"&kcID="+kcID+"&teacherID="+teacherID)};
			}
			$("#playerContent").html(swfobject.embedSWF(playerurl, "playerContent", 720, 460, "10", Installurl,flashvars,params))
		}
		  
		  });		  
		  
 $(".aui_close").click(function(){
	$(this).parents(".lsjs").hide();
})
	
	
	
})


function setunionIDCookie(name, value) 
{ 
	var expires = null; 
	if(expires!=null) 
	{ 
		var LargeExpDate = new Date (); 
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));         
	} 
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()))+"; path=" + "/"; 
}
setunionIDCookie("UnionREFERER",document.referrer);


function buynum(){
	$.ajax({
		type:"get",
		scriptCharset: "gb2312",
		url:"/search/Study/Evaluation/BuyClassNum/",
		data:{"domain":mysite},
		dataType:"json",
		success:function(myjson){
			$("#buynumbox").html(myjson.buynum);
			$("#b_time").html(strsplit(myjson.buynum));
			iTime = myjson.djs;
			RemainTime();
		},
		error:function(data){
			$("#buynumbox").html("加载出错了！")
			return false;
		},
		async:false,
		cache:false
	});
}

function strsplit(num){
var ch,temp
temp=""
 ch = String(num);
 var ii = 5 - ch.length
 for(ii;ii>0;ii-=1){
	 temp=temp+"<span>0</span>";
 }
 for(i=0;i<ch.length;i++){
	  temp=temp+"<span>"+ch.charAt(i)+"</span>";
 }
 return temp
}

function CourseSelect(myid,o){
	var len = 0,price = 0,obj = $(o),MyClassIDCookie = getCookie('WangXiao=MyClassID'),tit = "";
	if(obj.attr("class") == 'bmbg'){
		if(MyClassIDCookie==''){
			setCookie('WangXiao=MyClassID',myid,15);
		}else{
			setCookie('WangXiao=MyClassID',MyClassIDCookie+','+myid,15);
		}
		obj.attr("class","bmbg2")
		$("#gkbox_img").attr("class","chen").html("成功")
		tit = "课程已成功添加到购课车！"
	}else{
		var reg=new RegExp((myid+","),"g");
		MyClassIDCookie = (MyClassIDCookie+',').replace(reg,"");
		if(MyClassIDCookie.substr(MyClassIDCookie.length-1)==","){
			MyClassIDCookie = MyClassIDCookie.substr(0,MyClassIDCookie.length-1);
		}
		setCookie('WangXiao=MyClassID',MyClassIDCookie,15);
		obj.attr("class","bmbg")
		$("#gkbox_img").attr("class","dele").html("删除")
		tit = "该课程已成功从购物车删除！"
	}
	$("div.bmbg2[myclassid]").each(function(){
		len += 1
		price += parseInt($(this).attr("price"))
	})
	$("a.baomi2").each(function(){
		len += 1
		price += parseInt($(this).attr("price"))
	})
	
	$("#gkbox_num").html(len)
	$("#gkbox_Price").html(price)
	$("#gkbox_tit").html(tit)
	var x = obj.offset()
	$("#gkbox").css({ left: "" + (x.left - 342) + "px", top: "" + (x.top - 40) + "px" }).show();
}

function CourseSelect_vip(myid,o){
	var len = 0,price = 0,obj = $(o),MyClassIDCookie = getCookie('WangXiao=MyClassID'),tit = "";
	if(obj.attr("class") == 'baomi'){
		if(MyClassIDCookie==''){
			setCookie('WangXiao=MyClassID',myid,15);
		}else{
			setCookie('WangXiao=MyClassID',MyClassIDCookie+','+myid,15);
		}
		obj.attr("class","baomi2")
		$("#gkbox_img").attr("class","chen").html("成功")
		tit = "课程已成功添加到购课车！"
	}else{
		var reg=new RegExp((myid+","),"g");
		MyClassIDCookie = (MyClassIDCookie+',').replace(reg,"");
		if(MyClassIDCookie.substr(MyClassIDCookie.length-1)==","){
			MyClassIDCookie = MyClassIDCookie.substr(0,MyClassIDCookie.length-1);
		}
		setCookie('WangXiao=MyClassID',MyClassIDCookie,15);
		obj.attr("class","baomi")
		$("#gkbox_img").attr("class","dele").html("删除")
		tit = "该课程已成功从购物车删除！"
	}
	$("div.bmbg2[myclassid]").each(function(){
		len += 1
		price += parseInt($(this).attr("price"))
	})
	$("a.baomi2").each(function(){
		len += 1
		price += parseInt($(this).attr("price"))
	})
	$("#gkbox_num").html(len)
	$("#gkbox_Price").html(price)
	$("#gkbox_tit").html(tit)
	var x = obj.offset()
	$("#gkbox").css({ left: "" + (x.left - 342) + "px", top: "" + (x.top - 40) + "px" }).show();
}

function MyClassIDCookieTF(mid){
	if((","+MyClassIDCookie+",").indexOf(","+mid+",")==-1){
		return false
	}else{
		return true
	}
}
function bdmCourse(o){
	var obj = $(o).offset()
	$("#bdmbox").css({ left: "" + (obj.left - 220) + "px", top: "" + (obj.top + 23) + "px" }).fadeIn().delay(3000).fadeOut();
}
function RemainTime(){
    var iDay,iHour,iMinute,iSecond;
    var sDay="",sHour="",sMinute="",sSecond="",sTime="";
    if (iTime >= 0){
        iHour = parseInt(iTime/3600);
        if (iHour > 0){
			if(iHour<10) iHour = "0" + iHour;
            sHour = "<span>" + iHour + "</span>时";
        }
        iMinute = parseInt((iTime/60)%60);
        if (iMinute > 0){
			if(iMinute<10) iMinute = "0" + iMinute
            sMinute = "<span>" + iMinute + "</span>分";
        }
        iSecond = parseInt(iTime%60);
        if (iSecond >= 0){
			if(iSecond<10) iSecond = "0" + iSecond
            sSecond = "<span>" + iSecond + "</span>秒";
        }
        if ((sDay=="")&&(sHour=="")){
            sTime= sMinute+sSecond;
        }else{
            sTime="距结束还有"+sDay+sHour+sMinute+sSecond;
        }
        if(iTime==0){
            clearTimeout(Account);
              sTime="优惠结束！";
        }else{
            Account = setTimeout("RemainTime()",1000);
        }
        iTime=iTime-1;
    }else{
        sTime="优惠结束！";
    }
    $("#djsbox").html(sTime);
}
function freestudy(myid,sty,bjname){
	//userName = getCookie("jsusername");
	if(bjname == ""){bjname = "免费试听"}
//	if(userName != null && userName != "" && userName.length > 0){  
		if(sty!=""&&sty!=null){
			bmbox(myid,sty,bjname)
		}else{
			bmbox(mysite,"dm",bjname)
		}
//	}else{
//		showRegbox()
//	}
}
function mfst(){
	$.ajax({
		type:"get",
		scriptCharset: "gb2312",
		url:"http://wx.233.com/search/GetCalendar/Server.asp",
		data:{Act:"bmList",myid:mysite,Sty:"dm"},
		dataType:"json",
		success:function(data){
			var S = parseInt(data.S)
			var _html = ""
			if(S == 1){
				$.each(data.bmList,function(i,n){
					_html += mfst_each(i,n)
				});
			}else{
				_html = data.msg
			}
			$("#load .nuname").html(userName)
			$("#mfst").html(_html)
			art.dialog({ id: "freestudy2", content: $("#load")[0], lock: true, padding: 10, opacity: 0.5, fixed: true, title: "选择试听课程" });	
		},
		error:function(data){
			$("#mfst").html("加载出错了！")
			return false;
		},
		async:false,
		cache:false
	});
	return false;
}
function mfst_each(i,n){
	var _Temp = ""	
	_Temp += "<tr align=\"center\"> "
	_Temp += "<td height=\"32\" align=\"center\" bgcolor=\"#FFFFFF\"><a target=\"_blank\" style=\"color:#069\" href=\"/search/UserCenter/study/Class.asp?mid="+ n.MyClassID +"&DoMain="+ mysite +"\">"+ unescape(n.MyClassName) +"</a></td> "
	_Temp += "<td align=\"center\" bgcolor=\"#FFFFFF\">"+ unescape(n.Teacher) +"</td> "
	_Temp += "<td align=\"center\" bgcolor=\"#FFFFFF\">"+ n.CourseNum +"</td> "
	if(n.SchoolID == "2"){
		_Temp += "<td align=\"center\" bgcolor=\"#FFFFFF\"><div class=\"bman\"><li><a target=\"_blank\" href=\"/search/player/shiti/demoroom.asp?myclassid="+ n.MyClassID +"\">免费学习</a></li></div></td> "
	}else{
		_Temp += "<td align=\"center\" bgcolor=\"#FFFFFF\"><div class=\"bman\"><li><a target=\"_blank\" href=\"/search/UserCenter/play/?mid="+ n.MyClassID +"\">免费学习</a></li></div></td> "
	}
	_Temp += "</tr>"
	
	return _Temp
}
function GetTaoLunList(){
	$("#GetTaoLunList").html("<img src=\"http://img.233.com/wx/img/friend/ajax-loader2.gif\" style=\"margin-top:200px;margin-left:200px;width:32px; height:32px;\"></img>")
	$.ajax({
		type:"get",
		scriptCharset: "gb2312",
		url:"/search/Study/Evaluation/GetTaolunByMyClassID/",
		data:{"myclassid":MyClassID},
		dataType:"json",
		success:function(data){
			var S = parseInt(data.S)
			var _html = ""
			if(S == 1){
				var list1 = delnull(data.TaolunList);
				$.each(list1,function(i,n){
					_html += TaoLun_each(i,n)
				});
				$("#GetTaoLunList").html(_html)
				Marquee("GetTaoLunList",3000)
			}else{
				$("#GetTaoLunList").html("<li>"+data.msg+"</li><li style=\"color: #FFF; text-align:center\">全新课件上线"+data.msg+"</li>")
			}
		},
		error:function(data){
			$("#GetTaoLunList").html("加载出错了！")
			return false;
		},
		async:false,
		cache:true
	});
}

function delnull(list)
{
	for(var i=0;i<list.length;i++){
		list[i].Picpath=list[i].Picpath==null?'':list[i].Picpath;
	}
	return list;
}

function Marquee(obj,speed){
	var adMarquee;
	$("#"+obj).hover(function(){
		clearInterval(adMarquee);
	},function(){
		adMarquee=setInterval(function(){
			$("#"+obj).prepend($("#"+obj+" li").last().hide().detach());
			$("#"+obj+" li").eq(1).hide();
			$("#"+obj+" li").first().slideDown(1000);
			$("#"+obj+" li").eq(1).fadeIn(1500);
		},speed);
	}).trigger("mouseleave");
}
function bmbox(myid,sty,bjname){
	var teacher = sty == 'tc' ? '&teacher='+myid : ''
	
	var dq = ""
	if(typeof(dqId)!="undefined"){
		dq = dqId
	}
	
	$.ajax({
		type:"get",
		scriptCharset: "gb2312",
		url:"http://wx.233.com/search/GetCalendar/Server.asp?jsoncallback=?",
		data:{Act:"bmList",myid:myid,dq:dq,dm:mysite,Sty:sty},
		dataType:"json",
		success:function(data){
			var S = parseInt(data.S)
			var _html = ""
			if(S == 1){
				$.each(data.bmList,function(i,n){
					_html += bmList_each(i,n,teacher)
				});
			}else{
				_html = data.msg
			}
			$("#bmlist").html(_html)
			art.dialog({ id: "MyDialogQb", content: $("#bmbox")[0], lock: true, padding: 10, opacity: 0.5, fixed: true, title: bjname });
		},
		error:function(data){
			$("#bmlist").html("加载出错了！")
			return false;
		},
		async:false,
		cache:false
	});
	return false;
}
function bmList_each(i,n,teacher){
	var _Temp = ""
	_Temp += "<tr align=\"center\">"
	_Temp += "<td><a target=\"_blank\" href=\"/search/UserCenter/study/Class.asp?mid="+ n.MyClassID +"&DoMain="+ mysite +"\">"+ unescape(n.MyClassName) +"</a></td>"
	_Temp += "<td>"+ unescape(n.Teacher) +"</td>"
	_Temp += "<td>"+ n.CourseNum +"</td>"
	_Temp += "<td>"+ n.GoodPrice +"</td>"
	_Temp += "<td><a target=\"_blank\" style=\"color:#F30;\" href=\"/search/UserCenter/play/?mid="+ n.MyClassID + teacher +"\">免费试听</a></td>"
	_Temp += "<td class=\"check\"><input type=\"checkbox\" value=\""+ n.MyClassID +"\" name=\"myclassID\"></td>"
	_Temp += "</tr>"
	
	return _Temp
}
function bmform(obj){
	var id = "";
	$("#bmlist input[name='myclassID']").each(function(){
		if($(this).prop("checked")){id+=(id=="")?$(this).val():","+$(this).val();}
	})
	$(obj).attr("href","/search/UserCenter/play/shop/?MyClassID="+id)
}
function submitBtn(){
	var UserName,Phone,Email
	UserName = $("#uname").val()
	Phone = $("#phone").val()
	Email = $("#email").val()
	if(UserName==''||UserName==null||UserName=="undefined"){
		$(".btnmsg").html("姓名不能为空").show()
		$("#uname").focus();
		return false;
	}
	if(Phone.length>5){
		if(!checkTel(Phone)){
			$(".btnmsg").html("手机号码不对").show()
			$("#phone").focus();
			return false;
		}
	}else{
		$(".btnmsg").html("手机号码不对").show()
		$("#phone").focus();
		return false;
	}
	if(Email.length>3){
		if(!checkmail(Email)){
			$(".btnmsg").html("邮箱填写不对").show()
			$("#email").focus();
			return false;
		}
	}else{
		$(".btnmsg").html("邮箱填写不对").show()
		$("#email").focus();
		return false;
	}
	$.ajax({
		type:"get",
		scriptCharset: "gb2312",
		url:"http://wx.233.com/search/GetCalendar/Server.asp",
		data:{Act:"SetMiJi",dm:mysite,UserName:escape(UserName),Phone:escape(Phone),Email:escape(Email)},
		dataType:"json",
		success:function(data){
			var S = parseInt(data.S)
			var _html=""
			if(S == 2){
				login()
			}
			$(".btnmsg").html(data.msg).show()
		},
		error:function(data){
			$(".btnmsg").html("加载出错了！").show()
			return false;
		},
		async:false,
		cache:false
	});
}
function checkTel(mobile){ 
     if(/^1[3458]\d{9}$/.test(mobile)) return true;
	 else return false;
}
 
function checkmail(email){
	 if(/^([a-zA-Z0-9\._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email)) return true;
	 else return false;
}
function getCookie(name) {
	var cookieValue = "";
	var search = name + "=";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1) end = document.cookie.length;
			cookieValue = unescape(document.cookie.substring(offset, end))
		}
	}
	return unescape(cookieValue);
}
function ajaxurlCode(str){
	return encodeURIComponent(encodeURIComponent(str));
}
function login(){
	$("#wxlogbox").load("/load2014/login.htm")
	var loginbox = art.dialog({ id: "loginbox", content: $("#wxlogbox")[0], lock: true, padding: 10, opacity: 0.5, fixed: true, title: "登录233网校" });
	return false;
}
function showRegbox(){
	$("#wxregistbox").load("/load2014/regist.htm")
	var wxregistbox = art.dialog({ id: "wxregistbox", content: $("#wxregistbox")[0], lock: true, padding: 5, opacity: 0.5, fixed: true, title: "注册233网校" });
	return false;
}
function ulogout(){
	var reoutlink="/search/user_center/logout.asp?redirectURL="+location.href;
	location.href = reoutlink;
}
function openKefu(){
	window.open ('http://wx.233.com/service/kefu.htm','','width=790,height=480,top='+(screen.availHeight-540)/2+',left='+(screen.availWidth-770)/2+',center:yes,scrollbars=yes,resizable=yes');
}
function switchTag(tag,content,k,n,stylea,styleb){	 
	for(i=1;i<=n;i++){
		if (i==k){
			document.getElementById(tag+i).className=stylea;
			document.getElementById(content+i).style.display="block";
		}else{
			document.getElementById(tag+i).className=styleb;
			document.getElementById(content+i).style.display="none";
		}
	}
}
function setCookie(cookieName,cookieValue,DayValue) {
	var expire = "";
	var day_value=1;
	if (DayValue != null) {
		day_value=DayValue;
	}
	expire = new Date((new Date()).getTime() + day_value * 86400000);
	expire = "; expires=" + expire.toGMTString();
	document.cookie = cookieName + "=" + escape(cookieValue) +";path=/"+ expire;
}
function notice(content, t) {//提示框
    dianotice = jQuery.dialog({ id: "notice", content: content, icon: "warning", lock: true, opacity: 0.1, time: t, title: false, fixed: true });
}
function succeed(content, t) {
    artdialog = jQuery.dialog({ id: "artdialog", content: content, icon: "succeed", lock: true, opacity: 0.1, time: t, fixed: true, title: false });
}

//切换
	function switchTag(tag,content,k,n,stylea,styleb){	 
   for(i=1; i <=n; i++){if (i==k){
      document.getElementById(tag+i).className=stylea;
	  document.getElementById(content+i).className="Showbox";
	  }else{
	     document.getElementById(tag+i).className=styleb;
		 document.getElementById(content+i).className="Hidebox";
		 }
	}
}

function getSubCookie(name,subname){var allcookie=getCookie(name);var cookieValue="";var search=subname+"=";if(allcookie.length>0){offset=allcookie.indexOf(search);if(offset!=-1){offset+=search.length;end=allcookie.indexOf("&",offset);if(end==-1)end=allcookie.length;cookieValue=allcookie.substring(offset,end);}} return cookieValue;}
	
	function delCookie(cookieName) {
	var expire = "";
	expire = new Date((new Date()).getTime() - 1 );
	expire = "; expires=" + expire.toGMTString();
	document.cookie = cookieName + "=" + escape("") +";path=/"+ expire;
}

function ulogout(){
	var reoutlink="http://wx.233.com/search/Home/LogOut/?redirectURL="+location.href;
 
	location.href = reoutlink;
}

   function maodian(strname){
	  
	if(strname=="QKvip") {
		$("#qk_1").attr("class","kb1")
		$("#qk_list1").attr("class","")
		$("#qk_2").attr("class","kb2")
		$("#qk_list2").attr("class","Hidebox")
		$("#qk_3").attr("class","kb2")
		$("#qk_list3").attr("class","Hidebox")
   
		$("#showvip1").fadeIn(100);
		$("#showvip2").fadeIn(100);
		$("#showvip1").fadeOut(1500);
		$("#showvip2").fadeOut(1500);
		$("#showvip1").fadeIn(100);
		$("#showvip2").fadeIn(100);
		$("#showvip1").fadeOut(1500);
		$("#showvip2").fadeOut(1500);
		$("#showvip1").fadeIn(100);
		$("#showvip2").fadeIn(100);
		$("#showvip1").fadeOut(1500);
		$("#showvip2").fadeOut(1500);

		
		$(window).scrollTop($("a[name='"+strname+"']").offset().top);
	}
	   
	 if(strname=="st") {
		$("#showst1").fadeIn(100);
		$("#showst2").fadeIn(100);
		$("#showst1").fadeOut(1500);
		$("#showst2").fadeOut(1500);
		$("#showst1").fadeIn(100);
		$("#showst2").fadeIn(100);
		$("#showst1").fadeOut(1500);
		$("#showst2").fadeOut(1500);
		$("#showst1").fadeIn(100);
		$("#showst2").fadeIn(100);
		$("#showst1").fadeOut(1500);
		$("#showst2").fadeOut(1500);
	
	  $(window).scrollTop($("a[name='"+strname+"']").offset().top-50);
	}
    
	 if(strname=="zjlx") {
		 $("#hy_4").attr("class","tab-hover")
		 $("#hy_1").attr("class","")
		 $("#hy_2").attr("class","")
		 $("#hy_3").attr("class","")
		 $("#hy_5").attr("class","")
		 
		 $("#hy_list4").attr("class","")
		 $("#hy_list1").attr("class","Hidebox")
		 $("#hy_list2").attr("class","Hidebox")
		 $("#hy_list3").attr("class","Hidebox")
		 $("#hy_list5").attr("class","Hidebox")
		 
		 
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
	
	  $(window).scrollTop($("a[name='zxtk']").offset().top);
	}
	
	 if(strname=="mnst") {
		 $("#hy_2").attr("class","tab-hover")
		 $("#hy_1").attr("class","")
		 $("#hy_3").attr("class","")
		 $("#hy_4").attr("class","")
		 $("#hy_5").attr("class","")
		 
		 $("#hy_list2").attr("class","")
		 $("#hy_list1").attr("class","Hidebox")
		 $("#hy_list3").attr("class","Hidebox")
		 $("#hy_list4").attr("class","Hidebox")
		 $("#hy_list5").attr("class","Hidebox")
		 
		 
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
	
	  $(window).scrollTop($("a[name='zxtk']").offset().top);
	}
	
	if(strname=="yt") {
		 $("#hy_1").attr("class","tab-hover")
		 $("#hy_2").attr("class","")
		 $("#hy_3").attr("class","")
		 $("#hy_4").attr("class","")
		 $("#hy_5").attr("class","")
		 
		 $("#hy_list1").attr("class","")
		 $("#hy_list2").attr("class","Hidebox")
		 $("#hy_list3").attr("class","Hidebox")
		 $("#hy_list4").attr("class","Hidebox")
		 $("#hy_list5").attr("class","Hidebox")
		 
		 
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
		$("#showzxkc1").fadeIn(100);
		$("#showzxkc2").fadeIn(100);
		$("#showzxkc1").fadeOut(1500);
		$("#showzxkc2").fadeOut(1500);
	
	  $(window).scrollTop($("a[name='zxtk']").offset().top);
	}
	
   }


//格式化时间戳字符串
//formateDate支持时间戳字符串、日期对象
//formateTpl格式化模板(yyyy-mm-dd hh:min:sec)
function formateDate(formateDate, formateTpl) {
    var date = typeof formateDate == 'object' ? formateDate : new Date(parseInt(formateDate.replace(/\D+/g, '')));
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var hh = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    mm = mm < 10 ? '0' + mm : mm;
    dd = dd < 10 ? '0' + dd : dd;
    hh = hh < 10 ? '0' + hh : hh;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    formateTpl = formateTpl || 'yyyy-mm-dd';
    return formateTpl.replace(/yyyy/gi, yyyy).replace(/mm/gi, mm).replace(/dd/gi, dd).replace(/hh/gi, hh).replace(/min/gi, min).replace(/sec/gi, sec);
}