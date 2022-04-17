const arrayFuncs = () => {
    const numbers = [1,2,3,4];
    const doubleNumArray = numbers.map((num) => {
        return num*2;
    });
    console.log(numbers, doubleNumArray);
}