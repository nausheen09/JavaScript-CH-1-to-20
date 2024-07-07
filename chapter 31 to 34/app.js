// ------------CHAPTER 31 to 34--------------
// 1. Write a program that displays current date and time in your browser.
//------ANSWER------
// var today = new Date();
// document.write(today)



// 2. Write a program that alerts the current month in words. For example December.
//------ANSWER------
// var day = ["January", "February", "March", "April", "May", "June", "July", " August", "September", "October", "November", "December"];
// var today = new Date();
// var month = day[today.getMonth()];
// document.write("Current Month is " + month);



// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
//------ANSWER------
// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var day = daysOfWeek[now.getDay()];
// alert(day);


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//------ANSWER------
// var days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var today = new Date();
// var dayIndex = today.getDay();
// var dayName = days[dayIndex]

// if(dayIndex === 6 || dayIndex  === 0){
//     alert(dayName +" It's Fun day");
// }else{
//     alert(dayName +" It's not Fun day");
// }



// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
//------ANSWER------
// var today = new Date();
// var date = today.getDate();
// if(date<16){
//     alert(date +" First fifteen days of the month");
// }else{
//     alert(date +" Last days of the month");
// }



// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//------ANSWER------


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”
//------ANSWER------


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
//------ANSWER------

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015:
//------ANSWER------


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
//------ANSWER------


// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
//------ANSWER------


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
//------ANSWER------


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
//------ANSWER------


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//------ANSWER------












// ----------- Chapter 31-34 Date Methods ----------
// Task 6
//  Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var dateNow=new Date();
// var millisec=dateNow.getTime();
// document.write('Current Date :'+dateNow+'<br>')
// document.write('ELasped milliseconds since January 1,1970 :'+millisec+'<br>')
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");

// Task 7
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var dateNow=new Date();
// var hours=dateNow.getHours();
// if(hours>12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


// Task 8
//  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var todayDate= new Date();
// var laterDate=new Date('31 Dec 2020');
// document.write(laterDate)

//     Task 9
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var dateToday= new Date();
// var todayMilli=dateToday.getTime();
// var lastRamadan=new Date('June 18, 2015');
// var milliRamdan=lastRamadan.getTime();
// var diffMilliSec=todayMilli-milliRamdan;
// var days =Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(days+' days have passed since Ist Ramadan,2015')

// Task 10
// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var dateNow=new Date();
// var todayMilli=dateNow.getTime();
// var year2015=new Date('1 Jan,2015');
// var milli2015=year2015.getTime();
// var diffMilliSec=todayMilli-year2015
// var seconds=Math.floor(diffMilliSec/(1000));
// document.write('On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015')


// Task 11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var today = new Date();
// var hoursAgo=today.getHours();
// hoursAgo=hoursAgo-1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

// Task 12
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// Task 13
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age=+prompt('Enter your age');
// var today= new Date();
// var yearNow=today.getFullYear();
// var birthYear=yearNow-age;
// document.write('Your age is '+age+'<br>'+' Your birth year is '+birthYear)



// Task 14
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b.

// var customerName='Tayyaba Ali';
// var today=new Date();
// var month=today.getMonth();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var noUnits=410;
// var chargePerunit=16;
// var netAmount=noUnits*chargePerunit;
// var lastCharge=350;
// var afterDueDate=netAmount+lastCharge;
// document.write('<h1>'+'K-Electric Bill'+'</h1>')
// document.write('Customer Name :'+customerName+'<br>');
// document.write('Month :'+mlist[month]+'<br>');
// document.write('Number of units :'+noUnits+'<br>');
// document.write('Charges per unit :'+chargePerunit+'<br>');
// document.write('<br>')
// document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
// document.write('Late payment surcharge :'+lastCharge+'<br>');
// document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');