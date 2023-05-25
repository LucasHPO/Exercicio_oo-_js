//Objeto Aluno 
class Aluno {
    constructor(nomeDoAluno, notaDoAluno){
        this.aluno = nomeDoAluno;
        this.nota = notaDoAluno;
    }
    
}

//Criando os alunos e o array com todos alunos 
const lucas = new Aluno ("Lucas", 7);
const julia = new Aluno ("Julia", 6);
const luiz = new Aluno ("Luiz", 5);
const camila = new Aluno ("Camila", 4);
const leticia = new Aluno ("Leticia", 10);

const alunos = [lucas,julia,luiz,camila,leticia];

//Função para verificar os alunos que foram aprovados 
const funcaoAlunosAprovado = alunos.filter(function(alunos){
    return alunos.nota >= 6;
});

console.log(funcaoAlunosAprovado);