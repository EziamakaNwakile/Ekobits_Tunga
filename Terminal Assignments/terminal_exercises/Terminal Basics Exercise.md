# Terminal Basics Exercise
#### Part I

1. make a directory called first
  - mkdir  first
2. change directory to the first folder
  - cd first
3. create a file called person.txt
  - touch person.txt
4. change the name of person.txt to another.txt
  - mv person.txt another.txt
5. make a copy of the another.txt file and call it copy.txt
  - cp another.txt copy.txt
6. remove the copy.txt file
  - rm copy.txt
7. make a copy of the first folder and call it second
  - cp -r first second
8. delete the second folder
  - rm -r second

#### Part II

1. What does the man command do? Type in man rm. How do you scroll and get out?
 - man command is used show the manual of any command written after it
  - man rm
  - scroll by pressing the down arrow key
  - exit by pressing q
2. Look at the man page for ls. What does the -l flag do? What does the -a flag do?
  -l: it lists all files and every information associated with the files
  -a: it lists/shows all files including hidden files
3. Type the following command to download and save the contents of google.com: curl https://www.google.com > google.html
  - curl https://www.google.com > google.html
4. Use less to look at the contents of google.html.
  - less google.html
5. Look at the man page for less. Read the section on /pattern. Search for the text hplogo in the google.html file.
  - man less
  - less -p hplogo google.html
6. How do you jump between words in the terminal?
 - To jump between words in the terminal, you press the "ctrl + Left/right arrow key"
7. How do you get to the end of a line in terminal?
 - To get to the end of the terminal, you press "ctrl + E"
8. How do you move your cursor to the beginning in terminal?
 - To move the cursor to the beginning of the terminal, you press "ctrl + A"
9. How do you delete a word (without pressing backspace multiple times) in terminal?
 - In other to delete a word without pressing the backspace multiple times, you press "ctrl + delete button"
10. What is the difference between a terminal and shell?
-  Terminal is a program that runs the shell while the shell is a program that runs commands and returns an output
11. What is an absolute path?
-  An absolute path is a path that starts from the root directory and usually starts with a '/'
12. What is an relative path?
  -  A relative path is a q
13. What is a flag? Give three examples of flags you have used.
-  A flag is a special way of configuring a command. 
  Examples of flags are: -r, -a, -l
14. What do the r and f flags do with the rm command?
 - r flag: is used to carry out the command before it in a recursive manner
  f flag: is used to force the coomand preceeding it