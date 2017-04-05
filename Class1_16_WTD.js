//Use a for loop and print out an alert with a message 5 times
for (var i = 0; i < 5; i++){
	alert("This is current number:" + i);
}

//Create an array and initialize it with 1,2,3,4,5.  Now use a for loop and replace 2 and 4 with the number 9
var myArray = [1,2,3,4,5]
for (var i = myArray.length - 1; i >= 0; i--) {
	if(i == 1){
		myArray[1] = 9;
	}
	if(i == 3){
		myArray[3] = 9;
	}
}

//Copy and run this program listed below and state what it printed and why it behaved like that
for(i=0;i<5;i++){
	if(i < 3){
		continue;
    }
    alert("i is now:" + i);
}
//this program will print "i is now 3" and "i is now 4" due to line 19
//and 20 forcing a continue on 0, 1, and 2.

//Use a for loop and print out numbers only from 3 to 5
for (var i = 0; i < 5; i++) {
	if (i < 3){
		continue;
	}
	console.log(i);
}

//Use a prompt to collect user input with one of the following values
//(“A, “B”, “C”, “D”).  Now use a switch statement to print out an 
//appropriate “You entered ‘A”, “You entered B” etc based on the 
//user input
var input1 = prompt("Type either a,b,c, or d.")
switch(input1){
	case"a":
		console.log("you entered a");
	case"b":
		console.log("you entered a");
	case"c":
		console.log("you entered a");
	case"d":
		console.log("you entered a");
	default:
		console.log("pick one of the given answers");
}