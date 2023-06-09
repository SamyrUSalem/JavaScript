function AddPlayer() {
    confirm("Deseja escalar esse jogador? ")

    const h3 = document.createElement("h3");
    h3.innerText = "Jogador"

    const IdPosition = document.getElementById("inputPosition");
    let valuePosition = IdPosition.value
    const IdName = document.getElementById("inputName");
    let ValueName = IdName.value
    const IdNumber = document.getElementById("inputNumber");
    let ValueNumber = IdNumber.value;

    const section = document.getElementById("section");

    const ul = document.createElement("ul");
    const Player = document.createElement("li");
    Player.innerText = "Posição: " + valuePosition + "\n Nome: " + ValueName + "\nNúmero: " + ValueNumber;
    Player.id = "Número: " + ValueNumber;

    ul.appendChild(Player);

    section.append(h3, ul)

    IdPosition.value = ""
    IdName.value = ""
    IdNumber.value = ""
}

function RemovePlayer() {
    const numberRemove = document.getElementById("inputRemove").value
    //Dessa maaneira, estou coletando pelo id, o player q quero remover
    const PlayerRemove = document.getElementById("Número: " + numberRemove);

    const confirmation = confirm("Vc deseja apagar esse jogador?" + "\n" + PlayerRemove.innerText);

    if (confirmation) {
        //Com isso, ele removerá esse nó da hierarquia
        PlayerRemove.remove()
        document.getElementById("inputRemove").value = ""
    } else {
        alert("Jogador não excluído!")
    }
}
































