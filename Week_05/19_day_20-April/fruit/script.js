// using this array,
  // var array = ["Banana", "Apples", "Oranges", "Blueberries"];
  /* Access and output Oranges.
  Remove the Banana from the array.
  Sort the array in order.
  Put "Kiwi" at the end of the array.
  Remove "Apples" from the array.
  Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
  You should at the end have ["Kiwi", "Oranges", "Blueberries"] */

  var array = ["Banana", "Apples", "Oranges", "Blueberries"];
  //Access and output Oranges.
  console.log(array[2]);
  //Remove the Banana from the array.
  array.shift();
  console.log(array);
  //Sort the array in order.
  array.sort();
  console.log(array);
  //Put "Kiwi" at the end of the array.
  array.push("kiwi");
  console.log(array);
  //Remove "Apples" from the array.
  array.shift();
  console.log(array);
//Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);


  