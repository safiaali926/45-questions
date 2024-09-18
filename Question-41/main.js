// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//method 1
var magicians = ["Harry", "David", "Lance"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//method 2
var magician = ["Harry", "David", "Lance"];
function show_magician() {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var Names = magician_1[_i];
        console.log(Names);
    }
}
;
show_magician();
