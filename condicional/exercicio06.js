let anoNascimento = parseInt(prompt("Digite o ano de nascimento"))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18){
    console.log("Maior de idade")
    console.log("Sua idade e " + idade)
}
else{
    console.log("Menor de idade")
    console.log("Sua idade e: " + idade)
}