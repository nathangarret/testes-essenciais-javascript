const entrada = require('prompt-sync')({ sigint: true })

var contador = 0;

let numero = parseInt(entrada("Informe um número para saber a sua tabuada: "))

do{
    let resultado = numero * contador;
    console.log(numero, " x ", contador, " = ", resultado);
    contador = contador + 1;
}while(contador <= 10);