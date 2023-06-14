var valor = 0; // valor inicial
var intervalId; // variável para armazenar o identificador do temporizador

function incrementar() {
  valor += 1;
  document.getElementById("resultado").textContent = valor;
}

function iniciarAutomatico() {
  intervalId = setInterval(incrementar, 3000); // incrementa o valor a cada segundo (1000 ms)
}

function pararAutomatico() {
  clearInterval(intervalId); // interrompe o incremento automático
}