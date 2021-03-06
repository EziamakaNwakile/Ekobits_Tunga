/*countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.
countDown(4);
// 3
// 2
// 1
// "DONE!"*/
function countDown(num){
  let decrementTimer = setInterval(function(){
  num--;
      if(!(num === 0)){
       console.log(num);
      }else{
          console.log("DONE!");
          clearInterval(decrementTimer);
      }
  },1000);

}

/*randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.*/
function randomGame(){
  let counter = 0;
  let timerKeeper = setInterval(function(){ 
  let randomNumber = Math.random();
      counter++;
      if(randomNumber > .75){
          console.log("It took " + counter + " tries before we found a number greater than .75");
          clearInterval(timerKeeper);
      }
  },1000);
}

/*isEven
Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
isEven(2); // true
isEven(3); // false*/
const isEven = (num) => (num % 2) === 0;

/*isOdd
Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
isOdd(3); // true
isOdd(14); // false*/
let isOdd = (num) => (num % 2) != 0 ? "True" : "False";

/*isPrime
Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
isPrime(8); // false
isPrime(17); // true*/
function isPrime(n) {
  for (var i = 2; i < n; i++) { 
    if(n % i === 0) return false;   }
  return true;
}

/*numberFact
Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true*/
function numberFact(num, multipleCalledBacks){
  return multipleCalledBacks();
}

/*find
Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined*/
function find(arr, firstValueToBeFound){
  for(let i = 0; i < arr.length; i++){
       if(firstValueToBeFound(arr[i]) === true){ 
       return arr[i]; 
       }
  }
}

/*findIndex
Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});
findIndex([8,11,4,27], function(val){return val === 7}); // undefined*/
function findIndex(arr, firstValueToBeFound){
  for(let i = 0; i < arr.length; i++){
       if(firstValueToBeFound(arr[i]) === true){ 
        return arr.indexOf(arr[i]); //OR return i;
       }
  }
}

/*specialMultiply
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function */
function specialMultiply(a){
  return  function product(b){
    let productOfTwo = a * b;
     return productOfTwo;
    }  
}