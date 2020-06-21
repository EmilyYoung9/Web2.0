//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.11

function sorttable(tbody, index){
    return function(){
    var ascending = $(this).hasClass("sort-ascend");
    $(this).siblings().removeClass("sort-ascend sort-descend");
    $(this).removeClass("sort-ascend sort-descend").addClass(ascending ? "sort-descend" : "sort-ascend");
    $(tbody).append($(tbody).find("tr").sort(sortit(index+1, ascending)));
    }
}

function sortit(index, Ascending) {
    return function (m, n) {
        var text1 = $(m).find("td:nth-child(" + index + ")").text();
        var text2 = $(n).find("td:nth-child(" + index + ")").text();
        return (text1<text2?1:text1>text2?-1:0)*(Ascending?1:-1);
    }
}

$(function() {
    $("table").each(function(){
        var tbody = $(this).children("tbody");
        $(this).find("th").each(function (index) {
            $(this).click(sorttable(tbody, index));
    	})
	})
});