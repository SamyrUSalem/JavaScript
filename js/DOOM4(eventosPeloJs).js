const button = document.getElementById("button");
const button2 = document.getElementById("register-button");


//esse parametro ev, ele se refere ao evento então ele irá trazer informações sobre o evento
function register(ev) {
    //Dessa maneira, estou pegando o evento, depois estou escolher o alvo q quero(target), q no caso seria a tag pai desse evento, como este event esta no button a tag pai seria a section
    const section = ev.currentTarget.parentNode;
    //Aqui estou usando a section, falando q quero uma tag filha dela e colocando o id dessa tag, após isso estou coletando o valor dela, parecido com oq foi feito no doc DOOM3, mas pelo Js
    const name = section.children.username.value;
    const password = section.children.password.value;
    const passConfirmation = section.children.passwordConfirmation.value;

    console.log({ name, password, passConfirmation });
}

//Essa é uma forma de adicionar eventos pelo Js, evitando ficar colocando várias eventos pelo html dessa maneira é mais organizado, abaixo eu coloco a propriedade para adiconar o evento e depois coloco evento q quero, no caso é o click q seria qunando o usuário clicar, em seguida coloco uma função anônima indicando oq quero q aconteça
button.addEventListener("click", function () {
    alert("Evento acionado ")
})

button2.addEventListener("click", register)


//Essa função esta removendo o evento q esta associado a esse botão, para fazer a remoção basta colocar a propriedade reomoveEventListener, depois colocar o evento q essa função esta fazendo no caso o Click e depois colocar a função q esta associada a ela q vc deseja remover, pq o mesmo elemento pode conter mais de uma função associada a ele, então é necessário saber qual função seria retirada
function remove() {
    button2.removeEventListener("click", register)
}

