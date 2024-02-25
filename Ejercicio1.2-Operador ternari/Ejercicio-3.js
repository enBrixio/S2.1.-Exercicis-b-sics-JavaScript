const determinarSigno = (num) => {
    let resultado;
    (num > 0 ) ? (resultado = "Numero Positivo") :
    (num < 0 ) ? (resultado ="Numero Negativo") :
    (resultado = "Zero");

    console.log(resultado)
}

determinarSigno(11);
determinarSigno(0);
determinarSigno(-17);

// Segunda parte //

const trobarMaxim =(a,b,c) => {
    (a > b ) ? (a > c ? console.log(a) : console.log(c)) : (b > c ? console.log(b) : console.log(c))
}
trobarMaxim(3,10,100);