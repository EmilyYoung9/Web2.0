// JavaScript Document
//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.10
var ans = 0;

$(document).ready(function(){
    var counter="";     //记录输入的数据与结果的字符串
    $("button").on("click",function(){
        var text = $(this).attr('value');
        if(text !== 'CE' && text !== '<-' && text !== '='){
            counter +=text;
            $(".showAns").val(counter);
        }
        else if(text === 'CE'){
            counter="";
            $(".showAns").val(counter);
        }else if(text ==='<-'){
            counter = counter.slice(0,-1);
            $(".showAns").val(counter);
        }else if(text === '='){
            ans = eval(counter);
            $(".showAns").val(ans);
            counter = "";
        }

    });

});
