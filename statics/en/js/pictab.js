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

				li.eq(index).css({"left":"296px"});	

				ul.animate({left:"-296px"},speed); 	

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

				li.eq(n).css({"left":"296px"});	

				 	

					n++;

					i++;

					timer1 = setTimeout(autoroll, autospeed);

					ul.animate({left:"-296px"},speed);

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