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