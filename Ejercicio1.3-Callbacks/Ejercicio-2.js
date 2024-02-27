const calculadora = (num1, num2, callback) => {
    callback(num1, num2);
}

const suma = (num1,num2) => {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es: ${resultado}`);
}

calculadora(10,7, suma);