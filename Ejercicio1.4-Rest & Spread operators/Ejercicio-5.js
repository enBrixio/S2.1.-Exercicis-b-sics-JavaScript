const funcion = (arg1, arg2, arg3) => {
    console.log("Argumento Uno: ",arg1);   
    console.log("Argumento Dos: ",arg2);   
    console.log("Argumento Tres: ",arg3);   
}

const array = [11, 7, 17];
funcion(...array);