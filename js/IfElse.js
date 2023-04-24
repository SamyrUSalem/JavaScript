function verificar() {
    let text = document.getElementById('teste').value;

    if (text == "" || text == null) {
        let p = document.getElementById('colocar');
        p.innerHTML = "Coloca algo aí";
        p.style.color = "red";
    } else {
        let p = document.getElementById('colocar');
        p.innerHTML = "Boa, vc sabe digitar";
        p.style.color = "green";
    }
}


function verificarCor() {
    let colo = document.getElementById('colorindo').value;
    //Essa função que ja vem no java script, vai converter as letras em minusculos, com isso, assim mesmo que no case esteja "azul", o usuário pode escrever "Azul" com o A maiusculo q o código será executado da mesma maneira
    colo = colo.toLowerCase();

    switch (colo) {

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;

        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "verde":
            document.body.style.backgroundColor = "green";
            break;

        case "cinza":
            document.body.style.backgroundColor = "gray";
            break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        case "rosa":
            document.body.style.backgroundColor = "pink";
            break

        case "marrom":
            document.body.style.backgroundColor = "brown";
            break;

        default:
            document.getElementById('algo').innerHTML = "Outra cor né"
            document.getElementById('algo').style.color = "blue"
    }

}


//essa função coleta o ano q estamos atualmente
var anoAtual = new Date().getFullYear();

//Dessa maneira os maiores valores vão estar encima
for (let i = anoAtual; i >= 1900; i--) {
    // O "+=" é para ele printar ou coletar tanto o valor q ja estava, como o valor q vai entrar
    document.getElementById('repetir').innerHTML += "<option value = '" + i + "'> " + i + "</option>";
}