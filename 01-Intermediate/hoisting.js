//TODO: ------ Javascript Hoisting -------
//TODO: 1. All Functions are scanned and made available to use
//TODO: 2. All Variables are scanned and made undefined.
//TODO: ------ Javascript Hoisting -------


console.log(hotelName);
var hotelName = "Chetana Hotel"
console.log(hotelName);
function tipper(amount){
    let hotelName = "Eat and Pack";
    console.log(hotelName);
    console.log(`
    Hotel Name   : ${hotelName},
    Bill Amount  : ${amount},
    Total Amount : ${amount+10}
    `);
}
tipper(100);

