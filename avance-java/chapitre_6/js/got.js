// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

//Génère la liste des maisons posibles dans le menu déroulant
function createOptions (listeOptions){
    var maisonElt = document.getElementById("maison");
    listeOptions.forEach(function(option){
        var optionElt = document.createElement("option");
        optionElt.setAttribute("value", option.code);
        optionElt.textContent = option.nom;
        maisonElt.appendChild(optionElt);
    })
}

//Ajoute le personnage à la fin de la liste.
function addPersonnage(personnage){
    var persosElt = document.getElementById("persos");
    var persoElt = document.createElement("li");
    persoElt.textContent = personnage;
    persoElt.id = personnage;
    persosElt.appendChild(persoElt);
}

//Affiche les membres associés à la maison sélectionnée
function showPersonnages(maisons){
    var maisonElt = document.getElementById("maison");
    maisonElt.addEventListener("change", function(e){
        //On supprime les éléments existants
        var persosElt = document.getElementById("persos");
        while (persosElt.firstChild) {
            persosElt.removeChild(persosElt.firstChild);
        }
        //On ajoute les nouveaux noms
        var listePersonnages = getPersonnages(maisonElt.value);
        listePersonnages.forEach(addPersonnage);
    })
}

createOptions(maisons);
showPersonnages(maisons);