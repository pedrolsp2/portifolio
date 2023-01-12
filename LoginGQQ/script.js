function Sumir() {
    var status = false;
    let checkbox = document.getElementById('aceito1');
    let checkbox2 = document.getElementById('aceito2');
    if (checkbox.checked && checkbox2.checked) {
        status = true;
    } else {
        status = false;
    }

    if (status == true) {
        var adicionar = document.getElementById("botoes");
        adicionar.classList.add("heartbeat");
        document.getElementById('menssagem-alerta').classList.remove("hide");
    }
    else {
        var adicionar = document.getElementById("botoes");
        adicionar.classList.add("heartbeat");
        document.getElementById('menssagem-alerta').classList.remove("hide");
    }
}

function Esconder() {
    var status = false;
    let checkbox = document.getElementById('aceito1');
    let checkbox2 = document.getElementById('aceito2');
    if (checkbox.checked && checkbox2.checked) {
        status = true;
    } else {
        status = false;
    }

    if (status == true) {
        var adicionar = document.getElementById("politica");
        adicionar.classList.add("scale-out-center");
    }
    else {
        var adicionar = document.getElementById("botoes");
        adicionar.classList.add("heartbeat");
        document.getElementById('menssagem-alerta').classList.remove("hide");
    }
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    
    }
  });




  function Add(){
    let abc = document.querySelector('.bt');
    abc.classList.add('subir');
}

window.onload = function () {
    var botao = document.getElementById("senha");

        botao.addEventListener("focus", function () {
            Add();
        });

        botao.addEventListener("click", function () {
            Add();
        });

        botao.onblur = function(){
        let abc = document.querySelector('.bt');
        abc.classList.remove('subir');             
        }
    } 