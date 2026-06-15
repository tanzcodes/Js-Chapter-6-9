//===============================================
// Question 1: Increment & Decrement Operators
//===============================================
let a = 10;
document.writeln("Result:<br>");
document.writeln("The value of a is: " + a + "<br>");
document.writeln("........................................<br><br>");

document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br><hr>");


//===============================================
// Question 2: Complex Arithmetic Sequencing
//===============================================
// Resetting variable 'a' to initial state for accurate calculation
a = 2; 
var b = 1;

document.writeln("<h3>Question 2 Results:</h3>");
document.writeln("a is: " + a + "<br>");
document.writeln("b is: " + b + "<br><br>");

// Step 1: --a
var step1 = --a; // a becomes 1, step1 is 1
document.writeln("Result of --a is: " + step1 + "<br>");

// Step 2: --a - --b
var step2 = step1 - --b; // b becomes 0, step2 = 1 - 0 = 1
document.writeln("Result of --a - --b is: " + step2 + "<br>");

// Step 3: --a - --b + ++b
var step3 = step2 + ++b; // b becomes 1, step3 = 1 + 1 = 2
document.writeln("Result of --a - --b + ++b is: " + step3 + "<br>");

// Step 4: --a - --b + ++b + b--
var step4 = step3 + b--; // b-- uses 1 then becomes 0, step4 = 2 + 1 = 3
document.writeln("Result of --a - --b + ++b + b-- is: " + step4 + "<br><br>");

// Final Result Display
document.writeln("<b>Final result is: " + step4 + "</b><br><hr>");


//===============================================
// Question 3: User Greeting
//===============================================
var userName = prompt("Enter your name");
if(userName !== "" && userName !== null) {
    document.writeln("Hello " + userName + "! Welcome 😊<br><hr>");
}


//===============================================
// Question 4: Dynamic Multiplication Table
//===============================================
var num = prompt("Enter a number for table");
if (num === "" || num === null) {
    num = 5;
}

document.writeln("<h3>Multiplication Table of " + num + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
}
document.writeln("<hr>");


//===============================================
// Question 6: Marks Sheet Generator & HTML Table
//===============================================
// Step (a): Subjects input
let sub1 = prompt("Enter first subject name");
let sub2 = prompt("Enter second subject name");
let sub3 = prompt("Enter third subject name");

// Step (b): Total marks parameters
let totalMarksEach = 100;
let totalMarks = 300;

// Step (c) & (d): Marks input (using '+' to convert string input to number)
let m1 = +prompt("Enter marks of " + sub1);
let m2 = +prompt("Enter marks of " + sub2);
let m3 = +prompt("Enter marks of " + sub3);

// Step (e): Calculations
let per1 = (m1 / totalMarksEach) * 100;
let per2 = (m2 / totalMarksEach) * 100;
let per3 = (m3 / totalMarksEach) * 100;

let obtained = m1 + m2 + m3;
let percentage = (obtained / totalMarks) * 100;

// Output Render via HTML Table
document.write("<h3>Marks Sheet</h3>");
document.write("<table border='1' cellpadding='8' style='border-collapse: collapse;'>");

// Header Row
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

// Subject Rows
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksEach + "</td><td>" + m1 + "</td><td>" + per1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksEach + "</td><td>" + m2 + "</td><td>" + per2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksEach + "</td><td>" + m3 + "</td><td>" + per3 + "%</td></tr>");

// Total Summary Row
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");