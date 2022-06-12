/* 
let jogador1 = 1;
let jogador2 = 0;
let placar;

// condição ternaria:
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos')

// Estruturas if , else if, else
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 fez um ponto ! ');
    placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 fez um ponto');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 venceu');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 venceu');
        break;
    default:
        console.log('Empatou');
}

 */
/* 
// Estruturas de repetição For e suas variações:

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//For - Executa uma instrução até que ela seja falsa
console.log('For');
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//ForIn - Executa uma repetição a partir das propriedade / índices
// array
console.log('ForIn array');
for (let i in array) {
    console.log(i);
}
console.log('ForIn object');
for (i in object) {
    console.log(i)
}

//For/of Executa repetição a partir de valor
for (i of array) {
    console.log(i);
}

 */

let a = 0;

while (a < 10) {
    a++;
    console.log(a);
};
 
a = 0;
do {
    a++
    console.log(a)
}while (a < 10);