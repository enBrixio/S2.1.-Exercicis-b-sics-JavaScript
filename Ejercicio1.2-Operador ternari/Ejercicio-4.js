const misNumeros = [7, 11, 17, 9, 21, 16, 12];

const otherNumbers = [3, 23, 33, 43, 53, 63, 73];

const parOImpar = (miArray) => {
    for (let i=0; i <= miArray.length-1; i++){
        let valor = miArray[i]
        let ternario = (valor % 2 === 0 ) ? 'es par' : 'es impar'
        console.log(`${valor} ${ternario}`);
     }
}

parOImpar(misNumeros)
parOImpar(otherNumbers)