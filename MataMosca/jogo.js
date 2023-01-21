var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var nivel = window.location.search;
nivel = nivel.replace('?','');
var criaMosca = 1500;

if(nivel === 'normal'){
    criaMosca = 1500;
}else if(nivel === 'dificil'){
    criaMosca = 1000;

} else if(nivel === 'expert'){
    criaMosca = 750;
}

function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustaTamanho()

var cronometro = setInterval(function() {
    tempo -= 1;
    if(tempo <0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
        window.location.href = 'fim.html'

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100;
    var posicaoY = Math.floor(Math.random() * altura) - 100;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function elementoClicado() {
        this.remove()
    }
    document.body.appendChild(mosquito);

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'direita'
        case 1:
            return 'esquerda'
    }
}
