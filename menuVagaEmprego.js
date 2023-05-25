function menu (){
        return prompt(
            "BEM VINDO AO ZECK JOBS" +
            "\nO que deseja fazer?" +
            "\n\n1) Lista de vagas disponíveis:" +
            "\n2) Criar uma nova vaga:" +
            "\n3) Visualizar uma vaga específica:" +
            "\n4) Inscrever-se em uma vaga:" +
            "\n5) Excluir uma vaga:" +
            "\n6) Sair:"
            )
}

function listaVagas (){
    if (vagasAbertas.length > 0){
        for (let i = 0; i < vagasAbertas.length; i++) {
            alert(
                "Índice da vaga: " + i +
                "\nNome da vaga: " + vagasAbertas[i].nome +
                "\nQuantidade de inscritos: " + vagasAbertas[i].numCandidatos);
        }
    } else {
        alert("Não há vagas disponíveis!")
    }
    
}

let vagasAbertas = []

function novaVaga (){
    let vagas = {}
    vagas.nome = prompt("Qual o cargo da vaga que será aberta?")
    vagas.descricao = prompt("Descreva as atividades e atribuições da vaga:")
    vagas.dataLimite = prompt("Qual a data limite para se candidatar:")
    vagas.numCandidatos = 0
    vagas.nomeCandidatos = []

    const confirma = confirm(
        "Deseja salvar esta vaga?" +
        "\n\nNome da vaga: " + vagas.nome +
        "\nDescrição da vaga: " + vagas.descricao +
        "\nData limite para se inscrever: " + vagas.dataLimite
    )

    if (confirma){
        vagasAbertas.push(vagas)
        alert("Vaga salva com sucesso!")
    } else{
        alert("A vaga não foi salva!")
    }
}

function visualizarVaga(){
    indice = parseFloat(prompt("Digite o índice da vaga que deseja visualizar:"))
    if (indice < vagasAbertas.length){
        alert(
            "INFORMAÇÕES DA VAGA" +
            "\n\nÍndice da vaga: " + indice +
            "\nNome da vaga: " + vagasAbertas[indice].nome +
            "\nDescrição da vaga: " + vagasAbertas[indice].descricao +
            "\nData limite para se inscrever: " + vagasAbertas[indice].dataLimite +
            "\nQuantidade de candidatos: " + vagasAbertas[indice].numCandidatos +
            "\nNomes dos candidatos: " + vagasAbertas[indice].nomeCandidatos
            )
    } else {
        alert("Não há vagas com o índice informado!")
    }
}


function inscreverCandidato(){
    let candidato = prompt("Qual o nome do candidato?")
    let indice = parseFloat(prompt("Digite o índice da vaga que deseja se candidatar:"))

    if (indice < vagasAbertas.length){
        const confirma = confirm(
            "Deseja inscrever este candidato?" +
            "\n\nNome: " + candidato +
            "\nVaga: " + indice + " - " + vagasAbertas[indice].nome
        )
    
        if (confirma){
            vagasAbertas[indice].numCandidatos ++
            vagasAbertas[indice].nomeCandidatos.push(candidato)
            alert("Candidato inscrito com sucesso!")
        } else {
            alert ("Candidato não foi inscrito!")
        }
    } else {
        alert("Não existe vaga com o índice informado!")
    }
}

function excluirVaga (){
    let indice = parseFloat(prompt("Digite o índice da vaga que deseja excluir:"))

    if (indice < vagasAbertas.length){
        const confirma = confirm(
            "Você realmente deseja excluir esta vaga?" +
            "\n\nÍndice da vaga: " + indice +
            "\nNome da vaga: " + vagasAbertas[indice].nome +
            "\nDescrição da vaga: " + vagasAbertas[indice].descricao +
            "\nData limite para se inscrever: " + vagasAbertas[indice].dataLimite +
            "\nQuantidade de candidatos: " + vagasAbertas[indice].numCandidatos +
            "\nNomes dos candidatos: " + vagasAbertas[indice].nomeCandidatos
        )
    
        if (confirma){
            vagasAbertas.splice(indice, 1)
            alert("Vaga excluída com sucesso!")
        } else {
            alert("Vaga não foi excluída!")
        }
    } else {
        alert("Não há vaga com o índice informado!")
    }
}

function executar (){
    let opcao = ""

    do {
        opcao = menu()

        switch(opcao){
            case "1":
                listaVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Escolha uma opção válida!")
                break
        }
    } while (opcao !== "6");
}

executar()