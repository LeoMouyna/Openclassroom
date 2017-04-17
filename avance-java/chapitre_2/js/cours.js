/**
 * Created by msi on 24/03/2017.
 */

function realTypeof(obj) {
    return Object.prototype.toString.apply(obj)
}

var titresElts = document.getElementsByTagName("h2");
console.log(titresElts.length);
console.log(titresElts[2]);

var merveillesElts = document.getElementsByClassName("merveilles");
console.log(realTypeof(merveillesElts));
for (var i=0; i<merveillesElts.length; i++ ){
    console.log(merveillesElts[i]);
}

console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll(".merveilles > .existe").length); // Affiche 1

console.log(document.getElementById("contenu").innerHTML);
console.log(document.getElementById("nouvelles").textContent);

document.getElementById("nouvelles").textContent = "Lol";
console.log(document.getElementById("nouvelles").textContent);

if (document.querySelector("a").hasAttribute("href")) {
    console.log("Le premier lien possède l'attribut href");
} else {
    console.log("Le premier lien ne possède pas l'attribut href");
}

console.log(document.querySelector(".merveilles > .existe").classList);

if (document.getElementById("antiques").classList.contains("merveilles")) {
    console.log("L'élément identifié par antiques possède la classe merveilles");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveilles");
}