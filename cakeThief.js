/*
Interview Cake question #16
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins.
You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes-- the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
Note cost is reflected in British Pounds and weight is measured in kg.

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
Write a function max_duffel_bag_value() that takes a list of cake types and their weight capacity,
and returns the maximum monetary value the duffel bag can hold.

It is also worth mentioning I picked this problem because it had 'cake' in the title.
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
    var haul = duffelLoader(cakeTypesUpdated,capacity);
    var finalTally = tallyMaker(haul);
}; // end of maxDuffelBagValue function

maxDuffelBagValue(cakeTypes,capacity);
