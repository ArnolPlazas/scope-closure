// variables
var a; // declarando
var b = 'b'; // decaramos y asignamos
b = 'bb'; // reasignar
var a = 'aa' // redeclarar

// Global Scope

var fruit = 'Apple' // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function getCountry() {
    country = 'Colombia'; //Global
    console.log(country);
}

getCountry();
console.log(country);
