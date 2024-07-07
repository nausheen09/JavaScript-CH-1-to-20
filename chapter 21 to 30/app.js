// ------------CHAPTER 21 to 25--------------
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name:
// ------ANSWER------
// var firstName = prompt("Write your first name");
// var lastName = prompt("Write your last name");
// var fullName = firstName+ " " + lastName;
// alert("Hi "+ fullName);



// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser:
// ------ANSWER------
// var mobileName = prompt("Write your favourite mobile phone model");
// var mobileLenght = mobileName.length;
// document.write("My Favourite Phone is: " + mobileName +"<br>"+ "Length of String: "+mobileLenght);



// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser :
// ------ANSWER------
// var word = "Pakistani"
// var indexNo = word.indexOf("n");
// document.write("String : "+ word +"<br>"+" Index of 'n': "+indexNo);



// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser: 
// ------ANSWER------
// var word = "Hello World";
// var lastWord = word.lastIndexOf("l");
// document.write("String: "+ word +"<br>"+ "Last index of 'l': " +lastWord);



// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser:
// ------ANSWER------
// var word = "Pakistani";
// var indexNo = word.charAt("3");
// document.write("String : "+ word +"<br>" +"Character at index 3: "+indexNo);


// 6. Repeat Q1 using string concat() method: 
// ------ANSWER------
// var firstName = prompt("Write your first name");
// var lastName = prompt("Write your last name");
// var fullName = firstName.concat( " " + lastName);
// alert("Hi "+ fullName);



// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser:
// ------ANSWER------
// var city = "Hyderabad";
// var cityreplace = city.replace("Hyder", "Islam");
// document.write("City: "+ city +"<br>" + "After Replacement: "+cityreplace);


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
// ------ANSWER------
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var cityreplace = message.replaceAll("and", "&");
// document.write("City: "+ message +"<br>" + "After Replacement: "+cityreplace);



// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// ------ANSWER------
// var string ="472";
// var number= parseInt(string);
// document.write("Vaule: "+ string +"<br>" + "Type: "+typeof(string)+ "<br>" + "Vaule: "+ number +"<br>" + "Type: "+typeof(number));


// 10. Write a program that takes user input. Convert and show the input in capital letters.
// ------ANSWER------
// var userInput =prompt("Enter Any Word");
// var upperCase = userInput.toUpperCase();
// document.write("User Input: "+ userInput +"<br>" + "Upper Case: "+ upperCase);


// 11. Write a program that takes user input. Convert and show the input in title case.
// ------ANSWER------
// var userInput =prompt("Enter Any Word");
// var upperCase = userInput[0].toUpperCase()+ userInput.slice(1).toLowerCase();
// document.write("User Input: "+ userInput +"<br>" + "Tile Case: "+ upperCase);


// 12. Write a program that converts the variable num to string. var num = 35.36 Remove the dot to display “3536” display in your browser.
// ------ANSWER------
// var num = 35.36;
// var stringConvert = num.toString().replace(".", "");
// document.write("Number: "+ num +"<br>" + "Result: "+ stringConvert);



// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// ------ANSWER------
// var userName = prompt("Enter your name:");
// var charCode;
// for(var i =0; i<userName.length; i++){
//     charCode= userName.charCodeAt(i);
//     if(charCode=== 33 || charCode=== 44 || charCode === 46 || charCode=== 64){
//         alert("Please Enter a Valid Username");
//     }
// }



// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
// ------ANSWER------
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What do you want to order").toLowerCase();
// var found= false;
// for(var i= 0; i<A.length; i++){
//     if(A[i]=== userInput){
//         document.write(A[i] + " is available at index " + i + " in our bakery.");
//         found = true;
//     }
// }
// if(found === false){
// document.write("We are sorry. " + userInput + " is not available in our bakery.");
// }



// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// ------ANSWER------
// var password = prompt("Enter your password: ");
// var upperCase = false
// var LowerCase = false
// var number = false
// var passwordLength = false;

