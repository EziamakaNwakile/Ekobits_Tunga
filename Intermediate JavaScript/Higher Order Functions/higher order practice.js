/*Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example: */

function map(arr, callMe){
  let res = [];
  for(let element of arr){
      res.push(callMe(element));
  }
console.log(res);
}

map([1,2,3,4], function(val){
  return val * 2;
});



/*Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. */

function reject(arr, fn){
  let arrayOfUnTrueValues = [];
for(let element of arr){
  if(!(fn(element) === true)) arrayOfUnTrueValues.push(element);
  }
  return arrayOfUnTrueValues;
}

reject([1,2,3,4], function(val){
  return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
  return val % 2 === 0;
}); // [3,5]