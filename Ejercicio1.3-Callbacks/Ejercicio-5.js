const processarCadena = (cadena, callback) => {
    callback(cadena);
}

const mostrarCadena = (cadena) => {  
    console.log(`${cadena}`.toUpperCase());
}

processarCadena("Hola como estas", mostrarCadena);




