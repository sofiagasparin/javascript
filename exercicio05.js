let numero01 = parseInt(prompt("Digite o promeiro numero: "))
let numero02 = parseInt(prompt("Digite o segundo numero: "))
let numero03 = parseInt(prompt("Digite o terceiro numero: "))

if(numero01 < numero02 && numero02 < numero03){
    console.log("Os numeros estao em ordem crscente")
}
else{ 
    console.log("Os numesros nao estao em ordem crescente")
}