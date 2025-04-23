const numerosReais = [5, 10, 15, 20]; // Apenas esses podem ser sorteados
const numerosVisuais = Array.from({ length: 70 }, (_, i) => i + 1); // De 1 a 70 para o efeito visual

const result = document.getElementById('result');
const drawButton = document.getElementById('drawButton');

drawButton.addEventListener('click', () => {
  if (numerosReais.length === 0) {
    result.textContent = 'Nenhum número disponível!';
    return;
  }

  drawButton.disabled = true;
  let counter = 0;
  const duration = 5000;
  const intervalTime = 70;
  const totalSteps = duration / intervalTime;

  const interval = setInterval(() => {
    const randomVisual = numerosVisuais[Math.floor(Math.random() * numerosVisuais.length)];
    result.textContent = `🎲 ${randomVisual}`;
    counter++;

    if (counter >= totalSteps) {
      clearInterval(interval);
      const sorteado = numerosReais[Math.floor(Math.random() * numerosReais.length)];
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
