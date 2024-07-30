// ------------CHAPTER 38 to 42--------------
// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
//------ANSWER------
// function power(a,b){
//       console.log(a*b);
// }power(4,8);



// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
//------ANSWER------
// var years = prompt("Enter Your Year");
// switch (years) {
//       case "2016":
//       case "2012":
//       case "2020":
//             console.log("wellcome");
//             break;
//       default:
//             console.log("Not wellcome");
//             break;
// }



// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions..
//------ANSWER------
// var a =parseInt( prompt("Enter Your First Side"));
// var b = parseInt(prompt("Enter Your Second Side"));
// var c = parseInt(prompt("Enter Your Thrid Side"));

// function findindS(a,b,c){
//       var s= (a+ b+ c) /2;
//       return s;
// }
// var found = findindS(a,b,c)
// function area(found){
//       var areafound= found * (found - a) * (found - b)* (found - c);
//       return areafound;
// }
// var result = area(found)
// console.log(result);



// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
//------ANSWER------
// function marks(){
//     var sub1 = +prompt("Enter first subject marks");
//     var sub2 = +prompt("Enter second subject marks");
//     var sub3 = +prompt("Enter third subject marks");
//     var total = +prompt("Enter total marks");
//     var ave = average(sub1,sub2, sub3)
//     var per = percenatge(sub1, sub2, sub3, total);
//     document.write("<h2>" + "Average is " + "</h2>" + ave + "<br>");
//     document.write("<h2>" + "Percentage is " + "</h2>" + per +" %" + "<br>");
// }
// function average(a,b,c){
//     var av = (a+b+c) /3;
//     av = av.toFixed(2);
//     return av;
// }
// function percenatge(a, b,c, total){
//     var perc= ((a + b + c) / total) * 100;
//     perc = perc.toFixed(2);
//     return perc;
// }
// marks();



// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
//------ANSWER------
// function index(str, chara) {
//         var no;
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] === chara) {
//                 no = i
//                 break;
//             }
//         }
//         return no
//     }
//     var str = "hello world"
//     var indexOf = prompt("Write character to find ");
//     var result = index(str, indexOf);
//     document.write("The indexOf  " + indexOf + " is " + result)



// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
//------ANSWER------
// function deleteVowels(sentence) {
//     var result = sentence.replace(/[aeiouAEIOU]/g, " ");
//     return result;
// }
// var sentence = prompt("Please enter a sentence (up to 25 characters):");
// if (sentence.length <= 25) {
//     var noVowels = deleteVowels(sentence);
//     document.write(noVowels);
// } else {
//     document.write("The sentence is too long. Please enter a sentence with up to 25 characters.");
// }



// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence FUNCTIONS, switch statements, while… do-while loops “Pleases read this application and give me gratuity Such occurrences are ea, ea, ui.
//------ANSWER------
// var str = "Please read this application and give me gratuity";
// var occurrences = [];
// var count = 0;
// function findOccurrences() {
//     var chars = str.toLowerCase().split("");
//     for (var i = 0; i < chars.length - 1; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
//         if (isVowel(char) && isVowel(next)) {
//             count++;
//             var twoChar = char + next;
//             occurrences.push(twoChar);
//         }
//     }
//     return count;
// }

// function isVowel(char){
//     switch (char) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true;
//         default:
//             return false;
//     }
// }
// var count = findOccurrences();
// document.write("String: " + str + "<br>");
// document.write("Count: " + count + "<br>");
// document.write("Occurrences: " + occurrences.join(", ") + "<br>");





// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
//------ANSWER------
// function kmToMeters(km) {
//     return km * 1000;
// }
// function kmToFeet(km) {
//     return km * 3280.84;
// }
// function kmToInches(km) {
//     return km * 39370.1;
// }
// function kmToCentimeters(km) {
//     return km * 100000;
// }
// function convertDistance() {
//    var km = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
//     if (isNaN(km) || km < 0) {
//         document.write("Please enter a valid positive number.");
//         return;
//     }
//     document.write("Distance in meters: " + kmToMeters(km)+"<br>");
//     document.write("Distance in feet: " + kmToFeet(km)+"<br>");
//     document.write("Distance in inches: " + kmToInches(km)+"<br>");
//     document.write("Distance in centimeters: " + kmToCentimeters(km));
// }
// convertDistance();




// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
//------ANSWER------
// function calculateOvertimePay(hoursWorked) {
//     var overtimeRate = 12.00;
//     var regularHours = 40;    
//     if (hoursWorked <= regularHours) {
//         return 0; 
//     }
//     var overtimeHours = hoursWorked - regularHours;
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
// }
// function getOvertimePay() {
//     var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
//     if (isNaN(hoursWorked) || hoursWorked < 0) {
//         document.write("Please enter a valid non-negative number.");
//         return;
//     }
//     var pay = calculateOvertimePay(hoursWorked);
//     document.write("Overtime pay: Rs. " + pay.toFixed(2));
// }
// getOvertimePay();





// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
//------ANSWER------
// function calculateNotes(amount) {
//     var denominations = [100, 50, 10]; 
//    var notes = {};
//     for (var i = 0; i < denominations.length; i++) {
//         var denom = denominations[i];
//         notes[denom] = Math.floor(amount / denom); 
//         amount %= denom; 
//     }
//     return notes;
// }
// function getCurrencyNotes() {
//     var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):")) * 100;
//     if (isNaN(amount) || amount <= 0) {
//         document.write("Please enter a valid positive number.");
//         return;
//     }
//     var notes = calculateNotes(amount);
//     document.write("Number of 100 Rs. notes: " + notes[100]);
//     document.write("Number of 50 Rs. notes: " + notes[50]);
//     document.write("Number of 10 Rs. notes: " + notes[10]);
// }
// getCurrencyNotes();
