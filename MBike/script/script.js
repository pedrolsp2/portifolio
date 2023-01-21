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
},3000)