let elem = document.getElementById('perc')
let doc = document.documentElement

window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
    elem.style.width = value + '%';
});

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