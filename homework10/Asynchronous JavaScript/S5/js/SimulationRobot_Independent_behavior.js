//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.12

//class: handPointer  未被点击过,可以接受点击
//class: worked       点击过
//class：able         
//class：disable      暂时灭活

window.onload = function () {
    $('#button').on('mouseenter', reset);
    $('#button').mouseout(function () {
        console.log("hide");
        $('#clickOrder').hide().text("");
        $('.process').text("").hide();
    });
}

/*
@+按钮：
任何时候，鼠标离开@+区域，将重置整个计算器，清除所有A~E按钮的随机数和大气泡内的和
鼠标再次指向@+，可以开始新一轮的计算操作
*/
function reset() {
    console.log('reset');
    $('process').text("");
    $('.numPosition').hide();
    $(".button").off('click').each(function () {
        $(this).find('.numPosition').text("");
        $(this).removeClass('disable');
        $(this).removeClass('worked');
        $(this).addClass('handPointer');
    });
    $('.answerBlock').text("");
    $('#info-bar').off('click');
    $('#info-bar').addClass('disable');
    $('#info-bar').removeClass('able');
    $('#clickOrder').hide();
    $('.icon').off('click').on('click', function () {
        $('.icon').off('click')
        getRobotClickOrder();
    });
}

//点击@+后，机器人先计算一个点击A~E的随机顺序，例如：（B、C、E、A、D），并将此顺序显示在大气泡上方
//机器人仿真模拟按此顺序点击按钮求和的情况
function getRobotClickOrder() {
    var buf = ['A','B','C','D','E'];
    var clickOrder = [];
    var order = "";
	//产生随机顺序
    while(clickOrder.length < 5) {
        var tmp = getRandomNumber(4);
        if(clickOrder.indexOf(tmp) == -1) {
            clickOrder.push(tmp);
            order += buf[tmp];
            if (clickOrder.length != 5) order += "->";
        }
    }
	//在大气泡上方展示随机顺序
    $('#clickOrder').show().text(order);
    var data = {index: 0, clickOrder: clickOrder, currentSum: 0, msg: ""};
    butOnClick(data);
    $('.process').show();
    robotClick(clickOrder,data.index);
}

//获得随机数
function getRandomNumber(limit) {
    return Math.round(Math.random() * limit);
}

//每个小按钮、大气泡独立的写一个处理函数（handler）
//例如：aHandler、bHandler、cHandler、dHandler、eHandler、bubbleHandler
function butOnClick(data) {
    $('.button').off('click').not('worked').each(function () {
        var handleFun = (this.innerText.toLowerCase() + 'Handler');
        if (handleFun ==='aHandler') $(this).on('click', data, aHandler);
        else if (handleFun === 'bHandler') $(this).on('click', data, bHandler);
        else if (handleFun === 'cHandler') $(this).on('click', data, cHandler);
        else if (handleFun === 'dHandler') $(this).on('click', data, dHandler);
        else if (handleFun === 'eHandler') $(this).on('click', data, eHandler);
    });
}

function robotClick(clickOrder,index) {
    $(".button").eq(clickOrder[index]).click();
}

function getAnswer() {
    $('#info-bar').click();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
isError = 0  处理失败
isError = 1  处理成功 
*/

function msgHandle(msg) {
    $('.process').text(msg);
}

//以下是几个处理函数：aHandler、bHandler、cHandler、dHandler、eHandler、bubbleHandler
function aHandler(event) {
    if(event.data.msg != "") {
        msgHandle(event.data.msg);
        event.data.msg = "";
    }
    var isError = getRandomNumber(1); 
    var err = null;
    if(!isError) {
        event.data.msg = "A: 这是个天大的秘密";
    } else {
        err = new Error("");
        event.data.msg = "A: 这不是个天大的秘密";
    }
    getNum(err, event, this, robotClick);
}

function bHandler(event) {
    if (event.data.msg != "") {
        msgHandle(event.data.msg);
        event.data.msg = "";
    }
    var isError = getRandomNumber(1);
    var err = null;
    if (!isError) {
        event.data.msg = "B: 我不知道";
    } else {
        err = new Error("");
        event.data.msg = "B: 我知道";
    }
    getNum(err, event, this, robotClick);
}

function cHandler(event) {
    if (event.data.msg != "") {
        msgHandle(event.data.msg);
        event.data.msg = "";
    }
    var isError = getRandomNumber(1);
    var err = null;
    if (!isError) {
        event.data.msg = "C: 你不知道";
    } else {
        err = new Error();
        event.data.msg = "C: 你知道";
    }
    getNum(err, event, this, robotClick);
}

function dHandler(event) {
    if (event.data.msg != "") {
        msgHandle(event.data.msg);
        event.data.msg = "";
    }
    var isError = getRandomNumber(1);
    var err = null;
    if (!isError) {
        event.data.msg = "D: 他不知道";
    } else {
        err = new Error();
        event.data.msg = "D: 他知道";
    }
    getNum(err, event, this, robotClick);
}

function eHandler(event) {
    if (event.data.msg != "") {
        msgHandle(event.data.msg);
        event.data.msg = "";
    }
    var isError = getRandomNumber(1);
    var err = null;
    if (!isError) {
        event.data.msg = "E: 才怪";
    } else {
        err = new Error();
        event.data.msg = "E: 就是这样";
    }
    getNum(err, event, this, robotClick);
}

function bubbleHandler(msg) {
//    $('.process').hide();
    $(".answerBlock").addClass('process').text(msg);
    $(".answerBlock").removeClass('process').text(msg);
    $('#info-bar').removeClass('able').addClass('disable');
    $('#info-bar').removeClass('handPointer');
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//A~E的按钮获得随机数
function getNum(error,event, _this, callback=function(){}) {
    console.log(_this.innerText);
    var sum = event.data.currentSum;
    var index = event.data.index + 1;
    var clickOrder = event.data.clickOrder;
    var msg = event.data.msg;
    $(".button").off('click');
	
    //ajax
    var xmlhttp = new XMLHttpRequest();
    $('#button').on('mouseleave', function () {
        xmlhttp.abort();
    });
    $(_this).find('.numPosition').show();
    $(_this).find('.numPosition').text('...');
	
    //console.log(xmlhttp.readyState);
    xmlhttp.open("GET", "ajax"+_this.innerText, true);
    xmlhttp.send();
    $(".button").not('.worked').not(_this).addClass('disable');
    $(".button").not('.worked').not(_this).removeClass('handPointer');
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            if (!error)  {
                msgHandle(msg);
                msg = "";
                console.log("no error");
            } else {
                console.log("error");
            }
            $(_this).find('.numPosition').text(xmlhttp.responseText);
            sum += Number(xmlhttp.responseText);
            $(_this).removeClass('handPointer');
            $(_this).addClass('worked');
            $(".button").not('.worked').removeClass('disable');
            $(".button").not('.worked').addClass('handPointer');
            var data = { index: index, clickOrder: clickOrder, currentSum: sum, msg: msg};
            butOnClick(data);
            $('#button').off('mouseleave');
            callback(clickOrder,index);
            check(sum,msg);
        }
    }
}

//大气泡
function check(currentSum,msg) {
    if ($(".worked").length == 5) {
        if(msg !== "")  msgHandle(msg);
        $('#info-bar').addClass('handPointer');
        $('#info-bar').removeClass('disable');
        $('#info-bar').addClass('able');
        $('#info-bar').off('click');
        $('#info-bar').on('click', function () { 
            bubbleHandler('楼主异步调用战斗力感人，目测不超过' + currentSum);
        });
        getAnswer();
    }
}