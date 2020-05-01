

//Write a program, MarcoPolo, which does the following:
//★ Prints the numbers from 1-100 except:
//★ For multiples of five, print “Marco”
//★ For multiples of seven, print “Polo”
//★ For multiples of five and seven, print “MarcoPolo”for(var i=1; i<= 100; i++){
	for(var i=1; i<= 100; i++){
var skip = 0;
		if(i % 5 == 0 && i % 7 !== 0){
		document.write("Marco");
		 skip = 1;
		}
		if(i % 5 !== 0 && i % 7 == 0){
			document.write("Polo");
		  skip = 1;
		}
		if(i % 5 == 0 && i % 7 == 0){
			document.write("MarcoPolo");
			 skip = 1;
		}
		if( !skip){
			document.write("i");
		}
		document.write("<br>");

	}
//the Result will be :
i
i
i
i
Marco
i
Polo
i
i
Marco
i
i
i
Polo
Marco
i
i
i
i
Marco
Polo
i
i
i
Marco
i
i
Polo
i
Marco
i
i
i
i
MarcoPolo
i
i
i
i
Marco
i
Polo
i
i
Marco
i
i
i
Polo
Marco
i
i
i
i
Marco
Polo
i
i
i
Marco
i
i
Polo
i
Marco
i
i
i
i
MarcoPolo
i
i
i
i
Marco
i
Polo
i
i
Marco
i
i
i
Polo
Marco
i
i
i
i
Marco
Polo
i
i
i
Marco
i
i
Polo
i
Marco

			