// for (i = 0; i < password.length; i++) {
//     var character = password.charCodeAt(i);
//     if (character >= 65 && character <= 90) {
//         upperCase = true;
//     }
//     if (character >= 97 && character <= 122) {
//         LowerCase = true;
//     }
//     if (character >= 48 && character <= 57) {
//         number = true;
//     }
// }

// if (password.length >= 6) {
//     passwordLength = true;
// }
// var startsWithNumber = (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57);

// if(passwordLength){
//     alert("Password must be at least 6 characters long.");
// }
// else if (startsWithNumber) {
//     alert("Password should not start with a number.");
// }
// else if(upperCase && LowerCase && number) {
//     alert("Password must contain both upper case, lower case alphabets, and numbers.")
// }
// else {
//     alert("Password is valid!.")
// };




// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// ------ANSWER------
// var university = "University of Karachi";
// var arr =university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(arr[i]+'<br>')
// }


// 17. Write a program to display the last character of a user input.
// // ------ANSWER------
// var userInput = prompt ("Enter your country");
// var lastWord = userInput[userInput.length-1];
// document.write("User Input: "+ userInput +"<br>"+ "Last Character of input: " +lastWord);


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
//------ANSWER------
// var string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// var  count = string.match(/the/g);
// var length= count.length;
// document.write("Text:"+ string +"<br>"+"There are "+ length + "occurence(s) of word 'the'.");



// ------------CHAPTER 26 to 30--------------

// 1. Write a program that takes a positive integer from user & display the following in your browser.a. number b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//------ANSWER------
// var number = +prompt("Enter positive number: ");
// var round =Math.round(number);
// var floor =Math.floor(number);
// var ceil =Math.ceil(number);
// document.write("Number: "+ number +"<br>"+ "Round off value: "+ round +"<br>" + "Floor value: "+ floor+"<br>"+ "ceil value: "+ ceil +"<br>");



// 2. Write a program that takes a negative floating point number from user & display the following in your browser.a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//------ANSWER------
// var number = +prompt("Enter negative number: ");
// var round =Math.round(number);
// var floor =Math.floor(number);
// var ceil =Math.ceil(number);
// document.write("Number: "+ number +"<br>"+ "Round off value: "+ round +"<br>" + "Floor value: "+ floor+"<br>"+ "ceil value: "+ ceil +"<br>");



// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5:
//------ANSWER------
// var number = prompt("Enter a number: ");
// number = parseInt(number);
// var negativeNumber = Math.abs(number);
// document.write("The Absolute Value of " + number + " is " + negativeNumber);



// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
//------ANSWER------
// var randomNo = Math.random()*6;
// var floor = Math.floor(randomNo);
// document.write("Random Die Value: "+ floor);



// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser:
//------ANSWER------
// var coinValue = Math.floor(Math.random()*3);
// if(coinValue === 2){
//     document.write(coinValue+ " <br> "+ " random coin value : Heads ");
// }
// else{
//     document.write(coinValue + " <br> "+ " random coin value : Tails ");
// }



// 6. Write a program that shows a random number between 1 and 100 in your browser:
//------ANSWER------
// var ceil = Math.ceil(Math.random()*100);
// document.write("Random Number Between 1 and 100: "+ ceil);


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50   b. 50kgs   c. 50.2kgs  d. 50.2kilograms:
//------ANSWER------
// var userInput = prompt("Enter Your Weight in kilogramas");
// var weight = parseFloat(userInput);
// document.write("The Weight of User is "+ weight+ " Kilograms");



// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
//------ANSWER------
// var randomNo = Math.ceil(Math.random()*10);
// var userInput = prompt("Enter a Number in Between 1 and 10");
// userInput = parseInt(userInput, 10);
// if(userInput === randomNo){
//     alert("Congratulations! You Entered the Same Number.");
// }else{
//     alert("Try Again. The Secret Number Was " + randomNo);
// }


