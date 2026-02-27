/***********************************************************************
  * Objetivo: Aplicação para executar os 5 exercocops juntos
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

//import das bibliotecas
let calculadoraImc = require('./moduloImc/obterDadosImc')
let calculadorDeMedia = require('./moduloMediaEscolar/obterDadosMediaEscolar')
let dadosApps

//import da biblioteca do readline
const readline = require('readline')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


//entrada da 4° nota
console.log('Bem vindo ao TUDÃO APP\nselecione o que você precisa\n(1) para calcular IMC\n(2) para calcular a média das notas')
entradaDeDados.question('Qual das opções acima você quer?: ', function (selecao) {
  let qualCurso = selecao

  if (qualCurso == '1') {
    dadosApps = calculadoraImc.obterDados()
  }
  else if (qualCurso == 2) {

    dadosApps = calculadorDeMedia.obterDados()
  }




})//Fecha a entrada da entrada de dados da 4° nota

module.exports={
  entradaDeDados
}