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
    });
}

function getNum(event) {
    var counter = event.data.index + 1;
    var clickOrder = event.data.order;
    console.log(this.innerText);
    $(".button").off('click');
    var xmlhttp = new XMLHttpRequest();
    
    $('#button').on('mouseleave', function () {
        xmlhttp.abort();
    });
    
    var _this = this;
    $(this).find('.numPosition').show();
    $(this).find('.numPosition').text('...');
	
    //console.log(xmlhttp.readyState);
    xmlhttp.open("GET", "ajax" + _this.innerText, true);
    xmlhttp.send();
    $(".button").not('.worked').not(this).addClass('disable');
    $(".button").not('.worked').not(this).removeClass('handPointer');
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            $(_this).find('.numPosition').text(xmlhttp.responseText);
            $(_this).removeClass('handPointer');
            $(_this).addClass('worked');
            $(".button").not('.worked').removeClass('disable');
            $(".button").not('.worked').addClass('handPointer');
            $(".button").not('.worked').off('click').on('click', { order: clickOrder, index: counter }, getNum);
            $('#button').off('mouseleave');
            if($('.worked').length <= 4)
                robotClick(clickOrder,counter);
            check();
        }
    }
}

//大气泡计算A~E随机数的和
function getAnswer() {
    var answer = 0;
    $(".button").each(function () {
        answer += Number($(this).find('.numPosition').text());
    });
    $('.answerBlock').text(answer);
    $('#info-bar').removeClass('able');
    $('#info-bar').addClass('disable');
    $('#info-bar').removeClass('handPointer');
}

//大气泡
function check() {
    if ($(".worked").length == 5) {
        $('#info-bar').addClass('handPointer');
        $('#info-bar').removeClass('disable');
        $('#info-bar').addClass('able');
        $('#info-bar').off('click');
        $('#info-bar').on('click', getAnswer);
        clickAnswer();
    }
}

/*
@+按钮：
任何时候，鼠标离开@+区域，将重置整个计算器，清除所有A~E按钮的随机数和大气泡内的和
鼠标再次指向@+，可以开始新一轮的计算操作
*/
function reset() {
    counter = 0;
    console.log('reset');
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
        $(".button").off('click').on('click', getNum);
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
    var counter = 0;
    $('.button').off('click').on('click',{order:clickOrder, index:counter},getNum);
    robotClick(clickOrder,0);   
}

//获得随机数
function getRandomNumber(limit) {
    return Math.round(Math.random() * limit);
}

function robotClick(clickOrder,index) {
    $(".button").eq(clickOrder[index]).click();
}

function clickAnswer() {
    $('#info-bar').click();
}