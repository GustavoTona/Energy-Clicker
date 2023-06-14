var valor = 0; // valor inicial
var intervalId; // variável para armazenar o identificador do temporizador

function incrementar() {
  valor += 1;
  document.getElementById("resultado").textContent = valor;
}

function iniciarAutomatico() {
  intervalId = setInterval(incrementar, 3000); // incrementa o valor a cada segundo (1000 ms)
}

function robotBooster() {
    intervalId = setInterval(incrementar, 1000); // incrementa o valor a cada segundo (1000 ms)
  }
  

function btnSell() {
  clearInterval(intervalId); // interrompe o incremento automático
}