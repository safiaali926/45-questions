// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var guestlist = ['Safia', 'Yahya', 'Khowla'];
console.log("Surprise! I found a bigger dinner table.");
//Adding guest in beginning of the array
guestlist.unshift("Ali");
//Adding guest in middle of the array
guestlist.splice(guestlist.length / 2, 0, "Muhammad");
//Adding gust in the end of the array
guestlist.push("Tayyaba");
guestlist.forEach(function (newGuest) {
    console.log("Hi ".concat(newGuest, ", Would like to join me for dinner?"));
});