let nome = prompt("Qual é o seu nome? ");
let sobrenome = prompt("Qual é o seu sobrenome? ");
let campo = prompt("Qual é o seu campo de estudo? ");
let ano = prompt("Qual é o seu ano de nascimento? ");

//Usando o \n ele irá pular a linha
console.log("Ola " + nome + ' ' + sobrenome + ", entendo o seu campo é " + campo + " e a sua idade é " + (2023 - ano));


let n1 = prompt("Fale um número");
let n2 = prompt("Fale outro número");

let novoN1 = parseFloat(n1);
let novoN2 = parseFloat(n2);

let somar = novoN1 + novoN2;
let subtrair = novoN1 - novoN2;

console.log("soma: " + somar + ";" + " Subtração: " + subtrair + ";" + " Divisão:" + n1 / n2 + ";" + " Multiplicação: " + n1 * n2 + ";");
