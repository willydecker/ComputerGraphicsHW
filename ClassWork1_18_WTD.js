//1. Given below is a string that contains '@' symbols due to some problem.  Use a for loop and the array.splice() method to remove all the @ symbols.  HINTS: Store the string in a variable and convert it to an array but note that there are carriage returns in the string, i..e it is not one long string but multiple strings.  How will you make this one long string? Is there a symbol you can add to the end of each line to tell JavaScript to disregard the carriage return?  

var givenString = 
("Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse,and nothing particular 
to interest me on shore, I thought I
would sail about a little and see the watery part of the
world. It is @ a way I have of driving off the spleen and
regulating the circulation. Whenever I find myself
growing grim about @ the mouth; whenever it is a damp,
drizzly November in my soul; whenever I find myself
involuntarily pausing before coffin warehouses, and
bringing up the rear of every funeral I meet; and especially
whenever my hypos get @such an upper hand of me, that it
requires a strong moral principle to prevent me from
deliberately stepping into the street, and methodically
knocking @ people’s hats off—then, I account it high time to
get to sea as soon as @ I can. This is my substitute for pistol
and ball. With a philosophical flourish Cato throws himself
upon his sword; I quietly take to the ship. There is
nothing surprising @ in this. If they but knew it, almost all
men in their degree, some @ time or other, cherish very
nearly the same feelings towards the ocean with me.";)

//2. Create a 2 dimensional array to store the alphabets and numbers separately from this collection here below:

var twoDArray = [];
twoDArray[0] = [a,b,c,d,e,f,g,h,i,j];
twoDArray[1] = [1,2,3,4,5,6,7,8,9,10];

//3. Create three 2 x 2 arrays.  Lets call them 'array1', 'array2' and 'resultArray'.
//Initialize all the elements of 'array1' with the number 5.  Initialize all the elements of 'array2' with the number 2.  Now write a routine to add two arrays and store the result in the corresponding element in the 'resultArray' and print out the values of all the elements in the third result array.

var twoDArray1 = [];
twoDArray1[0] = [5,5]; twoDArray1[1] = [5,5];
var twoDArray2 = [];
twoDArray2[0] = [2,2]; twoDArray2[1] = [2,2];
var twoDArrayResult = [];

for(var i = 0;i < 2; i++){
	twoDArrayResult[0] = twoDArray1[0] + twoDArray2[0]; //result = (0,0) + (0,0) 
	twoDArrayResult[1] = twoDArray1[1] + twoDArray2[1]; //result = (1,1) + (1,1) 
}

console.log(twoDArrayResult);
//4. Use the concat method to combine 'array1' and 'array2' and assign them to another array called 'combinedArray'.  Now print out the combinedArray.

var twoDArrayCom = [];
twoDArrayCom = twoDArray1.concat(twoDArray2);
console.log(twoDArrayCom);

//5. Create an array called evenOnly[ ] that contains the numbers 2,4,6. Now create a function called isEven(x) that will check if the passed in value 'x' is even and return true or false. Use the 'every' function of the evenOnly[ ] array to check each element of this array using the isEven(x) function and assign the result to a variable.  Print out the variable at the end.

var evenOnly= [1,3,5];
function isOdd(){
	for (var i = 0; i < evenOnly.length; i++) {
		evenOnly[i]
	}
}

//6. Create an array called oddOnly[ ] that contains the numbers 1,3,5. Now create a function called isOdd(x) that will check if the passed in value 'x' is even and return true or false. Use the 'every' function of the oddOnly[ ] array to check each element of this array using the isOdd(x) function and assign the result to a variable.  Print out the variable at the end.

//7. Create an array called realArray[1,2,3,4,5,6].  Use the 'some' function to iterate over the array and pass it the isEven(x) function you created in '5' above.  Get the result of this into a variable and print it out.

//8. Write a function called print(x) which will print out the value of 'x' using an alert statement.  Now using the realArray[ ] in '7' above and using the forEach iterator print each element of the array.

//9. Use the 'map' function on the realArray[ ] in '7' and pass it the isOdd(x) function in '6' above.  Print out the resulting array.

//10. Use the filter method on the realArray[ ] in '7' to obtain an array of all the even numbers in realArray[ ] and another array of all the odd numbers. 

//11. Use the Math.Random function to create an array called randArray[ ] with 10 whole numbers.  Note that Math.Random will return floating point numbers so you need to convert it to whole numbers using Math.Round() or Math.floor().  Now use the sort function to sort the array in place and print out the result

//12. Create a class called Employee that contains a name and salary variable.  Use this to create objects to store the following employee records:

Smith, 100,000

Joe, 80000

John 300000

Jack 25000

Add a function to the class that will print out the salary and details of each object so that you can verify after creation that it has been created correctly

Now write a compare function that will compare the salaries as follows: compare(Jack, John){

return 1 if Jack salary is > John;

return -1 if Jack salary is < John;

return 0 if Jack salary is equal to John

Now store all the objects you created in an array and then use the sort function of the array and pass in the compare function you wrote to that array and print out the result of the sort to see if the sort arranged the objects in increasing order of salary