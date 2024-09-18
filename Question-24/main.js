// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); //True
// console.log("apple"=="Apple"); //False
//Inquality with strings
console.log("Testing inequality with strings:");
var cake = "pineapple";
console.log(cake !== 'chocolate'); //True
console.log(cake == 'chocolate'); //False
// Testing the lower case function
console.log("Testing the lower case function:");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() == "APPLE");
// Numerical testing
console.log("Numerical tests:");
var myNumber = 9;
console.log(myNumber == 9); //equal to
console.log(myNumber !== 5); //not equal value or not equal type
console.log(myNumber < 8); //less than
console.log(myNumber > 2); //greater than
console.log(myNumber >= 5); //greater than or equal to
console.log(myNumber <= 5); //	less than or equal to
// Testing "and" and "or" operators
console.log("Testing \"and\" and \"or\" operators");
var a = 9;
var b = 6;
console.log(a == 5 && b == 6);
console.log(a == 9 || b == 9);
// Testing whether an item is in a array
console.log("Test whether an item is in a array:");
var fruits = ['Mango', 'Apple', 'Strawberry', 'Orange'];
console.log("Is 'Orange' in fruits?");
fruits.includes("Orange");
