var Installurl = "http://wx.233.com/player/Installplayer.swf";
var playerurl =  "http://wx.233.com/player/wxplayer3.5.3.swf?v=4.07";
var swfwidth = 862;
var swfheight = 525;
var params = {allowFullScreen:"true",wmode:"transparent"};

function setPlayAttribute(playtype){
	var Days = 30;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = "wxbfls="+ escape(playtype) + ";expires=" + exp.toGMTString();
	return ;
}

function getPlayAttribute(){
	var arr,tmpstr;
	tmpstr = null;
	var reg=new RegExp("(^| )wxbfls=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		  tmpstr = unescape(arr[2]);
		  if(tmpstr=="1" || tmpstr=="2" || tmpstr=="3"){
	        tmpstr = Number(tmpstr);
		  }
	   }
	return tmpstr;
}


//-----------------------------------------------------------------  JS调用播放器内部方法
//jsSetTime(time)  设置播放器播放时间为time

//sysPutMsg(msg)   让播放器弹出内容为msg的提示框

//jsPlay()         播放

//jsPause()        暂停

//jsSetFullScreen()全屏

//jsSetNormal()    退出全屏

//jsSetVideoSize(stype) 设置视频尺寸，带参数(0为原始，1为4:3,2为16:9,3为铺满)



//-----------------------------------------------------------------  播放器调用外部JS方法
//function NextVideo(){
     //location.href = urlstr; //视频播放完后自动跳到下一讲的地址
//}

//function updateTotalTime(vt){ //参为VT为Flash返回的总时长
   //这里为自己的代码
//}

//function WritePlayInfo(time){ //参为time为Flash返回的当前播放时间
   //这里为自己的代码
//}

var ischrome = false;