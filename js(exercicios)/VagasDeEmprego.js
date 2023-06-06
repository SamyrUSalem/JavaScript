
const vaga = []
function vagas() {
    const VagasTexto = vaga.reduce(function (textoTotal, vaga, ind) {
        textoTotal += ind + ". ";
        textoTotal += vaga.nome;
        textoTotal += "( " + vaga.candidato.length + " candidatos" + ")\n"
        return textoTotal
    }, "");

    alert(VagasTexto);
}

function NewVacancy() {
    const nome = prompt("Qual será o nome da vaga? ");
    const Description = prompt("Qual será a descrição da vaga? ");
    const DateLimit = prompt("Qual será a data limite dessa vaga? ");
    const confirma = confirm("Você deseja salvar essa vaga? ");

    if (confirma) {
        //Se ele confirmar, será criado esse objeto abaixo, esse objeto foi criado de modo abreviado, pq eu utilizei o mesmo nome da variável para criar a chave, então não é necessário fazer assim = NameVancancy: NameVacancy
        let NewVacancy = { nome, Description, DateLimit, candidato: [] };
        vaga.push(NewVacancy);
        alert("Vaga criada com o sucesso")

    }
}

function ShowVacancy() {
    let Id = prompt("Qual é o índice que da vaga q você deseja? ");

    //Esse if irá verificar se existe uma vaga com esse indicie
    if (Id >= vaga.length || Id < 0) {
        alert("Indicie inválido");
        //Se ele cair no if, ele irá encerrar por conta desse return
        return
    }

    const vagas = vaga[Id];

    let TotalVacancy = vagas.candidato.reduce(function (textoGeral, candidato) {
        //Dessa maneira, ele vai pegar todos os candidatos que tem nessa vaga
        return textoGeral + "\n- " + candidato
    }, "")

    alert("Vaga Número" + Id + "\nNome: " + vagas.nome + "\nDescrição: " + vagas.Description + "\nData limite: " + vagas.DateLimit + "\nQuantidade de candidatos: " + vagas.candidato.length + "\nCandidatos: " + TotalVacancy)
}

function RegisterUser() {
    const NameUser = prompt("Qual serai o nome do usuário? ");
    const ind = prompt("Qual seria o índicie da vaga que deseja? ");
    const vacancy = vaga[ind];
    const conf = confirm("Deseja registrar o usuário " + NameUser + " ?");

    if (conf) {
        vacancy.candidato.push(NameUser);
        alert("Candidato registrado!");
    }
}

function DeleteVacancy() {
    const i = prompt("Qual seria o índice da vaga que você deseja deletar? ");
    const Vac = vaga[i];

    let Confir = confirm("Gostaria de apagar a vaga mesmo?");

    if (Confir) {
        //Essa é a propriedade splice, ela pode tanto subistituir como apagar dados em uma posição específica dentro do array, ja foi falado sobre ele em outro documento
        vaga.splice(i, 1)
        alert("Vaga deletada")
    }
}

function Menu() {
    let opt = ""
    opt = prompt("Qual seria a opção que deseja? \n1. Listar vagas disponíveis; \n2. Criar uma vaga; \n3. Vizualizar uma vaga; \n4. Inscrever um candidato em uma vaga; \n5. Excluir uma vaga; \n6. Sair.")

    return opt
}

function Executando() {
    let opcao = ""
    while (opcao !== "6") {
        opcao = Menu();

        switch (opcao) {
            case "1":
                vagas();
                break;
            case "2":
                NewVacancy();
                break;
            case "3":
                ShowVacancy()
                break;
            case "4":
                RegisterUser();
                break;
            case "5":
                DeleteVacancy();
                break;
            case "6":
                alert("Saindo...");
                break
            default:
                alert("Opção inválida");
        }
    }
}

Executando()