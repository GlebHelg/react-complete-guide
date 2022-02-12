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

printMyName2(myName);

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
