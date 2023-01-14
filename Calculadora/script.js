var display = document.getElementById('display');

 function limparDisplay(){
    display.value = '';
  }

function AdcValor(valorClicado, tipo){
    display.value += valorClicado;
}

function somarValor(valorAtual){
    limparDisplay();
    display.value += eval(valorAtual);
}
  
  function calcular(tipo, valor){

        if(tipo === 'acao'){
            switch(valor){
                case 'c':
                    limparDisplay();
                break;

                case '/':
                case '*':
                case '-':
                case '+':
                case '.':
                    AdcValor(valor);
                break;

                case '=':
                    somarValor(display.value);
                break;
            }

        } else if (tipo === 'valor'){
            AdcValor(valor);
        }
  }