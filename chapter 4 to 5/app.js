
// ------------CHAPTER -04--------------
// 1. Declare 3 variables in one statement.
// ------ANSWER------
// var x = 8;
// var y = 9;
// var z = x + y;
// alert("The value of z is " + z);



// 2. Declare 5 legal & 5 illegal variable names.
// ------ANSWER------
//  legal 
// 1. myVar
// 2. _count
// 3. $price
// 4. age
// 5. camelCaseVarible

//  illegal 
// 1. 123variable
// 2. my-variable
// 3. if
// 4. @username
// 5. var



// 3. Display this in your browser:
// ------ANSWER------
// var contentWithBreaks = " Rules for naming JS variables:<br>a) Variable names can only contain: myName, My-Name, $price, 1stName.<br>b) Variable names are case: Snake case, Pascal case, Camel case.<br> c) Variable names should not be JS: 123variable.";
// var name1 = "John ";
// var _name = "Jane ";
// var $name = "Jake";
// var result = name1 + _name + $name
// document.write(contentWithBreaks + "<br> d) Variables must begin with a " + result );





                  // -------------CHAPTER -05------------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser:
// ------ANSWER------
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// document.write( "Sum 3 and 5 is " + result);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// var num1 = 3;
// var num2 = 5;
// var result = num1 - num2;
// document.write( "Subtraction 3 and 5 is " + result);
// var num1 = 9;
// var num2 = 3;
// var result = num1 * num2;
// document.write( "Multipliaction 9 and 3 is " + result);
// var num1 = 15;
// var num2 = 3;
// var result = num1 / num2;
// document.write( "Division 15 and 3 is " + result);
// var num1 = 15;
// var num2 = 3;
// var result = num1 % num2;
// document.write( "Modulus 15 and 3 is " + result);




// 3.Do the following using JS Mathematic Expressions
// ------ANSWER------

// a. Declare a variable.
// var mathematic;

// b. Show the value of variable in your browser.
// var mathematic = "Value after variable declaration is:??";
// document.write(mathematic +"<br>")

// c. Initialize the variable with some number.
// var num = 5

// d. Show the initial value of the variable.
// document.write("Initial value: " + num + "<br>");

// e. Increment the variable. and f. Show the value of the variable after increment.
// ++num;
// document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.
// num = num + 7;

// h. Show the value of the variable after addition.
// document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable. and j. Show the value of the variable after decrement.
// --num;
// document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
// var remainder = num % 3;

// l. Output the remainder.
// document.write("The remainder is: " + remainder);





// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// ------ANSWER------
// var store = 600;
// var ticket = 5;
// var result = store * ticket;
// document.write( "Total cost to buy 5 Ticket to a movie is " + result);



// 5. Write a script to display multiplication table of any number in your browser.
// ------ANSWER------
// document.write("Table of" +4+ "<br>")
// for(var i=1;i<=10;i++){
// document.write("4 X "+i+ " = "+ 4*i+ "<br>")
// }



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// ------ANSWER------
// var Celsius =(70-32)*5/9;
// var Fahrenheit =(25*9/5)+32;
// document.write("Fahrenheit Convert Celsius:<br>70 \u00B0F is  " + Celsius +" \u00B0C");
// document.write("<br>Celsius Convert Fahrenheit:<br>25 \u00B0C is  " + Fahrenheit +" \u00B0F");



// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
// ------ANSWER------
// var firstItem = 650*3;
// var secondItem = 100*7;
// var result = firstItem + secondItem + 100 ;
// document.write("Price of item 1 is 650.<br>Quantity of item 1 is 3.<br>So, Total Price of Item 1 is " + firstItem );
// document.write("<br>Price of item 2 is 100.<br>Quantity of item 2 is 7.<br>So, Total Price of Item 2 is " + secondItem );
// document.write("<br>Shipping charges 100");
// document.write("<br>Total Cost of Your Order is " + result );



// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser:
// number/total*100
// ------ANSWER------
// var marks = (804/980)*100;
// document.write("MARKS SHEET<br>Total Marks: 980<br>Obtained Marks: 804<br>Percentage " + marks + "%");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// ------ANSWER------
// var dollar1 = 10*104.80;
// var saudiRiyal = 25*28;
// var result = dollar1 + saudiRiyal
// document.write("CURRENCY IN PKR<br>10 US Dollars Convert into Pakistani Rupee: " + dollar1 + "PKR");
// document.write("<br>25 Saudi Riyals Convert into Pakistani Rupee: " + saudiRiyal + "PKR");
// document.write("<br>Total Currency in PKR: " + result);



// 10.Write a program to initialize a variable with some number and do arithmetic in following sequence:
// ------ANSWER------
//  var initialValue = "8"
//  var result = (((initialValue+5)*10)/2)
//  document.write("calculations in a single expression " + result)



// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// ------ANSWER------
// var currentYear = 2016-1992
// document.write("Current Year is: 2016<br>Date of Birth is: 1992<br>Your Age is:  " + currentYear)



// 12. The Geometrizer: Calculate properties of a circle.
// ------ANSWER------
//  var circumference = 2*3.142*20
//  var area= 3.142*20*20
// document.write("THE GEOMETRIZE<br>The circumference is:  "+ circumference)
// document.write("<br>The area is:  " + area)



// 13.The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// ------ANSWER------
var chocolate =((65-15)*3)
document.write("The Lifetime Supply Calculator<br>Favorite Snack is Chocolate<br>Current Age :15<br>Estimated Maximum Age: 65<br>Amount of Snake per day: 3")
document.write("<br>You will need to "  +chocolate +" Chocolate to last youe until the ripe old age of 65")