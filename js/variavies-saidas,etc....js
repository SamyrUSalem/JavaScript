//Esse é um tipo de saída em formato de alerta

alert('Js externo!');

//o documente faz com que ele procure no documento e o getelementebyid, é para referenciar o id q é preciso encontrar, e eu coloquei qual é no parenteses e o innerhtml é o tipo de sáida, no caso ele vai printar em formato html a mensagem a seguir
document.getElementById("teste").innerHTML = "Essa é uma maneira printar na tela com o js externo";

console.log("Essa é uma maneira de printar mas só na tela adm, usando o f12 no navegador normalmente, ela faz com que o trabalho seja mais produtivo");

//Com o var, eu posso declarar variáveis, como o a,b e c.
var a, b, c;

a = "ola";
b = "opa";

//O let é outra maneira de declarar a varável e a mais usada atualmente, n é possivel atribuir outro valor a ela, no exemplo abaxio, as chaves são como outro bloco, então nesse bloco o a tem valor 3, mas fora dele o a tem valor 2, o var por outro lado é possível atribuir outro valor a variável, então independente do bloco, o valor muda em todos
let a = 2;

{
    let a = 3;
}

//O const é outra maneira de declarar variáveis, mas o const é o mais restrito de todos, pq n importa se ele estam em um bloco ou não, a váriavel const sempre vai ter o mesmo valor, nesse caso o x sempre vai ser 5
const x = 5;


//Dessa maneira é feita a contatenação, ele vai juntar as duas palavras, eu utilizei as aspas duplas para realizer um espaço entre as palavras.
c = a + " " + b;

//estou meio q printando a variável c na tela
document.getElementById('teste2').innerHTML = c;

