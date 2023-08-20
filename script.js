let listElement = document.querySelector('#resul ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefa = JSON.parse(localStorage.getItem('@listaTarefas')) || [];

function renderTarefas(){
    listElement.innerHTML = '';
    tarefa.map((todo) =>{
        
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode("excluir");
        linkElement.appendChild(linkText);

        let posiçao = tarefa.indexOf(todo);

        linkElement.setAttribute('onclick', `deletarTarefa(${posiçao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

    })
}

renderTarefas();

function adicionarTarefas(){

    if(inputElement.value === ''){

        alert('Digite uma tarefa')
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefa.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

function deletarTarefa(posiçao){
    tarefa.splice(posiçao, 1)
    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem('@listaTarefas', JSON.stringify(tarefa))
}

