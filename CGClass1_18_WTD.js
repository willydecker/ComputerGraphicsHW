//Use a prompt to get two numbers from the user, now use the add function and print the result

var num1 = prompt("gimme a number"), num2 = prompt("gimme another number"), result = 0;

var question = prompt("Would you like to add or subtract?");

//In 3 above, use the subtract function and print the result out
if (question == "add"){
	add(num1, num2);
}
else if (question == "subtract"){
	sub(num1, num2);
}
else {
	alert("Pick either add or subtract");
}

//Create an add function that takes in two numbers, adds them and returns the result
function add(num1,num2){
	result = num1 + num2;
	alert(result);
}
//Create an subtract function that takes in two numbers, subtracts them and returns the result
function sub(num1,num2){
	result = num1 - num2;
	alert(result);
}
