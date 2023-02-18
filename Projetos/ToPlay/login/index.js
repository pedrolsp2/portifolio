
 function close(){
console.log("a")
 }
 
 function handleFormSubmit(event) {
    event.preventDefault();
}


function validaCampos() {

    const user = document.getElementById('user').value;
    const psw = document.getElementById('password').value;
    const h3 = document.getElementById('titulo-alert');
    const txt = document.getElementById('texto-alert');
    const btn = document.getElementById('sub');

    const alert = document.querySelector('.alert');
    const porcent = document.getElementById('porc');

    if(user === "" || psw === ""){
        setTimeout(() => {
            btn.setAttribute("disabled", true);
            alert.classList.toggle('alert-fim');
            porcent.style.animation = 'movie';
            porcent.style.animationDuration = '4s';
            porcent.style.animationDelay = '400ms';
            porcent.style.backgroundColor = "#c50d00";
            h3.style.color = "#d70000";
            h3.innerHTML = "Ops, correu um erro";
            txt.innerHTML = "E-mail ou senha incorretos!"

            setTimeout(() => {
                btn.removeAttribute("disabled");
                alert.classList.toggle('alert-fim');
                porcent.classList.toggle('movie');
                porcent.style.animation = '';
                porcent.style.animationDuration = '';
                porcent.style.animationDelay = '';
        }, 4000);
        
    }, 1)
    }
    else if(user !== "Pedro" || psw !== "pedro"){
        setTimeout(() => {
            btn.setAttribute("disabled", true);
            alert.classList.toggle('alert-fim');
            porcent.style.animation = 'movie';
            porcent.style.animationDuration = '4s';
            porcent.style.animationDelay = '400ms';
            porcent.style.backgroundColor = "#c50d00";
            h3.style.color = "#d70000";
            h3.innerHTML = "Ops, correu um erro";
            txt.innerHTML = "E-mail ou senha incorretos!"

            setTimeout(() => {
                btn.removeAttribute("disabled");
                alert.classList.toggle('alert-fim');
                porcent.classList.toggle('movie');
                porcent.style.animation = '';
                porcent.style.animationDuration = '';
                porcent.style.animationDelay = '';
        }, 4000);
        
    }, 1)
    }
    else{
        setTimeout(() => {
            alert.classList.toggle('alert-fim');
            porcent.style.animation = 'movie';
            porcent.style.animationDuration = '4s';
            porcent.style.animationDelay = '400ms';
            porcent.style.backgroundColor = "#12704a";
            h3.style.color = "#12704a";
            h3.innerHTML = "Sucesso";
            txt.innerHTML = "Bem vindo de volta! Bora pro sistema."

            setTimeout(() => {
                alert.classList.toggle('alert-fim');
                porcent.classList.toggle('movie');
                porcent.style.animation = '';
                porcent.style.animationDuration = '';
                porcent.style.animationDelay = '';
        }, 4000);
        
    }, 1)
    setTimeout(()=>{
    window.location.href = '../maneger-page/index.html';
    },4000)
    }
 }

 function flip(){
    const div = document.querySelector('.rotate');
    div.classList.toggle('rotate-fim')
 }