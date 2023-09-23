const entrada = require('prompt-sync') ({sigint: true})

var contador = 0;

do{
    contador = contador + 1;
    console.log(contador);
}while(contador < 10);

/* 
var contador = 0;

do{
    contador = contador + 1;
    console.log(contador);
}while(contador < 100); 
*/