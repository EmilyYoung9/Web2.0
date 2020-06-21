//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.12

//class: handPointer  未被点击过,可以接受点击
//class: worked       点击过
//class：able         
//class：disable      暂时灭活

window.onload = function () {
    $('#button').on('mouseenter', reset);
}

//A~E的按钮获得随机数
function getNum() {
    var _this = this;
    setTimeout(function(){
        ask(_this);
    },0);
}

function ask(_this) {
    $(".button").off('click');
    console.log(_this.innerText);
    var xmlhttp = new XMLHttpRequest();

    $('#button').one('mouseleave',function () {
        xmlhttp.abort();
    });
    $(_this).find('.numPosition').show();
    $(_this).find('.numPosition').text('...');
	
    //console.log(xmlhttp.readyState);
    xmlhttp.open("GET", "ajax"+_this.innerText, true);
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
            $(".button").not('.worked').off('click').on('click', getNum);
            check();
        }
    };
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
    $(".button").off('click').on('click', getNum).each(function () {
        $(this).find('.numPosition').text("");
        $(this).removeClass('disable');
        $(this).removeClass('worked');
        $(this).addClass('handPointer');
    });
    $('.answerBlock').text("");
    $('#info-bar').off('click');
    $('#info-bar').addClass('disable');
    $('#info-bar').removeClass('able');
    $('.icon').off('click').on('click', function () {
        $('.icon').off('click')
        $(".button").off('click').on('click', getNum);
        robotClick();
    });
}

function robotClick() {
    $(".button").click();
}

function clickAnswer() {
    $('#info-bar').click();
}