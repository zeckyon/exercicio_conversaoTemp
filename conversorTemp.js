let opcao = ""
let tempCelsius = 0
let tempFarenheit = 0
let tempKelvin = 0


do {
    opcao = prompt("Qual conversão deseja fazer?\n\n1: Celsius para Farenheit\n\n2: Celsius para Kelvin\n\n3: Farenheit para Celsius\n\n4: Farenheit para Kelvin\n\n5: Kelvin para Celsius\n\n6: Kelvin para Farenheit\n\n7: Sair")
    switch (opcao){
        case "1":
            tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius que deseja converter para Farenheit:"))
            tempFarenheit = (tempCelsius * 9/5) + 32
            alert(tempCelsius + "°C são " + tempFarenheit + "°F.")
            break 
        case "2":
            tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius que deseja converter para Kelvin:"))
            tempKelvin =  tempCelsius + 273,15 
            alert(tempCelsius + "°C são " + tempKelvin + "°K.")
            break
        case "3":
            tempFarenheit =  parseFloat(prompt("Digite a temperatura em Farenheit que deseja converter para Celsius:"))
            tempCelsius = (tempFarenheit - 32) * 5/9
            alert(tempFarenheit + "°F são " + tempCelsius + "°C.")
            break
        case "4":
            tempFarenheit =  parseFloat(prompt("Digite a temperatura em Farenheit que deseja converter para Kelvin:"))
            tempKelvin = (tempFarenheit - 32) * 5/9 + 273,15
            alert(tempFarenheit + "°F são " + tempKelvin + "°K.")
            break
        case "5":
            tempKelvin = parseFloat(prompt("Digite a temperatura em Kelvin que deseja converter para Celsius:"))
            tempCelsius = tempKelvin - 273,15 
            alert(tempKelvin + "°K são " + tempCelsius + "°C.")
            break
        case "6":
            tempKelvin = parseFloat(prompt("Digite a temperatura em Kelvin que deseja converter para Farenheit:"))
            tempFarenheit = (tempKelvin - 273,15) * 9/5 + 32
            alert(tempKelvin + "°K são " + tempFarenheit + "°F.")
            break
        case "7":
            alert("Encerrando.")
            break
        default:
            alert("Escolha uma opção válida!")
            break
    }
} while (opcao !== "7");