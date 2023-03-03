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