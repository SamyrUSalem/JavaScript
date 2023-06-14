const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
    //Estou alterando o valor do input, com a tributo .value
    input.value = "Mudando";
    //O atributo .value, coletar o valor em tempo real, assim q o usuário mudar oq esta no input ele se atualiza
    console.log(input.value)
    //o getAttribute coleta o valor q foi predefinido no input(dentro do html), q no caso abaixo é o "Inical"(foi retirado do html)
    console.log(input.getAttribute("value"))
})


document.getElementById("type").addEventListener("click", function () {
    //Essa seria uma forma de mudar o atributo type, usando uma condicional ternaria, se o input.type for diferente de date, ele irá virar do tipo date, caso ele seja igual virará do tipo text
    // input.type = input.type !== "date" ? "date" : "text";

    //Essa seria outra forma, o setAttribute irá fazer com q o atributo type vire do tipo radio, mas ele n vai ficar alternando como o anterior
    input.setAttribute("type", "radio")
})

document.getElementById("placeholder").addEventListener("click", function () {
    //Com isso, estou acrescentando um placeholder
    input.placeholder = "Digite..."
})

document.getElementById("disable").addEventListener("click", function () {
    //Eu estou dizendo q quero q o atributo disabeled, seja o contrario do valor q é agora, esse atributo desativa o input então normalmente ele vem com o valor true, dizendo q o input esta liberado mas dessa maneria com a "!" estou negando(fazendo ele virar o seu oposto) esse valor, devido a isso ele irá ser false e bloqueará o input
    input.setAttribute("disabled", !input.disabled)
})

document.getElementById("data").addEventListener("click", function () {
    //A prpiedade dataset busca todos os data do html, quando a utilizo + o outro nome q esta acompanhando ela q no caso é o something, consigo coletar o valor da mesma, como abaixo
    const data = input.dataset.something;
    console.log(data)

    //Dessa maneira, estou alterando o valor q esta nessa data
    const dataAlterada = input.dataset.something = "alterando valor"

    console.log(dataAlterada)

    //Dessa maneira, estou coletando o valor de uma data, com o nome maior a anterior era data-something, mas caso tenha mais um nome como caso a baixo q seria data-test-again, teria q referenciar ela da mesma forma do exemplo abaico, par mudar o valor seria iguao o caso acima
    const otherTest = input.dataset.testAgain
    console.log(otherTest)
})