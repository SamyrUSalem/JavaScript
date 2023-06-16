//Isso é uma classe, é tipo uma fabrica para a criação de objetos, sempre tem q declarar ela com uma letra maiuscula
class Gamer {
    //Após declaraar a classe, é ncessário usar o cosntructor, nele é passado os parâmetros dos objetos
    constructor(dados1, dados2, dados3) {
        //Aqui vc vai meio q nomear, os dados 1, vai colher tl coisa, no caso o processador
        this.processador = dados1;
        this.ram = dados2;
        this.rgb = dados3;
    }
    //Isso é um métado, conforme foi dito na aula de objetos
    som() {
        //Esse this é para mostrar o processador quand o método for ativado 
        return this.processador + " BRILHANDOODODOODO";
    }
}
2
//Aqui é a criação de um objeto, é só colocar o new e o nome da classe, depois entre parênteses o conteúdo dos parâmetros
const pc = new Gamer("I9 9900K", "8gb", "Show");
//Dessa maneir eu estou chamando o método
console.log(pc.som());

const pc2 = new Gamer("I7 7700KF", "6gb", "Da pro gasto");
console.log(pc2.som());


//Mexendo com Datas

//Essa propriedade busca o dia, mes, hora e etc.. do dia de hoje
let data = new Date();
console.log(data);

//Essa propriedade busca só o ano
let ano = data.getFullYear();
console.log(ano);

//Essa propriedade busca o mês, mas é mostrado igual uma matriz, começa do 0 e vai até 11, no caso o 0 é janeiro e vai ate o 11 q é dezembro
let mes = data.getMonth();

const mesEscrito = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
//Com uma matriz criada, possuindos o nome de todos os meses, é possivel criar uma variavel e usar essa matriz como indice para a função getmonth, dessa maneira quando for 0, vai ser janeiro e etc...
let mostrando = mesEscrito[data.getMonth()];
console.log(mostrando);

//Essa propriedade busca o dia do mês q estamos
let diaDoMes = data.getDate();
console.log("Hoje o número do dia é = " + diaDoMes);

//Essa propriedade pega os dias da semana, mas é tipo o mês, ela pega igual uma matriz então vai de 0 a 6, 0 é domingo e 6 é sabado
let diaSemana = data.getDay();

//È a mesma situação do mês, fiz uma matriz com os dias da semana e depois fiz essa matriz ser um índice para a propriedade getDay
const escritoSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"]
let escrevendoSemana = escritoSemana[data.getDay()];
console.log(escrevendoSemana);

//Essa propriedade pega a hora
let hora = data.getHours();
console.log(hora);

//Essa propriedade pega os minutos
let minutos = data.getMinutes();
console.log(minutos);

//Essa propriedade pega os segundos
let segundos = data.getSeconds();
console.log(segundos);

//Essa propriedade pega os milisegundos
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//Essa propriedade coloca a data e a hora para o padrão brasileiro, mudando o estilo da para coletar apenas a data
let dataBr = data.toLocaleString('pt-BR', { dateStyle: "short" });
console.log(dataBr);

//Dessa maneira pega só a hora
let horaBr = data.toLocaleString('pt-BR', { timeStyle: "short" });
console.log(horaBr);

//Outra maneira de fazer

let d = new Date();
let di = d.getDate();
//Como tava mostrando estilo matriz, ele começaa do zero então tava um número a menos do mês
let m = d.getMonth() + 1;
let a = d.getFullYear();

//Para entrar no padrão brasileiro o número do mês e do dia q for menor q 10, tem q vim acompanhado de zero, então essa função vai fazer isso
function zero(x) {
    //Estou usando um condição ternária, no no variaves,saida,etc....html fala sobre
    return x < 10 ? '0' + x : '' + x;
}

let outraFormaBr = zero(di) + "/" + zero(m) + "/" + a;
console.log(outraFormaBr);

//Comparando datas para verficar vencimento

var x = new Date();
var v = new Date(2023, 6, 10);
//Esse sistema vai verificar se uma conta, recurso etc... venceu ou não
if (x < v) {
    console.log("Sua conta esta tranquila!");
} else {
    console.log("Eita, venceu e agora?");
}

//Como ver a diferença em dias de uma dara para a outra

var da = new Date();
var dat = new Date(2023, 10, 12);

//Essa função getTime, transforma o tempo em milisegundos, pq o calculo de diferença entre dias tem q ser feito dessa maneira
var diferencaDeTempo = dat.getTime() - da.getTime();

//Esse math é para fazer calculos e o ceil é para arrendondar
var diferencaEmDias = Math.ceil(diferencaDeTempo / (24 * 60 * 60 * 1000));
console.log(diferencaEmDias);

