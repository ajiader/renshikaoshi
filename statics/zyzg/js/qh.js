// JavaScript Document
function openmk(objID)
{
	var mkid='mk_'+objID;
	$('#'+mkid).css("height","100%");
	$('#chakangd_'+objID).hide();
} 
function getObject(objID)
 {if (document.getElementById && document.getElementById(objID)) 
 {return document.getElementById(objID);} 
 else 
 {if (document.all && document.all(objID)) 
 {return document.all(objectId);} 
 else 
 {if (document.layers && document.layers[objID]) 
 {return document.layers[objID];} 
 else
 {return false;}
 }
 }
 }
function toruimokuai(n)
{
for (var i = 1; i <= 9; i++)
{
if (i == n) 
{
getObject("toruimk" + i).className = "selected";
getObject("toruimokuaiDIV" + i).style.display = "";
} 
else
{
getObject("toruimk" + i).className = "";
getObject("toruimokuaiDIV" + i).style.display = "none";
}
}
}

function kstx(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("kstx" + i).className = "selected";
getObject("nrdvDIV" + i).style.display = "";
} 
else
{
getObject("kstx" + i).className = "";
getObject("nrdvDIV" + i).style.display = "none";
}
}
}
function zxkc(n)
{
for (var i = 1; i <= 5; i++)
{
if (i == n) 
{
getObject("zxkc" + i).className = "selected";
getObject("zcksDIV" + i).className = "";
} 
else
{
getObject("zxkc" + i).className = "";
getObject("zcksDIV" + i).className = "hide";
}
}
}

function nwqha(n)
{
for (var i = 1; i <= 4; i++)
{
if (i == n) 
{
getObject("nwqha" + i).className = "selected";
getObject("nwqhaDIV" + i).style.display = "";
} 
else
{
getObject("nwqha" + i).className = "";
getObject("nwqhaDIV" + i).style.display = "none";
}
}
}

function ckks(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("ckks" + i).className = "selected";
getObject("ckksDIV" + i).style.display = "";
} 
else
{
getObject("ckks" + i).className = "";
getObject("ckksDIV" + i).style.display = "none";
}
}
}

function yyws(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("yyws" + i).className = "selected";
getObject("yywsDIV" + i).style.display = "";
} 
else
{
getObject("yyws" + i).className = "";
getObject("yywsDIV" + i).style.display = "none";
}
}
}

function jzgc(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("jzgc" + i).className = "selected";
getObject("jzgcDIV" + i).style.display = "";
} 
else
{
getObject("jzgc" + i).className = "";
getObject("jzgcDIV" + i).style.display = "none";
}
}
}

function sfks(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("sfks" + i).className = "selected";
getObject("sfksDIV" + i).style.display = "";
} 
else
{
getObject("sfks" + i).className = "";
getObject("sfksDIV" + i).style.display = "none";
}
}
}

function hotdowload(n)
{
for (var i = 1; i <= 5; i++)
{
if (i == n) 
{
getObject("hotdowload" + i).className = "selected";
getObject("hotdowloadDIV" + i).className = "";
} 
else
{
getObject("hotdowload" + i).className = "";
getObject("hotdowloadDIV" + i).className = "hide";
}
}
}

function wmks(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("wmks" + i).className = "selected";
getObject("wmksDIV" + i).style.display = "";
} 
else
{
getObject("wmks" + i).className = "";
getObject("wmksDIV" + i).style.display = "none";
}
}
}

function otherks(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("otherks" + i).className = "selected";
getObject("otherksDIV" + i).style.display = "";
} 
else
{
getObject("otherks" + i).className = "";
getObject("otherksDIV" + i).style.display = "none";
}
}
}

function yywsone(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsone" + i).className = "selected";
getObject("yywsoneDIV" + i).style.display = "";
} 
else
{
getObject("yywsone" + i).className = "";
getObject("yywsoneDIV" + i).style.display = "none";
}
}
}

