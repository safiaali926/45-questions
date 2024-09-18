// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let Names:string[] = ["Tasmia", "Hafsa", "Aisha"];
// for (let name of Names) {
// console.log(`Hello ${name}, would you like to attend online class today?`)
// }
var Names = ["Tasmia", "Hafsa", "Aisha"];
for (var i = 0; i < Names.length; i++) {
    console.log("Hello ".concat(Names[i], ", would you like to attend online class today?"));
}
