let pesquisa = ["ola", "poise", "aquilo", "isso"]
//Essa função includes, faz uma pesquisa na matriz, e verifica se esse valor está dentro da matriz ou não
const encontrar = pesquisa.includes("poise");
console.log(encontrar);
//Essa função indexOF, pesquisa o valor e devolve quando é o índicie/posição dele, no caso é 0
const encontrando = pesquisa.indexOf("ola");
console.log(encontrando);
//Dessa maneira, eu estou pegando o última valor da matriz, quando eu coloco -1, ele vai até o final da matriz e vai pegando dessa maneira o -2 é o penúltimo e etc... n é necessário colocar até q ponto ele vai coletar, mas caso queira n tem problema, lembrando q se quiser colocar para ele parar em um valor específico tem q ficar esperto pq são valores negativos, então sempre vai ter q diminuir 1 igual os valores positivos, só q negativo com negativo soma, então para eu pegar os valores da posição -3 e -2, eu tive q colocar -3, -1 pq quando for diminuir o -1, vai ficar o -3, -2.
const cortar = pesquisa.slice(-3, -1)
console.log(cortar);

//Esse é um array bidimensional, seria um array dentro de outro array em cada posição tem um array, no caso a posição 0 é aquele primeiro array(Esse é u, array), e 1 é oq em seguida, e etc...
const bidimensional = [
    ["Esse é um ", "array"],
    ["Bidimensional", "legal"],
    [//Esse é meio q um tridimensional, é um array dentro de um array e dentro de outro array
        [1, "Esse meio que é um", "Tridimensional"],
        ["Testando", "legal"]
    ]
]

//Caso eu queira chamar um valor especíico de um array bidimensional, é só fazer uma trilha como o exemplo abaixo, primeiro eu coloco a posição q quero do primeiro array, seria a posição 2 q é aquele q contém outros 2 array(tridimensional), depois eu coloco a posição 0 q seria o primeiro array q esta dentro dele(1,"esse meio q é um", "Tridimensional") e  depois eu coloco a posição 2, para pegar somente o "tridimensional", então é meio q uma trilha q a gente vai cavando de array por array até chegar nos dados q queremos
console.log(bidimensional[2][0][2])

const matriz = [
    ["item 1, col1", "item 1, col2", "item 1 col3", "item 1, col4"],
    ["item 2, col1", "item 2, col2", "item 2 col3", "item 2, col4"],
    ["item 3, col1", "item 3, col2", "item 3 col3", "item 3, col4"]
]
//Abaixo é uma forma de iterar(caminhar dentro dela, uma forma de mostrar na tela oq tem dentro dela) por dentro da matriz q esta dentro da matriz, então é uma maneira de iterar por um array bidimensional

//Esse i vai esta pegando as linhas dentro do array matriz
for (let i = 0; i < matriz.length; i++) {
    //Esse for vai ficar percorrendo dentro do array q esta dentro do array Matriz, o i vai ficar pegando as linhas q estão dentro do array matriz, enquanto o j vai ficar pegando os conteudos(colunas) q estão dentro de cada matriz, então o i vai começar no 0, então vai ser a primeira linha do array matriz(item1, col1, etc), ai vai entrar no for do j q vai começar no 0 também e vai ficar repetindo enquanto for menor q o tamanho do array matriz na posição i, q no caso vai começar na posição 0, então enquanto ele for menor q o comprimento da matriz q esta dentro da posição 0, ele vai ficar repetindo e a variável collect vai esta coletando esses valores, vai coletar os valores q no momento estão no array matriz na posição i q é 0, e o j q esta se repetindo dentro do array q se encontra na posição, então ele esta percorrendo tudo q esta dentro desse array, quando ele passar do comprimento desse array, ele vai parar e depois o i de 0 vai pra 1, e vai repetir esse mesmo processo na linha 1 do array matriz
    for (let j = 0; j < matriz[i].length; j++) {
        const collect = matriz[i][j];
        console.log("Posição: " + "matriz" + "[" + i + "]" + "[" + j + "]" + " " + collect);
    }
}




