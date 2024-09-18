// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    items.forEach(function (item) { return console.log("- ".concat(item)); });
    console.log('Enjoy your sandwich!\n');
}
// Calling the function three times with different numbers of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Turkey', 'Tomato', 'Mayonnaise', 'Pickles');
orderSandwich('Peanut Butter', 'Jelly');
