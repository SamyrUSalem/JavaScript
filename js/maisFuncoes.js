//Essa função é mostrada como um alerta, meio q com um campo input para o usuário digital algo
let algo = window.prompt("Digite algo:");

console.log(algo);
//È tipo um alerta, mas de aceite, vai aparecer se vc confirma ou cancela
confirm("Aceita? ")


//Essa é uma função recurssiva, dentro dela, ela chama ela mesmo, tem um exemplo abaixo de como funciona, um dos cuidados que deve ter é para n deixar q fique se repetindo infinitamente, então é sempre legal ter um caso base, como um if com alguma condição que faça a função parar, quando chegar a determinado ponto
function dividir(n1) {
    console.log(n1);
    if (n1 % 2 == 0) {
        dividir(n1 / 2)
    } else {
        return n1
    }
}

function fatorial(n2) {
    //Utilizando uma condição base, quando n2 for 0 a execução continua sera parada
    if (n2 === 0) {
        return 1;
        // Outra condição base
    } else if (n2 === 1) {
        return 1;
    } else {
        //Estou usando o valor de n2 e chamando a função de novo para multiplicar, pois ex: 5 fatorial é igual a 5 x !4 , esse calculo esta sendo feito
        return n2 * fatorial(n2 - 1);
    }
}

console.log(fatorial(5))

//Isso é uma função anônima, ela n tem nome e a mesma é declarada dentro de uma variável, esse tipo de função normalmente é usada quando queremos mudar o seu comportamentod dentro do sistema, mas sem alterar o seu nome, pois eu declarei a variável funcao com esse valor abaixo, mas se quisesse poderia atribuir depois outra funcao a essa variável, ai mudaria a função q ela esta armazenando, igual como um dado mesmo
let funcao = function (x1, x2) {
    return x1 + x2;
}

//Essa é uma função High order, ele é uma função q tem como parâmetro outra função, as funções que estão sendo usadas como parâmetros, são chamadas de callback
function exemplo(x, y, funcao) {
    console.log("Isso é uma função High order")
    const teste = funcao(x, y);
    return teste
}

function somando(a, b) {
    return a + b
}
//Dessa maneira, estou colocando como parâmetro a função somando, com isso ela vai subistituir a funcao que esta logo acima
console.log(exemplo(1, 2, somando));

//Nesse caso eu coloquei uma função anônima como um parâmetro, elas são muitos usadas com as funções high order 
exemplo(1, 2, function (a, b) {
    return a - b
})

function elementos(elemento, indicie, array) {
    console.log(elemento, indicie, array);
}

const listaTeste = ["arroz", "feijão", "diferente"];

//Essa é uma maneira de chamar cada elemento da matriz
// for (let i = 0; i < listaTeste.length; i++) {
//     elementos(listaTeste[i], i, listaTeste);
// }

//Esse é outro método de chamar cada elemento da matriz, usando a função high order "forEach"
listaTeste.forEach(elementos)

const variasCoisas = [
    { vida: 30, resultado: 10, acertei: "não" },
    { vida: 12, resultado: 1, acertei: "sim" },
    { vida: 33, resultado: 2, acertei: "não" },
    { vida: 44, resultado: 11, acertei: "sim" },
    { vida: 33, resultado: 55, acertei: "sim" }
]

const array = [];

// //Dessa meneira estou enviando para a matriz array, somente oq tem na matriz VariasCoisas com a propriedade resultado
// for (let ii = 0; ii < variasCoisas.length; ii++) {
//     array.push(variasCoisas[ii].resultado);
// }

//Essa é outra maneira de fazer oq foi feito acima, usando a função high order map, ela vai criar um novo array, mas utilizando as informações de outro ja existente, só q sem alterar nada desse outro, como se fosse uma cópia(podendo ser apenas de propriedades especifícas, como o caso abaixo), o resto é parecido com o forEach ele ira chamar uma função, ou cria uma anônima e tudo q estiver dentro do return, será enviado para a novoMatriz
const novoArray = variasCoisas.map(function (qualquer) {
    return variasCoisas.resultado
})


//Dessa maneira, foi criado um filtro, eu criei um novo array e fiz uma verificação com o if, para só ser enviar para essa matriz apenas os objeots que tem a resposta sim, na propriedade "acertei"
// const filtro = [];

// for (let ind = 0; ind < variasCoisas.length; ind++) {
//     if (variasCoisas[ind].acertei === "sim") {
//         filtro.push(variasCoisas[ind])
//     }
// }

//Essa seria outra maneira de realizar um filtro, seria igual as anteriores usando uma função high order e colocando uma função anônima, no return eu coloquei o filtro q gostaria
const filter = variasCoisas.filter(function (x) {
    return x.acertei === "sim"
})

//Essa é a função reduce, ela como as outrass cria uma nova matriz, mas transforma ela em outro dado, por exemplo abaixo ela pegou todos os dados que tinha na propriedade "vida" no array variasCoisas e somou tudo, e foi enviado para o novo array então foi transformado em núemro, os parâmetros da function abaixo, tem q ter o valor total q será o novo valor, e do lado da function tem q ter o valor q será inicializado esse valor total, no caso agora é 0
const somandoReduce = variasCoisas.reduce(function (valorTotal, x) {
    return valorTotal + x.vida
}, 0)

//Dessa maneira, eu fiz uma organização criei uma matriz para todos os elementos que tinha o "sim" na propriedade acertei e criei uma matriz para todos que tinham o "não" como elemento na propriedade acertei
const organizando = variasCoisas.reduce(function (valorTotal, x) {
    //Verifiquei se no valor total ja existia essa propriedade que esta no colchete
    if (valorTotal[x.acertei]) {
        //Caso sim, eu enviei ela para a matriz
        valorTotal[x.acertei].push(x)
    } else {
        //Caso ela n exista, eu estou criando uma matriz para ela
        valorTotal[x.acertei] = [x]
    }
    return valorTotal
    //Eu inicializei o valor total como um objeto
}, {})