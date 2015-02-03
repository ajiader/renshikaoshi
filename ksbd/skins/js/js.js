function switchMain(tag, content, k, n, stylea, styleb) {
            for (i = 1; i <= n; i++) {
                if (i == k) {
                    document.getElementById(tag + i).className = stylea;
                    document.getElementById(content + i).className = "midlf";
                } else {
                    document.getElementById(tag + i).className = styleb;
                    document.getElementById(content + i).className = "Hidebox";
                }
            }
        }
function ddSliderPlayers(elementId, handleId, pauseTime, currentClassName) {
            try {
                if (typeof ddSliderPlayer == 'undefined')
                    ddSliderPlayer = {};
            } catch (e) {
                ddSliderPlayer = {};
            }
            var elementObj = document.getElementById(elementId);
            var handler = document.getElementById(handleId);
            ddSliderPlayer[elementId] = new DDSliderPlayer(elementObj, handler, pauseTime, currentClassName);

            elementObj.onmouseover = function () {
                ddSliderPlayer[elementId].pause();
            }
            elementObj.onmouseout = function () {
                ddSliderPlayer[elementId].play();
            };
            return ddSliderPlayer;
        }
function DDSliderPlayer(elementObj, handler, pauseTime, currentClassName) {
            this.id = elementObj.id;
            this.timer;
            this.curScreen = 0;
            this.elementObj = elementObj;
            this.pauseTime = (undefined == pauseTime) ? 3000 : pauseTime * 1000;
            this.currentClassName = (currentClassName == undefined) ? 'sel' : currentClassName;
            this.pics = getElementsByClassName('switchItem', elementObj);
            this.handlers = getElementsByClassName('switchNavItem', handler);
            this.maxScreen = this.pics.length;
            for (i = 0; i < this.handlers.length; i++) {
                this.handlers[i].setAttribute("index", i);
                var id = this.id;
                this.handlers[i].onmouseover = function () {
                    var u = this.getAttribute('index');
                    ddSliderPlayer[id].go(u).pause();
                }
                this.handlers[i].onmouseout = function () {
                    ddSliderPlayer[id].play();
                }
            }
            this.go();
            if (pauseTime)
                this.play();
        }
        DDSliderPlayer.prototype.pause = function () {
            this.pauseTime && clearInterval(this.timer);
            this.timer = null;
        };
        DDSliderPlayer.prototype.play = function () {
            if (!this.timer && this.pauseTime) this.timer = setInterval('ddSliderPlayer.' + this.id + '.go()', this.pauseTime);
        };
        DDSliderPlayer.prototype.go = function (t) {
            this.curScreen = t === undefined ? this.curScreen : t;
            this.curScreen %= this.maxScreen;
            for (i = 0; i < this.maxScreen; i++) {
                if (i == this.curScreen) {
                    this.handlers[i].className = 'switchNavItem ' + this.currentClassName;
                    this.pics[i].style.display = '';
                } else {
                    this.handlers[i].className = 'switchNavItem';
                    this.pics[i].style.display = "none";
                }
            }
            ++this.curScreen;
            return this;
        }
function getElementsByClassName(className, parentElement) {
            if (typeof (parentElement) == 'object') {
                var elems = parentElement.getElementsByTagName("*");
            } else {
                var elems = (document.getElementById(parentElement) || document.body).getElementsByTagName("*");
            }
            var result = [];
            for (i = 0; j = elems[i]; i++) {
                if ((" " + j.className + " ").indexOf(" " + className + " ") != -1) {
                    result.push(j);
                }
            }
            return result;
        }
function ddHSlider(offX, eleid) {
            document.getElementById(eleid).scrollLeft += offX;
        }
function __ms(obj) { obj.className = "ksbao_shadow"; }

function __mh(obj) { obj.className = "ksbao_noshadow"; }

function __mores() { document.getElementById("menu_more_list").style.display = ''; }

function __moreh() { document.getElementById("menu_more_list").style.display = 'none'; }

function switchTag(tag, content, k, n, stylea, styleb, stylename) {
            var ls;
            if (typeof (stylename) == 'string') {
                ls = stylename;
            } else {
                ls = "Showbox";
            }
            for (i = 1; i <= n; i++) {
                if (i == k) {
                    document.getElementById(tag + i).className = stylea;
                    document.getElementById(content + i).className = ls;
                } else {
                    document.getElementById(tag + i).className = styleb;
                    document.getElementById(content + i).className = "Hidebox";
                }
            }
        }
function AddToFavorite(href, desc) {
            if (document.all)
            {
				window.external.addFavorite(href, desc); 
			    }
            else if (window.sidebar)
            { 
			    window.sidebar.addPanel(desc, href, ""); 
				}

        } 
$(function(){
	$("#menu ul li").mouseover(function() {
	$(this).addClass("active")	;
	$(this).find("dl").show();
	})
$("#menu ul li").mouseout(function() {
	$(this).find("dl").hide();
	$(this).removeClass("active");
	})
/*-----软件下载页--------*/
$(".buy ul li:eq(1)").addClass("line")	;
$(".buy").mouseover(function() {
	$(this).find("ul").show();
	})
$(".buy").mouseout(function() {
	$(this).find("ul").hide();
	})
	});
/*自动填充*/
$(function() {
                 $('#wd').autocomplete(softlist, {
                     max: 100,    //列表里的条目数
                     minChars: 1,    //自动完成激活之前填入的最小字符
                     width: 322,     //提示的宽度，溢出隐藏
                     scrollHeight: 470,   //提示的高度，溢出显示滚动条
                     matchContains: true,    //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
                     autoFill: false,    //自动填充
                     formatItem: function(row, i, max) {
                         return row.name;
                        },
                     formatMatch: function(row, i, max) {
                       return row.name + row.bname+row.sname;
                        },
                     formatResult: function(row) {
                         return row.name;
                        }
                })
            });
