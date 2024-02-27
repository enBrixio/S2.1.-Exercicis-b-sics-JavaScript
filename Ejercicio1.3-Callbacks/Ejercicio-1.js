const processar = (nombre, callback) => {
    callback(nombre);
}

const miNombre = (nombre) => {
    console.log(`Hola, ${nombre}`);
}

processar("Raul", miNombre);
