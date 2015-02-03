//客服
$(document).ready(function(){

    //收起 展开
    var isshow = true;
    $("#qqkfpackup").click(function () {
        if (isshow) {
            $("#qqkfpackup").html("展开");
            $("#qqkfpackup").css("position", "static");
            $("#qqkf").css("display", "none");
            $("#qqkfhide").css("display", "block");
            isshow = false;
        }
        else {
            $("#qqkfpackup").html("收起&nbsp;<img src='images/zxkf_gb.jpg' height='10' width='10'/>");
            $("#qqkfpackup").css("position", "relative");
            $("#qqkf").css("display", "block");
            $("#qqkfhide").css("display", "none");
            isshow = true;
        }
    });

});

window.onload = window.onresize = window.onscroll = function ()
{
 
  if(navigator.userAgent.indexOf("MSIE")>0) {  
          
	var BOX = document.getElementById("qqkfpack");	
	
	var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;	
	setTimeout(function ()
	{
		clearInterval(BOX.timer);
		var iTop = parseInt((document.documentElement.clientHeight - BOX.offsetHeight)/2) + iScrollTop;
		BOX.timer = setInterval(function ()
		{
			var iSpeed = (iTop - BOX.offsetTop) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			BOX.offsetTop == iTop ? clearInterval(BOX.timer) : (BOX.style.top = BOX.offsetTop + iSpeed + "px");
                  	
		}, 1)
	}, 0)	
	}
	
	  //置顶按钮
  var t = document.documentElement.scrollTop || document.body.scrollTop;  
  var top_div = document.getElementById( "top_div" ); 
  if( t >= 100 ) { 
        $("#top_div").fadeIn();
  } else { 
        $("#top_div").fadeOut();
  }
};
//置顶按钮
function visible(cursor,i){   
    var n=i>0?80:100;          
    if (navigator.userAgent.indexOf("MSIE")>0){   
        i>0?document.getElementById("top_div").style.filter = "alpha(opacity=80)":document.getElementById("top_div").style.filter = "alpha(opacity=100)";		
    }else{
 	document.getElementById("top_div").style.opacity=n/100;   
    }
	if(i==1)
	{		
		var obj= document.getElementById("div_top_img").src="images/div_top1.png";		
	}
	else
	{
		 var obj1= document.getElementById("div_top_img").src="images/div_top.png";
	}
} 
if(navigator.userAgent.indexOf("MSIE 6.0")>0){
  document.writeln('<div id="top_div"><a href="#"><img id="div_top_img" src="images/div_top.png"  style="filter:alpha(opacity=100);bottom:50px;right:50px;_position:absolute; _TOP:expression(offsetParent.scrollTop+document.documentElement.clientHeight-this.offsetHeight-80);" onmouseover="visible(this,1)" onmouseout="visible(this,0)" /></a></div>');
}else{
    	document.writeln('<div id="top_div"><a href="#"><img id="div_top_img" src="images/div_top.png"  style="filter:alpha(opacity=100)" onmouseover="visible(this,1)" onmouseout="visible(this,0)" /></a></div>');

}



