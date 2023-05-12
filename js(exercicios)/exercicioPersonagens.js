const name = prompt("Qual é o seu nome? ");
const atack = prompt("Qual é o poder do seu ataque? ");
const defender = prompt("Qual é o seu nome defensor? ");
const life = prompt("Quantos pontos de vida vc possui? ");
const pointDf = prompt("Quantos pontos de defesa vc possui? ");
const shield = confirm("Vc possui um escudo? ");

if (atack > pointDf && shield == false) {
    let damage = atack - pointDf
    let atackLf = life - damage
    alert('O ' + name + " tirou " + damage + " de dano do " + defender + ", ele ficou com " + atackLf + " de vida");
} else if (atack > pointDf && shield == true) {
    let damage = (atack - pointDf) / 2
    let atackLf = life - damage
    alert('O ' + name + " tirou " + damage + " de dano do " + defender + ", ele ficou com " + atackLf + " de vida");
} else if (atack <= pointDf) {
    let damage = 0
    let atackLf = life - damage
    alert('O ' + name + " tirou " + damage + " de dano do " + defender + ", ele ficou com " + atackLf + " de vida");
}