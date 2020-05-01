/* Write a function to compare two strands of DNA and count the differences between them. 
The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should not work.
Example: GAGCCTACTAACGGGAT vs CATCGTAATGACGGCCT */
//input : 2 string 
//output Number ( difference between two string )

//let a = "part";
//let b = "path";
//let a = 1;
//let b = 4;

//Explanation:
//1   (0 0 0 1)
//4   (0 1 0 0)


function HammingDistance (a, b){
    if (a.length == b.length){
        let total = 0;
        //let array1 = a.split("");
        //let array2 = b.split("");
    for( let i=0; i<a.length; i++){
        if(a[i] !=b[i]){
            total++;
        }
      
        }
        return total;
    }else{
        return "please put in equal text's length";

        } 
       
    }
document.write("<br>"+HammingDistance("part", "path"));
document.write("<br>"+HammingDistance("karolin", "kathrin"));
document.write("<br>"+HammingDistance("2173896", "2233796" ));
document.write("<br>"+HammingDistance("1011101", "1001001" ));


