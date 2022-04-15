let printer = (printStr) => {
    console.log(printStr);
}

document.getElementById('x').addEventListener('click', () => printer('clicked x'));
document.getElementById('y').addEventListener('click', () => printer('clicked y'));
document.getElementById('z').addEventListener('click', () => printer('clicked z'));