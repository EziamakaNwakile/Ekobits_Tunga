# Terminal and Unix
#### Exercise 1

1. Create a file called name.txt.
   - touch name.txt
   
2. Try renaming the file to rename.txt using the mv command. What does this tell you about the command?
  -  mv name.txt rename.txt

    The action with the *mv* command tells me that the command can be used to rename and move files and folders from one directory to the other
    
3. Using the cp command, make a copy of rename.txt and call it copy.txt.
   -  cp rename.txt copy.txt
    
4. Remove the file copy.txt.    
   -  rm copy.txt
    
5. Create a folder called questions.
   -  mkdir questions
    
6. Change directories to the questions folder.
   -  cd questions/
    
7. Create a file called first.txt.
   -  touch first.txt
    
8. Create a file called second.txt.
   -  touch second.txt
    
9. Go back a directory and make a copy of the questions folder and call it questions_copy.
   -  cp -r questions questions_copy
    
10. When using cp -r what is the -r called? What does it do?
    - The *-r* is called a flag The *-r* flag been used after the cp command will copy files and folders recursively from one directory to another.

11. Delete the original questions folder and the copy.
    - rm -r questions
    - rm -r questions_copy