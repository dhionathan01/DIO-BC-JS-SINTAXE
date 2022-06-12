// Tipos primitivos

/* 
// Boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof (vOuF));

// Número
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof (numeroQualquer));

// string
var nome = 'Dhionathan';
console.log(nome);
console.log(typeof (nome));

// Função

var funcao = function () {
    
}
console.log(funcao);
console.log(typeof (funcao));

*/


// Declaração:
/* 
// var -  Escopo global e local, valor pode ser alterado, se não definido equivale a null
var variavel = 'Dhionathan';
variavel = 'Jobim';
console.log(variavel);

// let -  Escopo bloco e local, valor pode ser alterado, se não definido equivale a null
let variavel2 = 'Dhioanthan';
variavel2 = 'Jobim';
console.log(variavel2);

// const - Escopo bloco e localm valor não pode ser altera e precisa ser definido na criação
const CONSTANTE = 'Dhionathan'
//CONSTANTE = 'Jobim' // Gera erro pois seu valor não pode ser alterado
console.log(CONSTANTE)

*/
 
// Escopo:
/*
var escopoGlobal = 'Dhionathan';

function escopoLocal() {
    let variavelEscopoLocal = 'Jobim';
    console.log()
}
console.log(escopoGlobal);
//console.log(variavelEscopoLocal); // Erro pois é uma variavel de escopo local logo só existe dentro da função
console.log("Chamando Função".escopoLocal()); 
*/

// Operadores ' = '

// Atribuição 
let atribuicao = 12;

// Verificar se os valores são iguais
let comparacao = '0' == 0;
console.log(comparacao);

// Verifica se tanto o tipo quanto o valor é igual;
let comparacao2 = '0' === 0;
console.log(comparacao2);


// Operadores aritmeticos + , - , * , / , % , ** 

let adicao = 1 + 1;
console.log(adicao);

let subtracao = 10 - 5;
console.log(subtracao);

let multiplicacao = 10 * 5;
console.log(multiplicacao);

let divisaoReal = 15 / 5;
console.log(divisaoReal);

let divisaoInteira = 17 % 2;
console.log(divisaoInteira);

let potenciacao = 2 ** 10;
console.log(potenciacao);

// Operadores Condicionais ' > ', ' < ', ' >= ' , ' <= '

let maiorQue = 5 > 2;
console.log(maiorQue);

let menorQue = 3 < 10;
console.log(menorQue);

let maiorIgual = 5 >= 2;
console.log(maiorIgual);

let menorIgual = 2 <= 5;
console.log(menorIgual);

// Operadores Lógicos:

let e = true && true;
console.log(e);

let ou = false || false;
console.log(ou);

let inversaoLogica = !false;
console.log(inversaoLogica);



