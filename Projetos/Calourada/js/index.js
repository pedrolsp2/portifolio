function menu() {
           
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('toggle')
    
     const btnMenu = document.getElementById('botao-menu');
     btnMenu.classList.toggle('active')
 }

 function rotate(id){
    var curso = document.getElementById(id);
    curso.classList.toggle('rotate')
 }

 const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
