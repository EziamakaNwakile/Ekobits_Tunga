#  Part II of Boolean Logic Exercises

let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
1. What should the above code console.log? 
   - It should console.log "Keep it up!"

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own? 
   - It wasn't specified because the value of the isLearning variable is truthy. 
    if(isLearning) worked because True will always test to a truthy value


let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}

1. What should the above code console.log? Why?
   - It should console.log "third".
   Because the thirdVariable is truthy. The ||(OR) statement will always evaluate to truthy once there's a truthy statement even though the other is falsey

2. What is the value of firstVariable when it is initialized? 
   - The value of firstVariable is undefined

3. Is the value of firstVariable a "truthy" value? 
   - No, it is a falsey value

4. Is the value of secondVariable a "truthy" value? 
   - No, it is not because empty strings are falsey values

5. Is the value of thirdVariable a "truthy" value? 
   - Yes it is, because all numbers except 0 are truthy values
