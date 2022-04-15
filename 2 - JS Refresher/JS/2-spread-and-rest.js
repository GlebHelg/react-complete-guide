let spreadAndRest = () => {
    let numbers = [1,2,3,4];
    console.log('numbers:', numbers);
    console.log('numbers = [...numbers, 5,6,7]');
    numbers = [...numbers, 5, 6, 7];
    console.log('numbers:', numbers);
}