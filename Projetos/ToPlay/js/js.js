let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

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