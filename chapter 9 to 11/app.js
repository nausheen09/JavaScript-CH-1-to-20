                  // ------------CHAPTER 09 to 11--------------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”:
// ------ANSWER------
// var x = prompt ("Where do you live?");
// if (x === "Karachi") {
//     alert("Welcome to city of lights")
// }


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am:
// ------ANSWER------
// var x = prompt ("Enter Your Gender?");
// if (x === "Female") {
//     alert("Good Morning Ma'am")
// }
// else{
//     alert("Good Morning Sir")
// }


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// ------ANSWER------
// var trafficSignal = prompt(" Put Color of Road Traffic Signal");
// if(trafficSignal === "Red"){
//     alert("Must Stop")
// }else if(trafficSignal === "Yellow")  { 
//     alert("Ready to move")
// }else if(trafficSignal === "Green")  { 
//     alert("Move now")
// }else{ 
//     alert("Enter Correct Answer")
// }


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”:
// ------ANSWER------
// var fuel = prompt ("Please refill the fuel in your car?");
// if (fuel < 0.25)  {
//     alert ("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel");
// }



// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// ------ANSWER------
// Part A:
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } 
// REASON:
//The condition ++a === 5 is evaluated. Since ++a has become 5 due to the increment operation,and 5 === 5 is true, the condition evaluates to true.The alert("given condition for variable a is true"); statement will be display.

// Part B:
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// REASON:
// b++ is a post-increment operation, so the current value of b (which is 82) is used in the expression, and then b is incremented by 1. So, the expression b++ === 83 is comparing 82 (the original value of b) with 83, which results in false.The alert("given condition for variable b is true"); statement will not be display.

// Part C:
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// REASON:
// In the first if statement, c++ is a post-increment operation, so the value of c is first used in the comparison (which is 12), and then it is incremented by 1. Since 12 is not equal to 13, the condition is false.

// if (c === 13){
// alert("condition 2 is true");
// }
// REASON:
// After the previous operation, c is now 13. In the second if statement, c is directly compared to 13. This condition is true.

// if (++c < 14){
// alert("condition 3 is true");
// }
// REASON:
// if statement, c is still 13. The value of c is first incremented by 1 (pre-increment), making it 14. Then, the comparison 14 < 14 is made. Since this condition is false.

// if(c === 14){
// alert("condition 4 is true");
// }
// REASON:
// After the previous operations, c is now 14. In this if statement, c is directly compared to 14, which is true.
// "condition 2 is true" will be displayed.
// "condition 4 is true" will be displayed.


// Part D:
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"+ totalCost);
// }
// REASON:
// the condition totalCost === laborCost + materialCost will always be true, as it's comparing the same values,the alert message "The cost equals" will always be displayed.


// Part E:
// if (true){
// alert("True");
// }
// REASON:
// The condition inside the first if statement is true, so the alert message "True" will be displayed.
// if (false){
// alert("False");
// }
// REASON:
// The condition inside the second if statement is false, so the alert message "False" will not be displayed.


// Part F:
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// REASON: 
// In this case, the comparison "car" < "cat" is true because the character 'r' comes before 't' in the Unicode sequence. Therefore, the alert message "car is smaller than cat" will be displayed.



// 6. Write a program to take input the marks obtained in three subjects & total marks.Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// ------ANSWER------
// var obtainedMarks1 = +prompt("Enter Your English Marks:");
// var obtainedMarks2 = +prompt("Enter Your Urdu Marks:");
// var obtainedMarks3 = +prompt("Enter Your Math Marks:");

// var obtainedFinal = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage= (obtainedFinal/300)*100;
// var grade, remarks;

// if(percentage>=90){
//     grade = "A+";
//     remarks = "Excellent!";
// }else if(percentage>=80){
//     grade = "A"
//     remarks = "Very Good"
// }else if (percentage >= 70) {
//     grade = "B";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "C";
//     remarks = "Fair";
// } else if (percentage >= 50) {
//     grade = "D";
//     remarks = "Average";
// } else {
//     grade = "F";
//     remarks = "Needs Improvement";
// }

// var tolatMark = 300;
// var obtainedFinal, percentage, grade, remarks;

// document.write("<h1>Results</h1>");
// document.write("<p>Total Marks: "+ tolatMark + "</p>");
// document.write("<p>Obtained Marks: "+ obtainedFinal + "</p>");
// document.write("<p>Percentage: "+ percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");




// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// ------ANSWER------
// var secretNumber = 3;
// var guess = +prompt("Guess the secret number (between 1 and 10):");
// if (guess === secretNumber) {
//    alert("Bingo! Correct answer.");
// }else if (guess === ++secretNumber) {
//     alert("Close enough to the correct answer.");
// }else {
//     alert("Sorry, Incorrect Guess.");
// }




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// ------ANSWER------
// var number = +prompt("Enter a number:");
// if(number%3 === 0){
//     alert(number + " is divisible by 3.");
// }
// else{
//     alert(number + " is not divisible by 3.");
// }



// 9. Write a program that checks whether the given input is an even number or an odd number.
// ------ANSWER------
// var number= +prompt("Enter a number:")
// if (number % 2 === 0) {
//     console.log(number + " is an even number.");
// } else {
//     console.log(number + " is an odd number.");
// }




// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// ------ANSWER------
//  var temperature = +prompt("Enter Your City Temperature")
//  if(temperature>=40){
//     alert("It is Too Hot Outside.")
//  }
//  else if(temperature>=30){
//     alert("The Weather today is Normal.")
//  }
//  else if(temperature>=20){
//     alert("Today's Weather is Cool.")
//  }
//  else if(temperature>=10){
//     alert("OMG! Today's Weather is so Cool.")
//  }



// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// ------ANSWER------
// var firstNumber = +prompt("Enter First Number")
// var secondNumber = +prompt("Enter Second Number")
// var operation=prompt("Choose your operation : \n(+, - , * , % ")
// if(operation==="+"){
//     alert(firstNumber+secondNumber)
// }
// else if(operation==="-"){
//     alert(firstNumber-secondNumber)
// }
// else if(operation==="*"){
//     alert(firstNumber*secondNumber)
// }
// else if(operation==="/"){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }