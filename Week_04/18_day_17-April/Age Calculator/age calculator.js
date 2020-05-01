
var birthYear = Number(prompt("Tell me your birthyear ?"));
var birthMonth = Number(prompt("Tell me your birthmonth ?"));
var birthDay = Number(prompt("Tell me your Birthday ?"));
var futureYear = Number(prompt("Chosse a year in the future ! "));
var futureMonth = Number(prompt("Choose a month in the future year !"));
var futureDay = Number (prompt("Choose a day of a month !"));
var yd = (futureYear - birthYear);
var md = (futureMonth - birthMonth);
var month = (12 + md);
var dd = (futureDay - birthDay);
var day = (30 + dd);
if (dd >= 0 && md >= 0) {
    document.write("You will be " + yd + " years and " + md + " months and " + dd + " days old.");
}
else if (dd < 0 && md > 0) {
    document.write("You will be " + yd + " years and " + --md + " months and " + day + " days old.");
}
else if (dd < 0 && md == 0) {
    document.write("You will be " + --yd + " years and " + --month + " months and " + day + " days old.");
}
else if (dd >= 0 && md < 0) {
    document.write("You will be " + --yd + " years and " + month + " months and " + dd + " days old.");
}
else if (dd < 0 && md < 0) {
    document.write("You will be " + --yd + " years and " + --month + " months and " + day + " days old.");
}
else {
    document.write("your info is not valid, please type valid info");
}


//document.write("You will be " + --yd + " years and " + --month + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);


//var birthYear = 1989;
//var futureYear = 2020;
//var age = futureYear - birthYear ;


//console.log(" I will be either " + age +" or " + ( age - 1 ));
//document.write(" I will be either " + age +" or " + ( age - 1 ));

//var birthYear = prompt (" please enter your Birthday");
//var futureYear = prompt ( " please enter a future number");
//var age = Number(futureYear) - Number (birthYear);

//alert (" I will be either " + age +" or " + ( age - 1 ));

//var currentYear = prompt (" please enter current year?");
//var currentAge = prompt (" please enter your current age?" );
//var year = Number(currentYear) - Number (currentAge);
//alert (" The year of your birthday will be  " + year + "");

//var birthMonth = prompt (" please enter your Birthday");
//var futureMonth = prompt ( " please enter a future number"); 



