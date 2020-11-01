/*difference
this function takes in two parameters and returns the difference of the two;*/
function difference(x,y){
  return x - y;
}


/*product
this function takes in two parameters and returns the product of the two;*/
function product(x,y){
  return x * y;
}


/*printDay
this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;*/
let daysOfTheWeek = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
};

function printDay(num){
  if(num > 1 || num < 7){
      return daysOfTheWeek[num];
        }
  }


/*lastElement
this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.*/
  function lastElement(arrVariable){
    if(arrVariable !== 0 || arrVariable !== undefined){
        return arrVariable.pop();
    }
}


/*numberCompare
this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"*/
function numberCompare(firstNumber, secondNumber){
  if(firstNumber > secondNumber){
      return "First is greater";
  }else if(secondNumber > firstNumber){
      return "Second is greater";
  }else if(firstNumber === secondNumber){
      return "Numbers are equal";
  }
}


/*singleLetterCount
this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0. */
function singleLetterCount(stringWord, stringLetter){
  let count = 0;
  for(let i=0; i< stringWord.length; i++){
    if(stringWord[i].toLowerCase() === stringLetter.toLowerCase()){
      count++;
    }
  }
  return count;
}