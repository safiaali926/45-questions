// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function large_shirt (size:string = "Large", message:string = "I love Typescript"){
    console.log (`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

large_shirt()

function medium_shirt (size:string= "medium",message:string="I hate coding"){ 
    console.log (`Making a ${size} t-shirt with the message "${message}" printed on it`)
}

medium_shirt()

function small_shirt (size:string,message:string){ 
    console.log (`Making a ${size} t-shirt with the message "${message}" printed on it`)
}

small_shirt( 'small', "Don't touch my phone")
