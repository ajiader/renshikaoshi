// JavaScript Document
$(document).ready(function(){					   
  //页面加载显示的事件
  $(".Soft_Hotsale_Nav>ul>li:eq(0)").addClass("Soft_Hotsale_NavLi").css({"color":"#FFF"});
  $(".Soft_HostSale_ImgBox1").css({"display":"block"});
  $(".English_ClassLi1").addClass("English_ClassLiN1");
  $(".English_Center_ClassInfoChangeBox1").css({"display":"block"});
  
  //导航鼠标滑动事件
  $(".English_Center_Nav>ul>li>a").hover(function(){
	$(this).css({"color":"#ff4242","text-decoration":"none"});									  
  },function(){
	$(this).css({color:"#FFF"});  
  });
  
  //软件卖点鼠标滑动事件
//  $(".Soft_Hotsale_Nav>ul>li").hover(function(){
//	$(this).addClass("Soft_Hotsale_NavLi");
//	$(this).css({"color":"#FFF"});
//  },function(){
//	$(this).removeClass("Soft_Hotsale_NavLi");
//	$(this).css({"color":"#7e3200"});
//  });
  
  //软件卖点鼠标点击事件
  $(".Soft_Hotsale_Nav>ul>li:eq(0)").click(function(){
	//让自身按钮添加样式
	$(this).addClass("Soft_Hotsale_NavLi");
	$(this).css({"color":"#FFF"});
	//让其他按钮效果消失
	$(".Soft_Hotsale_Nav>ul>li:eq(1)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(2)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(3)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	//关闭其他介绍图片
	$(".Soft_HostSale_ImgBox2").css({"display":"none"});
	$(".Soft_HostSale_ImgBox3").css({"display":"none"});
	$(".Soft_HostSale_ImgBox4").css({"display":"none"});
	//打开自己的介绍
	$(".Soft_HostSale_ImgBox1").animate({"opacity":"show"},1000);
  });
  
  $(".Soft_Hotsale_Nav>ul>li:eq(1)").click(function(){
	//让自身按钮添加样式
	$(this).addClass("Soft_Hotsale_NavLi");
	$(this).css({"color":"#FFF"});
	//让其他按钮效果消失
	$(".Soft_Hotsale_Nav>ul>li:eq(0)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(2)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(3)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});	
	//关闭其他介绍图片
	$(".Soft_HostSale_ImgBox1").css({"display":"none"});
	$(".Soft_HostSale_ImgBox3").css({"display":"none"});
	$(".Soft_HostSale_ImgBox4").css({"display":"none"});
	//打开自己的介绍
	$(".Soft_HostSale_ImgBox2").animate({"opacity":"show"},1000);
  });
  
  $(".Soft_Hotsale_Nav>ul>li:eq(2)").click(function(){
	//让自身按钮添加样式
	$(this).addClass("Soft_Hotsale_NavLi");
	$(this).css({"color":"#FFF"});
	//让其他按钮效果消失
	$(".Soft_Hotsale_Nav>ul>li:eq(1)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(0)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(3)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});	
	//关闭其他介绍图片
	$(".Soft_HostSale_ImgBox2").css({"display":"none"});
	$(".Soft_HostSale_ImgBox1").css({"display":"none"});
	$(".Soft_HostSale_ImgBox4").css({"display":"none"});
	//打开自己的介绍
	$(".Soft_HostSale_ImgBox3").animate({"opacity":"show"},1000);
  });
  
  $(".Soft_Hotsale_Nav>ul>li:eq(3)").click(function(){
	//让自身按钮添加样式
	$(this).addClass("Soft_Hotsale_NavLi");
	$(this).css({"color":"#FFF"});
	//让其他按钮效果消失
	$(".Soft_Hotsale_Nav>ul>li:eq(1)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(2)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});
	$(".Soft_Hotsale_Nav>ul>li:eq(0)").removeClass("Soft_Hotsale_NavLi").css({"color":"#7e3200"});	
	//关闭其他介绍图片
	$(".Soft_HostSale_ImgBox2").css({"display":"none"});
	$(".Soft_HostSale_ImgBox3").css({"display":"none"});
	$(".Soft_HostSale_ImgBox1").css({"display":"none"});
	//打开自己的介绍
	$(".Soft_HostSale_ImgBox4").animate({"opacity":"show"},500);
  });  
  
  //班级导航
  $(".English_ClassLi1").click(function(){
	//先卸载掉其他按钮的样式
	$(".English_ClassLi2").removeClass("English_ClassLiN2");
	$(".English_ClassLi3").removeClass("English_ClassLiN3");
	//给自己的按钮添加样式
	$(this).addClass("English_ClassLiN1");
	
	//先关闭别个的层
	$(".English_Center_ClassInfoChangeBox2").css({"display":"none"});
	$(".English_Center_ClassInfoChangeBox3").css({"display":"none"});
	//显示自己连带的层
	$(".English_Center_ClassInfoChangeBox1").animate({"opacity":"show"},500);
  });
  
  $(".English_ClassLi2").click(function(){
	//先卸载掉其他按钮的样式
	$(".English_ClassLi1").removeClass("English_ClassLiN1");
	$(".English_ClassLi3").removeClass("English_ClassLiN3");
	//给自己的按钮添加样式
	$(this).addClass("English_ClassLiN2");
	
	//先关闭别个的层
	$(".English_Center_ClassInfoChangeBox1").css({"display":"none"});
	$(".English_Center_ClassInfoChangeBox3").css({"display":"none"});
	//显示自己连带的层
	$(".English_Center_ClassInfoChangeBox2").animate({"opacity":"show"},500);	
  });
  
  $(".English_ClassLi3").click(function(){
	//先卸载掉其他按钮的样式
	$(".English_ClassLi2").removeClass("English_ClassLiN2");
	$(".English_ClassLi1").removeClass("English_ClassLiN1");
	//给自己的按钮添加样式
	$(this).addClass("English_ClassLiN3");
	
	//先关闭别个的层
	$(".English_Center_ClassInfoChangeBox2").css({"display":"none"});
	$(".English_Center_ClassInfoChangeBox1").css({"display":"none"});
	//显示自己连带的层
	$(".English_Center_ClassInfoChangeBox3").animate({"opacity":"show"},500);	
  });
  
  //信息采集事件
  $(".Phone_Dictionary_Download").click(function(){
	$(".Phone_Download_InfoServer").animate({height: "toggle",opacity:"toggle"},{duration:1000});											 
  });
  
  //下载按钮滑动事件
  $(".Phone_Dictionary_Download").hover(function(){
	$(this).addClass("Phone_Dictionary_DownloadHover");											 
  },function(){
	$(this).removeClass("Phone_Dictionary_DownloadHover");  
  });
  
  $(".Change").hover(function(){
	$(this).css({"text-decoration":"underline"});						  
  },function(){
	$(this).css({"text-decoration":"none"});  
  });
  
  $(".Download_button").hover(function(){
	$(this).addClass("Download_button_Hover");								   
  },function(){
	$(this).removeClass("Download_button_Hover");  
  });
  $(".Download_buttonTwo").hover(function(){
	$(this).addClass("Download_button_Hover");								   
  },function(){
	$(this).removeClass("Download_button_Hover");  
  });  
  
  //手机辞典下载页面第一步操作提交按钮事件
  $(".Download_button").click(function(){
    //验证是否已选择手机型号
    if($(".ddlparent").val() == "" || $(".ddlparent").val() == null)
    {
        alert("请先选择您的手机品牌！");
        return false;
    }
    if($(".ddlchild").val() == "" || $(".ddlchild").val() == null)
    {
        alert("请选择您的手机型号！");
        return false;
    }
    //Ajax获取所选型号的信息
    $.ajax({
	    type:"POST",
	    url:"AjaxPage.aspx",
	    datatype:"html",
        data:"Down_Phone=" + $(".ddlchild").val(),
        success:function(data){
            if(data.length == 0)
                alert("还不存在该型号手机辞典，敬请期待！");
            else
            {
                var array = data.split(',');
                var html = "<li>您的手机型号为：<span>"+$('.ddlparent option:selected').text() + $('.ddlchild option:selected').text() +"</span></li>";
                html += "<li>适合您的版本为：<span>"+array[0]+"</span></li>";
                html += "<li>软&nbsp;&nbsp;件&nbsp;&nbsp;大&nbsp;&nbsp;小：<span>"+array[1]+"M</span></li>";
                html += "<li>更&nbsp;&nbsp;新&nbsp;&nbsp;日&nbsp;&nbsp;期：<span>"+array[2]+"</span></li>";
                
                $(".downloadhref").attr("href",array[3]);
                $(".phoneinfo").html(html);
                $(".Phone_Download_Check").css({"display":"none"});
	            $(".Phone_Download_CheckTwo").animate({opacity:"show"},1000);
	        }
        },
        error:function(x,e){
            alert("服务器繁忙，请稍后再试！");
        }
    });
  });
  
  $(".Download_buttonTwo").click(function(){
    //验证输入
    if($(".NameText").val() == "")
    {
	  alert("您的姓名不能为空哦!");
	  return false;
    }
    if($(".NameText").val() != $(".NameText").val().replace(/[^\u4E00-\u9FA5]/g))
    {
	  alert("名字不能为英文或是其他字符哦!");
	  return false;
    }	
    if($(".NumText").val() == "")
    {
	  alert("您的电话号码不能为空哦!");
	  return false;
    }
	if($(".NumText").val() > "")
	{
	  var reg = /13[5,6,7,8,9]\d{8}/;
	  if($(".NumText").val().match(reg)==null)
	  {
		alert("请输入正确的移动手机号码");
		return false;
	  }
	}
	//AJAX提交数据保存用户记录
	$.ajax({
	    type:"POST",
	    url:"AjaxPage.aspx",
	    datatype:"html",
	    data:"Down_Name=" + $(".NameText").val() + "&Down_Tel=" + $(".NumText").val(),
	    success:function(data){
	        $(".Phone_Download_CheckTwo").css({"display":"none"});
	        $(".Phone_Download_CheckThree").animate({opacity:"show"},1000);		
	    },
	    error:function(x,e)
	    {
	        alert("服务器繁忙，请稍后再试！");
	    }
	});	
  });  
  
  $(".Change").click(function(){
	$(".Phone_Download_CheckTwo").css({"display":"none"});
	$(".Phone_Download_Check").animate({opacity:"show"},1000);							  
  });
  
  $(".NameText").focusin(function(){
	$(this).css({"border":"1px solid #09F"});							  
  });
  $(".NameText").focusout(function(){
	$(this).css({"border":"1px solid #CCC"});							   
  });
  
  $(".NumText").focusin(function(){
	$(this).css({"border":"1px solid #09F"});							  
  });
  $(".NumText").focusout(function(){
	$(this).css({"border":"1px solid #CCC"});							   
  });  
    //押中题目详细列表隔行换色
  $(".Hight_Mart_Info>ul:even").css({"background-color":"#eef9ff"});

  
  
  //手机辞典下载页面根据品牌获取手机型号Ajax,对应ddlparent与ddlchild样式只为获取控件，不真实存在
  $('.ddlparent').change(function() {
     $.ajax({
        type:"POST",
        url:"AjaxPage.aspx", 
        datatype:"html",
        data:"Phone=" + $(".ddlparent").val(),
        success:function(data){
            $('.ddlchild').empty();
            $('.ddlchild').html(data);
        },
        error:function(x,e){
            alert("服务器繁忙，请稍后再试！");
        }
     });
  });
})