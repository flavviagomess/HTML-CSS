let imagem = document.getElementById('troca-imagem');

// imagem.style.opacity = 0;

function trocaImagem() {
  imagem.style.opacity = 0;

  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1;
  } else {
    imagem.style.opacity = 0;
  }
}

setInterval(() => {
  trocaImagem();
}, 3000);

// 3000milessegundos = 3s
