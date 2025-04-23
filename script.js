const numerosReais = [
  1, 2, 3
];

const numerosVisuais = Array.from({ length: 70 }, (_, i) => i + 1); // efeito visual de 1 a 70

const result = document.getElementById('result');
const drawButton = document.getElementById('drawButton');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

drawButton.addEventListener('click', () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    result.textContent = '⚠️ Insira um intervalo válido!';
    return;
  }

  const numerosFiltrados = numerosReais.filter(n => n >= min && n <= max);
  const visuaisFiltrados = numerosVisuais.filter(n => n >= min && n <= max);

  if (numerosFiltrados.length === 0) {
    result.textContent = '⚠️ Nenhum número disponível nesse intervalo!';
    return;
  }

  drawButton.disabled = true;
  let counter = 0;
  const duration = 5000;
  const intervalTime = 70;
  const totalSteps = duration / intervalTime;

  const interval = setInterval(() => {
    const randomVisual = visuaisFiltrados[Math.floor(Math.random() * visuaisFiltrados.length)];
    result.textContent = `🎲 ${randomVisual}`;
    counter++;

    if (counter >= totalSteps) {
      clearInterval(interval);
      const sorteado = numerosFiltrados[Math.floor(Math.random() * numerosFiltrados.length)];
      result.textContent = `🎉 ${sorteado}`;
      result.classList.add('animate');

      setTimeout(() => result.classList.remove('animate'), 1000);
      launchConfetti();
      drawButton.disabled = false;
    }
  }, intervalTime);
});

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}
