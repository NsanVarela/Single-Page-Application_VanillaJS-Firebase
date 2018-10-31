/* Fonctions exportables pour alimenter la librairie MVC */

export function renderView(htmlFilename)
{

    fetch('./views/hello.html')
    .then(function(response) {
      return response.text(); // retourne la réponse http brut sous forme d'objet
    })
    .then(function(template) {
        document.querySelector('main').innerHTML=template;
    });

}