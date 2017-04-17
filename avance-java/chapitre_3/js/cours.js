/**
 * Created by msi on 11/04/2017.
 */
// Modification du contenu HTML de la liste : ajout d'un langage

document.getElementById("langages").innerHTML += '<li id="c">C</li><li id="python">Python</li>';

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
document.querySelector("h1").id="debut";

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
titreElt.classList.add("langages");
console.log(titreElt);

var javascriptElt = document.createElement("li"); // Création d'un élément li
javascriptElt.id = "javascript"; // Définition de son identifiant
javascriptElt.textContent = "Javascript"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(javascriptElt); // Insertion du nouvel élément

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));//Autre manière de définir le contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'élément identifié par "php"
document.getElementById("langages").insertBefore(perlElt,
    document.getElementById("php"));

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin",
    '<li id="go">Go</li>');

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

var listLinkElt = document.createElement("a");
listLinkElt.setAttribute("href","https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation" );
listLinkElt.textContent = "liste";
var listElt = document.createElement("p");
listElt.id = "completList";
listElt.appendChild(document.createTextNode("Une "));
listElt.appendChild(listLinkElt);
listElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(listElt);
