function Teste() {
    const ul = document.getElementById("ulTeste");

    //Esse document irá criar um elemento html, no caso será o "li"
    const li = document.createElement("li");
    //Essa é a propriedade q quero q esse elemento tenha, no caso ele vai possuir uma classe e terá um texto
    li.classList = "list-test"
    li.innerText = "Ao lado terá um input"

    const input = document.createElement('input');
    //Essas são as propriedades que quero q esse input tenha, tipo um html mesmo
    input.name = "input";
    input.type = "Text"

    //Dessa maneira, estou falando q o input será filho do li, então ele estara dentro do elemento Li
    li.appendChild(input)
    //Agora estou falando que o li será filho do ul, então ele estará dentro do ul
    ul.appendChild(li)
}