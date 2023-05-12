const name = prompt("Qual é o seu nome? ");
const atack = prompt("Qual é o poder do seu ataque? ");
const defender = prompt("Qual é o seu nome defensor? ");
//Esse valor será alterado, por isso ele é let
let life = prompt("Quantos pontos de vida vc possui? ");
const pointDf = prompt("Quantos pontos de defesa vc possui? ");
const shield = confirm("Vc possui um escudo? ");
let damage
if (atack > pointDf && shield == false) {
    damage = atack - pointDf
} else if (atack > pointDf && shield == true) {
    damage = (atack - pointDf) / 2
} else {
    damage = 0
}
//calculo para ve quanto de vida ele ficou
life -= damage

alert('O ' + name + " tirou " + damage + " de dano do " + defender + ", ele ficou com " + life + " de vida");