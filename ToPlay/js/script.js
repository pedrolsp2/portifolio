const btnMobile = document.getElementById('btn-celular');

function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active){
       event.currentTarget.setAttribute('aria-label','Fechar Menu');
    } else{
        
    } event.currentTarget.setAttribute('aria-label','Abrir Menu');
    
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



window.addEventListener('scroll', function(){
    var menu = document.querySelector('header');
    menu.classList.toggle('sticky', window.scrollY > 200);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('.logo');
    menu.classList.toggle('sticky2', window.scrollY > 200);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector(' #btn-celular');
    menu.classList.toggle('sticky3', window.scrollY > 200);
  })

  window.addEventListener('scroll', function(){
    var menu = document.querySelector('#icon-menu');
    menu.classList.toggle('sticky4', window.scrollY > 200);
  })
 
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};
/**//////////////////////////////////////////*
const FormPreReserva = document.getElementById("PreReserva");
if(FormPreReserva) {
  FormPreReserva.addEventListener("submit", async(event) => {
    event.preventDefault();

    const dadosForm = new FormData(FormPreReserva);

    const dados = await fetch("cadastrar.php",{
      method: "POST",
      body: dadosForm
    });
    const resposta = await dados.json();
   // console.log(resposta);

   if (resposta['status']) {
    document.getElementById("msgAlerta").innerHTML = resposta['msg'];
    PreReserva.reset();
} else {
    document.getElementById("msgAlerta").innerHTML = resposta['msg'];
}
});
}