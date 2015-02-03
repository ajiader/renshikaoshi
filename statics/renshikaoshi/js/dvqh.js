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
 
function qhnrright(n)
{
for (var i = 1; i <= 4; i++)
{
if (i == n) 
{
getObject("qhnrright" + i).className = "selected";
getObject("qhnrrightDIV" + i).style.display = "";
} 
else
{
getObject("qhnrright" + i).className = "";
getObject("qhnrrightDIV" + i).style.display = "none";
}
}
}
function qhnrrighta(n)
{
for (var i = 1; i <= 5; i++)
{
if (i == n) 
{
getObject("qhnrrighta" + i).className = "selected";
getObject("qhnrrightaDIV" + i).style.display = "";
} 
else
{
getObject("qhnrrighta" + i).className = "";
getObject("qhnrrightaDIV" + i).style.display = "none";
}
}
}

function qhnrrightb(n)
{
for (var i = 1; i <= 5; i++)
{
if (i == n) 
{
getObject("qhnrrightb" + i).className = "selected";
getObject("qhnrrightbDIV" + i).style.display = "";
} 
else
{
getObject("qhnrrightb" + i).className = "";
getObject("qhnrrightbDIV" + i).style.display = "none";
}
}
}