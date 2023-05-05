let opcao = ""
let imoveisCadastrados = []
do {
    opcao = prompt("IMÓVEIS CADASTRADOS: " + imoveisCadastrados.length + "\n\n" + 
                   "Você deseja: \n1) Cadastrar novo imóvel: \n2) Mostrar imóveis cadastrados: \n3) Sair:")
    switch(opcao) {
        case "1":
            let informacoes = {
                nomeProprietario: prompt("Digite o nome do proprietário: "),
                quantQuartos: prompt("Digite a quantidade de quartos: "),
                quantBanheiros: prompt("Digite a quantidade de banheiros: "),
                garagem: prompt("Possui garagem? (Sim/Não)")
            }
            imoveisCadastrados.push(informacoes)
            break
        case "2":
            for (let i = 0; i < imoveisCadastrados.length; i++){
                alert(
                    "IMÓVEL " + (i+1) + ": \n\nProprietário: " + imoveisCadastrados[i].nomeProprietario +
                    "\n" + imoveisCadastrados[i].quantQuartos + " dormitórios." +
                    "\n" + imoveisCadastrados[i].quantBanheiros + " banheiros." +
                    "\n" + imoveisCadastrados[i].garagem + " possui garagem."
                    )
            }
            break
        case "3":
            alert("Você escolheu sair!")
            break
        default:
            alert("Escolha uma opção válida!")
            break
    }
    
} while (opcao !== "3");