<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />

<link href="<?php echo $this->kaozcUrl; ?>/statics/css/z_reset.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $this->kaozcUrl; ?>/statics/css/z_default_blue.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $this->kaozcUrl; ?>/statics/css/z_share.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $this->kaozcUrl; ?>/statics/css/search.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php echo $this->kaozcUrl; ?>/statics/js/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $this->kaozcUrl; ?>/statics/js/cookie.js"></script>
<script type="text/javascript" src="<?php echo $this->kaozcUrl; ?>/statics/js/search_common.js"></script>
<title><?php echo CHtml::encode($this->pageTitle); ?></title>

</head>
<body>
 <div class="body-top"  >

  <div class="expo_nav" style="width:940px;margin:0 auto;line-height:26px;height:36px;">
   <span><a href="http://www.renshikaoshi.net" target="_blank"><b>网站首页</b></a></span><a href="http://www.renshikaoshi.net/En/"><font color="red">职称英语</font></a>-<a href="http://www.renshikaoshi.net/En/lgl/">理工类</a>-<a href="http://www.renshikaoshi.net/En/wsl/">卫生类</a>-<a href="http://www.renshikaoshi.net/jsj/">职称计算机</a>-
  <a href="http://www.renshikaoshi.net/zyzg/">职业资格</a>-<a href="http://www.renshikaoshi.net/zyzg/ckl/">金融财会</a>-<a href="http://www.renshikaoshi.net/zyzg/jz/">建筑工程</a>-<a href="http://www.renshikaoshi.net/zyzg/yy/">医药卫生</a>-<a href="#">帮助中心</a></div>
  
  
</div>
	<div class="clr sr_body sr_list">
    	<div class="sr_main">
        	

<div class="wrap sr_logo">
            	<!--<a href="index.php" class="l"><img src="<?php echo $this->kaozcUrl; ?>/statics/images/search/se_logo.png" width="230" height="158" /></a>-->
                <div class="l">
                	<div class="sr_frm_box">
						<form name="search" type="get">
                        <div class="sr_frmipt">
						 
						<input type="text" name="q" class="ipt" id="q" value="<?=$_GET['q']?>">
				
<div class="sp" id="aca">▼</div>	

						<input type="submit" class="ss_btn" value="搜 索"></div>
						</form>
						<div id="sr_infos" class="wrap sr_infoul">
						</div>
                    </div>
                    <div class="jg">获得约 <?php  print_r(  $this->newscount) ?> 条结果</div>
                </div>
            </div>
            <div class="brd1s"></div>
            <?php echo $content; ?>
      </div>

<div id="foot" class="area area"  style=" border-top:1px solid #E1E1E1; line-height:22px;padding-top:10px; height:150px;" >
      <p align="center"><a onClick="this.style.behavior='url(#default#homepage)';this.setHomePage('http://http://www.renshikaoshi.net');return" href="javascript:void(0)" false;="">设置首页</a> - <a href="http://www.renshikaoshi.net/list-2-1.html" rel="nofollow" target="_blank">关于博大</a> - <a href="http://www.cdbroad.com/cdbroad/gysy/18" rel="nofollow" target="_blank">博大公益</a> - <a href="http://wap.cdbroad.com/" rel="nofollow" target="_blank">手机版</a> - <a href="http://www.renshikaoshi.net/list-5-1.html" rel="nofollow" target="_blank">合作联系</a> - <a href="http://www.renshikaoshi.net/list-4-1.html" rel="nofollow" target="_blank">网站声明</a>- <a href="http://www.renshikaoshi.net/old/" target="_blank">旧版</a> - <a href="http://www.renshikaoshi.net/list-445-1.html" rel="nofollow" target="_blank">帮助中心</a> - <a href="http://www.renshikaoshi.net/list-446-1.html" rel="nofollow" target="_blank">友情链接</a> - <a href="#" target="_blank">网站导航</a> </p>
            <p align="center">Copyright &#169; 2011-2013 Inc. all Rights Reserved. 博大教育 <a href="http://www.renshikaoshi.net/list-4-1.html" target="_blank">版权所有</a> </p>
       <p align="center"><a href="http://www.renshikaoshi.net" target="_blank">成都博大教育科技有限公司</a>&nbsp;&nbsp;蜀ICP备07505764号&nbsp;&nbsp; 
 </p></div>
</body>

</html>

