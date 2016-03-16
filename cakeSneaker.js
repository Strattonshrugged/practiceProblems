// UNFINISHED

/*
It occurred to me while writing cakeThief that the solution I found was not optimal.
A thief with a 20lb bag may grab an 11lb cake worth $1100 ($100/lb) instead of two cakes which weighed 10lbs selling for $990 each ($99/lb).

The brute force solution to this problem is finding all possible cake combinations which can fit into the given container and calculating
the value of each combination. I can try to reduce the weight of that calculation a little ...
given an items $/kg we can eliminate other items that have an equal (or lower) $/kg where the weight is the same or higher.
In other words a $50 cake of 5lbs means we can ignore a $100 cake of 10lbs and a $45 cake of 5lbs.

My plan is to find the lowest common multiple of the cakes and reserve that as "saved space".
The bulk of the bag is filled by greatest $ per lb but the saved space has brute force combinations applied to it.
*/

var cakeTypes = [
                { name: 'death by chocolate', weight: 26, price: 5000},
                { name: 'raspberry vanilla', weight: 13, price: 2000 },
                { name: 'carrot', weight: 6, price: 700 },
                { name: 'red velvet', weight: 4, price: 400 }
                ];
var capacity = 50;

function giveCakesAttributes(inputCakeTypes)  {  // bang for buck, assign array objects a value of highest price per kg
    for (i = 0; i < inputCakeTypes.length; i++)  {
        cakeTypes[i].value = Math.round(inputCakeTypes[i].price / inputCakeTypes[i].weight);
        cakeTypes[i].loaded = 0;
    };
    return inputCakeTypes;
};




function orderlyCakes(input)   {
    for (i = 0; i < input.length; i++)  {
        i
    }
    // compare common multiples, thin the herd
    // find lowest common multiple
};

function mostValuableCakeFinder(cakesToChooseFrom)   {
    var mVC = 0;    // refers to position inside the array, not the value of the cake
    for (i = 0; i < cakesToChooseFrom.length; i++) {
        if (cakesToChooseFrom[mVC].value < cakesToChooseFrom[i].value)    {
            mVC = i;
        };
    };
    return mVC;
};




function duffelLoader(inputCakes,maxLoad)   {
    var payload = 0;
    var readyToGo = false;
    var mVC = mostValuableCakeFinder(inputCakes);

    while (readyToGo == false)  {   // while there is room in the duffel
        while (inputCakes[mVC].weight + payload <= maxLoad) {    // while the most valuable cake can fit in the duffel ...
            inputCakes[mVC].loaded = inputCakes[mVC].loaded + 1;
            payload = payload + inputCakes[mVC].weight;
        };
        inputCakes[mVC].value = 0;   // if the most valuable cake won't fit it's no longer worth anything

        mVC = mostValuableCakeFinder(inputCakes); // find a new champion, a new mVC

        if (payload == maxLoad || inputCakes[mVC].value == 0)    { // if the duffel is full or no more cakes will fit
            readyToGo = true;
        };
    };
    return inputCakes;
}; // end of duffelLoader



function tallyMaker(haul)   {
    for (i = 0; i < haul.length; i++)   {
        if (haul[i].loaded != 0)    {
            console.log(haul[i].loaded + ' ' + haul[i].name);
        };
    };
    var looted = 0;
    for (i = 0; i < haul.length; i++)   {
        looted = looted + (haul[i].price * haul[i].loaded);
    };
    console.log('Total stolen: ' + looted);
};

function maxDuffelBagValue(cakeTypes,capacity)  {
    var cakeTypesUpdated = giveCakesAttributes(cakeTypes);
    var orderlyCakes = (cakeTypesUpdated);
    var haul = duffelLoader(cakeTypesUpdated,capacity);
    var finalTally = tallyMaker(haul);
}; // end of maxDuffelBagValue function

maxDuffelBagValue(cakeTypes,capacity);
