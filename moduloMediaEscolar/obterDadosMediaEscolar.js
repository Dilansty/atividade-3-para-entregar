/***********************************************************************
  * Objetivo: Aplicação para obter os dados para cálculo de media escolar
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

const calculoMedia = require('./calcularMediaEscolar')




// função para receber o input dos alunos
function obterDados(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, primeiraNota, segundaNota, terceiraNota, quartaNota) {

    //import da biblioteca do readline
    const readline = require('readline')
    
    //Cria o objeto de entrada de dados
    const entradaDeDados = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    

    //entrada do nome do aluno
    entradaDeDados.question('Digite o nome do aluno: ', function (nomeEstudante) {
        let nomeAluno = nomeEstudante

        //entrada do nome do professor
        entradaDeDados.question('Digite o nome do tutor: ', function (nomeProfessor) {
            let nomeTutor = nomeProfessor

            //entrada do sexo do aluno
            entradaDeDados.question('Qual o sexo do aluno?: ', function (sexoEstudante) {
                let SexoAluno = sexoEstudante

                //entrada do sexo do professor
                entradaDeDados.question('Qual o sexo do professor?: ', function (sexoProfessor) {
                    let sexoTutor = sexoProfessor

                    //entrada do nome do curso
                    entradaDeDados.question('Digite qual é o curso: ', function (Curso) {
                        let nomeCurso = Curso

                        //entrada do nome da disciplina
                        entradaDeDados.question('Digite a altura do paciente: ', function (disciplina) {
                            let materia = disciplina

                            //entrada da 1° nota
                            entradaDeDados.question('Digite a altura do paciente: ', function (primeiraNota) {
                                let nota1 = parseFloat(primeiraNota.replace(',', '.'))


                                //entrada da 2° nota
                                entradaDeDados.question('Digite a altura do paciente: ', function (segundaNota) {
                                    let nota2 = parseFloat(segundaNota.replace(',', '.'))

                                    //entrada da 3° nota
                                    entradaDeDados.question('Digite a altura do paciente: ', function (terceiraNota) {
                                        let nota3 = parseFloat(terceiraNota.replace(',', '.'))

                                        //entrada da 4° nota
                                        entradaDeDados.question('Digite a altura do paciente: ', function (quartaNota) {
                                            let nota4 = parseFloat(quartaNota.replace(',', '.'))

                                             let mediaCalculada = calculoMedia.calcularImc(nota1, nota2, nota3, nota4)


                                        })//Fecha a entrada da entrada de dados da 4° nota

                                    })//Fecha a entrada da entrada de dados da 3° nota

                                })//Fecha a entrada da entrada de dados da 2° nota

                            })//Fecha a entrada da entrada de dados da 1° nota

                        })//Fecha a entrada da entrada de dados de qual disciplina

                    })//Fecha a entrada da entrada de dados de qual é o curso

                })//Fecha a entrada da entrada de dados do sexo do professor

            })//Fecha a entrada da entrada de dados do sexo do aluno

        })//Fecha a entrada da entrada de dados do nome do professor

    })//Fecha a entrada da entrada de dados do nome aluno

}//fim da função obterDados
