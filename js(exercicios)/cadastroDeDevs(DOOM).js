//Essa seria uma forma de facilitar a criação de um input, inves de ficar usando várias creatElement era só utilizar uma função e quando quisesse usar um input, chamava essa function e colocava os parâmetros, como: createInputs("input", "input", "input", se n colocar ele vai usar o padrão q é o text e o placeholder também), poderia criar uma function para outros elementos, como o label.
function createInputs(id, value, name, type = "text", placeholder = "") {
    const input = document.createElement("input");
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input
}

function createLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}

const buttonForm = document.getElementById("buttonForm");
const form = document.getElementById("form");
let id = 0
const devs = []


buttonForm.addEventListener("click", function (ev) {
    const divList = document.getElementById("list");
    const divLine = document.createElement("div");
    let idLine = id;
    id++
    //È necessário colocar algum caractere nesse id, n somente a variável, para evitar futuros erros, por exemplo quando for buscar dentro desse id o valor de algum input. Como é feito na function la em baixo, q esta realizando o submit
    divLine.id = "row-" + idLine;
    divLine.className = "input-list"



    const labelName = createLabel("Noma da tech: ", idLine)
    const inputNameTech = createInputs("NameTech-" + idLine, null, "techName");

    const id1 = "radioLine-" + idLine + ".1"
    const radio1 = createInputs(id1, "0-2anos", "Time " + idLine, "radio")
    const labelRadio1 = createLabel("0-2anos", id1);

    const id2 = "radioLine-" + idLine + ".1"
    const radio2 = createInputs(id2, "3-4anos", "Time " + idLine, "radio")
    const labelRadio2 = createLabel("3-4anos", id2);

    const id3 = "radioLine-" + idLine + ".1"
    const radio3 = createInputs(id3, "+5anos", "Time " + idLine, "radio")
    const labelRadio3 = createLabel("+5anos", id3);


    const buttonRemove = document.createElement("button");
    buttonRemove.type = "button"
    buttonRemove.innerText = "Deletar"

    buttonRemove.addEventListener("click", function () {
        divList.removeChild(divLine);
    })


    divLine.append(labelName, inputNameTech, radio1, labelRadio1, radio2, labelRadio2, radio3, labelRadio3, buttonRemove)

    divList.appendChild(divLine);
})

form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const name = document.getElementById("name");
    const inputs = document.querySelectorAll(".input-list");

    let tech = []
    //Estou coletando os dados q estão dentro dos inputs
    inputs.forEach(function (div) {
        //estou buscando dentro da linha de acordo com o seu id, o input q tem o name = nameTech
        const nameTech = document.querySelector('#' + div.id + ' input[name="techName"]').value;
        //Estou buscando dentro da linha de inputs todos aqueles q são do tipo radio, somente aqueles q foram marcados pelo usuário
        const timeTech = document.querySelector('#' + div.id + ' input[type="radio"]:checked').value;
        tech.push({ Name: nameTech, Time: timeTech });
    })

    //Estou criando um objeto q possui um array, para ser enviado para a matriz dos devs
    const dev = { FullName: name.value, Technologies: tech };
    devs.push(dev);
    name.value = ""

    inputs.forEach(function (row) {
        row.remove()
    })

    console.log(devs)



})