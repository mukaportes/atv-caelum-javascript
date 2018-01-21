;(function() { // IIFE
    const cartoes = document.querySelectorAll('.cartao');

    // Adicionar o cartao--focado
    for (let cartao of cartoes) {
        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focado');
        });
        
        // blur = contrário do focus
        // cartao.addEventListener('blur', function() {
        //     cartao.classList.remove('.cartao--focado');
        // });

        // focusin e focusout NÃO PROPAGAM O EVENTO para seus parentes / evitando disparar eventos relacionados 
        // nos elementos parentes do elemento que disparou um evento.
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focado');
        });
    
        // antes o event era 'click', mas teríamos que incluir um if para evitar disparar eventos quando
        // a mudança desejada já estivesse rolando
        // ==> solucionamos com 'change'!
        cartao.addEventListener('change', function (event) {
            const $elementoAtual = event.target;
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo');

            const corNova = $elementoAtual.value;
            if (isRadioTipo) {
                cartao.style.background = corNova;
            }
        });

        // implementar remove com delegate
        // se tiver mais clicks, é só usar o mesmo event handler! e ir fazendo certas condições a serem 
        // satisfeitas ou não! não precisando adicionar x event handlers de click com x lógicas em cada um deles
        // adiciona-se um event handler de click com x lógicas dentro dele! 
        cartao.addEventListener('click', function() {
            const $elementoAtual = event.target;
            if ($elementoAtual.classList.contains('opcoesDoCartao-remove')) {
                cartao.classList.add('cartao--somePeixe');

                cartao.addEventListener('transitionend', function () {
                    cartao.remove();
                });
            }
        });

        cartao.addEventListener('keydown', function (event) {
            // Label = .opcoesDoCartao-opcao
            const $elementoAtual = event.target;
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao');

            // se for uma label E a tecla apertada for enter OU space
            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click();
            }
        });
    }
})()