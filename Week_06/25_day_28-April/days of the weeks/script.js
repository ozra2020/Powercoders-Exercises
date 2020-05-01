

let input = [1,4,6,3,2];

function weekNumberstoWords(inputArray){
  let outputArray = [];
  for(let i=0; i<inputArray.length;i++){
      switch (inputArray[i]) {
          case 1:
           outputArray.push("Monday");
            break;
          case 2:
            outputArray.push("Tuesday");
            break;
          case 3:
            outputArray.push("Wednesday");
            break;
          case 4:
            outputArray.push("Thursday");
            break;
          case 5:
            outputArray.push("Friday");
            break;
          case  6:
            outputArray.push("Saturday");
            break;
            case 7:
              outputArray.push("Sunday");
        }
    }
   // use loops if you have array as inputs!
   // for each array item, get weekday through switch
  return outputArray;
  }
console.log(weekNumberstoWords(input));
document.write(weekNumberstoWords(input));
