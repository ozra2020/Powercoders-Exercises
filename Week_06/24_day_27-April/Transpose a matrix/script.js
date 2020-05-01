/*Transpose a matrix
Write a function that transposes a given matrix: rows become columns and columns become rows.
//"ai,j", where "i" is the row of Matrix and "j" is the column of Matrix.*/
//Input 

let matrix = [
    ["a","b","c"],
    ["d","e","f"]];

var output = [];
function TransposeMatrix(array){

    for(let i=0; i<array.length; i++){
       for(var j =0; j<array[i].length; ++j){
          if(array[i][j] === undefined) continue;
          if(output[j] === undefined) output[j] = [];
          output[j][i] = array[i][j];
       }
    }
    return output;
}
console.log(TransposeMatrix(matrix));
document.write(TransposeMatrix(matrix)); 






















