// ------------CHAPTER 21 to 22--------------
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
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do you want ")









// 17. Write a program to display the last character of a user input.
// // ------ANSWER------
// var userInput = prompt ("Enter your country");
// var lastWord = userInput[userInput.length-1];
// document.write("User Input: "+ userInput +"<br>"+ "Last Character of input: " +lastWord);






// ----------- Chapter 21-25 String Methods ----------

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("What do you want to order: ");
// userInput = userInput.toLowerCase();
// var check = false;
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false) {
//     document.write("We are sorry. " + userInput + " is not available in our bakery");
// }

// Task 15
// Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long.

// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

//Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

    //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

    //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

//Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

//Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

//Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }


// Task 16
// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;

// var str='University of Karachi';
// var arr =str.split("");
// for(var i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

// Task 17
// Write a program to display the last character of a user input. 

// var userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

// Task 18
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// var count=str.match(/the/g);
// var length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"'

