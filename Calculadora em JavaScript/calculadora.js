function calculadora() {
    let operacao = Number(prompt('Escolha escolha a Operação: \n 1 - Soma (+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4- Divisao(/) \n 5 - Divisao Inteira(%)\n 6 - Potenciação(**)'));
    if (!operacao || operacao >= 7 || operacao <= 0) {
        alert("Operação não encontrada !!");
        calculadora();
    } else {
        let valor1 = Number(prompt('Insira o primeiro valor: '));
        let valor2 = Number(prompt('Insiera o segundo valor: '));
        if (!valor1, !valor2) {
            alert('Valores informados inválidos para operação');
            calculadora();
        } else {
            function soma() {
                let resultado = valor1 + valor2;
                alert(`${valor1} + ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function subtracao() {
                let resultado = valor1 - valor2;
                alert(`${valor1} - ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function multiplicacao() {
                let resultado = valor1 * valor2;
                alert(`${valor1} x ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function divisaoReal() {
                let resultado = valor1 / valor2;
                alert(`${valor1}/ ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function divisaointeira() {
                let resultado = valor1 % valor2;
                alert(`${valor1} % ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function potenciacao() {
                let resultado = valor1 ** valor2;
                alert(`${valor1} ^ ${valor2} = ${resultado}`);
                efetuarOutroCalculo();
            }
    
            function efetuarOutroCalculo() {
                let novoCalculo = prompt('Deseja efetuar um novo calculo ?\n 1 - Sim \n 2 - Não');
                if (novoCalculo == 1) {
                    calculadora()
                } else if (novoCalculo == 2) {
                    alert('Programa Finalizado');
                } else {
                    alert("Opção inválida")
                }
            }
    
            switch (operacao) {
                case 1:
                    soma();
                    break
                case 2:
                    subtracao();
                    break
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaointeira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }   
    }    
}
calculadora()