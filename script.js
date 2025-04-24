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

// alfajor
const numerosReais = [
  1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 39, 40, 41, 44, 45, 46, 51, 52, 53, 56, 
  60, 61, 62, 64, 65, 68, 70, 7, 18, 26, 28, 29, 31, 36, 37, 50, 54
];

// VINHO
// const numerosReais = [
//  1, 2, 3, 4, 7, 9, 10, 11,  13, 14, 17, 19, 22, 23, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 40, 51, 52, 53, 56, 59, 61, 62, 64, 65
// ];

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
  const duration = 5000;
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