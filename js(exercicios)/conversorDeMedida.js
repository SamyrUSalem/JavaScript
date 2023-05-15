let meters = prompt('Quanto é o valor em metros? para a realização da conversão');
const choice = prompt('Quais das opções a abaixo, vc deseja converter? \n1) mm \n2) cm \n3) dm \n4) dam \n5) hm \n6) km');

switch (choice) {
    case "1":
        meters *= 1000
        alert(meters + "mm");
        break;
    case "2":
        meters *= 100
        alert(meters + "cm");
        break;
    case "3":
        meters *= 10
        alert(meters + "dm");
        break;
    case "4":
        meters /= 10
        alert(meters + "dam");
        break;
    case "5":
        meters /= 100
        alert(meters + "hm");
        break;
    case "6":
        meters /= 1000
        alert(meters + "km");
        break;
    default:
        alert('Opção inválida');
}

