const letConstArrow = () => {

  var a = 1;   // Global - possible to use throughout the program if it is declared outside of a function.
  a = 'b';     // var is function scoped when it is declared within a function
  // var can be redeclared
  
  let b = 2;   // Local - can only be used within the scope it is declared in. preferred variable declaration.
  // A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. 
  // let can be updated but not redeclared

  const c = 4; // Should never change
  
  /* #region varLetExample */
  ///////// Problem with var //////////
  var greeter = 'hey hi';
  var times = 4;
  
  if (times > 3) {
      var greeter = 'say Hello instead'; // eslint do not like this, but javascript allows this
  }
  
  console.log(greeter); // "say Hello instead"
  ///////////////////////////////////////////
  /* #endregion */
  
  
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
  

};
