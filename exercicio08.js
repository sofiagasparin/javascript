let peso = parseFloat(prompt("Informe seu peso (em Kg)"))
let altura = parseFloat(prompt("Informe sua altura (em metros)"))

let imc = peso / (altura*altura)

console.log("Seu IMC e: " + imc)

if(imc <18.5){
    console.log("abaixo do peso")
}
else if(imc >= 18.5 && imc <=24.9){
    console.log("peso normal")
}
else if (imc >= 25 && imc <= 29.9){
    console.log("sobrepeso")
}
else if ( imc >= 30 && imc <= 34.9){
    console.log("obesidade grau 1")
}
else if (imc >= 35 && imc <= 39.9){
    console.log("obesidade grau 2")
}
else{
    console.log("obesidade grau 3")
}