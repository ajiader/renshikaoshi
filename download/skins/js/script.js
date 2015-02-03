// JavaScript Document
<!--
/*第一种形式 第二种形式 更换显示样式 */
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
function setTabb(b,c){
for(i=1;i<=c;i++){
var m=document.getElementById("show"+i);
var x=document.getElementById("con_one_"+i);
m.className=i==b?"hover":"";
x.style.display=i==b?"block":"none";
}
}
//-->

function zk(z){            
            for (i=0;i<=6;i++) {		
			var obj=document.getElementById("zk"+z); 
            var ss=obj.offsetHeight; 
            var ff=document.getElementById("tab"+z).style.height;  
            var fff  = ff.substring(0,ff.length-2);  
                 

            if (i == 5&&(z==5||z==6)) {
                if(ss<fff){
                obj.className="Contentbox5_nearlast"; 
               }  else{ 
                obj.className="Contentbox5_nearlast zk_nearlast";  
                }
            }else if (i == 6&&(z==5||z==6)) {
                if(ss<fff){
                obj.className="Contentbox5_last"; 
               }  else{ 
                obj.className="Contentbox5_last zk_last";  
                }
            } else {
               if(ss<fff){
                obj.className="Contentbox5"; 
               }  else{ 
                obj.className="Contentbox5 zk";  
                }
            }


               
          }

//           
//          if(ss<ff){
//            document.getElementById("zk1").className="Contentbox5";
//       }
        }
        function gb(z){            
            for (i=0;i<=6;i++) {		
			var obj=document.getElementById("zk"+z);             
            if(obj.id=="zk0"){
            obj.className="Contentbox5 gb0";
            } else if (obj.id=="zk1"){         
			 obj.className="Contentbox5 gb1"; 
             } else if (obj.id=="zk2"){         
			 obj.className="Contentbox5 gb2"; 
             } else if (obj.id=="zk3"){         
			 obj.className="Contentbox5 gb3"; 
             }else if (obj.id=="zk4"){         
			 obj.className="Contentbox5 gb4"; 
             } else if (obj.id=="zk5"){         
			 obj.className="Contentbox5_nearlast gb5"; 
             } else if (obj.id=="zk6"){         
			 obj.className="Contentbox5_last gb6"; 
             }            
                   
            }
            
        }

//置顶按钮
function visible(cursor, i) {

    var n=i>0?80:100;          
    if (navigator.userAgent.indexOf("MSIE")>0){   
        i>0?document.getElementById("top_div").style.filter = "alpha(opacity=80)":document.getElementById("top_div").style.filter = "alpha(opacity=100)";
    }else{
 	document.getElementById("top_div").style.opacity=n/100;
}
}
if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
    document.writeln('<div id="top_div" style="display:none"><a href="#"><img src=\"http://www.ksbao.com/ksbd/skins/images/div_top.png\"  style="filter:alpha(opacity=100);bottom:40px;right:120px;_position:absolute; _TOP:expression(offsetParent.scrollTop+document.documentElement.clientHeight-this.offsetHeight-40);" onmouseover="visible(this,1)" onmouseout="visible(this,0)" /></a></div>');
} else {
    document.writeln('<div id="top_div" style="position:fixed; bottom:40px; right:60px; display:none;" ><a href="#"><img src=\"http://www.ksbao.com/ksbd/skins/images/div_top.png\"  style="filter:alpha(opacity=100)" onmouseover="visible(this,1)" onmouseout="visible(this,0)" /></a></div>');
}