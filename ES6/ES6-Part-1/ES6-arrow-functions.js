let profileId = 12;
{
    let profileId = 152;
}
//console log is 12 because of the block scope of let and const keyword
console.log("ProfileId:", profileId);

document.addEventListener('click', function () {
    console.log("EventListener with classic function", this); //it will show #document, the item the event is attached.
})

document.addEventListener('click', () => {
    console.log("EventListener with arrow function", this); //it will show Window, arrow functions, inherit the context in which they are running.
})

let payment =
    {
        amount: 20,
        execute: function () {
            console.log("Execute method of an object with classic function", this); //will log the payment object
        },
    };

payment.execute();

let payment2 =
    {
        amount: 20,
        execute: () => {
            console.log("Execute method of an object with arrow function", this); //will log the window object
        },
    };

payment2.execute();

//ATTENTION
//You will not be able to change the context of "this" using bind or call with arrow functions.
//You won't receive any error it just won't work :(
// EXAMPLE

let order = {
    id: 5,
    process: function () {
        return () =>  { console.log("Process the order with Id:", this.id)};
    }
};

let order2 = {
    id: 22,
}

order.process().bind(order2)(); // if you change the arrow function in order.process object to classic function the output will be 22