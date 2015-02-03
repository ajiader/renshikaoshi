
// ·µ»ØId¡¢Tag  
function Pid(id,tag){  
if(!tag){return document.getElementById(id);}  
else{return document.getElementById(id).getElementsByTagName(tag);}  
}  
// ¸ôÐÐ»»É«  
function ghhs(id,tag,s) {  
    var line=Pid(id,tag);  
    for (var i=1;i<line.length+1;i++) {   
        line[i-1].className=(i%2>0)?"t1":"t2";   
    }  
    if(s=="no"){  
        return;  
    }  
    else if(!s){  
        for(var i=0;i<line.length;i++) {  
            line[i].onmouseover=function(){  
                this.tmpClass=this.className;  
                this.className+=" up";  
            }  
            line[i].onmouseout=function(){  
                this.className=this.tmpClass;  
            }  
        }  
    }  
    else{  
        for(var i=0;i<line.length;i++) {  
            line[i].tmep=i;  
            line[i][s]=function(){  
                ghhs_tab(this.tmep);  
            }  
        }  
    }  
    function ghhs_tab(s){  
        for(var i=0;i<line.length;i++){  
            if(!line[i].tmpClass){  
                line[i].tmpClass=line[i].className+=" pr1984_com";  
            }  
            if(s==i){  
                line[i].className+=" up";  
            }  
            else {  
                line[i].className=line[i].tmpClass;  
            }  
        }  
    }  
	
	

	
}  

	   for(i=1;i<100;i++){  
   ghhs("nalist"+i,"li");

 }