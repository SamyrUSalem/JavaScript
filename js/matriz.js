//Isso é uma matriz, é só declaraar ela como const, para o valor n mudar e deixar entre colchete oq é preciso ficar dentro dela
const matrizando = ["zero", "um", "dois", "tres"];

/*console.log(matrizando[1]);*/

//Essa propriedade length, mostra o total de itens dentro da matriz
alert(matrizando.length);

//Usando o nomedamatriz.push, ele adicionar um dado dentro da matriz, daria para colocar um dentro de uma posição especifica, como: matrizando[5] = 'algo';
matrizando.push("abacate");
/*console.log(matrizando);*/

//Com esse mini sistema, ele mostra o ultimo item que esta na matriz, pq ele fala o total de itens só q toda matriz começa no 0, então diminuindo com -1, mostrará o ultimo item dela

/*console.log(matrizando[matrizando.length - 1]);*/


//Eu estou buscando na matriz, o elemento que esta na posição 0

/*alert(matrizando[0]);*/

//Essa função verifica se a variável é uma matriz ou não, caso seja o valor retornado será true, se não for o valor q retornara será False
alert(Array.isArray(matrizando));

const arroz = ["feijao", "molho", "gosto"]
//Utilizando o pop junto com a matriz, o ultimo valor q esta dentro da matriz é apagado
arroz.pop();

//Utilizando o shift, ele apagar o primeiro valor q esta dentro da matriz
arroz.shift();

//O unshift acrescenta um valor na primeira posição da matriz
arroz.unshift('caldeirada');

console.log(arroz);

//O join alterar o separador entre os elementos da matriz, normalmente é uma vírgula e com ele posso colocar qualquer coisa
document.getElementById('teste').innerHTML = arroz.join(" - ");

//Dessa meneira o splice acrescenta uma quantidade de item, no lugar escolhido, o 1 representa o priemeiro espaço no matriz, lembrando q começa no 0 e o zero nesse caso representa a qunatidade de item q vão ser deletados, na situação atual é nenhum e depois é só acrescentar os valores   
arroz.splice(1, 0, "entrei1", "entrei2");

console.log(arroz);

const pudim = ["leite", "condensado", "doce"];
const carne = ["proteina", "salgado"];
const frango = ["asinha", "assado"];

//Essa função faz a junção de duas matriz, ou mais, no caso abaixo foi juntado 3 matrizes através do concat
const PUCAR = pudim.concat(carne, frango);


document.getElementById('teste2').innerHTML = PUCAR;


const basquete = ["Lebron", "Jordan", "Durant", "Curry", "Kobe", "Irving"];

//Essa propriedade irá colocar a matriz em ordem alfabética
basquete.sort();

const jogar = ["Video Game", "Playstation", "za", "jogo", "Computador"];

//Colocando ele em ordem alfabetica e depois usando o reverse, faz com que de maneira descrecente a ordem 
jogar.sort();
jogar.reverse();

const numero = [10, 50, 3, 100, 21, 8];

//Essa propriedade filter, irá ativar a função filtrando
const maiorQ10 = numero.filter(filtrando);

//Dessa maneira os nuemros ficam do menor para o maior, caso queira do maior para o menor é sõ colocar b- a
numero.sort(function (a, b) { return a - b });

//Com essa propriedade slice, é possivel pegar valor de um certo ponto da matriz e acrescentar em outra, nesse caso eu crio uma matriz, depois coloco para ela receber a matriz q vou colher os dados.slice e nos parenteses é necessário por a partir de qual ponto eu vou querer pegar, nesse caso eu vou pegar da primeria possição em diante, caso eu queira parar de colher antes do final da matriz é só colocar virgula e colcoar uma posição a mais do q vc deseja parar, no caso eu coloquei o 4, mas só vai pegar até o 3
const jogadores = basquete.slice(1, 4);

//Essa função é para ele pegar o maior valor numerico dentro da matriz
function NumeroGrande(Array) {
    return Math.max.apply(null, Array);
}


//Esse é para pegar o menor valor numérico
function NumeroPequeno(Array) {
    return Math.min.apply(null, Array);
}

//Essa fução irá filtrar os valores q estãoa acima de 10
function filtrando(value, index, Array) {
    return value > 10;
}


document.getElementById('teste3').innerHTML = jogadores;


document.getElementById('teste4').innerHTML = basquete;

document.getElementById('teste5').innerHTML = jogar;

document.getElementById('teste6').innerHTML = numero;

//Estou chamando a função aqui, e colocando a matriz q eu quero no parenteses   
document.getElementById('teste7').innerHTML = NumeroGrande(numero);

document.getElementById('teste8').innerHTML = NumeroPequeno(numero);

document.getElementById('teste9').innerHTML = maiorQ10;
