const myName = 'Gleb'
console.log(myName)

// this keyword will keep its context inside an arrow function
function printMyName (name) {
  console.log('printMyName regular function: ', name)
}

printMyName()
printMyName(myName)

const printMyName2 = (name) => {
  console.log('printMyName2 arrow function: ', name)
}

printMyName2(myName)
