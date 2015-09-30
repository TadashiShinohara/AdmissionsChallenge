// Your code here
var myArray = new Array();
myArray[0] = "Tadashi Shinohara";
myArray[1] = "tadashi0924";

function cutName(chopChop){
	return chopChop.split(" ");
}

var myData = {};

myData.fullName = cutName(myArray[0]);
myData.skype = myArray[1];
myData.github = "tadashi0924";

/*
1.First, declare an array named myArray
2.Great! Now populate myArray with two strings.
Put your full name in the first string, and your Skype handle in the 
second.
3.Next, declare a function named cutName. 
It should take a string as an argument.
4.cutName should return an array by breaking up the input string 
into individual words. For example "Douglas Crockford" should be 
returned as ["Douglas", "Crockford"]
5.Make a new empty object literal named myData
6.Add three key-value pairs to myData, by following these guidelines
	fullName : call cutName on the name string stored in myArray
	skype : refer to your Skype handle in myArray
	github : If you have a github handle, enter it as a string. 
	If not, set this to null
*/