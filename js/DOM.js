//O DOM é usado para poder fazer com que o JS consiga manipular os elementos que estão dentro de uma linguagem de marcação, como o html

//O inner html esta sendo falado no documento variaveis-saidas,et...

function show() {
    //O document abaixo, busca o elemento que possui esse ID, q esta dentro das aspas.
    const Clist = document.getElementById("contact-list");
    console.log(Clist)
    //Esse document busca todos os elementos com a tag li
    const tag = document.getElementsByTagName("li");
    console.log(tag)
    //Esse dpcument busca os elementos que estão utilizando essa classe
    const Class = document.getElementsByClassName("contact-input");
    console.log(Class)
    //Esse document usano o querry, ele é mais especifico realmente só coleta aquilo que esta definido entre as aspas duplas, ele funciona como o css, tem q colocar a trilha até o elemento q vc quer, e para referenciar os id precisa usar a "#" e para referenciar as classes precisa usar o "." como o css e usar o sinal ">" para a trilhar funcionar
    const querry = document.querySelectorAll("#contact-list > li > input");
    console.log(querry)
    //Esse document, busca o elementro atráves do name, q seria um atributo normalmente utiliado nos input
    const name = document.getElementsByName("contact2");
    console.log(name)
    //ESse documente, é bem parecido com o querry anterior mas a diferença é q o querySelectorAll iria buscar todos os label que o documento tem nessa trilha abaixo, q no caso são 3. Mas o querrySelector ele busca somente o primeiro elemento, quando ele entrou nessa trilha e encontrou o primeiro label, ele ja parou e mostrou no console
    const querryOne = document.querySelector("#contact-list > li > label");
    console.log(querryOne)

}