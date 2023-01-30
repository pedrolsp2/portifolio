let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
  nextImage();
},5500)

function nextImage(){
  count++;
  if(count>10){
    count =1;
  }

  document.getElementById('radio'+count).checked = true;
}


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }

  document.getElementById('tira').classList.toggle('tirar');

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal)=>{
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 100;

      if(elementTop <windowHeight - elementVisible){
          reveal.classList.add("rolar");
      } else {
          reveal.classList.remove("rolar");
      }
  });
}
window.addEventListener("scroll",reveal);

setTimeout(function(){
  let lod = document.getElementById('lod');

  lod.classList.add('tirar'); 
  document.querySelector('html').style.overflow = 'auto'; 
},3000)


function Abrir(){
var popUp = document.getElementById('popUp');
  popUp.classList.replace('tirar','slide-in-fwd-center');
  document.querySelector('html').style.overflow = 'hidden'; 
}

function Sair(){
  var popUp = document.getElementById('popUp')
    popUp.classList.replace('slide-in-fwd-center','tirar')
    document.querySelector('html').style.overflow = 'auto'; 

}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#FF6601 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;