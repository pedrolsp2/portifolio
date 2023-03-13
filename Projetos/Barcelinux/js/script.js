function menu() {
           
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('toggle')
    
     const btnMenu = document.getElementById('botao-menu');
     btnMenu.classList.toggle('active')
 }

 let minhaDiv = document.querySelector("#1");
 let text = document.getElementById("#link-kit");

 minhaDiv.addEventListener("focus", ()=> {
   text.classList.add("efeito");
 });
 
 minhaDiv.addEventListener("blur", function() {
   minhaDiv.classList.remove("efeito");
 });
 