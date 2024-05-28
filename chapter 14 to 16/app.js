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
// device.push(" Moues ");
// device.push(" Printer ");
// device.push(" Monitor");

// // Dequeue (access and remove) values in FIFO order
// while (device.length > 0) {
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
// while (devices.length > 0) {
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
// document.write("</select>")




