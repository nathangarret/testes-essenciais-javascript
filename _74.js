const entrada = require('prompt-sync')({ sigint: true })

var numero = parseInt(entrada("Digite um número inteiro: "));

var proximo;

var termo = 1;
var primeiro = 1;
var segundo = 1;

console.log("Sequência de Fibonnaci (quantidade do valor informado) que é: " + numero);

do{
    console.log(primeiro, "");
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    termo = termo + 1;
}while(termo <= numero);