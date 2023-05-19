let pacient = ["Ronaldo", "diogo", "Roger"]
let option = "";
let indicie = ""


while (option !== "3") {
    for (let i = 0; i < pacient.length; i++) {
        indicie += "\nPosição: " + (i + 1) + " = " + pacient[i];

    }
    option = prompt("Oq vc deseja? \n1. Inserir Paciente; \n2. Consultar Paciente; \n3. Sair; \nFila:" + indicie);
    indicie = ""
    switch (option) {
        case "1":
            let newP = prompt("Qual é o nome do paciente? ");
            pacient.push(newP);
            break;
        case "2":
            const removeP = pacient.shift()
            //Estou fazendo um verificador, para ver se a fila esta vazia ou não, colocando somente a variável no if o Js vai convertêla para um valor booleano, então se o removeP tiver vazio= null ou undefined, será falso mas se for uma string vai ser true
            if (removeP) {
                alert(removeP + " removido");
            } else {
                alert("N tem pacientes na fila");
            }

            break;
        case "3":
            break;
    }


}


