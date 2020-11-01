//Fix the broken code and explain what was wrong:
//1.
for(let i=0; i < 5; i++){
    console.log(i);
}
/*What was wrong - our condition inside the loop was not correct */

//2.
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}
/*What was wrong - we were using assignment with = in our if statement, not comparison with == or ===. */

//3.
function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
/*What was wrong - our syntax was incorrect inside the loop. We separate each section of a for loop with a ; and not a ,*/

//4.
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
        return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8]

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
/*Each part of the for loop should be separated by a ; not a `,'
The for loop should not have a final ;
The if statement should not have a ; after the condition
We should loop until i < numbers.length or i <= numbers.length-1and not numbers.length-1
We can't use assignment (=) inside of the condition, we have to use comparisson (== or ===).
We need to make sure our if condition checks the value we are at in the numbers array (numbers[i]) and not the entire numbers array
We need to push into our evenNumbers array, the value not the index numbers[i] instead of i.
We need to make sure we return after the loop has finished and not after the if statement. */