const id = prompt("Qual é o seu nome? ");
const city = prompt("Vc ja visitou alguma cidade? ");
let cityName
let all = ""
let counter = 0;

while (city === "Sim" || city === "sim") {

    cityName = prompt("Em qual cidade vc foi? ");
    counter++
    all += "\n-" + cityName + ";";

    const city = prompt("Vc foi em mais alguma? ")

    if (city === "não" || city === "Não" || city === "nao") {
        break;
    }

}

alert("Ola " + id + ", então vc foi em " + counter + " cidades que foram: " + all);