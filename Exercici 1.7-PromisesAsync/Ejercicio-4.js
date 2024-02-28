let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, mundo');
    }, 2000);
});

async function asyncCall() {
    let result = await promesa;
    console.log(result);
}

console.log(asyncCall());