let menu;
let money;
let choice
let math

do {
    menu = prompt("Quais das opções a seguir vc gostaria de executar? \n1.Viajar; \n2.Passear; \n3.Batalhar; \n4.Consertar; \n5.Encerrar...");
    switch (menu) {
        case "1":
            alert("Vc escolheu viajar");
            break;
        case "2":
            alert("Vc escolheu Passear");
            break;
        case "3":
            alert("Vc escolheu Batalhar");
            break;
        case "4":
            alert("Vc escolheu Consertar");
            break;
        case "5":
            alert("Encerrando...");
            break;
        default:
            alert("Tente novamente!");
    }
} while (menu !== "5")

//Outro modo de fazer
/*do {
    menu = prompt("Quais das opções a seguir vc gostaria de executar? \n1.Viajar; \n2.Passear; \n3.Batalhar; \n4.Consertar; \n5.Encerrar...");
    if (menu === "1") {
        alert("Vc escolheu Viajar");
    } else if (menu === "2") {
        alert("Vc escolheu passear");
    } else if (menu === "3") {
        alert("Vc escolheu Batalhar");
    } else if (menu === "4") {
        alert("Vc escolheu Consertar");
    } else if (menu == "5") {
        alert("Encerrando o sistema");
        break;
    }
} while (menu !== "5")*/

money = prompt("Vc tem quanto de dinheiro? ")
money = parseFloat(money);
do {
    choice = prompt("Vc possui " + money + " reais, oq vc deseja fazer? \n1.Adicionar; \n2.Remover; \n3.Sair...")
    switch (choice) {
        case "1":
            money += parseFloat(prompt("Quanto vc deseja adicionar? "));
            break;
        case "2":
            money -= prompt("Quanto vc deseja remover? ");
            break;
    }

} while (choice !== "3")









//Outra maneira de fazer
/*let intMoney = parseFloat(money);
let intMath
do {
    choice = prompt("Vc possui " + intMoney + " reais, oq vc deseja fazer? \n1.Adicionar; \n2.Remover; \n3.Sair...")
    if (choice === "1") {
        math = prompt("Quanto vc deseja adicionar? ")
        intMath = parseFloat(math)
        intMoney += intMath
    } else if (choice === "2") {
        math = prompt("Quanto vc deseja retirar?")
        intMath = parseFloat(math)
        intMoney -= intMath
    }
} while (choice !== "3")*/