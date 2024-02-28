const array = [1, 2, 3, 4, 5, 6, 7,];
const [primerNumero, segundoNumero, ...restoDeNumeros] = array;

console.log("Primer Número: ",primerNumero); // 1
console.log("Segundo Número: ",segundoNumero); // 2
console.log("Resto Números: ",restoDeNumeros); // [3, 4, 5, 6, 7]