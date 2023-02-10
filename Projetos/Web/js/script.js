let elem = document.getElementById('perc')
let doc = document.documentElement

window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
    elem.style.width = value + '%';
})