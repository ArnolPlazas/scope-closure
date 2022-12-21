function greeting() {
    let userName = 'Arnol';

    function displayUsername() {
        return `Hello ${userName}`;
    }
    return displayUsername;
}

const g = greeting();
console.log(g); // return -> function's definition
console.log(g()); // return -> value, rememeber the context