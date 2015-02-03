 window.onload = function () {
	 
	   for(j=1; j<100;j++){
            var obj = document.getElementById('nav'+j).getElementsByTagName('div');
            for (i = 0; i < obj.length; i++) {
                obj[i].onmouseover = function () {
                    this.style.overflow = 'visible';                         
					this.style.borderRight = '1px';
                    this.style.borderLeft = '1px';
                    this.style.borderRight = '1px';					
                    this.style.borderColor = '#ddd';
                    this.style.borderStyle = 'solid';
                    this.style.height = 'auto';
                    this.style.padding = '0px';
					this.style.borderTop = 'none'; 
                }
                obj[i].onmouseout = function () {
                    this.style.overflow = 'hidden';                    
                    this.style.padding = '0px';
                    this.style.height = '';
					this.style.borderTop = 'none'; 
                    this.style.borderBottom = 'none';
                    this.style.borderLeft = 'none';
                    this.style.borderRight = 'none';
                }
            }
	     }
			
       }
		
		