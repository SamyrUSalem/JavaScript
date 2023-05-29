//operadores

var teste, teste1, teste2;

teste1 = 3;
teste2 = 4;

//Esse sinal faz a mesma coisa que isso (valor1 = valorr1 + valor2), no caso é somado ele mesmo mais alguma variavel, desta maneira é mais um atalho, e pode ser feito para o -, *,/, etc...
teste1 += teste2;

var test;

test = 2;
//Ele juntou o valor da variavel teste com a string, só q eu dei um espaço no final para n ficar colado
/*alert("Dessa maneira é possível juntar a string com variável, olha o número " + test);*/

var bol, bol2;

bol = 3;
bol2 = 2;
//Esse é o valor booleano, com o == é feito uma comparação para ver se os valores são iguais, caso vc queira ver se os tipos também são iguais, no caso se é inteiro, string, etc... é s´po usar ===
//Usando o !=, vc ve se é diferente o valor e utilizando o !==, vc ve se é diferente o valor e o tipo

/*alert(bol == bol2);*/

var ter, ter2;

ter = 21;
//Essa é a operação condicional ternária, é meio q colocar uma condição na hora de declarar a variavel,  vc coloca entre parenteses a condição e depois fora do paratenses uma interrogação(é tipo o if), ai colocar oq deve acontecer caso seja verdadeiro e depois ao lado coloca os dois pontos(é tipo o else) e fale oq deve acontecer caso seja falso
ter2 = (ter > 20) ? "Esse é o campo caso seja verdadeiro" : "Exato, esse é o campo caso seja negativo"

/*alert("Vamo testar a resposta: " + ter2);*/

var log, log2;

log = 5;
//Esse é os operadores lógicos, o || significa "ou", então o log é maior q 5 ou é igual a 5, é um ou é outro, também tem o && q significa "e", então é preciso q os dois sejam verdadeiro
//Tem o operador de negação, q é usado assim !(log < 2); então se log NÃO for menor q 2, ai sera falso, se for maior, então  é verdadeiro.
log2 = (log > 5 || log === 5);
/*alert(log2)*/

//Isso é uma função, eu escolho o nome dela e coloco entre parenteses os parametros, meio q são os dados de entrada, como uma variável, ai eu abro chaves e uso o return q é o comando de saida(só pode ter um return dentro do código, então é necessário q seja no fim ou tem a possibilidade de ter mais de um, como dentro de if,else,etc..outra situação ou vai ser esse return ou aquele), ai eu printei na tela com o innerhtml, chamei a função e coloquei os valores
//Os paramentro são como uma variável q estou criando para essa função, neles q estarão armazenados os valores da entrada
function soma(somar1, somar2) {
    return somar1 + somar2;
}


function padrao(x, x1 = "arroz") {
    //Dessa maneira, coloquei um valor padrão no parâmetro x1, então caso ninguem forneça um valo a ele, o mesmo ja vai ter um padrão, esses valores q ja vem definido sempre tem q ser colocaddo por último para evitaar erros, pq a função segue uma ordem de coleta então podia atrapalhar isso
}

function objeto(objeto) {
    //quando uma função tem vários parâmentro é melhor criar um objeto e colocar todo o conteúdo nele, com o intuito de deixar o código mais organizado
    objeto.nome
    objeto.algo
    objeto.estaCerto
}

//criei um objeto
const obj = { nome: "", algo: "", estaCerto: "" }

//e coloquei os valores desse objeto na função
function objeto(obj)

document.getElementById('id').innerHTML = soma(5, 5);

function idade(ano, idad) {
    return ano - idad;
}

var year = 2023;
var valor = 18;
//Da para enviar valores 
document.getElementById('id2').innerHTML = idade(year, valor);

function celsius(valendo) {
    return (5 / 9) * (valendo - 32);
}

var ha = celsius(82);

alert(ha);