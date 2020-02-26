/*var xhr = new XMLHttpRequest(); // Funcionalidade do AJAX

xhr.open("GET", "http://api.github.com/users/lucasaraujonrt"); // Buscando informacoes no GitHub
xhr.send(null); // Paramentros enviados

xhr.onreadystatechange = function(){ 
    if(xhr.readyState === 4){ // Verifica se a resposta do servidor voltou 
        console.log(JSON.parse(xhr.responseText)); // Convertendo para JSON
    }
} */

// PROMISES

/*var mypromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest(); // Funcionalidade do AJAX
    xhr.open("GET", "http://api.github.com/users/lucasaraujonrt"); // Buscando informacoes no GitHub
    xhr.send(null); // Paramentros enviados

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Sucesso com a requisicao
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro");
        }
      }
    };
  });
};
*/
axios
  .get("https//api.github.com/users/lucasaraujonrt")
  .then(function(response) {
    console.log(response);
  }) // Chama o resolve com o JSON como parametro
  .catch(function(error) {
    console.log(error);
  }); // chama o reject com o erro
