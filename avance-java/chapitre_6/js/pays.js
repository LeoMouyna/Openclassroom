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

//Affiche les suggestions
function showSuggestions(listeSuggestions){
    var paysElt = document.getElementById("pays");
    var suggestionsElt = document.getElementById("suggestions");
    //Tri les suggestions encore bonnes
    for(var i =0; i< listeSuggestions.length; i++){
        var suggestion = listeSuggestions[i];
        if (suggestion.toLowerCase().indexOf(paysElt.value.toLowerCase()) !== -1){
            var suggestionElt = document.createElement("div");
            suggestionElt.id = "suggestion_"+i;
            suggestionElt.setAttribute("classe", "suggestion");
            suggestionElt.textContent = suggestion;
            suggestionsElt.appendChild(suggestionElt);
        }
    }
}

var paysElt = document.getElementById("pays");
paysElt.addEventListener("input", showSuggestions(listePays));