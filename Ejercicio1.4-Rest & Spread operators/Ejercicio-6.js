const datosPersonales = {
    Nombre: 'Juan',
    Apellido: 'Perez',
    Edad: 25,
    Ciudad: 'Barcelona',
}

const datosLaborales = {
    Trabajo: 'React Developer',
    Salario: 30000,
    Empresa: 'Meta',
};

const datosPersonalesLaborales = {...datosPersonales, ...datosLaborales};

console.log(datosPersonalesLaborales); // {Nombre: "Juan", Apellido: "Perez", Edad: 25, Ciudad: "Barcelona", Trabajo: "React Developer", Salario: 30000, Empresa: "Meta"}