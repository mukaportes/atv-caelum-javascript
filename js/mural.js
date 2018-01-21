;(function() {
    let numCartao = 0;

    function criarCartao(conteudo, cor = '') {
        // Criando elemento da melhor forma possível
        const $tpl = document.createElement('tpl');

        numCartao++;

        $tpl.innerHTML = `<article id="cartao_${numCartao}" style="background: ${cor};" class="cartao" tabindex="0">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao${numCartao}" value="#EBEF40" id="corPadrão-cartao${numCartao}" class="opcoesDoCartao-radioTipo" ${ cor ? '' : 'checked' }>
            <label for="corPadrão-cartao${numCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>

            <input type="radio" name="corDoCartao${numCartao}" value="#F05450" id="corImportante-cartao${numCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
            </label>

            <input type="radio" name="corDoCartao${numCartao}" value="#92C4EC" id="corTarefa-cartao${numCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>

            <input type="radio" name="corDoCartao${numCartao}" value="#76EF40" id="corInspiração-cartao${numCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        </article>`;

        const $cartao = $tpl.querySelector('.cartao');

        document.querySelector('.mural').insertAdjacentElement('afterbegin', $cartao);

        $cartao.addEventListener('focusin', function () {
            $cartao.classList.add('cartao--focado');
        });

        // blur = contrário do focus
        // cartao.addEventListener('blur', function() {
        //     cartao.classList.remove('.cartao--focado');
        // });

        // focusin e focusout NÃO PROPAGAM O EVENTO para seus parentes / evitando disparar eventos relacionados 
        // nos elementos parentes do elemento que disparou um evento.
        $cartao.addEventListener('focusout', function () {
            $cartao.classList.remove('cartao--focado');
        });

        // antes o event era 'click', mas teríamos que incluir um if para evitar disparar eventos quando
        // a mudança desejada já estivesse rolando
        // ==> solucionamos com 'change'!
        $cartao.addEventListener('change', function (event) {
            const $elementoAtual = event.target;
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo');

            const corNova = $elementoAtual.value;
            if (isRadioTipo) {
                $cartao.style.background = corNova;
            }
        });

        // implementar remove com delegate
        // se tiver mais clicks, é só usar o mesmo event handler! e ir fazendo certas condições a serem 
        // satisfeitas ou não! não precisando adicionar x event handlers de click com x lógicas em cada um deles
        // adiciona-se um event handler de click com x lógicas dentro dele! 
        $cartao.addEventListener('click', function () {
            const $elementoAtual = event.target;
            if ($elementoAtual.classList.contains('opcoesDoCartao-remove')) {
                $cartao.classList.add('cartao--somePeixe');

                $cartao.addEventListener('transitionend', function () {
                    $cartao.remove();
                });
            }
        });

        $cartao.addEventListener('keydown', function (event) {
            // Label = .opcoesDoCartao-opcao
            const $elementoAtual = event.target;
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao');

            // se for uma label E a tecla apertada for enter OU space
            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click();
            }
        });
    }

    // fazendo a funçaõ virar pública, mesmo dentro do IIFE
    // lembrando que o WINDOW é o ESCOPO GLOBAL do JS
    window.criarCartao = criarCartao;
})()