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
var valueRange = 10;

for (var i = 0; i < numberOfElements; i++) {
    data.push(Math.floor(Math.random() * valueRange));
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


// bucket sort
var bucketData = data.slice();
var buckets = [];

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
console.log('Bucket sorted data array: ' + bucketData);
