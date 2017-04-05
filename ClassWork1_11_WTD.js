//Create an array with 5 elements.  Initialize it with some values and print the values out using an alert statement
var tArray = [1,2,3,4,5];
alert(tArray);

//Add an element to the array in 1 above using ‘push’
tArray.push(69);

//Remove an element to the array in 1 using ‘pop’
tArray.pop();

//Remove the fi"rst element using shift
tArray.shift(4);

//Add an element to the beginning of the array using unshift
tArray.unshift(4);

//Create a string variable and initialize it to a string in lower case.  Now convert it to upper case and print it out using an alert
var sArray = "String array";
sArray = sArray.toUpperCase();
alert(sArray);

//Use replace  function to replace “NST” in “CONSTANTINOPLE” with XXX
var cArray = "CONSTANTINOPLE";
cArray.replace("NST", "XXX");

//Use the Math.Round function to round 4.12345 and print the result
var num1 = 4.12345;
var num2 = 0;
num2 = Math.round(num1);
console.log(num2);

//Use Math.Floor and Math.Ceiling in 8 above and print the result
num2 = Math.floor(num1);
console.log(num2);
num2 = Math.ceil(num1);
console.log(num2);

//Get the current date and time and print it out
var curDnT = new Date();
console.log(curDnT);