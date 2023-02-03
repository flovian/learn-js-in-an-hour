/* ARRAYS
- Arrays are data structures that consist of a collection elemenst that can be identified by atleast one array index or key
- Example is a list f products in a shoping list
- O n the console when we check for the 'typeof' ie selectProduct it will show that it is an object
*/
let selectedProducts = ['Soap', 'Towel'];
console.log(selectedProducts);

/*
- Indexing is an operation that pulls out a select set from an array.
- The index of a valuein an array is that value's location in array.
- There is a difference btwn the value and where the value is stored in an array
*/

console.log(selectedProducts[0]); // we are accessing the value at index 0

selectedProducts[2] = ['Mouth wash']; // adding a  value to an array
console.log(selectedProducts);

//In Javascript we can store values of different types in an array:check below
selectedProducts[3] = 1;
console.log(selectedProducts); 
console.log(selectedProducts.length); // Checks for its length
