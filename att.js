/*function boasVindas() {
    console.log("Bem-vindo ao Sistema escolar!");
}
boasVindas();

let curso = "Desenvolvimento de Sistemas";
let Instituicao = "Escola de Tecnologia";

function mostrarMensagem() {
    console.log("Curso: " + curso);
    console.log("Instituição: " + Instituicao);
}
mostrarMensagem();


let nome = "Carlos";
let nome2 = "Mariana";
let nome3 = "Pedro";

function saudarAlunos(nome, nome2, nome3) {
    console.log("Olá, " + nome + " Seja bem-vindo!");
    console.log("Olá, " + nome2 + " Seja bem-vinda!");
    console.log("Olá, " + nome3 + " Seja bem-vindo!");
}
saudarAlunos(nome, nome2, nome3);



/*let nome = "Ana";
let curso = "Curso";

function mostrarAluno(nome, curso) {
    console.log("Aluno: " + nome);
    console.log("Curso: " + curso);
}

mostrarAluno(nome, curso);*/

/*let nota1 = 80
let nota2 = 60

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

let mediaFinal = calcularMedia(nota1, nota2);
console.log("Média do aluno: " + mediaFinal);*/

/*function adicionarPontos(nota, pontosExtras) {
  const notaAtualizada = nota + pontosExtras;
  console.log("Nota atualizada: " + notaAtualizada);
}

adicionarPontos(65, 10);*/  

/*const prompt = require("prompt-sync")();
let media = Number(prompt("Digite a média do aluno: "));

function verificarAprovacao(media) {
    if (media >= 85) {
        console.log("Aprovado!");
    } else if(media >= 60) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}

verificarAprovacao(media);*/

/*const prompt = require("prompt-sync")();
let nota = Number(prompt("Digite a nota do aluno: "));
function classificarAluno(nota){
    if (nota >= 90) {
        console.log("Excelente");
    } else if ( nota >= 70){
        console.log("Otimo");
    }else if ( nota >=60){
        console.log("Bom");
    }else{
        console.log("inrregular");
    }
}
classificarAluno(nota);*/

/*const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número: "));
function calcularMensalidade(valor){
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    return valorFinal;
}
let valorFinal = calcularMensalidade(500);
console.log(valorFinal);*/

/*const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno: ");
let nota = Number(prompt("Digite a nota do aluno: "));
let nota2 = Number(prompt("Digite a segunda nota do aluno: "));

function calcularMedia(nota, nota2) {
  return (nota + nota2) / 2;
}

function avaliarAluno(nome, nota, nota2) {
    const media = calcularMedia(nota, nota2);
    let situacao;
    if (media >= 60) {
        situacao = "Aprovado";
    } else if (media >= 40) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    console.log("Aluno: " + nome);
    console.log("Média: " + media);
    console.log("Situação: " + situacao);
}
avaliarAluno(nome, nota, nota2);*/