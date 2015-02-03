//幻灯片

function slideMouse(imgname, imgpath) {
    var banner_title = document.getElementById("banner_title");
    var imgurl = document.getElementById("imgurl");
    for (var im = 0; im < imgname.length; im++) {
        imgname[im] = imgpath + imgname[im];
    }
    var links = banner_title.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].name = i;
        links[i].onmouseover = function () {
            clearClassName();
            this.className = "slidenow";
            imgurl.href = this.href;
            imgurl.firstChild.src = imgname[this.name];
        }
    }
}

function clearClassName() {
    var banner_title = document.getElementById("banner_title");
    var links = banner_title.getElementsByTagName("a");
    for (var j = 0; j < links.length; j++) {
        links[j].className = "";
    }
}

var nowspace = 0;

function slideLoop() {
    var banner_title = document.getElementById("banner_title");
    var imgurl = document.getElementById("imgurl");
    var links = banner_title.getElementsByTagName("a");
    if (nowspace == links.length - 1) {
        nowspace = 0;
    } else {
        nowspace += 1;
    }
    clearClassName();
    imgurl.href = links[nowspace].href;
    links[nowspace].className = "slidenow";
    imgurl.firstChild.src = arguments[0][nowspace];
}


    function ScrollImgTop() {
        var speed = 30
        var scroll_begin = document.getElementById("scroll_begin");
        var scroll_end = document.getElementById("scroll_end");
        var right_box3 = document.getElementById("right_box3");
        scroll_end.innerHTML = scroll_begin.innerHTML
        function Marquee() {
            if (scroll_end.offsetTop - right_box3.scrollTop <= 0)
                right_box3.scrollTop -= scroll_begin.offsetHeight
            else
                right_box3.scrollTop++
        }
        var MyMar = setInterval(Marquee, speed)
        right_box3.onmouseover = function () { clearInterval(MyMar) }
        right_box3.onmouseout = function () { MyMar = setInterval(Marquee, speed) }
    }

