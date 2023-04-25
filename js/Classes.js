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
