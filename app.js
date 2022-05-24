                //CHAPTER NO 3
                 
                //Question no 1
//Declare a variable called age & assign to it your age. Show
//your age in an alert box.

var age = +prompt(" Enter your Age");
alert(age);

                //Question no 2
//Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//Show his/hernumber of visits on your web page. For example: “You have visited this site N times”.

var visit = prompt("visiting site times");
alert( " you have visited this site " + visit + " times");

                //Question no 3
//Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 2000;
document.write(" My Birth Year is " + birthYear);
document.write("<br>");
document.write(" Data type of my declare variable is number");

                //Question no 4
// A visitor visits an online clothing storewww.xyzClothing.com . Write a script to store in variables
// the following information: a. Visitor’s name  b. Product title 
// c. Quantity i.e. how many products a visitor wants toorder
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name = prompt(" Enter your name:");
var product = prompt(" Enter your product name:");
var quantity = prompt(" Enter your quantity");

document.write(name + " ordered " + quantity + " " + product + " on XYZ clothing store. " )


                //CHAPTER NO 4

                //Question no 1
//
//1. Declare 3 variables in one statement.
//2. Declare 5 legal & 5 illegal variable names.
//3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______,
//______ and ______.
//For example $my_1stVariable
//c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


//1
var variables = a,b,c;

//2

//legal names

// myName
// my_name
// City
// Count
// first_name
//illegal names

// 1myname
// First name
// City - name
// 123city
// Last- Name

//3
document.write(" <h1> Rules for naming JS variables </h1> ");
document.write("<br>");
document.write("<br>");
document.write("Variable names can only contain number,$ _. for example: $my_1stname");
document.write("<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name");
document.write("<br>");
document.write("Variable names are case Sensitive");
document.write("<br>");
document.write("Variable names should not be JS Keywords");

                //CHAPTER NO 5

                //Question no 1
//Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = 4;
var b = 5;
var sum = a+b;
document.write(" Sum of 4 and 5 is " + sum);

                //Question no 2
//Repeat task1 for subtraction, multiplication, division & modulus.

var a = 6;
var b = 5;
var sub = a - b;
document.write(" Subtraction of 6 and 5 is : " + sub);
document.write("<br>");
var mul = a * b;
document.write(" Multiplication of 6 and 5 is : " + mul);
document.write("<br>");
var division = a / b;
document.write(" Division of 6 and 5 is : " + division);
document.write("<br>");
var mod = a % b;
document.write(" Modulus of 6 and 5 is : " + mod);

                //Question no 3
//Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var a ;
document.write("Value after variable declaration is: Undefined");
a = 5;
document.write("<br>");
document.write("Initial Value is: " + a);
document.write("<br>");
a = ++a;
document.write(" Value after increment is: " + a);
document.write("<br>");
a = a + 7;
document.write("Value after addition is: " + a);
document.write("<br>");
a = --a;
document.write("Value after Decrement is: " + a);
document.write("<br>");
a = a % 3;
document.write("The remainder is " + a);

                //Question no 4
//Cost of one movie ticket is 600 PKR. Write a script to storeticket price in a variable & 
//calculate the cost of buying 5 tickets to a movie. Example output:

var price_of_tickets = 600 ;
var total = price_of_tickets * 5;
document.write("Total Cost to buy 5 Tickets to a movie is " + total + "PKR");

                //Question no 5
//Write a script to display multiplication table of any number in your browser.

document.write("<h1> Table of 5 </h1>");
document.write("<br>");
document.write(" 5 x 1 = " + 5 * 1 );
document.write("<br>");
document.write(" 5 x 2 = " + 5 * 2 );
document.write("<br>");
document.write(" 5 x 3 = " + 5 * 3 );
document.write("<br>");
document.write(" 5 x 4 = " + 5 * 4 );
document.write("<br>");
document.write(" 5 x 5 = " + 5 * 5 );
document.write("<br>");
document.write(" 5 x 6 = " + 5 * 6 );
document.write("<br>");
document.write(" 5 x 7 = " + 5 * 7 );
document.write("<br>");
document.write(" 5 x 8 = " + 5 * 8 );
document.write("<br>");
document.write(" 5 x 9 = " + 5 * 9 );
document.write("<br>");
document.write(" 5 x 10 = " + 5 * 10 );

                //Question no 6
//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var C = 25;
var F = 70;
var calsius_con = ( F - 32 ) * 5/9;
var Fahrenheit_con = ( C * 9/5 ) + 32;
document.write(" 25C is: " + Fahrenheit_con + "F");
document.write("<br>");
document.write(" 70F is: " + calsius_con + "C");

                //Question no 7
//Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
//Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price_item1 = +prompt("Enter price item 1:");
var quantity_item1 = +prompt("Enter quantity item 1:");
var price_item2 = +prompt("Enter price item 2:");
var quantity_item2 = +prompt("Enter quantity item 2:");

var cost_item1 = price_item1*quantity_item1;
var cost_item2 = price_item2*quantity_item2;
var shipping = 100;
var total = cost_item1 + cost_item2 + shipping;
document.write("<h1> Shopping Cart </h1>");
document.write("<br>");
document.write("Price of item1 is: " + price_item1);
document.write("<br>");
document.write("Quantity of item1 is: " + quantity_item1);
document.write("<br>");
document.write("Price of item2 is: " + price_item2);
document.write("<br>");
document.write("Quantity of item2 is: " + quantity_item2);
document.write("<br>");
document.write("Shipping Charges " + shipping);
document.write("<br>");
document.write("Total cost of your order is: " + total);

                //Question no 8
//. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & 
//show the result in your browser

