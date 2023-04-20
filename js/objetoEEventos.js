//Isso é um objeto, é recomendado declarar ele como const, para o valor n mudar,abrindo a chaves e colocando por exemplo, marca:"algo", vai armazenar essas informações no objeto, ai é só ir inserindo, é possícel criar funções como o exemplo abaixo
const carro = {
    marca: "Renault", placa: "CFG-3212", cor: "verde", ano: 2020,
    ligar: function () {
        alert("vrumvrumvrumvrum")
    },
    texto: function () {
        //O this, ele puxa um atributo dentro do objeto no caso ele esta puxando oa atributo placa
        return "Oq eu vou dizer é q a placa é " + this.placa + ", não acabou pq a cor dele é " + this.cor; s
    }
}
//Dessa maneira é possível ver no console os atributos do objeto, mas usando o objeto.algumaPropriedade, irá só mostrar a propriedade especifica
console.log(carro.texto());
//Dessa maneira eu estou acionando o método(função)
carro.ligar();

function clique() {
    document.body.style.backgroundColor = "red";
}

function x2() {
    document.body.style.backgroundColor = "white";
}

function mouse() {
    let div = document.getElementById('cor');
    div.style.backgroundColor = "blue";
}

function mousefora() {
    let div = document.getElementById('cor');
    div.style.backgroundColor = "gray";
}

function quandoMexer() {
    let p = document.getElementById('teste');
    //Essa propriedade append adiciona textos
    p.append('Eu mexo e adiciona;');
}

function texto1() {
    //Essa função esta indo no id do input, e alterando o valor dele, q no caso esta adicionando nada, então meio q esta apagando
    document.getElementById('texto2').value = '';
}

function tecla() {
    let input = document.getElementById('texto2').value;
    console.log(input);
}

function press() {
    console.log('cliquei');
}

function up() {
    console.log('pressionei');
}