function yywstwo(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywstwo" + i).className = "selected";
getObject("yywstwoDIV" + i).style.display = "";
} 
else
{
getObject("yywstwo" + i).className = "";
getObject("yywstwoDIV" + i).style.display = "none";
}
}
}

function yywsthree(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsthree" + i).className = "selected";
getObject("yywsthreeDIV" + i).style.display = "";
} 
else
{
getObject("yywsthree" + i).className = "";
getObject("yywsthreeDIV" + i).style.display = "none";
}
}
}

function yywsfoure(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsfoure" + i).className = "selected";
getObject("yywsfoureDIV" + i).style.display = "";
} 
else
{
getObject("yywsfoure" + i).className = "";
getObject("yywsfoureDIV" + i).style.display = "none";
}
}
}
function yywsfive(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsfive" + i).className = "selected";
getObject("yywsfiveDIV" + i).style.display = "";
} 
else
{
getObject("yywsfive" + i).className = "";
getObject("yywsfiveDIV" + i).style.display = "none";
}
}
}

function yywssex(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywssex" + i).className = "selected";
getObject("yywssexDIV" + i).style.display = "";
} 
else
{
getObject("yywssex" + i).className = "";
getObject("yywssexDIV" + i).style.display = "none";
}
}
}

function yywsseven(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsseven" + i).className = "selected";
getObject("yywssevenDIV" + i).style.display = "";
} 
else
{
getObject("yywsseven" + i).className = "";
getObject("yywssevenDIV" + i).style.display = "none";
}
}
}

function yywseight(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywseight" + i).className = "selected";
getObject("yywseightDIV" + i).style.display = "";
} 
else
{
getObject("yywseight" + i).className = "";
getObject("yywseightDIV" + i).style.display = "none";
}
}
}
function yywsnine(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsnine" + i).className = "selected";
getObject("yywsnineDIV" + i).style.display = "";
} 
else
{
getObject("yywsnine" + i).className = "";
getObject("yywsnineDIV" + i).style.display = "none";
}
}
}

function yywsten(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("yywsten" + i).className = "selected";
getObject("yywstenDIV" + i).style.display = "";
} 
else
{
getObject("yywsten" + i).className = "";
getObject("yywstenDIV" + i).style.display = "none";
}
}
}

function zzysten(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("zzysten" + i).className = "selected";
getObject("zzystenDIV" + i).style.display = "";
} 
else
{
getObject("zzysten" + i).className = "";
getObject("zzystenDIV" + i).style.display = "none";
}
}
}

function zzystenone(n)
{
for (var i = 1; i <= 2; i++)
{
if (i == n) 
{
getObject("zzystenone" + i).className = "selected";
getObject("zzystenoneDIV" + i).style.display = "";
} 
else
{
getObject("zzystenone" + i).className = "";
getObject("zzystenoneDIV" + i).style.display = "none";
}
}
}

function kefu_url(i)
{
	if(i==1){//问答
    window.open("http://www3.53kf.com/webCompany.php?arg=cdbroadcom&style=1&language=zh-cn&lytype=0&charset=gbk&kflist=on&kf=sl864,lq834,ycy875,lilinglin,tanggl,zhoucl,qinwen,yushunlai,litingting,zhangjing,fanxuemei,zhouq835,lijanq,hr869,zhangyu,yangjiao,linj,lijiao867,xiangrj&zdkf_type=1&referer=http%3A%2F%2Fwww.kaozc.com%2Fkaoshi-219-94388-1.html&keyword=http%3A//www.kaozc.com/kaoshi-219-90753-1.html&tfrom=1&tpl=crystal_blue&timeStamp=1359080248843",'_blank');
	}else if(i==2){//我们的53kf
	 window.open("http://www2.53kf.com/webCompany.php?arg=10020276&style=1&language=zh-cn&lytype=0&charset=gbk&kflist=on&kf=1092926714@qq.com,244810747@qq.com&zdkf_type=1&referer=http%3A%2F%2Fwww.egbroad.com%2F&keyword=&tfrom=1&tpl=crystal_blue&timeStamp=1372842695461",'_blank');
	}
}