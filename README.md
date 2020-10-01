# meastics


Ask the user a series of questions
a) length of password (numeric input)
b) validate length is between 8 and 128.
c) type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
d) Validate the user selected at least one character type.

Any invalid response will terminate password generation and the user must start over.



Once the user has entered valid responses, generate a password that meets their criteria and display it in the box.

					PseudoCode


Ask user a series of questions to determine the type of password. 
1. How long will the password be (prompt)
2. Uppercase letters (confirm)
3. Lowercase letters (confirm)
4. Special Characters (confirm)
5. Numbers (confirm)

Check that the user correctly answered the above questions, if not, re ask the questions. 

Create a loop function 


Create all variables that I will be using for the program
Variables will be series of confirm questions and a prompt to be stored later

Create multiple arrays to store all possible outcomes.  Separate at first so that later if a choice is selected, it can be sent to the final password array.

Create a final password array empty, so that the previous arrays can push depending on user input. 

Create multiple functions to push character to final password array depending on input. If the user does not want a category in their password, the program should skip it and remove all possibilities from final password. 


Create series of if and for statements to achieve program using stored variable data from user to push character to final password, or remove the category entirely from possible outcome. 

Because only 1 character can be pushed to final password array per choice section, program needs to fill in the spots remaining randomly based on categories selected by user. For loop built to fill in resining spaces but must consider the length of password originally chosen by user at start of program. 

Console.log totalOptions and final password to confirm it is working properly.  Once confirmed it is working effectively, must going all individual character strings into one string.  

Function created to push final password into the o'clock event listener.  