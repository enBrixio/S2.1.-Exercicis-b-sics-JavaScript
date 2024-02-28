function creaPromesa(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('La promesa s\'ha resolt');
            } else {
                reject('La promesa ha estat rebutjada');
            }
        }, 2000);
    });
}

creaPromesa('Hola')
    .then(message => console.log(message)) // 'La promesa s'ha resolt'
    .catch(error => console.log(error)); // No s'imprimeix res

creaPromesa('Adéu')
    .then(message => console.log(message)) // No s'imprimeix res
    .catch(error => console.log(error)); // 'La promesa ha estat rebutjada'