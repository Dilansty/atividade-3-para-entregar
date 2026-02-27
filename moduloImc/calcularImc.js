/***********************************************************************
  * Objetivo: Aplicação para realizar o calculo de IMC com os valores obtidos
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

//criando a função para calcular o imc e apresentar os resultados
function calcularImc(peso, altura, nome) {
    //declaração das variaveis utilizadas no calculo e resultados
    let pesoPaciente = peso
    let alturaConvertida = altura
    let nomePaciente = nome
    let resultadoImc
    
    //calculo do IMC
    resultadoImc = (pesoPaciente / (alturaConvertida * alturaConvertida))


    //Condicional de validação do valor e amostragem dos resultados
    if(resultadoImc < 18.5){
        console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed(2)} e está abaixo do peso`)
    }
    else if(resultadoImc >=18.5 && resultadoImc < 25 ){
        console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no peso ideal`)
    }
    else if(resultadoImc >= 25 && resultadoImc < 30 ){
        console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está acima do peso/com sobrepeso`)
    }
    else if(resultadoImc >= 30 && resultadoImc < 35 ){
        console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 1`)
    }
    else if(resultadoImc >= 35 && resultadoImc < 40 ){
        console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 2`)
    }
    else
    console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 3`)

}

//export da função
module.exports = {
    calcularImc
}