    var billAmount ; 
    var tipRate ;
    var tip ;
    var totalAmount ;
    var excludeVAT ;
    var billAmountExVAT ;
   
    billAmount = prompt("Please enter your bill amount as number, e.g. 230.50");
    tipRate = prompt("Please enter the tip rate as number, e.g. 15%");
    excludeVAT = prompt("please enter the VAT as Number, if  you want to exlude it, e.g. 18 for 18%");


    if (billAmount==""){
        billAmount = prompt("Please enter your bill amount as number, e.g. 230.50");
    }

    if (tipRate==""){
    tipRate = prompt("Please enter the tip rate as number, e.g. 15 for 15%"); 
   }

    if (excludeVAT==""){
        excludeVAT = 0;
    }
 
    billAmount = parseFloat(Math.ceil(billAmount*20)/20);
    tipRate = parseFloat(tipRate);
    excludeVAT = parseFloat(excludeVAT);

    if(isNaN(billAmount)){
        billAmount = prompt("Please enter your bill amount as number, e.g. 230.50");
        billAmount = parseFloat(Math.ceil(billAmount*20)/20);
    }

    if(isNaN(tipRate)){
       tipRate = prompt ("Please enter the tip rate as number, e.g. 15 for 15%");
       tipRate = parseFloat(tipRate);
    }

    if(isNaN(excludeVAT)){
        excludeVAT = prompt("please enter the VAT as Number, if  you want to exlude it, e.g. 18 for 18%");
        excludeVAT = parseFloat(excludeVAT);
    }

    //debug
    console.log(billAmount);
    console.log(tipRate);
    console.log(excludeVAT);

if (excludeVAT > 0){
    billAmountEXVAT = billAmount - ( BillAmount * excludeVAT / 100);
    tip = billAmountEXVAT * tipRate / 100 ;
} else {
    tip = billAmount * tipRate / 100 ;
}

tip = (Math.ceil(tip*20)/20);
totalAmount = (Math.ceil((billAmount + tip)*20)/20);

//debug
console.log(tip);
console.log(totalAmount);

document.write("Your bill amount is CHF" + billAmount.toFixed(2) + "<br>");
document.write("Your tip rate is " + tipRate.toFixed(2) + "%<br>");

if (excludeVAT > 0){
   document.write("You want to exclude the VAT of " + excludeVAT.toFixed(2) + "%<br>");
}

document.write("You pay a total of CHF " + totalAmount.toFixed(2) + "with a tip of CHF" + tip.toFixed(2));





   