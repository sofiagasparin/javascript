
let opcaoEscolhida = 0;

do {
    opcaoEscolhida = parseInt(prompt(`
        ===== MENU DE EXERCICIOS =====

       Digite o número das opçoes:

       0-Sair
       1-Login
       2-IMC
       3-Par ou impar
       4-Média do aluno
       5-Número crescente

       ================================
    `))

    switch (opcaoEscolhida) {
        case 0:
            alert("Obrigado(a), volte sempre ")
            break;
        case 1:
            login()
            break;
        case 2:
            calculoIMC()
            break;
        case 3:
            verificarNumeroImparOuPar()
            break;
        case 4:
            calculoMediaAluno()
            break;
        case 5:
            verificarSequenciaNumeros()
            break;

        default:
            alert("Opçao invalida! Escolha uma opçao que exista no nosso sistema");
            break;
    }
}
while (opcaoEscolhida != 0);

function login() {
    let login = prompt("Digite seu login")
    let senha = prompt("Digite sua senha")

    if (login == "admin" && senha == "senha123") {
        console.log("login bem sucedido!")
    }

    else {
        console.log("Você nao tem permissao de acesso")
    }
}

function calculoIMC() {
    let peso = parseFloat(prompt("Informe seu peso (em Kg)"))
    let altura = parseFloat(prompt("Informe sua altura (em metros)"))

    let imc = peso / (altura * altura)

    console.log("Seu IMC e: " + imc)

    if (imc < 18.5) {
        console.log("abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("peso normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log("sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        console.log("obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        console.log("obesidade grau 2")
    }
    else {
        console.log("obesidade grau 3")
    }
}

function verificarNumeroImparOuPar() {
    let numero = parseInt(prompt("informe um numero inteiro: "))


    if (numero % 2 == 0) {
        console.log("O numero e par")
    } else {
        console.log("O numero e impar")
    }
}

function calculoMediaAluno() {

    let nota1 = Number.parseFloat(prompt("Digite sua primeira nota"))

    let nota2 = Number.parseFloat(prompt("Digite sua segunda nota"))

    let nota3 = Number.parseFloat(prompt("Digite sua terceira nota"))

    let nota4 = Number.parseFloat(prompt("Digite sua quarta nota"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    console.log("A media do aluno e: " + media)

    if (media >= 7) {
        console.log("APROVADO")
    }
    else if (media < 7 && media >= 5) {
        console.log("Recuperaçao")
    }
    else {
        console.log("Reprovado")
    }
}

function verificarSequenciaNumeros() {
    let numero01 = parseInt(prompt("Digite o promeiro numero: "))
    let numero02 = parseInt(prompt("Digite o segundo numero: "))
    let numero03 = parseInt(prompt("Digite o terceiro numero: "))

    if (numero01 < numero02 && numero02 < numero03) {
        console.log("Os numeros estao em ordem crscente")
    }
    else {
        console.log("Os numesros nao estao em ordem crescente")
    }
}