// ------------CHAPTER 09 to 11--------------
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// ------ANSWER------
// var chara = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter");
// var chara = chara.charCodeAt(0);

// if (chara >= 48 && chara <= 57) {
//     alert("The input is a number.");
// } else if (chara >= 65 && chara <= 90) {
//     alert("The input is an uppercase letter.");
// } else if (chara >= 97 && chara <= 122) {
//     alert("The input is a lowercase letter.");
// } else {
//     alert("The input is neither a number nor a letter.");
// }




// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// ------ANSWER------
// var number1 =+prompt("Enter First Number");
// var number2 =+prompt("Enter Second Number");
// if(number1>number2){
//     alert(number1+"  is largerthan  "+ number2);
// }
// else if(number1<number2){
//     alert(number1+"  is Lessthan  "+ number2);
// }
// else{
//     alert(number1+ "and "+ number2 +"  both are equal")
// }



// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// ------ANSWER------
// var number = +prompt("Please enter number to check whether positive, negative or zero")
// if(number>0){
//     alert(number+" is postive")
// }
// else if(number<0){
//     alert(number+ " is negative")
// }
// else {
//     alert(number+ " is zero")
// }



// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
// ------ANSWER------
// var character = prompt("Enter character to check vowel or not");
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
//             alert(character + "  is Vowel")
//         }
//         else{
//             alert(character + " is Not Vowel")
//         }




// 5. Write a program that; a. Store correct password in a JS variable. b. Asks user to enter his/her password. c. Validate the two passwords. i. Check if user has entered password. If not, then give message “ Please enter your password”. ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show“Incorrect password” otherwise.
// ------ANSWER------
// var password = "nausheen22200";
// var userPassword = prompt("Enter Your Password")
// if(userPassword=== " "){
//     alert("Please Enter Your Password");
// }
// else if(userPassword===password){
//      alert("Correct! The Password You Entered Matches the Original Password.")
// }
// else{
//     alert("Incorrect Password")
// }




// 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening";}.
// ------ANSWER------
// var  greeting;
// var hour= 13;
// if(hour<18){
//     greeting= "Good day"
//     alert(greeting);
// }
// else{
//     greeting="Good evening";
//     alert(greeting);
// }




// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.
// ------ANSWER------
// var time = +prompt("Please enter time in 24 hours \n clock format like (e.g., 1900 for 7 PM):");
// if(time>="0000" && time<1200){
//     alert("Good Morning")
// }
// else if(time>=1200 && time<1700){
//     alert("Good Afternoon")
// }
// else if(time >=1700 && time<2100){
//     alert("Good Evening")
// }
// else if(time >=2100 && time<=2359){
//     alert("Good Night")
// }
// else{
//     alert("Invalid Input")
// }