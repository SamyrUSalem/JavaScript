const pc = { processador: "I5", placaMae: "Z390", ram: 8 }
//Um objeto n pode aparecer dessa forma no site, vai da meio q um erro
document.getElementById('teste').innerHTML = pc;

//È necessário fazer isso, usar o json para converter um objeto em texto, ai ele sera mostrado na tela
let objetoEscrito = JSON.stringify(pc);
document.getElementById('teste2').innerHTML = objetoEscrito;

//Essa propriedade converte texto em objeto 
let obj = JSON.parse(objetoEscrito);
console.log(obj.processador)

//Criando um porcurador de CEP
function cep() {
    //Pegando o valor do input
    let conteudo = document.getElementById('pesquisar').value;

    //Dessa maneira eu estou pegando as informações do site, esse xml é uma requisição, para liberar eu pegar os dados
    const site = new XMLHttpRequest();
    //Aqui seria oq eu vou fazer, no caso o get é para coletar os dados e o site q vai ser, eu vou colocar o conteudo da variavel nesse lugar para ele fazer a buscar referente ao cep q o usuario colocar
    site.open('GET', 'https://viacep.com.br/ws/' + conteudo + '/json/');
    site.send();

    //Oq eu vou fazer após carregar
    site.onload = function () {
        //Vou transformar o conteudo em obj, para pegar partes especificas, n tudo. Esse this.response, seria a resposta do site
        let obj = JSON.parse(this.responseText);
        let bairro = obj.bairro;
        let logradouro = obj.logradouro;
        let estado = obj.uf;
        //Estou printado os conteudo coletados do obj
        document.getElementById('teste3').innerHTML = "Logradouro: " + logradouro + "<br> Bairro: " + bairro + "<br> Estado: " + estado;
    }
}

