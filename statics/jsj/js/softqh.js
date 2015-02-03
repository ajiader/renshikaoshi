// JavaScript Document

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

function softdv(n)
{
for (var i = 1; i <= 3; i++)
{
if (i == n) 
{
getObject("softdv" + i).className = "selected";
getObject("softDIV" + i).style.display = "";
if(i==1)
{
	getObject("softdv" + i).style.borderTop="0px";	
}
if(i==3)
{
	getObject("softdv" + i).style.borderBottom="0px";	
}
} 
else
{
getObject("softdv" + i).className = "";
getObject("softDIV" + i).style.display = "none";
}
}
}