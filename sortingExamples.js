// Demonstrate a couple different sorting methods

/* Leftover code from discussion with Josh
exports.numbers = numbers;
var numbers = require('./numbers').numbers;
var start = (new Date()).getTime();
var elapsed = (new Date()).getTime() - start;
console.log("time to process " + numbers.length + ": " + elapsed);
*/


// create an array of random input to be passed in
var data = [];
var numberOfElements = 10;
var dataHigh = 10;

for (var i = 0; i < numberOfElements; i++) {
    data.push(Math.floor(Math.random() * dataHigh));
};
console.log('Raw data array: ' + data);


// bubble sort
var bubbleData = data.slice();

for (var i = 0; i < bubbleData.length - 1; i++) {
    for (var j = 0; j < bubbleData.length - 1; j++) {
        if (bubbleData[j] > bubbleData[j + 1]) {
            var temp = bubbleData[j];
            bubbleData[j] = bubbleData[j + 1];
            bubbleData[j + 1] = temp;
        };
    };
};

console.log('Bubble sorted data array: ' + bubbleData);


// There is something wrong with bucket sort, it keeps crashing the dev tools and I'm not sure why
/*
// bucket sort
var bucketData = data.slice();
var buckets = [];
// make buckets
for (var i = 0; i < dataHigh; i++)    {
    buckets.push(0);
};
// sort into buckets
for (var i = 0; i < bucketData.length; i++)  {
    temp = bucketData[i];
    buckets[temp] += 1;
    buckets[bucketData[i]] += 1; // the value of the i position of array bucketData ... that position in array buckets needs to go up by 1
};
// form new array
for (var i = 0; i < buckets.length; i++)    {
    if (i != 0) {
        var counter = buckets[i];
        while (buckets[i] != 0) {
            bucketData.push(i);
            counter -= 1;
        };
    }; // no else, if the value is zero then nothing happens and it just moves to the next iteration
};

console.log('Bucket sorted data array: ' + bucketData);
*/
