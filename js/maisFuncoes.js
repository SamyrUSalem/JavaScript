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