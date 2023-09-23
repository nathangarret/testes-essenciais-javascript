const entrada = require('prompt-sync') ({sigint: true})

var contador = 0;

do{
    console.log(contador);
    contador += 2;
}while(contador <= 50);