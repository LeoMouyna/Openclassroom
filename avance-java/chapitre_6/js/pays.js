// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

function supprChildNodes (node){
     while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
}

var paysElt = document.getElementById("pays");
paysElt.addEventListener("input", function (){
    var suggestionsElt = document.getElementById("suggestions");
    
    //Supprime les suggestions précédentes
    supprChildNodes(suggestionsElt);

    //Tri les suggestions encore bonnes
    for(var i =0; i< listePays.length; i++){
        var suggestion = listePays[i];
        if (suggestion.toLowerCase().indexOf(paysElt.value.toLowerCase()) !== -1){
            var suggestionElt = document.createElement("div");
            suggestionElt.id = "suggestion_"+i;
            suggestionElt.setAttribute("class", "suggestion");
            suggestionElt.textContent = suggestion;

            //Supprime toutes les suggestions et met à jour la valeur du champ input
            suggestionElt.addEventListener("click", function(e){
                paysElt.value = e.target.textContent;
                supprChildNodes(suggestionsElt);
            })

            suggestionsElt.appendChild(suggestionElt);
        }
    }
});