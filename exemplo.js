//window.alert("Ola turma do borges")
//Alert- apresenta uma mensagem na tela
//window.confirm("O Jonas vai casar")
//Cornfirm-pergunta com ok/ cancela(retorna um true ou false)
//window.prompt("Qualo seu nome?")
//prompt- pega o texto da tela

//console.log("multimidia")

//let none = prompt("Informe o seu nome:")

//console.log("Bem-vindo! " + none)     

// let numero1 = Number.parseInt(prompt("Digite o primeiro numero: "))
// let numero2 = Number.parseInt(prompt("Digite o segundo numero: "))

// let result = numero1 + numero2



// let numero1 = Number.parseFloat(prompt("Digite o primeiro numero: "))
// let numero2 = Number.parseFloat(prompt("Digite o segundo numero: "))

// let result = numero1 + numero2

// console.log(resultado) 


let idade = window.prompt("Qual sua idade?")

if(idade>= 18){
          console.log("maior de idade")
}else{
    console.log("voce e menor de idade!")
}


switch (idade) {
    case "18":
        console.log("Maior de idade!")
        break;

        case "27":
        console.log("Esta perto do 30!")
        break;

    default:
        console.log("Nada a dizer")
        break;
}