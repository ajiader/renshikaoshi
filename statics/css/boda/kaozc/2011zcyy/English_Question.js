$(document).ready(function(){
  //跑马灯
  function ScrollAction(listObj, listElem, speed, isSeries) {	//listObj为需要滚动的列表，  speed为滚动速度
	  var pos, top, aniTop, height;
	  var id = '';  //记录setInterval的标记id
	  
	  pos = listObj.position();	
	  top = pos.top;			//列表的top
	  aniTop = top;				//记录当前运动时的top
	  height = listObj.height();	//列表的高度
	  
	  var scrollUp = function() {
		  aniTop--;
		  if(!isSeries) {	//isSeries变量控制是否连续滚动，false不连续，true连续
			  if(aniTop == -height) {	//不连续，滚动玩重新滚动
				  listObj.css({'top': top});
				  aniTop = top;
			  };
		  } else {
			  if(aniTop == -listObj.children().eq(0).height()) {	//连续滚动
				  var firstItem = '<' + listElem +'>' + listObj.children().eq(0).html() + '</' + listElem +'>';
				  listObj.children().eq(0).remove();
				  listObj.append(firstItem);
				  aniTop = 4;
			  };
		  };
		  listObj.css({'top': aniTop + 'px'});
	  };
	  
	  var hover = function(id) {
		  listObj.hover(function() {
			  clearInterval(id);
		  }, function() {
			  id = setInterval(scrollUp, speed);
		  });
	  };
	  
	  this.start = function() {
		  id = setInterval(scrollUp, speed);
		  hover(id);
	  };
	  
  };
  var sa = new ScrollAction($(".noticeList"), 'li', 40, true);
  sa.start();						   
})