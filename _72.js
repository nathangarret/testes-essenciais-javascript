const entrada = require('prompt-sync')({ sigint: true })

let numero = parseInt(entrada("Informe um número: "));

let divisor = 1;

console.log("Divisores de " + numero + ": ");

do{
    if(numero % divisor == 0){
        console.log(numero, divisor);
    }
    divisor = divisor + 1;
}while(divisor < numero);