// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//method 1
let magicians: string[] = ["Harry", "David", "Lance"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magicians);

//method 2
let magician = ["Harry", "David", "Lance"]

function show_magician (){
    for(let Names of magician){
        console.log(Names);
    } 
};
show_magician()                  

