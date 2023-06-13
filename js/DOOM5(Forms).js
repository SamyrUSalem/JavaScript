const form = document.getElementById("orderForm");

//Estpu colando um evento de submit no formulário
form.addEventListener("submit", function (ev) {
    //Essa função irá prevenir os eventos padrões do formulário, q no caso seria ele tentar acessar o atributo action, metohd no forms, mas esses atributos não estão referenciados lá por conta disso o mesmo esta atualiazndo a página e apagandos os dados, entção essa função irá prevenir isso  
    ev.preventDefault();
    //Estou coletando o valor q esta no input name, usando o query, estou definindo q quero o input q tem o atributo name="name" e quero o valor dele
    const name = document.querySelector("input[name='name']").value;
    const address = document.querySelector("input[name='address']").value;
    const breadType = document.querySelector("select[name='breadType']").value;
    const main = document.querySelector("input[name = 'main']").value;

    //Essa variavel irá contatenar todos os valores do checkbox
    let check = '';

    //Usando o querrySelectorAll, estou pegando todos os inputs que tem o name saldad, mas eu quero apenas aqueles q o usuário marcou, então utilizo os ":checked" para referenciar apenas os quais foram marcados, após isso uso a propriedade forEach ela irá iterar/executar essa função para todos os itens que foram selecionados.
    document.querySelectorAll("input[name='salad']:checked").forEach(function (x) {
        check += "\n - " + x.value
    })

    console.log(name, address, breadType, main, check)
})