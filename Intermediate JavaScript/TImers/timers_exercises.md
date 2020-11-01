# JavaScript Timers Exercises

1. What is the difference between setInterval and setTimeout?
  - The difference is, setInterval continuously executes an expression after the given interval of time unless you tell it to stop by clearing the timer using the timerID while setTimeout runs an expression only once. 

2. What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
  - SetInterval is a timed or traditional loop that executes some code after the set waiting time while loop executes expressions without been timed.

3. What is the first parameter that setInterval and setTimeout accept?
  - Callback function is the first parameter they both accept

4. Why is it so important to store the result of setInterval and setTimeout in a variable?
  - It is important to store the result of setInterval and setTimeout in a variable so that the timers can be stopped whenever we want in other to prevent memory leaks.

5. What does asynchronous mean in the context of setTimeout and setInterval?
  - It means that the code is run sequentially