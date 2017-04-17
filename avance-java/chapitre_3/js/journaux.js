/**
 * Created by msi on 13/04/2017.
 */
// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"


var listeJournaux = document.createElement("ul");
listeJournaux.id = "listeJournaux";
for (i=0; i<journaux.length; i++){
    var journalElt = document.createElement("li");
    journalElt.id = i;
    var link = document.createElement("a");
    link.href = journaux[i];
    link.textContent = journaux[i];
    journalElt.appendChild(link);
    listeJournaux.appendChild(journalElt);
}
document.getElementById("contenu").appendChild(listeJournaux);
