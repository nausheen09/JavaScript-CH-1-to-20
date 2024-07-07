// ------------CHAPTER 12 to 13--------------
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



// ------------CHAPTER 14 to 16--------------
// 1. Declare an empty array using JS literal notation to store student names in future.
// ------ANSWER------
// var studentName = [];


// 2. Declare an empty array using JS object notation to storestudent names in future.
// ------ANSWER------
// var studentName = new Array ();


// 3. Declare and initialize a strings array.
// ------ANSWER------
// var fruitNames = ["Watermelon, Strawberry, Pineapple, Papaya, Orange, Mango"];
// document.write( "Strings Array <br>" + fruitNames );


// 4. Declare and initialize a numbers array.
// ------ANSWER------
// var numbers = [203, 212, 288, 233, 264];
// document.write("Number Array: " + numbers);


// 5. Declare and initialize a boolean array.
// ------ANSWER------
// var booleanArray = [true, false, true, false];
// document.write( "Boolean Array " +booleanArray);


// 6. Declare and initialize a mixed array.
// ------ANSWER------
// var mixedArray = [42, "hello", true, [1, 2, 3]];
// document.write("Mixed Array " + mixedArray);



// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// ------ANSWER------
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PHD"];
// document.write("Qualifications:");
// document.write("<ol>");
// document.write("<li>" + qualifications[0]+ "</li>");
// document.write("<li>" + qualifications[1]+ "</li>");
// document.write("<li>" + qualifications[2]+ "</li>")
// document.write("<li>" + qualifications[3]+ "</li>");
// document.write("<li>" + qualifications[4]+ "</li>");
// document.write("<li>" + qualifications[5]+ "</li>");
// document.write("<li>" + qualifications[6]+ "</li>");
// document.write("<li>" + qualifications[7]+ "</li>");
// document.write("</ol>");




// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// ------ANSWER------
// var students =[" Nausheen", "Aifa", "Sana"];
// var score = [ 350, 400, 460];
// var total= 500;
// percentage1 = (score[0]/total)*100;
// percentage2 = (score[1]/total)*100;
// percentage3 = (score[2]/total)*100;
// document.write("Score of  "+students[0]+" is  "+score[0]+" . Percentage: "+percentage1+" % "+"<br>Score of  "+students[1]+" is  "+score[1]+" . Percentage: "+percentage2+" % "+"<br>Score of  "+students[2]+" is  "+score[2]+" . Percentage: "+percentage3+" % "+"<br>");



// 9. Initialize an array with color names. Display the array elements in your browser.
// ------ANSWER------
// var colors= [];


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// ------ANSWER------
// var userColor = prompt("What color do you want to add to the beginning of the array?");
// colors.unshift(userColor);
// document.write("Updated array: "+colors+"<br>");


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// ------ANSWER------
// var colorEnd = prompt("What color do you want to add to the end of the array?");
// colors.push(colorEnd);
// document.write("Updated array: " + colorEnd + "<br>");


// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// ------ANSWER------
// var colorBegin1 = prompt("Enter the first color to add to the beginning of the array:");
// var colorBegin2 = prompt("Enter the second color to add to the beginning of the array:");
// colors.unshift(colorBegin1, colorBegin2);
// document.write("Updated array: " + colors + "<br>");


// d. Delete the first color in the array. Display the updated array in your browser.
// ------ANSWER------
// colors.shift();
// document.write("Updated array: " + colors + "<br>");


// e. Delete the last color in the array. Display the updated array in your browser.
// ------ANSWER------
// colors.pop();
// document.write("Updated array: " + colors + "<br>");


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// ------ANSWER------
// var addIndex = parseInt(prompt("At which index do you want to add a color?"));
// var addColor = prompt("What color do you want to add?");
// colors.splice(addIndex, 0, addColor);
// document.write("Updated array: " + colors + "<br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
// ------ANSWER------
// var deleteIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
// var deleteCount = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(deleteIndex, deleteCount);
// document.write("Updated array: " + colors + "<br>");




// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// ------ANSWER------
// var studentScores = [320 ,230, 480, 120];
// document.write("Scores Of Students: " +studentScores.sort());



// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
// ------ANSWER------
// var citynames= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var cities = citynames.slice(2,4);
// document.write("City Names: "+cities);



