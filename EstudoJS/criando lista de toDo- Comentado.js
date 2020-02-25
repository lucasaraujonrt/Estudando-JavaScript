var listElement = document.querySelector('#app ul'); // referenciando a tag
var inputElement = document.querySelector('#app input'); // referenciando a tag
var buttonElement = document.querySelector('#app button');// referenciando a tag

var todos = [ // criando uma arry de todo
    'Fazer cafe',
    'Estudar JS',
    'Tomar banho'
];

function renderTodos(){
    listElement.innerHTML = ''; // nao deixa adicionar a array denovo
    
    
    for(todo of todos){
        var todoElement = document.createElement('li'); // criando um elemento de lista
        var todoText = document.createTextNode(todo); // adicionando um texto no todo
        
        todoElement.appendChild(todoText); 
        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodos(){
     var todoText = inputElement.value; // pegando o texto
 
     todos.push(todoText); // Adicionando na array
     inputElement.value = ''; // vazia
     renderTodos();
}

buttonElement.onclick = addTodos; // quando clicar no botao adiciona um novo todo