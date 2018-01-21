// Pegar elemento
// var btn = document.querySelector("#btnMudaLayout");

// Se tem um valor que NÃO MUDA, usar CONST
const btn = document.querySelector("#btnMudaLayout");

document.querySelector("#btnMudaLayout").classList.remove('no-js');

function mudaTexto() {
    if (this.textContent == 'Blocos') {
        this.textContent = 'Linhas';
    } else {
        this.textContent = 'Blocos';
    }
}

// mudaTexto é uma CALLBACK!!! está falando: não sei quando o user vai clicar, mas qdo clicar, rode tal func.
// passa a função preparada para ser rodada
btn.addEventListener('click', mudaTexto);

// funções JS DEVEM SER em camel case!
// o onclick acima está sem camel case por ser um atributo HTML, que não é escrito em CCase!

// Adicionar a classe
const mural = document.querySelector(".mural");
// Cria o evento click
function mudaLayout() {
    // mural.classList -> retorna lista com as classes e um value: 'todoas-as-classes dele-aqui-dentro'
    // mural.classList.add() -> para adicionar uma classe
    // mural.classList.contains(classe) -> verifica se a classe pasada como parâmetro está contida elemento
    // mural.classList.toggle(classe) -> verifica se a classe pasada como parâmetro está contida elemento

    mural.classList.toggle('mural--linha');

    // if (mural.classList.toggle('mural--linha')) {
    //     mural.classList.remove('mural--linha');
    // } else {
    //     mural.classList.add('mural--linha');
    // }

    // chama a função mudaTexto dentro de mudaLayout para chamar as duas no mesmo btn.onclick
    // se chamar btn.onclick = x; btn.onclick = y; -> Y irá sobrepor X
    // usa addEventListener('click', callbackFunc1); addEventListener('click', callbackFunc2); NÃO IRÁ SOBREPOR!!!
}

btn.addEventListener('click', mudaLayout);

