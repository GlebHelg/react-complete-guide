var a = 1;   // Global - possible to use throughout the program if it is declared outside of a function.
a = 'b';     // var is function scoped when it is declared within a function

let b = 2;   // Local - can only be used within the scope it is declared in

const c = 4; // Should never change




const myName = 'Gleb';
console.log(myName);

// this keyword will keep its context inside an arrow function
function printMyName (name) {
  console.log('printMyName regular function: ', name);
}

printMyName();
printMyName(myName);

const printMyName2 = (name) => {
  console.log('printMyName2 arrow function: ', name);
};

printMyName2 (myName);

const printMyName3 = name => {
  console.log(name);
};
printMyName3(myName);

const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(2, 3));

const multiply2 = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(2, 3));

const x = 5;
