let cards = []
let opt = "";
let content = "";



while (opt !== "3") {


    opt = prompt("\nCartas em jogo:" + " " + cards.length + "\nOq vc deseja? \n1. Inserir Carta; \n2. Puxar carta; \n3. Sair;");
    content = "";
    switch (opt) {
        case "1":
            let newC = prompt("Qual seria a carta para adicionar? ");
            cards.unshift(newC);
            break;
        case "2":
            const removeCard = cards.shift()
            if (removeCard) {
                alert(removeCard);
            } else {
                alert("N tem mais cartas")
            }

            break;
        case "3":
            break;
    }


}