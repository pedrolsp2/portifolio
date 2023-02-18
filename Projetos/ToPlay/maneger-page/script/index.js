function gerarRelatorio(){
    const botao = document.querySelector('#b1');
    const lod =  document.querySelector('.loader');
    const btn = document.querySelector('.btn');
    const grafico = document.querySelector('.img-grafico');   

    setTimeout(()=>{  
     lod.classList.remove('Nvisivel')
    botao.innerHTML = "Carregando"
    botao.classList.add('back')
        setTimeout(()=>{
            btn.classList.toggle('visivel') 
            grafico.classList.toggle('visivel') 
            botao.classList.toggle('Nvisivel')
            lod.classList.toggle('Nvisivel')
        },2000)
    },1) 
}

function gerarRelatorio2(){  
    const btn2 = document.querySelector('.btn2');
    const grafico2 = document.querySelector('.img-grafico2'); 
    const botao2 = document.querySelector('#b2');  
    const lod2 =  document.querySelector('.loader2');


setTimeout(()=>{
    lod2.classList.remove('Nvisivel')
    botao2.innerHTML = "Carregando"
    botao2.classList.add('back')
    setTimeout(()=>{
        btn2.classList.toggle('visivel') 
        grafico2.classList.toggle('visivel')
        botao2.classList.toggle('Nvisivel')},2000)
},1) 
}