var sub1 = +prompt("Enter your sub1 number: ");
var sub2 = +prompt("Enter your sub2 number: ");
var obt_marks = sub1 + sub2;
var total_marks = 200;
var percent = obt_marks/total_marks*100;
document.write("<h1> Marks Sheet </h1> ");
document.write("<br>");
document.write("Total Marks: " + total_marks);
document.write("<br>");
document.write("Marks Obtained: " + obt_marks);
document.write("<br>");
document.write("Your Percentage is: " + percent);

                //Question no 9
//Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

var doller = +prompt(" Enter your doller number: ");
var riyal = +prompt("Enter your riyal number: ");
var doller_pak = 104.80;
var riyal_pak = 28

var currency = doller * doller_pak;
var currency1 = riyal * riyal_pak;
var total = currency + currency1
document.write(" Total Currency in PKR: " + total);

                //Question no 10
//Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var equ = 5;
equ = ((equ + 5) * 10 )/ 2;
document.write(equ);

                //Question no 11
//The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

var current_year = +prompt("Enter your current age year: ");
var birth_year = +prompt("Enter your birth year: ");

var cal = current_year - birth_year;
document.write("<h1> Age Calculator</h1> ");
document.write("<br>");
document.write("Current Year: " + current_year);
document.write("<br>");
document.write("Birth Year: " + birth_year);
document.write("<br>");
document.write("Your Age is: " + cal);

                //Question no 12
//The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var rad = +prompt("Enter a radius: ");
var pi = 3.142;
var circumference = 2*pi*rad;
var area = pi*rad**2;
document.write("<h1> The Geometrizer</h1> ");
document.write("<br>");
document.write("Radius of a Circle is: " + rad);
document.write("<br>");
document.write("The Circumference is: " + circumference);
document.write("<br>");
document.write("The Area is: " + area);

                //Question no 13
//The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”

var snack = prompt("Enter Your Favourite Snake: ");
var age = +prompt("Enter your age: ");
var max_age = +prompt("Enter your maximum age: ");
var amount = +prompt(" Enter amount of snacks per day: ");
var cal = (max_age - age) * amount;

document.write("<h1> The Lifetime Supply Calculator</h1> ");
document.write("<br>");
document.write("Favourite Snacks is: " + snack);
document.write("<br>");
document.write("Current Age: " + age);
document.write("<br>");
document.write("Estimated Maximum Age: " + max_age);
document.write("<br>");
document.write("Amount of Snack Per Day " + amount);
document.write("<br>");
document.write("You will need " + cal + " to last you until the ripe old age of " + max_age );

                //CHAPTER NO 6-9
                //Question no 1

//Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:

var a = 10;
document.write("The value of a is:" + a);
document.write("<br>");
document.write("<br>");
document.write("<br>");
a = ++a;

document.write("The value of ++a is:" + a);
document.write("<br>");
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");
a = a++;
document.write("<br>");
document.write("The value of a++ is:" + a);
document.write("<br>");
a = a+1;
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

a = --a;
document.write("The value of --a is:" + a);
document.write("<br>");
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");
a = a--;
document.write("The value of a++ is:" + a);
document.write("<br>");
a = a-1;
document.write("Now the value of a is:" + a);

                //Question no 2
//What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>");
document.write("a is:" + a);
document.write("<br>");
document.write("b is:" + b);
document.write("<br>");
document.write("result is:" + result);

                //Question no 3
//Write a program that takes input a name from user & greet the user.

var name = prompt("Enter your Name");
document.write(name);

                //Question no 4
//. Write a program to take input a number from user &display it’s multiplication table on your browser. 
//If userdoes not enter a new number, multiplication table of 5should be displayed by default.

var num = +prompt("Enter a number: "," 5");
document.write("<h1> TABLE OF " + num + "</h1> "  );
document.write("<br>");
document.write( num + " x 1 = " + num*1);
document.write("<br>");
document.write( num + " x 2 = " + num*2);
document.write("<br>");
document.write( num + " x 3 = " + num*3);
document.write("<br>");
document.write( num + " x 4 = " + num*4);
document.write("<br>");
document.write( num + " x 5 = " + num*5);
document.write("<br>");
document.write( num + " x 6 = " + num*6);
document.write("<br>");
document.write( num + " x 7 = " + num*7);
document.write("<br>");
document.write( num + " x 8 = " + num*8);
document.write("<br>");
document.write( num + " x 9 = " + num*9);
document.write("<br>");
document.write( num + " x 10 = " + num*10);

                //Question no 5
//a) Take three subjects name from user and store them in 3
//different variables.
//b) Total marks for each subject is 100, store it in another
//variable.
//c) Take obtained marks for first subject from user and
//stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//e) Now calculate total marks and percentage and show the
//result in browser like this.(Hint: user table)

var nameSub1 = prompt("Enter  your subject1 name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter  your subject2 name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter  your subject3 name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var percentage1 = subMarks1 / eachmarks * 100;
var percentage2 = subMarks2 / eachmarks * 100;
var percentage3 = subMarks3 / eachmarks * 100;

var totalMarksStd = 300;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  
    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${percentage1}%</td>
    </tr>
    <tr>
        <td>${nameSub2}</td>
        <td>${eachmarks}</td>
        <td>${subMarks2}</td>
        <td>${percentage2}%</td>
    </tr>
    <tr>
        <td>${nameSub3}</td>
        <td>${eachmarks}</td>
        <td>${subMarks3}</td>
        <td>${percentage3}%</td>
    </tr>  
    <tr>
        <td></td>
        <td>${totalMarksStd}</td>
        <td>${obtainedMarks}</td>
        <td>${Percentage}%</td>
    </tr>  
        </table>`)