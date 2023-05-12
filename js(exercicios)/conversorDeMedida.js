let meters = prompt('Quanto é o valor em metros? para a realização da conversão');
const choice = prompt('Quais das opções a abaixo, vc deseja converter? \n1) mm \n2) cm \n3) dm \n4) dam \n5) hm \n6) km');

const numberChoice = parseFloat(choice);

switch (numberChoice) {
    case 1:
        meters *= 1000
        alert(meters);
        break;
    case 2:
        meters *= 100
        alert(meters);
        break;
    case 3:
        meters *= 10
        alert(meters);
        break;
    case 4:
        meters /= 10
        alert(meters);
        break;
    case 5:
        meters /= 100
        alert(meters);
        break;
    case 6:
        meters /= 1000
        alert(meters);
        break;
    default:
        alert('Opção inválida');
}

