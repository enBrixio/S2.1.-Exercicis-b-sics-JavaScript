let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, mundo');
    }, 2000);
});

promesa.then((message) => {
    console.log(message); // 'Hola, món'
});