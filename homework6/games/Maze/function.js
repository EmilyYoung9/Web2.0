// JavaScript Document
/*
18342115
Author: 杨玲
Date: 2019.10.22
*/

function $(e){
    return document.getElementById(e);
}

var run = false;
var isEnd = false;
var wallRed = false;

function game_begin() {
    run = true;
    isEnd = false;

    var a = document.getElementById('status');
    var b = document.getElementById('S_block');
    var c = document.getElementById('wall_1');
    var d = document.getElementById('E_block')

    d.style.background = "#AB66E1";

    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_2");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_3");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_4");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_5");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_6");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_7");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_8");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
    c = document.getElementById("wall_9");
    c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";

    wallRed = false;

    a.firstChild.nodeValue = 'GameStart';
    a.style.fontSize = 30+"px";
    a.style.color = "purple";

    b.style.backgroundColor =  "red";
}



function game_end(){
    var a = document.getElementById('status');
    var b = document.getElementById('E_block');
    var c = document.getElementById('S_block');

    if (run){
        a.firstChild.nodeValue = 'You Win!';
        a.style.color = "#FF0000";
        b.style.backgroundColor =  "#F01CE9";
        c.style.background = "white";
    }
    run = false;
    isEnd = true;
}



function lose(e) {
    var a = document.getElementById('status');
    var b = document.getElementById('S_block');

    if (run){
        a.firstChild.nodeValue = 'You lose';
        a.style.color = "red";
        b.style.backgroundColor =  "white";
        e.style.background = "red";

        run = false;
        wallRed = true;
    }
}



function leave(e){

    run = false;
    if (!isEnd) {
        var a = document.getElementById('status');
		
        if(!wallRed){
            a.style.fontSize = 20 + "px";
            a.firstChild.nodeValue = 'Don\'t cheat, you should start from the \'S\' and move to the \'E\' inside the maze!';
        }
        else{
            a.style.fontSize = 20 + "px";
            a.firstChild.nodeValue = 'Welcome To the amazing mouse maze!';
        }

        var b = document.getElementById('S_block');
        var c = document.getElementById('wall_1');

        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_2");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_3");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_4");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_5");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_6");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_7");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_8");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";
        c = document.getElementById("wall_9");
        c.style.backgroundImage =  "url(http://tva1.sinaimg.cn/large/007X8olVly1g8cijfjcd1j30ci0m80un.jpg)";

        wallRed = false;

        b.style.background = "white";
        a.style.color = "black";

        var end = document.getElementById('E_block');

        end.style.background = "blue";
    }

}

