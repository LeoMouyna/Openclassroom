/**
 * Created by msi on 23/04/2017.
 */


//Partie Ajax
function generateList(ajaxResponse) {
    var langageListElt = document.getElementById("langages");
    var langages = ajaxResponse.split(";");
    console.log(langages);
    langages.forEach(function(langage){
        var langageElt = document.createElement("li");
        langageElt.textContent=langage;
        langageElt.id = langage;
        langageListElt.appendChild(langageElt);
    })
}
ajaxGet("http://localhost:8080/javascript-web-srv/data/langages.txt", generateList);

//Gestion des erreurs
/*var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8080/javascript-web-srv/data/langage.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);
*/

//Partie JSON

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost:8080/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});