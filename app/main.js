'use strict';

// Récupération de l'élément <form> dans le HTML
const form = document.getElementById('formSearch');

// Lorsqu'on valide le formulaire de recherche (événement "submit")...
form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    // Empêche l'envoi du formulaire au serveur : on fait nous même le traitement côté front
    event.preventDefault();

    /*
    	Faire une requête sur l'URL suivante :
        https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&q=danse
    */

    // Récupérer la valeur du champs <input type="search" id="searchText">
    const q = document.getElementById('searchText').value;

    let url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&q=${encodeURIComponent(q)}`
    // encodeURIComponent() convertit les caractères spéciaux en caractères d'URL (voir la doc)

    try {
        // Faire la requête vers le service OPENDATA PARIS
        const response = await fetch(url);
        const data = await response.json(); // transforme l'objet 'Response' au format JSON

        afficherEvenements(data.records);
    } catch (e) {
        gererErreur(e);
    }
}

function afficherEvenements(evenementsTbl) {
    let html = '';

    for (let index = 0; index < evenementsTbl.length; index++) {
        // l'API de OPENDATA stocke les informations de chaque événement dans une propriété ".fields", du coup on peut se créer un petit raccourci :
        let evenement = evenementsTbl[index].fields;

        // On concatène chaque morçeau de HTML avec les infos de CET événement dans le tour de boucle ...
        html += `<div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="${evenement.image_thumb}" alt="${evenement.title}">
                        <div class="caption">
                            <h3>${evenement.title}</h3>
                            <p>${evenement.description}</p>
                            <p>
                                <a href="${evenement.link}" class="btn btn-default" target="_blank">Voir</a>
                            </p>
                        </div>
                    </div>
                </div>`
    }

    // Fin de la boucle for, on injecte dans la <div id="searchResults"> le HTML se trouvant dans notre variable "html" pré-générée
    document.getElementById('searchResults').innerHTML = html;

} // Fin de la fonction "afficherEvenements"


function gererErreur(error) {
    // En cas d'erreur (réseau ou autre), on prévoit d'injecter dans la page HTML une <div> rouge avec le message, pour que l'utilisateur soit informé du problème :
    document.getElementById('searchResults').innerHTML = `<div class="alert alert-danger">
                                                            <strong>Une erreur est survenue :</strong><br>
                                                            ${error.message}
                                                          </div>`;
}