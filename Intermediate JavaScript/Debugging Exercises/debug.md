# Debugging Exercises

1. What does the throw keyword do?
2. What does the finally keyword do?
3. What is the difference between a TypeError and ReferenceError?
4. How do you create a snippet in the Chrome dev tools?
5. In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.


Explain what type of error will be thrown, why the error is occuring, and how to fix it:

1.

person;
2.

let data = {};
data.displayInfo();
3.

let data = {};
data.displayInfo.foo = "bar";
4.

function data(){
    let thing = "foo";
}
data();
thing;
