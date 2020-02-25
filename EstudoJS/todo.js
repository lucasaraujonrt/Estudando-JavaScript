var listElement = document.querySelector('#app ul'); // referenciando a tag
var inputElement = document.querySelector('#app input'); // referenciando a tag
var buttonElement = document.querySelector('#app button');// referenciando a tag

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // criando a array em JSON para salvar no arquivo do navegar, assim nao perdendo os dados


function renderTodos(){ // Faz a render da lista de todo
    listElement.innerHTML = ''; // nao deixa adicionar a array denovo
    
    
    for(todo of todos){
        var todoElement = document.createElement('li'); // criando um elemento de lista
        var todoText = document.createTextNode(todo); // adicionando um texto no todo
        
        var linkElement = document.createElement('a'); // criando uma tag "a"
        
        linkElement.setAttribute('href','#'); // colocando um atributo na tag "a"

        var pos = todos.indexOf(todo); // pegando a posicao na array list
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')'); // quando o usuario clicar no botao, exclui esse atribuito da lista

        var linkText = document.createTextNode('Excluir'); // criando um texto excluir

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodos(){ // Uma funcao que adiciona um novo todo
     var todoText = inputElement.value; // pegando o texto
 
     todos.push(todoText); // Adicionando na array
     inputElement.value = ''; // vazia
     renderTodos();
     saveToStorage();
}

buttonElement.onclick = addTodos; // quando clicar no botao adiciona um novo todo

function deleteTodo(pos){ // Uma funcao que exclui todo
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
    
}