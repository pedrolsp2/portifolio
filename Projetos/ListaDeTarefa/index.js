var btn = document.getElementById('botao');
var tarefa = document.getElementById('texto');
var ul = document.getElementById('ul');
var li = document.getElementsByTagName('li');

function inputLength(){
    return tarefa.value.length;
}

function createListElement(){
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(tarefa.value));
    ul.appendChild(li);
    tarefa.value = '';

    function crossOut(){
        li.classList.toggle('done');
    }

    li.addEventListener('click',crossOut);

    var dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('✖'));
    li.appendChild(dBtn);
    dBtn.addEventListener('click', deleteLisItem);

    function deleteLisItem(){
        li.classList.add('delete');
    }
}

btn.addEventListener('click',addListAfterClick);
tarefa.addEventListener('keypress',addListAfterKeypress);

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}