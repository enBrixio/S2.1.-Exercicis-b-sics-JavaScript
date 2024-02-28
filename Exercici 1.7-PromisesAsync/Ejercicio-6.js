const myPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promises 1');
    }, 2000);
});

const myPromises2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promises 2');
    }, 2000);
});

Promise.all([myPromises, myPromises2]).then((values) => {
    console.log(values);
});