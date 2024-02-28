const objecte1 = {
    nombre: 'Raul',
    apellido: 'Bricio',
    edad: 20,
    población: 'Cardedeu',
};

const objecte2 = {...objecte1};

objecte2.edad = 43; 

console.log(objecte1.edad); // 20
console.log("Edad: ", objecte2.edad); // 20