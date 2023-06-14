const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const resultadoElemento = document.getElementById("resultado");

let contadorBotao1 = 0;
let contadorBotao2 = 0;
let resultado = 0;

// Função para atualizar o resultado
function atualizarResultado() {
  resultadoElemento.textContent = resultado;
}

// Função para exibir o resultado após o atraso
function exibirResultadoAposAtraso() {
  setTimeout(function() {
    atualizarResultado();
  }, 3000); // 3000 milissegundos = 3 segundos
}

// Adicionar número do Botão 1
botao1.addEventListener("click", function() {
  contadorBotao1++;
  verificarResultado();
});

// Adicionar número do Botão 2
botao2.addEventListener("click", function() {
  contadorBotao2++;
  verificarResultado();
});

// Verificar resultado final
function verificarResultado() {
  if (contadorBotao1 === 2 && contadorBotao2 === 1) {
    resultado += 1;
    exibirResultadoAposAtraso();
  } else if (contadorBotao1 >= 2 && contadorBotao2 >= 1) {
    resultado = contadorBotao1 - 1;
    exibirResultadoAposAtraso();
  } else {
    resultado = contadorBotao1;
    atualizarResultado();
  }
}