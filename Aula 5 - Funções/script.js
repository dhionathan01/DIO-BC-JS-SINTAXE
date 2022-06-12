// Funções

function funcaoSemRetorno() {
    console.log('Função sem retorno');
}

funcaoSemRetorno();

function funcaoComRetorno() {
    return 'Função com retorno';
}


console.log('Chamei a função');
funcaoComRetorno();
console.log("Joguei retorno em uma variavel e fiz a exibição");
let valor = funcaoComRetorno();
console.log(valor);

function funcaoComParametros(valor1, valor2) {
    console.log(valor1, valor2);
}

funcaoComParametros('Primeiro valor', ' Segundo valor');