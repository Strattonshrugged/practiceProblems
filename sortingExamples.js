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
var numberOfElements = 10000;
var valueRange = 10000;

for (var i = 0; i < numberOfElements; i++) {
    data.push(Math.floor(Math.random() * valueRange));
};

console.log(valueRange + ' possible numbers per element');
console.log(numberOfElements + ' elements in the raw data array');
//console.log('Raw data array: ' + data);

// bubble sort
var start = (new Date()).getTime();
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

var stop = (new Date()).getTime();
//console.log('Bubble sorted data array: ' + bubbleData);
console.log('Elapsed bubble sort time: ' + (stop - start));

// bucket sort
var bucketData = data.slice();
var buckets = [];
var begin = (new Date()).getTime();

for (var i = 0; i < valueRange; i++)    {
    buckets.push(0);
};

for (var i = 0; i < bucketData.length; i++)  {
    temp = bucketData[i];
    buckets[temp] += 1;
};

bucketData = [];
for (var i = 0; i < buckets.length; i++)    {   // go through buckets
    while (buckets[i] != 0) {
        bucketData.push(i);
        buckets[i] -= 1;
    };
};

var end = (new Date()).getTime();
//console.log('Bucket sorted data array: ' + bucketData);
console.log('Elapsed bucket sort time: ' + (end - begin));
