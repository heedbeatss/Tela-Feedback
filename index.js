let valorSelecionado = null; // Variável global para armazenar o valor do botão selecionado
let botaoAtivo = null; // Variável global para armazenar o botão ativo atualmente

document.getElementById('button__cancel').addEventListener('click', function() {
    window.close();
});

document.getElementById('x__btn').addEventListener('click', function() {
    window.close();
});

document.getElementById('button__submit').addEventListener('click', function() {
    if (valorSelecionado !== null) {
        alert("Thanks for your feedback! Your selected: " + valorSelecionado);
    } else {
        alert("Please, select first submi.");
    }
});

// Selecionando todos os botões com a classe "btn"
var botoes = document.querySelectorAll('.btn');

// Adicionando um ouvinte de evento de clique a cada botão
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var novoValorSelecionado = this.getAttribute('data-value'); // Armazenando o valor do novo botão clicado

        // Removendo a classe 'ativo' do botão anteriormente selecionado
        if (botaoAtivo) {
            botaoAtivo.classList.remove('ativo');
        }

        // Atualizando a classe 'ativo' para o novo botão clicado
        this.classList.add('ativo');
        botaoAtivo = this; // Atualizando o botão ativo atualmente

        // Atualizando o valor selecionado e exibindo no console
        valorSelecionado = novoValorSelecionado;
        console.log('Valor do botão clicado:', valorSelecionado);
    });
});

// Adicionando um ouvinte de evento de clique ao documento
document.addEventListener('click', function(event) {
    // Verificando se o alvo do evento não é um botão "btn"
    if (!event.target.classList.contains('btn') && botaoAtivo) {
        botaoAtivo.classList.remove('ativo'); // Removendo a classe 'ativo' do botão ativo
        botaoAtivo = null; // Resetando o botaoAtivo
        valorSelecionado = null; // Resetando o valorSelecionado
        console.log('Botão desativado.');
    }
});







// document.getElementById('button__cancel').addEventListener('click', function() {
//     window.close();
// });

// document.getElementById('x__btn').addEventListener('click', function() {
//     window.close();
// });

// document.getElementById('button__submit').addEventListener('click', function() {
//     alert("Obrigado pelo feedback!");
// });

// // Selecionando todos os botões com a classe "btn"
// var botoes = document.querySelectorAll('.btn');

// // Adicionando um ouvinte de evento de clique a cada botão
// botoes.forEach(function(botao) {
//     botao.addEventListener('click', function() {
//         var valor = this.getAttribute('data-value');
        
//         // Exibindo o valor do botão clicado no console
//         console.log('Valor do botão clicado:', valor);

//         // Adicionando a classe 'ativo' ao botão clicado
//         this.classList.add('ativo');
        
//         // Removendo o ouvinte de evento de clique para evitar múltiplos cliques
//         this.removeEventListener('click', arguments.callee);
//     });
// });