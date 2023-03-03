const logo = document.querySelector('#logo')
const body = document.querySelector('body')
const div = document.querySelector('.cont')
const inputs = document.querySelector('.input')

 setTimeout(()=>{
    logo.classList.add('transfor')
    body.classList.add('back')
    div.classList.add('some')
    inputs.classList.remove('some')
 },7000)