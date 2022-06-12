// Funções

// Funções declarativas:
function funcao() {
    console.log("Exemplo função declarativa");
}

funcao();

// Expreções de funções -  Funçãoes que são atribuídas a uma expressão:
// Com nomeação:
let funcaoAtribuidaExpressao = function funcaoExpressao() {
    console.log('Função atribuida Expressão');
}

funcaoAtribuidaExpressao();
// Sem nomeação
let funcaoExpressaoSemNome = function () {
    console.log('Função atribuida Expressão sem nome');
}

funcaoExpressaoSemNome();

// Funções Arrow Function

let arrowFunction = () => {
    console.log('Sou uma arrow function!');
}

arrowFunction();