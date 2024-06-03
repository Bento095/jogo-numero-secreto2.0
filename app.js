let listaDeNumerosGerados = [];
let limite = 50
let numeroSecreto = gerarNum();
let tentativas = 1

function mostraTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemTitulo() {
    mostraTexto('h1', 'Jogo do número secreto');
    mostraTexto('p', 'Duvido tu acertar esse número que eu tirei do fióte, de 1 a 10.');
}

mensagemTitulo()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    mostraTexto('h1', 'Acertou mizeravi!!!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'chute só!';
    let mensagemTentativas = `Sê é o bixão mêrmo em doido! foi com ${tentativas} ${palavraTentativa}!`;
    mostraTexto('p', mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute('disabled');
    } else{
        if ( chute > numeroSecreto) {
            mostraTexto('p', 'Menos seu cavalo.');
        } else {
            mostraTexto('p', 'Um pouquinho mais');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNum() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let tamanhoDaLista = listaDeNumerosGerados.length;

    if( tamanhoDaLista == limite) {
        listaDeNumerosGerados = [];
    }

    if (listaDeNumerosGerados.includes(numeroEscolhido)) {
        return gerarNum();
    } else {
        listaDeNumerosGerados.push(numeroEscolhido);
        console.log(listaDeNumerosGerados);
         return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNum();
    limparCampo();
    tentativas = 1;
    mensagemTitulo();
    document.getElementById("reiniciar").setAttribute('disabled', true);
}