// 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method.
// ------ANSWER------
// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");
// document.write(singleString);



// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out).
// ------ANSWER------
// Initialize an empty array
// var device = [];

// // Enqueue (add) values to the array
// device.push("Keyboard ");
// device.push("Moues ");
// device.push("Printer ");
// device.push("Monitor");


// // Dequeue (access and remove) values in FIFO order
// for ( var i= 0; i<device.length;) {
//     var value = device.shift();
//     console.log(value);
// }


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (last In - First Out):
// ------ANSWER-----
//  var devices = []
// devices.push("Keyboard ");
// devices.push(" Moues ");
// devices.push(" Printer ");
// devices.push(" Monitor ");

// Access and remove values in reverse order (LIFO)
// for (var i=0; i<devices.length;) {
//     var value = devices.pop();
//     console.log(value);
// }


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method.
// ------ANSWER------
// var phoneManu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony and Haier"];
// document.write("<select>");
// document.write("<option>" + phoneManu[0]+ "<option>")
// document.write("<option>" + phoneManu[1]+ "<option>")
// document.write("<option>" + phoneManu[2]+ "<option>")
// document.write("<option>" + phoneManu[3]+ "<option>")
// document.write("<option>" + phoneManu[4]+ "<option>")
// document.write("</select>");


// -------------------CHAPTER 17 to 20--------------

// 1. Declare and initialize an empty multidimensional array.(Array of arrays):
// ------ANSWER------
// var array = [];


// 2. Declare and initialize a multidimensional array representing the following matrix:
// ------ANSWER------
// var matrix=[ [0,1,2,3], [1,0,1,2], [2,1,0,1]];
// for(var i=0; i<matrix.length; i++){
//     document.write(matrix[i].join(" "))
//     document.write("<br>")
// };


// 3. Write a program to print numeric counting from 1 to 10.
// ------ANSWER------
//  for(i=1; i<=10; i++){
//     document.write(i + "<br>")
//  };


// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// ------ANSWER------
// var tableNum = prompt("Enter a table to show its multiplication table");
// var tableLength = prompt("Enter the length multiplication table");
// document.write("Multiplication Table 0f " + tableNum +"<br> Lenght" + tableLength + "<br> ");
// for( var i=1; i<=tableLength; i++){
//     document.write(tableNum+ " X " + i+ " =" + tableNum*i+ "<br>" )
// };


// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]:
// ------ANSWER------
// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+ "<br>")
// }
// document.write("<br>")
// for(var j=0; j<fruits.length; j++){
//     document.write("Element at index "+ j +" is "+fruits[j] +"<br>")
// };


// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// ------ANSWER------
// document.write("<h2>" + "Counting"+ "</h2>")
// for(var i=1; i<=15; i++){
//     document.write(i + "<br>")
// };


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// ------ANSWER------
// document.write("<h2>" + "Reverse Counting"+ "</h2>")
// for(var i=10; i>=1; i--){
//     document.write(i + "<br>")
// };


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// ------ANSWER------
// document.write("<h2>" + " Even"+ "</h2>")
// for(var i=0; i<=20; i++){
//     document.write(i++ + "<br>")
// };


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// ------ANSWER------
// document.write("<h2>" + "Odd"+ "</h2>")
// for(var i=1; i<=19; i= i+2){
//     document.write(i + "<br>")
// };


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// ------ANSWER------
// document.write("<h2>" + "Series"+ "</h2>")
// for(var i=2; i<=20; i= i+2){
//     document.write(i + "k"+ "<br>")
// };



// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
// ------ANSWER------
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput= prompt("Enter an item to search:");
// var lowerCaseInput = userInput.toLowerCase();
// var found = false;
// for(var i=0; i < A.length; i++){
//     if(A[i].toLowerCase()=== lowerCaseInput){
//         found = true ;
//         break;
//     }
// };
// if (found) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// };




// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
// ------ANSWER------
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is:", largest);



// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12].
// ------ANSWER------
// A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]<smallest){
//         smallest=A[i]
//     }
// }
// document.write("Array items : "+A+"<br>");
// document.write("The smallest number is "+smallest)



// 10. Write a program to print multiples of 5 ranging 1 to 100.
// ------ANSWER------
// for(var i=5; i<= 100; i= i+5){
//     document.write(i+ "<br>")
// };




