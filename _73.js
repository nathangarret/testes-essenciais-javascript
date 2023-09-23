const entrada = require('prompt-sync')({ sigint: true })

var numero = parseInt(entrada("Informe um número para saber se ele é primo ou não: "));

var divisor = 1;
var conta_divisores = 0;

do{
    if(numero % divisor == 0){
        conta_divisores = conta_divisores + 1;
    }
    divisor = divisor + 1;
}while(divisor <= numero);

if(conta_divisores == 2){
    console.log(numero + " é um número primo.");
}else{
    console.log(numero + " não é um número primo.");
}