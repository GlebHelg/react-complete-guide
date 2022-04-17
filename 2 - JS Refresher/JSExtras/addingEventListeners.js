// read more about imports and exports here:
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
// 

// this is available via the html, not any import export system to js file
document.getElementById('spreadAndRest')
        .addEventListener('click', () => spreadAndRest());

document.getElementById('destructuring')
        .addEventListener('click', () => destructuring());

document.getElementById('refsAndPrimitives')
        .addEventListener('click', () => refsAndPrimitives());

document.getElementById('arrayFuncs')
        .addEventListener('click', () => arrayFuncs());