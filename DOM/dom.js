
let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementsByID("formulario");
let elementoPorTag = document.getElementsByTagName("p");

console.log(elementosPorClass);
console.log(elementoPorID);
console.log(elementoPorTag);


elementoPorTag[0].textContent= "vídeo engraçado";
console.log(elementoPorTag[0].textContent);

elementoPorTag[0].textContent
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontSize = "30px";

