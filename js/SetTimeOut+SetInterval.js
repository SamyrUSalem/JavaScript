function ativando() {
    //O setTimeOut executa uma fiunção depois de um certo tempo determinado, no caso vc coloca o setTimeOu(função q vc quer junto com oq ela deve fazer, ai é so colocar o tempo q vc quer q espere para ser executada, é em milisegunod, no caso eu coloquei 3000, q seria 3 segundos), essa função é executada apenas uma vez
    document.getElementById('teste').innerHTML = "É AGORA!!"
    //Essa variável tempo é uma global, eu coloquei ela para coletar o timeset pq ela pegaria todo esse escopo q foi feito com ele, se ela tivesse o var,let,const ou algo assim, n conseguiria
    tempo = setTimeout(function () {
        document.getElementById('teste').innerHTML = "Iniciei, depois desses 3 segundos";
    }, 3000);
}

function parando() {
    //Essa função clear faz parar a contagem do setTime
    clearTimeout(tempo);
    document.getElementById('teste').innerHTML = "PAREI!";
}

function ativandoInter() {
    //O interval tem a mesma estrutura do timeout, SetInterval(função com as intruções q deseja executar, tempo em milisegiundos), mas no Interval, ele executa várias vezes, o tempo q será definido, é apra saber em quanto tempo a função será executada, nesse caso esta 1000 milisegundos, então a cada 1 segundo essa função estara executando
    tempo2 = setInterval(function () {
        //dessa maneira, essa varialvel esta coletando oq esta escrito no item, com esse id
        var calculando = document.getElementById('teste2').innerHTML;
        //A propriedade parseInt, converte texto em numero
        var somando = parseInt(calculando) - 1;
        //Se o numero for menor q um, sera exibido essa mensagem e contador vai parar de contar, com o intuito de evitar os nuemros negativos
        if (somando < 1) {
            document.getElementById('teste2').innerHTML = "Acabou";
            parandoInter();
            //Se ele n for menor q 1, ele continuara mostrando os valores q esta na variavel
        } else {
            document.getElementById('teste2').innerHTML = somando;
        }
    }, 1000);
}

function parandoInter() {
    //Essa  propriedade ira pausar a contagem do itnerval
    clearInterval(tempo2);
}