const refsAndPrimitives = () => {

/* #region primitives */
    // Primitive assignments are copies of primitive values
    const number = 1;
    const num2 = number; // creates a real copy
    console.log("num2: ", num2);    
    //console.log("", number == num2);
/* #endregion */

/* #region objectsAndArrays */
    // Objects and arrays are copied by reference
    const personObj = {
        name: "person"
    }
    const secondPersonObj = personObj;
    personObj.name = "Gleb";
    console.log("secondPersonObj: ", secondPersonObj);
    
    // Also
    console.log("personObj == secondPersonObj: ", personObj == secondPersonObj);
    console.log("personObj === secondPersonObj: ", personObj === secondPersonObj);

    const thirdPersonObject = {...personObj};
    console.log("personObj == thirdPersonObject: ", personObj == thirdPersonObject);
    console.log("personObj === thirdPersonObject: ", personObj === thirdPersonObject);


    // Example 2
    const hero1 = {
        name: 'Batman'
    };
    const hero2 = {
        name: 'Batman'
    };
    console.log("hero1: ", hero1);
    console.log("hero2: ", hero2);
    console.log("hero1 === hero1        : ", hero1 === hero1        ); // => true
    console.log("hero1 === hero2        : ", hero1 === hero2        ); // => false
    console.log("hero1 == hero1         : ", hero1 == hero1         ); // => true
    console.log("hero1 == hero2         : ", hero1 == hero2         ); // => false
    console.log("Object.is(hero1, hero1): ", Object.is(hero1, hero1)); // => true
    console.log("Object.is(hero1, hero2): ", Object.is(hero1, hero2)); // => false




/* #endregion */

};
