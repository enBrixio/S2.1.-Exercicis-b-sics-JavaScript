const esperarisaludar = (nombre, callback) => {
    callback(nombre);
}

const asincrono = (nombre) => {
setTimeout(() => {
    console.log(`${nombre} se ha Retrasado 2 segundos.`);
  }, 2000); }

esperarisaludar("Raul", asincrono);