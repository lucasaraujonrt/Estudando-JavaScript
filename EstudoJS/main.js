var xhr = new XMLHttpRequest(); // Funcionalidade do AJAX

xhr.open("GET", "http://api.github.com/users/lucasaraujonrt"); // Buscando informacoes no GitHub
xhr.send(null); // Paramentros enviados

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // Verifica se a resposta do servidor voltou
    console.log(JSON.parse(xhr.responseText)); // Convertendo para JSON
  }
};
