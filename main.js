const boxOne = document.getElementById(".boxOne")
const boxTwo = document.getElementById(".boxTwo")
let frases = [
    "Você está apenas no começo da sua caminhada, não desista!",
    "Se o amor bater na sua porta, bata na cara dele!",
    "Não deixe seu medo te conter.",
    "A vida é feita de escolhas, e todas possuem consequências!",
    "A única validação que você precisa, é a sua!",
    "Um caminho para a felicidade acabou de aparecer para você, não deixe ele escapar!"
]

// Função para pegar uma frase aleatória
function pegarFraseAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

// Evento de clique no botão
document.getElementById('toggleButton').addEventListener('click', function () {
    let boxOne = document.getElementById('boxOne');
    let boxTwo = document.getElementById('boxTwo');

    boxOne.classList.add('hide');
    boxTwo.classList.remove('hide');

    // Exibir uma frase aleatória na boxTwo
    let fraseAleatoria = pegarFraseAleatoria();
    document.getElementById('frase').textContent = fraseAleatoria;
});



// Evento de clique no botão para reiniciar o programa
document.getElementById('restart').addEventListener('click', function () {
    let boxOne = document.getElementById('boxOne');
    let boxTwo = document.getElementById('boxTwo');

    // Esconder boxTwo
    boxTwo.classList.add('hide');

    // Mostrar boxOne
    boxOne.classList.remove('hide');
});