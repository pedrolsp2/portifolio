function menu() {
           
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('toggle')
    
     const btnMenu = document.getElementById('botao-menu');
     btnMenu.classList.toggle('active')
 }

 let minhaDiv = document.getElementById("1"); 
 let vw = document.querySelector('.view')
 let img = document.querySelector('#img')
 minhaDiv.addEventListener("click", ()=> {
  vw.classList.add('visible')

}); 
 
 function closeapp(){
  vw.classList.remove('visible')
 }