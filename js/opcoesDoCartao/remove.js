(function() {
    const btns = document.querySelectorAll('.opcoesDoCartao-remove');

    // var lista_el = document.querySelectorAll('.opcoesDoCartao-remove');
    // // querySelectorAll retorna um array com os elementos da classe

    // NÃO USAR O VAR DENTOR LAÇO FOR! USAR <<<<< LET >>>>>

    // for (var i = 0; i < lista_el.length; i++) {
    //     
    // }

    // Esse laço é o equivalente ao FOREACH
    // ==========================================
    // let novaVar of varLista = foreach varLista as novaVar
    // ==========================================
    
    
    // ====================== Refeito usando delegate ================
    // for (let btn of btns) {
    //     btn.addEventListener('click', function() {
    //         const cartao = btn.parentNode.parentNode;
    //         cartao.classList.add('cartao--somePeixe');

    //         cartao.addEventListener('transitionend', function () {
    //             cartao.remove();
    //         });
    //     });
    // }
    // ===============================================================

    // // cria a funcao
    // function removeCartao() {
    //     const cartao = this.parentNode.parentNode;
    //     cartao.classList.add('cartao--somePeixe');

    //     cartao.addEventListener('transitionend', function() {
    //         cartao.remove();
    //     })
    //     // setTimeout(function() {
    //     //     cartao.remove();
    //     // }, 300);
    // }
})()

// NÃO ESQUECER DE }) =======> () ESSES PARENTESES NO FINAL DA FUNÇÃO

// Os parenteses fazem o que está dentro da função ser rodado num 'escopo independente', e não no escopo global
// Assim, faz um chunk de codigo ser rodado separadamente
// É o que acontece com bilbiotecas, frameworks, etc.
// IIFE - Immediate Invoked Function Expression - Expressão de Função Invocada Imediatamente 