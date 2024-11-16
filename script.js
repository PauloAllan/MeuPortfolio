document.addEventListener('DOMContentLoaded', () => {
    const listaDePalavras = document.querySelectorAll('.word');
    let indiceAtual = 0;

    function mostrarPalavra() {
        listaDePalavras[indiceAtual].classList.remove('active');
        indiceAtual = (indiceAtual + 1) % listaDePalavras.length;
        listaDePalavras[indiceAtual].classList.add('active');
    }

    listaDePalavras[indiceAtual].classList.add('active');
    setInterval(mostrarPalavra, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    const mensagem = document.querySelector('#auto-message');

    if (!mensagem) {
        console.error("Elemento '#auto-message' não encontrado!");
        return;
    }

    function mostrarESumir() {
        mensagem.style.visibility = 'visible';
        mensagem.style.opacity = '1';

        setTimeout(() => {
            mensagem.style.opacity = '0';
            mensagem.style.visibility = 'hidden';
        }, 3000);
    }

    setInterval(mostrarESumir, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const lampada = document.getElementById('click');
    const cardDica = document.getElementById('dica-card');
    const fecharCard = document.getElementById('close-card');

    lampada.addEventListener('click', () => {
        cardDica.style.display = 'block';
    });

    fecharCard.addEventListener('click', () => {
        cardDica.style.display = 'none';
    });

    window.addEventListener('click', (evento) => {
        if (evento.target === cardDica) {
            cardDica.style.display = 'none';
        }
    });
});
