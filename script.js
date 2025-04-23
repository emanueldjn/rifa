// const numerosReais = [
//   1, 2, 3
// ];

// const numerosVisuais = Array.from({ length: 70 }, (_, i) => i + 1); // efeito visual de 1 a 70

// const result = document.getElementById('result');
// const drawButton = document.getElementById('drawButton');
// const minInput = document.getElementById('min');
// const maxInput = document.getElementById('max');

// drawButton.addEventListener('click', () => {
//   const min = parseInt(minInput.value);
//   const max = parseInt(maxInput.value);

//   if (isNaN(min) || isNaN(max) || min >= max) {
//     result.textContent = '⚠️ Insira um intervalo válido!';
//     return;
//   }

//   const numerosFiltrados = numerosReais.filter(n => n >= min && n <= max);
//   const visuaisFiltrados = numerosVisuais.filter(n => n >= min && n <= max);

//   if (numerosFiltrados.length === 0) {
//     result.textContent = '⚠️ Nenhum número disponível nesse intervalo!';
//     return;
//   }

//   drawButton.disabled = true;
//   let counter = 0;
//   const duration = 5000;
//   const intervalTime = 70;
//   const totalSteps = duration / intervalTime;

//   const interval = setInterval(() => {
//     const randomVisual = visuaisFiltrados[Math.floor(Math.random() * visuaisFiltrados.length)];
//     result.textContent = `🎲 ${randomVisual}`;
//     counter++;

//     if (counter >= totalSteps) {
//       clearInterval(interval);
//       const sorteado = numerosFiltrados[Math.floor(Math.random() * numerosFiltrados.length)];
//       result.textContent = `🎉 ${sorteado}`;
//       result.classList.add('animate');

//       setTimeout(() => result.classList.remove('animate'), 1000);
//       launchConfetti();
//       drawButton.disabled = false;
//     }
//   }, intervalTime);
// });

// function launchConfetti() {
//   confetti({
//     particleCount: 150,
//     spread: 100,
//     origin: { y: 0.6 },
//   });
// }


const numerosReais = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70
];
const numerosVisuais = Array.from({ length: 70 }, (_, i) => i + 1);

const result = document.getElementById('result');
const drawButton = document.getElementById('drawButton');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

drawButton.addEventListener('click', () => {
  drawButton.classList.add('shake');
  setTimeout(() => drawButton.classList.remove('shake'), 400);

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
  const duration = 1000;
  const intervalTime = 70;
  const totalSteps = duration / intervalTime;

  const interval = setInterval(() => {
    const randomVisual = visuaisFiltrados[Math.floor(Math.random() * visuaisFiltrados.length)];
    result.textContent = `🎲 ${randomVisual}`;
    result.classList.remove('fade');
    counter++;

    if (counter >= totalSteps) {
      clearInterval(interval);
      const sorteado = numerosFiltrados[Math.floor(Math.random() * numerosFiltrados.length)];
      result.classList.add('fade');
      const container = document.querySelector('.container');
      container.classList.add('glow');
      setTimeout(() => {
        result.textContent = `🎉 ${sorteado}`;
        result.classList.remove('fade');
        result.classList.add('animate');
        setTimeout(() => {
          result.classList.remove('animate');
          container.classList.remove('glow');
        }, 1000);
        launchConfetti();
        drawButton.disabled = false;
      }, 500);
    }
  }, intervalTime);
});

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
  confetti({
    particleCount: 50,
    spread: 100,
    origin: { y: 0.6 },
    shapes: ['heart'],
    colors: ['#ff4081', '#ffeb3b', '#fff'],
    scalar: 1.5,
  });
}