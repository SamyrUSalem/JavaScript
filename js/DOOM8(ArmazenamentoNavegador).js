document.getElementById("sessionBtn").addEventListener("click", function () {
    const input = document.getElementById("session");
    //O sessionStorage vai salvar as informações do input no navegador(para encontrar, é só ir no console nas setas q tem acima e depois em aplicações), assim mesmo q abra várias abas esses dados continuaram salvos, ou se eu atualizar a página ainda continuaram salvos.Estou usando setItem  para acrescentar algum valor nele, o mesmo funciona como um objetoco, primeiro indico a chave dele e depois o dado q quero armazenar
    sessionStorage.setItem("Something", input.value)
    input.value = ""
})

document.getElementById("readSesssion").addEventListener("click", function () {
    //Estou usando o getItem para ler o valor q esta salvo na cha Something e esse value foi salvo na variável info
    const info = sessionStorage.getItem("Something");
    alert("O dado salvo foi: " + info)
})

document.getElementById("localBtn").addEventListener("click", function () {
    const input = document.getElementById("local");
    //O localStorage é bem pareciso com sessionStorage em relação as funções e armazenar no navegador, só q quando fecha a aba ou onavegador as informações salvvas no Session são perdidas, só q no local não, assim mesmo q feche ainda vai esta la, ah não ser q sejam apagadas pelo sistema ou usuário
    localStorage.setItem("Test", input.value)
    input.value = ""
})

document.getElementById("readLocal").addEventListener("click", function () {
    const info = localStorage.getItem("Test");
    alert("O dado salvo foi: " + info);
})

document.getElementById("cookieBtn").addEventListener("click", function () {
    const input = document.getElementById('cookie')
    //Esse é o modo de criar/armazenar um cookie, primeiro será criado uma string para o value, precisa ser feito dessa maneira(o value é a chave, pode colocar outro nome caso queira) e tem q ter o ponto e vírgula
    const cookie = 'info=' + input.value + ';'
    //Depois será adiocionada a data q esse cookie será apagado
    const expiration = 'expires=' + new Date(2023, 10, 9) + ';'
    //E terá q colocar o caminho para encontrar o cookie, no caso a "/" quer dizer que ele estará no começo do site
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ""
})
document.getElementById("cookie2Btn").addEventListener("click", function () {
    const input = document.getElementById("cookie2");
    //Estou armazenando mais cookies, só q em chaves diferentes
    const cookie = 'testeAgain=' + input.value + ';'
    const expiration = "expires=" + new Date(2023, 17, 6) + ";"
    const path = "path=/;"
    document.cookie = cookie + expiration + path;
    input.value = ""
})