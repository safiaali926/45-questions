// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guests_list:string[] = ['Tasmia', 'Huzaifa', 'Madiha']
guests_list.forEach (guests => {
    console.log(`Hi ${guests}, Hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!`)
})

let unableToJoin = "Madiha";
console.log(`${unableToJoin} can't join my birthday`);

let newGuest ="Simrah";
guests_list[guests_list.indexOf(unableToJoin)] = newGuest ; 

guests_list.forEach(guests => {
    console.log(`Hi ${guests} Hey, hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!`)
})