function lightTheme() {
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#f1f5f9"
}

//Essa função vai mudar a cor do texto e do fundo, dos elementos q estão no body
function darkTheme() {
    //Colocando o document + tag q deseja + style(aonde esta os estilos igual do css) + a propriedade(estilo) q quer, com isso é só colcoar a cor q deseja, devido a isso a cor de fundo e o texto irão mudar
    document.body.style.color = "#f1f5f9"
    document.body.style.backgroundColor = "#212529"
}

function switchTheme() {
    //O toggle ele alterna entre as classes, como o body no html ja foi iniciado com a class is-light, quando o botão for clicado ele irá remover ela e aplica a claa is-dhark, e vai ficar repetindo esse processo, alternado de uma classe para a outra
    document.body.classList.toggle("is-light")
    document.body.classList.toggle("is-dark")
}

document.getElementById("lightBtn").addEventListener("click", lightTheme);
document.getElementById("darkBtn").addEventListener("click", darkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);