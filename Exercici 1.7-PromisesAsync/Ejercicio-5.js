async function creaPromesa(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('La promesa se ha resuelto');
            } else {
                reject('Error: La promesa ha sido rechazada');
            }
        }, 2000);
    });
}

async function executaPromesa(input) {
    try {
        let message = await creaPromesa(input);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

executaPromesa('Hola'); // 'La promesa s'ha resolt'
executaPromesa('Adéu'); // 'La promesa ha estat rebutjada'
