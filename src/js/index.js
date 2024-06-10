
//passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById('btn-avancar');
//passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function (){
    const ehPrimeiroCartao = cartaoAtual ===cartoes.length - 1
    if (ehPrimeiroCartao) return;
    console.log(cartoes.length)

    //passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele

    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener("click", function (){
    const ehUltimoCartao = cartaoAtual ===0
    if (ehUltimoCartao) return;

    //passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
    
    cartaoAtual--;
    mostrarCartao()
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

