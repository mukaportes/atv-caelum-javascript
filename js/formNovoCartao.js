;(function() {
    const form = document.querySelector('.formNovoCartao');
    const contador = document.querySelectorAll('.cartao').length;

    // Add event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $campoDeConteudo.value.trim();

        // retornar o valor booleano de algo: !!'Meu Nome' => retorna true
        if (!conteudo) {
            let $divErro = document.createElement('div');
            $divErro.classList.add('formNovoCartao-msg');
            $divErro.textContent = 'Formulário inválido. Campo de pesquisa vazio';
            
            // adiciona um filho/child para o form sendo este a div contendo a mensagem de erro
            // ====> forma abaixo: forma tensa
            // form.insertBefore($divErro, document.querySelector('.formNovoCartaoSalvar'));
            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin', $divErro);

            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove();
            });
        } else {
            criarCartao(conteudo);
        }
        $campoDeConteudo.value = '';
    });

    // faz aparecer o form ~ remove a classe que esconde antes de executar um js relacionado ao elemento
    form.classList.remove('no-js');
})()