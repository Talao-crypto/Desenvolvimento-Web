// Variáveis globais para armazenar valores e operação
let valorAtual = '';
let operacao = '';
let valorAnterior = '';

// Função para adicionar valor ao visor
function adicionarValor(valor) {
    valorAtual += valor;
    const tela = document.getElementById('tela');
    tela.textContent = valorAtual;
}

// Função para definir a operação
function setOperacao(operacaoValor) {
    operacao = operacaoValor;
    valorAnterior = valorAtual;
    valorAtual = '';
    const tela = document.getElementById('tela');
    tela.textContent = valorAnterior + ' ' + operacao;
}

// Função para somar
function somar() {
    const resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
    exibirResultado(resultado);
}

// Função para subtrair
function subtrair() {
    const resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
    exibirResultado(resultado);
}

// Função para multiplicar
function multiplicar() {
    const resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
    exibirResultado(resultado);
}

// Função para dividir
function dividir() {
    if (parseFloat(valorAtual) !== 0) {
        const resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
        exibirResultado(resultado);
    } else {
        exibirResultado("Erro: Divisão por zero!");
    }
}

// Função para calcular o resultado baseado na operação
function calcularResultado() {
    switch (operacao) {
        case '+':
            somar();
            break;
        case '-':
            subtrair();
            break;
        case '*':
            multiplicar();
            break;
        case '/':
            dividir();
            break;
    }
}

// Função para exibir o resultado na tela
function exibirResultado(valor) {
    const tela = document.getElementById('tela');
    tela.textContent = valor;
    valorAtual = valor;
    operacao = '';
    valorAnterior = '';
}

// Função para limpar a tela
function limparTela() {
    valorAtual = '';
    operacao = '';
    valorAnterior = '';
    const tela = document.getElementById('tela');
    tela.textContent = '';
}

// Função de inicialização dos botões
function inicializarBotoes() {
    const botoes = document.querySelectorAll('.botao-numero, .botao-operacao, .botao-igual, .botao-limpar');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const valor = botao.value;

            if (valor === '=') {
                calcularResultado();
            } else if (valor === 'C') {
                limparTela();
            } else if (isNaN(valor)) {
                setOperacao(valor);
            } else {
                adicionarValor(valor);
            }
        });
    });
}

// Inicializa os botões ao carregar a página
document.addEventListener('DOMContentLoaded', inicializarBotoes);


// Função para exibir a data atual
function exibirDataAtual() {
    const dataElement = document.getElementById('dataAtual');
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataAtual.getFullYear();
    dataElement.textContent = `${dia}/${mes}/${ano}`;
}

// Chamar a função para exibir a data ao carregar a página
document.addEventListener('DOMContentLoaded', exibirDataAtual);


