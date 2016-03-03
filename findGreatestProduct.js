/*
Given an array, find the greatest product of any three of the inputs
*/

var inputs = [1,6,2,4,3,5];
// sort it highest value to lowest value, then grab three highest values and get product
inputs.sort();
console.log('Integers to be evaluated are ' + inputs);
var z = inputs.length;
var trident = inputs[z-1]*inputs[z-2]*inputs[z-3];
console.log('Greatest product of three integers is ' + trident);
