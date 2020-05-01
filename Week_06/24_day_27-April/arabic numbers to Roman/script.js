/*3. Convert arabic numbers to Roman
Write a function to convert from arabic (normal) numbers to Roman Numerals.
 The Romans wrote numbers using letters: I, V, X, L, C, D, M. There is no need to be able to convert numbers larger than about 3000.
Example: 7 returns VII */
//Roman Number List = (M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1)
    
function arabicToRoman(number){
   
    let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let arabicNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  
        let romanNumber = "";
        for(var i=0; i<romanNum.length; i++){
            while(number >=arabicNum[i]){
                number-= arabicNum[i];
                romanNumber+= romanNum[i];
            }
        }
        return romanNumber;
    }

document.write(arabicToRoman(39));
 document.write("<br>"+arabicToRoman(145));
 document.write("<br>"+arabicToRoman(520));



