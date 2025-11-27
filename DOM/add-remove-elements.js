let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p");
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "paragrafo criado via JS";

secao[0].appendChild(novoParagrafo);

formularioElemento.removeChild(labelElemento);