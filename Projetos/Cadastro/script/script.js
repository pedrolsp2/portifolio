 
let produtos = [];

const cadastrarButton = document.getElementById('cadastrar');
cadastrarButton.addEventListener('click', adicionarProduto);

const novoButton = document.getElementById('novo-produto');
novoButton.addEventListener('click',()=>{
  nome.focus();
})

function adicionarProduto(event) {
    event.preventDefault();
    document.getElementById('listagem-produtos').classList.remove('off')
    const pop = document.querySelector('.alerta');
    const pop_perc = document.getElementById('porcentagem');
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const disponivelVenda = document.getElementById('disponivel-venda').value;;
    if(!nome || !valor){ 
        setTimeout(() => {
            pop.classList.toggle('visivel');
            pop_perc.classList.toggle('animacao');
            setTimeout(() => {
                pop.classList.toggle('visivel');
                pop_perc.classList.toggle('animacao');
        }, 4100);
        
    }, 1)
        return;
    }
    else{
    
    const produto = { nome, descricao, valor, disponivelVenda };
    produtos.push(produto);
    atualizarTabela();
    document.getElementById('produtos').reset();
}
  }

  function atualizarTabela() {
    const tbody = document.querySelector('#listagem-produtos tbody');
    tbody.innerHTML = '';
    produtos.sort((produtoA, produtoB) => produtoA.valor - produtoB.valor);
    produtos.forEach(produto => {
      const tr = document.createElement('tr');
      const nomeTd = document.createElement('td');
      nomeTd.textContent = produto.nome;
      tr.appendChild(nomeTd);
      const valorTd = document.createElement('td');
      valorTd.textContent = produto.valor.toFixed(2);
      tr.appendChild(valorTd);
      tbody.appendChild(tr);
    });
  }
  
  