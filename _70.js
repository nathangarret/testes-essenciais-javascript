const entrada = require('prompt-sync')({ sigint: true })

let contador = 0;
let soma = 0;

do {
    let numero = parseFloat(entrada("Informe o valor da nota: "));
    
    soma += numero;
    contador += 1;
}while(contador < 5);

const media_aritmetica = soma / 5;

console.log("A média aritmética dos números é: " + media_aritmetica);