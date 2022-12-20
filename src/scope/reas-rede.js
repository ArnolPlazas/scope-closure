// var
var firstName1; // Undefined
firstName1 = 'Arnol';
console.log(firstName1);

var lastName1 = "Plazas"; // declare - assign
lastName1 = 'Medina'; // reassing
console.log(lastName1);

var fullName1 = 'Arnol Plazas'; // declare - assign
var fullName1 = 'Camila Medina'; // redeclare
console.log(fullName1);

// let
let firstName2; // Undefined
firstName2 = 'Arnol';
console.log(firstName2); 

let lastName2 = "Plazas"; // declare - assign
lastName2 = 'Medina'; // reassing
console.log(lastName2);

let fullName2 = 'Arnol Plazas'; // declare - assign
let fullName2 = 'Camila Medina'; // redeclare -> SyntaxError: Identifier 'fullName' has already been declared.
console.log(fullName2);

// const
const firstName3; // Undefined -> SyntaxError: Missing initializer in const declaration.
firstName3 = 'Arnol';
console.log(firstName3); 

const lastName3 = "Plazas"; // declare - assign
lastName3 = 'Medina'; // reassing -> TypeError: Assignment to constant variable.
console.log(lastName3);

const fullName3 = 'Arnol Plazas'; // declare - assign
const fullName3 = 'Camila Medina'; // redeclare -> SyntaxError: Identifier 'fullName' has already been declared.
console.log(fullName3);

const vehicles = [];
vehicles.push('Trunk');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);