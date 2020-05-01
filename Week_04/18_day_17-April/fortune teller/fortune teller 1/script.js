
//Do the Fortune Teller again but this time with a object.
//Write a function named tellFortune that:

//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.


function tellFortune( job, city , partner , children ){
 
    document.write( " You will be a " + job + " in " + city + ", and married to " + partner +" with " + children + " kids. ");  
}

tellFortune("Web Development "," Zurich "," Ali ", 5 );
