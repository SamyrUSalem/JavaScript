function AddContact() {
    const section = document.getElementById("contact-list");
    const h3 = document.createElement("h3");
    h3.innerText = "Contato"

    const ul = document.createElement("ul");

    const liName = document.createElement("li");
    liName.innerText = "Nome:";
    const input = document.createElement("input");
    input.name = "name";
    input.type = "text";
    liName.appendChild(input);
    ul.appendChild(liName);
    //No momento de adicionar na hierarquia um elemento, eu criei ele q no caso foi um br para quebrar a linha
    ul.appendChild(document.createElement("br"))

    const liPhone = document.createElement("li");
    liPhone.innerText = "Telefone:";
    const inputPhone = document.createElement("input");
    inputPhone.name = "phone";
    inputPhone.type = "text";
    liPhone.appendChild(inputPhone);
    ul.appendChild(liPhone);
    ul.appendChild(document.createElement("br"))

    const liaddress = document.createElement("li");
    //O innerHTML permite colocar tags html, o text não, mas o innerHTMl não é muito seguro por conta disso
    liaddress.innerHTML = '<label for="testeLabel">Endereço: </label>'
    const inputAddress = document.createElement("input");
    inputAddress.name = "Address";
    inputAddress.type = "text";
    inputAddress.id = "testeLabel"
    liaddress.appendChild(inputAddress);
    ul.appendChild(liaddress);
    ul.appendChild(document.createElement("br"))

    //Essa propriedade append é parecida com o appendChild, mas o append pode adicionar mais de um elemento de uma vez
    section.append(h3, ul)
}

function RemoveContact() {
    const section = document.getElementById("contact-list");
    //Estou coletando todos os h3 da pagina
    const title = document.getElementsByTagName("h3");
    const contact = document.getElementsByTagName("ul");
    //Esse remove, removerá esse elemento de dentro da tag q esta sendo referenciada q no caso é o section. Ele esta removendo o title q são os h3, mas eu gostaria de remover apenas o último, então estou referenciando a posição q quero, igual um array, portanto será o comprimento total dele menos um,, pq começa a conta do 0 a posição"
    section.removeChild(title[title.length - 1]);
    section.removeChild(contact[contact.length - 1]);
}