/* Interview Cake Problem -- Writing an In Place Shuffle

"Write a function for doing an in-place ↴ shuffle of a list.
The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.
Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >=floor and <=ceiling."
    -- Interview Cake

So I need to rearrange the elements in an array but use the same array ...
*/

// Sample unrandomized array
var list = [];
for (i = 1; i < 101; i++)   {
    list.push(i);
};
console.log('List is initially ' + list);

// actual randomizing answer
function randomizer (list) {
    for (i = 0; i < list.length; i++)   {
        var randomSelection = Math.floor(Math.random() * (list.length - i));
        var picked = list.splice(randomSelection, 1);
        var put = list.push(picked);
    };
    console.log('After randomizer list becomes ' + list);
};
randomizer(list);
















// function shuffle(array) {
//   var m = array.length, t, i;
//
//   // While there remain elements to shuffle…
//   while (m) {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//
//   return array;
// }
