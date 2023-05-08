let opcao = ""
let base = 0
let altura = 0
let lado = 0


function areaTriangulo(base, altura){
    let area = base * altura / 2
    return area
}

function areaRetangulo(base, altura){
    let area = base * altura
    return area
}

function areaQuadrado(lado){
    let area = lado * lado
    return area
}

function areaTrapezio(baseMaior, baseMenor, altura){
    let area = (baseMaior + baseMenor) * altura / 2
    return area
}

function areaCirculo(raio){
    let area = 3.14 * Math.pow(raio, 2)
    return area
}
do {
    opcao = prompt(
        "CALCULADORA GEOMÉTRICA\n\nDigite a fórmula que deseja calcular:" +
        "\n\n1)Área do triângulo" +
        "\n2)Área do retângulo" +
        "\n3)Área do quadrado" +
        "\n4)Área do trapézio" +
        "\n5)Área do círculo" +
        "\n6)Sair"
    )

    switch(opcao){
        case "1":
            base = parseFloat(prompt("Digite a base do triãngulo:"))
            altura = parseFloat(prompt("Digite a altura do triângulo:"))
            area = areaTriangulo(base, altura)
            alert("A área do triângulo é " + area + ".")
            break
        case "2":
            base = parseFloat(prompt("Digite a base do retângulo:"))
            altura = parseFloat(prompt("Digite a altura do retângulo:"))
            area = areaRetangulo(base, altura)
            alert("A área do retângulo é " + area + ".")
            break
        case "3":
            lado = parseFloat(prompt("Digite o lado do quadrado:"))
            area = areaQuadrado(lado)
            alert("A área do quadrado é " + area + ".")
            break
        case "4":
            baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"))
            baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"))
            altura = parseFloat(prompt("Digite a altura do trapézio:"))
            area = areaTrapezio(baseMaior, baseMenor, altura)
            alert("A área do trapézio é " + area + ".")
            break
        case "5":
            let raio = parseFloat(prompt("Digite o raio do círculo:"))
            area = areaCirculo(raio)
            alert("A área do círculo é " + area + ".")
            break
        case "6":
            alert("Você escolheu sair!")
            break
        default:
            alert("Escolha uma opção válida!")
            break
    }
} while (opcao !== "6");