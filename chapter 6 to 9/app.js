// ------------CHAPTER -06 to 9--------------

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// ------ANSWER------
// var a = 10

// document.write("RESULT<br>The value of a is: 10<br>" +"The value of ++a is: " + ++a + "<br>Now the value of a is: 11<br>" + "The value of a++ is: "+ a++ +"<br> Now the value of a is: 12" + "<br>The value of --a is: " + --a  + "<br> Now the value of a is: 11" +
//  "<br>The value of a-- is: 11" + "<br>Now the value of a is: " + a--  )




// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// ------ANSWER------
// var a = 2, 
// b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<h2>"+ "Solving Complex Equation" + "</h2>"); 
// document.write("a is: 2<br>b is: 1<br>Result is: " +result);

// var a = 2;
// var result = --a;
// document.write("--a is: " +result + "<br>");

// var a = 2, b = 1;
// var result = --a - --b;
// document.write("--a and --b is: " +result +"<br>");

// var a = 2, b = 1;
// var result = --a - --b + ++b;
// document.write("--a, --b and ++b is: " +result  +"<br>");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("--a, --b, ++b and b-- is: " +result  +"<br>");




// 3. Write a program that takes input a name from user & greet the user.
// ------ANSWER------
// var myName = prompt("Enter your name:");
// alert("Hello, " + myName + "! Welcome!");





// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// ------ANSWER------
// var number = prompt('Enter Your Number')
// if (number === '') {
//     number = 5;
// }
// var table = "<h3>Table for " + number + ":</h3>";
// for (var i = 1; i <= 10; i++) {
//     document.write(number + '*' + i + '=' + number * i + '<br/>');
// }





// 6. Take a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// ------ANSWER------
// document.write("<h1>" + "MARKSHEET"+ "</h1>");
// var obtainedMarks1 = +prompt("Enter Your English Marks:");
// var obtainedMarks2 = +prompt("Enter Your Urdu Marks:");
// var obtainedMarks3 = +prompt("Enter Your Math Marks:");

// var tolatMark = 300;

// var percentage1=(obtainedMarks1/100)*100;
// percentage1=percentage1.toFixed(2);
// var percentage2=(obtainedMarks2/100)*100;
// percentage2=percentage2.toFixed(2);
// var percentage3=(obtainedMarks3/100)*100;
// percentage3=percentage3.toFixed(2);


// var obtainedFinal = obtainedMarks1 + obtainedMarks2 + obtainedMarks3
// var percentage= (obtainedFinal/tolatMark)*100;
// percentage=percentage;


// document.write("<Table>")
// document.write("<tr>");
// document.write("<th>"+ "Subjects"  +"</th>" )
// document.write("<th>"+ "Tolat marks"  +"</th>" )
// document.write("<th>"+ "Obtained marks"  +"</th>" )
// document.write("<th>"+ "Percentage"  +"</th>" )
// document.write("</tr>");


// document.write('<tr>');
// document.write('<td>'+"English"+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedMarks1+'</td>')
// document.write('<td>'+percentage1+'%'+'</td>')
// document.write('</tr>');


// document.write('<tr>');
// document.write('<td>'+"Urdu"+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedMarks2+'</td>')
// document.write('<td>'+percentage2+'%'+'</td>')
// document.write('</tr>');


// document.write('<tr>');
// document.write('<td>'+"Math"+'</td>')
// document.write('<td>'+100+'</td>')
// document.write('<td>'+obtainedMarks3+'</td>')
// document.write('<td>'+percentage3+'%'+'</td>')
// document.write('</tr>');


// document.write("<tr>");
// document.write("<th>"+ ""  +"</th>" )
// document.write("<th>"+ tolatMark  + " " +"</th>" )
// document.write("<th>"+ obtainedFinal.toFixed(2)  + " " +"</th>" )
// document.write("<th>"+ percentage + "%" +"</th>" )
// document.write("</tr>");
// document.write("</Table>");




 