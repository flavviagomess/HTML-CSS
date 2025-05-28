const dataFinal = new Date('2025-05-28T00:00:00');

function atualizaContador() {
  const agora = new Date();
  const tempoRestante = dataFinal - agora;

  if (tempoRestante <= 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'Tempo esgotado!';
    return;
  }

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.getElementById(
    'contador'
  ).innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

atualizaContador();
const intervalo = setInterval(atualizaContador, 1000);

/* const dataAlvo = new Date('2025-05-28T00:00:00').getTime();
const intervalo = setInterval(() => {
  const dataAtual = new Date().getTime();
  const tempoRestante = dataAlvo - dataAtual;

  if (tempoRestante <= 0) {
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.querySelector('#dias').innerHTML = dias;
  document.querySelector('#horas').innerHTML = horas;
  document.querySelector('#minutos').innerHTML = minutos;
  document.querySelector('#segundos').innerHTML = segundos;

  document.getElementById(
    'contador'
  ).innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}, 1000); */
