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


