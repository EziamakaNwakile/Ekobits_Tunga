# Intermediate Terminal Exercises. 

### Part I

1. Create an environment variable called FIRST_NAME and set it equal to your first name (this does not need to be permanent)
  <br/>export FIRST_NAME=EZIAMAKA

2. Print the FIRST_NAME variable
  <br/> echo $FIRST_NAME

3. Print out the $PATH variable
  <br/> echo $PATH

4. What is the $PATH variable?
  <br/>A $PATH is an environment variable that is used to find programs to execute

5. Why would you want to create an environment variable?
  <br/>  I would want to create an environment variable so that I can use a variable multiple times and secure information

6. How do you permanently save environment variables?
<br/>Environment variables can be permanently saved in the .zshrc or .bash_profile

7. What is a process?
  <br/>A process is a program that is been executed in the computer

8. How do you list all processes running on your machine?
  <br/>ps aux

9. What is a PID?
<br/> PID is a number that uniquely identifies each process. PID is very vital when bringing a process to an abrupt end.

10. How do you terminate a process?
  <br/> A process can be terminated using kill or kill -9 followed by the PID number

11. What is the difference between kill and kill -9?
  <br/> Kill is a command that sends a signal to a particular process instructing it to terminate while Kill -9 is a command that sends out a specific signal to a process and ensuring the command isn't ignored.

12. What grep flag allows for case insensitive search?
  <br/> -i

13. What grep flag allows for a certain number of lines before the match?
    <br/> -B

14. What grep flag allows for a certain number of lines around the match?
    <br/> -C

15. What grep flag allows for a certain number of lines after the match?
    <br/> -A

16. What grep flag allows for full word search?
    <br/> -w

17. What grep flag shows you the line number of a match?
    <br/> -n



### Part II

1. Find all files inside the Desktop folder that have a name of "learn."
    <br/> find ~/Desktop -name "learn"

2. Find all files inside the Desktop folder that start with a "P."
    <br/>  find ~/Desktop -name "P.*"

3. Find all files inside the Desktop folder that end with .txt.
    <br/>  find ~/Desktop -name "*.txt"

4. Find all files inside the Desktop/views folder that have the name data somewhere in their filename.
    <br/>  find ~/Desktop/views -name "*data*"

5. Inside of the instructors.txt file, output the number of times the word "Elie" appears.
    <br/> grep -c "Elie" instructors.txt

6. Inside of the instructors.txt file, list all matches for any full word that starts with a capital "P."
    <br/> grep -w "P.*" instructors.txt

7. Inside of the instructors.txt file, list all the line numbers for any full word that starts with a "z" (it should match regardless of upper or lower case).
    <br/> grep -ni "z.*" instructors.txt