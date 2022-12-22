// variables -> hoisting de la declaración no de la asignación
console.log(nameOfDog); // undefined
var nameOfDog = 'Elmo';

// Funciones 
getName();

function getName() {
    console.log(`The best pet is: ${name}`); // The best pet is: undefined
}

var name = 'Alana';