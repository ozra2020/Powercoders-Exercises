function myMultiply(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
num1 = parseInt(num1);
num2 = parseInt(num2);

var myMultiply = num1 * num2;
var lbl = document.getElementById("lblResult");
lbl.innerHTML = myMultiply ;

}

function myDivide(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    var myDivide = num1 / num2;
    var lbl = document.getElementById("lblResult");
    lbl.innerHTML = myDivide ;
}