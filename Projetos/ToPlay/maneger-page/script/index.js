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
            lod.classList.add('Nvisivel')
            botao.innerHTML = "Gerar relatório"
            botao.classList.remove('back')
            btn.classList.toggle('visivel') 
            grafico.classList.toggle('visivel') 
            botao.classList.toggle('Nvisivel')
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
        lod2.classList.add('Nvisivel')
        botao2.innerHTML = "Gerar relatório"
        botao2.classList.remove('back')
        btn2.classList.toggle('visivel') 
        grafico2.classList.toggle('visivel')
        botao2.classList.toggle('Nvisivel')},2000)
},1) 
}

function closeRel(){
    const botao = document.querySelector('#b1');
    const lod =  document.querySelector('.loader');
    const btn = document.querySelector('.btn');
    const grafico = document.querySelector('.img-grafico');  

    btn.classList.toggle('visivel');
    grafico.classList.toggle('visivel');
    botao.classList.replace("Nvisivel",'visivel')

}

function closeRel2(){
    const botao2 = document.querySelector('#b2');
    const lod2 =  document.querySelector('.loader2');
    const btn2 = document.querySelector('.btn2');
    const grafico2 = document.querySelector('.img-grafico2');  

    btn2.classList.toggle('visivel');
    grafico2.classList.toggle('visivel');
    botao2.classList.replace("Nvisivel",'visivel')

}