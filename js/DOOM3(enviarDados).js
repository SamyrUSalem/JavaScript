function register(x) {
    //Esse x é o dado q o parâmetro "this.parentNODE" q esta no html coletou, no momento seria a section q é o pai da tag button, esse children é para referenciar q quero um filho dessa tag e o username é o id da tag filho q quero, e o value é para pegar o valor desse elemento 
    const user = x.children.username.value;
    const password = x.children.password.value
    const passAgain = x.children.passwordConfirmation.value;

    //Colocando no console.log as chaves, e os nomes das variaveis q quero mostrar, ele mostrara no console em forma de objeto então as variáveis serão meio q as keys do obejto
    console.log({ user, password, passAgain })

    //Exemplo de uso
    if (password === passAgain) {
        alert("Vc foi cadastrado " + user + "!");
    } else {
        alert("As senhas não condizem!");
    }
}