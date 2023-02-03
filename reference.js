/*
- They include arrays, oject and functions
- Just like in real life an object has properties
        Example
        let name = 'Flovian'
        let age = 12
    Insted we can access the properties in an object literal.Check below
*/
let person = {
    fullName:'Floovan',
    nationality: 30
};
console.log(person); 

/*  - To access/change the name of the obbject person,use either
    1. Dot notaion i.e
*/
 
person.fullName = 'Aliyah'; // When changing
console.log(person.fullName); // when reading

// 2 - Bracket Notation
person['fullName'] = 'Vilma'
console.log[person.fullName];

//Bracket notation can also dynamically look like this:
let selection = 'fullName';
person[selection] = 'Mango';

console.log(person.fullName);


//NB: Run the files in node enviroment.