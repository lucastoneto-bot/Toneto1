// Listas de elementos para gerar as missões dinamicamente
const objetivos = [
    "Derrotar um bando de goblins saqueadores",
    "Recuperar o amuleto perdido do Duque",
    "Escoltas uma carroça de hidromel até a vila vizinha",
    "Eliminar uma ratazana gigante nos porões do castelo",
    "Colher cogumelos brilhantes na Floresta Sombria",
    "Exorcizar o fantasma que assombra a velha torre de vigia",
    "Salvar o ferreiro que foi capturado por orcs"
];

const locais = [
    "nas Ruínas de Alendor",
    "no Pântano da Névoa",
    "nas Cavernas de Cristal",
    "no Pico do Trovão",
    "nos arredores da Taverna",
    "no Labirinto Esquecido"
];

const recompensas = [
    "50 Moedas de Ouro e uma caneca de hidromel",
    "Uma espada de ferro perfeitamente afiada",
    "Um mapa do tesouro misterioso",
    "100 Moedas de Ouro e o favor do Rei",
    "Um escudo de madeira reforçado com runas",
    "Uma poção de cura maior"
];

// Selecionando os elementos HTML
const btnMissao = document.getElementById("btn-missao");
const quadroMissao = document.getElementById("quadro-missao");

// Função para gerar uma nova missão aleatória
function gerarMissao() {
    // Sorteia um índice aleatório de cada array
    const objetivoAleatorio = statusAleatorio(objetivos);
    const localAleatorio = statusAleatorio(locais);
    const recompensaAleatoria = statusAleatorio(recompensas);

    // Monta o HTML interno com a nova missão
    quadroMissao.innerHTML = `
        <p class="missao-titulo">📜 Nova Missão Disponível!</p>
        <p><strong>Objetivo:</strong> ${objetivoAleatorio} ${localAleatorio}.</p>
        <p class="missao-recompensa">💰 Recompensa: ${recompensaAleatoria}</p>
    `;
}

// Função auxiliar para pegar item aleatório do array
function statusAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

// Adiciona o evento de clique ao botão
btnMissao.addEventListener("click", gerarMissao);
