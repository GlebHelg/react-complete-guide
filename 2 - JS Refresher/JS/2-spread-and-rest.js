let spreadAndRest = () => {
    console.log(spreadAndRest);
    /* #region Arrays */
    let numbers = [1,2,3,4];
    console.log('numbers:', numbers);
    console.log('numbers = [...numbers, 5,6,7]');
    numbers = [...numbers, 5, 6, 7];
    console.log('numbers:', numbers);
    /* #endregion */

    /* #region objects */
    let firstName = {
        name: "Gleb"
    }
    console.log('firstName: ', firstName);
    let fullName = {
        ...firstName,
        lastName: "Belg"
    }
    console.log('fullName: ', fullName);
    /* #endregion */

    /* #region rest */
    let restFunc = (...inputVals) => {
        // inputVals gets put into an array
        return inputVals.filter(x => x%2==0);
    }
    console.log(restFunc(1,2,3,4));
    /* #endregion */
}