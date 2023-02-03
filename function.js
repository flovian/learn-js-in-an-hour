// How to declare a function

function greet() {
    console.log('Hello World');
}

// calling thefunction
greet();

/*Functions can have inpts which can change how it behaves
    - Instead of diplaying Hello world like in the code above we can display the name of the person.
    - A parameter is what we have at the time of declaration
    - An argument is the actual value we provide for the parameter
*/
function greet(name) {
    console.log('Hello ' + name);
}
greet('Flawhey'); // name is the parameter and flawhey

//Have more than one parameter in a function and use concatination
//This function is perfoming a task
function hi(name,age) {
    console.log('Hello I am '+ name + ' currently ' + age + ' years old');
}
hi('Flovian', 26);

// Function that calculates: use return keyword
function square(number) {
   return number*number
}
let number = square(2); // declare variable number first
console.log(number); 
    // OR log it out by passing an argument
console.log(square(3));