/*
Write a function that takes stock prices and returns the best profit to be made from 1 purchase and 1 sale of stock
Assuming the information comes in as an array
The tricky part is you need the greatest difference (buy low sell high) with the high end on the right hand side
Will complete the task in three passes: get the high-to-the-right array, get the differences, find the highest difference
*/

var stockPrices = [32, 18, 17, 26, 37, 34];

function highrightarray(input)  {
    var highright = [];
    var highrightchampion = 0;
    for (i = 0; i < input.length; i++)  {   // do this as many times as there are elements in teh array
        if (input[((input.length -1) -i)] > highrightchampion)  {   // if the last number in the array is greater than highright champion
            highrightchampion = input[((input.length -1)-i)];   // name a new highrightchampion
        };
        highright.push(highrightchampion);
    };
    highright.reverse();
    //console.log('highright: ' + highright);
    return highright;
}; // end of highrightarray

function differencearray(input,highright)   {   // create array of all differences between the original stock prices and "highest to the right"
    var differenceArray = [];
    for (i = 0; i < input.length; i++)  {
        differenceArray.push(highright[i] - input[i]);
    };
    //console.log('differenceArray: ' + differenceArray);
    return differenceArray;
};

function FindLargest (input)    {
    var largest = 0;
    for (i = 0; i < input.length; i++)  {
        if (input[i] > largest) {
            largest = input[i];
        };
    };
    return largest;
};

function getMaxProfit(input)  {
    console.log('input: ' + input);
    var differences = differencearray(input,highrightarray(input));
    // take the result, sort it, reverse it, get the first element
    console.log('differences as an array ' + differences);
    var maxprofit = FindLargest(differences);
    console.log('Maximum profit achievable: ' + maxprofit)
};

getMaxProfit(stockPrices);
