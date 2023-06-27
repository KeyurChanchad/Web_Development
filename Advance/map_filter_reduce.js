/* Higher Order Function 
A Higher order function is a function that takes one or more function as arguments or returns a function as its result. 

map, filter, reduce are all higer order function, which takes function as argument.
*/

/*
Map function
Executes a function on each element of an array
Returns a new array with the same length.

When to use Map
If we want to perform the same operation on each element of an array and get back new array with same length with transformed value. 
*/

var numbers = [1, 2, 3, 4, 5, 6, 7];
var double_arr = numbers.map(element => element * 2);
console.log(`Double value ${double_arr}`);
// output Double value [2, 4, 6, 8, 10, 12, 14]

 /* Filter function
Executes a function on each element of an Array
Remove items which don't satisfy a condition and returns filters array */

var numbers = [1, 2, 3, 4, 5, 6, 7];
var gratherThan3 = numbers.filter(element => element > 3);
console.log(`Grather Than 3 value ${gratherThan3}`);
// output gratherThan3 value [4, 5, 6, 7]

/* Reduce function
We need to declare the inital value of accumulator(final result) 
On each iteration inside the callback we perform some operation and that will be added to the accumulator.
Return a single value as output. 
*/

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
let result = numbers.reduce((previousVal, currentVal) => previousVal + currentVal, sum);
console.log(`Sum is ${result}`);
// output Sum is 15
