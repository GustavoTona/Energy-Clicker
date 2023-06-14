const btnEnergy = document.getElementById("btn-energy");
const counterFinal = document.getElementById("counter-final");

let contadorT = 0;

counterFinal.innerHTML = contadorT;

btnEnergy.addEventListener("click", function(){
   counterFinal.innerHTML = ++contadorT;
});

console.log(contadorT);
