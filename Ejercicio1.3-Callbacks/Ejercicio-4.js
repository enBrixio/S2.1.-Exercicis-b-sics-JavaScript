const processarElements = (array, callback) => {
    callback(array);
}

const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}   

const misNumeros = [7, 11, 17, 9, 21, 16, 12];

processarElements(misNumeros, mostrarArray);