const properties = [];
let option = "";
let counter = 1;
let tryy = ""
while (option !== "3") {
    option = prompt("Imóveis cadastrados: " + properties.length + "\nQuais das opções vc quer executar?" + "\n1. Adicionar um imóvel;" + "\n2. Ver os imóveis;" + "\n3. Sair;")

    switch (option) {
        case "1":
            //È importante inicializar a variável objeto aqui, para ela ir armazenando os valores pois quando estava fora, ela guaradava apenas o último valor enviado
            const home = {}

            home.owner = prompt("Qual é o nome do proprietáio? ");
            home.rooms = prompt("Quantos quartos seriam? ");
            home.bethrooms = prompt("Quantos banheiros seriam? ");
            home.storage = prompt("Possui garagem? ");
            //Outra maneira de fazer, contatenando o conteúdo do objeto dentro de uma variável
            // tryy += "\nCasa " + counter + "( Proprietário: " + home.owner + ", Quartos: " + home.rooms + ", Banheiros: " + home.bethrooms + ", Possui garagem: " + home.storage + ")\n";
            let verify = confirm("Vc quer enviar esse imóvel? " +
                "\nProprietário: " + home.owner + ";" +
                "\nQuartos: " + home.rooms + ";" +
                "\nBanheiro: " + home.bethrooms + ";" +
                "\nPossui garagem: " + home.storage)
            if (verify) {
                // properties.push(tryy);
                properties.push(home)
                alert("Enviado!");
                //Usanso esse contador, para distinguir melhor os imoveis
                // counter++
            } else {
                alert("Blz, voltando ao menu!")
            }

            break;
        case "2":
            for (let i = 0; i < properties.length; i++) {
                alert("Imóvel" + (i + 1) +
                    //Estou indo no array properties, na posição i q começa no 0, e indo no objeto q esta nessa posição e puxando a propriedade dele e mostrando na tela
                    "\nProprietário: " + properties[i].owner +
                    "\nQuartos: " + properties[i].rooms +
                    "\nBanheiros: " + properties[i].bethrooms +
                    "\nPossui garagem: " + properties[i].storage);
            }


            // alert(tryy);
            break;
        case "3":
            alert("Encerrando")
            break;
        default:
            alert("Opção inválida");
    }
}
