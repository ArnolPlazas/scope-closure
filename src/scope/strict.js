'use strict'; //ReferenceError: pi is not defined
pi = 3.1416
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416
}

console.log(myFunction()); //ReferenceError: pi is not defined