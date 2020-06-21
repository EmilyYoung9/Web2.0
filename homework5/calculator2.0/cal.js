// JavaScript Document
//中山大学 数据科学与计算机学院 18级软件工程3班 杨玲 18342115  2019.10
var input;
var result;
var result1;
 function fomatFloat(src,pos){ 
      return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos); 
     } 
function get(num){
    input=document.getElementById("output");
    input.value=input.value+num;
}

function calculate(){
    result = document.getElementById("output").value;
   document.getElementById("output").value = "";
   try{
        result=eval(result);
        result1=parseFloat(result);
        result1=fomatFloat(result1,10);
        document.getElementById("output").value=result1;
   }
   catch(error){
    alert("The expression is invalid. Please retype it.");
   }
}

function clearall(){
    document.getElementById("output").value="";
}

function clear_one(){
    input=document.getElementById("output");
    input.value=input.value.substr(0,input.value.length-1);
}
