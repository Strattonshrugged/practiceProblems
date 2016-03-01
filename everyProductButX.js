/*
You have an array of integers. Create a new array containing the product of every number in the input array, except one.
*/

var listOfNumbers = [1,2,3,4,5,6,7];
//console.log('Input: Array of numbers, find the product of all numbers with one number removed: ' + listOfNumbers);
function get_products_of_all_ints_except_at_index(input)    {
    var results = [];
    var product = 1;
    var temp = 0;
    for (i=0; i < input.length; i++)    {
        product = 1;        // reset each iteration
        temp = input.slice(0);       // reset each iteration ... that slice thing prevented inheritance
        temp.splice(i, 1);  // take out the 1 element we don't want in there
        //console.log('temp after it gets sliced is ' + temp);
        for (j=0; j < temp.length; j++) {
            product = temp[j]*product;
        };
        results.push(product);
    };  // end of for loop pushing numbers into results array
    //console.log('Array of products of all numbers after one number has been removed: ' + results);
};  // end of function
get_products_of_all_ints_except_at_index(listOfNumbers);
