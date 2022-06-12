// Vetores ou arrays

let array = ['texto1', 1, true];
//console.log(array);

let array2 = [['texto'], 5, false, ['arrayTest1'], ['arrayTest2'], ['arrayTest3']];
console.log(array2);

// Manipulando arrays:

// forEach() - Executa uma repetição para cada item ou indice dentro do vetor
console.log("\n forEach(): \n\n")
array2.forEach(function (valor, indice) { console.log('Indice: ' + indice + ' Conteudo: ' + valor) });

// push() Ele adiciona um novo valor ao final do array:
console.log("\n push(): \n\n")
console.log("Antes do push: \n" + array2);
array2.push('dhionathan');
console.log("Depois do push: \n" + array2);

// pop() Ele remove o último valor:
console.log("\n pop: \n\n")
console.log("Antes do pop: \n" + array2);
array2.pop('dhionathan');
console.log("Depois do pop: \n" + array2);

// shif() Ele remove o primeiro valor valor:
console.log("\n shift: \n\n")
console.log("Antes do shift: \n" + array2);
array2.shift('dhionathan');
console.log("Depois do shift: \n" + array2);

// unshif() Ele adiciona um valor no primeiro indice:
console.log("\n unshift: \n\n")
console.log("Antes do unshift: \n" + array2);
array2.unshift('dhionathan');
console.log("Depois do unshift: \n" + array2);

// indexOf() Ele retorna o indice do valor:
console.log("\n indexOf: \n\n")
console.log(array2.indexOf(false));

// splice() Ele deleta ou substitui valores de um intervalo definido:
console.log("\n splice: \n\n")
console.log("Array antes: \n" + array2);
array2.splice(0, 3);
console.log("Array depois: \n" +  array2);
// splice() Ele captura valores de um intervalo definido:
console.log("\n Slice \n\n")
let novoArray = array.slice(0, 2);
console.log(novoArray);

// Explicação, didatica e o exemplo utilizado sobre objetos muito ruim, não tenho interesse em documentar...