// JavaScript Document

function getClass(tagName, classStr) 
{ 
	   if (document.getElementsByClassName) 
	   {
			return document.getElementsByClassName(classStr)
	   }
	   else 
	   {
			var nodes = document.getElementsByTagName(tagName),
			ret = []
			for (i = 0; i < nodes.length; i++) 
			{
				if (hasClass(nodes[i],classStr))
				{
					ret.push(nodes[i])
				}
			}
		   return ret;
	   }
	   function hasClass(tagStr,classStr)
	   {
			var arr=tagStr.className.split(/\s+/); 
			for(var i=0;i<arr.length;i++)
			{
				if(arr[i]==classStr)
				{
					return true;
				}
			}
			return false;
	   }
}


function goTopEx()
{
	var obj=document.getElementById("goTopBtn");
	var fanh=getClass("a","fha");
	function getScrollTop()
	{
			return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	}
	function setScrollTop(value)
	{
		if(document.documentElement.scrollTop)
		{
			   document.documentElement.scrollTop=value;
		}
		else
		{
			   document.body.scrollTop=value;
		}
			
	}    
	window.onscroll=function()
	{
		var h=document.body.scrollHeight - getScrollTop() - obj.offsetTop - obj.offsetHeight;
		obj.style.bottom=0+"px";
		
	}
	obj.onclick=function()
	{
		var goTop=setInterval(scrollMove,10);
		function scrollMove()
		{
			 setScrollTop(getScrollTop()/1.1);
			 if(getScrollTop()<1)clearInterval(goTop);

		}
	}
	for(var i=0; i<fanh.length; i++)
	{
		fanh[i].onclick=function()
		{
			var goTop1=setInterval(scrollMoves,10);
			function scrollMoves()
			{
				 setScrollTop(getScrollTop()/1.1);
				 if(getScrollTop()<1)clearInterval(goTop1);

			}	
		}
	}
}

