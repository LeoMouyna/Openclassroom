/**
 * Created by msi on 14/04/2017.
 */
// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dictionnaire = document.createElement("dl");
dictionnaire.id = "dictionaire";
for (var i = 0; i< mots.length; i++){
    var word = document.createElement("dt");
    var definition = document.createElement("dd");
    word.id = "mot_"+i;
    definition.id = "definition_"+i;
    var boldWord = word.appendChild(document.createElement("strong"));
    boldWord.textContent=mots[i].terme;
    definition.textContent = mots[i].definition;
    dictionnaire.appendChild(word);
    dictionnaire.appendChild(definition);
}
document.getElementById("contenu").appendChild(dictionnaire);