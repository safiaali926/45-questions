// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestslist = ['Tasmia', 'Huzaifa', 'Madiha'];
guestslist.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", Hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!"));
});
