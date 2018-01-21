;(function() {
    const $btnAjuda = document.querySelector("#btnAjuda");
    $btnAjuda.classList.remove("no-js");

    $btnAjuda.addEventListener('click', () => {
        const ajudas = [
            {msg: 'Alerta 1', cor: 'white'},
            {msg: 'Alerta 2', cor: 'silver'},
            {msg: 'Alerta 3', cor: 'orange'},
            {msg: 'Alerta 4', cor: 'purple'},
            {msg: 'Alerta 5', cor: 'white'},
        ];

        for (let ajuda of ajudas) {
            criarCartao(ajuda.msg, ajuda.cor);
        }
    });

})()