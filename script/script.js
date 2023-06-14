const btnTorneira = document.getElementById("btn-torneira");
const contadorTorneira = document.getElementById("contador-torneira");

let contadorT = 0;

contadorTorneira.innerHTML = contadorT;

btnTorneira.addEventListener("click", function(){
   contadorTorneira.innerHTML = ++contadorT;
});

console.log(contadorT);


// Contador vazio 

const bntVazio = document.getElementById("btn-vazio");
const contadorVazio = document.getElementById("contador-vazio")

let contadorV = 0;

contadorVazio.innerHTML = contadorV

bntVazio.addEventListener("click", function(){
    contadorVazio.innerHTML = ++contadorV;
});


// Contador final | Deve somar os valores e somar 1 

const contadorFinal = document.getElementById("contador-final");

btnTorneira.addEventListener("click", function(){

    
    contadorFinal.innerHTML = contadorV + contadorT;
});


bntVazio.addEventListener("click", function(){

    if(contadorT >= 1)
    contadorFinal.innerHTML = contadorV + contadorT;
});

